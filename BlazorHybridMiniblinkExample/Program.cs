using Microsoft.Extensions.DependencyInjection;
using System;
using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.FileProviders;
using System.Reflection;
using Microsoft.AspNetCore.Components;
using System.Diagnostics;
using System.Text;
using Serilog;
using Serilog.Events;
using static BlazorHybridMiniblinkExample.MiniblinkNative;

namespace BlazorHybridMiniblinkExample;

class Program
{
    public static MiniblinkWebViewManager? m = null;

    public static Uri BaseUri = new Uri("https://localhost/");

    public static bool isStart = false;

    public static ILogger logger;

    public static IntPtr webWindow;

    public static IntPtr mainFrameId;

    static void Main()
    {
        Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Information()
                .MinimumLevel.Override("BlazorHybridMiniblinkExample", LogEventLevel.Debug)
                .Enrich.FromLogContext()
                .WriteTo.Debug()
                .CreateLogger();
        logger = Log.ForContext<Program>();

        MiniblinkNative.mbInit(IntPtr.Zero);

        webWindow = MiniblinkNative.mbCreateWebWindow(MiniblinkNative.mbWindowType.WKE_WINDOW_TYPE_POPUP, IntPtr.Zero, 0, 0, 800, 600);
        mainFrameId = MiniblinkNative.mbWebFrameGetMainFrame(webWindow);

        MiniblinkNative.mbSetWindowTitle(webWindow, "BlazorHybridMiniblinkExample".StrToUtf8Ptr());
        MiniblinkNative.mbSetCspCheckEnable(webWindow, false);

        MiniblinkNative.mbOnClose(webWindow, static (IntPtr webView, IntPtr param, IntPtr unuse) =>
        {
            Environment.Exit(0);
            return true;
        }, IntPtr.Zero);

        MiniblinkNative.mbOnJsQuery(webWindow, static (IntPtr webView, IntPtr param, IntPtr es, long queryId, int customMsg, IntPtr request) =>
        {
            if (customMsg != 0)
                return;
            var str = request.UTF8PtrToStr();
            Program.logger.Debug($"MiniblinkPostMessage: {str}");
            m!.MessageReceived(str!);
        }, IntPtr.Zero);

        MiniblinkNative.mbOnConsole(webWindow, static (IntPtr webView, IntPtr param, mbConsoleLevel level, IntPtr message, IntPtr sourceName, uint sourceLine, IntPtr stackTrace) =>
        {
            var messageStr = message.UTF8PtrToStr();
            var sourceNameStr = sourceName.UTF8PtrToStr();
            Program.logger.Debug($"wkeOnConsole({level})({sourceNameStr})({sourceLine}): {messageStr}");
        }, IntPtr.Zero);

        MiniblinkNative.mbOnLoadUrlBegin(webWindow, static (IntPtr webView, IntPtr param, IntPtr url, IntPtr job) =>
        {
            var urlStr = url.UTF8PtrToStr();
            Program.logger.Debug($"wkeOnLoadUrlBegin: {urlStr}");
            var ruri = new Uri(urlStr);
            if (ruri.Host != "localhost")
                return false;

            var allowFallbackOnHostPage = BaseUri.IsBaseOfPage(urlStr);
            var requestWrapper = new WebResourceRequest
            {
                RequestUri = urlStr,
                AllowFallbackOnHostPage = allowFallbackOnHostPage,
            };

            var bRet = m!.PlatformWebViewResourceRequested(requestWrapper, out var response);

            if (!bRet || response is null)
            {
                Program.logger.Debug($"wkeOnLoadUrlBegin(404): {urlStr}");
                return false;
            }

            var headerString = response.Headers[QueryStringHelper.ContentTypeKey];
            Program.logger.Debug($"wkeOnLoadUrlBegin_headerString: {headerString}");

            using var ms = new MemoryStream();
            response.Content.CopyTo(ms);

            MiniblinkNative.mbNetSetMIMEType(job, headerString.StrToUtf8Ptr());
            var requestData = ms.ToArray();
            MiniblinkNative.mbNetSetData(job, requestData, requestData.Length);

            Program.logger.Debug($"wkeOnLoadUrlBegin_wkeNetSetData: {requestData.Length}");
            return true;
        }, IntPtr.Zero);

        MiniblinkNative.mbMoveToCenter(webWindow);
        MiniblinkNative.mbShowWindow(webWindow, true);

        var services = new ServiceCollection();
        services.AddLogging(loggingBuilder => loggingBuilder.AddSerilog(dispose: true));

        services.AddBlazorWebView();

        services.AddSingleton<JSComponentConfigurationStore>();

        services.AddSingleton<TDispatcher>(provider => new TDispatcher());

        services.AddSingleton<IJSComponentConfiguration>(provider => new JsComponentConfigration(provider.GetRequiredService<JSComponentConfigurationStore>()));

        var sb = services.BuildServiceProvider();

        var appRootDir = AppContext.BaseDirectory;
        var hostPageFullPath = Path.GetFullPath(Path.Combine(appRootDir, "wwwroot/index.html"));
        var contentRootDirFullPath = Path.GetDirectoryName(hostPageFullPath)!;
        var hostPageRelativePath = Path.GetRelativePath(contentRootDirFullPath, hostPageFullPath);
        var b = new BlazorWebViewHandlerProvider();
        var f = b.CreateFileProvider(typeof(Routes).Assembly, contentRootDirFullPath);
        m = new MiniblinkWebViewManager(webWindow, sb, sb.GetRequiredService<TDispatcher>(), BaseUri, f, sb.GetRequiredService<JSComponentConfigurationStore>(), hostPageRelativePath);
        m.AddRootComponentAsync(typeof(Routes), "#app", ParameterView.Empty).Wait();

        Program.logger.Debug("Start...");
        m.Navigate("/");

        isStart = true;

        var t = new Thread(() =>
        {
            while (true)
            {
                MiniblinkNative.mbCallUiThreadAsync(static (IntPtr param1, IntPtr param2) =>
                {
                    if (isStart && m != null)
                    {
                        if (m.MessageQueue.TryDequeue(out var script))
                        {
                            MiniblinkNative.mbRunJs(m.WebView, mainFrameId, script.StrToUtf8Ptr(), false, static (IntPtr webView, IntPtr param, IntPtr es, long v) =>
                            {

                            }, IntPtr.Zero, IntPtr.Zero);
                        }
                    }
                }, IntPtr.Zero, IntPtr.Zero);
            }
        });
        t.Start();

        MiniblinkNative.mbRunMessageLoop();
    }
}
