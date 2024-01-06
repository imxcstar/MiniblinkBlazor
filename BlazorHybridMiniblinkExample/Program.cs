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
using static BlazorHybridMiniblinkExample.Win32Api;

namespace BlazorHybridMiniblinkExample;

class Program
{
    static IntPtr hWnd;

    static MiniblinkWebViewManager? m = null;

    static Uri BaseUri = new Uri("https://localhost/");

    static bool isStart = false;

    public static ILogger logger;

    static void Main()
    {
        Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Information()
                .MinimumLevel.Override("BlazorHybridMiniblinkExample", LogEventLevel.Debug)
                .Enrich.FromLogContext()
                .WriteTo.Debug()
                .CreateLogger();
        logger = Log.ForContext<Program>();

        IntPtr hInstance = Marshal.GetHINSTANCE(typeof(Program).Module);
        IntPtr hIcon = LoadIcon(hInstance, (IntPtr)32512); // IDI_APPLICATION

        WNDCLASSEX wcex = new WNDCLASSEX();
        wcex.cbSize = Marshal.SizeOf<WNDCLASSEX>();
        wcex.style = 0;
        wcex.lpfnWndProc = WndProcCallback;
        wcex.cbClsExtra = 0;
        wcex.cbWndExtra = 0;
        wcex.hInstance = Marshal.GetHINSTANCE(typeof(Program).Module);
        wcex.hIcon = hIcon;
        wcex.hCursor = IntPtr.Zero;
        wcex.hbrBackground = IntPtr.Zero;
        wcex.lpszMenuName = null;
        wcex.lpszClassName = "MyWindowClass";
        wcex.hIconSm = IntPtr.Zero;

        RegisterClassEx(ref wcex);

        // Create window
        hWnd = CreateWindowEx(
            0,
            "MyWindowClass",
            "BlazorHybridMiniblinkExample",
            WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU | WS_THICKFRAME | WS_MINIMIZEBOX | WS_MAXIMIZEBOX,
            100,
            100,
            1200,
            800,
            IntPtr.Zero,
            IntPtr.Zero,
            wcex.hInstance,
            IntPtr.Zero);

        // Show window
        ShowWindow(hWnd, SW_SHOWNORMAL);

        MiniblinkNative.wkeInitializeEx(IntPtr.Zero);

        MiniblinkNative.wkeJsBindFunction("MiniblinkPostMessage", static (IntPtr jsExecState, IntPtr param) =>
        {
            var message = MiniblinkNative.jsArg(jsExecState, 0);
            var messageStr = Marshal.PtrToStringAuto(MiniblinkNative.jsToTempStringW(jsExecState, message));
            Program.logger.Debug($"MiniblinkPostMessage: {messageStr}");
            m!.MessageReceived(messageStr!);
            return 0;
        }, IntPtr.Zero, 1);

        var wh = GetWindowSize(hWnd);
        var webWindow = MiniblinkNative.wkeCreateWebWindow(MiniblinkNative.wkeWindowType.WKE_WINDOW_TYPE_CONTROL, hWnd, 0, 0, wh.width, wh.height);

        MiniblinkNative.wkeOnConsole(webWindow, static (IntPtr webView, IntPtr param, wkeConsoleLevel level, IntPtr message, IntPtr sourceName, uint sourceLine, IntPtr stackTrace) =>
        {
            var messageStr = Marshal.PtrToStringAuto(MiniblinkNative.wkeGetStringW(message));
            var sourceNameStr = Marshal.PtrToStringAuto(MiniblinkNative.wkeGetStringW(sourceName));
            Program.logger.Debug($"wkeOnConsole({level})({sourceNameStr})({sourceLine}): {messageStr}");
        }, IntPtr.Zero);


        MiniblinkNative.wkeOnLoadUrlBegin(webWindow, static (IntPtr webView, IntPtr param, string url, IntPtr job) =>
        {
            Program.logger.Debug($"wkeOnLoadUrlBegin: {url}");
            var ruri = new Uri(url);
            if (ruri.Host != "localhost")
                return false;

            var allowFallbackOnHostPage = BaseUri.IsBaseOfPage(url);
            var requestWrapper = new WebResourceRequest
            {
                RequestUri = url,
                AllowFallbackOnHostPage = allowFallbackOnHostPage,
            };

            var bRet = m!.PlatformWebViewResourceRequested(requestWrapper, out var response);

            if (!bRet || response is null)
            {
                Program.logger.Debug($"wkeOnLoadUrlBegin(404): {url}");
                MiniblinkNative.wkeNetSetMIMEType(job, "text/html");
                var stringBytes = Encoding.UTF8.GetBytes("404");
                MiniblinkNative.wkeNetSetData(job, stringBytes, stringBytes.Length);
                return true;
            }

            var headerString = response.Headers[QueryStringHelper.ContentTypeKey];
            Program.logger.Debug($"wkeOnLoadUrlBegin_headerString: {headerString}");

            using var ms = new MemoryStream();
            response.Content.CopyTo(ms);

            MiniblinkNative.wkeNetSetMIMEType(job, headerString);
            var requestData = ms.ToArray();
            MiniblinkNative.wkeNetSetData(job, requestData, requestData.Length);

            Program.logger.Debug($"wkeOnLoadUrlBegin_wkeNetSetData: {requestData.Length}");
            return true;
        }, IntPtr.Zero);

        MiniblinkNative.wkeShowWindow(webWindow, true);


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

        MSG msg;
        while (GetMessage(out msg, IntPtr.Zero, 0, 0))
        {
            if (isStart && m != null)
            {
                if (m.MessageQueue.TryDequeue(out var script))
                {
                    MiniblinkNative.wkeRunJSW(m.WebView, script);
                }
            }
            TranslateMessage(ref msg);
            DispatchMessage(ref msg);
        }

        DestroyWindow(hWnd);
    }

    public static IntPtr WndProcCallback(IntPtr hWnd, uint msg, IntPtr wParam, IntPtr lParam)
    {
        switch (msg)
        {
            case WM_DESTROY:
            case WM_CLOSE:
                // Exit the application when window is closed
                PostQuitMessage(0);
                return IntPtr.Zero;
            case WM_SIZE:
                if (isStart && m != null)
                {
                    var wh = GetWindowSize(hWnd);
                    MiniblinkNative.wkeResize(m.WebView, wh.width, wh.height);
                }
                return DefWindowProc(hWnd, msg, wParam, lParam);
            default:
                return DefWindowProc(hWnd, msg, wParam, lParam);
        }
    }
}
