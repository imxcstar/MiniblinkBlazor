"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e26) { throw _e26; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e27) { didErr = true; err = _e27; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  "use strict";

  var e,
    t,
    n,
    r = {
      d: function d(e, t) {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n]
        });
      },
      o: function o(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
    };
  r.d({}, {
    e: function e() {
      return Ot;
    }
  }), function (e) {
    var t = [],
      n = "__jsObjectId",
      r = "__dotNetObject",
      o = "__byte[]",
      a = "__dotNetStream",
      i = "__jsStreamReferenceLength";
    var s, c;
    var l = /*#__PURE__*/function () {
      function l(e) {
        _classCallCheck(this, l);
        this._jsObject = e, this._cachedFunctions = new Map();
      }
      _createClass(l, [{
        key: "findFunction",
        value: function findFunction(e) {
          var t = this._cachedFunctions.get(e);
          if (t) return t;
          var n,
            r = this._jsObject;
          if (e.split(".").forEach(function (t) {
            if (!(t in r)) throw new Error("Could not find '".concat(e, "' ('").concat(t, "' was undefined)."));
            n = r, r = r[t];
          }), r instanceof Function) return r = r.bind(n), this._cachedFunctions.set(e, r), r;
          throw new Error("The value '".concat(e, "' is not a function."));
        }
      }, {
        key: "getWrappedObject",
        value: function getWrappedObject() {
          return this._jsObject;
        }
      }]);
      return l;
    }();
    var u = {
      0: new l(window)
    };
    u[0]._cachedFunctions.set("import", function (e) {
      return "string" == typeof e && e.startsWith("./") && (e = new URL(e.substr(2), document.baseURI).toString()), function (specifier) {
        return new Promise(function (r) {
          return r("".concat(specifier));
        }).then(function (s) {
          return _interopRequireWildcard(require(s));
        });
      }(e);
    });
    var d,
      h = 1;
    function f(e) {
      t.push(e);
    }
    function m(e) {
      if (e && "object" == _typeof(e)) {
        u[h] = new l(e);
        var _t2 = _defineProperty({}, n, h);
        return h++, _t2;
      }
      throw new Error("Cannot create a JSObjectReference from the value '".concat(e, "'."));
    }
    function p(e) {
      var t = -1;
      if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Blob) t = e.size;else {
        if (!(e.buffer instanceof ArrayBuffer)) throw new Error("Supplied value is not a typed array or blob.");
        if (void 0 === e.byteLength) throw new Error("Cannot create a JSStreamReference from the value '".concat(e, "' as it doesn't have a byteLength."));
        t = e.byteLength;
      }
      var r = _defineProperty({}, i, t);
      try {
        var _t4 = m(e);
        r[n] = _t4[n];
      } catch (t) {
        throw new Error("Cannot create a JSStreamReference from the value '".concat(e, "'."));
      }
      return r;
    }
    function b(e, n) {
      c = e;
      var r = n ? JSON.parse(n, function (e, n) {
        return t.reduce(function (t, n) {
          return n(e, t);
        }, n);
      }) : null;
      return c = void 0, r;
    }
    function v() {
      if (void 0 === s) throw new Error("No call dispatcher has been set.");
      if (null === s) throw new Error("There are multiple .NET runtimes present, so a default dispatcher could not be resolved. Use DotNetObject to invoke .NET instance methods.");
      return s;
    }
    e.attachDispatcher = function (e) {
      var t = new g(e);
      return void 0 === s ? s = t : s && (s = null), t;
    }, e.attachReviver = f, e.invokeMethod = function (e, t) {
      var _v;
      for (var _len = arguments.length, n = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        n[_key - 2] = arguments[_key];
      }
      return (_v = v()).invokeDotNetStaticMethod.apply(_v, [e, t].concat(n));
    }, e.invokeMethodAsync = function (e, t) {
      var _v2;
      for (var _len2 = arguments.length, n = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        n[_key2 - 2] = arguments[_key2];
      }
      return (_v2 = v()).invokeDotNetStaticMethodAsync.apply(_v2, [e, t].concat(n));
    }, e.createJSObjectReference = m, e.createJSStreamReference = p, e.disposeJSObjectReference = function (e) {
      var t = e && e[n];
      "number" == typeof t && E(t);
    }, function (e) {
      e[e.Default = 0] = "Default", e[e.JSObjectReference = 1] = "JSObjectReference", e[e.JSStreamReference = 2] = "JSStreamReference", e[e.JSVoidResult = 3] = "JSVoidResult";
    }(d = e.JSCallResultType || (e.JSCallResultType = {}));
    var g = /*#__PURE__*/function () {
      function g(e) {
        _classCallCheck(this, g);
        this._dotNetCallDispatcher = e, this._byteArraysToBeRevived = new Map(), this._pendingDotNetToJSStreams = new Map(), this._pendingAsyncCalls = {}, this._nextAsyncCallId = 1;
      }
      _createClass(g, [{
        key: "getDotNetCallDispatcher",
        value: function getDotNetCallDispatcher() {
          return this._dotNetCallDispatcher;
        }
      }, {
        key: "invokeJSFromDotNet",
        value: function invokeJSFromDotNet(e, t, n, r) {
          var o = b(this, t),
            a = D(w(e, r).apply(void 0, _toConsumableArray(o || [])), n);
          return null == a ? null : N(this, a);
        }
      }, {
        key: "beginInvokeJSFromDotNet",
        value: function beginInvokeJSFromDotNet(e, t, n, r, o) {
          var _this = this;
          var a = new Promise(function (e) {
            var r = b(_this, n);
            e(w(t, o).apply(void 0, _toConsumableArray(r || [])));
          });
          e && a.then(function (t) {
            return N(_this, [e, !0, D(t, r)]);
          }).then(function (t) {
            return _this._dotNetCallDispatcher.endInvokeJSFromDotNet(e, !0, t);
          }, function (t) {
            return _this._dotNetCallDispatcher.endInvokeJSFromDotNet(e, !1, JSON.stringify([e, !1, y(t)]));
          });
        }
      }, {
        key: "endInvokeDotNetFromJS",
        value: function endInvokeDotNetFromJS(e, t, n) {
          var r = t ? b(this, n) : new Error(n);
          this.completePendingCall(parseInt(e, 10), t, r);
        }
      }, {
        key: "invokeDotNetStaticMethod",
        value: function invokeDotNetStaticMethod(e, t) {
          for (var _len3 = arguments.length, n = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            n[_key3 - 2] = arguments[_key3];
          }
          return this.invokeDotNetMethod(e, t, null, n);
        }
      }, {
        key: "invokeDotNetStaticMethodAsync",
        value: function invokeDotNetStaticMethodAsync(e, t) {
          for (var _len4 = arguments.length, n = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
            n[_key4 - 2] = arguments[_key4];
          }
          return this.invokeDotNetMethodAsync(e, t, null, n);
        }
      }, {
        key: "invokeDotNetMethod",
        value: function invokeDotNetMethod(e, t, n, r) {
          if (this._dotNetCallDispatcher.invokeDotNetFromJS) {
            var _o = N(this, r),
              _a = this._dotNetCallDispatcher.invokeDotNetFromJS(e, t, n, _o);
            return _a ? b(this, _a) : null;
          }
          throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeDotNetMethodAsync instead.");
        }
      }, {
        key: "invokeDotNetMethodAsync",
        value: function invokeDotNetMethodAsync(e, t, n, r) {
          var _this2 = this;
          if (e && n) throw new Error("For instance method calls, assemblyName should be null. Received '".concat(e, "'."));
          var o = this._nextAsyncCallId++,
            a = new Promise(function (e, t) {
              _this2._pendingAsyncCalls[o] = {
                resolve: e,
                reject: t
              };
            });
          try {
            var _a2 = N(this, r);
            this._dotNetCallDispatcher.beginInvokeDotNetFromJS(o, e, t, n, _a2);
          } catch (e) {
            this.completePendingCall(o, !1, e);
          }
          return a;
        }
      }, {
        key: "receiveByteArray",
        value: function receiveByteArray(e, t) {
          this._byteArraysToBeRevived.set(e, t);
        }
      }, {
        key: "processByteArray",
        value: function processByteArray(e) {
          var t = this._byteArraysToBeRevived.get(e);
          return t ? (this._byteArraysToBeRevived["delete"](e), t) : null;
        }
      }, {
        key: "supplyDotNetStream",
        value: function supplyDotNetStream(e, t) {
          if (this._pendingDotNetToJSStreams.has(e)) {
            var _n = this._pendingDotNetToJSStreams.get(e);
            this._pendingDotNetToJSStreams["delete"](e), _n.resolve(t);
          } else {
            var _n2 = new C();
            _n2.resolve(t), this._pendingDotNetToJSStreams.set(e, _n2);
          }
        }
      }, {
        key: "getDotNetStreamPromise",
        value: function getDotNetStreamPromise(e) {
          var t;
          if (this._pendingDotNetToJSStreams.has(e)) t = this._pendingDotNetToJSStreams.get(e).streamPromise, this._pendingDotNetToJSStreams["delete"](e);else {
            var _n3 = new C();
            this._pendingDotNetToJSStreams.set(e, _n3), t = _n3.streamPromise;
          }
          return t;
        }
      }, {
        key: "completePendingCall",
        value: function completePendingCall(e, t, n) {
          if (!this._pendingAsyncCalls.hasOwnProperty(e)) throw new Error("There is no pending async call with ID ".concat(e, "."));
          var r = this._pendingAsyncCalls[e];
          delete this._pendingAsyncCalls[e], t ? r.resolve(n) : r.reject(n);
        }
      }]);
      return g;
    }();
    function y(e) {
      return e instanceof Error ? "".concat(e.message, "\n").concat(e.stack) : e ? e.toString() : "null";
    }
    function w(e, t) {
      var n = u[t];
      if (n) return n.findFunction(e);
      throw new Error("JS object instance with ID ".concat(t, " does not exist (has it been disposed?)."));
    }
    function E(e) {
      delete u[e];
    }
    e.findJSFunction = w, e.disposeJSObjectReferenceById = E;
    var S = /*#__PURE__*/function () {
      function S(e, t) {
        _classCallCheck(this, S);
        this._id = e, this._callDispatcher = t;
      }
      _createClass(S, [{
        key: "invokeMethod",
        value: function invokeMethod(e) {
          for (var _len5 = arguments.length, t = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            t[_key5 - 1] = arguments[_key5];
          }
          return this._callDispatcher.invokeDotNetMethod(null, e, this._id, t);
        }
      }, {
        key: "invokeMethodAsync",
        value: function invokeMethodAsync(e) {
          for (var _len6 = arguments.length, t = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            t[_key6 - 1] = arguments[_key6];
          }
          return this._callDispatcher.invokeDotNetMethodAsync(null, e, this._id, t);
        }
      }, {
        key: "dispose",
        value: function dispose() {
          this._callDispatcher.invokeDotNetMethodAsync(null, "__Dispose", this._id, null)["catch"](function (e) {
            return console.error(e);
          });
        }
      }, {
        key: "serializeAsArg",
        value: function serializeAsArg() {
          return _defineProperty({}, r, this._id);
        }
      }]);
      return S;
    }();
    e.DotNetObject = S, f(function (e, t) {
      if (t && "object" == _typeof(t)) {
        if (t.hasOwnProperty(r)) return new S(t[r], c);
        if (t.hasOwnProperty(n)) {
          var _e2 = t[n],
            _r2 = u[_e2];
          if (_r2) return _r2.getWrappedObject();
          throw new Error("JS object instance with Id '".concat(_e2, "' does not exist. It may have been disposed."));
        }
        if (t.hasOwnProperty(o)) {
          var _e3 = t[o],
            _n4 = c.processByteArray(_e3);
          if (void 0 === _n4) throw new Error("Byte array index '".concat(_e3, "' does not exist."));
          return _n4;
        }
        if (t.hasOwnProperty(a)) {
          var _e4 = t[a],
            _n5 = c.getDotNetStreamPromise(_e4);
          return new I(_n5);
        }
      }
      return t;
    });
    var I = /*#__PURE__*/function () {
      function I(e) {
        _classCallCheck(this, I);
        this._streamPromise = e;
      }
      _createClass(I, [{
        key: "stream",
        value: function stream() {
          return this._streamPromise;
        }
      }, {
        key: "arrayBuffer",
        value: function () {
          var _arrayBuffer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = Response;
                  _context.next = 3;
                  return this.stream();
                case 3:
                  _context.t1 = _context.sent;
                  return _context.abrupt("return", new _context.t0(_context.t1).arrayBuffer());
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function arrayBuffer() {
            return _arrayBuffer.apply(this, arguments);
          }
          return arrayBuffer;
        }()
      }]);
      return I;
    }();
    var C = /*#__PURE__*/_createClass(function C() {
      var _this3 = this;
      _classCallCheck(this, C);
      this.streamPromise = new Promise(function (e, t) {
        _this3.resolve = e, _this3.reject = t;
      });
    });
    function D(e, t) {
      switch (t) {
        case d.Default:
          return e;
        case d.JSObjectReference:
          return m(e);
        case d.JSStreamReference:
          return p(e);
        case d.JSVoidResult:
          return null;
        default:
          throw new Error("Invalid JS call result type '".concat(t, "'."));
      }
    }
    var A = 0;
    function N(e, t) {
      A = 0, c = e;
      var n = JSON.stringify(t, k);
      return c = void 0, n;
    }
    function k(e, t) {
      if (t instanceof S) return t.serializeAsArg();
      if (t instanceof Uint8Array) {
        c.getDotNetCallDispatcher().sendByteArray(A, t);
        var _e5 = _defineProperty({}, o, A);
        return A++, _e5;
      }
      return t;
    }
  }(e || (e = {})), function (e) {
    e[e.prependFrame = 1] = "prependFrame", e[e.removeFrame = 2] = "removeFrame", e[e.setAttribute = 3] = "setAttribute", e[e.removeAttribute = 4] = "removeAttribute", e[e.updateText = 5] = "updateText", e[e.stepIn = 6] = "stepIn", e[e.stepOut = 7] = "stepOut", e[e.updateMarkup = 8] = "updateMarkup", e[e.permutationListEntry = 9] = "permutationListEntry", e[e.permutationListEnd = 10] = "permutationListEnd";
  }(t || (t = {})), function (e) {
    e[e.element = 1] = "element", e[e.text = 2] = "text", e[e.attribute = 3] = "attribute", e[e.component = 4] = "component", e[e.region = 5] = "region", e[e.elementReferenceCapture = 6] = "elementReferenceCapture", e[e.markup = 8] = "markup", e[e.namedEvent = 10] = "namedEvent";
  }(n || (n = {}));
  var o = /*#__PURE__*/function () {
    function o(e, t) {
      _classCallCheck(this, o);
      this.componentId = e, this.fieldValue = t;
    }
    _createClass(o, null, [{
      key: "fromEvent",
      value: function fromEvent(e, t) {
        var n = t.target;
        if (n instanceof Element) {
          var _t5 = function (e) {
            return e instanceof HTMLInputElement ? e.type && "checkbox" === e.type.toLowerCase() ? {
              value: e.checked
            } : {
              value: e.value
            } : e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement ? {
              value: e.value
            } : null;
          }(n);
          if (_t5) return new o(e, _t5.value);
        }
        return null;
      }
    }]);
    return o;
  }();
  var a = new Map(),
    i = new Map(),
    s = [];
  function c(e) {
    return a.get(e);
  }
  function l(e) {
    var t = a.get(e);
    return (null == t ? void 0 : t.browserEventName) || e;
  }
  function u(e, t) {
    e.forEach(function (e) {
      return a.set(e, t);
    });
  }
  function d(e) {
    var t = [];
    for (var _n6 = 0; _n6 < e.length; _n6++) {
      var _r3 = e[_n6];
      t.push({
        identifier: _r3.identifier,
        clientX: _r3.clientX,
        clientY: _r3.clientY,
        screenX: _r3.screenX,
        screenY: _r3.screenY,
        pageX: _r3.pageX,
        pageY: _r3.pageY
      });
    }
    return t;
  }
  function h(e) {
    return {
      detail: e.detail,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
      offsetX: e.offsetX,
      offsetY: e.offsetY,
      pageX: e.pageX,
      pageY: e.pageY,
      movementX: e.movementX,
      movementY: e.movementY,
      button: e.button,
      buttons: e.buttons,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      metaKey: e.metaKey,
      type: e.type
    };
  }
  u(["input", "change"], {
    createEventArgs: function createEventArgs(e) {
      var t = e.target;
      if (function (e) {
        return -1 !== f.indexOf(e.getAttribute("type"));
      }(t)) {
        var _e7 = function (e) {
          var t = e.value,
            n = e.type;
          switch (n) {
            case "date":
            case "month":
            case "week":
              return t;
            case "datetime-local":
              return 16 === t.length ? t + ":00" : t;
            case "time":
              return 5 === t.length ? t + ":00" : t;
          }
          throw new Error("Invalid element type '".concat(n, "'."));
        }(t);
        return {
          value: _e7
        };
      }
      if (function (e) {
        return e instanceof HTMLSelectElement && "select-multiple" === e.type;
      }(t)) {
        var _e8 = t;
        return {
          value: Array.from(_e8.options).filter(function (e) {
            return e.selected;
          }).map(function (e) {
            return e.value;
          })
        };
      }
      {
        var _e9 = function (e) {
          return !!e && "INPUT" === e.tagName && "checkbox" === e.getAttribute("type");
        }(t);
        return {
          value: _e9 ? !!t.checked : t.value
        };
      }
    }
  }), u(["copy", "cut", "paste"], {
    createEventArgs: function createEventArgs(e) {
      return {
        type: e.type
      };
    }
  }), u(["drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop"], {
    createEventArgs: function createEventArgs(e) {
      return _objectSpread(_objectSpread({}, h(t = e)), {}, {
        dataTransfer: t.dataTransfer ? {
          dropEffect: t.dataTransfer.dropEffect,
          effectAllowed: t.dataTransfer.effectAllowed,
          files: Array.from(t.dataTransfer.files).map(function (e) {
            return e.name;
          }),
          items: Array.from(t.dataTransfer.items).map(function (e) {
            return {
              kind: e.kind,
              type: e.type
            };
          }),
          types: t.dataTransfer.types
        } : null
      });
      var t;
    }
  }), u(["focus", "blur", "focusin", "focusout"], {
    createEventArgs: function createEventArgs(e) {
      return {
        type: e.type
      };
    }
  }), u(["keydown", "keyup", "keypress"], {
    createEventArgs: function createEventArgs(e) {
      return {
        key: (t = e).key,
        code: t.code,
        location: t.location,
        repeat: t.repeat,
        ctrlKey: t.ctrlKey,
        shiftKey: t.shiftKey,
        altKey: t.altKey,
        metaKey: t.metaKey,
        type: t.type
      };
      var t;
    }
  }), u(["contextmenu", "click", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "mouseleave", "mouseenter", "dblclick"], {
    createEventArgs: function createEventArgs(e) {
      return h(e);
    }
  }), u(["error"], {
    createEventArgs: function createEventArgs(e) {
      return {
        message: (t = e).message,
        filename: t.filename,
        lineno: t.lineno,
        colno: t.colno,
        type: t.type
      };
      var t;
    }
  }), u(["loadstart", "timeout", "abort", "load", "loadend", "progress"], {
    createEventArgs: function createEventArgs(e) {
      return {
        lengthComputable: (t = e).lengthComputable,
        loaded: t.loaded,
        total: t.total,
        type: t.type
      };
      var t;
    }
  }), u(["touchcancel", "touchend", "touchmove", "touchenter", "touchleave", "touchstart"], {
    createEventArgs: function createEventArgs(e) {
      return {
        detail: (t = e).detail,
        touches: d(t.touches),
        targetTouches: d(t.targetTouches),
        changedTouches: d(t.changedTouches),
        ctrlKey: t.ctrlKey,
        shiftKey: t.shiftKey,
        altKey: t.altKey,
        metaKey: t.metaKey,
        type: t.type
      };
      var t;
    }
  }), u(["gotpointercapture", "lostpointercapture", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointermove", "pointerout", "pointerover", "pointerup"], {
    createEventArgs: function createEventArgs(e) {
      return _objectSpread(_objectSpread({}, h(t = e)), {}, {
        pointerId: t.pointerId,
        width: t.width,
        height: t.height,
        pressure: t.pressure,
        tiltX: t.tiltX,
        tiltY: t.tiltY,
        pointerType: t.pointerType,
        isPrimary: t.isPrimary
      });
      var t;
    }
  }), u(["wheel", "mousewheel"], {
    createEventArgs: function createEventArgs(e) {
      return _objectSpread(_objectSpread({}, h(t = e)), {}, {
        deltaX: t.deltaX,
        deltaY: t.deltaY,
        deltaZ: t.deltaZ,
        deltaMode: t.deltaMode
      });
      var t;
    }
  }), u(["cancel", "close", "toggle"], {
    createEventArgs: function createEventArgs() {
      return {};
    }
  });
  var f = ["date", "datetime-local", "month", "time", "week"],
    m = new Map();
  var p,
    b,
    v = 0;
  var g = {
    add: function add(e, t, n) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var r, o, a;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (n) {
                _context2.next = 2;
                break;
              }
              throw new Error("initialParameters must be an object, even if empty.");
            case 2:
              r = "__bl-dynamic-root:" + (++v).toString();
              m.set(r, e);
              _context2.next = 6;
              return E().invokeMethodAsync("AddRootComponent", t, r);
            case 6:
              o = _context2.sent;
              a = new w(o, b[t]);
              _context2.next = 10;
              return a.setParameters(n);
            case 10:
              return _context2.abrupt("return", a);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  };
  var y = /*#__PURE__*/function () {
    function y() {
      _classCallCheck(this, y);
    }
    _createClass(y, [{
      key: "invoke",
      value: function invoke(e) {
        return this._callback(e);
      }
    }, {
      key: "setCallback",
      value: function setCallback(t) {
        this._selfJSObjectReference || (this._selfJSObjectReference = e.createJSObjectReference(this)), this._callback = t;
      }
    }, {
      key: "getJSObjectReference",
      value: function getJSObjectReference() {
        return this._selfJSObjectReference;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._selfJSObjectReference && e.disposeJSObjectReference(this._selfJSObjectReference);
      }
    }]);
    return y;
  }();
  var w = /*#__PURE__*/function () {
    function w(e, t) {
      _classCallCheck(this, w);
      this._jsEventCallbackWrappers = new Map(), this._componentId = e;
      var _iterator = _createForOfIteratorHelper(t),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e10 = _step.value;
          "eventcallback" === _e10.type && this._jsEventCallbackWrappers.set(_e10.name.toLowerCase(), new y());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    _createClass(w, [{
      key: "setParameters",
      value: function setParameters(e) {
        var t = {},
          n = Object.entries(e || {}),
          r = n.length;
        for (var _i = 0, _n7 = n; _i < _n7.length; _i++) {
          var _n7$_i = _slicedToArray(_n7[_i], 2),
            _e11 = _n7$_i[0],
            _r4 = _n7$_i[1];
          var _n8 = this._jsEventCallbackWrappers.get(_e11.toLowerCase());
          _n8 && _r4 ? (_n8.setCallback(_r4), t[_e11] = _n8.getJSObjectReference()) : t[_e11] = _r4;
        }
        return E().invokeMethodAsync("SetRootComponentParameters", this._componentId, r, t);
      }
    }, {
      key: "dispose",
      value: function () {
        var _dispose = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var _iterator2, _step2, _e12;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(null !== this._componentId)) {
                  _context3.next = 6;
                  break;
                }
                _context3.next = 3;
                return E().invokeMethodAsync("RemoveRootComponent", this._componentId);
              case 3:
                this._componentId = null;
                _iterator2 = _createForOfIteratorHelper(this._jsEventCallbackWrappers.values());
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    _e12 = _step2.value;
                    _e12.dispose();
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function dispose() {
          return _dispose.apply(this, arguments);
        }
        return dispose;
      }()
    }]);
    return w;
  }();
  function E() {
    if (!p) throw new Error("Dynamic root components have not been enabled in this application.");
    return p;
  }
  var S = new Map(),
    I = [],
    C = new Map();
  function D(e, t, n) {
    return N(e, t.eventHandlerId, function () {
      return A(e).invokeMethodAsync("DispatchEventAsync", t, n);
    });
  }
  function A(e) {
    var t = S.get(e);
    if (!t) throw new Error("No interop methods are registered for renderer ".concat(e));
    return t;
  }
  var N = function N(e, t, n) {
    return n();
  };
  var k = x(["abort", "blur", "cancel", "canplay", "canplaythrough", "change", "close", "cuechange", "durationchange", "emptied", "ended", "error", "focus", "load", "loadeddata", "loadedmetadata", "loadend", "loadstart", "mouseenter", "mouseleave", "pointerenter", "pointerleave", "pause", "play", "playing", "progress", "ratechange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeupdate", "toggle", "unload", "volumechange", "waiting", "DOMNodeInsertedIntoDocument", "DOMNodeRemovedFromDocument"]),
    R = {
      submit: !0
    },
    T = x(["click", "dblclick", "mousedown", "mousemove", "mouseup"]);
  var _ = /*#__PURE__*/function () {
    function _(e) {
      _classCallCheck(this, _);
      this.browserRendererId = e, this.afterClickCallbacks = [];
      var t = ++_.nextEventDelegatorId;
      this.eventsCollectionKey = "_blazorEvents_".concat(t), this.eventInfoStore = new O(this.onGlobalEvent.bind(this));
    }
    _createClass(_, [{
      key: "setListener",
      value: function setListener(e, t, n, r) {
        var o = this.getEventHandlerInfosForElement(e, !0),
          a = o.getHandler(t);
        if (a) this.eventInfoStore.update(a.eventHandlerId, n);else {
          var _a3 = {
            element: e,
            eventName: t,
            eventHandlerId: n,
            renderingComponentId: r
          };
          this.eventInfoStore.add(_a3), o.setHandler(t, _a3);
        }
      }
    }, {
      key: "getHandler",
      value: function getHandler(e) {
        return this.eventInfoStore.get(e);
      }
    }, {
      key: "removeListener",
      value: function removeListener(e) {
        var t = this.eventInfoStore.remove(e);
        if (t) {
          var _e13 = t.element,
            _n9 = this.getEventHandlerInfosForElement(_e13, !1);
          _n9 && _n9.removeHandler(t.eventName);
        }
      }
    }, {
      key: "notifyAfterClick",
      value: function notifyAfterClick(e) {
        this.afterClickCallbacks.push(e), this.eventInfoStore.addGlobalListener("click");
      }
    }, {
      key: "setStopPropagation",
      value: function setStopPropagation(e, t, n) {
        this.getEventHandlerInfosForElement(e, !0).stopPropagation(t, n);
      }
    }, {
      key: "setPreventDefault",
      value: function setPreventDefault(e, t, n) {
        this.getEventHandlerInfosForElement(e, !0).preventDefault(t, n);
      }
    }, {
      key: "onGlobalEvent",
      value: function onGlobalEvent(e) {
        var _this4 = this;
        if (!(e.target instanceof Element)) return;
        this.dispatchGlobalEventToAllElements(e.type, e);
        var t = (n = e.type, i.get(n));
        var n;
        t && t.forEach(function (t) {
          return _this4.dispatchGlobalEventToAllElements(t, e);
        }), "click" === e.type && this.afterClickCallbacks.forEach(function (t) {
          return t(e);
        });
      }
    }, {
      key: "dispatchGlobalEventToAllElements",
      value: function dispatchGlobalEventToAllElements(e, t) {
        var n = t.composedPath();
        var r = n.shift(),
          a = null,
          i = !1;
        var s = Object.prototype.hasOwnProperty.call(k, e);
        var l = !1;
        for (; r;) {
          var _h = r,
            _f = this.getEventHandlerInfosForElement(_h, !1);
          if (_f) {
            var _n10 = _f.getHandler(e);
            if (_n10 && (u = _h, d = t.type, !((u instanceof HTMLButtonElement || u instanceof HTMLInputElement || u instanceof HTMLTextAreaElement || u instanceof HTMLSelectElement) && Object.prototype.hasOwnProperty.call(T, d) && u.disabled))) {
              if (!i) {
                var _n11 = c(e);
                a = (null == _n11 ? void 0 : _n11.createEventArgs) ? _n11.createEventArgs(t) : {}, i = !0;
              }
              Object.prototype.hasOwnProperty.call(R, t.type) && t.preventDefault(), D(this.browserRendererId, {
                eventHandlerId: _n10.eventHandlerId,
                eventName: e,
                eventFieldInfo: o.fromEvent(_n10.renderingComponentId, t)
              }, a);
            }
            _f.stopPropagation(e) && (l = !0), _f.preventDefault(e) && t.preventDefault();
          }
          r = s || l ? void 0 : n.shift();
        }
        var u, d;
      }
    }, {
      key: "getEventHandlerInfosForElement",
      value: function getEventHandlerInfosForElement(e, t) {
        return Object.prototype.hasOwnProperty.call(e, this.eventsCollectionKey) ? e[this.eventsCollectionKey] : t ? e[this.eventsCollectionKey] = new L() : null;
      }
    }]);
    return _;
  }();
  _.nextEventDelegatorId = 0;
  var O = /*#__PURE__*/function () {
    function O(e) {
      _classCallCheck(this, O);
      this.globalListener = e, this.infosByEventHandlerId = {}, this.countByEventName = {}, s.push(this.handleEventNameAliasAdded.bind(this));
    }
    _createClass(O, [{
      key: "add",
      value: function add(e) {
        if (this.infosByEventHandlerId[e.eventHandlerId]) throw new Error("Event ".concat(e.eventHandlerId, " is already tracked"));
        this.infosByEventHandlerId[e.eventHandlerId] = e, this.addGlobalListener(e.eventName);
      }
    }, {
      key: "get",
      value: function get(e) {
        return this.infosByEventHandlerId[e];
      }
    }, {
      key: "addGlobalListener",
      value: function addGlobalListener(e) {
        if (e = l(e), Object.prototype.hasOwnProperty.call(this.countByEventName, e)) this.countByEventName[e]++;else {
          this.countByEventName[e] = 1;
          var _t6 = Object.prototype.hasOwnProperty.call(k, e);
          document.addEventListener(e, this.globalListener, _t6);
        }
      }
    }, {
      key: "update",
      value: function update(e, t) {
        if (Object.prototype.hasOwnProperty.call(this.infosByEventHandlerId, t)) throw new Error("Event ".concat(t, " is already tracked"));
        var n = this.infosByEventHandlerId[e];
        delete this.infosByEventHandlerId[e], n.eventHandlerId = t, this.infosByEventHandlerId[t] = n;
      }
    }, {
      key: "remove",
      value: function remove(e) {
        var t = this.infosByEventHandlerId[e];
        if (t) {
          delete this.infosByEventHandlerId[e];
          var _n12 = l(t.eventName);
          0 == --this.countByEventName[_n12] && (delete this.countByEventName[_n12], document.removeEventListener(_n12, this.globalListener));
        }
        return t;
      }
    }, {
      key: "handleEventNameAliasAdded",
      value: function handleEventNameAliasAdded(e, t) {
        if (Object.prototype.hasOwnProperty.call(this.countByEventName, e)) {
          var _n13 = this.countByEventName[e];
          delete this.countByEventName[e], document.removeEventListener(e, this.globalListener), this.addGlobalListener(t), this.countByEventName[t] += _n13 - 1;
        }
      }
    }]);
    return O;
  }();
  var L = /*#__PURE__*/function () {
    function L() {
      _classCallCheck(this, L);
      this.handlers = {}, this.preventDefaultFlags = null, this.stopPropagationFlags = null;
    }
    _createClass(L, [{
      key: "getHandler",
      value: function getHandler(e) {
        return Object.prototype.hasOwnProperty.call(this.handlers, e) ? this.handlers[e] : null;
      }
    }, {
      key: "setHandler",
      value: function setHandler(e, t) {
        this.handlers[e] = t;
      }
    }, {
      key: "removeHandler",
      value: function removeHandler(e) {
        delete this.handlers[e];
      }
    }, {
      key: "preventDefault",
      value: function preventDefault(e, t) {
        return void 0 !== t && (this.preventDefaultFlags = this.preventDefaultFlags || {}, this.preventDefaultFlags[e] = t), !!this.preventDefaultFlags && this.preventDefaultFlags[e];
      }
    }, {
      key: "stopPropagation",
      value: function stopPropagation(e, t) {
        return void 0 !== t && (this.stopPropagationFlags = this.stopPropagationFlags || {}, this.stopPropagationFlags[e] = t), !!this.stopPropagationFlags && this.stopPropagationFlags[e];
      }
    }]);
    return L;
  }();
  function x(e) {
    var t = {};
    return e.forEach(function (e) {
      t[e] = !0;
    }), t;
  }
  var F = Symbol(),
    M = Symbol();
  function P(e, t) {
    if (F in e) return e;
    var n = [];
    if (e.childNodes.length > 0) {
      if (!t) throw new Error("New logical elements must start empty, or allowExistingContents must be true");
      e.childNodes.forEach(function (t) {
        var r = P(t, !0);
        r[M] = e, n.push(r);
      });
    }
    return e[F] = n, e;
  }
  function B(e) {
    var t = W(e);
    for (; t.length;) J(e, 0);
  }
  function j(e, t) {
    var n = document.createComment("!");
    return H(n, e, t), n;
  }
  function H(e, t, n) {
    var r = e;
    var o = e;
    if (F in e) {
      var _t7 = G(r);
      if (_t7 !== e) {
        var _n14 = new Range();
        _n14.setStartBefore(e), _n14.setEndAfter(_t7), o = _n14.extractContents();
      }
    }
    var a = U(r);
    if (a) {
      var _e14 = W(a),
        _t8 = Array.prototype.indexOf.call(_e14, r);
      _e14.splice(_t8, 1), delete r[M];
    }
    var i = W(t);
    if (n < i.length) {
      var _e15 = i[n];
      _e15.parentNode.insertBefore(o, _e15), i.splice(n, 0, r);
    } else Y(o, t), i.push(r);
    r[M] = t, F in r || (r[F] = []);
  }
  function J(e, t) {
    var n = W(e).splice(t, 1)[0];
    if (n instanceof Comment) {
      var _e16 = W(n);
      if (_e16) for (; _e16.length > 0;) J(n, 0);
    }
    var r = n;
    r.parentNode.removeChild(r);
  }
  function U(e) {
    return e[M] || null;
  }
  function z(e, t) {
    return W(e)[t];
  }
  function $(e) {
    var t = X(e);
    return "http://www.w3.org/2000/svg" === t.namespaceURI && "foreignObject" !== t.tagName;
  }
  function W(e) {
    return e[F];
  }
  function K(e) {
    var t = W(U(e));
    return t[Array.prototype.indexOf.call(t, e) + 1] || null;
  }
  function V(e, t) {
    var n = W(e);
    t.forEach(function (e) {
      e.moveRangeStart = n[e.fromSiblingIndex], e.moveRangeEnd = G(e.moveRangeStart);
    }), t.forEach(function (t) {
      var r = document.createComment("marker");
      t.moveToBeforeMarker = r;
      var o = n[t.toSiblingIndex + 1];
      o ? o.parentNode.insertBefore(r, o) : Y(r, e);
    }), t.forEach(function (e) {
      var t = e.moveToBeforeMarker,
        n = t.parentNode,
        r = e.moveRangeStart,
        o = e.moveRangeEnd;
      var a = r;
      for (; a;) {
        var _e17 = a.nextSibling;
        if (n.insertBefore(a, t), a === o) break;
        a = _e17;
      }
      n.removeChild(t);
    }), t.forEach(function (e) {
      n[e.toSiblingIndex] = e.moveRangeStart;
    });
  }
  function X(e) {
    if (e instanceof Element || e instanceof DocumentFragment) return e;
    if (e instanceof Comment) return e.parentNode;
    throw new Error("Not a valid logical element");
  }
  function Y(e, t) {
    if (t instanceof Element || t instanceof DocumentFragment) t.appendChild(e);else {
      if (!(t instanceof Comment)) throw new Error("Cannot append node because the parent is not a valid logical element. Parent: ".concat(t));
      {
        var _n15 = K(t);
        _n15 ? _n15.parentNode.insertBefore(e, _n15) : Y(e, U(t));
      }
    }
  }
  function G(e) {
    if (e instanceof Element || e instanceof DocumentFragment) return e;
    var t = K(e);
    if (t) return t.previousSibling;
    {
      var _t9 = U(e);
      return _t9 instanceof Element || _t9 instanceof DocumentFragment ? _t9.lastChild : G(_t9);
    }
  }
  function q(e) {
    return "_bl_".concat(e);
  }
  Symbol();
  var Z = "__internalId";
  e.attachReviver(function (e, t) {
    return t && "object" == _typeof(t) && Object.prototype.hasOwnProperty.call(t, Z) && "string" == typeof t[Z] ? function (e) {
      var t = "[".concat(q(e), "]");
      return document.querySelector(t);
    }(t[Z]) : t;
  });
  var Q = "_blazorDeferredValue";
  function ee(e) {
    return "select-multiple" === e.type;
  }
  function te(e, t) {
    e.value = t || "";
  }
  function ne(e, t) {
    e instanceof HTMLSelectElement ? ee(e) ? function (e, t) {
      t || (t = []);
      for (var _n16 = 0; _n16 < e.options.length; _n16++) e.options[_n16].selected = -1 !== t.indexOf(e.options[_n16].value);
    }(e, t) : te(e, t) : e.value = t;
  }
  function re(e) {
    var t = function (e) {
      for (; e;) {
        if (e instanceof HTMLSelectElement) return e;
        e = e.parentElement;
      }
      return null;
    }(e);
    if (!function (e) {
      return !!e && Q in e;
    }(t)) return !1;
    if (ee(t)) e.selected = -1 !== t._blazorDeferredValue.indexOf(e.value);else {
      if (t._blazorDeferredValue !== e.value) return !1;
      te(t, e.value), delete t._blazorDeferredValue;
    }
    return !0;
  }
  var oe = document.createElement("template"),
    ae = document.createElementNS("http://www.w3.org/2000/svg", "g"),
    ie = new Set(),
    se = Symbol(),
    ce = Symbol();
  var le = /*#__PURE__*/function () {
    function le(e) {
      _classCallCheck(this, le);
      this.rootComponentIds = new Set(), this.childComponentLocations = {}, this.eventDelegator = new _(e), this.eventDelegator.notifyAfterClick(function (e) {
        Ce() && function (e, t) {
          if (0 !== e.button || function (e) {
            return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;
          }(e)) return;
          if (e.defaultPrevented) return;
          var n = function (e) {
            var t = !window._blazorDisableComposedPath && e.composedPath && e.composedPath();
            if (t) {
              for (var _e18 = 0; _e18 < t.length; _e18++) {
                var _n17 = t[_e18];
                if (_n17 instanceof Element && "A" === _n17.tagName) return _n17;
              }
              return null;
            }
            return Ie(e.target, "A");
          }(e);
          if (n && function (e) {
            var t = e.getAttribute("target");
            return (!t || "_self" === t) && e.hasAttribute("href") && !e.hasAttribute("download");
          }(n)) {
            var _t10 = Se(n.getAttribute("href"));
            ye(_t10) && (e.preventDefault(), Fe(_t10, !0, !1));
          }
        }(e);
      });
    }
    _createClass(le, [{
      key: "getRootComponentCount",
      value: function getRootComponentCount() {
        return this.rootComponentIds.size;
      }
    }, {
      key: "attachRootComponentToLogicalElement",
      value: function attachRootComponentToLogicalElement(e, t, n) {
        if (function (e) {
          return e[se];
        }(t)) throw new Error("Root component '".concat(e, "' could not be attached because its target element is already associated with a root component"));
        ue(t, !0), this.attachComponentToElement(e, t), this.rootComponentIds.add(e), n || ie.add(t);
      }
    }, {
      key: "updateComponent",
      value: function updateComponent(e, t, n, r) {
        var o;
        var a = this.childComponentLocations[t];
        if (!a) throw new Error("No element is currently associated with component ".concat(t));
        ie["delete"](a) && (B(a), a instanceof Comment && (a.textContent = "!"));
        var i = null === (o = X(a)) || void 0 === o ? void 0 : o.getRootNode(),
          s = i && i.activeElement;
        this.applyEdits(e, t, a, 0, n, r), s instanceof HTMLElement && i && i.activeElement !== s && s.focus();
      }
    }, {
      key: "disposeComponent",
      value: function disposeComponent(e) {
        if (this.rootComponentIds["delete"](e)) {
          var _t11 = this.childComponentLocations[e];
          ue(_t11, !1), !0 === _t11[ce] ? ie.add(_t11) : B(_t11);
        }
        delete this.childComponentLocations[e];
      }
    }, {
      key: "disposeEventHandler",
      value: function disposeEventHandler(e) {
        this.eventDelegator.removeListener(e);
      }
    }, {
      key: "attachComponentToElement",
      value: function attachComponentToElement(e, t) {
        this.childComponentLocations[e] = t;
      }
    }, {
      key: "applyEdits",
      value: function applyEdits(e, n, r, o, a, i) {
        var s,
          c = 0,
          l = o;
        var u = e.arrayBuilderSegmentReader,
          d = e.editReader,
          h = e.frameReader,
          f = u.values(a),
          m = u.offset(a),
          p = m + u.count(a);
        for (var _a4 = m; _a4 < p; _a4++) {
          var _u = e.diffReader.editsEntry(f, _a4),
            _m = d.editType(_u);
          switch (_m) {
            case t.prependFrame:
              {
                var _t12 = d.newTreeIndex(_u),
                  _o2 = e.referenceFramesEntry(i, _t12),
                  _a5 = d.siblingIndex(_u);
                this.insertFrame(e, n, r, l + _a5, i, _o2, _t12);
                break;
              }
            case t.removeFrame:
              J(r, l + d.siblingIndex(_u));
              break;
            case t.setAttribute:
              {
                var _t13 = d.newTreeIndex(_u),
                  _o3 = e.referenceFramesEntry(i, _t13),
                  _a6 = z(r, l + d.siblingIndex(_u));
                if (!(_a6 instanceof Element)) throw new Error("Cannot set attribute on non-element child");
                this.applyAttribute(e, n, _a6, _o3);
                break;
              }
            case t.removeAttribute:
              {
                var _e19 = z(r, l + d.siblingIndex(_u));
                if (!(_e19 instanceof Element)) throw new Error("Cannot remove attribute from non-element child");
                {
                  var _t14 = d.removedAttributeName(_u);
                  this.setOrRemoveAttributeOrProperty(_e19, _t14, null);
                }
                break;
              }
            case t.updateText:
              {
                var _t15 = d.newTreeIndex(_u),
                  _n18 = e.referenceFramesEntry(i, _t15),
                  _o4 = z(r, l + d.siblingIndex(_u));
                if (!(_o4 instanceof Text)) throw new Error("Cannot set text content on non-text child");
                _o4.textContent = h.textContent(_n18);
                break;
              }
            case t.updateMarkup:
              {
                var _t16 = d.newTreeIndex(_u),
                  _n19 = e.referenceFramesEntry(i, _t16),
                  _o5 = d.siblingIndex(_u);
                J(r, l + _o5), this.insertMarkup(e, r, l + _o5, _n19);
                break;
              }
            case t.stepIn:
              r = z(r, l + d.siblingIndex(_u)), c++, l = 0;
              break;
            case t.stepOut:
              r = U(r), c--, l = 0 === c ? o : 0;
              break;
            case t.permutationListEntry:
              s = s || [], s.push({
                fromSiblingIndex: l + d.siblingIndex(_u),
                toSiblingIndex: l + d.moveToSiblingIndex(_u)
              });
              break;
            case t.permutationListEnd:
              V(r, s), s = void 0;
              break;
            default:
              throw new Error("Unknown edit type: ".concat(_m));
          }
        }
      }
    }, {
      key: "insertFrame",
      value: function insertFrame(e, t, r, o, a, i, s) {
        var c = e.frameReader,
          l = c.frameType(i);
        switch (l) {
          case n.element:
            return this.insertElement(e, t, r, o, a, i, s), 1;
          case n.text:
            return this.insertText(e, r, o, i), 1;
          case n.attribute:
            throw new Error("Attribute frames should only be present as leading children of element frames.");
          case n.component:
            return this.insertComponent(e, r, o, i), 1;
          case n.region:
            return this.insertFrameRange(e, t, r, o, a, s + 1, s + c.subtreeLength(i));
          case n.elementReferenceCapture:
            if (r instanceof Element) return u = r, d = c.elementReferenceCaptureId(i), u.setAttribute(q(d), ""), 0;
            throw new Error("Reference capture frames can only be children of element frames.");
          case n.markup:
            return this.insertMarkup(e, r, o, i), 1;
          case n.namedEvent:
            return 0;
          default:
            throw new Error("Unknown frame type: ".concat(l));
        }
        var u, d;
      }
    }, {
      key: "insertElement",
      value: function insertElement(e, t, r, o, a, i, s) {
        var c = e.frameReader,
          l = c.elementName(i),
          u = "svg" === l || $(r) ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l),
          d = P(u);
        var h = !1;
        var f = s + c.subtreeLength(i);
        for (var _i2 = s + 1; _i2 < f; _i2++) {
          var _s2 = e.referenceFramesEntry(a, _i2);
          if (c.frameType(_s2) !== n.attribute) {
            H(u, r, o), h = !0, this.insertFrameRange(e, t, d, 0, a, _i2, f);
            break;
          }
          this.applyAttribute(e, t, u, _s2);
        }
        var m;
        h || H(u, r, o), (m = u) instanceof HTMLOptionElement ? re(m) : Q in m && ne(m, m[Q]);
      }
    }, {
      key: "insertComponent",
      value: function insertComponent(e, t, n, r) {
        var o = j(t, n),
          a = e.frameReader.componentId(r);
        this.attachComponentToElement(a, o);
      }
    }, {
      key: "insertText",
      value: function insertText(e, t, n, r) {
        var o = e.frameReader.textContent(r);
        H(document.createTextNode(o), t, n);
      }
    }, {
      key: "insertMarkup",
      value: function insertMarkup(e, t, n, r) {
        var o = j(t, n),
          a = (i = e.frameReader.markupContent(r), $(t) ? (ae.innerHTML = i || " ", ae) : (oe.innerHTML = i || " ", oe.content.querySelectorAll("script").forEach(function (e) {
            var t = document.createElement("script");
            t.textContent = e.textContent, e.getAttributeNames().forEach(function (n) {
              t.setAttribute(n, e.getAttribute(n));
            }), e.parentNode.replaceChild(t, e);
          }), oe.content));
        var i;
        var s = 0;
        for (; a.firstChild;) H(a.firstChild, o, s++);
      }
    }, {
      key: "applyAttribute",
      value: function applyAttribute(e, t, n, r) {
        var o = e.frameReader,
          a = o.attributeName(r),
          i = o.attributeEventHandlerId(r);
        if (i) {
          var _e20 = he(a);
          return void this.eventDelegator.setListener(n, _e20, i, t);
        }
        var s = o.attributeValue(r);
        this.setOrRemoveAttributeOrProperty(n, a, s);
      }
    }, {
      key: "insertFrameRange",
      value: function insertFrameRange(e, t, n, r, o, a, i) {
        var s = r;
        for (var _s3 = a; _s3 < i; _s3++) {
          var _a7 = e.referenceFramesEntry(o, _s3);
          r += this.insertFrame(e, t, n, r, o, _a7, _s3), _s3 += de(e, _a7);
        }
        return r - s;
      }
    }, {
      key: "setOrRemoveAttributeOrProperty",
      value: function setOrRemoveAttributeOrProperty(e, t, n) {
        (function (e, t, n) {
          switch (t) {
            case "value":
              return function (e, t) {
                switch (t && "INPUT" === e.tagName && (t = function (e, t) {
                  switch (t.getAttribute("type")) {
                    case "time":
                      return 8 !== e.length || !e.endsWith("00") && t.hasAttribute("step") ? e : e.substring(0, 5);
                    case "datetime-local":
                      return 19 !== e.length || !e.endsWith("00") && t.hasAttribute("step") ? e : e.substring(0, 16);
                    default:
                      return e;
                  }
                }(t, e)), e.tagName) {
                  case "INPUT":
                  case "SELECT":
                  case "TEXTAREA":
                    return t && e instanceof HTMLSelectElement && ee(e) && (t = JSON.parse(t)), ne(e, t), e[Q] = t, !0;
                  case "OPTION":
                    return t || "" === t ? e.setAttribute("value", t) : e.removeAttribute("value"), re(e), !0;
                  default:
                    return !1;
                }
              }(e, n);
            case "checked":
              return function (e, t) {
                return "INPUT" === e.tagName && (e.checked = null !== t, !0);
              }(e, n);
            default:
              return !1;
          }
        })(e, t, n) || (t.startsWith("__internal_") ? this.applyInternalAttribute(e, t.substring(11), n) : null !== n ? e.setAttribute(t, n) : e.removeAttribute(t));
      }
    }, {
      key: "applyInternalAttribute",
      value: function applyInternalAttribute(e, t, n) {
        if (t.startsWith("stopPropagation_")) {
          var _r5 = he(t.substring(16));
          this.eventDelegator.setStopPropagation(e, _r5, null !== n);
        } else {
          if (!t.startsWith("preventDefault_")) throw new Error("Unsupported internal attribute '".concat(t, "'"));
          {
            var _r6 = he(t.substring(15));
            this.eventDelegator.setPreventDefault(e, _r6, null !== n);
          }
        }
      }
    }]);
    return le;
  }();
  function ue(e, t) {
    e[se] = t;
  }
  function de(e, t) {
    var r = e.frameReader;
    switch (r.frameType(t)) {
      case n.component:
      case n.element:
      case n.region:
        return r.subtreeLength(t) - 1;
      default:
        return 0;
    }
  }
  function he(e) {
    if (e.startsWith("on")) return e.substring(2);
    throw new Error("Attribute should be an event name, but doesn't start with 'on'. Value: '".concat(e, "'"));
  }
  var fe = {};
  var me,
    pe,
    be,
    ve,
    ge = !1;
  function ye(e) {
    var t = (n = document.baseURI).substring(0, n.lastIndexOf("/"));
    var n;
    var r = e.charAt(t.length);
    return e.startsWith(t) && ("" === r || "/" === r || "?" === r || "#" === r);
  }
  function we() {
    return void 0 !== pe;
  }
  function Ee(e, t) {
    if (!pe) throw new Error("No enhanced programmatic navigation handler has been attached");
    pe(e, t);
  }
  function Se(e) {
    return ve = ve || document.createElement("a"), ve.href = e, ve.href;
  }
  function Ie(e, t) {
    return e ? e.tagName === t ? e : Ie(e.parentElement, t) : null;
  }
  function Ce() {
    return void 0 !== me;
  }
  function De() {
    return me;
  }
  var Ae = !1,
    Ne = 0,
    ke = 0;
  var Re = new Map();
  var _Te = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
        var t, n, r, o, _a8, _i3, _s4, _c;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              Be();
              o = Ue();
              if (!(null == o ? void 0 : o.hasLocationChangingEventListeners)) {
                _context4.next = 12;
                break;
              }
              _a8 = null !== (n = null === (t = e.state) || void 0 === t ? void 0 : t._index) && void 0 !== n ? n : 0, _i3 = null === (r = e.state) || void 0 === r ? void 0 : r.userState, _s4 = _a8 - Ne, _c = location.href;
              _context4.next = 6;
              return Pe(-_s4);
            case 6:
              _context4.next = 8;
              return je(_c, _i3, !1, o);
            case 8:
              if (_context4.sent) {
                _context4.next = 10;
                break;
              }
              return _context4.abrupt("return");
            case 10:
              _context4.next = 12;
              return Pe(_s4);
            case 12:
              _context4.next = 14;
              return He(!1);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function Te(_x2) {
        return _ref2.apply(this, arguments);
      };
    }(),
    _e = null;
  var Oe = {
    listenForNavigationEvents: function listenForNavigationEvents(e, t, n) {
      var r, o;
      Re.set(e, {
        rendererId: e,
        hasLocationChangingEventListeners: !1,
        locationChanged: t,
        locationChanging: n
      }), Ae || (Ae = !0, window.addEventListener("popstate", Je), Ne = null !== (o = null === (r = history.state) || void 0 === r ? void 0 : r._index) && void 0 !== o ? o : 0, be = function be(e, t) {
        He(t, e);
      });
    },
    enableNavigationInterception: function enableNavigationInterception(e) {
      if (void 0 !== me && me !== e) throw new Error("Only one interactive runtime may enable navigation interception at a time.");
      me = e;
    },
    setHasLocationChangingListeners: function setHasLocationChangingListeners(e, t) {
      var n = Re.get(e);
      if (!n) throw new Error("Renderer with ID '".concat(e, "' is not listening for navigation events"));
      n.hasLocationChangingEventListeners = t;
    },
    endLocationChanging: function endLocationChanging(e, t) {
      _e && e === ke && (_e(t), _e = null);
    },
    navigateTo: function navigateTo(e, t) {
      xe(e, t, !0);
    },
    refresh: function refresh(e) {
      !e && we() ? Ee(location.href, !0) : location.reload();
    },
    getBaseURI: function getBaseURI() {
      return document.baseURI;
    },
    getLocationHref: function getLocationHref() {
      return location.href;
    },
    scrollToElement: Le
  };
  function Le(e) {
    var t = document.getElementById(e);
    return !!t && (t.scrollIntoView(), !0);
  }
  function xe(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var r = Se(e);
    !t.forceLoad && ye(r) ? ze() ? Fe(r, !1, t.replaceHistoryEntry, t.historyEntryState, n) : Ee(r, t.replaceHistoryEntry) : function (e, t) {
      if (location.href === e) {
        var _t17 = e + "?";
        history.replaceState(null, "", _t17), location.replace(e);
      } else t ? location.replace(e) : location.href = e;
    }(e, t.replaceHistoryEntry);
  }
  function Fe(_x3, _x4, _x5) {
    return _Fe.apply(this, arguments);
  }
  function _Fe() {
    _Fe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(e, t, n) {
      var r,
        o,
        a,
        _args12 = arguments;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            r = _args12.length > 3 && _args12[3] !== undefined ? _args12[3] : void 0;
            o = _args12.length > 4 && _args12[4] !== undefined ? _args12[4] : !1;
            if (!(Be(), function (e) {
              var t = e.indexOf("#");
              return t > -1 && location.href.replace(location.hash, "") === e.substring(0, t);
            }(e))) {
              _context12.next = 4;
              break;
            }
            return _context12.abrupt("return", void function (e, t, n) {
              Me(e, t, n);
              var r = e.indexOf("#");
              r !== e.length - 1 && Le(e.substring(r + 1));
            }(e, n, r));
          case 4:
            a = Ue();
            _context12.t0 = o || !(null == a ? void 0 : a.hasLocationChangingEventListeners);
            if (_context12.t0) {
              _context12.next = 10;
              break;
            }
            _context12.next = 9;
            return je(e, r, t, a);
          case 9:
            _context12.t0 = _context12.sent;
          case 10:
            _context12.t1 = _context12.t0;
            if (!_context12.t1) {
              _context12.next = 16;
              break;
            }
            ge = !0;
            Me(e, n, r);
            _context12.next = 16;
            return He(t);
          case 16:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return _Fe.apply(this, arguments);
  }
  function Me(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
    t ? history.replaceState({
      userState: n,
      _index: Ne
    }, "", e) : (Ne++, history.pushState({
      userState: n,
      _index: Ne
    }, "", e));
  }
  function Pe(e) {
    return new Promise(function (t) {
      var n = _Te;
      _Te = function Te() {
        _Te = n, t();
      }, history.go(e);
    });
  }
  function Be() {
    _e && (_e(!1), _e = null);
  }
  function je(e, t, n, r) {
    return new Promise(function (o) {
      Be(), ke++, _e = o, r.locationChanging(ke, e, t, n);
    });
  }
  function He(_x6, _x7) {
    return _He.apply(this, arguments);
  }
  function _He() {
    _He = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(e, t) {
      var n;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            n = null != t ? t : location.href;
            _context14.next = 3;
            return Promise.all(Array.from(Re, /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_ref5) {
                var _ref7, t, r, o, a;
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      _ref7 = _slicedToArray(_ref5, 2), t = _ref7[0], r = _ref7[1];
                      a = t;
                      _context13.t0 = S.has(a);
                      if (!_context13.t0) {
                        _context13.next = 6;
                        break;
                      }
                      _context13.next = 6;
                      return r.locationChanged(n, null === (o = history.state) || void 0 === o ? void 0 : o.userState, e);
                    case 6:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee13);
              }));
              return function (_x27) {
                return _ref6.apply(this, arguments);
              };
            }()));
          case 3:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return _He.apply(this, arguments);
  }
  function Je(_x8) {
    return _Je.apply(this, arguments);
  }
  function _Je() {
    _Je = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(e) {
      var t, n;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.t0 = _Te && ze();
            if (!_context15.t0) {
              _context15.next = 4;
              break;
            }
            _context15.next = 4;
            return _Te(e);
          case 4:
            Ne = null !== (n = null === (t = history.state) || void 0 === t ? void 0 : t._index) && void 0 !== n ? n : 0;
          case 5:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }));
    return _Je.apply(this, arguments);
  }
  function Ue() {
    var e = De();
    if (void 0 !== e) return Re.get(e);
  }
  function ze() {
    return Ce() || !we();
  }
  var $e = {
      focus: function focus(e, t) {
        if (e instanceof HTMLElement) e.focus({
          preventScroll: t
        });else {
          if (!(e instanceof SVGElement)) throw new Error("Unable to focus an invalid element.");
          if (!e.hasAttribute("tabindex")) throw new Error("Unable to focus an SVG element that does not have a tabindex.");
          e.focus({
            preventScroll: t
          });
        }
      },
      focusBySelector: function focusBySelector(e, t) {
        var n = document.querySelector(e);
        n && (n.hasAttribute("tabindex") || (n.tabIndex = -1), n.focus({
          preventScroll: !0
        }));
      }
    },
    We = {
      init: function init(e, t, n) {
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
        var o = Ve(t);
        (o || document.documentElement).style.overflowAnchor = "none";
        var a = document.createRange();
        h(n.parentElement) && (t.style.display = "table-row", n.style.display = "table-row");
        var i = new IntersectionObserver(function (r) {
          r.forEach(function (r) {
            var o;
            if (!r.isIntersecting) return;
            a.setStartAfter(t), a.setEndBefore(n);
            var i = a.getBoundingClientRect().height,
              s = null === (o = r.rootBounds) || void 0 === o ? void 0 : o.height;
            r.target === t ? e.invokeMethodAsync("OnSpacerBeforeVisible", r.intersectionRect.top - r.boundingClientRect.top, i, s) : r.target === n && n.offsetHeight > 0 && e.invokeMethodAsync("OnSpacerAfterVisible", r.boundingClientRect.bottom - r.intersectionRect.bottom, i, s);
          });
        }, {
          root: o,
          rootMargin: "".concat(r, "px")
        });
        i.observe(t), i.observe(n);
        var s = d(t),
          c = d(n),
          _Xe = Xe(e),
          l = _Xe.observersByDotNetObjectId,
          u = _Xe.id;
        function d(e) {
          var t = {
              attributes: !0
            },
            n = new MutationObserver(function (n, r) {
              h(e.parentElement) && (r.disconnect(), e.style.display = "table-row", r.observe(e, t)), i.unobserve(e), i.observe(e);
            });
          return n.observe(e, t), n;
        }
        function h(e) {
          return null !== e && (e instanceof HTMLTableElement && "" === e.style.display || "table" === e.style.display || e instanceof HTMLTableSectionElement && "" === e.style.display || "table-row-group" === e.style.display);
        }
        l[u] = {
          intersectionObserver: i,
          mutationObserverBefore: s,
          mutationObserverAfter: c
        };
      },
      dispose: function dispose(e) {
        var _Xe2 = Xe(e),
          t = _Xe2.observersByDotNetObjectId,
          n = _Xe2.id,
          r = t[n];
        r && (r.intersectionObserver.disconnect(), r.mutationObserverBefore.disconnect(), r.mutationObserverAfter.disconnect(), e.dispose(), delete t[n]);
      }
    },
    Ke = Symbol();
  function Ve(e) {
    return e && e !== document.body && e !== document.documentElement ? "visible" !== getComputedStyle(e).overflowY ? e : Ve(e.parentElement) : null;
  }
  function Xe(e) {
    var t;
    var n = e._callDispatcher,
      r = e._id;
    return null !== (t = n[Ke]) && void 0 !== t || (n[Ke] = {}), {
      observersByDotNetObjectId: n[Ke],
      id: r
    };
  }
  var Ye = {
      getAndRemoveExistingTitle: function getAndRemoveExistingTitle() {
        var e;
        var t = document.head ? document.head.getElementsByTagName("title") : [];
        if (0 === t.length) return null;
        var n = null;
        for (var r = t.length - 1; r >= 0; r--) {
          var _o6 = t[r],
            _a9 = _o6.previousSibling;
          _a9 instanceof Comment && null !== U(_a9) || (null === n && (n = _o6.textContent), null === (e = _o6.parentNode) || void 0 === e || e.removeChild(_o6));
        }
        return n;
      }
    },
    Ge = {
      init: function init(e, t) {
        t._blazorInputFileNextFileId = 0, t.addEventListener("click", function () {
          t.value = "";
        }), t.addEventListener("change", function () {
          t._blazorFilesById = {};
          var n = Array.prototype.map.call(t.files, function (e) {
            var n = {
              id: ++t._blazorInputFileNextFileId,
              lastModified: new Date(e.lastModified).toISOString(),
              name: e.name,
              size: e.size,
              contentType: e.type,
              readPromise: void 0,
              arrayBuffer: void 0,
              blob: e
            };
            return t._blazorFilesById[n.id] = n, n;
          });
          e.invokeMethodAsync("NotifyChange", n);
        });
      },
      toImageFile: function () {
        var _toImageFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e, t, n, r, o) {
          var a, i, s, c;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                a = qe(e, t);
                _context5.next = 3;
                return new Promise(function (e) {
                  var t = new Image();
                  t.onload = function () {
                    URL.revokeObjectURL(t.src), e(t);
                  }, t.onerror = function () {
                    t.onerror = null, URL.revokeObjectURL(t.src);
                  }, t.src = URL.createObjectURL(a.blob);
                });
              case 3:
                i = _context5.sent;
                _context5.next = 6;
                return new Promise(function (e) {
                  var t;
                  var a = Math.min(1, r / i.width),
                    s = Math.min(1, o / i.height),
                    c = Math.min(a, s),
                    l = document.createElement("canvas");
                  l.width = Math.round(i.width * c), l.height = Math.round(i.height * c), null === (t = l.getContext("2d")) || void 0 === t || t.drawImage(i, 0, 0, l.width, l.height), l.toBlob(e, n);
                });
              case 6:
                s = _context5.sent;
                c = {
                  id: ++e._blazorInputFileNextFileId,
                  lastModified: a.lastModified,
                  name: a.name,
                  size: (null == s ? void 0 : s.size) || 0,
                  contentType: n,
                  blob: s || a.blob
                };
                return _context5.abrupt("return", (e._blazorFilesById[c.id] = c, c));
              case 9:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        function toImageFile(_x9, _x10, _x11, _x12, _x13) {
          return _toImageFile.apply(this, arguments);
        }
        return toImageFile;
      }(),
      readFileData: function () {
        var _readFileData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e, t) {
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", qe(e, t).blob);
              case 1:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        function readFileData(_x14, _x15) {
          return _readFileData.apply(this, arguments);
        }
        return readFileData;
      }()
    };
  function qe(e, t) {
    var n = e._blazorFilesById[t];
    if (!n) throw new Error("There is no file with ID ".concat(t, ". The file list may have changed. See https://aka.ms/aspnet/blazor-input-file-multiple-selections."));
    return n;
  }
  var Ze = new Set(),
    Qe = {
      enableNavigationPrompt: function enableNavigationPrompt(e) {
        0 === Ze.size && window.addEventListener("beforeunload", et), Ze.add(e);
      },
      disableNavigationPrompt: function disableNavigationPrompt(e) {
        Ze["delete"](e), 0 === Ze.size && window.removeEventListener("beforeunload", et);
      }
    };
  function et(e) {
    e.preventDefault(), e.returnValue = !0;
  }
  var tt = new Map(),
    nt = {
      navigateTo: function navigateTo(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        xe(e, t instanceof Object ? t : {
          forceLoad: t,
          replaceHistoryEntry: n
        });
      },
      registerCustomEventType: function registerCustomEventType(e, t) {
        if (!t) throw new Error("The options parameter is required.");
        if (a.has(e)) throw new Error("The event '".concat(e, "' is already registered."));
        if (t.browserEventName) {
          var n = i.get(t.browserEventName);
          n ? n.push(e) : i.set(t.browserEventName, [e]), s.forEach(function (n) {
            return n(e, t.browserEventName);
          });
        }
        a.set(e, t);
      },
      rootComponents: g,
      runtime: {},
      _internal: {
        navigationManager: Oe,
        domWrapper: $e,
        Virtualize: We,
        PageTitle: Ye,
        InputFile: Ge,
        NavigationLock: Qe,
        getJSDataStreamChunk: function () {
          var _getJSDataStreamChunk = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e, t, n) {
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (!(e instanceof Blob)) {
                    _context8.next = 6;
                    break;
                  }
                  _context8.next = 3;
                  return function () {
                    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e, t, n) {
                      var r, o;
                      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                        while (1) switch (_context7.prev = _context7.next) {
                          case 0:
                            r = e.slice(t, t + n);
                            _context7.next = 3;
                            return r.arrayBuffer();
                          case 3:
                            o = _context7.sent;
                            return _context7.abrupt("return", new Uint8Array(o));
                          case 5:
                          case "end":
                            return _context7.stop();
                        }
                      }, _callee7);
                    }));
                    return function (_x19, _x20, _x21) {
                      return _ref3.apply(this, arguments);
                    };
                  }()(e, t, n);
                case 3:
                  _context8.t0 = _context8.sent;
                  _context8.next = 7;
                  break;
                case 6:
                  _context8.t0 = function (e, t, n) {
                    return new Uint8Array(e.buffer, e.byteOffset + t, n);
                  }(e, t, n);
                case 7:
                  return _context8.abrupt("return", _context8.t0);
                case 8:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          function getJSDataStreamChunk(_x16, _x17, _x18) {
            return _getJSDataStreamChunk.apply(this, arguments);
          }
          return getJSDataStreamChunk;
        }(),
        attachWebRendererInterop: function attachWebRendererInterop(t, n, r, o) {
          var a, i;
          if (S.has(t)) throw new Error("Interop methods are already registered for renderer ".concat(t));
          S.set(t, n), r && o && Object.keys(r).length > 0 && function (t, n, r) {
            if (p) throw new Error("Dynamic root components have already been enabled.");
            p = t, b = n;
            for (var _i4 = 0, _Object$entries = Object.entries(r); _i4 < _Object$entries.length; _i4++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
                _t18 = _Object$entries$_i[0],
                _o7 = _Object$entries$_i[1];
              var _r7 = e.findJSFunction(_t18, 0);
              var _iterator3 = _createForOfIteratorHelper(_o7),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _e21 = _step3.value;
                  _r7(_e21, n[_e21]);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }(A(t), r, o), null === (i = null === (a = C.get(t)) || void 0 === a ? void 0 : a[0]) || void 0 === i || i.call(a), function (e) {
            for (var _i5 = 0, _I = I; _i5 < _I.length; _i5++) {
              var _t19 = _I[_i5];
              _t19(e);
            }
          }(t);
        }
      }
    };
  window.Blazor = nt;
  var rt = !1;
  var ot = "function" == typeof TextDecoder ? new TextDecoder("utf-8") : null,
    at = ot ? ot.decode.bind(ot) : function (e) {
      var t = 0;
      var n = e.length,
        r = [],
        o = [];
      for (; t < n;) {
        var _n20 = e[t++];
        if (0 === _n20) break;
        if (0 == (128 & _n20)) r.push(_n20);else if (192 == (224 & _n20)) {
          var _o8 = 63 & e[t++];
          r.push((31 & _n20) << 6 | _o8);
        } else if (224 == (240 & _n20)) {
          var _o9 = 63 & e[t++],
            _a10 = 63 & e[t++];
          r.push((31 & _n20) << 12 | _o9 << 6 | _a10);
        } else if (240 == (248 & _n20)) {
          var _o10 = (7 & _n20) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++];
          _o10 > 65535 && (_o10 -= 65536, r.push(_o10 >>> 10 & 1023 | 55296), _o10 = 56320 | 1023 & _o10), r.push(_o10);
        }
        r.length > 1024 && (o.push(String.fromCharCode.apply(null, r)), r.length = 0);
      }
      return o.push(String.fromCharCode.apply(null, r)), o.join("");
    },
    it = Math.pow(2, 32),
    st = Math.pow(2, 21) - 1;
  function ct(e, t) {
    return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24;
  }
  function lt(e, t) {
    return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24 >>> 0);
  }
  function ut(e, t) {
    var n = lt(e, t + 4);
    if (n > st) throw new Error("Cannot read uint64 with high order part ".concat(n, ", because the result would exceed Number.MAX_SAFE_INTEGER."));
    return n * it + lt(e, t);
  }
  var dt = /*#__PURE__*/function () {
    function dt(e) {
      _classCallCheck(this, dt);
      this.batchData = e;
      var t = new pt(e);
      this.arrayRangeReader = new bt(e), this.arrayBuilderSegmentReader = new vt(e), this.diffReader = new ht(e), this.editReader = new ft(e, t), this.frameReader = new mt(e, t);
    }
    _createClass(dt, [{
      key: "updatedComponents",
      value: function updatedComponents() {
        return ct(this.batchData, this.batchData.length - 20);
      }
    }, {
      key: "referenceFrames",
      value: function referenceFrames() {
        return ct(this.batchData, this.batchData.length - 16);
      }
    }, {
      key: "disposedComponentIds",
      value: function disposedComponentIds() {
        return ct(this.batchData, this.batchData.length - 12);
      }
    }, {
      key: "disposedEventHandlerIds",
      value: function disposedEventHandlerIds() {
        return ct(this.batchData, this.batchData.length - 8);
      }
    }, {
      key: "updatedComponentsEntry",
      value: function updatedComponentsEntry(e, t) {
        var n = e + 4 * t;
        return ct(this.batchData, n);
      }
    }, {
      key: "referenceFramesEntry",
      value: function referenceFramesEntry(e, t) {
        return e + 20 * t;
      }
    }, {
      key: "disposedComponentIdsEntry",
      value: function disposedComponentIdsEntry(e, t) {
        var n = e + 4 * t;
        return ct(this.batchData, n);
      }
    }, {
      key: "disposedEventHandlerIdsEntry",
      value: function disposedEventHandlerIdsEntry(e, t) {
        var n = e + 8 * t;
        return ut(this.batchData, n);
      }
    }]);
    return dt;
  }();
  var ht = /*#__PURE__*/function () {
    function ht(e) {
      _classCallCheck(this, ht);
      this.batchDataUint8 = e;
    }
    _createClass(ht, [{
      key: "componentId",
      value: function componentId(e) {
        return ct(this.batchDataUint8, e);
      }
    }, {
      key: "edits",
      value: function edits(e) {
        return e + 4;
      }
    }, {
      key: "editsEntry",
      value: function editsEntry(e, t) {
        return e + 16 * t;
      }
    }]);
    return ht;
  }();
  var ft = /*#__PURE__*/function () {
    function ft(e, t) {
      _classCallCheck(this, ft);
      this.batchDataUint8 = e, this.stringReader = t;
    }
    _createClass(ft, [{
      key: "editType",
      value: function editType(e) {
        return ct(this.batchDataUint8, e);
      }
    }, {
      key: "siblingIndex",
      value: function siblingIndex(e) {
        return ct(this.batchDataUint8, e + 4);
      }
    }, {
      key: "newTreeIndex",
      value: function newTreeIndex(e) {
        return ct(this.batchDataUint8, e + 8);
      }
    }, {
      key: "moveToSiblingIndex",
      value: function moveToSiblingIndex(e) {
        return ct(this.batchDataUint8, e + 8);
      }
    }, {
      key: "removedAttributeName",
      value: function removedAttributeName(e) {
        var t = ct(this.batchDataUint8, e + 12);
        return this.stringReader.readString(t);
      }
    }]);
    return ft;
  }();
  var mt = /*#__PURE__*/function () {
    function mt(e, t) {
      _classCallCheck(this, mt);
      this.batchDataUint8 = e, this.stringReader = t;
    }
    _createClass(mt, [{
      key: "frameType",
      value: function frameType(e) {
        return ct(this.batchDataUint8, e);
      }
    }, {
      key: "subtreeLength",
      value: function subtreeLength(e) {
        return ct(this.batchDataUint8, e + 4);
      }
    }, {
      key: "elementReferenceCaptureId",
      value: function elementReferenceCaptureId(e) {
        var t = ct(this.batchDataUint8, e + 4);
        return this.stringReader.readString(t);
      }
    }, {
      key: "componentId",
      value: function componentId(e) {
        return ct(this.batchDataUint8, e + 8);
      }
    }, {
      key: "elementName",
      value: function elementName(e) {
        var t = ct(this.batchDataUint8, e + 8);
        return this.stringReader.readString(t);
      }
    }, {
      key: "textContent",
      value: function textContent(e) {
        var t = ct(this.batchDataUint8, e + 4);
        return this.stringReader.readString(t);
      }
    }, {
      key: "markupContent",
      value: function markupContent(e) {
        var t = ct(this.batchDataUint8, e + 4);
        return this.stringReader.readString(t);
      }
    }, {
      key: "attributeName",
      value: function attributeName(e) {
        var t = ct(this.batchDataUint8, e + 4);
        return this.stringReader.readString(t);
      }
    }, {
      key: "attributeValue",
      value: function attributeValue(e) {
        var t = ct(this.batchDataUint8, e + 8);
        return this.stringReader.readString(t);
      }
    }, {
      key: "attributeEventHandlerId",
      value: function attributeEventHandlerId(e) {
        return ut(this.batchDataUint8, e + 12);
      }
    }]);
    return mt;
  }();
  var pt = /*#__PURE__*/function () {
    function pt(e) {
      _classCallCheck(this, pt);
      this.batchDataUint8 = e, this.stringTableStartIndex = ct(e, e.length - 4);
    }
    _createClass(pt, [{
      key: "readString",
      value: function readString(e) {
        if (-1 === e) return null;
        {
          var n = ct(this.batchDataUint8, this.stringTableStartIndex + 4 * e),
            r = function (e, t) {
              var n = 0,
                r = 0;
              for (var _o12 = 0; _o12 < 4; _o12++) {
                var _a12 = e[t + _o12];
                if (n |= (127 & _a12) << r, _a12 < 128) break;
                r += 7;
              }
              return n;
            }(this.batchDataUint8, n),
            _o11 = n + ((t = r) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : 4),
            _a11 = new Uint8Array(this.batchDataUint8.buffer, this.batchDataUint8.byteOffset + _o11, r);
          return at(_a11);
        }
        var t;
      }
    }]);
    return pt;
  }();
  var bt = /*#__PURE__*/function () {
    function bt(e) {
      _classCallCheck(this, bt);
      this.batchDataUint8 = e;
    }
    _createClass(bt, [{
      key: "count",
      value: function count(e) {
        return ct(this.batchDataUint8, e);
      }
    }, {
      key: "values",
      value: function values(e) {
        return e + 4;
      }
    }]);
    return bt;
  }();
  var vt = /*#__PURE__*/function () {
    function vt(e) {
      _classCallCheck(this, vt);
      this.batchDataUint8 = e;
    }
    _createClass(vt, [{
      key: "offset",
      value: function offset(e) {
        return 0;
      }
    }, {
      key: "count",
      value: function count(e) {
        return ct(this.batchDataUint8, e);
      }
    }, {
      key: "values",
      value: function values(e) {
        return e + 4;
      }
    }]);
    return vt;
  }();
  var gt = "__bwv:";
  var yt = !1;
  function wt(e, t) {
    At("OnRenderCompleted", e, t);
  }
  function Et(e, t, n, r, o) {
    At("BeginInvokeDotNet", e ? e.toString() : null, t, n, r || 0, o);
  }
  function St(e, t, n) {
    At("EndInvokeJS", e, t, n);
  }
  function It(e, t) {
    var n = function (e) {
      var t = new Array(e.length);
      for (var _n21 = 0; _n21 < e.length; _n21++) t[_n21] = String.fromCharCode(e[_n21]);
      return btoa(t.join(""));
    }(t);
    At("ReceiveByteArrayFromJS", e, n);
  }
  function Ct(e, t, n) {
    return At("OnLocationChanged", e, t, n), Promise.resolve();
  }
  function Dt(e, t, n, r) {
    return At("OnLocationChanging", e, t, n, r), Promise.resolve();
  }
  function At(e) {
    for (var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      t[_key7 - 1] = arguments[_key7];
    }
    var n = function (e, t) {
      return yt ? null : "".concat(gt).concat(JSON.stringify([e].concat(_toConsumableArray(t))));
    }(e, t);
    n && window.external.sendMessage(n);
  }
  var Nt, kt;
  function Rt(e, t) {
    var n = Tt(t);
    Ot.receiveByteArray(e, n);
  }
  function Tt(e) {
    var t = atob(e),
      n = t.length,
      r = new Uint8Array(n);
    for (var _e22 = 0; _e22 < n; _e22++) r[_e22] = t.charCodeAt(_e22);
    return r;
  }
  !function (e) {
    e[e.Default = 0] = "Default", e[e.Server = 1] = "Server", e[e.WebAssembly = 2] = "WebAssembly", e[e.WebView = 3] = "WebView";
  }(Nt || (Nt = {})), function (e) {
    e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Information = 2] = "Information", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical", e[e.None = 6] = "None";
  }(kt || (kt = {}));
  var _t = /*#__PURE__*/function () {
    function _t() {
      var _this$afterStartedCal;
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var n = arguments.length > 2 ? arguments[2] : undefined;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      _classCallCheck(this, _t);
      this.singleRuntime = e, this.logger = t, this.webRendererId = r, this.afterStartedCallbacks = [], n && (_this$afterStartedCal = this.afterStartedCallbacks).push.apply(_this$afterStartedCal, _toConsumableArray(n));
    }
    _createClass(_t, [{
      key: "importInitializersAsync",
      value: function () {
        var _importInitializersAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(e, t) {
          var _this5 = this;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return Promise.all(e.map(function (e) {
                  return function () {
                    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e, n) {
                      var r, o, _n22, _r8, _i6, _s5, _c2, _l, _u2, _d2, a;
                      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                        while (1) switch (_context9.prev = _context9.next) {
                          case 0:
                            a = function _a13(e, t, n, r) {
                              if (n && e.afterStartedCallbacks.push(n), t) return t.apply(void 0, _toConsumableArray(r));
                            };
                            r = function (e) {
                              var t = document.baseURI;
                              return t.endsWith("/") ? "".concat(t).concat(e) : "".concat(t, "/").concat(e);
                            }(n);
                            _context9.next = 4;
                            return function (specifier) {
                              return new Promise(function (r) {
                                return r("".concat(specifier));
                              }).then(function (s) {
                                return _interopRequireWildcard(require(s));
                              });
                            }(r);
                          case 4:
                            o = _context9.sent;
                            if (!(void 0 !== o)) {
                              _context9.next = 13;
                              break;
                            }
                            if (!e.singleRuntime) {
                              _context9.next = 12;
                              break;
                            }
                            _n22 = o.beforeStart, _r8 = o.afterStarted, _i6 = o.beforeWebAssemblyStart, _s5 = o.afterWebAssemblyStarted, _c2 = o.beforeServerStart, _l = o.afterServerStarted;
                            _u2 = _n22;
                            e.webRendererId === Nt.Server && _c2 && (_u2 = _c2), e.webRendererId === Nt.WebAssembly && _i6 && (_u2 = _i6);
                            _d2 = _r8;
                            return _context9.abrupt("return", (e.webRendererId === Nt.Server && _l && (_d2 = _l), e.webRendererId === Nt.WebAssembly && _s5 && (_d2 = _s5), a(e, _u2, _d2, t)));
                          case 12:
                            return _context9.abrupt("return", function (e, t, n) {
                              var o;
                              var i = n[0],
                                s = t.beforeStart,
                                c = t.afterStarted,
                                l = t.beforeWebStart,
                                u = t.afterWebStarted,
                                d = t.beforeWebAssemblyStart,
                                h = t.afterWebAssemblyStarted,
                                f = t.beforeServerStart,
                                m = t.afterServerStarted,
                                p = !(l || u || d || h || f || m || !s && !c),
                                b = p && i.enableClassicInitializers;
                              if (p && !i.enableClassicInitializers) null === (o = e.logger) || void 0 === o || o.log(kt.Warning, "Initializer '".concat(r, "' will be ignored because multiple runtimes are available. use 'before(web|webAssembly|server)Start' and 'after(web|webAssembly|server)Started?' instead.)"));else if (b) return a(e, s, c, n);
                              if (function (e) {
                                e.webAssembly ? e.webAssembly.initializers || (e.webAssembly.initializers = {
                                  beforeStart: [],
                                  afterStarted: []
                                }) : e.webAssembly = {
                                  initializers: {
                                    beforeStart: [],
                                    afterStarted: []
                                  }
                                }, e.circuit ? e.circuit.initializers || (e.circuit.initializers = {
                                  beforeStart: [],
                                  afterStarted: []
                                }) : e.circuit = {
                                  initializers: {
                                    beforeStart: [],
                                    afterStarted: []
                                  }
                                };
                              }(i), d && i.webAssembly.initializers.beforeStart.push(d), h && i.webAssembly.initializers.afterStarted.push(h), f && i.circuit.initializers.beforeStart.push(f), m && i.circuit.initializers.afterStarted.push(m), u && e.afterStartedCallbacks.push(u), l) return l(i);
                            }(e, o, t));
                          case 13:
                          case "end":
                            return _context9.stop();
                        }
                      }, _callee9);
                    }));
                    return function (_x24, _x25) {
                      return _ref4.apply(this, arguments);
                    };
                  }()(_this5, e);
                }));
              case 2:
              case "end":
                return _context10.stop();
            }
          }, _callee10);
        }));
        function importInitializersAsync(_x22, _x23) {
          return _importInitializersAsync.apply(this, arguments);
        }
        return importInitializersAsync;
      }()
    }, {
      key: "invokeAfterStartedCallbacks",
      value: function () {
        var _invokeAfterStartedCallbacks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e) {
          var t, n, r;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                t = (n = this.webRendererId, null === (r = C.get(n)) || void 0 === r ? void 0 : r[1]);
                _context11.t0 = t;
                if (!_context11.t0) {
                  _context11.next = 5;
                  break;
                }
                _context11.next = 5;
                return t;
              case 5:
                _context11.next = 7;
                return Promise.all(this.afterStartedCallbacks.map(function (t) {
                  return t(e);
                }));
              case 7:
              case "end":
                return _context11.stop();
            }
          }, _callee11, this);
        }));
        function invokeAfterStartedCallbacks(_x26) {
          return _invokeAfterStartedCallbacks.apply(this, arguments);
        }
        return invokeAfterStartedCallbacks;
      }()
    }]);
    return _t;
  }();
  var Ot,
    Lt = !1;
  function xt() {
    return _xt.apply(this, arguments);
  }
  function _xt() {
    _xt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var t;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            if (!Lt) {
              _context17.next = 2;
              break;
            }
            throw new Error("Blazor has already started.");
          case 2:
            Lt = !0, Ot = e.attachDispatcher({
              beginInvokeDotNetFromJS: Et,
              endInvokeJSFromDotNet: St,
              sendByteArray: It
            });
            _context17.next = 5;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var e, t, n;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return fetch("_framework/blazor.modules.json", {
                      method: "GET",
                      credentials: "include",
                      cache: "no-cache"
                    });
                  case 2:
                    e = _context16.sent;
                    _context16.next = 5;
                    return e.json();
                  case 5:
                    t = _context16.sent;
                    n = new _t();
                    _context16.next = 9;
                    return n.importInitializersAsync(t, []);
                  case 9:
                    return _context16.abrupt("return", n);
                  case 10:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16);
            }))();
          case 5:
            t = _context17.sent;
            (function () {
              var e = {
                AttachToDocument: function AttachToDocument(e, t) {
                  !function (e, t, n) {
                    var r = "::before";
                    var o = !1;
                    if (e.endsWith("::after")) e = e.slice(0, -7), o = !0;else if (e.endsWith(r)) throw new Error("The '".concat(r, "' selector is not supported."));
                    var a = function (e) {
                      var t = m.get(e);
                      if (t) return m["delete"](e), t;
                    }(e) || document.querySelector(e);
                    if (!a) throw new Error("Could not find any element matching selector '".concat(e, "'."));
                    !function (e, t, n, r) {
                      var o = fe[e];
                      o || (o = new le(e), fe[e] = o), o.attachRootComponentToLogicalElement(n, t, r);
                    }(n, P(a, !0), t, o);
                  }(t, e, Nt.WebView);
                },
                RenderBatch: function RenderBatch(e, t) {
                  try {
                    var n = Tt(t);
                    (function (e, t) {
                      var n = fe[e];
                      if (!n) throw new Error("There is no browser renderer with ID ".concat(e, "."));
                      var r = t.arrayRangeReader,
                        o = t.updatedComponents(),
                        a = r.values(o),
                        i = r.count(o),
                        s = t.referenceFrames(),
                        c = r.values(s),
                        l = t.diffReader;
                      for (var _e23 = 0; _e23 < i; _e23++) {
                        var _r9 = t.updatedComponentsEntry(a, _e23),
                          _o13 = l.componentId(_r9),
                          _i7 = l.edits(_r9);
                        n.updateComponent(t, _o13, _i7, c);
                      }
                      var u = t.disposedComponentIds(),
                        d = r.values(u),
                        h = r.count(u);
                      for (var _e24 = 0; _e24 < h; _e24++) {
                        var _r10 = t.disposedComponentIdsEntry(d, _e24);
                        n.disposeComponent(_r10);
                      }
                      var f = t.disposedEventHandlerIds(),
                        m = r.values(f),
                        p = r.count(f);
                      for (var _e25 = 0; _e25 < p; _e25++) {
                        var _r11 = t.disposedEventHandlerIdsEntry(m, _e25);
                        n.disposeEventHandler(_r11);
                      }
                      ge && (ge = !1, window.scrollTo && window.scrollTo(0, 0));
                    })(Nt.WebView, new dt(n)), wt(e, null);
                  } catch (t) {
                    wt(e, t.toString());
                  }
                },
                NotifyUnhandledException: function NotifyUnhandledException(e, t) {
                  yt = !0, console.error("".concat(e, "\n").concat(t)), function () {
                    var e = document.querySelector("#blazor-error-ui");
                    e && (e.style.display = "block"), rt || (rt = !0, document.querySelectorAll("#blazor-error-ui .reload").forEach(function (e) {
                      e.onclick = function (e) {
                        location.reload(), e.preventDefault();
                      };
                    }), document.querySelectorAll("#blazor-error-ui .dismiss").forEach(function (e) {
                      e.onclick = function (e) {
                        var t = document.querySelector("#blazor-error-ui");
                        t && (t.style.display = "none"), e.preventDefault();
                      };
                    }));
                  }();
                },
                BeginInvokeJS: Ot.beginInvokeJSFromDotNet.bind(Ot),
                EndInvokeDotNet: Ot.endInvokeDotNetFromJS.bind(Ot),
                SendByteArrayToJS: Rt,
                Navigate: Oe.navigateTo,
                Refresh: Oe.refresh,
                SetHasLocationChangingListeners: function SetHasLocationChangingListeners(e) {
                  Oe.setHasLocationChangingListeners(Nt.WebView, e);
                },
                EndLocationChanging: Oe.endLocationChanging
              };
              window.external.receiveMessage(function (t) {
                var n = function (e) {
                  if (yt || !e || !e.startsWith(gt)) return null;
                  var t = e.substring(gt.length),
                    _JSON$parse = JSON.parse(t),
                    _JSON$parse2 = _toArray(_JSON$parse),
                    n = _JSON$parse2[0],
                    r = _JSON$parse2.slice(1);
                  return {
                    messageType: n,
                    args: r
                  };
                }(t);
                if (n) {
                  if (!Object.prototype.hasOwnProperty.call(e, n.messageType)) throw new Error("Unsupported IPC message type '".concat(n.messageType, "'"));
                  e[n.messageType].apply(null, n.args);
                }
              });
            })();
            nt._internal.receiveWebViewDotNetDataStream = Ft;
            Oe.enableNavigationInterception(Nt.WebView);
            Oe.listenForNavigationEvents(Nt.WebView, Ct, Dt);
            At("AttachPage", Oe.getBaseURI(), Oe.getLocationHref());
            _context17.next = 13;
            return t.invokeAfterStartedCallbacks(nt);
          case 13:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }));
    return _xt.apply(this, arguments);
  }
  function Ft(e, t, n, r) {
    !function (e, t, n, r, o) {
      var a = tt.get(t);
      if (!a) {
        var _n23 = new ReadableStream({
          start: function start(e) {
            tt.set(t, e), a = e;
          }
        });
        e.supplyDotNetStream(t, _n23);
      }
      o ? (a.error(o), tt["delete"](t)) : 0 === r ? (a.close(), tt["delete"](t)) : a.enqueue(n.length === r ? n : n.subarray(0, r));
    }(Ot, e, t, n, r);
  }
  nt.start = xt, window.DotNet = e, document && document.currentScript && "false" !== document.currentScript.getAttribute("autostart") && xt();
})();