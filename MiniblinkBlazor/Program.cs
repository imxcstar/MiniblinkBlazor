using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using MiniblinkBlazor.Components;
using System;
using System.Diagnostics;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using static MiniblinkBlazor.MiniblinkNative;

namespace MiniblinkBlazor;

class Program
{
    public static MiniblinkWebViewManager? m = null;

    public static Uri BaseUri = new Uri("https://localhost/");

    public static IntPtr webWindow;

    private static IntPtr DllImportResolver(string libraryName, Assembly assembly, DllImportSearchPath? searchPath)
    {
        if (libraryName == "miniblink")
        {
            if (RuntimeInformation.ProcessArchitecture == Architecture.X64 && OperatingSystem.IsWindows())
                return NativeLibrary.Load("runtimes\\win-x64\\native\\miniblink.dll", assembly, searchPath);
            else if (RuntimeInformation.ProcessArchitecture == Architecture.X86 && OperatingSystem.IsWindows())
                return NativeLibrary.Load("runtimes\\win-x86\\native\\miniblink.dll", assembly, searchPath);
            else if (RuntimeInformation.ProcessArchitecture == Architecture.X64 && OperatingSystem.IsLinux())
                return NativeLibrary.Load("runtimes/linux-x64/native/miniblink.so", assembly, searchPath);
            else if (RuntimeInformation.ProcessArchitecture == Architecture.Arm64 && OperatingSystem.IsLinux())
                return NativeLibrary.Load("runtimes/linux-arm64/native/miniblink.so", assembly, searchPath);
        }

        return IntPtr.Zero;
    }

    static void Main()
    {
        NativeLibrary.SetDllImportResolver(Assembly.GetExecutingAssembly(), DllImportResolver);

        MiniblinkNative.Init(IntPtr.Zero);

        webWindow = MiniblinkNative.CreateWebWindow(MiniblinkNative.mbWindowType.MB_WINDOW_TYPE_POPUP, IntPtr.Zero, 0, 0, 1024, 768);

        MiniblinkNative.SetWindowTitle(webWindow, "MiniblinkBlazor");
        MiniblinkNative.SetDebugConfig(webWindow, "ncHittestPaddingWidth", "2");

        MiniblinkNative.SetCspCheckEnable(webWindow, false);

        MiniblinkNative.OnClose(webWindow, static (IntPtr webView, IntPtr param, IntPtr unuse) =>
        {
            Environment.Exit(0);
            return true;
        }, IntPtr.Zero);

        MiniblinkNative.OnJsQuery(webWindow, static (IntPtr webView, IntPtr param, IntPtr es, long queryId, int customMsg, [MarshalAs(UnmanagedType.LPUTF8Str)] string request) =>
        {
            if (customMsg != 0)
                return;
            Debug.WriteLine($"MiniblinkPostMessage: {request}");
            m!.MessageReceived(request);
        }, IntPtr.Zero);

#if DEBUG
        MiniblinkNative.OnConsole(webWindow, static (IntPtr webView, IntPtr param, mbConsoleLevel level, [MarshalAs(UnmanagedType.LPUTF8Str)] string message, [MarshalAs(UnmanagedType.LPUTF8Str)] string sourceName, uint sourceLine, [MarshalAs(UnmanagedType.LPUTF8Str)] string stackTrace) =>
        {
            Console.WriteLine($"wkeOnConsole({level})({sourceName})({sourceLine}): {message}");
        }, IntPtr.Zero);
#endif

        MiniblinkNative.OnLoadUrlBegin(webWindow, static (IntPtr webView, IntPtr param, [MarshalAs(UnmanagedType.LPUTF8Str)] string url, IntPtr job) =>
        {
            Console.WriteLine($"wkeOnLoadUrlBegin: {url}");
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
                Console.WriteLine($"wkeOnLoadUrlBegin(404): {url}");
                return false;
            }

            var headerString = response.Headers[QueryStringHelper.ContentTypeKey];
            Console.WriteLine($"wkeOnLoadUrlBegin_headerString: {headerString}");

            using var ms = new MemoryStream();
            response.Content.CopyTo(ms);
            var requestData = ms.ToArray();
            //Console.WriteLine($"wkeOnLoadUrlBegin_content: {Encoding.UTF8.GetString(requestData)}");

            MiniblinkNative.NetSetMIMEType(job, headerString);
            IntPtr requestDataPtr = Marshal.AllocHGlobal(requestData.Length);
            try
            {
                Marshal.Copy(requestData, 0, requestDataPtr, requestData.Length);
                MiniblinkNative.NetSetData(job, requestDataPtr, requestData.Length);
            }
            finally
            {
                Marshal.FreeHGlobal(requestDataPtr);
            }

            Console.WriteLine($"wkeOnLoadUrlBegin_wkeNetSetData: {requestData.Length}");
            return true;
        }, IntPtr.Zero);

#if DEBUG
        MiniblinkNative.OnLoadingFinish(webWindow, static (IntPtr webView, IntPtr param, IntPtr frameId, [MarshalAs(UnmanagedType.LPUTF8Str)] string url, mbLoadingResult result, [MarshalAs(UnmanagedType.LPUTF8Str)] string failedReason) =>
        {
            Console.WriteLine($"OnLoadingFinish: {url}");
        }, IntPtr.Zero);

        MiniblinkNative.OnLoadUrlEnd(webWindow, static (IntPtr webView, IntPtr param, [MarshalAs(UnmanagedType.LPUTF8Str)] string url, IntPtr job, IntPtr buf, int len) =>
        {
            Console.WriteLine($"OnLoadUrlEnd: {url}");
        }, IntPtr.Zero);
#endif

        if (OperatingSystem.IsLinux())
        {
            MiniblinkNative.ShowWindow(webWindow, 1);

            var gtkWin = MiniblinkNative.GetPlatformWindowHandle(webWindow);
            Console.WriteLine($"gtkWin: {gtkWin}");
        }
        else
        {
            MiniblinkNative.MoveToCenter(webWindow);
            MiniblinkNative.ShowWindow(webWindow, 1);
        }

        var services = new ServiceCollection();

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

        Console.WriteLine("Start...");
        m.Navigate("/");

        MiniblinkNative.RunMessageLoop();
    }
}
