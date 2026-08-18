(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === "childList")
        for (const l of u.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = r(s);
    fetch(s.href, u);
  }
})();
function Rf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ud = { exports: {} },
  es = {},
  cd = { exports: {} },
  Ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ig;
function v2() {
  if (ig) return Ne;
  ig = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    l = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    f = Symbol.for("react.memo"),
    h = Symbol.for("react.lazy"),
    g = Symbol.iterator;
  function y(_) {
    return _ === null || typeof _ != "object"
      ? null
      : ((_ = (g && _[g]) || _["@@iterator"]),
        typeof _ == "function" ? _ : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    P = {};
  function C(_, O, oe) {
    ((this.props = _),
      (this.context = O),
      (this.refs = P),
      (this.updater = oe || S));
  }
  ((C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (_, O) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, _, O, "setState");
    }),
    (C.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    }));
  function T() {}
  T.prototype = C.prototype;
  function N(_, O, oe) {
    ((this.props = _),
      (this.context = O),
      (this.refs = P),
      (this.updater = oe || S));
  }
  var k = (N.prototype = new T());
  ((k.constructor = N), x(k, C.prototype), (k.isPureReactComponent = !0));
  var M = Array.isArray,
    I = Object.prototype.hasOwnProperty,
    b = { current: null },
    R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function V(_, O, oe) {
    var re,
      le = {},
      ce = null,
      ue = null;
    if (O != null)
      for (re in (O.ref !== void 0 && (ue = O.ref),
      O.key !== void 0 && (ce = "" + O.key),
      O))
        I.call(O, re) && !R.hasOwnProperty(re) && (le[re] = O[re]);
    var Q = arguments.length - 2;
    if (Q === 1) le.children = oe;
    else if (1 < Q) {
      for (var ae = Array(Q), ke = 0; ke < Q; ke++) ae[ke] = arguments[ke + 2];
      le.children = ae;
    }
    if (_ && _.defaultProps)
      for (re in ((Q = _.defaultProps), Q))
        le[re] === void 0 && (le[re] = Q[re]);
    return {
      $$typeof: e,
      type: _,
      key: ce,
      ref: ue,
      props: le,
      _owner: b.current,
    };
  }
  function U(_, O) {
    return {
      $$typeof: e,
      type: _.type,
      key: O,
      ref: _.ref,
      props: _.props,
      _owner: _._owner,
    };
  }
  function K(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }
  function Z(_) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      _.replace(/[=:]/g, function (oe) {
        return O[oe];
      })
    );
  }
  var ee = /\/+/g;
  function J(_, O) {
    return typeof _ == "object" && _ !== null && _.key != null
      ? Z("" + _.key)
      : O.toString(36);
  }
  function j(_, O, oe, re, le) {
    var ce = typeof _;
    (ce === "undefined" || ce === "boolean") && (_ = null);
    var ue = !1;
    if (_ === null) ue = !0;
    else
      switch (ce) {
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case e:
            case t:
              ue = !0;
          }
      }
    if (ue)
      return (
        (ue = _),
        (le = le(ue)),
        (_ = re === "" ? "." + J(ue, 0) : re),
        M(le)
          ? ((oe = ""),
            _ != null && (oe = _.replace(ee, "$&/") + "/"),
            j(le, O, oe, "", function (ke) {
              return ke;
            }))
          : le != null &&
            (K(le) &&
              (le = U(
                le,
                oe +
                  (!le.key || (ue && ue.key === le.key)
                    ? ""
                    : ("" + le.key).replace(ee, "$&/") + "/") +
                  _,
              )),
            O.push(le)),
        1
      );
    if (((ue = 0), (re = re === "" ? "." : re + ":"), M(_)))
      for (var Q = 0; Q < _.length; Q++) {
        ce = _[Q];
        var ae = re + J(ce, Q);
        ue += j(ce, O, oe, ae, le);
      }
    else if (((ae = y(_)), typeof ae == "function"))
      for (_ = ae.call(_), Q = 0; !(ce = _.next()).done; )
        ((ce = ce.value), (ae = re + J(ce, Q++)), (ue += j(ce, O, oe, ae, le)));
    else if (ce === "object")
      throw (
        (O = String(_)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(_).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ue;
  }
  function H(_, O, oe) {
    if (_ == null) return _;
    var re = [],
      le = 0;
    return (
      j(_, re, "", "", function (ce) {
        return O.call(oe, ce, le++);
      }),
      re
    );
  }
  function F(_) {
    if (_._status === -1) {
      var O = _._result;
      ((O = O()),
        O.then(
          function (oe) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 1), (_._result = oe));
          },
          function (oe) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 2), (_._result = oe));
          },
        ),
        _._status === -1 && ((_._status = 0), (_._result = O)));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var W = { current: null },
    L = { transition: null },
    $ = {
      ReactCurrentDispatcher: W,
      ReactCurrentBatchConfig: L,
      ReactCurrentOwner: b,
    };
  function G() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Ne.Children = {
      map: H,
      forEach: function (_, O, oe) {
        H(
          _,
          function () {
            O.apply(this, arguments);
          },
          oe,
        );
      },
      count: function (_) {
        var O = 0;
        return (
          H(_, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (_) {
        return (
          H(_, function (O) {
            return O;
          }) || []
        );
      },
      only: function (_) {
        if (!K(_))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return _;
      },
    }),
    (Ne.Component = C),
    (Ne.Fragment = r),
    (Ne.Profiler = s),
    (Ne.PureComponent = N),
    (Ne.StrictMode = o),
    (Ne.Suspense = p),
    (Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
    (Ne.act = G),
    (Ne.cloneElement = function (_, O, oe) {
      if (_ == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            _ +
            ".",
        );
      var re = x({}, _.props),
        le = _.key,
        ce = _.ref,
        ue = _._owner;
      if (O != null) {
        if (
          (O.ref !== void 0 && ((ce = O.ref), (ue = b.current)),
          O.key !== void 0 && (le = "" + O.key),
          _.type && _.type.defaultProps)
        )
          var Q = _.type.defaultProps;
        for (ae in O)
          I.call(O, ae) &&
            !R.hasOwnProperty(ae) &&
            (re[ae] = O[ae] === void 0 && Q !== void 0 ? Q[ae] : O[ae]);
      }
      var ae = arguments.length - 2;
      if (ae === 1) re.children = oe;
      else if (1 < ae) {
        Q = Array(ae);
        for (var ke = 0; ke < ae; ke++) Q[ke] = arguments[ke + 2];
        re.children = Q;
      }
      return {
        $$typeof: e,
        type: _.type,
        key: le,
        ref: ce,
        props: re,
        _owner: ue,
      };
    }),
    (Ne.createContext = function (_) {
      return (
        (_ = {
          $$typeof: l,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (_.Provider = { $$typeof: u, _context: _ }),
        (_.Consumer = _)
      );
    }),
    (Ne.createElement = V),
    (Ne.createFactory = function (_) {
      var O = V.bind(null, _);
      return ((O.type = _), O);
    }),
    (Ne.createRef = function () {
      return { current: null };
    }),
    (Ne.forwardRef = function (_) {
      return { $$typeof: d, render: _ };
    }),
    (Ne.isValidElement = K),
    (Ne.lazy = function (_) {
      return { $$typeof: h, _payload: { _status: -1, _result: _ }, _init: F };
    }),
    (Ne.memo = function (_, O) {
      return { $$typeof: f, type: _, compare: O === void 0 ? null : O };
    }),
    (Ne.startTransition = function (_) {
      var O = L.transition;
      L.transition = {};
      try {
        _();
      } finally {
        L.transition = O;
      }
    }),
    (Ne.unstable_act = G),
    (Ne.useCallback = function (_, O) {
      return W.current.useCallback(_, O);
    }),
    (Ne.useContext = function (_) {
      return W.current.useContext(_);
    }),
    (Ne.useDebugValue = function () {}),
    (Ne.useDeferredValue = function (_) {
      return W.current.useDeferredValue(_);
    }),
    (Ne.useEffect = function (_, O) {
      return W.current.useEffect(_, O);
    }),
    (Ne.useId = function () {
      return W.current.useId();
    }),
    (Ne.useImperativeHandle = function (_, O, oe) {
      return W.current.useImperativeHandle(_, O, oe);
    }),
    (Ne.useInsertionEffect = function (_, O) {
      return W.current.useInsertionEffect(_, O);
    }),
    (Ne.useLayoutEffect = function (_, O) {
      return W.current.useLayoutEffect(_, O);
    }),
    (Ne.useMemo = function (_, O) {
      return W.current.useMemo(_, O);
    }),
    (Ne.useReducer = function (_, O, oe) {
      return W.current.useReducer(_, O, oe);
    }),
    (Ne.useRef = function (_) {
      return W.current.useRef(_);
    }),
    (Ne.useState = function (_) {
      return W.current.useState(_);
    }),
    (Ne.useSyncExternalStore = function (_, O, oe) {
      return W.current.useSyncExternalStore(_, O, oe);
    }),
    (Ne.useTransition = function () {
      return W.current.useTransition();
    }),
    (Ne.version = "18.3.1"),
    Ne
  );
}
var og;
function Ms() {
  return (og || ((og = 1), (cd.exports = v2())), cd.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sg;
function x2() {
  if (sg) return es;
  sg = 1;
  var e = Ms(),
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    o = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, p, f) {
    var h,
      g = {},
      y = null,
      S = null;
    (f !== void 0 && (y = "" + f),
      p.key !== void 0 && (y = "" + p.key),
      p.ref !== void 0 && (S = p.ref));
    for (h in p) o.call(p, h) && !u.hasOwnProperty(h) && (g[h] = p[h]);
    if (d && d.defaultProps)
      for (h in ((p = d.defaultProps), p)) g[h] === void 0 && (g[h] = p[h]);
    return {
      $$typeof: t,
      type: d,
      key: y,
      ref: S,
      props: g,
      _owner: s.current,
    };
  }
  return ((es.Fragment = r), (es.jsx = l), (es.jsxs = l), es);
}
var ag;
function w2() {
  return (ag || ((ag = 1), (ud.exports = x2())), ud.exports);
}
var w = w2(),
  D = Ms();
const Fi = Rf(D);
var tl = {},
  dd = { exports: {} },
  Mt = {},
  fd = { exports: {} },
  hd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lg;
function S2() {
  return (
    lg ||
      ((lg = 1),
      (function (e) {
        function t(L, $) {
          var G = L.length;
          L.push($);
          e: for (; 0 < G; ) {
            var _ = (G - 1) >>> 1,
              O = L[_];
            if (0 < s(O, $)) ((L[_] = $), (L[G] = O), (G = _));
            else break e;
          }
        }
        function r(L) {
          return L.length === 0 ? null : L[0];
        }
        function o(L) {
          if (L.length === 0) return null;
          var $ = L[0],
            G = L.pop();
          if (G !== $) {
            L[0] = G;
            e: for (var _ = 0, O = L.length, oe = O >>> 1; _ < oe; ) {
              var re = 2 * (_ + 1) - 1,
                le = L[re],
                ce = re + 1,
                ue = L[ce];
              if (0 > s(le, G))
                ce < O && 0 > s(ue, le)
                  ? ((L[_] = ue), (L[ce] = G), (_ = ce))
                  : ((L[_] = le), (L[re] = G), (_ = re));
              else if (ce < O && 0 > s(ue, G))
                ((L[_] = ue), (L[ce] = G), (_ = ce));
              else break e;
            }
          }
          return $;
        }
        function s(L, $) {
          var G = L.sortIndex - $.sortIndex;
          return G !== 0 ? G : L.id - $.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var l = Date,
            d = l.now();
          e.unstable_now = function () {
            return l.now() - d;
          };
        }
        var p = [],
          f = [],
          h = 1,
          g = null,
          y = 3,
          S = !1,
          x = !1,
          P = !1,
          C = typeof setTimeout == "function" ? setTimeout : null,
          T = typeof clearTimeout == "function" ? clearTimeout : null,
          N = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function k(L) {
          for (var $ = r(f); $ !== null; ) {
            if ($.callback === null) o(f);
            else if ($.startTime <= L)
              (o(f), ($.sortIndex = $.expirationTime), t(p, $));
            else break;
            $ = r(f);
          }
        }
        function M(L) {
          if (((P = !1), k(L), !x))
            if (r(p) !== null) ((x = !0), F(I));
            else {
              var $ = r(f);
              $ !== null && W(M, $.startTime - L);
            }
        }
        function I(L, $) {
          ((x = !1), P && ((P = !1), T(V), (V = -1)), (S = !0));
          var G = y;
          try {
            for (
              k($), g = r(p);
              g !== null && (!(g.expirationTime > $) || (L && !Z()));

            ) {
              var _ = g.callback;
              if (typeof _ == "function") {
                ((g.callback = null), (y = g.priorityLevel));
                var O = _(g.expirationTime <= $);
                (($ = e.unstable_now()),
                  typeof O == "function"
                    ? (g.callback = O)
                    : g === r(p) && o(p),
                  k($));
              } else o(p);
              g = r(p);
            }
            if (g !== null) var oe = !0;
            else {
              var re = r(f);
              (re !== null && W(M, re.startTime - $), (oe = !1));
            }
            return oe;
          } finally {
            ((g = null), (y = G), (S = !1));
          }
        }
        var b = !1,
          R = null,
          V = -1,
          U = 5,
          K = -1;
        function Z() {
          return !(e.unstable_now() - K < U);
        }
        function ee() {
          if (R !== null) {
            var L = e.unstable_now();
            K = L;
            var $ = !0;
            try {
              $ = R(!0, L);
            } finally {
              $ ? J() : ((b = !1), (R = null));
            }
          } else b = !1;
        }
        var J;
        if (typeof N == "function")
          J = function () {
            N(ee);
          };
        else if (typeof MessageChannel < "u") {
          var j = new MessageChannel(),
            H = j.port2;
          ((j.port1.onmessage = ee),
            (J = function () {
              H.postMessage(null);
            }));
        } else
          J = function () {
            C(ee, 0);
          };
        function F(L) {
          ((R = L), b || ((b = !0), J()));
        }
        function W(L, $) {
          V = C(function () {
            L(e.unstable_now());
          }, $);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            x || S || ((x = !0), F(I));
          }),
          (e.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (U = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return r(p);
          }),
          (e.unstable_next = function (L) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = y;
            }
            var G = y;
            y = $;
            try {
              return L();
            } finally {
              y = G;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (L, $) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var G = y;
            y = L;
            try {
              return $();
            } finally {
              y = G;
            }
          }),
          (e.unstable_scheduleCallback = function (L, $, G) {
            var _ = e.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? _ + G : _))
                : (G = _),
              L)
            ) {
              case 1:
                var O = -1;
                break;
              case 2:
                O = 250;
                break;
              case 5:
                O = 1073741823;
                break;
              case 4:
                O = 1e4;
                break;
              default:
                O = 5e3;
            }
            return (
              (O = G + O),
              (L = {
                id: h++,
                callback: $,
                priorityLevel: L,
                startTime: G,
                expirationTime: O,
                sortIndex: -1,
              }),
              G > _
                ? ((L.sortIndex = G),
                  t(f, L),
                  r(p) === null &&
                    L === r(f) &&
                    (P ? (T(V), (V = -1)) : (P = !0), W(M, G - _)))
                : ((L.sortIndex = O), t(p, L), x || S || ((x = !0), F(I))),
              L
            );
          }),
          (e.unstable_shouldYield = Z),
          (e.unstable_wrapCallback = function (L) {
            var $ = y;
            return function () {
              var G = y;
              y = $;
              try {
                return L.apply(this, arguments);
              } finally {
                y = G;
              }
            };
          }));
      })(hd)),
    hd
  );
}
var ug;
function k2() {
  return (ug || ((ug = 1), (fd.exports = S2())), fd.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cg;
function E2() {
  if (cg) return Mt;
  cg = 1;
  var e = Ms(),
    t = k2();
  function r(n) {
    for (
      var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + n,
        a = 1;
      a < arguments.length;
      a++
    )
      i += "&args[]=" + encodeURIComponent(arguments[a]);
    return (
      "Minified React error #" +
      n +
      "; visit " +
      i +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var o = new Set(),
    s = {};
  function u(n, i) {
    (l(n, i), l(n + "Capture", i));
  }
  function l(n, i) {
    for (s[n] = i, n = 0; n < i.length; n++) o.add(i[n]);
  }
  var d = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    p = Object.prototype.hasOwnProperty,
    f =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    h = {},
    g = {};
  function y(n) {
    return p.call(g, n)
      ? !0
      : p.call(h, n)
        ? !1
        : f.test(n)
          ? (g[n] = !0)
          : ((h[n] = !0), !1);
  }
  function S(n, i, a, c) {
    if (a !== null && a.type === 0) return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c
          ? !1
          : a !== null
            ? !a.acceptsBooleans
            : ((n = n.toLowerCase().slice(0, 5)),
              n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function x(n, i, a, c) {
    if (i === null || typeof i > "u" || S(n, i, a, c)) return !0;
    if (c) return !1;
    if (a !== null)
      switch (a.type) {
        case 3:
          return !i;
        case 4:
          return i === !1;
        case 5:
          return isNaN(i);
        case 6:
          return isNaN(i) || 1 > i;
      }
    return !1;
  }
  function P(n, i, a, c, m, v, E) {
    ((this.acceptsBooleans = i === 2 || i === 3 || i === 4),
      (this.attributeName = c),
      (this.attributeNamespace = m),
      (this.mustUseProperty = a),
      (this.propertyName = n),
      (this.type = i),
      (this.sanitizeURL = v),
      (this.removeEmptyString = E));
  }
  var C = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (n) {
      C[n] = new P(n, 0, !1, n, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (n) {
      var i = n[0];
      C[i] = new P(i, 1, !1, n[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (n) {
        C[n] = new P(n, 2, !1, n.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (n) {
      C[n] = new P(n, 2, !1, n, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (n) {
        C[n] = new P(n, 3, !1, n.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (n) {
      C[n] = new P(n, 3, !0, n, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (n) {
      C[n] = new P(n, 4, !1, n, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (n) {
      C[n] = new P(n, 6, !1, n, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (n) {
      C[n] = new P(n, 5, !1, n.toLowerCase(), null, !1, !1);
    }));
  var T = /[\-:]([a-z])/g;
  function N(n) {
    return n[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (n) {
      var i = n.replace(T, N);
      C[i] = new P(i, 1, !1, n, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (n) {
        var i = n.replace(T, N);
        C[i] = new P(i, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
      var i = n.replace(T, N);
      C[i] = new P(i, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (n) {
      C[n] = new P(n, 1, !1, n.toLowerCase(), null, !1, !1);
    }),
    (C.xlinkHref = new P(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (n) {
      C[n] = new P(n, 1, !1, n.toLowerCase(), null, !0, !0);
    }));
  function k(n, i, a, c) {
    var m = C.hasOwnProperty(i) ? C[i] : null;
    (m !== null
      ? m.type !== 0
      : c ||
        !(2 < i.length) ||
        (i[0] !== "o" && i[0] !== "O") ||
        (i[1] !== "n" && i[1] !== "N")) &&
      (x(i, a, m, c) && (a = null),
      c || m === null
        ? y(i) &&
          (a === null ? n.removeAttribute(i) : n.setAttribute(i, "" + a))
        : m.mustUseProperty
          ? (n[m.propertyName] = a === null ? (m.type === 3 ? !1 : "") : a)
          : ((i = m.attributeName),
            (c = m.attributeNamespace),
            a === null
              ? n.removeAttribute(i)
              : ((m = m.type),
                (a = m === 3 || (m === 4 && a === !0) ? "" : "" + a),
                c ? n.setAttributeNS(c, i, a) : n.setAttribute(i, a))));
  }
  var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    I = Symbol.for("react.element"),
    b = Symbol.for("react.portal"),
    R = Symbol.for("react.fragment"),
    V = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    K = Symbol.for("react.provider"),
    Z = Symbol.for("react.context"),
    ee = Symbol.for("react.forward_ref"),
    J = Symbol.for("react.suspense"),
    j = Symbol.for("react.suspense_list"),
    H = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    W = Symbol.for("react.offscreen"),
    L = Symbol.iterator;
  function $(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (L && n[L]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var G = Object.assign,
    _;
  function O(n) {
    if (_ === void 0)
      try {
        throw Error();
      } catch (a) {
        var i = a.stack.trim().match(/\n( *(at )?)/);
        _ = (i && i[1]) || "";
      }
    return (
      `
` +
      _ +
      n
    );
  }
  var oe = !1;
  function re(n, i) {
    if (!n || oe) return "";
    oe = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (i)
        if (
          ((i = function () {
            throw Error();
          }),
          Object.defineProperty(i.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(i, []);
          } catch (q) {
            var c = q;
          }
          Reflect.construct(n, [], i);
        } else {
          try {
            i.call();
          } catch (q) {
            c = q;
          }
          n.call(i.prototype);
        }
      else {
        try {
          throw Error();
        } catch (q) {
          c = q;
        }
        n();
      }
    } catch (q) {
      if (q && c && typeof q.stack == "string") {
        for (
          var m = q.stack.split(`
`),
            v = c.stack.split(`
`),
            E = m.length - 1,
            A = v.length - 1;
          1 <= E && 0 <= A && m[E] !== v[A];

        )
          A--;
        for (; 1 <= E && 0 <= A; E--, A--)
          if (m[E] !== v[A]) {
            if (E !== 1 || A !== 1)
              do
                if ((E--, A--, 0 > A || m[E] !== v[A])) {
                  var z =
                    `
` + m[E].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", n.displayName)),
                    z
                  );
                }
              while (1 <= E && 0 <= A);
            break;
          }
      }
    } finally {
      ((oe = !1), (Error.prepareStackTrace = a));
    }
    return (n = n ? n.displayName || n.name : "") ? O(n) : "";
  }
  function le(n) {
    switch (n.tag) {
      case 5:
        return O(n.type);
      case 16:
        return O("Lazy");
      case 13:
        return O("Suspense");
      case 19:
        return O("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((n = re(n.type, !1)), n);
      case 11:
        return ((n = re(n.type.render, !1)), n);
      case 1:
        return ((n = re(n.type, !0)), n);
      default:
        return "";
    }
  }
  function ce(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case R:
        return "Fragment";
      case b:
        return "Portal";
      case U:
        return "Profiler";
      case V:
        return "StrictMode";
      case J:
        return "Suspense";
      case j:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Z:
          return (n.displayName || "Context") + ".Consumer";
        case K:
          return (n._context.displayName || "Context") + ".Provider";
        case ee:
          var i = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = i.displayName || i.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case H:
          return (
            (i = n.displayName || null),
            i !== null ? i : ce(n.type) || "Memo"
          );
        case F:
          ((i = n._payload), (n = n._init));
          try {
            return ce(n(i));
          } catch {}
      }
    return null;
  }
  function ue(n) {
    var i = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (i.displayName || "Context") + ".Consumer";
      case 10:
        return (i._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (n = i.render),
          (n = n.displayName || n.name || ""),
          i.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return i;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ce(i);
      case 8:
        return i === V ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof i == "function") return i.displayName || i.name || null;
        if (typeof i == "string") return i;
    }
    return null;
  }
  function Q(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ae(n) {
    var i = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (i === "checkbox" || i === "radio")
    );
  }
  function ke(n) {
    var i = ae(n) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(n.constructor.prototype, i),
      c = "" + n[i];
    if (
      !n.hasOwnProperty(i) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var m = a.get,
        v = a.set;
      return (
        Object.defineProperty(n, i, {
          configurable: !0,
          get: function () {
            return m.call(this);
          },
          set: function (E) {
            ((c = "" + E), v.call(this, E));
          },
        }),
        Object.defineProperty(n, i, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return c;
          },
          setValue: function (E) {
            c = "" + E;
          },
          stopTracking: function () {
            ((n._valueTracker = null), delete n[i]);
          },
        }
      );
    }
  }
  function Pe(n) {
    n._valueTracker || (n._valueTracker = ke(n));
  }
  function xe(n) {
    if (!n) return !1;
    var i = n._valueTracker;
    if (!i) return !0;
    var a = i.getValue(),
      c = "";
    return (
      n && (c = ae(n) ? (n.checked ? "true" : "false") : n.value),
      (n = c),
      n !== a ? (i.setValue(n), !0) : !1
    );
  }
  function Se(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Me(n, i) {
    var a = i.checked;
    return G({}, i, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: a ?? n._wrapperState.initialChecked,
    });
  }
  function be(n, i) {
    var a = i.defaultValue == null ? "" : i.defaultValue,
      c = i.checked != null ? i.checked : i.defaultChecked;
    ((a = Q(i.value != null ? i.value : a)),
      (n._wrapperState = {
        initialChecked: c,
        initialValue: a,
        controlled:
          i.type === "checkbox" || i.type === "radio"
            ? i.checked != null
            : i.value != null,
      }));
  }
  function De(n, i) {
    ((i = i.checked), i != null && k(n, "checked", i, !1));
  }
  function Qe(n, i) {
    De(n, i);
    var a = Q(i.value),
      c = i.type;
    if (a != null)
      c === "number"
        ? ((a === 0 && n.value === "") || n.value != a) && (n.value = "" + a)
        : n.value !== "" + a && (n.value = "" + a);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    (i.hasOwnProperty("value")
      ? wt(n, i.type, a)
      : i.hasOwnProperty("defaultValue") && wt(n, i.type, Q(i.defaultValue)),
      i.checked == null &&
        i.defaultChecked != null &&
        (n.defaultChecked = !!i.defaultChecked));
  }
  function Ft(n, i, a) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var c = i.type;
      if (
        !(
          (c !== "submit" && c !== "reset") ||
          (i.value !== void 0 && i.value !== null)
        )
      )
        return;
      ((i = "" + n._wrapperState.initialValue),
        a || i === n.value || (n.value = i),
        (n.defaultValue = i));
    }
    ((a = n.name),
      a !== "" && (n.name = ""),
      (n.defaultChecked = !!n._wrapperState.initialChecked),
      a !== "" && (n.name = a));
  }
  function wt(n, i, a) {
    (i !== "number" || Se(n.ownerDocument) !== n) &&
      (a == null
        ? (n.defaultValue = "" + n._wrapperState.initialValue)
        : n.defaultValue !== "" + a && (n.defaultValue = "" + a));
  }
  var ut = Array.isArray;
  function ct(n, i, a, c) {
    if (((n = n.options), i)) {
      i = {};
      for (var m = 0; m < a.length; m++) i["$" + a[m]] = !0;
      for (a = 0; a < n.length; a++)
        ((m = i.hasOwnProperty("$" + n[a].value)),
          n[a].selected !== m && (n[a].selected = m),
          m && c && (n[a].defaultSelected = !0));
    } else {
      for (a = "" + Q(a), i = null, m = 0; m < n.length; m++) {
        if (n[m].value === a) {
          ((n[m].selected = !0), c && (n[m].defaultSelected = !0));
          return;
        }
        i !== null || n[m].disabled || (i = n[m]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function _n(n, i) {
    if (i.dangerouslySetInnerHTML != null) throw Error(r(91));
    return G({}, i, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue,
    });
  }
  function hn(n, i) {
    var a = i.value;
    if (a == null) {
      if (((a = i.children), (i = i.defaultValue), a != null)) {
        if (i != null) throw Error(r(92));
        if (ut(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        i = a;
      }
      (i == null && (i = ""), (a = i));
    }
    n._wrapperState = { initialValue: Q(a) };
  }
  function pn(n, i) {
    var a = Q(i.value),
      c = Q(i.defaultValue);
    (a != null &&
      ((a = "" + a),
      a !== n.value && (n.value = a),
      i.defaultValue == null && n.defaultValue !== a && (n.defaultValue = a)),
      c != null && (n.defaultValue = "" + c));
  }
  function St(n) {
    var i = n.textContent;
    i === n._wrapperState.initialValue &&
      i !== "" &&
      i !== null &&
      (n.value = i);
  }
  function $t(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _t(n, i) {
    return n == null || n === "http://www.w3.org/1999/xhtml"
      ? $t(i)
      : n === "http://www.w3.org/2000/svg" && i === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : n;
  }
  var Bt,
    ai = (function (n) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (i, a, c, m) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(i, a, c, m);
            });
          }
        : n;
    })(function (n, i) {
      if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
        n.innerHTML = i;
      else {
        for (
          Bt = Bt || document.createElement("div"),
            Bt.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>",
            i = Bt.firstChild;
          n.firstChild;

        )
          n.removeChild(n.firstChild);
        for (; i.firstChild; ) n.appendChild(i.firstChild);
      }
    });
  function jn(n, i) {
    if (i) {
      var a = n.firstChild;
      if (a && a === n.lastChild && a.nodeType === 3) {
        a.nodeValue = i;
        return;
      }
    }
    n.textContent = i;
  }
  var Er = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    yu = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Er).forEach(function (n) {
    yu.forEach(function (i) {
      ((i = i + n.charAt(0).toUpperCase() + n.substring(1)), (Er[i] = Er[n]));
    });
  });
  function zs(n, i, a) {
    return i == null || typeof i == "boolean" || i === ""
      ? ""
      : a || typeof i != "number" || i === 0 || (Er.hasOwnProperty(n) && Er[n])
        ? ("" + i).trim()
        : i + "px";
  }
  function Os(n, i) {
    n = n.style;
    for (var a in i)
      if (i.hasOwnProperty(a)) {
        var c = a.indexOf("--") === 0,
          m = zs(a, i[a], c);
        (a === "float" && (a = "cssFloat"),
          c ? n.setProperty(a, m) : (n[a] = m));
      }
  }
  var vu = G(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function co(n, i) {
    if (i) {
      if (vu[n] && (i.children != null || i.dangerouslySetInnerHTML != null))
        throw Error(r(137, n));
      if (i.dangerouslySetInnerHTML != null) {
        if (i.children != null) throw Error(r(60));
        if (
          typeof i.dangerouslySetInnerHTML != "object" ||
          !("__html" in i.dangerouslySetInnerHTML)
        )
          throw Error(r(61));
      }
      if (i.style != null && typeof i.style != "object") throw Error(r(62));
    }
  }
  function fo(n, i) {
    if (n.indexOf("-") === -1) return typeof i.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ho = null;
  function po(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var mo = null,
    Xn = null,
    Yn = null;
  function Fs(n) {
    if ((n = Oo(n))) {
      if (typeof mo != "function") throw Error(r(280));
      var i = n.stateNode;
      i && ((i = ga(i)), mo(n.stateNode, n.type, i));
    }
  }
  function $s(n) {
    Xn ? (Yn ? Yn.push(n) : (Yn = [n])) : (Xn = n);
  }
  function Bs() {
    if (Xn) {
      var n = Xn,
        i = Yn;
      if (((Yn = Xn = null), Fs(n), i)) for (n = 0; n < i.length; n++) Fs(i[n]);
    }
  }
  function Hs(n, i) {
    return n(i);
  }
  function Us() {}
  var go = !1;
  function Ws(n, i, a) {
    if (go) return n(i, a);
    go = !0;
    try {
      return Hs(n, i, a);
    } finally {
      ((go = !1), (Xn !== null || Yn !== null) && (Us(), Bs()));
    }
  }
  function Cr(n, i) {
    var a = n.stateNode;
    if (a === null) return null;
    var c = ga(a);
    if (c === null) return null;
    a = c[i];
    e: switch (i) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((c = !c.disabled) ||
          ((n = n.type),
          (c = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !c));
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (a && typeof a != "function") throw Error(r(231, i, typeof a));
    return a;
  }
  var yo = !1;
  if (d)
    try {
      var Pr = {};
      (Object.defineProperty(Pr, "passive", {
        get: function () {
          yo = !0;
        },
      }),
        window.addEventListener("test", Pr, Pr),
        window.removeEventListener("test", Pr, Pr));
    } catch {
      yo = !1;
    }
  function xu(n, i, a, c, m, v, E, A, z) {
    var q = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(a, q);
    } catch (ne) {
      this.onError(ne);
    }
  }
  var Tr = !1,
    li = null,
    ui = !1,
    vo = null,
    wu = {
      onError: function (n) {
        ((Tr = !0), (li = n));
      },
    };
  function Su(n, i, a, c, m, v, E, A, z) {
    ((Tr = !1), (li = null), xu.apply(wu, arguments));
  }
  function ku(n, i, a, c, m, v, E, A, z) {
    if ((Su.apply(this, arguments), Tr)) {
      if (Tr) {
        var q = li;
        ((Tr = !1), (li = null));
      } else throw Error(r(198));
      ui || ((ui = !0), (vo = q));
    }
  }
  function mn(n) {
    var i = n,
      a = n;
    if (n.alternate) for (; i.return; ) i = i.return;
    else {
      n = i;
      do ((i = n), (i.flags & 4098) !== 0 && (a = i.return), (n = i.return));
      while (n);
    }
    return i.tag === 3 ? a : null;
  }
  function xo(n) {
    if (n.tag === 13) {
      var i = n.memoizedState;
      if (
        (i === null && ((n = n.alternate), n !== null && (i = n.memoizedState)),
        i !== null)
      )
        return i.dehydrated;
    }
    return null;
  }
  function wo(n) {
    if (mn(n) !== n) throw Error(r(188));
  }
  function Eu(n) {
    var i = n.alternate;
    if (!i) {
      if (((i = mn(n)), i === null)) throw Error(r(188));
      return i !== n ? null : n;
    }
    for (var a = n, c = i; ; ) {
      var m = a.return;
      if (m === null) break;
      var v = m.alternate;
      if (v === null) {
        if (((c = m.return), c !== null)) {
          a = c;
          continue;
        }
        break;
      }
      if (m.child === v.child) {
        for (v = m.child; v; ) {
          if (v === a) return (wo(m), n);
          if (v === c) return (wo(m), i);
          v = v.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== c.return) ((a = m), (c = v));
      else {
        for (var E = !1, A = m.child; A; ) {
          if (A === a) {
            ((E = !0), (a = m), (c = v));
            break;
          }
          if (A === c) {
            ((E = !0), (c = m), (a = v));
            break;
          }
          A = A.sibling;
        }
        if (!E) {
          for (A = v.child; A; ) {
            if (A === a) {
              ((E = !0), (a = v), (c = m));
              break;
            }
            if (A === c) {
              ((E = !0), (c = v), (a = m));
              break;
            }
            A = A.sibling;
          }
          if (!E) throw Error(r(189));
        }
      }
      if (a.alternate !== c) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? n : i;
  }
  function Gs(n) {
    return ((n = Eu(n)), n !== null ? Xs(n) : null);
  }
  function Xs(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var i = Xs(n);
      if (i !== null) return i;
      n = n.sibling;
    }
    return null;
  }
  var Ys = t.unstable_scheduleCallback,
    Ks = t.unstable_cancelCallback,
    Cu = t.unstable_shouldYield,
    Zs = t.unstable_requestPaint,
    Be = t.unstable_now,
    Pu = t.unstable_getCurrentPriorityLevel,
    So = t.unstable_ImmediatePriority,
    qs = t.unstable_UserBlockingPriority,
    ci = t.unstable_NormalPriority,
    Tu = t.unstable_LowPriority,
    Qs = t.unstable_IdlePriority,
    di = null,
    jt = null;
  function Mu(n) {
    if (jt && typeof jt.onCommitFiberRoot == "function")
      try {
        jt.onCommitFiberRoot(di, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var At = Math.clz32 ? Math.clz32 : _u,
    Nu = Math.log,
    bu = Math.LN2;
  function _u(n) {
    return ((n >>>= 0), n === 0 ? 32 : (31 - ((Nu(n) / bu) | 0)) | 0);
  }
  var fi = 64,
    hi = 4194304;
  function Mr(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Nr(n, i) {
    var a = n.pendingLanes;
    if (a === 0) return 0;
    var c = 0,
      m = n.suspendedLanes,
      v = n.pingedLanes,
      E = a & 268435455;
    if (E !== 0) {
      var A = E & ~m;
      A !== 0 ? (c = Mr(A)) : ((v &= E), v !== 0 && (c = Mr(v)));
    } else ((E = a & ~m), E !== 0 ? (c = Mr(E)) : v !== 0 && (c = Mr(v)));
    if (c === 0) return 0;
    if (
      i !== 0 &&
      i !== c &&
      (i & m) === 0 &&
      ((m = c & -c), (v = i & -i), m >= v || (m === 16 && (v & 4194240) !== 0))
    )
      return i;
    if (((c & 4) !== 0 && (c |= a & 16), (i = n.entangledLanes), i !== 0))
      for (n = n.entanglements, i &= c; 0 < i; )
        ((a = 31 - At(i)), (m = 1 << a), (c |= n[a]), (i &= ~m));
    return c;
  }
  function ju(n, i) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return i + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Js(n, i) {
    for (
      var a = n.suspendedLanes,
        c = n.pingedLanes,
        m = n.expirationTimes,
        v = n.pendingLanes;
      0 < v;

    ) {
      var E = 31 - At(v),
        A = 1 << E,
        z = m[E];
      (z === -1
        ? ((A & a) === 0 || (A & c) !== 0) && (m[E] = ju(A, i))
        : z <= i && (n.expiredLanes |= A),
        (v &= ~A));
    }
  }
  function ko(n) {
    return (
      (n = n.pendingLanes & -1073741825),
      n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    );
  }
  function ea() {
    var n = fi;
    return ((fi <<= 1), (fi & 4194240) === 0 && (fi = 64), n);
  }
  function br(n) {
    for (var i = [], a = 0; 31 > a; a++) i.push(n);
    return i;
  }
  function _r(n, i, a) {
    ((n.pendingLanes |= i),
      i !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (i = 31 - At(i)),
      (n[i] = a));
  }
  function Au(n, i) {
    var a = n.pendingLanes & ~i;
    ((n.pendingLanes = i),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.expiredLanes &= i),
      (n.mutableReadLanes &= i),
      (n.entangledLanes &= i),
      (i = n.entanglements));
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < a; ) {
      var m = 31 - At(a),
        v = 1 << m;
      ((i[m] = 0), (c[m] = -1), (n[m] = -1), (a &= ~v));
    }
  }
  function pi(n, i) {
    var a = (n.entangledLanes |= i);
    for (n = n.entanglements; a; ) {
      var c = 31 - At(a),
        m = 1 << c;
      ((m & i) | (n[c] & i) && (n[c] |= i), (a &= ~m));
    }
  }
  var Ie = 0;
  function Lh(n) {
    return (
      (n &= -n),
      1 < n ? (4 < n ? ((n & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Vh,
    Iu,
    zh,
    Oh,
    Fh,
    Du = !1,
    ta = [],
    Kn = null,
    Zn = null,
    qn = null,
    Eo = new Map(),
    Co = new Map(),
    Qn = [],
    Fw =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function $h(n, i) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Zn = null;
        break;
      case "mouseover":
      case "mouseout":
        qn = null;
        break;
      case "pointerover":
      case "pointerout":
        Eo.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Co.delete(i.pointerId);
    }
  }
  function Po(n, i, a, c, m, v) {
    return n === null || n.nativeEvent !== v
      ? ((n = {
          blockedOn: i,
          domEventName: a,
          eventSystemFlags: c,
          nativeEvent: v,
          targetContainers: [m],
        }),
        i !== null && ((i = Oo(i)), i !== null && Iu(i)),
        n)
      : ((n.eventSystemFlags |= c),
        (i = n.targetContainers),
        m !== null && i.indexOf(m) === -1 && i.push(m),
        n);
  }
  function $w(n, i, a, c, m) {
    switch (i) {
      case "focusin":
        return ((Kn = Po(Kn, n, i, a, c, m)), !0);
      case "dragenter":
        return ((Zn = Po(Zn, n, i, a, c, m)), !0);
      case "mouseover":
        return ((qn = Po(qn, n, i, a, c, m)), !0);
      case "pointerover":
        var v = m.pointerId;
        return (Eo.set(v, Po(Eo.get(v) || null, n, i, a, c, m)), !0);
      case "gotpointercapture":
        return (
          (v = m.pointerId),
          Co.set(v, Po(Co.get(v) || null, n, i, a, c, m)),
          !0
        );
    }
    return !1;
  }
  function Bh(n) {
    var i = jr(n.target);
    if (i !== null) {
      var a = mn(i);
      if (a !== null) {
        if (((i = a.tag), i === 13)) {
          if (((i = xo(a)), i !== null)) {
            ((n.blockedOn = i),
              Fh(n.priority, function () {
                zh(a);
              }));
            return;
          }
        } else if (i === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function na(n) {
    if (n.blockedOn !== null) return !1;
    for (var i = n.targetContainers; 0 < i.length; ) {
      var a = Lu(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
      if (a === null) {
        a = n.nativeEvent;
        var c = new a.constructor(a.type, a);
        ((ho = c), a.target.dispatchEvent(c), (ho = null));
      } else return ((i = Oo(a)), i !== null && Iu(i), (n.blockedOn = a), !1);
      i.shift();
    }
    return !0;
  }
  function Hh(n, i, a) {
    na(n) && a.delete(i);
  }
  function Bw() {
    ((Du = !1),
      Kn !== null && na(Kn) && (Kn = null),
      Zn !== null && na(Zn) && (Zn = null),
      qn !== null && na(qn) && (qn = null),
      Eo.forEach(Hh),
      Co.forEach(Hh));
  }
  function To(n, i) {
    n.blockedOn === i &&
      ((n.blockedOn = null),
      Du ||
        ((Du = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Bw)));
  }
  function Mo(n) {
    function i(m) {
      return To(m, n);
    }
    if (0 < ta.length) {
      To(ta[0], n);
      for (var a = 1; a < ta.length; a++) {
        var c = ta[a];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (
      Kn !== null && To(Kn, n),
        Zn !== null && To(Zn, n),
        qn !== null && To(qn, n),
        Eo.forEach(i),
        Co.forEach(i),
        a = 0;
      a < Qn.length;
      a++
    )
      ((c = Qn[a]), c.blockedOn === n && (c.blockedOn = null));
    for (; 0 < Qn.length && ((a = Qn[0]), a.blockedOn === null); )
      (Bh(a), a.blockedOn === null && Qn.shift());
  }
  var mi = M.ReactCurrentBatchConfig,
    ra = !0;
  function Hw(n, i, a, c) {
    var m = Ie,
      v = mi.transition;
    mi.transition = null;
    try {
      ((Ie = 1), Ru(n, i, a, c));
    } finally {
      ((Ie = m), (mi.transition = v));
    }
  }
  function Uw(n, i, a, c) {
    var m = Ie,
      v = mi.transition;
    mi.transition = null;
    try {
      ((Ie = 4), Ru(n, i, a, c));
    } finally {
      ((Ie = m), (mi.transition = v));
    }
  }
  function Ru(n, i, a, c) {
    if (ra) {
      var m = Lu(n, i, a, c);
      if (m === null) (Ju(n, i, c, ia, a), $h(n, c));
      else if ($w(m, n, i, a, c)) c.stopPropagation();
      else if (($h(n, c), i & 4 && -1 < Fw.indexOf(n))) {
        for (; m !== null; ) {
          var v = Oo(m);
          if (
            (v !== null && Vh(v),
            (v = Lu(n, i, a, c)),
            v === null && Ju(n, i, c, ia, a),
            v === m)
          )
            break;
          m = v;
        }
        m !== null && c.stopPropagation();
      } else Ju(n, i, c, null, a);
    }
  }
  var ia = null;
  function Lu(n, i, a, c) {
    if (((ia = null), (n = po(c)), (n = jr(n)), n !== null))
      if (((i = mn(n)), i === null)) n = null;
      else if (((a = i.tag), a === 13)) {
        if (((n = xo(i)), n !== null)) return n;
        n = null;
      } else if (a === 3) {
        if (i.stateNode.current.memoizedState.isDehydrated)
          return i.tag === 3 ? i.stateNode.containerInfo : null;
        n = null;
      } else i !== n && (n = null);
    return ((ia = n), null);
  }
  function Uh(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Pu()) {
          case So:
            return 1;
          case qs:
            return 4;
          case ci:
          case Tu:
            return 16;
          case Qs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jn = null,
    Vu = null,
    oa = null;
  function Wh() {
    if (oa) return oa;
    var n,
      i = Vu,
      a = i.length,
      c,
      m = "value" in Jn ? Jn.value : Jn.textContent,
      v = m.length;
    for (n = 0; n < a && i[n] === m[n]; n++);
    var E = a - n;
    for (c = 1; c <= E && i[a - c] === m[v - c]; c++);
    return (oa = m.slice(n, 1 < c ? 1 - c : void 0));
  }
  function sa(n) {
    var i = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && i === 13 && (n = 13))
        : (n = i),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function aa() {
    return !0;
  }
  function Gh() {
    return !1;
  }
  function It(n) {
    function i(a, c, m, v, E) {
      ((this._reactName = a),
        (this._targetInst = m),
        (this.type = c),
        (this.nativeEvent = v),
        (this.target = E),
        (this.currentTarget = null));
      for (var A in n)
        n.hasOwnProperty(A) && ((a = n[A]), (this[A] = a ? a(v) : v[A]));
      return (
        (this.isDefaultPrevented = (
          v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1
        )
          ? aa
          : Gh),
        (this.isPropagationStopped = Gh),
        this
      );
    }
    return (
      G(i.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = aa));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = aa));
        },
        persist: function () {},
        isPersistent: aa,
      }),
      i
    );
  }
  var gi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    zu = It(gi),
    No = G({}, gi, { view: 0, detail: 0 }),
    Ww = It(No),
    Ou,
    Fu,
    bo,
    la = G({}, No, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Bu,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== bo &&
              (bo && n.type === "mousemove"
                ? ((Ou = n.screenX - bo.screenX), (Fu = n.screenY - bo.screenY))
                : (Fu = Ou = 0),
              (bo = n)),
            Ou);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : Fu;
      },
    }),
    Xh = It(la),
    Gw = G({}, la, { dataTransfer: 0 }),
    Xw = It(Gw),
    Yw = G({}, No, { relatedTarget: 0 }),
    $u = It(Yw),
    Kw = G({}, gi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Zw = It(Kw),
    qw = G({}, gi, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    Qw = It(qw),
    Jw = G({}, gi, { data: 0 }),
    Yh = It(Jw),
    eS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    tS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    nS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function rS(n) {
    var i = this.nativeEvent;
    return i.getModifierState
      ? i.getModifierState(n)
      : (n = nS[n])
        ? !!i[n]
        : !1;
  }
  function Bu() {
    return rS;
  }
  var iS = G({}, No, {
      key: function (n) {
        if (n.key) {
          var i = eS[n.key] || n.key;
          if (i !== "Unidentified") return i;
        }
        return n.type === "keypress"
          ? ((n = sa(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
            ? tS[n.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bu,
      charCode: function (n) {
        return n.type === "keypress" ? sa(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? sa(n)
          : n.type === "keydown" || n.type === "keyup"
            ? n.keyCode
            : 0;
      },
    }),
    oS = It(iS),
    sS = G({}, la, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Kh = It(sS),
    aS = G({}, No, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bu,
    }),
    lS = It(aS),
    uS = G({}, gi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cS = It(uS),
    dS = G({}, la, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
            ? -n.wheelDeltaX
            : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
            ? -n.wheelDeltaY
            : "wheelDelta" in n
              ? -n.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    fS = It(dS),
    hS = [9, 13, 27, 32],
    Hu = d && "CompositionEvent" in window,
    _o = null;
  d && "documentMode" in document && (_o = document.documentMode);
  var pS = d && "TextEvent" in window && !_o,
    Zh = d && (!Hu || (_o && 8 < _o && 11 >= _o)),
    qh = " ",
    Qh = !1;
  function Jh(n, i) {
    switch (n) {
      case "keyup":
        return hS.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ep(n) {
    return (
      (n = n.detail),
      typeof n == "object" && "data" in n ? n.data : null
    );
  }
  var yi = !1;
  function mS(n, i) {
    switch (n) {
      case "compositionend":
        return ep(i);
      case "keypress":
        return i.which !== 32 ? null : ((Qh = !0), qh);
      case "textInput":
        return ((n = i.data), n === qh && Qh ? null : n);
      default:
        return null;
    }
  }
  function gS(n, i) {
    if (yi)
      return n === "compositionend" || (!Hu && Jh(n, i))
        ? ((n = Wh()), (oa = Vu = Jn = null), (yi = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || (i.ctrlKey && i.altKey)) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return Zh && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var yS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function tp(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!yS[n.type] : i === "textarea";
  }
  function np(n, i, a, c) {
    ($s(c),
      (i = ha(i, "onChange")),
      0 < i.length &&
        ((a = new zu("onChange", "change", null, a, c)),
        n.push({ event: a, listeners: i })));
  }
  var jo = null,
    Ao = null;
  function vS(n) {
    wp(n, 0);
  }
  function ua(n) {
    var i = ki(n);
    if (xe(i)) return n;
  }
  function xS(n, i) {
    if (n === "change") return i;
  }
  var rp = !1;
  if (d) {
    var Uu;
    if (d) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var ip = document.createElement("div");
        (ip.setAttribute("oninput", "return;"),
          (Wu = typeof ip.oninput == "function"));
      }
      Uu = Wu;
    } else Uu = !1;
    rp = Uu && (!document.documentMode || 9 < document.documentMode);
  }
  function op() {
    jo && (jo.detachEvent("onpropertychange", sp), (Ao = jo = null));
  }
  function sp(n) {
    if (n.propertyName === "value" && ua(Ao)) {
      var i = [];
      (np(i, Ao, n, po(n)), Ws(vS, i));
    }
  }
  function wS(n, i, a) {
    n === "focusin"
      ? (op(), (jo = i), (Ao = a), jo.attachEvent("onpropertychange", sp))
      : n === "focusout" && op();
  }
  function SS(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ua(Ao);
  }
  function kS(n, i) {
    if (n === "click") return ua(i);
  }
  function ES(n, i) {
    if (n === "input" || n === "change") return ua(i);
  }
  function CS(n, i) {
    return (n === i && (n !== 0 || 1 / n === 1 / i)) || (n !== n && i !== i);
  }
  var qt = typeof Object.is == "function" ? Object.is : CS;
  function Io(n, i) {
    if (qt(n, i)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof i != "object" ||
      i === null
    )
      return !1;
    var a = Object.keys(n),
      c = Object.keys(i);
    if (a.length !== c.length) return !1;
    for (c = 0; c < a.length; c++) {
      var m = a[c];
      if (!p.call(i, m) || !qt(n[m], i[m])) return !1;
    }
    return !0;
  }
  function ap(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function lp(n, i) {
    var a = ap(n);
    n = 0;
    for (var c; a; ) {
      if (a.nodeType === 3) {
        if (((c = n + a.textContent.length), n <= i && c >= i))
          return { node: a, offset: i - n };
        n = c;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ap(a);
    }
  }
  function up(n, i) {
    return n && i
      ? n === i
        ? !0
        : n && n.nodeType === 3
          ? !1
          : i && i.nodeType === 3
            ? up(n, i.parentNode)
            : "contains" in n
              ? n.contains(i)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(i) & 16)
                : !1
      : !1;
  }
  function cp() {
    for (var n = window, i = Se(); i instanceof n.HTMLIFrameElement; ) {
      try {
        var a = typeof i.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) n = i.contentWindow;
      else break;
      i = Se(n.document);
    }
    return i;
  }
  function Gu(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      i &&
      ((i === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        i === "textarea" ||
        n.contentEditable === "true")
    );
  }
  function PS(n) {
    var i = cp(),
      a = n.focusedElem,
      c = n.selectionRange;
    if (
      i !== a &&
      a &&
      a.ownerDocument &&
      up(a.ownerDocument.documentElement, a)
    ) {
      if (c !== null && Gu(a)) {
        if (
          ((i = c.start),
          (n = c.end),
          n === void 0 && (n = i),
          "selectionStart" in a)
        )
          ((a.selectionStart = i),
            (a.selectionEnd = Math.min(n, a.value.length)));
        else if (
          ((n = ((i = a.ownerDocument || document) && i.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var m = a.textContent.length,
            v = Math.min(c.start, m);
          ((c = c.end === void 0 ? v : Math.min(c.end, m)),
            !n.extend && v > c && ((m = c), (c = v), (v = m)),
            (m = lp(a, v)));
          var E = lp(a, c);
          m &&
            E &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== m.node ||
              n.anchorOffset !== m.offset ||
              n.focusNode !== E.node ||
              n.focusOffset !== E.offset) &&
            ((i = i.createRange()),
            i.setStart(m.node, m.offset),
            n.removeAllRanges(),
            v > c
              ? (n.addRange(i), n.extend(E.node, E.offset))
              : (i.setEnd(E.node, E.offset), n.addRange(i)));
        }
      }
      for (i = [], n = a; (n = n.parentNode); )
        n.nodeType === 1 &&
          i.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < i.length; a++)
        ((n = i[a]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top));
    }
  }
  var TS = d && "documentMode" in document && 11 >= document.documentMode,
    vi = null,
    Xu = null,
    Do = null,
    Yu = !1;
  function dp(n, i, a) {
    var c =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Yu ||
      vi == null ||
      vi !== Se(c) ||
      ((c = vi),
      "selectionStart" in c && Gu(c)
        ? (c = { start: c.selectionStart, end: c.selectionEnd })
        : ((c = (
            (c.ownerDocument && c.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset,
          })),
      (Do && Io(Do, c)) ||
        ((Do = c),
        (c = ha(Xu, "onSelect")),
        0 < c.length &&
          ((i = new zu("onSelect", "select", null, i, a)),
          n.push({ event: i, listeners: c }),
          (i.target = vi))));
  }
  function ca(n, i) {
    var a = {};
    return (
      (a[n.toLowerCase()] = i.toLowerCase()),
      (a["Webkit" + n] = "webkit" + i),
      (a["Moz" + n] = "moz" + i),
      a
    );
  }
  var xi = {
      animationend: ca("Animation", "AnimationEnd"),
      animationiteration: ca("Animation", "AnimationIteration"),
      animationstart: ca("Animation", "AnimationStart"),
      transitionend: ca("Transition", "TransitionEnd"),
    },
    Ku = {},
    fp = {};
  d &&
    ((fp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xi.animationend.animation,
      delete xi.animationiteration.animation,
      delete xi.animationstart.animation),
    "TransitionEvent" in window || delete xi.transitionend.transition);
  function da(n) {
    if (Ku[n]) return Ku[n];
    if (!xi[n]) return n;
    var i = xi[n],
      a;
    for (a in i) if (i.hasOwnProperty(a) && a in fp) return (Ku[n] = i[a]);
    return n;
  }
  var hp = da("animationend"),
    pp = da("animationiteration"),
    mp = da("animationstart"),
    gp = da("transitionend"),
    yp = new Map(),
    vp =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function er(n, i) {
    (yp.set(n, i), u(i, [n]));
  }
  for (var Zu = 0; Zu < vp.length; Zu++) {
    var qu = vp[Zu],
      MS = qu.toLowerCase(),
      NS = qu[0].toUpperCase() + qu.slice(1);
    er(MS, "on" + NS);
  }
  (er(hp, "onAnimationEnd"),
    er(pp, "onAnimationIteration"),
    er(mp, "onAnimationStart"),
    er("dblclick", "onDoubleClick"),
    er("focusin", "onFocus"),
    er("focusout", "onBlur"),
    er(gp, "onTransitionEnd"),
    l("onMouseEnter", ["mouseout", "mouseover"]),
    l("onMouseLeave", ["mouseout", "mouseover"]),
    l("onPointerEnter", ["pointerout", "pointerover"]),
    l("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ro =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    bS = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ro),
    );
  function xp(n, i, a) {
    var c = n.type || "unknown-event";
    ((n.currentTarget = a), ku(c, i, void 0, n), (n.currentTarget = null));
  }
  function wp(n, i) {
    i = (i & 4) !== 0;
    for (var a = 0; a < n.length; a++) {
      var c = n[a],
        m = c.event;
      c = c.listeners;
      e: {
        var v = void 0;
        if (i)
          for (var E = c.length - 1; 0 <= E; E--) {
            var A = c[E],
              z = A.instance,
              q = A.currentTarget;
            if (((A = A.listener), z !== v && m.isPropagationStopped()))
              break e;
            (xp(m, A, q), (v = z));
          }
        else
          for (E = 0; E < c.length; E++) {
            if (
              ((A = c[E]),
              (z = A.instance),
              (q = A.currentTarget),
              (A = A.listener),
              z !== v && m.isPropagationStopped())
            )
              break e;
            (xp(m, A, q), (v = z));
          }
      }
    }
    if (ui) throw ((n = vo), (ui = !1), (vo = null), n);
  }
  function ze(n, i) {
    var a = i[oc];
    a === void 0 && (a = i[oc] = new Set());
    var c = n + "__bubble";
    a.has(c) || (Sp(i, n, 2, !1), a.add(c));
  }
  function Qu(n, i, a) {
    var c = 0;
    (i && (c |= 4), Sp(a, n, c, i));
  }
  var fa = "_reactListening" + Math.random().toString(36).slice(2);
  function Lo(n) {
    if (!n[fa]) {
      ((n[fa] = !0),
        o.forEach(function (a) {
          a !== "selectionchange" && (bS.has(a) || Qu(a, !1, n), Qu(a, !0, n));
        }));
      var i = n.nodeType === 9 ? n : n.ownerDocument;
      i === null || i[fa] || ((i[fa] = !0), Qu("selectionchange", !1, i));
    }
  }
  function Sp(n, i, a, c) {
    switch (Uh(i)) {
      case 1:
        var m = Hw;
        break;
      case 4:
        m = Uw;
        break;
      default:
        m = Ru;
    }
    ((a = m.bind(null, i, a, n)),
      (m = void 0),
      !yo ||
        (i !== "touchstart" && i !== "touchmove" && i !== "wheel") ||
        (m = !0),
      c
        ? m !== void 0
          ? n.addEventListener(i, a, { capture: !0, passive: m })
          : n.addEventListener(i, a, !0)
        : m !== void 0
          ? n.addEventListener(i, a, { passive: m })
          : n.addEventListener(i, a, !1));
  }
  function Ju(n, i, a, c, m) {
    var v = c;
    if ((i & 1) === 0 && (i & 2) === 0 && c !== null)
      e: for (;;) {
        if (c === null) return;
        var E = c.tag;
        if (E === 3 || E === 4) {
          var A = c.stateNode.containerInfo;
          if (A === m || (A.nodeType === 8 && A.parentNode === m)) break;
          if (E === 4)
            for (E = c.return; E !== null; ) {
              var z = E.tag;
              if (
                (z === 3 || z === 4) &&
                ((z = E.stateNode.containerInfo),
                z === m || (z.nodeType === 8 && z.parentNode === m))
              )
                return;
              E = E.return;
            }
          for (; A !== null; ) {
            if (((E = jr(A)), E === null)) return;
            if (((z = E.tag), z === 5 || z === 6)) {
              c = v = E;
              continue e;
            }
            A = A.parentNode;
          }
        }
        c = c.return;
      }
    Ws(function () {
      var q = v,
        ne = po(a),
        ie = [];
      e: {
        var te = yp.get(n);
        if (te !== void 0) {
          var de = zu,
            pe = n;
          switch (n) {
            case "keypress":
              if (sa(a) === 0) break e;
            case "keydown":
            case "keyup":
              de = oS;
              break;
            case "focusin":
              ((pe = "focus"), (de = $u));
              break;
            case "focusout":
              ((pe = "blur"), (de = $u));
              break;
            case "beforeblur":
            case "afterblur":
              de = $u;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              de = Xh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Xw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = lS;
              break;
            case hp:
            case pp:
            case mp:
              de = Zw;
              break;
            case gp:
              de = cS;
              break;
            case "scroll":
              de = Ww;
              break;
            case "wheel":
              de = fS;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = Qw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = Kh;
          }
          var ge = (i & 4) !== 0,
            Ye = !ge && n === "scroll",
            X = ge ? (te !== null ? te + "Capture" : null) : te;
          ge = [];
          for (var B = q, Y; B !== null; ) {
            Y = B;
            var se = Y.stateNode;
            if (
              (Y.tag === 5 &&
                se !== null &&
                ((Y = se),
                X !== null &&
                  ((se = Cr(B, X)), se != null && ge.push(Vo(B, se, Y)))),
              Ye)
            )
              break;
            B = B.return;
          }
          0 < ge.length &&
            ((te = new de(te, pe, null, a, ne)),
            ie.push({ event: te, listeners: ge }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (
            ((te = n === "mouseover" || n === "pointerover"),
            (de = n === "mouseout" || n === "pointerout"),
            te &&
              a !== ho &&
              (pe = a.relatedTarget || a.fromElement) &&
              (jr(pe) || pe[An]))
          )
            break e;
          if (
            (de || te) &&
            ((te =
              ne.window === ne
                ? ne
                : (te = ne.ownerDocument)
                  ? te.defaultView || te.parentWindow
                  : window),
            de
              ? ((pe = a.relatedTarget || a.toElement),
                (de = q),
                (pe = pe ? jr(pe) : null),
                pe !== null &&
                  ((Ye = mn(pe)),
                  pe !== Ye || (pe.tag !== 5 && pe.tag !== 6)) &&
                  (pe = null))
              : ((de = null), (pe = q)),
            de !== pe)
          ) {
            if (
              ((ge = Xh),
              (se = "onMouseLeave"),
              (X = "onMouseEnter"),
              (B = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((ge = Kh),
                (se = "onPointerLeave"),
                (X = "onPointerEnter"),
                (B = "pointer")),
              (Ye = de == null ? te : ki(de)),
              (Y = pe == null ? te : ki(pe)),
              (te = new ge(se, B + "leave", de, a, ne)),
              (te.target = Ye),
              (te.relatedTarget = Y),
              (se = null),
              jr(ne) === q &&
                ((ge = new ge(X, B + "enter", pe, a, ne)),
                (ge.target = Y),
                (ge.relatedTarget = Ye),
                (se = ge)),
              (Ye = se),
              de && pe)
            )
              t: {
                for (ge = de, X = pe, B = 0, Y = ge; Y; Y = wi(Y)) B++;
                for (Y = 0, se = X; se; se = wi(se)) Y++;
                for (; 0 < B - Y; ) ((ge = wi(ge)), B--);
                for (; 0 < Y - B; ) ((X = wi(X)), Y--);
                for (; B--; ) {
                  if (ge === X || (X !== null && ge === X.alternate)) break t;
                  ((ge = wi(ge)), (X = wi(X)));
                }
                ge = null;
              }
            else ge = null;
            (de !== null && kp(ie, te, de, ge, !1),
              pe !== null && Ye !== null && kp(ie, Ye, pe, ge, !0));
          }
        }
        e: {
          if (
            ((te = q ? ki(q) : window),
            (de = te.nodeName && te.nodeName.toLowerCase()),
            de === "select" || (de === "input" && te.type === "file"))
          )
            var ye = xS;
          else if (tp(te))
            if (rp) ye = ES;
            else {
              ye = SS;
              var Ee = wS;
            }
          else
            (de = te.nodeName) &&
              de.toLowerCase() === "input" &&
              (te.type === "checkbox" || te.type === "radio") &&
              (ye = kS);
          if (ye && (ye = ye(n, q))) {
            np(ie, ye, a, ne);
            break e;
          }
          (Ee && Ee(n, te, q),
            n === "focusout" &&
              (Ee = te._wrapperState) &&
              Ee.controlled &&
              te.type === "number" &&
              wt(te, "number", te.value));
        }
        switch (((Ee = q ? ki(q) : window), n)) {
          case "focusin":
            (tp(Ee) || Ee.contentEditable === "true") &&
              ((vi = Ee), (Xu = q), (Do = null));
            break;
          case "focusout":
            Do = Xu = vi = null;
            break;
          case "mousedown":
            Yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Yu = !1), dp(ie, a, ne));
            break;
          case "selectionchange":
            if (TS) break;
          case "keydown":
          case "keyup":
            dp(ie, a, ne);
        }
        var Ce;
        if (Hu)
          e: {
            switch (n) {
              case "compositionstart":
                var Te = "onCompositionStart";
                break e;
              case "compositionend":
                Te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Te = "onCompositionUpdate";
                break e;
            }
            Te = void 0;
          }
        else
          yi
            ? Jh(n, a) && (Te = "onCompositionEnd")
            : n === "keydown" &&
              a.keyCode === 229 &&
              (Te = "onCompositionStart");
        (Te &&
          (Zh &&
            a.locale !== "ko" &&
            (yi || Te !== "onCompositionStart"
              ? Te === "onCompositionEnd" && yi && (Ce = Wh())
              : ((Jn = ne),
                (Vu = "value" in Jn ? Jn.value : Jn.textContent),
                (yi = !0))),
          (Ee = ha(q, Te)),
          0 < Ee.length &&
            ((Te = new Yh(Te, n, null, a, ne)),
            ie.push({ event: Te, listeners: Ee }),
            Ce
              ? (Te.data = Ce)
              : ((Ce = ep(a)), Ce !== null && (Te.data = Ce)))),
          (Ce = pS ? mS(n, a) : gS(n, a)) &&
            ((q = ha(q, "onBeforeInput")),
            0 < q.length &&
              ((ne = new Yh("onBeforeInput", "beforeinput", null, a, ne)),
              ie.push({ event: ne, listeners: q }),
              (ne.data = Ce))));
      }
      wp(ie, i);
    });
  }
  function Vo(n, i, a) {
    return { instance: n, listener: i, currentTarget: a };
  }
  function ha(n, i) {
    for (var a = i + "Capture", c = []; n !== null; ) {
      var m = n,
        v = m.stateNode;
      (m.tag === 5 &&
        v !== null &&
        ((m = v),
        (v = Cr(n, a)),
        v != null && c.unshift(Vo(n, v, m)),
        (v = Cr(n, i)),
        v != null && c.push(Vo(n, v, m))),
        (n = n.return));
    }
    return c;
  }
  function wi(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function kp(n, i, a, c, m) {
    for (var v = i._reactName, E = []; a !== null && a !== c; ) {
      var A = a,
        z = A.alternate,
        q = A.stateNode;
      if (z !== null && z === c) break;
      (A.tag === 5 &&
        q !== null &&
        ((A = q),
        m
          ? ((z = Cr(a, v)), z != null && E.unshift(Vo(a, z, A)))
          : m || ((z = Cr(a, v)), z != null && E.push(Vo(a, z, A)))),
        (a = a.return));
    }
    E.length !== 0 && n.push({ event: i, listeners: E });
  }
  var _S = /\r\n?/g,
    jS = /\u0000|\uFFFD/g;
  function Ep(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        _S,
        `
`,
      )
      .replace(jS, "");
  }
  function pa(n, i, a) {
    if (((i = Ep(i)), Ep(n) !== i && a)) throw Error(r(425));
  }
  function ma() {}
  var ec = null,
    tc = null;
  function nc(n, i) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof i.children == "string" ||
      typeof i.children == "number" ||
      (typeof i.dangerouslySetInnerHTML == "object" &&
        i.dangerouslySetInnerHTML !== null &&
        i.dangerouslySetInnerHTML.__html != null)
    );
  }
  var rc = typeof setTimeout == "function" ? setTimeout : void 0,
    AS = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Cp = typeof Promise == "function" ? Promise : void 0,
    IS =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Cp < "u"
          ? function (n) {
              return Cp.resolve(null).then(n).catch(DS);
            }
          : rc;
  function DS(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function ic(n, i) {
    var a = i,
      c = 0;
    do {
      var m = a.nextSibling;
      if ((n.removeChild(a), m && m.nodeType === 8))
        if (((a = m.data), a === "/$")) {
          if (c === 0) {
            (n.removeChild(m), Mo(i));
            return;
          }
          c--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || c++;
      a = m;
    } while (a);
    Mo(i);
  }
  function tr(n) {
    for (; n != null; n = n.nextSibling) {
      var i = n.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (((i = n.data), i === "$" || i === "$!" || i === "$?")) break;
        if (i === "/$") return null;
      }
    }
    return n;
  }
  function Pp(n) {
    n = n.previousSibling;
    for (var i = 0; n; ) {
      if (n.nodeType === 8) {
        var a = n.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (i === 0) return n;
          i--;
        } else a === "/$" && i++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Si = Math.random().toString(36).slice(2),
    gn = "__reactFiber$" + Si,
    zo = "__reactProps$" + Si,
    An = "__reactContainer$" + Si,
    oc = "__reactEvents$" + Si,
    RS = "__reactListeners$" + Si,
    LS = "__reactHandles$" + Si;
  function jr(n) {
    var i = n[gn];
    if (i) return i;
    for (var a = n.parentNode; a; ) {
      if ((i = a[An] || a[gn])) {
        if (
          ((a = i.alternate),
          i.child !== null || (a !== null && a.child !== null))
        )
          for (n = Pp(n); n !== null; ) {
            if ((a = n[gn])) return a;
            n = Pp(n);
          }
        return i;
      }
      ((n = a), (a = n.parentNode));
    }
    return null;
  }
  function Oo(n) {
    return (
      (n = n[gn] || n[An]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3)
        ? null
        : n
    );
  }
  function ki(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(r(33));
  }
  function ga(n) {
    return n[zo] || null;
  }
  var sc = [],
    Ei = -1;
  function nr(n) {
    return { current: n };
  }
  function Oe(n) {
    0 > Ei || ((n.current = sc[Ei]), (sc[Ei] = null), Ei--);
  }
  function Ve(n, i) {
    (Ei++, (sc[Ei] = n.current), (n.current = i));
  }
  var rr = {},
    dt = nr(rr),
    kt = nr(!1),
    Ar = rr;
  function Ci(n, i) {
    var a = n.type.contextTypes;
    if (!a) return rr;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === i)
      return c.__reactInternalMemoizedMaskedChildContext;
    var m = {},
      v;
    for (v in a) m[v] = i[v];
    return (
      c &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = i),
        (n.__reactInternalMemoizedMaskedChildContext = m)),
      m
    );
  }
  function Et(n) {
    return ((n = n.childContextTypes), n != null);
  }
  function ya() {
    (Oe(kt), Oe(dt));
  }
  function Tp(n, i, a) {
    if (dt.current !== rr) throw Error(r(168));
    (Ve(dt, i), Ve(kt, a));
  }
  function Mp(n, i, a) {
    var c = n.stateNode;
    if (((i = i.childContextTypes), typeof c.getChildContext != "function"))
      return a;
    c = c.getChildContext();
    for (var m in c) if (!(m in i)) throw Error(r(108, ue(n) || "Unknown", m));
    return G({}, a, c);
  }
  function va(n) {
    return (
      (n =
        ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) ||
        rr),
      (Ar = dt.current),
      Ve(dt, n),
      Ve(kt, kt.current),
      !0
    );
  }
  function Np(n, i, a) {
    var c = n.stateNode;
    if (!c) throw Error(r(169));
    (a
      ? ((n = Mp(n, i, Ar)),
        (c.__reactInternalMemoizedMergedChildContext = n),
        Oe(kt),
        Oe(dt),
        Ve(dt, n))
      : Oe(kt),
      Ve(kt, a));
  }
  var In = null,
    xa = !1,
    ac = !1;
  function bp(n) {
    In === null ? (In = [n]) : In.push(n);
  }
  function VS(n) {
    ((xa = !0), bp(n));
  }
  function ir() {
    if (!ac && In !== null) {
      ac = !0;
      var n = 0,
        i = Ie;
      try {
        var a = In;
        for (Ie = 1; n < a.length; n++) {
          var c = a[n];
          do c = c(!0);
          while (c !== null);
        }
        ((In = null), (xa = !1));
      } catch (m) {
        throw (In !== null && (In = In.slice(n + 1)), Ys(So, ir), m);
      } finally {
        ((Ie = i), (ac = !1));
      }
    }
    return null;
  }
  var Pi = [],
    Ti = 0,
    wa = null,
    Sa = 0,
    Ht = [],
    Ut = 0,
    Ir = null,
    Dn = 1,
    Rn = "";
  function Dr(n, i) {
    ((Pi[Ti++] = Sa), (Pi[Ti++] = wa), (wa = n), (Sa = i));
  }
  function _p(n, i, a) {
    ((Ht[Ut++] = Dn), (Ht[Ut++] = Rn), (Ht[Ut++] = Ir), (Ir = n));
    var c = Dn;
    n = Rn;
    var m = 32 - At(c) - 1;
    ((c &= ~(1 << m)), (a += 1));
    var v = 32 - At(i) + m;
    if (30 < v) {
      var E = m - (m % 5);
      ((v = (c & ((1 << E) - 1)).toString(32)),
        (c >>= E),
        (m -= E),
        (Dn = (1 << (32 - At(i) + m)) | (a << m) | c),
        (Rn = v + n));
    } else ((Dn = (1 << v) | (a << m) | c), (Rn = n));
  }
  function lc(n) {
    n.return !== null && (Dr(n, 1), _p(n, 1, 0));
  }
  function uc(n) {
    for (; n === wa; )
      ((wa = Pi[--Ti]), (Pi[Ti] = null), (Sa = Pi[--Ti]), (Pi[Ti] = null));
    for (; n === Ir; )
      ((Ir = Ht[--Ut]),
        (Ht[Ut] = null),
        (Rn = Ht[--Ut]),
        (Ht[Ut] = null),
        (Dn = Ht[--Ut]),
        (Ht[Ut] = null));
  }
  var Dt = null,
    Rt = null,
    $e = !1,
    Qt = null;
  function jp(n, i) {
    var a = Yt(5, null, null, 0);
    ((a.elementType = "DELETED"),
      (a.stateNode = i),
      (a.return = n),
      (i = n.deletions),
      i === null ? ((n.deletions = [a]), (n.flags |= 16)) : i.push(a));
  }
  function Ap(n, i) {
    switch (n.tag) {
      case 5:
        var a = n.type;
        return (
          (i =
            i.nodeType !== 1 || a.toLowerCase() !== i.nodeName.toLowerCase()
              ? null
              : i),
          i !== null
            ? ((n.stateNode = i), (Dt = n), (Rt = tr(i.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (i = n.pendingProps === "" || i.nodeType !== 3 ? null : i),
          i !== null ? ((n.stateNode = i), (Dt = n), (Rt = null), !0) : !1
        );
      case 13:
        return (
          (i = i.nodeType !== 8 ? null : i),
          i !== null
            ? ((a = Ir !== null ? { id: Dn, overflow: Rn } : null),
              (n.memoizedState = {
                dehydrated: i,
                treeContext: a,
                retryLane: 1073741824,
              }),
              (a = Yt(18, null, null, 0)),
              (a.stateNode = i),
              (a.return = n),
              (n.child = a),
              (Dt = n),
              (Rt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function cc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function dc(n) {
    if ($e) {
      var i = Rt;
      if (i) {
        var a = i;
        if (!Ap(n, i)) {
          if (cc(n)) throw Error(r(418));
          i = tr(a.nextSibling);
          var c = Dt;
          i && Ap(n, i)
            ? jp(c, a)
            : ((n.flags = (n.flags & -4097) | 2), ($e = !1), (Dt = n));
        }
      } else {
        if (cc(n)) throw Error(r(418));
        ((n.flags = (n.flags & -4097) | 2), ($e = !1), (Dt = n));
      }
    }
  }
  function Ip(n) {
    for (
      n = n.return;
      n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;

    )
      n = n.return;
    Dt = n;
  }
  function ka(n) {
    if (n !== Dt) return !1;
    if (!$e) return (Ip(n), ($e = !0), !1);
    var i;
    if (
      ((i = n.tag !== 3) &&
        !(i = n.tag !== 5) &&
        ((i = n.type),
        (i = i !== "head" && i !== "body" && !nc(n.type, n.memoizedProps))),
      i && (i = Rt))
    ) {
      if (cc(n)) throw (Dp(), Error(r(418)));
      for (; i; ) (jp(n, i), (i = tr(i.nextSibling)));
    }
    if ((Ip(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(r(317));
      e: {
        for (n = n.nextSibling, i = 0; n; ) {
          if (n.nodeType === 8) {
            var a = n.data;
            if (a === "/$") {
              if (i === 0) {
                Rt = tr(n.nextSibling);
                break e;
              }
              i--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || i++;
          }
          n = n.nextSibling;
        }
        Rt = null;
      }
    } else Rt = Dt ? tr(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Dp() {
    for (var n = Rt; n; ) n = tr(n.nextSibling);
  }
  function Mi() {
    ((Rt = Dt = null), ($e = !1));
  }
  function fc(n) {
    Qt === null ? (Qt = [n]) : Qt.push(n);
  }
  var zS = M.ReactCurrentBatchConfig;
  function Fo(n, i, a) {
    if (
      ((n = a.ref),
      n !== null && typeof n != "function" && typeof n != "object")
    ) {
      if (a._owner) {
        if (((a = a._owner), a)) {
          if (a.tag !== 1) throw Error(r(309));
          var c = a.stateNode;
        }
        if (!c) throw Error(r(147, n));
        var m = c,
          v = "" + n;
        return i !== null &&
          i.ref !== null &&
          typeof i.ref == "function" &&
          i.ref._stringRef === v
          ? i.ref
          : ((i = function (E) {
              var A = m.refs;
              E === null ? delete A[v] : (A[v] = E);
            }),
            (i._stringRef = v),
            i);
      }
      if (typeof n != "string") throw Error(r(284));
      if (!a._owner) throw Error(r(290, n));
    }
    return n;
  }
  function Ea(n, i) {
    throw (
      (n = Object.prototype.toString.call(i)),
      Error(
        r(
          31,
          n === "[object Object]"
            ? "object with keys {" + Object.keys(i).join(", ") + "}"
            : n,
        ),
      )
    );
  }
  function Rp(n) {
    var i = n._init;
    return i(n._payload);
  }
  function Lp(n) {
    function i(X, B) {
      if (n) {
        var Y = X.deletions;
        Y === null ? ((X.deletions = [B]), (X.flags |= 16)) : Y.push(B);
      }
    }
    function a(X, B) {
      if (!n) return null;
      for (; B !== null; ) (i(X, B), (B = B.sibling));
      return null;
    }
    function c(X, B) {
      for (X = new Map(); B !== null; )
        (B.key !== null ? X.set(B.key, B) : X.set(B.index, B), (B = B.sibling));
      return X;
    }
    function m(X, B) {
      return ((X = fr(X, B)), (X.index = 0), (X.sibling = null), X);
    }
    function v(X, B, Y) {
      return (
        (X.index = Y),
        n
          ? ((Y = X.alternate),
            Y !== null
              ? ((Y = Y.index), Y < B ? ((X.flags |= 2), B) : Y)
              : ((X.flags |= 2), B))
          : ((X.flags |= 1048576), B)
      );
    }
    function E(X) {
      return (n && X.alternate === null && (X.flags |= 2), X);
    }
    function A(X, B, Y, se) {
      return B === null || B.tag !== 6
        ? ((B = rd(Y, X.mode, se)), (B.return = X), B)
        : ((B = m(B, Y)), (B.return = X), B);
    }
    function z(X, B, Y, se) {
      var ye = Y.type;
      return ye === R
        ? ne(X, B, Y.props.children, se, Y.key)
        : B !== null &&
            (B.elementType === ye ||
              (typeof ye == "object" &&
                ye !== null &&
                ye.$$typeof === F &&
                Rp(ye) === B.type))
          ? ((se = m(B, Y.props)), (se.ref = Fo(X, B, Y)), (se.return = X), se)
          : ((se = Xa(Y.type, Y.key, Y.props, null, X.mode, se)),
            (se.ref = Fo(X, B, Y)),
            (se.return = X),
            se);
    }
    function q(X, B, Y, se) {
      return B === null ||
        B.tag !== 4 ||
        B.stateNode.containerInfo !== Y.containerInfo ||
        B.stateNode.implementation !== Y.implementation
        ? ((B = id(Y, X.mode, se)), (B.return = X), B)
        : ((B = m(B, Y.children || [])), (B.return = X), B);
    }
    function ne(X, B, Y, se, ye) {
      return B === null || B.tag !== 7
        ? ((B = Br(Y, X.mode, se, ye)), (B.return = X), B)
        : ((B = m(B, Y)), (B.return = X), B);
    }
    function ie(X, B, Y) {
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return ((B = rd("" + B, X.mode, Y)), (B.return = X), B);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case I:
            return (
              (Y = Xa(B.type, B.key, B.props, null, X.mode, Y)),
              (Y.ref = Fo(X, null, B)),
              (Y.return = X),
              Y
            );
          case b:
            return ((B = id(B, X.mode, Y)), (B.return = X), B);
          case F:
            var se = B._init;
            return ie(X, se(B._payload), Y);
        }
        if (ut(B) || $(B))
          return ((B = Br(B, X.mode, Y, null)), (B.return = X), B);
        Ea(X, B);
      }
      return null;
    }
    function te(X, B, Y, se) {
      var ye = B !== null ? B.key : null;
      if ((typeof Y == "string" && Y !== "") || typeof Y == "number")
        return ye !== null ? null : A(X, B, "" + Y, se);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case I:
            return Y.key === ye ? z(X, B, Y, se) : null;
          case b:
            return Y.key === ye ? q(X, B, Y, se) : null;
          case F:
            return ((ye = Y._init), te(X, B, ye(Y._payload), se));
        }
        if (ut(Y) || $(Y)) return ye !== null ? null : ne(X, B, Y, se, null);
        Ea(X, Y);
      }
      return null;
    }
    function de(X, B, Y, se, ye) {
      if ((typeof se == "string" && se !== "") || typeof se == "number")
        return ((X = X.get(Y) || null), A(B, X, "" + se, ye));
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case I:
            return (
              (X = X.get(se.key === null ? Y : se.key) || null),
              z(B, X, se, ye)
            );
          case b:
            return (
              (X = X.get(se.key === null ? Y : se.key) || null),
              q(B, X, se, ye)
            );
          case F:
            var Ee = se._init;
            return de(X, B, Y, Ee(se._payload), ye);
        }
        if (ut(se) || $(se))
          return ((X = X.get(Y) || null), ne(B, X, se, ye, null));
        Ea(B, se);
      }
      return null;
    }
    function pe(X, B, Y, se) {
      for (
        var ye = null, Ee = null, Ce = B, Te = (B = 0), it = null;
        Ce !== null && Te < Y.length;
        Te++
      ) {
        Ce.index > Te ? ((it = Ce), (Ce = null)) : (it = Ce.sibling);
        var Ae = te(X, Ce, Y[Te], se);
        if (Ae === null) {
          Ce === null && (Ce = it);
          break;
        }
        (n && Ce && Ae.alternate === null && i(X, Ce),
          (B = v(Ae, B, Te)),
          Ee === null ? (ye = Ae) : (Ee.sibling = Ae),
          (Ee = Ae),
          (Ce = it));
      }
      if (Te === Y.length) return (a(X, Ce), $e && Dr(X, Te), ye);
      if (Ce === null) {
        for (; Te < Y.length; Te++)
          ((Ce = ie(X, Y[Te], se)),
            Ce !== null &&
              ((B = v(Ce, B, Te)),
              Ee === null ? (ye = Ce) : (Ee.sibling = Ce),
              (Ee = Ce)));
        return ($e && Dr(X, Te), ye);
      }
      for (Ce = c(X, Ce); Te < Y.length; Te++)
        ((it = de(Ce, X, Te, Y[Te], se)),
          it !== null &&
            (n &&
              it.alternate !== null &&
              Ce.delete(it.key === null ? Te : it.key),
            (B = v(it, B, Te)),
            Ee === null ? (ye = it) : (Ee.sibling = it),
            (Ee = it)));
      return (
        n &&
          Ce.forEach(function (hr) {
            return i(X, hr);
          }),
        $e && Dr(X, Te),
        ye
      );
    }
    function ge(X, B, Y, se) {
      var ye = $(Y);
      if (typeof ye != "function") throw Error(r(150));
      if (((Y = ye.call(Y)), Y == null)) throw Error(r(151));
      for (
        var Ee = (ye = null), Ce = B, Te = (B = 0), it = null, Ae = Y.next();
        Ce !== null && !Ae.done;
        Te++, Ae = Y.next()
      ) {
        Ce.index > Te ? ((it = Ce), (Ce = null)) : (it = Ce.sibling);
        var hr = te(X, Ce, Ae.value, se);
        if (hr === null) {
          Ce === null && (Ce = it);
          break;
        }
        (n && Ce && hr.alternate === null && i(X, Ce),
          (B = v(hr, B, Te)),
          Ee === null ? (ye = hr) : (Ee.sibling = hr),
          (Ee = hr),
          (Ce = it));
      }
      if (Ae.done) return (a(X, Ce), $e && Dr(X, Te), ye);
      if (Ce === null) {
        for (; !Ae.done; Te++, Ae = Y.next())
          ((Ae = ie(X, Ae.value, se)),
            Ae !== null &&
              ((B = v(Ae, B, Te)),
              Ee === null ? (ye = Ae) : (Ee.sibling = Ae),
              (Ee = Ae)));
        return ($e && Dr(X, Te), ye);
      }
      for (Ce = c(X, Ce); !Ae.done; Te++, Ae = Y.next())
        ((Ae = de(Ce, X, Te, Ae.value, se)),
          Ae !== null &&
            (n &&
              Ae.alternate !== null &&
              Ce.delete(Ae.key === null ? Te : Ae.key),
            (B = v(Ae, B, Te)),
            Ee === null ? (ye = Ae) : (Ee.sibling = Ae),
            (Ee = Ae)));
      return (
        n &&
          Ce.forEach(function (y2) {
            return i(X, y2);
          }),
        $e && Dr(X, Te),
        ye
      );
    }
    function Ye(X, B, Y, se) {
      if (
        (typeof Y == "object" &&
          Y !== null &&
          Y.type === R &&
          Y.key === null &&
          (Y = Y.props.children),
        typeof Y == "object" && Y !== null)
      ) {
        switch (Y.$$typeof) {
          case I:
            e: {
              for (var ye = Y.key, Ee = B; Ee !== null; ) {
                if (Ee.key === ye) {
                  if (((ye = Y.type), ye === R)) {
                    if (Ee.tag === 7) {
                      (a(X, Ee.sibling),
                        (B = m(Ee, Y.props.children)),
                        (B.return = X),
                        (X = B));
                      break e;
                    }
                  } else if (
                    Ee.elementType === ye ||
                    (typeof ye == "object" &&
                      ye !== null &&
                      ye.$$typeof === F &&
                      Rp(ye) === Ee.type)
                  ) {
                    (a(X, Ee.sibling),
                      (B = m(Ee, Y.props)),
                      (B.ref = Fo(X, Ee, Y)),
                      (B.return = X),
                      (X = B));
                    break e;
                  }
                  a(X, Ee);
                  break;
                } else i(X, Ee);
                Ee = Ee.sibling;
              }
              Y.type === R
                ? ((B = Br(Y.props.children, X.mode, se, Y.key)),
                  (B.return = X),
                  (X = B))
                : ((se = Xa(Y.type, Y.key, Y.props, null, X.mode, se)),
                  (se.ref = Fo(X, B, Y)),
                  (se.return = X),
                  (X = se));
            }
            return E(X);
          case b:
            e: {
              for (Ee = Y.key; B !== null; ) {
                if (B.key === Ee)
                  if (
                    B.tag === 4 &&
                    B.stateNode.containerInfo === Y.containerInfo &&
                    B.stateNode.implementation === Y.implementation
                  ) {
                    (a(X, B.sibling),
                      (B = m(B, Y.children || [])),
                      (B.return = X),
                      (X = B));
                    break e;
                  } else {
                    a(X, B);
                    break;
                  }
                else i(X, B);
                B = B.sibling;
              }
              ((B = id(Y, X.mode, se)), (B.return = X), (X = B));
            }
            return E(X);
          case F:
            return ((Ee = Y._init), Ye(X, B, Ee(Y._payload), se));
        }
        if (ut(Y)) return pe(X, B, Y, se);
        if ($(Y)) return ge(X, B, Y, se);
        Ea(X, Y);
      }
      return (typeof Y == "string" && Y !== "") || typeof Y == "number"
        ? ((Y = "" + Y),
          B !== null && B.tag === 6
            ? (a(X, B.sibling), (B = m(B, Y)), (B.return = X), (X = B))
            : (a(X, B), (B = rd(Y, X.mode, se)), (B.return = X), (X = B)),
          E(X))
        : a(X, B);
    }
    return Ye;
  }
  var Ni = Lp(!0),
    Vp = Lp(!1),
    Ca = nr(null),
    Pa = null,
    bi = null,
    hc = null;
  function pc() {
    hc = bi = Pa = null;
  }
  function mc(n) {
    var i = Ca.current;
    (Oe(Ca), (n._currentValue = i));
  }
  function gc(n, i, a) {
    for (; n !== null; ) {
      var c = n.alternate;
      if (
        ((n.childLanes & i) !== i
          ? ((n.childLanes |= i), c !== null && (c.childLanes |= i))
          : c !== null && (c.childLanes & i) !== i && (c.childLanes |= i),
        n === a)
      )
        break;
      n = n.return;
    }
  }
  function _i(n, i) {
    ((Pa = n),
      (hc = bi = null),
      (n = n.dependencies),
      n !== null &&
        n.firstContext !== null &&
        ((n.lanes & i) !== 0 && (Ct = !0), (n.firstContext = null)));
  }
  function Wt(n) {
    var i = n._currentValue;
    if (hc !== n)
      if (((n = { context: n, memoizedValue: i, next: null }), bi === null)) {
        if (Pa === null) throw Error(r(308));
        ((bi = n), (Pa.dependencies = { lanes: 0, firstContext: n }));
      } else bi = bi.next = n;
    return i;
  }
  var Rr = null;
  function yc(n) {
    Rr === null ? (Rr = [n]) : Rr.push(n);
  }
  function zp(n, i, a, c) {
    var m = i.interleaved;
    return (
      m === null ? ((a.next = a), yc(i)) : ((a.next = m.next), (m.next = a)),
      (i.interleaved = a),
      Ln(n, c)
    );
  }
  function Ln(n, i) {
    n.lanes |= i;
    var a = n.alternate;
    for (a !== null && (a.lanes |= i), a = n, n = n.return; n !== null; )
      ((n.childLanes |= i),
        (a = n.alternate),
        a !== null && (a.childLanes |= i),
        (a = n),
        (n = n.return));
    return a.tag === 3 ? a.stateNode : null;
  }
  var or = !1;
  function vc(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Op(n, i) {
    ((n = n.updateQueue),
      i.updateQueue === n &&
        (i.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          effects: n.effects,
        }));
  }
  function Vn(n, i) {
    return {
      eventTime: n,
      lane: i,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function sr(n, i, a) {
    var c = n.updateQueue;
    if (c === null) return null;
    if (((c = c.shared), (_e & 2) !== 0)) {
      var m = c.pending;
      return (
        m === null ? (i.next = i) : ((i.next = m.next), (m.next = i)),
        (c.pending = i),
        Ln(n, a)
      );
    }
    return (
      (m = c.interleaved),
      m === null ? ((i.next = i), yc(c)) : ((i.next = m.next), (m.next = i)),
      (c.interleaved = i),
      Ln(n, a)
    );
  }
  function Ta(n, i, a) {
    if (
      ((i = i.updateQueue), i !== null && ((i = i.shared), (a & 4194240) !== 0))
    ) {
      var c = i.lanes;
      ((c &= n.pendingLanes), (a |= c), (i.lanes = a), pi(n, a));
    }
  }
  function Fp(n, i) {
    var a = n.updateQueue,
      c = n.alternate;
    if (c !== null && ((c = c.updateQueue), a === c)) {
      var m = null,
        v = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var E = {
            eventTime: a.eventTime,
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          };
          (v === null ? (m = v = E) : (v = v.next = E), (a = a.next));
        } while (a !== null);
        v === null ? (m = v = i) : (v = v.next = i);
      } else m = v = i;
      ((a = {
        baseState: c.baseState,
        firstBaseUpdate: m,
        lastBaseUpdate: v,
        shared: c.shared,
        effects: c.effects,
      }),
        (n.updateQueue = a));
      return;
    }
    ((n = a.lastBaseUpdate),
      n === null ? (a.firstBaseUpdate = i) : (n.next = i),
      (a.lastBaseUpdate = i));
  }
  function Ma(n, i, a, c) {
    var m = n.updateQueue;
    or = !1;
    var v = m.firstBaseUpdate,
      E = m.lastBaseUpdate,
      A = m.shared.pending;
    if (A !== null) {
      m.shared.pending = null;
      var z = A,
        q = z.next;
      ((z.next = null), E === null ? (v = q) : (E.next = q), (E = z));
      var ne = n.alternate;
      ne !== null &&
        ((ne = ne.updateQueue),
        (A = ne.lastBaseUpdate),
        A !== E &&
          (A === null ? (ne.firstBaseUpdate = q) : (A.next = q),
          (ne.lastBaseUpdate = z)));
    }
    if (v !== null) {
      var ie = m.baseState;
      ((E = 0), (ne = q = z = null), (A = v));
      do {
        var te = A.lane,
          de = A.eventTime;
        if ((c & te) === te) {
          ne !== null &&
            (ne = ne.next =
              {
                eventTime: de,
                lane: 0,
                tag: A.tag,
                payload: A.payload,
                callback: A.callback,
                next: null,
              });
          e: {
            var pe = n,
              ge = A;
            switch (((te = i), (de = a), ge.tag)) {
              case 1:
                if (((pe = ge.payload), typeof pe == "function")) {
                  ie = pe.call(de, ie, te);
                  break e;
                }
                ie = pe;
                break e;
              case 3:
                pe.flags = (pe.flags & -65537) | 128;
              case 0:
                if (
                  ((pe = ge.payload),
                  (te = typeof pe == "function" ? pe.call(de, ie, te) : pe),
                  te == null)
                )
                  break e;
                ie = G({}, ie, te);
                break e;
              case 2:
                or = !0;
            }
          }
          A.callback !== null &&
            A.lane !== 0 &&
            ((n.flags |= 64),
            (te = m.effects),
            te === null ? (m.effects = [A]) : te.push(A));
        } else
          ((de = {
            eventTime: de,
            lane: te,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null,
          }),
            ne === null ? ((q = ne = de), (z = ie)) : (ne = ne.next = de),
            (E |= te));
        if (((A = A.next), A === null)) {
          if (((A = m.shared.pending), A === null)) break;
          ((te = A),
            (A = te.next),
            (te.next = null),
            (m.lastBaseUpdate = te),
            (m.shared.pending = null));
        }
      } while (!0);
      if (
        (ne === null && (z = ie),
        (m.baseState = z),
        (m.firstBaseUpdate = q),
        (m.lastBaseUpdate = ne),
        (i = m.shared.interleaved),
        i !== null)
      ) {
        m = i;
        do ((E |= m.lane), (m = m.next));
        while (m !== i);
      } else v === null && (m.shared.lanes = 0);
      ((zr |= E), (n.lanes = E), (n.memoizedState = ie));
    }
  }
  function $p(n, i, a) {
    if (((n = i.effects), (i.effects = null), n !== null))
      for (i = 0; i < n.length; i++) {
        var c = n[i],
          m = c.callback;
        if (m !== null) {
          if (((c.callback = null), (c = a), typeof m != "function"))
            throw Error(r(191, m));
          m.call(c);
        }
      }
  }
  var $o = {},
    yn = nr($o),
    Bo = nr($o),
    Ho = nr($o);
  function Lr(n) {
    if (n === $o) throw Error(r(174));
    return n;
  }
  function xc(n, i) {
    switch ((Ve(Ho, i), Ve(Bo, n), Ve(yn, $o), (n = i.nodeType), n)) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : _t(null, "");
        break;
      default:
        ((n = n === 8 ? i.parentNode : i),
          (i = n.namespaceURI || null),
          (n = n.tagName),
          (i = _t(i, n)));
    }
    (Oe(yn), Ve(yn, i));
  }
  function ji() {
    (Oe(yn), Oe(Bo), Oe(Ho));
  }
  function Bp(n) {
    Lr(Ho.current);
    var i = Lr(yn.current),
      a = _t(i, n.type);
    i !== a && (Ve(Bo, n), Ve(yn, a));
  }
  function wc(n) {
    Bo.current === n && (Oe(yn), Oe(Bo));
  }
  var He = nr(0);
  function Na(n) {
    for (var i = n; i !== null; ) {
      if (i.tag === 13) {
        var a = i.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return null;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
    return null;
  }
  var Sc = [];
  function kc() {
    for (var n = 0; n < Sc.length; n++)
      Sc[n]._workInProgressVersionPrimary = null;
    Sc.length = 0;
  }
  var ba = M.ReactCurrentDispatcher,
    Ec = M.ReactCurrentBatchConfig,
    Vr = 0,
    Ue = null,
    Je = null,
    nt = null,
    _a = !1,
    Uo = !1,
    Wo = 0,
    OS = 0;
  function ft() {
    throw Error(r(321));
  }
  function Cc(n, i) {
    if (i === null) return !1;
    for (var a = 0; a < i.length && a < n.length; a++)
      if (!qt(n[a], i[a])) return !1;
    return !0;
  }
  function Pc(n, i, a, c, m, v) {
    if (
      ((Vr = v),
      (Ue = i),
      (i.memoizedState = null),
      (i.updateQueue = null),
      (i.lanes = 0),
      (ba.current = n === null || n.memoizedState === null ? HS : US),
      (n = a(c, m)),
      Uo)
    ) {
      v = 0;
      do {
        if (((Uo = !1), (Wo = 0), 25 <= v)) throw Error(r(301));
        ((v += 1),
          (nt = Je = null),
          (i.updateQueue = null),
          (ba.current = WS),
          (n = a(c, m)));
      } while (Uo);
    }
    if (
      ((ba.current = Ia),
      (i = Je !== null && Je.next !== null),
      (Vr = 0),
      (nt = Je = Ue = null),
      (_a = !1),
      i)
    )
      throw Error(r(300));
    return n;
  }
  function Tc() {
    var n = Wo !== 0;
    return ((Wo = 0), n);
  }
  function vn() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (nt === null ? (Ue.memoizedState = nt = n) : (nt = nt.next = n), nt);
  }
  function Gt() {
    if (Je === null) {
      var n = Ue.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Je.next;
    var i = nt === null ? Ue.memoizedState : nt.next;
    if (i !== null) ((nt = i), (Je = n));
    else {
      if (n === null) throw Error(r(310));
      ((Je = n),
        (n = {
          memoizedState: Je.memoizedState,
          baseState: Je.baseState,
          baseQueue: Je.baseQueue,
          queue: Je.queue,
          next: null,
        }),
        nt === null ? (Ue.memoizedState = nt = n) : (nt = nt.next = n));
    }
    return nt;
  }
  function Go(n, i) {
    return typeof i == "function" ? i(n) : i;
  }
  function Mc(n) {
    var i = Gt(),
      a = i.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var c = Je,
      m = c.baseQueue,
      v = a.pending;
    if (v !== null) {
      if (m !== null) {
        var E = m.next;
        ((m.next = v.next), (v.next = E));
      }
      ((c.baseQueue = m = v), (a.pending = null));
    }
    if (m !== null) {
      ((v = m.next), (c = c.baseState));
      var A = (E = null),
        z = null,
        q = v;
      do {
        var ne = q.lane;
        if ((Vr & ne) === ne)
          (z !== null &&
            (z = z.next =
              {
                lane: 0,
                action: q.action,
                hasEagerState: q.hasEagerState,
                eagerState: q.eagerState,
                next: null,
              }),
            (c = q.hasEagerState ? q.eagerState : n(c, q.action)));
        else {
          var ie = {
            lane: ne,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null,
          };
          (z === null ? ((A = z = ie), (E = c)) : (z = z.next = ie),
            (Ue.lanes |= ne),
            (zr |= ne));
        }
        q = q.next;
      } while (q !== null && q !== v);
      (z === null ? (E = c) : (z.next = A),
        qt(c, i.memoizedState) || (Ct = !0),
        (i.memoizedState = c),
        (i.baseState = E),
        (i.baseQueue = z),
        (a.lastRenderedState = c));
    }
    if (((n = a.interleaved), n !== null)) {
      m = n;
      do ((v = m.lane), (Ue.lanes |= v), (zr |= v), (m = m.next));
      while (m !== n);
    } else m === null && (a.lanes = 0);
    return [i.memoizedState, a.dispatch];
  }
  function Nc(n) {
    var i = Gt(),
      a = i.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var c = a.dispatch,
      m = a.pending,
      v = i.memoizedState;
    if (m !== null) {
      a.pending = null;
      var E = (m = m.next);
      do ((v = n(v, E.action)), (E = E.next));
      while (E !== m);
      (qt(v, i.memoizedState) || (Ct = !0),
        (i.memoizedState = v),
        i.baseQueue === null && (i.baseState = v),
        (a.lastRenderedState = v));
    }
    return [v, c];
  }
  function Hp() {}
  function Up(n, i) {
    var a = Ue,
      c = Gt(),
      m = i(),
      v = !qt(c.memoizedState, m);
    if (
      (v && ((c.memoizedState = m), (Ct = !0)),
      (c = c.queue),
      bc(Xp.bind(null, a, c, n), [n]),
      c.getSnapshot !== i || v || (nt !== null && nt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Xo(9, Gp.bind(null, a, c, m, i), void 0, null),
        rt === null)
      )
        throw Error(r(349));
      (Vr & 30) !== 0 || Wp(a, i, m);
    }
    return m;
  }
  function Wp(n, i, a) {
    ((n.flags |= 16384),
      (n = { getSnapshot: i, value: a }),
      (i = Ue.updateQueue),
      i === null
        ? ((i = { lastEffect: null, stores: null }),
          (Ue.updateQueue = i),
          (i.stores = [n]))
        : ((a = i.stores), a === null ? (i.stores = [n]) : a.push(n)));
  }
  function Gp(n, i, a, c) {
    ((i.value = a), (i.getSnapshot = c), Yp(i) && Kp(n));
  }
  function Xp(n, i, a) {
    return a(function () {
      Yp(i) && Kp(n);
    });
  }
  function Yp(n) {
    var i = n.getSnapshot;
    n = n.value;
    try {
      var a = i();
      return !qt(n, a);
    } catch {
      return !0;
    }
  }
  function Kp(n) {
    var i = Ln(n, 1);
    i !== null && nn(i, n, 1, -1);
  }
  function Zp(n) {
    var i = vn();
    return (
      typeof n == "function" && (n = n()),
      (i.memoizedState = i.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Go,
        lastRenderedState: n,
      }),
      (i.queue = n),
      (n = n.dispatch = BS.bind(null, Ue, n)),
      [i.memoizedState, n]
    );
  }
  function Xo(n, i, a, c) {
    return (
      (n = { tag: n, create: i, destroy: a, deps: c, next: null }),
      (i = Ue.updateQueue),
      i === null
        ? ((i = { lastEffect: null, stores: null }),
          (Ue.updateQueue = i),
          (i.lastEffect = n.next = n))
        : ((a = i.lastEffect),
          a === null
            ? (i.lastEffect = n.next = n)
            : ((c = a.next), (a.next = n), (n.next = c), (i.lastEffect = n))),
      n
    );
  }
  function qp() {
    return Gt().memoizedState;
  }
  function ja(n, i, a, c) {
    var m = vn();
    ((Ue.flags |= n),
      (m.memoizedState = Xo(1 | i, a, void 0, c === void 0 ? null : c)));
  }
  function Aa(n, i, a, c) {
    var m = Gt();
    c = c === void 0 ? null : c;
    var v = void 0;
    if (Je !== null) {
      var E = Je.memoizedState;
      if (((v = E.destroy), c !== null && Cc(c, E.deps))) {
        m.memoizedState = Xo(i, a, v, c);
        return;
      }
    }
    ((Ue.flags |= n), (m.memoizedState = Xo(1 | i, a, v, c)));
  }
  function Qp(n, i) {
    return ja(8390656, 8, n, i);
  }
  function bc(n, i) {
    return Aa(2048, 8, n, i);
  }
  function Jp(n, i) {
    return Aa(4, 2, n, i);
  }
  function em(n, i) {
    return Aa(4, 4, n, i);
  }
  function tm(n, i) {
    if (typeof i == "function")
      return (
        (n = n()),
        i(n),
        function () {
          i(null);
        }
      );
    if (i != null)
      return (
        (n = n()),
        (i.current = n),
        function () {
          i.current = null;
        }
      );
  }
  function nm(n, i, a) {
    return (
      (a = a != null ? a.concat([n]) : null),
      Aa(4, 4, tm.bind(null, i, n), a)
    );
  }
  function _c() {}
  function rm(n, i) {
    var a = Gt();
    i = i === void 0 ? null : i;
    var c = a.memoizedState;
    return c !== null && i !== null && Cc(i, c[1])
      ? c[0]
      : ((a.memoizedState = [n, i]), n);
  }
  function im(n, i) {
    var a = Gt();
    i = i === void 0 ? null : i;
    var c = a.memoizedState;
    return c !== null && i !== null && Cc(i, c[1])
      ? c[0]
      : ((n = n()), (a.memoizedState = [n, i]), n);
  }
  function om(n, i, a) {
    return (Vr & 21) === 0
      ? (n.baseState && ((n.baseState = !1), (Ct = !0)), (n.memoizedState = a))
      : (qt(a, i) ||
          ((a = ea()), (Ue.lanes |= a), (zr |= a), (n.baseState = !0)),
        i);
  }
  function FS(n, i) {
    var a = Ie;
    ((Ie = a !== 0 && 4 > a ? a : 4), n(!0));
    var c = Ec.transition;
    Ec.transition = {};
    try {
      (n(!1), i());
    } finally {
      ((Ie = a), (Ec.transition = c));
    }
  }
  function sm() {
    return Gt().memoizedState;
  }
  function $S(n, i, a) {
    var c = cr(n);
    if (
      ((a = {
        lane: c,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      am(n))
    )
      lm(i, a);
    else if (((a = zp(n, i, a, c)), a !== null)) {
      var m = gt();
      (nn(a, n, c, m), um(a, i, c));
    }
  }
  function BS(n, i, a) {
    var c = cr(n),
      m = {
        lane: c,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (am(n)) lm(i, m);
    else {
      var v = n.alternate;
      if (
        n.lanes === 0 &&
        (v === null || v.lanes === 0) &&
        ((v = i.lastRenderedReducer), v !== null)
      )
        try {
          var E = i.lastRenderedState,
            A = v(E, a);
          if (((m.hasEagerState = !0), (m.eagerState = A), qt(A, E))) {
            var z = i.interleaved;
            (z === null
              ? ((m.next = m), yc(i))
              : ((m.next = z.next), (z.next = m)),
              (i.interleaved = m));
            return;
          }
        } catch {
        } finally {
        }
      ((a = zp(n, i, m, c)),
        a !== null && ((m = gt()), nn(a, n, c, m), um(a, i, c)));
    }
  }
  function am(n) {
    var i = n.alternate;
    return n === Ue || (i !== null && i === Ue);
  }
  function lm(n, i) {
    Uo = _a = !0;
    var a = n.pending;
    (a === null ? (i.next = i) : ((i.next = a.next), (a.next = i)),
      (n.pending = i));
  }
  function um(n, i, a) {
    if ((a & 4194240) !== 0) {
      var c = i.lanes;
      ((c &= n.pendingLanes), (a |= c), (i.lanes = a), pi(n, a));
    }
  }
  var Ia = {
      readContext: Wt,
      useCallback: ft,
      useContext: ft,
      useEffect: ft,
      useImperativeHandle: ft,
      useInsertionEffect: ft,
      useLayoutEffect: ft,
      useMemo: ft,
      useReducer: ft,
      useRef: ft,
      useState: ft,
      useDebugValue: ft,
      useDeferredValue: ft,
      useTransition: ft,
      useMutableSource: ft,
      useSyncExternalStore: ft,
      useId: ft,
      unstable_isNewReconciler: !1,
    },
    HS = {
      readContext: Wt,
      useCallback: function (n, i) {
        return ((vn().memoizedState = [n, i === void 0 ? null : i]), n);
      },
      useContext: Wt,
      useEffect: Qp,
      useImperativeHandle: function (n, i, a) {
        return (
          (a = a != null ? a.concat([n]) : null),
          ja(4194308, 4, tm.bind(null, i, n), a)
        );
      },
      useLayoutEffect: function (n, i) {
        return ja(4194308, 4, n, i);
      },
      useInsertionEffect: function (n, i) {
        return ja(4, 2, n, i);
      },
      useMemo: function (n, i) {
        var a = vn();
        return (
          (i = i === void 0 ? null : i),
          (n = n()),
          (a.memoizedState = [n, i]),
          n
        );
      },
      useReducer: function (n, i, a) {
        var c = vn();
        return (
          (i = a !== void 0 ? a(i) : i),
          (c.memoizedState = c.baseState = i),
          (n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: i,
          }),
          (c.queue = n),
          (n = n.dispatch = $S.bind(null, Ue, n)),
          [c.memoizedState, n]
        );
      },
      useRef: function (n) {
        var i = vn();
        return ((n = { current: n }), (i.memoizedState = n));
      },
      useState: Zp,
      useDebugValue: _c,
      useDeferredValue: function (n) {
        return (vn().memoizedState = n);
      },
      useTransition: function () {
        var n = Zp(!1),
          i = n[0];
        return ((n = FS.bind(null, n[1])), (vn().memoizedState = n), [i, n]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, i, a) {
        var c = Ue,
          m = vn();
        if ($e) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = i()), rt === null)) throw Error(r(349));
          (Vr & 30) !== 0 || Wp(c, i, a);
        }
        m.memoizedState = a;
        var v = { value: a, getSnapshot: i };
        return (
          (m.queue = v),
          Qp(Xp.bind(null, c, v, n), [n]),
          (c.flags |= 2048),
          Xo(9, Gp.bind(null, c, v, a, i), void 0, null),
          a
        );
      },
      useId: function () {
        var n = vn(),
          i = rt.identifierPrefix;
        if ($e) {
          var a = Rn,
            c = Dn;
          ((a = (c & ~(1 << (32 - At(c) - 1))).toString(32) + a),
            (i = ":" + i + "R" + a),
            (a = Wo++),
            0 < a && (i += "H" + a.toString(32)),
            (i += ":"));
        } else ((a = OS++), (i = ":" + i + "r" + a.toString(32) + ":"));
        return (n.memoizedState = i);
      },
      unstable_isNewReconciler: !1,
    },
    US = {
      readContext: Wt,
      useCallback: rm,
      useContext: Wt,
      useEffect: bc,
      useImperativeHandle: nm,
      useInsertionEffect: Jp,
      useLayoutEffect: em,
      useMemo: im,
      useReducer: Mc,
      useRef: qp,
      useState: function () {
        return Mc(Go);
      },
      useDebugValue: _c,
      useDeferredValue: function (n) {
        var i = Gt();
        return om(i, Je.memoizedState, n);
      },
      useTransition: function () {
        var n = Mc(Go)[0],
          i = Gt().memoizedState;
        return [n, i];
      },
      useMutableSource: Hp,
      useSyncExternalStore: Up,
      useId: sm,
      unstable_isNewReconciler: !1,
    },
    WS = {
      readContext: Wt,
      useCallback: rm,
      useContext: Wt,
      useEffect: bc,
      useImperativeHandle: nm,
      useInsertionEffect: Jp,
      useLayoutEffect: em,
      useMemo: im,
      useReducer: Nc,
      useRef: qp,
      useState: function () {
        return Nc(Go);
      },
      useDebugValue: _c,
      useDeferredValue: function (n) {
        var i = Gt();
        return Je === null ? (i.memoizedState = n) : om(i, Je.memoizedState, n);
      },
      useTransition: function () {
        var n = Nc(Go)[0],
          i = Gt().memoizedState;
        return [n, i];
      },
      useMutableSource: Hp,
      useSyncExternalStore: Up,
      useId: sm,
      unstable_isNewReconciler: !1,
    };
  function Jt(n, i) {
    if (n && n.defaultProps) {
      ((i = G({}, i)), (n = n.defaultProps));
      for (var a in n) i[a] === void 0 && (i[a] = n[a]);
      return i;
    }
    return i;
  }
  function jc(n, i, a, c) {
    ((i = n.memoizedState),
      (a = a(c, i)),
      (a = a == null ? i : G({}, i, a)),
      (n.memoizedState = a),
      n.lanes === 0 && (n.updateQueue.baseState = a));
  }
  var Da = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? mn(n) === n : !1;
    },
    enqueueSetState: function (n, i, a) {
      n = n._reactInternals;
      var c = gt(),
        m = cr(n),
        v = Vn(c, m);
      ((v.payload = i),
        a != null && (v.callback = a),
        (i = sr(n, v, m)),
        i !== null && (nn(i, n, m, c), Ta(i, n, m)));
    },
    enqueueReplaceState: function (n, i, a) {
      n = n._reactInternals;
      var c = gt(),
        m = cr(n),
        v = Vn(c, m);
      ((v.tag = 1),
        (v.payload = i),
        a != null && (v.callback = a),
        (i = sr(n, v, m)),
        i !== null && (nn(i, n, m, c), Ta(i, n, m)));
    },
    enqueueForceUpdate: function (n, i) {
      n = n._reactInternals;
      var a = gt(),
        c = cr(n),
        m = Vn(a, c);
      ((m.tag = 2),
        i != null && (m.callback = i),
        (i = sr(n, m, c)),
        i !== null && (nn(i, n, c, a), Ta(i, n, c)));
    },
  };
  function cm(n, i, a, c, m, v, E) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(c, v, E)
        : i.prototype && i.prototype.isPureReactComponent
          ? !Io(a, c) || !Io(m, v)
          : !0
    );
  }
  function dm(n, i, a) {
    var c = !1,
      m = rr,
      v = i.contextType;
    return (
      typeof v == "object" && v !== null
        ? (v = Wt(v))
        : ((m = Et(i) ? Ar : dt.current),
          (c = i.contextTypes),
          (v = (c = c != null) ? Ci(n, m) : rr)),
      (i = new i(a, v)),
      (n.memoizedState =
        i.state !== null && i.state !== void 0 ? i.state : null),
      (i.updater = Da),
      (n.stateNode = i),
      (i._reactInternals = n),
      c &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = m),
        (n.__reactInternalMemoizedMaskedChildContext = v)),
      i
    );
  }
  function fm(n, i, a, c) {
    ((n = i.state),
      typeof i.componentWillReceiveProps == "function" &&
        i.componentWillReceiveProps(a, c),
      typeof i.UNSAFE_componentWillReceiveProps == "function" &&
        i.UNSAFE_componentWillReceiveProps(a, c),
      i.state !== n && Da.enqueueReplaceState(i, i.state, null));
  }
  function Ac(n, i, a, c) {
    var m = n.stateNode;
    ((m.props = a), (m.state = n.memoizedState), (m.refs = {}), vc(n));
    var v = i.contextType;
    (typeof v == "object" && v !== null
      ? (m.context = Wt(v))
      : ((v = Et(i) ? Ar : dt.current), (m.context = Ci(n, v))),
      (m.state = n.memoizedState),
      (v = i.getDerivedStateFromProps),
      typeof v == "function" && (jc(n, i, v, a), (m.state = n.memoizedState)),
      typeof i.getDerivedStateFromProps == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function" ||
        (typeof m.UNSAFE_componentWillMount != "function" &&
          typeof m.componentWillMount != "function") ||
        ((i = m.state),
        typeof m.componentWillMount == "function" && m.componentWillMount(),
        typeof m.UNSAFE_componentWillMount == "function" &&
          m.UNSAFE_componentWillMount(),
        i !== m.state && Da.enqueueReplaceState(m, m.state, null),
        Ma(n, a, m, c),
        (m.state = n.memoizedState)),
      typeof m.componentDidMount == "function" && (n.flags |= 4194308));
  }
  function Ai(n, i) {
    try {
      var a = "",
        c = i;
      do ((a += le(c)), (c = c.return));
      while (c);
      var m = a;
    } catch (v) {
      m =
        `
Error generating stack: ` +
        v.message +
        `
` +
        v.stack;
    }
    return { value: n, source: i, stack: m, digest: null };
  }
  function Ic(n, i, a) {
    return { value: n, source: null, stack: a ?? null, digest: i ?? null };
  }
  function Dc(n, i) {
    try {
      console.error(i.value);
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  var GS = typeof WeakMap == "function" ? WeakMap : Map;
  function hm(n, i, a) {
    ((a = Vn(-1, a)), (a.tag = 3), (a.payload = { element: null }));
    var c = i.value;
    return (
      (a.callback = function () {
        ($a || (($a = !0), (Kc = c)), Dc(n, i));
      }),
      a
    );
  }
  function pm(n, i, a) {
    ((a = Vn(-1, a)), (a.tag = 3));
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var m = i.value;
      ((a.payload = function () {
        return c(m);
      }),
        (a.callback = function () {
          Dc(n, i);
        }));
    }
    var v = n.stateNode;
    return (
      v !== null &&
        typeof v.componentDidCatch == "function" &&
        (a.callback = function () {
          (Dc(n, i),
            typeof c != "function" &&
              (lr === null ? (lr = new Set([this])) : lr.add(this)));
          var E = i.stack;
          this.componentDidCatch(i.value, {
            componentStack: E !== null ? E : "",
          });
        }),
      a
    );
  }
  function mm(n, i, a) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new GS();
      var m = new Set();
      c.set(i, m);
    } else ((m = c.get(i)), m === void 0 && ((m = new Set()), c.set(i, m)));
    m.has(a) || (m.add(a), (n = s2.bind(null, n, i, a)), i.then(n, n));
  }
  function gm(n) {
    do {
      var i;
      if (
        ((i = n.tag === 13) &&
          ((i = n.memoizedState),
          (i = i !== null ? i.dehydrated !== null : !0)),
        i)
      )
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function ym(n, i, a, c, m) {
    return (n.mode & 1) === 0
      ? (n === i
          ? (n.flags |= 65536)
          : ((n.flags |= 128),
            (a.flags |= 131072),
            (a.flags &= -52805),
            a.tag === 1 &&
              (a.alternate === null
                ? (a.tag = 17)
                : ((i = Vn(-1, 1)), (i.tag = 2), sr(a, i, 1))),
            (a.lanes |= 1)),
        n)
      : ((n.flags |= 65536), (n.lanes = m), n);
  }
  var XS = M.ReactCurrentOwner,
    Ct = !1;
  function mt(n, i, a, c) {
    i.child = n === null ? Vp(i, null, a, c) : Ni(i, n.child, a, c);
  }
  function vm(n, i, a, c, m) {
    a = a.render;
    var v = i.ref;
    return (
      _i(i, m),
      (c = Pc(n, i, a, c, v, m)),
      (a = Tc()),
      n !== null && !Ct
        ? ((i.updateQueue = n.updateQueue),
          (i.flags &= -2053),
          (n.lanes &= ~m),
          zn(n, i, m))
        : ($e && a && lc(i), (i.flags |= 1), mt(n, i, c, m), i.child)
    );
  }
  function xm(n, i, a, c, m) {
    if (n === null) {
      var v = a.type;
      return typeof v == "function" &&
        !nd(v) &&
        v.defaultProps === void 0 &&
        a.compare === null &&
        a.defaultProps === void 0
        ? ((i.tag = 15), (i.type = v), wm(n, i, v, c, m))
        : ((n = Xa(a.type, null, c, i, i.mode, m)),
          (n.ref = i.ref),
          (n.return = i),
          (i.child = n));
    }
    if (((v = n.child), (n.lanes & m) === 0)) {
      var E = v.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Io), a(E, c) && n.ref === i.ref)
      )
        return zn(n, i, m);
    }
    return (
      (i.flags |= 1),
      (n = fr(v, c)),
      (n.ref = i.ref),
      (n.return = i),
      (i.child = n)
    );
  }
  function wm(n, i, a, c, m) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (Io(v, c) && n.ref === i.ref)
        if (((Ct = !1), (i.pendingProps = c = v), (n.lanes & m) !== 0))
          (n.flags & 131072) !== 0 && (Ct = !0);
        else return ((i.lanes = n.lanes), zn(n, i, m));
    }
    return Rc(n, i, a, c, m);
  }
  function Sm(n, i, a) {
    var c = i.pendingProps,
      m = c.children,
      v = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if ((i.mode & 1) === 0)
        ((i.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ve(Di, Lt),
          (Lt |= a));
      else {
        if ((a & 1073741824) === 0)
          return (
            (n = v !== null ? v.baseLanes | a : a),
            (i.lanes = i.childLanes = 1073741824),
            (i.memoizedState = {
              baseLanes: n,
              cachePool: null,
              transitions: null,
            }),
            (i.updateQueue = null),
            Ve(Di, Lt),
            (Lt |= n),
            null
          );
        ((i.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (c = v !== null ? v.baseLanes : a),
          Ve(Di, Lt),
          (Lt |= c));
      }
    else
      (v !== null ? ((c = v.baseLanes | a), (i.memoizedState = null)) : (c = a),
        Ve(Di, Lt),
        (Lt |= c));
    return (mt(n, i, m, a), i.child);
  }
  function km(n, i) {
    var a = i.ref;
    ((n === null && a !== null) || (n !== null && n.ref !== a)) &&
      ((i.flags |= 512), (i.flags |= 2097152));
  }
  function Rc(n, i, a, c, m) {
    var v = Et(a) ? Ar : dt.current;
    return (
      (v = Ci(i, v)),
      _i(i, m),
      (a = Pc(n, i, a, c, v, m)),
      (c = Tc()),
      n !== null && !Ct
        ? ((i.updateQueue = n.updateQueue),
          (i.flags &= -2053),
          (n.lanes &= ~m),
          zn(n, i, m))
        : ($e && c && lc(i), (i.flags |= 1), mt(n, i, a, m), i.child)
    );
  }
  function Em(n, i, a, c, m) {
    if (Et(a)) {
      var v = !0;
      va(i);
    } else v = !1;
    if ((_i(i, m), i.stateNode === null))
      (La(n, i), dm(i, a, c), Ac(i, a, c, m), (c = !0));
    else if (n === null) {
      var E = i.stateNode,
        A = i.memoizedProps;
      E.props = A;
      var z = E.context,
        q = a.contextType;
      typeof q == "object" && q !== null
        ? (q = Wt(q))
        : ((q = Et(a) ? Ar : dt.current), (q = Ci(i, q)));
      var ne = a.getDerivedStateFromProps,
        ie =
          typeof ne == "function" ||
          typeof E.getSnapshotBeforeUpdate == "function";
      (ie ||
        (typeof E.UNSAFE_componentWillReceiveProps != "function" &&
          typeof E.componentWillReceiveProps != "function") ||
        ((A !== c || z !== q) && fm(i, E, c, q)),
        (or = !1));
      var te = i.memoizedState;
      ((E.state = te),
        Ma(i, c, E, m),
        (z = i.memoizedState),
        A !== c || te !== z || kt.current || or
          ? (typeof ne == "function" &&
              (jc(i, a, ne, c), (z = i.memoizedState)),
            (A = or || cm(i, a, A, c, te, z, q))
              ? (ie ||
                  (typeof E.UNSAFE_componentWillMount != "function" &&
                    typeof E.componentWillMount != "function") ||
                  (typeof E.componentWillMount == "function" &&
                    E.componentWillMount(),
                  typeof E.UNSAFE_componentWillMount == "function" &&
                    E.UNSAFE_componentWillMount()),
                typeof E.componentDidMount == "function" &&
                  (i.flags |= 4194308))
              : (typeof E.componentDidMount == "function" &&
                  (i.flags |= 4194308),
                (i.memoizedProps = c),
                (i.memoizedState = z)),
            (E.props = c),
            (E.state = z),
            (E.context = q),
            (c = A))
          : (typeof E.componentDidMount == "function" && (i.flags |= 4194308),
            (c = !1)));
    } else {
      ((E = i.stateNode),
        Op(n, i),
        (A = i.memoizedProps),
        (q = i.type === i.elementType ? A : Jt(i.type, A)),
        (E.props = q),
        (ie = i.pendingProps),
        (te = E.context),
        (z = a.contextType),
        typeof z == "object" && z !== null
          ? (z = Wt(z))
          : ((z = Et(a) ? Ar : dt.current), (z = Ci(i, z))));
      var de = a.getDerivedStateFromProps;
      ((ne =
        typeof de == "function" ||
        typeof E.getSnapshotBeforeUpdate == "function") ||
        (typeof E.UNSAFE_componentWillReceiveProps != "function" &&
          typeof E.componentWillReceiveProps != "function") ||
        ((A !== ie || te !== z) && fm(i, E, c, z)),
        (or = !1),
        (te = i.memoizedState),
        (E.state = te),
        Ma(i, c, E, m));
      var pe = i.memoizedState;
      A !== ie || te !== pe || kt.current || or
        ? (typeof de == "function" && (jc(i, a, de, c), (pe = i.memoizedState)),
          (q = or || cm(i, a, q, c, te, pe, z) || !1)
            ? (ne ||
                (typeof E.UNSAFE_componentWillUpdate != "function" &&
                  typeof E.componentWillUpdate != "function") ||
                (typeof E.componentWillUpdate == "function" &&
                  E.componentWillUpdate(c, pe, z),
                typeof E.UNSAFE_componentWillUpdate == "function" &&
                  E.UNSAFE_componentWillUpdate(c, pe, z)),
              typeof E.componentDidUpdate == "function" && (i.flags |= 4),
              typeof E.getSnapshotBeforeUpdate == "function" &&
                (i.flags |= 1024))
            : (typeof E.componentDidUpdate != "function" ||
                (A === n.memoizedProps && te === n.memoizedState) ||
                (i.flags |= 4),
              typeof E.getSnapshotBeforeUpdate != "function" ||
                (A === n.memoizedProps && te === n.memoizedState) ||
                (i.flags |= 1024),
              (i.memoizedProps = c),
              (i.memoizedState = pe)),
          (E.props = c),
          (E.state = pe),
          (E.context = z),
          (c = q))
        : (typeof E.componentDidUpdate != "function" ||
            (A === n.memoizedProps && te === n.memoizedState) ||
            (i.flags |= 4),
          typeof E.getSnapshotBeforeUpdate != "function" ||
            (A === n.memoizedProps && te === n.memoizedState) ||
            (i.flags |= 1024),
          (c = !1));
    }
    return Lc(n, i, a, c, v, m);
  }
  function Lc(n, i, a, c, m, v) {
    km(n, i);
    var E = (i.flags & 128) !== 0;
    if (!c && !E) return (m && Np(i, a, !1), zn(n, i, v));
    ((c = i.stateNode), (XS.current = i));
    var A =
      E && typeof a.getDerivedStateFromError != "function" ? null : c.render();
    return (
      (i.flags |= 1),
      n !== null && E
        ? ((i.child = Ni(i, n.child, null, v)), (i.child = Ni(i, null, A, v)))
        : mt(n, i, A, v),
      (i.memoizedState = c.state),
      m && Np(i, a, !0),
      i.child
    );
  }
  function Cm(n) {
    var i = n.stateNode;
    (i.pendingContext
      ? Tp(n, i.pendingContext, i.pendingContext !== i.context)
      : i.context && Tp(n, i.context, !1),
      xc(n, i.containerInfo));
  }
  function Pm(n, i, a, c, m) {
    return (Mi(), fc(m), (i.flags |= 256), mt(n, i, a, c), i.child);
  }
  var Vc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Tm(n, i, a) {
    var c = i.pendingProps,
      m = He.current,
      v = !1,
      E = (i.flags & 128) !== 0,
      A;
    if (
      ((A = E) ||
        (A = n !== null && n.memoizedState === null ? !1 : (m & 2) !== 0),
      A
        ? ((v = !0), (i.flags &= -129))
        : (n === null || n.memoizedState !== null) && (m |= 1),
      Ve(He, m & 1),
      n === null)
    )
      return (
        dc(i),
        (n = i.memoizedState),
        n !== null && ((n = n.dehydrated), n !== null)
          ? ((i.mode & 1) === 0
              ? (i.lanes = 1)
              : n.data === "$!"
                ? (i.lanes = 8)
                : (i.lanes = 1073741824),
            null)
          : ((E = c.children),
            (n = c.fallback),
            v
              ? ((c = i.mode),
                (v = i.child),
                (E = { mode: "hidden", children: E }),
                (c & 1) === 0 && v !== null
                  ? ((v.childLanes = 0), (v.pendingProps = E))
                  : (v = Ya(E, c, 0, null)),
                (n = Br(n, c, a, null)),
                (v.return = i),
                (n.return = i),
                (v.sibling = n),
                (i.child = v),
                (i.child.memoizedState = zc(a)),
                (i.memoizedState = Vc),
                n)
              : Oc(i, E))
      );
    if (((m = n.memoizedState), m !== null && ((A = m.dehydrated), A !== null)))
      return YS(n, i, E, c, A, m, a);
    if (v) {
      ((v = c.fallback), (E = i.mode), (m = n.child), (A = m.sibling));
      var z = { mode: "hidden", children: c.children };
      return (
        (E & 1) === 0 && i.child !== m
          ? ((c = i.child),
            (c.childLanes = 0),
            (c.pendingProps = z),
            (i.deletions = null))
          : ((c = fr(m, z)), (c.subtreeFlags = m.subtreeFlags & 14680064)),
        A !== null ? (v = fr(A, v)) : ((v = Br(v, E, a, null)), (v.flags |= 2)),
        (v.return = i),
        (c.return = i),
        (c.sibling = v),
        (i.child = c),
        (c = v),
        (v = i.child),
        (E = n.child.memoizedState),
        (E =
          E === null
            ? zc(a)
            : {
                baseLanes: E.baseLanes | a,
                cachePool: null,
                transitions: E.transitions,
              }),
        (v.memoizedState = E),
        (v.childLanes = n.childLanes & ~a),
        (i.memoizedState = Vc),
        c
      );
    }
    return (
      (v = n.child),
      (n = v.sibling),
      (c = fr(v, { mode: "visible", children: c.children })),
      (i.mode & 1) === 0 && (c.lanes = a),
      (c.return = i),
      (c.sibling = null),
      n !== null &&
        ((a = i.deletions),
        a === null ? ((i.deletions = [n]), (i.flags |= 16)) : a.push(n)),
      (i.child = c),
      (i.memoizedState = null),
      c
    );
  }
  function Oc(n, i) {
    return (
      (i = Ya({ mode: "visible", children: i }, n.mode, 0, null)),
      (i.return = n),
      (n.child = i)
    );
  }
  function Ra(n, i, a, c) {
    return (
      c !== null && fc(c),
      Ni(i, n.child, null, a),
      (n = Oc(i, i.pendingProps.children)),
      (n.flags |= 2),
      (i.memoizedState = null),
      n
    );
  }
  function YS(n, i, a, c, m, v, E) {
    if (a)
      return i.flags & 256
        ? ((i.flags &= -257), (c = Ic(Error(r(422)))), Ra(n, i, E, c))
        : i.memoizedState !== null
          ? ((i.child = n.child), (i.flags |= 128), null)
          : ((v = c.fallback),
            (m = i.mode),
            (c = Ya({ mode: "visible", children: c.children }, m, 0, null)),
            (v = Br(v, m, E, null)),
            (v.flags |= 2),
            (c.return = i),
            (v.return = i),
            (c.sibling = v),
            (i.child = c),
            (i.mode & 1) !== 0 && Ni(i, n.child, null, E),
            (i.child.memoizedState = zc(E)),
            (i.memoizedState = Vc),
            v);
    if ((i.mode & 1) === 0) return Ra(n, i, E, null);
    if (m.data === "$!") {
      if (((c = m.nextSibling && m.nextSibling.dataset), c)) var A = c.dgst;
      return (
        (c = A),
        (v = Error(r(419))),
        (c = Ic(v, c, void 0)),
        Ra(n, i, E, c)
      );
    }
    if (((A = (E & n.childLanes) !== 0), Ct || A)) {
      if (((c = rt), c !== null)) {
        switch (E & -E) {
          case 4:
            m = 2;
            break;
          case 16:
            m = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            m = 32;
            break;
          case 536870912:
            m = 268435456;
            break;
          default:
            m = 0;
        }
        ((m = (m & (c.suspendedLanes | E)) !== 0 ? 0 : m),
          m !== 0 &&
            m !== v.retryLane &&
            ((v.retryLane = m), Ln(n, m), nn(c, n, m, -1)));
      }
      return (td(), (c = Ic(Error(r(421)))), Ra(n, i, E, c));
    }
    return m.data === "$?"
      ? ((i.flags |= 128),
        (i.child = n.child),
        (i = a2.bind(null, n)),
        (m._reactRetry = i),
        null)
      : ((n = v.treeContext),
        (Rt = tr(m.nextSibling)),
        (Dt = i),
        ($e = !0),
        (Qt = null),
        n !== null &&
          ((Ht[Ut++] = Dn),
          (Ht[Ut++] = Rn),
          (Ht[Ut++] = Ir),
          (Dn = n.id),
          (Rn = n.overflow),
          (Ir = i)),
        (i = Oc(i, c.children)),
        (i.flags |= 4096),
        i);
  }
  function Mm(n, i, a) {
    n.lanes |= i;
    var c = n.alternate;
    (c !== null && (c.lanes |= i), gc(n.return, i, a));
  }
  function Fc(n, i, a, c, m) {
    var v = n.memoizedState;
    v === null
      ? (n.memoizedState = {
          isBackwards: i,
          rendering: null,
          renderingStartTime: 0,
          last: c,
          tail: a,
          tailMode: m,
        })
      : ((v.isBackwards = i),
        (v.rendering = null),
        (v.renderingStartTime = 0),
        (v.last = c),
        (v.tail = a),
        (v.tailMode = m));
  }
  function Nm(n, i, a) {
    var c = i.pendingProps,
      m = c.revealOrder,
      v = c.tail;
    if ((mt(n, i, c.children, a), (c = He.current), (c & 2) !== 0))
      ((c = (c & 1) | 2), (i.flags |= 128));
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e: for (n = i.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && Mm(n, a, i);
          else if (n.tag === 19) Mm(n, a, i);
          else if (n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === i) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === i) break e;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      c &= 1;
    }
    if ((Ve(He, c), (i.mode & 1) === 0)) i.memoizedState = null;
    else
      switch (m) {
        case "forwards":
          for (a = i.child, m = null; a !== null; )
            ((n = a.alternate),
              n !== null && Na(n) === null && (m = a),
              (a = a.sibling));
          ((a = m),
            a === null
              ? ((m = i.child), (i.child = null))
              : ((m = a.sibling), (a.sibling = null)),
            Fc(i, !1, m, a, v));
          break;
        case "backwards":
          for (a = null, m = i.child, i.child = null; m !== null; ) {
            if (((n = m.alternate), n !== null && Na(n) === null)) {
              i.child = m;
              break;
            }
            ((n = m.sibling), (m.sibling = a), (a = m), (m = n));
          }
          Fc(i, !0, a, null, v);
          break;
        case "together":
          Fc(i, !1, null, null, void 0);
          break;
        default:
          i.memoizedState = null;
      }
    return i.child;
  }
  function La(n, i) {
    (i.mode & 1) === 0 &&
      n !== null &&
      ((n.alternate = null), (i.alternate = null), (i.flags |= 2));
  }
  function zn(n, i, a) {
    if (
      (n !== null && (i.dependencies = n.dependencies),
      (zr |= i.lanes),
      (a & i.childLanes) === 0)
    )
      return null;
    if (n !== null && i.child !== n.child) throw Error(r(153));
    if (i.child !== null) {
      for (
        n = i.child, a = fr(n, n.pendingProps), i.child = a, a.return = i;
        n.sibling !== null;

      )
        ((n = n.sibling),
          (a = a.sibling = fr(n, n.pendingProps)),
          (a.return = i));
      a.sibling = null;
    }
    return i.child;
  }
  function KS(n, i, a) {
    switch (i.tag) {
      case 3:
        (Cm(i), Mi());
        break;
      case 5:
        Bp(i);
        break;
      case 1:
        Et(i.type) && va(i);
        break;
      case 4:
        xc(i, i.stateNode.containerInfo);
        break;
      case 10:
        var c = i.type._context,
          m = i.memoizedProps.value;
        (Ve(Ca, c._currentValue), (c._currentValue = m));
        break;
      case 13:
        if (((c = i.memoizedState), c !== null))
          return c.dehydrated !== null
            ? (Ve(He, He.current & 1), (i.flags |= 128), null)
            : (a & i.child.childLanes) !== 0
              ? Tm(n, i, a)
              : (Ve(He, He.current & 1),
                (n = zn(n, i, a)),
                n !== null ? n.sibling : null);
        Ve(He, He.current & 1);
        break;
      case 19:
        if (((c = (a & i.childLanes) !== 0), (n.flags & 128) !== 0)) {
          if (c) return Nm(n, i, a);
          i.flags |= 128;
        }
        if (
          ((m = i.memoizedState),
          m !== null &&
            ((m.rendering = null), (m.tail = null), (m.lastEffect = null)),
          Ve(He, He.current),
          c)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((i.lanes = 0), Sm(n, i, a));
    }
    return zn(n, i, a);
  }
  var bm, $c, _m, jm;
  ((bm = function (n, i) {
    for (var a = i.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) n.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        ((a.child.return = a), (a = a.child));
        continue;
      }
      if (a === i) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === i) return;
        a = a.return;
      }
      ((a.sibling.return = a.return), (a = a.sibling));
    }
  }),
    ($c = function () {}),
    (_m = function (n, i, a, c) {
      var m = n.memoizedProps;
      if (m !== c) {
        ((n = i.stateNode), Lr(yn.current));
        var v = null;
        switch (a) {
          case "input":
            ((m = Me(n, m)), (c = Me(n, c)), (v = []));
            break;
          case "select":
            ((m = G({}, m, { value: void 0 })),
              (c = G({}, c, { value: void 0 })),
              (v = []));
            break;
          case "textarea":
            ((m = _n(n, m)), (c = _n(n, c)), (v = []));
            break;
          default:
            typeof m.onClick != "function" &&
              typeof c.onClick == "function" &&
              (n.onclick = ma);
        }
        co(a, c);
        var E;
        a = null;
        for (q in m)
          if (!c.hasOwnProperty(q) && m.hasOwnProperty(q) && m[q] != null)
            if (q === "style") {
              var A = m[q];
              for (E in A) A.hasOwnProperty(E) && (a || (a = {}), (a[E] = ""));
            } else
              q !== "dangerouslySetInnerHTML" &&
                q !== "children" &&
                q !== "suppressContentEditableWarning" &&
                q !== "suppressHydrationWarning" &&
                q !== "autoFocus" &&
                (s.hasOwnProperty(q)
                  ? v || (v = [])
                  : (v = v || []).push(q, null));
        for (q in c) {
          var z = c[q];
          if (
            ((A = m?.[q]),
            c.hasOwnProperty(q) && z !== A && (z != null || A != null))
          )
            if (q === "style")
              if (A) {
                for (E in A)
                  !A.hasOwnProperty(E) ||
                    (z && z.hasOwnProperty(E)) ||
                    (a || (a = {}), (a[E] = ""));
                for (E in z)
                  z.hasOwnProperty(E) &&
                    A[E] !== z[E] &&
                    (a || (a = {}), (a[E] = z[E]));
              } else (a || (v || (v = []), v.push(q, a)), (a = z));
            else
              q === "dangerouslySetInnerHTML"
                ? ((z = z ? z.__html : void 0),
                  (A = A ? A.__html : void 0),
                  z != null && A !== z && (v = v || []).push(q, z))
                : q === "children"
                  ? (typeof z != "string" && typeof z != "number") ||
                    (v = v || []).push(q, "" + z)
                  : q !== "suppressContentEditableWarning" &&
                    q !== "suppressHydrationWarning" &&
                    (s.hasOwnProperty(q)
                      ? (z != null && q === "onScroll" && ze("scroll", n),
                        v || A === z || (v = []))
                      : (v = v || []).push(q, z));
        }
        a && (v = v || []).push("style", a);
        var q = v;
        (i.updateQueue = q) && (i.flags |= 4);
      }
    }),
    (jm = function (n, i, a, c) {
      a !== c && (i.flags |= 4);
    }));
  function Yo(n, i) {
    if (!$e)
      switch (n.tailMode) {
        case "hidden":
          i = n.tail;
          for (var a = null; i !== null; )
            (i.alternate !== null && (a = i), (i = i.sibling));
          a === null ? (n.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = n.tail;
          for (var c = null; a !== null; )
            (a.alternate !== null && (c = a), (a = a.sibling));
          c === null
            ? i || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (c.sibling = null);
      }
  }
  function ht(n) {
    var i = n.alternate !== null && n.alternate.child === n.child,
      a = 0,
      c = 0;
    if (i)
      for (var m = n.child; m !== null; )
        ((a |= m.lanes | m.childLanes),
          (c |= m.subtreeFlags & 14680064),
          (c |= m.flags & 14680064),
          (m.return = n),
          (m = m.sibling));
    else
      for (m = n.child; m !== null; )
        ((a |= m.lanes | m.childLanes),
          (c |= m.subtreeFlags),
          (c |= m.flags),
          (m.return = n),
          (m = m.sibling));
    return ((n.subtreeFlags |= c), (n.childLanes = a), i);
  }
  function ZS(n, i, a) {
    var c = i.pendingProps;
    switch ((uc(i), i.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ht(i), null);
      case 1:
        return (Et(i.type) && ya(), ht(i), null);
      case 3:
        return (
          (c = i.stateNode),
          ji(),
          Oe(kt),
          Oe(dt),
          kc(),
          c.pendingContext &&
            ((c.context = c.pendingContext), (c.pendingContext = null)),
          (n === null || n.child === null) &&
            (ka(i)
              ? (i.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && (i.flags & 256) === 0) ||
                ((i.flags |= 1024), Qt !== null && (Qc(Qt), (Qt = null)))),
          $c(n, i),
          ht(i),
          null
        );
      case 5:
        wc(i);
        var m = Lr(Ho.current);
        if (((a = i.type), n !== null && i.stateNode != null))
          (_m(n, i, a, c, m),
            n.ref !== i.ref && ((i.flags |= 512), (i.flags |= 2097152)));
        else {
          if (!c) {
            if (i.stateNode === null) throw Error(r(166));
            return (ht(i), null);
          }
          if (((n = Lr(yn.current)), ka(i))) {
            ((c = i.stateNode), (a = i.type));
            var v = i.memoizedProps;
            switch (((c[gn] = i), (c[zo] = v), (n = (i.mode & 1) !== 0), a)) {
              case "dialog":
                (ze("cancel", c), ze("close", c));
                break;
              case "iframe":
              case "object":
              case "embed":
                ze("load", c);
                break;
              case "video":
              case "audio":
                for (m = 0; m < Ro.length; m++) ze(Ro[m], c);
                break;
              case "source":
                ze("error", c);
                break;
              case "img":
              case "image":
              case "link":
                (ze("error", c), ze("load", c));
                break;
              case "details":
                ze("toggle", c);
                break;
              case "input":
                (be(c, v), ze("invalid", c));
                break;
              case "select":
                ((c._wrapperState = { wasMultiple: !!v.multiple }),
                  ze("invalid", c));
                break;
              case "textarea":
                (hn(c, v), ze("invalid", c));
            }
            (co(a, v), (m = null));
            for (var E in v)
              if (v.hasOwnProperty(E)) {
                var A = v[E];
                E === "children"
                  ? typeof A == "string"
                    ? c.textContent !== A &&
                      (v.suppressHydrationWarning !== !0 &&
                        pa(c.textContent, A, n),
                      (m = ["children", A]))
                    : typeof A == "number" &&
                      c.textContent !== "" + A &&
                      (v.suppressHydrationWarning !== !0 &&
                        pa(c.textContent, A, n),
                      (m = ["children", "" + A]))
                  : s.hasOwnProperty(E) &&
                    A != null &&
                    E === "onScroll" &&
                    ze("scroll", c);
              }
            switch (a) {
              case "input":
                (Pe(c), Ft(c, v, !0));
                break;
              case "textarea":
                (Pe(c), St(c));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (c.onclick = ma);
            }
            ((c = m), (i.updateQueue = c), c !== null && (i.flags |= 4));
          } else {
            ((E = m.nodeType === 9 ? m : m.ownerDocument),
              n === "http://www.w3.org/1999/xhtml" && (n = $t(a)),
              n === "http://www.w3.org/1999/xhtml"
                ? a === "script"
                  ? ((n = E.createElement("div")),
                    (n.innerHTML = "<script><\/script>"),
                    (n = n.removeChild(n.firstChild)))
                  : typeof c.is == "string"
                    ? (n = E.createElement(a, { is: c.is }))
                    : ((n = E.createElement(a)),
                      a === "select" &&
                        ((E = n),
                        c.multiple
                          ? (E.multiple = !0)
                          : c.size && (E.size = c.size)))
                : (n = E.createElementNS(n, a)),
              (n[gn] = i),
              (n[zo] = c),
              bm(n, i, !1, !1),
              (i.stateNode = n));
            e: {
              switch (((E = fo(a, c)), a)) {
                case "dialog":
                  (ze("cancel", n), ze("close", n), (m = c));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ze("load", n), (m = c));
                  break;
                case "video":
                case "audio":
                  for (m = 0; m < Ro.length; m++) ze(Ro[m], n);
                  m = c;
                  break;
                case "source":
                  (ze("error", n), (m = c));
                  break;
                case "img":
                case "image":
                case "link":
                  (ze("error", n), ze("load", n), (m = c));
                  break;
                case "details":
                  (ze("toggle", n), (m = c));
                  break;
                case "input":
                  (be(n, c), (m = Me(n, c)), ze("invalid", n));
                  break;
                case "option":
                  m = c;
                  break;
                case "select":
                  ((n._wrapperState = { wasMultiple: !!c.multiple }),
                    (m = G({}, c, { value: void 0 })),
                    ze("invalid", n));
                  break;
                case "textarea":
                  (hn(n, c), (m = _n(n, c)), ze("invalid", n));
                  break;
                default:
                  m = c;
              }
              (co(a, m), (A = m));
              for (v in A)
                if (A.hasOwnProperty(v)) {
                  var z = A[v];
                  v === "style"
                    ? Os(n, z)
                    : v === "dangerouslySetInnerHTML"
                      ? ((z = z ? z.__html : void 0), z != null && ai(n, z))
                      : v === "children"
                        ? typeof z == "string"
                          ? (a !== "textarea" || z !== "") && jn(n, z)
                          : typeof z == "number" && jn(n, "" + z)
                        : v !== "suppressContentEditableWarning" &&
                          v !== "suppressHydrationWarning" &&
                          v !== "autoFocus" &&
                          (s.hasOwnProperty(v)
                            ? z != null && v === "onScroll" && ze("scroll", n)
                            : z != null && k(n, v, z, E));
                }
              switch (a) {
                case "input":
                  (Pe(n), Ft(n, c, !1));
                  break;
                case "textarea":
                  (Pe(n), St(n));
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + Q(c.value));
                  break;
                case "select":
                  ((n.multiple = !!c.multiple),
                    (v = c.value),
                    v != null
                      ? ct(n, !!c.multiple, v, !1)
                      : c.defaultValue != null &&
                        ct(n, !!c.multiple, c.defaultValue, !0));
                  break;
                default:
                  typeof m.onClick == "function" && (n.onclick = ma);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (i.flags |= 4);
          }
          i.ref !== null && ((i.flags |= 512), (i.flags |= 2097152));
        }
        return (ht(i), null);
      case 6:
        if (n && i.stateNode != null) jm(n, i, n.memoizedProps, c);
        else {
          if (typeof c != "string" && i.stateNode === null) throw Error(r(166));
          if (((a = Lr(Ho.current)), Lr(yn.current), ka(i))) {
            if (
              ((c = i.stateNode),
              (a = i.memoizedProps),
              (c[gn] = i),
              (v = c.nodeValue !== a) && ((n = Dt), n !== null))
            )
              switch (n.tag) {
                case 3:
                  pa(c.nodeValue, a, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    pa(c.nodeValue, a, (n.mode & 1) !== 0);
              }
            v && (i.flags |= 4);
          } else
            ((c = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(c)),
              (c[gn] = i),
              (i.stateNode = c));
        }
        return (ht(i), null);
      case 13:
        if (
          (Oe(He),
          (c = i.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if ($e && Rt !== null && (i.mode & 1) !== 0 && (i.flags & 128) === 0)
            (Dp(), Mi(), (i.flags |= 98560), (v = !1));
          else if (((v = ka(i)), c !== null && c.dehydrated !== null)) {
            if (n === null) {
              if (!v) throw Error(r(318));
              if (
                ((v = i.memoizedState),
                (v = v !== null ? v.dehydrated : null),
                !v)
              )
                throw Error(r(317));
              v[gn] = i;
            } else
              (Mi(),
                (i.flags & 128) === 0 && (i.memoizedState = null),
                (i.flags |= 4));
            (ht(i), (v = !1));
          } else (Qt !== null && (Qc(Qt), (Qt = null)), (v = !0));
          if (!v) return i.flags & 65536 ? i : null;
        }
        return (i.flags & 128) !== 0
          ? ((i.lanes = a), i)
          : ((c = c !== null),
            c !== (n !== null && n.memoizedState !== null) &&
              c &&
              ((i.child.flags |= 8192),
              (i.mode & 1) !== 0 &&
                (n === null || (He.current & 1) !== 0
                  ? et === 0 && (et = 3)
                  : td())),
            i.updateQueue !== null && (i.flags |= 4),
            ht(i),
            null);
      case 4:
        return (
          ji(),
          $c(n, i),
          n === null && Lo(i.stateNode.containerInfo),
          ht(i),
          null
        );
      case 10:
        return (mc(i.type._context), ht(i), null);
      case 17:
        return (Et(i.type) && ya(), ht(i), null);
      case 19:
        if ((Oe(He), (v = i.memoizedState), v === null)) return (ht(i), null);
        if (((c = (i.flags & 128) !== 0), (E = v.rendering), E === null))
          if (c) Yo(v, !1);
          else {
            if (et !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = i.child; n !== null; ) {
                if (((E = Na(n)), E !== null)) {
                  for (
                    i.flags |= 128,
                      Yo(v, !1),
                      c = E.updateQueue,
                      c !== null && ((i.updateQueue = c), (i.flags |= 4)),
                      i.subtreeFlags = 0,
                      c = a,
                      a = i.child;
                    a !== null;

                  )
                    ((v = a),
                      (n = c),
                      (v.flags &= 14680066),
                      (E = v.alternate),
                      E === null
                        ? ((v.childLanes = 0),
                          (v.lanes = n),
                          (v.child = null),
                          (v.subtreeFlags = 0),
                          (v.memoizedProps = null),
                          (v.memoizedState = null),
                          (v.updateQueue = null),
                          (v.dependencies = null),
                          (v.stateNode = null))
                        : ((v.childLanes = E.childLanes),
                          (v.lanes = E.lanes),
                          (v.child = E.child),
                          (v.subtreeFlags = 0),
                          (v.deletions = null),
                          (v.memoizedProps = E.memoizedProps),
                          (v.memoizedState = E.memoizedState),
                          (v.updateQueue = E.updateQueue),
                          (v.type = E.type),
                          (n = E.dependencies),
                          (v.dependencies =
                            n === null
                              ? null
                              : {
                                  lanes: n.lanes,
                                  firstContext: n.firstContext,
                                })),
                      (a = a.sibling));
                  return (Ve(He, (He.current & 1) | 2), i.child);
                }
                n = n.sibling;
              }
            v.tail !== null &&
              Be() > Ri &&
              ((i.flags |= 128), (c = !0), Yo(v, !1), (i.lanes = 4194304));
          }
        else {
          if (!c)
            if (((n = Na(E)), n !== null)) {
              if (
                ((i.flags |= 128),
                (c = !0),
                (a = n.updateQueue),
                a !== null && ((i.updateQueue = a), (i.flags |= 4)),
                Yo(v, !0),
                v.tail === null &&
                  v.tailMode === "hidden" &&
                  !E.alternate &&
                  !$e)
              )
                return (ht(i), null);
            } else
              2 * Be() - v.renderingStartTime > Ri &&
                a !== 1073741824 &&
                ((i.flags |= 128), (c = !0), Yo(v, !1), (i.lanes = 4194304));
          v.isBackwards
            ? ((E.sibling = i.child), (i.child = E))
            : ((a = v.last),
              a !== null ? (a.sibling = E) : (i.child = E),
              (v.last = E));
        }
        return v.tail !== null
          ? ((i = v.tail),
            (v.rendering = i),
            (v.tail = i.sibling),
            (v.renderingStartTime = Be()),
            (i.sibling = null),
            (a = He.current),
            Ve(He, c ? (a & 1) | 2 : a & 1),
            i)
          : (ht(i), null);
      case 22:
      case 23:
        return (
          ed(),
          (c = i.memoizedState !== null),
          n !== null && (n.memoizedState !== null) !== c && (i.flags |= 8192),
          c && (i.mode & 1) !== 0
            ? (Lt & 1073741824) !== 0 &&
              (ht(i), i.subtreeFlags & 6 && (i.flags |= 8192))
            : ht(i),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function qS(n, i) {
    switch ((uc(i), i.tag)) {
      case 1:
        return (
          Et(i.type) && ya(),
          (n = i.flags),
          n & 65536 ? ((i.flags = (n & -65537) | 128), i) : null
        );
      case 3:
        return (
          ji(),
          Oe(kt),
          Oe(dt),
          kc(),
          (n = i.flags),
          (n & 65536) !== 0 && (n & 128) === 0
            ? ((i.flags = (n & -65537) | 128), i)
            : null
        );
      case 5:
        return (wc(i), null);
      case 13:
        if (
          (Oe(He), (n = i.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (i.alternate === null) throw Error(r(340));
          Mi();
        }
        return (
          (n = i.flags),
          n & 65536 ? ((i.flags = (n & -65537) | 128), i) : null
        );
      case 19:
        return (Oe(He), null);
      case 4:
        return (ji(), null);
      case 10:
        return (mc(i.type._context), null);
      case 22:
      case 23:
        return (ed(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Va = !1,
    pt = !1,
    QS = typeof WeakSet == "function" ? WeakSet : Set,
    he = null;
  function Ii(n, i) {
    var a = n.ref;
    if (a !== null)
      if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          Ge(n, i, c);
        }
      else a.current = null;
  }
  function Bc(n, i, a) {
    try {
      a();
    } catch (c) {
      Ge(n, i, c);
    }
  }
  var Am = !1;
  function JS(n, i) {
    if (((ec = ra), (n = cp()), Gu(n))) {
      if ("selectionStart" in n)
        var a = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          a = ((a = n.ownerDocument) && a.defaultView) || window;
          var c = a.getSelection && a.getSelection();
          if (c && c.rangeCount !== 0) {
            a = c.anchorNode;
            var m = c.anchorOffset,
              v = c.focusNode;
            c = c.focusOffset;
            try {
              (a.nodeType, v.nodeType);
            } catch {
              a = null;
              break e;
            }
            var E = 0,
              A = -1,
              z = -1,
              q = 0,
              ne = 0,
              ie = n,
              te = null;
            t: for (;;) {
              for (
                var de;
                ie !== a || (m !== 0 && ie.nodeType !== 3) || (A = E + m),
                  ie !== v || (c !== 0 && ie.nodeType !== 3) || (z = E + c),
                  ie.nodeType === 3 && (E += ie.nodeValue.length),
                  (de = ie.firstChild) !== null;

              )
                ((te = ie), (ie = de));
              for (;;) {
                if (ie === n) break t;
                if (
                  (te === a && ++q === m && (A = E),
                  te === v && ++ne === c && (z = E),
                  (de = ie.nextSibling) !== null)
                )
                  break;
                ((ie = te), (te = ie.parentNode));
              }
              ie = de;
            }
            a = A === -1 || z === -1 ? null : { start: A, end: z };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      tc = { focusedElem: n, selectionRange: a }, ra = !1, he = i;
      he !== null;

    )
      if (
        ((i = he), (n = i.child), (i.subtreeFlags & 1028) !== 0 && n !== null)
      )
        ((n.return = i), (he = n));
      else
        for (; he !== null; ) {
          i = he;
          try {
            var pe = i.alternate;
            if ((i.flags & 1024) !== 0)
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (pe !== null) {
                    var ge = pe.memoizedProps,
                      Ye = pe.memoizedState,
                      X = i.stateNode,
                      B = X.getSnapshotBeforeUpdate(
                        i.elementType === i.type ? ge : Jt(i.type, ge),
                        Ye,
                      );
                    X.__reactInternalSnapshotBeforeUpdate = B;
                  }
                  break;
                case 3:
                  var Y = i.stateNode.containerInfo;
                  Y.nodeType === 1
                    ? (Y.textContent = "")
                    : Y.nodeType === 9 &&
                      Y.documentElement &&
                      Y.removeChild(Y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (se) {
            Ge(i, i.return, se);
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (he = n));
            break;
          }
          he = i.return;
        }
    return ((pe = Am), (Am = !1), pe);
  }
  function Ko(n, i, a) {
    var c = i.updateQueue;
    if (((c = c !== null ? c.lastEffect : null), c !== null)) {
      var m = (c = c.next);
      do {
        if ((m.tag & n) === n) {
          var v = m.destroy;
          ((m.destroy = void 0), v !== void 0 && Bc(i, a, v));
        }
        m = m.next;
      } while (m !== c);
    }
  }
  function za(n, i) {
    if (
      ((i = i.updateQueue), (i = i !== null ? i.lastEffect : null), i !== null)
    ) {
      var a = (i = i.next);
      do {
        if ((a.tag & n) === n) {
          var c = a.create;
          a.destroy = c();
        }
        a = a.next;
      } while (a !== i);
    }
  }
  function Hc(n) {
    var i = n.ref;
    if (i !== null) {
      var a = n.stateNode;
      switch (n.tag) {
        case 5:
          n = a;
          break;
        default:
          n = a;
      }
      typeof i == "function" ? i(n) : (i.current = n);
    }
  }
  function Im(n) {
    var i = n.alternate;
    (i !== null && ((n.alternate = null), Im(i)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((i = n.stateNode),
        i !== null &&
          (delete i[gn],
          delete i[zo],
          delete i[oc],
          delete i[RS],
          delete i[LS])),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null));
  }
  function Dm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Rm(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Dm(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        ((n.child.return = n), (n = n.child));
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Uc(n, i, a) {
    var c = n.tag;
    if (c === 5 || c === 6)
      ((n = n.stateNode),
        i
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(n, i)
            : a.insertBefore(n, i)
          : (a.nodeType === 8
              ? ((i = a.parentNode), i.insertBefore(n, a))
              : ((i = a), i.appendChild(n)),
            (a = a._reactRootContainer),
            a != null || i.onclick !== null || (i.onclick = ma)));
    else if (c !== 4 && ((n = n.child), n !== null))
      for (Uc(n, i, a), n = n.sibling; n !== null; )
        (Uc(n, i, a), (n = n.sibling));
  }
  function Wc(n, i, a) {
    var c = n.tag;
    if (c === 5 || c === 6)
      ((n = n.stateNode), i ? a.insertBefore(n, i) : a.appendChild(n));
    else if (c !== 4 && ((n = n.child), n !== null))
      for (Wc(n, i, a), n = n.sibling; n !== null; )
        (Wc(n, i, a), (n = n.sibling));
  }
  var ot = null,
    en = !1;
  function ar(n, i, a) {
    for (a = a.child; a !== null; ) (Lm(n, i, a), (a = a.sibling));
  }
  function Lm(n, i, a) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
      try {
        jt.onCommitFiberUnmount(di, a);
      } catch {}
    switch (a.tag) {
      case 5:
        pt || Ii(a, i);
      case 6:
        var c = ot,
          m = en;
        ((ot = null),
          ar(n, i, a),
          (ot = c),
          (en = m),
          ot !== null &&
            (en
              ? ((n = ot),
                (a = a.stateNode),
                n.nodeType === 8
                  ? n.parentNode.removeChild(a)
                  : n.removeChild(a))
              : ot.removeChild(a.stateNode)));
        break;
      case 18:
        ot !== null &&
          (en
            ? ((n = ot),
              (a = a.stateNode),
              n.nodeType === 8
                ? ic(n.parentNode, a)
                : n.nodeType === 1 && ic(n, a),
              Mo(n))
            : ic(ot, a.stateNode));
        break;
      case 4:
        ((c = ot),
          (m = en),
          (ot = a.stateNode.containerInfo),
          (en = !0),
          ar(n, i, a),
          (ot = c),
          (en = m));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !pt &&
          ((c = a.updateQueue), c !== null && ((c = c.lastEffect), c !== null))
        ) {
          m = c = c.next;
          do {
            var v = m,
              E = v.destroy;
            ((v = v.tag),
              E !== void 0 && ((v & 2) !== 0 || (v & 4) !== 0) && Bc(a, i, E),
              (m = m.next));
          } while (m !== c);
        }
        ar(n, i, a);
        break;
      case 1:
        if (
          !pt &&
          (Ii(a, i),
          (c = a.stateNode),
          typeof c.componentWillUnmount == "function")
        )
          try {
            ((c.props = a.memoizedProps),
              (c.state = a.memoizedState),
              c.componentWillUnmount());
          } catch (A) {
            Ge(a, i, A);
          }
        ar(n, i, a);
        break;
      case 21:
        ar(n, i, a);
        break;
      case 22:
        a.mode & 1
          ? ((pt = (c = pt) || a.memoizedState !== null), ar(n, i, a), (pt = c))
          : ar(n, i, a);
        break;
      default:
        ar(n, i, a);
    }
  }
  function Vm(n) {
    var i = n.updateQueue;
    if (i !== null) {
      n.updateQueue = null;
      var a = n.stateNode;
      (a === null && (a = n.stateNode = new QS()),
        i.forEach(function (c) {
          var m = l2.bind(null, n, c);
          a.has(c) || (a.add(c), c.then(m, m));
        }));
    }
  }
  function tn(n, i) {
    var a = i.deletions;
    if (a !== null)
      for (var c = 0; c < a.length; c++) {
        var m = a[c];
        try {
          var v = n,
            E = i,
            A = E;
          e: for (; A !== null; ) {
            switch (A.tag) {
              case 5:
                ((ot = A.stateNode), (en = !1));
                break e;
              case 3:
                ((ot = A.stateNode.containerInfo), (en = !0));
                break e;
              case 4:
                ((ot = A.stateNode.containerInfo), (en = !0));
                break e;
            }
            A = A.return;
          }
          if (ot === null) throw Error(r(160));
          (Lm(v, E, m), (ot = null), (en = !1));
          var z = m.alternate;
          (z !== null && (z.return = null), (m.return = null));
        } catch (q) {
          Ge(m, i, q);
        }
      }
    if (i.subtreeFlags & 12854)
      for (i = i.child; i !== null; ) (zm(i, n), (i = i.sibling));
  }
  function zm(n, i) {
    var a = n.alternate,
      c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((tn(i, n), xn(n), c & 4)) {
          try {
            (Ko(3, n, n.return), za(3, n));
          } catch (ge) {
            Ge(n, n.return, ge);
          }
          try {
            Ko(5, n, n.return);
          } catch (ge) {
            Ge(n, n.return, ge);
          }
        }
        break;
      case 1:
        (tn(i, n), xn(n), c & 512 && a !== null && Ii(a, a.return));
        break;
      case 5:
        if (
          (tn(i, n),
          xn(n),
          c & 512 && a !== null && Ii(a, a.return),
          n.flags & 32)
        ) {
          var m = n.stateNode;
          try {
            jn(m, "");
          } catch (ge) {
            Ge(n, n.return, ge);
          }
        }
        if (c & 4 && ((m = n.stateNode), m != null)) {
          var v = n.memoizedProps,
            E = a !== null ? a.memoizedProps : v,
            A = n.type,
            z = n.updateQueue;
          if (((n.updateQueue = null), z !== null))
            try {
              (A === "input" &&
                v.type === "radio" &&
                v.name != null &&
                De(m, v),
                fo(A, E));
              var q = fo(A, v);
              for (E = 0; E < z.length; E += 2) {
                var ne = z[E],
                  ie = z[E + 1];
                ne === "style"
                  ? Os(m, ie)
                  : ne === "dangerouslySetInnerHTML"
                    ? ai(m, ie)
                    : ne === "children"
                      ? jn(m, ie)
                      : k(m, ne, ie, q);
              }
              switch (A) {
                case "input":
                  Qe(m, v);
                  break;
                case "textarea":
                  pn(m, v);
                  break;
                case "select":
                  var te = m._wrapperState.wasMultiple;
                  m._wrapperState.wasMultiple = !!v.multiple;
                  var de = v.value;
                  de != null
                    ? ct(m, !!v.multiple, de, !1)
                    : te !== !!v.multiple &&
                      (v.defaultValue != null
                        ? ct(m, !!v.multiple, v.defaultValue, !0)
                        : ct(m, !!v.multiple, v.multiple ? [] : "", !1));
              }
              m[zo] = v;
            } catch (ge) {
              Ge(n, n.return, ge);
            }
        }
        break;
      case 6:
        if ((tn(i, n), xn(n), c & 4)) {
          if (n.stateNode === null) throw Error(r(162));
          ((m = n.stateNode), (v = n.memoizedProps));
          try {
            m.nodeValue = v;
          } catch (ge) {
            Ge(n, n.return, ge);
          }
        }
        break;
      case 3:
        if (
          (tn(i, n), xn(n), c & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Mo(i.containerInfo);
          } catch (ge) {
            Ge(n, n.return, ge);
          }
        break;
      case 4:
        (tn(i, n), xn(n));
        break;
      case 13:
        (tn(i, n),
          xn(n),
          (m = n.child),
          m.flags & 8192 &&
            ((v = m.memoizedState !== null),
            (m.stateNode.isHidden = v),
            !v ||
              (m.alternate !== null && m.alternate.memoizedState !== null) ||
              (Yc = Be())),
          c & 4 && Vm(n));
        break;
      case 22:
        if (
          ((ne = a !== null && a.memoizedState !== null),
          n.mode & 1 ? ((pt = (q = pt) || ne), tn(i, n), (pt = q)) : tn(i, n),
          xn(n),
          c & 8192)
        ) {
          if (
            ((q = n.memoizedState !== null),
            (n.stateNode.isHidden = q) && !ne && (n.mode & 1) !== 0)
          )
            for (he = n, ne = n.child; ne !== null; ) {
              for (ie = he = ne; he !== null; ) {
                switch (((te = he), (de = te.child), te.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ko(4, te, te.return);
                    break;
                  case 1:
                    Ii(te, te.return);
                    var pe = te.stateNode;
                    if (typeof pe.componentWillUnmount == "function") {
                      ((c = te), (a = te.return));
                      try {
                        ((i = c),
                          (pe.props = i.memoizedProps),
                          (pe.state = i.memoizedState),
                          pe.componentWillUnmount());
                      } catch (ge) {
                        Ge(c, a, ge);
                      }
                    }
                    break;
                  case 5:
                    Ii(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      $m(ie);
                      continue;
                    }
                }
                de !== null ? ((de.return = te), (he = de)) : $m(ie);
              }
              ne = ne.sibling;
            }
          e: for (ne = null, ie = n; ; ) {
            if (ie.tag === 5) {
              if (ne === null) {
                ne = ie;
                try {
                  ((m = ie.stateNode),
                    q
                      ? ((v = m.style),
                        typeof v.setProperty == "function"
                          ? v.setProperty("display", "none", "important")
                          : (v.display = "none"))
                      : ((A = ie.stateNode),
                        (z = ie.memoizedProps.style),
                        (E =
                          z != null && z.hasOwnProperty("display")
                            ? z.display
                            : null),
                        (A.style.display = zs("display", E))));
                } catch (ge) {
                  Ge(n, n.return, ge);
                }
              }
            } else if (ie.tag === 6) {
              if (ne === null)
                try {
                  ie.stateNode.nodeValue = q ? "" : ie.memoizedProps;
                } catch (ge) {
                  Ge(n, n.return, ge);
                }
            } else if (
              ((ie.tag !== 22 && ie.tag !== 23) ||
                ie.memoizedState === null ||
                ie === n) &&
              ie.child !== null
            ) {
              ((ie.child.return = ie), (ie = ie.child));
              continue;
            }
            if (ie === n) break e;
            for (; ie.sibling === null; ) {
              if (ie.return === null || ie.return === n) break e;
              (ne === ie && (ne = null), (ie = ie.return));
            }
            (ne === ie && (ne = null),
              (ie.sibling.return = ie.return),
              (ie = ie.sibling));
          }
        }
        break;
      case 19:
        (tn(i, n), xn(n), c & 4 && Vm(n));
        break;
      case 21:
        break;
      default:
        (tn(i, n), xn(n));
    }
  }
  function xn(n) {
    var i = n.flags;
    if (i & 2) {
      try {
        e: {
          for (var a = n.return; a !== null; ) {
            if (Dm(a)) {
              var c = a;
              break e;
            }
            a = a.return;
          }
          throw Error(r(160));
        }
        switch (c.tag) {
          case 5:
            var m = c.stateNode;
            c.flags & 32 && (jn(m, ""), (c.flags &= -33));
            var v = Rm(n);
            Wc(n, v, m);
            break;
          case 3:
          case 4:
            var E = c.stateNode.containerInfo,
              A = Rm(n);
            Uc(n, A, E);
            break;
          default:
            throw Error(r(161));
        }
      } catch (z) {
        Ge(n, n.return, z);
      }
      n.flags &= -3;
    }
    i & 4096 && (n.flags &= -4097);
  }
  function e2(n, i, a) {
    ((he = n), Om(n));
  }
  function Om(n, i, a) {
    for (var c = (n.mode & 1) !== 0; he !== null; ) {
      var m = he,
        v = m.child;
      if (m.tag === 22 && c) {
        var E = m.memoizedState !== null || Va;
        if (!E) {
          var A = m.alternate,
            z = (A !== null && A.memoizedState !== null) || pt;
          A = Va;
          var q = pt;
          if (((Va = E), (pt = z) && !q))
            for (he = m; he !== null; )
              ((E = he),
                (z = E.child),
                E.tag === 22 && E.memoizedState !== null
                  ? Bm(m)
                  : z !== null
                    ? ((z.return = E), (he = z))
                    : Bm(m));
          for (; v !== null; ) ((he = v), Om(v), (v = v.sibling));
          ((he = m), (Va = A), (pt = q));
        }
        Fm(n);
      } else
        (m.subtreeFlags & 8772) !== 0 && v !== null
          ? ((v.return = m), (he = v))
          : Fm(n);
    }
  }
  function Fm(n) {
    for (; he !== null; ) {
      var i = he;
      if ((i.flags & 8772) !== 0) {
        var a = i.alternate;
        try {
          if ((i.flags & 8772) !== 0)
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                pt || za(5, i);
                break;
              case 1:
                var c = i.stateNode;
                if (i.flags & 4 && !pt)
                  if (a === null) c.componentDidMount();
                  else {
                    var m =
                      i.elementType === i.type
                        ? a.memoizedProps
                        : Jt(i.type, a.memoizedProps);
                    c.componentDidUpdate(
                      m,
                      a.memoizedState,
                      c.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var v = i.updateQueue;
                v !== null && $p(i, v, c);
                break;
              case 3:
                var E = i.updateQueue;
                if (E !== null) {
                  if (((a = null), i.child !== null))
                    switch (i.child.tag) {
                      case 5:
                        a = i.child.stateNode;
                        break;
                      case 1:
                        a = i.child.stateNode;
                    }
                  $p(i, E, a);
                }
                break;
              case 5:
                var A = i.stateNode;
                if (a === null && i.flags & 4) {
                  a = A;
                  var z = i.memoizedProps;
                  switch (i.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      z.autoFocus && a.focus();
                      break;
                    case "img":
                      z.src && (a.src = z.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (i.memoizedState === null) {
                  var q = i.alternate;
                  if (q !== null) {
                    var ne = q.memoizedState;
                    if (ne !== null) {
                      var ie = ne.dehydrated;
                      ie !== null && Mo(ie);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(r(163));
            }
          pt || (i.flags & 512 && Hc(i));
        } catch (te) {
          Ge(i, i.return, te);
        }
      }
      if (i === n) {
        he = null;
        break;
      }
      if (((a = i.sibling), a !== null)) {
        ((a.return = i.return), (he = a));
        break;
      }
      he = i.return;
    }
  }
  function $m(n) {
    for (; he !== null; ) {
      var i = he;
      if (i === n) {
        he = null;
        break;
      }
      var a = i.sibling;
      if (a !== null) {
        ((a.return = i.return), (he = a));
        break;
      }
      he = i.return;
    }
  }
  function Bm(n) {
    for (; he !== null; ) {
      var i = he;
      try {
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            var a = i.return;
            try {
              za(4, i);
            } catch (z) {
              Ge(i, a, z);
            }
            break;
          case 1:
            var c = i.stateNode;
            if (typeof c.componentDidMount == "function") {
              var m = i.return;
              try {
                c.componentDidMount();
              } catch (z) {
                Ge(i, m, z);
              }
            }
            var v = i.return;
            try {
              Hc(i);
            } catch (z) {
              Ge(i, v, z);
            }
            break;
          case 5:
            var E = i.return;
            try {
              Hc(i);
            } catch (z) {
              Ge(i, E, z);
            }
        }
      } catch (z) {
        Ge(i, i.return, z);
      }
      if (i === n) {
        he = null;
        break;
      }
      var A = i.sibling;
      if (A !== null) {
        ((A.return = i.return), (he = A));
        break;
      }
      he = i.return;
    }
  }
  var t2 = Math.ceil,
    Oa = M.ReactCurrentDispatcher,
    Gc = M.ReactCurrentOwner,
    Xt = M.ReactCurrentBatchConfig,
    _e = 0,
    rt = null,
    Ke = null,
    st = 0,
    Lt = 0,
    Di = nr(0),
    et = 0,
    Zo = null,
    zr = 0,
    Fa = 0,
    Xc = 0,
    qo = null,
    Pt = null,
    Yc = 0,
    Ri = 1 / 0,
    On = null,
    $a = !1,
    Kc = null,
    lr = null,
    Ba = !1,
    ur = null,
    Ha = 0,
    Qo = 0,
    Zc = null,
    Ua = -1,
    Wa = 0;
  function gt() {
    return (_e & 6) !== 0 ? Be() : Ua !== -1 ? Ua : (Ua = Be());
  }
  function cr(n) {
    return (n.mode & 1) === 0
      ? 1
      : (_e & 2) !== 0 && st !== 0
        ? st & -st
        : zS.transition !== null
          ? (Wa === 0 && (Wa = ea()), Wa)
          : ((n = Ie),
            n !== 0 ||
              ((n = window.event), (n = n === void 0 ? 16 : Uh(n.type))),
            n);
  }
  function nn(n, i, a, c) {
    if (50 < Qo) throw ((Qo = 0), (Zc = null), Error(r(185)));
    (_r(n, a, c),
      ((_e & 2) === 0 || n !== rt) &&
        (n === rt && ((_e & 2) === 0 && (Fa |= a), et === 4 && dr(n, st)),
        Tt(n, c),
        a === 1 &&
          _e === 0 &&
          (i.mode & 1) === 0 &&
          ((Ri = Be() + 500), xa && ir())));
  }
  function Tt(n, i) {
    var a = n.callbackNode;
    Js(n, i);
    var c = Nr(n, n === rt ? st : 0);
    if (c === 0)
      (a !== null && Ks(a), (n.callbackNode = null), (n.callbackPriority = 0));
    else if (((i = c & -c), n.callbackPriority !== i)) {
      if ((a != null && Ks(a), i === 1))
        (n.tag === 0 ? VS(Um.bind(null, n)) : bp(Um.bind(null, n)),
          IS(function () {
            (_e & 6) === 0 && ir();
          }),
          (a = null));
      else {
        switch (Lh(c)) {
          case 1:
            a = So;
            break;
          case 4:
            a = qs;
            break;
          case 16:
            a = ci;
            break;
          case 536870912:
            a = Qs;
            break;
          default:
            a = ci;
        }
        a = Qm(a, Hm.bind(null, n));
      }
      ((n.callbackPriority = i), (n.callbackNode = a));
    }
  }
  function Hm(n, i) {
    if (((Ua = -1), (Wa = 0), (_e & 6) !== 0)) throw Error(r(327));
    var a = n.callbackNode;
    if (Li() && n.callbackNode !== a) return null;
    var c = Nr(n, n === rt ? st : 0);
    if (c === 0) return null;
    if ((c & 30) !== 0 || (c & n.expiredLanes) !== 0 || i) i = Ga(n, c);
    else {
      i = c;
      var m = _e;
      _e |= 2;
      var v = Gm();
      (rt !== n || st !== i) && ((On = null), (Ri = Be() + 500), Fr(n, i));
      do
        try {
          i2();
          break;
        } catch (A) {
          Wm(n, A);
        }
      while (!0);
      (pc(),
        (Oa.current = v),
        (_e = m),
        Ke !== null ? (i = 0) : ((rt = null), (st = 0), (i = et)));
    }
    if (i !== 0) {
      if (
        (i === 2 && ((m = ko(n)), m !== 0 && ((c = m), (i = qc(n, m)))),
        i === 1)
      )
        throw ((a = Zo), Fr(n, 0), dr(n, c), Tt(n, Be()), a);
      if (i === 6) dr(n, c);
      else {
        if (
          ((m = n.current.alternate),
          (c & 30) === 0 &&
            !n2(m) &&
            ((i = Ga(n, c)),
            i === 2 && ((v = ko(n)), v !== 0 && ((c = v), (i = qc(n, v)))),
            i === 1))
        )
          throw ((a = Zo), Fr(n, 0), dr(n, c), Tt(n, Be()), a);
        switch (((n.finishedWork = m), (n.finishedLanes = c), i)) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            $r(n, Pt, On);
            break;
          case 3:
            if (
              (dr(n, c),
              (c & 130023424) === c && ((i = Yc + 500 - Be()), 10 < i))
            ) {
              if (Nr(n, 0) !== 0) break;
              if (((m = n.suspendedLanes), (m & c) !== c)) {
                (gt(), (n.pingedLanes |= n.suspendedLanes & m));
                break;
              }
              n.timeoutHandle = rc($r.bind(null, n, Pt, On), i);
              break;
            }
            $r(n, Pt, On);
            break;
          case 4:
            if ((dr(n, c), (c & 4194240) === c)) break;
            for (i = n.eventTimes, m = -1; 0 < c; ) {
              var E = 31 - At(c);
              ((v = 1 << E), (E = i[E]), E > m && (m = E), (c &= ~v));
            }
            if (
              ((c = m),
              (c = Be() - c),
              (c =
                (120 > c
                  ? 120
                  : 480 > c
                    ? 480
                    : 1080 > c
                      ? 1080
                      : 1920 > c
                        ? 1920
                        : 3e3 > c
                          ? 3e3
                          : 4320 > c
                            ? 4320
                            : 1960 * t2(c / 1960)) - c),
              10 < c)
            ) {
              n.timeoutHandle = rc($r.bind(null, n, Pt, On), c);
              break;
            }
            $r(n, Pt, On);
            break;
          case 5:
            $r(n, Pt, On);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return (Tt(n, Be()), n.callbackNode === a ? Hm.bind(null, n) : null);
  }
  function qc(n, i) {
    var a = qo;
    return (
      n.current.memoizedState.isDehydrated && (Fr(n, i).flags |= 256),
      (n = Ga(n, i)),
      n !== 2 && ((i = Pt), (Pt = a), i !== null && Qc(i)),
      n
    );
  }
  function Qc(n) {
    Pt === null ? (Pt = n) : Pt.push.apply(Pt, n);
  }
  function n2(n) {
    for (var i = n; ; ) {
      if (i.flags & 16384) {
        var a = i.updateQueue;
        if (a !== null && ((a = a.stores), a !== null))
          for (var c = 0; c < a.length; c++) {
            var m = a[c],
              v = m.getSnapshot;
            m = m.value;
            try {
              if (!qt(v(), m)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((a = i.child), i.subtreeFlags & 16384 && a !== null))
        ((a.return = i), (i = a));
      else {
        if (i === n) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === n) return !0;
          i = i.return;
        }
        ((i.sibling.return = i.return), (i = i.sibling));
      }
    }
    return !0;
  }
  function dr(n, i) {
    for (
      i &= ~Xc,
        i &= ~Fa,
        n.suspendedLanes |= i,
        n.pingedLanes &= ~i,
        n = n.expirationTimes;
      0 < i;

    ) {
      var a = 31 - At(i),
        c = 1 << a;
      ((n[a] = -1), (i &= ~c));
    }
  }
  function Um(n) {
    if ((_e & 6) !== 0) throw Error(r(327));
    Li();
    var i = Nr(n, 0);
    if ((i & 1) === 0) return (Tt(n, Be()), null);
    var a = Ga(n, i);
    if (n.tag !== 0 && a === 2) {
      var c = ko(n);
      c !== 0 && ((i = c), (a = qc(n, c)));
    }
    if (a === 1) throw ((a = Zo), Fr(n, 0), dr(n, i), Tt(n, Be()), a);
    if (a === 6) throw Error(r(345));
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = i),
      $r(n, Pt, On),
      Tt(n, Be()),
      null
    );
  }
  function Jc(n, i) {
    var a = _e;
    _e |= 1;
    try {
      return n(i);
    } finally {
      ((_e = a), _e === 0 && ((Ri = Be() + 500), xa && ir()));
    }
  }
  function Or(n) {
    ur !== null && ur.tag === 0 && (_e & 6) === 0 && Li();
    var i = _e;
    _e |= 1;
    var a = Xt.transition,
      c = Ie;
    try {
      if (((Xt.transition = null), (Ie = 1), n)) return n();
    } finally {
      ((Ie = c), (Xt.transition = a), (_e = i), (_e & 6) === 0 && ir());
    }
  }
  function ed() {
    ((Lt = Di.current), Oe(Di));
  }
  function Fr(n, i) {
    ((n.finishedWork = null), (n.finishedLanes = 0));
    var a = n.timeoutHandle;
    if ((a !== -1 && ((n.timeoutHandle = -1), AS(a)), Ke !== null))
      for (a = Ke.return; a !== null; ) {
        var c = a;
        switch ((uc(c), c.tag)) {
          case 1:
            ((c = c.type.childContextTypes), c != null && ya());
            break;
          case 3:
            (ji(), Oe(kt), Oe(dt), kc());
            break;
          case 5:
            wc(c);
            break;
          case 4:
            ji();
            break;
          case 13:
            Oe(He);
            break;
          case 19:
            Oe(He);
            break;
          case 10:
            mc(c.type._context);
            break;
          case 22:
          case 23:
            ed();
        }
        a = a.return;
      }
    if (
      ((rt = n),
      (Ke = n = fr(n.current, null)),
      (st = Lt = i),
      (et = 0),
      (Zo = null),
      (Xc = Fa = zr = 0),
      (Pt = qo = null),
      Rr !== null)
    ) {
      for (i = 0; i < Rr.length; i++)
        if (((a = Rr[i]), (c = a.interleaved), c !== null)) {
          a.interleaved = null;
          var m = c.next,
            v = a.pending;
          if (v !== null) {
            var E = v.next;
            ((v.next = m), (c.next = E));
          }
          a.pending = c;
        }
      Rr = null;
    }
    return n;
  }
  function Wm(n, i) {
    do {
      var a = Ke;
      try {
        if ((pc(), (ba.current = Ia), _a)) {
          for (var c = Ue.memoizedState; c !== null; ) {
            var m = c.queue;
            (m !== null && (m.pending = null), (c = c.next));
          }
          _a = !1;
        }
        if (
          ((Vr = 0),
          (nt = Je = Ue = null),
          (Uo = !1),
          (Wo = 0),
          (Gc.current = null),
          a === null || a.return === null)
        ) {
          ((et = 1), (Zo = i), (Ke = null));
          break;
        }
        e: {
          var v = n,
            E = a.return,
            A = a,
            z = i;
          if (
            ((i = st),
            (A.flags |= 32768),
            z !== null && typeof z == "object" && typeof z.then == "function")
          ) {
            var q = z,
              ne = A,
              ie = ne.tag;
            if ((ne.mode & 1) === 0 && (ie === 0 || ie === 11 || ie === 15)) {
              var te = ne.alternate;
              te
                ? ((ne.updateQueue = te.updateQueue),
                  (ne.memoizedState = te.memoizedState),
                  (ne.lanes = te.lanes))
                : ((ne.updateQueue = null), (ne.memoizedState = null));
            }
            var de = gm(E);
            if (de !== null) {
              ((de.flags &= -257),
                ym(de, E, A, v, i),
                de.mode & 1 && mm(v, q, i),
                (i = de),
                (z = q));
              var pe = i.updateQueue;
              if (pe === null) {
                var ge = new Set();
                (ge.add(z), (i.updateQueue = ge));
              } else pe.add(z);
              break e;
            } else {
              if ((i & 1) === 0) {
                (mm(v, q, i), td());
                break e;
              }
              z = Error(r(426));
            }
          } else if ($e && A.mode & 1) {
            var Ye = gm(E);
            if (Ye !== null) {
              ((Ye.flags & 65536) === 0 && (Ye.flags |= 256),
                ym(Ye, E, A, v, i),
                fc(Ai(z, A)));
              break e;
            }
          }
          ((v = z = Ai(z, A)),
            et !== 4 && (et = 2),
            qo === null ? (qo = [v]) : qo.push(v),
            (v = E));
          do {
            switch (v.tag) {
              case 3:
                ((v.flags |= 65536), (i &= -i), (v.lanes |= i));
                var X = hm(v, z, i);
                Fp(v, X);
                break e;
              case 1:
                A = z;
                var B = v.type,
                  Y = v.stateNode;
                if (
                  (v.flags & 128) === 0 &&
                  (typeof B.getDerivedStateFromError == "function" ||
                    (Y !== null &&
                      typeof Y.componentDidCatch == "function" &&
                      (lr === null || !lr.has(Y))))
                ) {
                  ((v.flags |= 65536), (i &= -i), (v.lanes |= i));
                  var se = pm(v, A, i);
                  Fp(v, se);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        Ym(a);
      } catch (ye) {
        ((i = ye), Ke === a && a !== null && (Ke = a = a.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Gm() {
    var n = Oa.current;
    return ((Oa.current = Ia), n === null ? Ia : n);
  }
  function td() {
    ((et === 0 || et === 3 || et === 2) && (et = 4),
      rt === null ||
        ((zr & 268435455) === 0 && (Fa & 268435455) === 0) ||
        dr(rt, st));
  }
  function Ga(n, i) {
    var a = _e;
    _e |= 2;
    var c = Gm();
    (rt !== n || st !== i) && ((On = null), Fr(n, i));
    do
      try {
        r2();
        break;
      } catch (m) {
        Wm(n, m);
      }
    while (!0);
    if ((pc(), (_e = a), (Oa.current = c), Ke !== null)) throw Error(r(261));
    return ((rt = null), (st = 0), et);
  }
  function r2() {
    for (; Ke !== null; ) Xm(Ke);
  }
  function i2() {
    for (; Ke !== null && !Cu(); ) Xm(Ke);
  }
  function Xm(n) {
    var i = qm(n.alternate, n, Lt);
    ((n.memoizedProps = n.pendingProps),
      i === null ? Ym(n) : (Ke = i),
      (Gc.current = null));
  }
  function Ym(n) {
    var i = n;
    do {
      var a = i.alternate;
      if (((n = i.return), (i.flags & 32768) === 0)) {
        if (((a = ZS(a, i, Lt)), a !== null)) {
          Ke = a;
          return;
        }
      } else {
        if (((a = qS(a, i)), a !== null)) {
          ((a.flags &= 32767), (Ke = a));
          return;
        }
        if (n !== null)
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null));
        else {
          ((et = 6), (Ke = null));
          return;
        }
      }
      if (((i = i.sibling), i !== null)) {
        Ke = i;
        return;
      }
      Ke = i = n;
    } while (i !== null);
    et === 0 && (et = 5);
  }
  function $r(n, i, a) {
    var c = Ie,
      m = Xt.transition;
    try {
      ((Xt.transition = null), (Ie = 1), o2(n, i, a, c));
    } finally {
      ((Xt.transition = m), (Ie = c));
    }
    return null;
  }
  function o2(n, i, a, c) {
    do Li();
    while (ur !== null);
    if ((_e & 6) !== 0) throw Error(r(327));
    a = n.finishedWork;
    var m = n.finishedLanes;
    if (a === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), a === n.current))
      throw Error(r(177));
    ((n.callbackNode = null), (n.callbackPriority = 0));
    var v = a.lanes | a.childLanes;
    if (
      (Au(n, v),
      n === rt && ((Ke = rt = null), (st = 0)),
      ((a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0) ||
        Ba ||
        ((Ba = !0),
        Qm(ci, function () {
          return (Li(), null);
        })),
      (v = (a.flags & 15990) !== 0),
      (a.subtreeFlags & 15990) !== 0 || v)
    ) {
      ((v = Xt.transition), (Xt.transition = null));
      var E = Ie;
      Ie = 1;
      var A = _e;
      ((_e |= 4),
        (Gc.current = null),
        JS(n, a),
        zm(a, n),
        PS(tc),
        (ra = !!ec),
        (tc = ec = null),
        (n.current = a),
        e2(a),
        Zs(),
        (_e = A),
        (Ie = E),
        (Xt.transition = v));
    } else n.current = a;
    if (
      (Ba && ((Ba = !1), (ur = n), (Ha = m)),
      (v = n.pendingLanes),
      v === 0 && (lr = null),
      Mu(a.stateNode),
      Tt(n, Be()),
      i !== null)
    )
      for (c = n.onRecoverableError, a = 0; a < i.length; a++)
        ((m = i[a]), c(m.value, { componentStack: m.stack, digest: m.digest }));
    if ($a) throw (($a = !1), (n = Kc), (Kc = null), n);
    return (
      (Ha & 1) !== 0 && n.tag !== 0 && Li(),
      (v = n.pendingLanes),
      (v & 1) !== 0 ? (n === Zc ? Qo++ : ((Qo = 0), (Zc = n))) : (Qo = 0),
      ir(),
      null
    );
  }
  function Li() {
    if (ur !== null) {
      var n = Lh(Ha),
        i = Xt.transition,
        a = Ie;
      try {
        if (((Xt.transition = null), (Ie = 16 > n ? 16 : n), ur === null))
          var c = !1;
        else {
          if (((n = ur), (ur = null), (Ha = 0), (_e & 6) !== 0))
            throw Error(r(331));
          var m = _e;
          for (_e |= 4, he = n.current; he !== null; ) {
            var v = he,
              E = v.child;
            if ((he.flags & 16) !== 0) {
              var A = v.deletions;
              if (A !== null) {
                for (var z = 0; z < A.length; z++) {
                  var q = A[z];
                  for (he = q; he !== null; ) {
                    var ne = he;
                    switch (ne.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ko(8, ne, v);
                    }
                    var ie = ne.child;
                    if (ie !== null) ((ie.return = ne), (he = ie));
                    else
                      for (; he !== null; ) {
                        ne = he;
                        var te = ne.sibling,
                          de = ne.return;
                        if ((Im(ne), ne === q)) {
                          he = null;
                          break;
                        }
                        if (te !== null) {
                          ((te.return = de), (he = te));
                          break;
                        }
                        he = de;
                      }
                  }
                }
                var pe = v.alternate;
                if (pe !== null) {
                  var ge = pe.child;
                  if (ge !== null) {
                    pe.child = null;
                    do {
                      var Ye = ge.sibling;
                      ((ge.sibling = null), (ge = Ye));
                    } while (ge !== null);
                  }
                }
                he = v;
              }
            }
            if ((v.subtreeFlags & 2064) !== 0 && E !== null)
              ((E.return = v), (he = E));
            else
              e: for (; he !== null; ) {
                if (((v = he), (v.flags & 2048) !== 0))
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ko(9, v, v.return);
                  }
                var X = v.sibling;
                if (X !== null) {
                  ((X.return = v.return), (he = X));
                  break e;
                }
                he = v.return;
              }
          }
          var B = n.current;
          for (he = B; he !== null; ) {
            E = he;
            var Y = E.child;
            if ((E.subtreeFlags & 2064) !== 0 && Y !== null)
              ((Y.return = E), (he = Y));
            else
              e: for (E = B; he !== null; ) {
                if (((A = he), (A.flags & 2048) !== 0))
                  try {
                    switch (A.tag) {
                      case 0:
                      case 11:
                      case 15:
                        za(9, A);
                    }
                  } catch (ye) {
                    Ge(A, A.return, ye);
                  }
                if (A === E) {
                  he = null;
                  break e;
                }
                var se = A.sibling;
                if (se !== null) {
                  ((se.return = A.return), (he = se));
                  break e;
                }
                he = A.return;
              }
          }
          if (
            ((_e = m),
            ir(),
            jt && typeof jt.onPostCommitFiberRoot == "function")
          )
            try {
              jt.onPostCommitFiberRoot(di, n);
            } catch {}
          c = !0;
        }
        return c;
      } finally {
        ((Ie = a), (Xt.transition = i));
      }
    }
    return !1;
  }
  function Km(n, i, a) {
    ((i = Ai(a, i)),
      (i = hm(n, i, 1)),
      (n = sr(n, i, 1)),
      (i = gt()),
      n !== null && (_r(n, 1, i), Tt(n, i)));
  }
  function Ge(n, i, a) {
    if (n.tag === 3) Km(n, n, a);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          Km(i, n, a);
          break;
        } else if (i.tag === 1) {
          var c = i.stateNode;
          if (
            typeof i.type.getDerivedStateFromError == "function" ||
            (typeof c.componentDidCatch == "function" &&
              (lr === null || !lr.has(c)))
          ) {
            ((n = Ai(a, n)),
              (n = pm(i, n, 1)),
              (i = sr(i, n, 1)),
              (n = gt()),
              i !== null && (_r(i, 1, n), Tt(i, n)));
            break;
          }
        }
        i = i.return;
      }
  }
  function s2(n, i, a) {
    var c = n.pingCache;
    (c !== null && c.delete(i),
      (i = gt()),
      (n.pingedLanes |= n.suspendedLanes & a),
      rt === n &&
        (st & a) === a &&
        (et === 4 || (et === 3 && (st & 130023424) === st && 500 > Be() - Yc)
          ? Fr(n, 0)
          : (Xc |= a)),
      Tt(n, i));
  }
  function Zm(n, i) {
    i === 0 &&
      ((n.mode & 1) === 0
        ? (i = 1)
        : ((i = hi), (hi <<= 1), (hi & 130023424) === 0 && (hi = 4194304)));
    var a = gt();
    ((n = Ln(n, i)), n !== null && (_r(n, i, a), Tt(n, a)));
  }
  function a2(n) {
    var i = n.memoizedState,
      a = 0;
    (i !== null && (a = i.retryLane), Zm(n, a));
  }
  function l2(n, i) {
    var a = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode,
          m = n.memoizedState;
        m !== null && (a = m.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    (c !== null && c.delete(i), Zm(n, a));
  }
  var qm;
  qm = function (n, i, a) {
    if (n !== null)
      if (n.memoizedProps !== i.pendingProps || kt.current) Ct = !0;
      else {
        if ((n.lanes & a) === 0 && (i.flags & 128) === 0)
          return ((Ct = !1), KS(n, i, a));
        Ct = (n.flags & 131072) !== 0;
      }
    else ((Ct = !1), $e && (i.flags & 1048576) !== 0 && _p(i, Sa, i.index));
    switch (((i.lanes = 0), i.tag)) {
      case 2:
        var c = i.type;
        (La(n, i), (n = i.pendingProps));
        var m = Ci(i, dt.current);
        (_i(i, a), (m = Pc(null, i, c, n, m, a)));
        var v = Tc();
        return (
          (i.flags |= 1),
          typeof m == "object" &&
          m !== null &&
          typeof m.render == "function" &&
          m.$$typeof === void 0
            ? ((i.tag = 1),
              (i.memoizedState = null),
              (i.updateQueue = null),
              Et(c) ? ((v = !0), va(i)) : (v = !1),
              (i.memoizedState =
                m.state !== null && m.state !== void 0 ? m.state : null),
              vc(i),
              (m.updater = Da),
              (i.stateNode = m),
              (m._reactInternals = i),
              Ac(i, c, n, a),
              (i = Lc(null, i, c, !0, v, a)))
            : ((i.tag = 0), $e && v && lc(i), mt(null, i, m, a), (i = i.child)),
          i
        );
      case 16:
        c = i.elementType;
        e: {
          switch (
            (La(n, i),
            (n = i.pendingProps),
            (m = c._init),
            (c = m(c._payload)),
            (i.type = c),
            (m = i.tag = c2(c)),
            (n = Jt(c, n)),
            m)
          ) {
            case 0:
              i = Rc(null, i, c, n, a);
              break e;
            case 1:
              i = Em(null, i, c, n, a);
              break e;
            case 11:
              i = vm(null, i, c, n, a);
              break e;
            case 14:
              i = xm(null, i, c, Jt(c.type, n), a);
              break e;
          }
          throw Error(r(306, c, ""));
        }
        return i;
      case 0:
        return (
          (c = i.type),
          (m = i.pendingProps),
          (m = i.elementType === c ? m : Jt(c, m)),
          Rc(n, i, c, m, a)
        );
      case 1:
        return (
          (c = i.type),
          (m = i.pendingProps),
          (m = i.elementType === c ? m : Jt(c, m)),
          Em(n, i, c, m, a)
        );
      case 3:
        e: {
          if ((Cm(i), n === null)) throw Error(r(387));
          ((c = i.pendingProps),
            (v = i.memoizedState),
            (m = v.element),
            Op(n, i),
            Ma(i, c, null, a));
          var E = i.memoizedState;
          if (((c = E.element), v.isDehydrated))
            if (
              ((v = {
                element: c,
                isDehydrated: !1,
                cache: E.cache,
                pendingSuspenseBoundaries: E.pendingSuspenseBoundaries,
                transitions: E.transitions,
              }),
              (i.updateQueue.baseState = v),
              (i.memoizedState = v),
              i.flags & 256)
            ) {
              ((m = Ai(Error(r(423)), i)), (i = Pm(n, i, c, a, m)));
              break e;
            } else if (c !== m) {
              ((m = Ai(Error(r(424)), i)), (i = Pm(n, i, c, a, m)));
              break e;
            } else
              for (
                Rt = tr(i.stateNode.containerInfo.firstChild),
                  Dt = i,
                  $e = !0,
                  Qt = null,
                  a = Vp(i, null, c, a),
                  i.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Mi(), c === m)) {
              i = zn(n, i, a);
              break e;
            }
            mt(n, i, c, a);
          }
          i = i.child;
        }
        return i;
      case 5:
        return (
          Bp(i),
          n === null && dc(i),
          (c = i.type),
          (m = i.pendingProps),
          (v = n !== null ? n.memoizedProps : null),
          (E = m.children),
          nc(c, m) ? (E = null) : v !== null && nc(c, v) && (i.flags |= 32),
          km(n, i),
          mt(n, i, E, a),
          i.child
        );
      case 6:
        return (n === null && dc(i), null);
      case 13:
        return Tm(n, i, a);
      case 4:
        return (
          xc(i, i.stateNode.containerInfo),
          (c = i.pendingProps),
          n === null ? (i.child = Ni(i, null, c, a)) : mt(n, i, c, a),
          i.child
        );
      case 11:
        return (
          (c = i.type),
          (m = i.pendingProps),
          (m = i.elementType === c ? m : Jt(c, m)),
          vm(n, i, c, m, a)
        );
      case 7:
        return (mt(n, i, i.pendingProps, a), i.child);
      case 8:
        return (mt(n, i, i.pendingProps.children, a), i.child);
      case 12:
        return (mt(n, i, i.pendingProps.children, a), i.child);
      case 10:
        e: {
          if (
            ((c = i.type._context),
            (m = i.pendingProps),
            (v = i.memoizedProps),
            (E = m.value),
            Ve(Ca, c._currentValue),
            (c._currentValue = E),
            v !== null)
          )
            if (qt(v.value, E)) {
              if (v.children === m.children && !kt.current) {
                i = zn(n, i, a);
                break e;
              }
            } else
              for (v = i.child, v !== null && (v.return = i); v !== null; ) {
                var A = v.dependencies;
                if (A !== null) {
                  E = v.child;
                  for (var z = A.firstContext; z !== null; ) {
                    if (z.context === c) {
                      if (v.tag === 1) {
                        ((z = Vn(-1, a & -a)), (z.tag = 2));
                        var q = v.updateQueue;
                        if (q !== null) {
                          q = q.shared;
                          var ne = q.pending;
                          (ne === null
                            ? (z.next = z)
                            : ((z.next = ne.next), (ne.next = z)),
                            (q.pending = z));
                        }
                      }
                      ((v.lanes |= a),
                        (z = v.alternate),
                        z !== null && (z.lanes |= a),
                        gc(v.return, a, i),
                        (A.lanes |= a));
                      break;
                    }
                    z = z.next;
                  }
                } else if (v.tag === 10) E = v.type === i.type ? null : v.child;
                else if (v.tag === 18) {
                  if (((E = v.return), E === null)) throw Error(r(341));
                  ((E.lanes |= a),
                    (A = E.alternate),
                    A !== null && (A.lanes |= a),
                    gc(E, a, i),
                    (E = v.sibling));
                } else E = v.child;
                if (E !== null) E.return = v;
                else
                  for (E = v; E !== null; ) {
                    if (E === i) {
                      E = null;
                      break;
                    }
                    if (((v = E.sibling), v !== null)) {
                      ((v.return = E.return), (E = v));
                      break;
                    }
                    E = E.return;
                  }
                v = E;
              }
          (mt(n, i, m.children, a), (i = i.child));
        }
        return i;
      case 9:
        return (
          (m = i.type),
          (c = i.pendingProps.children),
          _i(i, a),
          (m = Wt(m)),
          (c = c(m)),
          (i.flags |= 1),
          mt(n, i, c, a),
          i.child
        );
      case 14:
        return (
          (c = i.type),
          (m = Jt(c, i.pendingProps)),
          (m = Jt(c.type, m)),
          xm(n, i, c, m, a)
        );
      case 15:
        return wm(n, i, i.type, i.pendingProps, a);
      case 17:
        return (
          (c = i.type),
          (m = i.pendingProps),
          (m = i.elementType === c ? m : Jt(c, m)),
          La(n, i),
          (i.tag = 1),
          Et(c) ? ((n = !0), va(i)) : (n = !1),
          _i(i, a),
          dm(i, c, m),
          Ac(i, c, m, a),
          Lc(null, i, c, !0, n, a)
        );
      case 19:
        return Nm(n, i, a);
      case 22:
        return Sm(n, i, a);
    }
    throw Error(r(156, i.tag));
  };
  function Qm(n, i) {
    return Ys(n, i);
  }
  function u2(n, i, a, c) {
    ((this.tag = n),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = i),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = c),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Yt(n, i, a, c) {
    return new u2(n, i, a, c);
  }
  function nd(n) {
    return ((n = n.prototype), !(!n || !n.isReactComponent));
  }
  function c2(n) {
    if (typeof n == "function") return nd(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === ee)) return 11;
      if (n === H) return 14;
    }
    return 2;
  }
  function fr(n, i) {
    var a = n.alternate;
    return (
      a === null
        ? ((a = Yt(n.tag, i, n.key, n.mode)),
          (a.elementType = n.elementType),
          (a.type = n.type),
          (a.stateNode = n.stateNode),
          (a.alternate = n),
          (n.alternate = a))
        : ((a.pendingProps = i),
          (a.type = n.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = n.flags & 14680064),
      (a.childLanes = n.childLanes),
      (a.lanes = n.lanes),
      (a.child = n.child),
      (a.memoizedProps = n.memoizedProps),
      (a.memoizedState = n.memoizedState),
      (a.updateQueue = n.updateQueue),
      (i = n.dependencies),
      (a.dependencies =
        i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
      (a.sibling = n.sibling),
      (a.index = n.index),
      (a.ref = n.ref),
      a
    );
  }
  function Xa(n, i, a, c, m, v) {
    var E = 2;
    if (((c = n), typeof n == "function")) nd(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else
      e: switch (n) {
        case R:
          return Br(a.children, m, v, i);
        case V:
          ((E = 8), (m |= 8));
          break;
        case U:
          return (
            (n = Yt(12, a, i, m | 2)),
            (n.elementType = U),
            (n.lanes = v),
            n
          );
        case J:
          return ((n = Yt(13, a, i, m)), (n.elementType = J), (n.lanes = v), n);
        case j:
          return ((n = Yt(19, a, i, m)), (n.elementType = j), (n.lanes = v), n);
        case W:
          return Ya(a, m, v, i);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case K:
                E = 10;
                break e;
              case Z:
                E = 9;
                break e;
              case ee:
                E = 11;
                break e;
              case H:
                E = 14;
                break e;
              case F:
                ((E = 16), (c = null));
                break e;
            }
          throw Error(r(130, n == null ? n : typeof n, ""));
      }
    return (
      (i = Yt(E, a, i, m)),
      (i.elementType = n),
      (i.type = c),
      (i.lanes = v),
      i
    );
  }
  function Br(n, i, a, c) {
    return ((n = Yt(7, n, c, i)), (n.lanes = a), n);
  }
  function Ya(n, i, a, c) {
    return (
      (n = Yt(22, n, c, i)),
      (n.elementType = W),
      (n.lanes = a),
      (n.stateNode = { isHidden: !1 }),
      n
    );
  }
  function rd(n, i, a) {
    return ((n = Yt(6, n, null, i)), (n.lanes = a), n);
  }
  function id(n, i, a) {
    return (
      (i = Yt(4, n.children !== null ? n.children : [], n.key, i)),
      (i.lanes = a),
      (i.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      i
    );
  }
  function d2(n, i, a, c, m) {
    ((this.tag = i),
      (this.containerInfo = n),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = br(0)),
      (this.expirationTimes = br(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = br(0)),
      (this.identifierPrefix = c),
      (this.onRecoverableError = m),
      (this.mutableSourceEagerHydrationData = null));
  }
  function od(n, i, a, c, m, v, E, A, z) {
    return (
      (n = new d2(n, i, a, A, z)),
      i === 1 ? ((i = 1), v === !0 && (i |= 8)) : (i = 0),
      (v = Yt(3, null, null, i)),
      (n.current = v),
      (v.stateNode = n),
      (v.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      vc(v),
      n
    );
  }
  function f2(n, i, a) {
    var c =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: c == null ? null : "" + c,
      children: n,
      containerInfo: i,
      implementation: a,
    };
  }
  function Jm(n) {
    if (!n) return rr;
    n = n._reactInternals;
    e: {
      if (mn(n) !== n || n.tag !== 1) throw Error(r(170));
      var i = n;
      do {
        switch (i.tag) {
          case 3:
            i = i.stateNode.context;
            break e;
          case 1:
            if (Et(i.type)) {
              i = i.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        i = i.return;
      } while (i !== null);
      throw Error(r(171));
    }
    if (n.tag === 1) {
      var a = n.type;
      if (Et(a)) return Mp(n, a, i);
    }
    return i;
  }
  function eg(n, i, a, c, m, v, E, A, z) {
    return (
      (n = od(a, c, !0, n, m, v, E, A, z)),
      (n.context = Jm(null)),
      (a = n.current),
      (c = gt()),
      (m = cr(a)),
      (v = Vn(c, m)),
      (v.callback = i ?? null),
      sr(a, v, m),
      (n.current.lanes = m),
      _r(n, m, c),
      Tt(n, c),
      n
    );
  }
  function Ka(n, i, a, c) {
    var m = i.current,
      v = gt(),
      E = cr(m);
    return (
      (a = Jm(a)),
      i.context === null ? (i.context = a) : (i.pendingContext = a),
      (i = Vn(v, E)),
      (i.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (i.callback = c),
      (n = sr(m, i, E)),
      n !== null && (nn(n, m, E, v), Ta(n, m, E)),
      E
    );
  }
  function Za(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function tg(n, i) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var a = n.retryLane;
      n.retryLane = a !== 0 && a < i ? a : i;
    }
  }
  function sd(n, i) {
    (tg(n, i), (n = n.alternate) && tg(n, i));
  }
  function h2() {
    return null;
  }
  var ng =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          console.error(n);
        };
  function ad(n) {
    this._internalRoot = n;
  }
  ((qa.prototype.render = ad.prototype.render =
    function (n) {
      var i = this._internalRoot;
      if (i === null) throw Error(r(409));
      Ka(n, i, null, null);
    }),
    (qa.prototype.unmount = ad.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var i = n.containerInfo;
          (Or(function () {
            Ka(null, n, null, null);
          }),
            (i[An] = null));
        }
      }));
  function qa(n) {
    this._internalRoot = n;
  }
  qa.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var i = Oh();
      n = { blockedOn: null, target: n, priority: i };
      for (var a = 0; a < Qn.length && i !== 0 && i < Qn[a].priority; a++);
      (Qn.splice(a, 0, n), a === 0 && Bh(n));
    }
  };
  function ld(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function Qa(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function rg() {}
  function p2(n, i, a, c, m) {
    if (m) {
      if (typeof c == "function") {
        var v = c;
        c = function () {
          var q = Za(E);
          v.call(q);
        };
      }
      var E = eg(i, c, n, 0, null, !1, !1, "", rg);
      return (
        (n._reactRootContainer = E),
        (n[An] = E.current),
        Lo(n.nodeType === 8 ? n.parentNode : n),
        Or(),
        E
      );
    }
    for (; (m = n.lastChild); ) n.removeChild(m);
    if (typeof c == "function") {
      var A = c;
      c = function () {
        var q = Za(z);
        A.call(q);
      };
    }
    var z = od(n, 0, !1, null, null, !1, !1, "", rg);
    return (
      (n._reactRootContainer = z),
      (n[An] = z.current),
      Lo(n.nodeType === 8 ? n.parentNode : n),
      Or(function () {
        Ka(i, z, a, c);
      }),
      z
    );
  }
  function Ja(n, i, a, c, m) {
    var v = a._reactRootContainer;
    if (v) {
      var E = v;
      if (typeof m == "function") {
        var A = m;
        m = function () {
          var z = Za(E);
          A.call(z);
        };
      }
      Ka(i, E, n, m);
    } else E = p2(a, i, n, m, c);
    return Za(E);
  }
  ((Vh = function (n) {
    switch (n.tag) {
      case 3:
        var i = n.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var a = Mr(i.pendingLanes);
          a !== 0 &&
            (pi(i, a | 1),
            Tt(i, Be()),
            (_e & 6) === 0 && ((Ri = Be() + 500), ir()));
        }
        break;
      case 13:
        (Or(function () {
          var c = Ln(n, 1);
          if (c !== null) {
            var m = gt();
            nn(c, n, 1, m);
          }
        }),
          sd(n, 1));
    }
  }),
    (Iu = function (n) {
      if (n.tag === 13) {
        var i = Ln(n, 134217728);
        if (i !== null) {
          var a = gt();
          nn(i, n, 134217728, a);
        }
        sd(n, 134217728);
      }
    }),
    (zh = function (n) {
      if (n.tag === 13) {
        var i = cr(n),
          a = Ln(n, i);
        if (a !== null) {
          var c = gt();
          nn(a, n, i, c);
        }
        sd(n, i);
      }
    }),
    (Oh = function () {
      return Ie;
    }),
    (Fh = function (n, i) {
      var a = Ie;
      try {
        return ((Ie = n), i());
      } finally {
        Ie = a;
      }
    }),
    (mo = function (n, i, a) {
      switch (i) {
        case "input":
          if ((Qe(n, a), (i = a.name), a.type === "radio" && i != null)) {
            for (a = n; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                "input[name=" + JSON.stringify("" + i) + '][type="radio"]',
              ),
                i = 0;
              i < a.length;
              i++
            ) {
              var c = a[i];
              if (c !== n && c.form === n.form) {
                var m = ga(c);
                if (!m) throw Error(r(90));
                (xe(c), Qe(c, m));
              }
            }
          }
          break;
        case "textarea":
          pn(n, a);
          break;
        case "select":
          ((i = a.value), i != null && ct(n, !!a.multiple, i, !1));
      }
    }),
    (Hs = Jc),
    (Us = Or));
  var m2 = { usingClientEntryPoint: !1, Events: [Oo, ki, ga, $s, Bs, Jc] },
    Jo = {
      findFiberByHostInstance: jr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    g2 = {
      bundleType: Jo.bundleType,
      version: Jo.version,
      rendererPackageName: Jo.rendererPackageName,
      rendererConfig: Jo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: M.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return ((n = Gs(n)), n === null ? null : n.stateNode);
      },
      findFiberByHostInstance: Jo.findFiberByHostInstance || h2,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var el = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!el.isDisabled && el.supportsFiber)
      try {
        ((di = el.inject(g2)), (jt = el));
      } catch {}
  }
  return (
    (Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m2),
    (Mt.createPortal = function (n, i) {
      var a =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ld(i)) throw Error(r(200));
      return f2(n, i, null, a);
    }),
    (Mt.createRoot = function (n, i) {
      if (!ld(n)) throw Error(r(299));
      var a = !1,
        c = "",
        m = ng;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (a = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (m = i.onRecoverableError)),
        (i = od(n, 1, !1, null, null, a, !1, c, m)),
        (n[An] = i.current),
        Lo(n.nodeType === 8 ? n.parentNode : n),
        new ad(i)
      );
    }),
    (Mt.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var i = n._reactInternals;
      if (i === void 0)
        throw typeof n.render == "function"
          ? Error(r(188))
          : ((n = Object.keys(n).join(",")), Error(r(268, n)));
      return ((n = Gs(i)), (n = n === null ? null : n.stateNode), n);
    }),
    (Mt.flushSync = function (n) {
      return Or(n);
    }),
    (Mt.hydrate = function (n, i, a) {
      if (!Qa(i)) throw Error(r(200));
      return Ja(null, n, i, !0, a);
    }),
    (Mt.hydrateRoot = function (n, i, a) {
      if (!ld(n)) throw Error(r(405));
      var c = (a != null && a.hydratedSources) || null,
        m = !1,
        v = "",
        E = ng;
      if (
        (a != null &&
          (a.unstable_strictMode === !0 && (m = !0),
          a.identifierPrefix !== void 0 && (v = a.identifierPrefix),
          a.onRecoverableError !== void 0 && (E = a.onRecoverableError)),
        (i = eg(i, null, n, 1, a ?? null, m, !1, v, E)),
        (n[An] = i.current),
        Lo(n),
        c)
      )
        for (n = 0; n < c.length; n++)
          ((a = c[n]),
            (m = a._getVersion),
            (m = m(a._source)),
            i.mutableSourceEagerHydrationData == null
              ? (i.mutableSourceEagerHydrationData = [a, m])
              : i.mutableSourceEagerHydrationData.push(a, m));
      return new qa(i);
    }),
    (Mt.render = function (n, i, a) {
      if (!Qa(i)) throw Error(r(200));
      return Ja(null, n, i, !1, a);
    }),
    (Mt.unmountComponentAtNode = function (n) {
      if (!Qa(n)) throw Error(r(40));
      return n._reactRootContainer
        ? (Or(function () {
            Ja(null, null, n, !1, function () {
              ((n._reactRootContainer = null), (n[An] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Mt.unstable_batchedUpdates = Jc),
    (Mt.unstable_renderSubtreeIntoContainer = function (n, i, a, c) {
      if (!Qa(a)) throw Error(r(200));
      if (n == null || n._reactInternals === void 0) throw Error(r(38));
      return Ja(n, i, a, !1, c);
    }),
    (Mt.version = "18.3.1-next-f1338f8080-20240426"),
    Mt
  );
}
var dg;
function H0() {
  if (dg) return dd.exports;
  dg = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (dd.exports = E2()), dd.exports);
}
var fg;
function C2() {
  if (fg) return tl;
  fg = 1;
  var e = H0();
  return ((tl.createRoot = e.createRoot), (tl.hydrateRoot = e.hydrateRoot), tl);
}
var P2 = C2();
const T2 = Rf(P2);
function qe(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let r = 0, o; r < e.length; r++)
      (o = qe(e[r])) !== "" && (t += (t && " ") + o);
  else for (let r in e) e[r] && (t += (t && " ") + r);
  return t;
}
var M2 = { value: () => {} };
function ql() {
  for (var e = 0, t = arguments.length, r = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in r || /[\s.]/.test(o))
      throw new Error("illegal type: " + o);
    r[o] = [];
  }
  return new gl(r);
}
function gl(e) {
  this._ = e;
}
function N2(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (r) {
      var o = "",
        s = r.indexOf(".");
      if (
        (s >= 0 && ((o = r.slice(s + 1)), (r = r.slice(0, s))),
        r && !t.hasOwnProperty(r))
      )
        throw new Error("unknown type: " + r);
      return { type: r, name: o };
    });
}
gl.prototype = ql.prototype = {
  constructor: gl,
  on: function (e, t) {
    var r = this._,
      o = N2(e + "", r),
      s,
      u = -1,
      l = o.length;
    if (arguments.length < 2) {
      for (; ++u < l; )
        if ((s = (e = o[u]).type) && (s = b2(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++u < l; )
      if ((s = (e = o[u]).type)) r[s] = hg(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = hg(r[s], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new gl(e);
  },
  call: function (e, t) {
    if ((s = arguments.length - 2) > 0)
      for (var r = new Array(s), o = 0, s, u; o < s; ++o)
        r[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (u = this._[e], o = 0, s = u.length; o < s; ++o) u[o].value.apply(t, r);
  },
  apply: function (e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var o = this._[e], s = 0, u = o.length; s < u; ++s)
      o[s].value.apply(t, r);
  },
};
function b2(e, t) {
  for (var r = 0, o = e.length, s; r < o; ++r)
    if ((s = e[r]).name === t) return s.value;
}
function hg(e, t, r) {
  for (var o = 0, s = e.length; o < s; ++o)
    if (e[o].name === t) {
      ((e[o] = M2), (e = e.slice(0, o).concat(e.slice(o + 1))));
      break;
    }
  return (r != null && e.push({ name: t, value: r }), e);
}
var Ud = "http://www.w3.org/1999/xhtml";
const pg = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ud,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function Ql(e) {
  var t = (e += ""),
    r = t.indexOf(":");
  return (
    r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)),
    pg.hasOwnProperty(t) ? { space: pg[t], local: e } : e
  );
}
function _2(e) {
  return function () {
    var t = this.ownerDocument,
      r = this.namespaceURI;
    return r === Ud && t.documentElement.namespaceURI === Ud
      ? t.createElement(e)
      : t.createElementNS(r, e);
  };
}
function j2(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function U0(e) {
  var t = Ql(e);
  return (t.local ? j2 : _2)(t);
}
function A2() {}
function Lf(e) {
  return e == null
    ? A2
    : function () {
        return this.querySelector(e);
      };
}
function I2(e) {
  typeof e != "function" && (e = Lf(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (
      var u = t[s], l = u.length, d = (o[s] = new Array(l)), p, f, h = 0;
      h < l;
      ++h
    )
      (p = u[h]) &&
        (f = e.call(p, p.__data__, h, u)) &&
        ("__data__" in p && (f.__data__ = p.__data__), (d[h] = f));
  return new Ot(o, this._parents);
}
function D2(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function R2() {
  return [];
}
function W0(e) {
  return e == null
    ? R2
    : function () {
        return this.querySelectorAll(e);
      };
}
function L2(e) {
  return function () {
    return D2(e.apply(this, arguments));
  };
}
function V2(e) {
  typeof e == "function" ? (e = L2(e)) : (e = W0(e));
  for (var t = this._groups, r = t.length, o = [], s = [], u = 0; u < r; ++u)
    for (var l = t[u], d = l.length, p, f = 0; f < d; ++f)
      (p = l[f]) && (o.push(e.call(p, p.__data__, f, l)), s.push(p));
  return new Ot(o, s);
}
function G0(e) {
  return function () {
    return this.matches(e);
  };
}
function X0(e) {
  return function (t) {
    return t.matches(e);
  };
}
var z2 = Array.prototype.find;
function O2(e) {
  return function () {
    return z2.call(this.children, e);
  };
}
function F2() {
  return this.firstElementChild;
}
function $2(e) {
  return this.select(e == null ? F2 : O2(typeof e == "function" ? e : X0(e)));
}
var B2 = Array.prototype.filter;
function H2() {
  return Array.from(this.children);
}
function U2(e) {
  return function () {
    return B2.call(this.children, e);
  };
}
function W2(e) {
  return this.selectAll(
    e == null ? H2 : U2(typeof e == "function" ? e : X0(e)),
  );
}
function G2(e) {
  typeof e != "function" && (e = G0(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var u = t[s], l = u.length, d = (o[s] = []), p, f = 0; f < l; ++f)
      (p = u[f]) && e.call(p, p.__data__, f, u) && d.push(p);
  return new Ot(o, this._parents);
}
function Y0(e) {
  return new Array(e.length);
}
function X2() {
  return new Ot(this._enter || this._groups.map(Y0), this._parents);
}
function _l(e, t) {
  ((this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t));
}
_l.prototype = {
  constructor: _l,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function Y2(e) {
  return function () {
    return e;
  };
}
function K2(e, t, r, o, s, u) {
  for (var l = 0, d, p = t.length, f = u.length; l < f; ++l)
    (d = t[l]) ? ((d.__data__ = u[l]), (o[l] = d)) : (r[l] = new _l(e, u[l]));
  for (; l < p; ++l) (d = t[l]) && (s[l] = d);
}
function Z2(e, t, r, o, s, u, l) {
  var d,
    p,
    f = new Map(),
    h = t.length,
    g = u.length,
    y = new Array(h),
    S;
  for (d = 0; d < h; ++d)
    (p = t[d]) &&
      ((y[d] = S = l.call(p, p.__data__, d, t) + ""),
      f.has(S) ? (s[d] = p) : f.set(S, p));
  for (d = 0; d < g; ++d)
    ((S = l.call(e, u[d], d, u) + ""),
      (p = f.get(S))
        ? ((o[d] = p), (p.__data__ = u[d]), f.delete(S))
        : (r[d] = new _l(e, u[d])));
  for (d = 0; d < h; ++d) (p = t[d]) && f.get(y[d]) === p && (s[d] = p);
}
function q2(e) {
  return e.__data__;
}
function Q2(e, t) {
  if (!arguments.length) return Array.from(this, q2);
  var r = t ? Z2 : K2,
    o = this._parents,
    s = this._groups;
  typeof e != "function" && (e = Y2(e));
  for (
    var u = s.length,
      l = new Array(u),
      d = new Array(u),
      p = new Array(u),
      f = 0;
    f < u;
    ++f
  ) {
    var h = o[f],
      g = s[f],
      y = g.length,
      S = J2(e.call(h, h && h.__data__, f, o)),
      x = S.length,
      P = (d[f] = new Array(x)),
      C = (l[f] = new Array(x)),
      T = (p[f] = new Array(y));
    r(h, g, P, C, T, S, t);
    for (var N = 0, k = 0, M, I; N < x; ++N)
      if ((M = P[N])) {
        for (N >= k && (k = N + 1); !(I = C[k]) && ++k < x; );
        M._next = I || null;
      }
  }
  return ((l = new Ot(l, o)), (l._enter = d), (l._exit = p), l);
}
function J2(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ek() {
  return new Ot(this._exit || this._groups.map(Y0), this._parents);
}
function tk(e, t, r) {
  var o = this.enter(),
    s = this,
    u = this.exit();
  return (
    typeof e == "function"
      ? ((o = e(o)), o && (o = o.selection()))
      : (o = o.append(e + "")),
    t != null && ((s = t(s)), s && (s = s.selection())),
    r == null ? u.remove() : r(u),
    o && s ? o.merge(s).order() : s
  );
}
function nk(e) {
  for (
    var t = e.selection ? e.selection() : e,
      r = this._groups,
      o = t._groups,
      s = r.length,
      u = o.length,
      l = Math.min(s, u),
      d = new Array(s),
      p = 0;
    p < l;
    ++p
  )
    for (
      var f = r[p], h = o[p], g = f.length, y = (d[p] = new Array(g)), S, x = 0;
      x < g;
      ++x
    )
      (S = f[x] || h[x]) && (y[x] = S);
  for (; p < s; ++p) d[p] = r[p];
  return new Ot(d, this._parents);
}
function rk() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var o = e[t], s = o.length - 1, u = o[s], l; --s >= 0; )
      (l = o[s]) &&
        (u &&
          l.compareDocumentPosition(u) ^ 4 &&
          u.parentNode.insertBefore(l, u),
        (u = l));
  return this;
}
function ik(e) {
  e || (e = ok);
  function t(g, y) {
    return g && y ? e(g.__data__, y.__data__) : !g - !y;
  }
  for (
    var r = this._groups, o = r.length, s = new Array(o), u = 0;
    u < o;
    ++u
  ) {
    for (
      var l = r[u], d = l.length, p = (s[u] = new Array(d)), f, h = 0;
      h < d;
      ++h
    )
      (f = l[h]) && (p[h] = f);
    p.sort(t);
  }
  return new Ot(s, this._parents).order();
}
function ok(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function sk() {
  var e = arguments[0];
  return ((arguments[0] = this), e.apply(null, arguments), this);
}
function ak() {
  return Array.from(this);
}
function lk() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, u = o.length; s < u; ++s) {
      var l = o[s];
      if (l) return l;
    }
  return null;
}
function uk() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function ck() {
  return !this.node();
}
function dk(e) {
  for (var t = this._groups, r = 0, o = t.length; r < o; ++r)
    for (var s = t[r], u = 0, l = s.length, d; u < l; ++u)
      (d = s[u]) && e.call(d, d.__data__, u, s);
  return this;
}
function fk(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function hk(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function pk(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function mk(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function gk(e, t) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function yk(e, t) {
  return function () {
    var r = t.apply(this, arguments);
    r == null
      ? this.removeAttributeNS(e.space, e.local)
      : this.setAttributeNS(e.space, e.local, r);
  };
}
function vk(e, t) {
  var r = Ql(e);
  if (arguments.length < 2) {
    var o = this.node();
    return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
  }
  return this.each(
    (t == null
      ? r.local
        ? hk
        : fk
      : typeof t == "function"
        ? r.local
          ? yk
          : gk
        : r.local
          ? mk
          : pk)(r, t),
  );
}
function K0(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function xk(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function wk(e, t, r) {
  return function () {
    this.style.setProperty(e, t, r);
  };
}
function Sk(e, t, r) {
  return function () {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, r);
  };
}
function kk(e, t, r) {
  return arguments.length > 1
    ? this.each(
        (t == null ? xk : typeof t == "function" ? Sk : wk)(e, t, r ?? ""),
      )
    : qi(this.node(), e);
}
function qi(e, t) {
  return (
    e.style.getPropertyValue(t) ||
    K0(e).getComputedStyle(e, null).getPropertyValue(t)
  );
}
function Ek(e) {
  return function () {
    delete this[e];
  };
}
function Ck(e, t) {
  return function () {
    this[e] = t;
  };
}
function Pk(e, t) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : (this[e] = r);
  };
}
function Tk(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? Ek : typeof t == "function" ? Pk : Ck)(e, t))
    : this.node()[e];
}
function Z0(e) {
  return e.trim().split(/^|\s+/);
}
function Vf(e) {
  return e.classList || new q0(e);
}
function q0(e) {
  ((this._node = e), (this._names = Z0(e.getAttribute("class") || "")));
}
q0.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 &&
      (this._names.push(e),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 &&
      (this._names.splice(t, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function Q0(e, t) {
  for (var r = Vf(e), o = -1, s = t.length; ++o < s; ) r.add(t[o]);
}
function J0(e, t) {
  for (var r = Vf(e), o = -1, s = t.length; ++o < s; ) r.remove(t[o]);
}
function Mk(e) {
  return function () {
    Q0(this, e);
  };
}
function Nk(e) {
  return function () {
    J0(this, e);
  };
}
function bk(e, t) {
  return function () {
    (t.apply(this, arguments) ? Q0 : J0)(this, e);
  };
}
function _k(e, t) {
  var r = Z0(e + "");
  if (arguments.length < 2) {
    for (var o = Vf(this.node()), s = -1, u = r.length; ++s < u; )
      if (!o.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? bk : t ? Mk : Nk)(r, t));
}
function jk() {
  this.textContent = "";
}
function Ak(e) {
  return function () {
    this.textContent = e;
  };
}
function Ik(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Dk(e) {
  return arguments.length
    ? this.each(e == null ? jk : (typeof e == "function" ? Ik : Ak)(e))
    : this.node().textContent;
}
function Rk() {
  this.innerHTML = "";
}
function Lk(e) {
  return function () {
    this.innerHTML = e;
  };
}
function Vk(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function zk(e) {
  return arguments.length
    ? this.each(e == null ? Rk : (typeof e == "function" ? Vk : Lk)(e))
    : this.node().innerHTML;
}
function Ok() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fk() {
  return this.each(Ok);
}
function $k() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Bk() {
  return this.each($k);
}
function Hk(e) {
  var t = typeof e == "function" ? e : U0(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Uk() {
  return null;
}
function Wk(e, t) {
  var r = typeof e == "function" ? e : U0(e),
    o = t == null ? Uk : typeof t == "function" ? t : Lf(t);
  return this.select(function () {
    return this.insertBefore(
      r.apply(this, arguments),
      o.apply(this, arguments) || null,
    );
  });
}
function Gk() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Xk() {
  return this.each(Gk);
}
function Yk() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Kk() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Zk(e) {
  return this.select(e ? Kk : Yk);
}
function qk(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Qk(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function Jk(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var r = "",
        o = t.indexOf(".");
      return (
        o >= 0 && ((r = t.slice(o + 1)), (t = t.slice(0, o))),
        { type: t, name: r }
      );
    });
}
function eE(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var r = 0, o = -1, s = t.length, u; r < s; ++r)
        ((u = t[r]),
          (!e.type || u.type === e.type) && u.name === e.name
            ? this.removeEventListener(u.type, u.listener, u.options)
            : (t[++o] = u));
      ++o ? (t.length = o) : delete this.__on;
    }
  };
}
function tE(e, t, r) {
  return function () {
    var o = this.__on,
      s,
      u = Qk(t);
    if (o) {
      for (var l = 0, d = o.length; l < d; ++l)
        if ((s = o[l]).type === e.type && s.name === e.name) {
          (this.removeEventListener(s.type, s.listener, s.options),
            this.addEventListener(s.type, (s.listener = u), (s.options = r)),
            (s.value = t));
          return;
        }
    }
    (this.addEventListener(e.type, u, r),
      (s = { type: e.type, name: e.name, value: t, listener: u, options: r }),
      o ? o.push(s) : (this.__on = [s]));
  };
}
function nE(e, t, r) {
  var o = Jk(e + ""),
    s,
    u = o.length,
    l;
  if (arguments.length < 2) {
    var d = this.node().__on;
    if (d) {
      for (var p = 0, f = d.length, h; p < f; ++p)
        for (s = 0, h = d[p]; s < u; ++s)
          if ((l = o[s]).type === h.type && l.name === h.name) return h.value;
    }
    return;
  }
  for (d = t ? tE : eE, s = 0; s < u; ++s) this.each(d(o[s], t, r));
  return this;
}
function ev(e, t, r) {
  var o = K0(e),
    s = o.CustomEvent;
  (typeof s == "function"
    ? (s = new s(t, r))
    : ((s = o.document.createEvent("Event")),
      r
        ? (s.initEvent(t, r.bubbles, r.cancelable), (s.detail = r.detail))
        : s.initEvent(t, !1, !1)),
    e.dispatchEvent(s));
}
function rE(e, t) {
  return function () {
    return ev(this, e, t);
  };
}
function iE(e, t) {
  return function () {
    return ev(this, e, t.apply(this, arguments));
  };
}
function oE(e, t) {
  return this.each((typeof t == "function" ? iE : rE)(e, t));
}
function* sE() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, u = o.length, l; s < u; ++s)
      (l = o[s]) && (yield l);
}
var tv = [null];
function Ot(e, t) {
  ((this._groups = e), (this._parents = t));
}
function Ns() {
  return new Ot([[document.documentElement]], tv);
}
function aE() {
  return this;
}
Ot.prototype = Ns.prototype = {
  constructor: Ot,
  select: I2,
  selectAll: V2,
  selectChild: $2,
  selectChildren: W2,
  filter: G2,
  data: Q2,
  enter: X2,
  exit: ek,
  join: tk,
  merge: nk,
  selection: aE,
  order: rk,
  sort: ik,
  call: sk,
  nodes: ak,
  node: lk,
  size: uk,
  empty: ck,
  each: dk,
  attr: vk,
  style: kk,
  property: Tk,
  classed: _k,
  text: Dk,
  html: zk,
  raise: Fk,
  lower: Bk,
  append: Hk,
  insert: Wk,
  remove: Xk,
  clone: Zk,
  datum: qk,
  on: nE,
  dispatch: oE,
  [Symbol.iterator]: sE,
};
function Vt(e) {
  return typeof e == "string"
    ? new Ot([[document.querySelector(e)]], [document.documentElement])
    : new Ot([[e]], tv);
}
function lE(e) {
  let t;
  for (; (t = e.sourceEvent); ) e = t;
  return e;
}
function sn(e, t) {
  if (((e = lE(e)), t === void 0 && (t = e.currentTarget), t)) {
    var r = t.ownerSVGElement || t;
    if (r.createSVGPoint) {
      var o = r.createSVGPoint();
      return (
        (o.x = e.clientX),
        (o.y = e.clientY),
        (o = o.matrixTransform(t.getScreenCTM().inverse())),
        [o.x, o.y]
      );
    }
    if (t.getBoundingClientRect) {
      var s = t.getBoundingClientRect();
      return [
        e.clientX - s.left - t.clientLeft,
        e.clientY - s.top - t.clientTop,
      ];
    }
  }
  return [e.pageX, e.pageY];
}
const uE = { passive: !1 },
  ms = { capture: !0, passive: !1 };
function pd(e) {
  e.stopImmediatePropagation();
}
function Yi(e) {
  (e.preventDefault(), e.stopImmediatePropagation());
}
function nv(e) {
  var t = e.document.documentElement,
    r = Vt(e).on("dragstart.drag", Yi, ms);
  "onselectstart" in t
    ? r.on("selectstart.drag", Yi, ms)
    : ((t.__noselect = t.style.MozUserSelect),
      (t.style.MozUserSelect = "none"));
}
function rv(e, t) {
  var r = e.document.documentElement,
    o = Vt(e).on("dragstart.drag", null);
  (t &&
    (o.on("click.drag", Yi, ms),
    setTimeout(function () {
      o.on("click.drag", null);
    }, 0)),
    "onselectstart" in r
      ? o.on("selectstart.drag", null)
      : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect));
}
const nl = (e) => () => e;
function Wd(
  e,
  {
    sourceEvent: t,
    subject: r,
    target: o,
    identifier: s,
    active: u,
    x: l,
    y: d,
    dx: p,
    dy: f,
    dispatch: h,
  },
) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: r, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: s, enumerable: !0, configurable: !0 },
    active: { value: u, enumerable: !0, configurable: !0 },
    x: { value: l, enumerable: !0, configurable: !0 },
    y: { value: d, enumerable: !0, configurable: !0 },
    dx: { value: p, enumerable: !0, configurable: !0 },
    dy: { value: f, enumerable: !0, configurable: !0 },
    _: { value: h },
  });
}
Wd.prototype.on = function () {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function cE(e) {
  return !e.ctrlKey && !e.button;
}
function dE() {
  return this.parentNode;
}
function fE(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function hE() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function iv() {
  var e = cE,
    t = dE,
    r = fE,
    o = hE,
    s = {},
    u = ql("start", "drag", "end"),
    l = 0,
    d,
    p,
    f,
    h,
    g = 0;
  function y(M) {
    M.on("mousedown.drag", S)
      .filter(o)
      .on("touchstart.drag", C)
      .on("touchmove.drag", T, uE)
      .on("touchend.drag touchcancel.drag", N)
      .style("touch-action", "none")
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function S(M, I) {
    if (!(h || !e.call(this, M, I))) {
      var b = k(this, t.call(this, M, I), M, I, "mouse");
      b &&
        (Vt(M.view).on("mousemove.drag", x, ms).on("mouseup.drag", P, ms),
        nv(M.view),
        pd(M),
        (f = !1),
        (d = M.clientX),
        (p = M.clientY),
        b("start", M));
    }
  }
  function x(M) {
    if ((Yi(M), !f)) {
      var I = M.clientX - d,
        b = M.clientY - p;
      f = I * I + b * b > g;
    }
    s.mouse("drag", M);
  }
  function P(M) {
    (Vt(M.view).on("mousemove.drag mouseup.drag", null),
      rv(M.view, f),
      Yi(M),
      s.mouse("end", M));
  }
  function C(M, I) {
    if (e.call(this, M, I)) {
      var b = M.changedTouches,
        R = t.call(this, M, I),
        V = b.length,
        U,
        K;
      for (U = 0; U < V; ++U)
        (K = k(this, R, M, I, b[U].identifier, b[U])) &&
          (pd(M), K("start", M, b[U]));
    }
  }
  function T(M) {
    var I = M.changedTouches,
      b = I.length,
      R,
      V;
    for (R = 0; R < b; ++R)
      (V = s[I[R].identifier]) && (Yi(M), V("drag", M, I[R]));
  }
  function N(M) {
    var I = M.changedTouches,
      b = I.length,
      R,
      V;
    for (
      h && clearTimeout(h),
        h = setTimeout(function () {
          h = null;
        }, 500),
        R = 0;
      R < b;
      ++R
    )
      (V = s[I[R].identifier]) && (pd(M), V("end", M, I[R]));
  }
  function k(M, I, b, R, V, U) {
    var K = u.copy(),
      Z = sn(U || b, I),
      ee,
      J,
      j;
    if (
      (j = r.call(
        M,
        new Wd("beforestart", {
          sourceEvent: b,
          target: y,
          identifier: V,
          active: l,
          x: Z[0],
          y: Z[1],
          dx: 0,
          dy: 0,
          dispatch: K,
        }),
        R,
      )) != null
    )
      return (
        (ee = j.x - Z[0] || 0),
        (J = j.y - Z[1] || 0),
        function H(F, W, L) {
          var $ = Z,
            G;
          switch (F) {
            case "start":
              ((s[V] = H), (G = l++));
              break;
            case "end":
              (delete s[V], --l);
            case "drag":
              ((Z = sn(L || W, I)), (G = l));
              break;
          }
          K.call(
            F,
            M,
            new Wd(F, {
              sourceEvent: W,
              subject: j,
              target: y,
              identifier: V,
              active: G,
              x: Z[0] + ee,
              y: Z[1] + J,
              dx: Z[0] - $[0],
              dy: Z[1] - $[1],
              dispatch: K,
            }),
            R,
          );
        }
      );
  }
  return (
    (y.filter = function (M) {
      return arguments.length
        ? ((e = typeof M == "function" ? M : nl(!!M)), y)
        : e;
    }),
    (y.container = function (M) {
      return arguments.length
        ? ((t = typeof M == "function" ? M : nl(M)), y)
        : t;
    }),
    (y.subject = function (M) {
      return arguments.length
        ? ((r = typeof M == "function" ? M : nl(M)), y)
        : r;
    }),
    (y.touchable = function (M) {
      return arguments.length
        ? ((o = typeof M == "function" ? M : nl(!!M)), y)
        : o;
    }),
    (y.on = function () {
      var M = u.on.apply(u, arguments);
      return M === u ? y : M;
    }),
    (y.clickDistance = function (M) {
      return arguments.length ? ((g = (M = +M) * M), y) : Math.sqrt(g);
    }),
    y
  );
}
function zf(e, t, r) {
  ((e.prototype = t.prototype = r), (r.constructor = e));
}
function ov(e, t) {
  var r = Object.create(e.prototype);
  for (var o in t) r[o] = t[o];
  return r;
}
function bs() {}
var gs = 0.7,
  jl = 1 / gs,
  Ki = "\\s*([+-]?\\d+)\\s*",
  ys = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  pE = /^#([0-9a-f]{3,8})$/,
  mE = new RegExp(`^rgb\\(${Ki},${Ki},${Ki}\\)$`),
  gE = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`),
  yE = new RegExp(`^rgba\\(${Ki},${Ki},${Ki},${ys}\\)$`),
  vE = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${ys}\\)$`),
  xE = new RegExp(`^hsl\\(${ys},${Pn},${Pn}\\)$`),
  wE = new RegExp(`^hsla\\(${ys},${Pn},${Pn},${ys}\\)$`),
  mg = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
zf(bs, ei, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: gg,
  formatHex: gg,
  formatHex8: SE,
  formatHsl: kE,
  formatRgb: yg,
  toString: yg,
});
function gg() {
  return this.rgb().formatHex();
}
function SE() {
  return this.rgb().formatHex8();
}
function kE() {
  return sv(this).formatHsl();
}
function yg() {
  return this.rgb().formatRgb();
}
function ei(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = pE.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? vg(t)
          : r === 3
            ? new bt(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? rl(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : r === 4
                ? rl(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = mE.exec(e))
        ? new bt(t[1], t[2], t[3], 1)
        : (t = gE.exec(e))
          ? new bt(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = yE.exec(e))
            ? rl(t[1], t[2], t[3], t[4])
            : (t = vE.exec(e))
              ? rl(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = xE.exec(e))
                ? Sg(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = wE.exec(e))
                  ? Sg(t[1], t[2] / 100, t[3] / 100, t[4])
                  : mg.hasOwnProperty(e)
                    ? vg(mg[e])
                    : e === "transparent"
                      ? new bt(NaN, NaN, NaN, 0)
                      : null
  );
}
function vg(e) {
  return new bt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function rl(e, t, r, o) {
  return (o <= 0 && (e = t = r = NaN), new bt(e, t, r, o));
}
function EE(e) {
  return (
    e instanceof bs || (e = ei(e)),
    e ? ((e = e.rgb()), new bt(e.r, e.g, e.b, e.opacity)) : new bt()
  );
}
function Gd(e, t, r, o) {
  return arguments.length === 1 ? EE(e) : new bt(e, t, r, o ?? 1);
}
function bt(e, t, r, o) {
  ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +o));
}
zf(
  bt,
  Gd,
  ov(bs, {
    brighter(e) {
      return (
        (e = e == null ? jl : Math.pow(jl, e)),
        new bt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? gs : Math.pow(gs, e)),
        new bt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new bt(Zr(this.r), Zr(this.g), Zr(this.b), Al(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: xg,
    formatHex: xg,
    formatHex8: CE,
    formatRgb: wg,
    toString: wg,
  }),
);
function xg() {
  return `#${Gr(this.r)}${Gr(this.g)}${Gr(this.b)}`;
}
function CE() {
  return `#${Gr(this.r)}${Gr(this.g)}${Gr(this.b)}${Gr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function wg() {
  const e = Al(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Zr(this.r)}, ${Zr(this.g)}, ${Zr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Al(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Zr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Gr(e) {
  return ((e = Zr(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function Sg(e, t, r, o) {
  return (
    o <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new an(e, t, r, o)
  );
}
function sv(e) {
  if (e instanceof an) return new an(e.h, e.s, e.l, e.opacity);
  if ((e instanceof bs || (e = ei(e)), !e)) return new an();
  if (e instanceof an) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    o = e.b / 255,
    s = Math.min(t, r, o),
    u = Math.max(t, r, o),
    l = NaN,
    d = u - s,
    p = (u + s) / 2;
  return (
    d
      ? (t === u
          ? (l = (r - o) / d + (r < o) * 6)
          : r === u
            ? (l = (o - t) / d + 2)
            : (l = (t - r) / d + 4),
        (d /= p < 0.5 ? u + s : 2 - u - s),
        (l *= 60))
      : (d = p > 0 && p < 1 ? 0 : l),
    new an(l, d, p, e.opacity)
  );
}
function PE(e, t, r, o) {
  return arguments.length === 1 ? sv(e) : new an(e, t, r, o ?? 1);
}
function an(e, t, r, o) {
  ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +o));
}
zf(
  an,
  PE,
  ov(bs, {
    brighter(e) {
      return (
        (e = e == null ? jl : Math.pow(jl, e)),
        new an(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? gs : Math.pow(gs, e)),
        new an(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        o = r + (r < 0.5 ? r : 1 - r) * t,
        s = 2 * r - o;
      return new bt(
        md(e >= 240 ? e - 240 : e + 120, s, o),
        md(e, s, o),
        md(e < 120 ? e + 240 : e - 120, s, o),
        this.opacity,
      );
    },
    clamp() {
      return new an(kg(this.h), il(this.s), il(this.l), Al(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Al(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${kg(this.h)}, ${il(this.s) * 100}%, ${il(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function kg(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function il(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function md(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
        ? r
        : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
  );
}
const Of = (e) => () => e;
function TE(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function ME(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (o) {
      return Math.pow(e + o * t, r);
    }
  );
}
function NE(e) {
  return (e = +e) == 1
    ? av
    : function (t, r) {
        return r - t ? ME(t, r, e) : Of(isNaN(t) ? r : t);
      };
}
function av(e, t) {
  var r = t - e;
  return r ? TE(e, r) : Of(isNaN(e) ? t : e);
}
const Il = (function e(t) {
  var r = NE(t);
  function o(s, u) {
    var l = r((s = Gd(s)).r, (u = Gd(u)).r),
      d = r(s.g, u.g),
      p = r(s.b, u.b),
      f = av(s.opacity, u.opacity);
    return function (h) {
      return (
        (s.r = l(h)),
        (s.g = d(h)),
        (s.b = p(h)),
        (s.opacity = f(h)),
        s + ""
      );
    };
  }
  return ((o.gamma = e), o);
})(1);
function bE(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    o = t.slice(),
    s;
  return function (u) {
    for (s = 0; s < r; ++s) o[s] = e[s] * (1 - u) + t[s] * u;
    return o;
  };
}
function _E(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function jE(e, t) {
  var r = t ? t.length : 0,
    o = e ? Math.min(r, e.length) : 0,
    s = new Array(o),
    u = new Array(r),
    l;
  for (l = 0; l < o; ++l) s[l] = ls(e[l], t[l]);
  for (; l < r; ++l) u[l] = t[l];
  return function (d) {
    for (l = 0; l < o; ++l) u[l] = s[l](d);
    return u;
  };
}
function AE(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (o) {
      return (r.setTime(e * (1 - o) + t * o), r);
    }
  );
}
function kn(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function IE(e, t) {
  var r = {},
    o = {},
    s;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (s in t) s in e ? (r[s] = ls(e[s], t[s])) : (o[s] = t[s]);
  return function (u) {
    for (s in r) o[s] = r[s](u);
    return o;
  };
}
var Xd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  gd = new RegExp(Xd.source, "g");
function DE(e) {
  return function () {
    return e;
  };
}
function RE(e) {
  return function (t) {
    return e(t) + "";
  };
}
function lv(e, t) {
  var r = (Xd.lastIndex = gd.lastIndex = 0),
    o,
    s,
    u,
    l = -1,
    d = [],
    p = [];
  for (e = e + "", t = t + ""; (o = Xd.exec(e)) && (s = gd.exec(t)); )
    ((u = s.index) > r &&
      ((u = t.slice(r, u)), d[l] ? (d[l] += u) : (d[++l] = u)),
      (o = o[0]) === (s = s[0])
        ? d[l]
          ? (d[l] += s)
          : (d[++l] = s)
        : ((d[++l] = null), p.push({ i: l, x: kn(o, s) })),
      (r = gd.lastIndex));
  return (
    r < t.length && ((u = t.slice(r)), d[l] ? (d[l] += u) : (d[++l] = u)),
    d.length < 2
      ? p[0]
        ? RE(p[0].x)
        : DE(t)
      : ((t = p.length),
        function (f) {
          for (var h = 0, g; h < t; ++h) d[(g = p[h]).i] = g.x(f);
          return d.join("");
        })
  );
}
function ls(e, t) {
  var r = typeof t,
    o;
  return t == null || r === "boolean"
    ? Of(t)
    : (r === "number"
        ? kn
        : r === "string"
          ? (o = ei(t))
            ? ((t = o), Il)
            : lv
          : t instanceof ei
            ? Il
            : t instanceof Date
              ? AE
              : _E(t)
                ? bE
                : Array.isArray(t)
                  ? jE
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? IE
                    : kn)(e, t);
}
var Eg = 180 / Math.PI,
  Yd = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function uv(e, t, r, o, s, u) {
  var l, d, p;
  return (
    (l = Math.sqrt(e * e + t * t)) && ((e /= l), (t /= l)),
    (p = e * r + t * o) && ((r -= e * p), (o -= t * p)),
    (d = Math.sqrt(r * r + o * o)) && ((r /= d), (o /= d), (p /= d)),
    e * o < t * r && ((e = -e), (t = -t), (p = -p), (l = -l)),
    {
      translateX: s,
      translateY: u,
      rotate: Math.atan2(t, e) * Eg,
      skewX: Math.atan(p) * Eg,
      scaleX: l,
      scaleY: d,
    }
  );
}
var ol;
function LE(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    e + "",
  );
  return t.isIdentity ? Yd : uv(t.a, t.b, t.c, t.d, t.e, t.f);
}
function VE(e) {
  return e == null ||
    (ol || (ol = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    ol.setAttribute("transform", e),
    !(e = ol.transform.baseVal.consolidate()))
    ? Yd
    : ((e = e.matrix), uv(e.a, e.b, e.c, e.d, e.e, e.f));
}
function cv(e, t, r, o) {
  function s(f) {
    return f.length ? f.pop() + " " : "";
  }
  function u(f, h, g, y, S, x) {
    if (f !== g || h !== y) {
      var P = S.push("translate(", null, t, null, r);
      x.push({ i: P - 4, x: kn(f, g) }, { i: P - 2, x: kn(h, y) });
    } else (g || y) && S.push("translate(" + g + t + y + r);
  }
  function l(f, h, g, y) {
    f !== h
      ? (f - h > 180 ? (h += 360) : h - f > 180 && (f += 360),
        y.push({ i: g.push(s(g) + "rotate(", null, o) - 2, x: kn(f, h) }))
      : h && g.push(s(g) + "rotate(" + h + o);
  }
  function d(f, h, g, y) {
    f !== h
      ? y.push({ i: g.push(s(g) + "skewX(", null, o) - 2, x: kn(f, h) })
      : h && g.push(s(g) + "skewX(" + h + o);
  }
  function p(f, h, g, y, S, x) {
    if (f !== g || h !== y) {
      var P = S.push(s(S) + "scale(", null, ",", null, ")");
      x.push({ i: P - 4, x: kn(f, g) }, { i: P - 2, x: kn(h, y) });
    } else (g !== 1 || y !== 1) && S.push(s(S) + "scale(" + g + "," + y + ")");
  }
  return function (f, h) {
    var g = [],
      y = [];
    return (
      (f = e(f)),
      (h = e(h)),
      u(f.translateX, f.translateY, h.translateX, h.translateY, g, y),
      l(f.rotate, h.rotate, g, y),
      d(f.skewX, h.skewX, g, y),
      p(f.scaleX, f.scaleY, h.scaleX, h.scaleY, g, y),
      (f = h = null),
      function (S) {
        for (var x = -1, P = y.length, C; ++x < P; ) g[(C = y[x]).i] = C.x(S);
        return g.join("");
      }
    );
  };
}
var zE = cv(LE, "px, ", "px)", "deg)"),
  OE = cv(VE, ", ", ")", ")"),
  FE = 1e-12;
function Cg(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function $E(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function BE(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const yl = (function e(t, r, o) {
  function s(u, l) {
    var d = u[0],
      p = u[1],
      f = u[2],
      h = l[0],
      g = l[1],
      y = l[2],
      S = h - d,
      x = g - p,
      P = S * S + x * x,
      C,
      T;
    if (P < FE)
      ((T = Math.log(y / f) / t),
        (C = function (R) {
          return [d + R * S, p + R * x, f * Math.exp(t * R * T)];
        }));
    else {
      var N = Math.sqrt(P),
        k = (y * y - f * f + o * P) / (2 * f * r * N),
        M = (y * y - f * f - o * P) / (2 * y * r * N),
        I = Math.log(Math.sqrt(k * k + 1) - k),
        b = Math.log(Math.sqrt(M * M + 1) - M);
      ((T = (b - I) / t),
        (C = function (R) {
          var V = R * T,
            U = Cg(I),
            K = (f / (r * N)) * (U * BE(t * V + I) - $E(I));
          return [d + K * S, p + K * x, (f * U) / Cg(t * V + I)];
        }));
    }
    return ((C.duration = (T * 1e3 * t) / Math.SQRT2), C);
  }
  return (
    (s.rho = function (u) {
      var l = Math.max(0.001, +u),
        d = l * l,
        p = d * d;
      return e(l, d, p);
    }),
    s
  );
})(Math.SQRT2, 2, 4);
var Qi = 0,
  is = 0,
  ts = 0,
  dv = 1e3,
  Dl,
  os,
  Rl = 0,
  ti = 0,
  Jl = 0,
  vs = typeof performance == "object" && performance.now ? performance : Date,
  fv =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function Ff() {
  return ti || (fv(HE), (ti = vs.now() + Jl));
}
function HE() {
  ti = 0;
}
function Ll() {
  this._call = this._time = this._next = null;
}
Ll.prototype = hv.prototype = {
  constructor: Ll,
  restart: function (e, t, r) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    ((r = (r == null ? Ff() : +r) + (t == null ? 0 : +t)),
      !this._next &&
        os !== this &&
        (os ? (os._next = this) : (Dl = this), (os = this)),
      (this._call = e),
      (this._time = r),
      Kd());
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Kd());
  },
};
function hv(e, t, r) {
  var o = new Ll();
  return (o.restart(e, t, r), o);
}
function UE() {
  (Ff(), ++Qi);
  for (var e = Dl, t; e; )
    ((t = ti - e._time) >= 0 && e._call.call(void 0, t), (e = e._next));
  --Qi;
}
function Pg() {
  ((ti = (Rl = vs.now()) + Jl), (Qi = is = 0));
  try {
    UE();
  } finally {
    ((Qi = 0), GE(), (ti = 0));
  }
}
function WE() {
  var e = vs.now(),
    t = e - Rl;
  t > dv && ((Jl -= t), (Rl = e));
}
function GE() {
  for (var e, t = Dl, r, o = 1 / 0; t; )
    t._call
      ? (o > t._time && (o = t._time), (e = t), (t = t._next))
      : ((r = t._next), (t._next = null), (t = e ? (e._next = r) : (Dl = r)));
  ((os = e), Kd(o));
}
function Kd(e) {
  if (!Qi) {
    is && (is = clearTimeout(is));
    var t = e - ti;
    t > 24
      ? (e < 1 / 0 && (is = setTimeout(Pg, e - vs.now() - Jl)),
        ts && (ts = clearInterval(ts)))
      : (ts || ((Rl = vs.now()), (ts = setInterval(WE, dv))), (Qi = 1), fv(Pg));
  }
}
function Tg(e, t, r) {
  var o = new Ll();
  return (
    (t = t == null ? 0 : +t),
    o.restart(
      (s) => {
        (o.stop(), e(s + t));
      },
      t,
      r,
    ),
    o
  );
}
var XE = ql("start", "end", "cancel", "interrupt"),
  YE = [],
  pv = 0,
  Mg = 1,
  Zd = 2,
  vl = 3,
  Ng = 4,
  qd = 5,
  xl = 6;
function eu(e, t, r, o, s, u) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (r in l) return;
  KE(e, r, {
    name: t,
    index: o,
    group: s,
    on: XE,
    tween: YE,
    time: u.time,
    delay: u.delay,
    duration: u.duration,
    ease: u.ease,
    timer: null,
    state: pv,
  });
}
function $f(e, t) {
  var r = fn(e, t);
  if (r.state > pv) throw new Error("too late; already scheduled");
  return r;
}
function Nn(e, t) {
  var r = fn(e, t);
  if (r.state > vl) throw new Error("too late; already running");
  return r;
}
function fn(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function KE(e, t, r) {
  var o = e.__transition,
    s;
  ((o[t] = r), (r.timer = hv(u, 0, r.time)));
  function u(f) {
    ((r.state = Mg),
      r.timer.restart(l, r.delay, r.time),
      r.delay <= f && l(f - r.delay));
  }
  function l(f) {
    var h, g, y, S;
    if (r.state !== Mg) return p();
    for (h in o)
      if (((S = o[h]), S.name === r.name)) {
        if (S.state === vl) return Tg(l);
        S.state === Ng
          ? ((S.state = xl),
            S.timer.stop(),
            S.on.call("interrupt", e, e.__data__, S.index, S.group),
            delete o[h])
          : +h < t &&
            ((S.state = xl),
            S.timer.stop(),
            S.on.call("cancel", e, e.__data__, S.index, S.group),
            delete o[h]);
      }
    if (
      (Tg(function () {
        r.state === vl &&
          ((r.state = Ng), r.timer.restart(d, r.delay, r.time), d(f));
      }),
      (r.state = Zd),
      r.on.call("start", e, e.__data__, r.index, r.group),
      r.state === Zd)
    ) {
      for (
        r.state = vl, s = new Array((y = r.tween.length)), h = 0, g = -1;
        h < y;
        ++h
      )
        (S = r.tween[h].value.call(e, e.__data__, r.index, r.group)) &&
          (s[++g] = S);
      s.length = g + 1;
    }
  }
  function d(f) {
    for (
      var h =
          f < r.duration
            ? r.ease.call(null, f / r.duration)
            : (r.timer.restart(p), (r.state = qd), 1),
        g = -1,
        y = s.length;
      ++g < y;

    )
      s[g].call(e, h);
    r.state === qd && (r.on.call("end", e, e.__data__, r.index, r.group), p());
  }
  function p() {
    ((r.state = xl), r.timer.stop(), delete o[t]);
    for (var f in o) return;
    delete e.__transition;
  }
}
function wl(e, t) {
  var r = e.__transition,
    o,
    s,
    u = !0,
    l;
  if (r) {
    t = t == null ? null : t + "";
    for (l in r) {
      if ((o = r[l]).name !== t) {
        u = !1;
        continue;
      }
      ((s = o.state > Zd && o.state < qd),
        (o.state = xl),
        o.timer.stop(),
        o.on.call(s ? "interrupt" : "cancel", e, e.__data__, o.index, o.group),
        delete r[l]);
    }
    u && delete e.__transition;
  }
}
function ZE(e) {
  return this.each(function () {
    wl(this, e);
  });
}
function qE(e, t) {
  var r, o;
  return function () {
    var s = Nn(this, e),
      u = s.tween;
    if (u !== r) {
      o = r = u;
      for (var l = 0, d = o.length; l < d; ++l)
        if (o[l].name === t) {
          ((o = o.slice()), o.splice(l, 1));
          break;
        }
    }
    s.tween = o;
  };
}
function QE(e, t, r) {
  var o, s;
  if (typeof r != "function") throw new Error();
  return function () {
    var u = Nn(this, e),
      l = u.tween;
    if (l !== o) {
      s = (o = l).slice();
      for (var d = { name: t, value: r }, p = 0, f = s.length; p < f; ++p)
        if (s[p].name === t) {
          s[p] = d;
          break;
        }
      p === f && s.push(d);
    }
    u.tween = s;
  };
}
function JE(e, t) {
  var r = this._id;
  if (((e += ""), arguments.length < 2)) {
    for (var o = fn(this.node(), r).tween, s = 0, u = o.length, l; s < u; ++s)
      if ((l = o[s]).name === e) return l.value;
    return null;
  }
  return this.each((t == null ? qE : QE)(r, e, t));
}
function Bf(e, t, r) {
  var o = e._id;
  return (
    e.each(function () {
      var s = Nn(this, o);
      (s.value || (s.value = {}))[t] = r.apply(this, arguments);
    }),
    function (s) {
      return fn(s, o).value[t];
    }
  );
}
function mv(e, t) {
  var r;
  return (
    typeof t == "number"
      ? kn
      : t instanceof ei
        ? Il
        : (r = ei(t))
          ? ((t = r), Il)
          : lv
  )(e, t);
}
function eC(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function tC(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function nC(e, t, r) {
  var o,
    s = r + "",
    u;
  return function () {
    var l = this.getAttribute(e);
    return l === s ? null : l === o ? u : (u = t((o = l), r));
  };
}
function rC(e, t, r) {
  var o,
    s = r + "",
    u;
  return function () {
    var l = this.getAttributeNS(e.space, e.local);
    return l === s ? null : l === o ? u : (u = t((o = l), r));
  };
}
function iC(e, t, r) {
  var o, s, u;
  return function () {
    var l,
      d = r(this),
      p;
    return d == null
      ? void this.removeAttribute(e)
      : ((l = this.getAttribute(e)),
        (p = d + ""),
        l === p
          ? null
          : l === o && p === s
            ? u
            : ((s = p), (u = t((o = l), d))));
  };
}
function oC(e, t, r) {
  var o, s, u;
  return function () {
    var l,
      d = r(this),
      p;
    return d == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((l = this.getAttributeNS(e.space, e.local)),
        (p = d + ""),
        l === p
          ? null
          : l === o && p === s
            ? u
            : ((s = p), (u = t((o = l), d))));
  };
}
function sC(e, t) {
  var r = Ql(e),
    o = r === "transform" ? OE : mv;
  return this.attrTween(
    e,
    typeof t == "function"
      ? (r.local ? oC : iC)(r, o, Bf(this, "attr." + e, t))
      : t == null
        ? (r.local ? tC : eC)(r)
        : (r.local ? rC : nC)(r, o, t),
  );
}
function aC(e, t) {
  return function (r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function lC(e, t) {
  return function (r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function uC(e, t) {
  var r, o;
  function s() {
    var u = t.apply(this, arguments);
    return (u !== o && (r = (o = u) && lC(e, u)), r);
  }
  return ((s._value = t), s);
}
function cC(e, t) {
  var r, o;
  function s() {
    var u = t.apply(this, arguments);
    return (u !== o && (r = (o = u) && aC(e, u)), r);
  }
  return ((s._value = t), s);
}
function dC(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var o = Ql(e);
  return this.tween(r, (o.local ? uC : cC)(o, t));
}
function fC(e, t) {
  return function () {
    $f(this, e).delay = +t.apply(this, arguments);
  };
}
function hC(e, t) {
  return (
    (t = +t),
    function () {
      $f(this, e).delay = t;
    }
  );
}
function pC(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? fC : hC)(t, e))
    : fn(this.node(), t).delay;
}
function mC(e, t) {
  return function () {
    Nn(this, e).duration = +t.apply(this, arguments);
  };
}
function gC(e, t) {
  return (
    (t = +t),
    function () {
      Nn(this, e).duration = t;
    }
  );
}
function yC(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? mC : gC)(t, e))
    : fn(this.node(), t).duration;
}
function vC(e, t) {
  if (typeof t != "function") throw new Error();
  return function () {
    Nn(this, e).ease = t;
  };
}
function xC(e) {
  var t = this._id;
  return arguments.length ? this.each(vC(t, e)) : fn(this.node(), t).ease;
}
function wC(e, t) {
  return function () {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Nn(this, e).ease = r;
  };
}
function SC(e) {
  if (typeof e != "function") throw new Error();
  return this.each(wC(this._id, e));
}
function kC(e) {
  typeof e != "function" && (e = G0(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var u = t[s], l = u.length, d = (o[s] = []), p, f = 0; f < l; ++f)
      (p = u[f]) && e.call(p, p.__data__, f, u) && d.push(p);
  return new Wn(o, this._parents, this._name, this._id);
}
function EC(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups,
      r = e._groups,
      o = t.length,
      s = r.length,
      u = Math.min(o, s),
      l = new Array(o),
      d = 0;
    d < u;
    ++d
  )
    for (
      var p = t[d], f = r[d], h = p.length, g = (l[d] = new Array(h)), y, S = 0;
      S < h;
      ++S
    )
      (y = p[S] || f[S]) && (g[S] = y);
  for (; d < o; ++d) l[d] = t[d];
  return new Wn(l, this._parents, this._name, this._id);
}
function CC(e) {
  return (e + "")
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var r = t.indexOf(".");
      return (r >= 0 && (t = t.slice(0, r)), !t || t === "start");
    });
}
function PC(e, t, r) {
  var o,
    s,
    u = CC(t) ? $f : Nn;
  return function () {
    var l = u(this, e),
      d = l.on;
    (d !== o && (s = (o = d).copy()).on(t, r), (l.on = s));
  };
}
function TC(e, t) {
  var r = this._id;
  return arguments.length < 2
    ? fn(this.node(), r).on.on(e)
    : this.each(PC(r, e, t));
}
function MC(e) {
  return function () {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function NC() {
  return this.on("end.remove", MC(this._id));
}
function bC(e) {
  var t = this._name,
    r = this._id;
  typeof e != "function" && (e = Lf(e));
  for (var o = this._groups, s = o.length, u = new Array(s), l = 0; l < s; ++l)
    for (
      var d = o[l], p = d.length, f = (u[l] = new Array(p)), h, g, y = 0;
      y < p;
      ++y
    )
      (h = d[y]) &&
        (g = e.call(h, h.__data__, y, d)) &&
        ("__data__" in h && (g.__data__ = h.__data__),
        (f[y] = g),
        eu(f[y], t, r, y, f, fn(h, r)));
  return new Wn(u, this._parents, t, r);
}
function _C(e) {
  var t = this._name,
    r = this._id;
  typeof e != "function" && (e = W0(e));
  for (var o = this._groups, s = o.length, u = [], l = [], d = 0; d < s; ++d)
    for (var p = o[d], f = p.length, h, g = 0; g < f; ++g)
      if ((h = p[g])) {
        for (
          var y = e.call(h, h.__data__, g, p),
            S,
            x = fn(h, r),
            P = 0,
            C = y.length;
          P < C;
          ++P
        )
          (S = y[P]) && eu(S, t, r, P, y, x);
        (u.push(y), l.push(h));
      }
  return new Wn(u, l, t, r);
}
var jC = Ns.prototype.constructor;
function AC() {
  return new jC(this._groups, this._parents);
}
function IC(e, t) {
  var r, o, s;
  return function () {
    var u = qi(this, e),
      l = (this.style.removeProperty(e), qi(this, e));
    return u === l ? null : u === r && l === o ? s : (s = t((r = u), (o = l)));
  };
}
function gv(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function DC(e, t, r) {
  var o,
    s = r + "",
    u;
  return function () {
    var l = qi(this, e);
    return l === s ? null : l === o ? u : (u = t((o = l), r));
  };
}
function RC(e, t, r) {
  var o, s, u;
  return function () {
    var l = qi(this, e),
      d = r(this),
      p = d + "";
    return (
      d == null && (p = d = (this.style.removeProperty(e), qi(this, e))),
      l === p ? null : l === o && p === s ? u : ((s = p), (u = t((o = l), d)))
    );
  };
}
function LC(e, t) {
  var r,
    o,
    s,
    u = "style." + t,
    l = "end." + u,
    d;
  return function () {
    var p = Nn(this, e),
      f = p.on,
      h = p.value[u] == null ? d || (d = gv(t)) : void 0;
    ((f !== r || s !== h) && (o = (r = f).copy()).on(l, (s = h)), (p.on = o));
  };
}
function VC(e, t, r) {
  var o = (e += "") == "transform" ? zE : mv;
  return t == null
    ? this.styleTween(e, IC(e, o)).on("end.style." + e, gv(e))
    : typeof t == "function"
      ? this.styleTween(e, RC(e, o, Bf(this, "style." + e, t))).each(
          LC(this._id, e),
        )
      : this.styleTween(e, DC(e, o, t), r).on("end.style." + e, null);
}
function zC(e, t, r) {
  return function (o) {
    this.style.setProperty(e, t.call(this, o), r);
  };
}
function OC(e, t, r) {
  var o, s;
  function u() {
    var l = t.apply(this, arguments);
    return (l !== s && (o = (s = l) && zC(e, l, r)), o);
  }
  return ((u._value = t), u);
}
function FC(e, t, r) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, OC(e, t, r ?? ""));
}
function $C(e) {
  return function () {
    this.textContent = e;
  };
}
function BC(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function HC(e) {
  return this.tween(
    "text",
    typeof e == "function"
      ? BC(Bf(this, "text", e))
      : $C(e == null ? "" : e + ""),
  );
}
function UC(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function WC(e) {
  var t, r;
  function o() {
    var s = e.apply(this, arguments);
    return (s !== r && (t = (r = s) && UC(s)), t);
  }
  return ((o._value = e), o);
}
function GC(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, WC(e));
}
function XC() {
  for (
    var e = this._name,
      t = this._id,
      r = yv(),
      o = this._groups,
      s = o.length,
      u = 0;
    u < s;
    ++u
  )
    for (var l = o[u], d = l.length, p, f = 0; f < d; ++f)
      if ((p = l[f])) {
        var h = fn(p, t);
        eu(p, e, r, f, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease,
        });
      }
  return new Wn(o, this._parents, e, r);
}
function YC() {
  var e,
    t,
    r = this,
    o = r._id,
    s = r.size();
  return new Promise(function (u, l) {
    var d = { value: l },
      p = {
        value: function () {
          --s === 0 && u();
        },
      };
    (r.each(function () {
      var f = Nn(this, o),
        h = f.on;
      (h !== e &&
        ((t = (e = h).copy()),
        t._.cancel.push(d),
        t._.interrupt.push(d),
        t._.end.push(p)),
        (f.on = t));
    }),
      s === 0 && u());
  });
}
var KC = 0;
function Wn(e, t, r, o) {
  ((this._groups = e), (this._parents = t), (this._name = r), (this._id = o));
}
function yv() {
  return ++KC;
}
var Fn = Ns.prototype;
Wn.prototype = {
  constructor: Wn,
  select: bC,
  selectAll: _C,
  selectChild: Fn.selectChild,
  selectChildren: Fn.selectChildren,
  filter: kC,
  merge: EC,
  selection: AC,
  transition: XC,
  call: Fn.call,
  nodes: Fn.nodes,
  node: Fn.node,
  size: Fn.size,
  empty: Fn.empty,
  each: Fn.each,
  on: TC,
  attr: sC,
  attrTween: dC,
  style: VC,
  styleTween: FC,
  text: HC,
  textTween: GC,
  remove: NC,
  tween: JE,
  delay: pC,
  duration: yC,
  ease: xC,
  easeVarying: SC,
  end: YC,
  [Symbol.iterator]: Fn[Symbol.iterator],
};
function ZC(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var qC = { time: null, delay: 0, duration: 250, ease: ZC };
function QC(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return r;
}
function JC(e) {
  var t, r;
  e instanceof Wn
    ? ((t = e._id), (e = e._name))
    : ((t = yv()), ((r = qC).time = Ff()), (e = e == null ? null : e + ""));
  for (var o = this._groups, s = o.length, u = 0; u < s; ++u)
    for (var l = o[u], d = l.length, p, f = 0; f < d; ++f)
      (p = l[f]) && eu(p, e, t, f, l, r || QC(p, t));
  return new Wn(o, this._parents, e, t);
}
Ns.prototype.interrupt = ZE;
Ns.prototype.transition = JC;
const sl = (e) => () => e;
function eP(e, { sourceEvent: t, target: r, transform: o, dispatch: s }) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: s },
  });
}
function Hn(e, t, r) {
  ((this.k = e), (this.x = t), (this.y = r));
}
Hn.prototype = {
  constructor: Hn,
  scale: function (e) {
    return e === 1 ? this : new Hn(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0)
      ? this
      : new Hn(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
var tu = new Hn(1, 0, 0);
vv.prototype = Hn.prototype;
function vv(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return tu;
  return e.__zoom;
}
function yd(e) {
  e.stopImmediatePropagation();
}
function ns(e) {
  (e.preventDefault(), e.stopImmediatePropagation());
}
function tP(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function nP() {
  var e = this;
  return e instanceof SVGElement
    ? ((e = e.ownerSVGElement || e),
      e.hasAttribute("viewBox")
        ? ((e = e.viewBox.baseVal),
          [
            [e.x, e.y],
            [e.x + e.width, e.y + e.height],
          ])
        : [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value],
          ])
    : [
        [0, 0],
        [e.clientWidth, e.clientHeight],
      ];
}
function bg() {
  return this.__zoom || tu;
}
function rP(e) {
  return (
    -e.deltaY *
    (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
    (e.ctrlKey ? 10 : 1)
  );
}
function iP() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function oP(e, t, r) {
  var o = e.invertX(t[0][0]) - r[0][0],
    s = e.invertX(t[1][0]) - r[1][0],
    u = e.invertY(t[0][1]) - r[0][1],
    l = e.invertY(t[1][1]) - r[1][1];
  return e.translate(
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
    l > u ? (u + l) / 2 : Math.min(0, u) || Math.max(0, l),
  );
}
function xv() {
  var e = tP,
    t = nP,
    r = oP,
    o = rP,
    s = iP,
    u = [0, 1 / 0],
    l = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    d = 250,
    p = yl,
    f = ql("start", "zoom", "end"),
    h,
    g,
    y,
    S = 500,
    x = 150,
    P = 0,
    C = 10;
  function T(j) {
    j.property("__zoom", bg)
      .on("wheel.zoom", V, { passive: !1 })
      .on("mousedown.zoom", U)
      .on("dblclick.zoom", K)
      .filter(s)
      .on("touchstart.zoom", Z)
      .on("touchmove.zoom", ee)
      .on("touchend.zoom touchcancel.zoom", J)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  ((T.transform = function (j, H, F, W) {
    var L = j.selection ? j.selection() : j;
    (L.property("__zoom", bg),
      j !== L
        ? I(j, H, F, W)
        : L.interrupt().each(function () {
            b(this, arguments)
              .event(W)
              .start()
              .zoom(null, typeof H == "function" ? H.apply(this, arguments) : H)
              .end();
          }));
  }),
    (T.scaleBy = function (j, H, F, W) {
      T.scaleTo(
        j,
        function () {
          var L = this.__zoom.k,
            $ = typeof H == "function" ? H.apply(this, arguments) : H;
          return L * $;
        },
        F,
        W,
      );
    }),
    (T.scaleTo = function (j, H, F, W) {
      T.transform(
        j,
        function () {
          var L = t.apply(this, arguments),
            $ = this.__zoom,
            G =
              F == null
                ? M(L)
                : typeof F == "function"
                  ? F.apply(this, arguments)
                  : F,
            _ = $.invert(G),
            O = typeof H == "function" ? H.apply(this, arguments) : H;
          return r(k(N($, O), G, _), L, l);
        },
        F,
        W,
      );
    }),
    (T.translateBy = function (j, H, F, W) {
      T.transform(
        j,
        function () {
          return r(
            this.__zoom.translate(
              typeof H == "function" ? H.apply(this, arguments) : H,
              typeof F == "function" ? F.apply(this, arguments) : F,
            ),
            t.apply(this, arguments),
            l,
          );
        },
        null,
        W,
      );
    }),
    (T.translateTo = function (j, H, F, W, L) {
      T.transform(
        j,
        function () {
          var $ = t.apply(this, arguments),
            G = this.__zoom,
            _ =
              W == null
                ? M($)
                : typeof W == "function"
                  ? W.apply(this, arguments)
                  : W;
          return r(
            tu
              .translate(_[0], _[1])
              .scale(G.k)
              .translate(
                typeof H == "function" ? -H.apply(this, arguments) : -H,
                typeof F == "function" ? -F.apply(this, arguments) : -F,
              ),
            $,
            l,
          );
        },
        W,
        L,
      );
    }));
  function N(j, H) {
    return (
      (H = Math.max(u[0], Math.min(u[1], H))),
      H === j.k ? j : new Hn(H, j.x, j.y)
    );
  }
  function k(j, H, F) {
    var W = H[0] - F[0] * j.k,
      L = H[1] - F[1] * j.k;
    return W === j.x && L === j.y ? j : new Hn(j.k, W, L);
  }
  function M(j) {
    return [(+j[0][0] + +j[1][0]) / 2, (+j[0][1] + +j[1][1]) / 2];
  }
  function I(j, H, F, W) {
    j.on("start.zoom", function () {
      b(this, arguments).event(W).start();
    })
      .on("interrupt.zoom end.zoom", function () {
        b(this, arguments).event(W).end();
      })
      .tween("zoom", function () {
        var L = this,
          $ = arguments,
          G = b(L, $).event(W),
          _ = t.apply(L, $),
          O = F == null ? M(_) : typeof F == "function" ? F.apply(L, $) : F,
          oe = Math.max(_[1][0] - _[0][0], _[1][1] - _[0][1]),
          re = L.__zoom,
          le = typeof H == "function" ? H.apply(L, $) : H,
          ce = p(
            re.invert(O).concat(oe / re.k),
            le.invert(O).concat(oe / le.k),
          );
        return function (ue) {
          if (ue === 1) ue = le;
          else {
            var Q = ce(ue),
              ae = oe / Q[2];
            ue = new Hn(ae, O[0] - Q[0] * ae, O[1] - Q[1] * ae);
          }
          G.zoom(null, ue);
        };
      });
  }
  function b(j, H, F) {
    return (!F && j.__zooming) || new R(j, H);
  }
  function R(j, H) {
    ((this.that = j),
      (this.args = H),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = t.apply(j, H)),
      (this.taps = 0));
  }
  R.prototype = {
    event: function (j) {
      return (j && (this.sourceEvent = j), this);
    },
    start: function () {
      return (
        ++this.active === 1 &&
          ((this.that.__zooming = this), this.emit("start")),
        this
      );
    },
    zoom: function (j, H) {
      return (
        this.mouse &&
          j !== "mouse" &&
          (this.mouse[1] = H.invert(this.mouse[0])),
        this.touch0 &&
          j !== "touch" &&
          (this.touch0[1] = H.invert(this.touch0[0])),
        this.touch1 &&
          j !== "touch" &&
          (this.touch1[1] = H.invert(this.touch1[0])),
        (this.that.__zoom = H),
        this.emit("zoom"),
        this
      );
    },
    end: function () {
      return (
        --this.active === 0 && (delete this.that.__zooming, this.emit("end")),
        this
      );
    },
    emit: function (j) {
      var H = Vt(this.that).datum();
      f.call(
        j,
        this.that,
        new eP(j, {
          sourceEvent: this.sourceEvent,
          target: T,
          transform: this.that.__zoom,
          dispatch: f,
        }),
        H,
      );
    },
  };
  function V(j, ...H) {
    if (!e.apply(this, arguments)) return;
    var F = b(this, H).event(j),
      W = this.__zoom,
      L = Math.max(
        u[0],
        Math.min(u[1], W.k * Math.pow(2, o.apply(this, arguments))),
      ),
      $ = sn(j);
    if (F.wheel)
      ((F.mouse[0][0] !== $[0] || F.mouse[0][1] !== $[1]) &&
        (F.mouse[1] = W.invert((F.mouse[0] = $))),
        clearTimeout(F.wheel));
    else {
      if (W.k === L) return;
      ((F.mouse = [$, W.invert($)]), wl(this), F.start());
    }
    (ns(j),
      (F.wheel = setTimeout(G, x)),
      F.zoom("mouse", r(k(N(W, L), F.mouse[0], F.mouse[1]), F.extent, l)));
    function G() {
      ((F.wheel = null), F.end());
    }
  }
  function U(j, ...H) {
    if (y || !e.apply(this, arguments)) return;
    var F = j.currentTarget,
      W = b(this, H, !0).event(j),
      L = Vt(j.view).on("mousemove.zoom", O, !0).on("mouseup.zoom", oe, !0),
      $ = sn(j, F),
      G = j.clientX,
      _ = j.clientY;
    (nv(j.view),
      yd(j),
      (W.mouse = [$, this.__zoom.invert($)]),
      wl(this),
      W.start());
    function O(re) {
      if ((ns(re), !W.moved)) {
        var le = re.clientX - G,
          ce = re.clientY - _;
        W.moved = le * le + ce * ce > P;
      }
      W.event(re).zoom(
        "mouse",
        r(k(W.that.__zoom, (W.mouse[0] = sn(re, F)), W.mouse[1]), W.extent, l),
      );
    }
    function oe(re) {
      (L.on("mousemove.zoom mouseup.zoom", null),
        rv(re.view, W.moved),
        ns(re),
        W.event(re).end());
    }
  }
  function K(j, ...H) {
    if (e.apply(this, arguments)) {
      var F = this.__zoom,
        W = sn(j.changedTouches ? j.changedTouches[0] : j, this),
        L = F.invert(W),
        $ = F.k * (j.shiftKey ? 0.5 : 2),
        G = r(k(N(F, $), W, L), t.apply(this, H), l);
      (ns(j),
        d > 0
          ? Vt(this).transition().duration(d).call(I, G, W, j)
          : Vt(this).call(T.transform, G, W, j));
    }
  }
  function Z(j, ...H) {
    if (e.apply(this, arguments)) {
      var F = j.touches,
        W = F.length,
        L = b(this, H, j.changedTouches.length === W).event(j),
        $,
        G,
        _,
        O;
      for (yd(j), G = 0; G < W; ++G)
        ((_ = F[G]),
          (O = sn(_, this)),
          (O = [O, this.__zoom.invert(O), _.identifier]),
          L.touch0
            ? !L.touch1 &&
              L.touch0[2] !== O[2] &&
              ((L.touch1 = O), (L.taps = 0))
            : ((L.touch0 = O), ($ = !0), (L.taps = 1 + !!h)));
      (h && (h = clearTimeout(h)),
        $ &&
          (L.taps < 2 &&
            ((g = O[0]),
            (h = setTimeout(function () {
              h = null;
            }, S))),
          wl(this),
          L.start()));
    }
  }
  function ee(j, ...H) {
    if (this.__zooming) {
      var F = b(this, H).event(j),
        W = j.changedTouches,
        L = W.length,
        $,
        G,
        _,
        O;
      for (ns(j), $ = 0; $ < L; ++$)
        ((G = W[$]),
          (_ = sn(G, this)),
          F.touch0 && F.touch0[2] === G.identifier
            ? (F.touch0[0] = _)
            : F.touch1 && F.touch1[2] === G.identifier && (F.touch1[0] = _));
      if (((G = F.that.__zoom), F.touch1)) {
        var oe = F.touch0[0],
          re = F.touch0[1],
          le = F.touch1[0],
          ce = F.touch1[1],
          ue = (ue = le[0] - oe[0]) * ue + (ue = le[1] - oe[1]) * ue,
          Q = (Q = ce[0] - re[0]) * Q + (Q = ce[1] - re[1]) * Q;
        ((G = N(G, Math.sqrt(ue / Q))),
          (_ = [(oe[0] + le[0]) / 2, (oe[1] + le[1]) / 2]),
          (O = [(re[0] + ce[0]) / 2, (re[1] + ce[1]) / 2]));
      } else if (F.touch0) ((_ = F.touch0[0]), (O = F.touch0[1]));
      else return;
      F.zoom("touch", r(k(G, _, O), F.extent, l));
    }
  }
  function J(j, ...H) {
    if (this.__zooming) {
      var F = b(this, H).event(j),
        W = j.changedTouches,
        L = W.length,
        $,
        G;
      for (
        yd(j),
          y && clearTimeout(y),
          y = setTimeout(function () {
            y = null;
          }, S),
          $ = 0;
        $ < L;
        ++$
      )
        ((G = W[$]),
          F.touch0 && F.touch0[2] === G.identifier
            ? delete F.touch0
            : F.touch1 && F.touch1[2] === G.identifier && delete F.touch1);
      if (
        (F.touch1 && !F.touch0 && ((F.touch0 = F.touch1), delete F.touch1),
        F.touch0)
      )
        F.touch0[1] = this.__zoom.invert(F.touch0[0]);
      else if (
        (F.end(),
        F.taps === 2 &&
          ((G = sn(G, this)), Math.hypot(g[0] - G[0], g[1] - G[1]) < C))
      ) {
        var _ = Vt(this).on("dblclick.zoom");
        _ && _.apply(this, arguments);
      }
    }
  }
  return (
    (T.wheelDelta = function (j) {
      return arguments.length
        ? ((o = typeof j == "function" ? j : sl(+j)), T)
        : o;
    }),
    (T.filter = function (j) {
      return arguments.length
        ? ((e = typeof j == "function" ? j : sl(!!j)), T)
        : e;
    }),
    (T.touchable = function (j) {
      return arguments.length
        ? ((s = typeof j == "function" ? j : sl(!!j)), T)
        : s;
    }),
    (T.extent = function (j) {
      return arguments.length
        ? ((t =
            typeof j == "function"
              ? j
              : sl([
                  [+j[0][0], +j[0][1]],
                  [+j[1][0], +j[1][1]],
                ])),
          T)
        : t;
    }),
    (T.scaleExtent = function (j) {
      return arguments.length
        ? ((u[0] = +j[0]), (u[1] = +j[1]), T)
        : [u[0], u[1]];
    }),
    (T.translateExtent = function (j) {
      return arguments.length
        ? ((l[0][0] = +j[0][0]),
          (l[1][0] = +j[1][0]),
          (l[0][1] = +j[0][1]),
          (l[1][1] = +j[1][1]),
          T)
        : [
            [l[0][0], l[0][1]],
            [l[1][0], l[1][1]],
          ];
    }),
    (T.constrain = function (j) {
      return arguments.length ? ((r = j), T) : r;
    }),
    (T.duration = function (j) {
      return arguments.length ? ((d = +j), T) : d;
    }),
    (T.interpolate = function (j) {
      return arguments.length ? ((p = j), T) : p;
    }),
    (T.on = function () {
      var j = f.on.apply(f, arguments);
      return j === f ? T : j;
    }),
    (T.clickDistance = function (j) {
      return arguments.length ? ((P = (j = +j) * j), T) : Math.sqrt(P);
    }),
    (T.tapDistance = function (j) {
      return arguments.length ? ((C = +j), T) : C;
    }),
    T
  );
}
const dn = {
    error001: (e = "react") =>
      `Seems like you have not used ${e === "svelte" ? "SvelteFlowProvider" : "ReactFlowProvider"} as an ancestor. Help: https://${e}flow.dev/error#001`,
    error002: () =>
      "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
    error003: (e) =>
      `Node type "${e}" not found. Using fallback type "default".`,
    error004: () =>
      "The parent container needs a width and a height to render the graph.",
    error005: () => "Only child nodes can use a parent extent.",
    error006: () => "Can't create edge. An edge needs a source and a target.",
    error007: (e) => `The old edge with id=${e} does not exist.`,
    error009: (e) => `Marker type "${e}" doesn't exist.`,
    error008: (e, { id: t, sourceHandle: r, targetHandle: o }) =>
      `Couldn't create edge for ${e} handle id: "${e === "source" ? r : o}", edge id: ${t}.`,
    error010: () =>
      "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
    error011: (e) =>
      `Edge type "${e}" not found. Using fallback type "default".`,
    error012: (e) =>
      `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
    error013: (e = "react") =>
      `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
    error014: () =>
      "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
    error015: () =>
      "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
    error016: (e) =>
      `Edge with id "${e}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`,
  },
  xs = [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
  ],
  wv = ["Enter", " ", "Escape"],
  Sv = {
    "node.a11yDescription.default":
      "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.keyboardDisabled":
      "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: r }) =>
      `Moved selected node ${e}. New position, x: ${t}, y: ${r}`,
    "edge.a11yDescription.default":
      "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
    "controls.ariaLabel": "Control Panel",
    "controls.zoomIn.ariaLabel": "Zoom In",
    "controls.zoomOut.ariaLabel": "Zoom Out",
    "controls.fitView.ariaLabel": "Fit View",
    "controls.interactive.ariaLabel": "Toggle Interactivity",
    "minimap.ariaLabel": "Mini Map",
    "handle.ariaLabel": "Handle",
  };
var ni;
(function (e) {
  ((e.Strict = "strict"), (e.Loose = "loose"));
})(ni || (ni = {}));
var qr;
(function (e) {
  ((e.Free = "free"), (e.Vertical = "vertical"), (e.Horizontal = "horizontal"));
})(qr || (qr = {}));
var Ji;
(function (e) {
  ((e.Partial = "partial"), (e.Full = "full"));
})(Ji || (Ji = {}));
const kv = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null,
};
var yr;
(function (e) {
  ((e.Bezier = "default"),
    (e.Straight = "straight"),
    (e.Step = "step"),
    (e.SmoothStep = "smoothstep"),
    (e.SimpleBezier = "simplebezier"));
})(yr || (yr = {}));
var Vl;
(function (e) {
  ((e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed"));
})(Vl || (Vl = {}));
var we;
(function (e) {
  ((e.Left = "left"),
    (e.Top = "top"),
    (e.Right = "right"),
    (e.Bottom = "bottom"));
})(we || (we = {}));
const _g = {
  [we.Left]: we.Right,
  [we.Right]: we.Left,
  [we.Top]: we.Bottom,
  [we.Bottom]: we.Top,
};
function Ev(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Cv = (e) =>
    !!e && typeof e == "object" && "id" in e && "source" in e && "target" in e,
  sP = (e) =>
    !!e &&
    typeof e == "object" &&
    "id" in e &&
    "position" in e &&
    !("source" in e) &&
    !("target" in e),
  Hf = (e) =>
    !!e &&
    typeof e == "object" &&
    "id" in e &&
    "internals" in e &&
    !("source" in e) &&
    !("target" in e),
  _s = (e, t = [0, 0]) => {
    const { width: r, height: o } = bn(e),
      s = e.origin ?? t,
      u = r * s[0],
      l = o * s[1];
    return { x: e.position.x - u, y: e.position.y - l };
  },
  aP = (e, t = { nodeOrigin: [0, 0] }) => {
    if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
    const r = e.reduce(
      (o, s) => {
        const u = typeof s == "string";
        let l = !t.nodeLookup && !u ? s : void 0;
        t.nodeLookup &&
          (l = u ? t.nodeLookup.get(s) : Hf(s) ? s : t.nodeLookup.get(s.id));
        const d = l ? zl(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
        return nu(o, d);
      },
      { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
    );
    return ru(r);
  },
  js = (e, t = {}) => {
    let r = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
      o = !1;
    return (
      e.forEach((s) => {
        (t.filter === void 0 || t.filter(s)) && ((r = nu(r, zl(s))), (o = !0));
      }),
      o ? ru(r) : { x: 0, y: 0, width: 0, height: 0 }
    );
  },
  Uf = (e, t, [r, o, s] = [0, 0, 1], u = !1, l = !1) => {
    const d = (t.x - r) / s,
      p = (t.y - o) / s,
      f = t.width / s,
      h = t.height / s,
      g = [];
    for (const y of e.values()) {
      const { measured: S, selectable: x = !0, hidden: P = !1 } = y;
      if ((l && !x) || P) continue;
      const C = S.width ?? y.width ?? y.initialWidth ?? 0,
        T = S.height ?? y.height ?? y.initialHeight ?? 0,
        { x: N, y: k } = y.internals.positionAbsolute,
        M = Nv(d, p, f, h, N, k, C, T),
        I = C * T,
        b = u && M > 0;
      (!y.internals.handleBounds || b || M >= I || y.dragging) && g.push(y);
    }
    return g;
  },
  lP = (e, t) => {
    const r = new Set();
    return (
      e.forEach((o) => {
        r.add(o.id);
      }),
      t.filter((o) => r.has(o.source) || r.has(o.target))
    );
  };
function uP(e, t) {
  const r = new Map(),
    o = t?.nodes ? new Set(t.nodes.map((s) => s.id)) : null;
  return (
    e.forEach((s) => {
      let u;
      if (t?.includeHiddenNodes) {
        const { width: l, height: d } = bn(s);
        u = l > 0 && d > 0;
      } else u = !!(s.measured.width && s.measured.height && !s.hidden);
      u && (!o || o.has(s.id)) && r.set(s.id, s);
    }),
    r
  );
}
async function cP(
  { nodes: e, width: t, height: r, panZoom: o, minZoom: s, maxZoom: u },
  l,
) {
  if (e.size === 0) return !0;
  const d = uP(e, l),
    p = js(d),
    f = Gf(p, t, r, l?.minZoom ?? s, l?.maxZoom ?? u, l?.padding ?? 0.1);
  return (
    await o.setViewport(f, {
      duration: l?.duration,
      ease: l?.ease,
      interpolate: l?.interpolate,
    }),
    !0
  );
}
function Pv({
  nodeId: e,
  nextPosition: t,
  nodeLookup: r,
  nodeOrigin: o = [0, 0],
  nodeExtent: s,
  onError: u,
}) {
  const l = r.get(e),
    d = l.parentId ? r.get(l.parentId) : void 0,
    { x: p, y: f } = d ? d.internals.positionAbsolute : { x: 0, y: 0 },
    h = l.origin ?? o;
  let g = l.extent || s;
  if (l.extent === "parent" && !l.expandParent)
    if (!d) u?.("005", dn.error005());
    else {
      const S = d.measured.width,
        x = d.measured.height;
      S &&
        x &&
        (g = [
          [p, f],
          [p + S, f + x],
        ]);
    }
  else
    d &&
      ii(l.extent) &&
      (g = [
        [l.extent[0][0] + p, l.extent[0][1] + f],
        [l.extent[1][0] + p, l.extent[1][1] + f],
      ]);
  const y = ii(g) ? ri(t, g, l.measured) : t;
  return (
    (l.measured.width === void 0 || l.measured.height === void 0) &&
      u?.("015", dn.error015()),
    {
      position: {
        x: y.x - p + (l.measured.width ?? 0) * h[0],
        y: y.y - f + (l.measured.height ?? 0) * h[1],
      },
      positionAbsolute: y,
    }
  );
}
async function dP({
  nodesToRemove: e = [],
  edgesToRemove: t = [],
  nodes: r,
  edges: o,
  onBeforeDelete: s,
}) {
  const u = new Set(e.map((y) => y.id)),
    l = [];
  for (const y of r) {
    if (y.deletable === !1) continue;
    const S = u.has(y.id),
      x = !S && y.parentId && l.find((P) => P.id === y.parentId);
    (S || x) && l.push(y);
  }
  const d = new Set(t.map((y) => y.id)),
    p = o.filter((y) => y.deletable !== !1),
    h = lP(l, p);
  for (const y of p) d.has(y.id) && !h.find((x) => x.id === y.id) && h.push(y);
  if (!s) return { edges: h, nodes: l };
  const g = await s({ nodes: l, edges: h });
  return typeof g == "boolean"
    ? g
      ? { edges: h, nodes: l }
      : { edges: [], nodes: [] }
    : g;
}
const eo = (e, t = 0, r = 1) => Math.min(Math.max(e, t), r),
  ri = (e = { x: 0, y: 0 }, t, r) => ({
    x: eo(e.x, t[0][0], t[1][0] - (r?.width ?? 0)),
    y: eo(e.y, t[0][1], t[1][1] - (r?.height ?? 0)),
  });
function Tv(e, t, r) {
  const { width: o, height: s } = bn(r),
    { x: u, y: l } = r.internals.positionAbsolute;
  return ri(
    e,
    [
      [u, l],
      [u + o, l + s],
    ],
    t,
  );
}
const jg = (e, t, r) =>
    e < t
      ? eo(Math.abs(e - t), 1, t) / t
      : e > r
        ? -eo(Math.abs(e - r), 1, t) / t
        : 0,
  Wf = (e, t, r = 15, o = 40) => {
    const s = jg(e.x, o, t.width - o) * r,
      u = jg(e.y, o, t.height - o) * r;
    return [s, u];
  },
  nu = (e, t) => ({
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2),
  }),
  Qd = ({ x: e, y: t, width: r, height: o }) => ({
    x: e,
    y: t,
    x2: e + r,
    y2: t + o,
  }),
  ru = ({ x: e, y: t, x2: r, y2: o }) => ({
    x: e,
    y: t,
    width: r - e,
    height: o - t,
  }),
  ws = (e, t = [0, 0]) => {
    const { x: r, y: o } = Hf(e) ? e.internals.positionAbsolute : _s(e, t);
    return {
      x: r,
      y: o,
      width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
      height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
    };
  },
  zl = (e, t = [0, 0]) => {
    const { x: r, y: o } = Hf(e) ? e.internals.positionAbsolute : _s(e, t);
    return {
      x: r,
      y: o,
      x2: r + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
      y2: o + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0),
    };
  },
  Mv = (e, t) => ru(nu(Qd(e), Qd(t))),
  Nv = (e, t, r, o, s, u, l, d) => {
    const p = Math.max(0, Math.min(e + r, s + l) - Math.max(e, s)),
      f = Math.max(0, Math.min(t + o, u + d) - Math.max(t, u));
    return Math.ceil(p * f);
  },
  Ol = (e, t) => Nv(e.x, e.y, e.width, e.height, t.x, t.y, t.width, t.height),
  Ag = (e) => ln(e.width) && ln(e.height) && ln(e.x) && ln(e.y),
  ln = (e) => !isNaN(e) && isFinite(e),
  bv = (e, t) => (r, o) => {},
  As = (e, t = [1, 1]) => ({
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1]),
  }),
  Is = ({ x: e, y: t }, [r, o, s], u = !1, l = [1, 1]) => {
    const d = { x: (e - r) / s, y: (t - o) / s };
    return u ? As(d, l) : d;
  },
  to = ({ x: e, y: t }, [r, o, s]) => ({ x: e * s + r, y: t * s + o });
function Vi(e, t) {
  if (typeof e == "number") return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const r = parseFloat(e);
    if (!Number.isNaN(r)) return Math.floor(r);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const r = parseFloat(e);
    if (!Number.isNaN(r)) return Math.floor(t * r * 0.01);
  }
  return (
    console.error(
      `The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`,
    ),
    0
  );
}
function fP(e, t, r) {
  if (typeof e == "string" || typeof e == "number") {
    const o = Vi(e, r),
      s = Vi(e, t);
    return { top: o, right: s, bottom: o, left: s, x: s * 2, y: o * 2 };
  }
  if (typeof e == "object") {
    const o = Vi(e.top ?? e.y ?? 0, r),
      s = Vi(e.bottom ?? e.y ?? 0, r),
      u = Vi(e.left ?? e.x ?? 0, t),
      l = Vi(e.right ?? e.x ?? 0, t);
    return { top: o, right: l, bottom: s, left: u, x: u + l, y: o + s };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function hP(e, t, r, o, s, u) {
  const { x: l, y: d } = to(e, [t, r, o]),
    { x: p, y: f } = to({ x: e.x + e.width, y: e.y + e.height }, [t, r, o]),
    h = s - p,
    g = u - f;
  return {
    left: Math.floor(l),
    top: Math.floor(d),
    right: Math.floor(h),
    bottom: Math.floor(g),
  };
}
const Gf = (e, t, r, o, s, u) => {
    const l = fP(u, t, r),
      d = (t - l.x) / e.width,
      p = (r - l.y) / e.height,
      f = Math.min(d, p),
      h = eo(f, o, s),
      g = e.x + e.width / 2,
      y = e.y + e.height / 2,
      S = t / 2 - g * h,
      x = r / 2 - y * h,
      P = hP(e, S, x, h, t, r),
      C = {
        left: Math.min(P.left - l.left, 0),
        top: Math.min(P.top - l.top, 0),
        right: Math.min(P.right - l.right, 0),
        bottom: Math.min(P.bottom - l.bottom, 0),
      };
    return { x: S - C.left + C.right, y: x - C.top + C.bottom, zoom: h };
  },
  Ss = () =>
    typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function ii(e) {
  return e != null && e !== "parent";
}
function bn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
  };
}
function _v(e) {
  return (
    (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 &&
    (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0
  );
}
function jv(e, t = { width: 0, height: 0 }, r, o, s) {
  const u = { ...e },
    l = o.get(r);
  if (l) {
    const d = l.origin || s;
    ((u.x += l.internals.positionAbsolute.x - (t.width ?? 0) * d[0]),
      (u.y += l.internals.positionAbsolute.y - (t.height ?? 0) * d[1]));
  }
  return u;
}
function Ig(e, t) {
  if (e.size !== t.size) return !1;
  for (const r of e) if (!t.has(r)) return !1;
  return !0;
}
function pP() {
  let e, t;
  return {
    promise: new Promise((o, s) => {
      ((e = o), (t = s));
    }),
    resolve: e,
    reject: t,
  };
}
function mP(e) {
  return { ...Sv, ...(e || {}) };
}
function us(
  e,
  {
    snapGrid: t = [0, 0],
    snapToGrid: r = !1,
    transform: o,
    containerBounds: s,
  },
) {
  const { x: u, y: l } = un(e),
    d = Is({ x: u - (s?.left ?? 0), y: l - (s?.top ?? 0) }, o),
    { x: p, y: f } = r ? As(d, t) : d;
  return { xSnapped: p, ySnapped: f, ...d };
}
const Xf = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
  Av = (e) => e?.getRootNode?.() || window?.document,
  gP = ["INPUT", "SELECT", "TEXTAREA"];
function Iv(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1
    ? !1
    : gP.includes(t.nodeName) ||
        t.hasAttribute("contenteditable") ||
        !!t.closest(".nokey");
}
const Dv = (e) => "clientX" in e,
  un = (e, t) => {
    const r = Dv(e),
      o = r ? e.clientX : e.touches?.[0].clientX,
      s = r ? e.clientY : e.touches?.[0].clientY;
    return { x: o - (t?.left ?? 0), y: s - (t?.top ?? 0) };
  },
  Dg = (e, t, r, o, s) => {
    const u = t.querySelectorAll(`.${e}`);
    return !u || !u.length
      ? null
      : Array.from(u).map((l) => {
          const d = l.getBoundingClientRect();
          return {
            id: l.getAttribute("data-handleid"),
            type: e,
            nodeId: s,
            position: l.getAttribute("data-handlepos"),
            x: (d.left - r.left) / o,
            y: (d.top - r.top) / o,
            ...Xf(l),
          };
        });
  };
function Rv({
  sourceX: e,
  sourceY: t,
  targetX: r,
  targetY: o,
  sourceControlX: s,
  sourceControlY: u,
  targetControlX: l,
  targetControlY: d,
}) {
  const p = e * 0.125 + s * 0.375 + l * 0.375 + r * 0.125,
    f = t * 0.125 + u * 0.375 + d * 0.375 + o * 0.125,
    h = Math.abs(p - e),
    g = Math.abs(f - t);
  return [p, f, h, g];
}
function al(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Rg({ pos: e, x1: t, y1: r, x2: o, y2: s, c: u }) {
  switch (e) {
    case we.Left:
      return [t - al(t - o, u), r];
    case we.Right:
      return [t + al(o - t, u), r];
    case we.Top:
      return [t, r - al(r - s, u)];
    case we.Bottom:
      return [t, r + al(s - r, u)];
  }
}
function Yf({
  sourceX: e,
  sourceY: t,
  sourcePosition: r = we.Bottom,
  targetX: o,
  targetY: s,
  targetPosition: u = we.Top,
  curvature: l = 0.25,
}) {
  const [d, p] = Rg({ pos: r, x1: e, y1: t, x2: o, y2: s, c: l }),
    [f, h] = Rg({ pos: u, x1: o, y1: s, x2: e, y2: t, c: l }),
    [g, y, S, x] = Rv({
      sourceX: e,
      sourceY: t,
      targetX: o,
      targetY: s,
      sourceControlX: d,
      sourceControlY: p,
      targetControlX: f,
      targetControlY: h,
    });
  return [`M${e},${t} C${d},${p} ${f},${h} ${o},${s}`, g, y, S, x];
}
function Lv({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const s = Math.abs(r - e) / 2,
    u = r < e ? r + s : r - s,
    l = Math.abs(o - t) / 2,
    d = o < t ? o + l : o - l;
  return [u, d, s, l];
}
function yP({
  sourceNode: e,
  targetNode: t,
  selected: r = !1,
  zIndex: o = 0,
  elevateOnSelect: s = !1,
  zIndexMode: u = "basic",
}) {
  if (u === "manual") return o;
  const l = s && r ? o + 1e3 : o,
    d = Math.max(
      e.parentId || (s && e.selected) ? e.internals.z : 0,
      t.parentId || (s && t.selected) ? t.internals.z : 0,
    );
  return l + d;
}
function vP({
  sourceNode: e,
  targetNode: t,
  width: r,
  height: o,
  transform: s,
}) {
  const u = nu(zl(e), zl(t));
  (u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1));
  const l = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: r / s[2],
    height: o / s[2],
  };
  return Ol(l, ru(u)) > 0;
}
const xP = ({ source: e, sourceHandle: t, target: r, targetHandle: o }) =>
    `xy-edge__${e}${t || ""}-${r}${o || ""}`,
  wP = (e, t) =>
    t.some(
      (r) =>
        r.source === e.source &&
        r.target === e.target &&
        (r.sourceHandle === e.sourceHandle ||
          (!r.sourceHandle && !e.sourceHandle)) &&
        (r.targetHandle === e.targetHandle ||
          (!r.targetHandle && !e.targetHandle)),
    ),
  SP = (e, t, r = {}) => {
    if (!e.source || !e.target) return (r.onError?.("006", dn.error006()), t);
    const o = r.getEdgeId || xP;
    let s;
    return (
      Cv(e) ? (s = { ...e }) : (s = { ...e, id: o(e) }),
      wP(s, t)
        ? t
        : (s.sourceHandle === null && delete s.sourceHandle,
          s.targetHandle === null && delete s.targetHandle,
          t.concat(s))
    );
  };
function Vv({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const [s, u, l, d] = Lv({ sourceX: e, sourceY: t, targetX: r, targetY: o });
  return [`M ${e},${t}L ${r},${o}`, s, u, l, d];
}
const Lg = {
    [we.Left]: { x: -1, y: 0 },
    [we.Right]: { x: 1, y: 0 },
    [we.Top]: { x: 0, y: -1 },
    [we.Bottom]: { x: 0, y: 1 },
  },
  kP = ({ source: e, sourcePosition: t = we.Bottom, target: r }) =>
    t === we.Left || t === we.Right
      ? e.x < r.x
        ? { x: 1, y: 0 }
        : { x: -1, y: 0 }
      : e.y < r.y
        ? { x: 0, y: 1 }
        : { x: 0, y: -1 },
  Vg = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function EP({
  source: e,
  sourcePosition: t = we.Bottom,
  target: r,
  targetPosition: o = we.Top,
  center: s,
  offset: u,
  stepPosition: l,
}) {
  const d = Lg[t],
    p = Lg[o],
    f = { x: e.x + d.x * u, y: e.y + d.y * u },
    h = { x: r.x + p.x * u, y: r.y + p.y * u },
    g = kP({ source: f, sourcePosition: t, target: h }),
    y = g.x !== 0 ? "x" : "y",
    S = g[y];
  let x = [],
    P,
    C;
  const T = { x: 0, y: 0 },
    N = { x: 0, y: 0 },
    [, , k, M] = Lv({ sourceX: e.x, sourceY: e.y, targetX: r.x, targetY: r.y });
  if (d[y] * p[y] === -1) {
    y === "x"
      ? ((P = s.x ?? f.x + (h.x - f.x) * l), (C = s.y ?? (f.y + h.y) / 2))
      : ((P = s.x ?? (f.x + h.x) / 2), (C = s.y ?? f.y + (h.y - f.y) * l));
    const V = [
        { x: P, y: f.y },
        { x: P, y: h.y },
      ],
      U = [
        { x: f.x, y: C },
        { x: h.x, y: C },
      ];
    d[y] === S ? (x = y === "x" ? V : U) : (x = y === "x" ? U : V);
  } else {
    const V = [{ x: f.x, y: h.y }],
      U = [{ x: h.x, y: f.y }];
    if (
      (y === "x" ? (x = d.x === S ? U : V) : (x = d.y === S ? V : U), t === o)
    ) {
      const j = Math.abs(e[y] - r[y]);
      if (j <= u) {
        const H = Math.min(u - 1, u - j);
        d[y] === S
          ? (T[y] = (f[y] > e[y] ? -1 : 1) * H)
          : (N[y] = (h[y] > r[y] ? -1 : 1) * H);
      }
    }
    if (t !== o) {
      const j = y === "x" ? "y" : "x",
        H = d[y] === p[j],
        F = f[j] > h[j],
        W = f[j] < h[j];
      ((d[y] === 1 && ((!H && F) || (H && W))) ||
        (d[y] !== 1 && ((!H && W) || (H && F)))) &&
        (x = y === "x" ? V : U);
    }
    const K = { x: f.x + T.x, y: f.y + T.y },
      Z = { x: h.x + N.x, y: h.y + N.y },
      ee = Math.max(Math.abs(K.x - x[0].x), Math.abs(Z.x - x[0].x)),
      J = Math.max(Math.abs(K.y - x[0].y), Math.abs(Z.y - x[0].y));
    ee >= J
      ? ((P = (K.x + Z.x) / 2), (C = x[0].y))
      : ((P = x[0].x), (C = (K.y + Z.y) / 2));
  }
  const I = { x: f.x + T.x, y: f.y + T.y },
    b = { x: h.x + N.x, y: h.y + N.y };
  return [
    [
      e,
      ...(I.x !== x[0].x || I.y !== x[0].y ? [I] : []),
      ...x,
      ...(b.x !== x[x.length - 1].x || b.y !== x[x.length - 1].y ? [b] : []),
      r,
    ],
    P,
    C,
    k,
    M,
  ];
}
function CP(e, t, r, o) {
  const s = Math.min(Vg(e, t) / 2, Vg(t, r) / 2, o),
    { x: u, y: l } = t;
  if ((e.x === u && u === r.x) || (e.y === l && l === r.y)) return `L${u} ${l}`;
  if (e.y === l) {
    const f = e.x < r.x ? -1 : 1,
      h = e.y < r.y ? 1 : -1;
    return `L ${u + s * f},${l}Q ${u},${l} ${u},${l + s * h}`;
  }
  const d = e.x < r.x ? 1 : -1,
    p = e.y < r.y ? -1 : 1;
  return `L ${u},${l + s * p}Q ${u},${l} ${u + s * d},${l}`;
}
function Jd({
  sourceX: e,
  sourceY: t,
  sourcePosition: r = we.Bottom,
  targetX: o,
  targetY: s,
  targetPosition: u = we.Top,
  borderRadius: l = 5,
  centerX: d,
  centerY: p,
  offset: f = 20,
  stepPosition: h = 0.5,
}) {
  const [g, y, S, x, P] = EP({
    source: { x: e, y: t },
    sourcePosition: r,
    target: { x: o, y: s },
    targetPosition: u,
    center: { x: d, y: p },
    offset: f,
    stepPosition: h,
  });
  let C = `M${g[0].x} ${g[0].y}`;
  for (let T = 1; T < g.length - 1; T++) C += CP(g[T - 1], g[T], g[T + 1], l);
  return ((C += `L${g[g.length - 1].x} ${g[g.length - 1].y}`), [C, y, S, x, P]);
}
function zg(e) {
  return (
    e &&
    !!(e.internals.handleBounds || e.handles?.length) &&
    !!(e.measured.width || e.width || e.initialWidth)
  );
}
function PP(e) {
  const { sourceNode: t, targetNode: r } = e;
  if (!zg(t) || !zg(r)) return null;
  const o = t.internals.handleBounds || Og(t.handles),
    s = r.internals.handleBounds || Og(r.handles),
    u = Fg(o?.source ?? [], e.sourceHandle),
    l = Fg(
      e.connectionMode === ni.Strict
        ? (s?.target ?? [])
        : (s?.target ?? []).concat(s?.source ?? []),
      e.targetHandle,
    );
  if (!u || !l)
    return (
      e.onError?.(
        "008",
        dn.error008(u ? "target" : "source", {
          id: e.id,
          sourceHandle: e.sourceHandle,
          targetHandle: e.targetHandle,
        }),
      ),
      null
    );
  const d = u?.position || we.Bottom,
    p = l?.position || we.Top,
    f = oi(t, u, d),
    h = oi(r, l, p);
  return {
    sourceX: f.x,
    sourceY: f.y,
    targetX: h.x,
    targetY: h.y,
    sourcePosition: d,
    targetPosition: p,
  };
}
function Og(e) {
  if (!e) return null;
  const t = [],
    r = [];
  for (const o of e)
    ((o.width = o.width ?? 1),
      (o.height = o.height ?? 1),
      o.type === "source" ? t.push(o) : o.type === "target" && r.push(o));
  return { source: t, target: r };
}
function oi(e, t, r = we.Left, o = !1) {
  const s = (t?.x ?? 0) + e.internals.positionAbsolute.x,
    u = (t?.y ?? 0) + e.internals.positionAbsolute.y,
    { width: l, height: d } = t ?? bn(e);
  if (o) return { x: s + l / 2, y: u + d / 2 };
  switch (t?.position ?? r) {
    case we.Top:
      return { x: s + l / 2, y: u };
    case we.Right:
      return { x: s + l, y: u + d / 2 };
    case we.Bottom:
      return { x: s + l / 2, y: u + d };
    case we.Left:
      return { x: s, y: u + d / 2 };
  }
}
function Fg(e, t) {
  return (e && (t ? e.find((r) => r.id === t) : e[0])) || null;
}
function ef(e, t) {
  return e
    ? typeof e == "string"
      ? e
      : `${t ? `${t}__` : ""}${Object.keys(e)
          .sort()
          .map((o) => `${o}=${e[o]}`)
          .join("&")}`
    : "";
}
function TP(
  e,
  { id: t, defaultColor: r, defaultMarkerStart: o, defaultMarkerEnd: s },
) {
  const u = new Set();
  return e
    .reduce(
      (l, d) => (
        [d.markerStart || o, d.markerEnd || s].forEach((p) => {
          if (p && typeof p == "object") {
            const f = ef(p, t);
            u.has(f) ||
              (l.push({ id: f, color: p.color || r, ...p }), u.add(f));
          }
        }),
        l
      ),
      [],
    )
    .sort((l, d) => l.id.localeCompare(d.id));
}
const zv = 1e3,
  MP = 10,
  Kf = {
    nodeOrigin: [0, 0],
    nodeExtent: xs,
    elevateNodesOnSelect: !0,
    zIndexMode: "basic",
    defaults: {},
  },
  NP = { ...Kf, checkEquality: !0 };
function Zf(e, t) {
  const r = { ...e };
  for (const o in t) t[o] !== void 0 && (r[o] = t[o]);
  return r;
}
function bP(e, t, r) {
  const o = Zf(Kf, r);
  for (const s of e.values())
    if (s.parentId) Qf(s, e, t, o);
    else {
      const u = _s(s, o.nodeOrigin),
        l = ii(s.extent) ? s.extent : o.nodeExtent,
        d = ri(u, l, bn(s));
      s.internals.positionAbsolute = d;
    }
}
function _P(e, t) {
  if (!e.handles) return e.measured ? t?.internals.handleBounds : void 0;
  const r = [],
    o = [];
  for (const s of e.handles) {
    const u = {
      id: s.id,
      width: s.width ?? 1,
      height: s.height ?? 1,
      nodeId: e.id,
      x: s.x,
      y: s.y,
      position: s.position,
      type: s.type,
    };
    s.type === "source" ? r.push(u) : s.type === "target" && o.push(u);
  }
  return { source: r, target: o };
}
function qf(e) {
  return e === "manual";
}
function tf(e, t, r, o = {}) {
  const s = Zf(NP, o),
    u = { i: 0 },
    l = new Map(t),
    d = s?.elevateNodesOnSelect && !qf(s.zIndexMode) ? zv : 0;
  let p = e.length > 0,
    f = !1;
  (t.clear(), r.clear());
  for (const h of e) {
    let g = l.get(h.id);
    if (s.checkEquality && h === g?.internals.userNode) t.set(h.id, g);
    else {
      const y = _s(h, s.nodeOrigin),
        S = ii(h.extent) ? h.extent : s.nodeExtent,
        x = ri(y, S, bn(h));
      ((g = {
        ...s.defaults,
        ...h,
        measured: { width: h.measured?.width, height: h.measured?.height },
        internals: {
          positionAbsolute: x,
          handleBounds: _P(h, g),
          z: Ov(h, d, s.zIndexMode),
          userNode: h,
        },
      }),
        t.set(h.id, g));
    }
    ((g.measured === void 0 ||
      g.measured.width === void 0 ||
      g.measured.height === void 0) &&
      !g.hidden &&
      (p = !1),
      h.parentId && Qf(g, t, r, o, u),
      (f ||= h.selected ?? !1));
  }
  return { nodesInitialized: p, hasSelectedNodes: f };
}
function jP(e, t) {
  if (!e.parentId) return;
  const r = t.get(e.parentId);
  r ? r.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
}
function Qf(e, t, r, o, s) {
  const {
      elevateNodesOnSelect: u,
      nodeOrigin: l,
      nodeExtent: d,
      zIndexMode: p,
    } = Zf(Kf, o),
    f = e.parentId,
    h = t.get(f);
  if (!h) {
    console.warn(
      `Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
    );
    return;
  }
  (jP(e, r),
    s &&
      !h.parentId &&
      h.internals.rootParentIndex === void 0 &&
      p === "auto" &&
      ((h.internals.rootParentIndex = ++s.i),
      (h.internals.z = h.internals.z + s.i * MP)),
    s &&
      h.internals.rootParentIndex !== void 0 &&
      (s.i = h.internals.rootParentIndex));
  const g = u && !qf(p) ? zv : 0,
    { x: y, y: S, z: x } = AP(e, h, l, d, g, p),
    { positionAbsolute: P } = e.internals,
    C = y !== P.x || S !== P.y;
  (C || x !== e.internals.z) &&
    t.set(e.id, {
      ...e,
      internals: {
        ...e.internals,
        positionAbsolute: C ? { x: y, y: S } : P,
        z: x,
      },
    });
}
function Ov(e, t, r) {
  const o = ln(e.zIndex) ? e.zIndex : 0;
  return qf(r) ? o : o + (e.selected ? t : 0);
}
function AP(e, t, r, o, s, u) {
  const { x: l, y: d } = t.internals.positionAbsolute,
    p = bn(e),
    f = _s(e, r),
    h = ii(e.extent) ? ri(f, e.extent, p) : f;
  let g = ri({ x: l + h.x, y: d + h.y }, o, p);
  e.extent === "parent" && (g = Tv(g, p, t));
  const y = Ov(e, s, u),
    S = t.internals.z ?? 0;
  return { x: g.x, y: g.y, z: S >= y ? S + 1 : y };
}
function Jf(e, t, r, o = [0, 0]) {
  const s = [],
    u = new Map();
  for (const l of e) {
    const d = t.get(l.parentId);
    if (!d) continue;
    const p = u.get(l.parentId)?.expandedRect ?? ws(d),
      f = Mv(p, l.rect);
    u.set(l.parentId, { expandedRect: f, parent: d });
  }
  return (
    u.size > 0 &&
      u.forEach(({ expandedRect: l, parent: d }, p) => {
        const f = d.internals.positionAbsolute,
          h = bn(d),
          g = d.origin ?? o,
          y = l.x < f.x ? Math.round(Math.abs(f.x - l.x)) : 0,
          S = l.y < f.y ? Math.round(Math.abs(f.y - l.y)) : 0,
          x = Math.max(h.width, Math.round(l.width)),
          P = Math.max(h.height, Math.round(l.height)),
          C = (x - h.width) * g[0],
          T = (P - h.height) * g[1];
        ((y > 0 || S > 0 || C || T) &&
          (s.push({
            id: p,
            type: "position",
            position: { x: d.position.x - y + C, y: d.position.y - S + T },
          }),
          r.get(p)?.forEach((N) => {
            e.some((k) => k.id === N.id) ||
              s.push({
                id: N.id,
                type: "position",
                position: { x: N.position.x + y, y: N.position.y + S },
              });
          })),
          (h.width < l.width || h.height < l.height || y || S) &&
            s.push({
              id: p,
              type: "dimensions",
              setAttributes: !0,
              dimensions: {
                width: x + (y ? g[0] * y - C : 0),
                height: P + (S ? g[1] * S - T : 0),
              },
            }));
      }),
    s
  );
}
function IP(e, t, r, o, s, u, l) {
  const d = o?.querySelector(".xyflow__viewport");
  let p = !1;
  if (!d) return { changes: [], updatedInternals: p };
  const f = [],
    h = window.getComputedStyle(d),
    { m22: g } = new window.DOMMatrixReadOnly(h.transform),
    y = [];
  for (const S of e.values()) {
    const x = t.get(S.id);
    if (!x) continue;
    if (x.hidden) {
      (t.set(x.id, {
        ...x,
        internals: { ...x.internals, handleBounds: void 0 },
      }),
        (p = !0));
      continue;
    }
    const P = Xf(S.nodeElement),
      C = x.measured.width !== P.width || x.measured.height !== P.height;
    if (
      !!(P.width && P.height && (C || !x.internals.handleBounds || S.force))
    ) {
      const N = S.nodeElement.getBoundingClientRect(),
        k = ii(x.extent) ? x.extent : u;
      let { positionAbsolute: M } = x.internals;
      if (x.parentId && x.extent === "parent") {
        const b = t.get(x.parentId);
        b && (M = Tv(M, P, b));
      } else k && (M = ri(M, k, P));
      const I = {
        ...x,
        measured: P,
        internals: {
          ...x.internals,
          positionAbsolute: M,
          handleBounds: {
            source: Dg("source", S.nodeElement, N, g, x.id),
            target: Dg("target", S.nodeElement, N, g, x.id),
          },
        },
      };
      (t.set(x.id, I),
        x.parentId && Qf(I, t, r, { nodeOrigin: s, zIndexMode: l }),
        (p = !0),
        C &&
          (f.push({ id: x.id, type: "dimensions", dimensions: P }),
          x.expandParent &&
            x.parentId &&
            y.push({ id: x.id, parentId: x.parentId, rect: ws(I, s) })));
    }
  }
  if (y.length > 0) {
    const S = Jf(y, t, r, s);
    f.push(...S);
  }
  return { changes: f, updatedInternals: p };
}
async function DP({
  delta: e,
  panZoom: t,
  transform: r,
  translateExtent: o,
  width: s,
  height: u,
}) {
  if (!t || (!e.x && !e.y)) return !1;
  const l = await t.setViewportConstrained(
    { x: r[0] + e.x, y: r[1] + e.y, zoom: r[2] },
    [
      [0, 0],
      [s, u],
    ],
    o,
  );
  return !!l && (l.x !== r[0] || l.y !== r[1] || l.k !== r[2]);
}
function $g(e, t, r, o, s, u) {
  let l = s;
  const d = o.get(l) || new Map();
  (o.set(l, d.set(r, t)), (l = `${s}-${e}`));
  const p = o.get(l) || new Map();
  if ((o.set(l, p.set(r, t)), u)) {
    l = `${s}-${e}-${u}`;
    const f = o.get(l) || new Map();
    o.set(l, f.set(r, t));
  }
}
function Fv(e, t, r) {
  (e.clear(), t.clear());
  for (const o of r) {
    const {
        source: s,
        target: u,
        sourceHandle: l = null,
        targetHandle: d = null,
      } = o,
      p = {
        edgeId: o.id,
        source: s,
        target: u,
        sourceHandle: l,
        targetHandle: d,
      },
      f = `${s}-${l}--${u}-${d}`,
      h = `${u}-${d}--${s}-${l}`;
    ($g("source", p, h, e, s, l), $g("target", p, f, e, u, d), t.set(o.id, o));
  }
}
function $v(e, t) {
  if (!e.parentId) return !1;
  const r = t.get(e.parentId);
  return r ? (r.selected ? !0 : $v(r, t)) : !1;
}
function Bg(e, t, r) {
  let o = e;
  do {
    if (o?.matches?.(t)) return !0;
    if (o === r) return !1;
    o = o?.parentElement;
  } while (o);
  return !1;
}
function RP(e, t, r, o) {
  const s = new Map();
  for (const [u, l] of e)
    if (
      (l.selected || l.id === o) &&
      (!l.parentId || !$v(l, e)) &&
      (l.draggable || (t && typeof l.draggable > "u"))
    ) {
      const d = e.get(u);
      d &&
        s.set(u, {
          id: u,
          position: d.position || { x: 0, y: 0 },
          distance: {
            x: r.x - d.internals.positionAbsolute.x,
            y: r.y - d.internals.positionAbsolute.y,
          },
          extent: d.extent,
          parentId: d.parentId,
          origin: d.origin,
          expandParent: d.expandParent,
          internals: {
            positionAbsolute: d.internals.positionAbsolute || { x: 0, y: 0 },
          },
          measured: {
            width: d.measured.width ?? 0,
            height: d.measured.height ?? 0,
          },
        });
    }
  return s;
}
function vd({ nodeId: e, dragItems: t, nodeLookup: r, dragging: o = !0 }) {
  const s = [];
  for (const [l, d] of t) {
    const p = r.get(l)?.internals.userNode;
    p && s.push({ ...p, position: d.position, dragging: o });
  }
  if (!e) return [s[0], s];
  const u = r.get(e)?.internals.userNode;
  return [
    u
      ? { ...u, position: t.get(e)?.position || u.position, dragging: o }
      : s[0],
    s,
  ];
}
function LP({ dragItems: e, snapGrid: t, x: r, y: o }) {
  const s = e.values().next().value;
  if (!s) return null;
  const u = { x: r - s.distance.x, y: o - s.distance.y },
    l = As(u, t);
  return { x: l.x - u.x, y: l.y - u.y };
}
function VP({
  onNodeMouseDown: e,
  getStoreItems: t,
  onDragStart: r,
  onDrag: o,
  onDragStop: s,
}) {
  let u = { x: null, y: null },
    l = 0,
    d = new Map(),
    p = !1,
    f = { x: 0, y: 0 },
    h = null,
    g = !1,
    y = null,
    S = !1,
    x = !1,
    P = null;
  function C({
    noDragClassName: N,
    handleSelector: k,
    domNode: M,
    isSelectable: I,
    nodeId: b,
    nodeClickDistance: R = 0,
  }) {
    y = Vt(M);
    function V({ x: ee, y: J }) {
      const {
        nodeLookup: j,
        nodeExtent: H,
        snapGrid: F,
        snapToGrid: W,
        nodeOrigin: L,
        onNodeDrag: $,
        onSelectionDrag: G,
        onError: _,
        updateNodePositions: O,
      } = t();
      u = { x: ee, y: J };
      let oe = !1;
      const re = d.size > 1,
        le = re && H ? Qd(js(d)) : null,
        ce = re && W ? LP({ dragItems: d, snapGrid: F, x: ee, y: J }) : null;
      for (const [ue, Q] of d) {
        if (!j.has(ue)) continue;
        let ae = { x: ee - Q.distance.x, y: J - Q.distance.y };
        W &&
          (ae = ce
            ? { x: Math.round(ae.x + ce.x), y: Math.round(ae.y + ce.y) }
            : As(ae, F));
        let ke = null;
        if (re && H && !Q.extent && le) {
          const { positionAbsolute: Se } = Q.internals,
            Me = Se.x - le.x + H[0][0],
            be = Se.x + Q.measured.width - le.x2 + H[1][0],
            De = Se.y - le.y + H[0][1],
            Qe = Se.y + Q.measured.height - le.y2 + H[1][1];
          ke = [
            [Me, De],
            [be, Qe],
          ];
        }
        const { position: Pe, positionAbsolute: xe } = Pv({
          nodeId: ue,
          nextPosition: ae,
          nodeLookup: j,
          nodeExtent: ke || H,
          nodeOrigin: L,
          onError: _,
        });
        ((oe = oe || Q.position.x !== Pe.x || Q.position.y !== Pe.y),
          (Q.position = Pe),
          (Q.internals.positionAbsolute = xe));
      }
      if (((x = x || oe), !!oe && (O(d, !0), P && (o || $ || (!b && G))))) {
        const [ue, Q] = vd({ nodeId: b, dragItems: d, nodeLookup: j });
        (o?.(P, d, ue, Q), $?.(P, ue, Q), b || G?.(P, Q));
      }
    }
    async function U() {
      if (!h) return;
      const {
        transform: ee,
        panBy: J,
        autoPanSpeed: j,
        autoPanOnNodeDrag: H,
      } = t();
      if (!H) {
        ((p = !1), cancelAnimationFrame(l));
        return;
      }
      const [F, W] = Wf(f, h, j);
      ((F !== 0 || W !== 0) &&
        ((u.x = (u.x ?? 0) - F / ee[2]),
        (u.y = (u.y ?? 0) - W / ee[2]),
        (await J({ x: F, y: W })) && V(u)),
        (l = requestAnimationFrame(U)));
    }
    function K(ee) {
      const {
        nodeLookup: J,
        multiSelectionActive: j,
        nodesDraggable: H,
        transform: F,
        snapGrid: W,
        snapToGrid: L,
        selectNodesOnDrag: $,
        onNodeDragStart: G,
        onSelectionDragStart: _,
        unselectNodesAndEdges: O,
      } = t();
      ((g = !0),
        (!$ || !I) && !j && b && (J.get(b)?.selected || O()),
        I && $ && b && e?.(b));
      const oe = us(ee.sourceEvent, {
        transform: F,
        snapGrid: W,
        snapToGrid: L,
        containerBounds: h,
      });
      if (
        ((u = oe), (d = RP(J, H, oe, b)), d.size > 0 && (r || G || (!b && _)))
      ) {
        const [re, le] = vd({ nodeId: b, dragItems: d, nodeLookup: J });
        (r?.(ee.sourceEvent, d, re, le),
          G?.(ee.sourceEvent, re, le),
          b || _?.(ee.sourceEvent, le));
      }
    }
    const Z = iv()
      .clickDistance(R)
      .on("start", (ee) => {
        const {
          domNode: J,
          nodeDragThreshold: j,
          transform: H,
          snapGrid: F,
          snapToGrid: W,
        } = t();
        ((h = J?.getBoundingClientRect() || null),
          (S = !1),
          (x = !1),
          (P = ee.sourceEvent),
          j === 0 && K(ee),
          (u = us(ee.sourceEvent, {
            transform: H,
            snapGrid: F,
            snapToGrid: W,
            containerBounds: h,
          })),
          (f = un(ee.sourceEvent, h)));
      })
      .on("drag", (ee) => {
        const {
            autoPanOnNodeDrag: J,
            transform: j,
            snapGrid: H,
            snapToGrid: F,
            nodeDragThreshold: W,
            nodeLookup: L,
          } = t(),
          $ = us(ee.sourceEvent, {
            transform: j,
            snapGrid: H,
            snapToGrid: F,
            containerBounds: h,
          });
        if (
          ((P = ee.sourceEvent),
          ((ee.sourceEvent.type === "touchmove" &&
            ee.sourceEvent.touches.length > 1) ||
            (b && !L.has(b))) &&
            (S = !0),
          !S)
        ) {
          if ((!p && J && g && ((p = !0), U()), !g)) {
            const G = un(ee.sourceEvent, h),
              _ = G.x - f.x,
              O = G.y - f.y;
            Math.sqrt(_ * _ + O * O) > W && K(ee);
          }
          (u.x !== $.xSnapped || u.y !== $.ySnapped) &&
            d &&
            g &&
            ((f = un(ee.sourceEvent, h)), V($));
        }
      })
      .on("end", (ee) => {
        if (!g || S) {
          S && d.size > 0 && t().updateNodePositions(d, !1);
          return;
        }
        if (((p = !1), (g = !1), cancelAnimationFrame(l), d.size > 0)) {
          const {
            nodeLookup: J,
            updateNodePositions: j,
            onNodeDragStop: H,
            onSelectionDragStop: F,
          } = t();
          if ((x && (j(d, !1), (x = !1)), s || H || (!b && F))) {
            const [W, L] = vd({
              nodeId: b,
              dragItems: d,
              nodeLookup: J,
              dragging: !1,
            });
            (s?.(ee.sourceEvent, d, W, L),
              H?.(ee.sourceEvent, W, L),
              b || F?.(ee.sourceEvent, L));
          }
        }
      })
      .filter((ee) => {
        const J = ee.target;
        return !ee.button && (!N || !Bg(J, `.${N}`, M)) && (!k || Bg(J, k, M));
      });
    y.call(Z);
  }
  function T() {
    y?.on(".drag", null);
  }
  return { update: C, destroy: T };
}
function zP(e, t, r) {
  const o = [],
    s = { x: e.x - r, y: e.y - r, width: r * 2, height: r * 2 };
  for (const u of t.values()) Ol(s, ws(u)) > 0 && o.push(u);
  return o;
}
const OP = 250;
function FP(e, t, r, o) {
  let s = [],
    u = 1 / 0;
  const l = zP(e, r, t + OP);
  for (const d of l) {
    const p = [
      ...(d.internals.handleBounds?.source ?? []),
      ...(d.internals.handleBounds?.target ?? []),
    ];
    for (const f of p) {
      if (o.nodeId === f.nodeId && o.type === f.type && o.id === f.id) continue;
      const { x: h, y: g } = oi(d, f, f.position, !0),
        y = Math.sqrt(Math.pow(h - e.x, 2) + Math.pow(g - e.y, 2));
      y > t ||
        (y < u
          ? ((s = [{ ...f, x: h, y: g }]), (u = y))
          : y === u && s.push({ ...f, x: h, y: g }));
    }
  }
  if (!s.length) return null;
  if (s.length > 1) {
    const d = o.type === "source" ? "target" : "source";
    return s.find((p) => p.type === d) ?? s[0];
  }
  return s[0];
}
function Bv(e, t, r, o, s, u = !1) {
  const l = o.get(e);
  if (!l) return null;
  const d =
      s === "strict"
        ? l.internals.handleBounds?.[t]
        : [
            ...(l.internals.handleBounds?.source ?? []),
            ...(l.internals.handleBounds?.target ?? []),
          ],
    p = (r ? d?.find((f) => f.id === r) : d?.[0]) ?? null;
  return p && u ? { ...p, ...oi(l, p, p.position, !0) } : p;
}
function Hv(e, t) {
  return (
    e ||
    (t?.classList.contains("target")
      ? "target"
      : t?.classList.contains("source")
        ? "source"
        : null)
  );
}
function $P(e, t) {
  let r = null;
  return (t ? (r = !0) : e && !t && (r = !1), r);
}
const Uv = () => !0;
function BP(
  e,
  {
    connectionMode: t,
    connectionRadius: r,
    handleId: o,
    nodeId: s,
    edgeUpdaterType: u,
    isTarget: l,
    domNode: d,
    nodeLookup: p,
    lib: f,
    autoPanOnConnect: h,
    flowId: g,
    panBy: y,
    cancelConnection: S,
    onConnectStart: x,
    onConnect: P,
    onConnectEnd: C,
    isValidConnection: T = Uv,
    onReconnectEnd: N,
    updateConnection: k,
    getTransform: M,
    getFromHandle: I,
    autoPanSpeed: b,
    dragThreshold: R = 1,
    handleDomNode: V,
  },
) {
  const U = Av(e.target);
  let K = 0,
    Z;
  const { x: ee, y: J } = un(e),
    j = Hv(u, V),
    H = d?.getBoundingClientRect();
  let F = !1;
  if (!H || !j) return;
  const W = Bv(s, j, o, p, t);
  if (!W) return;
  let L = un(e, H),
    $ = !1,
    G = null,
    _ = !1,
    O = null;
  function oe() {
    if (!h || !H) return;
    const [Pe, xe] = Wf(L, H, b);
    (y({ x: Pe, y: xe }), (K = requestAnimationFrame(oe)));
  }
  const re = { ...W, nodeId: s, type: j, position: W.position },
    le = p.get(s);
  let ue = {
    inProgress: !0,
    isValid: null,
    from: oi(le, re, we.Left, !0),
    fromHandle: re,
    fromPosition: re.position,
    fromNode: le,
    to: L,
    toHandle: null,
    toPosition: _g[re.position],
    toNode: null,
    pointer: L,
  };
  function Q() {
    ((F = !0), k(ue), x?.(e, { nodeId: s, handleId: o, handleType: j }));
  }
  R === 0 && Q();
  function ae(Pe) {
    if (!F) {
      const { x: Qe, y: Ft } = un(Pe),
        wt = Qe - ee,
        ut = Ft - J;
      if (!(wt * wt + ut * ut > R * R)) return;
      Q();
    }
    if (!I() || !re) {
      ke(Pe);
      return;
    }
    const xe = M();
    ((L = un(Pe, H)),
      (Z = FP(Is(L, xe, !1, [1, 1]), r, p, re)),
      $ || (oe(), ($ = !0)));
    const Se = Wv(Pe, {
      handle: Z,
      connectionMode: t,
      fromNodeId: s,
      fromHandleId: o,
      fromType: l ? "target" : "source",
      isValidConnection: T,
      doc: U,
      lib: f,
      flowId: g,
      nodeLookup: p,
    });
    ((O = Se.handleDomNode), (G = Se.connection), (_ = $P(!!Z, Se.isValid)));
    const Me = p.get(s),
      be = Me ? oi(Me, re, we.Left, !0) : ue.from,
      De = {
        ...ue,
        from: be,
        isValid: _,
        to:
          Se.toHandle && _ ? to({ x: Se.toHandle.x, y: Se.toHandle.y }, xe) : L,
        toHandle: Se.toHandle,
        toPosition: _ && Se.toHandle ? Se.toHandle.position : _g[re.position],
        toNode: Se.toHandle ? p.get(Se.toHandle.nodeId) : null,
        pointer: L,
      };
    (k(De), (ue = De));
  }
  function ke(Pe) {
    if (!("touches" in Pe && Pe.touches.length > 0)) {
      if (F) {
        (Z || O) && G && _ && P?.(G);
        const { inProgress: xe, ...Se } = ue,
          Me = { ...Se, toPosition: ue.toHandle ? ue.toPosition : null };
        (C?.(Pe, Me), u && N?.(Pe, Me));
      }
      (S(),
        cancelAnimationFrame(K),
        ($ = !1),
        (_ = !1),
        (G = null),
        (O = null),
        U.removeEventListener("mousemove", ae),
        U.removeEventListener("mouseup", ke),
        U.removeEventListener("touchmove", ae),
        U.removeEventListener("touchend", ke));
    }
  }
  (U.addEventListener("mousemove", ae),
    U.addEventListener("mouseup", ke),
    U.addEventListener("touchmove", ae),
    U.addEventListener("touchend", ke));
}
function Wv(
  e,
  {
    handle: t,
    connectionMode: r,
    fromNodeId: o,
    fromHandleId: s,
    fromType: u,
    doc: l,
    lib: d,
    flowId: p,
    isValidConnection: f = Uv,
    nodeLookup: h,
  },
) {
  const g = u === "target",
    y = t
      ? l.querySelector(
          `.${d}-flow__handle[data-id="${p}-${t?.nodeId}-${t?.id}-${t?.type}"]`,
        )
      : null,
    { x: S, y: x } = un(e),
    P = l.elementFromPoint(S, x),
    C = P?.classList.contains(`${d}-flow__handle`) ? P : y,
    T = { handleDomNode: C, isValid: !1, connection: null, toHandle: null };
  if (C) {
    const N = Hv(void 0, C),
      k = C.getAttribute("data-nodeid"),
      M = C.getAttribute("data-handleid"),
      I = C.classList.contains("connectable"),
      b = C.classList.contains("connectableend");
    if (!k || !N) return T;
    const R = {
      source: g ? k : o,
      sourceHandle: g ? M : s,
      target: g ? o : k,
      targetHandle: g ? s : M,
    };
    T.connection = R;
    const U =
      I &&
      b &&
      (r === ni.Strict
        ? (g && N === "source") || (!g && N === "target")
        : k !== o || M !== s);
    ((T.isValid = U && f(R)), (T.toHandle = Bv(k, N, M, h, r, !0)));
  }
  return T;
}
const nf = { onPointerDown: BP, isValid: Wv };
function HP({ domNode: e, panZoom: t, getTransform: r, getViewScale: o }) {
  const s = Vt(e);
  function u({
    translateExtent: d,
    width: p,
    height: f,
    zoomStep: h = 1,
    pannable: g = !0,
    zoomable: y = !0,
    inversePan: S = !1,
  }) {
    const x = (k) => {
      if (k.sourceEvent.type !== "wheel" || !t) return;
      const M = r(),
        I = k.sourceEvent.ctrlKey && Ss() ? 10 : 1,
        b =
          -k.sourceEvent.deltaY *
          (k.sourceEvent.deltaMode === 1
            ? 0.05
            : k.sourceEvent.deltaMode
              ? 1
              : 0.002) *
          h,
        R = M[2] * Math.pow(2, b * I);
      t.scaleTo(R);
    };
    let P = [0, 0];
    const C = (k) => {
        (k.sourceEvent.type === "mousedown" ||
          k.sourceEvent.type === "touchstart") &&
          (P = [
            k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
            k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY,
          ]);
      },
      T = (k) => {
        const M = r();
        if (
          (k.sourceEvent.type !== "mousemove" &&
            k.sourceEvent.type !== "touchmove") ||
          !t
        )
          return;
        const I = [
            k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
            k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY,
          ],
          b = [I[0] - P[0], I[1] - P[1]];
        P = I;
        const R = o() * Math.max(M[2], Math.log(M[2])) * (S ? -1 : 1),
          V = { x: M[0] - b[0] * R, y: M[1] - b[1] * R },
          U = [
            [0, 0],
            [p, f],
          ];
        t.setViewportConstrained({ x: V.x, y: V.y, zoom: M[2] }, U, d);
      },
      N = xv()
        .on("start", C)
        .on("zoom", g ? T : null)
        .on("zoom.wheel", y ? x : null);
    s.call(N, {});
  }
  function l() {
    s.on("zoom", null);
  }
  return { update: u, destroy: l, pointer: sn };
}
const iu = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
  xd = ({ x: e, y: t, zoom: r }) => tu.translate(e, t).scale(r),
  $i = (e, t) => e.target.closest(`.${t}`),
  Gv = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
  UP = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2,
  wd = (e, t = 0, r = UP, o = () => {}) => {
    const s = typeof t == "number" && t > 0;
    return (s || o(), s ? e.transition().duration(t).ease(r).on("end", o) : e);
  },
  Xv = (e) => {
    const t = e.ctrlKey && Ss() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * t;
  };
function WP({
  zoomPanValues: e,
  noWheelClassName: t,
  d3Selection: r,
  d3Zoom: o,
  panOnScrollMode: s,
  panOnScrollSpeed: u,
  zoomOnPinch: l,
  onPanZoomStart: d,
  onPanZoom: p,
  onPanZoomEnd: f,
}) {
  return (h) => {
    if ($i(h, t)) return (h.ctrlKey && h.preventDefault(), !1);
    (h.preventDefault(), h.stopImmediatePropagation());
    const g = r.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const C = sn(h),
        T = Xv(h),
        N = g * Math.pow(2, T);
      o.scaleTo(r, N, C, h);
      return;
    }
    const y = h.deltaMode === 1 ? 20 : 1;
    let S = s === qr.Vertical ? 0 : h.deltaX * y,
      x = s === qr.Horizontal ? 0 : h.deltaY * y;
    (!Ss() && h.shiftKey && s !== qr.Vertical && ((S = h.deltaY * y), (x = 0)),
      o.translateBy(r, -(S / g) * u, -(x / g) * u, { internal: !0 }));
    const P = iu(r.property("__zoom"));
    (clearTimeout(e.panScrollTimeout),
      e.isPanScrolling ? p?.(h, P) : ((e.isPanScrolling = !0), d?.(h, P)),
      (e.panScrollTimeout = setTimeout(() => {
        (f?.(h, P), (e.isPanScrolling = !1));
      }, 150)));
  };
}
function GP({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: r }) {
  return function (o, s) {
    const u = o.type === "wheel",
      l = !t && u && !o.ctrlKey,
      d = $i(o, e);
    if ((o.ctrlKey && u && d && o.preventDefault(), l || d)) return null;
    (o.preventDefault(), r.call(this, o, s));
  };
}
function XP({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: r }) {
  return (o) => {
    if (o.sourceEvent?.internal) return;
    const s = iu(o.transform);
    ((e.mouseButton = o.sourceEvent?.button || 0),
      (e.isZoomingOrPanning = !0),
      (e.prevViewport = s),
      o.sourceEvent?.type === "mousedown" && t(!0),
      r && r?.(o.sourceEvent, s));
  };
}
function YP({
  zoomPanValues: e,
  panOnDrag: t,
  onPaneContextMenu: r,
  onTransformChange: o,
  onPanZoom: s,
}) {
  return (u) => {
    ((e.usedRightMouseButton = !!(r && Gv(t, e.mouseButton ?? 0))),
      u.sourceEvent?.sync || o([u.transform.x, u.transform.y, u.transform.k]),
      s && !u.sourceEvent?.internal && s?.(u.sourceEvent, iu(u.transform)));
  };
}
function KP({
  zoomPanValues: e,
  panOnDrag: t,
  panOnScroll: r,
  onDraggingChange: o,
  onPanZoomEnd: s,
  onPaneContextMenu: u,
}) {
  return (l) => {
    if (
      !l.sourceEvent?.internal &&
      ((e.isZoomingOrPanning = !1),
      u &&
        Gv(t, e.mouseButton ?? 0) &&
        !e.usedRightMouseButton &&
        l.sourceEvent &&
        u(l.sourceEvent),
      (e.usedRightMouseButton = !1),
      o(!1),
      s)
    ) {
      const d = iu(l.transform);
      ((e.prevViewport = d),
        clearTimeout(e.timerId),
        (e.timerId = setTimeout(
          () => {
            s?.(l.sourceEvent, d);
          },
          r ? 150 : 0,
        )));
    }
  };
}
function ZP({
  zoomActivationKeyPressed: e,
  zoomOnScroll: t,
  zoomOnPinch: r,
  panOnDrag: o,
  panOnScroll: s,
  zoomOnDoubleClick: u,
  userSelectionActive: l,
  noWheelClassName: d,
  noPanClassName: p,
  lib: f,
  connectionInProgress: h,
}) {
  return (g) => {
    const y = e || t,
      S = r && g.ctrlKey,
      x = g.type === "wheel";
    if (
      g.button === 1 &&
      g.type === "mousedown" &&
      ($i(g, `${f}-flow__node`) || $i(g, `${f}-flow__edge`))
    )
      return !0;
    if (
      (!o && !y && !s && !u && !r) ||
      l ||
      (h && !x) ||
      ($i(g, d) && x) ||
      ($i(g, p) && (!x || (s && x && !e))) ||
      (!r && g.ctrlKey && x)
    )
      return !1;
    if (!r && g.type === "touchstart" && g.touches?.length > 1)
      return (g.preventDefault(), !1);
    if (
      (!y && !s && !S && x) ||
      (!o && (g.type === "mousedown" || g.type === "touchstart")) ||
      (Array.isArray(o) && !o.includes(g.button) && g.type === "mousedown")
    )
      return !1;
    const P =
      (Array.isArray(o) && o.includes(g.button)) || !g.button || g.button <= 1;
    return (!g.ctrlKey || x) && P;
  };
}
function qP({
  domNode: e,
  minZoom: t,
  maxZoom: r,
  translateExtent: o,
  viewport: s,
  onPanZoom: u,
  onPanZoomStart: l,
  onPanZoomEnd: d,
  onDraggingChange: p,
}) {
  const f = {
      isZoomingOrPanning: !1,
      usedRightMouseButton: !1,
      prevViewport: {},
      mouseButton: 0,
      timerId: void 0,
      panScrollTimeout: void 0,
      isPanScrolling: !1,
    },
    h = e.getBoundingClientRect();
  let g = [
    [0, 0],
    [h.width, h.height],
  ];
  (typeof ResizeObserver < "u"
    ? new ResizeObserver((J) => {
        const j = J[0];
        j &&
          (g = [
            [0, 0],
            [j.contentRect.width, j.contentRect.height],
          ]);
      })
    : null
  )?.observe(e);
  const S = xv()
      .extent(() => g)
      .scaleExtent([t, r])
      .translateExtent(o),
    x = Vt(e).call(S);
  M(
    { x: s.x, y: s.y, zoom: eo(s.zoom, t, r) },
    [
      [0, 0],
      [h.width, h.height],
    ],
    o,
  );
  const P = x.on("wheel.zoom"),
    C = x.on("dblclick.zoom");
  S.wheelDelta(Xv);
  async function T(J, j) {
    return x
      ? new Promise((H) => {
          S?.interpolate(j?.interpolate === "linear" ? ls : yl).transform(
            wd(x, j?.duration, j?.ease, () => H(!0)),
            J,
          );
        })
      : !1;
  }
  function N({
    noWheelClassName: J,
    noPanClassName: j,
    onPaneContextMenu: H,
    userSelectionActive: F,
    panOnScroll: W,
    panOnDrag: L,
    panOnScrollMode: $,
    panOnScrollSpeed: G,
    preventScrolling: _,
    zoomOnPinch: O,
    zoomOnScroll: oe,
    zoomOnDoubleClick: re,
    zoomActivationKeyPressed: le,
    lib: ce,
    onTransformChange: ue,
    connectionInProgress: Q,
    paneClickDistance: ae,
    selectionOnDrag: ke,
  }) {
    F && !f.isZoomingOrPanning && k();
    const Pe = W && !le && !F;
    S.clickDistance(ke ? 1 / 0 : !ln(ae) || ae < 0 ? 0 : ae);
    const xe = Pe
      ? WP({
          zoomPanValues: f,
          noWheelClassName: J,
          d3Selection: x,
          d3Zoom: S,
          panOnScrollMode: $,
          panOnScrollSpeed: G,
          zoomOnPinch: O,
          onPanZoomStart: l,
          onPanZoom: u,
          onPanZoomEnd: d,
        })
      : GP({ noWheelClassName: J, preventScrolling: _, d3ZoomHandler: P });
    x.on("wheel.zoom", xe, { passive: !1 });
    const Se = XP({ zoomPanValues: f, onDraggingChange: p, onPanZoomStart: l });
    S.on("start", Se);
    const Me = YP({
      zoomPanValues: f,
      panOnDrag: L,
      onPaneContextMenu: !!H,
      onPanZoom: u,
      onTransformChange: ue,
    });
    S.on("zoom", Me);
    const be = KP({
      zoomPanValues: f,
      panOnDrag: L,
      panOnScroll: W,
      onPaneContextMenu: H,
      onPanZoomEnd: d,
      onDraggingChange: p,
    });
    S.on("end", be);
    const De = ZP({
      zoomActivationKeyPressed: le,
      panOnDrag: L,
      zoomOnScroll: oe,
      panOnScroll: W,
      zoomOnDoubleClick: re,
      zoomOnPinch: O,
      userSelectionActive: F,
      noPanClassName: j,
      noWheelClassName: J,
      lib: ce,
      connectionInProgress: Q,
    });
    (S.filter(De), re ? x.on("dblclick.zoom", C) : x.on("dblclick.zoom", null));
  }
  function k() {
    S.on("zoom", null);
  }
  async function M(J, j, H) {
    const F = xd(J),
      W = S?.constrain()(F, j, H);
    return (W && (await T(W)), W);
  }
  async function I(J, j) {
    const H = xd(J);
    return (await T(H, j), H);
  }
  function b(J) {
    if (x) {
      const j = xd(J),
        H = x.property("__zoom");
      (H.k !== J.zoom || H.x !== J.x || H.y !== J.y) &&
        S?.transform(x, j, null, { sync: !0 });
    }
  }
  function R() {
    const J = x ? vv(x.node()) : { x: 0, y: 0, k: 1 };
    return { x: J.x, y: J.y, zoom: J.k };
  }
  async function V(J, j) {
    return x
      ? new Promise((H) => {
          S?.interpolate(j?.interpolate === "linear" ? ls : yl).scaleTo(
            wd(x, j?.duration, j?.ease, () => H(!0)),
            J,
          );
        })
      : !1;
  }
  async function U(J, j) {
    return x
      ? new Promise((H) => {
          S?.interpolate(j?.interpolate === "linear" ? ls : yl).scaleBy(
            wd(x, j?.duration, j?.ease, () => H(!0)),
            J,
          );
        })
      : !1;
  }
  function K(J) {
    S?.scaleExtent(J);
  }
  function Z(J) {
    S?.translateExtent(J);
  }
  function ee(J) {
    const j = !ln(J) || J < 0 ? 0 : J;
    S?.clickDistance(j);
  }
  return {
    update: N,
    destroy: k,
    setViewport: I,
    setViewportConstrained: M,
    getViewport: R,
    scaleTo: V,
    scaleBy: U,
    setScaleExtent: K,
    setTranslateExtent: Z,
    syncViewport: b,
    setClickDistance: ee,
  };
}
var no;
(function (e) {
  ((e.Line = "line"), (e.Handle = "handle"));
})(no || (no = {}));
function QP({
  width: e,
  prevWidth: t,
  height: r,
  prevHeight: o,
  affectsX: s,
  affectsY: u,
}) {
  const l = e - t,
    d = r - o,
    p = [l > 0 ? 1 : l < 0 ? -1 : 0, d > 0 ? 1 : d < 0 ? -1 : 0];
  return (l && s && (p[0] = p[0] * -1), d && u && (p[1] = p[1] * -1), p);
}
function Hg(e) {
  const t = e.includes("right") || e.includes("left"),
    r = e.includes("bottom") || e.includes("top"),
    o = e.includes("left"),
    s = e.includes("top");
  return { isHorizontal: t, isVertical: r, affectsX: o, affectsY: s };
}
function pr(e, t) {
  return Math.max(0, t - e);
}
function mr(e, t) {
  return Math.max(0, e - t);
}
function ll(e, t, r) {
  return Math.max(0, t - e, e - r);
}
function Ug(e, t) {
  return e ? !t : t;
}
function JP(e, t, r, o, s, u, l, d) {
  let { affectsX: p, affectsY: f } = t;
  const { isHorizontal: h, isVertical: g } = t,
    y = h && g,
    { xSnapped: S, ySnapped: x } = r,
    { minWidth: P, maxWidth: C, minHeight: T, maxHeight: N } = o,
    { x: k, y: M, width: I, height: b, aspectRatio: R } = e;
  let V = Math.floor(h ? S - e.pointerX : 0),
    U = Math.floor(g ? x - e.pointerY : 0);
  const K = I + (p ? -V : V),
    Z = b + (f ? -U : U),
    ee = -u[0] * I,
    J = -u[1] * b;
  let j = ll(K, P, C),
    H = ll(Z, T, N);
  if (l) {
    let L = 0,
      $ = 0;
    (p && V < 0
      ? (L = pr(k + V + ee, l[0][0]))
      : !p && V > 0 && (L = mr(k + K + ee, l[1][0])),
      f && U < 0
        ? ($ = pr(M + U + J, l[0][1]))
        : !f && U > 0 && ($ = mr(M + Z + J, l[1][1])),
      (j = Math.max(j, L)),
      (H = Math.max(H, $)));
  }
  if (d) {
    let L = 0,
      $ = 0;
    (p && V > 0
      ? (L = mr(k + V, d[0][0]))
      : !p && V < 0 && (L = pr(k + K, d[1][0])),
      f && U > 0
        ? ($ = mr(M + U, d[0][1]))
        : !f && U < 0 && ($ = pr(M + Z, d[1][1])),
      (j = Math.max(j, L)),
      (H = Math.max(H, $)));
  }
  if (s) {
    if (h) {
      const L = ll(K / R, T, N) * R;
      if (((j = Math.max(j, L)), l)) {
        let $ = 0;
        ((!p && !f) || (p && !f && y)
          ? ($ = mr(M + J + K / R, l[1][1]) * R)
          : ($ = pr(M + J + (p ? V : -V) / R, l[0][1]) * R),
          (j = Math.max(j, $)));
      }
      if (d) {
        let $ = 0;
        ((!p && !f) || (p && !f && y)
          ? ($ = pr(M + K / R, d[1][1]) * R)
          : ($ = mr(M + (p ? V : -V) / R, d[0][1]) * R),
          (j = Math.max(j, $)));
      }
    }
    if (g) {
      const L = ll(Z * R, P, C) / R;
      if (((H = Math.max(H, L)), l)) {
        let $ = 0;
        ((!p && !f) || (f && !p && y)
          ? ($ = mr(k + Z * R + ee, l[1][0]) / R)
          : ($ = pr(k + (f ? U : -U) * R + ee, l[0][0]) / R),
          (H = Math.max(H, $)));
      }
      if (d) {
        let $ = 0;
        ((!p && !f) || (f && !p && y)
          ? ($ = pr(k + Z * R, d[1][0]) / R)
          : ($ = mr(k + (f ? U : -U) * R, d[0][0]) / R),
          (H = Math.max(H, $)));
      }
    }
  }
  ((U = U + (U < 0 ? H : -H)),
    (V = V + (V < 0 ? j : -j)),
    s &&
      (y
        ? K > Z * R
          ? (U = (Ug(p, f) ? -V : V) / R)
          : (V = (Ug(p, f) ? -U : U) * R)
        : h
          ? ((U = V / R), (f = p))
          : ((V = U * R), (p = f))));
  const F = p ? k + V : k,
    W = f ? M + U : M;
  return {
    width: I + (p ? -V : V),
    height: b + (f ? -U : U),
    x: u[0] * V * (p ? -1 : 1) + F,
    y: u[1] * U * (f ? -1 : 1) + W,
  };
}
const Yv = { width: 0, height: 0, x: 0, y: 0 },
  eT = { ...Yv, pointerX: 0, pointerY: 0, aspectRatio: 1 };
function tT(e, t, r) {
  const o = t.position.x + e.position.x,
    s = t.position.y + e.position.y,
    u = e.measured.width ?? 0,
    l = e.measured.height ?? 0,
    d = r[0] * u,
    p = r[1] * l;
  return [
    [o - d, s - p],
    [o + u - d, s + l - p],
  ];
}
function nT({
  domNode: e,
  nodeId: t,
  getStoreItems: r,
  onChange: o,
  onEnd: s,
}) {
  const u = Vt(e);
  let l = {
    controlDirection: Hg("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE,
    },
    resizeDirection: void 0,
    keepAspectRatio: !1,
  };
  function d({
    controlPosition: f,
    boundaries: h,
    keepAspectRatio: g,
    resizeDirection: y,
    onResizeStart: S,
    onResize: x,
    onResizeEnd: P,
    shouldResize: C,
  }) {
    let T = { ...Yv },
      N = { ...eT };
    l = {
      boundaries: h,
      resizeDirection: y,
      keepAspectRatio: g,
      controlDirection: Hg(f),
    };
    let k,
      M = null,
      I = [],
      b,
      R,
      V,
      U = !1;
    const K = iv()
      .on("start", (Z) => {
        const {
          nodeLookup: ee,
          transform: J,
          snapGrid: j,
          snapToGrid: H,
          nodeOrigin: F,
          paneDomNode: W,
        } = r();
        if (((k = ee.get(t)), !k)) return;
        M = W?.getBoundingClientRect() ?? null;
        const { xSnapped: L, ySnapped: $ } = us(Z.sourceEvent, {
          transform: J,
          snapGrid: j,
          snapToGrid: H,
          containerBounds: M,
        });
        ((T = {
          width: k.measured.width ?? 0,
          height: k.measured.height ?? 0,
          x: k.position.x ?? 0,
          y: k.position.y ?? 0,
        }),
          (N = {
            ...T,
            pointerX: L,
            pointerY: $,
            aspectRatio: T.width / T.height,
          }),
          (b = void 0),
          (R = ii(k.extent) ? k.extent : void 0),
          k.parentId &&
            (k.extent === "parent" || k.expandParent) &&
            (b = ee.get(k.parentId)),
          b &&
            k.extent === "parent" &&
            (R = [
              [0, 0],
              [b.measured.width, b.measured.height],
            ]),
          (I = []),
          (V = void 0));
        for (const [G, _] of ee)
          if (
            _.parentId === t &&
            (I.push({ id: G, position: { ..._.position }, extent: _.extent }),
            _.extent === "parent" || _.expandParent)
          ) {
            const O = tT(_, k, _.origin ?? F);
            V
              ? (V = [
                  [Math.min(O[0][0], V[0][0]), Math.min(O[0][1], V[0][1])],
                  [Math.max(O[1][0], V[1][0]), Math.max(O[1][1], V[1][1])],
                ])
              : (V = O);
          }
        S?.(Z, { ...T });
      })
      .on("drag", (Z) => {
        const {
            transform: ee,
            snapGrid: J,
            snapToGrid: j,
            nodeOrigin: H,
          } = r(),
          F = us(Z.sourceEvent, {
            transform: ee,
            snapGrid: J,
            snapToGrid: j,
            containerBounds: M,
          }),
          W = [];
        if (!k) return;
        const { x: L, y: $, width: G, height: _ } = T,
          O = {},
          oe = k.origin ?? H,
          {
            width: re,
            height: le,
            x: ce,
            y: ue,
          } = JP(
            N,
            l.controlDirection,
            F,
            l.boundaries,
            l.keepAspectRatio,
            oe,
            R,
            V,
          ),
          Q = re !== G,
          ae = le !== _,
          ke = ce !== L && Q,
          Pe = ue !== $ && ae;
        if (!ke && !Pe && !Q && !ae) return;
        if (
          (ke || Pe || oe[0] === 1 || oe[1] === 1) &&
          ((O.x = ke ? ce : T.x),
          (O.y = Pe ? ue : T.y),
          (T.x = O.x),
          (T.y = O.y),
          I.length > 0)
        ) {
          const be = ce - L,
            De = ue - $;
          for (const Qe of I)
            ((Qe.position = {
              x: Qe.position.x - be + oe[0] * (re - G),
              y: Qe.position.y - De + oe[1] * (le - _),
            }),
              W.push(Qe));
        }
        if (
          ((Q || ae) &&
            ((O.width =
              Q && (!l.resizeDirection || l.resizeDirection === "horizontal")
                ? re
                : T.width),
            (O.height =
              ae && (!l.resizeDirection || l.resizeDirection === "vertical")
                ? le
                : T.height),
            (T.width = O.width),
            (T.height = O.height)),
          b && k.expandParent)
        ) {
          const be = oe[0] * (O.width ?? 0);
          O.x && O.x < be && ((T.x = be), (N.x = N.x - (O.x - be)));
          const De = oe[1] * (O.height ?? 0);
          O.y && O.y < De && ((T.y = De), (N.y = N.y - (O.y - De)));
        }
        const xe = QP({
            width: T.width,
            prevWidth: G,
            height: T.height,
            prevHeight: _,
            affectsX: l.controlDirection.affectsX,
            affectsY: l.controlDirection.affectsY,
          }),
          Se = { ...T, direction: xe };
        C?.(Z, Se) !== !1 && ((U = !0), x?.(Z, Se), o(O, W));
      })
      .on("end", (Z) => {
        U && (P?.(Z, { ...T }), s?.({ ...T }), (U = !1));
      });
    u.call(K);
  }
  function p() {
    u.on(".drag", null);
  }
  return { update: d, destroy: p };
}
var Sd = { exports: {} },
  kd = {},
  Ed = { exports: {} },
  Cd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wg;
function rT() {
  if (Wg) return Cd;
  Wg = 1;
  var e = Ms();
  function t(g, y) {
    return (g === y && (g !== 0 || 1 / g === 1 / y)) || (g !== g && y !== y);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    o = e.useState,
    s = e.useEffect,
    u = e.useLayoutEffect,
    l = e.useDebugValue;
  function d(g, y) {
    var S = y(),
      x = o({ inst: { value: S, getSnapshot: y } }),
      P = x[0].inst,
      C = x[1];
    return (
      u(
        function () {
          ((P.value = S), (P.getSnapshot = y), p(P) && C({ inst: P }));
        },
        [g, S, y],
      ),
      s(
        function () {
          return (
            p(P) && C({ inst: P }),
            g(function () {
              p(P) && C({ inst: P });
            })
          );
        },
        [g],
      ),
      l(S),
      S
    );
  }
  function p(g) {
    var y = g.getSnapshot;
    g = g.value;
    try {
      var S = y();
      return !r(g, S);
    } catch {
      return !0;
    }
  }
  function f(g, y) {
    return y();
  }
  var h =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? f
      : d;
  return (
    (Cd.useSyncExternalStore =
      e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h),
    Cd
  );
}
var Gg;
function iT() {
  return (Gg || ((Gg = 1), (Ed.exports = rT())), Ed.exports);
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xg;
function oT() {
  if (Xg) return kd;
  Xg = 1;
  var e = Ms(),
    t = iT();
  function r(f, h) {
    return (f === h && (f !== 0 || 1 / f === 1 / h)) || (f !== f && h !== h);
  }
  var o = typeof Object.is == "function" ? Object.is : r,
    s = t.useSyncExternalStore,
    u = e.useRef,
    l = e.useEffect,
    d = e.useMemo,
    p = e.useDebugValue;
  return (
    (kd.useSyncExternalStoreWithSelector = function (f, h, g, y, S) {
      var x = u(null);
      if (x.current === null) {
        var P = { hasValue: !1, value: null };
        x.current = P;
      } else P = x.current;
      x = d(
        function () {
          function T(b) {
            if (!N) {
              if (((N = !0), (k = b), (b = y(b)), S !== void 0 && P.hasValue)) {
                var R = P.value;
                if (S(R, b)) return (M = R);
              }
              return (M = b);
            }
            if (((R = M), o(k, b))) return R;
            var V = y(b);
            return S !== void 0 && S(R, V) ? ((k = b), R) : ((k = b), (M = V));
          }
          var N = !1,
            k,
            M,
            I = g === void 0 ? null : g;
          return [
            function () {
              return T(h());
            },
            I === null
              ? void 0
              : function () {
                  return T(I());
                },
          ];
        },
        [h, g, y, S],
      );
      var C = s(f, x[0], x[1]);
      return (
        l(
          function () {
            ((P.hasValue = !0), (P.value = C));
          },
          [C],
        ),
        p(C),
        C
      );
    }),
    kd
  );
}
var Yg;
function sT() {
  return (Yg || ((Yg = 1), (Sd.exports = oT())), Sd.exports);
}
var aT = sT();
const lT = Rf(aT),
  uT = {},
  Kg = (e) => {
    let t;
    const r = new Set(),
      o = (h, g) => {
        const y = typeof h == "function" ? h(t) : h;
        if (!Object.is(y, t)) {
          const S = t;
          ((t =
            (g ?? (typeof y != "object" || y === null))
              ? y
              : Object.assign({}, t, y)),
            r.forEach((x) => x(t, S)));
        }
      },
      s = () => t,
      p = {
        setState: o,
        getState: s,
        getInitialState: () => f,
        subscribe: (h) => (r.add(h), () => r.delete(h)),
        destroy: () => {
          ((uT ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
            ),
            r.clear());
        },
      },
      f = (t = e(o, s, p));
    return p;
  },
  cT = (e) => (e ? Kg(e) : Kg),
  { useDebugValue: dT } = Fi,
  { useSyncExternalStoreWithSelector: fT } = lT,
  hT = (e) => e;
function Kv(e, t = hT, r) {
  const o = fT(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r,
  );
  return (dT(o), o);
}
const Zg = (e, t) => {
    const r = cT(e),
      o = (s, u = t) => Kv(r, s, u);
    return (Object.assign(o, r), o);
  },
  pT = (e, t) => (e ? Zg(e, t) : Zg);
function We(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [o, s] of e) if (!Object.is(s, t.get(o))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const o of e) if (!t.has(o)) return !1;
    return !0;
  }
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !1;
  for (const o of r)
    if (!Object.prototype.hasOwnProperty.call(t, o) || !Object.is(e[o], t[o]))
      return !1;
  return !0;
}
H0();
const ou = D.createContext(null),
  mT = ou.Provider,
  Zv = dn.error001("react");
function je(e, t) {
  const r = D.useContext(ou);
  if (r === null) throw new Error(Zv);
  return Kv(r, e, t);
}
function Fe() {
  const e = D.useContext(ou);
  if (e === null) throw new Error(Zv);
  return D.useMemo(
    () => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
    }),
    [e],
  );
}
const qg = { display: "none" },
  gT = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)",
  },
  qv = "react-flow__node-desc",
  Qv = "react-flow__edge-desc",
  yT = "react-flow__aria-live",
  vT = (e) => e.ariaLiveMessage,
  xT = (e) => e.ariaLabelConfig;
function wT({ rfId: e }) {
  const t = je(vT);
  return w.jsx("div", {
    id: `${yT}-${e}`,
    "aria-live": "assertive",
    "aria-atomic": "true",
    style: gT,
    children: t,
  });
}
function ST({ rfId: e, disableKeyboardA11y: t }) {
  const r = je(xT);
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx("div", {
        id: `${qv}-${e}`,
        style: qg,
        children: t
          ? r["node.a11yDescription.default"]
          : r["node.a11yDescription.keyboardDisabled"],
      }),
      w.jsx("div", {
        id: `${Qv}-${e}`,
        style: qg,
        children: r["edge.a11yDescription.default"],
      }),
      !t && w.jsx(wT, { rfId: e }),
    ],
  });
}
const ro = D.forwardRef(
  (
    { position: e = "top-left", children: t, className: r, style: o, ...s },
    u,
  ) => {
    const l = `${e}`.split("-");
    return w.jsx("div", {
      className: qe(["react-flow__panel", r, ...l]),
      style: o,
      ref: u,
      ...s,
      children: t,
    });
  },
);
ro.displayName = "Panel";
const Qg = "https://reactflow.dev?utm_source=attribution";
function kT({ proOptions: e, position: t = "bottom-right" }) {
  return e?.hideAttribution
    ? null
    : w.jsx(ro, {
        position: t,
        className: "react-flow__attribution",
        "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${Qg}`,
        children: w.jsx("a", {
          href: Qg,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "React Flow attribution",
          children: "React Flow",
        }),
      });
}
const ET = (e) => {
    const t = [],
      r = [];
    for (const [, o] of e.nodeLookup)
      o.selected && t.push(o.internals.userNode);
    for (const [, o] of e.edgeLookup) o.selected && r.push(o);
    return { selectedNodes: t, selectedEdges: r };
  },
  ul = (e) => e.id;
function CT(e, t) {
  return (
    We(e.selectedNodes.map(ul), t.selectedNodes.map(ul)) &&
    We(e.selectedEdges.map(ul), t.selectedEdges.map(ul))
  );
}
function PT({ onSelectionChange: e }) {
  const t = Fe(),
    { selectedNodes: r, selectedEdges: o } = je(ET, CT);
  return (
    D.useEffect(() => {
      const s = { nodes: r, edges: o };
      (e?.(s), t.getState().onSelectionChangeHandlers.forEach((u) => u(s)));
    }, [r, o, e]),
    null
  );
}
const TT = (e) => !!e.onSelectionChangeHandlers;
function MT({ onSelectionChange: e }) {
  const t = je(TT);
  return e || t ? w.jsx(PT, { onSelectionChange: e }) : null;
}
const Jv = [0, 0],
  NT = { x: 0, y: 0, zoom: 1 },
  bT = [
    "nodes",
    "edges",
    "defaultNodes",
    "defaultEdges",
    "onConnect",
    "onConnectStart",
    "onConnectEnd",
    "onClickConnectStart",
    "onClickConnectEnd",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "nodesFocusable",
    "edgesFocusable",
    "edgesReconnectable",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "minZoom",
    "maxZoom",
    "nodeExtent",
    "onNodesChange",
    "onEdgesChange",
    "elementsSelectable",
    "connectionMode",
    "snapGrid",
    "snapToGrid",
    "translateExtent",
    "connectOnClick",
    "defaultEdgeOptions",
    "fitView",
    "fitViewOptions",
    "onNodesDelete",
    "onEdgesDelete",
    "onDelete",
    "onNodeDrag",
    "onNodeDragStart",
    "onNodeDragStop",
    "onSelectionDrag",
    "onSelectionDragStart",
    "onSelectionDragStop",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "noPanClassName",
    "nodeOrigin",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onError",
    "connectionRadius",
    "isValidConnection",
    "selectNodesOnDrag",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "onBeforeDelete",
    "debug",
    "autoPanSpeed",
    "ariaLabelConfig",
    "zIndexMode",
  ],
  Jg = [...bT, "rfId"],
  _T = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  }),
  ey = {
    translateExtent: xs,
    nodeOrigin: Jv,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: !0,
    noPanClassName: "nopan",
    rfId: "1",
  };
function jT(e) {
  const {
      setNodes: t,
      setEdges: r,
      setMinZoom: o,
      setMaxZoom: s,
      setTranslateExtent: u,
      setNodeExtent: l,
      reset: d,
      setDefaultNodesAndEdges: p,
    } = je(_T, We),
    f = Fe();
  D.useEffect(
    () => (
      p(e.defaultNodes, e.defaultEdges),
      () => {
        ((h.current = ey), d());
      }
    ),
    [],
  );
  const h = D.useRef(ey);
  return (
    D.useEffect(
      () => {
        for (const g of Jg) {
          const y = e[g],
            S = h.current[g];
          y !== S &&
            (typeof e[g] > "u" ||
              (g === "nodes"
                ? t(y)
                : g === "edges"
                  ? r(y)
                  : g === "minZoom"
                    ? o(y)
                    : g === "maxZoom"
                      ? s(y)
                      : g === "translateExtent"
                        ? u(y)
                        : g === "nodeExtent"
                          ? l(y)
                          : g === "ariaLabelConfig"
                            ? f.setState({ ariaLabelConfig: mP(y) })
                            : g === "fitView"
                              ? f.setState({ fitViewQueued: y })
                              : g === "fitViewOptions"
                                ? f.setState({ fitViewOptions: y })
                                : f.setState({ [g]: y })));
        }
        h.current = e;
      },
      Jg.map((g) => e[g]),
    ),
    null
  );
}
function ty() {
  return typeof window > "u" || !window.matchMedia
    ? null
    : window.matchMedia("(prefers-color-scheme: dark)");
}
function AT(e) {
  const [t, r] = D.useState(e === "system" ? null : e);
  return (
    D.useEffect(() => {
      if (e !== "system") {
        r(e);
        return;
      }
      const o = ty(),
        s = () => r(o?.matches ? "dark" : "light");
      return (
        s(),
        o?.addEventListener("change", s),
        () => {
          o?.removeEventListener("change", s);
        }
      );
    }, [e]),
    t !== null ? t : ty()?.matches ? "dark" : "light"
  );
}
const ny = typeof document < "u" ? document : null;
function ks(e = null, t = { target: ny, actInsideInputWithModifier: !0 }) {
  const [r, o] = D.useState(!1),
    s = D.useRef(!1),
    u = D.useRef(new Set([])),
    [l, d] = D.useMemo(() => {
      if (e !== null) {
        const f = (Array.isArray(e) ? e : [e])
            .filter((g) => typeof g == "string")
            .map((g) =>
              g
                .replace(
                  "+",
                  `
`,
                )
                .replace(
                  `

`,
                  `
+`,
                ).split(`
`),
            ),
          h = f.reduce((g, y) => g.concat(...y), []);
        return [f, h];
      }
      return [[], []];
    }, [e]);
  return (
    D.useEffect(() => {
      const p = t?.target ?? ny,
        f = t?.actInsideInputWithModifier ?? !0;
      if (e !== null) {
        const h = (S) => {
            if (
              ((s.current = S.ctrlKey || S.metaKey || S.shiftKey || S.altKey),
              (!s.current || (s.current && !f)) && Iv(S))
            )
              return !1;
            const P = iy(S.code, d);
            if ((u.current.add(S[P]), ry(l, u.current, !1))) {
              const C = S.composedPath?.()?.[0] || S.target,
                T = C?.nodeName === "BUTTON" || C?.nodeName === "A";
              (t.preventDefault !== !1 &&
                (s.current || !T) &&
                S.preventDefault(),
                o(!0));
            }
          },
          g = (S) => {
            const x = iy(S.code, d);
            (ry(l, u.current, !0)
              ? (o(!1), u.current.clear())
              : u.current.delete(S[x]),
              S.key === "Meta" && u.current.clear(),
              (s.current = !1));
          },
          y = () => {
            (u.current.clear(), o(!1));
          };
        return (
          p?.addEventListener("keydown", h),
          p?.addEventListener("keyup", g),
          window.addEventListener("blur", y),
          window.addEventListener("contextmenu", y),
          () => {
            (p?.removeEventListener("keydown", h),
              p?.removeEventListener("keyup", g),
              window.removeEventListener("blur", y),
              window.removeEventListener("contextmenu", y));
          }
        );
      }
    }, [e, o]),
    r
  );
}
function ry(e, t, r) {
  return e
    .filter((o) => r || o.length === t.size)
    .some((o) => o.every((s) => t.has(s)));
}
function iy(e, t) {
  return t.includes(e) ? "code" : "key";
}
const IT = () => {
  const e = Fe();
  return D.useMemo(
    () => ({
      zoomIn: async (t) => {
        const { panZoom: r } = e.getState();
        return r ? r.scaleBy(1.2, t) : !1;
      },
      zoomOut: async (t) => {
        const { panZoom: r } = e.getState();
        return r ? r.scaleBy(1 / 1.2, t) : !1;
      },
      zoomTo: async (t, r) => {
        const { panZoom: o } = e.getState();
        return o ? o.scaleTo(t, r) : !1;
      },
      getZoom: () => e.getState().transform[2],
      setViewport: async (t, r) => {
        const {
          transform: [o, s, u],
          panZoom: l,
        } = e.getState();
        return l
          ? (await l.setViewport(
              { x: t.x ?? o, y: t.y ?? s, zoom: t.zoom ?? u },
              r,
            ),
            !0)
          : !1;
      },
      getViewport: () => {
        const [t, r, o] = e.getState().transform;
        return { x: t, y: r, zoom: o };
      },
      setCenter: async (t, r, o) => e.getState().setCenter(t, r, o),
      fitBounds: async (t, r) => {
        const {
            width: o,
            height: s,
            minZoom: u,
            maxZoom: l,
            panZoom: d,
          } = e.getState(),
          p = Gf(t, o, s, u, l, r?.padding ?? 0.1);
        return d
          ? (await d.setViewport(p, {
              duration: r?.duration,
              ease: r?.ease,
              interpolate: r?.interpolate,
            }),
            !0)
          : !1;
      },
      screenToFlowPosition: (t, r = {}) => {
        const {
          transform: o,
          snapGrid: s,
          snapToGrid: u,
          domNode: l,
        } = e.getState();
        if (!l) return t;
        const { x: d, y: p } = l.getBoundingClientRect(),
          f = { x: t.x - d, y: t.y - p },
          h = r.snapGrid ?? s,
          g = r.snapToGrid ?? u;
        return Is(f, o, g, h);
      },
      flowToScreenPosition: (t) => {
        const { transform: r, domNode: o } = e.getState();
        if (!o) return t;
        const { x: s, y: u } = o.getBoundingClientRect(),
          l = to(t, r);
        return { x: l.x + s, y: l.y + u };
      },
    }),
    [],
  );
};
function e1(e, t) {
  const r = [],
    o = new Map(),
    s = [];
  for (const u of e)
    if (u.type === "add") {
      s.push(u);
      continue;
    } else if (u.type === "remove" || u.type === "replace") o.set(u.id, [u]);
    else {
      const l = o.get(u.id);
      l ? l.push(u) : o.set(u.id, [u]);
    }
  for (const u of t) {
    const l = o.get(u.id);
    if (!l) {
      r.push(u);
      continue;
    }
    if (l[0].type === "remove") continue;
    if (l[0].type === "replace") {
      r.push({ ...l[0].item });
      continue;
    }
    const d = { ...u };
    for (const p of l) DT(p, d);
    r.push(d);
  }
  return (
    s.length &&
      s.forEach((u) => {
        u.index !== void 0
          ? r.splice(u.index, 0, { ...u.item })
          : r.push({ ...u.item });
      }),
    r
  );
}
function DT(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      (typeof e.position < "u" && (t.position = e.position),
        typeof e.dragging < "u" && (t.dragging = e.dragging));
      break;
    }
    case "dimensions": {
      (typeof e.dimensions < "u" &&
        ((t.measured = { ...e.dimensions }),
        e.setAttributes &&
          ((e.setAttributes === !0 || e.setAttributes === "width") &&
            (t.width = e.dimensions.width),
          (e.setAttributes === !0 || e.setAttributes === "height") &&
            (t.height = e.dimensions.height))),
        typeof e.resizing == "boolean" && (t.resizing = e.resizing));
      break;
    }
  }
}
function t1(e, t) {
  return e1(e, t);
}
function n1(e, t) {
  return e1(e, t);
}
function Ur(e, t) {
  return { id: e, type: "select", selected: t };
}
function Bi(e, t = new Set(), r = !1) {
  const o = [];
  for (const [s, u] of e) {
    const l = t.has(s);
    !(u.selected === void 0 && !l) &&
      u.selected !== l &&
      (r && (u.selected = l), o.push(Ur(u.id, l)));
  }
  return o;
}
function oy({ items: e = [], lookup: t }) {
  const r = [],
    o = new Map(e.map((s) => [s.id, s]));
  for (const [s, u] of e.entries()) {
    const l = t.get(u.id),
      d = l?.internals?.userNode ?? l;
    (d !== void 0 && d !== u && r.push({ id: u.id, item: u, type: "replace" }),
      d === void 0 && r.push({ item: u, type: "add", index: s }));
  }
  for (const [s] of t) o.get(s) === void 0 && r.push({ id: s, type: "remove" });
  return r;
}
function sy(e) {
  return { id: e.id, type: "remove" };
}
const RT = bv();
function LT(e, t, r = {}) {
  return SP(e, t, { ...r, onError: r.onError ?? RT });
}
const ay = (e) => sP(e),
  VT = (e) => Cv(e);
function r1(e) {
  return D.forwardRef(e);
}
const i1 = typeof window < "u" ? D.useLayoutEffect : D.useEffect;
function ly(e) {
  const [t, r] = D.useState(BigInt(0)),
    [o] = D.useState(() => zT(() => r((s) => s + BigInt(1))));
  return (
    i1(() => {
      const s = o.get();
      s.length && (e(s), o.reset());
    }, [t]),
    o
  );
}
function zT(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (r) => {
      (t.push(r), e());
    },
  };
}
const o1 = D.createContext(null);
function OT({ children: e }) {
  const t = Fe(),
    r = D.useCallback((d) => {
      const {
        nodes: p = [],
        setNodes: f,
        hasDefaultNodes: h,
        onNodesChange: g,
        nodeLookup: y,
        fitViewQueued: S,
        onNodesChangeMiddlewareMap: x,
      } = t.getState();
      let P = p;
      for (const T of d) P = typeof T == "function" ? T(P) : T;
      let C = oy({ items: P, lookup: y });
      for (const T of x.values()) C = T(C);
      (h && f(P),
        C.length > 0
          ? g?.(C)
          : S &&
            window.requestAnimationFrame(() => {
              const { fitViewQueued: T, nodes: N, setNodes: k } = t.getState();
              T && k(N);
            }));
    }, []),
    o = ly(r),
    s = D.useCallback((d) => {
      const {
        edges: p = [],
        setEdges: f,
        hasDefaultEdges: h,
        onEdgesChange: g,
        edgeLookup: y,
      } = t.getState();
      let S = p;
      for (const x of d) S = typeof x == "function" ? x(S) : x;
      h ? f(S) : g && g(oy({ items: S, lookup: y }));
    }, []),
    u = ly(s),
    l = D.useMemo(() => ({ nodeQueue: o, edgeQueue: u }), []);
  return w.jsx(o1.Provider, { value: l, children: e });
}
function FT() {
  const e = D.useContext(o1);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const $T = (e) => !!e.panZoom;
function su() {
  const e = IT(),
    t = Fe(),
    r = FT(),
    o = je($T),
    s = D.useMemo(() => {
      const u = (g) => t.getState().nodeLookup.get(g),
        l = (g) => {
          r.nodeQueue.push(g);
        },
        d = (g) => {
          r.edgeQueue.push(g);
        },
        p = (g) => {
          const { nodeLookup: y, nodeOrigin: S } = t.getState(),
            x = ay(g) ? g : y.get(g.id),
            P = x.parentId
              ? jv(x.position, x.measured, x.parentId, y, S)
              : x.position,
            C = {
              ...x,
              position: P,
              width: x.measured?.width ?? x.width,
              height: x.measured?.height ?? x.height,
            };
          return ws(C);
        },
        f = (g, y, S = { replace: !1 }) => {
          l((x) =>
            x.map((P) => {
              if (P.id === g) {
                const C = typeof y == "function" ? y(P) : y;
                return S.replace && ay(C) ? C : { ...P, ...C };
              }
              return P;
            }),
          );
        },
        h = (g, y, S = { replace: !1 }) => {
          d((x) =>
            x.map((P) => {
              if (P.id === g) {
                const C = typeof y == "function" ? y(P) : y;
                return S.replace && VT(C) ? C : { ...P, ...C };
              }
              return P;
            }),
          );
        };
      return {
        getNodes: () => t.getState().nodes.map((g) => ({ ...g })),
        getNode: (g) => u(g)?.internals.userNode,
        getInternalNode: u,
        getEdges: () => {
          const { edges: g = [] } = t.getState();
          return g.map((y) => ({ ...y }));
        },
        getEdge: (g) => t.getState().edgeLookup.get(g),
        setNodes: l,
        setEdges: d,
        addNodes: (g) => {
          const y = Array.isArray(g) ? g : [g];
          r.nodeQueue.push((S) => [...S, ...y]);
        },
        addEdges: (g) => {
          const y = Array.isArray(g) ? g : [g];
          r.edgeQueue.push((S) => [...S, ...y]);
        },
        toObject: () => {
          const { nodes: g = [], edges: y = [], transform: S } = t.getState(),
            [x, P, C] = S;
          return {
            nodes: g.map((T) => ({ ...T })),
            edges: y.map((T) => ({ ...T })),
            viewport: { x, y: P, zoom: C },
          };
        },
        deleteElements: async ({ nodes: g = [], edges: y = [] }) => {
          const {
              nodes: S,
              edges: x,
              onNodesDelete: P,
              onEdgesDelete: C,
              triggerNodeChanges: T,
              triggerEdgeChanges: N,
              onDelete: k,
              onBeforeDelete: M,
            } = t.getState(),
            { nodes: I, edges: b } = await dP({
              nodesToRemove: g,
              edgesToRemove: y,
              nodes: S,
              edges: x,
              onBeforeDelete: M,
            }),
            R = b.length > 0,
            V = I.length > 0;
          if (R) {
            const U = b.map(sy);
            (C?.(b), N(U));
          }
          if (V) {
            const U = I.map(sy);
            (P?.(I), T(U));
          }
          return (
            (V || R) && k?.({ nodes: I, edges: b }),
            { deletedNodes: I, deletedEdges: b }
          );
        },
        getIntersectingNodes: (g, y = !0, S) => {
          const x = Ag(g),
            P = x ? g : p(g),
            C = S !== void 0;
          return P
            ? (S || t.getState().nodes).filter((T) => {
                const N = t.getState().nodeLookup.get(T.id);
                if (N && !x && (T.id === g.id || !N.internals.positionAbsolute))
                  return !1;
                const k = ws(C ? T : N),
                  M = Ol(k, P);
                return (
                  (y && M > 0) ||
                  M >= k.width * k.height ||
                  M >= P.width * P.height
                );
              })
            : [];
        },
        isNodeIntersecting: (g, y, S = !0) => {
          const P = Ag(g) ? g : p(g);
          if (!P) return !1;
          const C = Ol(P, y);
          return (
            (S && C > 0) || C >= y.width * y.height || C >= P.width * P.height
          );
        },
        updateNode: f,
        updateNodeData: (g, y, S = { replace: !1 }) => {
          f(
            g,
            (x) => {
              const P = typeof y == "function" ? y(x) : y;
              return S.replace
                ? { ...x, data: P }
                : { ...x, data: { ...x.data, ...P } };
            },
            S,
          );
        },
        updateEdge: h,
        updateEdgeData: (g, y, S = { replace: !1 }) => {
          h(
            g,
            (x) => {
              const P = typeof y == "function" ? y(x) : y;
              return S.replace
                ? { ...x, data: P }
                : { ...x, data: { ...x.data, ...P } };
            },
            S,
          );
        },
        getNodesBounds: (g) => {
          const { nodeLookup: y, nodeOrigin: S } = t.getState();
          return aP(g, { nodeLookup: y, nodeOrigin: S });
        },
        getHandleConnections: ({ type: g, id: y, nodeId: S }) =>
          Array.from(
            t
              .getState()
              .connectionLookup.get(`${S}-${g}${y ? `-${y}` : ""}`)
              ?.values() ?? [],
          ),
        getNodeConnections: ({ type: g, handleId: y, nodeId: S }) =>
          Array.from(
            t
              .getState()
              .connectionLookup.get(
                `${S}${g ? (y ? `-${g}-${y}` : `-${g}`) : ""}`,
              )
              ?.values() ?? [],
          ),
        fitView: async (g) => {
          const y = t.getState().fitViewResolver ?? pP();
          return (
            t.setState({
              fitViewQueued: !0,
              fitViewOptions: g,
              fitViewResolver: y,
            }),
            r.nodeQueue.push((S) => [...S]),
            y.promise
          );
        },
      };
    }, []);
  return D.useMemo(() => ({ ...s, ...e, viewportInitialized: o }), [o]);
}
const uy = (e) => e.selected,
  BT = typeof window < "u" ? window : void 0;
function HT({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const r = Fe(),
    { deleteElements: o } = su(),
    s = ks(e, { actInsideInputWithModifier: !1 }),
    u = ks(t, { target: BT });
  (D.useEffect(() => {
    if (s) {
      const { edges: l, nodes: d } = r.getState();
      (o({ nodes: d.filter(uy), edges: l.filter(uy) }),
        r.setState({ nodesSelectionActive: !1 }));
    }
  }, [s]),
    D.useEffect(() => {
      r.setState({ multiSelectionActive: u });
    }, [u]));
}
function UT(e) {
  const t = Fe();
  D.useEffect(() => {
    const r = () => {
      if (!e.current || !(e.current.checkVisibility?.() ?? !0)) return !1;
      const o = Xf(e.current);
      ((o.height === 0 || o.width === 0) &&
        t.getState().onError?.("004", dn.error004()),
        t.setState({ width: o.width || 500, height: o.height || 500 }));
    };
    if (e.current) {
      (r(), window.addEventListener("resize", r));
      const o = new ResizeObserver(() => r());
      return (
        o.observe(e.current),
        () => {
          (window.removeEventListener("resize", r),
            o && e.current && o.unobserve(e.current));
        }
      );
    }
  }, []);
}
const au = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  WT = (e) => ({
    userSelectionActive: e.userSelectionActive,
    lib: e.lib,
    connectionInProgress: e.connection.inProgress,
  });
function GT({
  onPaneContextMenu: e,
  zoomOnScroll: t = !0,
  zoomOnPinch: r = !0,
  panOnScroll: o = !1,
  panOnScrollSpeed: s = 0.5,
  panOnScrollMode: u = qr.Free,
  zoomOnDoubleClick: l = !0,
  panOnDrag: d = !0,
  defaultViewport: p,
  translateExtent: f,
  minZoom: h,
  maxZoom: g,
  zoomActivationKeyCode: y,
  preventScrolling: S = !0,
  children: x,
  noWheelClassName: P,
  noPanClassName: C,
  onViewportChange: T,
  isControlledViewport: N,
  paneClickDistance: k,
  selectionOnDrag: M,
}) {
  const I = Fe(),
    b = D.useRef(null),
    { userSelectionActive: R, lib: V, connectionInProgress: U } = je(WT, We),
    K = ks(y),
    Z = D.useRef();
  UT(b);
  const ee = D.useCallback(
    (J) => {
      (T?.({ x: J[0], y: J[1], zoom: J[2] }),
        N || I.setState({ transform: J }));
    },
    [T, N],
  );
  return (
    D.useEffect(() => {
      if (b.current) {
        Z.current = qP({
          domNode: b.current,
          minZoom: h,
          maxZoom: g,
          translateExtent: f,
          viewport: p,
          onDraggingChange: (F) =>
            I.setState((W) => (W.paneDragging === F ? W : { paneDragging: F })),
          onPanZoomStart: (F, W) => {
            const { onViewportChangeStart: L, onMoveStart: $ } = I.getState();
            ($?.(F, W), L?.(W));
          },
          onPanZoom: (F, W) => {
            const { onViewportChange: L, onMove: $ } = I.getState();
            ($?.(F, W), L?.(W));
          },
          onPanZoomEnd: (F, W) => {
            const { onViewportChangeEnd: L, onMoveEnd: $ } = I.getState();
            ($?.(F, W), L?.(W));
          },
        });
        const { x: J, y: j, zoom: H } = Z.current.getViewport();
        return (
          I.setState({
            panZoom: Z.current,
            transform: [J, j, H],
            domNode: b.current.closest(".react-flow"),
          }),
          () => {
            Z.current?.destroy();
          }
        );
      }
    }, []),
    D.useEffect(() => {
      Z.current?.update({
        onPaneContextMenu: e,
        zoomOnScroll: t,
        zoomOnPinch: r,
        panOnScroll: o,
        panOnScrollSpeed: s,
        panOnScrollMode: u,
        zoomOnDoubleClick: l,
        panOnDrag: d,
        zoomActivationKeyPressed: K,
        preventScrolling: S,
        noPanClassName: C,
        userSelectionActive: R,
        noWheelClassName: P,
        lib: V,
        onTransformChange: ee,
        connectionInProgress: U,
        selectionOnDrag: M,
        paneClickDistance: k,
      });
    }, [e, t, r, o, s, u, l, d, K, S, C, R, P, V, ee, U, M, k]),
    w.jsx("div", {
      className: "react-flow__renderer",
      ref: b,
      style: au,
      children: x,
    })
  );
}
const XT = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect,
});
function YT() {
  const { userSelectionActive: e, userSelectionRect: t } = je(XT, We);
  return e && t
    ? w.jsx("div", {
        className: "react-flow__selection react-flow__container",
        style: {
          width: t.width,
          height: t.height,
          transform: `translate(${t.x}px, ${t.y}px)`,
        },
      })
    : null;
}
const Pd = (e, t) => (r) => {
    r.target === t.current && e?.(r);
  },
  KT = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    dragging: e.paneDragging,
    panBy: e.panBy,
    autoPanSpeed: e.autoPanSpeed,
  });
function ZT({
  isSelecting: e,
  selectionKeyPressed: t,
  selectionMode: r = Ji.Full,
  panOnDrag: o,
  autoPanOnSelection: s,
  paneClickDistance: u,
  selectionOnDrag: l,
  onSelectionStart: d,
  onSelectionEnd: p,
  onPaneClick: f,
  onPaneContextMenu: h,
  onPaneScroll: g,
  onPaneMouseEnter: y,
  onPaneMouseMove: S,
  onPaneMouseLeave: x,
  children: P,
}) {
  const C = D.useRef(0),
    T = Fe(),
    {
      userSelectionActive: N,
      elementsSelectable: k,
      dragging: M,
      panBy: I,
      autoPanSpeed: b,
    } = je(KT, We),
    R = k && (e || N),
    V = D.useRef(null),
    U = D.useRef(),
    K = D.useRef(new Set()),
    Z = D.useRef(new Set()),
    ee = D.useRef(!1),
    J = D.useRef(!1),
    j = D.useRef({ x: 0, y: 0 }),
    H = D.useRef(!1),
    F = (Q) => {
      if (J.current || ee.current || T.getState().connection.inProgress) {
        ((J.current = !1), (ee.current = !1));
        return;
      }
      (f?.(Q),
        T.getState().resetSelectedElements(),
        T.setState({ nodesSelectionActive: !1 }));
    },
    W = (Q) => {
      if (Array.isArray(o) && o?.includes(2)) {
        Q.preventDefault();
        return;
      }
      h?.(Q);
    },
    L = g ? (Q) => g(Q) : void 0,
    $ = (Q) => {
      J.current && (Q.stopPropagation(), (J.current = !1));
    },
    G = (Q) => {
      const { domNode: ae, transform: ke } = T.getState();
      if (((U.current = ae?.getBoundingClientRect()), !U.current)) return;
      const Pe = Q.target === V.current;
      if (
        (!Pe && !!Q.target.closest(".nokey")) ||
        !e ||
        !((l && Pe) || t) ||
        Q.button !== 0 ||
        !Q.isPrimary
      )
        return;
      (Q.target?.setPointerCapture?.(Q.pointerId), (J.current = !1));
      const { x: Me, y: be } = un(Q.nativeEvent, U.current),
        De = Is({ x: Me, y: be }, ke);
      (T.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: De.x,
          startY: De.y,
          x: Me,
          y: be,
        },
      }),
        Pe || (Q.stopPropagation(), Q.preventDefault()));
    };
  function _(Q, ae) {
    const { userSelectionRect: ke } = T.getState();
    if (!ke) return;
    const {
        transform: Pe,
        nodeLookup: xe,
        edgeLookup: Se,
        connectionLookup: Me,
        triggerNodeChanges: be,
        triggerEdgeChanges: De,
        defaultEdgeOptions: Qe,
      } = T.getState(),
      Ft = { x: ke.startX, y: ke.startY },
      { x: wt, y: ut } = to(Ft, Pe),
      ct = {
        startX: Ft.x,
        startY: Ft.y,
        x: Q < wt ? Q : wt,
        y: ae < ut ? ae : ut,
        width: Math.abs(Q - wt),
        height: Math.abs(ae - ut),
      },
      _n = K.current,
      hn = Z.current;
    ((K.current = new Set(
      Uf(xe, ct, Pe, r === Ji.Partial, !0).map((St) => St.id),
    )),
      (Z.current = new Set()));
    const pn = Qe?.selectable ?? !0;
    for (const St of K.current) {
      const $t = Me.get(St);
      if ($t)
        for (const { edgeId: _t } of $t.values()) {
          const Bt = Se.get(_t);
          Bt && (Bt.selectable ?? pn) && Z.current.add(_t);
        }
    }
    if (!Ig(_n, K.current)) {
      const St = Bi(xe, K.current, !0);
      be(St);
    }
    if (!Ig(hn, Z.current)) {
      const St = Bi(Se, Z.current);
      De(St);
    }
    T.setState({
      userSelectionRect: ct,
      userSelectionActive: !0,
      nodesSelectionActive: !1,
    });
  }
  function O() {
    if (!s || !U.current) return;
    const [Q, ae] = Wf(j.current, U.current, b);
    I({ x: Q, y: ae }).then((ke) => {
      if (!J.current || !ke) {
        C.current = requestAnimationFrame(O);
        return;
      }
      const { x: Pe, y: xe } = j.current;
      (_(Pe, xe), (C.current = requestAnimationFrame(O)));
    });
  }
  const oe = () => {
    (cancelAnimationFrame(C.current), (C.current = 0), (H.current = !1));
  };
  D.useEffect(() => () => oe(), []);
  const re = (Q) => {
      const {
        userSelectionRect: ae,
        transform: ke,
        resetSelectedElements: Pe,
      } = T.getState();
      if (!U.current || !ae) return;
      const { x: xe, y: Se } = un(Q.nativeEvent, U.current);
      j.current = { x: xe, y: Se };
      const Me = to({ x: ae.startX, y: ae.startY }, ke);
      if (!J.current) {
        const be = t ? 0 : u;
        if (Math.hypot(xe - Me.x, Se - Me.y) <= be) return;
        (Pe(), d?.(Q));
      }
      ((J.current = !0), H.current || (O(), (H.current = !0)), _(xe, Se));
    },
    le = (Q) => {
      if (!R) {
        Q.target === V.current &&
          T.getState().connection.inProgress &&
          (ee.current = !0);
        return;
      }
      Q.button === 0 &&
        (Q.target?.releasePointerCapture?.(Q.pointerId),
        !N &&
          Q.target === V.current &&
          T.getState().userSelectionRect &&
          F?.(Q),
        T.setState({ userSelectionActive: !1, userSelectionRect: null }),
        J.current &&
          (p?.(Q), T.setState({ nodesSelectionActive: K.current.size > 0 })),
        oe());
    },
    ce = (Q) => {
      (Q.target?.releasePointerCapture?.(Q.pointerId), oe());
    },
    ue = o === !0 || (Array.isArray(o) && o.includes(0));
  return w.jsxs("div", {
    className: qe([
      "react-flow__pane",
      { draggable: ue, dragging: M, selection: e },
    ]),
    onClick: R ? void 0 : Pd(F, V),
    onContextMenu: Pd(W, V),
    onWheel: Pd(L, V),
    onPointerEnter: R ? void 0 : y,
    onPointerMove: R ? re : S,
    onPointerUp: le,
    onPointerCancel: R ? ce : void 0,
    onPointerDownCapture: R ? G : void 0,
    onClickCapture: R ? $ : void 0,
    onPointerLeave: x,
    ref: V,
    style: au,
    children: [P, w.jsx(YT, {})],
  });
}
function rf({ id: e, store: t, unselect: r = !1, nodeRef: o }) {
  const {
      addSelectedNodes: s,
      unselectNodesAndEdges: u,
      multiSelectionActive: l,
      nodeLookup: d,
      onError: p,
    } = t.getState(),
    f = d.get(e);
  if (!f) {
    p?.("012", dn.error012(e));
    return;
  }
  (t.setState({ nodesSelectionActive: !1 }),
    f.selected
      ? (r || (f.selected && l)) &&
        (u({ nodes: [f], edges: [] }),
        requestAnimationFrame(() => o?.current?.blur()))
      : s([e]));
}
function s1({
  nodeRef: e,
  disabled: t = !1,
  noDragClassName: r,
  handleSelector: o,
  nodeId: s,
  isSelectable: u,
  nodeClickDistance: l,
}) {
  const d = Fe(),
    [p, f] = D.useState(!1),
    h = D.useRef();
  return (
    D.useEffect(() => {
      if (!t)
        return (
          (h.current = VP({
            getStoreItems: () => d.getState(),
            onNodeMouseDown: (g) => {
              rf({ id: g, store: d, nodeRef: e });
            },
            onDragStart: () => {
              f(!0);
            },
            onDragStop: () => {
              f(!1);
            },
          })),
          () => {
            (h.current?.destroy(), (h.current = void 0));
          }
        );
    }, [t, d, e]),
    D.useEffect(() => {
      t ||
        !e.current ||
        !h.current ||
        h.current.update({
          noDragClassName: r,
          handleSelector: o,
          domNode: e.current,
          isSelectable: u,
          nodeId: s,
          nodeClickDistance: l,
        });
    }, [r, o, t, u, e, s, l]),
    p
  );
}
const qT = (e) => (t) =>
  t.selected && (t.draggable || (e && typeof t.draggable > "u"));
function a1() {
  const e = Fe();
  return D.useCallback((r) => {
    const {
        nodeExtent: o,
        snapToGrid: s,
        snapGrid: u,
        nodesDraggable: l,
        onError: d,
        updateNodePositions: p,
        nodeLookup: f,
        nodeOrigin: h,
      } = e.getState(),
      g = new Map(),
      y = qT(l),
      S = s ? u[0] : 5,
      x = s ? u[1] : 5,
      P = r.direction.x * S * r.factor,
      C = r.direction.y * x * r.factor;
    for (const [, T] of f) {
      if (!y(T)) continue;
      let N = {
        x: T.internals.positionAbsolute.x + P,
        y: T.internals.positionAbsolute.y + C,
      };
      s && (N = As(N, u));
      const { position: k, positionAbsolute: M } = Pv({
        nodeId: T.id,
        nextPosition: N,
        nodeLookup: f,
        nodeExtent: o,
        nodeOrigin: h,
        onError: d,
      });
      ((T.position = k), (T.internals.positionAbsolute = M), g.set(T.id, T));
    }
    p(g);
  }, []);
}
const eh = D.createContext(null),
  QT = eh.Provider;
eh.Consumer;
const l1 = () => D.useContext(eh),
  JT = (e) => ({
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName,
    rfId: e.rfId,
  }),
  u1 = D.createContext(null);
function eM({ children: e }) {
  const t = je(JT, We);
  return w.jsx(u1.Provider, { value: t, children: e });
}
function tM() {
  const e = D.useContext(u1);
  if (!e)
    throw new Error(
      "useHandleConfig must be used within a HandleConfigProvider",
    );
  return e;
}
const nM = {
    connectingFrom: !1,
    connectingTo: !1,
    clickConnecting: !1,
    isPossibleEndHandle: !0,
    connectionInProcess: !1,
    clickConnectionInProcess: !1,
    valid: !1,
  },
  rM = (e, t, r) => (o) => {
    const {
        connectionClickStartHandle: s,
        connectionMode: u,
        connection: l,
      } = o,
      { fromHandle: d, toHandle: p, isValid: f } = l;
    if (!d && !s) return nM;
    const h = p?.nodeId === e && p?.id === t && p?.type === r;
    return {
      connectingFrom: d?.nodeId === e && d?.id === t && d?.type === r,
      connectingTo: h,
      clickConnecting: s?.nodeId === e && s?.id === t && s?.type === r,
      isPossibleEndHandle:
        u === ni.Strict ? d?.type !== r : e !== d?.nodeId || t !== d?.id,
      connectionInProcess: !!d,
      clickConnectionInProcess: !!s,
      valid: h && f,
    };
  };
function iM(
  {
    type: e = "source",
    position: t = we.Top,
    isValidConnection: r,
    isConnectable: o = !0,
    isConnectableStart: s = !0,
    isConnectableEnd: u = !0,
    id: l,
    onConnect: d,
    children: p,
    className: f,
    onMouseDown: h,
    onTouchStart: g,
    ...y
  },
  S,
) {
  const x = l || null,
    P = e === "target",
    C = Fe(),
    T = l1(),
    { connectOnClick: N, noPanClassName: k, rfId: M } = tM(),
    {
      connectingFrom: I,
      connectingTo: b,
      clickConnecting: R,
      isPossibleEndHandle: V,
      connectionInProcess: U,
      clickConnectionInProcess: K,
      valid: Z,
    } = je(rM(T, x, e), We);
  T || C.getState().onError?.("010", dn.error010());
  const ee = (H) => {
      const {
          defaultEdgeOptions: F,
          onConnect: W,
          hasDefaultEdges: L,
        } = C.getState(),
        $ = { ...F, ...H };
      if (L) {
        const { edges: G, setEdges: _, onError: O } = C.getState();
        _(LT($, G, { onError: O }));
      }
      (W?.($), d?.($));
    },
    J = (H) => {
      if (!T) return;
      const F = Dv(H.nativeEvent);
      if (s && ((F && H.button === 0) || !F)) {
        const W = C.getState();
        nf.onPointerDown(H.nativeEvent, {
          handleDomNode: H.currentTarget,
          autoPanOnConnect: W.autoPanOnConnect,
          connectionMode: W.connectionMode,
          connectionRadius: W.connectionRadius,
          domNode: W.domNode,
          nodeLookup: W.nodeLookup,
          lib: W.lib,
          isTarget: P,
          handleId: x,
          nodeId: T,
          flowId: W.rfId,
          panBy: W.panBy,
          cancelConnection: W.cancelConnection,
          onConnectStart: W.onConnectStart,
          onConnectEnd: (...L) => C.getState().onConnectEnd?.(...L),
          updateConnection: W.updateConnection,
          onConnect: ee,
          isValidConnection:
            r || ((...L) => C.getState().isValidConnection?.(...L) ?? !0),
          getTransform: () => C.getState().transform,
          getFromHandle: () => C.getState().connection.fromHandle,
          autoPanSpeed: W.autoPanSpeed,
          dragThreshold: W.connectionDragThreshold,
        });
      }
      F ? h?.(H) : g?.(H);
    },
    j = (H) => {
      const {
        onClickConnectStart: F,
        onClickConnectEnd: W,
        connectionClickStartHandle: L,
        connectionMode: $,
        isValidConnection: G,
        lib: _,
        rfId: O,
        nodeLookup: oe,
        connection: re,
      } = C.getState();
      if (!T || (!L && !s)) return;
      if (!L) {
        (F?.(H.nativeEvent, { nodeId: T, handleId: x, handleType: e }),
          C.setState({
            connectionClickStartHandle: { nodeId: T, type: e, id: x },
          }));
        return;
      }
      const le = Av(H.target),
        ce = r || G,
        { connection: ue, isValid: Q } = nf.isValid(H.nativeEvent, {
          handle: { nodeId: T, id: x, type: e },
          connectionMode: $,
          fromNodeId: L.nodeId,
          fromHandleId: L.id || null,
          fromType: L.type,
          isValidConnection: ce,
          flowId: O,
          doc: le,
          lib: _,
          nodeLookup: oe,
        });
      Q && ue && ee(ue);
      const ae = structuredClone(re);
      (delete ae.inProgress,
        (ae.toPosition = ae.toHandle ? ae.toHandle.position : null),
        W?.(H, ae),
        C.setState({ connectionClickStartHandle: null }));
    };
  return w.jsx("div", {
    "data-handleid": x,
    "data-nodeid": T,
    "data-handlepos": t,
    "data-id": `${M}-${T}-${x}-${e}`,
    className: qe([
      "react-flow__handle",
      `react-flow__handle-${t}`,
      "nodrag",
      k,
      f,
      {
        source: !P,
        target: P,
        connectable: o,
        connectablestart: s,
        connectableend: u,
        clickconnecting: R,
        connectingfrom: I,
        connectingto: b,
        valid: Z,
        connectionindicator: o && (!U || V) && (U || K ? u : s),
      },
    ]),
    onMouseDown: J,
    onTouchStart: J,
    onClick: N ? j : void 0,
    ref: S,
    ...y,
    children: p,
  });
}
const vr = D.memo(r1(iM));
function oM({ data: e, isConnectable: t, sourcePosition: r = we.Bottom }) {
  return w.jsxs(w.Fragment, {
    children: [
      e?.label,
      w.jsx(vr, { type: "source", position: r, isConnectable: t }),
    ],
  });
}
function sM({
  data: e,
  isConnectable: t,
  targetPosition: r = we.Top,
  sourcePosition: o = we.Bottom,
}) {
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(vr, { type: "target", position: r, isConnectable: t }),
      e?.label,
      w.jsx(vr, { type: "source", position: o, isConnectable: t }),
    ],
  });
}
function aM() {
  return null;
}
function lM({ data: e, isConnectable: t, targetPosition: r = we.Top }) {
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(vr, { type: "target", position: r, isConnectable: t }),
      e?.label,
    ],
  });
}
const Fl = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
  },
  cy = { input: oM, default: sM, output: lM, group: aM };
function uM(e) {
  return e.internals.handleBounds === void 0
    ? {
        width: e.width ?? e.initialWidth ?? e.style?.width,
        height: e.height ?? e.initialHeight ?? e.style?.height,
      }
    : { width: e.width ?? e.style?.width, height: e.height ?? e.style?.height };
}
const cM = (e) => {
  const {
    width: t,
    height: r,
    x: o,
    y: s,
  } = js(e.nodeLookup, { filter: (u) => !!u.selected });
  return {
    width: ln(t) ? t : null,
    height: ln(r) ? r : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${s}px)`,
  };
};
function dM({
  onSelectionContextMenu: e,
  noPanClassName: t,
  disableKeyboardA11y: r,
}) {
  const o = Fe(),
    {
      width: s,
      height: u,
      transformString: l,
      userSelectionActive: d,
    } = je(cM, We),
    p = a1(),
    f = D.useRef(null);
  D.useEffect(() => {
    r || f.current?.focus({ preventScroll: !0 });
  }, [r]);
  const h = !d && s !== null && u !== null;
  if ((s1({ nodeRef: f, disabled: !h }), !h)) return null;
  const g = e
      ? (S) => {
          const x = o.getState().nodes.filter((P) => P.selected);
          e(S, x);
        }
      : void 0,
    y = (S) => {
      Object.prototype.hasOwnProperty.call(Fl, S.key) &&
        (S.preventDefault(),
        p({ direction: Fl[S.key], factor: S.shiftKey ? 4 : 1 }));
    };
  return w.jsx("div", {
    className: qe(["react-flow__nodesselection", "react-flow__container", t]),
    style: { transform: l },
    children: w.jsx("div", {
      ref: f,
      className: "react-flow__nodesselection-rect",
      onContextMenu: g,
      tabIndex: r ? void 0 : -1,
      onKeyDown: r ? void 0 : y,
      style: { width: s, height: u },
    }),
  });
}
const dy = typeof window < "u" ? window : void 0,
  fM = (e) => ({
    nodesSelectionActive: e.nodesSelectionActive,
    userSelectionActive: e.userSelectionActive,
  });
function c1({
  children: e,
  onPaneClick: t,
  onPaneMouseEnter: r,
  onPaneMouseMove: o,
  onPaneMouseLeave: s,
  onPaneContextMenu: u,
  onPaneScroll: l,
  paneClickDistance: d,
  deleteKeyCode: p,
  selectionKeyCode: f,
  selectionOnDrag: h,
  selectionMode: g,
  onSelectionStart: y,
  onSelectionEnd: S,
  multiSelectionKeyCode: x,
  panActivationKeyCode: P,
  zoomActivationKeyCode: C,
  elementsSelectable: T,
  zoomOnScroll: N,
  zoomOnPinch: k,
  panOnScroll: M,
  panOnScrollSpeed: I,
  panOnScrollMode: b,
  zoomOnDoubleClick: R,
  panOnDrag: V,
  autoPanOnSelection: U,
  defaultViewport: K,
  translateExtent: Z,
  minZoom: ee,
  maxZoom: J,
  preventScrolling: j,
  onSelectionContextMenu: H,
  noWheelClassName: F,
  noPanClassName: W,
  disableKeyboardA11y: L,
  onViewportChange: $,
  isControlledViewport: G,
}) {
  const { nodesSelectionActive: _, userSelectionActive: O } = je(fM, We),
    oe = ks(f, { target: dy }),
    re = ks(P, { target: dy }),
    le = re || V,
    ce = re || M,
    ue = h && le !== !0,
    Q = oe || O || ue;
  return (
    HT({ deleteKeyCode: p, multiSelectionKeyCode: x }),
    w.jsx(GT, {
      onPaneContextMenu: u,
      elementsSelectable: T,
      zoomOnScroll: N,
      zoomOnPinch: k,
      panOnScroll: ce,
      panOnScrollSpeed: I,
      panOnScrollMode: b,
      zoomOnDoubleClick: R,
      panOnDrag: !oe && le,
      defaultViewport: K,
      translateExtent: Z,
      minZoom: ee,
      maxZoom: J,
      zoomActivationKeyCode: C,
      preventScrolling: j,
      noWheelClassName: F,
      noPanClassName: W,
      onViewportChange: $,
      isControlledViewport: G,
      paneClickDistance: d,
      selectionOnDrag: ue,
      children: w.jsxs(ZT, {
        onSelectionStart: y,
        onSelectionEnd: S,
        onPaneClick: t,
        onPaneMouseEnter: r,
        onPaneMouseMove: o,
        onPaneMouseLeave: s,
        onPaneContextMenu: u,
        onPaneScroll: l,
        panOnDrag: le,
        autoPanOnSelection: U,
        isSelecting: !!Q,
        selectionMode: g,
        selectionKeyPressed: oe,
        paneClickDistance: d,
        selectionOnDrag: ue,
        children: [
          e,
          _ &&
            w.jsx(dM, {
              onSelectionContextMenu: H,
              noPanClassName: W,
              disableKeyboardA11y: L,
            }),
        ],
      }),
    })
  );
}
c1.displayName = "FlowRenderer";
const hM = D.memo(c1),
  pM = (e) => (t) =>
    e
      ? Uf(
          t.nodeLookup,
          { x: 0, y: 0, width: t.width, height: t.height },
          t.transform,
          !0,
        ).map((r) => r.id)
      : Array.from(t.nodeLookup.keys());
function mM(e) {
  return je(D.useCallback(pM(e), [e]), We);
}
const gM = (e) => e.updateNodeInternals;
function yM() {
  const e = je(gM),
    [t] = D.useState(() =>
      typeof ResizeObserver > "u"
        ? null
        : new ResizeObserver((r) => {
            const o = new Map();
            (r.forEach((s) => {
              const u = s.target.getAttribute("data-id");
              o.set(u, { id: u, nodeElement: s.target, force: !0 });
            }),
              e(o));
          }),
    );
  return (
    D.useEffect(
      () => () => {
        t?.disconnect();
      },
      [t],
    ),
    t
  );
}
function vM({ node: e, nodeType: t, hasDimensions: r, resizeObserver: o }) {
  const s = Fe(),
    u = D.useRef(null),
    l = D.useRef(null),
    d = D.useRef(e.sourcePosition),
    p = D.useRef(e.targetPosition),
    f = D.useRef(t),
    h = r && !!e.internals.handleBounds;
  return (
    D.useEffect(() => {
      u.current &&
        !e.hidden &&
        (!h || l.current !== u.current) &&
        (l.current && o?.unobserve(l.current),
        o?.observe(u.current),
        (l.current = u.current));
    }, [h, e.hidden]),
    D.useEffect(
      () => () => {
        l.current && (o?.unobserve(l.current), (l.current = null));
      },
      [],
    ),
    D.useEffect(() => {
      if (u.current) {
        const g = f.current !== t,
          y = d.current !== e.sourcePosition,
          S = p.current !== e.targetPosition;
        (g || y || S) &&
          ((f.current = t),
          (d.current = e.sourcePosition),
          (p.current = e.targetPosition),
          s
            .getState()
            .updateNodeInternals(
              new Map([
                [e.id, { id: e.id, nodeElement: u.current, force: !0 }],
              ]),
            ));
      }
    }, [e.id, t, e.sourcePosition, e.targetPosition]),
    u
  );
}
function xM({
  id: e,
  onClick: t,
  onMouseEnter: r,
  onMouseMove: o,
  onMouseLeave: s,
  onContextMenu: u,
  onDoubleClick: l,
  nodesDraggable: d,
  elementsSelectable: p,
  nodesConnectable: f,
  nodesFocusable: h,
  resizeObserver: g,
  noDragClassName: y,
  noPanClassName: S,
  disableKeyboardA11y: x,
  rfId: P,
  nodeTypes: C,
  nodeClickDistance: T,
  onError: N,
}) {
  const {
    node: k,
    internals: M,
    isParent: I,
  } = je((Q) => {
    const ae = Q.nodeLookup.get(e),
      ke = Q.parentLookup.has(e);
    return { node: ae, internals: ae.internals, isParent: ke };
  }, We);
  let b = k.type || "default",
    R = C?.[b] || cy[b];
  R === void 0 &&
    (N?.("003", dn.error003(b)),
    (b = "default"),
    (R = C?.default || cy.default));
  const V = !!(k.draggable || (d && typeof k.draggable > "u")),
    U = !!(k.selectable || (p && typeof k.selectable > "u")),
    K = !!(k.connectable || (f && typeof k.connectable > "u")),
    Z = !!(k.focusable || (h && typeof k.focusable > "u")),
    ee = Fe(),
    J = _v(k),
    j = vM({ node: k, nodeType: b, hasDimensions: J, resizeObserver: g }),
    H = s1({
      nodeRef: j,
      disabled: k.hidden || !V,
      noDragClassName: y,
      handleSelector: k.dragHandle,
      nodeId: e,
      isSelectable: U,
      nodeClickDistance: T,
    }),
    F = a1();
  if (k.hidden) return null;
  const W = bn(k),
    L = uM(k),
    $ = U || V || t || r || o || s,
    G = r ? (Q) => r(Q, { ...M.userNode }) : void 0,
    _ = o ? (Q) => o(Q, { ...M.userNode }) : void 0,
    O = s ? (Q) => s(Q, { ...M.userNode }) : void 0,
    oe = u ? (Q) => u(Q, { ...M.userNode }) : void 0,
    re = l ? (Q) => l(Q, { ...M.userNode }) : void 0,
    le = (Q) => {
      const { selectNodesOnDrag: ae, nodeDragThreshold: ke } = ee.getState();
      (U && (!ae || !V || ke > 0) && rf({ id: e, store: ee, nodeRef: j }),
        t && t(Q, { ...M.userNode }));
    },
    ce = (Q) => {
      if (!(Iv(Q.nativeEvent) || x)) {
        if (wv.includes(Q.key) && U) {
          const ae = Q.key === "Escape";
          rf({ id: e, store: ee, unselect: ae, nodeRef: j });
        } else if (
          V &&
          k.selected &&
          Object.prototype.hasOwnProperty.call(Fl, Q.key)
        ) {
          Q.preventDefault();
          const { ariaLabelConfig: ae } = ee.getState();
          (ee.setState({
            ariaLiveMessage: ae["node.a11yDescription.ariaLiveMessage"]({
              direction: Q.key.replace("Arrow", "").toLowerCase(),
              x: ~~M.positionAbsolute.x,
              y: ~~M.positionAbsolute.y,
            }),
          }),
            F({ direction: Fl[Q.key], factor: Q.shiftKey ? 4 : 1 }));
        }
      }
    },
    ue = () => {
      if (x || !j.current?.matches(":focus-visible")) return;
      const {
        transform: Q,
        width: ae,
        height: ke,
        autoPanOnNodeFocus: Pe,
        setCenter: xe,
      } = ee.getState();
      if (!Pe) return;
      Uf(new Map([[e, k]]), { x: 0, y: 0, width: ae, height: ke }, Q, !0)
        .length > 0 ||
        xe(k.position.x + W.width / 2, k.position.y + W.height / 2, {
          zoom: Q[2],
        });
    };
  return w.jsx("div", {
    className: qe([
      "react-flow__node",
      `react-flow__node-${b}`,
      { [S]: V },
      k.className,
      {
        selected: k.selected,
        selectable: U,
        parent: I,
        draggable: V,
        dragging: H,
      },
    ]),
    ref: j,
    style: {
      zIndex: M.z,
      transform: `translate(${M.positionAbsolute.x}px,${M.positionAbsolute.y}px)`,
      pointerEvents: $ ? "all" : "none",
      visibility: J ? "visible" : "hidden",
      ...k.style,
      ...L,
    },
    "data-id": e,
    "data-testid": `rf__node-${e}`,
    onMouseEnter: G,
    onMouseMove: _,
    onMouseLeave: O,
    onContextMenu: oe,
    onClick: le,
    onDoubleClick: re,
    onKeyDown: Z ? ce : void 0,
    tabIndex: Z ? 0 : void 0,
    onFocus: Z ? ue : void 0,
    role: k.ariaRole ?? (Z ? "group" : void 0),
    "aria-roledescription": "node",
    "aria-describedby": x ? void 0 : `${qv}-${P}`,
    "aria-label": k.ariaLabel,
    ...k.domAttributes,
    children: w.jsx(QT, {
      value: e,
      children: w.jsx(R, {
        id: e,
        data: k.data,
        type: b,
        positionAbsoluteX: M.positionAbsolute.x,
        positionAbsoluteY: M.positionAbsolute.y,
        selected: k.selected ?? !1,
        selectable: U,
        draggable: V,
        deletable: k.deletable ?? !0,
        isConnectable: K,
        sourcePosition: k.sourcePosition,
        targetPosition: k.targetPosition,
        dragging: H,
        dragHandle: k.dragHandle,
        zIndex: M.z,
        parentId: k.parentId,
        ...W,
      }),
    }),
  });
}
var wM = D.memo(xM);
const SM = (e) => ({
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError,
});
function d1(e) {
  const {
      nodesConnectable: t,
      nodesFocusable: r,
      elementsSelectable: o,
      onError: s,
    } = je(SM, We),
    u = mM(e.onlyRenderVisibleElements),
    l = yM();
  return w.jsx("div", {
    className: "react-flow__nodes",
    style: au,
    children: u.map((d) =>
      w.jsx(
        wM,
        {
          id: d,
          nodeTypes: e.nodeTypes,
          nodeExtent: e.nodeExtent,
          onClick: e.onNodeClick,
          onMouseEnter: e.onNodeMouseEnter,
          onMouseMove: e.onNodeMouseMove,
          onMouseLeave: e.onNodeMouseLeave,
          onContextMenu: e.onNodeContextMenu,
          onDoubleClick: e.onNodeDoubleClick,
          noDragClassName: e.noDragClassName,
          noPanClassName: e.noPanClassName,
          rfId: e.rfId,
          disableKeyboardA11y: e.disableKeyboardA11y,
          resizeObserver: l,
          nodesDraggable: e.nodesDraggable ?? !0,
          nodesConnectable: t,
          nodesFocusable: r,
          elementsSelectable: o,
          nodeClickDistance: e.nodeClickDistance,
          onError: s,
        },
        d,
      ),
    ),
  });
}
d1.displayName = "NodeRenderer";
const kM = D.memo(d1);
function EM(e) {
  return je(
    D.useCallback(
      (r) => {
        if (!e) return r.edges.map((s) => s.id);
        const o = [];
        if (r.width && r.height)
          for (const s of r.edges) {
            const u = r.nodeLookup.get(s.source),
              l = r.nodeLookup.get(s.target);
            u &&
              l &&
              vP({
                sourceNode: u,
                targetNode: l,
                width: r.width,
                height: r.height,
                transform: r.transform,
              }) &&
              o.push(s.id);
          }
        return o;
      },
      [e],
    ),
    We,
  );
}
const CM = ({ color: e = "none", strokeWidth: t = 1 }) => {
    const r = { strokeWidth: t, ...(e && { stroke: e }) };
    return w.jsx("polyline", {
      className: "arrow",
      style: r,
      strokeLinecap: "round",
      fill: "none",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4",
    });
  },
  PM = ({ color: e = "none", strokeWidth: t = 1 }) => {
    const r = { strokeWidth: t, ...(e && { stroke: e, fill: e }) };
    return w.jsx("polyline", {
      className: "arrowclosed",
      style: r,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4 -5,-4",
    });
  },
  fy = { [Vl.Arrow]: CM, [Vl.ArrowClosed]: PM };
function TM(e) {
  const t = Fe();
  return D.useMemo(
    () =>
      Object.prototype.hasOwnProperty.call(fy, e)
        ? fy[e]
        : (t.getState().onError?.("009", dn.error009(e)), null),
    [e],
  );
}
const MM = ({
    id: e,
    type: t,
    color: r,
    width: o = 12.5,
    height: s = 12.5,
    markerUnits: u = "strokeWidth",
    strokeWidth: l,
    orient: d = "auto-start-reverse",
  }) => {
    const p = TM(t);
    return p
      ? w.jsx("marker", {
          className: "react-flow__arrowhead",
          id: e,
          markerWidth: `${o}`,
          markerHeight: `${s}`,
          viewBox: "-10 -10 20 20",
          markerUnits: u,
          orient: d,
          refX: "0",
          refY: "0",
          children: w.jsx(p, { color: r, strokeWidth: l }),
        })
      : null;
  },
  f1 = ({ defaultColor: e, rfId: t }) => {
    const r = je((u) => u.edges),
      o = je((u) => u.defaultEdgeOptions),
      s = D.useMemo(
        () =>
          TP(r, {
            id: t,
            defaultColor: e,
            defaultMarkerStart: o?.markerStart,
            defaultMarkerEnd: o?.markerEnd,
          }),
        [r, o, t, e],
      );
    return s.length
      ? w.jsx("svg", {
          className: "react-flow__marker",
          "aria-hidden": "true",
          children: w.jsx("defs", {
            children: s.map((u) =>
              w.jsx(
                MM,
                {
                  id: u.id,
                  type: u.type,
                  color: u.color,
                  width: u.width,
                  height: u.height,
                  markerUnits: u.markerUnits,
                  strokeWidth: u.strokeWidth,
                  orient: u.orient,
                },
                u.id,
              ),
            ),
          }),
        })
      : null;
  };
f1.displayName = "MarkerDefinitions";
var NM = D.memo(f1);
function h1({
  x: e,
  y: t,
  label: r,
  labelStyle: o,
  labelShowBg: s = !0,
  labelBgStyle: u,
  labelBgPadding: l = [2, 4],
  labelBgBorderRadius: d = 2,
  children: p,
  className: f,
  ...h
}) {
  const [g, y] = D.useState({ x: 1, y: 0, width: 0, height: 0 }),
    S = qe(["react-flow__edge-textwrapper", f]),
    x = D.useRef(null);
  return (
    D.useEffect(() => {
      if (x.current) {
        const P = x.current.getBBox();
        y({ x: P.x, y: P.y, width: P.width, height: P.height });
      }
    }, [r]),
    r
      ? w.jsxs("g", {
          transform: `translate(${e - g.width / 2} ${t - g.height / 2})`,
          className: S,
          visibility: g.width ? "visible" : "hidden",
          ...h,
          children: [
            s &&
              w.jsx("rect", {
                width: g.width + 2 * l[0],
                x: -l[0],
                y: -l[1],
                height: g.height + 2 * l[1],
                className: "react-flow__edge-textbg",
                style: u,
                rx: d,
                ry: d,
              }),
            w.jsx("text", {
              className: "react-flow__edge-text",
              y: g.height / 2,
              dy: "0.3em",
              ref: x,
              style: o,
              children: r,
            }),
            p,
          ],
        })
      : null
  );
}
h1.displayName = "EdgeText";
const bM = D.memo(h1);
function io({
  path: e,
  labelX: t,
  labelY: r,
  label: o,
  labelStyle: s,
  labelShowBg: u,
  labelBgStyle: l,
  labelBgPadding: d,
  labelBgBorderRadius: p,
  interactionWidth: f = 20,
  ...h
}) {
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx("path", {
        ...h,
        d: e,
        fill: "none",
        className: qe(["react-flow__edge-path", h.className]),
      }),
      f
        ? w.jsx("path", {
            d: e,
            fill: "none",
            strokeOpacity: 0,
            strokeWidth: f,
            className: "react-flow__edge-interaction",
          })
        : null,
      o && ln(t) && ln(r)
        ? w.jsx(bM, {
            x: t,
            y: r,
            label: o,
            labelStyle: s,
            labelShowBg: u,
            labelBgStyle: l,
            labelBgPadding: d,
            labelBgBorderRadius: p,
          })
        : null,
    ],
  });
}
function hy({ pos: e, x1: t, y1: r, x2: o, y2: s }) {
  return e === we.Left || e === we.Right
    ? [0.5 * (t + o), r]
    : [t, 0.5 * (r + s)];
}
function p1({
  sourceX: e,
  sourceY: t,
  sourcePosition: r = we.Bottom,
  targetX: o,
  targetY: s,
  targetPosition: u = we.Top,
}) {
  const [l, d] = hy({ pos: r, x1: e, y1: t, x2: o, y2: s }),
    [p, f] = hy({ pos: u, x1: o, y1: s, x2: e, y2: t }),
    [h, g, y, S] = Rv({
      sourceX: e,
      sourceY: t,
      targetX: o,
      targetY: s,
      sourceControlX: l,
      sourceControlY: d,
      targetControlX: p,
      targetControlY: f,
    });
  return [`M${e},${t} C${l},${d} ${p},${f} ${o},${s}`, h, g, y, S];
}
function m1(e) {
  return D.memo(
    ({
      id: t,
      sourceX: r,
      sourceY: o,
      targetX: s,
      targetY: u,
      sourcePosition: l,
      targetPosition: d,
      label: p,
      labelStyle: f,
      labelShowBg: h,
      labelBgStyle: g,
      labelBgPadding: y,
      labelBgBorderRadius: S,
      style: x,
      markerEnd: P,
      markerStart: C,
      interactionWidth: T,
    }) => {
      const [N, k, M] = p1({
          sourceX: r,
          sourceY: o,
          sourcePosition: l,
          targetX: s,
          targetY: u,
          targetPosition: d,
        }),
        I = e.isInternal ? void 0 : t;
      return w.jsx(io, {
        id: I,
        path: N,
        labelX: k,
        labelY: M,
        label: p,
        labelStyle: f,
        labelShowBg: h,
        labelBgStyle: g,
        labelBgPadding: y,
        labelBgBorderRadius: S,
        style: x,
        markerEnd: P,
        markerStart: C,
        interactionWidth: T,
      });
    },
  );
}
const _M = m1({ isInternal: !1 }),
  g1 = m1({ isInternal: !0 });
_M.displayName = "SimpleBezierEdge";
g1.displayName = "SimpleBezierEdgeInternal";
function y1(e) {
  return D.memo(
    ({
      id: t,
      sourceX: r,
      sourceY: o,
      targetX: s,
      targetY: u,
      label: l,
      labelStyle: d,
      labelShowBg: p,
      labelBgStyle: f,
      labelBgPadding: h,
      labelBgBorderRadius: g,
      style: y,
      sourcePosition: S = we.Bottom,
      targetPosition: x = we.Top,
      markerEnd: P,
      markerStart: C,
      pathOptions: T,
      interactionWidth: N,
    }) => {
      const [k, M, I] = Jd({
          sourceX: r,
          sourceY: o,
          sourcePosition: S,
          targetX: s,
          targetY: u,
          targetPosition: x,
          borderRadius: T?.borderRadius,
          offset: T?.offset,
          stepPosition: T?.stepPosition,
        }),
        b = e.isInternal ? void 0 : t;
      return w.jsx(io, {
        id: b,
        path: k,
        labelX: M,
        labelY: I,
        label: l,
        labelStyle: d,
        labelShowBg: p,
        labelBgStyle: f,
        labelBgPadding: h,
        labelBgBorderRadius: g,
        style: y,
        markerEnd: P,
        markerStart: C,
        interactionWidth: N,
      });
    },
  );
}
const v1 = y1({ isInternal: !1 }),
  x1 = y1({ isInternal: !0 });
v1.displayName = "SmoothStepEdge";
x1.displayName = "SmoothStepEdgeInternal";
function w1(e) {
  return D.memo(({ id: t, ...r }) => {
    const o = e.isInternal ? void 0 : t;
    return w.jsx(v1, {
      ...r,
      id: o,
      pathOptions: D.useMemo(
        () => ({ borderRadius: 0, offset: r.pathOptions?.offset }),
        [r.pathOptions?.offset],
      ),
    });
  });
}
const jM = w1({ isInternal: !1 }),
  S1 = w1({ isInternal: !0 });
jM.displayName = "StepEdge";
S1.displayName = "StepEdgeInternal";
function k1(e) {
  return D.memo(
    ({
      id: t,
      sourceX: r,
      sourceY: o,
      targetX: s,
      targetY: u,
      label: l,
      labelStyle: d,
      labelShowBg: p,
      labelBgStyle: f,
      labelBgPadding: h,
      labelBgBorderRadius: g,
      style: y,
      markerEnd: S,
      markerStart: x,
      interactionWidth: P,
    }) => {
      const [C, T, N] = Vv({ sourceX: r, sourceY: o, targetX: s, targetY: u }),
        k = e.isInternal ? void 0 : t;
      return w.jsx(io, {
        id: k,
        path: C,
        labelX: T,
        labelY: N,
        label: l,
        labelStyle: d,
        labelShowBg: p,
        labelBgStyle: f,
        labelBgPadding: h,
        labelBgBorderRadius: g,
        style: y,
        markerEnd: S,
        markerStart: x,
        interactionWidth: P,
      });
    },
  );
}
const AM = k1({ isInternal: !1 }),
  E1 = k1({ isInternal: !0 });
AM.displayName = "StraightEdge";
E1.displayName = "StraightEdgeInternal";
function C1(e) {
  return D.memo(
    ({
      id: t,
      sourceX: r,
      sourceY: o,
      targetX: s,
      targetY: u,
      sourcePosition: l = we.Bottom,
      targetPosition: d = we.Top,
      label: p,
      labelStyle: f,
      labelShowBg: h,
      labelBgStyle: g,
      labelBgPadding: y,
      labelBgBorderRadius: S,
      style: x,
      markerEnd: P,
      markerStart: C,
      pathOptions: T,
      interactionWidth: N,
    }) => {
      const [k, M, I] = Yf({
          sourceX: r,
          sourceY: o,
          sourcePosition: l,
          targetX: s,
          targetY: u,
          targetPosition: d,
          curvature: T?.curvature,
        }),
        b = e.isInternal ? void 0 : t;
      return w.jsx(io, {
        id: b,
        path: k,
        labelX: M,
        labelY: I,
        label: p,
        labelStyle: f,
        labelShowBg: h,
        labelBgStyle: g,
        labelBgPadding: y,
        labelBgBorderRadius: S,
        style: x,
        markerEnd: P,
        markerStart: C,
        interactionWidth: N,
      });
    },
  );
}
const IM = C1({ isInternal: !1 }),
  P1 = C1({ isInternal: !0 });
IM.displayName = "BezierEdge";
P1.displayName = "BezierEdgeInternal";
const py = {
    default: P1,
    straight: E1,
    step: S1,
    smoothstep: x1,
    simplebezier: g1,
  },
  my = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null,
    zIndex: void 0,
  },
  DM = (e, t, r) => (r === we.Left ? e - t : r === we.Right ? e + t : e),
  RM = (e, t, r) => (r === we.Top ? e - t : r === we.Bottom ? e + t : e),
  gy = "react-flow__edgeupdater";
function yy({
  position: e,
  centerX: t,
  centerY: r,
  radius: o = 10,
  onMouseDown: s,
  onMouseEnter: u,
  onMouseOut: l,
  type: d,
}) {
  return w.jsx("circle", {
    onMouseDown: s,
    onMouseEnter: u,
    onMouseOut: l,
    className: qe([gy, `${gy}-${d}`]),
    cx: DM(t, o, e),
    cy: RM(r, o, e),
    r: o,
    stroke: "transparent",
    fill: "transparent",
  });
}
function LM({
  isReconnectable: e,
  reconnectRadius: t,
  edge: r,
  sourceX: o,
  sourceY: s,
  targetX: u,
  targetY: l,
  sourcePosition: d,
  targetPosition: p,
  onReconnect: f,
  onReconnectStart: h,
  onReconnectEnd: g,
  setReconnecting: y,
  setUpdateHover: S,
}) {
  const x = Fe(),
    P = (M, I) => {
      if (M.button !== 0) return;
      const {
          autoPanOnConnect: b,
          domNode: R,
          connectionMode: V,
          connectionRadius: U,
          lib: K,
          onConnectStart: Z,
          cancelConnection: ee,
          nodeLookup: J,
          rfId: j,
          panBy: H,
          updateConnection: F,
        } = x.getState(),
        W = I.type === "target",
        L = (_, O) => {
          (y(!1), g?.(_, r, I.type, O));
        },
        $ = (_) => f?.(r, _),
        G = (_, O) => {
          (y(!0), h?.(M, r, I.type), Z?.(_, O));
        };
      nf.onPointerDown(M.nativeEvent, {
        autoPanOnConnect: b,
        connectionMode: V,
        connectionRadius: U,
        domNode: R,
        handleId: I.id,
        nodeId: I.nodeId,
        nodeLookup: J,
        isTarget: W,
        edgeUpdaterType: I.type,
        lib: K,
        flowId: j,
        cancelConnection: ee,
        panBy: H,
        isValidConnection: (..._) =>
          x.getState().isValidConnection?.(..._) ?? !0,
        onConnect: $,
        onConnectStart: G,
        onConnectEnd: (..._) => x.getState().onConnectEnd?.(..._),
        onReconnectEnd: L,
        updateConnection: F,
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        dragThreshold: x.getState().connectionDragThreshold,
        handleDomNode: M.currentTarget,
      });
    },
    C = (M) =>
      P(M, { nodeId: r.target, id: r.targetHandle ?? null, type: "target" }),
    T = (M) =>
      P(M, { nodeId: r.source, id: r.sourceHandle ?? null, type: "source" }),
    N = () => S(!0),
    k = () => S(!1);
  return w.jsxs(w.Fragment, {
    children: [
      (e === !0 || e === "source") &&
        w.jsx(yy, {
          position: d,
          centerX: o,
          centerY: s,
          radius: t,
          onMouseDown: C,
          onMouseEnter: N,
          onMouseOut: k,
          type: "source",
        }),
      (e === !0 || e === "target") &&
        w.jsx(yy, {
          position: p,
          centerX: u,
          centerY: l,
          radius: t,
          onMouseDown: T,
          onMouseEnter: N,
          onMouseOut: k,
          type: "target",
        }),
    ],
  });
}
function VM({
  id: e,
  edgesFocusable: t,
  edgesReconnectable: r,
  elementsSelectable: o,
  onClick: s,
  onDoubleClick: u,
  onContextMenu: l,
  onMouseEnter: d,
  onMouseMove: p,
  onMouseLeave: f,
  reconnectRadius: h,
  onReconnect: g,
  onReconnectStart: y,
  onReconnectEnd: S,
  rfId: x,
  edgeTypes: P,
  noPanClassName: C,
  onError: T,
  disableKeyboardA11y: N,
}) {
  let k = je((xe) => xe.edgeLookup.get(e));
  const M = je((xe) => xe.defaultEdgeOptions);
  k = M ? { ...M, ...k } : k;
  let I = k.type || "default",
    b = P?.[I] || py[I];
  b === void 0 &&
    (T?.("011", dn.error011(I)),
    (I = "default"),
    (b = P?.default || py.default));
  const R = !!(k.focusable || (t && typeof k.focusable > "u")),
    V =
      typeof g < "u" &&
      (k.reconnectable || (r && typeof k.reconnectable > "u")),
    U = !!(k.selectable || (o && typeof k.selectable > "u")),
    K = D.useRef(null),
    [Z, ee] = D.useState(!1),
    [J, j] = D.useState(!1),
    H = Fe(),
    {
      zIndex: F = k.zIndex,
      sourceX: W,
      sourceY: L,
      targetX: $,
      targetY: G,
      sourcePosition: _,
      targetPosition: O,
    } = je(
      D.useCallback(
        (xe) => {
          const Se = xe.nodeLookup.get(k.source),
            Me = xe.nodeLookup.get(k.target);
          if (!Se || !Me) return my;
          const be = PP({
              id: e,
              sourceNode: Se,
              targetNode: Me,
              sourceHandle: k.sourceHandle || null,
              targetHandle: k.targetHandle || null,
              connectionMode: xe.connectionMode,
              onError: T,
            }),
            De = yP({
              selected: k.selected,
              zIndex: k.zIndex,
              sourceNode: Se,
              targetNode: Me,
              elevateOnSelect: xe.elevateEdgesOnSelect,
              zIndexMode: xe.zIndexMode,
            });
          return { ...(be || my), zIndex: De };
        },
        [
          k.source,
          k.target,
          k.sourceHandle,
          k.targetHandle,
          k.selected,
          k.zIndex,
        ],
      ),
      We,
    ),
    oe = D.useMemo(
      () => (k.markerStart ? `url('#${ef(k.markerStart, x)}')` : void 0),
      [k.markerStart, x],
    ),
    re = D.useMemo(
      () => (k.markerEnd ? `url('#${ef(k.markerEnd, x)}')` : void 0),
      [k.markerEnd, x],
    );
  if (k.hidden || W === null || L === null || $ === null || G === null)
    return null;
  const le = (xe) => {
      const {
        addSelectedEdges: Se,
        unselectNodesAndEdges: Me,
        multiSelectionActive: be,
      } = H.getState();
      (U &&
        (H.setState({ nodesSelectionActive: !1 }),
        k.selected && be
          ? (Me({ nodes: [], edges: [k] }), K.current?.blur())
          : Se([e])),
        s && s(xe, k));
    },
    ce = u
      ? (xe) => {
          u(xe, { ...k });
        }
      : void 0,
    ue = l
      ? (xe) => {
          l(xe, { ...k });
        }
      : void 0,
    Q = d
      ? (xe) => {
          d(xe, { ...k });
        }
      : void 0,
    ae = p
      ? (xe) => {
          p(xe, { ...k });
        }
      : void 0,
    ke = f
      ? (xe) => {
          f(xe, { ...k });
        }
      : void 0,
    Pe = (xe) => {
      if (!N && wv.includes(xe.key) && U) {
        const { unselectNodesAndEdges: Se, addSelectedEdges: Me } =
          H.getState();
        xe.key === "Escape" ? (K.current?.blur(), Se({ edges: [k] })) : Me([e]);
      }
    };
  return w.jsx("svg", {
    style: { zIndex: F },
    children: w.jsxs("g", {
      className: qe([
        "react-flow__edge",
        `react-flow__edge-${I}`,
        k.className,
        C,
        {
          selected: k.selected,
          animated: k.animated,
          inactive: !U && !s,
          updating: Z,
          selectable: U,
        },
      ]),
      onClick: le,
      onDoubleClick: ce,
      onContextMenu: ue,
      onMouseEnter: Q,
      onMouseMove: ae,
      onMouseLeave: ke,
      onKeyDown: R ? Pe : void 0,
      tabIndex: R ? 0 : void 0,
      role: k.ariaRole ?? (R ? "group" : "img"),
      "aria-roledescription": "edge",
      "data-id": e,
      "data-testid": `rf__edge-${e}`,
      "aria-label":
        k.ariaLabel === null
          ? void 0
          : k.ariaLabel || `Edge from ${k.source} to ${k.target}`,
      "aria-describedby": R ? `${Qv}-${x}` : void 0,
      ref: K,
      ...k.domAttributes,
      children: [
        !J &&
          w.jsx(b, {
            id: e,
            source: k.source,
            target: k.target,
            type: k.type,
            selected: k.selected,
            animated: k.animated,
            selectable: U,
            deletable: k.deletable ?? !0,
            label: k.label,
            labelStyle: k.labelStyle,
            labelShowBg: k.labelShowBg,
            labelBgStyle: k.labelBgStyle,
            labelBgPadding: k.labelBgPadding,
            labelBgBorderRadius: k.labelBgBorderRadius,
            sourceX: W,
            sourceY: L,
            targetX: $,
            targetY: G,
            sourcePosition: _,
            targetPosition: O,
            data: k.data,
            style: k.style,
            sourceHandleId: k.sourceHandle,
            targetHandleId: k.targetHandle,
            markerStart: oe,
            markerEnd: re,
            pathOptions: "pathOptions" in k ? k.pathOptions : void 0,
            interactionWidth: k.interactionWidth,
          }),
        V &&
          w.jsx(LM, {
            edge: k,
            isReconnectable: V,
            reconnectRadius: h,
            onReconnect: g,
            onReconnectStart: y,
            onReconnectEnd: S,
            sourceX: W,
            sourceY: L,
            targetX: $,
            targetY: G,
            sourcePosition: _,
            targetPosition: O,
            setUpdateHover: ee,
            setReconnecting: j,
          }),
      ],
    }),
  });
}
var zM = D.memo(VM);
const OM = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError,
});
function T1({
  defaultMarkerColor: e,
  onlyRenderVisibleElements: t,
  rfId: r,
  edgeTypes: o,
  noPanClassName: s,
  onReconnect: u,
  onEdgeContextMenu: l,
  onEdgeMouseEnter: d,
  onEdgeMouseMove: p,
  onEdgeMouseLeave: f,
  onEdgeClick: h,
  reconnectRadius: g,
  onEdgeDoubleClick: y,
  onReconnectStart: S,
  onReconnectEnd: x,
  disableKeyboardA11y: P,
}) {
  const {
      edgesFocusable: C,
      edgesReconnectable: T,
      elementsSelectable: N,
      onError: k,
    } = je(OM, We),
    M = EM(t);
  return w.jsxs("div", {
    className: "react-flow__edges",
    children: [
      w.jsx(NM, { defaultColor: e, rfId: r }),
      M.map((I) =>
        w.jsx(
          zM,
          {
            id: I,
            edgesFocusable: C,
            edgesReconnectable: T,
            elementsSelectable: N,
            noPanClassName: s,
            onReconnect: u,
            onContextMenu: l,
            onMouseEnter: d,
            onMouseMove: p,
            onMouseLeave: f,
            onClick: h,
            reconnectRadius: g,
            onDoubleClick: y,
            onReconnectStart: S,
            onReconnectEnd: x,
            rfId: r,
            onError: k,
            edgeTypes: o,
            disableKeyboardA11y: P,
          },
          I,
        ),
      ),
    ],
  });
}
T1.displayName = "EdgeRenderer";
const FM = D.memo(T1),
  vy = (e) => `translate(${e[0]}px,${e[1]}px) scale(${e[2]})`;
function $M({ children: e }) {
  const t = Fe(),
    r = D.useRef(null),
    [o] = D.useState(() => t.getState().transform);
  return (
    i1(() => {
      let s = null;
      const u = () => {
        const l = t.getState().transform;
        (s && l[0] === s[0] && l[1] === s[1] && l[2] === s[2]) ||
          ((s = l), r.current && (r.current.style.transform = vy(l)));
      };
      return (u(), t.subscribe(u));
    }, [t]),
    w.jsx("div", {
      ref: r,
      className: "react-flow__viewport xyflow__viewport react-flow__container",
      style: { transform: vy(o) },
      children: e,
    })
  );
}
function BM(e) {
  const t = su(),
    r = D.useRef(!1);
  D.useEffect(() => {
    !r.current &&
      t.viewportInitialized &&
      e &&
      (setTimeout(() => e(t), 1), (r.current = !0));
  }, [e, t.viewportInitialized]);
}
const HM = (e) => e.panZoom?.syncViewport;
function UM(e) {
  const t = je(HM),
    r = Fe();
  return (
    D.useEffect(() => {
      e && (t?.(e), r.setState({ transform: [e.x, e.y, e.zoom] }));
    }, [e, t]),
    null
  );
}
function WM(e) {
  return e.connection.inProgress
    ? { ...e.connection, to: Is(e.connection.to, e.transform) }
    : { ...e.connection };
}
function GM(e) {
  return WM;
}
function XM(e) {
  const t = GM();
  return je(t, We);
}
const YM = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height,
});
function KM({ containerStyle: e, style: t, type: r, component: o }) {
  const {
    nodesConnectable: s,
    width: u,
    height: l,
    isValid: d,
    inProgress: p,
  } = je(YM, We);
  return !(u && s && p)
    ? null
    : w.jsx("svg", {
        style: e,
        width: u,
        height: l,
        className: "react-flow__connectionline react-flow__container",
        children: w.jsx("g", {
          className: qe(["react-flow__connection", Ev(d)]),
          children: w.jsx(M1, {
            style: t,
            type: r,
            CustomComponent: o,
            isValid: d,
          }),
        }),
      });
}
const M1 = ({
  style: e,
  type: t = yr.Bezier,
  CustomComponent: r,
  isValid: o,
}) => {
  const {
    inProgress: s,
    from: u,
    fromNode: l,
    fromHandle: d,
    fromPosition: p,
    to: f,
    toNode: h,
    toHandle: g,
    toPosition: y,
    pointer: S,
  } = XM();
  if (!s) return;
  if (r)
    return w.jsx(r, {
      connectionLineType: t,
      connectionLineStyle: e,
      fromNode: l,
      fromHandle: d,
      fromX: u.x,
      fromY: u.y,
      toX: f.x,
      toY: f.y,
      fromPosition: p,
      toPosition: y,
      connectionStatus: Ev(o),
      toNode: h,
      toHandle: g,
      pointer: S,
    });
  let x = "";
  const P = {
    sourceX: u.x,
    sourceY: u.y,
    sourcePosition: p,
    targetX: f.x,
    targetY: f.y,
    targetPosition: y,
  };
  switch (t) {
    case yr.Bezier:
      [x] = Yf(P);
      break;
    case yr.SimpleBezier:
      [x] = p1(P);
      break;
    case yr.Step:
      [x] = Jd({ ...P, borderRadius: 0 });
      break;
    case yr.SmoothStep:
      [x] = Jd(P);
      break;
    default:
      [x] = Vv(P);
  }
  return w.jsx("path", {
    d: x,
    fill: "none",
    className: "react-flow__connection-path",
    style: e,
  });
};
M1.displayName = "ConnectionLine";
const ZM = {};
function xy(e = ZM) {
  (D.useRef(e), Fe(), D.useEffect(() => {}, [e]));
}
function qM() {
  (Fe(), D.useRef(!1), D.useEffect(() => {}, []));
}
function N1({
  nodeTypes: e,
  edgeTypes: t,
  onInit: r,
  onNodeClick: o,
  onEdgeClick: s,
  onNodeDoubleClick: u,
  onEdgeDoubleClick: l,
  onNodeMouseEnter: d,
  onNodeMouseMove: p,
  onNodeMouseLeave: f,
  onNodeContextMenu: h,
  onSelectionContextMenu: g,
  onSelectionStart: y,
  onSelectionEnd: S,
  connectionLineType: x,
  connectionLineStyle: P,
  connectionLineComponent: C,
  connectionLineContainerStyle: T,
  selectionKeyCode: N,
  selectionOnDrag: k,
  selectionMode: M,
  multiSelectionKeyCode: I,
  panActivationKeyCode: b,
  zoomActivationKeyCode: R,
  deleteKeyCode: V,
  onlyRenderVisibleElements: U,
  elementsSelectable: K,
  defaultViewport: Z,
  translateExtent: ee,
  minZoom: J,
  maxZoom: j,
  preventScrolling: H,
  defaultMarkerColor: F,
  zoomOnScroll: W,
  zoomOnPinch: L,
  panOnScroll: $,
  panOnScrollSpeed: G,
  panOnScrollMode: _,
  zoomOnDoubleClick: O,
  panOnDrag: oe,
  autoPanOnSelection: re,
  onPaneClick: le,
  onPaneMouseEnter: ce,
  onPaneMouseMove: ue,
  onPaneMouseLeave: Q,
  onPaneScroll: ae,
  onPaneContextMenu: ke,
  paneClickDistance: Pe,
  nodeClickDistance: xe,
  onEdgeContextMenu: Se,
  onEdgeMouseEnter: Me,
  onEdgeMouseMove: be,
  onEdgeMouseLeave: De,
  reconnectRadius: Qe,
  onReconnect: Ft,
  onReconnectStart: wt,
  onReconnectEnd: ut,
  noDragClassName: ct,
  noWheelClassName: _n,
  noPanClassName: hn,
  disableKeyboardA11y: pn,
  nodeExtent: St,
  rfId: $t,
  viewport: _t,
  onViewportChange: Bt,
  nodesDraggable: ai,
}) {
  return (
    xy(e),
    xy(t),
    qM(),
    BM(r),
    UM(_t),
    w.jsx(hM, {
      onPaneClick: le,
      onPaneMouseEnter: ce,
      onPaneMouseMove: ue,
      onPaneMouseLeave: Q,
      onPaneContextMenu: ke,
      onPaneScroll: ae,
      paneClickDistance: Pe,
      deleteKeyCode: V,
      selectionKeyCode: N,
      selectionOnDrag: k,
      selectionMode: M,
      onSelectionStart: y,
      onSelectionEnd: S,
      multiSelectionKeyCode: I,
      panActivationKeyCode: b,
      zoomActivationKeyCode: R,
      elementsSelectable: K,
      zoomOnScroll: W,
      zoomOnPinch: L,
      zoomOnDoubleClick: O,
      panOnScroll: $,
      panOnScrollSpeed: G,
      panOnScrollMode: _,
      panOnDrag: oe,
      autoPanOnSelection: re,
      defaultViewport: Z,
      translateExtent: ee,
      minZoom: J,
      maxZoom: j,
      onSelectionContextMenu: g,
      preventScrolling: H,
      noDragClassName: ct,
      noWheelClassName: _n,
      noPanClassName: hn,
      disableKeyboardA11y: pn,
      onViewportChange: Bt,
      isControlledViewport: !!_t,
      children: w.jsxs($M, {
        children: [
          w.jsx(FM, {
            edgeTypes: t,
            onEdgeClick: s,
            onEdgeDoubleClick: l,
            onReconnect: Ft,
            onReconnectStart: wt,
            onReconnectEnd: ut,
            onlyRenderVisibleElements: U,
            onEdgeContextMenu: Se,
            onEdgeMouseEnter: Me,
            onEdgeMouseMove: be,
            onEdgeMouseLeave: De,
            reconnectRadius: Qe,
            defaultMarkerColor: F,
            noPanClassName: hn,
            disableKeyboardA11y: pn,
            rfId: $t,
          }),
          w.jsx(KM, { style: P, type: x, component: C, containerStyle: T }),
          w.jsx("div", { className: "react-flow__edgelabel-renderer" }),
          w.jsx(kM, {
            nodeTypes: e,
            onNodeClick: o,
            onNodeDoubleClick: u,
            onNodeMouseEnter: d,
            onNodeMouseMove: p,
            onNodeMouseLeave: f,
            onNodeContextMenu: h,
            nodeClickDistance: xe,
            onlyRenderVisibleElements: U,
            noPanClassName: hn,
            noDragClassName: ct,
            disableKeyboardA11y: pn,
            nodeExtent: St,
            rfId: $t,
            nodesDraggable: ai,
          }),
          w.jsx("div", { className: "react-flow__viewport-portal" }),
        ],
      }),
    })
  );
}
N1.displayName = "GraphView";
const QM = D.memo(N1),
  JM = bv(),
  wy = ({
    nodes: e,
    edges: t,
    defaultNodes: r,
    defaultEdges: o,
    width: s,
    height: u,
    fitView: l,
    fitViewOptions: d,
    minZoom: p = 0.5,
    maxZoom: f = 2,
    nodeOrigin: h,
    nodeExtent: g,
    zIndexMode: y = "basic",
  } = {}) => {
    const S = new Map(),
      x = new Map(),
      P = new Map(),
      C = new Map(),
      T = o ?? t ?? [],
      N = r ?? e ?? [],
      k = h ?? [0, 0],
      M = g ?? xs;
    Fv(P, C, T);
    const { nodesInitialized: I } = tf(N, S, x, {
      nodeOrigin: k,
      nodeExtent: M,
      zIndexMode: y,
    });
    let b = [0, 0, 1];
    if (l && s && u) {
      const R = js(S, {
          filter: (Z) =>
            !!((Z.width || Z.initialWidth) && (Z.height || Z.initialHeight)),
        }),
        { x: V, y: U, zoom: K } = Gf(R, s, u, p, f, d?.padding ?? 0.1);
      b = [V, U, K];
    }
    return {
      rfId: "1",
      width: s ?? 0,
      height: u ?? 0,
      transform: b,
      nodes: N,
      nodesInitialized: I,
      nodeLookup: S,
      parentLookup: x,
      edges: T,
      edgeLookup: C,
      connectionLookup: P,
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: r !== void 0,
      hasDefaultEdges: o !== void 0,
      panZoom: null,
      minZoom: p,
      maxZoom: f,
      translateExtent: xs,
      nodeExtent: M,
      nodesSelectionActive: !1,
      userSelectionActive: !1,
      userSelectionRect: null,
      connectionMode: ni.Strict,
      domNode: null,
      paneDragging: !1,
      noPanClassName: "nopan",
      nodeOrigin: k,
      nodeDragThreshold: 1,
      connectionDragThreshold: 1,
      snapGrid: [15, 15],
      snapToGrid: !1,
      nodesDraggable: !0,
      nodesConnectable: !0,
      nodesFocusable: !0,
      edgesFocusable: !0,
      edgesReconnectable: !0,
      elementsSelectable: !0,
      elevateNodesOnSelect: !0,
      elevateEdgesOnSelect: !0,
      selectNodesOnDrag: !0,
      multiSelectionActive: !1,
      fitViewQueued: l ?? !1,
      fitViewOptions: d,
      fitViewResolver: null,
      connection: { ...kv },
      connectionClickStartHandle: null,
      connectOnClick: !0,
      ariaLiveMessage: "",
      autoPanOnConnect: !0,
      autoPanOnNodeDrag: !0,
      autoPanOnNodeFocus: !0,
      autoPanSpeed: 15,
      connectionRadius: 20,
      onError: JM,
      isValidConnection: void 0,
      onSelectionChangeHandlers: [],
      lib: "react",
      debug: !1,
      ariaLabelConfig: Sv,
      zIndexMode: y,
      onNodesChangeMiddlewareMap: new Map(),
      onEdgesChangeMiddlewareMap: new Map(),
    };
  },
  eN = ({
    nodes: e,
    edges: t,
    defaultNodes: r,
    defaultEdges: o,
    width: s,
    height: u,
    fitView: l,
    fitViewOptions: d,
    minZoom: p,
    maxZoom: f,
    nodeOrigin: h,
    nodeExtent: g,
    zIndexMode: y,
  }) =>
    pT((S, x) => {
      async function P() {
        const {
          nodeLookup: C,
          panZoom: T,
          fitViewOptions: N,
          fitViewResolver: k,
          width: M,
          height: I,
          minZoom: b,
          maxZoom: R,
        } = x();
        T &&
          (await cP(
            {
              nodes: C,
              width: M,
              height: I,
              panZoom: T,
              minZoom: b,
              maxZoom: R,
            },
            N,
          ),
          k?.resolve(!0),
          S({ fitViewResolver: null }));
      }
      return {
        ...wy({
          nodes: e,
          edges: t,
          width: s,
          height: u,
          fitView: l,
          fitViewOptions: d,
          minZoom: p,
          maxZoom: f,
          nodeOrigin: h,
          nodeExtent: g,
          defaultNodes: r,
          defaultEdges: o,
          zIndexMode: y,
        }),
        setNodes: (C) => {
          const {
              nodeLookup: T,
              parentLookup: N,
              nodeOrigin: k,
              elevateNodesOnSelect: M,
              fitViewQueued: I,
              zIndexMode: b,
              nodesSelectionActive: R,
            } = x(),
            { nodesInitialized: V, hasSelectedNodes: U } = tf(C, T, N, {
              nodeOrigin: k,
              nodeExtent: g,
              elevateNodesOnSelect: M,
              checkEquality: !0,
              zIndexMode: b,
            }),
            K = R && U;
          I && V
            ? (P(),
              S({
                nodes: C,
                nodesInitialized: V,
                fitViewQueued: !1,
                fitViewOptions: void 0,
                nodesSelectionActive: K,
              }))
            : S({ nodes: C, nodesInitialized: V, nodesSelectionActive: K });
        },
        setEdges: (C) => {
          const { connectionLookup: T, edgeLookup: N } = x();
          (Fv(T, N, C), S({ edges: C }));
        },
        setDefaultNodesAndEdges: (C, T) => {
          if (C) {
            const { setNodes: N } = x();
            (N(C), S({ hasDefaultNodes: !0 }));
          }
          if (T) {
            const { setEdges: N } = x();
            (N(T), S({ hasDefaultEdges: !0 }));
          }
        },
        updateNodeInternals: (C) => {
          const {
              triggerNodeChanges: T,
              nodeLookup: N,
              parentLookup: k,
              domNode: M,
              nodeOrigin: I,
              nodeExtent: b,
              debug: R,
              fitViewQueued: V,
              zIndexMode: U,
            } = x(),
            { changes: K, updatedInternals: Z } = IP(C, N, k, M, I, b, U);
          Z &&
            (bP(N, k, { nodeOrigin: I, nodeExtent: b, zIndexMode: U }),
            V ? (P(), S({ fitViewQueued: !1, fitViewOptions: void 0 })) : S({}),
            K?.length > 0 &&
              (R && console.log("React Flow: trigger node changes", K),
              T?.(K)));
        },
        updateNodePositions: (C, T = !1) => {
          const N = [];
          let k = [];
          const {
            nodeLookup: M,
            triggerNodeChanges: I,
            connection: b,
            updateConnection: R,
            onNodesChangeMiddlewareMap: V,
          } = x();
          for (const [U, K] of C) {
            const Z = M.get(U),
              ee = !!(Z?.expandParent && Z?.parentId && K?.position),
              J = {
                id: U,
                type: "position",
                position: ee
                  ? {
                      x: Math.max(0, K.position.x),
                      y: Math.max(0, K.position.y),
                    }
                  : K.position,
                dragging: T,
              };
            if (Z && b.inProgress && b.fromNode.id === Z.id) {
              const j = oi(Z, b.fromHandle, we.Left, !0);
              R({ ...b, from: j });
            }
            (ee &&
              Z.parentId &&
              N.push({
                id: U,
                parentId: Z.parentId,
                rect: {
                  ...K.internals.positionAbsolute,
                  width: K.measured.width ?? 0,
                  height: K.measured.height ?? 0,
                },
              }),
              k.push(J));
          }
          if (N.length > 0) {
            const { parentLookup: U, nodeOrigin: K } = x(),
              Z = Jf(N, M, U, K);
            k.push(...Z);
          }
          for (const U of V.values()) k = U(k);
          I(k);
        },
        triggerNodeChanges: (C) => {
          const {
            onNodesChange: T,
            setNodes: N,
            nodes: k,
            hasDefaultNodes: M,
            debug: I,
          } = x();
          if (C?.length) {
            if (M) {
              const b = t1(C, k);
              N(b);
            }
            (I && console.log("React Flow: trigger node changes", C), T?.(C));
          }
        },
        triggerEdgeChanges: (C) => {
          const {
            onEdgesChange: T,
            setEdges: N,
            edges: k,
            hasDefaultEdges: M,
            debug: I,
          } = x();
          if (C?.length) {
            if (M) {
              const b = n1(C, k);
              N(b);
            }
            (I && console.log("React Flow: trigger edge changes", C), T?.(C));
          }
        },
        addSelectedNodes: (C) => {
          const {
            multiSelectionActive: T,
            edgeLookup: N,
            nodeLookup: k,
            triggerNodeChanges: M,
            triggerEdgeChanges: I,
          } = x();
          if (T) {
            const b = C.map((R) => Ur(R, !0));
            M(b);
            return;
          }
          (M(Bi(k, new Set([...C]), !0)), I(Bi(N)));
        },
        addSelectedEdges: (C) => {
          const {
            multiSelectionActive: T,
            edgeLookup: N,
            nodeLookup: k,
            triggerNodeChanges: M,
            triggerEdgeChanges: I,
          } = x();
          if (T) {
            const b = C.map((R) => Ur(R, !0));
            I(b);
            return;
          }
          (I(Bi(N, new Set([...C]))), M(Bi(k, new Set(), !0)));
        },
        unselectNodesAndEdges: ({ nodes: C, edges: T } = {}) => {
          const {
              edges: N,
              nodes: k,
              nodeLookup: M,
              triggerNodeChanges: I,
              triggerEdgeChanges: b,
            } = x(),
            R = C || k,
            V = T || N,
            U = [];
          for (const Z of R) {
            if (!Z.selected) continue;
            const ee = M.get(Z.id);
            (ee && (ee.selected = !1), U.push(Ur(Z.id, !1)));
          }
          const K = [];
          for (const Z of V) Z.selected && K.push(Ur(Z.id, !1));
          (I(U), b(K));
        },
        setMinZoom: (C) => {
          const { panZoom: T, maxZoom: N } = x();
          (T?.setScaleExtent([C, N]), S({ minZoom: C }));
        },
        setMaxZoom: (C) => {
          const { panZoom: T, minZoom: N } = x();
          (T?.setScaleExtent([N, C]), S({ maxZoom: C }));
        },
        setTranslateExtent: (C) => {
          (x().panZoom?.setTranslateExtent(C), S({ translateExtent: C }));
        },
        resetSelectedElements: () => {
          const {
            edges: C,
            nodes: T,
            triggerNodeChanges: N,
            triggerEdgeChanges: k,
            elementsSelectable: M,
          } = x();
          if (!M) return;
          const I = T.reduce(
              (R, V) => (V.selected ? [...R, Ur(V.id, !1)] : R),
              [],
            ),
            b = C.reduce((R, V) => (V.selected ? [...R, Ur(V.id, !1)] : R), []);
          (N(I), k(b));
        },
        setNodeExtent: (C) => {
          const {
            nodes: T,
            nodeLookup: N,
            parentLookup: k,
            nodeOrigin: M,
            elevateNodesOnSelect: I,
            nodeExtent: b,
            zIndexMode: R,
          } = x();
          (C[0][0] === b[0][0] &&
            C[0][1] === b[0][1] &&
            C[1][0] === b[1][0] &&
            C[1][1] === b[1][1]) ||
            (tf(T, N, k, {
              nodeOrigin: M,
              nodeExtent: C,
              elevateNodesOnSelect: I,
              checkEquality: !1,
              zIndexMode: R,
            }),
            S({ nodeExtent: C }));
        },
        panBy: (C) => {
          const {
            transform: T,
            width: N,
            height: k,
            panZoom: M,
            translateExtent: I,
          } = x();
          return DP({
            delta: C,
            panZoom: M,
            transform: T,
            translateExtent: I,
            width: N,
            height: k,
          });
        },
        setCenter: async (C, T, N) => {
          const { width: k, height: M, maxZoom: I, panZoom: b } = x();
          if (!b) return !1;
          const R = typeof N?.zoom < "u" ? N.zoom : I;
          return (
            await b.setViewport(
              { x: k / 2 - C * R, y: M / 2 - T * R, zoom: R },
              {
                duration: N?.duration,
                ease: N?.ease,
                interpolate: N?.interpolate,
              },
            ),
            !0
          );
        },
        cancelConnection: () => {
          S({ connection: { ...kv } });
        },
        updateConnection: (C) => {
          S({ connection: C });
        },
        reset: () => S({ ...wy() }),
      };
    }, Object.is);
function b1({
  initialNodes: e,
  initialEdges: t,
  defaultNodes: r,
  defaultEdges: o,
  initialWidth: s,
  initialHeight: u,
  initialMinZoom: l,
  initialMaxZoom: d,
  initialFitViewOptions: p,
  fitView: f,
  nodeOrigin: h,
  nodeExtent: g,
  zIndexMode: y,
  children: S,
}) {
  const [x] = D.useState(() =>
    eN({
      nodes: e,
      edges: t,
      defaultNodes: r,
      defaultEdges: o,
      width: s,
      height: u,
      fitView: f,
      minZoom: l,
      maxZoom: d,
      fitViewOptions: p,
      nodeOrigin: h,
      nodeExtent: g,
      zIndexMode: y,
    }),
  );
  return w.jsx(mT, {
    value: x,
    children: w.jsx(OT, { children: w.jsx(eM, { children: S }) }),
  });
}
function tN({
  children: e,
  nodes: t,
  edges: r,
  defaultNodes: o,
  defaultEdges: s,
  width: u,
  height: l,
  fitView: d,
  fitViewOptions: p,
  minZoom: f,
  maxZoom: h,
  nodeOrigin: g,
  nodeExtent: y,
  zIndexMode: S,
}) {
  return D.useContext(ou)
    ? w.jsx(w.Fragment, { children: e })
    : w.jsx(b1, {
        initialNodes: t,
        initialEdges: r,
        defaultNodes: o,
        defaultEdges: s,
        initialWidth: u,
        initialHeight: l,
        fitView: d,
        initialFitViewOptions: p,
        initialMinZoom: f,
        initialMaxZoom: h,
        nodeOrigin: g,
        nodeExtent: y,
        zIndexMode: S,
        children: e,
      });
}
const nN = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0,
};
function rN(
  {
    nodes: e,
    edges: t,
    defaultNodes: r,
    defaultEdges: o,
    className: s,
    nodeTypes: u,
    edgeTypes: l,
    onNodeClick: d,
    onEdgeClick: p,
    onInit: f,
    onMove: h,
    onMoveStart: g,
    onMoveEnd: y,
    onConnect: S,
    onConnectStart: x,
    onConnectEnd: P,
    onClickConnectStart: C,
    onClickConnectEnd: T,
    onNodeMouseEnter: N,
    onNodeMouseMove: k,
    onNodeMouseLeave: M,
    onNodeContextMenu: I,
    onNodeDoubleClick: b,
    onNodeDragStart: R,
    onNodeDrag: V,
    onNodeDragStop: U,
    onNodesDelete: K,
    onEdgesDelete: Z,
    onDelete: ee,
    onSelectionChange: J,
    onSelectionDragStart: j,
    onSelectionDrag: H,
    onSelectionDragStop: F,
    onSelectionContextMenu: W,
    onSelectionStart: L,
    onSelectionEnd: $,
    onBeforeDelete: G,
    connectionMode: _,
    connectionLineType: O = yr.Bezier,
    connectionLineStyle: oe,
    connectionLineComponent: re,
    connectionLineContainerStyle: le,
    deleteKeyCode: ce = "Backspace",
    selectionKeyCode: ue = "Shift",
    selectionOnDrag: Q = !1,
    selectionMode: ae = Ji.Full,
    panActivationKeyCode: ke = "Space",
    multiSelectionKeyCode: Pe = Ss() ? "Meta" : "Control",
    zoomActivationKeyCode: xe = Ss() ? "Meta" : "Control",
    snapToGrid: Se,
    snapGrid: Me,
    onlyRenderVisibleElements: be = !1,
    selectNodesOnDrag: De,
    nodesDraggable: Qe,
    autoPanOnNodeFocus: Ft,
    nodesConnectable: wt,
    nodesFocusable: ut,
    nodeOrigin: ct = Jv,
    edgesFocusable: _n,
    edgesReconnectable: hn,
    elementsSelectable: pn = !0,
    defaultViewport: St = NT,
    minZoom: $t = 0.5,
    maxZoom: _t = 2,
    translateExtent: Bt = xs,
    preventScrolling: ai = !0,
    nodeExtent: jn,
    defaultMarkerColor: Er = "#b1b1b7",
    zoomOnScroll: yu = !0,
    zoomOnPinch: zs = !0,
    panOnScroll: Os = !1,
    panOnScrollSpeed: vu = 0.5,
    panOnScrollMode: co = qr.Free,
    zoomOnDoubleClick: fo = !0,
    panOnDrag: ho = !0,
    onPaneClick: po,
    onPaneMouseEnter: mo,
    onPaneMouseMove: Xn,
    onPaneMouseLeave: Yn,
    onPaneScroll: Fs,
    onPaneContextMenu: $s,
    paneClickDistance: Bs = 1,
    nodeClickDistance: Hs = 0,
    children: Us,
    onReconnect: go,
    onReconnectStart: Ws,
    onReconnectEnd: Cr,
    onEdgeContextMenu: yo,
    onEdgeDoubleClick: Pr,
    onEdgeMouseEnter: xu,
    onEdgeMouseMove: Tr,
    onEdgeMouseLeave: li,
    reconnectRadius: ui = 10,
    onNodesChange: vo,
    onEdgesChange: wu,
    noDragClassName: Su = "nodrag",
    noWheelClassName: ku = "nowheel",
    noPanClassName: mn = "nopan",
    fitView: xo,
    fitViewOptions: wo,
    connectOnClick: Eu,
    attributionPosition: Gs,
    proOptions: Xs,
    defaultEdgeOptions: Ys,
    elevateNodesOnSelect: Ks = !0,
    elevateEdgesOnSelect: Cu = !1,
    disableKeyboardA11y: Zs = !1,
    autoPanOnConnect: Be,
    autoPanOnNodeDrag: Pu,
    autoPanOnSelection: So = !0,
    autoPanSpeed: qs,
    connectionRadius: ci,
    isValidConnection: Tu,
    onError: Qs,
    style: di,
    id: jt,
    nodeDragThreshold: Mu,
    connectionDragThreshold: At,
    viewport: Nu,
    onViewportChange: bu,
    width: _u,
    height: fi,
    colorMode: hi = "light",
    debug: Mr,
    onScroll: Nr,
    ariaLabelConfig: ju,
    zIndexMode: Js = "basic",
    ...ko
  },
  ea,
) {
  const br = jt || "1",
    _r = AT(hi),
    Au = D.useCallback(
      (pi) => {
        (pi.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }),
          Nr?.(pi));
      },
      [Nr],
    );
  return w.jsx("div", {
    "data-testid": "rf__wrapper",
    ...ko,
    onScroll: Au,
    style: { ...di, ...nN },
    ref: ea,
    className: qe(["react-flow", s, _r]),
    id: jt,
    role: "application",
    children: w.jsxs(tN, {
      nodes: e,
      edges: t,
      width: _u,
      height: fi,
      fitView: xo,
      fitViewOptions: wo,
      minZoom: $t,
      maxZoom: _t,
      nodeOrigin: ct,
      nodeExtent: jn,
      zIndexMode: Js,
      children: [
        w.jsx(jT, {
          nodes: e,
          edges: t,
          defaultNodes: r,
          defaultEdges: o,
          onConnect: S,
          onConnectStart: x,
          onConnectEnd: P,
          onClickConnectStart: C,
          onClickConnectEnd: T,
          nodesDraggable: Qe,
          autoPanOnNodeFocus: Ft,
          nodesConnectable: wt,
          nodesFocusable: ut,
          edgesFocusable: _n,
          edgesReconnectable: hn,
          elementsSelectable: pn,
          elevateNodesOnSelect: Ks,
          elevateEdgesOnSelect: Cu,
          minZoom: $t,
          maxZoom: _t,
          nodeExtent: jn,
          onNodesChange: vo,
          onEdgesChange: wu,
          snapToGrid: Se,
          snapGrid: Me,
          connectionMode: _,
          translateExtent: Bt,
          connectOnClick: Eu,
          defaultEdgeOptions: Ys,
          fitView: xo,
          fitViewOptions: wo,
          onNodesDelete: K,
          onEdgesDelete: Z,
          onDelete: ee,
          onNodeDragStart: R,
          onNodeDrag: V,
          onNodeDragStop: U,
          onSelectionDrag: H,
          onSelectionDragStart: j,
          onSelectionDragStop: F,
          onMove: h,
          onMoveStart: g,
          onMoveEnd: y,
          noPanClassName: mn,
          nodeOrigin: ct,
          rfId: br,
          autoPanOnConnect: Be,
          autoPanOnNodeDrag: Pu,
          autoPanSpeed: qs,
          onError: Qs,
          connectionRadius: ci,
          isValidConnection: Tu,
          selectNodesOnDrag: De,
          nodeDragThreshold: Mu,
          connectionDragThreshold: At,
          onBeforeDelete: G,
          debug: Mr,
          ariaLabelConfig: ju,
          zIndexMode: Js,
        }),
        w.jsx(QM, {
          onInit: f,
          onNodeClick: d,
          onEdgeClick: p,
          onNodeMouseEnter: N,
          onNodeMouseMove: k,
          onNodeMouseLeave: M,
          onNodeContextMenu: I,
          onNodeDoubleClick: b,
          nodeTypes: u,
          edgeTypes: l,
          connectionLineType: O,
          connectionLineStyle: oe,
          connectionLineComponent: re,
          connectionLineContainerStyle: le,
          selectionKeyCode: ue,
          selectionOnDrag: Q,
          selectionMode: ae,
          deleteKeyCode: ce,
          multiSelectionKeyCode: Pe,
          panActivationKeyCode: ke,
          zoomActivationKeyCode: xe,
          onlyRenderVisibleElements: be,
          defaultViewport: St,
          translateExtent: Bt,
          minZoom: $t,
          maxZoom: _t,
          preventScrolling: ai,
          zoomOnScroll: yu,
          zoomOnPinch: zs,
          zoomOnDoubleClick: fo,
          panOnScroll: Os,
          panOnScrollSpeed: vu,
          panOnScrollMode: co,
          panOnDrag: ho,
          autoPanOnSelection: So,
          onPaneClick: po,
          onPaneMouseEnter: mo,
          onPaneMouseMove: Xn,
          onPaneMouseLeave: Yn,
          onPaneScroll: Fs,
          onPaneContextMenu: $s,
          paneClickDistance: Bs,
          nodeClickDistance: Hs,
          onSelectionContextMenu: W,
          onSelectionStart: L,
          onSelectionEnd: $,
          onReconnect: go,
          onReconnectStart: Ws,
          onReconnectEnd: Cr,
          onEdgeContextMenu: yo,
          onEdgeDoubleClick: Pr,
          onEdgeMouseEnter: xu,
          onEdgeMouseMove: Tr,
          onEdgeMouseLeave: li,
          reconnectRadius: ui,
          defaultMarkerColor: Er,
          noDragClassName: Su,
          noWheelClassName: ku,
          noPanClassName: mn,
          rfId: br,
          disableKeyboardA11y: Zs,
          nodeExtent: jn,
          viewport: Nu,
          onViewportChange: bu,
          nodesDraggable: Qe,
        }),
        w.jsx(MT, { onSelectionChange: J }),
        Us,
        w.jsx(kT, { proOptions: Xs, position: Gs }),
        w.jsx(ST, { rfId: br, disableKeyboardA11y: Zs }),
      ],
    }),
  });
}
var iN = r1(rN);
function oN({ dimensions: e, lineWidth: t, variant: r, className: o }) {
  return w.jsx("path", {
    strokeWidth: t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
    className: qe(["react-flow__background-pattern", r, o]),
  });
}
function sN({ radius: e, className: t }) {
  return w.jsx("circle", {
    cx: e,
    cy: e,
    r: e,
    className: qe(["react-flow__background-pattern", "dots", t]),
  });
}
var Un;
(function (e) {
  ((e.Lines = "lines"), (e.Dots = "dots"), (e.Cross = "cross"));
})(Un || (Un = {}));
const aN = { [Un.Dots]: 1, [Un.Lines]: 1, [Un.Cross]: 6 },
  lN = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function _1({
  id: e,
  variant: t = Un.Dots,
  gap: r = 20,
  size: o,
  lineWidth: s = 1,
  offset: u = 0,
  color: l,
  bgColor: d,
  style: p,
  className: f,
  patternClassName: h,
}) {
  const g = D.useRef(null),
    { transform: y, patternId: S } = je(lN, We),
    x = o || aN[t],
    P = t === Un.Dots,
    C = t === Un.Cross,
    T = Array.isArray(r) ? r : [r, r],
    N = [T[0] * y[2] || 1, T[1] * y[2] || 1],
    k = x * y[2],
    M = Array.isArray(u) ? u : [u, u],
    I = C ? [k, k] : N,
    b = [M[0] * y[2] || 1 + I[0] / 2, M[1] * y[2] || 1 + I[1] / 2],
    R = `${S}${e || ""}`;
  return w.jsxs("svg", {
    className: qe(["react-flow__background", f]),
    style: {
      ...p,
      ...au,
      "--xy-background-color-props": d,
      "--xy-background-pattern-color-props": l,
    },
    ref: g,
    "data-testid": "rf__background",
    children: [
      w.jsx("pattern", {
        id: R,
        x: y[0] % N[0],
        y: y[1] % N[1],
        width: N[0],
        height: N[1],
        patternUnits: "userSpaceOnUse",
        patternTransform: `translate(-${b[0]},-${b[1]})`,
        children: P
          ? w.jsx(sN, { radius: k / 2, className: h })
          : w.jsx(oN, {
              dimensions: I,
              lineWidth: s,
              variant: t,
              className: h,
            }),
      }),
      w.jsx("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: `url(#${R})`,
      }),
    ],
  });
}
_1.displayName = "Background";
const uN = D.memo(_1);
function cN() {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    children: w.jsx("path", {
      d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
    }),
  });
}
function dN() {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 5",
    children: w.jsx("path", { d: "M0 0h32v4.2H0z" }),
  });
}
function fN() {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 30",
    children: w.jsx("path", {
      d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
    }),
  });
}
function hN() {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32",
    children: w.jsx("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
    }),
  });
}
function pN() {
  return w.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32",
    children: w.jsx("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
    }),
  });
}
function cl({ children: e, className: t, ...r }) {
  return w.jsx("button", {
    type: "button",
    className: qe(["react-flow__controls-button", t]),
    ...r,
    children: e,
  });
}
const mN = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig,
});
function j1({
  style: e,
  showZoom: t = !0,
  showFitView: r = !0,
  showInteractive: o = !0,
  fitViewOptions: s,
  onZoomIn: u,
  onZoomOut: l,
  onFitView: d,
  onInteractiveChange: p,
  className: f,
  children: h,
  position: g = "bottom-left",
  orientation: y = "vertical",
  "aria-label": S,
}) {
  const x = Fe(),
    {
      isInteractive: P,
      minZoomReached: C,
      maxZoomReached: T,
      ariaLabelConfig: N,
    } = je(mN, We),
    { zoomIn: k, zoomOut: M, fitView: I } = su(),
    b = () => {
      (k(), u?.());
    },
    R = () => {
      (M(), l?.());
    },
    V = () => {
      (I(s), d?.());
    },
    U = () => {
      (x.setState({
        nodesDraggable: !P,
        nodesConnectable: !P,
        elementsSelectable: !P,
      }),
        p?.(!P));
    },
    K = y === "horizontal" ? "horizontal" : "vertical";
  return w.jsxs(ro, {
    className: qe(["react-flow__controls", K, f]),
    position: g,
    style: e,
    "data-testid": "rf__controls",
    "aria-label": S ?? N["controls.ariaLabel"],
    children: [
      t &&
        w.jsxs(w.Fragment, {
          children: [
            w.jsx(cl, {
              onClick: b,
              className: "react-flow__controls-zoomin",
              title: N["controls.zoomIn.ariaLabel"],
              "aria-label": N["controls.zoomIn.ariaLabel"],
              disabled: T,
              children: w.jsx(cN, {}),
            }),
            w.jsx(cl, {
              onClick: R,
              className: "react-flow__controls-zoomout",
              title: N["controls.zoomOut.ariaLabel"],
              "aria-label": N["controls.zoomOut.ariaLabel"],
              disabled: C,
              children: w.jsx(dN, {}),
            }),
          ],
        }),
      r &&
        w.jsx(cl, {
          className: "react-flow__controls-fitview",
          onClick: V,
          title: N["controls.fitView.ariaLabel"],
          "aria-label": N["controls.fitView.ariaLabel"],
          children: w.jsx(fN, {}),
        }),
      o &&
        w.jsx(cl, {
          className: "react-flow__controls-interactive",
          onClick: U,
          title: N["controls.interactive.ariaLabel"],
          "aria-label": N["controls.interactive.ariaLabel"],
          children: P ? w.jsx(pN, {}) : w.jsx(hN, {}),
        }),
      h,
    ],
  });
}
j1.displayName = "Controls";
const gN = D.memo(j1);
function yN({
  id: e,
  x: t,
  y: r,
  width: o,
  height: s,
  style: u,
  color: l,
  strokeColor: d,
  strokeWidth: p,
  className: f,
  borderRadius: h,
  shapeRendering: g,
  selected: y,
  onClick: S,
}) {
  const { background: x, backgroundColor: P } = u || {},
    C = l || x || P;
  return w.jsx("rect", {
    className: qe(["react-flow__minimap-node", { selected: y }, f]),
    x: t,
    y: r,
    rx: h,
    ry: h,
    width: o,
    height: s,
    style: { fill: C, stroke: d, strokeWidth: p },
    shapeRendering: g,
    onClick: S ? (T) => S(T, e) : void 0,
  });
}
const vN = D.memo(yN),
  xN = (e) => e.nodes.map((t) => t.id),
  Td = (e) => (e instanceof Function ? e : () => e);
function wN({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: r = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: s,
  nodeComponent: u = vN,
  onClick: l,
}) {
  const d = je(xN, We),
    p = Td(t),
    f = Td(e),
    h = Td(r),
    g =
      typeof window > "u" || window.chrome
        ? "crispEdges"
        : "geometricPrecision";
  return w.jsx(w.Fragment, {
    children: d.map((y) =>
      w.jsx(
        kN,
        {
          id: y,
          nodeColorFunc: p,
          nodeStrokeColorFunc: f,
          nodeClassNameFunc: h,
          nodeBorderRadius: o,
          nodeStrokeWidth: s,
          NodeComponent: u,
          onClick: l,
          shapeRendering: g,
        },
        y,
      ),
    ),
  });
}
function SN({
  id: e,
  nodeColorFunc: t,
  nodeStrokeColorFunc: r,
  nodeClassNameFunc: o,
  nodeBorderRadius: s,
  nodeStrokeWidth: u,
  shapeRendering: l,
  NodeComponent: d,
  onClick: p,
}) {
  const {
    node: f,
    x: h,
    y: g,
    width: y,
    height: S,
  } = je((x) => {
    const P = x.nodeLookup.get(e);
    if (!P) return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const C = P.internals.userNode,
      { x: T, y: N } = P.internals.positionAbsolute,
      { width: k, height: M } = bn(C);
    return { node: C, x: T, y: N, width: k, height: M };
  }, We);
  return !f || f.hidden || !_v(f)
    ? null
    : w.jsx(d, {
        x: h,
        y: g,
        width: y,
        height: S,
        style: f.style,
        selected: !!f.selected,
        className: o(f),
        color: t(f),
        borderRadius: s,
        strokeColor: r(f),
        strokeWidth: u,
        shapeRendering: l,
        onClick: p,
        id: f.id,
      });
}
const kN = D.memo(SN);
var EN = D.memo(wN);
const CN = 200,
  PN = 150,
  TN = (e) => !e.hidden,
  MN = (e) => {
    const t = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2],
    };
    return {
      viewBB: t,
      boundingRect:
        e.nodeLookup.size > 0 ? Mv(js(e.nodeLookup, { filter: TN }), t) : t,
      rfId: e.rfId,
      panZoom: e.panZoom,
      translateExtent: e.translateExtent,
      flowWidth: e.width,
      flowHeight: e.height,
      ariaLabelConfig: e.ariaLabelConfig,
    };
  },
  Sy = (e, t) =>
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height,
  NN = (e, t) =>
    Sy(e.viewBB, t.viewBB) &&
    Sy(e.boundingRect, t.boundingRect) &&
    e.rfId === t.rfId &&
    e.panZoom === t.panZoom &&
    e.translateExtent === t.translateExtent &&
    e.flowWidth === t.flowWidth &&
    e.flowHeight === t.flowHeight &&
    e.ariaLabelConfig === t.ariaLabelConfig,
  bN = "react-flow__minimap-desc";
function A1({
  style: e,
  className: t,
  nodeStrokeColor: r,
  nodeColor: o,
  nodeClassName: s = "",
  nodeBorderRadius: u = 5,
  nodeStrokeWidth: l,
  nodeComponent: d,
  bgColor: p,
  maskColor: f,
  maskStrokeColor: h,
  maskStrokeWidth: g,
  position: y = "bottom-right",
  onClick: S,
  onNodeClick: x,
  pannable: P = !1,
  zoomable: C = !1,
  ariaLabel: T,
  inversePan: N,
  zoomStep: k = 1,
  offsetScale: M = 5,
}) {
  const I = Fe(),
    b = D.useRef(null),
    {
      boundingRect: R,
      viewBB: V,
      rfId: U,
      panZoom: K,
      translateExtent: Z,
      flowWidth: ee,
      flowHeight: J,
      ariaLabelConfig: j,
    } = je(MN, NN),
    H = e?.width ?? CN,
    F = e?.height ?? PN,
    W = R.width / H,
    L = R.height / F,
    $ = Math.max(W, L),
    G = $ * H,
    _ = $ * F,
    O = M * $,
    oe = R.x - (G - R.width) / 2 - O,
    re = R.y - (_ - R.height) / 2 - O,
    le = G + O * 2,
    ce = _ + O * 2,
    ue = `${bN}-${U}`,
    Q = D.useRef(0),
    ae = D.useRef();
  ((Q.current = $),
    D.useEffect(() => {
      if (b.current && K)
        return (
          (ae.current = HP({
            domNode: b.current,
            panZoom: K,
            getTransform: () => I.getState().transform,
            getViewScale: () => Q.current,
          })),
          () => {
            ae.current?.destroy();
          }
        );
    }, [K]),
    D.useEffect(() => {
      ae.current?.update({
        translateExtent: Z,
        width: ee,
        height: J,
        inversePan: N,
        pannable: P,
        zoomStep: k,
        zoomable: C,
      });
    }, [P, C, N, k, Z, ee, J]));
  const ke = S
      ? (Se) => {
          const [Me, be] = ae.current?.pointer(Se) || [0, 0];
          S(Se, { x: Me, y: be });
        }
      : void 0,
    Pe = x
      ? D.useCallback((Se, Me) => {
          const be = I.getState().nodeLookup.get(Me).internals.userNode;
          x(Se, be);
        }, [])
      : void 0,
    xe = T ?? j["minimap.ariaLabel"];
  return w.jsx(ro, {
    position: y,
    style: {
      ...e,
      "--xy-minimap-background-color-props": typeof p == "string" ? p : void 0,
      "--xy-minimap-mask-background-color-props":
        typeof f == "string" ? f : void 0,
      "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
      "--xy-minimap-mask-stroke-width-props":
        typeof g == "number" ? g * $ : void 0,
      "--xy-minimap-node-background-color-props":
        typeof o == "string" ? o : void 0,
      "--xy-minimap-node-stroke-color-props": typeof r == "string" ? r : void 0,
      "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0,
    },
    className: qe(["react-flow__minimap", t]),
    "data-testid": "rf__minimap",
    children: w.jsxs("svg", {
      width: H,
      height: F,
      viewBox: `${oe} ${re} ${le} ${ce}`,
      className: "react-flow__minimap-svg",
      role: "img",
      "aria-labelledby": ue,
      ref: b,
      onClick: ke,
      children: [
        xe && w.jsx("title", { id: ue, children: xe }),
        w.jsx(EN, {
          onClick: Pe,
          nodeColor: o,
          nodeStrokeColor: r,
          nodeBorderRadius: u,
          nodeClassName: s,
          nodeStrokeWidth: l,
          nodeComponent: d,
        }),
        w.jsx("path", {
          className: "react-flow__minimap-mask",
          d: `M${oe - O},${re - O}h${le + O * 2}v${ce + O * 2}h${-le - O * 2}z
        M${V.x},${V.y}h${V.width}v${V.height}h${-V.width}z`,
          fillRule: "evenodd",
          pointerEvents: "none",
        }),
      ],
    }),
  });
}
A1.displayName = "MiniMap";
const _N = D.memo(A1),
  jN = (e) => (t) => (e ? `${Math.max(1 / t.transform[2], 1)}` : void 0),
  AN = { [no.Line]: "right", [no.Handle]: "bottom-right" };
function IN({
  nodeId: e,
  position: t,
  variant: r = no.Handle,
  className: o,
  style: s = void 0,
  children: u,
  color: l,
  minWidth: d = 10,
  minHeight: p = 10,
  maxWidth: f = Number.MAX_VALUE,
  maxHeight: h = Number.MAX_VALUE,
  keepAspectRatio: g = !1,
  resizeDirection: y,
  autoScale: S = !0,
  shouldResize: x,
  onResizeStart: P,
  onResize: C,
  onResizeEnd: T,
}) {
  const N = l1(),
    k = typeof e == "string" ? e : N,
    M = Fe(),
    I = D.useRef(null),
    b = r === no.Handle,
    R = je(D.useCallback(jN(b && S), [b, S]), We),
    V = D.useRef(null),
    U = t ?? AN[r];
  D.useEffect(() => {
    if (!(!I.current || !k))
      return (
        V.current ||
          (V.current = nT({
            domNode: I.current,
            nodeId: k,
            getStoreItems: () => {
              const {
                nodeLookup: Z,
                transform: ee,
                snapGrid: J,
                snapToGrid: j,
                nodeOrigin: H,
                domNode: F,
              } = M.getState();
              return {
                nodeLookup: Z,
                transform: ee,
                snapGrid: J,
                snapToGrid: j,
                nodeOrigin: H,
                paneDomNode: F,
              };
            },
            onChange: (Z, ee) => {
              const {
                  triggerNodeChanges: J,
                  nodeLookup: j,
                  parentLookup: H,
                  nodeOrigin: F,
                } = M.getState(),
                W = [],
                L = { x: Z.x, y: Z.y },
                $ = j.get(k);
              if ($ && $.expandParent && $.parentId) {
                const G = $.origin ?? F,
                  _ = Z.width ?? $.measured.width ?? 0,
                  O = Z.height ?? $.measured.height ?? 0,
                  oe = {
                    id: $.id,
                    parentId: $.parentId,
                    rect: {
                      width: _,
                      height: O,
                      ...jv(
                        { x: Z.x ?? $.position.x, y: Z.y ?? $.position.y },
                        { width: _, height: O },
                        $.parentId,
                        j,
                        G,
                      ),
                    },
                  },
                  re = Jf([oe], j, H, F);
                (W.push(...re),
                  (L.x = Z.x ? Math.max(G[0] * _, Z.x) : void 0),
                  (L.y = Z.y ? Math.max(G[1] * O, Z.y) : void 0));
              }
              if (L.x !== void 0 && L.y !== void 0) {
                const G = { id: k, type: "position", position: { ...L } };
                W.push(G);
              }
              if (Z.width !== void 0 && Z.height !== void 0) {
                const _ = {
                  id: k,
                  type: "dimensions",
                  resizing: !0,
                  setAttributes: y
                    ? y === "horizontal"
                      ? "width"
                      : "height"
                    : !0,
                  dimensions: { width: Z.width, height: Z.height },
                };
                W.push(_);
              }
              for (const G of ee) {
                const _ = { ...G, type: "position" };
                W.push(_);
              }
              J(W);
            },
            onEnd: ({ width: Z, height: ee }) => {
              const J = {
                id: k,
                type: "dimensions",
                resizing: !1,
                dimensions: { width: Z, height: ee },
              };
              M.getState().triggerNodeChanges([J]);
            },
          })),
        V.current.update({
          controlPosition: U,
          boundaries: { minWidth: d, minHeight: p, maxWidth: f, maxHeight: h },
          keepAspectRatio: g,
          resizeDirection: y,
          onResizeStart: P,
          onResize: C,
          onResizeEnd: T,
          shouldResize: x,
        }),
        () => {
          V.current?.destroy();
        }
      );
  }, [U, d, p, f, h, g, P, C, T, x]);
  const K = U.split("-");
  return w.jsx("div", {
    className: qe(["react-flow__resize-control", "nodrag", ...K, r, o]),
    ref: I,
    style: {
      ...s,
      scale: R,
      ...(l && { [b ? "backgroundColor" : "borderColor"]: l }),
    },
    children: u,
  });
}
D.memo(IN);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DN = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  I1 = (...e) =>
    e
      .filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var RN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LN = D.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: o,
      className: s = "",
      children: u,
      iconNode: l,
      ...d
    },
    p,
  ) =>
    D.createElement(
      "svg",
      {
        ref: p,
        ...RN,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: o ? (Number(r) * 24) / Number(t) : r,
        className: I1("lucide", s),
        ...d,
      },
      [
        ...l.map(([f, h]) => D.createElement(f, h)),
        ...(Array.isArray(u) ? u : [u]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ve = (e, t) => {
  const r = D.forwardRef(({ className: o, ...s }, u) =>
    D.createElement(LN, {
      ref: u,
      iconNode: t,
      className: I1(`lucide-${DN(e)}`, o),
      ...s,
    }),
  );
  return ((r.displayName = `${e}`), r);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D1 = ve("AlignCenterHorizontal", [
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4", key: "11f1s0" }],
  ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4", key: "t14dx9" }],
  ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1", key: "1w07xs" }],
  ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1", key: "1apec2" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R1 = ve("AlignCenterVertical", [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4", key: "14d6g8" }],
  ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4", key: "1e2lrw" }],
  ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1", key: "1fkdwx" }],
  ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1", key: "1euafb" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L1 = ve("AlignHorizontalDistributeCenter", [
  [
    "rect",
    { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" },
  ],
  [
    "rect",
    { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" },
  ],
  ["path", { d: "M17 22v-5", key: "4b6g73" }],
  ["path", { d: "M17 7V2", key: "hnrr36" }],
  ["path", { d: "M7 22v-3", key: "1r4jpn" }],
  ["path", { d: "M7 5V2", key: "liy1u9" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = ve("AlignLeft", [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VN = ve("AlignStartVertical", [
  [
    "rect",
    { width: "9", height: "6", x: "6", y: "14", rx: "2", key: "lpm2y7" },
  ],
  [
    "rect",
    { width: "16", height: "6", x: "6", y: "4", rx: "2", key: "rdj6ps" },
  ],
  ["path", { d: "M2 2v20", key: "1ivd8o" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zN = ve("Blend", [
  ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
  ["circle", { cx: "15", cy: "15", r: "7", key: "19ennj" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ON = ve("Calculator", [
  [
    "rect",
    { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" },
  ],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lu = ve("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z1 = ve("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = ve("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FN = ve("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = ve("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $N = ve("CircleOff", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
  ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = ve("CircleStop", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uu = ve("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BN = ve("Contrast", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 18a6 6 0 0 0 0-12v12z", key: "j4l70d" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HN = ve("Crop", [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nh = ve("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UN = ve("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $1 = ve("FileDown", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WN = ve("FileImage", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  [
    "path",
    { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = ve("FileUp", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GN = ve("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XN = ve("Gauge", [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H1 = ve("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YN = ve("ImagePlus", [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  [
    "path",
    {
      d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
      key: "1ue2ih",
    },
  ],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KN = ve("Images", [
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }],
  [
    "path",
    { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18", key: "nf6bnh" },
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "rect",
    { width: "16", height: "16", x: "6", y: "2", rx: "2", key: "12espp" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rh = ve("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZN = ve("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo",
    },
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc",
    },
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U1 = ve("ListFilter", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W1 = ve("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qN = ve("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G1 = ve("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const of = ve("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QN = ve("Palette", [
  [
    "circle",
    { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
  ],
  [
    "circle",
    { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
  ],
  [
    "circle",
    { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
  ],
  [
    "circle",
    { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
  ],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X1 = ve("PanelRightClose", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JN = ve("PanelRightOpen", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eb = ve("PanelTopOpen", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "m15 14-3 3-3-3", key: "g215vf" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = ve("Pause", [
  [
    "rect",
    { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
  ],
  [
    "rect",
    { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = ve("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = ve("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = ve("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  [
    "path",
    {
      d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
      key: "6uklza",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tb = ve("RotateCw", [
  [
    "path",
    { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = ve("Route", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  [
    "path",
    { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" },
  ],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nb = ve("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476",
    },
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rb = ve("Scaling", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M21 3 9 15", key: "15kdhq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ib = ve("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sf = ve("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ob = ve("Settings2", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sb = ve("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ab = ve("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lb = ve("Split", [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M8 3H3v5", key: "15dfkv" }],
  ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = ve("StickyNote", [
  [
    "path",
    {
      d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",
      key: "qazsjp",
    },
  ],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ub = ve("SunMedium", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 3v1", key: "1asbbs" }],
  ["path", { d: "M12 20v1", key: "1wcdkc" }],
  ["path", { d: "M3 12h1", key: "lp3yf2" }],
  ["path", { d: "M20 12h1", key: "1vloll" }],
  ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
  ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
  ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
  ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const af = ve("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ex = ve("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tx = ve("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  [
    "path",
    {
      d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
      key: "f3b9sd",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cu = ve("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ih = ve("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  Hi = {
    image: "#50c8ff",
    number: "#f0b35b",
    string: "#d79cff",
    boolean: "#7ee6a8",
    color: "#ff7aa8",
    any: "#9ba3b5",
  },
  Zi = {
    input: "#50c8ff",
    transform: "#8b7cff",
    filter: "#ff7aa8",
    ai: "#b687ff",
    logic: "#f0b35b",
    output: "#7ee6a8",
    utility: "#9ba3b5",
  },
  cb = {
    input: "Input",
    transform: "Transform",
    filter: "Filters",
    ai: "Local AI",
    logic: "Data & Logic",
    output: "Output",
    utility: "Utility",
  },
  lf = [
    {
      type: "loadImage",
      label: "Load Image",
      description: "Decode an image locally in your browser.",
      category: "input",
      icon: "ImagePlus",
      inputs: [],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "sourceName",
          label: "Source",
          control: "file",
          default: "Fluxel Demo Artwork",
        },
        { id: "dataUrl", label: "Image data", control: "text", default: "" },
      ],
    },
    {
      type: "batchInput",
      label: "Batch Input",
      description: "Stream an input folder through this graph. Save / Export nodes control every output.",
      category: "input",
      icon: "FolderOpen",
      inputs: [],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "inputDirectory", label: "Input folder", control: "inputDirectory", default: "", required: !0 },
      ],
    },
    {
      type: "solidColor",
      label: "Solid Color",
      description: "Generate a flat-color image at any dimensions.",
      category: "input",
      icon: "Palette",
      inputs: [],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "width", label: "Width", control: "number", default: 720, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "height", label: "Height", control: "number", default: 480, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "color", label: "Color", control: "color", default: "#6d7cff" },
      ],
    },
    {
      type: "gradientImage",
      label: "Gradient",
      description: "Generate an angled two-color linear gradient.",
      category: "input",
      icon: "Blend",
      inputs: [],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "width", label: "Width", control: "number", default: 720, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "height", label: "Height", control: "number", default: 480, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "startColor", label: "Start color", control: "color", default: "#10162f" },
        { id: "endColor", label: "End color", control: "color", default: "#ff5f9e" },
        { id: "angle", label: "Angle", control: "range", default: 35, min: -180, max: 180, step: 1, unit: "°" },
      ],
    },
    {
      type: "patternImage",
      label: "Pattern",
      description: "Generate checker, stripe, or dot patterns.",
      category: "input",
      icon: "Layers3",
      inputs: [],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "width", label: "Width", control: "number", default: 720, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "height", label: "Height", control: "number", default: 480, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "pattern", label: "Pattern", control: "select", default: "checker", options: [{ label: "Checker", value: "checker" }, { label: "Stripes", value: "stripes" }, { label: "Dots", value: "dots" }] },
        { id: "size", label: "Cell size", control: "range", default: 32, min: 2, max: 256, step: 1, unit: "px" },
        { id: "colorA", label: "Color A", control: "color", default: "#12141c" },
        { id: "colorB", label: "Color B", control: "color", default: "#6d7cff" },
      ],
    },
    {
      type: "shapeImage",
      label: "Shape",
      description: "Generate a centered circle, rectangle, or diamond.",
      category: "input",
      icon: "CircleOff",
      inputs: [],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "width", label: "Width", control: "number", default: 720, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "height", label: "Height", control: "number", default: 480, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "shape", label: "Shape", control: "select", default: "circle", options: [{ label: "Circle", value: "circle" }, { label: "Rectangle", value: "rectangle" }, { label: "Diamond", value: "diamond" }] },
        { id: "size", label: "Size", control: "range", default: 62, min: 1, max: 100, step: 1, unit: "%" },
        { id: "color", label: "Shape color", control: "color", default: "#ff7aa8" },
        { id: "background", label: "Background", control: "color", default: "#101114" },
      ],
    },
    {
      type: "textImage",
      label: "Text",
      description: "Render centered text into a generated image.",
      category: "input",
      icon: "ImagePlus",
      inputs: [],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "width", label: "Width", control: "number", default: 960, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "height", label: "Height", control: "number", default: 540, min: 1, max: 4096, step: 1, unit: "px", inline: !0 },
        { id: "text", label: "Text", control: "text", default: "FLUXEL" },
        { id: "fontSize", label: "Font size", control: "range", default: 96, min: 8, max: 512, step: 1, unit: "px" },
        { id: "bold", label: "Bold", control: "toggle", default: !0 },
        { id: "color", label: "Text color", control: "color", default: "#ffffff" },
        { id: "background", label: "Background", control: "color", default: "#101114" },
      ],
    },
    {
      type: "resize",
      label: "Resize",
      description: "Scale an image by percentage or one aspect-locked pixel dimension.",
      category: "transform",
      icon: "Scaling",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "mode", label: "Resize by", control: "select", default: "percentage", inline: !0,
          options: [{ label: "Percentage", value: "percentage" }, { label: "Pixels", value: "pixels" }] },
        { id: "percentage", label: "Scale", control: "range", default: 100, min: 1, max: 400, step: 1, unit: "%",
          visibleWhen: { id: "mode", equals: "percentage" }, inline: !0 },
        { id: "pixelDimension", label: "Set dimension", control: "select", default: "width",
          visibleWhen: { id: "mode", equals: "pixels" }, inline: !0,
          options: [{ label: "Width", value: "width" }, { label: "Height", value: "height" }] },
        {
          id: "width",
          label: "Width",
          control: "number",
          default: 720,
          min: 1,
          max: 4096,
          step: 1,
          unit: "px",
          visibleWhen: [{ id: "mode", equals: "pixels" }, { id: "pixelDimension", equals: "width" }],
          inline: !0,
        },
        {
          id: "height",
          label: "Height",
          control: "number",
          default: 480,
          min: 1,
          max: 4096,
          step: 1,
          unit: "px",
          visibleWhen: [{ id: "mode", equals: "pixels" }, { id: "pixelDimension", equals: "height" }],
          inline: !0,
        },
        {
          id: "sampling",
          label: "Sampling",
          control: "select",
          default: "bilinear",
          options: [
            { label: "Bilinear", value: "bilinear" },
            { label: "Nearest", value: "nearest" },
          ],
        },
      ],
    },
    {
      type: "aiUpscale",
      label: "Real-ESRGAN Upscale",
      description: "GPU-accelerated Real-ESRGAN with native-scale inference and clean 2×–4× output.",
      category: "ai",
      icon: "Sparkles",
      requiresPack: "realesrgan-ncnn-vulkan",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "scale", label: "Scale", control: "select", default: 3, inline: !0,
          options: [{ label: "2×", value: 2 }, { label: "3×", value: 3 }, { label: "4×", value: 4 }] },
        { id: "model", label: "Model", control: "select", default: "general",
          options: [
            { label: "General Photo · native 4×", value: "general" },
            { label: "Anime / Artwork · native 4×", value: "anime" },
            { label: "Anime Fast · native 2–4×", value: "animeFast" },
          ] },
        { id: "tileSize", label: "GPU memory", control: "select", default: 0,
          options: [
            { label: "Automatic", value: 0 },
            { label: "Low VRAM", value: 64 },
            { label: "Balanced", value: 128 },
            { label: "Faster", value: 256 },
            { label: "Maximum", value: 512 },
          ] },
        { id: "strength", label: "AI detail", control: "range", default: 100, min: 0, max: 100, step: 1, unit: "%", inline: !0 },
        { id: "preserveAlpha", label: "Preserve transparency", control: "toggle", default: !0 },
      ],
    },
    {
      type: "aiDepthMap",
      label: "AI Depth / Height Map",
      description: "Estimate scene depth once and output both a relative depth map and a tunable height map.",
      category: "ai",
      icon: "Layers3",
      requiresPack: "depth-anything-v2-small",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [
        { id: "depth", label: "Depth", type: "image" },
        { id: "height", label: "Height", type: "image" },
      ],
      params: [
        { id: "quality", label: "AI quality", control: "select", default: "balanced", inline: !0,
          options: [
            { label: "Fast · 392 px", value: "fast" },
            { label: "Balanced · 518 px", value: "balanced" },
            { label: "Fine · 686 px", value: "fine" },
            { label: "Ultra · 868 px", value: "ultra" },
          ] },
        { id: "hardware", label: "Processing", control: "select", default: "auto",
          options: [{ label: "Automatic · GPU then CPU", value: "auto" }, { label: "CPU only", value: "cpu" }] },
        { id: "depthPolarity", label: "Depth white point", control: "select", default: "nearWhite",
          options: [{ label: "Near is white", value: "nearWhite" }, { label: "Far is white", value: "farWhite" }] },
        { id: "heightPolarity", label: "Height direction", control: "select", default: "nearHigh",
          options: [{ label: "Near is high", value: "nearHigh" }, { label: "Far is high", value: "farHigh" }] },
        { id: "heightContrast", label: "Height contrast", control: "range", default: 115, min: 25, max: 250, step: 1, unit: "%", inline: !0 },
        { id: "heightGamma", label: "Height gamma", control: "range", default: 1, min: 0.25, max: 4, step: 0.05, inline: !0 },
        { id: "heightSmoothing", label: "Height smoothing", control: "range", default: 1, min: 0, max: 12, step: 1, unit: "px", inline: !0 },
      ],
    },
    {
      type: "paintMask",
      label: "Paint Mask",
      description: "Paint a reusable mask over an image. White marks the selected area; black is preserved.",
      category: "utility",
      icon: "ScanLine",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [
        { id: "image", label: "Image", type: "image" },
        { id: "mask", label: "Mask", type: "image" },
      ],
      params: [
        { id: "maskDataUrl", label: "Painted mask", control: "maskPainter", default: "", required: !0, inline: !0 },
      ],
    },
    {
      type: "aiGenerate",
      label: "AI Generate",
      description: "Generate a brand-new image from a text prompt at any size or aspect ratio, entirely on this machine.",
      category: "ai",
      icon: "ImagePlus",
      requiresPack: "hidream-o1-image",
      inputs: [],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "prompt", label: "Prompt", control: "text", default: "", required: !0 },
        { id: "resolution", label: "Output size", control: "select", default: "square",
          options: [
            { label: "Square · 2048 × 2048", value: "square" },
            { label: "Landscape 4:3 · 2304 × 1728", value: "landscape43" },
            { label: "Landscape 3:2 · 2496 × 1664", value: "landscape32" },
            { label: "Landscape 5:4 · 2304 × 1792", value: "landscape54" },
            { label: "Widescreen 16:9 · 2560 × 1440", value: "wide169" },
            { label: "Ultrawide 21:9 · 3104 × 1312", value: "ultrawide" },
            { label: "Portrait 3:4 · 1728 × 2304", value: "portrait34" },
            { label: "Portrait 2:3 · 1664 × 2496", value: "portrait23" },
            { label: "Portrait 4:5 · 1792 × 2304", value: "portrait45" },
            { label: "Tall 9:16 · 1440 × 2560", value: "tall916" },
            { label: "Ultratall 9:21 · 1312 × 3104", value: "ultratall" },
          ] },
        { id: "seed", label: "Seed", control: "number", default: -1, min: -1, max: 2147483647, step: 1 },
        { id: "incrementSeed", label: "Increment seed in batch", control: "toggle", default: !0 },
      ],
    },
    {
      type: "aiEdit",
      label: "AI Edit",
      description: "Describe a change in plain language and let the model apply it to the whole image. No mask needed.",
      category: "ai",
      icon: "Sparkles",
      requiresPack: "hidream-o1-image",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "prompt", label: "Instruction", control: "text", default: "", required: !0 },
        { id: "seed", label: "Seed", control: "number", default: -1, min: -1, max: 2147483647, step: 1 },
        { id: "incrementSeed", label: "Increment seed in batch", control: "toggle", default: !0 },
      ],
    },
    {
      type: "brightnessContrast",
      label: "Brightness / Contrast",
      description: "Balance luminance and tonal separation.",
      category: "filter",
      icon: "SunMedium",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "brightness",
          label: "Brightness",
          control: "range",
          default: 8,
          min: -100,
          max: 100,
          step: 1,
          inline: !0,
        },
        {
          id: "contrast",
          label: "Contrast",
          control: "range",
          default: 18,
          min: -100,
          max: 100,
          step: 1,
          inline: !0,
        },
      ],
    },
    {
      type: "blur",
      label: "Blur",
      description: "Apply a fast separable box blur.",
      category: "filter",
      icon: "Blend",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "radius",
          label: "Radius",
          control: "range",
          default: 2,
          min: 0,
          max: 18,
          step: 1,
          unit: "px",
          inline: !0,
        },
      ],
    },
    {
      type: "gaussianBlur",
      label: "Gaussian Blur",
      description: "Apply a true separable Gaussian blur with sigma control.",
      category: "filter",
      icon: "Blend",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "radius", label: "Radius", control: "range", default: 6, min: 0, max: 32, step: 1, unit: "px", inline: !0 },
        { id: "sigma", label: "Sigma", control: "range", default: 3, min: 0.2, max: 16, step: 0.1, inline: !0 },
      ],
    },
    {
      type: "motionBlur",
      label: "Motion Blur",
      description: "Blur pixels along a configurable direction and distance.",
      category: "filter",
      icon: "Route",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "distance", label: "Distance", control: "range", default: 12, min: 1, max: 64, step: 1, unit: "px", inline: !0 },
        { id: "angle", label: "Angle", control: "range", default: 0, min: -180, max: 180, step: 1, unit: "°", inline: !0 },
      ],
    },
    {
      type: "unsharpMask",
      label: "Unsharp Mask",
      description: "Sharpen with Gaussian detail extraction and thresholding.",
      category: "filter",
      icon: "Sparkles",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "amount", label: "Amount", control: "range", default: 110, min: 0, max: 300, step: 1, unit: "%", inline: !0 },
        { id: "radius", label: "Radius", control: "range", default: 3, min: 1, max: 24, step: 1, unit: "px", inline: !0 },
        { id: "threshold", label: "Threshold", control: "range", default: 4, min: 0, max: 64, step: 1 },
      ],
    },
    {
      type: "grayscale",
      label: "Grayscale",
      description: "Convert RGB pixels to perceptual luminance.",
      category: "filter",
      icon: "CircleOff",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "mix",
          label: "Mix",
          control: "range",
          default: 100,
          min: 0,
          max: 100,
          step: 1,
          unit: "%",
          inline: !0,
        },
      ],
    },
    {
      type: "crop",
      label: "Crop",
      description: "Extract a rectangular region in pixels.",
      category: "transform",
      icon: "Crop",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "x",
          label: "X",
          control: "number",
          default: 0,
          min: 0,
          max: 4096,
          step: 1,
          unit: "px",
        },
        {
          id: "y",
          label: "Y",
          control: "number",
          default: 0,
          min: 0,
          max: 4096,
          step: 1,
          unit: "px",
        },
        {
          id: "width",
          label: "Width",
          control: "number",
          default: 640,
          min: 1,
          max: 4096,
          step: 1,
          unit: "px",
          inline: !0,
        },
        {
          id: "height",
          label: "Height",
          control: "number",
          default: 420,
          min: 1,
          max: 4096,
          step: 1,
          unit: "px",
          inline: !0,
        },
      ],
    },
    {
      type: "rotateFlip",
      label: "Rotate / Flip",
      description: "Rotate by quarter turns and mirror axes.",
      category: "transform",
      icon: "RotateCw",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "angle",
          label: "Angle",
          control: "select",
          default: 0,
          options: [
            { label: "0°", value: 0 },
            { label: "90°", value: 90 },
            { label: "180°", value: 180 },
            { label: "270°", value: 270 },
          ],
          inline: !0,
        },
        {
          id: "flipHorizontal",
          label: "Flip horizontal",
          control: "toggle",
          default: !1,
        },
        {
          id: "flipVertical",
          label: "Flip vertical",
          control: "toggle",
          default: !1,
        },
      ],
    },
    {
      type: "hueSaturation",
      label: "Hue / Saturation",
      description: "Rotate hue and adjust color intensity.",
      category: "filter",
      icon: "Palette",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "hue",
          label: "Hue",
          control: "range",
          default: 0,
          min: -180,
          max: 180,
          step: 1,
          unit: "°",
          inline: !0,
        },
        {
          id: "saturation",
          label: "Saturation",
          control: "range",
          default: 10,
          min: -100,
          max: 100,
          step: 1,
          unit: "%",
          inline: !0,
        },
      ],
    },
    {
      type: "sharpen",
      label: "Sharpen",
      description: "Increase local contrast with a convolution kernel.",
      category: "filter",
      icon: "Sparkles",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "amount",
          label: "Amount",
          control: "range",
          default: 50,
          min: 0,
          max: 100,
          step: 1,
          unit: "%",
          inline: !0,
        },
      ],
    },
    {
      type: "edgeDetection",
      label: "Edge Detection",
      description: "Sobel edge magnitude rendered as luminance.",
      category: "filter",
      icon: "ScanLine",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "strength",
          label: "Strength",
          control: "range",
          default: 100,
          min: 10,
          max: 250,
          step: 1,
          unit: "%",
          inline: !0,
        },
      ],
    },
    {
      type: "threshold",
      label: "Threshold",
      description: "Separate pixels into pure dark and light values.",
      category: "filter",
      icon: "Contrast",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "threshold",
          label: "Threshold",
          control: "range",
          default: 128,
          min: 0,
          max: 255,
          step: 1,
          inline: !0,
        },
      ],
    },
    {
      type: "levels",
      label: "Levels",
      description: "Remap input and output tonal ranges with gamma control.",
      category: "filter",
      icon: "Gauge",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "blackPoint", label: "Input black", control: "range", default: 0, min: 0, max: 254, step: 1, inline: !0 },
        { id: "gamma", label: "Gamma", control: "range", default: 1, min: 0.1, max: 4, step: 0.05, inline: !0 },
        { id: "whitePoint", label: "Input white", control: "range", default: 255, min: 1, max: 255, step: 1 },
        { id: "outputBlack", label: "Output black", control: "range", default: 0, min: 0, max: 254, step: 1 },
        { id: "outputWhite", label: "Output white", control: "range", default: 255, min: 1, max: 255, step: 1 },
      ],
    },
    {
      type: "curves",
      label: "Curves",
      description: "Shape tonal response with an interactive five-point curve.",
      category: "filter",
      icon: "SlidersHorizontal",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "channel",
          label: "Channel",
          control: "select",
          default: "rgb",
          options: [
            { label: "RGB", value: "rgb" },
            { label: "Red", value: "red" },
            { label: "Green", value: "green" },
            { label: "Blue", value: "blue" },
          ],
          inline: !0,
        },
        { id: "curve", label: "Tone curve", control: "curve", default: "0,64,128,192,255" },
      ],
    },
    {
      type: "colorGrade",
      label: "Color Grade",
      description: "Adjust exposure, gamma, temperature, and tint.",
      category: "filter",
      icon: "Palette",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "exposure", label: "Exposure", control: "range", default: 0, min: -4, max: 4, step: 0.1, unit: " EV", inline: !0 },
        { id: "gamma", label: "Gamma", control: "range", default: 1, min: 0.1, max: 4, step: 0.05, inline: !0 },
        { id: "temperature", label: "Temperature", control: "range", default: 0, min: -100, max: 100, step: 1 },
        { id: "tint", label: "Tint", control: "range", default: 0, min: -100, max: 100, step: 1 },
      ],
    },
    {
      type: "blendImages",
      label: "Blend Images",
      description: "Composite two images using professional blend modes.",
      category: "filter",
      icon: "Layers3",
      inputs: [
        { id: "base", label: "Base", type: "image" },
        { id: "blend", label: "Blend", type: "image" },
      ],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "mode",
          label: "Blend mode",
          control: "select",
          default: "normal",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Multiply", value: "multiply" },
            { label: "Screen", value: "screen" },
            { label: "Overlay", value: "overlay" },
            { label: "Difference", value: "difference" },
          ],
          inline: !0,
        },
        { id: "opacity", label: "Opacity", control: "range", default: 100, min: 0, max: 100, step: 1, unit: "%", inline: !0 },
      ],
    },
    {
      type: "applyMask",
      label: "Apply Mask",
      description: "Convert image luminance into a feathered alpha mask.",
      category: "filter",
      icon: "CircleOff",
      inputs: [
        { id: "image", label: "Image", type: "image" },
        { id: "mask", label: "Mask", type: "image" },
      ],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "feather", label: "Feather", control: "range", default: 0, min: 0, max: 24, step: 1, unit: "px", inline: !0 },
        { id: "invert", label: "Invert mask", control: "toggle", default: !1, inline: !0 },
      ],
    },
    {
      type: "math",
      label: "Math",
      description: "Combine two numeric values.",
      category: "logic",
      icon: "Calculator",
      inputs: [
        { id: "a", label: "A", type: "number", optional: !0 },
        { id: "b", label: "B", type: "number", optional: !0 },
      ],
      outputs: [{ id: "value", label: "Value", type: "number" }],
      params: [
        {
          id: "operation",
          label: "Operation",
          control: "select",
          default: "add",
          options: [
            { label: "Add", value: "add" },
            { label: "Subtract", value: "subtract" },
            { label: "Multiply", value: "multiply" },
            { label: "Divide", value: "divide" },
          ],
        },
        {
          id: "a",
          label: "Fallback A",
          control: "number",
          default: 1,
          step: 0.1,
          inline: !0,
        },
        {
          id: "b",
          label: "Fallback B",
          control: "number",
          default: 1,
          step: 0.1,
          inline: !0,
        },
      ],
    },
    {
      type: "conditional",
      label: "Conditional",
      description: "Choose between two values using a boolean.",
      category: "logic",
      icon: "Split",
      inputs: [
        { id: "condition", label: "If", type: "boolean", optional: !0 },
        { id: "truthy", label: "True", type: "any", optional: !0 },
        { id: "falsy", label: "False", type: "any", optional: !0 },
      ],
      outputs: [{ id: "value", label: "Value", type: "any" }],
      params: [
        {
          id: "condition",
          label: "Condition",
          control: "toggle",
          default: !0,
          inline: !0,
        },
        { id: "truthy", label: "True value", control: "number", default: 1 },
        { id: "falsy", label: "False value", control: "number", default: 0 },
      ],
    },
    {
      type: "preview",
      label: "Preview",
      description: "Inspect an image and compare it with the source.",
      category: "output",
      icon: "PanelTopOpen",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        {
          id: "label",
          label: "Preview label",
          control: "text",
          default: "Final composite",
        },
      ],
    },
    {
      type: "exportImage",
      label: "Save / Export Image",
      description: "Automatically encode and save the result to a desktop directory.",
      category: "output",
      icon: "Download",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [
        { id: "directory", label: "Export directory", control: "directory", default: "", requiredForBatch: !0 },
        {
          id: "fileName",
          label: "File name",
          control: "text",
          default: "fluxel-output",
        },
        {
          id: "format",
          label: "Format",
          control: "select",
          default: "png",
          options: [
            { label: "PNG", value: "png" },
            { label: "JPEG", value: "jpeg" },
            { label: "WebP", value: "webp" },
          ],
        },
        {
          id: "quality",
          label: "Quality",
          control: "range",
          default: 92,
          min: 10,
          max: 100,
          step: 1,
          unit: "%",
        },
      ],
    },
    {
      type: "macro",
      label: "Macro",
      description: "A reusable collapsed image-processing subgraph.",
      category: "utility",
      icon: "Layers3",
      inputs: [{ id: "image", label: "Image", type: "image" }],
      outputs: [{ id: "image", label: "Image", type: "image" }],
      params: [{ id: "title", label: "Macro title", control: "text", default: "Image macro" }],
    },
    {
      type: "reroute",
      label: "Reroute",
      description: "Keep complex graphs tidy without changing data.",
      category: "utility",
      icon: "Route",
      inputs: [{ id: "value", label: "In", type: "any" }],
      outputs: [{ id: "value", label: "Out", type: "any" }],
      params: [],
    },
    {
      type: "frame",
      label: "Frame",
      description: "Move and collapse related nodes as one visual group.",
      category: "utility",
      icon: "Layers3",
      inputs: [],
      outputs: [],
      executable: !1,
      params: [
        { id: "title", label: "Frame title", control: "text", default: "Processing stage" },
        { id: "color", label: "Color", control: "color", default: "#8b7cff" },
        { id: "collapsed", label: "Collapsed", control: "toggle", default: !1 },
      ],
    },
    {
      type: "note",
      label: "Comment",
      description: "Leave context directly on the canvas.",
      category: "utility",
      icon: "StickyNote",
      inputs: [],
      outputs: [],
      executable: !1,
      params: [
        {
          id: "text",
          label: "Note",
          control: "text",
          default: "Add context for this stage of the pipeline.",
        },
        {
          id: "color",
          label: "Color",
          control: "color",
          default: "#8b7cff",
          inline: !0,
        },
      ],
    },
  ],
  db = new Map(lf.map((e) => [e.type, e]));
function Gn(e) {
  const t = db.get(e);
  if (!t) throw new Error(`Unknown node type: ${e}`);
  return t;
}
function nx(e) {
  return Object.fromEntries(Gn(e).params.map((t) => [t.id, t.default]));
}
const ky = (e) => {
    let t;
    const r = new Set(),
      o = (f, h) => {
        const g = typeof f == "function" ? f(t) : f;
        if (!Object.is(g, t)) {
          const y = t;
          ((t =
            (h ?? (typeof g != "object" || g === null))
              ? g
              : Object.assign({}, t, g)),
            r.forEach((S) => S(t, y)));
        }
      },
      s = () => t,
      d = {
        setState: o,
        getState: s,
        getInitialState: () => p,
        subscribe: (f) => (r.add(f), () => r.delete(f)),
      },
      p = (t = e(o, s, d));
    return d;
  },
  fb = (e) => (e ? ky(e) : ky),
  hb = (e) => e;
function pb(e, t = hb) {
  const r = Fi.useSyncExternalStore(
    e.subscribe,
    Fi.useCallback(() => t(e.getState()), [e, t]),
    Fi.useCallback(() => t(e.getInitialState()), [e, t]),
  );
  return (Fi.useDebugValue(r), r);
}
const Ey = (e) => {
    const t = fb(e),
      r = (o) => pb(t, o);
    return (Object.assign(r, t), r);
  },
  mb = (e) => (e ? Ey(e) : Ey),
  gb = `
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0b132b"/><stop offset=".45" stop-color="#3454d1"/><stop offset="1" stop-color="#e35d9c"/></linearGradient>
    <radialGradient id="orb"><stop stop-color="#9ef7ff"/><stop offset="1" stop-color="#45a6ff" stop-opacity="0"/></radialGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="18"/></filter>
  </defs>
  <rect width="960" height="640" fill="url(#bg)"/>
  <circle cx="700" cy="160" r="210" fill="url(#orb)" opacity=".8"/>
  <path d="M-80 520 C210 260 360 710 690 405 C790 315 865 315 1040 420 L1040 700 L-80 700Z" fill="#121625" opacity=".78"/>
  <path d="M-40 470 C210 250 350 650 670 360 C800 240 880 300 1010 350" fill="none" stroke="#ffffff" stroke-opacity=".28" stroke-width="3"/>
  <g fill="none" stroke="#c9f2ff" stroke-opacity=".42">
    <circle cx="238" cy="220" r="112"/><circle cx="238" cy="220" r="76"/><circle cx="238" cy="220" r="38"/>
  </g>
  <circle cx="238" cy="220" r="14" fill="#fff" filter="url(#glow)"/>
  <text x="72" y="565" fill="#ffffff" font-family="Arial, sans-serif" font-size="58" font-weight="700" letter-spacing="8">FLUXEL</text>
  <text x="76" y="600" fill="#dbe7ff" opacity=".72" font-family="monospace" font-size="16" letter-spacing="4">VISUAL SIGNAL / 01</text>
</svg>`,
  yb = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(gb)}`;
function gr(e, t, r, o, s = {}) {
  const u = Gn(t);
  return {
    id: e,
    type: "fluxel",
    position: { x: r, y: o },
    data: {
      nodeType: t,
      label: u.label,
      category: u.category,
      params: { ...nx(t), ...s },
      executionState: "idle",
    },
  };
}
function zi(e, t, r) {
  return {
    id: e,
    source: t,
    target: r,
    sourceHandle: "image",
    targetHandle: "image",
    type: "fluxel",
    animated: !1,
    data: { portType: "image" },
  };
}
function vb() {
  return {
    id: "graph-main",
    name: "Demo pipeline",
    nodes: [
      gr("load-demo", "loadImage", 40, 120, {
        sourceName: "Fluxel Demo Artwork",
        dataUrl: yb,
      }),
      gr("resize-demo", "resize", 340, 120, { mode: "pixels", pixelDimension: "width", width: 720 }),
      gr("tone-demo", "brightnessContrast", 640, 120, {
        brightness: 8,
        contrast: 18,
      }),
      gr("blur-demo", "blur", 940, 120, { radius: 2 }),
      gr("gray-demo", "grayscale", 1240, 120, { mix: 72 }),
      gr("preview-demo", "preview", 1540, 120, { label: "Signal study" }),
      gr("export-demo", "exportImage", 1540, 430, {
        fileName: "fluxel-signal-study",
        format: "png",
      }),
      gr("note-demo", "note", 42, 430, {
        text: "A complete image pipeline. Select any node to tune it, then run again.",
        color: "#50c8ff",
      }),
    ],
    edges: [
      zi("e-load-resize", "load-demo", "resize-demo"),
      zi("e-resize-tone", "resize-demo", "tone-demo"),
      zi("e-tone-blur", "tone-demo", "blur-demo"),
      zi("e-blur-gray", "blur-demo", "gray-demo"),
      zi("e-gray-preview", "gray-demo", "preview-demo"),
      zi("e-preview-export", "preview-demo", "export-demo"),
    ],
  };
}
function Md() {
  const e = vb();
  return {
    id: "fluxel-demo",
    name: "Fluxel Demo",
    version: 1,
    graphs: [e],
    activeGraphId: e.id,
    updatedAt: new Date().toISOString(),
  };
}
const fluxelTemplates = [
  {
    id: "web-optimizer",
    name: "Web Optimizer",
    description: "Resize, gently sharpen, preview, and export a web-ready image.",
    graph: {
      nodes: [
        gr("tpl-load", "loadImage", 40, 120, { sourceName: "Fluxel Demo Artwork", dataUrl: yb }),
        gr("tpl-resize", "resize", 360, 120, { mode: "pixels", pixelDimension: "width", width: 1280 }),
        gr("tpl-sharpen", "sharpen", 680, 120, { amount: 24 }),
        gr("tpl-preview", "preview", 1000, 120),
        gr("tpl-export", "exportImage", 1000, 420, { fileName: "web-optimized", format: "webp", quality: 86 }),
      ],
      edges: [
        zi("tpl-e1", "tpl-load", "tpl-resize"),
        zi("tpl-e2", "tpl-resize", "tpl-sharpen"),
        zi("tpl-e3", "tpl-sharpen", "tpl-preview"),
        zi("tpl-e4", "tpl-preview", "tpl-export"),
      ],
    },
  },
  {
    id: "cinematic-grade",
    name: "Cinematic Grade",
    description: "Shape exposure, color temperature, curves, and saturation.",
    graph: {
      nodes: [
        gr("tpl-load", "loadImage", 40, 120, { sourceName: "Fluxel Demo Artwork", dataUrl: yb }),
        gr("tpl-grade", "colorGrade", 360, 120, { exposure: -0.2, gamma: 1.08, temperature: 18, tint: 6 }),
        gr("tpl-curves", "curves", 680, 120, { curve: "0,52,132,205,255" }),
        gr("tpl-sat", "hueSaturation", 1000, 120, { hue: 0, saturation: -8 }),
        gr("tpl-preview", "preview", 1320, 120, { label: "Cinematic result" }),
      ],
      edges: [
        zi("tpl-e1", "tpl-load", "tpl-grade"),
        zi("tpl-e2", "tpl-grade", "tpl-curves"),
        zi("tpl-e3", "tpl-curves", "tpl-sat"),
        zi("tpl-e4", "tpl-sat", "tpl-preview"),
      ],
    },
  },
  {
    id: "masked-composite",
    name: "Masked Composite",
    description: "Blend two sources through a softened luminance mask.",
    graph: {
      nodes: [
        gr("tpl-base", "loadImage", 40, 60, { sourceName: "Base artwork", dataUrl: yb }),
        gr("tpl-layer", "loadImage", 40, 360, { sourceName: "Blend artwork", dataUrl: yb }),
        gr("tpl-gray", "grayscale", 350, 420, { mix: 100 }),
        gr("tpl-mask", "applyMask", 680, 180, { feather: 5, invert: !1 }),
        gr("tpl-preview", "preview", 1010, 180, { label: "Masked result" }),
      ],
      edges: [
        zi("tpl-e1", "tpl-base", "tpl-mask"),
        { ...zi("tpl-e2", "tpl-layer", "tpl-gray"), sourceHandle: "image", targetHandle: "image" },
        { ...zi("tpl-e3", "tpl-gray", "tpl-mask"), sourceHandle: "image", targetHandle: "mask" },
        zi("tpl-e4", "tpl-mask", "tpl-preview"),
      ],
    },
  },
  {
    id: "batch-resizer",
    name: "Batch Resizer",
    description: "Process an input folder sequentially and save every result directly to an output folder.",
    graph: {
      nodes: [
        gr("tpl-batch", "batchInput", 40, 120, { inputDirectory: "" }),
        gr("tpl-resize", "resize", 360, 120, { mode: "pixels", pixelDimension: "width", width: 1280 }),
        gr("tpl-sharpen", "sharpen", 680, 120, { amount: 18 }),
        gr("tpl-preview", "preview", 1000, 120, { label: "Latest batch result" }),
        gr("tpl-save", "exportImage", 1300, 120, { directory: "", fileName: "{name}-processed", format: "png", quality: 92 }),
      ],
      edges: [
        zi("tpl-e1", "tpl-batch", "tpl-resize"),
        zi("tpl-e2", "tpl-resize", "tpl-sharpen"),
        zi("tpl-e3", "tpl-sharpen", "tpl-preview"),
        zi("tpl-e4", "tpl-preview", "tpl-save"),
      ],
    },
  },
];
const ss = (e) => structuredClone(e);
function loadFluxelPreferences() {
  const e = {
    theme: "dark",
    accent: "#5e0094",
    reducedMotion:
      typeof window < "u" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    autoRun: !1,
  };
  if (typeof window > "u") return e;
  try {
    const t = JSON.parse(
      window.localStorage.getItem("fluxel.preferences.v1") || "null",
    );
    if (!t || typeof t != "object") return e;
    return {
      theme: t.theme === "light" ? "light" : "dark",
      accent: /^#[0-9a-f]{6}$/i.test(String(t.accent))
        ? String(t.accent)
        : e.accent,
      reducedMotion:
        typeof t.reducedMotion == "boolean"
          ? t.reducedMotion
          : e.reducedMotion,
      autoRun: t.autoRun === !0,
    };
  } catch {
    return e;
  }
}
const savedFluxelPreferences = loadFluxelPreferences();
function xb() {
  if (typeof window > "u") return Md();
  try {
    const e = window.localStorage.getItem("fluxel.startup.v1");
    if (!e) return Md();
    const t = JSON.parse(e);
    if (t.version !== 1 || !Array.isArray(t.graphs) || t.graphs.length === 0)
      throw new Error("Invalid project");
    return (
      t.graphs.forEach((r) =>
        r.nodes.forEach((o) => {
          const s = nx(o.data.nodeType), u = o.data.params ?? {};
          (o.data.nodeType === "resize" && !("mode" in u) && (s.mode = "pixels"),
            (o.data.params = { ...s, ...u }), (o.data.executionState = "idle"), delete o.data.error);
        }),
      ),
      t
    );
  } catch {
    return Md();
  }
}
function Nt(e, t, r) {
  return {
    ...e,
    graphs: e.graphs.map((o) => (o.id === t ? r(o) : o)),
    updatedAt: new Date().toISOString(),
  };
}
function wn(e) {
  const t = e.activeGraph();
  return {
    historyPast: [...e.historyPast.slice(-39), ss(t)],
    historyFuture: [],
  };
}
function downstreamNodeIds(e, t) {
  const r = new Map();
  for (const o of e) {
    const s = r.get(o.source) ?? [];
    (s.push(o.target), r.set(o.source, s));
  }
  const o = new Set(),
    s = [t];
  while (s.length) {
    const u = s.pop();
    if (!u || o.has(u)) continue;
    o.add(u);
    for (const l of r.get(u) ?? []) s.push(l);
  }
  return o;
}
let downstreamSpacingAnimation = null;
function finishDownstreamSpacingAnimation() {
  downstreamSpacingAnimation?.finish();
}
function animateDownstreamSpacing(e, t, r, o) {
  finishDownstreamSpacingAnimation();
  let s = 0,
    u = !1;
  const l = (p) => {
      fe.setState((f) => ({
        project: {
          ...f.project,
          graphs: f.project.graphs.map((h) =>
            h.id !== e
              ? h
              : {
                  ...h,
                  nodes: h.nodes.map((g) => {
                    const y = t.get(g.id);
                    return y
                      ? { ...g, position: { ...g.position, x: y.x + o * p } }
                      : g;
                  }),
                },
          ),
        },
      }));
    },
    d = () => {
      if (u) return;
      ((u = !0), window.cancelAnimationFrame(s), l(1), (downstreamSpacingAnimation = null));
    },
    p = (f) => {
      if (u) return;
      const h = Math.min(1, (f - r) / 430),
        g = 1 - Math.pow(1 - h, 4);
      (l(g), h < 1 ? (s = window.requestAnimationFrame(p)) : d());
    };
  ((downstreamSpacingAnimation = { finish: d }),
    (s = window.requestAnimationFrame((f) => p(f))));
}
const fe = mb((e, t) => ({
  project: xb(),
  historyPast: [],
  historyFuture: [],
  selectedNodeId: null,
  runState: "idle",
  logs: [],
  inspectorOpen: !1,
  sidebarOpen: !0,
  logOpen: !1,
  theme: savedFluxelPreferences.theme,
  accent: savedFluxelPreferences.accent,
  reducedMotion: savedFluxelPreferences.reducedMotion,
  autoRun: savedFluxelPreferences.autoRun,
  invalidPulse: 0,
  toasts: [],
  preview: { beforeUrl: null, afterUrl: null, width: 0, height: 0 },
  batch: { state: "idle", current: 0, total: 0, results: [], error: null },
  activeGraph: () => {
    const { project: r } = t();
    return r.graphs.find((o) => o.id === r.activeGraphId) ?? r.graphs[0];
  },
  replaceProject: (r, o = "Project loaded") => {
    (e({
      project: r,
      historyPast: [],
      historyFuture: [],
      selectedNodeId: null,
      inspectorOpen: !1,
      preview: { beforeUrl: null, afterUrl: null, width: 0, height: 0 },
      batch: { state: "idle", current: 0, total: 0, results: [], error: null },
    }),
      t().addToast({ title: o, tone: "success" }));
  },
  switchGraph: (r) =>
    e((o) => ({
      project: { ...o.project, activeGraphId: r },
      selectedNodeId: null,
      inspectorOpen: !1,
      preview: { beforeUrl: null, afterUrl: null, width: 0, height: 0 },
      batch: { state: "idle", current: 0, total: 0, results: [], error: null },
    })),
  addGraph: () => {
    const r = `graph-${crypto.randomUUID()}`,
      o = {
        id: r,
        name: `Graph ${t().project.graphs.length + 1}`,
        nodes: [],
        edges: [],
      };
    e((s) => ({
      project: {
        ...s.project,
        activeGraphId: r,
        graphs: [...s.project.graphs, o],
      },
      selectedNodeId: null,
      inspectorOpen: !1,
      preview: { beforeUrl: null, afterUrl: null, width: 0, height: 0 },
      batch: { state: "idle", current: 0, total: 0, results: [], error: null },
    }));
  },
  deleteGraph: (r) => {
    const o = t(),
      s = o.project.graphs.findIndex((d) => d.id === r);
    if (s < 0) return;
    if (o.project.graphs.length <= 1) {
      o.addToast({
        title: "One graph is required",
        message: "Create another graph before deleting this one.",
        tone: "neutral",
      });
      return;
    }
    const u = o.project.graphs.filter((d) => d.id !== r),
      l =
        o.project.activeGraphId === r
          ? u[Math.max(0, Math.min(s - 1, u.length - 1))].id
          : o.project.activeGraphId;
    (e({
      project: {
        ...o.project,
        graphs: u,
        activeGraphId: l,
        updatedAt: new Date().toISOString(),
      },
      historyPast: [],
      historyFuture: [],
      selectedNodeId: null,
      inspectorOpen: !1,
      preview: { beforeUrl: null, afterUrl: null, width: 0, height: 0 },
      batch: { state: "idle", current: 0, total: 0, results: [], error: null },
    }),
      o.addToast({
        title: "Graph deleted",
        message: "The graph was removed from this session.",
        tone: "success",
      }));
  },
  renameGraph: (r, o) =>
    e((s) => ({ project: Nt(s.project, r, (u) => ({ ...u, name: o })) })),
  applyGraphTemplate: (r) => {
    const o = t(),
      s = o.project.activeGraphId,
      u = new Map(r.graph.nodes.map((d) => [d.id, `${d.data.nodeType}-${crypto.randomUUID()}`])),
      l = r.graph.nodes.map((d) => ({
        ...structuredClone(d),
        id: u.get(d.id),
        parentId: d.parentId ? u.get(d.parentId) : void 0,
        selected: !1,
        hidden: !1,
        data: { ...structuredClone(d.data), executionState: "idle", error: void 0 },
      })),
      d = r.graph.edges.map((p) => ({
        ...structuredClone(p),
        id: `edge-${crypto.randomUUID()}`,
        source: u.get(p.source),
        target: u.get(p.target),
      }));
    (e((p) => ({
      ...wn(o),
      project: Nt(p.project, s, (f) => ({ ...f, name: r.name, nodes: l, edges: d, previewNodeId: null })),
      selectedNodeId: null,
      inspectorOpen: !1,
      preview: { beforeUrl: null, afterUrl: null, width: 0, height: 0 },
      batch: { state: "idle", current: 0, total: 0, results: [], error: null },
    })),
      o.addToast({ title: `${r.name} loaded`, message: "The template replaced the active graph. Undo is available.", tone: "success" }));
  },
  saveGraphTemplate: (r) => {
    const o = t(),
      s = structuredClone(o.activeGraph());
    s.nodes.forEach((d) => {
      ((d.selected = !1), (d.hidden = !1), (d.data.executionState = "idle"), delete d.data.error, delete d.data.duration);
      d.data.nodeType === "loadImage" &&
        (d.data.params = { ...d.data.params, sourceName: "Choose image", dataUrl: "" });
      d.data.nodeType === "batchInput" && (d.data.params = { ...d.data.params, files: [] });
    });
    const u = {
        id: `custom-${crypto.randomUUID()}`,
        name: r.trim() || s.name || "Custom workflow",
        description: `${s.nodes.length} nodes · saved locally`,
        graph: { nodes: s.nodes, edges: s.edges },
      },
      l = JSON.parse(window.localStorage.getItem("fluxel.graph-templates") || "[]");
    try {
      (window.localStorage.setItem("fluxel.graph-templates", JSON.stringify([u, ...l].slice(0, 20))),
        window.dispatchEvent(new CustomEvent("fluxel:templates-updated")),
        o.addToast({ title: "Template saved", message: `${u.name} is available on this device.`, tone: "success" }));
    } catch {
      o.addToast({ title: "Template could not be saved", message: "Browser storage is unavailable.", tone: "error" });
    }
  },
  deleteGraphTemplate: (r) => {
    const o = t(),
      s = JSON.parse(window.localStorage.getItem("fluxel.graph-templates") || "[]");
    (window.localStorage.setItem("fluxel.graph-templates", JSON.stringify(s.filter((u) => u.id !== r))),
      window.dispatchEvent(new CustomEvent("fluxel:templates-updated")),
      o.addToast({ title: "Template removed", tone: "neutral" }));
  },
  onNodesChange: (r) => {
    const o = t(),
      s = o.project.activeGraphId,
      l = r.some((d) => d.type === "remove") ? wn(o) : {};
    e((d) => ({
      ...l,
      project: Nt(d.project, s, (p) => ({ ...p, nodes: t1(r, p.nodes) })),
    }));
  },
  onEdgesChange: (r) => {
    const o = t(),
      s = o.project.activeGraphId,
      u = r.some((l) => l.type === "remove") ? wn(o) : {};
    e((l) => ({
      ...u,
      project: Nt(l.project, s, (d) => ({ ...d, edges: n1(r, d.edges) })),
    }));
  },
  addEdge: (r) => {
    const o = t(),
      s = o.project.activeGraphId;
    e((u) => ({
      ...wn(o),
      project: Nt(u.project, s, (l) => ({
        ...l,
        edges: [
          ...l.edges.filter(
            (d) => !(d.target === r.target && d.targetHandle === r.targetHandle),
          ),
          r,
        ],
      })),
    }));
  },
  addNode: (r, o) => {
    const s = Gn(r),
      u = `${r}-${crypto.randomUUID()}`,
      l = {
        id: u,
        type: "fluxel",
        position: o,
        data: {
          nodeType: r,
          label: s.label,
          category: s.category,
          params: nx(r),
          executionState: "idle",
        },
        selected: !0,
      },
      d = t(),
      p = d.project.activeGraphId;
    return (
      e((f) => ({
        ...wn(d),
        project: Nt(f.project, p, (h) => ({
          ...h,
          nodes: [...h.nodes.map((g) => ({ ...g, selected: !1 })), l],
        })),
        selectedNodeId: u,
        inspectorOpen: !0,
        preview:
          r === "preview"
            ? { beforeUrl: null, afterUrl: null, width: 0, height: 0 }
            : f.preview,
      })),
      u
    );
  },
  insertNodeOnEdge: (r, o, s) => {
    const u = t(),
      l = u.activeGraph(),
      d = l.edges.find((M) => M.id === s),
      p = Gn(r);
    if (!d) return null;
    const f = l.nodes.find((M) => M.id === d.source),
      h = l.nodes.find((M) => M.id === d.target),
      g = f && Gn(f.data.nodeType).outputs.find((M) => M.id === d.sourceHandle),
      y = h && Gn(h.data.nodeType).inputs.find((M) => M.id === d.targetHandle),
      S = p.inputs.find((M) => g && bb(g.type, M.type)),
      x = p.outputs.find((M) => y && bb(M.type, y.type));
    if (!f || !h || !g || !y || !S || !x) {
      (u.flashInvalid(`${p.label} cannot be inserted into this ${d.data?.portType ?? "value"} connection.`));
      return null;
    }
    const P = `${r}-${crypto.randomUUID()}`,
      downstream = downstreamNodeIds(l.edges, d.target),
      downstreamShift = Math.max(0, o.x + 400 - h.position.x),
      animateSpacing = downstreamShift > 0 && !u.reducedMotion && !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      spacingOrigins = new Map(l.nodes.filter((M) => downstream.has(M.id)).map((M) => [M.id, { ...M.position }])),
      C = {
        id: P,
        type: "fluxel",
        position: o,
        selected: !0,
        data: {
          nodeType: r,
          label: p.label,
          category: p.category,
          params: nx(r),
          executionState: "idle",
        },
      },
      T = u.project.activeGraphId;
    return (
      e((M) => ({
        ...wn(u),
        project: Nt(M.project, T, (I) => ({
          ...I,
          nodes: [
            ...I.nodes.map((b) => ({
              ...b,
              selected: !1,
              position:
                downstreamShift > 0 && !animateSpacing && downstream.has(b.id)
                  ? { ...b.position, x: b.position.x + downstreamShift }
                  : b.position,
            })),
            C,
          ],
          edges: [
            ...I.edges.filter((b) => b.id !== s),
            {
              id: `edge-${crypto.randomUUID()}`,
              source: d.source,
              sourceHandle: d.sourceHandle,
              target: P,
              targetHandle: S.id,
              type: "fluxel",
              data: { portType: g.type === "any" ? S.type : g.type },
            },
            {
              id: `edge-${crypto.randomUUID()}`,
              source: P,
              sourceHandle: x.id,
              target: d.target,
              targetHandle: d.targetHandle,
              type: "fluxel",
              data: { portType: x.type === "any" ? y.type : x.type },
            },
          ],
        })),
        selectedNodeId: P,
        inspectorOpen: !0,
      })),
      animateSpacing && animateDownstreamSpacing(T, spacingOrigins, performance.now(), downstreamShift),
      u.addToast({ title: `${p.label} inserted`, message: "The existing connection was preserved through the new node.", tone: "success" }),
      P
    );
  },
  insertExistingNodeOnEdge: (r, o) => {
    const s = t(),
      u = s.activeGraph(),
      l = u.nodes.find((q) => q.id === r),
      d = u.edges.find((q) => q.id === o);
    if (!l || !d) return !1;
    const p = Gn(l.data.nodeType);
    if (u.edges.some((q) => q.source === r || q.target === r)) {
      (s.flashInvalid("Only an unconnected node can be dropped into a connection."));
      return !1;
    }
    const f = u.nodes.find((q) => q.id === d.source),
      h = u.nodes.find((q) => q.id === d.target),
      g = f && Gn(f.data.nodeType).outputs.find((q) => q.id === d.sourceHandle),
      y = h && Gn(h.data.nodeType).inputs.find((q) => q.id === d.targetHandle),
      S = p.inputs.find((q) => g && bb(g.type, q.type)),
      x = p.outputs.find((q) => y && bb(q.type, y.type));
    if (!f || !h || !g || !y || !S || !x) {
      (s.flashInvalid(`${p.label} cannot be inserted into this ${d.data?.portType ?? "value"} connection.`));
      return !1;
    }
    const P = downstreamNodeIds(u.edges, d.target),
      C = Math.max(0, l.position.x + 400 - h.position.x),
      animateSpacing = C > 0 && !s.reducedMotion && !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      spacingOrigins = new Map(u.nodes.filter((q) => P.has(q.id)).map((q) => [q.id, { ...q.position }])),
      T = s.project.activeGraphId;
    return (
      e((q) => ({
        project: Nt(q.project, T, (V) => ({
          ...V,
          nodes: V.nodes.map((H) => ({
            ...H,
            selected: H.id === r,
            position:
              C > 0 && !animateSpacing && P.has(H.id)
                ? { ...H.position, x: H.position.x + C }
                : H.position,
          })),
          edges: [
            ...V.edges.filter((H) => H.id !== o),
            {
              id: `edge-${crypto.randomUUID()}`,
              source: d.source,
              sourceHandle: d.sourceHandle,
              target: r,
              targetHandle: S.id,
              type: "fluxel",
              data: { portType: g.type === "any" ? S.type : g.type },
            },
            {
              id: `edge-${crypto.randomUUID()}`,
              source: r,
              sourceHandle: x.id,
              target: d.target,
              targetHandle: d.targetHandle,
              type: "fluxel",
              data: { portType: x.type === "any" ? y.type : x.type },
            },
          ],
        })),
        selectedNodeId: r,
        inspectorOpen: !0,
      })),
      animateSpacing && animateDownstreamSpacing(T, spacingOrigins, performance.now(), C),
      s.addToast({
        title: `${p.label} inserted`,
        message: C > 0 ? "The downstream branch was moved aside for readability." : "The existing connection now runs through this node.",
        tone: "success",
      }),
      !0
    );
  },
  beginGraphEdit: () => (finishDownstreamSpacingAnimation(), e((r) => wn(r))),
  setSelectedNode: (r) => e({ selectedNodeId: r, inspectorOpen: !!r }),
  setNodeParam: (r, o, s, u = !0) => {
    const l = t(),
      d = l.project.activeGraphId;
    e((p) => ({
      ...(u ? wn(l) : {}),
      project: Nt(p.project, d, (f) => ({
        ...f,
        nodes: f.nodes.map((h) =>
          h.id === r
            ? {
                ...h,
                data: {
                  ...h.data,
                  params: { ...h.data.params, [o]: s },
                  executionState: "idle",
                  error: void 0,
                },
              }
            : h,
        ),
      })),
    }));
  },
  toggleNodeBypass: (r) => {
    const o = t(),
      s = o.project.activeGraphId;
    e((u) => ({
      ...wn(o),
      project: Nt(u.project, s, (l) => ({
        ...l,
        nodes: l.nodes.map((d) =>
          d.id === r
            ? {
                ...d,
                data: {
                  ...d.data,
                  bypassed: !d.data.bypassed,
                  executionState: "idle",
                  error: void 0,
                },
              }
            : d,
        ),
      })),
    }));
  },
  setNodeExecution: (r, o, s, u) => {
    const l = t().project.activeGraphId;
    e((d) => ({
      project: Nt(d.project, l, (p) => ({
        ...p,
        nodes: p.nodes.map((f) =>
          f.id === r
            ? {
                ...f,
                data: {
                  ...f.data,
                  executionState: o,
                  error: s,
                  duration: u ?? f.data.duration,
                  progress: o === "running" ? (f.data.progress ?? 0) : void 0,
                },
              }
            : f,
        ),
      })),
    }));
  },
  setNodeProgress: (r, o, progressLabel = "") => {
    const s = t().project.activeGraphId;
    e((u) => ({
      project: Nt(u.project, s, (l) => ({
        ...l,
        nodes: l.nodes.map((d) => d.id === r
          ? { ...d, data: { ...d.data, progress: Math.max(0, Math.min(1, Number(o) || 0)), progressLabel } }
          : d),
      })),
    }));
  },
  resetExecutionStates: () => {
    const r = t().project.activeGraphId;
    e((o) => ({
      project: Nt(o.project, r, (s) => ({
        ...s,
        nodes: s.nodes.map((u) => ({
          ...u,
          data: { ...u.data, executionState: "idle", error: void 0, progress: void 0 },
        })),
      })),
    }));
  },
  deleteSelected: () => {
    const r = t(),
      o = r.activeGraph(),
      s = new Set(
        o.nodes
          .filter((l) => l.selected || l.id === r.selectedNodeId)
          .map((l) => l.id),
      ),
      u = new Set(o.edges.filter((l) => l.selected).map((l) => l.id));
    let l = !0;
    for (; l; ) {
      l = !1;
      o.nodes.forEach((d) => {
        d.parentId && s.has(d.parentId) && !s.has(d.id) && (s.add(d.id), (l = !0));
      });
    }
    if (!s.size && !u.size) return;
    const d = r.project.activeGraphId;
    e((l) => ({
      ...wn(r),
      project: Nt(l.project, d, (p) => ({
        ...p,
        previewNodeId: s.has(p.previewNodeId) ? null : p.previewNodeId,
        nodes: p.nodes.filter((f) => !s.has(f.id)),
        edges: p.edges.filter(
          (f) => !u.has(f.id) && !s.has(f.source) && !s.has(f.target),
        ),
      })),
      selectedNodeId: null,
      inspectorOpen: !1,
    }));
  },
  duplicateSelected: () => {
    const r = t(),
      o = r.activeGraph(),
      s = o.nodes.filter((f) => f.selected || f.id === r.selectedNodeId);
    if (!s.length) return;
    const u = new Map(
        s.map((f) => [f.id, `${f.data.nodeType}-${crypto.randomUUID()}`]),
      ),
      l = s.map((f) => ({
        ...structuredClone(f),
        id: u.get(f.id),
        position: { x: f.position.x + 36, y: f.position.y + 36 },
        selected: !0,
        data: { ...structuredClone(f.data), executionState: "idle" },
      })),
      d = o.edges
        .filter((f) => u.has(f.source) && u.has(f.target))
        .map((f) => ({
          ...structuredClone(f),
          id: `edge-${crypto.randomUUID()}`,
          source: u.get(f.source),
          target: u.get(f.target),
        })),
      p = r.project.activeGraphId;
    e((f) => ({
      ...wn(r),
      project: Nt(f.project, p, (h) => ({
        ...h,
        nodes: [...h.nodes.map((g) => ({ ...g, selected: !1 })), ...l],
        edges: [...h.edges, ...d],
      })),
      selectedNodeId: l.length === 1 ? l[0].id : null,
      inspectorOpen: l.length === 1,
    }));
  },
  alignSelected: (r) => {
    const o = t(),
      u = o.activeGraph().nodes.filter((g) => g.selected);
    if (u.length < 2) return;
    const l = u.map((g) => g.position.x),
      d = u.map((g) => g.position.y),
      p =
        r === "left"
          ? Math.min(...l)
          : r === "center"
            ? l.reduce((g, y) => g + y, 0) / l.length
            : 0,
      f =
        r === "top"
          ? Math.min(...d)
          : r === "middle"
            ? d.reduce((g, y) => g + y, 0) / d.length
            : 0,
      h = o.project.activeGraphId;
    e((g) => ({
      ...wn(o),
      project: Nt(g.project, h, (y) => ({
        ...y,
        nodes: y.nodes.map((S) =>
          S.selected
            ? {
                ...S,
                position: {
                  x: r === "left" || r === "center" ? p : S.position.x,
                  y: r === "top" || r === "middle" ? f : S.position.y,
                },
              }
            : S,
        ),
      })),
    }));
  },
  distributeSelected: () => {
    const r = t(),
      s = r
        .activeGraph()
        .nodes.filter((h) => h.selected)
        .sort((h, g) => h.position.x - g.position.x);
    if (s.length < 3) return;
    const u = s[0].position.x,
      d = (s[s.length - 1].position.x - u) / (s.length - 1),
      p = new Map(s.map((h, g) => [h.id, u + g * d])),
      f = r.project.activeGraphId;
    e((h) => ({
      ...wn(r),
      project: Nt(h.project, f, (g) => ({
        ...g,
        nodes: g.nodes.map((y) =>
          p.has(y.id)
            ? { ...y, position: { ...y.position, x: p.get(y.id) } }
            : y,
        ),
      })),
    }));
  },
  groupSelected: () => {
    const r = t(),
      o = r.activeGraph(),
      s = o.nodes.filter((p) => p.selected && !p.parentId && p.data.nodeType !== "frame");
    if (s.length < 2) {
      r.addToast({ title: "Select multiple nodes", message: "Choose at least two ungrouped nodes to create a frame.", tone: "neutral" });
      return;
    }
    const u = Math.min(...s.map((p) => p.position.x)) - 28,
      l = Math.min(...s.map((p) => p.position.y)) - 58,
      d = Math.max(...s.map((p) => p.position.x + 268)) - u + 28,
      p = Math.max(...s.map((p) => p.position.y + 210)) - l + 28,
      f = `frame-${crypto.randomUUID()}`,
      h = {
        id: f,
        type: "fluxel",
        position: { x: u, y: l },
        style: { width: d, height: p },
        data: {
          nodeType: "frame",
          label: "Frame",
          category: "utility",
          params: nx("frame"),
          frameSize: { width: d, height: p },
          executionState: "idle",
        },
        selected: !0,
      },
      g = new Set(s.map((y) => y.id)),
      y = r.project.activeGraphId;
    (e((S) => ({
      ...wn(r),
      project: Nt(S.project, y, (x) => ({
        ...x,
        nodes: [
          h,
          ...x.nodes.map((P) =>
            g.has(P.id)
              ? {
                  ...P,
                  parentId: f,
                  extent: "parent",
                  position: { x: P.position.x - u, y: P.position.y - l },
                  selected: !1,
                }
              : { ...P, selected: !1 },
          ),
        ],
      })),
      selectedNodeId: f,
      inspectorOpen: !0,
    })),
      r.addToast({ title: "Frame created", message: `${s.length} nodes now move together.`, tone: "success" }));
  },
  collapseSelectedToMacro: () => {
    const r = t(),
      o = r.activeGraph(),
      s = o.nodes.filter((h) => h.selected && !h.parentId && !["frame", "note"].includes(h.data.nodeType)),
      u = new Set(s.map((h) => h.id));
    if (s.length < 2) {
      r.addToast({ title: "Select an image chain", message: "Choose at least two ungrouped processing nodes.", tone: "neutral" });
      return;
    }
    const l = o.edges.filter((h) => !u.has(h.source) && u.has(h.target)),
      d = o.edges.filter((h) => u.has(h.source) && !u.has(h.target));
    if (l.length !== 1 || !d.length || d.some((h) => h.source !== d[0].source || h.sourceHandle !== d[0].sourceHandle)) {
      r.addToast({ title: "Macro needs one image path", message: "The selection must have one incoming image cable and one shared outgoing image socket.", tone: "error" });
      return;
    }
    const p = o.nodes.find((h) => h.id === l[0].source),
      f = o.nodes.find((h) => h.id === d[0].target),
      h = p && Gn(p.data.nodeType).outputs.find((S) => S.id === l[0].sourceHandle),
      g = f && Gn(f.data.nodeType).inputs.find((S) => S.id === d[0].targetHandle);
    if (!h || !g || !bb(h.type, "image") || !bb(g.type, "image")) {
      r.addToast({ title: "Image macros only", message: "Macro boundaries currently require image ports.", tone: "error" });
      return;
    }
    const y = Math.min(...s.map((S) => S.position.x)),
      S = Math.min(...s.map((x) => x.position.y)),
      x = `macro-${crypto.randomUUID()}`,
      P = {
        id: x,
        type: "fluxel",
        position: { x: y, y: S },
        selected: !0,
        data: {
          nodeType: "macro",
          label: "Macro",
          category: "utility",
          params: { title: `${s.length}-node macro` },
          executionState: "idle",
          macro: {
            nodes: s.map((C) => ({ ...structuredClone(C), position: { x: C.position.x - y, y: C.position.y - S }, selected: !1 })),
            edges: o.edges.filter((C) => u.has(C.source) && u.has(C.target)).map((C) => structuredClone(C)),
            inputTarget: { nodeId: l[0].target, handleId: l[0].targetHandle },
            outputSource: { nodeId: d[0].source, handleId: d[0].sourceHandle },
          },
        },
      },
      C = o.edges
        .filter((T) => !u.has(T.source) && !u.has(T.target))
        .filter((T) => T.id !== l[0].id)
        .concat([
          { ...l[0], target: x, targetHandle: "image", data: { portType: "image" } },
          ...d.map((T) => ({ ...T, source: x, sourceHandle: "image", data: { portType: "image" } })),
        ]),
      T = r.project.activeGraphId;
    (e((N) => ({
      ...wn(r),
      project: Nt(N.project, T, (k) => ({
        ...k,
        nodes: [...k.nodes.filter((M) => !u.has(M.id)).map((M) => ({ ...M, selected: !1 })), P],
        edges: C,
      })),
      selectedNodeId: x,
      inspectorOpen: !0,
    })),
      r.addToast({ title: "Macro created", message: `${s.length} nodes now execute inside one reusable node.`, tone: "success" }));
  },
  expandMacro: (r) => {
    const o = t(),
      s = o.activeGraph(),
      u = s.nodes.find((T) => T.id === r && T.data.nodeType === "macro"),
      l = u?.data.macro;
    if (!u || !l) return;
    const d = new Map(l.nodes.map((T) => [T.id, `${T.data.nodeType}-${crypto.randomUUID()}`])),
      p = l.nodes.map((T) => ({
        ...structuredClone(T),
        id: d.get(T.id),
        position: { x: u.position.x + T.position.x, y: u.position.y + T.position.y },
        selected: !0,
        data: { ...structuredClone(T.data), executionState: "idle", error: void 0 },
      })),
      f = l.edges.map((T) => ({ ...structuredClone(T), id: `edge-${crypto.randomUUID()}`, source: d.get(T.source), target: d.get(T.target) })),
      h = s.edges.filter((T) => T.target === r),
      g = s.edges.filter((T) => T.source === r),
      y = h.map((T) => ({ ...T, target: d.get(l.inputTarget.nodeId), targetHandle: l.inputTarget.handleId })),
      S = g.map((T) => ({ ...T, source: d.get(l.outputSource.nodeId), sourceHandle: l.outputSource.handleId })),
      x = [...s.edges.filter((T) => T.source !== r && T.target !== r), ...f, ...y, ...S],
      P = o.project.activeGraphId;
    (e((T) => ({
      ...wn(o),
      project: Nt(T.project, P, (N) => ({ ...N, nodes: [...N.nodes.filter((k) => k.id !== r).map((k) => ({ ...k, selected: !1 })), ...p], edges: x })),
      selectedNodeId: null,
      inspectorOpen: !1,
    })),
      o.addToast({ title: "Macro expanded", message: `${p.length} internal nodes restored to the canvas.`, tone: "success" }));
  },
  toggleFrame: (r) => {
    const o = t(),
      s = o.activeGraph(),
      u = s.nodes.find((d) => d.id === r && d.data.nodeType === "frame");
    if (!u) return;
    const l = !u.data.params.collapsed,
      d = o.project.activeGraphId;
    e((p) => ({
      ...wn(o),
      project: Nt(p.project, d, (f) => ({
        ...f,
        nodes: f.nodes.map((h) =>
          h.id === r
            ? {
                ...h,
                style: {
                  ...h.style,
                  height: l ? 54 : h.data.frameSize?.height ?? h.style?.height ?? 260,
                },
                data: { ...h.data, params: { ...h.data.params, collapsed: l } },
              }
            : h.parentId === r
              ? { ...h, hidden: l }
              : h,
        ),
      })),
    }));
  },
  ungroupFrame: (r) => {
    const o = t(),
      s = o.activeGraph(),
      u = s.nodes.find((d) => d.id === r && d.data.nodeType === "frame");
    if (!u) return;
    const l = o.project.activeGraphId,
      d = s.nodes.filter((p) => p.parentId === r).length;
    (e((p) => ({
      ...wn(o),
      project: Nt(p.project, l, (f) => ({
        ...f,
        nodes: f.nodes
          .filter((h) => h.id !== r)
          .map((h) =>
            h.parentId === r
              ? {
                  ...h,
                  parentId: void 0,
                  extent: void 0,
                  hidden: !1,
                  position: { x: u.position.x + h.position.x, y: u.position.y + h.position.y },
                }
              : h,
          ),
      })),
      selectedNodeId: null,
      inspectorOpen: !1,
    })),
      o.addToast({ title: "Frame removed", message: `${d} nodes were ungrouped without changing connections.`, tone: "success" }));
  },
  autoLayoutGraph: () => {
    const r = t(),
      o = r.activeGraph(),
      A = o.nodes.filter((p) => !p.parentId && p.data.nodeType !== "frame"),
      s = new Map(A.map((p) => [p.id, 0])),
      u = new Map(A.map((p) => [p.id, []])),
      l = new Map(A.map((p) => [p.id, 0]));
    o.edges.forEach((p) => {
      s.has(p.source) &&
        s.has(p.target) &&
        (s.set(p.target, s.get(p.target) + 1), u.get(p.source).push(p.target));
    });
    const d = [...A.filter((p) => s.get(p.id) === 0).map((p) => p.id)];
    for (; d.length; ) {
      const p = d.shift();
      u.get(p).forEach((f) => {
        (l.set(f, Math.max(l.get(f), l.get(p) + 1)),
          s.set(f, s.get(f) - 1),
          s.get(f) === 0 && d.push(f));
      });
    }
    const p = new Map();
    A.forEach((f) => {
      const h = l.get(f.id) ?? 0,
        g = p.get(h) ?? [];
      (g.push(f), p.set(h, g));
    });
    const f = new Map();
    [...p.entries()].forEach(([h, g]) =>
      g
        .sort((y, S) => y.position.y - S.position.y)
        .forEach((y, S) => f.set(y.id, { x: 64 + h * 320, y: 80 + S * 244 })),
    );
    const h = r.project.activeGraphId;
    (e((g) => ({
      ...wn(r),
      project: Nt(g.project, h, (y) => ({
        ...y,
        nodes: y.nodes.map((S) => ({ ...S, position: f.get(S.id) ?? S.position })),
      })),
    })),
      t().addToast({
        title: "Graph arranged",
        message: "Nodes were organized by execution order.",
        tone: "success",
      }));
  },
  replaceNodeType: (r, o) => {
    const s = t(),
      u = s.activeGraph(),
      l = u.nodes.find((C) => C.id === r);
    if (!l || l.data.nodeType === o) return;
    const d = Gn(o),
      p = new Map(u.nodes.map((C) => [C.id, C])),
      f = [];
    let h = 0;
    u.edges.forEach((C) => {
      if (C.target === r) {
        const T = p.get(C.source),
          N = T && Gn(T.data.nodeType).outputs.find((k) => k.id === C.sourceHandle),
          k = d.inputs.find((M) => M.id === C.targetHandle && N && bb(N.type, M.type)) ??
            d.inputs.find((M) => N && bb(N.type, M.type));
        k ? f.push({ ...C, targetHandle: k.id, data: { portType: N.type === "any" ? k.type : N.type } }) : h++;
      } else if (C.source === r) {
        const T = p.get(C.target),
          N = T && Gn(T.data.nodeType).inputs.find((k) => k.id === C.targetHandle),
          k = d.outputs.find((M) => M.id === C.sourceHandle && N && bb(M.type, N.type)) ??
            d.outputs.find((M) => N && bb(M.type, N.type));
        k ? f.push({ ...C, sourceHandle: k.id, data: { portType: k.type === "any" ? N.type : k.type } }) : h++;
      } else f.push(C);
    });
    const g = s.project.activeGraphId;
    (e((C) => ({
      ...wn(s),
      project: Nt(C.project, g, (T) => ({
        ...T,
        nodes: T.nodes.map((N) =>
          N.id === r
            ? {
                ...N,
                data: {
                  ...N.data,
                  nodeType: o,
                  label: d.label,
                  category: d.category,
                  params: nx(o),
                  bypassed: !1,
                  executionState: "idle",
                  error: void 0,
                },
              }
            : N,
        ),
        edges: f,
      })),
    })),
      s.addToast({
        title: `Replaced with ${d.label}`,
        message: h ? `${h} incompatible connection${h === 1 ? " was" : "s were"} removed.` : "Compatible connections were preserved.",
        tone: h ? "neutral" : "success",
      }));
  },
  copySelected: () => {
    const r = t(),
      o = r.activeGraph(),
      s = o.nodes.filter((d) => d.selected || d.id === r.selectedNodeId);
    if (!s.length) return;
    const u = new Set(s.map((d) => d.id)),
      l = JSON.stringify({
        kind: "fluxel-nodes",
        nodes: s.map((d) => structuredClone(d)),
        edges: o.edges.filter((d) => u.has(d.source) && u.has(d.target)).map((d) => structuredClone(d)),
      });
    try {
      (window.localStorage.setItem("fluxel.node-clipboard", l),
        navigator.clipboard?.writeText(l).catch(() => {}),
        r.addToast({ title: "Nodes copied", message: `${s.length} node${s.length === 1 ? "" : "s"} ready to paste.`, tone: "success" }));
    } catch {
      r.addToast({ title: "Copy failed", message: "Browser storage is unavailable.", tone: "error" });
    }
  },
  pasteClipboard: () => {
    const r = t();
    try {
      const o = JSON.parse(window.localStorage.getItem("fluxel.node-clipboard") || "null");
      if (o?.kind !== "fluxel-nodes" || !Array.isArray(o.nodes) || !o.nodes.length) throw new Error();
      const s = new Map(o.nodes.map((p) => [p.id, `${p.data.nodeType}-${crypto.randomUUID()}`])),
        u = o.nodes.map((p) => ({
          ...structuredClone(p),
          id: s.get(p.id),
          position: { x: p.position.x + 52, y: p.position.y + 52 },
          selected: !0,
          data: { ...structuredClone(p.data), executionState: "idle", error: void 0 },
        })),
        l = (o.edges ?? []).filter((p) => s.has(p.source) && s.has(p.target)).map((p) => ({
          ...structuredClone(p),
          id: `edge-${crypto.randomUUID()}`,
          source: s.get(p.source),
          target: s.get(p.target),
        })),
        d = r.project.activeGraphId;
      (e((p) => ({
        ...wn(r),
        project: Nt(p.project, d, (f) => ({
          ...f,
          nodes: [...f.nodes.map((h) => ({ ...h, selected: !1 })), ...u],
          edges: [...f.edges, ...l],
        })),
        selectedNodeId: u.length === 1 ? u[0].id : null,
        inspectorOpen: u.length === 1,
      })),
        r.addToast({ title: "Nodes pasted", message: `${u.length} node${u.length === 1 ? "" : "s"} added to ${r.activeGraph().name}.`, tone: "success" }));
    } catch {
      r.addToast({ title: "Nothing to paste", message: "Copy Fluxel nodes first.", tone: "neutral" });
    }
  },
  undo: () => {
    const r = t(),
      o = r.historyPast.at(-1);
    if (!o) return;
    const s = ss(r.activeGraph());
    e({
      project: Nt(r.project, r.project.activeGraphId, () => ss(o)),
      historyPast: r.historyPast.slice(0, -1),
      historyFuture: [s, ...r.historyFuture].slice(0, 40),
      selectedNodeId: null,
      inspectorOpen: !1,
    });
  },
  redo: () => {
    const r = t(),
      o = r.historyFuture[0];
    if (!o) return;
    const s = ss(r.activeGraph());
    e({
      project: Nt(r.project, r.project.activeGraphId, () => ss(o)),
      historyPast: [...r.historyPast, s].slice(-40),
      historyFuture: r.historyFuture.slice(1),
      selectedNodeId: null,
      inspectorOpen: !1,
    });
  },
  setRunState: (r) => e({ runState: r }),
  addLog: (r) =>
    e((o) => ({
      logs: [
        ...o.logs,
        {
          ...r,
          id: crypto.randomUUID(),
          time: new Date().toLocaleTimeString([], {
            hour12: !1,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        },
      ].slice(-300),
    })),
  clearLogs: () => e({ logs: [] }),
  setPreview: (r) => e({ preview: r }),
  setBatch: (r) => e((o) => ({ batch: { ...o.batch, ...r } })),
  setPreviewTarget: (r) => {
    const o = t(),
      s = o.project.activeGraphId;
    (e((u) => ({
      ...wn(o),
      project: Nt(u.project, s, (l) => ({ ...l, previewNodeId: r })),
      preview: { beforeUrl: null, afterUrl: null, width: 0, height: 0 },
    })),
      o.addToast({
        title: r ? "Preview pinned" : "Preview unpinned",
        message: r ? "Run the graph to inspect this node's output." : "The Preview node controls the output again.",
        tone: "success",
      }));
  },
  closePreview: () =>
    e({ preview: { beforeUrl: null, afterUrl: null, width: 0, height: 0 } }),
  toggleInspector: (r) => e((o) => ({ inspectorOpen: r ?? !o.inspectorOpen })),
  toggleSidebar: () => e((r) => ({ sidebarOpen: !r.sidebarOpen })),
  toggleLog: (r) => e((o) => ({ logOpen: r ?? !o.logOpen })),
  setTheme: (r) => e({ theme: r }),
  setAccent: (r) => e({ accent: r }),
  setReducedMotion: (r) => e({ reducedMotion: r }),
  setAutoRun: (r) => e({ autoRun: r }),
  savePreferences: () => {
    const r = t();
    try {
      (window.localStorage.setItem(
        "fluxel.preferences.v1",
        JSON.stringify({
          theme: r.theme,
          accent: r.accent,
          reducedMotion: r.reducedMotion,
          autoRun: r.autoRun,
        }),
      ),
        r.addToast({
          title: "Preferences saved",
          message: "Appearance and execution preferences will be restored next time.",
          tone: "success",
        }));
    } catch {
      r.addToast({
        title: "Could not save preferences",
        message: "Browser storage is unavailable.",
        tone: "error",
      });
    }
  },
  saveStartupFile: () => {
    const r = t();
    try {
      (window.localStorage.setItem("fluxel.startup.v1", JSON.stringify(r.project)),
        r.addToast({
          title: "Startup file saved",
          message: "This project will open the next time Fluxel starts.",
          tone: "success",
        }));
    } catch {
      r.addToast({
        title: "Could not save startup file",
        message: "The project may be too large for browser storage. Download its JSON instead.",
        tone: "error",
      });
    }
  },
  clearStartupFile: () => {
    const r = t();
    (window.localStorage.removeItem("fluxel.startup.v1"),
      r.addToast({
        title: "Startup file cleared",
        message: "Fluxel will open the built-in demo next time.",
        tone: "neutral",
      }));
  },
  restoreFactorySettings: () => {
    const r = t(),
      o =
        typeof window < "u" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    [
      "fluxel.preferences.v1",
      "fluxel.startup.v1",
      "fluxel.project.v1",
      "fluxel.theme",
      "fluxel.accent",
      "fluxel.motion",
      "fluxel.auto-run",
    ].forEach((s) => window.localStorage.removeItem(s));
    (e({
      project: Md(),
      historyPast: [],
      historyFuture: [],
      selectedNodeId: null,
      inspectorOpen: !1,
      preview: { beforeUrl: null, afterUrl: null, width: 0, height: 0 },
      batch: { state: "idle", current: 0, total: 0, results: [], error: null },
      theme: "dark",
      accent: "#5e0094",
      reducedMotion: o,
      autoRun: !1,
    }),
      r.addToast({
        title: "Factory settings restored",
        message: "Default preferences and the built-in demo are active again.",
        tone: "success",
      }));
  },
  flashInvalid: (r = "Ports are incompatible") => {
    (e((o) => ({ invalidPulse: o.invalidPulse + 1 })),
      t().addToast({
        title: "Connection rejected",
        message: r,
        tone: "error",
      }));
  },
  addToast: (r) => {
    const o = crypto.randomUUID();
    (e((s) => ({ toasts: [...s.toasts, { ...r, id: o }].slice(-4) })),
      window.setTimeout(() => t().removeToast(o), 3200));
  },
  removeToast: (r) =>
    e((o) => ({ toasts: o.toasts.filter((s) => s.id !== r) })),
}));
let Bn = null,
  wb = 0;
const Xr = new Map();
function Sb() {
  return (
    Bn ||
    ((Bn = new Worker(
      new URL("./fluxel-worker-v5.js", import.meta.url),
      { type: "module" },
    )),
    (Bn.onmessage = (e) => {
      const t = Xr.get(e.data.id);
      if (t) {
        if ((Xr.delete(e.data.id), !e.data.ok || !e.data.output)) {
          t.reject(new Error(e.data.error || "Worker failed"));
          return;
        }
        t.resolve({
          kind: "image",
          width: e.data.output.width,
          height: e.data.output.height,
          data: new Uint8ClampedArray(e.data.output.buffer),
          hash: e.data.output.hash,
          analysis: e.data.output.analysis,
        });
      }
    }),
    (Bn.onerror = (e) => {
      const t = new Error(e.message || "Image worker crashed");
      (Xr.forEach((r) => r.reject(t)), Xr.clear());
    }),
    Bn)
  );
}
function kb(e, t, r) {
  const o = `task-${(wb += 1)}`,
    s = t.data.slice().buffer;
  return new Promise((u, l) => {
    (Xr.set(o, { resolve: u, reject: l }),
      Sb().postMessage(
        {
          id: o,
          op: e,
          input: { width: t.width, height: t.height, buffer: s },
          params: r,
        },
        [s],
      ));
  });
}
function kD(e, t, r) {
  const o = `task-${(wb += 1)}`,
    s = {},
    u = [];
  Object.entries(t).forEach(([d, p]) => {
    const f = p.data.slice().buffer;
    ((s[d] = { width: p.width, height: p.height, buffer: f }), u.push(f));
  });
  return new Promise((l, d) => {
    (Xr.set(o, { resolve: l, reject: d }),
      Sb().postMessage({ id: o, op: e, inputs: s, params: r }, u));
  });
}
function Eb() {
  (Bn && Bn.terminate(), (Bn = null));
  const e = new DOMException("Pipeline stopped", "AbortError");
  (Xr.forEach((t) => t.reject(e)), Xr.clear());
}
function Cb(e, t, r) {
  let o = 2166136261;
  const s = Math.max(4, Math.floor(e.length / 4096));
  for (let u = 0; u < e.length; u += s)
    ((o ^= e[u]), (o = Math.imul(o, 16777619)));
  return `${t}x${r}-${(o >>> 0).toString(36)}`;
}
async function Pb(e) {
  if (!e) throw new Error("Choose an image in the inspector first.");
  const t = new Image();
  ((t.decoding = "async"), (t.src = e), await t.decode());
  const r = document.createElement("canvas");
  ((r.width = t.naturalWidth), (r.height = t.naturalHeight));
  const o = r.getContext("2d", { willReadFrequently: !0 });
  if (!o) throw new Error("Canvas is not available in this browser.");
  o.drawImage(t, 0, 0);
  const s = o.getImageData(0, 0, r.width, r.height);
  return {
    kind: "image",
    width: r.width,
    height: r.height,
    data: s.data,
    hash: Cb(s.data, r.width, r.height),
  };
}
function Cy(e, t = "png", r = 0.92) {
  const o = document.createElement("canvas");
  ((o.width = e.width), (o.height = e.height));
  const s = o.getContext("2d");
  if (!s) throw new Error("Canvas is not available in this browser.");
  return (
    s.putImageData(
      new ImageData(new Uint8ClampedArray(e.data), e.width, e.height),
      0,
      0,
    ),
    o.toDataURL(`image/${t}`, r)
  );
}
function clampByte(e) {
  return Math.max(0, Math.min(255, Math.round(e)));
}
function resizeImagePixels(e, t, r) {
  const o = document.createElement("canvas"),
    s = document.createElement("canvas");
  ((o.width = e.width), (o.height = e.height), (s.width = t), (s.height = r));
  const u = o.getContext("2d"), l = s.getContext("2d", { willReadFrequently: !0 });
  if (!u || !l) throw new Error("Canvas is unavailable for AI post-processing.");
  (u.putImageData(new ImageData(new Uint8ClampedArray(e.data), e.width, e.height), 0, 0),
    (l.imageSmoothingEnabled = !0), (l.imageSmoothingQuality = "high"),
    l.drawImage(o, 0, 0, t, r));
  return l.getImageData(0, 0, t, r).data;
}
let activeAIUpscaleJobId = null;
async function runAIUpscale(e, t, r = () => {}) {
  const desktop = window.fluxelDesktop,
    scale = [2, 3, 4].includes(Number(t.scale)) ? Number(t.scale) : 3,
    width = e.width * scale,
    height = e.height * scale;
  if (!desktop?.runAIUpscale)
    throw new Error("Real-ESRGAN is available in the Fluxel desktop app on Windows.");
  if (width * height > 5e7)
    throw new Error("Real-ESRGAN would exceed 50 megapixels. Resize the input smaller first.");
  const jobId = `upscale-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
  activeAIUpscaleJobId = jobId;
  const stopProgress = desktop.onAIUpscaleProgress?.((update) => {
    if (update.jobId === jobId) r(Number(update.progress) || 0);
  });
  r(0);
  try {
    const result = await desktop.runAIUpscale({
      jobId,
      dataUrl: Cy(e),
      scale,
      model: ["general", "anime", "animeFast"].includes(t.model) ? t.model : "general",
      tileSize: [0, 64, 128, 256, 512].includes(Number(t.tileSize)) ? Number(t.tileSize) : 0,
    });
    if (cs) throw new DOMException("Pipeline stopped", "AbortError");
    const processed = await Pb(String(result?.dataUrl || ""));
    if (processed.width !== width || processed.height !== height)
      throw new Error("Real-ESRGAN returned an unexpected output size.");
    const baseline = resizeImagePixels(e, width, height),
      output = new Uint8ClampedArray(processed.data),
      strength = Math.max(0, Math.min(1, Number(t.strength ?? 100) / 100));
    for (let index = 0; index < output.length; index += 4) {
      output[index] = clampByte(baseline[index] + (output[index] - baseline[index]) * strength);
      output[index + 1] = clampByte(baseline[index + 1] + (output[index + 1] - baseline[index + 1]) * strength);
      output[index + 2] = clampByte(baseline[index + 2] + (output[index + 2] - baseline[index + 2]) * strength);
      output[index + 3] = t.preserveAlpha === !1 ? 255 : baseline[index + 3];
    }
    r(1);
    return { kind: "image", width, height, data: output, hash: Cb(output, width, height) };
  } catch (error) {
    if (cs || /cancelled/i.test(String(error?.message || error)))
      throw new DOMException("Pipeline stopped", "AbortError");
    throw error;
  } finally {
    stopProgress?.();
    if (activeAIUpscaleJobId === jobId) activeAIUpscaleJobId = null;
  }
}
let activeAIDepthJobId = null;
async function runAIDepth(e, t, r = () => {}) {
  const desktop = window.fluxelDesktop;
  if (!desktop?.runAIDepth)
    throw new Error("AI Depth / Height Maps are available in the Fluxel desktop app.");
  if (e.width * e.height > 5e7)
    throw new Error("Depth generation is limited to 50 megapixels. Resize the input smaller first.");
  const jobId = `depth-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
  activeAIDepthJobId = jobId;
  const stopProgress = desktop.onAIDepthProgress?.((update) => {
    if (update.jobId === jobId) r(Number(update.progress) || 0);
  });
  r(0);
  try {
    const result = await desktop.runAIDepth({
      jobId,
      dataUrl: Cy(e),
      quality: ["fast", "balanced", "fine", "ultra"].includes(t.quality) ? t.quality : "balanced",
      hardware: t.hardware === "cpu" ? "cpu" : "auto",
      depthPolarity: t.depthPolarity === "farWhite" ? "farWhite" : "nearWhite",
      heightPolarity: t.heightPolarity === "farHigh" ? "farHigh" : "nearHigh",
      heightContrast: Number(t.heightContrast ?? 115),
      heightGamma: Number(t.heightGamma ?? 1),
      heightSmoothing: Number(t.heightSmoothing ?? 1),
    });
    if (cs) throw new DOMException("Pipeline stopped", "AbortError");
    const [depth, height] = await Promise.all([
      Pb(String(result?.depthDataUrl || "")),
      Pb(String(result?.heightDataUrl || "")),
    ]);
    if (depth.width !== e.width || depth.height !== e.height || height.width !== e.width || height.height !== e.height)
      throw new Error("Depth Anything returned an unexpected output size.");
    r(1);
    return { depth, height };
  } catch (error) {
    if (cs || /cancelled/i.test(String(error?.message || error)))
      throw new DOMException("Pipeline stopped", "AbortError");
    throw error;
  } finally {
    stopProgress?.();
    if (activeAIDepthJobId === jobId) activeAIDepthJobId = null;
  }
}
const AI_RESOLUTIONS = {
  square: [2048, 2048],
  landscape43: [2304, 1728],
  portrait34: [1728, 2304],
  wide169: [2560, 1440],
  tall916: [1440, 2560],
  landscape32: [2496, 1664],
  portrait23: [1664, 2496],
  ultrawide: [3104, 1312],
  ultratall: [1312, 3104],
  landscape54: [2304, 1792],
  portrait45: [1792, 2304],
};
function aiGenerationSize(params) {
  const preset = AI_RESOLUTIONS[String(params.resolution || "square")] || AI_RESOLUTIONS.square;
  return { width: preset[0], height: preset[1] };
}
let activeAIGenerationJobId = null;
async function runAIGenerationJob(kind, params, onProgress, referenceDataUrl = "") {
  const desktop = window.fluxelDesktop;
  const invoke = kind === "edit" ? desktop?.runAIEdit : desktop?.runAIGenerate;
  if (!invoke) throw new Error("AI image generation is available in the Fluxel desktop app on Windows.");
  const prompt = String(params.prompt || "").trim();
  if (!prompt) throw new Error(kind === "edit" ? "AI Edit requires an instruction." : "AI Generate requires a prompt.");
  const jobId = `${kind}-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
  activeAIGenerationJobId = jobId;
  const stopProgress = desktop.onAIGenerationProgress?.((update) => {
    if (update.jobId !== jobId) return;
    // A long install or checkpoint load reports its own label; without it a
    // multi-minute step is indistinguishable from a hang.
    const phaseLabel =
      update.label ||
      (update.phase === "sampling" || update.phase === "generate"
        ? "Generating"
        : update.phase === "encode"
          ? "Saving"
          : "");
    onProgress(Number(update.progress) || 0, phaseLabel);
  });
  onProgress(0, "Starting");
  const size = aiGenerationSize(params);
  try {
    const request = {
      jobId,
      prompt,
      negativePrompt: String(params.negativePrompt || ""),
      steps: 28,
      guidance: 0,
      seed: Number(params.seed ?? -1),
      hardware: params.hardware === "cpu" ? "cpu" : "auto",
    };
    if (kind === "edit") request.dataUrl = referenceDataUrl;
    else {
      request.width = size.width;
      request.height = size.height;
    }
    const result = await invoke(request);
    if (cs) throw new DOMException("Pipeline stopped", "AbortError");
    const image = await Pb(String(result?.dataUrl || ""));
    onProgress(1);
    return image;
  } catch (error) {
    if (cs || /cancelled/i.test(String(error?.message || error)))
      throw new DOMException("Pipeline stopped", "AbortError");
    throw error;
  } finally {
    stopProgress?.();
    if (activeAIGenerationJobId === jobId) activeAIGenerationJobId = null;
  }
}
async function runAIGenerate(params, onProgress = () => {}) {
  return runAIGenerationJob("generate", params, onProgress);
}
async function runAIEdit(image, params, onProgress = () => {}) {
  if (image.width * image.height > 16e6)
    throw new Error("AI Edit is limited to 16 megapixels. Resize the input smaller first.");
  return runAIGenerationJob("edit", params, onProgress, Cy(image));
}
async function saveExportNode(e, t, r = {}) {
  const o = window.fluxelDesktop, s = String(e.data.params.directory || "");
  if (!s || !o?.saveImage) return null;
  const u = String(e.data.params.format || "png"),
    l = String(e.data.params.fileName || "fluxel-output"),
    d = String(r.sourceName || "").replace(/\.[^.]+$/, ""),
    p = l.includes("{name}") ? l.replaceAll("{name}", d || "fluxel-output") : r.batch && d ? `${d}-${l}` : l,
    f = Cy(t, u, Number(e.data.params.quality ?? 92) / 100);
  return o.saveImage({ directory: s, fileName: p, format: u, dataUrl: f, avoidOverwrite: r.avoidOverwrite === !0 });
}
const Py = new Map();
let cs = !1,
  Ui = !1,
  Cn = null;
function Tb(e) {
  let t = 5381;
  for (let r = 0; r < e.length; r += Math.max(1, Math.floor(e.length / 1e4)))
    t = ((t << 5) + t) ^ e.charCodeAt(r);
  return (t >>> 0).toString(36);
}
function Mb(e) {
  return e && typeof e == "object" && e.kind === "image"
    ? e.hash
    : JSON.stringify(e);
}
function Nb(e, t) {
  const r = Object.entries(e.data.params)
      .sort(([s], [u]) => s.localeCompare(u))
      .map(
        ([s, u]) =>
          `${s}:${typeof u == "string" && u.length > 200 ? Tb(u) : String(u)}`,
      )
      .join("|"),
    o = Object.entries(t)
      .sort(([s], [u]) => s.localeCompare(u))
      .map(([s, u]) => `${s}:${Mb(u)}`)
      .join("|"),
    s = e.data.macro ? Tb(JSON.stringify(e.data.macro)) : "";
  return `${e.data.nodeType}/${e.data.bypassed ? "bypass" : "active"}/${s}/${r}/${o}`;
}
function bb(e, t) {
  return e === t || e === "any" || t === "any";
}
function _b(e, t, r) {
  if (t === r) return !0;
  const o = new Map();
  (e.nodes.forEach((l) => o.set(l.id, [])),
    e.edges.forEach((l) => o.get(l.source)?.push(l.target)),
    o.get(t)?.push(r));
  const s = [r],
    u = new Set();
  for (; s.length; ) {
    const l = s.pop();
    if (l === t) return !0;
    u.has(l) || (u.add(l), s.push(...(o.get(l) ?? [])));
  }
  return !1;
}
function jb(e) {
  const t = new Map(e.nodes.map((l) => [l.id, 0])),
    r = new Map(e.nodes.map((l) => [l.id, []]));
  e.edges.forEach((l) => {
    !t.has(l.source) ||
      !t.has(l.target) ||
      (r.get(l.source).push(l.target), t.set(l.target, t.get(l.target) + 1));
  });
  const o = e.nodes.filter((l) => t.get(l.id) === 0).map((l) => l.id),
    s = new Map(e.nodes.map((l) => [l.id, l])),
    u = [];
  for (; o.length; ) {
    const l = o.shift();
    (u.push(s.get(l)),
      r.get(l).forEach((d) => {
        (t.set(d, t.get(d) - 1), t.get(d) === 0 && o.push(d));
      }));
  }
  if (u.length !== e.nodes.length)
    throw new Error("Cycle detected. Fluxel graphs must remain acyclic.");
  return u;
}
function Ty(e, t) {
  if (!e || typeof e != "object" || e.kind !== "image")
    throw new Error(`${t} needs an image input.`);
  return e;
}
function Ab(e) {
  return Object.values(e)[0] ?? null;
}
async function wD(e, t) {
  const r = e.data.macro;
  if (!r?.nodes?.length || !r.inputTarget || !r.outputSource)
    throw new Error("This macro has no executable graph.");
  const o = { nodes: r.nodes, edges: r.edges ?? [] },
    s = jb(o),
    u = new Map();
  for (const l of s) {
    const d = Db(l, o.edges, u);
    l.id === r.inputTarget.nodeId &&
      (d[r.inputTarget.handleId || "image"] = Ty(t.image, e.data.params.title || "Macro"));
    Rb(l, d);
    const p = Nb(l, d);
    let f = Py.get(p);
    (f || ((f = await Ib(l, d)), Py.set(p, f)), u.set(l.id, f));
  }
  const l = u.get(r.outputSource.nodeId),
    d = l?.[r.outputSource.handleId] ?? Ab(l ?? {});
  return { image: Ty(d, e.data.params.title || "Macro") };
}
async function Ib(e, t) {
  const r = e.data.nodeType,
    o = e.data.params;
  if (e.data.bypassed) {
    const s = Gn(r),
      u = Ab(t);
    if (!s.outputs.length) return {};
    if (u == null) throw new Error(`${s.label} cannot be bypassed without an input.`);
    return Object.fromEntries(s.outputs.map((l) => [l.id, t[l.id] ?? u]));
  }
  if (r === "macro") return wD(e, t);
  if (r === "loadImage") return { image: await Pb(String(o.dataUrl || "")) };
  if (r === "batchInput")
    return {
      image: await Pb(String(o.activeDataUrl || "")),
    };
  if (r === "aiUpscale") {
    const s = Ty(t.image, e.data.label);
    return { image: await runAIUpscale(s, o, (u) => fe.getState().setNodeProgress(e.id, u)) };
  }
  if (r === "aiDepthMap") {
    const s = Ty(t.image, e.data.label);
    return runAIDepth(s, o, (u) => fe.getState().setNodeProgress(e.id, u));
  }
  if (r === "paintMask") {
    const image = Ty(t.image, e.data.label), maskUrl = String(o.maskDataUrl || "");
    if (!maskUrl) throw new Error("Paint Mask has no painted area. Open the mask editor first.");
    const mask = await Pb(maskUrl);
    if (mask.width !== image.width || mask.height !== image.height) throw new Error("The painted mask no longer matches the connected image. Reopen and save the mask.");
    return { image, mask };
  }
  if (r === "aiGenerate") {
    return { image: await runAIGenerate(o, (u, label) => fe.getState().setNodeProgress(e.id, u, label)) };
  }
  if (r === "aiEdit") {
    const image = Ty(t.image, "AI Edit image");
    return { image: await runAIEdit(image, o, (u, label) => fe.getState().setNodeProgress(e.id, u, label)) };
  }
  if (["solidColor", "gradientImage", "patternImage", "shapeImage", "textImage"].includes(r))
    return { image: await kD(r, {}, o) };
  if (
    [
      "resize",
      "brightnessContrast",
      "blur",
      "grayscale",
      "crop",
      "rotateFlip",
      "hueSaturation",
      "sharpen",
      "edgeDetection",
      "threshold",
      "levels",
      "curves",
      "colorGrade",
      "gaussianBlur",
      "motionBlur",
      "unsharpMask",
    ].includes(r)
  ) {
    const s = Ty(t.image, e.data.label);
    return { image: await kb(r, s, o) };
  }
  if (r === "blendImages")
    return {
      image: await kD(
        r,
        {
          base: Ty(t.base, "Blend Images base"),
          blend: Ty(t.blend, "Blend Images layer"),
        },
        o,
      ),
    };
  if (r === "applyMask")
    return {
      image: await kD(
        r,
        {
          image: Ty(t.image, "Apply Mask image"),
          mask: Ty(t.mask, "Apply Mask mask"),
        },
        o,
      ),
    };
  if (r === "preview" || r === "exportImage")
    return { image: Ty(t.image, e.data.label) };
  if (r === "reroute") return { value: Ab(t) };
  if (r === "math") {
    const s = Number(t.a ?? o.a),
      u = Number(t.b ?? o.b),
      l = String(o.operation);
    return {
      value:
        l === "subtract"
          ? s - u
          : l === "multiply"
            ? s * u
            : l === "divide"
              ? u === 0
                ? 0
                : s / u
              : s + u,
    };
  }
  return r === "conditional"
    ? {
        value: !!(t.condition ?? o.condition)
          ? (t.truthy ?? o.truthy)
          : (t.falsy ?? o.falsy),
      }
    : {};
}
function Db(e, t, r) {
  const o = {};
  return (
    t
      .filter((s) => s.target === e.id)
      .forEach((s) => {
        const u = r.get(s.source),
          l = s.sourceHandle || Object.keys(u ?? {})[0];
        u && l in u && (o[s.targetHandle || "value"] = u[l]);
      }),
    o
  );
}
function Rb(e, t) {
  const r = Gn(e.data.nodeType),
    o = r.inputs.find((s) => !s.optional && !(s.id in t));
  if (o)
    throw new Error(
      `${r.label} is missing its ${o.label.toLowerCase()} input.`,
    );
}
async function Lb() {
  for (; fe.getState().runState === "paused" && !cs; )
    await new Promise((e) => window.setTimeout(e, 50));
}
async function oh(e = {}) {
  const t = fe.getState();
  if (t.runState !== "idle") return;
  const r = !!t.preview.afterUrl;
  (Cn !== null && (window.clearTimeout(Cn), (Cn = null)),
    (cs = !1),
    t.clearLogs(),
    t.resetExecutionStates(),
    t.setRunState("running"));
  const o = structuredClone(t.activeGraph());
  let s;
  try {
    s = jb(o);
  } catch (f) {
    const h = f instanceof Error ? f.message : "Graph validation failed.";
    (t.addLog({ level: "error", message: h }),
      t.addToast({ title: "Pipeline blocked", message: h, tone: "error" }),
      t.setRunState("idle"));
    return;
  }
  const u = s.filter((f) => Gn(f.data.nodeType).executable !== !1);
  (u.forEach((f) => t.setNodeExecution(f.id, "queued")),
    t.addLog({
      level: "info",
      message: `Validated DAG · ${u.length} nodes queued`,
    }));
  const l = new Map(), sourceName = String(o.nodes.find((f) => f.data.nodeType === "loadImage")?.data.params.sourceName || "");
  let d = null,
    p = null;
  try {
    for (const f of u) {
      if (cs) throw new DOMException("Pipeline stopped", "AbortError");
      if ((await Lb(), cs))
        throw new DOMException("Pipeline stopped", "AbortError");
      const h = Db(f, o.edges, l);
      Rb(f, h);
      const g = Nb(f, h),
        y = performance.now();
      t.setNodeExecution(f.id, "running");
      let S = Py.get(g);
      const x = !!S;
      (S || ((S = await Ib(f, h)), Py.set(g, S)), l.set(f.id, S));
      const P = Math.round(performance.now() - y);
      (t.setNodeExecution(f.id, x ? "cached" : "success", void 0, P),
        t.addLog({
          nodeId: f.id,
          level: x ? "info" : "success",
          message: `${f.data.label} ${x ? "restored from cache" : "completed"}`,
          duration: P,
        }));
      const C = S.image;
      if (f.data.nodeType === "exportImage" && C?.kind === "image") {
        const E = await saveExportNode(f, C, { sourceName });
        E && t.addLog({ nodeId: f.id, level: "success", message: `Saved ${E.filePath}` });
      }
      (["loadImage", "batchInput", "solidColor", "gradientImage", "patternImage", "shapeImage", "textImage", "aiGenerate"].includes(f.data.nodeType) &&
        C &&
        typeof C == "object" &&
        C.kind === "image" &&
        (d = C),
        (f.id === o.previewNodeId ||
          (!o.previewNodeId &&
            (f.data.nodeType === "preview" || f.data.nodeType === "exportImage"))) &&
          C &&
          typeof C == "object" &&
          C.kind === "image" &&
          (p = C));
    }
    if (d && p) {
      (p.analysis || (p = await kb("analyze", p, {})),
      t.setPreview({
        beforeUrl: Cy(d),
        afterUrl: Cy(p),
        width: p.width,
        height: p.height,
        analysis: p.analysis,
      }));
    }
    (
      t.setRunState("idle"),
      t.addLog({
        level: "success",
        message: `Pipeline complete · ${u.length} nodes processed`,
      }),
      (e.source !== "live" || !r) &&
        (t.addToast({
          title: "Pipeline complete",
          message: `${u.length} nodes processed successfully`,
          tone: "success",
        }),
        window.dispatchEvent(new CustomEvent("fluxel:pipeline-success"))),
      Ui && ((Ui = !1), uf(80)));
  } catch (f) {
    const h = f instanceof DOMException && f.name === "AbortError";
    if (h)
      (t.addLog({ level: "warning", message: "Pipeline stopped by user" }),
        t.resetExecutionStates());
    else {
      const g = f instanceof Error ? f.message : "Pipeline failed.",
        y = fe
          .getState()
          .activeGraph()
          .nodes.find((S) => S.data.executionState === "running");
      (y && t.setNodeExecution(y.id, "error", g),
        t.addLog({ nodeId: y?.id, level: "error", message: g }),
        t.addToast({ title: "Pipeline error", message: g, tone: "error" }));
    }
    (t.setRunState("idle"), !h && Ui && ((Ui = !1), uf(120)));
  }
}
async function hD() {
  const e = fe.getState(),
    desktop = window.fluxelDesktop;
  if (e.runState !== "idle") return;
  const t = structuredClone(e.activeGraph()),
    r = t.nodes.find((node) => node.data.nodeType === "batchInput");
  if (!r) return;
  if (!desktop?.prepareBatchInput || !desktop?.readBatchImage || !desktop?.saveImage) {
    e.addToast({ title: "Desktop batch required", message: "Folder batch processing is available in the Fluxel desktop app.", tone: "error" });
    return;
  }
  const requestedInput = String(r.data.params.inputDirectory || "");
  if (!requestedInput) {
    e.setNodeExecution(r.id, "error", "Choose an input folder.");
    e.addToast({ title: "Input folder required", message: "Choose the source folder in the Batch Input node.", tone: "error" });
    return;
  }
  const saveNodes = t.nodes.filter((node) => node.data.nodeType === "exportImage" && !node.data.bypassed),
    missingSaveDirectories = saveNodes.filter((node) => !String(node.data.params.directory || "").trim());
  if (!saveNodes.length) {
    e.addToast({ title: "Save node required", message: "Add a Save / Export Image node before running a batch.", tone: "error" });
    return;
  }
  if (missingSaveDirectories.length) {
    missingSaveDirectories.forEach((node) => e.setNodeExecution(node.id, "error", "Choose an export directory for batch processing."));
    e.addToast({ title: "Save directory required", message: "Choose an export directory in every active Save / Export Image node.", tone: "error" });
    return;
  }
  let prepared;
  try {
    prepared = await desktop.prepareBatchInput({ inputDirectory: requestedInput });
  } catch (error) {
    e.addToast({ title: "Batch input is not ready", message: error instanceof Error ? error.message : String(error), tone: "error" });
    return;
  }
  const o = Array.isArray(prepared?.files) ? prepared.files : [];
  if (!o.length) {
    e.addToast({ title: "No supported images found", message: "The input folder contains no PNG, JPEG, WebP, GIF, or BMP images.", tone: "error" });
    return;
  }
  let s;
  try {
    s = jb(t).filter((y) => Gn(y.data.nodeType).executable !== !1);
  } catch (y) {
    const S = y instanceof Error ? y.message : "Graph validation failed.";
    (e.addToast({ title: "Batch blocked", message: S, tone: "error" }), e.addLog({ level: "error", message: S }));
    return;
  }
  const saveDirectories = [...new Set(saveNodes.map((node) => String(node.data.params.directory)))];
  ((cs = !1), Py.clear(), e.clearLogs(), e.resetExecutionStates(), e.setRunState("running"), e.setBatch({ state: "running", current: 0, total: o.length, results: [], error: null, outputDirectory: saveDirectories.length === 1 ? saveDirectories[0] : "" }));
  const u = [];
  try {
    for (let d = 0; d < o.length; d += 1) {
      if (cs) throw new DOMException("Pipeline stopped", "AbortError");
      await Lb();
      Py.clear();
      const file = o[d],
        p = await desktop.readBatchImage({ inputDirectory: prepared.inputDirectory, filePath: file.filePath }),
        f = new Map();
      let h = null,
        g = null,
        batchTarget = null,
        savedForImage = [];
      for (const y of s) {
        if (cs) throw new DOMException("Pipeline stopped", "AbortError");
        await Lb();
        const S = y.id === r.id
            ? { ...y, data: { ...y.data, params: { ...y.data.params, activeDataUrl: p.dataUrl } } }
            : ["aiGenerate", "aiEdit"].includes(y.data.nodeType) && y.data.params.incrementSeed && Number(y.data.params.seed) >= 0
              ? { ...y, data: { ...y.data, params: { ...y.data.params, seed: Number(y.data.params.seed) + d } } }
              : y,
          x = Db(S, t.edges, f);
        Rb(S, x);
        const C = performance.now();
        e.setNodeExecution(S.id, "running");
        const T = await Ib(S, x);
        f.set(S.id, T);
        const k = Math.round(performance.now() - C);
        e.setNodeExecution(S.id, "success", void 0, k);
        const M = T.image;
        M && typeof M === "object" && M.kind === "image" && (
          (S.data.nodeType === "batchInput" || S.data.nodeType === "loadImage") && !h && (h = M),
          (g = M),
          (S.data.nodeType === "exportImage" || S.id === t.previewNodeId || (!t.previewNodeId && S.data.nodeType === "preview")) && (batchTarget = M)
        );
        if (S.data.nodeType === "exportImage" && !S.data.bypassed && M?.kind === "image") {
          const saved = await saveExportNode(S, M, { sourceName: p.name, batch: !0, avoidOverwrite: !0 });
          if (!saved) throw new Error(`${S.data.label} has no export directory.`);
          const savedName = String(saved.filePath || "").split(/[\\/]/).pop() || String(S.data.params.fileName || "fluxel-output");
          savedForImage.push({ name: savedName, sourceName: p.name, filePath: saved.filePath, width: M.width, height: M.height });
          e.addLog({ nodeId: S.id, level: "success", message: `Batch ${d + 1}/${o.length} · saved ${saved.filePath}` });
        }
      }
      g = batchTarget ?? g;
      if (!g) throw new Error(`No image output was produced for ${p.name}.`);
      if (!savedForImage.length) throw new Error(`No Save / Export Image node saved ${p.name}.`);
      g.analysis || (g = await kb("analyze", g, {}));
      (u.push(...savedForImage),
        e.setPreview({ beforeUrl: Cy(h ?? g), afterUrl: Cy(g), width: g.width, height: g.height, analysis: g.analysis }),
        e.setBatch({ current: d + 1, results: [...u] }),
        e.addLog({ level: "success", message: `Batch ${d + 1}/${o.length} · ${savedForImage.length} output${savedForImage.length === 1 ? "" : "s"} saved` }));
    }
    (Py.clear(), e.setRunState("idle"),
      e.setBatch({ state: "success", current: o.length, results: u }),
      e.addToast({ title: "Batch complete", message: `${u.length} output${u.length === 1 ? "" : "s"} saved by the Save node${saveNodes.length === 1 ? "" : "s"}.`, tone: "success" }),
      window.dispatchEvent(new CustomEvent("fluxel:pipeline-success")));
  } catch (d) {
    Py.clear();
    const p = d instanceof DOMException && d.name === "AbortError",
      f = d instanceof Error ? d.message : "Batch processing failed.";
    (e.setRunState("idle"),
      e.setBatch({ state: p ? "idle" : "error", error: p ? null : f }),
      p
        ? e.addLog({ level: "warning", message: "Batch stopped by user" })
        : (e.addLog({ level: "error", message: f }), e.addToast({ title: "Batch failed", message: f, tone: "error" })));
  }
}
function mD(e) {
  return fe.getState().activeGraph().nodes.some((t) => t.data.nodeType === "batchInput") ? hD() : oh(e);
}
function uf(e = 380) {
  (Cn !== null && window.clearTimeout(Cn),
    (Cn = window.setTimeout(async () => {
      Cn = null;
      const { runState: t } = fe.getState();
      if (t === "idle") {
        if (fe.getState().activeGraph().nodes.some((r) => r.data.nodeType === "batchInput")) return;
        await oh({ source: "live" });
        return;
      }
      (t === "running" || t === "paused") && (Ui = !0);
    }, e)));
}
function Vb() {
  const e = fe.getState();
  (e.setRunState(e.runState === "paused" ? "running" : "paused"),
    e.addLog({
      level: "warning",
      message: e.runState === "paused" ? "Pipeline resumed" : "Pipeline paused",
    }));
}
function zb() {
  ((cs = !0),
    (Ui = !1),
    activeAIUpscaleJobId && window.fluxelDesktop?.cancelAIUpscale?.(activeAIUpscaleJobId),
    activeAIDepthJobId && window.fluxelDesktop?.cancelAIDepth?.(activeAIDepthJobId),
    activeAIGenerationJobId && window.fluxelDesktop?.cancelAIGeneration?.(activeAIGenerationJobId),
    Cn !== null && (window.clearTimeout(Cn), (Cn = null)),
    fe.getState().setRunState("stopping"),
    Eb());
}
let xD = null;
function clearEdgeInsertionTarget() {
  document.querySelectorAll(".edge-drop-zone.active").forEach((e) => e.classList.remove("active"));
}
function setEdgeInsertionTarget(e) {
  clearEdgeInsertionTarget();
  if (!e) return;
  document.querySelector(`.edge-drop-zone[data-edge-id="${e}"]`)?.classList.add("active");
}
function closestInsertableEdge(e, t) {
  if (t.edges.some((r) => r.source === e.id || r.target === e.id)) return null;
  const r = Gn(e.data.nodeType),
    o = document.querySelector(`.react-flow__node[data-id="${e.id}"]`)?.getBoundingClientRect();
  if (!o) return null;
  let s = null,
    u = 58;
  for (const l of t.edges) {
    const d = t.nodes.find((S) => S.id === l.source),
      p = t.nodes.find((S) => S.id === l.target),
      f = d && Gn(d.data.nodeType).outputs.find((S) => S.id === l.sourceHandle),
      h = p && Gn(p.data.nodeType).inputs.find((S) => S.id === l.targetHandle);
    if (!f || !h || !r.inputs.some((S) => bb(f.type, S.type)) || !r.outputs.some((S) => bb(S.type, h.type))) continue;
    const g = document.querySelector(`.edge-drop-zone[data-edge-id="${l.id}"]`),
      y = g?.getScreenCTM();
    if (!g || !y || typeof g.getTotalLength != "function") continue;
    const S = g.getTotalLength();
    for (let x = 0; x <= 28; x += 1) {
      const P = g.getPointAtLength((S * x) / 28),
        C = new DOMPoint(P.x, P.y).matrixTransform(y),
        T = Math.max(o.left - C.x, 0, C.x - o.right),
        q = Math.max(o.top - C.y, 0, C.y - o.bottom),
        V = Math.hypot(T, q);
      V < u && ((u = V), (s = l.id));
    }
  }
  return s;
}
function Ob({
  id: e,
  source: t,
  sourceX: r,
  sourceY: o,
  targetX: s,
  targetY: u,
  sourcePosition: l,
  targetPosition: d,
  markerEnd: p,
  data: f,
  selected: h,
}) {
  const g = fe(
      (x) =>
        x.activeGraph().nodes.find((P) => P.id === t)?.data.executionState ===
        "running",
    ),
    [y] = Yf({
      sourceX: r,
      sourceY: o,
      targetX: s,
      targetY: u,
      sourcePosition: l,
      targetPosition: d,
      curvature: 0.35,
    }),
    S = Hi[f?.portType ?? "any"];
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx("path", {
        d: y,
        fill: "none",
        stroke: "transparent",
        strokeWidth: 80,
        className: "edge-drop-zone",
        "data-edge-id": e,
        onDragEnter: (x) => {
          ((xD = e), x.currentTarget.classList.add("active"));
        },
        onDragLeave: (x) => {
          (x.currentTarget.classList.remove("active"), xD === e && (xD = null));
        },
        onDrop: (x) => x.currentTarget.classList.remove("active"),
      }),
      w.jsx(io, {
        id: `${e}-hit`,
        path: y,
        style: { stroke: "transparent", strokeWidth: 16 },
      }),
      w.jsx(io, {
        id: e,
        path: y,
        markerEnd: p,
        className: `fluxel-edge ${g ? "running" : ""} ${h ? "selected" : ""}`,
        style: { stroke: S },
      }),
    ],
  });
}
const sh = D.createContext({});
function ah(e) {
  const t = D.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Fb = typeof window < "u",
  lh = Fb ? D.useLayoutEffect : D.useEffect,
  du = D.createContext(null);
function uh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function $l(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
const Mn = (e, t, r) => (r > t ? t : r < e ? e : r);
let fu = () => {};
const wr = {},
  rx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  ix = (e) => typeof e == "object" && e !== null,
  ox = (e) => /^0[^.\s]+$/u.test(e);
function sx(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Zt = (e) => e,
  Ds = (...e) => e.reduce((t, r) => (o) => r(t(o))),
  Es = (e, t, r) => {
    const o = t - e;
    return o ? (r - e) / o : 1;
  };
class ch {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (uh(this.subscriptions, t), () => $l(this.subscriptions, t));
  }
  notify(t, r, o) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, r, o);
      else
        for (let u = 0; u < s; u++) {
          const l = this.subscriptions[u];
          l && l(t, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const zt = (e) => e * 1e3,
  Kt = (e) => e / 1e3,
  ax = (e, t) => (t ? e * (1e3 / t) : 0),
  lx = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  $b = 1e-7,
  Bb = 12;
function Hb(e, t, r, o, s) {
  let u,
    l,
    d = 0;
  do ((l = t + (r - t) / 2), (u = lx(l, o, s) - e), u > 0 ? (r = l) : (t = l));
  while (Math.abs(u) > $b && ++d < Bb);
  return l;
}
function Rs(e, t, r, o) {
  if (e === t && r === o) return Zt;
  const s = (u) => Hb(u, 0, 1, e, r);
  return (u) => (u === 0 || u === 1 ? u : lx(s(u), t, o));
}
const ux = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  cx = (e) => (t) => 1 - e(1 - t),
  dx = Rs(0.33, 1.53, 0.69, 0.99),
  dh = cx(dx),
  fx = ux(dh),
  hx = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
        ? 0.5 * dh(e)
        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  fh = (e) => 1 - Math.sin(Math.acos(e)),
  px = cx(fh),
  mx = ux(fh),
  Ub = Rs(0.42, 0, 1, 1),
  Wb = Rs(0, 0, 0.58, 1),
  gx = Rs(0.42, 0, 0.58, 1),
  Gb = (e) => Array.isArray(e) && typeof e[0] != "number",
  yx = (e) => Array.isArray(e) && typeof e[0] == "number",
  Xb = {
    linear: Zt,
    easeIn: Ub,
    easeInOut: gx,
    easeOut: Wb,
    circIn: fh,
    circInOut: mx,
    circOut: px,
    backIn: dh,
    backInOut: fx,
    backOut: dx,
    anticipate: hx,
  },
  Yb = (e) => typeof e == "string",
  My = (e) => {
    if (yx(e)) {
      fu(e.length === 4);
      const [t, r, o, s] = e;
      return Rs(t, r, o, s);
    } else if (Yb(e)) return Xb[e];
    return e;
  },
  dl = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Kb(e) {
  let t = new Set(),
    r = new Set(),
    o = !1,
    s = !1;
  const u = new WeakSet();
  let l = { delta: 0, timestamp: 0, isProcessing: !1 };
  function d(f) {
    (u.has(f) && (p.schedule(f), e()), f(l));
  }
  const p = {
    schedule: (f, h = !1, g = !1) => {
      const S = g && o ? t : r;
      return (h && u.add(f), S.add(f), f);
    },
    cancel: (f) => {
      (r.delete(f), u.delete(f));
    },
    process: (f) => {
      if (((l = f), o)) {
        s = !0;
        return;
      }
      o = !0;
      const h = t;
      ((t = r),
        (r = h),
        t.forEach(d),
        t.clear(),
        (o = !1),
        s && ((s = !1), p.process(f)));
    },
  };
  return p;
}
const Zb = 40;
function vx(e, t) {
  let r = !1,
    o = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (r = !0),
    l = dl.reduce((k, M) => ((k[M] = Kb(u)), k), {}),
    {
      setup: d,
      read: p,
      resolveKeyframes: f,
      preUpdate: h,
      update: g,
      preRender: y,
      render: S,
      postRender: x,
    } = l,
    P = () => {
      const k = wr.useManualTiming,
        M = k ? s.timestamp : performance.now();
      ((r = !1),
        k ||
          (s.delta = o ? 1e3 / 60 : Math.max(Math.min(M - s.timestamp, Zb), 1)),
        (s.timestamp = M),
        (s.isProcessing = !0),
        d.process(s),
        p.process(s),
        f.process(s),
        h.process(s),
        g.process(s),
        y.process(s),
        S.process(s),
        x.process(s),
        (s.isProcessing = !1),
        r && t && ((o = !1), e(P)));
    },
    C = () => {
      ((r = !0), (o = !0), s.isProcessing || e(P));
    };
  return {
    schedule: dl.reduce((k, M) => {
      const I = l[M];
      return (
        (k[M] = (b, R = !1, V = !1) => (r || C(), I.schedule(b, R, V))),
        k
      );
    }, {}),
    cancel: (k) => {
      for (let M = 0; M < dl.length; M++) l[dl[M]].cancel(k);
    },
    state: s,
    steps: l,
  };
}
const {
  schedule: Le,
  cancel: Sr,
  state: at,
  steps: Nd,
} = vx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Zt, !0);
let Sl;
function qb() {
  Sl = void 0;
}
const yt = {
    now: () => (
      Sl === void 0 &&
        yt.set(
          at.isProcessing || wr.useManualTiming
            ? at.timestamp
            : performance.now(),
        ),
      Sl
    ),
    set: (e) => {
      ((Sl = e), queueMicrotask(qb));
    },
  },
  xx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  wx = xx("--"),
  Qb = xx("var(--"),
  hh = (e) => (Qb(e) ? Jb.test(e.split("/*")[0].trim()) : !1),
  Jb =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ny(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const ao = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Cs = { ...ao, transform: (e) => Mn(0, 1, e) },
  fl = { ...ao, default: 1 },
  ds = (e) => Math.round(e * 1e5) / 1e5,
  ph = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function e_(e) {
  return e == null;
}
const t_ =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  mh = (e, t) => (r) =>
    !!(
      (typeof r == "string" && t_.test(r) && r.startsWith(e)) ||
      (t && !e_(r) && Object.prototype.hasOwnProperty.call(r, t))
    ),
  Sx = (e, t, r) => (o) => {
    if (typeof o != "string") return o;
    const [s, u, l, d] = o.match(ph);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(u),
      [r]: parseFloat(l),
      alpha: d !== void 0 ? parseFloat(d) : 1,
    };
  },
  n_ = (e) => Mn(0, 255, e),
  bd = { ...ao, transform: (e) => Math.round(n_(e)) },
  Yr = {
    test: mh("rgb", "red"),
    parse: Sx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: o = 1 }) =>
      "rgba(" +
      bd.transform(e) +
      ", " +
      bd.transform(t) +
      ", " +
      bd.transform(r) +
      ", " +
      ds(Cs.transform(o)) +
      ")",
  };
function r_(e) {
  let t = "",
    r = "",
    o = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (o = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (o = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (r += r),
        (o += o),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(o, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const cf = { test: mh("#"), parse: r_, transform: Yr.transform },
  Ls = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  $n = Ls("deg"),
  Tn = Ls("%"),
  me = Ls("px"),
  i_ = Ls("vh"),
  o_ = Ls("vw"),
  by = {
    ...Tn,
    parse: (e) => Tn.parse(e) / 100,
    transform: (e) => Tn.transform(e * 100),
  },
  Wi = {
    test: mh("hsl", "hue"),
    parse: Sx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Tn.transform(ds(t)) +
      ", " +
      Tn.transform(ds(r)) +
      ", " +
      ds(Cs.transform(o)) +
      ")",
  },
  Ze = {
    test: (e) => Yr.test(e) || cf.test(e) || Wi.test(e),
    parse: (e) =>
      Yr.test(e) ? Yr.parse(e) : Wi.test(e) ? Wi.parse(e) : cf.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Yr.transform(e)
          : Wi.transform(e),
    getAnimatableNone: (e) => {
      const t = Ze.parse(e);
      return ((t.alpha = 0), Ze.transform(t));
    },
  },
  s_ =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function a_(e) {
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (e.match(ph)?.length || 0) + (e.match(s_)?.length || 0) > 0
  );
}
const kx = "number",
  Ex = "color",
  l_ = "var",
  u_ = "var(",
  _y = "${}",
  c_ =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function oo(e) {
  const t = e.toString(),
    r = [],
    o = { color: [], number: [], var: [] },
    s = [];
  let u = 0;
  const d = t
    .replace(
      c_,
      (p) => (
        Ze.test(p)
          ? (o.color.push(u), s.push(Ex), r.push(Ze.parse(p)))
          : p.startsWith(u_)
            ? (o.var.push(u), s.push(l_), r.push(p))
            : (o.number.push(u), s.push(kx), r.push(parseFloat(p))),
        ++u,
        _y
      ),
    )
    .split(_y);
  return { values: r, split: d, indexes: o, types: s };
}
function d_(e) {
  return oo(e).values;
}
function Cx({ split: e, types: t }) {
  const r = e.length;
  return (o) => {
    let s = "";
    for (let u = 0; u < r; u++)
      if (((s += e[u]), o[u] !== void 0)) {
        const l = t[u];
        l === kx
          ? (s += ds(o[u]))
          : l === Ex
            ? (s += Ze.transform(o[u]))
            : (s += o[u]);
      }
    return s;
  };
}
function f_(e) {
  return Cx(oo(e));
}
const h_ = (e) =>
    typeof e == "number" ? 0 : Ze.test(e) ? Ze.getAnimatableNone(e) : e,
  p_ = (e, t) =>
    typeof e == "number" ? (t?.trim().endsWith("/") ? e : 0) : h_(e);
function m_(e) {
  const t = oo(e);
  return Cx(t)(t.values.map((o, s) => p_(o, t.split[s])));
}
const cn = {
  test: a_,
  parse: d_,
  createTransformer: f_,
  getAnimatableNone: m_,
};
function _d(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
        ? t
        : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e
  );
}
function g_({ hue: e, saturation: t, lightness: r, alpha: o }) {
  ((e /= 360), (t /= 100), (r /= 100));
  let s = 0,
    u = 0,
    l = 0;
  if (!t) s = u = l = r;
  else {
    const d = r < 0.5 ? r * (1 + t) : r + t - r * t,
      p = 2 * r - d;
    ((s = _d(p, d, e + 1 / 3)), (u = _d(p, d, e)), (l = _d(p, d, e - 1 / 3)));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(u * 255),
    blue: Math.round(l * 255),
    alpha: o,
  };
}
function Bl(e, t) {
  return (r) => (r > 0 ? t : e);
}
const Re = (e, t, r) => e + (t - e) * r,
  jd = (e, t, r) => {
    const o = e * e,
      s = r * (t * t - o) + o;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  y_ = [cf, Yr, Wi],
  v_ = (e) => y_.find((t) => t.test(e));
function jy(e) {
  const t = v_(e);
  if (!t) return !1;
  let r = t.parse(e);
  return (t === Wi && (r = g_(r)), r);
}
const Ay = (e, t) => {
    const r = jy(e),
      o = jy(t);
    if (!r || !o) return Bl(e, t);
    const s = { ...r };
    return (u) => (
      (s.red = jd(r.red, o.red, u)),
      (s.green = jd(r.green, o.green, u)),
      (s.blue = jd(r.blue, o.blue, u)),
      (s.alpha = Re(r.alpha, o.alpha, u)),
      Yr.transform(s)
    );
  },
  df = new Set(["none", "hidden"]);
function x_(e, t) {
  return df.has(e) ? (r) => (r <= 0 ? e : t) : (r) => (r >= 1 ? t : e);
}
function w_(e, t) {
  return (r) => Re(e, t, r);
}
function gh(e) {
  return typeof e == "number"
    ? w_
    : typeof e == "string"
      ? hh(e)
        ? Bl
        : Ze.test(e)
          ? Ay
          : E_
      : Array.isArray(e)
        ? Px
        : typeof e == "object"
          ? Ze.test(e)
            ? Ay
            : S_
          : Bl;
}
function Px(e, t) {
  const r = [...e],
    o = r.length,
    s = e.map((u, l) => gh(u)(u, t[l]));
  return (u) => {
    for (let l = 0; l < o; l++) r[l] = s[l](u);
    return r;
  };
}
function S_(e, t) {
  const r = { ...e, ...t },
    o = {};
  for (const s in r)
    e[s] !== void 0 && t[s] !== void 0 && (o[s] = gh(e[s])(e[s], t[s]));
  return (s) => {
    for (const u in o) r[u] = o[u](s);
    return r;
  };
}
function k_(e, t) {
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const u = t.types[s],
      l = e.indexes[u][o[u]],
      d = e.values[l] ?? 0;
    ((r[s] = d), o[u]++);
  }
  return r;
}
const E_ = (e, t) => {
  const r = cn.createTransformer(t),
    o = oo(e),
    s = oo(t);
  return o.indexes.var.length === s.indexes.var.length &&
    o.indexes.color.length === s.indexes.color.length &&
    o.indexes.number.length >= s.indexes.number.length
    ? (df.has(e) && !s.values.length) || (df.has(t) && !o.values.length)
      ? x_(e, t)
      : Ds(Px(k_(o, s), s.values), r)
    : Bl(e, t);
};
function Tx(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number"
    ? Re(e, t, r)
    : gh(e)(e, t);
}
const C_ = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: (r = !0) => Le.update(t, r),
      stop: () => Sr(t),
      now: () => (at.isProcessing ? at.timestamp : yt.now()),
    };
  },
  Mx = (e, t, r = 10) => {
    let o = "";
    const s = Math.max(Math.round(t / r), 2);
    for (let u = 0; u < s; u++)
      o += Math.round(e(u / (s - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  Hl = 2e4;
function yh(e) {
  let t = 0;
  const r = 50;
  let o = e.next(t);
  for (; !o.done && t < Hl; ) ((t += r), (o = e.next(t)));
  return t >= Hl ? 1 / 0 : t;
}
function P_(e, t = 100, r) {
  const o = r({ ...e, keyframes: [0, t] }),
    s = Math.min(yh(o), Hl);
  return {
    type: "keyframes",
    ease: (u) => o.next(s * u).value / t,
    duration: Kt(s),
  };
}
const Xe = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function ff(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const T_ = 12;
function M_(e, t, r) {
  let o = r;
  for (let s = 1; s < T_; s++) o = o - e(o) / t(o);
  return o;
}
const Ad = 0.001;
function N_({
  duration: e = Xe.duration,
  bounce: t = Xe.bounce,
  velocity: r = Xe.velocity,
  mass: o = Xe.mass,
}) {
  let s,
    u,
    l = 1 - t;
  ((l = Mn(Xe.minDamping, Xe.maxDamping, l)),
    (e = Mn(Xe.minDuration, Xe.maxDuration, Kt(e))),
    l < 1
      ? ((s = (f) => {
          const h = f * l,
            g = h * e,
            y = h - r,
            S = ff(f, l),
            x = Math.exp(-g);
          return Ad - (y / S) * x;
        }),
        (u = (f) => {
          const g = f * l * e,
            y = g * r + r,
            S = Math.pow(l, 2) * Math.pow(f, 2) * e,
            x = Math.exp(-g),
            P = ff(Math.pow(f, 2), l);
          return ((-s(f) + Ad > 0 ? -1 : 1) * ((y - S) * x)) / P;
        }))
      : ((s = (f) => {
          const h = Math.exp(-f * e),
            g = (f - r) * e + 1;
          return -Ad + h * g;
        }),
        (u = (f) => {
          const h = Math.exp(-f * e),
            g = (r - f) * (e * e);
          return h * g;
        })));
  const d = 5 / e,
    p = M_(s, u, d);
  if (((e = zt(e)), isNaN(p)))
    return { stiffness: Xe.stiffness, damping: Xe.damping, duration: e };
  {
    const f = Math.pow(p, 2) * o;
    return { stiffness: f, damping: l * 2 * Math.sqrt(o * f), duration: e };
  }
}
const b_ = ["duration", "bounce"],
  __ = ["stiffness", "damping", "mass"];
function Iy(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function j_(e) {
  let t = {
    velocity: Xe.velocity,
    stiffness: Xe.stiffness,
    damping: Xe.damping,
    mass: Xe.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Iy(e, __) && Iy(e, b_))
    if (((t.velocity = 0), e.visualDuration)) {
      const r = e.visualDuration,
        o = (2 * Math.PI) / (r * 1.2),
        s = o * o,
        u = 2 * Mn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: Xe.mass, stiffness: s, damping: u };
    } else {
      const r = N_({ ...e, velocity: 0 });
      ((t = { ...t, ...r, mass: Xe.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Ul(e = Xe.visualDuration, t = Xe.bounce) {
  const r =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: o, restDelta: s } = r;
  const u = r.keyframes[0],
    l = r.keyframes[r.keyframes.length - 1],
    d = { done: !1, value: u },
    {
      stiffness: p,
      damping: f,
      mass: h,
      duration: g,
      velocity: y,
      isResolvedFromDuration: S,
    } = j_({ ...r, velocity: -Kt(r.velocity || 0) }),
    x = y || 0,
    P = f / (2 * Math.sqrt(p * h)),
    C = l - u,
    T = Kt(Math.sqrt(p / h)),
    N = Math.abs(C) < 5;
  (o || (o = N ? Xe.restSpeed.granular : Xe.restSpeed.default),
    s || (s = N ? Xe.restDelta.granular : Xe.restDelta.default));
  let k, M, I, b, R, V;
  if (P < 1)
    ((I = ff(T, P)),
      (b = (x + P * T * C) / I),
      (k = (K) => {
        const Z = Math.exp(-P * T * K);
        return l - Z * (b * Math.sin(I * K) + C * Math.cos(I * K));
      }),
      (R = P * T * b + C * I),
      (V = P * T * C - b * I),
      (M = (K) =>
        Math.exp(-P * T * K) * (R * Math.sin(I * K) + V * Math.cos(I * K))));
  else if (P === 1) {
    k = (Z) => l - Math.exp(-T * Z) * (C + (x + T * C) * Z);
    const K = x + T * C;
    M = (Z) => Math.exp(-T * Z) * (T * K * Z - x);
  } else {
    const K = T * Math.sqrt(P * P - 1);
    k = (j) => {
      const H = Math.exp(-P * T * j),
        F = Math.min(K * j, 300);
      return (
        l - (H * ((x + P * T * C) * Math.sinh(F) + K * C * Math.cosh(F))) / K
      );
    };
    const Z = (x + P * T * C) / K,
      ee = P * T * Z - C * K,
      J = P * T * C - Z * K;
    M = (j) => {
      const H = Math.exp(-P * T * j),
        F = Math.min(K * j, 300);
      return H * (ee * Math.sinh(F) + J * Math.cosh(F));
    };
  }
  const U = {
    calculatedDuration: (S && g) || null,
    velocity: (K) => zt(M(K)),
    next: (K) => {
      if (!S && P < 1) {
        const ee = Math.exp(-P * T * K),
          J = Math.sin(I * K),
          j = Math.cos(I * K),
          H = l - ee * (b * J + C * j),
          F = zt(ee * (R * J + V * j));
        return (
          (d.done = Math.abs(F) <= o && Math.abs(l - H) <= s),
          (d.value = d.done ? l : H),
          d
        );
      }
      const Z = k(K);
      if (S) d.done = K >= g;
      else {
        const ee = zt(M(K));
        d.done = Math.abs(ee) <= o && Math.abs(l - Z) <= s;
      }
      return ((d.value = d.done ? l : Z), d);
    },
    toString: () => {
      const K = Math.min(yh(U), Hl),
        Z = Mx((ee) => U.next(K * ee).value, K, 30);
      return K + "ms " + Z;
    },
    toTransition: () => {},
  };
  return U;
}
Ul.applyToOptions = (e) => {
  const t = P_(e, 100, Ul);
  return (
    (e.ease = t.ease),
    (e.duration = zt(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
const A_ = 5;
function Nx(e, t, r) {
  const o = Math.max(t - A_, 0);
  return ax(r - e(o), t - o);
}
function hf({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: o = 325,
  bounceDamping: s = 10,
  bounceStiffness: u = 500,
  modifyTarget: l,
  min: d,
  max: p,
  restDelta: f = 0.5,
  restSpeed: h,
}) {
  const g = e[0],
    y = { done: !1, value: g },
    S = (V) => (d !== void 0 && V < d) || (p !== void 0 && V > p),
    x = (V) =>
      d === void 0
        ? p
        : p === void 0 || Math.abs(d - V) < Math.abs(p - V)
          ? d
          : p;
  let P = r * t;
  const C = g + P,
    T = l === void 0 ? C : l(C);
  T !== C && (P = T - g);
  const N = (V) => -P * Math.exp(-V / o),
    k = (V) => T + N(V),
    M = (V) => {
      const U = N(V),
        K = k(V);
      ((y.done = Math.abs(U) <= f), (y.value = y.done ? T : K));
    };
  let I, b;
  const R = (V) => {
    S(y.value) &&
      ((I = V),
      (b = Ul({
        keyframes: [y.value, x(y.value)],
        velocity: Nx(k, V, y.value),
        damping: s,
        stiffness: u,
        restDelta: f,
        restSpeed: h,
      })));
  };
  return (
    R(0),
    {
      calculatedDuration: null,
      next: (V) => {
        let U = !1;
        return (
          !b && I === void 0 && ((U = !0), M(V), R(V)),
          I !== void 0 && V >= I ? b.next(V - I) : (!U && M(V), y)
        );
      },
    }
  );
}
function I_(e, t, r) {
  const o = [],
    s = r || wr.mix || Tx,
    u = e.length - 1;
  for (let l = 0; l < u; l++) {
    let d = s(e[l], e[l + 1]);
    if (t) {
      const p = Array.isArray(t) ? t[l] || Zt : t;
      d = Ds(p, d);
    }
    o.push(d);
  }
  return o;
}
function D_(e, t, { clamp: r = !0, ease: o, mixer: s } = {}) {
  const u = e.length;
  if ((fu(u === t.length), u === 1)) return () => t[0];
  if (u === 2 && t[0] === t[1]) return () => t[1];
  const l = e[0] === e[1];
  e[0] > e[u - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const d = I_(t, o, s),
    p = d.length,
    f = (h) => {
      if (l && h < e[0]) return t[0];
      let g = 0;
      if (p > 1) for (; g < e.length - 2 && !(h < e[g + 1]); g++);
      const y = Es(e[g], e[g + 1], h);
      return d[g](y);
    };
  return r ? (h) => f(Mn(e[0], e[u - 1], h)) : f;
}
function R_(e, t) {
  const r = e[e.length - 1];
  for (let o = 1; o <= t; o++) {
    const s = Es(0, t, o);
    e.push(Re(r, 1, s));
  }
}
function L_(e) {
  const t = [0];
  return (R_(t, e.length - 1), t);
}
function V_(e, t) {
  return e.map((r) => r * t);
}
function z_(e, t) {
  return e.map(() => t || gx).splice(0, e.length - 1);
}
function fs({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: o = "easeInOut",
}) {
  const s = Gb(o) ? o.map(My) : My(o),
    u = { done: !1, value: t[0] },
    l = V_(r && r.length === t.length ? r : L_(t), e),
    d = D_(l, t, { ease: Array.isArray(s) ? s : z_(t, s) });
  return {
    calculatedDuration: e,
    next: (p) => ((u.value = d(p)), (u.done = p >= e), u),
  };
}
const O_ = (e) => e !== null;
function hu(e, { repeat: t, repeatType: r = "loop" }, o, s = 1) {
  const u = e.filter(O_),
    d = s < 0 || (t && r !== "loop" && t % 2 === 1) ? 0 : u.length - 1;
  return !d || o === void 0 ? u[d] : o;
}
const F_ = { decay: hf, inertia: hf, tween: fs, keyframes: fs, spring: Ul };
function bx(e) {
  typeof e.type == "string" && (e.type = F_[e.type]);
}
class vh {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, r) {
    return this.finished.then(t, r);
  }
}
const $_ = (e) => e / 100;
class Wl extends vh {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        const { motionValue: r } = this.options;
        (r && r.updatedAt !== yt.now() && this.tick(yt.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    bx(t);
    const {
      type: r = fs,
      repeat: o = 0,
      repeatDelay: s = 0,
      repeatType: u,
      velocity: l = 0,
    } = t;
    let { keyframes: d } = t;
    const p = r || fs;
    p !== fs &&
      typeof d[0] != "number" &&
      ((this.mixKeyframes = Ds($_, Tx(d[0], d[1]))), (d = [0, 100]));
    const f = p({ ...t, keyframes: d });
    (u === "mirror" &&
      (this.mirroredGenerator = p({
        ...t,
        keyframes: [...d].reverse(),
        velocity: -l,
      })),
      f.calculatedDuration === null && (f.calculatedDuration = yh(f)));
    const { calculatedDuration: h } = f;
    ((this.calculatedDuration = h),
      (this.resolvedDuration = h + s),
      (this.totalDuration = this.resolvedDuration * (o + 1) - s),
      (this.generator = f));
  }
  updateTime(t) {
    const r = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = r);
  }
  tick(t, r = !1) {
    const {
      generator: o,
      totalDuration: s,
      mixKeyframes: u,
      mirroredGenerator: l,
      resolvedDuration: d,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return o.next(0);
    const {
      delay: f = 0,
      keyframes: h,
      repeat: g,
      repeatType: y,
      repeatDelay: S,
      type: x,
      onUpdate: P,
      finalKeyframe: C,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - s / this.speed, this.startTime)),
      r ? (this.currentTime = t) : this.updateTime(t));
    const T = this.currentTime - f * (this.playbackSpeed >= 0 ? 1 : -1),
      N = this.playbackSpeed >= 0 ? T < 0 : T > s;
    ((this.currentTime = Math.max(T, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = s));
    let k = this.currentTime,
      M = o;
    if (g) {
      const V = Math.min(this.currentTime, s) / d;
      let U = Math.floor(V),
        K = V % 1;
      (!K && V >= 1 && (K = 1),
        K === 1 && U--,
        (U = Math.min(U, g + 1)),
        !!(U % 2) &&
          (y === "reverse"
            ? ((K = 1 - K), S && (K -= S / d))
            : y === "mirror" && (M = l)),
        (k = Mn(0, 1, K) * d));
    }
    let I;
    (N
      ? ((this.delayState.value = h[0]), (I = this.delayState))
      : (I = M.next(k)),
      u && !N && (I.value = u(I.value)));
    let { done: b } = I;
    !N &&
      p !== null &&
      (b =
        this.playbackSpeed >= 0
          ? this.currentTime >= s
          : this.currentTime <= 0);
    const R =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && b));
    return (
      R && x !== hf && (I.value = hu(h, this.options, C, this.speed)),
      P && P(I.value),
      R && this.finish(),
      I
    );
  }
  then(t, r) {
    return this.finished.then(t, r);
  }
  get duration() {
    return Kt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Kt(t);
  }
  get time() {
    return Kt(this.currentTime);
  }
  set time(t) {
    ((t = zt(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = t),
          this.tick(t)));
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    const r = this.generator.next(t).value;
    return Nx((o) => this.generator.next(o).value, t, r);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    (r && this.driver && this.updateTime(yt.now()),
      (this.playbackSpeed = t),
      r && this.driver && (this.time = Kt(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: t = C_, startTime: r } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))),
      this.options.onPlay?.());
    const o = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = o))
      : this.holdTime !== null
        ? (this.startTime = o - this.holdTime)
        : this.startTime || (this.startTime = r ?? o),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(yt.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      t.observe(this)
    );
  }
}
function B_(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Kr = (e) => (e * 180) / Math.PI,
  pf = (e) => {
    const t = Kr(Math.atan2(e[1], e[0]));
    return mf(t);
  },
  H_ = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: pf,
    rotateZ: pf,
    skewX: (e) => Kr(Math.atan(e[1])),
    skewY: (e) => Kr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  mf = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Dy = pf,
  Ry = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Ly = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  U_ = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ry,
    scaleY: Ly,
    scale: (e) => (Ry(e) + Ly(e)) / 2,
    rotateX: (e) => mf(Kr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => mf(Kr(Math.atan2(-e[2], e[0]))),
    rotateZ: Dy,
    rotate: Dy,
    skewX: (e) => Kr(Math.atan(e[4])),
    skewY: (e) => Kr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function gf(e) {
  return e.includes("scale") ? 1 : 0;
}
function yf(e, t) {
  if (!e || e === "none") return gf(t);
  const r = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, s;
  if (r) ((o = U_), (s = r));
  else {
    const d = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((o = H_), (s = d));
  }
  if (!s) return gf(t);
  const u = o[t],
    l = s[1].split(",").map(G_);
  return typeof u == "function" ? u(l) : l[u];
}
const W_ = (e, t) => {
  const { transform: r = "none" } = getComputedStyle(e);
  return yf(r, t);
};
function G_(e) {
  return parseFloat(e.trim());
}
const lo = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  uo = new Set([...lo, "pathRotation"]),
  Vy = (e) => e === ao || e === me,
  X_ = new Set(["x", "y", "z"]),
  Y_ = lo.filter((e) => !X_.has(e));
function K_(e) {
  const t = [];
  return (
    Y_.forEach((r) => {
      const o = e.getValue(r);
      o !== void 0 &&
        (t.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const xr = {
  width: (
    { x: e },
    { paddingLeft: t = "0", paddingRight: r = "0", boxSizing: o },
  ) => {
    const s = e.max - e.min;
    return o === "border-box" ? s : s - parseFloat(t) - parseFloat(r);
  },
  height: (
    { y: e },
    { paddingTop: t = "0", paddingBottom: r = "0", boxSizing: o },
  ) => {
    const s = e.max - e.min;
    return o === "border-box" ? s : s - parseFloat(t) - parseFloat(r);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => yf(t, "x"),
  y: (e, { transform: t }) => yf(t, "y"),
};
xr.translateX = xr.x;
xr.translateY = xr.y;
const Qr = new Set();
let vf = !1,
  xf = !1,
  wf = !1;
function _x() {
  if (xf) {
    const e = Array.from(Qr).filter((o) => o.needsMeasurement),
      t = new Set(e.map((o) => o.element)),
      r = new Map();
    (t.forEach((o) => {
      const s = K_(o);
      s.length && (r.set(o, s), o.render());
    }),
      e.forEach((o) => o.measureInitialState()),
      t.forEach((o) => {
        o.render();
        const s = r.get(o);
        s &&
          s.forEach(([u, l]) => {
            o.getValue(u)?.set(l);
          });
      }),
      e.forEach((o) => o.measureEndState()),
      e.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      }));
  }
  ((xf = !1), (vf = !1), Qr.forEach((e) => e.complete(wf)), Qr.clear());
}
function jx() {
  Qr.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (xf = !0));
  });
}
function Z_() {
  ((wf = !0), jx(), _x(), (wf = !1));
}
class xh {
  constructor(t, r, o, s, u, l = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = r),
      (this.name = o),
      (this.motionValue = s),
      (this.element = u),
      (this.isAsync = l));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Qr.add(this),
          vf || ((vf = !0), Le.read(jx), Le.resolveKeyframes(_x)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: r,
      element: o,
      motionValue: s,
    } = this;
    if (t[0] === null) {
      const u = s?.get(),
        l = t[t.length - 1];
      if (u !== void 0) t[0] = u;
      else if (o && r) {
        const d = o.readValue(r, l);
        d != null && (t[0] = d);
      }
      (t[0] === void 0 && (t[0] = l), s && u === void 0 && s.set(t[0]));
    }
    B_(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Qr.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Qr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const q_ = (e) => e.startsWith("--");
function Ax(e, t, r) {
  q_(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
}
const Q_ = {};
function Ix(e, t) {
  const r = sx(e);
  return () => Q_[t] ?? r();
}
const J_ = Ix(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Dx = Ix(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  as = ([e, t, r, o]) => `cubic-bezier(${e}, ${t}, ${r}, ${o})`,
  zy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: as([0, 0.65, 0.55, 1]),
    circOut: as([0.55, 0, 1, 0.45]),
    backIn: as([0.31, 0.01, 0.66, -0.59]),
    backOut: as([0.33, 1.53, 0.69, 0.99]),
  };
function Rx(e, t) {
  if (e)
    return typeof e == "function"
      ? Dx()
        ? Mx(e, t)
        : "ease-out"
      : yx(e)
        ? as(e)
        : Array.isArray(e)
          ? e.map((r) => Rx(r, t) || zy.easeOut)
          : zy[e];
}
function ej(
  e,
  t,
  r,
  {
    delay: o = 0,
    duration: s = 300,
    repeat: u = 0,
    repeatType: l = "loop",
    ease: d = "easeOut",
    times: p,
  } = {},
  f = void 0,
) {
  const h = { [t]: r };
  p && (h.offset = p);
  const g = Rx(d, s);
  Array.isArray(g) && (h.easing = g);
  const y = {
    delay: o,
    duration: s,
    easing: Array.isArray(g) ? "linear" : g,
    fill: "both",
    iterations: u + 1,
    direction: l === "reverse" ? "alternate" : "normal",
  };
  return (f && (y.pseudoElement = f), e.animate(h, y));
}
function Lx(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function tj({ type: e, ...t }) {
  return Lx(e) && Dx()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Vx extends vh {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: r,
      name: o,
      keyframes: s,
      pseudoElement: u,
      allowFlatten: l = !1,
      finalKeyframe: d,
      onComplete: p,
    } = t;
    ((this.isPseudoElement = !!u),
      (this.allowFlatten = l),
      (this.options = t),
      fu(typeof t.type != "string"));
    const f = tj(t);
    ((this.animation = ej(r, o, s, f, u)),
      f.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !u)) {
          const h = hu(s, this.options, d, this.speed);
          (this.updateMotionValue && this.updateMotionValue(h),
            Ax(r, o, h),
            this.animation.cancel());
        }
        (p?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const t = this.options?.element;
    !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Kt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Kt(t);
  }
  get time() {
    return Kt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const r = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = zt(t)),
      r && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, rangeStart: r, rangeEnd: o, observe: s }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      t && J_()
        ? ((this.animation.timeline = t),
          r && (this.animation.rangeStart = r),
          o && (this.animation.rangeEnd = o),
          Zt)
        : s(this)
    );
  }
}
const zx = { anticipate: hx, backInOut: fx, circInOut: mx };
function nj(e) {
  return e in zx;
}
function rj(e) {
  typeof e.ease == "string" && nj(e.ease) && (e.ease = zx[e.ease]);
}
const Id = 10;
class ij extends Vx {
  constructor(t) {
    (rj(t),
      bx(t),
      super(t),
      t.startTime !== void 0 &&
        t.autoplay !== !1 &&
        (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: r,
      onUpdate: o,
      onComplete: s,
      element: u,
      ...l
    } = this.options;
    if (!r) return;
    if (t !== void 0) {
      r.set(t);
      return;
    }
    const d = new Wl({ ...l, autoplay: !1 }),
      p = Math.max(Id, yt.now() - this.startTime),
      f = Mn(0, Id, p - Id),
      h = d.sample(p).value,
      { name: g } = this.options;
    (u && g && Ax(u, g, h),
      r.setWithVelocity(d.sample(Math.max(0, p - f)).value, h, f),
      d.stop());
  }
}
const Oy = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (cn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function oj(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function sj(e, t, r, o) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const u = e[e.length - 1],
    l = Oy(s, t),
    d = Oy(u, t);
  return !l || !d ? !1 : oj(e) || ((r === "spring" || Lx(r)) && o);
}
function Sf(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const Ox = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  aj = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function lj(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && aj.test(e[t])) return !0;
  return !1;
}
const uj = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  cj = sx(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function dj(e) {
  const {
      motionValue: t,
      name: r,
      repeatDelay: o,
      repeatType: s,
      damping: u,
      type: l,
      keyframes: d,
    } = e,
    p = t?.owner?.current;
  if (!(p instanceof HTMLElement) && !(p instanceof SVGElement)) return !1;
  const { onUpdate: f, transformTemplate: h } = t.owner.getProps();
  return (
    cj() &&
    r &&
    (Ox.has(r) || (uj.has(r) && lj(d))) &&
    (r !== "transform" || !h) &&
    !f &&
    !o &&
    s !== "mirror" &&
    u !== 0 &&
    l !== "inertia"
  );
}
const fj = 40;
class hj extends vh {
  constructor({
    autoplay: t = !0,
    delay: r = 0,
    type: o = "keyframes",
    repeat: s = 0,
    repeatDelay: u = 0,
    repeatType: l = "loop",
    keyframes: d,
    name: p,
    motionValue: f,
    element: h,
    ...g
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = yt.now()));
    const y = {
        autoplay: t,
        delay: r,
        type: o,
        repeat: s,
        repeatDelay: u,
        repeatType: l,
        name: p,
        motionValue: f,
        element: h,
        ...g,
      },
      S = h?.KeyframeResolver || xh;
    ((this.keyframeResolver = new S(
      d,
      (x, P, C) => this.onKeyframesResolved(x, P, y, !C),
      p,
      f,
      h,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(t, r, o, s) {
    this.keyframeResolver = void 0;
    const {
      name: u,
      type: l,
      velocity: d,
      delay: p,
      isHandoff: f,
      onUpdate: h,
    } = o;
    this.resolvedAt = yt.now();
    let g = !0;
    sj(t, u, l, d) ||
      ((g = !1),
      (wr.instantAnimations || !p) && h?.(hu(t, o, r)),
      (t[0] = t[t.length - 1]),
      Sf(o),
      (o.repeat = 0));
    const S = {
        startTime: s
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > fj
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: r,
        ...o,
        keyframes: t,
      },
      x = g && !f && dj(S),
      P = S.motionValue?.owner?.current;
    let C;
    if (x)
      try {
        C = new ij({ ...S, element: P });
      } catch {
        C = new Wl(S);
      }
    else C = new Wl(S);
    (C.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Zt),
      this.pendingTimeline &&
        ((this.stopTimeline = C.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = C));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, r) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), Z_()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
function Fx(e, t, r, o = 0, s = 1) {
  const u = Array.from(e)
      .sort((f, h) => f.sortNodePosition(h))
      .indexOf(t),
    l = e.size,
    d = (l - 1) * o;
  return typeof r == "function" ? r(u, l) : s === 1 ? u * o : d - u * o;
}
const Fy = 30,
  pj = (e) => !isNaN(parseFloat(e));
class mj {
  constructor(t, r = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o) => {
        const s = yt.now();
        if (
          (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const u of this.dependents) u.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = r.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = yt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = pj(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new ch());
    const o = this.events[t].add(r);
    return t === "change"
      ? () => {
          (o(),
            Le.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : o;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = r));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, r, o) {
    (this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - o));
  }
  jump(t, r = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = yt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Fy
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Fy);
    return ax(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        ((this.hasAnimated = !0),
          (this.animation = t(r)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function so(e, t) {
  return new mj(e, t);
}
function $x(e, t) {
  if (e?.inherit && t) {
    const { inherit: r, ...o } = e;
    return { ...t, ...o };
  }
  return e;
}
function wh(e, t) {
  const r = e?.[t] ?? e?.default ?? e;
  return r !== e ? $x(r, e) : r;
}
const gj = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  yj = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  vj = { type: "keyframes", duration: 0.8 },
  xj = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  wj = (e, { keyframes: t }) =>
    t.length > 2
      ? vj
      : uo.has(e)
        ? e.startsWith("scale")
          ? yj(t[1])
          : gj
        : xj,
  Sj = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function kj(e) {
  for (const t in e) if (!Sj.has(t)) return !0;
  return !1;
}
const Sh =
    (e, t, r, o = {}, s, u) =>
    (l) => {
      const d = wh(o, e) || {},
        p = d.delay || o.delay || 0;
      let { elapsed: f = 0 } = o;
      f = f - zt(p);
      const h = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...d,
        delay: -f,
        onUpdate: (y) => {
          (t.set(y), d.onUpdate && d.onUpdate(y));
        },
        onComplete: () => {
          (l(), d.onComplete && d.onComplete());
        },
        name: e,
        motionValue: t,
        element: u ? void 0 : s,
      };
      (kj(d) || Object.assign(h, wj(e, h)),
        h.duration && (h.duration = zt(h.duration)),
        h.repeatDelay && (h.repeatDelay = zt(h.repeatDelay)),
        h.from !== void 0 && (h.keyframes[0] = h.from));
      let g = !1;
      if (
        ((h.type === !1 || (h.duration === 0 && !h.repeatDelay)) &&
          (Sf(h), h.delay === 0 && (g = !0)),
        (wr.instantAnimations ||
          wr.skipAnimations ||
          s?.shouldSkipAnimations ||
          d.skipAnimations) &&
          ((g = !0), Sf(h), (h.delay = 0)),
        (h.allowFlatten = !d.type && !d.ease),
        g && !u && t.get() !== void 0)
      ) {
        const y = hu(h.keyframes, d);
        if (y !== void 0) {
          Le.update(() => {
            (h.onUpdate(y), h.onComplete());
          });
          return;
        }
      }
      return d.isSync ? new Wl(h) : new hj(h);
    },
  Ej = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Cj(e) {
  const t = Ej.exec(e);
  if (!t) return [,];
  const [, r, o, s] = t;
  return [`--${r ?? o}`, s];
}
function Bx(e, t, r = 1) {
  const [o, s] = Cj(e);
  if (!o) return;
  const u = window.getComputedStyle(t).getPropertyValue(o);
  if (u) {
    const l = u.trim();
    return rx(l) ? parseFloat(l) : l;
  }
  return hh(s) ? Bx(s, t, r + 1) : s;
}
function $y(e) {
  const t = [{}, {}];
  return (
    e?.values.forEach((r, o) => {
      ((t[0][o] = r.get()), (t[1][o] = r.getVelocity()));
    }),
    t
  );
}
function kh(e, t, r, o) {
  if (typeof t == "function") {
    const [s, u] = $y(o);
    t = t(r !== void 0 ? r : e.custom, s, u);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, u] = $y(o);
    t = t(r !== void 0 ? r : e.custom, s, u);
  }
  return t;
}
function Jr(e, t, r) {
  const o = e.getProps();
  return kh(o, t, r !== void 0 ? r : o.custom, e);
}
const Hx = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...lo,
  ]),
  kf = (e) => Array.isArray(e);
function Pj(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, so(r));
}
function Tj(e) {
  return kf(e) ? e[e.length - 1] || 0 : e;
}
function Mj(e, t) {
  const r = Jr(e, t);
  let { transitionEnd: o = {}, transition: s = {}, ...u } = r || {};
  u = { ...u, ...o };
  for (const l in u) {
    const d = Tj(u[l]);
    Pj(e, l, d);
  }
}
const lt = (e) => !!(e && e.getVelocity);
function Nj(e) {
  return !!(lt(e) && e.add);
}
function Ef(e, t) {
  const r = e.getValue("willChange");
  if (Nj(r)) return r.add(t);
  if (!r && wr.WillChange) {
    const o = new wr.WillChange("auto");
    (e.addValue("willChange", o), o.add(t));
  }
}
function Eh(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const bj = "framerAppearId",
  Ux = "data-" + Eh(bj);
function Wx(e) {
  return e.props[Ux];
}
function _j({ protectedKeys: e, needsAnimating: t }, r) {
  const o = e.hasOwnProperty(r) && t[r] !== !0;
  return ((t[r] = !1), o);
}
function Gx(e, t, { delay: r = 0, transitionOverride: o, type: s } = {}) {
  let { transition: u, transitionEnd: l, ...d } = t;
  const p = e.getDefaultTransition();
  u = u ? $x(u, p) : p;
  const f = u?.reduceMotion,
    h = u?.skipAnimations;
  o && (u = o);
  const g = [],
    y = s && e.animationState && e.animationState.getState()[s],
    S = u?.path;
  S && S.animateVisualElement(e, d, u, r, g);
  for (const x in d) {
    const P = e.getValue(x, e.latestValues[x] ?? null),
      C = d[x];
    if (C === void 0 || (y && _j(y, x))) continue;
    const T = { delay: r, ...wh(u || {}, x) };
    h && (T.skipAnimations = !0);
    const N = P.get();
    if (
      N !== void 0 &&
      !P.isAnimating() &&
      !Array.isArray(C) &&
      C === N &&
      !T.velocity
    ) {
      Le.update(() => P.set(C));
      continue;
    }
    let k = !1;
    if (window.MotionHandoffAnimation) {
      const b = Wx(e);
      if (b) {
        const R = window.MotionHandoffAnimation(b, x, Le);
        R !== null && ((T.startTime = R), (k = !0));
      }
    }
    Ef(e, x);
    const M = f ?? e.shouldReduceMotion;
    P.start(Sh(x, P, C, M && Hx.has(x) ? { type: !1 } : T, e, k));
    const I = P.animation;
    I && g.push(I);
  }
  if (l) {
    const x = () =>
      Le.update(() => {
        l && Mj(e, l);
      });
    g.length ? Promise.all(g).then(x) : x();
  }
  return g;
}
function Cf(e, t, r = {}) {
  const o = Jr(e, t, r.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (s = r.transitionOverride);
  const u = o ? () => Promise.all(Gx(e, o, r)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: f = 0,
              staggerChildren: h,
              staggerDirection: g,
            } = s;
            return jj(e, t, p, f, h, g, r);
          }
        : () => Promise.resolve(),
    { when: d } = s;
  if (d) {
    const [p, f] = d === "beforeChildren" ? [u, l] : [l, u];
    return p().then(() => f());
  } else return Promise.all([u(), l(r.delay)]);
}
function jj(e, t, r = 0, o = 0, s = 0, u = 1, l) {
  const d = [];
  for (const p of e.variantChildren)
    (p.notify("AnimationStart", t),
      d.push(
        Cf(p, t, {
          ...l,
          delay:
            r +
            (typeof o == "function" ? 0 : o) +
            Fx(e.variantChildren, p, o, s, u),
        }).then(() => p.notify("AnimationComplete", t)),
      ));
  return Promise.all(d);
}
function Aj(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let o;
  if (Array.isArray(t)) {
    const s = t.map((u) => Cf(e, u, r));
    o = Promise.all(s);
  } else if (typeof t == "string") o = Cf(e, t, r);
  else {
    const s = typeof t == "function" ? Jr(e, t, r.custom) : t;
    o = Promise.all(Gx(e, s, r));
  }
  return o.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Ij = { test: (e) => e === "auto", parse: (e) => e },
  Xx = (e) => (t) => t.test(e),
  Yx = [ao, me, Tn, $n, o_, i_, Ij],
  By = (e) => Yx.find(Xx(e));
function Dj(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || ox(e)
      : !0;
}
const Rj = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Lj(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [o] = r.match(ph) || [];
  if (!o) return e;
  const s = r.replace(o, "");
  let u = Rj.has(t) ? 1 : 0;
  return (o !== r && (u *= 100), t + "(" + u + s + ")");
}
const Vj = /\b([a-z-]*)\(.*?\)/gu,
  Pf = {
    ...cn,
    getAnimatableNone: (e) => {
      const t = e.match(Vj);
      return t ? t.map(Lj).join(" ") : e;
    },
  },
  Tf = {
    ...cn,
    getAnimatableNone: (e) => {
      const t = cn.parse(e);
      return cn.createTransformer(e)(
        t.map((o) =>
          typeof o == "number"
            ? 0
            : typeof o == "object"
              ? { ...o, alpha: 1 }
              : o,
        ),
      );
    },
  },
  Hy = { ...ao, transform: Math.round },
  zj = {
    rotate: $n,
    pathRotation: $n,
    rotateX: $n,
    rotateY: $n,
    rotateZ: $n,
    scale: fl,
    scaleX: fl,
    scaleY: fl,
    scaleZ: fl,
    skew: $n,
    skewX: $n,
    skewY: $n,
    distance: me,
    translateX: me,
    translateY: me,
    translateZ: me,
    x: me,
    y: me,
    z: me,
    perspective: me,
    transformPerspective: me,
    opacity: Cs,
    originX: by,
    originY: by,
    originZ: me,
  },
  Gl = {
    borderWidth: me,
    borderTopWidth: me,
    borderRightWidth: me,
    borderBottomWidth: me,
    borderLeftWidth: me,
    borderRadius: me,
    borderTopLeftRadius: me,
    borderTopRightRadius: me,
    borderBottomRightRadius: me,
    borderBottomLeftRadius: me,
    width: me,
    maxWidth: me,
    height: me,
    maxHeight: me,
    top: me,
    right: me,
    bottom: me,
    left: me,
    inset: me,
    insetBlock: me,
    insetBlockStart: me,
    insetBlockEnd: me,
    insetInline: me,
    insetInlineStart: me,
    insetInlineEnd: me,
    padding: me,
    paddingTop: me,
    paddingRight: me,
    paddingBottom: me,
    paddingLeft: me,
    paddingBlock: me,
    paddingBlockStart: me,
    paddingBlockEnd: me,
    paddingInline: me,
    paddingInlineStart: me,
    paddingInlineEnd: me,
    margin: me,
    marginTop: me,
    marginRight: me,
    marginBottom: me,
    marginLeft: me,
    marginBlock: me,
    marginBlockStart: me,
    marginBlockEnd: me,
    marginInline: me,
    marginInlineStart: me,
    marginInlineEnd: me,
    fontSize: me,
    backgroundPositionX: me,
    backgroundPositionY: me,
    ...zj,
    zIndex: Hy,
    fillOpacity: Cs,
    strokeOpacity: Cs,
    numOctaves: Hy,
  },
  Oj = {
    ...Gl,
    color: Ze,
    backgroundColor: Ze,
    outlineColor: Ze,
    fill: Ze,
    stroke: Ze,
    borderColor: Ze,
    borderTopColor: Ze,
    borderRightColor: Ze,
    borderBottomColor: Ze,
    borderLeftColor: Ze,
    filter: Pf,
    WebkitFilter: Pf,
    mask: Tf,
    WebkitMask: Tf,
  },
  Kx = (e) => Oj[e],
  Fj = new Set([Pf, Tf]);
function Zx(e, t) {
  let r = Kx(e);
  return (
    Fj.has(r) || (r = cn),
    r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const $j = new Set(["auto", "none", "0"]);
function Bj(e, t, r) {
  let o = 0,
    s;
  for (; o < e.length && !s; ) {
    const u = e[o];
    (typeof u == "string" && !$j.has(u) && oo(u).values.length && (s = e[o]),
      o++);
  }
  if (s && r) for (const u of t) e[u] = Zx(r, s);
}
class Hj extends xh {
  constructor(t, r, o, s, u) {
    super(t, r, o, s, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: o } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let h = 0; h < t.length; h++) {
      let g = t[h];
      if (typeof g == "string" && ((g = g.trim()), hh(g))) {
        const y = Bx(g, r.current);
        (y !== void 0 && (t[h] = y),
          h === t.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !Hx.has(o) || t.length !== 2)) return;
    const [s, u] = t,
      l = By(s),
      d = By(u),
      p = Ny(s),
      f = Ny(u);
    if (p !== f && xr[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (l !== d)
      if (Vy(l) && Vy(d))
        for (let h = 0; h < t.length; h++) {
          const g = t[h];
          typeof g == "string" && (t[h] = parseFloat(g));
        }
      else xr[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this,
      o = [];
    for (let s = 0; s < t.length; s++) (t[s] === null || Dj(t[s])) && o.push(s);
    o.length && Bj(t, o, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: o } = this;
    if (!t || !t.current) return;
    (o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = xr[o](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (r[0] = this.measuredOrigin));
    const s = r[r.length - 1];
    s !== void 0 && t.getValue(o, s).jump(s, !1);
  }
  measureEndState() {
    const { element: t, name: r, unresolvedKeyframes: o } = this;
    if (!t || !t.current) return;
    const s = t.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const u = o.length - 1,
      l = o[u];
    ((o[u] = xr[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([d, p]) => {
          t.getValue(d).set(p);
        }),
      this.resolveNoneKeyframes());
  }
}
const Ch = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
];
function qx(e, t, r) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let o = document;
    const s = r?.[e] ?? o.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e).filter((o) => o != null);
}
const Mf = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function kl(e) {
  return ix(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: Ph } = vx(queueMicrotask, !1),
  on = { x: !1, y: !1 };
function Qx() {
  return on.x || on.y;
}
function Uj(e) {
  return e === "x" || e === "y"
    ? on[e]
      ? null
      : ((on[e] = !0),
        () => {
          on[e] = !1;
        })
    : on.x || on.y
      ? null
      : ((on.x = on.y = !0),
        () => {
          on.x = on.y = !1;
        });
}
function Jx(e, t) {
  const r = qx(e),
    o = new AbortController(),
    s = { passive: !0, ...t, signal: o.signal };
  return [r, s, () => o.abort()];
}
function Wj(e) {
  return !(e.pointerType === "touch" || Qx());
}
function Gj(e, t, r = {}) {
  const [o, s, u] = Jx(e, r);
  return (
    o.forEach((l) => {
      let d = !1,
        p = !1,
        f;
      const h = () => {
          l.removeEventListener("pointerleave", x);
        },
        g = (C) => {
          (f && (f(C), (f = void 0)), h());
        },
        y = (C) => {
          ((d = !1),
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", y),
            p && ((p = !1), g(C)));
        },
        S = () => {
          ((d = !0),
            window.addEventListener("pointerup", y, s),
            window.addEventListener("pointercancel", y, s));
        },
        x = (C) => {
          if (C.pointerType !== "touch") {
            if (d) {
              p = !0;
              return;
            }
            g(C);
          }
        },
        P = (C) => {
          if (!Wj(C)) return;
          p = !1;
          const T = t(l, C);
          typeof T == "function" &&
            ((f = T), l.addEventListener("pointerleave", x, s));
        };
      (l.addEventListener("pointerenter", P, s),
        l.addEventListener("pointerdown", S, s));
    }),
    u
  );
}
const ew = (e, t) => (t ? (e === t ? !0 : ew(e, t.parentElement)) : !1),
  Th = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Xj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Yj(e) {
  return Xj.has(e.tagName) || e.isContentEditable === !0;
}
const Kj = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Zj(e) {
  return Kj.has(e.tagName) || e.isContentEditable === !0;
}
const El = new WeakSet();
function Uy(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Dd(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const qj = (e, t) => {
  const r = e.currentTarget;
  if (!r) return;
  const o = Uy(() => {
    if (El.has(r)) return;
    Dd(r, "down");
    const s = Uy(() => {
        Dd(r, "up");
      }),
      u = () => Dd(r, "cancel");
    (r.addEventListener("keyup", s, t), r.addEventListener("blur", u, t));
  });
  (r.addEventListener("keydown", o, t),
    r.addEventListener("blur", () => r.removeEventListener("keydown", o), t));
};
function Wy(e) {
  return Th(e) && !Qx();
}
const Gy = new WeakSet();
function Qj(e, t, r = {}) {
  const [o, s, u] = Jx(e, r),
    l = (d) => {
      const p = d.currentTarget;
      if (!Wy(d) || Gy.has(d)) return;
      (El.add(p), r.stopPropagation && Gy.add(d));
      const f = t(p, d),
        h = { ...s, capture: !0 },
        g = (x, P) => {
          (window.removeEventListener("pointerup", y, h),
            window.removeEventListener("pointercancel", S, h),
            El.has(p) && El.delete(p),
            Wy(x) && typeof f == "function" && f(x, { success: P }));
        },
        y = (x) => {
          g(
            x,
            p === window ||
              p === document ||
              r.useGlobalTarget ||
              ew(p, x.target),
          );
        },
        S = (x) => {
          g(x, !1);
        };
      (window.addEventListener("pointerup", y, h),
        window.addEventListener("pointercancel", S, h));
    };
  return (
    o.forEach((d) => {
      ((r.useGlobalTarget ? window : d).addEventListener("pointerdown", l, s),
        kl(d) &&
          (d.addEventListener("focus", (f) => qj(f, s)),
          !Yj(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0)));
    }),
    u
  );
}
function Mh(e) {
  return ix(e) && "ownerSVGElement" in e;
}
const Cl = new WeakMap();
let Pl;
const tw = (e, t, r) => (o, s) =>
    s && s[0]
      ? s[0][e + "Size"]
      : Mh(o) && "getBBox" in o
        ? o.getBBox()[t]
        : o[r],
  Jj = tw("inline", "width", "offsetWidth"),
  eA = tw("block", "height", "offsetHeight");
function tA({ target: e, borderBoxSize: t }) {
  Cl.get(e)?.forEach((r) => {
    r(e, {
      get width() {
        return Jj(e, t);
      },
      get height() {
        return eA(e, t);
      },
    });
  });
}
function nA(e) {
  e.forEach(tA);
}
function rA() {
  typeof ResizeObserver > "u" || (Pl = new ResizeObserver(nA));
}
function iA(e, t) {
  Pl || rA();
  const r = qx(e);
  return (
    r.forEach((o) => {
      let s = Cl.get(o);
      (s || ((s = new Set()), Cl.set(o, s)), s.add(t), Pl?.observe(o));
    }),
    () => {
      r.forEach((o) => {
        const s = Cl.get(o);
        (s?.delete(t), s?.size || Pl?.unobserve(o));
      });
    }
  );
}
const Tl = new Set();
let Gi;
function oA() {
  ((Gi = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Tl.forEach((t) => t(e));
  }),
    window.addEventListener("resize", Gi));
}
function sA(e) {
  return (
    Tl.add(e),
    Gi || oA(),
    () => {
      (Tl.delete(e),
        !Tl.size &&
          typeof Gi == "function" &&
          (window.removeEventListener("resize", Gi), (Gi = void 0)));
    }
  );
}
function Xy(e, t) {
  return typeof e == "function" ? sA(e) : iA(e, t);
}
function aA(e) {
  return Mh(e) && e.tagName === "svg";
}
const lA = [...Yx, Ze, cn],
  uA = (e) => lA.find(Xx(e)),
  Yy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Xi = () => ({ x: Yy(), y: Yy() }),
  Ky = () => ({ min: 0, max: 0 }),
  tt = () => ({ x: Ky(), y: Ky() }),
  cA = new WeakMap();
function pu(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Ps(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Nh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  bh = ["initial", ...Nh];
function mu(e) {
  return pu(e.animate) || bh.some((t) => Ps(e[t]));
}
function nw(e) {
  return !!(mu(e) || e.variants);
}
function dA(e, t, r) {
  for (const o in t) {
    const s = t[o],
      u = r[o];
    if (lt(s)) e.addValue(o, s);
    else if (lt(u)) e.addValue(o, so(s, { owner: e }));
    else if (u !== s)
      if (e.hasValue(o)) {
        const l = e.getValue(o);
        l.liveStyle === !0 ? l.jump(s) : l.hasAnimated || l.set(s);
      } else {
        const l = e.getStaticValue(o);
        e.addValue(o, so(l !== void 0 ? l : s, { owner: e }));
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Nf = { current: null },
  rw = { current: !1 },
  fA = typeof window < "u";
function hA() {
  if (((rw.current = !0), !!fA))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Nf.current = e.matches);
      (e.addEventListener("change", t), t());
    } else Nf.current = !1;
}
const Zy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Xl = {};
function iw(e) {
  Xl = e;
}
function pA() {
  return Xl;
}
class mA {
  scrapeMotionValuesFromProps(t, r, o) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: o,
      reducedMotionConfig: s,
      skipAnimations: u,
      blockInitialAnimation: l,
      visualState: d,
    },
    p = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = xh),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const S = yt.now();
        this.renderScheduledAt < S &&
          ((this.renderScheduledAt = S), Le.render(this.render, !1, !0));
      }));
    const { latestValues: f, renderState: h } = d;
    ((this.latestValues = f),
      (this.baseTarget = { ...f }),
      (this.initialValues = r.initial ? { ...f } : {}),
      (this.renderState = h),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = o),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.skipAnimationsConfig = u),
      (this.options = p),
      (this.blockInitialAnimation = !!l),
      (this.isControllingVariants = mu(r)),
      (this.isVariantNode = nw(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: g, ...y } = this.scrapeMotionValuesFromProps(
      r,
      {},
      this,
    );
    for (const S in y) {
      const x = y[S];
      f[S] !== void 0 && lt(x) && x.set(f[S]);
    }
  }
  mount(t) {
    if (this.hasBeenMounted)
      for (const r in this.initialValues)
        (this.values.get(r)?.jump(this.initialValues[r]),
          (this.latestValues[r] = this.initialValues[r]));
    ((this.current = t),
      cA.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, o) => this.bindToMotionValue(o, r)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (rw.current || hA(), (this.shouldReduceMotion = Nf.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Sr(this.notifyUpdate),
      Sr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const r = this.features[t];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, r) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      r.accelerate && Ox.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: l,
          keyframes: d,
          times: p,
          ease: f,
          duration: h,
        } = r.accelerate,
        g = new Vx({
          element: this.current,
          name: t,
          keyframes: d,
          times: p,
          ease: f,
          duration: zt(h),
        }),
        y = l(g);
      this.valueSubscriptions.set(t, () => {
        (y(), g.cancel());
      });
      return;
    }
    const o = uo.has(t);
    o && this.onBindTransform && this.onBindTransform();
    const s = r.on("change", (l) => {
      ((this.latestValues[t] = l),
        this.props.onUpdate && Le.preRender(this.notifyUpdate),
        o && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let u;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (u = window.MotionCheckAppearSync(this, t, r)),
      this.valueSubscriptions.set(t, () => {
        (s(), u && u());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Xl) {
      const r = Xl[t];
      if (!r) continue;
      const { isEnabled: o, Feature: s } = r;
      if (
        (!this.features[t] &&
          s &&
          o(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const u = this.features[t];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : tt();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  update(t, r) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r));
    for (let o = 0; o < Zy.length; o++) {
      const s = Zy[o];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const u = "on" + s,
        l = t[u];
      l && (this.propEventSubscriptions[s] = this.on(s, l));
    }
    ((this.prevMotionValues = dA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    const o = this.values.get(t);
    r !== o &&
      (o && this.removeValue(t),
      this.bindToMotionValue(t, r),
      this.values.set(t, r),
      (this.latestValues[t] = r.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    (r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let o = this.values.get(t);
    return (
      o === void 0 &&
        r !== void 0 &&
        ((o = so(r === null ? void 0 : r, { owner: this })),
        this.addValue(t, o)),
      o
    );
  }
  readValue(t, r) {
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      o != null &&
        (typeof o == "string" && (rx(o) || ox(o))
          ? (o = parseFloat(o))
          : !uA(o) && cn.test(r) && (o = Zx(t, r)),
        this.setBaseTarget(t, lt(o) ? o.get() : o)),
      lt(o) ? o.get() : o
    );
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const u = kh(this.props, r, this.presenceContext?.custom);
      u && (o = u[t]);
    }
    if (r && o !== void 0) return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !lt(s)
      ? s
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, r) {
    return (
      this.events[t] || (this.events[t] = new ch()),
      this.events[t].add(r)
    );
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
  scheduleRenderMicrotask() {
    Ph.render(this.render);
  }
}
class ow extends mA {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = Hj));
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    const o = t.style;
    return o ? o[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: o }) {
    (delete r[t], delete o[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    lt(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
}
class kr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function sw({ top: e, left: t, right: r, bottom: o }) {
  return { x: { min: t, max: r }, y: { min: e, max: o } };
}
function gA({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function yA(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    o = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: o.y, right: o.x };
}
function Rd(e) {
  return e === void 0 || e === 1;
}
function bf({ scale: e, scaleX: t, scaleY: r }) {
  return !Rd(e) || !Rd(t) || !Rd(r);
}
function Wr(e) {
  return (
    bf(e) ||
    aw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function aw(e) {
  return qy(e.x) || qy(e.y);
}
function qy(e) {
  return e && e !== "0%";
}
function Yl(e, t, r) {
  const o = e - r,
    s = t * o;
  return r + s;
}
function Qy(e, t, r, o, s) {
  return (s !== void 0 && (e = Yl(e, s, o)), Yl(e, r, o) + t);
}
function _f(e, t = 0, r = 1, o, s) {
  ((e.min = Qy(e.min, t, r, o, s)), (e.max = Qy(e.max, t, r, o, s)));
}
function lw(e, { x: t, y: r }) {
  (_f(e.x, t.translate, t.scale, t.originPoint),
    _f(e.y, r.translate, r.scale, r.originPoint));
}
const Jy = 0.999999999999,
  e0 = 1.0000000000001;
function vA(e, t, r, o = !1) {
  const s = r.length;
  if (!s) return;
  t.x = t.y = 1;
  let u, l;
  for (let d = 0; d < s; d++) {
    ((u = r[d]), (l = u.projectionDelta));
    const { visualElement: p } = u.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (o &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        (En(e.x, -u.scroll.offset.x), En(e.y, -u.scroll.offset.y)),
      l && ((t.x *= l.x.scale), (t.y *= l.y.scale), lw(e, l)),
      o && Wr(u.latestValues) && Ml(e, u.latestValues, u.layout?.layoutBox));
  }
  (t.x < e0 && t.x > Jy && (t.x = 1), t.y < e0 && t.y > Jy && (t.y = 1));
}
function En(e, t) {
  ((e.min += t), (e.max += t));
}
function t0(e, t, r, o, s = 0.5) {
  const u = Re(e.min, e.max, s);
  _f(e, t, r, u, o);
}
function n0(e, t) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Ml(e, t, r) {
  const o = r ?? e;
  (t0(e.x, n0(t.x, o.x), t.scaleX, t.scale, t.originX),
    t0(e.y, n0(t.y, o.y), t.scaleY, t.scale, t.originY));
}
function uw(e, t) {
  return sw(yA(e.getBoundingClientRect(), t));
}
function xA(e, t, r) {
  const o = uw(e, r),
    { scroll: s } = t;
  return (s && (En(o.x, s.offset.x), En(o.y, s.offset.y)), o);
}
const wA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  SA = lo.length;
function kA(e, t, r) {
  let o = "",
    s = !0;
  for (let l = 0; l < SA; l++) {
    const d = lo[l],
      p = e[d];
    if (p === void 0) continue;
    let f = !0;
    if (typeof p == "number") f = p === (d.startsWith("scale") ? 1 : 0);
    else {
      const h = parseFloat(p);
      f = d.startsWith("scale") ? h === 1 : h === 0;
    }
    if (!f || r) {
      const h = Mf(p, Gl[d]);
      if (!f) {
        s = !1;
        const g = wA[d] || d;
        o += `${g}(${h}) `;
      }
      r && (t[d] = h);
    }
  }
  const u = e.pathRotation;
  return (
    u && ((s = !1), (o += `rotate(${Mf(u, Gl.pathRotation)}) `)),
    (o = o.trim()),
    r ? (o = r(t, s ? "" : o)) : s && (o = "none"),
    o
  );
}
function _h(e, t, r) {
  const { style: o, vars: s, transformOrigin: u } = e;
  let l = !1,
    d = !1;
  for (const p in t) {
    const f = t[p];
    if (uo.has(p)) {
      l = !0;
      continue;
    } else if (wx(p)) {
      s[p] = f;
      continue;
    } else {
      const h = Mf(f, Gl[p]);
      p.startsWith("origin") ? ((d = !0), (u[p] = h)) : (o[p] = h);
    }
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = kA(t, e.transform, r))
        : o.transform && (o.transform = "none")),
    d)
  ) {
    const { originX: p = "50%", originY: f = "50%", originZ: h = 0 } = u;
    o.transformOrigin = `${p} ${f} ${h}`;
  }
}
function cw(e, { style: t, vars: r }, o, s) {
  const u = e.style;
  let l;
  for (l in t) u[l] = t[l];
  s?.applyProjectionStyles(u, o);
  for (l in r) u.setProperty(l, r[l]);
}
function r0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const rs = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (me.test(e)) e = parseFloat(e);
        else return e;
      const r = r0(e, t.target.x),
        o = r0(e, t.target.y);
      return `${r}% ${o}%`;
    },
  },
  EA = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const o = e,
        s = cn.parse(e);
      if (s.length > 5) return o;
      const u = cn.createTransformer(e),
        l = typeof s[0] != "number" ? 1 : 0,
        d = r.x.scale * t.x,
        p = r.y.scale * t.y;
      ((s[0 + l] /= d), (s[1 + l] /= p));
      const f = Re(d, p, 0.5);
      return (
        typeof s[2 + l] == "number" && (s[2 + l] /= f),
        typeof s[3 + l] == "number" && (s[3 + l] /= f),
        u(s)
      );
    },
  },
  jf = {
    borderRadius: { ...rs, applyTo: [...Ch] },
    borderTopLeftRadius: rs,
    borderTopRightRadius: rs,
    borderBottomLeftRadius: rs,
    borderBottomRightRadius: rs,
    boxShadow: EA,
  };
function dw(e, { layout: t, layoutId: r }) {
  return (
    uo.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!jf[e] || e === "opacity"))
  );
}
function jh(e, t, r) {
  const o = e.style,
    s = t?.style,
    u = {};
  if (!o) return u;
  for (const l in o)
    (lt(o[l]) ||
      (s && lt(s[l])) ||
      dw(l, e) ||
      r?.getValue(l)?.liveStyle !== void 0) &&
      (u[l] = o[l]);
  return u;
}
function CA(e) {
  return window.getComputedStyle(e);
}
class PA extends ow {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = cw));
  }
  mount(t) {
    (fu(!!t.style), super.mount(t));
  }
  readValueFromInstance(t, r) {
    if (uo.has(r)) return this.projection?.isProjecting ? gf(r) : W_(t, r);
    {
      const o = CA(t),
        s = (wx(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return uw(t, r);
  }
  build(t, r, o) {
    _h(t, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return jh(t, r, o);
  }
}
const TA = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  MA = { offset: "strokeDashoffset", array: "strokeDasharray" };
function NA(e, t, r = 1, o = 0, s = !0) {
  e.pathLength = 1;
  const u = s ? TA : MA;
  ((e[u.offset] = `${-o}`), (e[u.array] = `${t} ${r}`));
}
const bA = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function fw(
  e,
  {
    attrX: t,
    attrY: r,
    attrScale: o,
    pathLength: s,
    pathSpacing: u = 1,
    pathOffset: l = 0,
    ...d
  },
  p,
  f,
  h,
) {
  if ((_h(e, d, f), p)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: g, style: y } = e;
  (g.transform && ((y.transform = g.transform), delete g.transform),
    (y.transform || g.transformOrigin) &&
      ((y.transformOrigin = g.transformOrigin ?? "50% 50%"),
      delete g.transformOrigin),
    y.transform &&
      ((y.transformBox = h?.transformBox ?? "fill-box"),
      delete g.transformBox));
  for (const S of bA) g[S] !== void 0 && ((y[S] = g[S]), delete g[S]);
  (t !== void 0 && (g.x = t),
    r !== void 0 && (g.y = r),
    o !== void 0 && (g.scale = o),
    s !== void 0 && NA(g, s, u, l, !1));
}
const hw = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  pw = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function _A(e, t, r, o) {
  cw(e, t, void 0, o);
  for (const s in t.attrs) e.setAttribute(hw.has(s) ? s : Eh(s), t.attrs[s]);
}
function mw(e, t, r) {
  const o = jh(e, t, r);
  for (const s in e)
    if (lt(e[s]) || lt(t[s])) {
      const u =
        lo.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      o[u] = e[s];
    }
  return o;
}
class jA extends ow {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = tt));
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (uo.has(r)) {
      const o = Kx(r);
      return (o && o.default) || 0;
    }
    return ((r = hw.has(r) ? r : Eh(r)), t.getAttribute(r));
  }
  scrapeMotionValuesFromProps(t, r, o) {
    return mw(t, r, o);
  }
  build(t, r, o) {
    fw(t, r, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(t, r, o, s) {
    _A(t, r, o, s);
  }
  mount(t) {
    ((this.isSVGTag = pw(t.tagName)), super.mount(t));
  }
}
const AA = bh.length;
function gw(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const r = e.parent ? gw(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (r.initial = e.props.initial), r);
  }
  const t = {};
  for (let r = 0; r < AA; r++) {
    const o = bh[r],
      s = e.props[o];
    (Ps(s) || s === !1) && (t[o] = s);
  }
  return t;
}
function yw(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let o = 0; o < r; o++) if (t[o] !== e[o]) return !1;
  return !0;
}
const IA = [...Nh].reverse(),
  DA = Nh.length;
function RA(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: o }) => Aj(e, r, o)));
}
function LA(e) {
  let t = RA(e),
    r = i0(),
    o = !0,
    s = !1;
  const u = (f) => (h, g) => {
    const y = Jr(e, g, f === "exit" ? e.presenceContext?.custom : void 0);
    if (y) {
      const { transition: S, transitionEnd: x, ...P } = y;
      h = { ...h, ...P, ...x };
    }
    return h;
  };
  function l(f) {
    t = f(e);
  }
  function d(f) {
    const { props: h } = e,
      g = gw(e.parent) || {},
      y = [],
      S = new Set();
    let x = {},
      P = 1 / 0;
    for (let T = 0; T < DA; T++) {
      const N = IA[T],
        k = r[N],
        M = h[N] !== void 0 ? h[N] : g[N],
        I = Ps(M),
        b = N === f ? k.isActive : null;
      b === !1 && (P = T);
      let R = M === g[N] && M !== h[N] && I;
      if (
        (R && (o || s) && e.manuallyAnimateOnMount && (R = !1),
        (k.protectedKeys = { ...x }),
        (!k.isActive && b === null) ||
          (!M && !k.prevProp) ||
          pu(M) ||
          typeof M == "boolean")
      )
        continue;
      if (N === "exit" && k.isActive && b !== !0) {
        k.prevResolvedValues && (x = { ...x, ...k.prevResolvedValues });
        continue;
      }
      const V = VA(k.prevProp, M);
      let U = V || (N === f && k.isActive && !R && I) || (T > P && I),
        K = !1;
      const Z = Array.isArray(M) ? M : [M];
      let ee = Z.reduce(u(N), {});
      b === !1 && (ee = {});
      const { prevResolvedValues: J = {} } = k,
        j = { ...J, ...ee },
        H = (L) => {
          ((U = !0),
            S.has(L) && ((K = !0), S.delete(L)),
            (k.needsAnimating[L] = !0));
          const $ = e.getValue(L);
          $ && ($.liveStyle = !1);
        };
      for (const L in j) {
        const $ = ee[L],
          G = J[L];
        if (x.hasOwnProperty(L)) continue;
        let _ = !1;
        (kf($) && kf(G) ? (_ = !yw($, G) || V) : (_ = $ !== G),
          _
            ? $ != null
              ? H(L)
              : S.add(L)
            : $ !== void 0 && S.has(L)
              ? H(L)
              : (k.protectedKeys[L] = !0));
      }
      ((k.prevProp = M),
        (k.prevResolvedValues = ee),
        k.isActive && (x = { ...x, ...ee }),
        (o || s) && e.blockInitialAnimation && (U = !1));
      const F = R && V;
      U &&
        (!F || K) &&
        y.push(
          ...Z.map((L) => {
            const $ = { type: N };
            if (
              typeof L == "string" &&
              (o || s) &&
              !F &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: G } = e,
                _ = Jr(G, L);
              if (G.enteringChildren && _) {
                const { delayChildren: O } = _.transition || {};
                $.delay = Fx(G.enteringChildren, e, O);
              }
            }
            return { animation: L, options: $ };
          }),
        );
    }
    if (S.size) {
      const T = {};
      if (typeof h.initial != "boolean") {
        const N = Jr(e, Array.isArray(h.initial) ? h.initial[0] : h.initial);
        N && N.transition && (T.transition = N.transition);
      }
      (S.forEach((N) => {
        const k = e.getBaseTarget(N),
          M = e.getValue(N);
        (M && (M.liveStyle = !0), (T[N] = k ?? null));
      }),
        y.push({ animation: T }));
    }
    let C = !!y.length;
    return (
      o &&
        (h.initial === !1 || h.initial === h.animate) &&
        !e.manuallyAnimateOnMount &&
        (C = !1),
      (o = !1),
      (s = !1),
      C ? t(y) : Promise.resolve()
    );
  }
  function p(f, h) {
    if (r[f].isActive === h) return Promise.resolve();
    (e.variantChildren?.forEach((y) => y.animationState?.setActive(f, h)),
      (r[f].isActive = h));
    const g = d(f);
    for (const y in r) r[y].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: d,
    setActive: p,
    setAnimateFunction: l,
    getState: () => r,
    reset: () => {
      ((r = i0()), (s = !0));
    },
  };
}
function VA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !yw(t, e) : !1;
}
function Hr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function i0() {
  return {
    animate: Hr(!0),
    whileInView: Hr(),
    whileHover: Hr(),
    whileTap: Hr(),
    whileDrag: Hr(),
    whileFocus: Hr(),
    exit: Hr(),
  };
}
function Af(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function rn(e, t) {
  (Af(e.x, t.x), Af(e.y, t.y));
}
function o0(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const vw = 1e-4,
  zA = 1 - vw,
  OA = 1 + vw,
  xw = 0.01,
  FA = 0 - xw,
  $A = 0 + xw;
function vt(e) {
  return e.max - e.min;
}
function BA(e, t, r) {
  return Math.abs(e - t) <= r;
}
function s0(e, t, r, o = 0.5) {
  ((e.origin = o),
    (e.originPoint = Re(t.min, t.max, e.origin)),
    (e.scale = vt(r) / vt(t)),
    (e.translate = Re(r.min, r.max, e.origin) - e.originPoint),
    ((e.scale >= zA && e.scale <= OA) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= FA && e.translate <= $A) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function hs(e, t, r, o) {
  (s0(e.x, t.x, r.x, o ? o.originX : void 0),
    s0(e.y, t.y, r.y, o ? o.originY : void 0));
}
function a0(e, t, r, o = 0) {
  const s = o ? Re(r.min, r.max, o) : r.min;
  ((e.min = s + t.min), (e.max = e.min + vt(t)));
}
function HA(e, t, r, o) {
  (a0(e.x, t.x, r.x, o?.x), a0(e.y, t.y, r.y, o?.y));
}
function l0(e, t, r, o = 0) {
  const s = o ? Re(r.min, r.max, o) : r.min;
  ((e.min = t.min - s), (e.max = e.min + vt(t)));
}
function Kl(e, t, r, o) {
  (l0(e.x, t.x, r.x, o?.x), l0(e.y, t.y, r.y, o?.y));
}
function u0(e, t, r, o, s) {
  return (
    (e -= t),
    (e = Yl(e, 1 / r, o)),
    s !== void 0 && (e = Yl(e, 1 / s, o)),
    e
  );
}
function UA(e, t = 0, r = 1, o = 0.5, s, u = e, l = e) {
  if (
    (Tn.test(t) &&
      ((t = parseFloat(t)), (t = Re(l.min, l.max, t / 100) - l.min)),
    typeof t != "number")
  )
    return;
  let d = Re(u.min, u.max, o);
  (e === u && (d -= t),
    (e.min = u0(e.min, t, r, d, s)),
    (e.max = u0(e.max, t, r, d, s)));
}
function c0(e, t, [r, o, s], u, l) {
  UA(e, t[r], t[o], t[s], t.scale, u, l);
}
const WA = ["x", "scaleX", "originX"],
  GA = ["y", "scaleY", "originY"];
function d0(e, t, r, o) {
  (c0(e.x, t, WA, r ? r.x : void 0, o ? o.x : void 0),
    c0(e.y, t, GA, r ? r.y : void 0, o ? o.y : void 0));
}
function f0(e) {
  return e.translate === 0 && e.scale === 1;
}
function ww(e) {
  return f0(e.x) && f0(e.y);
}
function h0(e, t) {
  return e.min === t.min && e.max === t.max;
}
function XA(e, t) {
  return h0(e.x, t.x) && h0(e.y, t.y);
}
function p0(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Sw(e, t) {
  return p0(e.x, t.x) && p0(e.y, t.y);
}
function m0(e) {
  return vt(e.x) / vt(e.y);
}
function g0(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function Sn(e) {
  return [e("x"), e("y")];
}
function YA(e, t, r) {
  let o = "";
  const s = e.x.translate / t.x,
    u = e.y.translate / t.y,
    l = r?.z || 0;
  if (
    ((s || u || l) && (o = `translate3d(${s}px, ${u}px, ${l}px) `),
    (t.x !== 1 || t.y !== 1) && (o += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const {
      transformPerspective: f,
      rotate: h,
      pathRotation: g,
      rotateX: y,
      rotateY: S,
      skewX: x,
      skewY: P,
    } = r;
    (f && (o = `perspective(${f}px) ${o}`),
      h && (o += `rotate(${h}deg) `),
      g && (o += `rotate(${g}deg) `),
      y && (o += `rotateX(${y}deg) `),
      S && (o += `rotateY(${S}deg) `),
      x && (o += `skewX(${x}deg) `),
      P && (o += `skewY(${P}deg) `));
  }
  const d = e.x.scale * t.x,
    p = e.y.scale * t.y;
  return ((d !== 1 || p !== 1) && (o += `scale(${d}, ${p})`), o || "none");
}
const KA = Ch.length,
  y0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  v0 = (e) => typeof e == "number" || me.test(e);
function ZA(e, t, r, o, s, u) {
  s
    ? ((e.opacity = Re(0, r.opacity ?? 1, qA(o))),
      (e.opacityExit = Re(t.opacity ?? 1, 0, QA(o))))
    : u && (e.opacity = Re(t.opacity ?? 1, r.opacity ?? 1, o));
  for (let l = 0; l < KA; l++) {
    const d = Ch[l];
    let p = x0(t, d),
      f = x0(r, d);
    if (p === void 0 && f === void 0) continue;
    (p || (p = 0),
      f || (f = 0),
      p === 0 || f === 0 || v0(p) === v0(f)
        ? ((e[d] = Math.max(Re(y0(p), y0(f), o), 0)),
          (Tn.test(f) || Tn.test(p)) && (e[d] += "%"))
        : (e[d] = f));
  }
  (t.rotate || r.rotate) && (e.rotate = Re(t.rotate || 0, r.rotate || 0, o));
}
function x0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const qA = kw(0, 0.5, px),
  QA = kw(0.5, 0.95, Zt);
function kw(e, t, r) {
  return (o) => (o < e ? 0 : o > t ? 1 : r(Es(e, t, o)));
}
function JA(e, t, r) {
  const o = lt(e) ? e : so(e);
  return (o.start(Sh("", o, t, r)), o.animation);
}
function Ts(e, t, r, o = { passive: !0 }) {
  return (e.addEventListener(t, r, o), () => e.removeEventListener(t, r, o));
}
const eI = (e, t) => e.depth - t.depth;
class tI {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (uh(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    ($l(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(eI),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function nI(e, t) {
  const r = yt.now(),
    o = ({ timestamp: s }) => {
      const u = s - r;
      u >= t && (Sr(o), e(u - t));
    };
  return (Le.setup(o, !0), () => Sr(o));
}
function Nl(e) {
  return lt(e) ? e.get() : e;
}
class rI {
  constructor() {
    this.members = [];
  }
  add(t) {
    uh(this.members, t);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const o = this.members[r];
      if (o === t || o === this.lead || o === this.prevLead) continue;
      const s = o.instance;
      (!s || s.isConnected === !1) &&
        !o.snapshot &&
        ($l(this.members, o), o.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      ($l(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const o = this.members[r];
      if (o.isPresent !== !1 && o.instance?.isConnected !== !1)
        return (this.promote(o), !0);
    }
    return !1;
  }
  promote(t, r) {
    const o = this.lead;
    if (t !== o && ((this.prevLead = o), (this.lead = t), t.show(), o)) {
      (o.updateSnapshot(), t.scheduleRender());
      const { layoutDependency: s } = o.options,
        { layoutDependency: u } = t.options;
      ((s === void 0 || s !== u) &&
        ((t.resumeFrom = o),
        r && (o.preserveOpacity = !0),
        o.snapshot &&
          ((t.snapshot = o.snapshot),
          (t.snapshot.latestValues = o.animationValues || o.latestValues)),
        t.root?.isUpdating && (t.isLayoutDirty = !0)),
        t.options.crossfade === !1 && o.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      (t.options.onExitComplete?.(),
        t.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const bl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Ld = ["", "X", "Y", "Z"],
  iI = 1e3;
let oI = 0;
function Vd(e, t, r, o) {
  const { latestValues: s } = t;
  s[e] && ((r[e] = s[e]), t.setStaticValue(e, 0), o && (o[e] = 0));
}
function Ew(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const r = Wx(t);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: s, layoutId: u } = e.options;
    window.MotionCancelOptimisedAnimation(r, "transform", Le, !(s || u));
  }
  const { parent: o } = e;
  o && !o.hasCheckedOptimisedAppear && Ew(o);
}
function Cw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: o,
  resetTransform: s,
}) {
  return class {
    constructor(l = {}, d = t?.()) {
      ((this.id = oI++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(lI),
            this.nodes.forEach(pI),
            this.nodes.forEach(mI),
            this.nodes.forEach(uI));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = l),
        (this.root = d ? d.root || d : this),
        (this.path = d ? [...d.path, d] : []),
        (this.parent = d),
        (this.depth = d ? d.depth + 1 : 0));
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new tI());
    }
    addEventListener(l, d) {
      return (
        this.eventHandlers.has(l) || this.eventHandlers.set(l, new ch()),
        this.eventHandlers.get(l).add(d)
      );
    }
    notifyListeners(l, ...d) {
      const p = this.eventHandlers.get(l);
      p && p.notify(...d);
    }
    hasListeners(l) {
      return this.eventHandlers.has(l);
    }
    mount(l) {
      if (this.instance) return;
      ((this.isSVG = Mh(l) && !aA(l)), (this.instance = l));
      const { layoutId: d, layout: p, visualElement: f } = this.options;
      if (
        (f && !f.current && f.mount(l),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || d) && (this.isLayoutDirty = !0),
        e)
      ) {
        let h,
          g = 0;
        const y = () => (this.root.updateBlockedByResize = !1);
        (Le.read(() => {
          g = window.innerWidth;
        }),
          e(l, () => {
            const S = window.innerWidth;
            S !== g &&
              ((g = S),
              (this.root.updateBlockedByResize = !0),
              h && h(),
              (h = nI(y, 250)),
              bl.hasAnimatedSinceResize &&
                ((bl.hasAnimatedSinceResize = !1), this.nodes.forEach(k0)));
          }));
      }
      (d && this.root.registerSharedNode(d, this),
        this.options.animate !== !1 &&
          f &&
          (d || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: h,
              hasLayoutChanged: g,
              hasRelativeLayoutChanged: y,
              layout: S,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const x =
                  this.options.transition || f.getDefaultTransition() || wI,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: C } =
                  f.getProps(),
                T = !this.targetLayout || !Sw(this.targetLayout, S),
                N = !g && y;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                N ||
                (g && (T || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const k = { ...wh(x, "layout"), onPlay: P, onComplete: C };
                ((f.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k),
                  this.setAnimationOrigin(h, N, k.path));
              } else
                (g || k0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = S;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const l = this.getStack();
      (l && l.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Sr(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(gI),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: l } = this.options;
      return l && l.getProps().transformTemplate;
    }
    willUpdate(l = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Ew(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let h = 0; h < this.path.length; h++) {
        const g = this.path[h];
        ((g.shouldResetTransform = !0),
          (typeof g.latestValues.x == "string" ||
            typeof g.latestValues.y == "string") &&
            (g.isLayoutDirty = !0),
          g.updateScroll("snapshot"),
          g.options.layoutRoot && g.willUpdate(!1));
      }
      const { layoutId: d, layout: p } = this.options;
      if (d === void 0 && !p) return;
      const f = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = f
        ? f(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        l && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const p = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          p && this.nodes.forEach(dI),
          this.nodes.forEach(w0));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(S0);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(fI),
            this.nodes.forEach(hI),
            this.nodes.forEach(sI),
            this.nodes.forEach(aI))
          : this.nodes.forEach(S0),
        this.clearAllSnapshots());
      const d = yt.now();
      ((at.delta = Mn(0, 1e3 / 60, d - at.timestamp)),
        (at.timestamp = d),
        (at.isProcessing = !0),
        Nd.update.process(at),
        Nd.preRender.process(at),
        Nd.render.process(at),
        (at.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ph.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(cI), this.sharedNodes.forEach(yI));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Le.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Le.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !vt(this.snapshot.measuredBox.x) &&
          !vt(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const l = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = tt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: d } = this.options;
      d &&
        d.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          l ? l.layoutBox : void 0,
        );
    }
    updateScroll(l = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === l &&
          (d = !1),
        d && this.instance)
      ) {
        const p = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: l,
          isRoot: p,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const l =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        d = this.projectionDelta && !ww(this.projectionDelta),
        p = this.getTransformTemplate(),
        f = p ? p(this.latestValues, "") : void 0,
        h = f !== this.prevTransformTemplateValue;
      l &&
        this.instance &&
        (d || Wr(this.latestValues) || h) &&
        (s(this.instance, f),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(l = !0) {
      const d = this.measurePageBox();
      let p = this.removeElementScroll(d);
      return (
        l && (p = this.removeTransform(p)),
        SI(p),
        {
          animationId: this.root.animationId,
          measuredBox: d,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: l } = this.options;
      if (!l) return tt();
      const d = l.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(kI))) {
        const { scroll: f } = this.root;
        f && (En(d.x, f.offset.x), En(d.y, f.offset.y));
      }
      return d;
    }
    removeElementScroll(l) {
      const d = tt();
      if ((rn(d, l), this.scroll?.wasRoot)) return d;
      for (let p = 0; p < this.path.length; p++) {
        const f = this.path[p],
          { scroll: h, options: g } = f;
        f !== this.root &&
          h &&
          g.layoutScroll &&
          (h.wasRoot && rn(d, l), En(d.x, h.offset.x), En(d.y, h.offset.y));
      }
      return d;
    }
    applyTransform(l, d = !1, p) {
      const f = p || tt();
      rn(f, l);
      for (let h = 0; h < this.path.length; h++) {
        const g = this.path[h];
        (!d &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          (En(f.x, -g.scroll.offset.x), En(f.y, -g.scroll.offset.y)),
          Wr(g.latestValues) && Ml(f, g.latestValues, g.layout?.layoutBox));
      }
      return (
        Wr(this.latestValues) &&
          Ml(f, this.latestValues, this.layout?.layoutBox),
        f
      );
    }
    removeTransform(l) {
      const d = tt();
      rn(d, l);
      for (let p = 0; p < this.path.length; p++) {
        const f = this.path[p];
        if (!Wr(f.latestValues)) continue;
        let h;
        (f.instance &&
          (bf(f.latestValues) && f.updateSnapshot(),
          (h = tt()),
          rn(h, f.measurePageBox())),
          d0(d, f.latestValues, f.snapshot?.layoutBox, h));
      }
      return (Wr(this.latestValues) && d0(d, this.latestValues), d);
    }
    setTargetDelta(l) {
      ((this.targetDelta = l),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(l) {
      this.options = {
        ...this.options,
        ...l,
        crossfade: l.crossfade !== void 0 ? l.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== at.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(l = !1) {
      const d = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = d.isSharedProjectionDirty));
      const p = !!this.resumingFrom || this !== d;
      if (
        !(
          l ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: h, layoutId: g } = this.options;
      if (!this.layout || !(h || g)) return;
      this.resolvedRelativeTargetAt = at.timestamp;
      const y = this.getClosestProjectingParent();
      (y &&
        this.linkedParentVersion !== y.layoutVersion &&
        !y.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && y && y.layout
            ? this.createRelativeTarget(
                y,
                this.layout.layoutBox,
                y.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = tt()), (this.targetWithTransforms = tt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              HA(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : rn(this.target, this.layout.layoutBox),
                lw(this.target, this.targetDelta))
              : rn(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(y, this.target, y.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          bf(this.parent.latestValues) ||
          aw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(l, d, p) {
      ((this.relativeParent = l),
        (this.linkedParentVersion = l.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = tt()),
        (this.relativeTargetOrigin = tt()),
        Kl(
          this.relativeTargetOrigin,
          d,
          p,
          this.options.layoutAnchor || void 0,
        ),
        rn(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const l = this.getLead(),
        d = !!this.resumingFrom || this !== l;
      let p = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
        d &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === at.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(f || h))
      )
        return;
      rn(this.layoutCorrected, this.layout.layoutBox);
      const g = this.treeScale.x,
        y = this.treeScale.y;
      (vA(this.layoutCorrected, this.treeScale, this.path, d),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = tt())));
      const { target: S } = l;
      if (!S) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (o0(this.prevProjectionDelta.x, this.projectionDelta.x),
          o0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        hs(this.projectionDelta, this.layoutCorrected, S, this.latestValues),
        (this.treeScale.x !== g ||
          this.treeScale.y !== y ||
          !g0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !g0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", S)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(l = !0) {
      if ((this.options.visualElement?.scheduleRender(), l)) {
        const d = this.getStack();
        d && d.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Xi()),
        (this.projectionDelta = Xi()),
        (this.projectionDeltaWithTransform = Xi()));
    }
    setAnimationOrigin(l, d = !1, p) {
      const f = this.snapshot,
        h = f ? f.latestValues : {},
        g = { ...this.latestValues },
        y = Xi();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !d));
      const S = tt(),
        x = f ? f.source : void 0,
        P = this.layout ? this.layout.source : void 0,
        C = x !== P,
        T = this.getStack(),
        N = !T || T.members.length <= 1,
        k = !!(C && !N && this.options.crossfade === !0 && !this.path.some(xI));
      this.animationProgress = 0;
      let M;
      const I = p?.interpolateProjection(l);
      ((this.mixTargetDelta = (b) => {
        const R = b / 1e3,
          V = I?.(R);
        (V
          ? ((y.x.translate = V.x),
            (y.x.scale = Re(l.x.scale, 1, R)),
            (y.x.origin = l.x.origin),
            (y.x.originPoint = l.x.originPoint),
            (y.y.translate = V.y),
            (y.y.scale = Re(l.y.scale, 1, R)),
            (y.y.origin = l.y.origin),
            (y.y.originPoint = l.y.originPoint))
          : (E0(y.x, l.x, R), E0(y.y, l.y, R)),
          this.setTargetDelta(y),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Kl(
              S,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            vI(this.relativeTarget, this.relativeTargetOrigin, S, R),
            M && XA(this.relativeTarget, M) && (this.isProjectionDirty = !1),
            M || (M = tt()),
            rn(M, this.relativeTarget)),
          C &&
            ((this.animationValues = g), ZA(g, h, this.latestValues, R, k, N)),
          V &&
            V.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = g),
            (this.animationValues.pathRotation = V.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = R));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(l) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (Sr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Le.update(() => {
          ((bl.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = so(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = JA(this.motionValue, [0, 1e3], {
              ...l,
              velocity: 0,
              isSync: !0,
              onUpdate: (d) => {
                (this.mixTargetDelta(d), l.onUpdate && l.onUpdate(d));
              },
              onComplete: () => {
                (l.onComplete && l.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const l = this.getStack();
      (l && l.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(iI),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const l = this.getLead();
      let {
        targetWithTransforms: d,
        target: p,
        layout: f,
        latestValues: h,
      } = l;
      if (!(!d || !p || !f)) {
        if (
          this !== l &&
          this.layout &&
          f &&
          Pw(this.options.animationType, this.layout.layoutBox, f.layoutBox)
        ) {
          p = this.target || tt();
          const g = vt(this.layout.layoutBox.x);
          ((p.x.min = l.target.x.min), (p.x.max = p.x.min + g));
          const y = vt(this.layout.layoutBox.y);
          ((p.y.min = l.target.y.min), (p.y.max = p.y.min + y));
        }
        (rn(d, p),
          Ml(d, h),
          hs(this.projectionDeltaWithTransform, this.layoutCorrected, d, h));
      }
    }
    registerSharedNode(l, d) {
      (this.sharedNodes.has(l) || this.sharedNodes.set(l, new rI()),
        this.sharedNodes.get(l).add(d));
      const f = d.options.initialPromotionConfig;
      d.promote({
        transition: f ? f.transition : void 0,
        preserveFollowOpacity:
          f && f.shouldPreserveFollowOpacity
            ? f.shouldPreserveFollowOpacity(d)
            : void 0,
      });
    }
    isLead() {
      const l = this.getStack();
      return l ? l.lead === this : !0;
    }
    getLead() {
      const { layoutId: l } = this.options;
      return l ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: l } = this.options;
      return l ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: l } = this.options;
      if (l) return this.root.sharedNodes.get(l);
    }
    promote({ needsReset: l, transition: d, preserveFollowOpacity: p } = {}) {
      const f = this.getStack();
      (f && f.promote(this, p),
        l && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        d && this.setOptions({ transition: d }));
    }
    relegate() {
      const l = this.getStack();
      return l ? l.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: l } = this.options;
      if (!l) return;
      let d = !1;
      const { latestValues: p } = l;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (d = !0),
        !d)
      )
        return;
      const f = {};
      p.z && Vd("z", l, f, this.animationValues);
      for (let h = 0; h < Ld.length; h++)
        (Vd(`rotate${Ld[h]}`, l, f, this.animationValues),
          Vd(`skew${Ld[h]}`, l, f, this.animationValues));
      l.render();
      for (const h in f)
        (l.setStaticValue(h, f[h]),
          this.animationValues && (this.animationValues[h] = f[h]));
      l.scheduleRender();
    }
    applyProjectionStyles(l, d) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        l.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (l.visibility = ""),
          (l.opacity = ""),
          (l.pointerEvents = Nl(d?.pointerEvents) || ""),
          (l.transform = p ? p(this.latestValues, "") : "none"));
        return;
      }
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        (this.options.layoutId &&
          ((l.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (l.pointerEvents = Nl(d?.pointerEvents) || "")),
          this.hasProjected &&
            !Wr(this.latestValues) &&
            ((l.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      l.visibility = "";
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget();
      let g = YA(this.projectionDeltaWithTransform, this.treeScale, h);
      (p && (g = p(h, g)), (l.transform = g));
      const { x: y, y: S } = this.projectionDelta;
      ((l.transformOrigin = `${y.origin * 100}% ${S.origin * 100}% 0`),
        f.animationValues
          ? (l.opacity =
              f === this
                ? (h.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : h.opacityExit)
          : (l.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                  ? h.opacityExit
                  : 0));
      for (const x in jf) {
        if (h[x] === void 0) continue;
        const { correct: P, applyTo: C, isCSSVariable: T } = jf[x],
          N = g === "none" ? h[x] : P(h[x], f);
        if (C) {
          const k = C.length;
          for (let M = 0; M < k; M++) l[C[M]] = N;
        } else
          T ? (this.options.visualElement.renderState.vars[x] = N) : (l[x] = N);
      }
      this.options.layoutId &&
        (l.pointerEvents = f === this ? Nl(d?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((l) => l.currentAnimation?.stop()),
        this.root.nodes.forEach(w0),
        this.root.sharedNodes.clear());
    }
  };
}
function sI(e) {
  e.updateLayout();
}
function aI(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: s } = e.options,
      u = t.source !== e.layout.source;
    if (s === "size")
      Sn((h) => {
        const g = u ? t.measuredBox[h] : t.layoutBox[h],
          y = vt(g);
        ((g.min = r[h].min), (g.max = g.min + y));
      });
    else if (s === "x" || s === "y") {
      const h = s === "x" ? "y" : "x";
      Af(u ? t.measuredBox[h] : t.layoutBox[h], r[h]);
    } else
      Pw(s, t.layoutBox, r) &&
        Sn((h) => {
          const g = u ? t.measuredBox[h] : t.layoutBox[h],
            y = vt(r[h]);
          ((g.max = g.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[h].max = e.relativeTarget[h].min + y)));
        });
    const l = Xi();
    hs(l, r, t.layoutBox);
    const d = Xi();
    u ? hs(d, e.applyTransform(o, !0), t.measuredBox) : hs(d, r, t.layoutBox);
    const p = !ww(l);
    let f = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: g, layout: y } = h;
        if (g && y) {
          const S = e.options.layoutAnchor || void 0,
            x = tt();
          Kl(x, t.layoutBox, g.layoutBox, S);
          const P = tt();
          (Kl(P, r, y.layoutBox, S),
            Sw(x, P) || (f = !0),
            h.options.layoutRoot &&
              ((e.relativeTarget = P),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = h)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: d,
      layoutDelta: l,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: f,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function lI(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function uI(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function cI(e) {
  e.clearSnapshot();
}
function w0(e) {
  e.clearMeasurements();
}
function dI(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function S0(e) {
  e.isLayoutDirty = !1;
}
function fI(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function hI(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function k0(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function pI(e) {
  e.resolveTargetDelta();
}
function mI(e) {
  e.calcProjection();
}
function gI(e) {
  e.resetSkewAndRotation();
}
function yI(e) {
  e.removeLeadSnapshot();
}
function E0(e, t, r) {
  ((e.translate = Re(t.translate, 0, r)),
    (e.scale = Re(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function C0(e, t, r, o) {
  ((e.min = Re(t.min, r.min, o)), (e.max = Re(t.max, r.max, o)));
}
function vI(e, t, r, o) {
  (C0(e.x, t.x, r.x, o), C0(e.y, t.y, r.y, o));
}
function xI(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const wI = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  P0 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  T0 = P0("applewebkit/") && !P0("chrome/") ? Math.round : Zt;
function M0(e) {
  ((e.min = T0(e.min)), (e.max = T0(e.max)));
}
function SI(e) {
  (M0(e.x), M0(e.y));
}
function Pw(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !BA(m0(t), m0(r), 0.2))
  );
}
function kI(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const EI = Cw({
    attachResizeListener: (e, t) => Ts(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  zd = { current: void 0 },
  Tw = Cw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!zd.current) {
        const e = new EI({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (zd.current = e));
      }
      return zd.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Ah = D.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function N0(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function CI(...e) {
  return (t) => {
    let r = !1;
    const o = e.map((s) => {
      const u = N0(s, t);
      return (!r && typeof u == "function" && (r = !0), u);
    });
    if (r)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const u = o[s];
          typeof u == "function" ? u() : N0(e[s], null);
        }
      };
  };
}
function PI(...e) {
  return D.useCallback(CI(...e), e);
}
class TI extends D.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (
      kl(r) &&
      t.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const o = r.offsetParent,
        s = (kl(o) && o.offsetWidth) || 0,
        u = (kl(o) && o.offsetHeight) || 0,
        l = getComputedStyle(r),
        d = this.props.sizeRef.current;
      ((d.height = parseFloat(l.height)),
        (d.width = parseFloat(l.width)),
        (d.top = r.offsetTop),
        (d.left = r.offsetLeft),
        (d.right = s - d.width - d.left),
        (d.bottom = u - d.height - d.top),
        (d.direction = l.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function MI({
  children: e,
  isPresent: t,
  anchorX: r,
  anchorY: o,
  root: s,
  pop: u,
}) {
  const l = D.useId(),
    d = D.useRef(null),
    p = D.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr",
    }),
    { nonce: f } = D.useContext(Ah),
    h = u !== !1 ? (e.props?.ref ?? e?.ref) : void 0,
    g = PI(d, h);
  return (
    D.useInsertionEffect(() => {
      const {
        width: y,
        height: S,
        top: x,
        left: P,
        right: C,
        bottom: T,
        direction: N,
      } = p.current;
      if (t || u === !1 || !d.current || !y || !S) return;
      const k = N === "rtl",
        M =
          r === "left"
            ? k
              ? `right: ${C}`
              : `left: ${P}`
            : k
              ? `left: ${P}`
              : `right: ${C}`,
        I = o === "bottom" ? `bottom: ${T}` : `top: ${x}`;
      d.current.dataset.motionPopId = l;
      const b = document.createElement("style");
      f && (b.nonce = f);
      const R = s ?? document.head;
      return (
        R.appendChild(b),
        b.sheet &&
          b.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${S}px !important;
            ${M}px !important;
            ${I}px !important;
          }
        `),
        () => {
          (d.current?.removeAttribute("data-motion-pop-id"),
            R.contains(b) && R.removeChild(b));
        }
      );
    }, [t]),
    w.jsx(TI, {
      isPresent: t,
      childRef: d,
      sizeRef: p,
      pop: u,
      children: u === !1 ? e : D.cloneElement(e, { ref: g }),
    })
  );
}
const NI = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: o,
  custom: s,
  presenceAffectsLayout: u,
  mode: l,
  anchorX: d,
  anchorY: p,
  root: f,
}) => {
  const h = ah(bI),
    g = D.useId(),
    y = D.useRef(r),
    S = D.useRef(o);
  lh(() => {
    ((y.current = r), (S.current = o));
  });
  let x = !0,
    P = D.useMemo(
      () => (
        (x = !1),
        {
          id: g,
          initial: t,
          isPresent: r,
          custom: s,
          onExitComplete: (C) => {
            h.set(C, !0);
            for (const T of h.values()) if (!T) return;
            o && o();
          },
          register: (C) => (
            h.set(C, !1),
            () => {
              (h.delete(C), !y.current && !h.size && S.current?.());
            }
          ),
        }
      ),
      [r, h, o],
    );
  return (
    u && x && (P = { ...P }),
    D.useMemo(() => {
      h.forEach((C, T) => h.set(T, !1));
    }, [r]),
    D.useEffect(() => {
      !r && !h.size && o && o();
    }, [r]),
    (e = w.jsx(MI, {
      pop: l === "popLayout",
      isPresent: r,
      anchorX: d,
      anchorY: p,
      root: f,
      children: e,
    })),
    w.jsx(du.Provider, { value: P, children: e })
  );
};
function bI() {
  return new Map();
}
function Mw(e = !0) {
  const t = D.useContext(du);
  if (t === null) return [!0, null];
  const { isPresent: r, onExitComplete: o, register: s } = t,
    u = D.useId();
  D.useEffect(() => {
    if (e) return s(u);
  }, [e]);
  const l = D.useCallback(() => e && o && o(u), [u, o, e]);
  return !r && o ? [!1, l] : [!0];
}
const hl = (e) => e.key || "";
function b0(e) {
  const t = [];
  return (
    D.Children.forEach(e, (r) => {
      D.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const si = ({
    children: e,
    custom: t,
    initial: r = !0,
    onExitComplete: o,
    presenceAffectsLayout: s = !0,
    mode: u = "sync",
    propagate: l = !1,
    anchorX: d = "left",
    anchorY: p = "top",
    root: f,
  }) => {
    const [h, g] = Mw(l),
      y = D.useMemo(() => b0(e), [e]),
      S = l && !h ? [] : y.map(hl),
      x = D.useRef(!0),
      P = D.useRef(y),
      C = ah(() => new Map()),
      T = D.useRef(new Set()),
      [N, k] = D.useState(y),
      [M, I] = D.useState(y);
    lh(() => {
      ((x.current = !1), (P.current = y));
      for (let V = 0; V < M.length; V++) {
        const U = hl(M[V]);
        S.includes(U)
          ? (C.delete(U), T.current.delete(U))
          : C.get(U) !== !0 && C.set(U, !1);
      }
    }, [M, S.length, S.join("-")]);
    const b = [];
    if (y !== N) {
      let V = [...y];
      for (let U = 0; U < M.length; U++) {
        const K = M[U],
          Z = hl(K);
        S.includes(Z) || (V.splice(U, 0, K), b.push(K));
      }
      return (u === "wait" && b.length && (V = b), I(b0(V)), k(y), null);
    }
    const { forceRender: R } = D.useContext(sh);
    return w.jsx(w.Fragment, {
      children: M.map((V) => {
        const U = hl(V),
          K = l && !h ? !1 : y === M || S.includes(U),
          Z = () => {
            if (T.current.has(U)) return;
            if (C.has(U)) (T.current.add(U), C.set(U, !0));
            else return;
            let ee = !0;
            (C.forEach((J) => {
              J || (ee = !1);
            }),
              ee && (R?.(), I(P.current), l && g?.(), o && o()));
          };
        return w.jsx(
          NI,
          {
            isPresent: K,
            initial: !x.current || r ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: s,
            mode: u,
            root: f,
            onExitComplete: K ? void 0 : Z,
            anchorX: d,
            anchorY: p,
            children: V,
          },
          U,
        );
      }),
    });
  },
  Nw = D.createContext({ strict: !1 }),
  _0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let j0 = !1;
function _I() {
  if (j0) return;
  const e = {};
  for (const t in _0) e[t] = { isEnabled: (r) => _0[t].some((o) => !!r[o]) };
  (iw(e), (j0 = !0));
}
function bw() {
  return (_I(), pA());
}
function jI(e) {
  const t = bw();
  for (const r in e) t[r] = { ...t[r], ...e[r] };
  iw(t);
}
const AI = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Zl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    AI.has(e)
  );
}
let _w = (e) => !Zl(e);
function II(e) {
  typeof e == "function" && (_w = (t) => (t.startsWith("on") ? !Zl(t) : e(t)));
}
try {
  II(require("@emotion/is-prop-valid").default);
} catch {}
function DI(e, t, r) {
  const o = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      lt(e[s]) ||
      ((_w(s) ||
        (r === !0 && Zl(s)) ||
        (!t && !Zl(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (o[s] = e[s]));
  return o;
}
const gu = D.createContext({});
function RI(e, t) {
  if (mu(e)) {
    const { initial: r, animate: o } = e;
    return {
      initial: r === !1 || Ps(r) ? r : void 0,
      animate: Ps(o) ? o : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function LI(e) {
  const { initial: t, animate: r } = RI(e, D.useContext(gu));
  return D.useMemo(() => ({ initial: t, animate: r }), [A0(t), A0(r)]);
}
function A0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ih = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function jw(e, t, r) {
  for (const o in t) !lt(t[o]) && !dw(o, r) && (e[o] = t[o]);
}
function VI({ transformTemplate: e }, t) {
  return D.useMemo(() => {
    const r = Ih();
    return (_h(r, t, e), Object.assign({}, r.vars, r.style));
  }, [t]);
}
function zI(e, t) {
  const r = e.style || {},
    o = {};
  return (jw(o, r, e), Object.assign(o, VI(e, t)), o);
}
function OI(e, t) {
  const r = {},
    o = zI(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const Aw = () => ({ ...Ih(), attrs: {} });
function FI(e, t, r, o) {
  const s = D.useMemo(() => {
    const u = Aw();
    return (
      fw(u, t, pw(o), e.transformTemplate, e.style),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [t]);
  if (e.style) {
    const u = {};
    (jw(u, e.style, e), (s.style = { ...u, ...s.style }));
  }
  return s;
}
const $I = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Dh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!($I.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function BI(e, t, r, { latestValues: o }, s, u = !1, l) {
  const p = ((l ?? Dh(e)) ? FI : OI)(t, o, s, e),
    f = DI(t, typeof e == "string", u),
    h = e !== D.Fragment ? { ...f, ...p, ref: r } : {},
    { children: g } = t,
    y = D.useMemo(() => (lt(g) ? g.get() : g), [g]);
  return D.createElement(e, { ...h, children: y });
}
function HI({ scrapeMotionValuesFromProps: e, createRenderState: t }, r, o, s) {
  return { latestValues: UI(r, o, s, e), renderState: t() };
}
function UI(e, t, r, o) {
  const s = {},
    u = o(e, {});
  for (const y in u) s[y] = Nl(u[y]);
  let { initial: l, animate: d } = e;
  const p = mu(e),
    f = nw(e);
  t &&
    f &&
    !p &&
    e.inherit !== !1 &&
    (l === void 0 && (l = t.initial), d === void 0 && (d = t.animate));
  let h = r ? r.initial === !1 : !1;
  h = h || l === !1;
  const g = h ? d : l;
  if (g && typeof g != "boolean" && !pu(g)) {
    const y = Array.isArray(g) ? g : [g];
    for (let S = 0; S < y.length; S++) {
      const x = kh(e, y[S]);
      if (x) {
        const { transitionEnd: P, transition: C, ...T } = x;
        for (const N in T) {
          let k = T[N];
          if (Array.isArray(k)) {
            const M = h ? k.length - 1 : 0;
            k = k[M];
          }
          k !== null && (s[N] = k);
        }
        for (const N in P) s[N] = P[N];
      }
    }
  }
  return s;
}
const Iw = (e) => (t, r) => {
    const o = D.useContext(gu),
      s = D.useContext(du),
      u = () => HI(e, t, o, s);
    return r ? u() : ah(u);
  },
  WI = Iw({ scrapeMotionValuesFromProps: jh, createRenderState: Ih }),
  GI = Iw({ scrapeMotionValuesFromProps: mw, createRenderState: Aw }),
  XI = Symbol.for("motionComponentSymbol");
function YI(e, t, r) {
  const o = D.useRef(r);
  D.useInsertionEffect(() => {
    o.current = r;
  });
  const s = D.useRef(null);
  return D.useCallback(
    (u) => {
      (u && e.onMount?.(u), t && (u ? t.mount(u) : t.unmount()));
      const l = o.current;
      if (typeof l == "function")
        if (u) {
          const d = l(u);
          typeof d == "function" && (s.current = d);
        } else s.current ? (s.current(), (s.current = null)) : l(u);
      else l && (l.current = u);
    },
    [t],
  );
}
const Dw = D.createContext({});
function Oi(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function KI(e, t, r, o, s, u) {
  const { visualElement: l } = D.useContext(gu),
    d = D.useContext(Nw),
    p = D.useContext(du),
    f = D.useContext(Ah),
    h = f.reducedMotion,
    g = f.skipAnimations,
    y = D.useRef(null),
    S = D.useRef(!1);
  ((o = o || d.renderer),
    !y.current &&
      o &&
      ((y.current = o(e, {
        visualState: t,
        parent: l,
        props: r,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: h,
        skipAnimations: g,
        isSVG: u,
      })),
      S.current && y.current && (y.current.manuallyAnimateOnMount = !0)));
  const x = y.current,
    P = D.useContext(Dw);
  x &&
    !x.projection &&
    s &&
    (x.type === "html" || x.type === "svg") &&
    ZI(y.current, r, s, P);
  const C = D.useRef(!1);
  D.useInsertionEffect(() => {
    x && C.current && x.update(r, p);
  });
  const T = r[Ux],
    N = D.useRef(
      !!T &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(T) &&
        window.MotionHasOptimisedAnimation?.(T),
    );
  return (
    lh(() => {
      ((S.current = !0),
        x &&
          ((C.current = !0),
          (window.MotionIsMounted = !0),
          x.updateFeatures(),
          x.scheduleRenderMicrotask(),
          N.current && x.animationState && x.animationState.animateChanges()));
    }),
    D.useEffect(() => {
      x &&
        (!N.current && x.animationState && x.animationState.animateChanges(),
        N.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(T);
          }),
          (N.current = !1)),
        (x.enteringChildren = void 0));
    }),
    x
  );
}
function ZI(e, t, r, o) {
  const {
    layoutId: s,
    layout: u,
    drag: l,
    dragConstraints: d,
    layoutScroll: p,
    layoutRoot: f,
    layoutAnchor: h,
    layoutCrossfade: g,
  } = t;
  ((e.projection = new r(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Rw(e.parent),
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: u,
      alwaysMeasureLayout: !!l || (d && Oi(d)),
      visualElement: e,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: o,
      crossfade: g,
      layoutScroll: p,
      layoutRoot: f,
      layoutAnchor: h,
    }));
}
function Rw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Rw(e.parent);
}
function Od(e, { forwardMotionProps: t = !1, type: r } = {}, o, s) {
  o && jI(o);
  const u = r ? r === "svg" : Dh(e),
    l = u ? GI : WI;
  function d(f, h) {
    let g;
    const y = { ...D.useContext(Ah), ...f, layoutId: qI(f) },
      { isStatic: S } = y,
      x = LI(f),
      P = l(f, S);
    if (!S && typeof window < "u") {
      QI();
      const C = JI(y);
      ((g = C.MeasureLayout),
        (x.visualElement = KI(e, P, y, s, C.ProjectionNode, u)));
    }
    return w.jsxs(gu.Provider, {
      value: x,
      children: [
        g && x.visualElement
          ? w.jsx(g, { visualElement: x.visualElement, ...y })
          : null,
        BI(e, f, YI(P, x.visualElement, h), P, S, t, u),
      ],
    });
  }
  d.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const p = D.forwardRef(d);
  return ((p[XI] = e), p);
}
function qI({ layoutId: e }) {
  const t = D.useContext(sh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function QI(e, t) {
  D.useContext(Nw).strict;
}
function JI(e) {
  const t = bw(),
    { drag: r, layout: o } = t;
  if (!r && !o) return {};
  const s = { ...r, ...o };
  return {
    MeasureLayout:
      r?.isEnabled(e) || o?.isEnabled(e) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode,
  };
}
function e3(e, t) {
  if (typeof Proxy > "u") return Od;
  const r = new Map(),
    o = (u, l) => Od(u, l, e, t),
    s = (u, l) => o(u, l);
  return new Proxy(s, {
    get: (u, l) =>
      l === "create"
        ? o
        : (r.has(l) || r.set(l, Od(l, void 0, e, t)), r.get(l)),
  });
}
const t3 = (e, t) =>
  (t.isSVG ?? Dh(e))
    ? new jA(t)
    : new PA(t, { allowProjection: e !== D.Fragment });
class n3 extends kr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = LA(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    pu(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let r3 = 0;
class i3 extends kr {
  constructor() {
    (super(...arguments), (this.id = r3++), (this.isExitComplete = !1));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    if (t && o === !1) {
      if (this.isExitComplete) {
        const { initial: u, custom: l } = this.node.getProps();
        if (
          typeof u == "string" ||
          (typeof u == "object" && u !== null && !Array.isArray(u))
        ) {
          const d = Jr(this.node, u, l);
          if (d) {
            const { transition: p, transitionEnd: f, ...h } = d;
            for (const g in h) this.node.getValue(g)?.jump(h[g]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const s = this.node.animationState.setActive("exit", !t);
    r &&
      !t &&
      s.then(() => {
        ((this.isExitComplete = !0), r(this.id));
      });
  }
  mount() {
    const { register: t, onExitComplete: r } = this.node.presenceContext || {};
    (r && r(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const o3 = { animation: { Feature: n3 }, exit: { Feature: i3 } };
function Vs(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const s3 = (e) => (t) => Th(t) && e(t, Vs(t));
function ps(e, t, r, o) {
  return Ts(e, t, s3(r), o);
}
const Lw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  I0 = (e, t) => Math.abs(e - t);
function a3(e, t) {
  const r = I0(e.x, t.x),
    o = I0(e.y, t.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
const D0 = new Set(["auto", "scroll"]);
class Vw {
  constructor(
    t,
    r,
    {
      transformPagePoint: o,
      contextWindow: s = window,
      dragSnapToOrigin: u = !1,
      distanceThreshold: l = 3,
      element: d,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (x) => {
        this.handleScroll(x.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = pl(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const x = Fd(this.lastMoveEventInfo, this.history),
          P = this.startEvent !== null,
          C = a3(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!P && !C) return;
        const { point: T } = x,
          { timestamp: N } = at;
        this.history.push({ ...T, timestamp: N });
        const { onStart: k, onMove: M } = this.handlers;
        (P ||
          (k && k(this.lastMoveEvent, x),
          (this.startEvent = this.lastMoveEvent)),
          M && M(this.lastMoveEvent, x));
      }),
      (this.handlePointerMove = (x, P) => {
        ((this.lastMoveEvent = x),
          (this.lastRawMoveEventInfo = P),
          (this.lastMoveEventInfo = pl(P, this.transformPagePoint)),
          Le.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (x, P) => {
        this.end();
        const { onEnd: C, onSessionEnd: T, resumeAnimation: N } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && N && N(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = Fd(
          x.type === "pointercancel"
            ? this.lastMoveEventInfo
            : pl(P, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && C && C(x, k), T && T(x, k));
      }),
      !Th(t))
    )
      return;
    ((this.dragSnapToOrigin = u),
      (this.handlers = r),
      (this.transformPagePoint = o),
      (this.distanceThreshold = l),
      (this.contextWindow = s || window));
    const p = Vs(t),
      f = pl(p, this.transformPagePoint),
      { point: h } = f,
      { timestamp: g } = at;
    this.history = [{ ...h, timestamp: g }];
    const { onSessionStart: y } = r;
    y && y(t, Fd(f, this.history));
    const S = { passive: !0, capture: !0 };
    ((this.removeListeners = Ds(
      ps(this.contextWindow, "pointermove", this.handlePointerMove, S),
      ps(this.contextWindow, "pointerup", this.handlePointerUp, S),
      ps(this.contextWindow, "pointercancel", this.handlePointerUp, S),
    )),
      d && this.startScrollTracking(d));
  }
  startScrollTracking(t) {
    let r = t.parentElement;
    for (; r; ) {
      const o = getComputedStyle(r);
      ((D0.has(o.overflowX) || D0.has(o.overflowY)) &&
        this.scrollPositions.set(r, { x: r.scrollLeft, y: r.scrollTop }),
        (r = r.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const r = this.scrollPositions.get(t);
    if (!r) return;
    const o = t === window,
      s = o
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      u = { x: s.x - r.x, y: s.y - r.y };
    (u.x === 0 && u.y === 0) ||
      (o
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += u.x),
          (this.lastMoveEventInfo.point.y += u.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= u.x), (this.history[0].y -= u.y)),
      this.scrollPositions.set(t, s),
      Le.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Sr(this.updatePoint));
  }
}
function pl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function R0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Fd({ point: e }, t) {
  return {
    point: e,
    delta: R0(e, zw(t)),
    offset: R0(e, l3(t)),
    velocity: u3(t, 0.1),
  };
}
function l3(e) {
  return e[0];
}
function zw(e) {
  return e[e.length - 1];
}
function u3(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    o = null;
  const s = zw(e);
  for (; r >= 0 && ((o = e[r]), !(s.timestamp - o.timestamp > zt(t))); ) r--;
  if (!o) return { x: 0, y: 0 };
  o === e[0] &&
    e.length > 2 &&
    s.timestamp - o.timestamp > zt(t) * 2 &&
    (o = e[1]);
  const u = Kt(s.timestamp - o.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const l = { x: (s.x - o.x) / u, y: (s.y - o.y) / u };
  return (l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l);
}
function c3(e, { min: t, max: r }, o) {
  return (
    t !== void 0 && e < t
      ? (e = o ? Re(t, e, o.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = o ? Re(r, e, o.max) : Math.min(e, r)),
    e
  );
}
function L0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function d3(e, { top: t, left: r, bottom: o, right: s }) {
  return { x: L0(e.x, r, s), y: L0(e.y, t, o) };
}
function V0(e, t) {
  let r = t.min - e.min,
    o = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([r, o] = [o, r]),
    { min: r, max: o }
  );
}
function f3(e, t) {
  return { x: V0(e.x, t.x), y: V0(e.y, t.y) };
}
function h3(e, t) {
  let r = 0.5;
  const o = vt(e),
    s = vt(t);
  return (
    s > o
      ? (r = Es(t.min, t.max - o, e.min))
      : o > s && (r = Es(e.min, e.max - s, t.min)),
    Mn(0, 1, r)
  );
}
function p3(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const If = 0.35;
function m3(e = If) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = If),
    { x: z0(e, "left", "right"), y: z0(e, "top", "bottom") }
  );
}
function z0(e, t, r) {
  return { min: O0(e, t), max: O0(e, r) };
}
function O0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const g3 = new WeakMap();
class y3 {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = tt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: r = !1, distanceThreshold: o } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const u = (g) => {
        (r && this.snapToCursor(Vs(g).point), this.stopAnimation());
      },
      l = (g, y) => {
        const { drag: S, dragPropagation: x, onDragStart: P } = this.getProps();
        if (
          S &&
          !x &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Uj(S)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = g),
          (this.latestPanInfo = y),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Sn((T) => {
            let N = this.getAxisMotionValue(T).get() || 0;
            if (Tn.test(N)) {
              const { projection: k } = this.visualElement;
              if (k && k.layout) {
                const M = k.layout.layoutBox[T];
                M && (N = vt(M) * (parseFloat(N) / 100));
              }
            }
            this.originPoint[T] = N;
          }),
          P && Le.update(() => P(g, y), !1, !0),
          Ef(this.visualElement, "transform"));
        const { animationState: C } = this.visualElement;
        C && C.setActive("whileDrag", !0);
      },
      d = (g, y) => {
        ((this.latestPointerEvent = g), (this.latestPanInfo = y));
        const {
          dragPropagation: S,
          dragDirectionLock: x,
          onDirectionLock: P,
          onDrag: C,
        } = this.getProps();
        if (!S && !this.openDragLock) return;
        const { offset: T } = y;
        if (x && this.currentDirection === null) {
          ((this.currentDirection = x3(T)),
            this.currentDirection !== null && P && P(this.currentDirection));
          return;
        }
        (this.updateAxis("x", y.point, T),
          this.updateAxis("y", y.point, T),
          this.visualElement.render(),
          C && Le.update(() => C(g, y), !1, !0));
      },
      p = (g, y) => {
        ((this.latestPointerEvent = g),
          (this.latestPanInfo = y),
          this.stop(g, y),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      f = () => {
        const { dragSnapToOrigin: g } = this.getProps();
        (g || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: h } = this.getProps();
    this.panSession = new Vw(
      t,
      {
        onSessionStart: u,
        onStart: l,
        onMove: d,
        onSessionEnd: p,
        resumeAnimation: f,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: h,
        distanceThreshold: o,
        contextWindow: Lw(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, r) {
    const o = t || this.latestPointerEvent,
      s = r || this.latestPanInfo,
      u = this.isDragging;
    if ((this.cancel(), !u || !s || !o)) return;
    const { velocity: l } = s;
    this.startAnimation(l);
    const { onDragEnd: d } = this.getProps();
    d && Le.postRender(() => d(o, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: o } = this.getProps();
    (!o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      r && r.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, r, o) {
    const { drag: s } = this.getProps();
    if (!o || !ml(t, s, this.currentDirection)) return;
    const u = this.getAxisMotionValue(t);
    let l = this.originPoint[t] + o[t];
    (this.constraints &&
      this.constraints[t] &&
      (l = c3(l, this.constraints[t], this.elastic[t])),
      u.set(l));
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      s = this.constraints;
    (t && Oi(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && o
        ? (this.constraints = d3(o.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = m3(r)),
      s !== this.constraints &&
        !Oi(t) &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Sn((u) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(u) &&
            (this.constraints[u] = p3(o.layoutBox[u], this.constraints[u]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Oi(t)) return !1;
    const o = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    s.root && ((s.root.scroll = void 0), s.root.updateScroll());
    const u = xA(o, s.root, this.visualElement.getTransformPagePoint());
    let l = f3(s.layout.layoutBox, u);
    if (r) {
      const d = r(gA(l));
      ((this.hasMutatedConstraints = !!d), d && (l = sw(d)));
    }
    return l;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: o,
        dragElastic: s,
        dragTransition: u,
        dragSnapToOrigin: l,
        onDragTransitionEnd: d,
      } = this.getProps(),
      p = this.constraints || {},
      f = Sn((h) => {
        if (!ml(h, r, this.currentDirection)) return;
        let g = (p && p[h]) || {};
        (l === !0 || l === h) && (g = { min: 0, max: 0 });
        const y = s ? 200 : 1e6,
          S = s ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: o ? t[h] : 0,
            bounceStiffness: y,
            bounceDamping: S,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...g,
          };
        return this.startAxisValueAnimation(h, x);
      });
    return Promise.all(f).then(d);
  }
  startAxisValueAnimation(t, r) {
    const o = this.getAxisMotionValue(t);
    return (
      Ef(this.visualElement, t),
      o.start(Sh(t, o, 0, r, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Sn((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const r = `_drag${t.toUpperCase()}`,
      s = this.visualElement.getProps()[r];
    return (
      s ||
      this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0)
    );
  }
  snapToCursor(t) {
    Sn((r) => {
      const { drag: o } = this.getProps();
      if (!ml(r, o, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        u = this.getAxisMotionValue(r);
      if (s && s.layout) {
        const { min: l, max: d } = s.layout.layoutBox[r],
          p = u.get() || 0;
        u.set(t[r] - Re(l, d, 0.5) + p);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!Oi(r) || !o || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Sn((l) => {
      const d = this.getAxisMotionValue(l);
      if (d && this.constraints !== !1) {
        const p = d.get();
        s[l] = h3({ min: p, max: p }, this.constraints[l]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Sn((l) => {
        if (!ml(l, t, null)) return;
        const d = this.getAxisMotionValue(l),
          { min: p, max: f } = this.constraints[l];
        d.set(Re(p, f, s[l]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    g3.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = ps(t, "pointerdown", (f) => {
        const { drag: h, dragListener: g = !0 } = this.getProps(),
          y = f.target,
          S = y !== t && Zj(y);
        h && g && !S && this.start(f);
      });
    let o;
    const s = () => {
        const { dragConstraints: f } = this.getProps();
        Oi(f) &&
          f.current &&
          ((this.constraints = this.resolveRefConstraints()),
          o ||
            (o = v3(t, f.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: u } = this.visualElement,
      l = u.addEventListener("measure", s);
    (u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
      Le.read(s));
    const d = Ts(window, "resize", () => this.scalePositionWithinConstraints()),
      p = u.addEventListener(
        "didUpdate",
        ({ delta: f, hasLayoutChanged: h }) => {
          this.isDragging &&
            h &&
            (Sn((g) => {
              const y = this.getAxisMotionValue(g);
              y &&
                ((this.originPoint[g] += f[g].translate),
                y.set(y.get() + f[g].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (d(), r(), l(), p && p(), o && o());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: o = !1,
        dragPropagation: s = !1,
        dragConstraints: u = !1,
        dragElastic: l = If,
        dragMomentum: d = !0,
      } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: o,
      dragPropagation: s,
      dragConstraints: u,
      dragElastic: l,
      dragMomentum: d,
    };
  }
}
function F0(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function v3(e, t, r) {
  const o = Xy(e, F0(r)),
    s = Xy(t, F0(r));
  return () => {
    (o(), s());
  };
}
function ml(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function x3(e, t = 10) {
  let r = null;
  return (Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r);
}
class w3 extends kr {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Zt),
      (this.removeListeners = Zt),
      (this.controls = new y3(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Zt));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: r } = this.node.prevProps || {};
    t !== r &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const $d = (e) => (t, r) => {
  e && Le.update(() => e(t, r), !1, !0);
};
class S3 extends kr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Zt));
  }
  onPointerDown(t) {
    this.session = new Vw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Lw(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: o,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: $d(t),
      onStart: $d(r),
      onMove: $d(o),
      onEnd: (u, l) => {
        (delete this.session, s && Le.postRender(() => s(u, l)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ps(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Bd = !1;
class k3 extends D.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: o,
        layoutId: s,
      } = this.props,
      { projection: u } = t;
    (u &&
      (r.group && r.group.add(u),
      o && o.register && s && o.register(u),
      Bd && u.root.didUpdate(),
      u.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      u.setOptions({
        ...u.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (bl.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: o,
        drag: s,
        isPresent: u,
      } = this.props,
      { projection: l } = o;
    return (
      l &&
        ((l.isPresent = u),
        t.layoutDependency !== r &&
          l.setOptions({ ...l.options, layoutDependency: r }),
        (Bd = !0),
        s || t.layoutDependency !== r || r === void 0 || t.isPresent !== u
          ? l.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== u &&
          (u
            ? l.promote()
            : l.relegate() ||
              Le.postRender(() => {
                const d = l.getStack();
                (!d || !d.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: r } = this.props,
      { projection: o } = t;
    o &&
      ((o.options.layoutAnchor = r),
      o.root.didUpdate(),
      Ph.postRender(() => {
        !o.currentAnimation && o.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: o,
      } = this.props,
      { projection: s } = t;
    ((Bd = !0),
      s &&
        (s.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(s),
        o && o.deregister && o.deregister(s)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ow(e) {
  const [t, r] = Mw(),
    o = D.useContext(sh);
  return w.jsx(k3, {
    ...e,
    layoutGroup: o,
    switchLayoutGroup: D.useContext(Dw),
    isPresent: t,
    safeToRemove: r,
  });
}
const E3 = {
  pan: { Feature: S3 },
  drag: { Feature: w3, ProjectionNode: Tw, MeasureLayout: Ow },
};
function $0(e, t, r) {
  const { props: o } = e;
  e.animationState &&
    o.whileHover &&
    e.animationState.setActive("whileHover", r === "Start");
  const s = "onHover" + r,
    u = o[s];
  u && Le.postRender(() => u(t, Vs(t)));
}
class C3 extends kr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Gj(
        t,
        (r, o) => ($0(this.node, o, "Start"), (s) => $0(this.node, s, "End")),
      ));
  }
  unmount() {}
}
class P3 extends kr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ds(
      Ts(this.node.current, "focus", () => this.onFocus()),
      Ts(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function B0(e, t, r) {
  const { props: o } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    o.whileTap &&
    e.animationState.setActive("whileTap", r === "Start");
  const s = "onTap" + (r === "End" ? "" : r),
    u = o[s];
  u && Le.postRender(() => u(t, Vs(t)));
}
class T3 extends kr {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: r, propagate: o } = this.node.props;
    this.unmount = Qj(
      t,
      (s, u) => (
        B0(this.node, u, "Start"),
        (l, { success: d }) => B0(this.node, l, d ? "End" : "Cancel")
      ),
      { useGlobalTarget: r, stopPropagation: o?.tap === !1 },
    );
  }
  unmount() {}
}
const Df = new WeakMap(),
  Hd = new WeakMap(),
  M3 = (e) => {
    const t = Df.get(e.target);
    t && t(e);
  },
  N3 = (e) => {
    e.forEach(M3);
  };
function b3({ root: e, ...t }) {
  const r = e || document;
  Hd.has(r) || Hd.set(r, {});
  const o = Hd.get(r),
    s = JSON.stringify(t);
  return (
    o[s] || (o[s] = new IntersectionObserver(N3, { root: e, ...t })),
    o[s]
  );
}
function _3(e, t, r) {
  const o = b3(t);
  return (
    Df.set(e, r),
    o.observe(e),
    () => {
      (Df.delete(e), o.unobserve(e));
    }
  );
}
const j3 = { some: 0, all: 1 };
class A3 extends kr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: o, amount: s = "some", once: u } = t,
      l = {
        root: r ? r.current : void 0,
        rootMargin: o,
        threshold: typeof s == "number" ? s : j3[s],
      },
      d = (p) => {
        const { isIntersecting: f } = p;
        if (
          this.isInView === f ||
          ((this.isInView = f), u && !f && this.hasEnteredView)
        )
          return;
        (f && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", f));
        const { onViewportEnter: h, onViewportLeave: g } = this.node.getProps(),
          y = f ? h : g;
        y && y(p);
      };
    this.stopObserver = _3(this.node.current, l, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(I3(t, r)) && this.startObserver();
  }
  unmount() {
    (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
  }
}
function I3({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const D3 = {
    inView: { Feature: A3 },
    tap: { Feature: T3 },
    focus: { Feature: P3 },
    hover: { Feature: C3 },
  },
  R3 = { layout: { ProjectionNode: Tw, MeasureLayout: Ow } },
  L3 = { ...o3, ...D3, ...E3, ...R3 },
  xt = e3(L3, t3),
  V3 = {
    AlignCenterHorizontal: D1,
    AlignCenterVertical: R1,
    AlignHorizontalDistributeCenter: L1,
    AlignLeft: V1,
    AlignStartVertical: VN,
    Blend: zN,
    Calculator: ON,
    Check: lu,
    ChevronDown: z1,
    ChevronLeft: O1,
    ChevronRight: FN,
    CircleOff: $N,
    CircleStop: F1,
    Clock3: uu,
    Contrast: BN,
    Crop: HN,
    Download: nh,
    FileDown: $1,
    FileUp: B1,
    FolderOpen: GN,
    Gauge: XN,
    GripVertical: H1,
    ImagePlus: YN,
    Info: rh,
    Layers3: ZN,
    ListFilter: U1,
    LoaderCircle: W1,
    Menu: G1,
    Moon: of,
    MoreHorizontal: UN,
    Palette: QN,
    PanelRightClose: X1,
    PanelRightOpen: JN,
    PanelTopOpen: eb,
    Pause: Y1,
    Play: K1,
    Plus: Z1,
    Redo2: q1,
    RotateCw: tb,
    Route: Q1,
    Save: nb,
    Scaling: rb,
    ScanLine: ib,
    Search: sf,
    Settings2: ob,
    SlidersHorizontal: sb,
    Sparkles: ab,
    Split: lb,
    StickyNote: J1,
    Sun: af,
    SunMedium: ub,
    Trash2: ex,
    Undo2: tx,
    X: cu,
    Zap: ih,
  };
function Rh({ name: e, ...t }) {
  const r = V3[e] ?? ih;
  return w.jsx(r, { "aria-hidden": "true", ...t });
}
function z3({ status: e }) {
  return e === "running"
    ? w.jsx(W1, { size: 12, className: "animate-spin" })
    : e === "queued"
      ? w.jsx(uu, { size: 12 })
      : e === "success"
        ? w.jsx(lu, { size: 12 })
        : e === "error"
          ? w.jsx(th, { size: 12 })
          : e === "cached"
            ? w.jsx(ih, { size: 12 })
            : w.jsx("span", { className: "status-dot" });
}
function O3({ parameter: e, value: t, onChange: r }) {
  return e.control === "maskPainter"
    ? w.jsx("button", {
        type: "button",
        className: `mask-editor-launch nodrag ${t ? "ready" : ""}`,
        onPointerDown: (o) => o.stopPropagation(),
        onClick: (o) => {
          o.stopPropagation();
          const nodeId = o.currentTarget.closest(".react-flow__node")?.dataset.id;
          nodeId && window.dispatchEvent(new CustomEvent("fluxel:mask-editor", { detail: { nodeId } }));
        },
        children: t ? "Edit painted mask" : "Paint required mask",
      })
    : e.control === "range"
    ? w.jsxs("div", {
        className: "inline-param nodrag",
        onPointerDown: (o) => o.stopPropagation(),
        children: [
          w.jsxs("div", {
            className: "inline-param-label",
            children: [
              w.jsx("span", { children: e.label }),
              w.jsxs("code", { children: [t, e.unit] }),
            ],
          }),
          w.jsx("input", {
            "aria-label": e.label,
            type: "range",
            min: e.min,
            max: e.max,
            step: e.step,
            value: Number(t),
            onChange: (o) => r(Number(o.target.value)),
          }),
        ],
      })
    : e.control === "number"
      ? w.jsxs("label", {
          className: "inline-number nodrag",
          onPointerDown: (o) => o.stopPropagation(),
          children: [
            w.jsx("span", { children: e.label }),
            w.jsxs("span", {
              children: [
                w.jsx("input", {
                  type: "number",
                  min: e.min,
                  max: e.max,
                  step: e.step,
                  value: Number(t),
                  onChange: (o) => r(Number(o.target.value)),
                }),
                e.unit,
              ],
            }),
          ],
        })
      : e.control === "select"
        ? w.jsxs("label", {
            className: "inline-number nodrag",
            onPointerDown: (o) => o.stopPropagation(),
            children: [
              w.jsx("span", { children: e.label }),
              w.jsx("select", {
                value: String(t),
                onChange: (o) => {
                  const s = e.options?.find(
                    (u) => String(u.value) === o.target.value,
                  );
                  r(s?.value ?? o.target.value);
                },
                children: e.options?.map((o) =>
                  w.jsx(
                    "option",
                    { value: String(o.value), children: o.label },
                    String(o.value),
                  ),
                ),
              }),
            ],
          })
        : e.control === "toggle"
          ? w.jsxs("button", {
              type: "button",
              className: `inline-toggle nodrag ${t ? "active" : ""}`,
              onPointerDown: (o) => o.stopPropagation(),
              onClick: () => r(!t),
              children: [w.jsx("span", { children: e.label }), w.jsx("i", {})],
            })
          : e.control === "color"
            ? w.jsxs("label", {
                className: "inline-color nodrag",
                children: [
                  w.jsx("span", { children: e.label }),
                  w.jsx("input", {
                    type: "color",
                    value: String(t),
                    onChange: (o) => r(o.target.value),
                  }),
                ],
              })
            : null;
}
function F3({ id: e, data: t, selected: r, dragging: o }) {
  const s = Gn(t.nodeType),
    u = fe((f) => f.setNodeParam),
    l = fe((f) => f.beginGraphEdit),
    m = fe((f) => f.toggleNodeBypass),
    a = fe((f) => f.toggleFrame),
    c = fe((f) => f.ungroupFrame),
    v = fe((f) => f.activeGraph().nodes.filter((h) => h.parentId === e).length),
    graph = fe((f) => f.activeGraph()),
    batchMode = graph.nodes.some((f) => f.data.nodeType === "batchInput"),
    missingParameters = t.bypassed ? [] : s.params.filter((f) => (f.required || (batchMode && f.requiredForBatch)) && !String(t.params[f.id] ?? "").trim()),
    missingInputs = t.bypassed ? [] : s.inputs.filter((f) => !f.optional && !graph.edges.some((h) => h.target === e && (h.targetHandle || s.inputs[0]?.id) === f.id)),
    missingRequired = [...missingParameters.map((f) => f.label), ...missingInputs.map((f) => `${f.label} connection`)],
    d = s.params
      .filter((f) => f.inline && isParameterVisible(f, t.params, s))
      .slice(0, t.nodeType === "resize" && t.params.mode === "pixels" ? 3 : 2),
    p = t.nodeType === "note" ? String(t.params.color) : Zi[t.category];
  return t.nodeType === "frame"
    ? w.jsxs(xt.div, {
        className: `frame-node ${t.params.collapsed ? "collapsed" : ""} ${r ? "selected" : ""}`,
        style: { "--node-accent": String(t.params.color) },
        animate: { scale: o ? 1.008 : 1 },
        transition: { type: "spring", stiffness: 420, damping: 28 },
        children: [
          w.jsxs("div", {
            className: "frame-node-head",
            children: [
              w.jsx(Rh, { name: "Layers3", size: 15 }),
              w.jsxs("span", {
                children: [
                  w.jsx("strong", { children: String(t.params.title) }),
                  w.jsxs("small", { children: [v, " nodes"] }),
                ],
              }),
              w.jsx("button", {
                className: "nodrag",
                onClick: (f) => {
                  (f.stopPropagation(), a(e));
                },
                "aria-label": t.params.collapsed ? "Expand frame" : "Collapse frame",
                children: w.jsx(Rh, { name: t.params.collapsed ? "ChevronRight" : "ChevronDown", size: 14 }),
              }),
              w.jsx("button", {
                className: "nodrag",
                onClick: (f) => {
                  (f.stopPropagation(), c(e));
                },
                "aria-label": "Ungroup frame",
                children: w.jsx(cu, { size: 13 }),
              }),
            ],
          }),
          !t.params.collapsed && w.jsx("div", { className: "frame-node-grid" }),
        ],
      })
    : t.nodeType === "reroute"
    ? w.jsxs("div", {
        className: `reroute-node ${r ? "selected" : ""}`,
        children: [
          w.jsx(vr, {
            type: "target",
            position: we.Left,
            id: "value",
            style: { background: Hi.any },
          }),
          w.jsx(Q1, { size: 14 }),
          w.jsx(vr, {
            type: "source",
            position: we.Right,
            id: "value",
            style: { background: Hi.any },
          }),
        ],
      })
    : t.nodeType === "note"
      ? w.jsxs(xt.div, {
          className: `note-node ${r ? "selected" : ""}`,
          style: { "--node-accent": p },
          animate: { scale: o ? 1.025 : 1 },
          transition: { type: "spring", stiffness: 420, damping: 28 },
          children: [
            w.jsxs("div", {
              className: "note-node-head",
              children: [
                w.jsx(J1, { size: 15 }),
                w.jsx("span", { children: "Comment" }),
              ],
            }),
            w.jsx("p", { children: String(t.params.text) }),
            w.jsx("div", {
              className: "note-node-color",
              style: { background: p },
            }),
          ],
        })
      : w.jsxs(xt.div, {
        className: `fluxel-node state-${t.executionState} ${missingRequired.length ? "has-missing-required" : ""} ${t.bypassed ? "is-bypassed" : ""} ${r ? "selected" : ""} ${o ? "dragging" : ""}`,
          style: { "--node-accent": p },
          animate: { scale: o ? 1.025 : 1 },
          transition: { type: "spring", stiffness: 420, damping: 28 },
          children: [
            w.jsx("div", { className: "node-accent" }),
            s.inputs.map((f, h) =>
              w.jsxs(
                "div",
                {
                  className: "port-wrap port-in",
                  style: { top: `${((h + 1) / (s.inputs.length + 1)) * 100}%` },
                  children: [
                    w.jsx("span", { children: f.label }),
                    w.jsx(vr, {
                      type: "target",
                      position: we.Left,
                      id: f.id,
                      className: `port port-${f.type}`,
                      style: { background: Hi[f.type] },
                    }),
                  ],
                },
                f.id,
              ),
            ),
            s.outputs.map((f, h) =>
              w.jsxs(
                "div",
                {
                  className: "port-wrap port-out",
                  style: {
                    top: `${((h + 1) / (s.outputs.length + 1)) * 100}%`,
                  },
                  children: [
                    w.jsx("span", { children: f.label }),
                    w.jsx(vr, {
                      type: "source",
                      position: we.Right,
                      id: f.id,
                      className: `port port-${f.type}`,
                      style: { background: Hi[f.type] },
                    }),
                  ],
                },
                f.id,
              ),
            ),
            w.jsxs("div", {
              className: "node-header",
              children: [
                w.jsx("div", {
                  className: "node-icon",
                  children: w.jsx(Rh, { name: s.icon, size: 16 }),
                }),
                w.jsxs("div", {
                  className: "node-title",
                  children: [
                    w.jsx("strong", {
                      children:
                        t.nodeType === "macro"
                          ? String(t.params.title || "Macro")
                          : t.label,
                    }),
                    w.jsx("span", {
                      children: t.bypassed
                        ? "bypassed"
                        : t.nodeType === "macro"
                          ? `${t.macro?.nodes?.length ?? 0} internal nodes`
                        : t.duration !== void 0
                          ? `${t.category} · ${t.duration}ms`
                          : t.category,
                    }),
                  ],
                }),
                s.inputs.length > 0 && s.outputs.length > 0 &&
                  w.jsx("button", {
                    className: `node-bypass nodrag ${t.bypassed ? "active" : ""}`,
                    title: t.bypassed ? "Enable node (B)" : "Bypass node (B)",
                    "aria-label": t.bypassed ? "Enable node" : "Bypass node",
                    onPointerDown: (f) => f.stopPropagation(),
                    onClick: (f) => {
                      (f.stopPropagation(), m(e));
                    },
                    children: w.jsx(Rh, { name: "CircleOff", size: 13 }),
                  }),
                missingRequired.length > 0 &&
                  w.jsx("div", {
                    className: "node-required-warning",
                    title: `Required: ${missingRequired.join(", ")}`,
                    "aria-label": `Missing required value: ${missingRequired.join(", ")}`,
                    children: w.jsx(Rh, { name: "TriangleAlert", size: 14 }),
                  }),
                w.jsx("div", {
                  className: `node-status status-${t.executionState}`,
                  title: t.executionState,
                  children: w.jsx(z3, { status: t.executionState }),
                }),
              ],
            }),
            w.jsx("div", {
              className: "node-body",
              children: w.jsxs(w.Fragment, { children: [
                ["aiUpscale", "aiDepthMap", "aiGenerate", "aiEdit"].includes(t.nodeType) && typeof t.progress === "number" &&
                  w.jsxs("div", { className: "ai-node-progress", children: [
                    w.jsx("span", { style: { width: `${Math.round(t.progress * 100)}%` } }),
                    w.jsx("small", {
                      title: t.progressLabel || undefined,
                      children: t.progressLabel
                        ? `${t.progressLabel} · ${Math.round(t.progress * 100)}%`
                        : `${Math.round(t.progress * 100)}%`,
                    }),
                  ] }),
                d.length
                ? d.map((f) =>
                    w.jsx(
                      O3,
                      {
                        parameter: f,
                        value: t.params[f.id],
                        onChange: (h) => {
                          (l(), u(e, f.id, h, !1));
                        },
                      },
                      f.id,
                    ),
                  )
                : w.jsx("p", {
                    className: "node-description",
                    children: s.description,
                  }),
              ] }),
            }),
            t.error &&
              w.jsx("div", { className: "node-error", children: t.error }),
          ],
        });
}
const aD = ["all", "input", "transform", "filter", "ai", "logic", "output", "utility"];
function sD({ menu: e, onClose: t, onPick: r }) {
  const [o, s] = D.useState(""),
    [u, l] = D.useState("all"),
    d = D.useMemo(() => {
      if (!e?.connection) return lf.filter((g) => !g.requiresPack || installedAIPackIds.has(g.requiresPack));
      const { handleType: f, portType: h } = e.connection;
      return lf.filter((g) =>
        (!g.requiresPack || installedAIPackIds.has(g.requiresPack)) &&
        (f === "source" ? g.inputs : g.outputs).some((y) => bb(h, y.type)),
      );
    }, [e]),
    p = D.useMemo(() => {
      const f = o.trim().toLowerCase();
      return d.filter(
        (h) =>
          (u === "all" || h.category === u) &&
          (!f ||
            `${h.label} ${h.description} ${h.category}`
              .toLowerCase()
              .includes(f)),
      );
    }, [d, o, u]);
  if (!e) return null;
  const f = Math.max(12, Math.min(e.screenPosition.x, window.innerWidth - 374)),
    h = Math.max(70, Math.min(e.screenPosition.y, window.innerHeight - 520));
  return w.jsx("div", {
    className: "node-add-backdrop",
    onMouseDown: t,
    children: w.jsxs("section", {
      className: "node-add-menu glass-panel",
      style: { left: f, top: h },
      onMouseDown: (g) => g.stopPropagation(),
      onKeyDown: (g) => {
        (g.key === "Escape" && t(), g.key === "Enter" && p[0] && r(p[0], e));
      },
      children: [
        w.jsxs("header", {
          children: [
            w.jsxs("div", {
              className: "node-menu-title",
              children: [
                w.jsx("span", {
                  className: "node-menu-symbol",
                  children: e.connection ? "↝" : "+",
                }),
                w.jsxs("div", {
                  children: [
                    w.jsx("strong", {
                      children: e.connection ? "Insert connected node" : "Add node",
                    }),
                    w.jsx("small", {
                      children: e.connection
                        ? `Showing ${e.connection.portType}-compatible nodes`
                        : "Choose a building block",
                    }),
                  ],
                }),
              ],
            }),
            w.jsx("button", {
              className: "icon-button",
              onClick: t,
              "aria-label": "Close node menu",
              children: "×",
            }),
          ],
        }),
        w.jsxs("label", {
          className: "node-menu-search",
          children: [
            w.jsx("span", { children: "⌕" }),
            w.jsx("input", {
              autoFocus: !0,
              value: o,
              onChange: (g) => s(g.target.value),
              placeholder: "Search nodes by name…",
              "aria-label": "Search available nodes",
            }),
            w.jsx("kbd", { children: "↵" }),
          ],
        }),
        w.jsx("nav", {
          className: "node-menu-categories",
          "aria-label": "Node categories",
          children: aD.map((g) => {
            const y =
              g === "all" ? d.length : d.filter((S) => S.category === g).length;
            return !y && g !== "all"
              ? null
              : w.jsxs(
                  "button",
                  {
                    className: u === g ? "active" : "",
                    onClick: () => l(g),
                    children: [
                      g !== "all" &&
                        w.jsx("i", { style: { background: Zi[g] } }),
                      g === "all" ? "All" : cb[g],
                      w.jsx("small", { children: y }),
                    ],
                  },
                  g,
                );
          }),
        }),
        w.jsxs("div", {
          className: "node-menu-results",
          children: [
            p.map((g, y) =>
              w.jsxs(
                "button",
                {
                  className: "node-menu-result",
                  onClick: () => r(g, e),
                  children: [
                    w.jsx("span", {
                      className: "result-icon",
                      style: {
                        color: Zi[g.category],
                        background: `${Zi[g.category]}14`,
                      },
                      children: w.jsx(Rh, { name: g.icon, size: 16 }),
                    }),
                    w.jsxs("span", {
                      children: [
                        w.jsx("strong", { children: g.label }),
                        w.jsx("small", { children: g.description }),
                      ],
                    }),
                    w.jsx("code", { children: g.category }),
                    y === 0 && w.jsx("span", { className: "enter-hint", children: "↵" }),
                  ],
                },
                g.type,
              ),
            ),
            !p.length &&
              w.jsxs("div", {
                className: "node-menu-empty",
                children: [
                  w.jsx("strong", { children: "No compatible nodes" }),
                  w.jsx("span", { children: "Try another category or search term." }),
                ],
              }),
          ],
        }),
        w.jsxs("footer", {
          children: [
            w.jsxs("span", { children: [w.jsx("kbd", { children: "⇧ A" }), " Open anywhere"] }),
            w.jsxs("span", { children: [w.jsx("kbd", { children: "Esc" }), " Close"] }),
          ],
        }),
      ],
    }),
  });
}
const $3 = { fluxel: F3 },
  B3 = { fluxel: Ob };
function isDroppedImageFile(e) {
  return String(e.type || "").startsWith("image/") || /\.(png|jpe?g|webp|gif|bmp|svg|avif)$/i.test(String(e.name || ""));
}
function droppedFileDataUrl(e) {
  return new Promise((t, r) => {
    const o = new FileReader();
    ((o.onload = () => t(String(o.result))),
      (o.onerror = () => r(new Error(`Could not read ${e.name || "the dropped image"}.`))),
      o.readAsDataURL(e));
  });
}
function H3() {
  const v = D.useRef(null),
    A = D.useRef(null),
    edgeInsertionTarget = D.useRef(null),
    [L, O] = D.useState(null),
    e = fe((N) => N.activeGraph()),
    t = fe((N) => N.invalidPulse),
    r = fe((N) => N.onNodesChange),
    o = fe((N) => N.onEdgesChange),
    s = fe((N) => N.addEdge),
    u = fe((N) => N.addNode),
    n = fe((N) => N.insertNodeOnEdge),
    insertExistingNode = fe((N) => N.insertExistingNodeOnEdge),
    l = fe((N) => N.beginGraphEdit),
    d = fe((N) => N.setSelectedNode),
    p = fe((N) => N.flashInvalid),
    f = fe((N) => N.alignSelected),
    h = fe((N) => N.distributeSelected),
    j = fe((N) => N.autoLayoutGraph),
    G = fe((N) => N.groupSelected),
    U = fe((N) => N.ungroupFrame),
    Z = fe((N) => N.collapseSelectedToMacro),
    Q = fe((N) => N.expandMacro),
    { screenToFlowPosition: g, fitView: y } = su(),
    S = D.useCallback(
      (N) => {
        const k = e.nodes.find((R) => R.id === N.source),
          M = e.nodes.find((R) => R.id === N.target);
        if (!k || !M || !N.sourceHandle || !N.targetHandle) return null;
        const I = Gn(k.data.nodeType).outputs.find(
            (R) => R.id === N.sourceHandle,
          ),
          b = Gn(M.data.nodeType).inputs.find((R) => R.id === N.targetHandle);
        return !I || !b ? null : [I.type, b.type];
      },
      [e.nodes],
    ),
    x = D.useCallback(
      (N) => {
        const k = S(N);
        if (!k || !N.source || !N.target) return !1;
        return bb(...k) && !_b(e, N.source, N.target);
      },
      [S, e],
    ),
    P = D.useCallback(
      (N) => {
        const k = S(N);
        !k ||
          !N.source ||
          !N.target ||
          s({
            id: `edge-${crypto.randomUUID()}`,
            ...N,
            source: N.source,
            target: N.target,
            type: "fluxel",
            data: { portType: k[0] === "any" ? k[1] : k[0] },
          });
      },
      [s, S],
    ),
    R = D.useCallback(
      (N, k) =>
        O({ screenPosition: N, flowPosition: g(N), connection: k }),
      [g],
    ),
    E = D.useCallback(() => {
      const N = v.current?.getBoundingClientRect(),
        k = N
          ? { x: N.left + N.width / 2, y: N.top + Math.min(260, N.height / 2) }
          : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      R(A.current ?? k);
    }, [R]),
    C = D.useCallback(
      (N, k) => {
        if (!k.fromNode || !k.fromHandle) return;
        if (!k.toNode) {
          const M = "changedTouches" in N ? N.changedTouches[0] : N,
            I = Gn(String(k.fromNode.data.nodeType)),
            b = k.fromHandle.type,
            q = (b === "source" ? I.outputs : I.inputs).find(
              (V) => V.id === k.fromHandle?.id,
            );
          M &&
            q &&
            k.fromHandle.id &&
            R(
              { x: M.clientX, y: M.clientY },
              {
                nodeId: k.fromNode.id,
                handleId: k.fromHandle.id,
                handleType: b,
                portType: q.type,
              },
            );
          return;
        }
        k.isValid || p("Match port colors and keep the graph acyclic.");
      },
      [p, R],
    ),
    I = D.useCallback(
      (N, k) => {
        const M = u(N.type, k.flowPosition);
        if (k.connection) {
          const b = k.connection;
          if (b.handleType === "source") {
            const q = N.inputs.find((V) => bb(b.portType, V.type));
            q &&
              s({
                id: `edge-${crypto.randomUUID()}`,
                source: b.nodeId,
                sourceHandle: b.handleId,
                target: M,
                targetHandle: q.id,
                type: "fluxel",
                data: { portType: b.portType === "any" ? q.type : b.portType },
              });
          } else {
            const q = N.outputs.find((V) => bb(V.type, b.portType));
            q &&
              s({
                id: `edge-${crypto.randomUUID()}`,
                source: M,
                sourceHandle: q.id,
                target: b.nodeId,
                targetHandle: b.handleId,
                type: "fluxel",
                data: { portType: q.type === "any" ? b.portType : q.type },
              });
          }
        }
        O(null);
      },
      [s, u],
    ),
    T = D.useMemo(() => e.nodes.filter((N) => N.selected).length, [e.nodes]),
    F = D.useMemo(() => e.edges.filter((N) => N.selected).length, [e.edges]),
    K = D.useMemo(() => e.nodes.find((N) => N.selected && N.data.nodeType === "frame"), [e.nodes]),
    J = D.useMemo(() => e.nodes.find((N) => N.selected && N.data.nodeType === "macro"), [e.nodes]),
    B = D.useCallback(() => {
      const N = e.edges
        .filter((k) => k.selected)
        .map((k) => ({ id: k.id, type: "remove" }));
      N.length && o(N);
    }, [e.edges, o]);
  D.useEffect(() => {
    const N = (k) => {
      const M = k.target,
        b = M?.matches?.('input, textarea, select, [contenteditable="true"]');
      k.shiftKey &&
        k.key.toLowerCase() === "a" &&
        !b &&
        (k.preventDefault(), E());
    };
    return (
      window.addEventListener("keydown", N),
      () => window.removeEventListener("keydown", N)
    );
  }, [E]);
  D.useEffect(() => {
    const N = () => E(),
      k = () => y({ padding: 0.18, duration: 420 }),
      M = () => {
        (j(), window.setTimeout(() => y({ padding: 0.18, duration: 420 }), 60));
      };
    return (
      window.addEventListener("fluxel:open-add", N),
      window.addEventListener("fluxel:fit-graph", k),
      window.addEventListener("fluxel:auto-layout", M),
      () => {
        (window.removeEventListener("fluxel:open-add", N),
          window.removeEventListener("fluxel:fit-graph", k),
          window.removeEventListener("fluxel:auto-layout", M));
      }
    );
  }, [E, y, j]);
  return w.jsx(
    "main",
    {
      ref: v,
      className: `canvas-shell ${t ? "has-invalid-pulse" : ""}`,
      onPointerMove: (N) => {
        A.current = { x: N.clientX, y: N.clientY };
      },
      onDragOver: (N) => {
        (N.preventDefault(),
          (N.dataTransfer.dropEffect = [...(N.dataTransfer.items ?? [])].some((k) => k.kind === "file") ? "copy" : "move"));
      },
      onDrop: async (N) => {
        N.preventDefault();
        const droppedImages = [...(N.dataTransfer.files ?? [])].filter(isDroppedImageFile);
        if (droppedImages.length) {
          const M = g({ x: N.clientX, y: N.clientY });
          try {
            const dataUrls = await Promise.all(droppedImages.map(droppedFileDataUrl));
            droppedImages.forEach((file, index) => {
              const id = u("loadImage", { x: M.x + index * 36, y: M.y + index * 36 });
              const state = fe.getState();
              (state.setNodeParam(id, "dataUrl", dataUrls[index], !1),
                state.setNodeParam(id, "sourceName", file.name || `Dropped image ${index + 1}`, !1));
            });
            fe.getState().addToast({
              title: droppedImages.length === 1 ? "Image added" : `${droppedImages.length} images added`,
              message: droppedImages.length === 1
                ? `${droppedImages[0].name} is ready in a Load Image node.`
                : "Each dropped image is ready in its own Load Image node.",
              tone: "success",
            });
          } catch (error) {
            fe.getState().addToast({
              title: "Could not add image",
              message: error instanceof Error ? error.message : "The dropped file could not be read.",
              tone: "error",
            });
          }
          (xD = null, document.documentElement.classList.remove("node-library-dragging"), clearEdgeInsertionTarget());
          return;
        }
        const k = N.dataTransfer.getData("application/fluxel-node");
        if (k) {
          const M = g({ x: N.clientX, y: N.clientY });
          xD ? n(k, M, xD) : u(k, M);
        }
        (xD = null, document.documentElement.classList.remove("node-library-dragging"), clearEdgeInsertionTarget());
      },
      children: [
        w.jsxs(iN, {
        nodes: e.nodes,
        edges: e.edges,
        nodeTypes: $3,
        edgeTypes: B3,
        onNodesChange: r,
        onEdgesChange: o,
        onConnect: P,
        onConnectEnd: C,
        onEdgeDoubleClick: (N, k) => {
          (N.preventDefault(), o([{ id: k.id, type: "remove" }]));
        },
        isValidConnection: x,
        onNodeClick: (N, k) => d(k.id),
        onPaneClick: () => {
          (d(null), O(null));
        },
        onNodeDragStart: l,
        onNodeDrag: (N, k) => {
          const M = closestInsertableEdge(k, e);
          edgeInsertionTarget.current !== M &&
            ((edgeInsertionTarget.current = M), setEdgeInsertionTarget(M));
        },
        onNodeDragStop: (N, k) => {
          const M = edgeInsertionTarget.current;
          ((edgeInsertionTarget.current = null), clearEdgeInsertionTarget());
          M && insertExistingNode(k.id, M);
        },
        minZoom: 0.16,
        maxZoom: 2.4,
        defaultEdgeOptions: { type: "fluxel" },
        fitView: !0,
        fitViewOptions: { padding: 0.16, maxZoom: 0.9 },
        connectionMode: ni.Strict,
        connectionRadius: 28,
        snapToGrid: !0,
        snapGrid: [16, 16],
        selectionMode: Ji.Partial,
        selectionOnDrag: !0,
        panOnDrag: [1, 2],
        panActivationKeyCode: "Space",
        multiSelectionKeyCode: ["Meta", "Control"],
        deleteKeyCode: null,
        zoomOnDoubleClick: !1,
        onlyRenderVisibleElements: !0,
        proOptions: { hideAttribution: !0 },
        children: [
          w.jsx(uN, {
            variant: Un.Dots,
            gap: 20,
            size: 1.25,
            color: "var(--grid-dot)",
          }),
          w.jsx(gN, { showInteractive: !1, position: "bottom-left" }),
          w.jsx(_N, {
            pannable: !0,
            zoomable: !0,
            position: "bottom-right",
            nodeStrokeWidth: 2,
            nodeColor: (N) => Zi[N.data.category] ?? "#7b849a",
            maskColor: "var(--minimap-mask)",
          }),
          w.jsxs(ro, {
            position: "top-left",
            className: "canvas-status glass-panel",
            children: [
              w.jsx("span", { className: "live-dot" }),
              w.jsx("strong", { children: e.name }),
              w.jsxs("small", {
                children: [
                  e.nodes.length,
                  " nodes · ",
                  e.edges.length,
                  " links",
                ],
              }),
            ],
          }),
          w.jsxs(ro, {
            position: "top-center",
            className: `alignment-toolbar glass-panel ${T < 2 ? "muted" : ""}`,
            children: [
              w.jsx("button", {
                title: "Align left",
                onClick: () => f("left"),
                disabled: T < 2,
                children: w.jsx(V1, { size: 15 }),
              }),
              w.jsx("button", {
                title: "Align top",
                onClick: () => f("top"),
                disabled: T < 2,
                children: w.jsx(R1, { size: 15 }),
              }),
              w.jsx("button", {
                title: "Align center",
                onClick: () => f("center"),
                disabled: T < 2,
                children: w.jsx(D1, { size: 15 }),
              }),
              w.jsx("button", {
                title: "Distribute horizontally",
                onClick: h,
                disabled: T < 3,
                children: w.jsx(L1, { size: 15 }),
              }),
              w.jsx("button", {
                title: "Group selection in frame",
                onClick: G,
                disabled: T < 2,
                children: w.jsx(Rh, { name: "Layers3", size: 15 }),
              }),
              w.jsx("button", {
                title: "Collapse selected image chain into macro",
                onClick: Z,
                disabled: T < 2,
                children: w.jsx(Rh, { name: "Package", size: 15 }),
              }),
              J &&
                w.jsx("button", {
                  title: "Expand selected macro",
                  onClick: () => Q(J.id),
                  children: w.jsx(Rh, { name: "PackageOpen", size: 15 }),
                }),
              K &&
                w.jsx("button", {
                  title: "Ungroup selected frame",
                  onClick: () => U(K.id),
                  children: w.jsx(cu, { size: 14 }),
                }),
              w.jsx("i", {}),
              w.jsx("button", {
                title: "Fit graph",
                onClick: () => y({ padding: 0.18, duration: 420 }),
                children: w.jsx(qN, { size: 15 }),
              }),
              w.jsx("button", {
                title: "Auto layout graph",
                onClick: () => {
                  (j(), window.setTimeout(() => y({ padding: 0.18, duration: 420 }), 60));
                },
                children: w.jsx(Rh, { name: "Route", size: 15 }),
              }),
              F > 0 && w.jsx("i", {}),
              F > 0 &&
                w.jsxs("button", {
                  className: "disconnect-edge-button",
                  title: "Disconnect selected connection",
                  onClick: B,
                  children: [w.jsx(ex, { size: 14 }), "Disconnect"],
                }),
              T > 1 && w.jsxs("span", { children: [T, " selected"] }),
            ],
          }),
          w.jsx(ro, {
            position: "top-right",
            children: w.jsxs("button", {
              className: "canvas-add-button glass-panel",
              onClick: E,
              children: [
                w.jsx("span", { children: "+" }),
                "Add node",
                w.jsx("kbd", { children: "⇧ A" }),
              ],
            }),
          }),
        ],
      }),
        w.jsx(sD, {
          key: L ? `${L.screenPosition.x}-${L.screenPosition.y}` : "closed",
          menu: L,
          onClose: () => O(null),
          onPick: I,
        }),
      ],
    },
    `canvas-${t}`,
  );
}
function pD({ value: e, onChange: t, onEditStart: r }) {
  const o = D.useRef(null),
    s = [0, 64, 128, 192, 255],
    u = String(e || "0,64,128,192,255").split(",").map(Number),
    l = s.map((p, f) => Math.max(0, Math.min(255, Number.isFinite(u[f]) ? u[f] : p))),
    d = (p) => {
      const f = o.current?.getBoundingClientRect();
      if (!f) return;
      const h = Math.max(0, Math.min(255, ((p.clientX - f.left) / f.width) * 255)),
        g = Math.max(0, Math.min(255, 255 - ((p.clientY - f.top) / f.height) * 255)),
        y = s.reduce((S, x, P) => Math.abs(x - h) < Math.abs(s[S] - h) ? P : S, 0),
        N = [...l];
      ((N[y] = Math.round(g)), t(N.join(",")));
    };
  return w.jsxs("div", {
    className: "curve-control",
    children: [
      w.jsxs("div", {
        className: "field-label",
        children: [
          w.jsx("label", { children: "Tone curve" }),
          w.jsx("button", {
            type: "button",
            onClick: () => {
              (r(), t("0,64,128,192,255"));
            },
            children: "Reset",
          }),
        ],
      }),
      w.jsxs("svg", {
        ref: o,
        viewBox: "0 0 255 255",
        role: "img",
        "aria-label": "Interactive tone curve",
        onPointerDown: (p) => {
          (r(), p.currentTarget.setPointerCapture(p.pointerId), d(p));
        },
        onPointerMove: (p) => p.currentTarget.hasPointerCapture(p.pointerId) && d(p),
        children: [
          [64, 128, 192].flatMap((p) => [
            w.jsx("line", { x1: p, y1: 0, x2: p, y2: 255 }, `vx-${p}`),
            w.jsx("line", { x1: 0, y1: p, x2: 255, y2: p }, `hy-${p}`),
          ]),
          w.jsx("line", { className: "curve-diagonal", x1: 0, y1: 255, x2: 255, y2: 0 }),
          w.jsx("polyline", {
            className: "curve-line",
            points: s.map((p, f) => `${p},${255 - l[f]}`).join(" "),
          }),
          s.map((p, f) =>
            w.jsx("circle", { className: "curve-point", cx: p, cy: 255 - l[f], r: 6 }, p),
          ),
        ],
      }),
      w.jsx("div", {
        className: "curve-values",
        children: l.map((p, f) =>
          w.jsxs("label", {
            children: [
              w.jsx("span", { children: s[f] }),
              w.jsx("input", {
                type: "number",
                min: 0,
                max: 255,
                value: p,
                "aria-label": `Curve output at ${s[f]}`,
                onFocus: r,
                onChange: (h) => {
                  const g = [...l];
                  ((g[f] = Math.max(0, Math.min(255, Number(h.target.value)))), t(g.join(",")));
                },
              }),
            ],
          }, s[f]),
        ),
      }),
    ],
  });
}
function U3({ parameter: e, value: t, onChange: r, onEditStart: o }) {
  if (e.control === "curve")
    return w.jsx(pD, { value: t, onChange: r, onEditStart: o });
  if (e.control === "maskPainter")
    return w.jsxs("div", { className: `inspector-field mask-painter-field ${t ? "ready" : "required-directory"}`, children: [
      w.jsx("span", { className: "field-label", children: w.jsx("span", { children: e.label }) }),
      w.jsxs("button", { type: "button", onClick: () => {
        const nodeId = fe.getState().selectedNodeId;
        nodeId && window.dispatchEvent(new CustomEvent("fluxel:mask-editor", { detail: { nodeId } }));
      }, children: [w.jsx(Rh, { name: "ScanLine", size: 16 }), t ? "Edit mask" : "Open mask painter"] }),
      w.jsx("small", { children: t ? "Mask saved at the connected image size" : "Paint a white editable area before running" }),
    ] });
  if (e.control === "inputDirectory") {
    const s = !!window.fluxelDesktop?.selectBatchInputDirectory;
    return w.jsxs("div", { className: `inspector-field directory-picker ${e.required && !String(t || "").trim() ? "required-directory" : ""}`, children: [
      w.jsx("span", { className: "field-label", children: w.jsx("span", { children: e.label }) }),
      w.jsxs("button", { type: "button", disabled: !s, onClick: async () => {
        o(); const u = await window.fluxelDesktop.selectBatchInputDirectory(String(t || "")); u && r(u);
      }, children: [w.jsx(GN, { size: 16 }), s ? (t ? "Change input folder" : "Choose input folder") : "Desktop app required"] }),
      w.jsx("small", { title: String(t || ""), children: t ? String(t) : "No folder selected" }),
    ] });
  }
  if (e.control === "file")
    return w.jsxs("label", {
      className: "file-picker",
      children: [
        w.jsx(WN, { size: 18 }),
        w.jsxs("span", {
          children: [
            w.jsx("strong", { children: "Choose image" }),
            w.jsx("small", { children: "PNG, JPEG, WebP, GIF or SVG" }),
          ],
        }),
        w.jsx("input", {
          type: "file",
          accept: "image/*",
          onChange: (s) => {
            const u = s.target.files?.[0];
            if (!u) return;
            o();
            const l = new FileReader();
            ((l.onload = () => r(String(l.result))), l.readAsDataURL(u));
          },
        }),
      ],
    });
  if (e.control === "directory") {
    const s = !!window.fluxelDesktop?.selectExportDirectory;
    return w.jsxs("div", { className: `inspector-field directory-picker ${e.required && !String(t || "").trim() ? "required-directory" : ""}`, children: [
      w.jsx("span", { className: "field-label", children: w.jsx("span", { children: e.label }) }),
      w.jsxs("button", { type: "button", disabled: !s, onClick: async () => {
        o(); const u = await window.fluxelDesktop.selectExportDirectory(String(t || "")); u && r(u);
      }, children: [w.jsx(GN, { size: 16 }), s ? (t ? "Change directory" : "Choose directory") : "Desktop app required"] }),
      w.jsx("small", { title: String(t || ""), children: t ? String(t) : "No directory selected" }),
    ] });
  }
  if (e.control === "range") {
    const s = e.min ?? 0,
      u = e.max ?? 100,
      l = ((Number(t) - s) / (u - s)) * 100;
    return w.jsxs("div", {
      className: "inspector-field",
      children: [
        w.jsxs("div", {
          className: "field-label",
          children: [
            w.jsx("label", { children: e.label }),
            w.jsxs("code", { children: [t, e.unit] }),
          ],
        }),
        w.jsx("input", {
          className: "range-control",
          style: { "--range-progress": `${l}%` },
          type: "range",
          min: s,
          max: u,
          step: e.step,
          value: Number(t),
          onPointerDown: o,
          onChange: (d) => r(Number(d.target.value)),
        }),
      ],
    });
  }
  return e.control === "toggle"
    ? w.jsxs("button", {
        type: "button",
        className: "toggle-field",
        onClick: () => {
          (o(), r(!t));
        },
        children: [
          w.jsx("span", { children: e.label }),
          w.jsx("i", {
            className: t ? "active" : "",
            children: w.jsx("b", {}),
          }),
        ],
      })
    : e.control === "select"
      ? w.jsxs("label", {
          className: "inspector-field",
          children: [
            w.jsx("span", {
              className: "field-label",
              children: w.jsx("span", { children: e.label }),
            }),
            w.jsx("select", {
              value: String(t),
              onFocus: o,
              onChange: (s) => {
                const u = e.options?.find(
                  (l) => String(l.value) === s.target.value,
                );
                r(u?.value ?? s.target.value);
              },
              children: e.options?.map((s) =>
                w.jsx(
                  "option",
                  { value: String(s.value), children: s.label },
                  String(s.value),
                ),
              ),
            }),
          ],
        })
      : e.control === "color"
        ? w.jsxs("label", {
            className: "inspector-field color-field",
            children: [
              w.jsxs("span", {
                className: "field-label",
                children: [
                  w.jsx("span", { children: e.label }),
                  w.jsx("code", { children: t }),
                ],
              }),
              w.jsxs("span", {
                className: "color-input",
                children: [
                  w.jsx("input", {
                    type: "color",
                    value: String(t),
                    onFocus: o,
                    onChange: (s) => r(s.target.value),
                  }),
                  w.jsx("span", { style: { background: String(t) } }),
                ],
              }),
            ],
          })
        : e.control === "text"
          ? w.jsxs("label", {
              className: "inspector-field",
              children: [
                w.jsx("span", {
                  className: "field-label",
                  children: w.jsx("span", { children: e.label }),
                }),
                ["text", "prompt", "negativePrompt"].includes(e.id)
                  ? w.jsx("textarea", {
                      value: String(t),
                      onFocus: o,
                      onChange: (s) => r(s.target.value),
                      rows: 4,
                    })
                  : w.jsx("input", {
                      type: "text",
                      value: String(t),
                      onFocus: o,
                      onChange: (s) => r(s.target.value),
                    }),
              ],
            })
          : w.jsxs("label", {
              className: "inspector-field",
              children: [
                w.jsx("span", {
                  className: "field-label",
                  children: w.jsx("span", { children: e.label }),
                }),
                w.jsxs("div", {
                  className: "number-control",
                  children: [
                    w.jsx("input", {
                      type: "number",
                      value: Number(t),
                      min: e.min,
                      max: e.max,
                      step: e.step,
                      onFocus: o,
                      onChange: (s) => r(Number(s.target.value)),
                    }),
                    w.jsx("span", { children: e.unit }),
                  ],
                }),
              ],
            });
}
function isParameterVisible(e, t, r) {
  if (!e.visibleWhen) return !0;
  const o = Array.isArray(e.visibleWhen) ? e.visibleWhen : [e.visibleWhen];
  return o.every((s) => (t[s.id] ?? r.params.find((u) => u.id === s.id)?.default) === s.equals);
}
function W3() {
  const e = fe((h) => h.selectedNodeId),
    t = fe((h) => h.inspectorOpen),
    r = fe((h) => h.activeGraph().nodes.find((g) => g.id === e)),
    o = fe((h) => h.setNodeParam),
    s = fe((h) => h.beginGraphEdit),
    u = fe((h) => h.toggleInspector),
    l = fe((h) => h.preview),
    m = fe((h) => h.toggleNodeBypass),
    a = fe((h) => h.replaceNodeType),
    c = fe((h) => h.setPreviewTarget),
    b = fe((h) => h.toggleFrame),
    C = fe((h) => h.expandMacro),
    v = fe((h) => h.activeGraph().previewNodeId),
    y = fe((h) => h.activeGraph().nodes.some((g) => g.data.nodeType === "batchInput"));
  if (!r) return null;
  const d = Gn(r.data.nodeType),
    p = d.params.filter((h) => h.id !== "dataUrl" && !(r.data.nodeType === "frame" && h.id === "collapsed") && isParameterVisible(h, r.data.params, d)),
    f = (h, g) => {
      if (h.control === "file") {
        const S =
          document.querySelector(".file-picker input")?.files?.[0]?.name ??
          "Local image";
        (o(r.id, "dataUrl", g, !1), o(r.id, "sourceName", S, !1));
        return;
      }
      o(r.id, h.id, g, !1);
    };
  return w.jsx(si, {
    initial: !1,
    children:
      t &&
      w.jsxs(xt.aside, {
        className: "inspector glass-panel",
        initial: { x: 28, opacity: 0, width: 0 },
        animate: { x: 0, opacity: 1, width: 324 },
        exit: { x: 28, opacity: 0, width: 0 },
        transition: { duration: 0.2, ease: "easeOut" },
        children: [
          w.jsxs("div", {
            className: "inspector-head",
            style: { "--node-accent": Zi[d.category] },
            children: [
              w.jsx("div", {
                className: "inspector-node-icon",
                children: w.jsx(Rh, { name: d.icon, size: 18 }),
              }),
              w.jsxs("div", {
                children: [
                  w.jsx("span", { children: d.category }),
                  w.jsx("h2", { children: d.label }),
                ],
              }),
              w.jsx("button", {
                className: "icon-button",
                onClick: () => u(!1),
                "aria-label": "Close inspector",
                children: w.jsx(X1, { size: 17 }),
              }),
            ],
          }),
          w.jsxs("div", {
            className: "inspector-tabs",
            children: [
              w.jsxs("button", {
                className: "active",
                children: [w.jsx(sb, { size: 14 }), "Properties"],
              }),
              w.jsx("span", {}),
            ],
          }),
          w.jsxs("div", {
            className: "inspector-scroll",
            children: [
              w.jsxs("section", {
                className: "inspector-section node-quick-actions",
                children: [
                  r.data.nodeType === "frame" &&
                    w.jsxs("button", {
                      className: r.data.params.collapsed ? "active" : "",
                      onClick: () => b(r.id),
                      children: [
                        w.jsx(Rh, { name: "Layers3", size: 15 }),
                        r.data.params.collapsed ? "Expand frame" : "Collapse frame",
                      ],
                    }),
                  r.data.nodeType === "macro" &&
                    w.jsxs("button", {
                      onClick: () => C(r.id),
                      children: [
                        w.jsx(Rh, { name: "PackageOpen", size: 15 }),
                        "Expand macro",
                      ],
                    }),
                  d.inputs.length > 0 && d.outputs.length > 0 &&
                    w.jsxs("button", {
                      className: r.data.bypassed ? "active" : "",
                      onClick: () => m(r.id),
                      children: [
                        w.jsx(Rh, { name: "CircleOff", size: 15 }),
                        r.data.bypassed ? "Enable node" : "Bypass node",
                        w.jsx("kbd", { children: "B" }),
                      ],
                    }),
                  d.outputs.some((h) => h.type === "image") &&
                    w.jsxs("button", {
                      className: v === r.id ? "active" : "",
                      onClick: () => c(v === r.id ? null : r.id),
                      children: [
                        w.jsx(KN, { size: 15 }),
                        v === r.id ? "Unpin preview" : "Pin output to preview",
                      ],
                    }),
                  !["frame", "macro"].includes(r.data.nodeType) && w.jsxs("label", {
                    children: [
                      w.jsx("span", { children: "Replace node type" }),
                      w.jsx("select", {
                        value: r.data.nodeType,
                        onChange: (h) => a(r.id, h.target.value),
                        children: lf
                          .filter((h) => !["note", "reroute", "frame", "macro"].includes(h.type) && (!h.requiresPack || installedAIPackIds.has(h.requiresPack)))
                          .map((h) =>
                            w.jsx("option", { value: h.type, children: h.label }, h.type),
                          ),
                      }),
                    ],
                  }),
                ],
              }),
              w.jsxs("section", {
                className: "inspector-section",
                children: [
                  w.jsxs("div", {
                    className: "section-label",
                    children: [
                      w.jsx("span", { children: "PARAMETERS" }),
                      w.jsx("small", { children: p.length }),
                    ],
                  }),
                  p.map((h) =>
                    w.jsx(
                      U3,
                      {
                        parameter: { ...h, required: h.required || (y && h.requiredForBatch) },
                        value: r.data.params[h.id],
                        onEditStart: s,
                        onChange: (g) => f(h, g),
                      },
                      h.id,
                    ),
                  ),
                  !p.length &&
                    w.jsx("p", {
                      className: "empty-parameters",
                      children: "This routing node has no parameters.",
                    }),
                ],
              }),
              w.jsxs("section", {
                className: "inspector-section port-summary",
                children: [
                  w.jsx("div", {
                    className: "section-label",
                    children: w.jsx("span", { children: "PORTS" }),
                  }),
                  [
                    ...d.inputs.map((h) => ({ ...h, direction: "Input" })),
                    ...d.outputs.map((h) => ({ ...h, direction: "Output" })),
                  ].map((h) =>
                    w.jsxs(
                      "div",
                      {
                        className: "port-row",
                        children: [
                          w.jsx("span", {
                            className: "port-swatch",
                            style: { background: Hi[h.type] },
                          }),
                          w.jsx("strong", { children: h.label }),
                          w.jsx("code", { children: h.type }),
                          w.jsx("small", { children: h.direction }),
                        ],
                      },
                      `${h.direction}-${h.id}`,
                    ),
                  ),
                  !d.inputs.length &&
                    !d.outputs.length &&
                    w.jsx("p", {
                      className: "empty-parameters",
                      children: "Comments do not participate in execution.",
                    }),
                ],
              }),
              (r.data.nodeType === "preview" ||
                r.data.nodeType === "exportImage") &&
                l.afterUrl &&
                w.jsxs("section", {
                  className: "inspector-section output-card",
                  children: [
                    w.jsxs("div", {
                      className: "section-label",
                      children: [
                        w.jsx("span", { children: "LATEST OUTPUT" }),
                        w.jsxs("small", {
                          children: [l.width, " × ", l.height],
                        }),
                      ],
                    }),
                    w.jsx("img", {
                      src: l.afterUrl,
                      alt: "Latest processed output",
                    }),
                    r.data.nodeType === "exportImage" &&
                      w.jsxs("a", {
                        className: "primary-button full-width",
                        href: l.afterUrl,
                        download: `${r.data.params.fileName}.${r.data.params.format === "jpeg" ? "jpg" : r.data.params.format}`,
                        children: [w.jsx(nh, { size: 15 }), "Download image"],
                      }),
                  ],
                }),
            ],
          }),
          w.jsxs("div", {
            className: "inspector-foot",
            children: [
              w.jsx("span", {
                className: `state-indicator state-${r.data.executionState}`,
              }),
              w.jsx("span", { children: r.data.executionState }),
              w.jsx("code", { children: r.id.slice(0, 13) }),
            ],
          }),
        ],
      }),
  });
}
const G3 = { info: rh, success: lu, warning: uu, error: th };
function X3() {
  const e = fe((s) => s.logOpen),
    t = fe((s) => s.logs),
    r = fe((s) => s.clearLogs),
    o = fe((s) => s.toggleLog);
  return w.jsx(si, {
    children:
      e &&
      w.jsxs(xt.section, {
        className: "log-drawer glass-panel",
        initial: { y: 40, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 40, opacity: 0 },
        transition: { duration: 0.2, ease: "easeOut" },
        children: [
          w.jsxs("header", {
            children: [
              w.jsxs("div", {
                children: [
                  w.jsx("span", { className: "live-dot" }),
                  w.jsx("strong", { children: "Execution log" }),
                  w.jsxs("code", { children: [t.length, " ENTRIES"] }),
                ],
              }),
              w.jsxs("div", {
                children: [
                  w.jsx("button", {
                    className: "icon-button",
                    onClick: r,
                    title: "Clear log",
                    children: w.jsx(ex, { size: 15 }),
                  }),
                  w.jsx("button", {
                    className: "icon-button",
                    onClick: () => o(!1),
                    "aria-label": "Close execution log",
                    children: w.jsx(cu, { size: 15 }),
                  }),
                ],
              }),
            ],
          }),
          w.jsxs("div", {
            className: "log-list",
            children: [
              t.map((s) => {
                const u = G3[s.level];
                return w.jsxs(
                  "div",
                  {
                    className: `log-entry log-${s.level}`,
                    children: [
                      w.jsx("time", { children: s.time }),
                      w.jsx(u, { size: 13 }),
                      w.jsx("span", { children: s.message }),
                      s.duration !== void 0 &&
                        w.jsxs("code", { children: [s.duration, "ms"] }),
                    ],
                  },
                  s.id,
                );
              }),
              !t.length &&
                w.jsxs("div", {
                  className: "empty-log",
                  children: [
                    w.jsx(uu, { size: 22 }),
                    w.jsx("span", {
                      children: "Run the pipeline to see execution details.",
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
  });
}
function yD() {
  const e = fe((h) => h.batch),
    t = fe((h) => h.setBatch),
    [r, o] = D.useState(!1);
  if (!e.total && !e.results.length) return null;
  const s = e.total ? Math.round((e.current / e.total) * 100) : 0,
    u = e.state === "running";
  return w.jsxs(xt.section, {
    className: `batch-panel glass-panel ${r ? "collapsed" : ""}`,
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    children: [
      w.jsxs("header", {
        children: [
          w.jsx(GN, { size: 16 }),
          w.jsxs("span", {
            children: [w.jsx("strong", { children: u ? "Processing folder" : e.state === "error" ? "Batch failed" : "Saved outputs" }), w.jsxs("small", { children: [e.current, " / ", e.total] })],
          }),
          w.jsx("button", { className: "icon-button", onClick: () => o((h) => !h), "aria-label": r ? "Expand batch panel" : "Collapse batch panel", children: w.jsx(z1, { size: 14 }) }),
        ],
      }),
      !r &&
        w.jsxs(w.Fragment, {
          children: [
            w.jsx("div", { className: "batch-progress", children: w.jsx("i", { style: { width: `${s}%` } }) }),
            w.jsx("div", {
              className: "batch-results",
              children: e.results.slice(-4).map((h) =>
                w.jsxs("div", {
                  className: "batch-result-row",
                  title: h.filePath,
                  children: [w.jsx("span", { children: h.name }), w.jsxs("code", { children: [h.width, "×", h.height] }), w.jsx(lu, { size: 13 })],
                }, h.filePath || h.name),
              ),
            }),
            e.error && w.jsx("p", { className: "batch-error", children: e.error }),
            w.jsxs("footer", {
              children: [
                w.jsxs("button", { className: "primary-button", disabled: !e.outputDirectory || u, onClick: () => window.fluxelDesktop?.openDirectory?.(e.outputDirectory), children: [w.jsx(GN, { size: 14 }), "Open save folder"] }),
                w.jsx("button", { disabled: u, onClick: () => t({ state: "idle", current: 0, total: 0, results: [], error: null, outputDirectory: "" }), children: "Clear" }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Y3() {
  const e = fe((d) => d.preview),
    t = fe((d) => d.runState),
    r = fe((d) => {
      const p = d.activeGraph();
      return (
        (!!p.previewNodeId && p.nodes.some((f) => f.id === p.previewNodeId)) ||
        p.nodes.some((f) => f.data.nodeType === "preview")
      );
    }),
    q = fe((d) => {
      const p = d.activeGraph();
      return p.previewNodeId
        ? p.nodes.find((f) => f.id === p.previewNodeId)?.data.label ?? "Pinned output"
        : "Output preview";
    }),
    [o, s] = D.useState(52),
    [u, l] = D.useState(!1),
    [m, a] = D.useState(1),
    [c, v] = D.useState({ x: 0, y: 0 }),
    [C, T] = D.useState(!1),
    [N, k] = D.useState(!1),
    [M, I] = D.useState(null),
    d = D.useRef(null),
    A = D.useRef(null),
    b = D.useRef(null),
    p = !!(e.beforeUrl && e.afterUrl),
    f = (h) => {
      const g = d.current?.getBoundingClientRect();
      g && s(Math.max(0, Math.min(100, ((h - g.left) / g.width) * 100)));
    },
    h = (g) => {
      const y = Math.max(0.5, Math.min(4, g));
      (a(y), y === 1 && v({ x: 0, y: 0 }));
    },
    g = (y) => {
      const S = d.current?.getBoundingClientRect(),
        x = b.current;
      if (!S || !x || !e.width || !e.height) return;
      const P = (y.clientX - S.left - S.width / 2 - c.x) / m + S.width / 2,
        R = (y.clientY - S.top - S.height / 2 - c.y) / m + S.height / 2,
        E = Math.min(S.width / e.width, S.height / e.height),
        F = e.width * E,
        K = e.height * E,
        B = (S.width - F) / 2,
        Z = (S.height - K) / 2;
      if (P < B || P >= B + F || R < Z || R >= Z + K) return;
      const Q = Math.min(e.width - 1, Math.max(0, Math.floor(((P - B) / F) * e.width))),
        J = Math.min(e.height - 1, Math.max(0, Math.floor(((R - Z) / K) * e.height))),
        G = x.getContext("2d", { willReadFrequently: !0 })?.getImageData(Q, J, 1, 1).data;
      if (!G) return;
      const U = `#${[G[0], G[1], G[2]].map((L) => L.toString(16).padStart(2, "0")).join("")}`.toUpperCase();
      I({ x: Q, y: J, color: U, rgba: `rgba(${G[0]}, ${G[1]}, ${G[2]}, ${(G[3] / 255).toFixed(2)})` });
    },
    y = (S) => {
      const x = e.analysis?.[S] ?? [],
        P = Math.max(1, e.analysis?.peak ?? 1);
      return x.map((R, E) => `${(E / Math.max(1, x.length - 1)) * 100},${42 - (R / P) * 38}`).join(" ");
    };
  D.useEffect(() => {
    if (!e.afterUrl || !b.current) return;
    const S = new Image();
    ((S.onload = () => {
      const x = b.current;
      if (!x) return;
      ((x.width = S.naturalWidth),
        (x.height = S.naturalHeight),
        x.getContext("2d", { willReadFrequently: !0 })?.drawImage(S, 0, 0));
    }),
      (S.src = e.afterUrl));
  }, [e.afterUrl]);
  return w.jsx(si, {
    children:
      r &&
      w.jsxs(xt.section, {
        className: `output-preview glass-panel ${u ? "collapsed" : ""}`,
        initial: { y: 30, opacity: 0, scale: 0.97 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: 30, opacity: 0, scale: 0.97 },
        transition: { type: "spring", stiffness: 340, damping: 30 },
        children: [
          w.jsxs("header", {
            children: [
              w.jsxs("div", {
                children: [
                  w.jsx(KN, { size: 15 }),
                  w.jsx("strong", { children: q }),
                  w.jsxs("span", {
                    "aria-live": "polite",
                    className: `live-preview-state ${t === "running" ? "updating" : ""} ${p ? "" : "waiting"}`,
                    children: [
                      w.jsx("i", {}),
                      t === "running" ? "Rendering…" : p ? "Ready" : "Waiting",
                    ],
                  }),
                ],
              }),
              w.jsxs("div", {
                children: [
                  p &&
                    w.jsxs("span", {
                      className: "preview-zoom-controls",
                      children: [
                        w.jsx("button", {
                          onClick: () => h(m - 0.25),
                          "aria-label": "Zoom preview out",
                          children: "−",
                        }),
                        w.jsx("button", {
                          onClick: () => h(1),
                          "aria-label": "Fit preview",
                          children: `${Math.round(m * 100)}%`,
                        }),
                        w.jsx("button", {
                          onClick: () => h(m + 0.25),
                          "aria-label": "Zoom preview in",
                          children: "+",
                        }),
                      ],
                    }),
                  p &&
                    w.jsx("button", {
                      className: `preview-tool-button ${C ? "active" : ""}`,
                      onClick: () => T((S) => !S),
                      title: "Toggle RGB histogram",
                      "aria-label": "Toggle RGB histogram",
                      children: w.jsx(Rh, { name: "ChartNoAxesCombined", size: 14 }),
                    }),
                  p &&
                    w.jsx("button", {
                      className: `preview-tool-button ${N ? "active" : ""}`,
                      onClick: () => k((S) => !S),
                      title: "Sample processed pixels",
                      "aria-label": "Sample processed pixels",
                      children: w.jsx(Rh, { name: "Pipette", size: 14 }),
                    }),
                  M &&
                    w.jsxs("code", {
                      className: "sampled-color",
                      title: `${M.rgba} at ${M.x}, ${M.y}`,
                      children: [w.jsx("i", { style: { background: M.color } }), M.color],
                    }),
                  p
                    ? w.jsxs("code", { children: [e.width, " × ", e.height] })
                    : w.jsx("code", { children: "NO OUTPUT" }),
                  w.jsx("button", {
                    className: "icon-button",
                    onClick: () => l((h) => !h),
                    "aria-label": u ? "Expand preview" : "Collapse preview",
                    children: w.jsx(z1, { size: 15 }),
                  }),
                ],
              }),
            ],
          }),
          !u && p &&
            w.jsxs("div", {
              className: `compare-stage ${t === "running" ? "updating" : ""} ${N ? "is-sampling" : ""}`,
              ref: d,
              onWheel: (g) => {
                (g.preventDefault(), h(m + (g.deltaY < 0 ? 0.2 : -0.2)));
              },
              onPointerDown: (S) => {
                if (N) {
                  (g(S), (A.current = { type: "sample" }));
                  return;
                }
                S.currentTarget.setPointerCapture(S.pointerId);
                if ((S.shiftKey || S.button === 1) && m > 1) {
                  A.current = { type: "pan", x: S.clientX, y: S.clientY, origin: c };
                  return;
                }
                (A.current = { type: "compare" }, f(S.clientX));
              },
              onPointerMove: (S) => {
                if (N) return;
                if (!S.currentTarget.hasPointerCapture(S.pointerId)) return;
                A.current?.type === "pan"
                  ? v({
                      x: A.current.origin.x + S.clientX - A.current.x,
                      y: A.current.origin.y + S.clientY - A.current.y,
                    })
                  : f(S.clientX);
              },
              onPointerUp: () => (A.current = null),
              children: [
                w.jsx("img", {
                  src: e.afterUrl,
                  alt: "Processed output",
                  draggable: !1,
                  style: { transform: `translate(${c.x}px, ${c.y}px) scale(${m})` },
                }),
                w.jsx("div", {
                  className: "before-layer",
                  style: {
                    width: "100%",
                    clipPath: `inset(0 ${100 - o}% 0 0)`,
                  },
                  children: w.jsx("img", {
                    src: e.beforeUrl,
                    alt: "Original input",
                    draggable: !1,
                    style: { transform: `translate(${c.x}px, ${c.y}px) scale(${m})` },
                  }),
                }),
                w.jsx("span", {
                  className: "compare-label before-label",
                  children: "BEFORE",
                }),
                w.jsx("span", {
                  className: "compare-label after-label",
                  children: "AFTER",
                }),
                w.jsx("div", {
                  className: "compare-handle",
                  style: { left: `${o}%` },
                  children: w.jsxs("i", {
                    children: [w.jsx("span", {}), w.jsx("span", {})],
                  }),
                }),
                C && e.analysis &&
                  w.jsxs("div", {
                    className: "preview-histogram",
                    children: [
                      w.jsxs("div", {
                        children: [
                          w.jsx("strong", { children: "RGB HISTOGRAM" }),
                          w.jsxs("span", { children: ["avg ", e.analysis.average?.map((S) => Math.round(S)).join(" · ")] }),
                        ],
                      }),
                      w.jsxs("svg", {
                        viewBox: "0 0 100 44",
                        preserveAspectRatio: "none",
                        "aria-label": "Processed image RGB histogram",
                        children: [
                          w.jsx("polyline", { className: "hist-red", points: y("red") }),
                          w.jsx("polyline", { className: "hist-green", points: y("green") }),
                          w.jsx("polyline", { className: "hist-blue", points: y("blue") }),
                          w.jsx("polyline", { className: "hist-luma", points: y("luminance") }),
                        ],
                      }),
                    ],
                  }),
                w.jsx("canvas", { ref: b, className: "preview-sample-canvas", "aria-hidden": "true" }),
              ],
            }),
          !u && !p &&
            w.jsxs("div", {
              className: "preview-empty-state",
              children: [
                w.jsx(KN, { size: 28 }),
                w.jsx("strong", { children: "Preview node is waiting" }),
                w.jsx("span", {
                  children: "Connect an image and run the pipeline to render output.",
                }),
              ],
            }),
          !u &&
            w.jsxs("footer", {
              children: [
                w.jsx("span", {
                  children: p
                    ? N
                      ? "Click the processed image to sample its exact pixel color."
                      : m > 1
                      ? "Drag to compare · Shift-drag to pan · Scroll to zoom."
                      : "Drag to compare · Scroll to zoom."
                    : "This panel is shown because the graph contains a Preview node.",
                }),
                p &&
                  w.jsxs("a", {
                    href: e.afterUrl,
                    download: "fluxel-output.png",
                    children: [w.jsx(nh, { size: 14 }), "Quick export"],
                  }),
              ],
            }),
        ],
      }),
  });
}
const K3 = ["input", "transform", "filter", "ai", "logic", "output", "utility"];
let installedAIPackIds = new Set();
async function loadAIPacks() {
  const packs = window.fluxelDesktop?.listAIPacks
    ? await window.fluxelDesktop.listAIPacks()
    : [];
  installedAIPackIds = new Set(packs.filter((pack) => pack.installed).map((pack) => pack.id));
  return packs;
}
function Z3() {
  const e = fe((u) => u.sidebarOpen),
    t = fe((u) => u.toggleSidebar),
    [r, o] = D.useState(""),
    [installed, setInstalled] = D.useState(installedAIPackIds),
    refreshPacks = D.useCallback(() => {
      loadAIPacks().then(() => setInstalled(new Set(installedAIPackIds))).catch(() => setInstalled(new Set()));
    }, []),
    s = D.useMemo(() => {
      const u = r.trim().toLowerCase();
      return u
        ? lf.filter((l) =>
            `${l.label} ${l.description} ${l.category}`
              .toLowerCase()
              .includes(u),
          )
        : lf;
    }, [r]);
  D.useEffect(() => {
    refreshPacks();
    window.addEventListener("fluxel:ai-packs-changed", refreshPacks);
    return () => window.removeEventListener("fluxel:ai-packs-changed", refreshPacks);
  }, [refreshPacks]);
  return w.jsx(si, {
    initial: !1,
    children:
      e &&
      w.jsxs(xt.aside, {
        className: "sidebar glass-panel",
        initial: { x: -24, opacity: 0, width: 0 },
        animate: { x: 0, opacity: 1, width: 278 },
        exit: { x: -24, opacity: 0, width: 0 },
        transition: { duration: 0.2, ease: "easeOut" },
        children: [
          w.jsxs("div", {
            className: "sidebar-head",
            children: [
              w.jsxs("div", {
                children: [
                  w.jsx("span", {
                    className: "eyebrow",
                    children: "NODE LIBRARY",
                  }),
                  w.jsx("h2", { children: "Build your flow" }),
                ],
              }),
              w.jsx("button", {
                className: "icon-button",
                onClick: t,
                "aria-label": "Collapse node library",
                children: w.jsx(O1, { size: 17 }),
              }),
            ],
          }),
          w.jsxs("label", {
            className: "search-field",
            children: [
              w.jsx(sf, { size: 15 }),
              w.jsx("input", {
                value: r,
                onChange: (u) => o(u.target.value),
                placeholder: "Search nodes…",
                "aria-label": "Search nodes",
              }),
              w.jsx("kbd", { children: "/" }),
            ],
          }),
          w.jsxs("div", {
            className: "node-library",
            children: [
              K3.map((u) => {
                const l = s.filter((d) => d.category === u);
                return l.length
                  ? w.jsxs(
                      "section",
                      {
                        className: "node-category",
                        children: [
                          w.jsxs("div", {
                            className: "category-title",
                            children: [
                              w.jsx("span", { style: { background: Zi[u] } }),
                              cb[u],
                              w.jsx("small", { children: l.length }),
                            ],
                          }),
                          w.jsx("div", {
                            className: "library-items",
                            children: l.map((d) => {
                              const locked = !!d.requiresPack && !installed.has(d.requiresPack);
                              return w.jsxs(
                                xt.div,
                                {
                                  className: `library-node ${locked ? "locked" : ""}`,
                                  draggable: !locked,
                                  onClick: () => locked && window.dispatchEvent(new CustomEvent("fluxel:ai-models")),
                                  onDragStartCapture: (p) => {
                                    if (locked) {
                                      p.preventDefault();
                                      window.dispatchEvent(new CustomEvent("fluxel:ai-models"));
                                      return;
                                    }
                                    (p.dataTransfer.setData(
                                      "application/fluxel-node",
                                      d.type,
                                    ),
                                      document.documentElement.classList.add("node-library-dragging"),
                                      (p.dataTransfer.effectAllowed = "move"));
                                  },
                                  onDragEndCapture: () => {
                                    (document.documentElement.classList.remove("node-library-dragging"),
                                      (xD = null),
                                      clearEdgeInsertionTarget());
                                  },
                                  whileHover: { x: 2, scale: 1.008 },
                                  whileTap: { scale: 0.985 },
                                  tabIndex: 0,
                                  role: "button",
                                  "aria-label": locked ? `${d.label} requires an AI pack` : `Drag ${d.label} onto canvas`,
                                  children: [
                                    w.jsx("div", {
                                      className: "library-icon",
                                      style: {
                                        color: Zi[u],
                                        background: `${Zi[u]}16`,
                                      },
                                      children: w.jsx(Rh, {
                                        name: d.icon,
                                        size: 16,
                                      }),
                                    }),
                                    w.jsxs("div", {
                                      children: [
                                        w.jsx("strong", { children: d.label }),
                                        w.jsx("span", {
                                          children: d.description,
                                        }),
                                      ],
                                    }),
                                    w.jsx(H1, {
                                      className: "library-grip",
                                      size: 14,
                                    }),
                                    locked && w.jsx("span", { className: "library-pack-badge", children: "INSTALL" }),
                                  ],
                                },
                                d.type,
                              );
                            }),
                          }),
                        ],
                      },
                      u,
                    )
                  : null;
              }),
              !s.length &&
                w.jsxs("div", {
                  className: "empty-search",
                  children: [
                    w.jsx(sf, { size: 24 }),
                    w.jsxs("span", { children: ["No nodes match “", r, "”"] }),
                  ],
                }),
            ],
          }),
          w.jsxs("div", {
            className: "sidebar-tip",
            children: [
              w.jsx("span", { children: "TIP" }),
              " Select a cable and press Delete, or double-click it, to disconnect.",
            ],
          }),
        ],
      }),
  });
}
const q3 = Array.from({ length: 14 }, (e, t) => ({
  angle: (t / 14) * Math.PI * 2,
  distance: 54 + (t % 4) * 9,
  color: ["var(--accent)", "#50c8ff", "#7ee6a8", "#d79cff"][t % 4],
}));
function Q3({ visible: e }) {
  return w.jsx(si, {
    children:
      e &&
      w.jsxs(xt.div, {
        className: "success-burst",
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: [
          w.jsx(xt.div, {
            className: "success-ring",
            initial: { scale: 0.4, opacity: 0.9 },
            animate: { scale: 1.65, opacity: 0 },
            transition: { duration: 0.72, ease: "easeOut" },
          }),
          q3.map((t, r) =>
            w.jsx(
              xt.i,
              {
                style: { background: t.color },
                initial: { x: 0, y: 0, scale: 0, opacity: 1 },
                animate: {
                  x: Math.cos(t.angle) * t.distance,
                  y: Math.sin(t.angle) * t.distance,
                  scale: [0, 1, 0.4],
                  opacity: [1, 1, 0],
                },
                transition: {
                  duration: 0.78,
                  delay: r * 0.012,
                  ease: "easeOut",
                },
              },
              r,
            ),
          ),
          w.jsx(xt.span, {
            initial: { scale: 0.72, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { type: "spring", stiffness: 390, damping: 24 },
            children: "Pipeline complete",
          }),
        ],
      }),
  });
}
function AIModelsManager() {
  const [open, setOpen] = D.useState(!1),
    [packs, setPacks] = D.useState([]),
    [busy, setBusy] = D.useState(null),
    [progress, setProgress] = D.useState({}),
    [confirming, setConfirming] = D.useState(null),
    addToast = fe((state) => state.addToast),
    refresh = D.useCallback(async () => {
      try { setPacks(await loadAIPacks()); }
      catch { setPacks([]); }
    }, []);
  D.useEffect(() => {
    const show = () => { setOpen(!0); refresh(); };
    const close = (event) => event.key === "Escape" && setOpen(!1);
    window.addEventListener("fluxel:ai-models", show);
    window.addEventListener("keydown", close);
    const stopProgress = window.fluxelDesktop?.onAIDownloadProgress?.((update) =>
      setProgress((current) => ({ ...current, [update.packId]: update })),
    );
    return () => {
      window.removeEventListener("fluxel:ai-models", show);
      window.removeEventListener("keydown", close);
      stopProgress?.();
    };
  }, [refresh]);
  const changed = async () => {
    await refresh();
    window.dispatchEvent(new CustomEvent("fluxel:ai-packs-changed"));
  };
  const install = async (pack) => {
    setBusy(pack.id);
    setProgress((current) => ({ ...current, [pack.id]: { progress: 0 } }));
    try {
      await window.fluxelDesktop.installAIPack(pack.id);
      await changed();
      addToast({ title: `${pack.name} installed`, message: `${pack.name} is now unlocked in the node library.`, tone: "success" });
    } catch (error) {
      addToast({ title: "Model installation stopped", message: error instanceof Error ? error.message : String(error), tone: "error" });
      await refresh();
    } finally { setBusy(null); }
  };
  const cancel = async (pack) => {
    await window.fluxelDesktop.cancelAIPackInstall(pack.id);
  };
  const remove = async (pack) => {
    if (confirming !== pack.id) { setConfirming(pack.id); return; }
    setBusy(pack.id);
    try {
      await window.fluxelDesktop.removeAIPack(pack.id);
      await changed();
      addToast({
        title: pack.installed ? `${pack.name} removed` : "Incomplete AI download discarded",
        message: pack.installed ? "Existing nodes remain in saved graphs and can be re-enabled by reinstalling the model." : "Downloaded and temporary files were removed.",
        tone: "neutral",
      });
    } catch (error) {
      addToast({ title: "Could not remove model", message: error instanceof Error ? error.message : String(error), tone: "error" });
    } finally { setBusy(null); setConfirming(null); }
  };
  return w.jsx(si, {
    children: open && w.jsx(xt.div, {
      className: "ai-models-backdrop",
      initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 },
      onMouseDown: (event) => event.target === event.currentTarget && setOpen(!1),
      children: w.jsxs(xt.section, {
        className: "ai-models-dialog glass-panel",
        role: "dialog", "aria-modal": "true", "aria-labelledby": "ai-models-title",
        initial: { y: 18, opacity: 0, scale: 0.97 }, animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: 12, opacity: 0, scale: 0.98 }, transition: { duration: 0.18 },
        children: [
          w.jsxs("header", { children: [
            w.jsxs("div", { className: "ai-models-title", children: [
              w.jsx("span", { children: w.jsx(ab, { size: 19 }) }),
              w.jsxs("div", { children: [
                w.jsx("small", { children: "LOCAL CAPABILITIES" }),
                w.jsx("h2", { id: "ai-models-title", children: "AI Models" }),
              ] }),
            ] }),
            w.jsx("button", { className: "icon-button", onClick: () => setOpen(!1), "aria-label": "Close AI Models", children: w.jsx(cu, { size: 16 }) }),
          ] }),
          w.jsxs("div", { className: "ai-models-hero", children: [
            w.jsxs("div", { children: [
              w.jsx("strong", { children: "Add only what you need." }),
              w.jsx("p", { children: "Models download once, run entirely on this computer, and unlock their nodes immediately." }),
            ] }),
            w.jsx("span", { children: `${packs.filter((pack) => pack.installed).length} INSTALLED` }),
          ] }),
          w.jsx("div", { className: "ai-pack-list", children: packs.length
            ? packs.map((pack) => {
                const isBusy = busy === pack.id,
                  download = progress[pack.id],
                  percent = Math.round((download?.progress || 0) * 100),
                  componentPercent = Math.round((download?.componentProgress || 0) * 100),
                  componentLabel = download?.componentLabel || (download?.component === "runtime" ? "AI runtime" : download?.component === "model" ? "AI model" : "AI package"),
                  progressLabel = download?.phase === "install"
                    ? `Installing ${componentLabel}`
                    : download?.component
                      ? `Downloading ${componentLabel} · ${componentPercent}% of component · ${percent}% overall`
                      : `Downloading and verifying · ${percent}%`;
                return w.jsxs("article", { className: `ai-pack-card ${pack.installed ? "installed" : ""}`, children: [
                  w.jsxs("div", { className: "ai-pack-icon", children: [w.jsx(ab, { size: 20 }), w.jsx("i", {})] }),
                  w.jsxs("div", { className: "ai-pack-copy", children: [
                    w.jsxs("div", { className: "ai-pack-heading", children: [
                      w.jsxs("div", { children: [w.jsx("h3", { children: pack.name }), w.jsx("span", { children: pack.outdated ? "UPDATE" : pack.installed ? "READY" : pack.partial ? "INCOMPLETE" : "AVAILABLE" })] }),
                      w.jsx("code", { children: pack.scaleLabel || `${pack.scale}×` }),
                    ] }),
                    w.jsx("p", { children: pack.description }),
                    w.jsxs("div", { className: "ai-pack-meta", children: [
                      w.jsx("span", { children: pack.model }), w.jsx("i", {}),
                      w.jsx("span", { children: pack.sizeLabel }), w.jsx("i", {}),
                      w.jsx("span", { className: pack.compatible ? "ai-pack-compatible" : "ai-pack-incompatible", children: pack.compatibilityLabel }), w.jsx("i", {}),
                      w.jsx("a", { href: pack.licenseUrl, target: "_blank", rel: "noreferrer", children: pack.license }),
                    ] }),
                    isBusy && !pack.installed && w.jsxs("div", { className: "ai-download-progress", children: [
                      w.jsx("div", { children: w.jsx("span", { style: { width: `${percent}%` } }) }),
                      w.jsx("small", { children: progressLabel }),
                    ] }),
                  ] }),
                  w.jsx("div", { className: "ai-pack-actions", children: isBusy
                    ? w.jsx("button", { className: "subtle", onClick: () => cancel(pack), children: "Pause" })
                    : w.jsxs(w.Fragment, { children: [
                        (!pack.installed || pack.outdated) && w.jsxs("button", { className: "ai-install-button", disabled: pack.compatible === !1 || confirming === pack.id, onClick: () => install(pack), children: [w.jsx(nh, { size: 14 }), pack.compatible === !1 ? "Unavailable" : pack.outdated ? "Update" : pack.partial ? "Resume" : "Install"] }),
                        pack.removable && w.jsx("button", {
                          className: confirming === pack.id ? "danger confirm" : "subtle",
                          onClick: () => remove(pack),
                          children: confirming === pack.id ? (pack.installed ? "Confirm remove" : "Confirm discard") : (pack.installed ? "Remove" : "Discard"),
                        }),
                      ] }),
                  }),
                ] }, pack.id);
              })
            : w.jsxs("div", { className: "ai-models-empty", children: [w.jsx(ab, { size: 24 }), w.jsx("strong", { children: "Desktop app required" }), w.jsx("span", { children: "AI feature packs are managed by the Fluxel desktop app." })] }) }),
          w.jsxs("footer", { children: [
            w.jsxs("span", { children: [w.jsx("i", {}), "Runs locally after installation"] }),
            window.fluxelDesktop?.openAIModelFolder && w.jsxs("button", { onClick: () => window.fluxelDesktop.openAIModelFolder(), children: [w.jsx(GN, { size: 14 }), "Open model folder"] }),
          ] }),
        ],
      }),
    }),
  });
}
async function resolveMaskEditorInput(nodeId) {
  const graph = structuredClone(fe.getState().activeGraph()), target = graph.nodes.find((node) => node.id === nodeId);
  if (!target || target.data.nodeType !== "paintMask") throw new Error("The mask node is no longer available.");
  const ancestors = new Set(), visit = (id) => graph.edges.filter((edge) => edge.target === id).forEach((edge) => {
    if (!ancestors.has(edge.source)) { ancestors.add(edge.source); visit(edge.source); }
  });
  visit(nodeId);
  const outputs = new Map();
  for (const node of jb(graph)) {
    if (!ancestors.has(node.id)) continue;
    const inputs = Db(node, graph.edges, outputs); Rb(node, inputs);
    outputs.set(node.id, await Ib(node, inputs));
  }
  const targetInputs = Db(target, graph.edges, outputs);
  return Ty(targetInputs.image, "Paint Mask");
}
function MaskEditorDialog() {
  const [nodeId, setNodeId] = D.useState(null), [sourceUrl, setSourceUrl] = D.useState(""), [error, setError] = D.useState(""),
    [loading, setLoading] = D.useState(!1), [tool, setTool] = D.useState("add"), [size, setSize] = D.useState(72),
    [hardness, setHardness] = D.useState(70), [opacity, setOpacity] = D.useState(55), [zoom, setZoom] = D.useState(100),
    [revision, setRevision] = D.useState(0), displayRef = D.useRef(null), maskRef = D.useRef(null), imageRef = D.useRef(null), drawingRef = D.useRef(!1), lastRef = D.useRef(null);
  const close = () => { setNodeId(null); setSourceUrl(""); setError(""); };
  D.useEffect(() => {
    const open = async (event) => {
      const id = String(event.detail?.nodeId || ""); if (!id) return;
      setNodeId(id); setLoading(!0); setError("");
      try { const image = await resolveMaskEditorInput(id); setSourceUrl(Cy(image)); }
      catch (reason) { setError(reason instanceof Error ? reason.message : String(reason)); }
      finally { setLoading(!1); }
    };
    const key = (event) => event.key === "Escape" && nodeId && close();
    window.addEventListener("fluxel:mask-editor", open); window.addEventListener("keydown", key);
    return () => { window.removeEventListener("fluxel:mask-editor", open); window.removeEventListener("keydown", key); };
  }, [nodeId]);
  const redraw = D.useCallback(() => {
    const display = displayRef.current, mask = maskRef.current, image = imageRef.current;
    if (!display || !mask || !image) return;
    const context = display.getContext("2d"); if (!context) return;
    context.clearRect(0, 0, display.width, display.height); context.drawImage(image, 0, 0);
    const overlay = document.createElement("canvas"); overlay.width = display.width; overlay.height = display.height;
    const overlayContext = overlay.getContext("2d"); overlayContext.fillStyle = "#a855f7"; overlayContext.fillRect(0, 0, overlay.width, overlay.height);
    overlayContext.globalCompositeOperation = "destination-in"; overlayContext.drawImage(mask, 0, 0);
    context.save(); context.globalAlpha = opacity / 100; context.drawImage(overlay, 0, 0); context.restore();
  }, [opacity]);
  D.useEffect(() => {
    if (!sourceUrl || !nodeId) return;
    const image = new Image(); image.onload = () => {
      imageRef.current = image;
      const display = displayRef.current, mask = maskRef.current; if (!display || !mask) return;
      display.width = image.naturalWidth; display.height = image.naturalHeight; mask.width = image.naturalWidth; mask.height = image.naturalHeight;
      const existing = fe.getState().activeGraph().nodes.find((node) => node.id === nodeId)?.data.params.maskDataUrl;
      if (existing) {
        const saved = new Image(); saved.onload = () => {
          const context = mask.getContext("2d", { willReadFrequently: !0 }); context.clearRect(0, 0, mask.width, mask.height); context.drawImage(saved, 0, 0, mask.width, mask.height);
          const pixels = context.getImageData(0, 0, mask.width, mask.height);
          for (let i = 0; i < pixels.data.length; i += 4) { const value = Math.max(pixels.data[i], pixels.data[i + 1], pixels.data[i + 2]); pixels.data[i] = 255; pixels.data[i + 1] = 255; pixels.data[i + 2] = 255; pixels.data[i + 3] = value; }
          context.putImageData(pixels, 0, 0); setRevision((value) => value + 1);
        }; saved.src = String(existing);
      } else { mask.getContext("2d").clearRect(0, 0, mask.width, mask.height); setRevision((value) => value + 1); }
    }; image.src = sourceUrl;
  }, [sourceUrl, nodeId]);
  D.useEffect(() => { redraw(); }, [redraw, revision]);
  const point = (event) => {
    const canvas = displayRef.current, rect = canvas?.getBoundingClientRect();
    return !canvas || !rect ? null : { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height };
  };
  const dab = (from, to) => {
    const mask = maskRef.current; if (!mask) return;
    const context = mask.getContext("2d"), distance = Math.hypot(to.x - from.x, to.y - from.y), spacing = Math.max(1, size * 0.12), count = Math.max(1, Math.ceil(distance / spacing));
    context.save(); context.globalCompositeOperation = tool === "erase" ? "destination-out" : "source-over";
    for (let step = 0; step <= count; step += 1) {
      const x = from.x + (to.x - from.x) * step / count, y = from.y + (to.y - from.y) * step / count, radius = size / 2;
      const gradient = context.createRadialGradient(x, y, radius * hardness / 100, x, y, radius);
      gradient.addColorStop(0, "rgba(255,255,255,1)"); gradient.addColorStop(1, hardness >= 100 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)");
      context.fillStyle = gradient; context.beginPath(); context.arc(x, y, radius, 0, Math.PI * 2); context.fill();
    }
    context.restore(); setRevision((value) => value + 1);
  };
  const save = () => {
    const mask = maskRef.current; if (!mask || !nodeId) return;
    const output = document.createElement("canvas"); output.width = mask.width; output.height = mask.height;
    const context = output.getContext("2d"); context.fillStyle = "#000"; context.fillRect(0, 0, output.width, output.height); context.drawImage(mask, 0, 0);
    fe.getState().beginGraphEdit(); fe.getState().setNodeParam(nodeId, "maskDataUrl", output.toDataURL("image/png"), !1);
    fe.getState().addToast({ title: "Mask saved", message: "The painted region is saved to this node.", tone: "success" }); close();
  };
  const clearMask = () => { const mask = maskRef.current; mask?.getContext("2d")?.clearRect(0, 0, mask.width, mask.height); setRevision((value) => value + 1); };
  const invertMask = () => {
    const mask = maskRef.current, context = mask?.getContext("2d", { willReadFrequently: !0 }); if (!mask || !context) return;
    const pixels = context.getImageData(0, 0, mask.width, mask.height);
    for (let i = 0; i < pixels.data.length; i += 4) { const value = 255 - pixels.data[i + 3]; pixels.data[i] = 255; pixels.data[i + 1] = 255; pixels.data[i + 2] = 255; pixels.data[i + 3] = value; }
    context.putImageData(pixels, 0, 0); setRevision((value) => value + 1);
  };
  return w.jsx(si, { children: nodeId && w.jsx(xt.div, { className: "mask-editor-backdrop", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children:
    w.jsxs(xt.section, { className: "mask-editor-dialog glass-panel", role: "dialog", "aria-modal": "true", initial: { y: 16, opacity: 0, scale: .98 }, animate: { y: 0, opacity: 1, scale: 1 }, children: [
      w.jsxs("header", { children: [w.jsxs("div", { children: [w.jsx("small", { children: "GENERATIVE FILL" }), w.jsx("h2", { children: "Paint editable area" })] }), w.jsx("button", { className: "icon-button", onClick: close, "aria-label": "Close mask editor", children: w.jsx(cu, { size: 17 }) })] }),
      w.jsxs("div", { className: "mask-editor-toolbar", children: [
        w.jsxs("div", { className: "mask-tool-group", children: [w.jsx("button", { className: tool === "add" ? "active" : "", onClick: () => setTool("add"), children: "Add" }), w.jsx("button", { className: tool === "erase" ? "active" : "", onClick: () => setTool("erase"), children: "Erase" })] }),
        w.jsxs("label", { children: [w.jsx("span", { children: "Size" }), w.jsx("input", { type: "range", min: 4, max: 320, value: size, onChange: (event) => setSize(Number(event.target.value)) }), w.jsx("code", { children: `${size}px` })] }),
        w.jsxs("label", { children: [w.jsx("span", { children: "Hardness" }), w.jsx("input", { type: "range", min: 0, max: 100, value: hardness, onChange: (event) => setHardness(Number(event.target.value)) }), w.jsx("code", { children: `${hardness}%` })] }),
        w.jsxs("label", { children: [w.jsx("span", { children: "Overlay" }), w.jsx("input", { type: "range", min: 15, max: 90, value: opacity, onChange: (event) => setOpacity(Number(event.target.value)) })] }),
        w.jsx("button", { className: "subtle", onClick: invertMask, children: "Invert" }), w.jsx("button", { className: "subtle", onClick: clearMask, children: "Clear" }),
      ] }),
      w.jsx("div", { className: "mask-editor-stage", children: loading ? w.jsx("span", { children: "Preparing connected image…" }) : error ? w.jsx("div", { className: "mask-editor-error", children: error }) : w.jsxs("div", { className: "mask-editor-canvas-wrap", style: { width: `${zoom}%` }, children: [
        w.jsx("canvas", { ref: displayRef, onPointerDown: (event) => { const current = point(event); if (!current) return; drawingRef.current = !0; lastRef.current = current; event.currentTarget.setPointerCapture(event.pointerId); dab(current, current); }, onPointerMove: (event) => { if (!drawingRef.current) return; const current = point(event); if (!current || !lastRef.current) return; dab(lastRef.current, current); lastRef.current = current; }, onPointerUp: () => { drawingRef.current = !1; lastRef.current = null; }, onPointerCancel: () => { drawingRef.current = !1; lastRef.current = null; } }),
        w.jsx("canvas", { ref: maskRef, hidden: !0 }),
      ] }) }),
      w.jsxs("footer", { children: [w.jsxs("label", { children: [w.jsx("span", { children: "Zoom" }), w.jsx("input", { type: "range", min: 40, max: 240, value: zoom, onChange: (event) => setZoom(Number(event.target.value)) }), w.jsx("code", { children: `${zoom}%` })] }), w.jsx("span", { children: "Purple pixels will be regenerated" }), w.jsx("button", { className: "subtle", onClick: close, children: "Cancel" }), w.jsx("button", { className: "mask-save-button", disabled: loading || !!error, onClick: save, children: "Save mask" })] }),
    ] }) }) });
}
function J3() {
  const e = fe((r) => r.toasts),
    t = fe((r) => r.removeToast);
  return w.jsx("div", {
    className: "toast-stack",
    "aria-live": "polite",
    children: w.jsx(si, {
      children: e.map((r) => {
        const o = r.tone === "success" ? lu : r.tone === "error" ? th : rh;
        return w.jsxs(
          xt.div,
          {
            className: `toast toast-${r.tone ?? "neutral"}`,
            initial: { x: 34, opacity: 0, scale: 0.94 },
            animate: { x: 0, opacity: 1, scale: 1 },
            exit: { x: 26, opacity: 0, scale: 0.96 },
            transition: { type: "spring", stiffness: 420, damping: 30 },
            children: [
              w.jsx("div", {
                className: "toast-icon",
                children: w.jsx(o, { size: 15 }),
              }),
              w.jsxs("div", {
                children: [
                  w.jsx("strong", { children: r.title }),
                  r.message && w.jsx("span", { children: r.message }),
                ],
              }),
              w.jsx("button", {
                onClick: () => t(r.id),
                "aria-label": "Dismiss notification",
                children: w.jsx(cu, { size: 13 }),
              }),
              w.jsx(xt.i, {
                initial: { scaleX: 1 },
                animate: { scaleX: 0 },
                transition: { duration: 3.2, ease: "linear" },
              }),
            ],
          },
          r.id,
        );
      }),
    }),
  });
}
function eD(e) {
  const t = { ...structuredClone(e), updatedAt: new Date().toISOString() };
  t.graphs.forEach((s) =>
    s.nodes.forEach((u) => {
      ((u.data.executionState = "idle"), delete u.data.error);
    }),
  );
  const r = new Blob([JSON.stringify(t, null, 2)], {
      type: "application/json",
    }),
    o = document.createElement("a");
  ((o.href = URL.createObjectURL(r)),
    (o.download = `${e.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "fluxel-project"}.fluxel.json`),
    o.click(),
    URL.revokeObjectURL(o.href));
}
async function tD(e) {
  const t = JSON.parse(await e.text());
  if (
    t.version !== 1 ||
    typeof t.name != "string" ||
    !Array.isArray(t.graphs) ||
    t.graphs.length === 0
  )
    throw new Error("This is not a valid Fluxel project file.");
  return (
    t.graphs.some((r) => r.id === t.activeGraphId) ||
      (t.activeGraphId = t.graphs[0].id),
    t
  );
}
function cD({ confirmation: e, onCancel: t, onConfirm: r }) {
  D.useEffect(() => {
    if (!e) return;
    const o = (s) => s.key === "Escape" && t();
    return (
      window.addEventListener("keydown", o),
      () => window.removeEventListener("keydown", o)
    );
  }, [e, t]);
  return w.jsx(si, {
    children:
      e &&
      w.jsx(xt.div, {
        className: "confirmation-backdrop",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onMouseDown: (o) => o.target === o.currentTarget && t(),
        children: w.jsxs(xt.section, {
          className: "confirmation-dialog glass-panel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "confirmation-title",
          initial: { y: 14, opacity: 0, scale: 0.97 },
          animate: { y: 0, opacity: 1, scale: 1 },
          exit: { y: 10, opacity: 0, scale: 0.98 },
          transition: { duration: 0.16, ease: "easeOut" },
          children: [
            w.jsx("div", {
              className: `confirmation-icon ${e.danger ? "danger" : ""}`,
              children: w.jsx(Rh, {
                name: e.danger ? "TriangleAlert" : "Save",
                size: 20,
              }),
            }),
            w.jsx("h2", { id: "confirmation-title", children: e.title }),
            w.jsx("p", { children: e.message }),
            w.jsxs("footer", {
              children: [
                w.jsx("button", {
                  className: "confirmation-cancel",
                  autoFocus: !0,
                  onClick: t,
                  children: "Cancel",
                }),
                w.jsx("button", {
                  className: e.danger
                    ? "confirmation-accept danger"
                    : "confirmation-accept",
                  onClick: r,
                  children: e.confirmLabel,
                }),
              ],
            }),
          ],
        }),
      }),
  });
}
function nD() {
  const e = fe((b) => b.project),
    t = fe((b) => b.runState),
    r = fe((b) => b.historyPast),
    o = fe((b) => b.historyFuture),
    s = fe((b) => b.sidebarOpen),
    u = fe((b) => b.theme),
    l = fe((b) => b.accent),
    d = fe((b) => b.reducedMotion),
    v = fe((b) => b.autoRun),
    A = fe((b) => b.setAutoRun),
    p = fe((b) => b.switchGraph),
    f = fe((b) => b.addGraph),
    h = fe((b) => b.toggleSidebar),
    g = fe((b) => b.toggleLog),
    y = fe((b) => b.undo),
    S = fe((b) => b.redo),
    x = fe((b) => b.setTheme),
    P = fe((b) => b.setAccent),
    C = fe((b) => b.setReducedMotion),
    T = fe((b) => b.replaceProject),
    N = fe((b) => b.addToast),
    k = D.useRef(null),
    [M, I] = D.useState(!1),
    [q, Z] = D.useState(null),
    R = () => {
      if (!q) return;
      (q.kind === "startup"
        ? fe.getState().saveStartupFile()
        : q.kind === "factory"
          ? fe.getState().restoreFactorySettings()
          : q.kind === "graph" && fe.getState().deleteGraph(q.graphId),
        Z(null));
    };
  return w.jsxs("header", {
    className: "topbar",
    children: [
      w.jsxs("div", {
        className: "brand-section",
        children: [
          !s &&
            w.jsx("button", {
              className: "icon-button",
              onClick: h,
              "aria-label": "Open node library",
              children: w.jsx(G1, { size: 17 }),
            }),
          w.jsxs("div", {
            className: "fluxel-mark",
            children: [w.jsx("i", {}), w.jsx("i", {}), w.jsx("i", {})],
          }),
          w.jsxs("div", {
            className: "brand-copy",
            children: [
              w.jsx("strong", { children: "Fluxel" }),
              w.jsx("span", { children: "Visual Processing Studio" }),
            ],
          }),
        ],
      }),
      w.jsxs("div", {
        className: "graph-tabs",
        role: "tablist",
        "aria-label": "Project graphs",
        children: [
          e.graphs.map((b) =>
            w.jsxs(
              "div",
              {
                className: `graph-tab-item ${e.activeGraphId === b.id ? "active" : ""}`,
                children: [
                  w.jsxs("button", {
                    className: "graph-tab-select",
                    onClick: () => p(b.id),
                    role: "tab",
                    "aria-selected": e.activeGraphId === b.id,
                    children: [
                      w.jsx("span", { children: b.name }),
                      e.activeGraphId === b.id &&
                        w.jsx(xt.i, {
                          layoutId: "active-graph-underline",
                          transition: {
                            type: "spring",
                            stiffness: 430,
                            damping: 34,
                          },
                        }),
                    ],
                  }),
                  e.graphs.length > 1 &&
                    w.jsx("button", {
                      className: "graph-tab-delete",
                      onClick: () =>
                        Z({
                          kind: "graph",
                          graphId: b.id,
                          title: `Delete “${b.name}”?`,
                          message:
                            "This removes the graph and its nodes from the current session. This cannot be undone.",
                          confirmLabel: "Delete graph",
                          danger: !0,
                        }),
                      "aria-label": `Delete ${b.name}`,
                      title: `Delete ${b.name}`,
                      children: w.jsx(cu, { size: 12 }),
                    }),
                ],
              },
              b.id,
            ),
          ),
          w.jsx("button", {
            className: "add-tab",
            onClick: f,
            "aria-label": "Add graph",
            children: w.jsx(Z1, { size: 14 }),
          }),
        ],
      }),
      w.jsxs("div", {
        className: "topbar-actions",
        children: [
          w.jsxs("div", {
            className: "toolbar-group history-tools",
            children: [
              w.jsx("button", {
                className: "icon-button",
                onClick: y,
                disabled: !r.length,
                "aria-label": "Undo",
                children: w.jsx(tx, { size: 16 }),
              }),
              w.jsx("button", {
                className: "icon-button",
                onClick: S,
                disabled: !o.length,
                "aria-label": "Redo",
                children: w.jsx(q1, { size: 16 }),
              }),
            ],
          }),
          w.jsxs("div", {
            className: "run-controls",
            children: [
              w.jsxs("button", {
                className: "run-button",
                onClick: () => mD(),
                disabled: t === "running" || t === "paused" || t === "stopping",
                children: [
                  w.jsx(K1, { size: 15, fill: "currentColor" }),
                  "Run",
                ],
              }),
              w.jsxs("button", {
                className: `auto-run-button ${v ? "active" : ""}`,
                onClick: () => A(!v),
                "aria-pressed": v,
                title: "Automatically run the pipeline after graph edits",
                children: [
                  w.jsx("i", { children: w.jsx("b", {}) }),
                  w.jsxs("span", {
                    children: [
                      w.jsx("strong", { children: "Auto run" }),
                      w.jsx("small", { children: v ? "On" : "Off" }),
                    ],
                  }),
                ],
              }),
              w.jsx("button", {
                className: `icon-button ${t === "paused" ? "active" : ""}`,
                onClick: Vb,
                disabled: t !== "running" && t !== "paused",
                "aria-label":
                  t === "paused" ? "Resume pipeline" : "Pause pipeline",
                children: w.jsx(Y1, { size: 16 }),
              }),
              w.jsx("button", {
                className: "icon-button danger-hover",
                onClick: zb,
                disabled: t === "idle",
                "aria-label": "Stop pipeline",
                children: w.jsx(F1, { size: 16 }),
              }),
            ],
          }),
          w.jsxs("div", {
            className: "toolbar-group",
            children: [
              w.jsx("button", {
                className: "icon-button",
                onClick: () => eD(e),
                "aria-label": "Download project JSON",
                children: w.jsx($1, { size: 16 }),
              }),
              w.jsx("button", {
                className: "icon-button",
                onClick: () => k.current?.click(),
                "aria-label": "Load project JSON",
                children: w.jsx(B1, { size: 16 }),
              }),
              w.jsx("input", {
                ref: k,
                hidden: !0,
                type: "file",
                accept: "application/json,.json",
                onChange: async (b) => {
                  const R = b.target.files?.[0];
                  if (R) {
                    try {
                      T(await tD(R));
                    } catch (V) {
                      N({
                        title: "Could not load project",
                        message:
                          V instanceof Error ? V.message : "Invalid file",
                        tone: "error",
                      });
                    }
                    b.target.value = "";
                  }
                },
              }),
              w.jsxs("button", {
                className: "icon-button startup-save-button",
                onClick: () =>
                  Z({
                    kind: "startup",
                    title: "Save current project as startup file?",
                    message: `“${e.name}” with ${e.graphs.length} graph${e.graphs.length === 1 ? "" : "s"} will replace the startup file loaded whenever Fluxel opens.`,
                    confirmLabel: "Save Startup File",
                    danger: !1,
                  }),
                "aria-label": "Save startup file",
                title: "Save Startup File",
                children: [
                  w.jsx(Rh, { name: "Save", size: 15 }),
                  w.jsx("span", { children: "Startup" }),
                ],
              }),
              w.jsx("button", {
                className: "icon-button",
                onClick: () => g(),
                "aria-label": "Toggle execution log",
                children: w.jsx(U1, { size: 16 }),
              }),
              w.jsx("button", {
                className: "icon-button",
                onClick: () => window.dispatchEvent(new CustomEvent("fluxel:templates")),
                "aria-label": "Open graph templates",
                title: "Graph templates",
                children: w.jsx(Rh, { name: "Layers3", size: 16 }),
              }),
              w.jsx("button", {
                className: "icon-button command-trigger",
                onClick: () => window.dispatchEvent(new CustomEvent("fluxel:command-palette")),
                "aria-label": "Open command palette",
                title: "Command palette · Ctrl/Cmd + K",
                children: w.jsx(sf, { size: 16 }),
              }),
              w.jsxs("button", {
                className: "ai-models-trigger",
                onClick: () => window.dispatchEvent(new CustomEvent("fluxel:ai-models")),
                "aria-label": "Manage local AI models",
                title: "AI Models",
                children: [w.jsx(ab, { size: 15 }), w.jsx("span", { children: "AI Models" })],
              }),
            ],
          }),
          w.jsxs("div", {
            className: "appearance-wrap",
            children: [
              w.jsx("button", {
                className: `icon-button ${M ? "active" : ""}`,
                onClick: () => I((b) => !b),
                "aria-label": "Appearance settings",
                children:
                  u === "dark"
                    ? w.jsx(of, { size: 16 })
                    : w.jsx(af, { size: 16 }),
              }),
              w.jsx(si, {
                children:
                  M &&
                  w.jsxs(xt.div, {
                    className: "appearance-popover glass-panel",
                    initial: { y: -8, opacity: 0, scale: 0.97 },
                    animate: { y: 0, opacity: 1, scale: 1 },
                    exit: { y: -8, opacity: 0, scale: 0.97 },
                    transition: { duration: 0.16 },
                    children: [
                      w.jsxs("div", {
                        className: "popover-title",
                        children: [
                          w.jsx("span", { children: "Appearance" }),
                          w.jsx("code", { children: "LOCAL" }),
                        ],
                      }),
                      w.jsxs("div", {
                        className: "theme-choice",
                        children: [
                          w.jsxs("button", {
                            className: u === "dark" ? "active" : "",
                            onClick: () => x("dark"),
                            children: [w.jsx(of, { size: 15 }), "Dark"],
                          }),
                          w.jsxs("button", {
                            className: u === "light" ? "active" : "",
                            onClick: () => x("light"),
                            children: [w.jsx(af, { size: 15 }), "Light"],
                          }),
                        ],
                      }),
                      w.jsxs("label", {
                        className: "accent-setting",
                        children: [
                          w.jsx("span", { children: "Accent" }),
                          w.jsx("input", {
                            type: "color",
                            value: l,
                            onChange: (b) => P(b.target.value),
                          }),
                          w.jsx("code", { children: l }),
                        ],
                      }),
                      w.jsxs("button", {
                        className: "motion-setting",
                        onClick: () => C(!d),
                        children: [
                          w.jsxs("span", {
                            children: [
                              w.jsx("strong", { children: "Reduce motion" }),
                              w.jsx("small", {
                                children: "Limit interface animation",
                              }),
                            ],
                          }),
                          w.jsx("i", {
                            className: d ? "active" : "",
                            children: w.jsx("b", {}),
                          }),
                        ],
                      }),
                      w.jsxs("button", {
                        className: "save-preferences-button",
                        onClick: () => {
                          (fe.getState().savePreferences(), I(!1));
                        },
                        children: [
                          w.jsx(Rh, { name: "Save", size: 14 }),
                          "Save Preferences",
                        ],
                      }),
                      w.jsxs("button", {
                        className: "restore-factory-button",
                        onClick: () => {
                          (I(!1),
                            Z({
                              kind: "factory",
                              title: "Restore factory settings?",
                              message:
                                "Saved appearance and execution preferences, the startup file, and the current session will reset to Fluxel defaults. Custom templates and downloaded project files are not deleted.",
                              confirmLabel: "Restore defaults",
                              danger: !0,
                            }));
                        },
                        children: [
                          w.jsx(Rh, { name: "RotateCcw", size: 14 }),
                          "Restore Factory Settings",
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          }),
          w.jsxs("div", {
            className: "save-state",
            children: [
              w.jsx("span", {}),
              w.jsx("small", { children: "Session only" }),
            ],
          }),
          w.jsx(cD, {
            confirmation: q,
            onCancel: () => Z(null),
            onConfirm: R,
          }),
        ],
      }),
    ],
  });
}
function rD(e) {
  return (
    e instanceof HTMLInputElement ||
    e instanceof HTMLTextAreaElement ||
    e instanceof HTMLSelectElement ||
    (e instanceof HTMLElement && e.isContentEditable)
  );
}
function uD() {
  const [e, t] = D.useState(!1),
    [r, o] = D.useState([]),
    [s, u] = D.useState("My workflow"),
    l = fe((g) => g.applyGraphTemplate),
    d = fe((g) => g.saveGraphTemplate),
    p = fe((g) => g.deleteGraphTemplate),
    f = D.useCallback(() => {
      try {
        o(JSON.parse(window.localStorage.getItem("fluxel.graph-templates") || "[]"));
      } catch {
        o([]);
      }
    }, []);
  D.useEffect(() => {
    const g = () => {
        (f(), t(!0));
      },
      y = () => f();
    return (
      window.addEventListener("fluxel:templates", g),
      window.addEventListener("fluxel:templates-updated", y),
      () => {
        (window.removeEventListener("fluxel:templates", g),
          window.removeEventListener("fluxel:templates-updated", y));
      }
    );
  }, [f]);
  if (!e) return null;
  const h = [...fluxelTemplates, ...r];
  return w.jsx(si, {
    children: w.jsx(xt.div, {
      className: "template-backdrop",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onMouseDown: (g) => g.target === g.currentTarget && t(!1),
      children: w.jsxs(xt.section, {
        className: "template-gallery glass-panel",
        initial: { y: 18, opacity: 0, scale: 0.98 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: 12, opacity: 0, scale: 0.98 },
        children: [
          w.jsxs("header", {
            children: [
              w.jsxs("div", {
                children: [
                  w.jsx(Rh, { name: "Layers3", size: 18 }),
                  w.jsxs("span", {
                    children: [w.jsx("strong", { children: "Graph templates" }), w.jsx("small", { children: "Reusable local workflows" })],
                  }),
                ],
              }),
              w.jsx("button", { className: "icon-button", onClick: () => t(!1), "aria-label": "Close templates", children: w.jsx(cu, { size: 16 }) }),
            ],
          }),
          w.jsx("div", {
            className: "template-grid",
            children: h.map((g) =>
              w.jsxs("article", {
                children: [
                  w.jsx("i", { className: g.id.startsWith("custom-") ? "custom" : "builtin" }),
                  w.jsx("strong", { children: g.name }),
                  w.jsx("p", { children: g.description }),
                  w.jsxs("footer", {
                    children: [
                      w.jsx("button", {
                        className: "primary-button",
                        onClick: () => {
                          (l(g), t(!1));
                        },
                        children: "Use template",
                      }),
                      g.id.startsWith("custom-") &&
                        w.jsx("button", {
                          className: "icon-button",
                          onClick: () => p(g.id),
                          "aria-label": `Delete ${g.name}`,
                          children: w.jsx(ex, { size: 14 }),
                        }),
                    ],
                  }),
                ],
              }, g.id),
            ),
          }),
          w.jsxs("form", {
            className: "save-template-row",
            onSubmit: (g) => {
              (g.preventDefault(), d(s), f());
            },
            children: [
              w.jsx("input", { value: s, onChange: (g) => u(g.target.value), placeholder: "Template name", "aria-label": "Template name" }),
              w.jsx("button", { className: "primary-button", type: "submit", children: "Save current graph" }),
            ],
          }),
        ],
      }),
    }),
  });
}
function oD({ visible: e, onClose: t }) {
  const [r, o] = D.useState("");
  D.useEffect(() => {
    e && o("");
  }, [e]);
  if (!e) return null;
  const s = [
      { label: "Run pipeline", hint: "Ctrl ↵", action: () => mD() },
      { label: "Open node menu", hint: "⇧ A", action: () => window.dispatchEvent(new CustomEvent("fluxel:open-add")) },
      { label: "Auto layout graph", hint: "", action: () => window.dispatchEvent(new CustomEvent("fluxel:auto-layout")) },
      { label: "Fit graph to view", hint: "", action: () => window.dispatchEvent(new CustomEvent("fluxel:fit-graph")) },
      { label: "Copy selected nodes", hint: "Ctrl C", action: () => fe.getState().copySelected() },
      { label: "Paste nodes", hint: "Ctrl V", action: () => fe.getState().pasteClipboard() },
      { label: "Toggle node library", hint: "", action: () => fe.getState().toggleSidebar() },
      { label: "Toggle execution log", hint: "", action: () => fe.getState().toggleLog() },
      { label: "Open graph templates", hint: "", action: () => window.dispatchEvent(new CustomEvent("fluxel:templates")) },
      { label: "Save Startup File", hint: "", action: () => fe.getState().saveStartupFile() },
      { label: "Clear Startup File", hint: "", action: () => fe.getState().clearStartupFile() },
      { label: "Save Preferences", hint: "", action: () => fe.getState().savePreferences() },
    ],
    u = s.filter((l) => l.label.toLowerCase().includes(r.trim().toLowerCase())),
    l = (d) => {
      (t(), window.setTimeout(d.action, 0));
    };
  return w.jsx(si, {
    children: w.jsx(xt.div, {
      className: "command-backdrop",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onMouseDown: (d) => d.target === d.currentTarget && t(),
      children: w.jsxs(xt.div, {
        className: "command-palette glass-panel",
        initial: { y: -18, opacity: 0, scale: 0.97 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: -12, opacity: 0, scale: 0.98 },
        transition: { duration: 0.16, ease: "easeOut" },
        children: [
          w.jsxs("div", {
            className: "command-search",
            children: [
              w.jsx(sf, { size: 17 }),
              w.jsx("input", {
                autoFocus: !0,
                value: r,
                placeholder: "Type a command…",
                "aria-label": "Search commands",
                onChange: (d) => o(d.target.value),
                onKeyDown: (d) => {
                  d.key === "Escape"
                    ? t()
                    : d.key === "Enter" && u[0] && (d.preventDefault(), l(u[0]));
                },
              }),
              w.jsx("kbd", { children: "ESC" }),
            ],
          }),
          w.jsx("div", {
            className: "command-list",
            children: u.length
              ? u.map((d, p) =>
                  w.jsxs(
                    "button",
                    {
                      className: p === 0 ? "active" : "",
                      onClick: () => l(d),
                      children: [
                        w.jsx("span", { children: d.label }),
                        d.hint && w.jsx("kbd", { children: d.hint }),
                      ],
                    },
                    d.label,
                  ),
                )
              : w.jsx("p", { children: "No matching commands" }),
          }),
          w.jsxs("footer", {
            children: [w.jsx("span", { children: "Fluxel commands" }), w.jsx("code", { children: `${u.length} results` })],
          }),
        ],
      }),
    }),
  });
}
function iD() {
  const e = fe((x) => x.project),
    t = fe((x) => {
      const P =
        x.project.graphs.find((C) => C.id === x.project.activeGraphId) ??
        x.project.graphs[0];
      return JSON.stringify({
        nodes: P.nodes.map((C) => [C.id, C.data.nodeType, C.data.params]),
        edges: P.edges.map((C) => [
          C.source,
          C.sourceHandle,
          C.target,
          C.targetHandle,
        ]),
      });
    }),
    r = fe((x) => x.theme),
    o = fe((x) => x.accent),
    s = fe((x) => x.reducedMotion),
    A = fe((x) => x.autoRun),
    u = fe((x) => x.undo),
    l = fe((x) => x.redo),
    d = fe((x) => x.deleteSelected),
    p = fe((x) => x.duplicateSelected),
    m = fe((x) => x.copySelected),
    b = fe((x) => x.pasteClipboard),
    _ = fe((x) => x.toggleNodeBypass),
    R = fe((x) => x.selectedNodeId),
    f = fe((x) => x.addToast),
    [h, g] = D.useState(!1),
    [V, H] = D.useState(!1),
    y = D.useRef(!1),
    E = D.useRef(!1);
  return (
    D.useEffect(() => {
      ((document.documentElement.dataset.theme = r),
        document.documentElement.style.setProperty("--accent", o),
        document.documentElement.classList.toggle("reduce-motion", s));
    }, [r, o, s]),
    D.useEffect(() => {
      const x = () => {
        y.current ||
          ((y.current = !0), g(!0), window.setTimeout(() => g(!1), 1250));
      };
      return (
        window.addEventListener("fluxel:pipeline-success", x),
        () => window.removeEventListener("fluxel:pipeline-success", x)
      );
    }, []),
    D.useEffect(() => {
      if (!E.current) {
        E.current = !0;
        return;
      }
      A && uf(420);
    }, [t, A]),
    D.useEffect(() => {
      const x = window.setTimeout(() => {
        fe.getState().activeGraph().nodes.some((P) => P.data.nodeType === "batchInput") || oh({ source: "live" });
      }, 650);
      return () => window.clearTimeout(x);
    }, []),
    D.useEffect(() => {
      const x = () => H((P) => !P);
      return (
        window.addEventListener("fluxel:command-palette", x),
        () => window.removeEventListener("fluxel:command-palette", x)
      );
    }, []),
    D.useEffect(() => {
      const x = (P) => {
        if (rD(P.target)) return;
        const C = P.metaKey || P.ctrlKey;
        C && P.key.toLowerCase() === "k"
          ? (P.preventDefault(), H((T) => !T))
          : C && P.key.toLowerCase() === "z"
          ? (P.preventDefault(), P.shiftKey ? l() : u())
          : C && P.key.toLowerCase() === "y"
            ? (P.preventDefault(), l())
            : C && P.key.toLowerCase() === "d"
              ? (P.preventDefault(), p())
              : C && P.key.toLowerCase() === "c"
                ? (P.preventDefault(), m())
                : C && P.key.toLowerCase() === "v"
                  ? (P.preventDefault(), b())
              : C && P.key === "Enter"
                ? (P.preventDefault(), mD())
                : !C && P.key.toLowerCase() === "b" && R
                  ? (P.preventDefault(), _(R))
                : (P.key === "Delete" || P.key === "Backspace") &&
                  (P.preventDefault(), d());
      };
      return (
        window.addEventListener("keydown", x),
        () => window.removeEventListener("keydown", x)
      );
    }, [u, l, p, m, b, _, R, d]),
    w.jsxs("div", {
      className: "app-shell",
      children: [
        w.jsx(nD, {}),
        w.jsxs("div", {
          className: "workspace-row",
          children: [w.jsx(Z3, {}), w.jsx(H3, {}), w.jsx(W3, {})],
        }),
        w.jsx(Y3, {}),
        w.jsx(yD, {}),
        w.jsx(oD, { visible: V, onClose: () => H(!1) }),
        w.jsx(uD, {}),
        w.jsx(AIModelsManager, {}),
        w.jsx(MaskEditorDialog, {}),
        w.jsx(X3, {}),
        w.jsx(J3, {}),
        w.jsx(Q3, { visible: h && !s }),
      ],
    })
  );
}
T2.createRoot(document.getElementById("root")).render(
  w.jsx(Fi.StrictMode, { children: w.jsx(b1, { children: w.jsx(iD, {}) }) }),
);
