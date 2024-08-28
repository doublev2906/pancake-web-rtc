"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatPluginWebRtc = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ChatPluginWebRtc = exports.ChatPluginWebRtc = /*#__PURE__*/function () {
  function ChatPluginWebRtc(channel, targetId) {
    _classCallCheck(this, ChatPluginWebRtc);
    this.channel = channel;
    this.targetId = targetId;
    this.peerConnection = null;
    this.localAudio = null;
    this.remoteAudio = null;
    this.localStream = null;
  }
  return _createClass(ChatPluginWebRtc, [{
    key: "listenSocketEvent",
    value: function listenSocketEvent() {
      var _this = this;
      this.channel.on("web_rtc_candidate", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                console.log("Get ice candidate from remote peer");
                if (!_this.peerConnection) {
                  _context.next = 11;
                  break;
                }
                _context.prev = 2;
                _context.next = 5;
                return _this.peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
              case 5:
                console.log("addIceCandidate success");
                _context.next = 11;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.error("addIceCandidate error", _context.t0);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[2, 8]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      this.channel.on("web_rtc_remote_description", /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
          var desc, answer;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                console.log("Get offer from remote peer");
                if (!_this.peerConnection) {
                  _this.initPeerConnection();
                }
                console.log(_this.peerConnection.signalingState);
                desc = new RTCSessionDescription(data.description);
                _context2.next = 6;
                return _this.peerConnection.setRemoteDescription(desc);
              case 6:
                if (!(data.description.type === "offer")) {
                  _context2.next = 20;
                  break;
                }
                _context2.prev = 7;
                _context2.next = 10;
                return _this.peerConnection.createAnswer();
              case 10:
                answer = _context2.sent;
                _context2.next = 13;
                return _this.peerConnection.setLocalDescription(answer);
              case 13:
                _this.channel.push("web_rtc_remote_description", {
                  description: _this.peerConnection.localDescription,
                  target_id: _this.targetId
                });
                _this.setLocalAudio();
                _context2.next = 20;
                break;
              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](7);
                console.error("createAnswer error", _context2.t0);
              case 20:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[7, 17]]);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "initPeerConnection",
    value: function initPeerConnection() {
      var _this2 = this;
      if (this.peerConnection) return;
      this.peerConnection = new RTCPeerConnection({
        iceServers: [{
          urls: "stun:stun.l.google.com:19302"
        }]
      });
      this.peerConnection.onconnectionstatechange = function () {
        console.log(_this2.peerConnection.connectionState);
        if (_this2.onPeerConnectionStateChange) {
          _this2.onPeerConnectionStateChange(_this2.peerConnection.connectionState);
        }
      };
      this.peerConnection.onicecandidate = function (event) {
        console.log("Get ice candidate from local peer");
        if (event.candidate) {
          _this2.channel.push("web_rtc_candidate", {
            candidate: event.candidate,
            target_id: _this2.targetId
          });
        }
      };
      this.peerConnection.ontrack = function (event) {
        if (!_this2.remoteAudio) {
          console.log("Get remote stream from remote peer");
          _this2.remoteAudio = _this2.createNewAudio(true);
          _this2.remoteAudio.srcObject = event.streams[0];
          _this2.remoteAudio.play();
          _this2.remoteAudio.ontimeupdate = function () {
            if (_this2.onAudioTimeUpdate) {
              _this2.onAudioTimeUpdate(_this2.remoteAudio.currentTime);
            }
          };
        }
      };
      this.peerConnection.onnegotiationneeded = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, event) {
          var offer;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                console.log("Negotiation needed");
                _context3.prev = 1;
                _context3.next = 4;
                return _this2.peerConnection.createOffer();
              case 4:
                offer = _context3.sent;
                _context3.next = 7;
                return _this2.peerConnection.setLocalDescription(offer);
              case 7:
                _this2.channel.push("web_rtc_remote_description", {
                  description: _this2.peerConnection.localDescription,
                  target_id: _this2.targetId
                });
                _context3.next = 13;
                break;
              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);
                console.error("Negotiation error", _context3.t0);
              case 13:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[1, 10]]);
        }));
        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }();
    }
  }, {
    key: "setLocalAudio",
    value: function () {
      var _setLocalAudio = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(this.localAudio || this.localStream)) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              _context4.prev = 2;
              this.localAudio = this.createNewAudio();
              _context4.next = 6;
              return navigator.mediaDevices.getUserMedia({
                audio: true
              });
            case 6:
              this.localStream = _context4.sent;
              this.localAudio.srcObject = this.localStream;
              this.localStream.getTracks().forEach(function (track) {
                return _this3.peerConnection.addTrack(track, _this3.localStream);
              });
              _context4.next = 14;
              break;
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](2);
              console.error("setLocalAudio error", _context4.t0);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[2, 11]]);
      }));
      function setLocalAudio() {
        return _setLocalAudio.apply(this, arguments);
      }
      return setLocalAudio;
    }()
  }, {
    key: "startCall",
    value: function startCall() {
      if (!this.peerConnection) {
        this.initPeerConnection();
      }
      this.setLocalAudio();
      this.listenSocketEvent();
    }
  }, {
    key: "hangUp",
    value: function hangUp() {
      var _this$peerConnection, _this$localStream;
      (_this$peerConnection = this.peerConnection) === null || _this$peerConnection === void 0 || _this$peerConnection.close();
      this.peerConnection = null;
      this.resetAudio(this.localAudio);
      this.resetAudio(this.remoteAudio);
      this.channel.off("web_rtc_candidate");
      this.channel.off("web_rtc_remote_description");
      (_this$localStream = this.localStream) === null || _this$localStream === void 0 || _this$localStream.getTracks().forEach(function (track) {
        return track.stop();
      });
      this.localStream = null;
    }
  }, {
    key: "resetAudio",
    value: function resetAudio(audio) {
      if (!audio) return;
      audio.srcObject = null;
      audio = null;
    }
  }, {
    key: "createNewAudio",
    value: function createNewAudio() {
      var isRemote = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var audio = new Audio();
      audio.muted = !isRemote;
      audio.autoPlay = true;
      return audio;
    }
  }]);
}();