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
          return ((n = Yt(13, a, i, m)), (n.elementType = J