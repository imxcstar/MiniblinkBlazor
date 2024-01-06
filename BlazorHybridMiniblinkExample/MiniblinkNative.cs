using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace BlazorHybridMiniblinkExample
{
    public static partial class MiniblinkNative
    {
        private const string LIBRARY_NAME = "miniblink_4949_x32";

        [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
        public delegate bool WkeLoadUrlBeginCallback(IntPtr webView, IntPtr param, [MarshalAs(UnmanagedType.LPUTF8Str)] string url, IntPtr job);

        [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
        public delegate void wkeConsoleCallback(IntPtr webView, IntPtr param, wkeConsoleLevel level, IntPtr message, IntPtr sourceName, uint sourceLine, IntPtr stackTrace);

        [UnmanagedFunctionPointer(CallingConvention.Cdecl)]
        public delegate long wkeJsNativeFunction(IntPtr jsExecState, IntPtr param);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern void wkeInitializeEx(IntPtr settings);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern void wkeInitialize();

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern void wkeInit();

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr wkeCreateWebWindow(wkeWindowType type, IntPtr parent, int x, int y, int width, int height);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern void wkeShowWindow(IntPtr webWindow, bool show);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern void wkeLoadW(IntPtr webWindow, [MarshalAs(UnmanagedType.LPWStr)] string url);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern void wkeOnLoadUrlBegin(IntPtr webWindow, WkeLoadUrlBeginCallback callback, IntPtr callbackParam);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr wkeNetGetMIMEType(IntPtr job, IntPtr mime);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl, CharSet = CharSet.Ansi)]
        public static extern void wkeNetSetMIMEType(IntPtr job, string type);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl, CharSet = CharSet.Ansi)]
        public static extern void wkeNetSetData(IntPtr job, [MarshalAs(UnmanagedType.LPArray)] byte[] buf, int len);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern void wkeOnConsole(IntPtr webView, wkeConsoleCallback callback, IntPtr callbackParam);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr wkeGetStringW(IntPtr wkeString);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl, CharSet = CharSet.Unicode)]
        public static extern Int64 wkeRunJSW(IntPtr webView, string script);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl, CharSet = CharSet.Ansi)]
        public static extern void wkeJsBindFunction(string name, wkeJsNativeFunction fn, IntPtr param, uint argCount);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern long jsArg(IntPtr es, int argIdx);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr jsToTempStringW(IntPtr es, long v);

        [DllImport(LIBRARY_NAME, CallingConvention = CallingConvention.Cdecl)]
        public static extern void wkeResize(IntPtr webView, int w, int h);

        /// <summary>
        /// 控制台消息等级
        /// </summary>
        public enum wkeConsoleLevel
        {
            Debug = 4,
            Log = 1,
            Info = 5,
            Warning = 2,
            Error = 3,
            RevokedError = 6,
        }

        public enum wkeWindowType
        {
            WKE_WINDOW_TYPE_POPUP,
            WKE_WINDOW_TYPE_TRANSPARENT,
            WKE_WINDOW_TYPE_CONTROL
        }
    }
}
