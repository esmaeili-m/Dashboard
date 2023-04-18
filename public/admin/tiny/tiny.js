/*!
 * TinyMCE
 *
 * Copyright (c) 2022 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 6.3.1
 */
!function () {
    "use strict";
    var e = function (e) {
        if (null === e) return "null";
        if (void 0 === e) return "undefined";
        var t = typeof e;
        return "object" === t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" === t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t
    }, t = function (e) {
        return {eq: e}
    }, n = t((function (e, t) {
        return e === t
    })), o = function (e) {
        return t((function (t, n) {
            if (t.length !== n.length) return !1;
            for (var o = t.length, r = 0; r < o; r++) if (!e.eq(t[r], n[r])) return !1;
            return !0
        }))
    }, r = function (e) {
        return t((function (r, s) {
            var a = Object.keys(r), i = Object.keys(s);
            if (!function (e, n) {
                return function (e, n) {
                    return t((function (t, o) {
                        return e.eq(n(t), n(o))
                    }))
                }(o(e), (function (e) {
                    return function (e, t) {
                        return Array.prototype.slice.call(e).sort(t)
                    }(e, n)
                }))
            }(n).eq(a, i)) return !1;
            for (var l = a.length, d = 0; d < l; d++) {
                var c = a[d];
                if (!e.eq(r[c], s[c])) return !1
            }
            return !0
        }))
    }, s = t((function (t, n) {
        if (t === n) return !0;
        var a = e(t);
        return a === e(n) && (function (e) {
            return -1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(e)
        }(a) ? t === n : "array" === a ? o(s).eq(t, n) : "object" === a && r(s).eq(t, n))
    }));
    const a = Object.getPrototypeOf, i = (e, t, n) => {
            var o;
            return !!n(e, t.prototype) || (null === (o = e.constructor) || void 0 === o ? void 0 : o.name) === t.name
        }, l = e => t => (e => {
            const t = typeof e;
            return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && i(e, String, ((e, t) => t.isPrototypeOf(e))) ? "string" : t
        })(t) === e, d = e => t => typeof t === e, c = e => t => e === t,
        u = (e, t) => f(e) && i(e, t, ((e, t) => a(e) === t)), m = l("string"), f = l("object"), g = e => u(e, Object),
        p = l("array"), h = c(null), b = d("boolean"), v = c(void 0), y = e => null == e, C = e => !y(e),
        w = d("function"), x = d("number"), k = (e, t) => {
            if (p(e)) {
                for (let n = 0, o = e.length; n < o; ++n) if (!t(e[n])) return !1;
                return !0
            }
            return !1
        }, S = () => {
        }, _ = (e, t) => (...n) => e(t.apply(null, n)), E = (e, t) => n => e(t(n)), N = e => () => e, R = e => e,
        A = (e, t) => e === t;

    function O(e, ...t) {
        return (...n) => {
            const o = t.concat(n);
            return e.apply(null, o)
        }
    }

    const T = e => t => !e(t), B = e => e(), D = e => {
        e()
    }, P = N(!1), L = N(!0);

    class M {
        constructor(e, t) {
            this.tag = e, this.value = t
        }

        static some(e) {
            return new M(!0, e)
        }

        static none() {
            return M.singletonNone
        }

        fold(e, t) {
            return this.tag ? t(this.value) : e()
        }

        isSome() {
            return this.tag
        }

        isNone() {
            return !this.tag
        }

        map(e) {
            return this.tag ? M.some(e(this.value)) : M.none()
        }

        bind(e) {
            return this.tag ? e(this.value) : M.none()
        }

        exists(e) {
            return this.tag && e(this.value)
        }

        forall(e) {
            return !this.tag || e(this.value)
        }

        filter(e) {
            return !this.tag || e(this.value) ? this : M.none()
        }

        getOr(e) {
            return this.tag ? this.value : e
        }

        or(e) {
            return this.tag ? this : e
        }

        getOrThunk(e) {
            return this.tag ? this.value : e()
        }

        orThunk(e) {
            return this.tag ? this : e()
        }

        getOrDie(e) {
            if (this.tag) return this.value;
            throw new Error(null != e ? e : "Called getOrDie on None")
        }

        static from(e) {
            return C(e) ? M.some(e) : M.none()
        }

        getOrNull() {
            return this.tag ? this.value : null
        }

        getOrUndefined() {
            return this.value
        }

        each(e) {
            this.tag && e(this.value)
        }

        toArray() {
            return this.tag ? [this.value] : []
        }

        toString() {
            return this.tag ? `some(${this.value})` : "none()"
        }
    }

    M.singletonNone = new M(!1);
    const I = Array.prototype.slice, F = Array.prototype.indexOf, U = Array.prototype.push, z = (e, t) => F.call(e, t),
        j = (e, t) => z(e, t) > -1, H = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++) if (t(e[n], n)) return !0;
            return !1
        }, $ = (e, t) => {
            const n = e.length, o = new Array(n);
            for (let r = 0; r < n; r++) {
                const n = e[r];
                o[r] = t(n, r)
            }
            return o
        }, V = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++) t(e[n], n)
        }, q = (e, t) => {
            for (let n = e.length - 1; n >= 0; n--) t(e[n], n)
        }, W = (e, t) => {
            const n = [], o = [];
            for (let r = 0, s = e.length; r < s; r++) {
                const s = e[r];
                (t(s, r) ? n : o).push(s)
            }
            return {pass: n, fail: o}
        }, K = (e, t) => {
            const n = [];
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                t(r, o) && n.push(r)
            }
            return n
        }, G = (e, t, n) => (q(e, ((e, o) => {
            n = t(n, e, o)
        })), n), Y = (e, t, n) => (V(e, ((e, o) => {
            n = t(n, e, o)
        })), n), X = (e, t, n) => {
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                if (t(r, o)) return M.some(r);
                if (n(r, o)) break
            }
            return M.none()
        }, Q = (e, t) => X(e, t, P), J = (e, t) => {
            for (let n = 0, o = e.length; n < o; n++) if (t(e[n], n)) return M.some(n);
            return M.none()
        }, Z = e => {
            const t = [];
            for (let n = 0, o = e.length; n < o; ++n) {
                if (!p(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                U.apply(t, e[n])
            }
            return t
        }, ee = (e, t) => Z($(e, t)), te = (e, t) => {
            for (let n = 0, o = e.length; n < o; ++n) if (!0 !== t(e[n], n)) return !1;
            return !0
        }, ne = e => {
            const t = I.call(e, 0);
            return t.reverse(), t
        }, oe = (e, t) => K(e, (e => !j(t, e))), re = (e, t) => {
            const n = {};
            for (let o = 0, r = e.length; o < r; o++) {
                const r = e[o];
                n[String(r)] = t(r, o)
            }
            return n
        }, se = (e, t) => {
            const n = I.call(e, 0);
            return n.sort(t), n
        }, ae = (e, t) => t >= 0 && t < e.length ? M.some(e[t]) : M.none(), ie = e => ae(e, 0),
        le = e => ae(e, e.length - 1), de = w(Array.from) ? Array.from : e => I.call(e), ce = (e, t) => {
            for (let n = 0; n < e.length; n++) {
                const o = t(e[n], n);
                if (o.isSome()) return o
            }
            return M.none()
        }, ue = Object.keys, me = Object.hasOwnProperty, fe = (e, t) => {
            const n = ue(e);
            for (let o = 0, r = n.length; o < r; o++) {
                const r = n[o];
                t(e[r], r)
            }
        }, ge = (e, t) => pe(e, ((e, n) => ({k: n, v: t(e, n)}))), pe = (e, t) => {
            const n = {};
            return fe(e, ((e, o) => {
                const r = t(e, o);
                n[r.k] = r.v
            })), n
        }, he = e => (t, n) => {
            e[n] = t
        }, be = (e, t, n, o) => {
            fe(e, ((e, r) => {
                (t(e, r) ? n : o)(e, r)
            }))
        }, ve = (e, t) => {
            const n = {};
            return be(e, t, he(n), S), n
        }, ye = (e, t) => {
            const n = [];
            return fe(e, ((e, o) => {
                n.push(t(e, o))
            })), n
        }, Ce = e => ye(e, R), we = (e, t) => xe(e, t) ? M.from(e[t]) : M.none(), xe = (e, t) => me.call(e, t),
        ke = (e, t) => xe(e, t) && void 0 !== e[t] && null !== e[t], Se = e => {
            const t = {};
            return V(e, (e => {
                t[e] = {}
            })), ue(t)
        }, _e = e => void 0 !== e.length, Ee = Array.isArray, Ne = (e, t, n) => {
            if (!e) return !1;
            if (n = n || e, _e(e)) {
                for (let o = 0, r = e.length; o < r; o++) if (!1 === t.call(n, e[o], o, e)) return !1
            } else for (const o in e) if (xe(e, o) && !1 === t.call(n, e[o], o, e)) return !1;
            return !0
        }, Re = (e, t) => {
            const n = [];
            return Ne(e, ((o, r) => {
                n.push(t(o, r, e))
            })), n
        }, Ae = (e, t) => {
            const n = [];
            return Ne(e, ((o, r) => {
                t && !t(o, r, e) || n.push(o)
            })), n
        }, Oe = (e, t, n, o) => {
            let r = v(n) ? e[0] : n;
            for (let n = 0; n < e.length; n++) r = t.call(o, r, e[n], n);
            return r
        }, Te = (e, t, n) => {
            for (let o = 0, r = e.length; o < r; o++) if (t.call(n, e[o], o, e)) return o;
            return -1
        }, Be = e => e[e.length - 1], De = e => {
            let t, n = !1;
            return (...o) => (n || (n = !0, t = e.apply(null, o)), t)
        }, Pe = () => Le(0, 0), Le = (e, t) => ({major: e, minor: t}), Me = {
            nu: Le, detect: (e, t) => {
                const n = String(t).toLowerCase();
                return 0 === e.length ? Pe() : ((e, t) => {
                    const n = ((e, t) => {
                        for (let n = 0; n < e.length; n++) {
                            const o = e[n];
                            if (o.test(t)) return o
                        }
                    })(e, t);
                    if (!n) return {major: 0, minor: 0};
                    const o = e => Number(t.replace(n, "$" + e));
                    return Le(o(1), o(2))
                })(e, n)
            }, unknown: Pe
        }, Ie = (e, t) => {
            const n = String(t).toLowerCase();
            return Q(e, (e => e.search(n)))
        }, Fe = (e, t, n) => "" === t || e.length >= t.length && e.substr(n, n + t.length) === t, Ue = (e, t, n = 0, o) => {
            const r = e.indexOf(t, n);
            return -1 !== r && (!!v(o) || r + t.length <= o)
        }, ze = (e, t) => Fe(e, t, 0), je = (e, t) => Fe(e, t, e.length - t.length), He = e => t => t.replace(e, ""),
        $e = He(/^\s+|\s+$/g), Ve = He(/^\s+/g), qe = He(/\s+$/g), We = e => e.length > 0, Ke = e => !We(e),
        Ge = (e, t = 10) => {
            const n = parseInt(e, t);
            return isNaN(n) ? M.none() : M.some(n)
        }, Ye = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, Xe = e => t => Ue(t, e), Qe = [{
            name: "Edge",
            versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
            search: e => Ue(e, "edge/") && Ue(e, "chrome") && Ue(e, "safari") && Ue(e, "applewebkit")
        }, {
            name: "Chromium",
            brand: "Chromium",
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ye],
            search: e => Ue(e, "chrome") && !Ue(e, "chromeframe")
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: e => Ue(e, "msie") || Ue(e, "trident")
        }, {name: "Opera", versionRegexes: [Ye, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: Xe("opera")}, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: Xe("firefox")
        }, {
            name: "Safari",
            versionRegexes: [Ye, /.*?cpu os ([0-9]+)_([0-9]+).*/],
            search: e => (Ue(e, "safari") || Ue(e, "mobile/")) && Ue(e, "applewebkit")
        }], Je = [{
            name: "Windows",
            search: Xe("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: e => Ue(e, "iphone") || Ue(e, "ipad"),
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {name: "Android", search: Xe("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]}, {
            name: "macOS",
            search: Xe("mac os x"),
            versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {name: "Linux", search: Xe("linux"), versionRegexes: []}, {
            name: "Solaris",
            search: Xe("sunos"),
            versionRegexes: []
        }, {name: "FreeBSD", search: Xe("freebsd"), versionRegexes: []}, {
            name: "ChromeOS",
            search: Xe("cros"),
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
        }], Ze = {browsers: N(Qe), oses: N(Je)}, et = "Edge", tt = "Chromium", nt = "Opera", ot = "Firefox", rt = "Safari",
        st = e => {
            const t = e.current, n = e.version, o = e => () => t === e;
            return {
                current: t,
                version: n,
                isEdge: o(et),
                isChromium: o(tt),
                isIE: o("IE"),
                isOpera: o(nt),
                isFirefox: o(ot),
                isSafari: o(rt)
            }
        }, at = () => st({current: void 0, version: Me.unknown()}), it = st,
        lt = (N(et), N(tt), N("IE"), N(nt), N(ot), N(rt), "Windows"), dt = "Android", ct = "Linux", ut = "macOS",
        mt = "Solaris", ft = "FreeBSD", gt = "ChromeOS", pt = e => {
            const t = e.current, n = e.version, o = e => () => t === e;
            return {
                current: t,
                version: n,
                isWindows: o(lt),
                isiOS: o("iOS"),
                isAndroid: o(dt),
                isMacOS: o(ut),
                isLinux: o(ct),
                isSolaris: o(mt),
                isFreeBSD: o(ft),
                isChromeOS: o(gt)
            }
        }, ht = () => pt({current: void 0, version: Me.unknown()}), bt = pt,
        vt = (N(lt), N("iOS"), N(dt), N(ct), N(ut), N(mt), N(ft), N(gt), e => window.matchMedia(e).matches);
    let yt = De((() => ((e, t, n) => {
        const o = Ze.browsers(), r = Ze.oses(), s = t.bind((e => ((e, t) => ce(t.brands, (t => {
            const n = t.brand.toLowerCase();
            return Q(e, (e => {
                var t;
                return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase())
            })).map((e => ({current: e.name, version: Me.nu(parseInt(t.version, 10), 0)})))
        })))(o, e))).orThunk((() => ((e, t) => Ie(e, t).map((e => {
            const n = Me.detect(e.versionRegexes, t);
            return {current: e.name, version: n}
        })))(o, e))).fold(at, it), a = ((e, t) => Ie(e, t).map((e => {
            const n = Me.detect(e.versionRegexes, t);
            return {current: e.name, version: n}
        })))(r, e).fold(ht, bt), i = ((e, t, n, o) => {
            const r = e.isiOS() && !0 === /ipad/i.test(n), s = e.isiOS() && !r, a = e.isiOS() || e.isAndroid(),
                i = a || o("(pointer:coarse)"), l = r || !s && a && o("(min-device-width:768px)"), d = s || a && !l,
                c = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n), u = !d && !l && !c;
            return {
                isiPad: N(r),
                isiPhone: N(s),
                isTablet: N(l),
                isPhone: N(d),
                isTouch: N(i),
                isAndroid: e.isAndroid,
                isiOS: e.isiOS,
                isWebView: N(c),
                isDesktop: N(u)
            }
        })(a, s, e, n);
        return {browser: s, os: a, deviceType: i}
    })(navigator.userAgent, M.from(navigator.userAgentData), vt)));
    const Ct = () => yt(), wt = navigator.userAgent, xt = Ct(), kt = xt.browser, St = xt.os, _t = xt.deviceType,
        Et = -1 !== wt.indexOf("Windows Phone"), Nt = {
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            documentMode: kt.isIE() ? document.documentMode || 7 : 10,
            cacheSuffix: null,
            container: null,
            canHaveCSP: !kt.isIE(),
            windowsPhone: Et,
            browser: {
                current: kt.current,
                version: kt.version,
                isChromium: kt.isChromium,
                isEdge: kt.isEdge,
                isFirefox: kt.isFirefox,
                isIE: kt.isIE,
                isOpera: kt.isOpera,
                isSafari: kt.isSafari
            },
            os: {
                current: St.current,
                version: St.version,
                isAndroid: St.isAndroid,
                isChromeOS: St.isChromeOS,
                isFreeBSD: St.isFreeBSD,
                isiOS: St.isiOS,
                isLinux: St.isLinux,
                isMacOS: St.isMacOS,
                isSolaris: St.isSolaris,
                isWindows: St.isWindows
            },
            deviceType: {
                isDesktop: _t.isDesktop,
                isiPad: _t.isiPad,
                isiPhone: _t.isiPhone,
                isPhone: _t.isPhone,
                isTablet: _t.isTablet,
                isTouch: _t.isTouch,
                isWebView: _t.isWebView
            }
        }, Rt = /^\s*|\s*$/g, At = e => y(e) ? "" : ("" + e).replace(Rt, ""), Ot = function (e, t, n, o) {
            o = o || this, e && (n && (e = e[n]), Ne(e, ((e, r) => !1 !== t.call(o, e, r, n) && (Ot(e, t, n, o), !0))))
        }, Tt = {
            trim: At,
            isArray: Ee,
            is: (e, t) => t ? !("array" !== t || !Ee(e)) || typeof e === t : void 0 !== e,
            toArray: e => {
                if (Ee(e)) return e;
                {
                    const t = [];
                    for (let n = 0, o = e.length; n < o; n++) t[n] = e[n];
                    return t
                }
            },
            makeMap: (e, t, n = {}) => {
                const o = m(e) ? e.split(t || ",") : e || [];
                let r = o.length;
                for (; r--;) n[o[r]] = {};
                return n
            },
            each: Ne,
            map: Re,
            grep: Ae,
            inArray: (e, t) => {
                if (e) for (let n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
                return -1
            },
            hasOwn: xe,
            extend: (e, ...t) => {
                for (let n = 0; n < t.length; n++) {
                    const o = t[n];
                    for (const t in o) if (xe(o, t)) {
                        const n = o[t];
                        void 0 !== n && (e[t] = n)
                    }
                }
                return e
            },
            walk: Ot,
            resolve: (e, t = window) => {
                const n = e.split(".");
                for (let e = 0, o = n.length; e < o && (t = t[n[e]]); e++) ;
                return t
            },
            explode: (e, t) => p(e) ? e : "" === e ? [] : Re(e.split(t || ","), At),
            _addCacheSuffix: e => {
                const t = Nt.cacheSuffix;
                return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            }
        }, Bt = (e, t, n = A) => e.exists((e => n(e, t))),
        Dt = (e, t, n) => e.isSome() && t.isSome() ? M.some(n(e.getOrDie(), t.getOrDie())) : M.none(),
        Pt = (e, t) => e ? M.some(t) : M.none();
    "undefined" != typeof window ? window : Function("return this;")();
    const Lt = e => e.dom.nodeName.toLowerCase(), Mt = e => e.dom.nodeType, It = e => t => Mt(t) === e, Ft = It(1),
        Ut = It(3), zt = It(9), jt = It(11), Ht = e => t => Ft(t) && Lt(t) === e, $t = (e, t, n) => {
            if (!(m(n) || b(n) || x(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
            e.setAttribute(t, n + "")
        }, Vt = (e, t, n) => {
            $t(e.dom, t, n)
        }, qt = (e, t) => {
            const n = e.dom;
            fe(t, ((e, t) => {
                $t(n, t, e)
            }))
        }, Wt = (e, t) => {
            const n = e.dom.getAttribute(t);
            return null === n ? void 0 : n
        }, Kt = (e, t) => M.from(Wt(e, t)), Gt = (e, t) => {
            const n = e.dom;
            return !(!n || !n.hasAttribute) && n.hasAttribute(t)
        }, Yt = (e, t) => {
            e.dom.removeAttribute(t)
        }, Xt = e => Y(e.dom.attributes, ((e, t) => (e[t.name] = t.value, e)), {}), Qt = (e, t) => {
            const n = Wt(e, t);
            return void 0 === n || "" === n ? [] : n.split(" ")
        }, Jt = e => void 0 !== e.dom.classList, Zt = e => Qt(e, "class"), en = (e, t) => ((e, t, n) => {
            const o = Qt(e, t).concat([n]);
            return Vt(e, t, o.join(" ")), !0
        })(e, "class", t), tn = (e, t) => ((e, t, n) => {
            const o = K(Qt(e, t), (e => e !== n));
            return o.length > 0 ? Vt(e, t, o.join(" ")) : Yt(e, t), !1
        })(e, "class", t), nn = (e, t) => {
            Jt(e) ? e.dom.classList.add(t) : en(e, t)
        }, on = e => {
            0 === (Jt(e) ? e.dom.classList : Zt(e)).length && Yt(e, "class")
        }, rn = (e, t) => {
            Jt(e) ? e.dom.classList.remove(t) : tn(e, t), on(e)
        }, sn = (e, t) => Jt(e) && e.dom.classList.contains(t), an = e => void 0 !== e.style && w(e.style.getPropertyValue),
        ln = e => {
            if (null == e) throw new Error("Node cannot be null or undefined");
            return {dom: e}
        }, dn = (e, t) => {
            const n = (t || document).createElement("div");
            if (n.innerHTML = e, !n.hasChildNodes() || n.childNodes.length > 1) {
                const t = "HTML does not have a single root node";
                throw console.error(t, e), new Error(t)
            }
            return ln(n.childNodes[0])
        }, cn = (e, t) => {
            const n = (t || document).createElement(e);
            return ln(n)
        }, un = (e, t) => {
            const n = (t || document).createTextNode(e);
            return ln(n)
        }, mn = ln, fn = (e, t, n) => M.from(e.dom.elementFromPoint(t, n)).map(ln), gn = (e, t) => {
            const n = [], o = e => (n.push(e), t(e));
            let r = t(e);
            do {
                r = r.bind(o)
            } while (r.isSome());
            return n
        }, pn = (e, t) => {
            const n = e.dom;
            if (1 !== n.nodeType) return !1;
            {
                const e = n;
                if (void 0 !== e.matches) return e.matches(t);
                if (void 0 !== e.msMatchesSelector) return e.msMatchesSelector(t);
                if (void 0 !== e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
                if (void 0 !== e.mozMatchesSelector) return e.mozMatchesSelector(t);
                throw new Error("Browser lacks native selectors")
            }
        }, hn = e => 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount,
        bn = (e, t) => e.dom === t.dom, vn = (e, t) => {
            const n = e.dom, o = t.dom;
            return n !== o && n.contains(o)
        }, yn = e => mn(e.dom.ownerDocument), Cn = e => zt(e) ? e : yn(e), wn = e => mn(Cn(e).dom.defaultView),
        xn = e => M.from(e.dom.parentNode).map(mn), kn = e => M.from(e.dom.parentElement).map(mn), Sn = (e, t) => {
            const n = w(t) ? t : P;
            let o = e.dom;
            const r = [];
            for (; null !== o.parentNode && void 0 !== o.parentNode;) {
                const e = o.parentNode, t = mn(e);
                if (r.push(t), !0 === n(t)) break;
                o = e
            }
            return r
        }, _n = e => M.from(e.dom.previousSibling).map(mn), En = e => M.from(e.dom.nextSibling).map(mn),
        Nn = e => ne(gn(e, _n)), Rn = e => gn(e, En), An = e => $(e.dom.childNodes, mn), On = (e, t) => {
            const n = e.dom.childNodes;
            return M.from(n[t]).map(mn)
        }, Tn = e => On(e, 0), Bn = e => On(e, e.dom.childNodes.length - 1), Dn = e => e.dom.childNodes.length,
        Pn = e => jt(e) && C(e.dom.host), Ln = w(Element.prototype.attachShadow) && w(Node.prototype.getRootNode),
        Mn = N(Ln), In = Ln ? e => mn(e.dom.getRootNode()) : Cn, Fn = e => Pn(e) ? e : (e => {
            const t = e.dom.head;
            if (null == t) throw new Error("Head is not available yet");
            return mn(t)
        })(Cn(e)), Un = e => mn(e.dom.host), zn = e => {
            if (Mn() && C(e.target)) {
                const t = mn(e.target);
                if (Ft(t) && jn(t) && e.composed && e.composedPath) {
                    const t = e.composedPath();
                    if (t) return ie(t)
                }
            }
            return M.from(e.target)
        }, jn = e => C(e.dom.shadowRoot), Hn = e => {
            const t = Ut(e) ? e.dom.parentNode : e.dom;
            if (null == t || null === t.ownerDocument) return !1;
            const n = t.ownerDocument;
            return (e => {
                const t = In(e);
                return Pn(t) ? M.some(t) : M.none()
            })(mn(t)).fold((() => n.body.contains(t)), E(Hn, Un))
        }, $n = (e, t, n) => {
            if (!m(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
            an(e) && e.style.setProperty(t, n)
        }, Vn = (e, t, n) => {
            const o = e.dom;
            $n(o, t, n)
        }, qn = (e, t) => {
            const n = e.dom;
            fe(t, ((e, t) => {
                $n(n, t, e)
            }))
        }, Wn = (e, t) => {
            const n = e.dom, o = window.getComputedStyle(n).getPropertyValue(t);
            return "" !== o || Hn(e) ? o : Kn(n, t)
        }, Kn = (e, t) => an(e) ? e.style.getPropertyValue(t) : "", Gn = (e, t) => {
            const n = e.dom, o = Kn(n, t);
            return M.from(o).filter((e => e.length > 0))
        }, Yn = e => {
            const t = {}, n = e.dom;
            if (an(n)) for (let e = 0; e < n.style.length; e++) {
                const o = n.style.item(e);
                t[o] = n.style[o]
            }
            return t
        }, Xn = (e, t) => {
            ((e, t) => {
                an(e) && e.style.removeProperty(t)
            })(e.dom, t), Bt(Kt(e, "style").map($e), "") && Yt(e, "style")
        }, Qn = (e, t) => {
            xn(e).each((n => {
                n.dom.insertBefore(t.dom, e.dom)
            }))
        }, Jn = (e, t) => {
            En(e).fold((() => {
                xn(e).each((e => {
                    eo(e, t)
                }))
            }), (e => {
                Qn(e, t)
            }))
        }, Zn = (e, t) => {
            Tn(e).fold((() => {
                eo(e, t)
            }), (n => {
                e.dom.insertBefore(t.dom, n.dom)
            }))
        }, eo = (e, t) => {
            e.dom.appendChild(t.dom)
        }, to = (e, t) => {
            V(t, (t => {
                eo(e, t)
            }))
        }, no = e => {
            e.dom.textContent = "", V(An(e), (e => {
                oo(e)
            }))
        }, oo = e => {
            const t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t)
        }, ro = e => {
            const t = An(e);
            var n, o;
            t.length > 0 && (n = e, V(o = t, ((e, t) => {
                const r = 0 === t ? n : o[t - 1];
                Jn(r, e)
            }))), oo(e)
        }, so = e => $(e, mn), ao = e => e.dom.innerHTML, io = (e, t) => {
            const n = yn(e).dom, o = mn(n.createDocumentFragment()), r = ((e, t) => {
                const n = (t || document).createElement("div");
                return n.innerHTML = e, An(mn(n))
            })(t, n);
            to(o, r), no(e), eo(e, o)
        }, lo = (e, t, n, o) => ((e, t, n, o, r) => {
            const s = ((e, t) => n => {
                e(n) && t((e => {
                    const t = mn(zn(e).getOr(e.target)), n = () => e.stopPropagation(), o = () => e.preventDefault(),
                        r = _(o, n);
                    return ((e, t, n, o, r, s, a) => ({
                        target: e,
                        x: t,
                        y: n,
                        stop: o,
                        prevent: r,
                        kill: s,
                        raw: a
                    }))(t, e.clientX, e.clientY, n, o, r, e)
                })(n))
            })(n, o);
            return e.dom.addEventListener(t, s, false), {unbind: O(co, e, t, s, false)}
        })(e, t, n, o), co = (e, t, n, o) => {
            e.dom.removeEventListener(t, n, o)
        }, uo = (e, t) => ({left: e, top: t, translate: (n, o) => uo(e + n, t + o)}), mo = uo,
        fo = (e, t) => void 0 !== e ? e : void 0 !== t ? t : 0, go = e => {
            const t = e.dom, n = t.ownerDocument.body;
            return n === t ? mo(n.offsetLeft, n.offsetTop) : Hn(e) ? (e => {
                const t = e.getBoundingClientRect();
                return mo(t.left, t.top)
            })(t) : mo(0, 0)
        }, po = e => {
            const t = void 0 !== e ? e.dom : document, n = t.body.scrollLeft || t.documentElement.scrollLeft,
                o = t.body.scrollTop || t.documentElement.scrollTop;
            return mo(n, o)
        }, ho = (e, t, n) => {
            const o = (void 0 !== n ? n.dom : document).defaultView;
            o && o.scrollTo(e, t)
        }, bo = (e, t) => {
            Ct().browser.isSafari() && w(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t)
        }, vo = (e, t, n, o) => ({x: e, y: t, width: n, height: o, right: e + n, bottom: t + o}), yo = e => {
            const t = void 0 === e ? window : e, n = t.document, o = po(mn(n));
            return (e => {
                const t = void 0 === e ? window : e;
                return Ct().browser.isFirefox() ? M.none() : M.from(t.visualViewport)
            })(t).fold((() => {
                const e = t.document.documentElement, n = e.clientWidth, r = e.clientHeight;
                return vo(o.left, o.top, n, r)
            }), (e => vo(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height)))
        }, Co = (e, t) => {
            let n = [];
            return V(An(e), (e => {
                t(e) && (n = n.concat([e])), n = n.concat(Co(e, t))
            })), n
        };
    var wo = (e, t, n, o, r) => e(n, o) ? M.some(n) : w(r) && r(n) ? M.none() : t(n, o, r);
    const xo = (e, t, n) => {
            let o = e.dom;
            const r = w(n) ? n : P;
            for (; o.parentNode;) {
                o = o.parentNode;
                const e = mn(o);
                if (t(e)) return M.some(e);
                if (r(e)) break
            }
            return M.none()
        }, ko = (e, t, n) => wo(((e, t) => t(e)), xo, e, t, n), So = (e, t, n) => xo(e, (e => pn(e, t)), n),
        _o = (e, t) => ((e, t) => {
            const n = void 0 === t ? document : t.dom;
            return hn(n) ? M.none() : M.from(n.querySelector(e)).map(mn)
        })(t, e), Eo = (e, t, n) => wo(((e, t) => pn(e, t)), So, e, t, n), No = (e, t, n) => So(e, t, n).isSome();

    class Ro {
        constructor(e, t) {
            this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this)
        }

        current() {
            return this.node
        }

        next(e) {
            return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node
        }

        prev(e) {
            return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node
        }

        prev2(e) {
            return this.node = this.findPreviousNode(this.node, e), this.node
        }

        findSibling(e, t, n, o) {
            if (e) {
                if (!o && e[t]) return e[t];
                if (e !== this.rootNode) {
                    let t = e[n];
                    if (t) return t;
                    for (let o = e.parentNode; o && o !== this.rootNode; o = o.parentNode) if (t = o[n], t) return t
                }
            }
        }

        findPreviousNode(e, t) {
            if (e) {
                const n = e.previousSibling;
                if (this.rootNode && n === this.rootNode) return;
                if (n) {
                    if (!t) for (let e = n.lastChild; e; e = e.lastChild) if (!e.lastChild) return e;
                    return n
                }
                const o = e.parentNode;
                if (o && o !== this.rootNode) return o
            }
        }
    }

    const Ao = e => t => !!t && t.nodeType === e, Oo = e => !!e && !Object.getPrototypeOf(e), To = Ao(1), Bo = e => {
            const t = e.toLowerCase();
            return e => C(e) && e.nodeName.toLowerCase() === t
        }, Do = e => {
            const t = e.map((e => e.toLowerCase()));
            return e => {
                if (e && e.nodeName) {
                    const n = e.nodeName.toLowerCase();
                    return j(t, n)
                }
                return !1
            }
        }, Po = (e, t) => {
            const n = t.toLowerCase().split(" ");
            return t => {
                if (To(t)) {
                    const o = t.ownerDocument.defaultView;
                    if (o) for (let r = 0; r < n.length; r++) {
                        const s = o.getComputedStyle(t, null);
                        if ((s ? s.getPropertyValue(e) : null) === n[r]) return !0
                    }
                }
                return !1
            }
        }, Lo = e => t => To(t) && t.hasAttribute(e), Mo = e => To(e) && e.hasAttribute("data-mce-bogus"),
        Io = e => To(e) && "TABLE" === e.tagName, Fo = e => t => {
            if (To(t)) {
                if (t.contentEditable === e) return !0;
                if (t.getAttribute("data-mce-contenteditable") === e) return !0
            }
            return !1
        }, Uo = Do(["textarea", "input"]), zo = Ao(3), jo = Ao(4), Ho = Ao(7), $o = Ao(8), Vo = Ao(9), qo = Ao(11),
        Wo = Bo("br"), Ko = Bo("img"), Go = Fo("true"), Yo = Fo("false"), Xo = Do(["td", "th"]),
        Qo = Do(["td", "th", "caption"]), Jo = Do(["video", "audio", "object", "embed"]), Zo = Bo("li"), er = "\ufeff",
        tr = "\xa0", nr = e => e === er, or = (e, t) => ((e, t) => {
            const n = void 0 === t ? document : t.dom;
            return hn(n) ? [] : $(n.querySelectorAll(e), mn)
        })(t, e), rr = ((e, t) => {
            const n = t => e(t) ? M.from(t.dom.nodeValue) : M.none();
            return {
                get: t => {
                    if (!e(t)) throw new Error("Can only get text value of a text node");
                    return n(t).getOr("")
                }, getOption: n, set: (t, n) => {
                    if (!e(t)) throw new Error("Can only set raw text value of a text node");
                    t.dom.nodeValue = n
                }
            }
        })(Ut), sr = e => rr.get(e), ar = e => rr.getOption(e), ir = ["pre"].concat(["h1", "h2", "h3", "h4", "h5", "h6"]),
        lr = e => {
            let t;
            return n => (t = t || re(e, L), xe(t, Lt(n)))
        },
        dr = lr(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        cr = e => Ft(e) && !dr(e), ur = e => Ft(e) && "br" === Lt(e),
        mr = lr(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        fr = lr(["ul", "ol", "dl"]), gr = lr(["li", "dd", "dt"]), pr = lr(["thead", "tbody", "tfoot"]),
        hr = lr(["td", "th"]), br = lr(["pre", "script", "textarea", "style"]), vr = lr(ir), yr = e => vr(e) || cr(e),
        Cr = () => {
            const e = cn("br");
            return Vt(e, "data-mce-bogus", "1"), e
        }, wr = e => {
            no(e), eo(e, Cr())
        }, xr = e => {
            Bn(e).each((t => {
                _n(t).each((n => {
                    dr(e) && ur(t) && dr(n) && oo(t)
                }))
            }))
        }, kr = er, Sr = nr, _r = e => e.replace(/\uFEFF/g, ""), Er = To, Nr = zo,
        Rr = e => (Nr(e) && (e = e.parentNode), Er(e) && e.hasAttribute("data-mce-caret")),
        Ar = e => Nr(e) && Sr(e.data), Or = e => Rr(e) || Ar(e),
        Tr = e => e.firstChild !== e.lastChild || !Wo(e.firstChild), Br = e => {
            const t = e.container();
            return !!zo(t) && (t.data.charAt(e.offset()) === kr || e.isAtStart() && Ar(t.previousSibling))
        }, Dr = e => {
            const t = e.container();
            return !!zo(t) && (t.data.charAt(e.offset() - 1) === kr || e.isAtEnd() && Ar(t.nextSibling))
        }, Pr = e => Nr(e) && e.data[0] === kr, Lr = e => Nr(e) && e.data[e.data.length - 1] === kr,
        Mr = e => e && e.hasAttribute("data-mce-caret") ? ((e => {
            var t;
            const n = e.getElementsByTagName("br"), o = n[n.length - 1];
            Mo(o) && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o))
        })(e), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("data-mce-style"), e.removeAttribute("_moz_abspos"), e) : null,
        Ir = e => Rr(e.startContainer), Fr = Go, Ur = Yo, zr = Wo, jr = zo, Hr = Do(["script", "style", "textarea"]),
        $r = Do(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]), Vr = Do(["table"]),
        qr = Or, Wr = e => !qr(e) && (jr(e) ? !Hr(e.parentNode) : $r(e) || zr(e) || Vr(e) || Kr(e)),
        Kr = e => !(e => To(e) && "true" === e.getAttribute("unselectable"))(e) && Ur(e),
        Gr = (e, t) => Wr(e) && ((e, t) => {
            for (let n = e.parentNode; n && n !== t; n = n.parentNode) {
                if (Kr(n)) return !1;
                if (Fr(n)) return !0
            }
            return !0
        })(e, t), Yr = /^[ \t\r\n]*$/, Xr = e => Yr.test(e), Qr = e => "\n" === e || "\r" === e,
        Jr = (e, t = 4, n = !0, o = !0) => {
            const r = ((e, t) => t <= 0 ? "" : new Array(t + 1).join(" "))(0, t), s = e.replace(/\t/g, r),
                a = Y(s, ((e, t) => (e => -1 !== " \f\t\v".indexOf(e))(t) || t === tr ? e.pcIsSpace || "" === e.str && n || e.str.length === s.length - 1 && o || ((e, t) => t < e.length && t >= 0 && Qr(e[t]))(s, e.str.length + 1) ? {
                    pcIsSpace: !1,
                    str: e.str + tr
                } : {pcIsSpace: !0, str: e.str + " "} : {pcIsSpace: Qr(t), str: e.str + t}), {pcIsSpace: !1, str: ""});
            return a.str
        }, Zr = (e, t) => Wr(e) && !((e, t) => zo(e) && Xr(e.data) && !((e, t) => {
            const n = mn(t), o = mn(e);
            return No(o, "pre,code", O(bn, n))
        })(e, t))(e, t) || (e => To(e) && "A" === e.nodeName && !e.hasAttribute("href") && (e.hasAttribute("name") || e.hasAttribute("id")))(e) || es(e),
        es = Lo("data-mce-bookmark"), ts = Lo("data-mce-bogus"),
        ns = ("data-mce-bogus", "all", e => To(e) && "all" === e.getAttribute("data-mce-bogus"));
    const os = (e, t = !0) => ((e, t) => {
            let n = 0;
            if (Zr(e, e)) return !1;
            {
                let o = e.firstChild;
                if (!o) return !0;
                const r = new Ro(o, e);
                do {
                    if (t) {
                        if (ns(o)) {
                            o = r.next(!0);
                            continue
                        }
                        if (ts(o)) {
                            o = r.next();
                            continue
                        }
                    }
                    if (Wo(o)) n++, o = r.next(); else {
                        if (Zr(o, e)) return !1;
                        o = r.next()
                    }
                } while (o);
                return n <= 1
            }
        })(e.dom, t), rs = "data-mce-block", ss = e => (e => K(ue(e), (e => !/[A-Z]/.test(e))))(e).join(","),
        as = (e, t) => C(t.querySelector(e)) ? (t.setAttribute(rs, "true"), "inline-boundary" === t.getAttribute("data-mce-selected") && t.removeAttribute("data-mce-selected"), !0) : (t.removeAttribute(rs), !1),
        is = (e, t) => {
            const n = ss(e.getTransparentElements()), o = ss(e.getBlockElements());
            return K(t.querySelectorAll(n), (e => as(o, e)))
        }, ls = (e, t) => {
            var n;
            const o = t ? "lastChild" : "firstChild";
            for (let t = e[o]; t; t = t[o]) if (os(mn(t))) return void (null === (n = t.parentNode) || void 0 === n || n.removeChild(t))
        }, ds = (e, t, n) => {
            const o = e.getBlockElements(), r = mn(t), s = e => Lt(e) in o, a = e => bn(e, r);
            V(so(n), (t => {
                xo(t, s, a).each((n => {
                    const o = ((t, o) => K(An(t), (t => s(t) && !e.isValidChild(Lt(n), Lt(t)))))(t);
                    if (o.length > 0) {
                        const t = kn(n);
                        V(o, (e => {
                            xo(e, s, a).each((t => {
                                ((e, t) => {
                                    const n = document.createRange(), o = e.parentNode;
                                    if (o) {
                                        n.setStartBefore(e), n.setEndBefore(t);
                                        const r = n.extractContents();
                                        ls(r, !0), n.setStartAfter(t), n.setEndAfter(e);
                                        const s = n.extractContents();
                                        ls(s, !1), os(mn(r)) || o.insertBefore(r, e), os(mn(t)) || o.insertBefore(t, e), os(mn(s)) || o.insertBefore(s, e), o.removeChild(e)
                                    }
                                })(t.dom, e.dom)
                            }))
                        })), t.each((t => is(e, t.dom)))
                    }
                }))
            }))
        }, cs = (e, t) => {
            const n = is(e, t);
            ds(e, t, n)
        }, us = (e, t) => {
            if (gs(e, t)) {
                const n = ss(e.getBlockElements());
                as(n, t)
            }
        }, ms = e => e.hasAttribute(rs), fs = (e, t) => xe(e.getTransparentElements(), t),
        gs = (e, t) => To(t) && fs(e, t.nodeName), ps = (e, t) => gs(e, t) && ms(t),
        hs = (e, t) => 1 === t.type && fs(e, t.name) && v(t.attr(rs)), bs = Ct().browser, vs = e => Q(e, Ft),
        ys = (e, t) => e.children && j(e.children, t), Cs = (e, t = {}) => {
            let n = 0;
            const o = {}, r = mn(e), s = Cn(r), a = t.maxLoadTime || 5e3, i = i => new Promise(((l, d) => {
                let c;
                const u = Tt._addCacheSuffix(i),
                    m = (e => we(o, e).getOrThunk((() => ({id: "mce-u" + n++, passed: [], failed: [], count: 0}))))(u);
                o[u] = m, m.count++;
                const f = (e, t) => {
                    V(e, D), m.status = t, m.passed = [], m.failed = [], c && (c.onload = null, c.onerror = null, c = null)
                }, g = () => f(m.passed, 2), p = () => f(m.failed, 3), h = () => {
                    var t;
                    t = h, (() => {
                        const t = e.styleSheets;
                        let n = t.length;
                        for (; n--;) {
                            const e = t[n].ownerNode;
                            if (e && c && e.id === c.id) return g(), !0
                        }
                        return !1
                    })() || (Date.now() - v < a ? setTimeout(t) : p())
                };
                if (l && m.passed.push(l), d && m.failed.push(d), 1 === m.status) return;
                if (2 === m.status) return void g();
                if (3 === m.status) return void p();
                m.status = 1;
                const b = cn("link", s.dom);
                qt(b, {rel: "stylesheet", type: "text/css", id: m.id});
                const v = Date.now();
                var y;
                t.contentCssCors && Vt(b, "crossOrigin", "anonymous"), t.referrerPolicy && Vt(b, "referrerpolicy", t.referrerPolicy), c = b.dom, c.onload = h, c.onerror = p, y = b, eo(Fn(r), y), Vt(b, "href", u)
            })), l = e => {
                const t = Tt._addCacheSuffix(e);
                we(o, t).each((e => {
                    0 == --e.count && (delete o[t], (e => {
                        const t = Fn(r);
                        _o(t, "#" + e).each(oo)
                    })(e.id))
                }))
            };
            return {
                load: i, loadAll: e => Promise.allSettled($(e, (e => i(e).then(N(e))))).then((e => {
                    const t = W(e, (e => "fulfilled" === e.status));
                    return t.fail.length > 0 ? Promise.reject($(t.fail, (e => e.reason))) : $(t.pass, (e => e.value))
                })), unload: l, unloadAll: e => {
                    V(e, (e => {
                        l(e)
                    }))
                }, _setReferrerPolicy: e => {
                    t.referrerPolicy = e
                }, _setContentCssCors: e => {
                    t.contentCssCors = e
                }
            }
        }, ws = (() => {
            const e = new WeakMap;
            return {
                forElement: (t, n) => {
                    const o = In(t).dom;
                    return M.from(e.get(o)).getOrThunk((() => {
                        const t = Cs(o, n);
                        return e.set(o, t), t
                    }))
                }
            }
        })(), xs = (e, t) => C(e) && (Zr(e, t) || cr(mn(e))),
        ks = e => (e => "span" === e.nodeName.toLowerCase())(e) && "bookmark" === e.getAttribute("data-mce-type"),
        Ss = (e, t, n) => {
            var o;
            const r = n || t;
            if (To(t) && ks(t)) return t;
            const s = t.childNodes;
            for (let t = s.length - 1; t >= 0; t--) Ss(e, s[t], r);
            if (To(t)) {
                const e = t.childNodes;
                1 === e.length && ks(e[0]) && (null === (o = t.parentNode) || void 0 === o || o.insertBefore(e[0], t))
            }
            return (e => qo(e) || Vo(e))(t) || Zr(t, r) || (e => !!To(e) && e.childNodes.length > 0)(t) || ((e, t) => zo(e) && e.data.length > 0 && ((e, t) => {
                const n = new Ro(e, t).prev(!1), o = new Ro(e, t).next(!1), r = v(n) || xs(n, t), s = v(o) || xs(o, t);
                return r && s
            })(e, t))(t, r) || e.remove(t), t
        }, _s = Tt.makeMap, Es = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Ns = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Rs = /[<>&\"\']/g,
        As = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi, Os = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        }, Ts = {'"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;"},
        Bs = {"&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'"}, Ds = (e, t) => {
            const n = {};
            if (e) {
                const o = e.split(",");
                t = t || 10;
                for (let e = 0; e < o.length; e += 2) {
                    const r = String.fromCharCode(parseInt(o[e], t));
                    if (!Ts[r]) {
                        const t = "&" + o[e + 1] + ";";
                        n[r] = t, n[t] = r
                    }
                }
                return n
            }
        },
        Ps = Ds("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32),
        Ls = (e, t) => e.replace(t ? Es : Ns, (e => Ts[e] || e)),
        Ms = (e, t) => e.replace(t ? Es : Ns, (e => e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : Ts[e] || "&#" + e.charCodeAt(0) + ";")),
        Is = (e, t, n) => {
            const o = n || Ps;
            return e.replace(t ? Es : Ns, (e => Ts[e] || o[e] || e))
        }, Fs = {
            encodeRaw: Ls,
            encodeAllRaw: e => ("" + e).replace(Rs, (e => Ts[e] || e)),
            encodeNumeric: Ms,
            encodeNamed: Is,
            getEncodeFunc: (e, t) => {
                const n = Ds(t) || Ps, o = _s(e.replace(/\+/g, ","));
                return o.named && o.numeric ? (e, t) => e.replace(t ? Es : Ns, (e => void 0 !== Ts[e] ? Ts[e] : void 0 !== n[e] ? n[e] : e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";")) : o.named ? t ? (e, t) => Is(e, t, n) : Is : o.numeric ? Ms : Ls
            },
            decode: e => e.replace(As, ((e, t) => t ? (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) > 65535 ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : Os[t] || String.fromCharCode(t) : Bs[e] || Ps[e] || (e => {
                const t = cn("div").dom;
                return t.innerHTML = e, t.textContent || t.innerText || e
            })(e)))
        }, Us = {}, zs = {}, js = {}, Hs = Tt.makeMap, $s = Tt.each, Vs = Tt.extend, qs = Tt.explode, Ws = Tt.inArray,
        Ks = (e, t) => (e = Tt.trim(e)) ? e.split(t || " ") : [], Gs = (e, t = {}) => {
            const n = Hs(e, " ", Hs(e.toUpperCase(), " "));
            return Vs(n, t)
        }, Ys = e => Gs("td th li dt dd figcaption caption details summary", e.getTextBlockElements()), Xs = (e, t) => {
            if (e) {
                const n = {};
                return m(e) && (e = {"*": e}), $s(e, ((e, o) => {
                    n[o] = n[o.toUpperCase()] = "map" === t ? Hs(e, /[, ]/) : qs(e, /[, ]/)
                })), n
            }
        }, Qs = (e = {}) => {
            var t;
            const n = {}, o = {};
            let r = [];
            const s = {}, a = {}, i = (t, n, o) => {
                const r = e[t];
                if (r) return Hs(r, /[, ]/, Hs(r.toUpperCase(), /[, ]/));
                {
                    let e = zs[t];
                    return e || (e = Gs(n, o), zs[t] = e), e
                }
            }, l = null !== (t = e.schema) && void 0 !== t ? t : "html5", d = (e => {
                const t = {};
                let n, o, r, s;
                const a = (e, o = "", r = "") => {
                    const s = Ks(r), a = Ks(e);
                    let i = a.length;
                    for (; i--;) {
                        const e = Ks([n, o].join(" "));
                        t[a[i]] = {attributes: re(e, (() => ({}))), attributesOrder: e, children: re(s, N(js))}
                    }
                }, i = (e, n) => {
                    const o = Ks(e), r = Ks(n);
                    let s = o.length;
                    for (; s--;) {
                        const e = t[o[s]];
                        for (let t = 0, n = r.length; t < n; t++) e.attributes[r[t]] = {}, e.attributesOrder.push(r[t])
                    }
                };
                if (Us[e]) return Us[e];
                if (n = "id accesskey class dir lang style tabindex title role", o = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", r = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (n += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", o += " article aside details dialog figure main header footer hgroup section nav a ins del canvas map", r += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e) {
                    n += " xml:lang";
                    const e = "acronym applet basefont big font strike tt";
                    r = [r, e].join(" "), $s(Ks(e), (e => {
                        a(e, "", r)
                    }));
                    const t = "center dir isindex noframes";
                    o = [o, t].join(" "), s = [o, r].join(" "), $s(Ks(t), (e => {
                        a(e, "", s)
                    }))
                }
                return s = s || [o, r].join(" "), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", s), a("address dt dd div caption", "", s), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", r), a("blockquote", "cite", s), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", s), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", s), a("q", "cite", r), a("ins del", "cite datetime", s), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", s), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [s, "param"].join(" ")), a("param", "name value"), a("map", "name", [s, "area"].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", s), a("th", "colspan rowspan headers scope abbr", s), a("form", "accept-charset action autocomplete enctype method name novalidate target", s), a("fieldset", "disabled form name", [s, "legend"].join(" ")), a("label", "form for", r), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? s : r), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [s, "li"].join(" ")), a("noscript", "", s), "html4" !== e && (a("wbr"), a("ruby", "", [r, "rt rp"].join(" ")), a("figcaption", "", s), a("mark rt rp summary bdi", "", r), a("canvas", "width height", s), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [s, "track source"].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [s, "track source"].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [r, "option"].join(" ")), a("article section nav aside main header footer", "", s), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [s, "figcaption"].join(" ")), a("time", "datetime", r), a("dialog", "open", s), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", r), a("progress", "value max", r), a("meter", "value min max low high optimum", r), a("details", "open", [s, "summary"].join(" ")), a("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (i("script", "language xml:space"), i("style", "xml:space"), i("object", "declare classid code codebase codetype archive standby align border hspace vspace"), i("embed", "align name hspace vspace"), i("param", "valuetype type"), i("a", "charset name rev shape coords"), i("br", "clear"), i("applet", "codebase archive code object alt name width height align hspace vspace"), i("img", "name longdesc align border hspace vspace"), i("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), i("font basefont", "size color face"), i("input", "usemap align"), i("select"), i("textarea"), i("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), i("ul", "type compact"), i("li", "type"), i("ol dl menu dir", "compact"), i("pre", "width xml:space"), i("hr", "align noshade size width"), i("isindex", "prompt"), i("table", "summary width frame rules cellspacing cellpadding align bgcolor"), i("col", "width align char charoff valign"), i("colgroup", "width align char charoff valign"), i("thead", "align char charoff valign"), i("tr", "align char charoff valign bgcolor"), i("th", "axis align char charoff valign nowrap bgcolor width height"), i("form", "accept"), i("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), i("tfoot", "align char charoff valign"), i("tbody", "align char charoff valign"), i("area", "nohref"), i("body", "background bgcolor text link vlink alink")), "html4" !== e && (i("input button select textarea", "autofocus"), i("input textarea", "placeholder"), i("a", "download"), i("link script img", "crossorigin"), i("img", "loading"), i("iframe", "sandbox seamless allow allowfullscreen loading")), "html4" !== e && V([t.video, t.audio], (e => {
                    delete e.children.audio, delete e.children.video
                })), $s(Ks("a form meter progress dfn"), (e => {
                    t[e] && delete t[e].children[e]
                })), delete t.caption.children.table, delete t.script, Us[e] = t, t
            })(l);
            !1 === e.verify_html && (e.valid_elements = "*[*]");
            const c = Xs(e.valid_styles), u = Xs(e.invalid_styles, "map"), m = Xs(e.valid_classes, "map"),
                f = i("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
                g = i("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
                p = i("void_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
                h = i("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"),
                b = "td th iframe video audio object script code", v = i("non_empty_elements", b + " pre", p),
                y = i("move_caret_before_on_enter_elements", b + " table", p),
                C = i("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
                w = i("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", C),
                x = i("text_inline_elements", "span strong b em i font s strike u var cite dfn code mark q sup sub samp"),
                k = i("transparent_elements", "a ins del canvas map");
            $s("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "), (e => {
                a[e] = new RegExp("</" + e + "[^>]*>", "gi")
            }));
            const S = e => new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$"), _ = e => {
                const t = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
                    o = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/, s = /[*?+]/;
                if (e) {
                    const a = Ks(e, ",");
                    let i, l;
                    n["@"] && (i = n["@"].attributes, l = n["@"].attributesOrder);
                    for (let e = 0, d = a.length; e < d; e++) {
                        let d = t.exec(a[e]);
                        if (d) {
                            const e = d[1], t = d[2], a = d[3], c = d[5], u = {}, m = [],
                                f = {attributes: u, attributesOrder: m};
                            if ("#" === e && (f.paddEmpty = !0), "-" === e && (f.removeEmpty = !0), "!" === d[4] && (f.removeEmptyAttrs = !0), i && (fe(i, ((e, t) => {
                                u[t] = e
                            })), l && m.push(...l)), c) {
                                const e = Ks(c, "|");
                                for (let t = 0, n = e.length; t < n; t++) if (d = o.exec(e[t]), d) {
                                    const e = {}, t = d[1], n = d[2].replace(/[\\:]:/g, ":"), o = d[3], r = d[4];
                                    if ("!" === t && (f.attributesRequired = f.attributesRequired || [], f.attributesRequired.push(n), e.required = !0), "-" === t) {
                                        delete u[n], m.splice(Ws(m, n), 1);
                                        continue
                                    }
                                    if (o && ("=" === o && (f.attributesDefault = f.attributesDefault || [], f.attributesDefault.push({
                                        name: n,
                                        value: r
                                    }), e.defaultValue = r), "~" === o && (f.attributesForced = f.attributesForced || [], f.attributesForced.push({
                                        name: n,
                                        value: r
                                    }), e.forcedValue = r), "<" === o && (e.validValues = Hs(r, "?"))), s.test(n)) {
                                        const t = e;
                                        f.attributePatterns = f.attributePatterns || [], t.pattern = S(n), f.attributePatterns.push(t)
                                    } else u[n] || m.push(n), u[n] = e
                                }
                            }
                            if (i || "@" !== t || (i = u, l = m), a && (f.outputName = t, n[a] = f), s.test(t)) {
                                const e = f;
                                e.pattern = S(t), r.push(e)
                            } else n[t] = f
                        }
                    }
                }
            }, E = e => {
                r = [], V(ue(n), (e => {
                    delete n[e]
                })), _(e), $s(d, ((e, t) => {
                    o[t] = e.children
                }))
            }, R = e => {
                const t = /^(~)?(.+)$/;
                e && (delete zs.text_block_elements, delete zs.block_elements, $s(Ks(e, ","), (e => {
                    const r = t.exec(e);
                    if (r) {
                        const e = "~" === r[1], t = e ? "span" : "div", a = r[2];
                        if (o[a] = o[t], s[a] = t, v[a.toUpperCase()] = {}, v[a] = {}, e || (w[a.toUpperCase()] = {}, w[a] = {}), !n[a]) {
                            let e = n[t];
                            e = Vs({}, e), delete e.removeEmptyAttrs, delete e.removeEmpty, n[a] = e
                        }
                        $s(o, ((e, n) => {
                            e[t] && (o[n] = e = Vs({}, o[n]), e[a] = e[t])
                        }))
                    }
                })))
            }, A = e => {
                const t = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
                delete Us[l], e && $s(Ks(e, ","), (e => {
                    const n = t.exec(e);
                    if (n) {
                        const e = n[1];
                        let t;
                        t = e ? o[n[2]] : o[n[2]] = {"#comment": {}}, t = o[n[2]], $s(Ks(n[3], "|"), (n => {
                            "-" === e ? delete t[n] : t[n] = {}
                        }))
                    }
                }))
            }, O = e => {
                const t = n[e];
                if (t) return t;
                let o = r.length;
                for (; o--;) {
                    const t = r[o];
                    if (t.pattern.test(e)) return t
                }
            };
            e.valid_elements ? E(e.valid_elements) : ($s(d, ((e, t) => {
                n[t] = {attributes: e.attributes, attributesOrder: e.attributesOrder}, o[t] = e.children
            })), $s(Ks("strong/b em/i"), (e => {
                const t = Ks(e, "/");
                n[t[1]].outputName = t[0]
            })), $s(x, ((t, o) => {
                n[o] && (e.padd_empty_block_inline_children && (n[o].paddInEmptyBlock = !0), n[o].removeEmpty = !0)
            })), $s(Ks("ol ul blockquote a table tbody"), (e => {
                n[e] && (n[e].removeEmpty = !0)
            })), $s(Ks("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), (e => {
                n[e].paddEmpty = !0
            })), $s(Ks("span"), (e => {
                n[e].removeEmptyAttrs = !0
            }))), R(e.custom_elements), A(e.valid_children), _(e.extended_valid_elements), A("+ol[ul|ol],+ul[ul|ol]"), $s({
                dd: "dl",
                dt: "dl",
                li: "ul ol",
                td: "tr",
                th: "tr",
                tr: "tbody thead tfoot",
                tbody: "table",
                thead: "table",
                tfoot: "table",
                legend: "fieldset",
                area: "map",
                param: "video audio object"
            }, ((e, t) => {
                n[t] && (n[t].parentsRequired = Ks(e))
            })), e.invalid_elements && $s(qs(e.invalid_elements), (e => {
                n[e] && delete n[e]
            })), O("span") || _("span[!data-mce-type|*]");
            const T = N(c), B = N(u), D = N(m), P = N(h), L = N(w), M = N(C), I = N(x), F = N(Object.seal(p)), U = N(g),
                z = N(v), j = N(y), H = N(f), $ = N(k), q = N(Object.seal(a)), W = N(s);
            return {
                type: l,
                children: o,
                elements: n,
                getValidStyles: T,
                getValidClasses: D,
                getBlockElements: L,
                getInvalidStyles: B,
                getVoidElements: F,
                getTextBlockElements: M,
                getTextInlineElements: I,
                getBoolAttrs: P,
                getElementRule: O,
                getSelfClosingElements: U,
                getNonEmptyElements: z,
                getMoveCaretBeforeOnEnterElements: j,
                getWhitespaceElements: H,
                getTransparentElements: $,
                getSpecialElements: q,
                isValidChild: (e, t) => {
                    const n = o[e.toLowerCase()];
                    return !(!n || !n[t.toLowerCase()])
                },
                isValid: (e, t) => {
                    const n = O(e);
                    if (n) {
                        if (!t) return !0;
                        {
                            if (n.attributes[t]) return !0;
                            const e = n.attributePatterns;
                            if (e) {
                                let n = e.length;
                                for (; n--;) if (e[n].pattern.test(t)) return !0
                            }
                        }
                    }
                    return !1
                },
                getCustomElements: W,
                addValidElements: _,
                setValidElements: E,
                addCustomElements: R,
                addValidChildren: A
            }
        }, Js = (e = {}, t) => {
            const n = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                o = /\s*([^:]+):\s*([^;]+);?/g, r = /\s+$/, s = {};
            let a, i;
            t && (a = t.getValidStyles(), i = t.getInvalidStyles());
            const l = "\\\" \\' \\; \\: ; : \ufeff".split(" ");
            for (let e = 0; e < l.length; e++) s[l[e]] = "\ufeff" + e, s["\ufeff" + e] = l[e];
            const d = {
                parse: t => {
                    const a = {};
                    let i = !1;
                    const l = e.url_converter, c = e.url_converter_scope || d, u = (e, t, n) => {
                            const o = a[e + "-top" + t];
                            if (!o) return;
                            const r = a[e + "-right" + t];
                            if (!r) return;
                            const s = a[e + "-bottom" + t];
                            if (!s) return;
                            const i = a[e + "-left" + t];
                            if (!i) return;
                            const l = [o, r, s, i];
                            let d = l.length - 1;
                            for (; d-- && l[d] === l[d + 1];) ;
                            d > -1 && n || (a[e + t] = -1 === d ? l[0] : l.join(" "), delete a[e + "-top" + t], delete a[e + "-right" + t], delete a[e + "-bottom" + t], delete a[e + "-left" + t])
                        }, m = e => {
                            const t = a[e];
                            if (!t) return;
                            const n = t.split(" ");
                            let o = n.length;
                            for (; o--;) if (n[o] !== n[0]) return !1;
                            return a[e] = n[0], !0
                        }, f = e => (i = !0, s[e]),
                        g = (e, t) => (i && (e = e.replace(/\uFEFF[0-9]/g, (e => s[e]))), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e),
                        p = e => String.fromCharCode(parseInt(e.slice(1), 16)), h = e => e.replace(/\\[0-9a-f]+/gi, p),
                        b = (t, n, o, r, s, a) => {
                            if (s = s || a) return "'" + (s = g(s)).replace(/\'/g, "\\'") + "'";
                            if (n = g(n || o || r || ""), !e.allow_script_urls) {
                                const t = n.replace(/[\s\r\n]+/g, "");
                                if (/(java|vb)script:/i.test(t)) return "";
                                if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(t)) return ""
                            }
                            return l && (n = l.call(c, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')"
                        };
                    if (t) {
                        let s;
                        for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, f).replace(/\"[^\"]+\"|\'[^\']+\'/g, (e => e.replace(/[;:]/g, f))); s = o.exec(t);) {
                            o.lastIndex = s.index + s[0].length;
                            let t = s[1].replace(r, "").toLowerCase(), l = s[2].replace(r, "");
                            if (t && l) {
                                if (t = h(t), l = h(l), -1 !== t.indexOf("\ufeff") || -1 !== t.indexOf('"')) continue;
                                if (!e.allow_script_urls && ("behavior" === t || /expression\s*\(|\/\*|\*\//.test(l))) continue;
                                "font-weight" === t && "700" === l ? l = "bold" : "color" !== t && "background-color" !== t || (l = l.toLowerCase()), l = l.replace(n, b), a[t] = i ? g(l, !0) : l
                            }
                        }
                        u("border", "", !0), u("border", "-width"), u("border", "-color"), u("border", "-style"), u("padding", ""), u("margin", ""), "border", y = "border-style", C = "border-color", m(v = "border-width") && m(y) && m(C) && (a.border = a[v] + " " + a[y] + " " + a[C], delete a[v], delete a[y], delete a[C]), "medium none" === a.border && delete a.border, "none" === a["border-image"] && delete a["border-image"]
                    }
                    var v, y, C;
                    return a
                }, serialize: (e, t) => {
                    let n = "";
                    const o = (t, o) => {
                        const r = o[t];
                        if (r) for (let t = 0, o = r.length; t < o; t++) {
                            const o = r[t], s = e[o];
                            s && (n += (n.length > 0 ? " " : "") + o + ": " + s + ";")
                        }
                    };
                    return t && a ? (o("*", a), o(t, a)) : fe(e, ((e, o) => {
                        e && ((e, t) => {
                            if (!i || !t) return !0;
                            let n = i["*"];
                            return !(n && n[e] || (n = i[t], n && n[e]))
                        })(o, t) && (n += (n.length > 0 ? " " : "") + o + ": " + e + ";")
                    })), n
                }
            };
            return d
        }, Zs = {
            keyLocation: !0,
            layerX: !0,
            layerY: !0,
            returnValue: !0,
            webkitMovementX: !0,
            webkitMovementY: !0,
            keyIdentifier: !0,
            mozPressure: !0
        }, ea = (e, t) => {
            const n = null != t ? t : {};
            for (const t in e) xe(Zs, t) || (n[t] = e[t]);
            return C(e.composedPath) && (n.composedPath = () => e.composedPath()), n
        }, ta = (e, t, n, o) => {
            var r;
            const s = ea(t, o);
            return s.type = e, y(s.target) && (s.target = null !== (r = s.srcElement) && void 0 !== r ? r : n), (e => y(e.preventDefault) || (e => e instanceof Event || w(e.initEvent))(e))(t) && (s.preventDefault = () => {
                s.defaultPrevented = !0, s.isDefaultPrevented = L, w(t.preventDefault) && t.preventDefault()
            }, s.stopPropagation = () => {
                s.cancelBubble = !0, s.isPropagationStopped = L, w(t.stopPropagation) && t.stopPropagation()
            }, s.stopImmediatePropagation = () => {
                s.isImmediatePropagationStopped = L, s.stopPropagation()
            }, (e => e.isDefaultPrevented === L || e.isDefaultPrevented === P)(s) || (s.isDefaultPrevented = !0 === s.defaultPrevented ? L : P, s.isPropagationStopped = !0 === s.cancelBubble ? L : P, s.isImmediatePropagationStopped = P)), s
        }, na = /^(?:mouse|contextmenu)|click/, oa = (e, t, n, o) => {
            e.addEventListener(t, n, o || !1)
        }, ra = (e, t, n, o) => {
            e.removeEventListener(t, n, o || !1)
        }, sa = (e, t) => {
            const n = ta(e.type, e, document, t);
            if ((e => C(e) && na.test(e.type))(e) && v(e.pageX) && !v(e.clientX)) {
                const t = n.target.ownerDocument || document, o = t.documentElement, r = t.body, s = n;
                s.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), s.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)
            }
            return n
        }, aa = (e, t, n) => {
            const o = e.document, r = {type: "ready"};
            if (n.domLoaded) return void t(r);
            const s = () => {
                ra(e, "DOMContentLoaded", s), ra(e, "load", s), n.domLoaded || (n.domLoaded = !0, t(r)), e = null
            };
            "complete" === o.readyState || "interactive" === o.readyState && o.body ? s() : oa(e, "DOMContentLoaded", s), n.domLoaded || oa(e, "load", s)
        };

    class ia {
        constructor() {
            this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date).toString(32), this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1
        }

        bind(e, t, n, o) {
            const r = this;
            let s;
            const a = window, i = e => {
                r.executeHandlers(sa(e || a.event), l)
            };
            if (!e || zo(e) || $o(e)) return n;
            let l;
            e[r.expando] ? l = e[r.expando] : (l = r.count++, e[r.expando] = l, r.events[l] = {}), o = o || e;
            const d = t.split(" ");
            let c = d.length;
            for (; c--;) {
                let t = d[c], u = i, m = !1, f = !1;
                "DOMContentLoaded" === t && (t = "ready"), r.domLoaded && "ready" === t && "complete" === e.readyState ? n.call(o, sa({type: t})) : (r.hasFocusIn || "focusin" !== t && "focusout" !== t || (m = !0, f = "focusin" === t ? "focus" : "blur", u = e => {
                    const t = sa(e || a.event);
                    t.type = "focus" === t.type ? "focusin" : "focusout", r.executeHandlers(t, l)
                }), s = r.events[l][t], s ? "ready" === t && r.domLoaded ? n(sa({type: t})) : s.push({
                    func: n,
                    scope: o
                }) : (r.events[l][t] = s = [{
                    func: n,
                    scope: o
                }], s.fakeName = f, s.capture = m, s.nativeHandler = u, "ready" === t ? aa(e, u, r) : oa(e, f || t, u, m)))
            }
            return e = s = null, n
        }

        unbind(e, t, n) {
            if (!e || zo(e) || $o(e)) return this;
            const o = e[this.expando];
            if (o) {
                let r = this.events[o];
                if (t) {
                    const o = t.split(" ");
                    let s = o.length;
                    for (; s--;) {
                        const t = o[s], a = r[t];
                        if (a) {
                            if (n) {
                                let e = a.length;
                                for (; e--;) if (a[e].func === n) {
                                    const n = a.nativeHandler, o = a.fakeName, s = a.capture,
                                        i = a.slice(0, e).concat(a.slice(e + 1));
                                    i.nativeHandler = n, i.fakeName = o, i.capture = s, r[t] = i
                                }
                            }
                            n && 0 !== a.length || (delete r[t], ra(e, a.fakeName || t, a.nativeHandler, a.capture))
                        }
                    }
                } else fe(r, ((t, n) => {
                    ra(e, t.fakeName || n, t.nativeHandler, t.capture)
                })), r = {};
                for (const e in r) if (xe(r, e)) return this;
                delete this.events[o];
                try {
                    delete e[this.expando]
                } catch (t) {
                    e[this.expando] = null
                }
            }
            return this
        }

        fire(e, t, n) {
            return this.dispatch(e, t, n)
        }

        dispatch(e, t, n) {
            if (!e || zo(e) || $o(e)) return this;
            const o = sa({type: t, target: e}, n);
            do {
                const t = e[this.expando];
                t && this.executeHandlers(o, t), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow
            } while (e && !o.isPropagationStopped());
            return this
        }

        clean(e) {
            if (!e || zo(e) || $o(e)) return this;
            if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName) {
                this.unbind(e);
                const t = e.getElementsByTagName("*");
                let n = t.length;
                for (; n--;) (e = t[n])[this.expando] && this.unbind(e)
            }
            return this
        }

        destroy() {
            this.events = {}
        }

        cancel(e) {
            return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
        }

        executeHandlers(e, t) {
            const n = this.events[t], o = n && n[e.type];
            if (o) for (let t = 0, n = o.length; t < n; t++) {
                const n = o[t];
                if (n && !1 === n.func.call(n.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return
            }
        }
    }

    ia.Event = new ia;
    const la = Tt.each, da = Tt.grep, ca = "data-mce-style",
        ua = Tt.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom", " "),
        ma = (e, t, n) => {
            y(n) || "" === n ? Yt(e, t) : Vt(e, t, n)
        }, fa = e => e.replace(/[A-Z]/g, (e => "-" + e.toLowerCase())), ga = (e, t) => {
            let n = 0;
            if (e) for (let o = e.nodeType, r = e.previousSibling; r; r = r.previousSibling) {
                const e = r.nodeType;
                (!t || !zo(r) || e !== o && r.data.length) && (n++, o = e)
            }
            return n
        }, pa = (e, t) => {
            const n = Wt(t, "style"), o = e.serialize(e.parse(n), Lt(t));
            ma(t, ca, o)
        }, ha = (e, t, n) => {
            const o = fa(t);
            y(n) || "" === n ? Xn(e, o) : Vn(e, o, ((e, t) => x(e) ? xe(ua, t) ? e + "" : e + "px" : e)(n, o))
        }, ba = (e, t = {}) => {
            const n = {}, o = window, r = {};
            let s = 0;
            const a = ws.forElement(mn(e), {contentCssCors: t.contentCssCors, referrerPolicy: t.referrerPolicy}), i = [],
                l = t.schema ? t.schema : Qs({}),
                d = Js({url_converter: t.url_converter, url_converter_scope: t.url_converter_scope}, t.schema),
                c = t.ownEvents ? new ia : ia.Event, u = l.getBlockElements(),
                f = t => t && e && m(t) ? e.getElementById(t) : t, g = e => {
                    const t = f(e);
                    return C(t) ? mn(t) : null
                }, h = (e, t, n = "") => {
                    let o;
                    const r = g(e);
                    if (C(r) && Ft(r)) {
                        const e = Y[t];
                        o = e && e.get ? e.get(r.dom, t) : Wt(r, t)
                    }
                    return C(o) ? o : n
                }, b = e => {
                    const t = f(e);
                    return y(t) ? [] : t.attributes
                }, v = (e, n, o) => {
                    T(e, (e => {
                        if (To(e)) {
                            const r = mn(e), s = "" === o ? null : o, a = Wt(r, n), i = Y[n];
                            i && i.set ? i.set(r.dom, s, n) : ma(r, n, s), a !== s && t.onSetAttrib && t.onSetAttrib({
                                attrElm: r.dom,
                                attrName: n,
                                attrValue: s
                            })
                        }
                    }))
                }, x = () => t.root_element || e.body, k = (t, n) => ((e, t, n) => {
                    let o = 0, r = 0;
                    const s = e.ownerDocument;
                    if (n = n || e, t) {
                        if (n === e && t.getBoundingClientRect && "static" === Wn(mn(e), "position")) {
                            const n = t.getBoundingClientRect();
                            return o = n.left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft, r = n.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop, {
                                x: o,
                                y: r
                            }
                        }
                        let a = t;
                        for (; a && a !== n && a.nodeType && !ys(a, n);) {
                            const e = a;
                            o += e.offsetLeft || 0, r += e.offsetTop || 0, a = e.offsetParent
                        }
                        for (a = t.parentNode; a && a !== n && a.nodeType && !ys(a, n);) o -= a.scrollLeft || 0, r -= a.scrollTop || 0, a = a.parentNode;
                        r += (e => bs.isFirefox() && "table" === Lt(e) ? vs(An(e)).filter((e => "caption" === Lt(e))).bind((e => vs(Rn(e)).map((t => {
                            const n = t.dom.offsetTop, o = e.dom.offsetTop, r = e.dom.offsetHeight;
                            return n <= o ? -r : 0
                        })))).getOr(0) : 0)(mn(t))
                    }
                    return {x: o, y: r}
                })(e.body, f(t), n), _ = (e, t, n) => {
                    const o = f(e);
                    if (!y(o) && To(o)) return n ? Wn(mn(o), fa(t)) : ("float" === (t = t.replace(/-(\D)/g, ((e, t) => t.toUpperCase()))) && (t = "cssFloat"), o.style ? o.style[t] : void 0)
                }, E = e => {
                    const t = f(e);
                    if (!t) return {w: 0, h: 0};
                    let n = _(t, "width"), o = _(t, "height");
                    return n && -1 !== n.indexOf("px") || (n = "0"), o && -1 !== o.indexOf("px") || (o = "0"), {
                        w: parseInt(n, 10) || t.offsetWidth || t.clientWidth,
                        h: parseInt(o, 10) || t.offsetHeight || t.clientHeight
                    }
                }, R = (e, t) => {
                    if (!e) return !1;
                    const n = p(e) ? e : [e];
                    return H(n, (e => pn(mn(e), t)))
                }, A = (e, t, n, o) => {
                    const r = [];
                    let s = f(e);
                    o = void 0 === o;
                    const a = n || ("BODY" !== x().nodeName ? x().parentNode : null);
                    if (m(t)) if ("*" === t) t = To; else {
                        const e = t;
                        t = t => R(t, e)
                    }
                    for (; s && !(s === a || y(s.nodeType) || Vo(s) || qo(s));) {
                        if (!t || t(s)) {
                            if (!o) return [s];
                            r.push(s)
                        }
                        s = s.parentNode
                    }
                    return o ? r : null
                }, O = (e, t, n) => {
                    let o = t;
                    if (e) {
                        m(t) && (o = e => R(e, t));
                        for (let t = e[n]; t; t = t[n]) if (w(o) && o(t)) return t
                    }
                    return null
                }, T = function (e, t, n) {
                    const o = null != n ? n : this;
                    if (p(e)) {
                        const n = [];
                        return la(e, ((e, r) => {
                            const s = f(e);
                            s && n.push(t.call(o, s, r))
                        })), n
                    }
                    {
                        const n = f(e);
                        return !!n && t.call(o, n)
                    }
                }, B = (e, t) => {
                    T(e, (e => {
                        fe(t, ((t, n) => {
                            v(e, n, t)
                        }))
                    }))
                }, D = (e, t) => {
                    T(e, (e => {
                        const n = mn(e);
                        io(n, t)
                    }))
                }, P = (t, n, o, r, s) => T(t, (t => {
                    const a = m(n) ? e.createElement(n) : n;
                    return C(o) && B(a, o), r && (!m(r) && r.nodeType ? a.appendChild(r) : m(r) && D(a, r)), s ? a : t.appendChild(a)
                })), L = (t, n, o) => P(e.createElement(t), t, n, o, !0), M = Fs.encodeAllRaw, I = (e, t) => T(e, (e => {
                    const n = mn(e);
                    return t && V(An(n), (e => {
                        Ut(e) && 0 === e.dom.length ? oo(e) : Qn(n, e)
                    })), oo(n), n.dom
                })), F = (e, t, n) => {
                    T(e, (e => {
                        if (To(e)) {
                            const o = mn(e), r = t.split(" ");
                            V(r, (e => {
                                C(n) ? (n ? nn : rn)(o, e) : ((e, t) => {
                                    const n = Jt(e) ? e.dom.classList.toggle(t) : ((e, t) => j(Zt(e), t) ? tn(e, t) : en(e, t))(e, t);
                                    on(e)
                                })(o, e)
                            }))
                        }
                    }))
                }, U = (e, t, n) => T(t, (o => {
                    var r;
                    const s = p(t) ? e.cloneNode(!0) : e;
                    return n && la(da(o.childNodes), (e => {
                        s.appendChild(e)
                    })), null === (r = o.parentNode) || void 0 === r || r.replaceChild(s, o), o
                })), z = e => {
                    if (To(e)) {
                        const t = "a" === e.nodeName.toLowerCase() && !h(e, "href") && h(e, "id");
                        if (h(e, "name") || h(e, "data-mce-bookmark") || t) return !0
                    }
                    return !1
                }, $ = () => e.createRange(), q = (n, r, s, a) => {
                    if (p(n)) {
                        let e = n.length;
                        const t = [];
                        for (; e--;) t[e] = q(n[e], r, s, a);
                        return t
                    }
                    return !t.collect || n !== e && n !== o || i.push([n, r, s, a]), c.bind(n, r, s, a || G)
                }, W = (t, n, r) => {
                    if (p(t)) {
                        let e = t.length;
                        const o = [];
                        for (; e--;) o[e] = W(t[e], n, r);
                        return o
                    }
                    if (i.length > 0 && (t === e || t === o)) {
                        let e = i.length;
                        for (; e--;) {
                            const [o, s, a] = i[e];
                            t !== o || n && n !== s || r && r !== a || c.unbind(o, s, a)
                        }
                    }
                    return c.unbind(t, n, r)
                }, K = e => {
                    if (e && To(e)) {
                        const t = e.getAttribute("data-mce-contenteditable");
                        return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null
                    }
                    return null
                }, G = {
                    doc: e,
                    settings: t,
                    win: o,
                    files: r,
                    stdMode: !0,
                    boxModel: !0,
                    styleSheetLoader: a,
                    boundEvents: i,
                    styles: d,
                    schema: l,
                    events: c,
                    isBlock: e => m(e) ? xe(u, e) : To(e) && (xe(u, e.nodeName) || ps(l, e)),
                    root: null,
                    clone: (e, t) => e.cloneNode(t),
                    getRoot: x,
                    getViewPort: e => {
                        const t = yo(e);
                        return {x: t.x, y: t.y, w: t.width, h: t.height}
                    },
                    getRect: e => {
                        const t = f(e), n = k(t), o = E(t);
                        return {x: n.x, y: n.y, w: o.w, h: o.h}
                    },
                    getSize: E,
                    getParent: (e, t, n) => {
                        const o = A(e, t, n, !1);
                        return o && o.length > 0 ? o[0] : null
                    },
                    getParents: A,
                    get: f,
                    getNext: (e, t) => O(e, t, "nextSibling"),
                    getPrev: (e, t) => O(e, t, "previousSibling"),
                    select: (n, o) => {
                        var r, s;
                        const a = null !== (s = null !== (r = f(o)) && void 0 !== r ? r : t.root_element) && void 0 !== s ? s : e;
                        return w(a.querySelectorAll) ? de(a.querySelectorAll(n)) : []
                    },
                    is: R,
                    add: P,
                    create: L,
                    createHTML: (e, t, n = "") => {
                        let o = "<" + e;
                        for (const e in t) ke(t, e) && (o += " " + e + '="' + M(t[e]) + '"');
                        return Ke(n) && xe(l.getVoidElements(), e) ? o + " />" : o + ">" + n + "</" + e + ">"
                    },
                    createFragment: t => {
                        const n = e.createElement("div"), o = e.createDocumentFragment();
                        let r;
                        for (o.appendChild(n), t && (n.innerHTML = t); r = n.firstChild;) o.appendChild(r);
                        return o.removeChild(n), o
                    },
                    remove: I,
                    setStyle: (e, n, o) => {
                        T(e, (e => {
                            const r = mn(e);
                            ha(r, n, o), t.update_styles && pa(d, r)
                        }))
                    },
                    getStyle: _,
                    setStyles: (e, n) => {
                        T(e, (e => {
                            const o = mn(e);
                            fe(n, ((e, t) => {
                                ha(o, t, e)
                            })), t.update_styles && pa(d, o)
                        }))
                    },
                    removeAllAttribs: e => T(e, (e => {
                        const t = e.attributes;
                        for (let n = t.length - 1; n >= 0; n--) e.removeAttributeNode(t.item(n))
                    })),
                    setAttrib: v,
                    setAttribs: B,
                    getAttrib: h,
                    getPos: k,
                    parseStyle: e => d.parse(e),
                    serializeStyle: (e, t) => d.serialize(e, t),
                    addStyle: t => {
                        if (G !== ba.DOM && e === document) {
                            if (n[t]) return;
                            n[t] = !0
                        }
                        let o = e.getElementById("mceDefaultStyles");
                        if (!o) {
                            o = e.createElement("style"), o.id = "mceDefaultStyles", o.type = "text/css";
                            const t = e.head;
                            t.firstChild ? t.insertBefore(o, t.firstChild) : t.appendChild(o)
                        }
                        o.styleSheet ? o.styleSheet.cssText += t : o.appendChild(e.createTextNode(t))
                    },
                    loadCSS: e => {
                        e || (e = ""), V(e.split(","), (e => {
                            r[e] = !0, a.load(e).catch(S)
                        }))
                    },
                    addClass: (e, t) => {
                        F(e, t, !0)
                    },
                    removeClass: (e, t) => {
                        F(e, t, !1)
                    },
                    hasClass: (e, t) => {
                        const n = g(e), o = t.split(" ");
                        return C(n) && te(o, (e => sn(n, e)))
                    },
                    toggleClass: F,
                    show: e => {
                        T(e, (e => Xn(mn(e), "display")))
                    },
                    hide: e => {
                        T(e, (e => Vn(mn(e), "display", "none")))
                    },
                    isHidden: e => {
                        const t = g(e);
                        return C(t) && Bt(Gn(t, "display"), "none")
                    },
                    uniqueId: e => (e || "mce_") + s++,
                    setHTML: D,
                    getOuterHTML: e => {
                        const t = g(e);
                        return C(t) ? To(t.dom) ? t.dom.outerHTML : (e => {
                            const t = cn("div"), n = mn(e.dom.cloneNode(!0));
                            return eo(t, n), ao(t)
                        })(t) : ""
                    },
                    setOuterHTML: (e, t) => {
                        T(e, (e => {
                            To(e) && (e.outerHTML = t)
                        }))
                    },
                    decode: Fs.decode,
                    encode: M,
                    insertAfter: (e, t) => {
                        const n = f(t);
                        return T(e, (e => {
                            const t = null == n ? void 0 : n.parentNode, o = null == n ? void 0 : n.nextSibling;
                            return t && (o ? t.insertBefore(e, o) : t.appendChild(e)), e
                        }))
                    },
                    replace: U,
                    rename: (e, t) => {
                        if (e.nodeName !== t.toUpperCase()) {
                            const n = L(t);
                            return la(b(e), (t => {
                                v(n, t.nodeName, h(e, t.nodeName))
                            })), U(n, e, !0), n
                        }
                        return e
                    },
                    findCommonAncestor: (e, t) => {
                        let n = e;
                        for (; n;) {
                            let e = t;
                            for (; e && n !== e;) e = e.parentNode;
                            if (n === e) break;
                            n = n.parentNode
                        }
                        return !n && e.ownerDocument ? e.ownerDocument.documentElement : n
                    },
                    run: T,
                    getAttribs: b,
                    isEmpty: (e, t) => {
                        let n = 0;
                        if (z(e)) return !1;
                        const o = e.firstChild;
                        if (o) {
                            const r = new Ro(o, e), s = l ? l.getWhitespaceElements() : {},
                                a = t || (l ? l.getNonEmptyElements() : null);
                            let i = o;
                            do {
                                if (To(i)) {
                                    const e = i.getAttribute("data-mce-bogus");
                                    if (e) {
                                        i = r.next("all" === e);
                                        continue
                                    }
                                    const t = i.nodeName.toLowerCase();
                                    if (a && a[t]) {
                                        if ("br" === t) {
                                            n++, i = r.next();
                                            continue
                                        }
                                        return !1
                                    }
                                    if (z(i)) return !1
                                }
                                if ($o(i)) return !1;
                                if (zo(i) && !Xr(i.data)) return !1;
                                if (zo(i) && i.parentNode && s[i.parentNode.nodeName] && Xr(i.data)) return !1;
                                i = r.next()
                            } while (i)
                        }
                        return n <= 1
                    },
                    createRng: $,
                    nodeIndex: ga,
                    split: (e, t, n) => {
                        let o, r, s = $();
                        if (e && t && e.parentNode && t.parentNode) {
                            const a = e.parentNode;
                            return s.setStart(a, ga(e)), s.setEnd(t.parentNode, ga(t)), o = s.extractContents(), s = $(), s.setStart(t.parentNode, ga(t) + 1), s.setEnd(a, ga(e) + 1), r = s.extractContents(), a.insertBefore(Ss(G, o), e), n ? a.insertBefore(n, e) : a.insertBefore(t, e), a.insertBefore(Ss(G, r), e), I(e), n || t
                        }
                    },
                    bind: q,
                    unbind: W,
                    fire: (e, t, n) => c.dispatch(e, t, n),
                    dispatch: (e, t, n) => c.dispatch(e, t, n),
                    getContentEditable: K,
                    getContentEditableParent: e => {
                        const t = x();
                        let n = null;
                        for (let o = e; o && o !== t && (n = K(o), null === n); o = o.parentNode) ;
                        return n
                    },
                    destroy: () => {
                        if (i.length > 0) {
                            let e = i.length;
                            for (; e--;) {
                                const [t, n, o] = i[e];
                                c.unbind(t, n, o)
                            }
                        }
                        fe(r, ((e, t) => {
                            a.unload(t), delete r[t]
                        }))
                    },
                    isChildOf: (e, t) => e === t || t.contains(e),
                    dumpRng: e => "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
                }, Y = ((e, t, n) => {
                    const o = t.keep_values, r = {
                        set: (e, o, r) => {
                            const s = mn(e);
                            w(t.url_converter) && C(o) && (o = t.url_converter.call(t.url_converter_scope || n(), String(o), r, e)), ma(s, "data-mce-" + r, o), ma(s, r, o)
                        }, get: (e, t) => {
                            const n = mn(e);
                            return Wt(n, "data-mce-" + t) || Wt(n, t)
                        }
                    }, s = {
                        style: {
                            set: (t, n) => {
                                const r = mn(t);
                                o && ma(r, ca, n), Yt(r, "style"), m(n) && qn(r, e.parse(n))
                            }, get: t => {
                                const n = mn(t), o = Wt(n, ca) || Wt(n, "style");
                                return e.serialize(e.parse(o), Lt(n))
                            }
                        }
                    };
                    return o && (s.href = s.src = r), s
                })(d, t, N(G));
            return G
        };
    ba.DOM = ba(document), ba.nodeIndex = ga;
    const va = ba.DOM;

    class ya {
        constructor(e = {}) {
            this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = !1, this.settings = e
        }

        _setReferrerPolicy(e) {
            this.settings.referrerPolicy = e
        }

        loadScript(e) {
            return new Promise(((t, n) => {
                const o = va;
                let r;
                const s = () => {
                    o.remove(a), r && (r.onerror = r.onload = r = null)
                }, a = o.uniqueId();
                r = document.createElement("script"), r.id = a, r.type = "text/javascript", r.src = Tt._addCacheSuffix(e), this.settings.referrerPolicy && o.setAttrib(r, "referrerpolicy", this.settings.referrerPolicy), r.onload = () => {
                    s(), t()
                }, r.onerror = () => {
                    s(), n("Failed to load script: " + e)
                }, (document.getElementsByTagName("head")[0] || document.body).appendChild(r)
            }))
        }

        isDone(e) {
            return 2 === this.states[e]
        }

        markDone(e) {
            this.states[e] = 2
        }

        add(e) {
            const t = this;
            return t.queue.push(e), void 0 === t.states[e] && (t.states[e] = 0), new Promise(((n, o) => {
                t.scriptLoadedCallbacks[e] || (t.scriptLoadedCallbacks[e] = []), t.scriptLoadedCallbacks[e].push({
                    resolve: n,
                    reject: o
                })
            }))
        }

        load(e) {
            return this.add(e)
        }

        remove(e) {
            delete this.states[e], delete this.scriptLoadedCallbacks[e]
        }

        loadQueue() {
            const e = this.queue;
            return this.queue = [], this.loadScripts(e)
        }

        loadScripts(e) {
            const t = this, n = (e, n) => {
                    we(t.scriptLoadedCallbacks, n).each((t => {
                        V(t, (t => t[e](n)))
                    })), delete t.scriptLoadedCallbacks[n]
                }, o = e => {
                    const t = K(e, (e => "rejected" === e.status));
                    return t.length > 0 ? Promise.reject(ee(t, (({reason: e}) => p(e) ? e : [e]))) : Promise.resolve()
                },
                r = e => Promise.allSettled($(e, (e => 2 === t.states[e] ? (n("resolve", e), Promise.resolve()) : 3 === t.states[e] ? (n("reject", e), Promise.reject(e)) : (t.states[e] = 1, t.loadScript(e).then((() => {
                    t.states[e] = 2, n("resolve", e);
                    const s = t.queue;
                    return s.length > 0 ? (t.queue = [], r(s).then(o)) : Promise.resolve()
                }), (() => (t.states[e] = 3, n("reject", e), Promise.reject(e)))))))),
                s = e => (t.loading = !0, r(e).then((e => {
                    t.loading = !1;
                    const n = t.queueLoadedCallbacks.shift();
                    return M.from(n).each(D), o(e)
                }))), a = Se(e);
            return t.loading ? new Promise(((e, n) => {
                t.queueLoadedCallbacks.push((() => s(a).then(e, n)))
            })) : s(a)
        }
    }

    ya.ScriptLoader = new ya;
    const Ca = e => {
        let t = e;
        return {
            get: () => t, set: e => {
                t = e
            }
        }
    }, wa = {}, xa = Ca("en"), ka = () => we(wa, xa.get()), Sa = {
        getData: () => ge(wa, (e => ({...e}))), setCode: e => {
            e && xa.set(e)
        }, getCode: () => xa.get(), add: (e, t) => {
            let n = wa[e];
            n || (wa[e] = n = {}), fe(t, ((e, t) => {
                n[t.toLowerCase()] = e
            }))
        }, translate: e => {
            const t = ka().getOr({}), n = e => w(e) ? Object.prototype.toString.call(e) : o(e) ? "" : "" + e,
                o = e => "" === e || null == e, r = e => {
                    const o = n(e);
                    return we(t, o.toLowerCase()).map(n).getOr(o)
                }, s = e => e.replace(/{context:\w+}$/, "");
            if (o(e)) return "";
            if (f(a = e) && xe(a, "raw")) return n(e.raw);
            var a;
            if ((e => p(e) && e.length > 1)(e)) {
                const t = e.slice(1);
                return s(r(e[0]).replace(/\{([0-9]+)\}/g, ((e, o) => xe(t, o) ? n(t[o]) : e)))
            }
            return s(r(e))
        }, isRtl: () => ka().bind((e => we(e, "_dir"))).exists((e => "rtl" === e)), hasCode: e => xe(wa, e)
    }, _a = () => {
        const e = [], t = {}, n = {}, o = [], r = (e, t) => {
                const n = K(o, (n => n.name === e && n.state === t));
                V(n, (e => e.resolve()))
            }, s = e => xe(t, e), a = (e, n) => {
                const o = Sa.getCode();
                !o || n && -1 === ("," + (n || "") + ",").indexOf("," + o + ",") || ya.ScriptLoader.add(t[e] + "/langs/" + o + ".js")
            },
            i = (e, t = "added") => "added" === t && (e => xe(n, e))(e) || "loaded" === t && s(e) ? Promise.resolve() : new Promise((n => {
                o.push({name: e, state: t, resolve: n})
            }));
        return {
            items: e,
            urls: t,
            lookup: n,
            get: e => {
                if (n[e]) return n[e].instance
            },
            requireLangPack: (e, t) => {
                !1 !== _a.languageLoad && (s(e) ? a(e, t) : i(e, "loaded").then((() => a(e, t))))
            },
            add: (t, o) => (e.push(o), n[t] = {instance: o}, r(t, "added"), o),
            remove: e => {
                delete t[e], delete n[e]
            },
            createUrl: (e, t) => m(t) ? m(e) ? {prefix: "", resource: t, suffix: ""} : {
                prefix: e.prefix,
                resource: t,
                suffix: e.suffix
            } : t,
            load: (e, o) => {
                if (t[e]) return Promise.resolve();
                let s = m(o) ? o : o.prefix + o.resource + o.suffix;
                0 !== s.indexOf("/") && -1 === s.indexOf("://") && (s = _a.baseURL + "/" + s), t[e] = s.substring(0, s.lastIndexOf("/"));
                const a = () => (r(e, "loaded"), Promise.resolve());
                return n[e] ? a() : ya.ScriptLoader.add(s).then(a)
            },
            waitFor: i
        }
    };
    _a.languageLoad = !0, _a.baseURL = "", _a.PluginManager = _a(), _a.ThemeManager = _a(), _a.ModelManager = _a();
    const Ea = e => {
            const t = Ca(M.none()), n = () => t.get().each((e => clearInterval(e)));
            return {
                clear: () => {
                    n(), t.set(M.none())
                }, isSet: () => t.get().isSome(), get: () => t.get(), set: o => {
                    n(), t.set(M.some(setInterval(o, e)))
                }
            }
        }, Na = () => {
            const e = (e => {
                const t = Ca(M.none()), n = () => t.get().each(e);
                return {
                    clear: () => {
                        n(), t.set(M.none())
                    }, isSet: () => t.get().isSome(), get: () => t.get(), set: e => {
                        n(), t.set(M.some(e))
                    }
                }
            })(S);
            return {...e, on: t => e.get().each(t)}
        }, Ra = (e, t) => {
            let n = null;
            return {
                cancel: () => {
                    h(n) || (clearTimeout(n), n = null)
                }, throttle: (...o) => {
                    h(n) && (n = setTimeout((() => {
                        n = null, e.apply(null, o)
                    }), t))
                }
            }
        }, Aa = (e, t) => {
            let n = null;
            const o = () => {
                h(n) || (clearTimeout(n), n = null)
            };
            return {
                cancel: o, throttle: (...r) => {
                    o(), n = setTimeout((() => {
                        n = null, e.apply(null, r)
                    }), t)
                }
            }
        }, Oa = N("mce-annotation"), Ta = N("data-mce-annotation"), Ba = N("data-mce-annotation-uid"),
        Da = N("data-mce-annotation-active"), Pa = N("data-mce-annotation-classes"),
        La = N("data-mce-annotation-attrs"), Ma = e => t => bn(t, e), Ia = (e, t) => {
            const n = e.selection.getRng(), o = mn(n.startContainer), r = mn(e.getBody()),
                s = t.fold((() => "." + Oa()), (e => `[${Ta()}="${e}"]`)), a = On(o, n.startOffset).getOr(o);
            return Eo(a, s, Ma(r)).bind((t => Kt(t, `${Ba()}`).bind((n => Kt(t, `${Ta()}`).map((t => {
                const o = Ua(e, n);
                return {uid: n, name: t, elements: o}
            }))))))
        }, Fa = (e, t) => Gt(e, "data-mce-bogus") || No(e, '[data-mce-bogus="all"]', Ma(t)), Ua = (e, t) => {
            const n = mn(e.getBody()), o = or(n, `[${Ba()}="${t}"]`);
            return K(o, (e => !Fa(e, n)))
        }, za = (e, t) => {
            const n = mn(e.getBody()), o = or(n, `[${Ta()}="${t}"]`), r = {};
            return V(o, (e => {
                if (!Fa(e, n)) {
                    const t = Wt(e, Ba()), n = we(r, t).getOr([]);
                    r[t] = n.concat([e])
                }
            })), r
        };
    let ja = 0;
    const Ha = e => {
            const t = (new Date).getTime(), n = Math.floor(1e9 * Math.random());
            return ja++, e + "_" + n + ja + String(t)
        }, $a = (e, t) => mn(e.dom.cloneNode(t)), Va = e => $a(e, !1), qa = e => $a(e, !0), Wa = (e, t, n = P) => {
            const o = new Ro(e, t), r = e => {
                let t;
                do {
                    t = o[e]()
                } while (t && !zo(t) && !n(t));
                return M.from(t).filter(zo)
            };
            return {
                current: () => M.from(o.current()).filter(zo),
                next: () => r("next"),
                prev: () => r("prev"),
                prev2: () => r("prev2")
            }
        }, Ka = (e, t) => {
            const n = t || (t => e.isBlock(t) || Wo(t) || Yo(t)), o = (e, t, n, r) => {
                if (zo(e)) {
                    const n = r(e, t, e.data);
                    if (-1 !== n) return M.some({container: e, offset: n})
                }
                return n().bind((e => o(e.container, e.offset, n, r)))
            };
            return {
                backwards: (t, r, s, a) => {
                    const i = Wa(t, null != a ? a : e.getRoot(), n);
                    return o(t, r, (() => i.prev().map((e => ({container: e, offset: e.length})))), s).getOrNull()
                }, forwards: (t, r, s, a) => {
                    const i = Wa(t, null != a ? a : e.getRoot(), n);
                    return o(t, r, (() => i.next().map((e => ({container: e, offset: 0})))), s).getOrNull()
                }
            }
        }, Ga = Math.round, Ya = e => e ? {
            left: Ga(e.left),
            top: Ga(e.top),
            bottom: Ga(e.bottom),
            right: Ga(e.right),
            width: Ga(e.width),
            height: Ga(e.height)
        } : {left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0},
        Xa = (e, t) => (e = Ya(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e),
        Qa = (e, t, n) => e >= 0 && e <= Math.min(t.height, n.height) / 2, Ja = (e, t) => {
            const n = Math.min(t.height / 2, e.height / 2);
            return e.bottom - n < t.top || !(e.top > t.bottom) && Qa(t.top - e.bottom, e, t)
        }, Za = (e, t) => e.top > t.bottom || !(e.bottom < t.top) && Qa(t.bottom - e.top, e, t), ei = (e, t, n) => {
            const o = Math.max(Math.min(t, e.left + e.width), e.left), r = Math.max(Math.min(n, e.top + e.height), e.top);
            return Math.sqrt((t - o) * (t - o) + (n - r) * (n - r))
        }, ti = e => {
            const t = e.startContainer, n = e.startOffset;
            return t === e.endContainer && t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
        }, ni = (e, t) => {
            if (To(e) && e.hasChildNodes()) {
                const n = e.childNodes, o = ((e, t, n) => Math.min(Math.max(e, 0), n))(t, 0, n.length - 1);
                return n[o]
            }
            return e
        },
        oi = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        ri = e => m(e) && e.charCodeAt(0) >= 768 && oi.test(e), si = To, ai = Wr, ii = Po("display", "block table"),
        li = Po("float", "left right"), di = ((...e) => t => {
            for (let n = 0; n < e.length; n++) if (!e[n](t)) return !1;
            return !0
        })(si, ai, T(li)), ci = T(Po("white-space", "pre pre-line pre-wrap")), ui = zo, mi = Wo, fi = ba.nodeIndex,
        gi = (e, t) => t < 0 && To(e) && e.hasChildNodes() ? void 0 : ni(e, t),
        pi = e => e ? e.createRange() : ba.DOM.createRng(), hi = e => m(e) && /[\r\n\t ]/.test(e),
        bi = e => !!e.setStart && !!e.setEnd, vi = e => {
            const t = e.startContainer, n = e.startOffset;
            if (hi(e.toString()) && ci(t.parentNode) && zo(t)) {
                const e = t.data;
                if (hi(e[n - 1]) || hi(e[n + 1])) return !0
            }
            return !1
        }, yi = e => 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom, Ci = e => {
            var t;
            let n;
            const o = e.getClientRects();
            return n = o.length > 0 ? Ya(o[0]) : Ya(e.getBoundingClientRect()), !bi(e) && mi(e) && yi(n) ? (e => {
                const t = e.ownerDocument, n = pi(t), o = t.createTextNode(tr), r = e.parentNode;
                r.insertBefore(o, e), n.setStart(o, 0), n.setEnd(o, 1);
                const s = Ya(n.getBoundingClientRect());
                return r.removeChild(o), s
            })(e) : yi(n) && bi(e) && null !== (t = (e => {
                const t = e.startContainer, n = e.endContainer, o = e.startOffset, r = e.endOffset;
                if (t === n && zo(n) && 0 === o && 1 === r) {
                    const t = e.cloneRange();
                    return t.setEndAfter(n), Ci(t)
                }
                return null
            })(e)) && void 0 !== t ? t : n
        }, wi = (e, t) => {
            const n = Xa(e, t);
            return n.width = 1, n.right = n.left + 1, n
        }, xi = (e, t, n) => {
            const o = () => (n || (n = (e => {
                const t = [], n = e => {
                    var n, o;
                    0 !== e.height && (t.length > 0 && (n = e, o = t[t.length - 1], n.left === o.left && n.top === o.top && n.bottom === o.bottom && n.right === o.right) || t.push(e))
                }, o = (e, t) => {
                    const o = pi(e.ownerDocument);
                    if (t < e.data.length) {
                        if (ri(e.data[t])) return;
                        if (ri(e.data[t - 1]) && (o.setStart(e, t), o.setEnd(e, t + 1), !vi(o))) return void n(wi(Ci(o), !1))
                    }
                    t > 0 && (o.setStart(e, t - 1), o.setEnd(e, t), vi(o) || n(wi(Ci(o), !1))), t < e.data.length && (o.setStart(e, t), o.setEnd(e, t + 1), vi(o) || n(wi(Ci(o), !0)))
                }, r = e.container(), s = e.offset();
                if (ui(r)) return o(r, s), t;
                if (si(r)) if (e.isAtEnd()) {
                    const e = gi(r, s);
                    ui(e) && o(e, e.data.length), di(e) && !mi(e) && n(wi(Ci(e), !1))
                } else {
                    const a = gi(r, s);
                    if (ui(a) && o(a, 0), di(a) && e.isAtEnd()) return n(wi(Ci(a), !1)), t;
                    const i = gi(e.container(), e.offset() - 1);
                    di(i) && !mi(i) && (ii(i) || ii(a) || !di(a)) && n(wi(Ci(i), !1)), di(a) && n(wi(Ci(a), !0))
                }
                return t
            })(xi(e, t))), n);
            return {
                container: N(e),
                offset: N(t),
                toRange: () => {
                    const n = pi(e.ownerDocument);
                    return n.setStart(e, t), n.setEnd(e, t), n
                },
                getClientRects: o,
                isVisible: () => o().length > 0,
                isAtStart: () => (ui(e), 0 === t),
                isAtEnd: () => ui(e) ? t >= e.data.length : t >= e.childNodes.length,
                isEqual: n => n && e === n.container() && t === n.offset(),
                getNode: n => gi(e, n ? t - 1 : t)
            }
        };
    xi.fromRangeStart = e => xi(e.startContainer, e.startOffset), xi.fromRangeEnd = e => xi(e.endContainer, e.endOffset), xi.after = e => xi(e.parentNode, fi(e) + 1), xi.before = e => xi(e.parentNode, fi(e)), xi.isAbove = (e, t) => Dt(ie(t.getClientRects()), le(e.getClientRects()), Ja).getOr(!1), xi.isBelow = (e, t) => Dt(le(t.getClientRects()), ie(e.getClientRects()), Za).getOr(!1), xi.isAtStart = e => !!e && e.isAtStart(), xi.isAtEnd = e => !!e && e.isAtEnd(), xi.isTextPosition = e => !!e && zo(e.container()), xi.isElementPosition = e => !xi.isTextPosition(e);
    const ki = (e, t) => {
            zo(t) && 0 === t.data.length && e.remove(t)
        }, Si = (e, t, n) => {
            qo(n) ? ((e, t, n) => {
                const o = M.from(n.firstChild), r = M.from(n.lastChild);
                t.insertNode(n), o.each((t => ki(e, t.previousSibling))), r.each((t => ki(e, t.nextSibling)))
            })(e, t, n) : ((e, t, n) => {
                t.insertNode(n), ki(e, n.previousSibling), ki(e, n.nextSibling)
            })(e, t, n)
        }, _i = zo, Ei = Mo, Ni = ba.nodeIndex, Ri = e => {
            const t = e.parentNode;
            return Ei(t) ? Ri(t) : t
        },
        Ai = e => e ? Oe(e.childNodes, ((e, t) => (Ei(t) && "BR" !== t.nodeName ? e = e.concat(Ai(t)) : e.push(t), e)), []) : [],
        Oi = e => t => e === t, Ti = e => (_i(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + (e => {
            let t, n;
            t = Ai(Ri(e)), n = Te(t, Oi(e), e), t = t.slice(0, n + 1);
            const o = Oe(t, ((e, n, o) => (_i(n) && _i(t[o - 1]) && e++, e)), 0);
            return t = Ae(t, Do([e.nodeName])), n = Te(t, Oi(e), e), n - o
        })(e) + "]", Bi = (e, t) => {
            let n, o = [], r = t.container(), s = t.offset();
            if (_i(r)) n = ((e, t) => {
                let n = e;
                for (; (n = n.previousSibling) && _i(n);) t += n.data.length;
                return t
            })(r, s); else {
                const e = r.childNodes;
                s >= e.length ? (n = "after", s = e.length - 1) : n = "before", r = e[s]
            }
            o.push(Ti(r));
            let a = ((e, t, n) => {
                const o = [];
                for (let n = t.parentNode; n && n !== e; n = n.parentNode) o.push(n);
                return o
            })(e, r);
            return a = Ae(a, T(Mo)), o = o.concat(Re(a, (e => Ti(e)))), o.reverse().join("/") + "," + n
        }, Di = (e, t) => {
            if (!t) return null;
            const n = t.split(","), o = n[0].split("/"), r = n.length > 1 ? n[1] : "before", s = Oe(o, ((e, t) => {
                const n = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
                return n ? ("text()" === n[1] && (n[1] = "#text"), ((e, t, n) => {
                    let o = Ai(e);
                    return o = Ae(o, ((e, t) => !_i(e) || !_i(o[t - 1]))), o = Ae(o, Do([t])), o[n]
                })(e, n[1], parseInt(n[2], 10))) : null
            }), e);
            if (!s) return null;
            if (!_i(s) && s.parentNode) {
                let e;
                return e = "after" === r ? Ni(s) + 1 : Ni(s), xi(s.parentNode, e)
            }
            return ((e, t) => {
                let n = e, o = 0;
                for (; _i(n);) {
                    const r = n.data.length;
                    if (t >= o && t <= o + r) {
                        e = n, t -= o;
                        break
                    }
                    if (!_i(n.nextSibling)) {
                        e = n, t = r;
                        break
                    }
                    o += r, n = n.nextSibling
                }
                return _i(e) && t > e.data.length && (t = e.data.length), xi(e, t)
            })(s, parseInt(r, 10))
        }, Pi = Yo, Li = (e, t, n, o, r) => {
            const s = r ? o.startContainer : o.endContainer;
            let a = r ? o.startOffset : o.endOffset;
            const i = [], l = e.getRoot();
            if (zo(s)) i.push(n ? ((e, t, n) => {
                let o = e(t.data.slice(0, n)).length;
                for (let n = t.previousSibling; n && zo(n); n = n.previousSibling) o += e(n.data).length;
                return o
            })(t, s, a) : a); else {
                let t = 0;
                const o = s.childNodes;
                a >= o.length && o.length && (t = 1, a = Math.max(0, o.length - 1)), i.push(e.nodeIndex(o[a], n) + t)
            }
            for (let t = s; t && t !== l; t = t.parentNode) i.push(e.nodeIndex(t, n));
            return i
        }, Mi = (e, t, n) => {
            let o = 0;
            return Tt.each(e.select(t), (e => "all" === e.getAttribute("data-mce-bogus") ? void 0 : e !== n && void o++)), o
        }, Ii = (e, t) => {
            let n = t ? e.startContainer : e.endContainer, o = t ? e.startOffset : e.endOffset;
            if (To(n) && "TR" === n.nodeName) {
                const r = n.childNodes;
                n = r[Math.min(t ? o : o - 1, r.length - 1)], n && (o = t ? 0 : n.childNodes.length, t ? e.setStart(n, o) : e.setEnd(n, o))
            }
        }, Fi = e => (Ii(e, !0), Ii(e, !1), e), Ui = (e, t) => {
            if (To(e) && (e = ni(e, t), Pi(e))) return e;
            if (Or(e)) {
                zo(e) && Rr(e) && (e = e.parentNode);
                let t = e.previousSibling;
                if (Pi(t)) return t;
                if (t = e.nextSibling, Pi(t)) return t
            }
        }, zi = (e, t, n) => {
            const o = n.getNode(), r = n.getRng();
            if ("IMG" === o.nodeName || Pi(o)) {
                const e = o.nodeName;
                return {name: e, index: Mi(n.dom, e, o)}
            }
            const s = (e => Ui(e.startContainer, e.startOffset) || Ui(e.endContainer, e.endOffset))(r);
            if (s) {
                const e = s.tagName;
                return {name: e, index: Mi(n.dom, e, s)}
            }
            return ((e, t, n, o) => {
                const r = t.dom, s = Li(r, e, n, o, !0), a = t.isForward(), i = Ir(o) ? {isFakeCaret: !0} : {};
                return t.isCollapsed() ? {start: s, forward: a, ...i} : {
                    start: s,
                    end: Li(r, e, n, o, !1),
                    forward: a, ...i
                }
            })(e, n, t, r)
        }, ji = (e, t, n) => {
            const o = {"data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px"};
            return n ? e.create("span", o, "&#xFEFF;") : e.create("span", o)
        }, Hi = (e, t) => {
            const n = e.dom;
            let o = e.getRng();
            const r = n.uniqueId(), s = e.isCollapsed(), a = e.getNode(), i = a.nodeName, l = e.isForward();
            if ("IMG" === i) return {name: i, index: Mi(n, i, a)};
            const d = Fi(o.cloneRange());
            if (!s) {
                d.collapse(!1);
                const e = ji(n, r + "_end", t);
                Si(n, d, e)
            }
            o = Fi(o), o.collapse(!0);
            const c = ji(n, r + "_start", t);
            return Si(n, o, c), e.moveToBookmark({id: r, keep: !0, forward: l}), {id: r, forward: l}
        }, $i = O(zi, R, !0), Vi = e => {
            const t = t => t(e), n = N(e), o = () => r, r = {
                tag: !0,
                inner: e,
                fold: (t, n) => n(e),
                isValue: L,
                isError: P,
                map: t => Wi.value(t(e)),
                mapError: o,
                bind: t,
                exists: t,
                forall: t,
                getOr: n,
                or: o,
                getOrThunk: n,
                orThunk: o,
                getOrDie: n,
                each: t => {
                    t(e)
                },
                toOptional: () => M.some(e)
            };
            return r
        }, qi = e => {
            const t = () => n, n = {
                tag: !1,
                inner: e,
                fold: (t, n) => t(e),
                isValue: P,
                isError: L,
                map: t,
                mapError: t => Wi.error(t(e)),
                bind: t,
                exists: P,
                forall: L,
                getOr: R,
                or: R,
                getOrThunk: B,
                orThunk: B,
                getOrDie: (o = String(e), () => {
                    throw new Error(o)
                }),
                each: S,
                toOptional: M.none
            };
            var o;
            return n
        }, Wi = {value: Vi, error: qi, fromOption: (e, t) => e.fold((() => qi(t)), Vi)}, Ki = e => {
            if (!p(e)) throw new Error("cases must be an array");
            if (0 === e.length) throw new Error("there must be at least one case");
            const t = [], n = {};
            return V(e, ((o, r) => {
                const s = ue(o);
                if (1 !== s.length) throw new Error("one and only one name per case");
                const a = s[0], i = o[a];
                if (void 0 !== n[a]) throw new Error("duplicate key detected:" + a);
                if ("cata" === a) throw new Error("cannot have a case named cata (sorry)");
                if (!p(i)) throw new Error("case arguments must be an array");
                t.push(a), n[a] = (...n) => {
                    const o = n.length;
                    if (o !== i.length) throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + o);
                    return {
                        fold: (...t) => {
                            if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
                            return t[r].apply(null, n)
                        }, match: e => {
                            const o = ue(e);
                            if (t.length !== o.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + o.join(","));
                            if (!te(t, (e => j(o, e)))) throw new Error("Not all branches were specified when using match. Specified: " + o.join(", ") + "\nRequired: " + t.join(", "));
                            return e[a].apply(null, n)
                        }, log: e => {
                            console.log(e, {constructors: t, constructor: a, params: n})
                        }
                    }
                }
            })), n
        };
    Ki([{bothErrors: ["error1", "error2"]}, {firstError: ["error1", "value2"]}, {secondError: ["value1", "error2"]}, {bothValues: ["value1", "value2"]}]);
    const Gi = e => "inline-command" === e.type || "inline-format" === e.type,
        Yi = e => "block-command" === e.type || "block-format" === e.type, Xi = e => {
            const t = t => Wi.error({message: t, pattern: e}), n = (n, o, r) => {
                if (void 0 !== e.format) {
                    let r;
                    if (p(e.format)) {
                        if (!te(e.format, m)) return t(n + " pattern has non-string items in the `format` array");
                        r = e.format
                    } else {
                        if (!m(e.format)) return t(n + " pattern has non-string `format` parameter");
                        r = [e.format]
                    }
                    return Wi.value(o(r))
                }
                return void 0 !== e.cmd ? m(e.cmd) ? Wi.value(r(e.cmd, e.value)) : t(n + " pattern has non-string `cmd` parameter") : t(n + " pattern is missing both `format` and `cmd` parameters")
            };
            if (!f(e)) return t("Raw pattern is not an object");
            if (!m(e.start)) return t("Raw pattern is missing `start` parameter");
            if (void 0 !== e.end) {
                if (!m(e.end)) return t("Inline pattern has non-string `end` parameter");
                if (0 === e.start.length && 0 === e.end.length) return t("Inline pattern has empty `start` and `end` parameters");
                let o = e.start, r = e.end;
                return 0 === r.length && (r = o, o = ""), n("Inline", (e => ({
                    type: "inline-format",
                    start: o,
                    end: r,
                    format: e
                })), ((e, t) => ({type: "inline-command", start: o, end: r, cmd: e, value: t})))
            }
            return void 0 !== e.replacement ? m(e.replacement) ? 0 === e.start.length ? t("Replacement pattern has empty `start` parameter") : Wi.value({
                type: "inline-command",
                start: "",
                end: e.start,
                cmd: "mceInsertContent",
                value: e.replacement
            }) : t("Replacement pattern has non-string `replacement` parameter") : 0 === e.start.length ? t("Block pattern has empty `start` parameter") : n("Block", (t => ({
                type: "block-format",
                start: e.start,
                format: t[0]
            })), ((t, n) => ({type: "block-command", start: e.start, cmd: t, value: n})))
        }, Qi = e => K(e, Yi), Ji = e => K(e, Gi), Zi = e => {
            const t = (e => {
                const t = [], n = [];
                return V(e, (e => {
                    e.fold((e => {
                        t.push(e)
                    }), (e => {
                        n.push(e)
                    }))
                })), {errors: t, values: n}
            })($(e, Xi));
            return V(t.errors, (e => console.error(e.message, e.pattern))), t.values
        }, el = Ct().deviceType, tl = el.isTouch(), nl = ba.DOM, ol = e => u(e, RegExp), rl = e => t => t.options.get(e),
        sl = e => m(e) || f(e), al = (e, t = "") => n => {
            const o = m(n);
            if (o) {
                if (-1 !== n.indexOf("=")) {
                    const r = (e => {
                        const t = e.indexOf("=") > 0 ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(",");
                        return Y(t, ((e, t) => {
                            const n = t.split("="), o = n[0], r = n.length > 1 ? n[1] : o;
                            return e[$e(o)] = $e(r), e
                        }), {})
                    })(n);
                    return {value: we(r, e.id).getOr(t), valid: o}
                }
                return {value: n, valid: o}
            }
            return {valid: !1, message: "Must be a string."}
        }, il = rl("iframe_attrs"), ll = rl("doctype"), dl = rl("document_base_url"), cl = rl("body_id"),
        ul = rl("body_class"), ml = rl("content_security_policy"), fl = rl("br_in_pre"), gl = rl("forced_root_block"),
        pl = rl("forced_root_block_attrs"), hl = rl("newline_behavior"), bl = rl("br_newline_selector"),
        vl = rl("no_newline_selector"), yl = rl("keep_styles"), Cl = rl("end_container_on_empty_block"),
        wl = rl("automatic_uploads"), xl = rl("images_reuse_filename"), kl = rl("images_replace_blob_uris"),
        Sl = rl("icons"), _l = rl("icons_url"), El = rl("images_upload_url"), Nl = rl("images_upload_base_path"),
        Rl = rl("images_upload_credentials"), Al = rl("images_upload_handler"), Ol = rl("content_css_cors"),
        Tl = rl("referrer_policy"), Bl = rl("language"), Dl = rl("language_url"), Pl = rl("indent_use_margin"),
        Ll = rl("indentation"), Ml = rl("content_css"), Il = rl("content_style"), Fl = rl("font_css"),
        Ul = rl("directionality"), zl = rl("inline_boundaries_selector"), jl = rl("object_resizing"),
        Hl = rl("resize_img_proportional"), $l = rl("placeholder"), Vl = rl("event_root"), ql = rl("service_message"),
        Wl = rl("theme"), Kl = rl("theme_url"), Gl = rl("model"), Yl = rl("model_url"), Xl = rl("inline_boundaries"),
        Ql = rl("formats"), Jl = rl("preview_styles"), Zl = rl("format_empty_lines"),
        ed = rl("format_noneditable_selector"), td = rl("custom_ui_selector"), nd = rl("inline"),
        od = rl("hidden_input"), rd = rl("submit_patch"), sd = rl("add_form_submit_trigger"),
        ad = rl("add_unload_trigger"), id = rl("custom_undo_redo_levels"), ld = rl("disable_nodechange"),
        dd = rl("readonly"), cd = rl("content_css_cors"), ud = rl("plugins"), md = rl("external_plugins"),
        fd = rl("block_unsupported_drop"), gd = rl("visual"), pd = rl("visual_table_class"),
        hd = rl("visual_anchor_class"), bd = rl("iframe_aria_text"), vd = rl("setup"),
        yd = rl("init_instance_callback"), Cd = rl("urlconverter_callback"), wd = rl("auto_focus"),
        xd = rl("browser_spellcheck"), kd = rl("protect"), Sd = rl("paste_block_drop"), _d = rl("paste_data_images"),
        Ed = rl("paste_preprocess"), Nd = rl("paste_postprocess"), Rd = rl("paste_webkit_styles"),
        Ad = rl("paste_remove_styles_if_webkit"), Od = rl("paste_merge_formats"), Td = rl("smart_paste"),
        Bd = rl("paste_as_text"), Dd = rl("paste_tab_spaces"), Pd = rl("allow_html_data_urls"),
        Ld = rl("text_patterns"), Md = rl("text_patterns_lookup"), Id = rl("noneditable_class"),
        Fd = rl("editable_class"), Ud = rl("noneditable_regexp"), zd = rl("preserve_cdata"),
        jd = e => Tt.explode(e.options.get("images_file_types")), Hd = rl("table_tab_navigation"), $d = To, Vd = zo,
        qd = e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        }, Wd = e => {
            const t = _r(e);
            return {count: e.length - t.length, text: t}
        }, Kd = e => {
            let t;
            for (; -1 !== (t = e.data.lastIndexOf(kr));) e.deleteData(t, 1)
        }, Gd = (e, t) => (Xd(e), t),
        Yd = (e, t) => xi.isTextPosition(t) ? ((e, t) => Vd(e) && t.container() === e ? ((e, t) => {
            const n = Wd(e.data.substr(0, t.offset())), o = Wd(e.data.substr(t.offset()));
            return (n.text + o.text).length > 0 ? (Kd(e), xi(e, t.offset() - n.count)) : t
        })(e, t) : Gd(e, t))(e, t) : ((e, t) => t.container() === e.parentNode ? ((e, t) => {
            const n = t.container(), o = ((e, t) => {
                const n = z(e, t);
                return -1 === n ? M.none() : M.some(n)
            })(de(n.childNodes), e).map((e => e < t.offset() ? xi(n, t.offset() - 1) : t)).getOr(t);
            return Xd(e), o
        })(e, t) : Gd(e, t))(e, t), Xd = e => {
            $d(e) && Or(e) && (Tr(e) ? e.removeAttribute("data-mce-caret") : qd(e)), Vd(e) && (Kd(e), 0 === e.data.length && qd(e))
        }, Qd = Yo, Jd = Jo, Zd = Xo, ec = (e, t, n) => {
            const o = Xa(t.getBoundingClientRect(), n);
            let r, s;
            if ("BODY" === e.tagName) {
                const t = e.ownerDocument.documentElement;
                r = e.scrollLeft || t.scrollLeft, s = e.scrollTop || t.scrollTop
            } else {
                const t = e.getBoundingClientRect();
                r = e.scrollLeft - t.left, s = e.scrollTop - t.top
            }
            o.left += r, o.right += r, o.top += s, o.bottom += s, o.width = 1;
            let a = t.offsetWidth - t.clientWidth;
            return a > 0 && (n && (a *= -1), o.left += a, o.right += a), o
        }, tc = (e, t, n, o) => {
            const r = Na();
            let s, a;
            const i = gl(e), l = e.dom, d = () => {
                (e => {
                    var t, n;
                    const o = or(mn(e), "*[contentEditable=false],video,audio,embed,object");
                    for (let e = 0; e < o.length; e++) {
                        const r = o[e].dom;
                        let s = r.previousSibling;
                        if (Lr(s)) {
                            const e = s.data;
                            1 === e.length ? null === (t = s.parentNode) || void 0 === t || t.removeChild(s) : s.deleteData(e.length - 1, 1)
                        }
                        s = r.nextSibling, Pr(s) && (1 === s.data.length ? null === (n = s.parentNode) || void 0 === n || n.removeChild(s) : s.deleteData(0, 1))
                    }
                })(t), a && (Xd(a), a = null), r.on((e => {
                    l.remove(e.caret), r.clear()
                })), s && (clearInterval(s), s = void 0)
            };
            return {
                show: (e, c) => {
                    let u;
                    if (d(), Zd(c)) return null;
                    if (!n(c)) return a = ((e, t) => {
                        var n;
                        const o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(kr),
                            r = e.parentNode;
                        if (t) {
                            const t = e.previousSibling;
                            if (Nr(t)) {
                                if (Or(t)) return t;
                                if (Lr(t)) return t.splitText(t.data.length - 1)
                            }
                            null == r || r.insertBefore(o, e)
                        } else {
                            const t = e.nextSibling;
                            if (Nr(t)) {
                                if (Or(t)) return t;
                                if (Pr(t)) return t.splitText(1), t
                            }
                            e.nextSibling ? null == r || r.insertBefore(o, e.nextSibling) : null == r || r.appendChild(o)
                        }
                        return o
                    })(c, e), u = c.ownerDocument.createRange(), oc(a.nextSibling) ? (u.setStart(a, 0), u.setEnd(a, 0)) : (u.setStart(a, 1), u.setEnd(a, 1)), u;
                    {
                        const n = ((e, t, n) => {
                            var o;
                            const r = (null !== (o = t.ownerDocument) && void 0 !== o ? o : document).createElement(e);
                            r.setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(Cr().dom);
                            const s = t.parentNode;
                            return n ? null == s || s.insertBefore(r, t) : t.nextSibling ? null == s || s.insertBefore(r, t.nextSibling) : null == s || s.appendChild(r), r
                        })(i, c, e), d = ec(t, c, e);
                        l.setStyle(n, "top", d.top), a = n;
                        const m = l.create("div", {class: "mce-visual-caret", "data-mce-bogus": "all"});
                        l.setStyles(m, {...d}), l.add(t, m), r.set({
                            caret: m,
                            element: c,
                            before: e
                        }), e && l.addClass(m, "mce-visual-caret-before"), s = setInterval((() => {
                            r.on((e => {
                                o() ? l.toggleClass(e.caret, "mce-visual-caret-hidden") : l.addClass(e.caret, "mce-visual-caret-hidden")
                            }))
                        }), 500), u = c.ownerDocument.createRange(), u.setStart(n, 0), u.setEnd(n, 0)
                    }
                    return u
                },
                hide: d,
                getCss: () => ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}",
                reposition: () => {
                    r.on((e => {
                        const n = ec(t, e.element, e.before);
                        l.setStyles(e.caret, {...n})
                    }))
                },
                destroy: () => clearInterval(s)
            }
        }, nc = () => Nt.browser.isFirefox(), oc = e => Qd(e) || Jd(e), rc = e => oc(e) || Io(e) && nc(), sc = Go, ac = Yo,
        ic = Jo, lc = Po("display", "block table table-cell table-caption list-item"), dc = Or, cc = Rr, uc = To,
        mc = zo, fc = Wr, gc = e => e > 0, pc = e => e < 0, hc = (e, t) => {
            let n;
            for (; n = e(t);) if (!cc(n)) return n;
            return null
        }, bc = (e, t, n, o, r) => {
            const s = new Ro(e, o), a = ac(e) || cc(e);
            let i;
            if (pc(t)) {
                if (a && (i = hc(s.prev.bind(s), !0), n(i))) return i;
                for (; i = hc(s.prev.bind(s), r);) if (n(i)) return i
            }
            if (gc(t)) {
                if (a && (i = hc(s.next.bind(s), !0), n(i))) return i;
                for (; i = hc(s.next.bind(s), r);) if (n(i)) return i
            }
            return null
        }, vc = (e, t) => {
            for (; e && e !== t;) {
                if (lc(e)) return e;
                e = e.parentNode
            }
            return null
        }, yc = (e, t, n) => vc(e.container(), n) === vc(t.container(), n), Cc = (e, t) => {
            if (!t) return M.none();
            const n = t.container(), o = t.offset();
            return uc(n) ? M.from(n.childNodes[o + e]) : M.none()
        }, wc = (e, t) => {
            var n;
            const o = (null !== (n = t.ownerDocument) && void 0 !== n ? n : document).createRange();
            return e ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), o
        }, xc = (e, t, n) => vc(t, e) === vc(n, e), kc = (e, t, n) => {
            const o = e ? "previousSibling" : "nextSibling";
            let r = n;
            for (; r && r !== t;) {
                let e = r[o];
                if (e && dc(e) && (e = e[o]), ac(e) || ic(e)) {
                    if (xc(t, e, r)) return e;
                    break
                }
                if (fc(e)) break;
                r = r.parentNode
            }
            return null
        }, Sc = O(wc, !0), _c = O(wc, !1), Ec = (e, t, n) => {
            let o;
            const r = O(kc, !0, t), s = O(kc, !1, t), a = n.startContainer, i = n.startOffset;
            if (Rr(a)) {
                const e = mc(a) ? a.parentNode : a, t = e.getAttribute("data-mce-caret");
                if ("before" === t && (o = e.nextSibling, rc(o))) return Sc(o);
                if ("after" === t && (o = e.previousSibling, rc(o))) return _c(o)
            }
            if (!n.collapsed) return n;
            if (zo(a)) {
                if (dc(a)) {
                    if (1 === e) {
                        if (o = s(a), o) return Sc(o);
                        if (o = r(a), o) return _c(o)
                    }
                    if (-1 === e) {
                        if (o = r(a), o) return _c(o);
                        if (o = s(a), o) return Sc(o)
                    }
                    return n
                }
                if (Lr(a) && i >= a.data.length - 1) return 1 === e && (o = s(a), o) ? Sc(o) : n;
                if (Pr(a) && i <= 1) return -1 === e && (o = r(a), o) ? _c(o) : n;
                if (i === a.data.length) return o = s(a), o ? Sc(o) : n;
                if (0 === i) return o = r(a), o ? _c(o) : n
            }
            return n
        }, Nc = (e, t) => Cc(e ? 0 : -1, t).filter(ac), Rc = (e, t, n) => {
            const o = Ec(e, t, n);
            return -1 === e ? xi.fromRangeStart(o) : xi.fromRangeEnd(o)
        }, Ac = e => M.from(e.getNode()).map(mn), Oc = (e, t) => {
            let n = t;
            for (; n = e(n);) if (n.isVisible()) return n;
            return n
        }, Tc = (e, t) => {
            const n = yc(e, t);
            return !(n || !Wo(e.getNode())) || n
        };
    var Bc;
    !function (e) {
        e[e.Backwards = -1] = "Backwards", e[e.Forwards = 1] = "Forwards"
    }(Bc || (Bc = {}));
    const Dc = Yo, Pc = zo, Lc = To, Mc = Wo, Ic = Wr,
        Fc = e => $r(e) || (e => !!Kr(e) && !Y(de(e.getElementsByTagName("*")), ((e, t) => e || Fr(t)), !1))(e),
        Uc = Gr, zc = (e, t) => e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null, jc = (e, t) => {
            if (gc(e)) {
                if (Ic(t.previousSibling) && !Pc(t.previousSibling)) return xi.before(t);
                if (Pc(t)) return xi(t, 0)
            }
            if (pc(e)) {
                if (Ic(t.nextSibling) && !Pc(t.nextSibling)) return xi.after(t);
                if (Pc(t)) return xi(t, t.data.length)
            }
            return pc(e) ? Mc(t) ? xi.before(t) : xi.after(t) : xi.before(t)
        }, Hc = (e, t, n) => {
            let o, r, s, a;
            if (!Lc(n) || !t) return null;
            if (t.isEqual(xi.after(n)) && n.lastChild) {
                if (a = xi.after(n.lastChild), pc(e) && Ic(n.lastChild) && Lc(n.lastChild)) return Mc(n.lastChild) ? xi.before(n.lastChild) : a
            } else a = t;
            const i = a.container();
            let l = a.offset();
            if (Pc(i)) {
                if (pc(e) && l > 0) return xi(i, --l);
                if (gc(e) && l < i.length) return xi(i, ++l);
                o = i
            } else {
                if (pc(e) && l > 0 && (r = zc(i, l - 1), Ic(r))) return !Fc(r) && (s = bc(r, e, Uc, r), s) ? Pc(s) ? xi(s, s.data.length) : xi.after(s) : Pc(r) ? xi(r, r.data.length) : xi.before(r);
                if (gc(e) && l < i.childNodes.length && (r = zc(i, l), Ic(r))) return Mc(r) ? ((e, t) => {
                    const n = t.nextSibling;
                    return n && Ic(n) ? Pc(n) ? xi(n, 0) : xi.before(n) : Hc(Bc.Forwards, xi.after(t), e)
                })(n, r) : !Fc(r) && (s = bc(r, e, Uc, r), s) ? Pc(s) ? xi(s, 0) : xi.before(s) : Pc(r) ? xi(r, 0) : xi.after(r);
                o = r || a.getNode()
            }
            if (o && (gc(e) && a.isAtEnd() || pc(e) && a.isAtStart()) && (o = bc(o, e, L, n, !0), Uc(o, n))) return jc(e, o);
            r = o ? bc(o, e, Uc, n) : o;
            const d = Be(K(((e, t) => {
                const n = [];
                let o = e;
                for (; o && o !== t;) n.push(o), o = o.parentNode;
                return n
            })(i, n), Dc));
            return !d || r && d.contains(r) ? r ? jc(e, r) : null : (a = gc(e) ? xi.after(d) : xi.before(d), a)
        }, $c = e => ({next: t => Hc(Bc.Forwards, t, e), prev: t => Hc(Bc.Backwards, t, e)}),
        Vc = e => xi.isTextPosition(e) ? 0 === e.offset() : Wr(e.getNode()), qc = e => {
            if (xi.isTextPosition(e)) {
                const t = e.container();
                return e.offset() === t.data.length
            }
            return Wr(e.getNode(!0))
        }, Wc = (e, t) => !xi.isTextPosition(e) && !xi.isTextPosition(t) && e.getNode() === t.getNode(!0),
        Kc = (e, t, n) => {
            const o = $c(t);
            return M.from(e ? o.next(n) : o.prev(n))
        }, Gc = (e, t, n) => Kc(e, t, n).bind((o => yc(n, o, t) && ((e, t, n) => {
            return e ? !Wc(t, n) && (o = t, !(!xi.isTextPosition(o) && Wo(o.getNode()))) && qc(t) && Vc(n) : !Wc(n, t) && Vc(t) && qc(n);
            var o
        })(e, n, o) ? Kc(e, t, o) : M.some(o))),
        Yc = (e, t, n, o) => Gc(e, t, n).bind((n => o(n) ? Yc(e, t, n, o) : M.some(n))), Xc = (e, t) => {
            const n = e ? t.firstChild : t.lastChild;
            return zo(n) ? M.some(xi(n, e ? 0 : n.data.length)) : n ? Wr(n) ? M.some(e ? xi.before(n) : Wo(o = n) ? xi.before(o) : xi.after(o)) : ((e, t, n) => {
                const o = e ? xi.before(n) : xi.after(n);
                return Kc(e, t, o)
            })(e, t, n) : M.none();
            var o
        }, Qc = O(Kc, !0), Jc = O(Kc, !1), Zc = O(Xc, !0), eu = O(Xc, !1), tu = "_mce_caret",
        nu = e => To(e) && e.id === tu, ou = (e, t) => {
            let n = t;
            for (; n && n !== e;) {
                if (nu(n)) return n;
                n = n.parentNode
            }
            return null
        }, ru = e => xe(e, "name"), su = e => Tt.isArray(e.start), au = e => !(!ru(e) && b(e.forward)) || e.forward,
        iu = (e, t) => (To(t) && e.isBlock(t) && !t.innerHTML && (t.innerHTML = '<br data-mce-bogus="1" />'), t),
        lu = (e, t) => eu(e).fold(P, (e => (t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0))),
        du = (e, t, n) => !(!(e => !e.hasChildNodes())(t) || !ou(e, t) || (((e, t) => {
            var n;
            const o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(kr);
            e.appendChild(o), t.setStart(o, 0), t.setEnd(o, 0)
        })(t, n), 0)), cu = (e, t, n, o) => {
            const r = n[t ? "start" : "end"], s = e.getRoot();
            if (r) {
                let e = s, n = r[0];
                for (let t = r.length - 1; e && t >= 1; t--) {
                    const n = e.childNodes;
                    if (du(s, e, o)) return !0;
                    if (r[t] > n.length - 1) return !!du(s, e, o) || lu(e, o);
                    e = n[r[t]]
                }
                zo(e) && (n = Math.min(r[0], e.data.length)), To(e) && (n = Math.min(r[0], e.childNodes.length)), t ? o.setStart(e, n) : o.setEnd(e, n)
            }
            return !0
        }, uu = e => zo(e) && e.data.length > 0, mu = (e, t, n) => {
            const o = e.get(n.id + "_" + t), r = null == o ? void 0 : o.parentNode, s = n.keep;
            if (o && r) {
                let a, i;
                if ("start" === t ? s ? o.hasChildNodes() ? (a = o.firstChild, i = 1) : uu(o.nextSibling) ? (a = o.nextSibling, i = 0) : uu(o.previousSibling) ? (a = o.previousSibling, i = o.previousSibling.data.length) : (a = r, i = e.nodeIndex(o) + 1) : (a = r, i = e.nodeIndex(o)) : s ? o.hasChildNodes() ? (a = o.firstChild, i = 1) : uu(o.previousSibling) ? (a = o.previousSibling, i = o.previousSibling.data.length) : (a = r, i = e.nodeIndex(o)) : (a = r, i = e.nodeIndex(o)), !s) {
                    const r = o.previousSibling, s = o.nextSibling;
                    let l;
                    for (Tt.each(Tt.grep(o.childNodes), (e => {
                        zo(e) && (e.data = e.data.replace(/\uFEFF/g, ""))
                    })); l = e.get(n.id + "_" + t);) e.remove(l, !0);
                    if (zo(s) && zo(r) && !Nt.browser.isOpera()) {
                        const t = r.data.length;
                        r.appendData(s.data), e.remove(s), a = r, i = t
                    }
                }
                return M.some(xi(a, i))
            }
            return M.none()
        }, fu = (e, t, n) => ((e, t, n = !1) => 2 === t ? zi(_r, n, e) : 3 === t ? (e => {
            const t = e.getRng();
            return {
                start: Bi(e.dom.getRoot(), xi.fromRangeStart(t)),
                end: Bi(e.dom.getRoot(), xi.fromRangeEnd(t)),
                forward: e.isForward()
            }
        })(e) : t ? (e => ({rng: e.getRng(), forward: e.isForward()}))(e) : Hi(e, !1))(e, t, n), gu = (e, t) => {
            ((e, t) => {
                const n = e.dom;
                if (t) {
                    if (su(t)) return ((e, t) => {
                        const n = e.createRng();
                        return cu(e, !0, t, n) && cu(e, !1, t, n) ? M.some({range: n, forward: au(t)}) : M.none()
                    })(n, t);
                    if ((e => m(e.start))(t)) return ((e, t) => {
                        const n = M.from(Di(e.getRoot(), t.start)), o = M.from(Di(e.getRoot(), t.end));
                        return Dt(n, o, ((n, o) => {
                            const r = e.createRng();
                            return r.setStart(n.container(), n.offset()), r.setEnd(o.container(), o.offset()), {
                                range: r,
                                forward: au(t)
                            }
                        }))
                    })(n, t);
                    if ((e => xe(e, "id"))(t)) return ((e, t) => {
                        const n = mu(e, "start", t), o = mu(e, "end", t);
                        return Dt(n, o.or(n), ((n, o) => {
                            const r = e.createRng();
                            return r.setStart(iu(e, n.container()), n.offset()), r.setEnd(iu(e, o.container()), o.offset()), {
                                range: r,
                                forward: au(t)
                            }
                        }))
                    })(n, t);
                    if (ru(t)) return ((e, t) => M.from(e.select(t.name)[t.index]).map((t => {
                        const n = e.createRng();
                        return n.selectNode(t), {range: n, forward: !0}
                    })))(n, t);
                    if ((e => xe(e, "rng"))(t)) return M.some({range: t.rng, forward: au(t)})
                }
                return M.none()
            })(e, t).each((({range: t, forward: n}) => {
                e.setRng(t, n)
            }))
        }, pu = e => To(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type"),
        hu = (tr, e => "\xa0" === e);
    const bu = e => "" !== e && -1 !== " \f\n\r\t\v".indexOf(e), vu = e => !bu(e) && !hu(e) && !nr(e), yu = e => {
            const t = e.toString(16);
            return (1 === t.length ? "0" + t : t).toUpperCase()
        }, Cu = e => (e => ({value: e}))(yu(e.red) + yu(e.green) + yu(e.blue)),
        wu = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
        xu = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
        ku = (e, t, n, o) => ({red: e, green: t, blue: n, alpha: o}), Su = (e, t, n, o) => {
            const r = parseInt(e, 10), s = parseInt(t, 10), a = parseInt(n, 10), i = parseFloat(o);
            return ku(r, s, a, i)
        }, _u = e => (e => {
            if ("transparent" === e) return M.some(ku(0, 0, 0, 0));
            const t = wu.exec(e);
            if (null !== t) return M.some(Su(t[1], t[2], t[3], "1"));
            const n = xu.exec(e);
            return null !== n ? M.some(Su(n[1], n[2], n[3], n[4])) : M.none()
        })(e).map(Cu).map((e => "#" + e.value)).getOr(e), Eu = e => {
            const t = [];
            if (e) for (let n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
            return t
        }, Nu = (e, t) => {
            const n = or(t, "td[data-mce-selected],th[data-mce-selected]");
            return n.length > 0 ? n : (e => K((e => ee(e, (e => {
                const t = ti(e);
                return t ? [mn(t)] : []
            })))(e), hr))(e)
        }, Ru = e => Nu(Eu(e.selection.getSel()), mn(e.getBody())), Au = (e, t) => So(e, "table", t),
        Ou = e => Tn(e).fold(N([e]), (t => [e].concat(Ou(t)))),
        Tu = e => Bn(e).fold(N([e]), (t => "br" === Lt(t) ? _n(t).map((t => [e].concat(Tu(t)))).getOr([]) : [e].concat(Tu(t)))),
        Bu = (e, t) => Dt((e => {
            const t = e.startContainer, n = e.startOffset;
            return zo(t) ? 0 === n ? M.some(mn(t)) : M.none() : M.from(t.childNodes[n]).map(mn)
        })(t), (e => {
            const t = e.endContainer, n = e.endOffset;
            return zo(t) ? n === t.data.length ? M.some(mn(t)) : M.none() : M.from(t.childNodes[n - 1]).map(mn)
        })(t), ((t, n) => {
            const o = Q(Ou(e), O(bn, t)), r = Q(Tu(e), O(bn, n));
            return o.isSome() && r.isSome()
        })).getOr(!1), Du = (e, t, n, o) => {
            const r = n, s = new Ro(n, r),
                a = ve(e.schema.getMoveCaretBeforeOnEnterElements(), ((e, t) => !j(["td", "th", "table"], t.toLowerCase())));
            let i = n;
            do {
                if (zo(i) && 0 !== Tt.trim(i.data).length) return void (o ? t.setStart(i, 0) : t.setEnd(i, i.data.length));
                if (a[i.nodeName]) return void (o ? t.setStartBefore(i) : "BR" === i.nodeName ? t.setEndBefore(i) : t.setEndAfter(i))
            } while (i = o ? s.next() : s.prev());
            "BODY" === r.nodeName && (o ? t.setStart(r, 0) : t.setEnd(r, r.childNodes.length))
        }, Pu = e => {
            const t = e.selection.getSel();
            return C(t) && t.rangeCount > 0
        }, Lu = (e, t) => {
            const n = Ru(e);
            n.length > 0 ? V(n, (n => {
                const o = n.dom, r = e.dom.createRng();
                r.setStartBefore(o), r.setEndAfter(o), t(r, !0)
            })) : t(e.selection.getRng(), !1)
        }, Mu = (e, t, n) => {
            const o = Hi(e, t);
            n(o), e.moveToBookmark(o)
        }, Iu = e => x(null == e ? void 0 : e.nodeType), Fu = e => To(e) && !pu(e) && !nu(e) && !Mo(e),
        Uu = e => !0 === e.isContentEditable, zu = (e, t, n) => {
            const {selection: o, dom: r} = e, s = o.getNode(), a = Yo(s);
            Mu(o, !0, (() => {
                t()
            })), a && Yo(s) && r.isChildOf(s, e.getBody()) ? e.selection.select(s) : n(o.getStart()) && ju(r, o)
        }, ju = (e, t) => {
            var n, o;
            const r = t.getRng(), {startContainer: s, startOffset: a} = r;
            if (!((e, t) => {
                if (Fu(t) && !/^(TD|TH)$/.test(t.nodeName)) {
                    const n = e.getAttrib(t, "data-mce-selected"), o = parseInt(n, 10);
                    return !isNaN(o) && o > 0
                }
                return !1
            })(e, t.getNode()) && To(s)) {
                const i = s.childNodes, l = e.getRoot();
                let d;
                if (a < i.length) {
                    const t = i[a];
                    d = new Ro(t, null !== (n = e.getParent(t, e.isBlock)) && void 0 !== n ? n : l)
                } else {
                    const t = i[i.length - 1];
                    d = new Ro(t, null !== (o = e.getParent(t, e.isBlock)) && void 0 !== o ? o : l), d.next(!0)
                }
                for (let n = d.current(); n; n = d.next()) {
                    if ("false" === e.getContentEditable(n)) return;
                    if (zo(n) && !qu(n)) return r.setStart(n, 0), void t.setRng(r)
                }
            }
        }, Hu = (e, t, n) => {
            if (e) {
                const o = t ? "nextSibling" : "previousSibling";
                for (e = n ? e : e[o]; e; e = e[o]) if (To(e) || !qu(e)) return e
            }
        }, $u = (e, t) => !!e.getTextBlockElements()[t.nodeName.toLowerCase()] || ps(e, t),
        Vu = (e, t, n) => e.schema.isValidChild(t, n), qu = (e, t = !1) => {
            if (C(e) && zo(e)) {
                const n = t ? e.data.replace(/ /g, "\xa0") : e.data;
                return Xr(n)
            }
            return !1
        }, Wu = (e, t) => {
            const n = e.dom;
            return Fu(t) && "false" === n.getContentEditable(t) && ((e, t) => {
                const n = "[data-mce-cef-wrappable]", o = ed(e), r = Ke(o) ? n : `${n},${o}`;
                return pn(mn(t), r)
            })(e, t) && 0 === n.select('[contenteditable="true"]', t).length
        }, Ku = (e, t) => w(e) ? e(t) : (C(t) && (e = e.replace(/%(\w+)/g, ((e, n) => t[n] || e))), e),
        Gu = (e, t) => (t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase()),
        Yu = (e, t) => {
            if (y(e)) return null;
            {
                let n = String(e);
                return "color" !== t && "backgroundColor" !== t || (n = _u(n)), "fontWeight" === t && 700 === e && (n = "bold"), "fontFamily" === t && (n = n.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), n
            }
        }, Xu = (e, t, n) => {
            const o = e.getStyle(t, n);
            return Yu(o, n)
        }, Qu = (e, t) => {
            let n;
            return e.getParent(t, (t => !!To(t) && (n = e.getStyle(t, "text-decoration"), !!n && "none" !== n))), n
        }, Ju = (e, t, n) => e.getParents(t, n, e.getRoot()), Zu = (e, t, n) => {
            const o = e.formatter.get(t);
            return C(o) && H(o, n)
        }, em = e => ke(e, "block"), tm = e => ke(e, "selector"), nm = e => ke(e, "inline"),
        om = e => tm(e) && !1 !== e.expand && !nm(e), rm = pu, sm = Ju, am = qu, im = $u, lm = (e, t) => {
            let n = t;
            for (; n;) {
                if (To(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
                n = n.parentNode
            }
            return t
        }, dm = (e, t, n, o) => {
            const r = t.data;
            if (e) {
                for (let e = n; e > 0; e--) if (o(r.charAt(e - 1))) return e
            } else for (let e = n; e < r.length; e++) if (o(r.charAt(e))) return e;
            return -1
        }, cm = (e, t, n) => dm(e, t, n, (e => hu(e) || bu(e))), um = (e, t, n) => dm(e, t, n, vu),
        mm = (e, t, n, o, r, s) => {
            let a;
            const i = e.getParent(n, e.isBlock) || t, l = (t, n, o) => {
                const s = Ka(e), l = r ? s.backwards : s.forwards;
                return M.from(l(t, n, ((e, t) => rm(e.parentNode) ? -1 : (a = e, o(r, e, t))), i))
            };
            return l(n, o, cm).bind((e => s ? l(e.container, e.offset + (r ? -1 : 0), um) : M.some(e))).orThunk((() => a ? M.some({
                container: a,
                offset: r ? 0 : a.length
            }) : M.none()))
        }, fm = (e, t, n, o, r) => {
            const s = o[r];
            zo(o) && Ke(o.data) && s && (o = s);
            const a = sm(e, o);
            for (let o = 0; o < a.length; o++) for (let r = 0; r < t.length; r++) {
                const s = t[r];
                if ((!C(s.collapsed) || s.collapsed === n.collapsed) && tm(s) && e.is(a[o], s.selector)) return a[o]
            }
            return o
        }, gm = (e, t, n, o) => {
            var r;
            let s = n;
            const a = e.getRoot(), i = t[0];
            if (em(i) && (s = i.wrapper ? null : e.getParent(n, i.block, a)), !s) {
                const t = null !== (r = e.getParent(n, "LI,TD,TH")) && void 0 !== r ? r : a;
                s = e.getParent(zo(n) ? n.parentNode : n, (t => t !== a && im(e.schema, t)), t)
            }
            if (s && em(i) && i.wrapper && (s = sm(e, s, "ul,ol").reverse()[0] || s), !s) for (s = n; s && s[o] && !e.isBlock(s[o]) && (s = s[o], !Gu(s, "br"));) ;
            return s || n
        }, pm = (e, t, n, o) => {
            const r = n.parentNode;
            return !C(n[o]) && (!(r !== t && !y(r) && !e.isBlock(r)) || pm(e, t, r, o))
        }, hm = (e, t, n, o, r) => {
            let s = n;
            const a = r ? "previousSibling" : "nextSibling", i = e.getRoot();
            if (zo(n) && !am(n) && (r ? o > 0 : o < n.data.length)) return n;
            for (; s;) {
                if (!t[0].block_expand && e.isBlock(s)) return s;
                for (let t = s[a]; t; t = t[a]) {
                    const n = zo(t) && !pm(e, i, t, a);
                    if (!rm(t) && (!Wo(l = t) || !l.getAttribute("data-mce-bogus") || l.nextSibling) && !am(t, n)) return s
                }
                if (s === i || s.parentNode === i) {
                    n = s;
                    break
                }
                s = s.parentNode
            }
            var l;
            return n
        }, bm = e => rm(e.parentNode) || rm(e), vm = (e, t, n, o = !1) => {
            let {startContainer: r, startOffset: s, endContainer: a, endOffset: i} = t;
            const l = n[0];
            return To(r) && r.hasChildNodes() && (r = ni(r, s), zo(r) && (s = 0)), To(a) && a.hasChildNodes() && (a = ni(a, t.collapsed ? i : i - 1), zo(a) && (i = a.data.length)), r = lm(e, r), a = lm(e, a), bm(r) && (r = rm(r) ? r : r.parentNode, r = t.collapsed ? r.previousSibling || r : r.nextSibling || r, zo(r) && (s = t.collapsed ? r.length : 0)), bm(a) && (a = rm(a) ? a : a.parentNode, a = t.collapsed ? a.nextSibling || a : a.previousSibling || a, zo(a) && (i = t.collapsed ? 0 : a.length)), t.collapsed && (mm(e, e.getRoot(), r, s, !0, o).each((({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  container: e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  offset: t
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }) => {
                r = e, s = t
            })), mm(e, e.getRoot(), a, i, !1, o).each((({container: e, offset: t}) => {
                a = e, i = t
            }))), (nm(l) || l.block_expand) && (nm(l) && zo(r) && 0 !== s || (r = hm(e, n, r, s, !0)), nm(l) && zo(a) && i !== a.data.length || (a = hm(e, n, a, i, !1))), om(l) && (r = fm(e, n, t, r, "previousSibling"), a = fm(e, n, t, a, "nextSibling")), (em(l) || tm(l)) && (r = gm(e, n, r, "previousSibling"), a = gm(e, n, a, "nextSibling"), em(l) && (e.isBlock(r) || (r = hm(e, n, r, s, !0)), e.isBlock(a) || (a = hm(e, n, a, i, !1)))), To(r) && r.parentNode && (s = e.nodeIndex(r), r = r.parentNode), To(a) && a.parentNode && (i = e.nodeIndex(a) + 1, a = a.parentNode), {
                startContainer: r,
                startOffset: s,
                endContainer: a,
                endOffset: i
            }
        }, ym = (e, t, n) => {
            var o;
            const r = t.startOffset, s = ni(t.startContainer, r), a = t.endOffset, i = ni(t.endContainer, a - 1), l = e => {
                const t = e[0];
                zo(t) && t === s && r >= t.data.length && e.splice(0, 1);
                const n = e[e.length - 1];
                return 0 === a && e.length > 0 && n === i && zo(n) && e.splice(e.length - 1, 1), e
            }, d = (e, t, n) => {
                const o = [];
                for (; e && e !== n; e = e[t]) o.push(e);
                return o
            }, c = (t, n) => e.getParent(t, (e => e.parentNode === n), n), u = (e, t, o) => {
                const r = o ? "nextSibling" : "previousSibling";
                for (let s = e, a = s.parentNode; s && s !== t; s = a) {
                    a = s.parentNode;
                    const t = d(s === e ? s : s[r], r);
                    t.length && (o || t.reverse(), n(l(t)))
                }
            };
            if (s === i) return n(l([s]));
            const m = null !== (o = e.findCommonAncestor(s, i)) && void 0 !== o ? o : e.getRoot();
            if (e.isChildOf(s, i)) return u(s, m, !0);
            if (e.isChildOf(i, s)) return u(i, m);
            const f = c(s, m) || s, g = c(i, m) || i;
            u(s, f, !0);
            const p = d(f === s ? f : f.nextSibling, "nextSibling", g === i ? g.nextSibling : g);
            p.length && n(l(p)), u(i, g)
        },
        Cm = ['pre[class*=language-][contenteditable="false"]', "figure.image", "div[data-ephox-embed-iri]", "div.tiny-pageembed", "div.mce-toc", "div[data-mce-toc]"],
        wm = (e, t, n, o, r, s) => {
            const {uid: a = t, ...i} = n;
            nn(e, Oa()), Vt(e, `${Ba()}`, a), Vt(e, `${Ta()}`, o);
            const {attributes: l = {}, classes: d = []} = r(a, i);
            if (qt(e, l), ((e, t) => {
                V(t, (t => {
                    nn(e, t)
                }))
            })(e, d), s) {
                d.length > 0 && Vt(e, `${Pa()}`, d.join(","));
                const t = ue(l);
                t.length > 0 && Vt(e, `${La()}`, t.join(","))
            }
        }, xm = (e, t, n, o, r) => {
            const s = cn("span", e);
            return wm(s, t, n, o, r, !1), s
        }, km = (e, t, n, o, r, s) => {
            const a = [], i = xm(e.getDoc(), n, s, o, r), l = Na(), d = () => {
                l.clear()
            }, c = e => {
                V(e, u)
            }, u = t => {
                switch (((e, t, n, o) => xn(t).fold((() => "skipping"), (r => "br" === o || (e => Ut(e) && sr(e) === kr)(t) ? "valid" : (e => Ft(e) && sn(e, Oa()))(t) ? "existing" : nu(t.dom) ? "caret" : H(Cm, (e => pn(t, e))) ? "valid-block" : Vu(e, n, o) && Vu(e, Lt(r), n) ? "valid" : "invalid-child")))(e, t, "span", Lt(t))) {
                    case"invalid-child": {
                        d();
                        const e = An(t);
                        c(e), d();
                        break
                    }
                    case"valid-block":
                        d(), wm(t, n, s, o, r, !0);
                        break;
                    case"valid": {
                        const e = l.get().getOrThunk((() => {
                            const e = Va(i);
                            return a.push(e), l.set(e), e
                        }));
                        ((e, t) => {
                            Qn(e, t), eo(t, e)
                        })(t, e);
                        break
                    }
                }
            };
            return ym(e.dom, t, (e => {
                d(), (e => {
                    const t = $(e, mn);
                    c(t)
                })(e)
            })), a
        }, Sm = e => {
            const t = (() => {
                const e = {};
                return {
                    register: (t, n) => {
                        e[t] = {name: t, settings: n}
                    }, lookup: t => we(e, t).map((e => e.settings)), getNames: () => ue(e)
                }
            })();
            ((e, t) => {
                const n = Ta(), o = e => M.from(e.attr(n)).bind(t.lookup), r = e => {
                    var t, n;
                    e.attr(Ba(), null), e.attr(Ta(), null), e.attr(Da(), null);
                    const o = M.from(e.attr(La())).map((e => e.split(","))).getOr([]),
                        r = M.from(e.attr(Pa())).map((e => e.split(","))).getOr([]);
                    V(o, (t => e.attr(t, null)));
                    const s = null !== (n = null === (t = e.attr("class")) || void 0 === t ? void 0 : t.split(" ")) && void 0 !== n ? n : [],
                        a = oe(s, [Oa()].concat(r));
                    e.attr("class", a.length > 0 ? a.join(" ") : null), e.attr(Pa(), null), e.attr(La(), null)
                };
                e.serializer.addTempAttr(Da()), e.serializer.addAttributeFilter(n, (e => {
                    for (const t of e) o(t).each((e => {
                        !1 === e.persistent && ("span" === t.name ? t.unwrap() : r(t))
                    }))
                }))
            })(e, t);
            const n = ((e, t) => {
                const n = Ca({}), o = () => ({listeners: [], previous: Na()}), r = (e, t) => {
                    s(e, (e => (t(e), e)))
                }, s = (e, t) => {
                    const r = n.get(), s = t(we(r, e).getOrThunk(o));
                    r[e] = s, n.set(r)
                }, a = (t, n) => {
                    V(Ua(e, t), (e => {
                        n ? Vt(e, Da(), "true") : Yt(e, Da())
                    }))
                }, i = Aa((() => {
                    const n = se(t.getNames());
                    V(n, (t => {
                        s(t, (n => {
                            const o = n.previous.get();
                            return Ia(e, M.some(t)).fold((() => {
                                o.each((e => {
                                    (e => {
                                        r(e, (t => {
                                            V(t.listeners, (t => t(!1, e)))
                                        }))
                                    })(t), n.previous.clear(), a(e, !1)
                                }))
                            }), (({uid: e, name: t, elements: s}) => {
                                Bt(o, e) || (o.each((e => a(e, !1))), ((e, t, n) => {
                                    r(e, (o => {
                                        V(o.listeners, (o => o(!0, e, {uid: t, nodes: $(n, (e => e.dom))})))
                                    }))
                                })(t, e, s), n.previous.set(e), a(e, !0))
                            })), {previous: n.previous, listeners: n.listeners}
                        }))
                    }))
                }), 30);
                return e.on("remove", (() => {
                    i.cancel()
                })), e.on("NodeChange", (() => {
                    i.throttle()
                })), {
                    addListener: (e, t) => {
                        s(e, (e => ({previous: e.previous, listeners: e.listeners.concat([t])})))
                    }
                }
            })(e, t), o = Ht("span"), r = e => {
                V(e, (e => {
                    o(e) ? ro(e) : (e => {
                        rn(e, Oa()), Yt(e, `${Ba()}`), Yt(e, `${Ta()}`), Yt(e, `${Da()}`);
                        const t = Kt(e, `${La()}`).map((e => e.split(","))).getOr([]),
                            n = Kt(e, `${Pa()}`).map((e => e.split(","))).getOr([]);
                        var o;
                        V(t, (t => Yt(e, t))), o = e, V(n, (e => {
                            rn(o, e)
                        })), Yt(e, `${Pa()}`), Yt(e, `${La()}`)
                    })(e)
                }))
            };
            return {
                register: (e, n) => {
                    t.register(e, n)
                }, annotate: (n, o) => {
                    t.lookup(n).each((t => {
                        ((e, t, n, o) => {
                            e.undoManager.transact((() => {
                                const r = e.selection, s = r.getRng(), a = Ru(e).length > 0, i = Ha("mce-annotation");
                                if (s.collapsed && !a && ((e, t) => {
                                    const n = vm(e.dom, t, [{inline: "span"}]);
                                    t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)
                                })(e, s), r.getRng().collapsed && !a) {
                                    const s = xm(e.getDoc(), i, o, t, n.decorate);
                                    io(s, tr), r.getRng().insertNode(s.dom), r.select(s.dom)
                                } else Mu(r, !1, (() => {
                                    Lu(e, (r => {
                                        km(e, r, i, t, n.decorate, o)
                                    }))
                                }))
                            }))
                        })(e, n, t, o)
                    }))
                }, annotationChanged: (e, t) => {
                    n.addListener(e, t)
                }, remove: t => {
                    const n = e.selection.getBookmark();
                    Ia(e, M.some(t)).each((({elements: e}) => {
                        r(e)
                    })), e.selection.moveToBookmark(n)
                }, removeAll: t => {
                    const n = e.selection.getBookmark();
                    fe(za(e, t), ((e, t) => {
                        r(e)
                    })), e.selection.moveToBookmark(n)
                }, getAll: t => {
                    const n = za(e, t);
                    return ge(n, (e => $(e, (e => e.dom))))
                }
            }
        }, _m = e => ({getBookmark: O(fu, e), moveToBookmark: O(gu, e)});
    _m.isBookmarkNode = pu;
    const Em = (e, t, n) => !n.collapsed && H(n.getClientRects(), (n => ((e, t, n) => t >= e.left && t <= e.right && n >= e.top && n <= e.bottom)(n, e, t))),
        Nm = (e, t, n) => {
            e.dispatch(t, n)
        }, Rm = (e, t, n, o) => {
            e.dispatch("FormatApply", {format: t, node: n, vars: o})
        }, Am = (e, t, n, o) => {
            e.dispatch("FormatRemove", {format: t, node: n, vars: o})
        }, Om = (e, t) => e.dispatch("SetContent", t), Tm = (e, t) => e.dispatch("GetContent", t),
        Bm = (e, t) => e.dispatch("PastePlainTextToggle", {state: t}), Dm = {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            modifierPressed: e => e.shiftKey || e.ctrlKey || e.altKey || Dm.metaKeyPressed(e),
            metaKeyPressed: e => Nt.os.isMacOS() || Nt.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey
        }, Pm = "data-mce-selected", Lm = Math.abs, Mm = Math.round,
        Im = {nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1]}, Fm = (e, t) => {
            const n = t.dom, o = t.getDoc(), r = document, s = t.getBody();
            let a, i, l, d, c, u, m, f, g, p, h, b, v, y, w;
            const x = e => C(e) && (Ko(e) || n.is(e, "figure.image")),
                k = e => Jo(e) || n.hasClass(e, "mce-preview-object"), S = e => {
                    const n = e.target;
                    ((e, t) => {
                        if ((e => "longpress" === e.type || 0 === e.type.indexOf("touch"))(e)) {
                            const n = e.touches[0];
                            return x(e.target) && !Em(n.clientX, n.clientY, t)
                        }
                        return x(e.target) && !Em(e.clientX, e.clientY, t)
                    })(e, t.selection.getRng()) && !e.isDefaultPrevented() && t.selection.select(n)
                },
                _ = e => n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? [e, e.firstElementChild] : n.is(e, "figure.image") ? [e.querySelector("img")] : [e],
                E = e => {
                    const o = jl(t);
                    return !!o && "false" !== e.getAttribute("data-mce-resize") && e !== t.getBody() && (n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? pn(mn(e.firstElementChild), o) : pn(mn(e), o))
                }, N = (e, o, r) => {
                    if (C(r)) {
                        const s = _(e);
                        V(s, (e => {
                            e.style[o] || !t.schema.isValid(e.nodeName.toLowerCase(), o) ? n.setStyle(e, o, r) : n.setAttrib(e, o, "" + r)
                        }))
                    }
                }, R = (e, t, n) => {
                    N(e, "width", t), N(e, "height", n)
                }, A = e => {
                    let o, r, c, C, S;
                    o = e.screenX - u, r = e.screenY - m, b = o * d[2] + f, v = r * d[3] + g, b = b < 5 ? 5 : b, v = v < 5 ? 5 : v, c = (x(a) || k(a)) && !1 !== Hl(t) ? !Dm.modifierPressed(e) : Dm.modifierPressed(e), c && (Lm(o) > Lm(r) ? (v = Mm(b * p), b = Mm(v / p)) : (b = Mm(v / p), v = Mm(b * p))), R(i, b, v), C = d.startPos.x + o, S = d.startPos.y + r, C = C > 0 ? C : 0, S = S > 0 ? S : 0, n.setStyles(l, {
                        left: C,
                        top: S,
                        display: "block"
                    }), l.innerHTML = b + " &times; " + v, d[2] < 0 && i.clientWidth <= b && n.setStyle(i, "left", void 0 + (f - b)), d[3] < 0 && i.clientHeight <= v && n.setStyle(i, "top", void 0 + (g - v)), o = s.scrollWidth - y, r = s.scrollHeight - w, o + r !== 0 && n.setStyles(l, {
                        left: C - o,
                        top: S - r
                    }), h || (((e, t, n, o, r) => {
                        e.dispatch("ObjectResizeStart", {target: t, width: n, height: o, origin: r})
                    })(t, a, f, g, "corner-" + d.name), h = !0)
                }, O = () => {
                    const e = h;
                    h = !1, e && (N(a, "width", b), N(a, "height", v)), n.unbind(o, "mousemove", A), n.unbind(o, "mouseup", O), r !== o && (n.unbind(r, "mousemove", A), n.unbind(r, "mouseup", O)), n.remove(i), n.remove(l), n.remove(c), T(a), e && (((e, t, n, o, r) => {
                        e.dispatch("ObjectResized", {target: t, width: n, height: o, origin: r})
                    })(t, a, b, v, "corner-" + d.name), n.setAttrib(a, "style", n.getAttrib(a, "style"))), t.nodeChanged()
                }, T = e => {
                    M();
                    const h = n.getPos(e, s), C = h.x, x = h.y, S = e.getBoundingClientRect(), N = S.width || S.right - S.left,
                        T = S.height || S.bottom - S.top;
                    a !== e && (D(), a = e, b = v = 0);
                    const B = t.dispatch("ObjectSelected", {target: e});
                    E(e) && !B.isDefaultPrevented() ? fe(Im, ((e, t) => {
                        let h = n.get("mceResizeHandle" + t);
                        h && n.remove(h), h = n.add(s, "div", {
                            id: "mceResizeHandle" + t,
                            "data-mce-bogus": "all",
                            class: "mce-resizehandle",
                            unselectable: !0,
                            style: "cursor:" + t + "-resize; margin:0; padding:0"
                        }), n.bind(h, "mousedown", (h => {
                            h.stopImmediatePropagation(), h.preventDefault(), (h => {
                                const b = _(a)[0];
                                var v;
                                u = h.screenX, m = h.screenY, f = b.clientWidth, g = b.clientHeight, p = g / f, d = e, d.name = t, d.startPos = {
                                    x: N * e[0] + C,
                                    y: T * e[1] + x
                                }, y = s.scrollWidth, w = s.scrollHeight, c = n.add(s, "div", {
                                    class: "mce-resize-backdrop",
                                    "data-mce-bogus": "all"
                                }), n.setStyles(c, {
                                    position: "fixed",
                                    left: "0",
                                    top: "0",
                                    width: "100%",
                                    height: "100%"
                                }), i = k(v = a) ? n.create("img", {src: Nt.transparentSrc}) : v.cloneNode(!0), n.addClass(i, "mce-clonedresizable"), n.setAttrib(i, "data-mce-bogus", "all"), i.contentEditable = "false", n.setStyles(i, {
                                    left: C,
                                    top: x,
                                    margin: 0
                                }), R(i, N, T), i.removeAttribute(Pm), s.appendChild(i), n.bind(o, "mousemove", A), n.bind(o, "mouseup", O), r !== o && (n.bind(r, "mousemove", A), n.bind(r, "mouseup", O)), l = n.add(s, "div", {
                                    class: "mce-resize-helper",
                                    "data-mce-bogus": "all"
                                }, f + " &times; " + g)
                            })(h)
                        })), e.elm = h, n.setStyles(h, {
                            left: N * e[0] + C - h.offsetWidth / 2,
                            top: T * e[1] + x - h.offsetHeight / 2
                        })
                    })) : D(!1)
                }, B = Ra(T, 0), D = (e = !0) => {
                    B.cancel(), M(), a && e && a.removeAttribute(Pm), fe(Im, ((e, t) => {
                        const o = n.get("mceResizeHandle" + t);
                        o && (n.unbind(o), n.remove(o))
                    }))
                }, P = (e, t) => n.isChildOf(e, t), L = o => {
                    if (h || t.removed || t.composing) return;
                    const r = "mousedown" === o.type ? o.target : e.getNode(),
                        a = Eo(mn(r), "table,img,figure.image,hr,video,span.mce-preview-object").map((e => e.dom)).getOrUndefined(),
                        i = C(a) ? n.getAttrib(a, Pm, "1") : "1";
                    if (V(n.select("img[data-mce-selected],hr[data-mce-selected]"), (e => {
                        e.removeAttribute(Pm)
                    })), C(a) && P(a, s)) {
                        I();
                        const t = e.getStart(!0);
                        if (P(t, a) && P(e.getEnd(!0), a)) return n.setAttrib(a, Pm, i), void B.throttle(a)
                    }
                    D()
                }, M = () => {
                    fe(Im, (e => {
                        e.elm && (n.unbind(e.elm), delete e.elm)
                    }))
                }, I = () => {
                    try {
                        t.getDoc().execCommand("enableObjectResizing", !1, "false")
                    } catch (e) {
                    }
                };
            return t.on("init", (() => {
                I(), t.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", L), t.on("keyup compositionend", (e => {
                    a && "TABLE" === a.nodeName && L(e)
                })), t.on("hide blur", D), t.on("contextmenu longpress", S, !0)
            })), t.on("remove", M), {
                isResizable: E,
                showResizeRect: T,
                hideResizeRect: D,
                updateResizeRect: L,
                destroy: () => {
                    B.cancel(), a = i = c = null
                }
            }
        }, Um = (e, t, n) => {
            const o = e.document.createRange();
            var r;
            return r = o, t.fold((e => {
                r.setStartBefore(e.dom)
            }), ((e, t) => {
                r.setStart(e.dom, t)
            }), (e => {
                r.setStartAfter(e.dom)
            })), ((e, t) => {
                t.fold((t => {
                    e.setEndBefore(t.dom)
                }), ((t, n) => {
                    e.setEnd(t.dom, n)
                }), (t => {
                    e.setEndAfter(t.dom)
                }))
            })(o, n), o
        }, zm = (e, t, n, o, r) => {
            const s = e.document.createRange();
            return s.setStart(t.dom, n), s.setEnd(o.dom, r), s
        }, jm = Ki([{ltr: ["start", "soffset", "finish", "foffset"]}, {rtl: ["start", "soffset", "finish", "foffset"]}]),
        Hm = (e, t, n) => t(mn(n.startContainer), n.startOffset, mn(n.endContainer), n.endOffset);
    jm.ltr, jm.rtl;
    const $m = (e, t, n, o) => ({start: e, soffset: t, finish: n, foffset: o}),
        Vm = document.caretPositionFromPoint ? (e, t, n) => {
            var o, r;
            return M.from(null === (r = (o = e.dom).caretPositionFromPoint) || void 0 === r ? void 0 : r.call(o, t, n)).bind((t => {
                if (null === t.offsetNode) return M.none();
                const n = e.dom.createRange();
                return n.setStart(t.offsetNode, t.offset), n.collapse(), M.some(n)
            }))
        } : document.caretRangeFromPoint ? (e, t, n) => {
            var o, r;
            return M.from(null === (r = (o = e.dom).caretRangeFromPoint) || void 0 === r ? void 0 : r.call(o, t, n))
        } : M.none, qm = Ki([{before: ["element"]}, {on: ["element", "offset"]}, {after: ["element"]}]), Wm = {
            before: qm.before,
            on: qm.on,
            after: qm.after,
            cata: (e, t, n, o) => e.fold(t, n, o),
            getStart: e => e.fold(R, R, R)
        },
        Km = Ki([{domRange: ["rng"]}, {relative: ["startSitu", "finishSitu"]}, {exact: ["start", "soffset", "finish", "foffset"]}]),
        Gm = {
            domRange: Km.domRange,
            relative: Km.relative,
            exact: Km.exact,
            exactFromRange: e => Km.exact(e.start, e.soffset, e.finish, e.foffset),
            getWin: e => {
                const t = (e => e.match({
                    domRange: e => mn(e.startContainer),
                    relative: (e, t) => Wm.getStart(e),
                    exact: (e, t, n, o) => e
                }))(e);
                return wn(t)
            },
            range: $m
        }, Ym = (e, t) => {
            const n = Lt(e);
            return "input" === n ? Wm.after(e) : j(["br", "img"], n) ? 0 === t ? Wm.before(e) : Wm.after(e) : Wm.on(e, t)
        }, Xm = (e, t) => {
            const n = e.fold(Wm.before, Ym, Wm.after), o = t.fold(Wm.before, Ym, Wm.after);
            return Gm.relative(n, o)
        }, Qm = (e, t, n, o) => {
            const r = Ym(e, t), s = Ym(n, o);
            return Gm.relative(r, s)
        }, Jm = (e, t) => {
            const n = (t || document).createDocumentFragment();
            return V(e, (e => {
                n.appendChild(e.dom)
            })), mn(n)
        }, Zm = e => {
            const t = Gm.getWin(e).dom, n = (e, n, o, r) => zm(t, e, n, o, r), o = (e => e.match({
                domRange: e => {
                    const t = mn(e.startContainer), n = mn(e.endContainer);
                    return Qm(t, e.startOffset, n, e.endOffset)
                }, relative: Xm, exact: Qm
            }))(e);
            return ((e, t) => {
                const n = ((e, t) => t.match({
                    domRange: e => ({ltr: N(e), rtl: M.none}),
                    relative: (t, n) => ({ltr: De((() => Um(e, t, n))), rtl: De((() => M.some(Um(e, n, t))))}),
                    exact: (t, n, o, r) => ({
                        ltr: De((() => zm(e, t, n, o, r))),
                        rtl: De((() => M.some(zm(e, o, r, t, n))))
                    })
                }))(e, t);
                return ((e, t) => {
                    const n = t.ltr();
                    return n.collapsed ? t.rtl().filter((e => !1 === e.collapsed)).map((e => jm.rtl(mn(e.endContainer), e.endOffset, mn(e.startContainer), e.startOffset))).getOrThunk((() => Hm(0, jm.ltr, n))) : Hm(0, jm.ltr, n)
                })(0, n)
            })(t, o).match({ltr: n, rtl: n})
        }, ef = (e, t, n) => ((e, t, n) => ((e, t, n) => {
            const o = mn(e.document);
            return Vm(o, t, n).map((e => $m(mn(e.startContainer), e.startOffset, mn(e.endContainer), e.endOffset)))
        })(e, t, n))(wn(mn(n)).dom, e, t).map((e => {
            const t = n.createRange();
            return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), t
        })).getOrUndefined(),
        tf = (e, t) => C(e) && C(t) && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset,
        nf = (e, t, n) => null !== ((e, t, n) => {
            let o = e;
            for (; o && o !== t;) {
                if (n(o)) return o;
                o = o.parentNode
            }
            return null
        })(e, t, n), of = (e, t, n) => nf(e, t, (e => e.nodeName === n)), rf = (e, t) => Or(e) && !nf(e, t, nu),
        sf = (e, t, n) => {
            const o = t.parentNode;
            if (o) {
                const r = new Ro(t, e.getParent(o, e.isBlock) || e.getRoot());
                let s;
                for (; s = r[n ? "prev" : "next"]();) if (Wo(s)) return !0
            }
            return !1
        }, af = (e, t, n, o, r) => {
            const s = e.getRoot(), a = e.schema.getNonEmptyElements(), i = r.parentNode;
            let l, d;
            if (!i) return M.none();
            const c = e.getParent(i, e.isBlock) || s;
            if (o && Wo(r) && t && e.isEmpty(c)) return M.some(xi(i, e.nodeIndex(r)));
            const u = new Ro(r, c);
            for (; d = u[o ? "prev" : "next"]();) {
                if ("false" === e.getContentEditableParent(d) || rf(d, s)) return M.none();
                if (zo(d) && d.data.length > 0) return of(d, s, "A") ? M.none() : M.some(xi(d, o ? d.data.length : 0));
                if (e.isBlock(d) || a[d.nodeName.toLowerCase()]) return M.none();
                l = d
            }
            return $o(l) ? M.none() : n && l ? M.some(xi(l, 0)) : M.none()
        }, lf = (e, t, n, o) => {
            const r = e.getRoot();
            let s, a = !1, i = n ? o.startContainer : o.endContainer, l = n ? o.startOffset : o.endOffset;
            const d = To(i) && l === i.childNodes.length, c = e.schema.getNonEmptyElements();
            let u = n;
            if (Or(i)) return M.none();
            if (To(i) && l > i.childNodes.length - 1 && (u = !1), Vo(i) && (i = r, l = 0), i === r) {
                if (u && (s = i.childNodes[l > 0 ? l - 1 : 0], s)) {
                    if (Or(s)) return M.none();
                    if (c[s.nodeName] || Io(s)) return M.none()
                }
                if (i.hasChildNodes()) {
                    if (l = Math.min(!u && l > 0 ? l - 1 : l, i.childNodes.length - 1), i = i.childNodes[l], l = zo(i) && d ? i.data.length : 0, !t && i === r.lastChild && Io(i)) return M.none();
                    if (((e, t) => {
                        let n = t;
                        for (; n && n !== e;) {
                            if (Yo(n)) return !0;
                            n = n.parentNode
                        }
                        return !1
                    })(r, i) || Or(i)) return M.none();
                    if (i.hasChildNodes() && !Io(i)) {
                        s = i;
                        const t = new Ro(i, r);
                        do {
                            if (Yo(s) || Or(s)) {
                                a = !1;
                                break
                            }
                            if (zo(s) && s.data.length > 0) {
                                l = u ? 0 : s.data.length, i = s, a = !0;
                                break
                            }
                            if (c[s.nodeName.toLowerCase()] && !Qo(s)) {
                                l = e.nodeIndex(s), i = s.parentNode, u || l++, a = !0;
                                break
                            }
                        } while (s = u ? t.next() : t.prev())
                    }
                }
            }
            return t && (zo(i) && 0 === l && af(e, d, t, !0, i).each((e => {
                i = e.container(), l = e.offset(), a = !0
            })), To(i) && (s = i.childNodes[l], s || (s = i.childNodes[l - 1]), !s || !Wo(s) || ((e, t) => {
                var n;
                return "A" === (null === (n = e.previousSibling) || void 0 === n ? void 0 : n.nodeName)
            })(s) || sf(e, s, !1) || sf(e, s, !0) || af(e, d, t, !0, s).each((e => {
                i = e.container(), l = e.offset(), a = !0
            })))), u && !t && zo(i) && l === i.data.length && af(e, d, t, !1, i).each((e => {
                i = e.container(), l = e.offset(), a = !0
            })), a && i ? M.some(xi(i, l)) : M.none()
        }, df = (e, t) => {
            const n = t.collapsed, o = t.cloneRange(), r = xi.fromRangeStart(t);
            return lf(e, n, !0, o).each((e => {
                n && xi.isAbove(r, e) || o.setStart(e.container(), e.offset())
            })), n || lf(e, n, !1, o).each((e => {
                o.setEnd(e.container(), e.offset())
            })), n && o.collapse(!0), tf(t, o) ? M.none() : M.some(o)
        }, cf = (e, t) => e.splitText(t), uf = e => {
            let t = e.startContainer, n = e.startOffset, o = e.endContainer, r = e.endOffset;
            if (t === o && zo(t)) {
                if (n > 0 && n < t.data.length) if (o = cf(t, n), t = o.previousSibling, r > n) {
                    r -= n;
                    const e = cf(o, r).previousSibling;
                    t = o = e, r = e.data.length, n = 0
                } else r = 0
            } else if (zo(t) && n > 0 && n < t.data.length && (t = cf(t, n), n = 0), zo(o) && r > 0 && r < o.data.length) {
                const e = cf(o, r).previousSibling;
                o = e, r = e.data.length
            }
            return {startContainer: t, startOffset: n, endContainer: o, endOffset: r}
        }, mf = e => ({
            walk: (t, n) => ym(e, t, n),
            split: uf,
            expand: (t, n = {type: "word"}) => {
                if ("word" === n.type) {
                    const n = vm(e, t, [{inline: "span"}]), o = e.createRng();
                    return o.setStart(n.startContainer, n.startOffset), o.setEnd(n.endContainer, n.endOffset), o
                }
                return t
            },
            normalize: t => df(e, t).fold(P, (e => (t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0)))
        });
    mf.compareRanges = tf, mf.getCaretRangeFromPoint = ef, mf.getSelectedNode = ti, mf.getNode = ni;
    const ff = ((e, t) => {
        const n = t => {
            const n = (e => {
                const t = e.dom;
                return Hn(e) ? t.getBoundingClientRect().height : t.offsetHeight
            })(t);
            if (n <= 0 || null === n) {
                const n = Wn(t, e);
                return parseFloat(n) || 0
            }
            return n
        }, o = (e, t) => Y(t, ((t, n) => {
            const o = Wn(e, n), r = void 0 === o ? 0 : parseInt(o, 10);
            return isNaN(r) ? t : t + r
        }), 0);
        return {
            set: (t, n) => {
                if (!x(n) && !n.match(/^[0-9]+$/)) throw new Error(e + ".set accepts only positive integer values. Value was " + n);
                const o = t.dom;
                an(o) && (o.style[e] = n + "px")
            }, get: n, getOuter: n, aggregate: o, max: (e, t, n) => {
                const r = o(e, n);
                return t > r ? t - r : 0
            }
        }
    })("height"), gf = () => mn(document), pf = (e, t) => e.view(t).fold(N([]), (t => {
        const n = e.owner(t), o = pf(e, n);
        return [t].concat(o)
    }));
    var hf = Object.freeze({
        __proto__: null, view: e => {
            var t;
            return (e.dom === document ? M.none() : M.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(mn)
        }, owner: e => Cn(e)
    });
    const bf = e => "textarea" === Lt(e), vf = (e, t) => {
            const n = (e => {
                const t = e.dom.ownerDocument, n = t.body, o = t.defaultView, r = t.documentElement;
                if (n === e.dom) return mo(n.offsetLeft, n.offsetTop);
                const s = fo(null == o ? void 0 : o.pageYOffset, r.scrollTop),
                    a = fo(null == o ? void 0 : o.pageXOffset, r.scrollLeft), i = fo(r.clientTop, n.clientTop),
                    l = fo(r.clientLeft, n.clientLeft);
                return go(e).translate(a - l, s - i)
            })(e), o = (e => ff.get(e))(e);
            return {element: e, bottom: n.top + o, height: o, pos: n, cleanup: t}
        }, yf = (e, t, n, o) => {
            kf(e, ((r, s) => wf(e, t, n, o)), n)
        }, Cf = (e, t, n, o, r) => {
            const s = {elm: o.element.dom, alignToTop: r};
            ((e, t) => e.dispatch("ScrollIntoView", t).isDefaultPrevented())(e, s) || (n(t, po(t).top, o, r), ((e, t) => {
                e.dispatch("AfterScrollIntoView", t)
            })(e, s))
        }, wf = (e, t, n, o) => {
            const r = mn(e.getBody()), s = mn(e.getDoc());
            r.dom.offsetWidth;
            const a = ((e, t) => {
                const n = ((e, t) => {
                    const n = An(e);
                    if (0 === n.length || bf(e)) return {element: e, offset: t};
                    if (t < n.length && !bf(n[t])) return {element: n[t], offset: 0};
                    {
                        const o = n[n.length - 1];
                        return bf(o) ? {element: e, offset: t} : "img" === Lt(o) ? {
                            element: o,
                            offset: 1
                        } : Ut(o) ? {element: o, offset: sr(o).length} : {element: o, offset: An(o).length}
                    }
                })(e, t), o = dn('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>');
                return Qn(n.element, o), vf(o, (() => oo(o)))
            })(mn(n.startContainer), n.startOffset);
            Cf(e, s, t, a, o), a.cleanup()
        }, xf = (e, t, n, o) => {
            const r = mn(e.getDoc());
            Cf(e, r, n, (e => vf(mn(e), S))(t), o)
        }, kf = (e, t, n) => {
            const o = n.startContainer, r = n.startOffset, s = n.endContainer, a = n.endOffset;
            t(mn(o), mn(s));
            const i = e.dom.createRng();
            i.setStart(o, r), i.setEnd(s, a), e.selection.setRng(n)
        }, Sf = (e, t, n, o) => {
            const r = e.pos;
            if (n) ho(r.left, r.top, o); else {
                const n = r.top - t + e.height;
                ho(r.left, n, o)
            }
        }, _f = (e, t, n, o, r) => {
            const s = n + t, a = o.pos.top, i = o.bottom, l = i - a >= n;
            a < t ? Sf(o, n, !1 !== r, e) : a > s ? Sf(o, n, l ? !1 !== r : !0 === r, e) : i > s && !l && Sf(o, n, !0 === r, e)
        }, Ef = (e, t, n, o) => {
            const r = wn(e).dom.innerHeight;
            _f(e, t, r, n, o)
        }, Nf = (e, t, n, o) => {
            const r = wn(e).dom.innerHeight;
            _f(e, t, r, n, o);
            const s = (e => {
                const t = gf(), n = po(t), o = ((e, t) => {
                    const n = t.owner(e);
                    return pf(t, n)
                })(e, hf), r = go(e), s = G(o, ((e, t) => {
                    const n = go(t);
                    return {left: e.left + n.left, top: e.top + n.top}
                }), {left: 0, top: 0});
                return mo(s.left + r.left + n.left, s.top + r.top + n.top)
            })(n.element), a = yo(window);
            s.top < a.y ? bo(n.element, !1 !== o) : s.top > a.bottom && bo(n.element, !0 === o)
        }, Rf = (e, t, n) => yf(e, Ef, t, n), Af = (e, t, n) => xf(e, t, Ef, n), Of = (e, t, n) => yf(e, Nf, t, n),
        Tf = (e, t, n) => xf(e, t, Nf, n), Bf = (e, t, n) => {
            (e.inline ? Rf : Of)(e, t, n)
        }, Df = e => e.dom.focus(), Pf = e => {
            const t = In(e).dom;
            return e.dom === t.activeElement
        }, Lf = (e = gf()) => M.from(e.dom.activeElement).map(mn), Mf = (e, t) => {
            const n = Ut(t) ? sr(t).length : An(t).length + 1;
            return e > n ? n : e < 0 ? 0 : e
        }, If = e => Gm.range(e.start, Mf(e.soffset, e.start), e.finish, Mf(e.foffset, e.finish)),
        Ff = (e, t) => !Oo(t.dom) && (vn(e, t) || bn(e, t)), Uf = e => t => Ff(e, t.start) && Ff(e, t.finish),
        zf = e => Gm.range(mn(e.startContainer), e.startOffset, mn(e.endContainer), e.endOffset), jf = e => {
            const t = document.createRange();
            try {
                return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), M.some(t)
            } catch (e) {
                return M.none()
            }
        }, Hf = e => {
            const t = (e => e.inline || Nt.browser.isFirefox())(e) ? (n = mn(e.getBody()), (e => {
                const t = e.getSelection();
                return (t && 0 !== t.rangeCount ? M.from(t.getRangeAt(0)) : M.none()).map(zf)
            })(wn(n).dom).filter(Uf(n))) : M.none();
            var n;
            e.bookmark = t.isSome() ? t : e.bookmark
        }, $f = e => (e.bookmark ? e.bookmark : M.none()).bind((t => {
            return n = mn(e.getBody()), o = t, M.from(o).filter(Uf(n)).map(If);
            var n, o
        })).bind(jf), Vf = {
            isEditorUIElement: e => {
                const t = e.className.toString();
                return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-")
            }
        }, qf = {
            setEditorTimeout: (e, t, n) => ((e, t) => (x(t) || (t = 0), setTimeout(e, t)))((() => {
                e.removed || t()
            }), n), setEditorInterval: (e, t, n) => {
                const o = ((e, t) => (x(t) || (t = 0), setInterval(e, t)))((() => {
                    e.removed ? clearInterval(o) : t()
                }), n);
                return o
            }
        };
    let Wf;
    const Kf = ba.DOM, Gf = (e, t) => {
            const n = td(e),
                o = Kf.getParent(t, (t => (e => To(e) && Vf.isEditorUIElement(e))(t) || !!n && e.dom.is(t, n)));
            return null !== o
        }, Yf = (e, t) => {
            const n = t.editor;
            (e => {
                const t = Ra((() => {
                    Hf(e)
                }), 0);
                e.on("init", (() => {
                    e.inline && ((e, t) => {
                        const n = () => {
                            t.throttle()
                        };
                        ba.DOM.bind(document, "mouseup", n), e.on("remove", (() => {
                            ba.DOM.unbind(document, "mouseup", n)
                        }))
                    })(e, t), ((e, t) => {
                        ((e, t) => {
                            e.on("mouseup touchend", (e => {
                                t.throttle()
                            }))
                        })(e, t), e.on("keyup NodeChange AfterSetSelectionRange", (t => {
                            (e => "nodechange" === e.type && e.selectionChange)(t) || Hf(e)
                        }))
                    })(e, t)
                })), e.on("remove", (() => {
                    t.cancel()
                }))
            })(n), n.on("focusin", (() => {
                const t = e.focusedEditor;
                t !== n && (t && t.dispatch("blur", {focusedEditor: n}), e.setActive(n), e.focusedEditor = n, n.dispatch("focus", {blurredEditor: t}), n.focus(!0))
            })), n.on("focusout", (() => {
                qf.setEditorTimeout(n, (() => {
                    const t = e.focusedEditor;
                    Gf(n, (e => {
                        try {
                            const t = In(mn(e.getElement()));
                            return Lf(t).fold((() => document.body), (e => e.dom))
                        } catch (e) {
                            return document.body
                        }
                    })(n)) || t !== n || (n.dispatch("blur", {focusedEditor: null}), e.focusedEditor = null)
                }))
            })), Wf || (Wf = t => {
                const n = e.activeEditor;
                n && zn(t).each((t => {
                    const o = t;
                    o.ownerDocument === document && (o === document.body || Gf(n, o) || e.focusedEditor !== n || (n.dispatch("blur", {focusedEditor: null}), e.focusedEditor = null))
                }))
            }, Kf.bind(document, "focusin", Wf))
        }, Xf = (e, t) => {
            e.focusedEditor === t.editor && (e.focusedEditor = null), !e.activeEditor && Wf && (Kf.unbind(document, "focusin", Wf), Wf = null)
        }, Qf = (e, t) => {
            ((e, t) => (e => e.collapsed ? M.from(ni(e.startContainer, e.startOffset)).map(mn) : M.none())(t).bind((t => pr(t) ? M.some(t) : vn(e, t) ? M.none() : M.some(e))))(mn(e.getBody()), t).bind((e => Zc(e.dom))).fold((() => {
                e.selection.normalize()
            }), (t => e.selection.setRng(t.toRange())))
        }, Jf = e => {
            if (e.setActive) try {
                e.setActive()
            } catch (t) {
                e.focus()
            } else e.focus()
        }, Zf = e => e.inline ? (e => {
            const t = e.getBody();
            return t && (n = mn(t), Pf(n) || (o = n, Lf(In(o)).filter((e => o.dom.contains(e.dom)))).isSome());
            var n, o
        })(e) : (e => C(e.iframeElement) && Pf(mn(e.iframeElement)))(e), eg = e => e.editorManager.setActive(e),
        tg = (e, t, n, o, r) => {
            const s = n ? t.startContainer : t.endContainer, a = n ? t.startOffset : t.endOffset;
            return M.from(s).map(mn).map((e => o && t.collapsed ? e : On(e, r(e, a)).getOr(e))).bind((e => Ft(e) ? M.some(e) : xn(e).filter(Ft))).map((e => e.dom)).getOr(e)
        }, ng = (e, t, n = !1) => tg(e, t, !0, n, ((e, t) => Math.min(Dn(e), t))),
        og = (e, t, n = !1) => tg(e, t, !1, n, ((e, t) => t > 0 ? t - 1 : t)), rg = (e, t) => {
            const n = e;
            for (; e && zo(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
            return e || n
        }, sg = (e, t) => $(t, (t => {
            const n = e.dispatch("GetSelectionRange", {range: t});
            return n.range !== t ? n.range : t
        })), ag = ["img", "br"], ig = e => {
            const t = ar(e).filter((e => 0 !== e.trim().length || e.indexOf(tr) > -1)).isSome();
            return t || j(ag, Lt(e))
        }, lg = "[data-mce-autocompleter]", dg = (e, t) => {
            if (cg(mn(e.getBody())).isNone()) {
                const o = dn('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());
                eo(o, mn(t.extractContents())), t.insertNode(o.dom), xn(o).each((e => e.dom.normalize())), (n = o, ((e, t) => {
                    const n = e => {
                        const o = An(e);
                        for (let e = o.length - 1; e >= 0; e--) {
                            const r = o[e];
                            if (t(r)) return M.some(r);
                            const s = n(r);
                            if (s.isSome()) return s
                        }
                        return M.none()
                    };
                    return n(e)
                })(n, ig)).map((t => {
                    e.selection.setCursorLocation(t.dom, (e => "img" === Lt(e) ? 1 : ar(e).fold((() => An(e).length), (e => e.length)))(t))
                }))
            }
            var n
        }, cg = e => _o(e, lg),
        ug = {"#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11},
        mg = (e, t, n) => {
            const o = n ? "lastChild" : "firstChild", r = n ? "prev" : "next";
            if (e[o]) return e[o];
            if (e !== t) {
                let n = e[r];
                if (n) return n;
                for (let o = e.parent; o && o !== t; o = o.parent) if (n = o[r], n) return n
            }
        }, fg = e => {
            var t;
            const n = null !== (t = e.value) && void 0 !== t ? t : "";
            if (!Xr(n)) return !1;
            const o = e.parent;
            return !o || "span" === o.name && !o.attr("style") || !/^[ ]+$/.test(n)
        }, gg = e => {
            const t = "a" === e.name && !e.attr("href") && e.attr("id");
            return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t
        };

    class pg {
        constructor(e, t) {
            this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {})
        }

        static create(e, t) {
            const n = new pg(e, ug[e] || 1);
            return t && fe(t, ((e, t) => {
                n.attr(t, e)
            })), n
        }

        replace(e) {
            const t = this;
            return e.parent && e.remove(), t.insert(e, t), t.remove(), t
        }

        attr(e, t) {
            const n = this;
            if (!m(e)) return C(e) && fe(e, ((e, t) => {
                n.attr(t, e)
            })), n;
            const o = n.attributes;
            if (o) {
                if (void 0 !== t) {
                    if (null === t) {
                        if (e in o.map) {
                            delete o.map[e];
                            let t = o.length;
                            for (; t--;) if (o[t].name === e) return o.splice(t, 1), n
                        }
                        return n
                    }
                    if (e in o.map) {
                        let n = o.length;
                        for (; n--;) if (o[n].name === e) {
                            o[n].value = t;
                            break
                        }
                    } else o.push({name: e, value: t});
                    return o.map[e] = t, n
                }
                return o.map[e]
            }
        }

        clone() {
            const e = this, t = new pg(e.name, e.type), n = e.attributes;
            if (n) {
                const e = [];
                e.map = {};
                for (let t = 0, o = n.length; t < o; t++) {
                    const o = n[t];
                    "id" !== o.name && (e[e.length] = {name: o.name, value: o.value}, e.map[o.name] = o.value)
                }
                t.attributes = e
            }
            return t.value = e.value, t
        }

        wrap(e) {
            const t = this;
            return t.parent && (t.parent.insert(e, t), e.append(t)), t
        }

        unwrap() {
            const e = this;
            for (let t = e.firstChild; t;) {
                const n = t.next;
                e.insert(t, e, !0), t = n
            }
            e.remove()
        }

        remove() {
            const e = this, t = e.parent, n = e.next, o = e.prev;
            return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : o && (o.next = n), t.lastChild === e ? (t.lastChild = o, o && (o.next = null)) : n && (n.prev = o), e.parent = e.next = e.prev = null), e
        }

        append(e) {
            const t = this;
            e.parent && e.remove();
            const n = t.lastChild;
            return n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e
        }

        insert(e, t, n) {
            e.parent && e.remove();
            const o = t.parent || this;
            return n ? (t === o.firstChild ? o.firstChild = e : t.prev && (t.prev.next = e), e.prev = t.prev, e.next = t, t.prev = e) : (t === o.lastChild ? o.lastChild = e : t.next && (t.next.prev = e), e.next = t.next, e.prev = t, t.next = e), e.parent = o, e
        }

        getAll(e) {
            const t = this, n = [];
            for (let o = t.firstChild; o; o = mg(o, t)) o.name === e && n.push(o);
            return n
        }

        children() {
            const e = [];
            for (let t = this.firstChild; t; t = t.next) e.push(t);
            return e
        }

        empty() {
            const e = this;
            if (e.firstChild) {
                const t = [];
                for (let n = e.firstChild; n; n = mg(n, e)) t.push(n);
                let n = t.length;
                for (; n--;) {
                    const e = t[n];
                    e.parent = e.firstChild = e.lastChild = e.next = e.prev = null
                }
            }
            return e.firstChild = e.lastChild = null, e
        }

        isEmpty(e, t = {}, n) {
            var o;
            const r = this;
            let s = r.firstChild;
            if (gg(r)) return !1;
            if (s) do {
                if (1 === s.type) {
                    if (s.attr("data-mce-bogus")) continue;
                    if (e[s.name]) return !1;
                    if (gg(s)) return !1
                }
                if (8 === s.type) return !1;
                if (3 === s.type && !fg(s)) return !1;
                if (3 === s.type && s.parent && t[s.parent.name] && Xr(null !== (o = s.value) && void 0 !== o ? o : "")) return !1;
                if (n && n(s)) return !1
            } while (s = mg(s, r));
            return !0
        }

        walk(e) {
            return mg(this, null, e)
        }
    }

    const hg = (e, t, n = 0) => {
        const o = e.toLowerCase();
        if (-1 !== o.indexOf("[if ", n) && ((e, t) => /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t)))(o, n)) {
            const e = o.indexOf("[endif]", n);
            return o.indexOf(">", e)
        }
        if (t) {
            const e = o.indexOf(">", n);
            return -1 !== e ? e : o.length
        }
        {
            const t = /--!?>/g;
            t.lastIndex = n;
            const r = t.exec(e);
            return r ? r.index + r[0].length : o.length
        }
    }, bg = (e, t, n) => {
        const o = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g,
            r = /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g, s = e.getVoidElements();
        let a = 1, i = n;
        for (; 0 !== a;) for (o.lastIndex = i; ;) {
            const e = o.exec(t);
            if (null === e) return i;
            if ("!" === e[1]) {
                i = ze(e[2], "--") ? hg(t, !1, e.index + "!--".length) : hg(t, !0, e.index + 1);
                break
            }
            {
                r.lastIndex = o.lastIndex;
                const n = r.exec(t);
                if (h(n) || n.index !== o.lastIndex) continue;
                "/" === e[1] ? a -= 1 : xe(s, e[2]) || (a += 1), i = o.lastIndex + n[0].length;
                break
            }
        }
        return i
    }, vg = (e, t) => {
        const n = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g, o = e.schema;
        let r = ((e, t) => {
            const n = new RegExp(["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"), "gi");
            return t.replace(n, "")
        })(e.getTempAttrs(), t);
        const s = o.getVoidElements();
        let a;
        for (; a = n.exec(r);) {
            const e = n.lastIndex, t = a[0].length;
            let i;
            i = s[a[1]] ? e : bg(o, r, e), r = r.substring(0, e - t) + r.substring(i), n.lastIndex = e - t
        }
        return _r(r)
    }, yg = vg, Cg = e => {
        const t = or(e, "[data-mce-bogus]");
        V(t, (e => {
            "all" === Wt(e, "data-mce-bogus") ? oo(e) : ur(e) ? (Qn(e, un(er)), oo(e)) : ro(e)
        }))
    }, wg = e => {
        const t = or(e, "input");
        V(t, (e => {
            Yt(e, "name")
        }))
    }, xg = (e, t, n) => {
        let o;
        return o = "raw" === t.format ? Tt.trim(yg(e.serializer, n.innerHTML)) : "text" === t.format ? ((e, t) => {
            const n = e.getDoc(), o = In(mn(e.getBody())), r = cn("div", n);
            Vt(r, "data-mce-bogus", "all"), qn(r, {
                position: "fixed",
                left: "-9999999px",
                top: "0"
            }), io(r, t.innerHTML), Cg(r), wg(r);
            const s = (e => Pn(e) ? e : mn(Cn(e).dom.body))(o);
            eo(s, r);
            const a = _r(r.dom.innerText);
            return oo(r), a
        })(e, n) : "tree" === t.format ? e.serializer.serialize(n, t) : ((e, t) => {
            const n = gl(e),
                o = new RegExp(`^(<${n}[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/${n}>[\r\n]*|<br \\/>[\r\n]*)$`);
            return t.replace(o, "")
        })(e, e.serializer.serialize(n, t)), "text" !== t.format && !br(mn(n)) && m(o) ? Tt.trim(o) : o
    }, kg = Tt.makeMap, Sg = e => {
        const t = [], n = (e = e || {}).indent, o = kg(e.indent_before || ""), r = kg(e.indent_after || ""),
            s = Fs.getEncodeFunc(e.entity_encoding || "raw", e.entities), a = "xhtml" !== e.element_format;
        return {
            start: (e, i, l) => {
                if (n && o[e] && t.length > 0) {
                    const e = t[t.length - 1];
                    e.length > 0 && "\n" !== e && t.push("\n")
                }
                if (t.push("<", e), i) for (let e = 0, n = i.length; e < n; e++) {
                    const n = i[e];
                    t.push(" ", n.name, '="', s(n.value, !0), '"')
                }
                if (t[t.length] = !l || a ? ">" : " />", l && n && r[e] && t.length > 0) {
                    const e = t[t.length - 1];
                    e.length > 0 && "\n" !== e && t.push("\n")
                }
            }, end: e => {
                let o;
                t.push("</", e, ">"), n && r[e] && t.length > 0 && (o = t[t.length - 1], o.length > 0 && "\n" !== o && t.push("\n"))
            }, text: (e, n) => {
                e.length > 0 && (t[t.length] = n ? e : s(e))
            }, cdata: e => {
                t.push("<![CDATA[", e, "]]>")
            }, comment: e => {
                t.push("\x3c!--", e, "--\x3e")
            }, pi: (e, o) => {
                o ? t.push("<?", e, " ", s(o), "?>") : t.push("<?", e, "?>"), n && t.push("\n")
            }, doctype: e => {
                t.push("<!DOCTYPE", e, ">", n ? "\n" : "")
            }, reset: () => {
                t.length = 0
            }, getContent: () => t.join("").replace(/\n$/, "")
        }
    }, _g = (e = {}, t = Qs()) => {
        const n = Sg(e);
        return e.validate = !("validate" in e) || e.validate, {
            serialize: o => {
                const r = e.validate, s = {
                    3: e => {
                        var t;
                        n.text(null !== (t = e.value) && void 0 !== t ? t : "", e.raw)
                    }, 8: e => {
                        var t;
                        n.comment(null !== (t = e.value) && void 0 !== t ? t : "")
                    }, 7: e => {
                        n.pi(e.name, e.value)
                    }, 10: e => {
                        var t;
                        n.doctype(null !== (t = e.value) && void 0 !== t ? t : "")
                    }, 4: e => {
                        var t;
                        n.cdata(null !== (t = e.value) && void 0 !== t ? t : "")
                    }, 11: e => {
                        let t = e;
                        if (t = t.firstChild) do {
                            a(t)
                        } while (t = t.next)
                    }
                };
                n.reset();
                const a = e => {
                    var o;
                    const i = s[e.type];
                    if (i) i(e); else {
                        const s = e.name, i = s in t.getVoidElements();
                        let l = e.attributes;
                        if (r && l && l.length > 1) {
                            const n = [];
                            n.map = {};
                            const o = t.getElementRule(e.name);
                            if (o) {
                                for (let e = 0, t = o.attributesOrder.length; e < t; e++) {
                                    const t = o.attributesOrder[e];
                                    if (t in l.map) {
                                        const e = l.map[t];
                                        n.map[t] = e, n.push({name: t, value: e})
                                    }
                                }
                                for (let e = 0, t = l.length; e < t; e++) {
                                    const t = l[e].name;
                                    if (!(t in n.map)) {
                                        const e = l.map[t];
                                        n.map[t] = e, n.push({name: t, value: e})
                                    }
                                }
                                l = n
                            }
                        }
                        if (n.start(s, l, i), !i) {
                            let t = e.firstChild;
                            if (t) {
                                "pre" !== s && "textarea" !== s || 3 !== t.type || "\n" !== (null === (o = t.value) || void 0 === o ? void 0 : o[0]) || n.text("\n", !0);
                                do {
                                    a(t)
                                } while (t = t.next)
                            }
                            n.end(s)
                        }
                    }
                };
                return 1 !== o.type || e.inner ? 3 === o.type ? s[3](o) : s[11](o) : a(o), n.getContent()
            }
        }
    }, Eg = new Set;
    V(["margin", "margin-left", "margin-right", "margin-top", "margin-bottom", "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "border", "border-width", "border-style", "border-color", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "float", "position", "left", "right", "top", "bottom", "z-index", "display", "transform", "width", "max-width", "min-width", "height", "max-height", "min-height", "overflow", "overflow-x", "overflow-y", "text-overflow", "vertical-align", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function"], (e => {
        Eg.add(e)
    }));
    const Ng = ["font", "text-decoration", "text-emphasis"], Rg = (e, t) => ue(e.parseStyle(e.getAttrib(t, "style"))),
        Ag = (e, t, n) => {
            const o = Rg(e, t), r = Rg(e, n), s = o => {
                var r, s;
                const a = null !== (r = e.getStyle(t, o)) && void 0 !== r ? r : "",
                    i = null !== (s = e.getStyle(n, o)) && void 0 !== s ? s : "";
                return We(a) && We(i) && a !== i
            };
            return H(o, (e => {
                const t = t => H(t, (t => t === e));
                if (!t(r) && t(Ng)) {
                    const e = K(r, (e => H(Ng, (t => ze(e, t)))));
                    return H(e, s)
                }
                return s(e)
            }))
        }, Og = (e, t, n) => M.from(n.container()).filter(zo).exists((o => {
            const r = e ? 0 : -1;
            return t(o.data.charAt(n.offset() + r))
        })), Tg = O(Og, !0, bu), Bg = O(Og, !1, bu), Dg = e => {
            const t = e.container();
            return zo(t) && (0 === t.data.length || Sr(t.data) && _m.isBookmarkNode(t.parentNode))
        }, Pg = (e, t) => n => Cc(e ? 0 : -1, n).filter(t).isSome(), Lg = e => Ko(e) && "block" === Wn(mn(e), "display"),
        Mg = e => Yo(e) && !(e => To(e) && "all" === e.getAttribute("data-mce-bogus"))(e), Ig = Pg(!0, Lg),
        Fg = Pg(!1, Lg), Ug = Pg(!0, Jo), zg = Pg(!1, Jo), jg = Pg(!0, Io), Hg = Pg(!1, Io), $g = Pg(!0, Mg),
        Vg = Pg(!1, Mg),
        qg = (e, t) => ((e, t, n) => vn(t, e) ? Sn(e, (e => n(e) || bn(e, t))).slice(0, -1) : [])(e, t, P),
        Wg = (e, t) => [e].concat(qg(e, t)), Kg = (e, t, n) => Yc(e, t, n, Dg),
        Gg = (e, t) => Q(Wg(mn(t.container()), e), dr),
        Yg = (e, t, n) => Kg(e, t.dom, n).forall((e => Gg(t, n).fold((() => !yc(e, n, t.dom)), (o => !yc(e, n, t.dom) && vn(o, mn(e.container())))))),
        Xg = (e, t, n) => Gg(t, n).fold((() => Kg(e, t.dom, n).forall((e => !yc(e, n, t.dom)))), (t => Kg(e, t.dom, n).isNone())),
        Qg = O(Xg, !1), Jg = O(Xg, !0), Zg = O(Yg, !1), ep = O(Yg, !0), tp = e => Ac(e).exists(ur), np = (e, t, n) => {
            const o = K(Wg(mn(n.container()), t), dr), r = ie(o).getOr(t);
            return Kc(e, r.dom, n).filter(tp)
        }, op = (e, t) => Ac(t).exists(ur) || np(!0, e, t).isSome(),
        rp = (e, t) => (e => M.from(e.getNode(!0)).map(mn))(t).exists(ur) || np(!1, e, t).isSome(), sp = O(np, !1),
        ap = O(np, !0), ip = e => xi.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd(), lp = (e, t) => {
            const n = K(Wg(mn(t.container()), e), dr);
            return ie(n).getOr(e)
        }, dp = (e, t) => ip(t) ? Bg(t) : Bg(t) || Jc(lp(e, t).dom, t).exists(Bg),
        cp = (e, t) => ip(t) ? Tg(t) : Tg(t) || Qc(lp(e, t).dom, t).exists(Tg),
        up = e => Ac(e).bind((e => ko(e, Ft))).exists((e => (e => j(["pre", "pre-wrap"], e))(Wn(e, "white-space")))),
        mp = (e, t) => n => {
            return o = new Ro(n, e)[t](), C(o) && Yo(o) && lc(o);
            var o
        }, fp = (e, t) => !up(t) && (Qg(e, t) || Zg(e, t) || rp(e, t) || dp(e, t) || ((e, t) => {
            const n = Jc(e.dom, t).getOr(t), o = mp(e.dom, "prev");
            return t.isAtStart() && (o(t.container()) || o(n.container()))
        })(e, t)), gp = (e, t) => !up(t) && (Jg(e, t) || ep(e, t) || op(e, t) || cp(e, t) || ((e, t) => {
            const n = Qc(e.dom, t).getOr(t), o = mp(e.dom, "next");
            return t.isAtEnd() && (o(t.container()) || o(n.container()))
        })(e, t)), pp = (e, t) => fp(e, t) || gp(e, (e => {
            const t = e.container(), n = e.offset();
            return zo(t) && n < t.data.length ? xi(t, n + 1) : e
        })(t)), hp = (e, t) => hu(e.charAt(t)), bp = (e, t) => bu(e.charAt(t)), vp = (e, t, n) => {
            const o = t.data, r = xi(t, 0);
            return n || !hp(o, 0) || pp(e, r) ? !!(n && bp(o, 0) && fp(e, r)) && (t.data = tr + o.slice(1), !0) : (t.data = " " + o.slice(1), !0)
        }, yp = (e, t, n) => {
            const o = t.data, r = xi(t, o.length - 1);
            return n || !hp(o, o.length - 1) || pp(e, r) ? !!(n && bp(o, o.length - 1) && gp(e, r)) && (t.data = o.slice(0, -1) + tr, !0) : (t.data = o.slice(0, -1) + " ", !0)
        }, Cp = (e, t) => {
            const n = t.container();
            if (!zo(n)) return M.none();
            if ((e => {
                const t = e.container();
                return zo(t) && Ue(t.data, tr)
            })(t)) {
                const o = vp(e, n, !1) || (e => {
                    const t = e.data, n = (e => {
                        const t = e.split("");
                        return $(t, ((e, n) => hu(e) && n > 0 && n < t.length - 1 && vu(t[n - 1]) && vu(t[n + 1]) ? " " : e)).join("")
                    })(t);
                    return n !== t && (e.data = n, !0)
                })(n) || yp(e, n, !1);
                return Pt(o, t)
            }
            if (pp(e, t)) {
                const o = vp(e, n, !0) || yp(e, n, !0);
                return Pt(o, t)
            }
            return M.none()
        }, wp = (e, t, n) => {
            if (0 === n) return;
            const o = mn(e), r = xo(o, dr).getOr(o), s = e.data.slice(t, t + n),
                a = t + n >= e.data.length && gp(r, xi(e, e.data.length)), i = 0 === t && fp(r, xi(e, 0));
            e.replaceData(t, n, Jr(s, 4, i, a))
        }, xp = (e, t) => {
            const n = e.data.slice(t), o = n.length - Ve(n).length;
            wp(e, t, o)
        }, kp = (e, t) => {
            const n = e.data.slice(0, t), o = n.length - qe(n).length;
            wp(e, t - o, o)
        }, Sp = (e, t, n, o = !0) => {
            const r = qe(e.data).length, s = o ? e : t, a = o ? t : e;
            return o ? s.appendData(a.data) : s.insertData(0, a.data), oo(mn(a)), n && xp(s, r), s
        }, _p = (e, t) => ((e, t) => {
            const n = e.container(), o = e.offset();
            return !xi.isTextPosition(e) && n === t.parentNode && o > xi.before(t).offset()
        })(t, e) ? xi(t.container(), t.offset() - 1) : t, Ep = e => {
            return Wr(e.previousSibling) ? M.some((t = e.previousSibling, zo(t) ? xi(t, t.data.length) : xi.after(t))) : e.previousSibling ? eu(e.previousSibling) : M.none();
            var t
        }, Np = e => {
            return Wr(e.nextSibling) ? M.some((t = e.nextSibling, zo(t) ? xi(t, 0) : xi.before(t))) : e.nextSibling ? Zc(e.nextSibling) : M.none();
            var t
        },
        Rp = (e, t, n) => ((e, t, n) => e ? ((e, t) => Np(t).orThunk((() => Ep(t))).orThunk((() => ((e, t) => Qc(e, xi.after(t)).orThunk((() => Jc(e, xi.before(t)))))(e, t))))(t, n) : ((e, t) => Ep(t).orThunk((() => Np(t))).orThunk((() => ((e, t) => M.from(t.previousSibling ? t.previousSibling : t.parentNode).bind((t => Jc(e, xi.before(t)))).orThunk((() => Qc(e, xi.after(t)))))(e, t))))(t, n))(e, t, n).map(O(_p, n)),
        Ap = (e, t, n) => {
            n.fold((() => {
                e.focus()
            }), (n => {
                e.selection.setRng(n.toRange(), t)
            }))
        }, Op = (e, t) => t && xe(e.schema.getBlockElements(), Lt(t)), Tp = e => {
            if (os(e)) {
                const t = dn('<br data-mce-bogus="1">');
                return no(e), eo(e, t), M.some(xi.before(t.dom))
            }
            return M.none()
        }, Bp = (e, t, n, o = !0) => {
            const r = Rp(t, e.getBody(), n.dom), s = xo(n, O(Op, e), (a = e.getBody(), e => e.dom === a));
            var a;
            const i = ((e, t, n) => {
                const o = _n(e).filter(Ut), r = En(e).filter(Ut);
                return oo(e), (s = o, a = r, i = t, l = (e, t, o) => {
                    const r = e.dom, s = t.dom, a = r.data.length;
                    return Sp(r, s, n), o.container() === s ? xi(r, a) : o
                }, s.isSome() && a.isSome() && i.isSome() ? M.some(l(s.getOrDie(), a.getOrDie(), i.getOrDie())) : M.none()).orThunk((() => (n && (o.each((e => kp(e.dom, e.dom.length))), r.each((e => xp(e.dom, 0)))), t)));
                var s, a, i, l
            })(n, r, ((e, t) => xe(e.schema.getTextInlineElements(), Lt(t)))(e, n));
            e.dom.isEmpty(e.getBody()) ? (e.setContent(""), e.selection.setCursorLocation()) : s.bind(Tp).fold((() => {
                o && Ap(e, t, i)
            }), (n => {
                o && Ap(e, t, M.some(n))
            }))
        }, Dp = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/, Pp = (e, t) => pn(mn(t), zl(e)) && !ps(e.schema, t),
        Lp = (e, t, n) => {
            const o = ((e, t, n) => K(ba.DOM.getParents(n.container(), "*", t), e))(e, t, n);
            return M.from(o[o.length - 1])
        }, Mp = (e, t) => {
            const n = t.container(), o = t.offset();
            return e ? Ar(n) ? zo(n.nextSibling) ? xi(n.nextSibling, 0) : xi.after(n) : Br(t) ? xi(n, o + 1) : t : Ar(n) ? zo(n.previousSibling) ? xi(n.previousSibling, n.previousSibling.data.length) : xi.before(n) : Dr(t) ? xi(n, o - 1) : t
        }, Ip = O(Mp, !0), Fp = O(Mp, !1), Up = (e, t) => {
            const n = e => e.stopImmediatePropagation();
            e.on("beforeinput input", n, !0), e.getDoc().execCommand(t), e.off("beforeinput input", n)
        }, zp = e => Up(e, "Delete"), jp = e => mr(e) || gr(e),
        Hp = (e, t) => vn(e, t) ? ko(t, jp, (e => t => Bt(xn(t), e, bn))(e)) : M.none(), $p = (e, t = !0) => {
            e.dom.isEmpty(e.getBody()) && e.setContent("", {no_selection: !t})
        }, Vp = e => {
            var t;
            return (8 === Mt(t = e) || "#comment" === Lt(t) ? _n(e) : Bn(e)).bind(Vp).orThunk((() => M.some(e)))
        }, qp = (e, t, n, o = !0) => {
            var r;
            t.deleteContents();
            const s = Vp(n).getOr(n),
                a = mn(null !== (r = e.dom.getParent(s.dom, e.dom.isBlock)) && void 0 !== r ? r : n.dom);
            if (a.dom === e.getBody() ? $p(e, o) : os(a) && (wr(a), o && e.selection.setCursorLocation(a.dom, 0)), !bn(n, a)) {
                const e = Bt(xn(a), n) ? [] : xn(i = a).map(An).map((e => K(e, (e => !bn(i, e))))).getOr([]);
                V(e.concat(An(n)), (e => {
                    bn(e, a) || vn(e, a) || !os(e) || oo(e)
                }))
            }
            var i
        }, Wp = e => or(e, "td,th"), Kp = (e, t) => ({start: e, end: t}),
        Gp = Ki([{singleCellTable: ["rng", "cell"]}, {fullTable: ["table"]}, {partialTable: ["cells", "outsideDetails"]}, {multiTable: ["startTableCells", "endTableCells", "betweenRng"]}]),
        Yp = (e, t) => Eo(mn(e), "td,th", t), Xp = e => !bn(e.start, e.end),
        Qp = (e, t) => Au(e.start, t).bind((n => Au(e.end, t).bind((e => Pt(bn(n, e), n))))),
        Jp = e => t => Qp(t, e).map((e => ((e, t, n) => ({rng: e, table: t, cells: n}))(t, e, Wp(e)))),
        Zp = (e, t, n, o) => {
            if (n.collapsed || !e.forall(Xp)) return M.none();
            if (t.isSameTable) {
                const t = e.bind(Jp(o));
                return M.some({start: t, end: t})
            }
            {
                const e = Yp(n.startContainer, o), t = Yp(n.endContainer, o),
                    r = e.bind((e => t => Au(t, e).bind((e => le(Wp(e)).map((e => Kp(t, e))))))(o)).bind(Jp(o)),
                    s = t.bind((e => t => Au(t, e).bind((e => ie(Wp(e)).map((e => Kp(e, t))))))(o)).bind(Jp(o));
                return M.some({start: r, end: s})
            }
        }, eh = (e, t) => J(e, (e => bn(e, t))),
        th = e => Dt(eh(e.cells, e.rng.start), eh(e.cells, e.rng.end), ((t, n) => e.cells.slice(t, n + 1))),
        nh = (e, t) => {
            const {startTable: n, endTable: o} = t, r = e.cloneRange();
            return n.each((e => r.setStartAfter(e.dom))), o.each((e => r.setEndBefore(e.dom))), r
        }, oh = (e, t) => {
            const n = (e => t => bn(e, t))(e), o = ((e, t) => {
                const n = Yp(e.startContainer, t), o = Yp(e.endContainer, t);
                return Dt(n, o, Kp)
            })(t, n), r = ((e, t) => {
                const n = e => Au(mn(e), t), o = n(e.startContainer), r = n(e.endContainer), s = o.isSome(), a = r.isSome(),
                    i = Dt(o, r, bn).getOr(!1);
                return {
                    startTable: o,
                    endTable: r,
                    isStartInTable: s,
                    isEndInTable: a,
                    isSameTable: i,
                    isMultiTable: !i && s && a
                }
            })(t, n);
            return ((e, t, n) => e.exists((e => ((e, t) => !Xp(e) && Qp(e, t).exists((e => {
                const t = e.dom.rows;
                return 1 === t.length && 1 === t[0].cells.length
            })))(e, n) && Bu(e.start, t))))(o, t, n) ? o.map((e => Gp.singleCellTable(t, e.start))) : r.isMultiTable ? ((e, t, n, o) => Zp(e, t, n, o).bind((({
                                                                                                                                                                  start: e,
                                                                                                                                                                  end: o
                                                                                                                                                              }) => {
                const r = e.bind(th).getOr([]), s = o.bind(th).getOr([]);
                if (r.length > 0 && s.length > 0) {
                    const e = nh(n, t);
                    return M.some(Gp.multiTable(r, s, e))
                }
                return M.none()
            })))(o, r, t, n) : ((e, t, n, o) => Zp(e, t, n, o).bind((({start: e, end: t}) => e.or(t))).bind((e => {
                const {isSameTable: o} = t, r = th(e).getOr([]);
                if (o && e.cells.length === r.length) return M.some(Gp.fullTable(e.table));
                if (r.length > 0) {
                    if (o) return M.some(Gp.partialTable(r, M.none()));
                    {
                        const e = nh(n, t);
                        return M.some(Gp.partialTable(r, M.some({...t, rng: e})))
                    }
                }
                return M.none()
            })))(o, r, t, n)
        }, rh = e => V(e, (e => {
            Yt(e, "contenteditable"), wr(e)
        })), sh = (e, t, n, o) => {
            const r = n.cloneRange();
            o ? (r.setStart(n.startContainer, n.startOffset), r.setEndAfter(t.dom.lastChild)) : (r.setStartBefore(t.dom.firstChild), r.setEnd(n.endContainer, n.endOffset)), dh(e, r, t, !1).each((e => e()))
        }, ah = e => {
            const t = Ru(e), n = mn(e.selection.getNode());
            Xo(n.dom) && os(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0), t.length > 1 && H(t, (e => bn(e, n))) && Vt(n, "data-mce-selected", "1")
        }, ih = (e, t, n) => M.some((() => {
            const o = e.selection.getRng(), r = n.bind((({rng: n, isStartInTable: r}) => {
                const s = ((e, t) => M.from(e.dom.getParent(t, e.dom.isBlock)).map(mn))(e, r ? n.endContainer : n.startContainer);
                n.deleteContents(), ((e, t, n) => {
                    n.each((n => {
                        t ? oo(n) : (wr(n), e.selection.setCursorLocation(n.dom, 0))
                    }))
                })(e, r, s.filter(os));
                const a = r ? t[0] : t[t.length - 1];
                return sh(e, a, o, r), os(a) ? M.none() : M.some(r ? t.slice(1) : t.slice(0, -1))
            })).getOr(t);
            rh(r), ah(e)
        })), lh = (e, t, n, o) => M.some((() => {
            const r = e.selection.getRng(), s = t[0], a = n[n.length - 1];
            sh(e, s, r, !0), sh(e, a, r, !1);
            const i = os(s) ? t : t.slice(1), l = os(a) ? n : n.slice(0, -1);
            rh(i.concat(l)), o.deleteContents(), ah(e)
        })), dh = (e, t, n, o = !0) => M.some((() => {
            qp(e, t, n, o)
        })), ch = (e, t) => M.some((() => Bp(e, !1, t))), uh = (e, t) => Q(Wg(t, e), hr),
        mh = (e, t) => Q(Wg(t, e), Ht("caption")), fh = (e, t) => M.some((() => {
            wr(t), e.selection.setCursorLocation(t.dom, 0)
        })), gh = (e, t) => e ? jg(t) : Hg(t), ph = (e, t, n) => {
            const o = mn(e.getBody());
            return mh(o, n).fold((() => ((e, t, n, o) => {
                const r = xi.fromRangeStart(e.selection.getRng());
                return uh(n, o).bind((o => os(o) ? fh(e, o) : ((e, t, n, o, r) => Gc(n, e.getBody(), r).bind((e => uh(t, mn(e.getNode())).bind((e => bn(e, o) ? M.none() : M.some(S))))))(e, n, t, o, r)))
            })(e, t, o, n).orThunk((() => Pt(((e, t) => {
                const n = xi.fromRangeStart(e.selection.getRng());
                return gh(t, n) || Kc(t, e.getBody(), n).exists((e => gh(t, e)))
            })(e, t), S)))), (n => ((e, t, n, o) => {
                const r = xi.fromRangeStart(e.selection.getRng());
                return os(o) ? fh(e, o) : ((e, t, n, o, r) => Gc(n, e.getBody(), r).fold((() => M.some(S)), (s => ((e, t, n, o) => Zc(e.dom).bind((r => eu(e.dom).map((e => t ? n.isEqual(r) && o.isEqual(e) : n.isEqual(e) && o.isEqual(r))))).getOr(!0))(o, n, r, s) ? ((e, t) => fh(e, t))(e, o) : ((e, t, n) => mh(e, mn(n.getNode())).fold((() => M.some(S)), (e => Pt(!bn(e, t), S))))(t, o, s))))(e, n, t, o, r)
            })(e, t, o, n)))
        }, hh = (e, t) => {
            const n = mn(e.selection.getStart(!0)), o = Ru(e);
            return e.selection.isCollapsed() && 0 === o.length ? ph(e, t, n) : ((e, t, n) => {
                const o = mn(e.getBody()), r = e.selection.getRng();
                return 0 !== n.length ? ih(e, n, M.none()) : ((e, t, n, o) => mh(t, o).fold((() => ((e, t, n) => oh(t, n).bind((t => t.fold(O(dh, e), O(ch, e), O(ih, e), O(lh, e)))))(e, t, n)), (t => ((e, t) => fh(e, t))(e, t))))(e, o, r, t)
            })(e, n, o)
        }, bh = (e, t) => {
            let n = t;
            for (; n && n !== e;) {
                if (Go(n) || Yo(n)) return n;
                n = n.parentNode
            }
            return null
        }, vh = ["data-ephox-", "data-mce-", "data-alloy-", "data-snooker-", "_"], yh = Tt.each, Ch = e => {
            const t = e.dom, n = new Set(e.serializer.getTempAttrs()), o = e => H(vh, (t => ze(e, t))) || n.has(e);
            return {
                compare: (e, n) => {
                    if (e.nodeName !== n.nodeName || e.nodeType !== n.nodeType) return !1;
                    const r = e => {
                        const n = {};
                        return yh(t.getAttribs(e), (r => {
                            const s = r.nodeName.toLowerCase();
                            "style" === s || o(s) || (n[s] = t.getAttrib(e, s))
                        })), n
                    }, s = (e, t) => {
                        for (const n in e) if (xe(e, n)) {
                            const o = t[n];
                            if (v(o)) return !1;
                            if (e[n] !== o) return !1;
                            delete t[n]
                        }
                        for (const e in t) if (xe(t, e)) return !1;
                        return !0
                    };
                    if (To(e) && To(n)) {
                        if (!s(r(e), r(n))) return !1;
                        if (!s(t.parseStyle(t.getAttrib(e, "style")), t.parseStyle(t.getAttrib(n, "style")))) return !1
                    }
                    return !pu(e) && !pu(n)
                }, isAttributeInternal: o
            }
        }, wh = (e, t, n, o) => {
            const r = n.name;
            for (let t = 0, s = e.length; t < s; t++) {
                const s = e[t];
                if (s.name === r) {
                    const e = o.nodes[r];
                    e ? e.nodes.push(n) : o.nodes[r] = {filter: s, nodes: [n]}
                }
            }
            if (n.attributes) for (let e = 0, r = t.length; e < r; e++) {
                const r = t[e], s = r.name;
                if (s in n.attributes.map) {
                    const e = o.attributes[s];
                    e ? e.nodes.push(n) : o.attributes[s] = {filter: r, nodes: [n]}
                }
            }
        }, xh = (e, t) => {
            const n = (e, n) => {
                fe(e, (e => {
                    const o = de(e.nodes);
                    V(e.filter.callbacks, (r => {
                        for (let t = o.length - 1; t >= 0; t--) {
                            const r = o[t];
                            (n ? void 0 !== r.attr(e.filter.name) : r.name === e.filter.name) && !y(r.parent) || o.splice(t, 1)
                        }
                        o.length > 0 && r(o, e.filter.name, t)
                    }))
                }))
            };
            n(e.nodes, !1), n(e.attributes, !0)
        }, kh = (e, t, n, o = {}) => {
            const r = ((e, t, n) => {
                const o = {nodes: {}, attributes: {}};
                return n.firstChild && ((n, r) => {
                    let s = n;
                    for (; s = s.walk();) wh(e, t, s, o)
                })(n), o
            })(e, t, n);
            xh(r, o)
        }, Sh = (e, t, n) => {
            if (e.insert && t(n)) {
                const e = new pg("br", 1);
                e.attr("data-mce-bogus", "1"), n.empty().append(e)
            } else n.empty().append(new pg("#text", 3)).value = tr
        }, _h = (e, t) => {
            const n = null == e ? void 0 : e.firstChild;
            return C(n) && n === e.lastChild && n.name === t
        }, Eh = (e, t, n, o) => o.isEmpty(t, n, (t => ((e, t) => {
            const n = e.getElementRule(t.name);
            return !0 === (null == n ? void 0 : n.paddEmpty)
        })(e, t))), Nh = (e, t, n = e.parent) => {
            if (t.getSpecialElements()[e.name]) e.empty().remove(); else {
                const o = e.children();
                for (const e of o) n && !t.isValidChild(n.name, e.name) && Nh(e, t, n);
                e.unwrap()
            }
        }, Rh = (e, t, n = S) => {
            const o = t.getTextBlockElements(), r = t.getNonEmptyElements(), s = t.getWhitespaceElements(),
                a = Tt.makeMap("tr,td,th,tbody,thead,tfoot,table"), i = new Set;
            for (let l = 0; l < e.length; l++) {
                const d = e[l];
                let c, u, m;
                if (!d.parent || i.has(d)) continue;
                if (o[d.name] && "li" === d.parent.name) {
                    let e = d.next;
                    for (; e && o[e.name];) e.name = "li", i.add(e), d.parent.insert(e, d.parent), e = e.next;
                    d.unwrap();
                    continue
                }
                const f = [d];
                for (c = d.parent; c && !t.isValidChild(c.name, d.name) && !a[c.name]; c = c.parent) f.push(c);
                if (c && f.length > 1) if (t.isValidChild(c.name, d.name)) {
                    f.reverse(), u = f[0].clone(), n(u);
                    let e = u;
                    for (let o = 0; o < f.length - 1; o++) {
                        t.isValidChild(e.name, f[o].name) ? (m = f[o].clone(), n(m), e.append(m)) : m = e;
                        for (let e = f[o].firstChild; e && e !== f[o + 1];) {
                            const t = e.next;
                            m.append(e), e = t
                        }
                        e = m
                    }
                    Eh(t, r, s, u) ? c.insert(d, f[0], !0) : (c.insert(u, f[0], !0), c.insert(d, u)), c = f[0], (Eh(t, r, s, c) || _h(c, "br")) && c.empty().remove()
                } else Nh(d, t); else if (d.parent) {
                    if ("li" === d.name) {
                        let e = d.prev;
                        if (e && ("ul" === e.name || "ol" === e.name)) {
                            e.append(d);
                            continue
                        }
                        if (e = d.next, e && ("ul" === e.name || "ol" === e.name) && e.firstChild) {
                            e.insert(d, e.firstChild, !0);
                            continue
                        }
                        const t = new pg("ul", 1);
                        n(t), d.wrap(t);
                        continue
                    }
                    if (t.isValidChild(d.parent.name, "div") && t.isValidChild("div", d.name)) {
                        const e = new pg("div", 1);
                        n(e), d.wrap(e)
                    } else Nh(d, t)
                }
            }
        },
        Ah = (e, t, n = t.parent) => !(!n || !e.children[t.name] || e.isValidChild(n.name, t.name)) || !(!n || "a" !== t.name || !((e, t) => {
            let n = e;
            for (; n;) {
                if ("a" === n.name) return !0;
                n = n.parent
            }
            return !1
        })(n)), Oh = e => e.collapsed ? e : (e => {
            const t = xi.fromRangeStart(e), n = xi.fromRangeEnd(e), o = e.commonAncestorContainer;
            return Kc(!1, o, n).map((r => !yc(t, n, o) && yc(t, r, o) ? ((e, t, n, o) => {
                const r = document.createRange();
                return r.setStart(e, t), r.setEnd(n, o), r
            })(t.container(), t.offset(), r.container(), r.offset()) : e)).getOr(e)
        })(e), Th = (e, t) => {
            let n = t.firstChild, o = t.lastChild;
            return n && "meta" === n.name && (n = n.next), o && "mce_marker" === o.attr("id") && (o = o.prev), ((e, t) => {
                const n = e.getNonEmptyElements();
                return C(t) && (t.isEmpty(n) || ((e, t) => e.getBlockElements()[t.name] && (e => C(e.firstChild) && e.firstChild === e.lastChild)(t) && (e => "br" === e.name || e.value === tr)(t.firstChild))(e, t))
            })(e, o) && (o = null == o ? void 0 : o.prev), !(!n || n !== o || "ul" !== n.name && "ol" !== n.name)
        }, Bh = e => {
            return e.length > 0 && (!(n = e[e.length - 1]).firstChild || C(null == (t = n) ? void 0 : t.firstChild) && t.firstChild === t.lastChild && (e => e.data === tr || Wo(e))(t.firstChild)) ? e.slice(0, -1) : e;
            var t, n
        }, Dh = (e, t) => {
            const n = e.getParent(t, e.isBlock);
            return n && "LI" === n.nodeName ? n : null
        }, Ph = (e, t) => {
            const n = xi.after(e), o = $c(t).prev(n);
            return o ? o.toRange() : null
        }, Lh = (e, t, n, o) => {
            const r = ((e, t, n) => {
                    const o = t.serialize(n);
                    return (e => {
                        var t, n;
                        const o = e.firstChild, r = e.lastChild;
                        return o && "META" === o.nodeName && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o)), r && "mce_marker" === r.id && (null === (n = r.parentNode) || void 0 === n || n.removeChild(r)), e
                    })(e.createFragment(o))
                })(t, e, o), s = Dh(t, n.startContainer),
                a = Bh((i = r.firstChild, K(null !== (l = null == i ? void 0 : i.childNodes) && void 0 !== l ? l : [], (e => "LI" === e.nodeName))));
            var i, l;
            const d = t.getRoot(), c = e => {
                const o = xi.fromRangeStart(n), r = $c(t.getRoot()), a = 1 === e ? r.prev(o) : r.next(o),
                    i = null == a ? void 0 : a.getNode();
                return !i || Dh(t, i) !== s
            };
            return s ? c(1) ? ((e, t, n) => {
                const o = e.parentNode;
                return o && Tt.each(t, (t => {
                    o.insertBefore(t, e)
                })), ((e, t) => {
                    const n = xi.before(e), o = $c(t).next(n);
                    return o ? o.toRange() : null
                })(e, n)
            })(s, a, d) : c(2) ? ((e, t, n, o) => (o.insertAfter(t.reverse(), e), Ph(t[0], n)))(s, a, d, t) : ((e, t, n, o) => {
                const r = ((e, t) => {
                    const n = t.cloneRange(), o = t.cloneRange();
                    return n.setStartBefore(e), o.setEndAfter(e), [n.cloneContents(), o.cloneContents()]
                })(e, o), s = e.parentNode;
                return s && (s.insertBefore(r[0], e), Tt.each(t, (t => {
                    s.insertBefore(t, e)
                })), s.insertBefore(r[1], e), s.removeChild(e)), Ph(t[t.length - 1], n)
            })(s, a, d, n) : null
        }, Mh = ["pre"], Ih = Xo, Fh = (e, t, n) => {
            var o, r;
            const s = e.selection, a = e.dom, i = e.parser, l = n.merge, d = _g({validate: !0}, e.schema),
                c = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
            -1 === t.indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, c);
            let u = s.getRng();
            const m = u.startContainer, f = e.getBody();
            m === f && s.isCollapsed() && a.isBlock(f.firstChild) && ((e, t) => C(t) && !e.schema.getVoidElements()[t.nodeName])(e, f.firstChild) && a.isEmpty(f.firstChild) && (u = a.createRng(), u.setStart(f.firstChild, 0), u.setEnd(f.firstChild, 0), s.setRng(u)), s.isCollapsed() || (e => {
                const t = e.dom, n = Oh(e.selection.getRng());
                e.selection.setRng(n);
                const o = t.getParent(n.startContainer, Ih);
                ((e, t, n) => !!C(n) && n === e.getParent(t.endContainer, Ih) && Bu(mn(n), t))(t, n, o) ? dh(e, n, mn(o)) : n.startContainer === n.endContainer && n.endOffset - n.startOffset == 1 && zo(n.startContainer.childNodes[n.startOffset]) ? n.deleteContents() : e.getDoc().execCommand("Delete", !1)
            })(e);
            const g = s.getNode(), p = {context: g.nodeName.toLowerCase(), data: n.data, insert: !0}, h = i.parse(t, p);
            if (!0 === n.paste && Th(e.schema, h) && ((e, t) => !!Dh(e, t))(a, g)) return u = Lh(d, a, s.getRng(), h), u && s.setRng(u), t;
            !0 === n.paste && ((e, t, n, o) => {
                var r;
                const s = t.firstChild, a = t.lastChild, i = s === ("bookmark" === a.attr("data-mce-type") ? a.prev : a),
                    l = j(Mh, s.name);
                if (i && l) {
                    const t = "false" !== s.attr("contenteditable"),
                        a = (null === (r = e.getParent(n, e.isBlock)) || void 0 === r ? void 0 : r.nodeName.toLowerCase()) === s.name,
                        i = M.from(bh(o, n)).forall(Go);
                    return t && a && i
                }
                return !1
            })(a, h, g, e.getBody()) && (null === (o = h.firstChild) || void 0 === o || o.unwrap()), (e => {
                let t = e;
                for (; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
            })(h);
            let b = h.lastChild;
            if (b && "mce_marker" === b.attr("id")) {
                const t = b;
                for (b = b.prev; b; b = b.walk(!0)) if (3 === b.type || !a.isBlock(b.name)) {
                    b.parent && e.schema.isValidChild(b.parent.name, "span") && b.parent.insert(t, b, "br" === b.name);
                    break
                }
            }
            if (e._selectionOverrides.showBlockCaretContainer(g), p.invalid) {
                e.selection.setContent(c);
                let n, o = s.getNode();
                const l = e.getBody();
                for (Vo(o) ? o = n = l : n = o; n && n !== l;) o = n, n = n.parentNode;
                t = o === l ? l.innerHTML : a.getOuterHTML(o);
                const u = i.parse(t);
                for (let e = u; e; e = e.walk()) if ("mce_marker" === e.attr("id")) {
                    e.replace(h);
                    break
                }
                const m = h.children(), f = null !== (r = h.parent) && void 0 !== r ? r : u;
                h.unwrap();
                const g = K(m, (t => Ah(e.schema, t, f)));
                Rh(g, e.schema), kh(i.getNodeFilters(), i.getAttributeFilters(), u), t = d.serialize(u), o === l ? a.setHTML(l, t) : a.setOuterHTML(o, t)
            } else t = d.serialize(h), ((e, t, n) => {
                var o;
                if ("all" === n.getAttribute("data-mce-bogus")) null === (o = n.parentNode) || void 0 === o || o.insertBefore(e.dom.createFragment(t), n); else {
                    const o = n.firstChild, r = n.lastChild;
                    !o || o === r && "BR" === o.nodeName ? e.dom.setHTML(n, t) : e.selection.setContent(t, {no_events: !0})
                }
            })(e, t, g);
            var v;
            return ((e, t) => {
                const n = e.schema.getTextInlineElements(), o = e.dom;
                if (t) {
                    const t = e.getBody(), r = Ch(e);
                    Tt.each(o.select("*[data-mce-fragment]"), (e => {
                        if (C(n[e.nodeName.toLowerCase()]) && ((e, t) => te(Rg(e, t), (e => !(e => Eg.has(e))(e))))(o, e)) for (let n = e.parentElement; C(n) && n !== t && !Ag(o, e, n); n = n.parentElement) if (r.compare(n, e)) {
                            o.remove(e, !0);
                            break
                        }
                    }))
                }
            })(e, l), ((e, t) => {
                var n, o, r;
                let s;
                const a = e.dom, i = e.selection;
                if (!t) return;
                i.scrollIntoView(t);
                const l = bh(e.getBody(), t);
                if (l && "false" === a.getContentEditable(l)) return a.remove(t), void i.select(l);
                let d = a.createRng();
                const c = t.previousSibling;
                if (zo(c)) {
                    d.setStart(c, null !== (o = null === (n = c.nodeValue) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0);
                    const e = t.nextSibling;
                    zo(e) && (c.appendData(e.data), null === (r = e.parentNode) || void 0 === r || r.removeChild(e))
                } else d.setStartBefore(t), d.setEndBefore(t);
                const u = a.getParent(t, a.isBlock);
                a.remove(t), u && a.isEmpty(u) && (no(mn(u)), d.setStart(u, 0), d.setEnd(u, 0), Ih(u) || (e => !!e.getAttribute("data-mce-fragment"))(u) || !(s = (t => {
                    let n = xi.fromRangeStart(t);
                    return n = $c(e.getBody()).next(n), null == n ? void 0 : n.toRange()
                })(d)) ? a.add(u, a.create("br", {"data-mce-bogus": "1"})) : (d = s, a.remove(u))), i.setRng(d)
            })(e, a.get("mce_marker")), v = e.getBody(), Tt.each(v.getElementsByTagName("*"), (e => {
                e.removeAttribute("data-mce-fragment")
            })), ((e, t) => {
                M.from(e.getParent(t, "td,th")).map(mn).each(xr)
            })(a, s.getStart()), ((e, t, n) => {
                const o = Sn(mn(n), (e => bn(e, mn(t))));
                ae(o, o.length - 2).filter(Ft).fold((() => cs(e, t)), (t => cs(e, t.dom)))
            })(e.schema, e.getBody(), s.getStart()), t
        }, Uh = e => e instanceof pg, zh = (e, t, n) => {
            e.dom.setHTML(e.getBody(), t), !0 !== n && (e => {
                Zf(e) && Zc(e.getBody()).each((t => {
                    const n = t.getNode(), o = Io(n) ? Zc(n).getOr(t) : t;
                    e.selection.setRng(o.toRange())
                }))
            })(e)
        }, jh = (e, t) => ((e, t) => {
            const n = e.dom;
            return n.parentNode ? ((e, t) => Q(e.dom.childNodes, (e => t(mn(e)))).map(mn))(mn(n.parentNode), (n => !bn(e, n) && t(n))) : M.none()
        })(e, t).isSome(), Hh = e => w(e) ? e : P, $h = (e, t, n) => {
            const o = t(e), r = Hh(n);
            return o.orThunk((() => r(e) ? M.none() : ((e, t, n) => {
                let o = e.dom;
                const r = Hh(n);
                for (; o.parentNode;) {
                    o = o.parentNode;
                    const e = mn(o), n = t(e);
                    if (n.isSome()) return n;
                    if (r(e)) break
                }
                return M.none()
            })(e, t, r)))
        }, Vh = Gu, qh = (e, t, n) => {
            const o = e.formatter.get(n);
            if (o) for (let n = 0; n < o.length; n++) {
                const r = o[n];
                if (tm(r) && !1 === r.inherit && e.dom.is(t, r.selector)) return !0
            }
            return !1
        }, Wh = (e, t, n, o, r) => {
            const s = e.dom.getRoot();
            if (t === s) return !1;
            const a = e.dom.getParent(t, (t => !!qh(e, t, n) || t.parentNode === s || !!Yh(e, t, n, o, !0)));
            return !!Yh(e, a, n, o, r)
        },
        Kh = (e, t, n) => !(!nm(n) || !Vh(t, n.inline)) || !(!em(n) || !Vh(t, n.block)) || !!tm(n) && To(t) && e.is(t, n.selector),
        Gh = (e, t, n, o, r, s) => {
            const a = n[o], i = "attributes" === o;
            if (w(n.onmatch)) return n.onmatch(t, n, o);
            if (a) if (_e(a)) {
                for (let n = 0; n < a.length; n++) if (i ? e.getAttrib(t, a[n]) : Xu(e, t, a[n])) return !0
            } else for (const o in a) if (xe(a, o)) {
                const l = i ? e.getAttrib(t, o) : Xu(e, t, o), d = Ku(a[o], s), c = y(l) || Ke(l);
                if (c && y(d)) continue;
                if (r && c && !n.exact) return !1;
                if ((!r || n.exact) && !Vh(l, Yu(d, o))) return !1
            }
            return !0
        }, Yh = (e, t, n, o, r) => {
            const s = e.formatter.get(n), a = e.dom;
            if (s && To(t)) for (let n = 0; n < s.length; n++) {
                const i = s[n];
                if (Kh(e.dom, t, i) && Gh(a, t, i, "attributes", r, o) && Gh(a, t, i, "styles", r, o)) {
                    const n = i.classes;
                    if (n) for (let r = 0; r < n.length; r++) if (!e.dom.hasClass(t, Ku(n[r], o))) return;
                    return i
                }
            }
        }, Xh = (e, t, n, o, r) => {
            if (o) return Wh(e, o, t, n, r);
            if (o = e.selection.getNode(), Wh(e, o, t, n, r)) return !0;
            const s = e.selection.getStart();
            return !(s === o || !Wh(e, s, t, n, r))
        }, Qh = kr, Jh = e => (e => {
            const t = [];
            let n = e;
            for (; n;) {
                if (zo(n) && n.data !== Qh || n.childNodes.length > 1) return [];
                To(n) && t.push(n), n = n.firstChild
            }
            return t
        })(e).length > 0, Zh = e => {
            if (e) {
                const t = new Ro(e, e);
                for (let e = t.current(); e; e = t.next()) if (zo(e)) return e
            }
            return null
        }, eb = e => {
            const t = cn("span");
            return qt(t, {id: tu, "data-mce-bogus": "1", "data-mce-type": "format-caret"}), e && eo(t, un(Qh)), t
        }, tb = (e, t, n = !0) => {
            const o = e.dom, r = e.selection;
            if (Jh(t)) Bp(e, !1, mn(t), n); else {
                const e = r.getRng(), n = o.getParent(t, o.isBlock), s = e.startContainer, a = e.startOffset,
                    i = e.endContainer, l = e.endOffset, d = (e => {
                        const t = Zh(e);
                        return t && t.data.charAt(0) === Qh && t.deleteData(0, 1), t
                    })(t);
                o.remove(t, !0), s === d && a > 0 && e.setStart(d, a - 1), i === d && l > 0 && e.setEnd(d, l - 1), n && o.isEmpty(n) && wr(mn(n)), r.setRng(e)
            }
        }, nb = (e, t, n = !0) => {
            const o = e.dom, r = e.selection;
            if (t) tb(e, t, n); else if (!(t = ou(e.getBody(), r.getStart()))) for (; t = o.get(tu);) tb(e, t, !1)
        }, ob = (e, t) => (e.appendChild(t), t), rb = (e, t) => {
            var n;
            const o = G(e, ((e, t) => ob(e, t.cloneNode(!1))), t),
                r = null !== (n = o.ownerDocument) && void 0 !== n ? n : document;
            return ob(o, r.createTextNode(Qh))
        }, sb = (e, t, n, o) => {
            const a = e.dom, i = e.selection;
            let l = !1;
            const d = e.formatter.get(t);
            if (!d) return;
            const c = i.getRng(), u = c.startContainer, m = c.startOffset;
            let f = u;
            zo(u) && (m !== u.data.length && (l = !0), f = f.parentNode);
            const g = [];
            let h;
            for (; f;) {
                if (Yh(e, f, t, n, o)) {
                    h = f;
                    break
                }
                f.nextSibling && (l = !0), g.push(f), f = f.parentNode
            }
            if (h) if (l) {
                const r = i.getBookmark();
                c.collapse(!0);
                let s = vm(a, c, d, !0);
                s = uf(s), e.formatter.remove(t, n, s, o), i.moveToBookmark(r)
            } else {
                const l = ou(e.getBody(), h), d = eb(!1).dom;
                ((e, t, n) => {
                    var o, r;
                    const s = e.dom, a = s.getParent(n, O($u, e.schema));
                    a && s.isEmpty(a) ? null === (o = n.parentNode) || void 0 === o || o.replaceChild(t, n) : ((e => {
                        const t = or(e, "br"), n = K((e => {
                            const t = [];
                            let n = e.dom;
                            for (; n;) t.push(mn(n)), n = n.lastChild;
                            return t
                        })(e).slice(-1), ur);
                        t.length === n.length && V(n, oo)
                    })(mn(n)), s.isEmpty(n) ? null === (r = n.parentNode) || void 0 === r || r.replaceChild(t, n) : s.insertAfter(t, n))
                })(e, d, null != l ? l : h);
                const c = ((e, t, n, o, a, i) => {
                    const l = e.formatter, d = e.dom, c = K(ue(l.get()), (e => e !== o && !Ue(e, "removeformat"))),
                        u = ((e, t, n) => Y(n, ((n, o) => {
                            const r = ((e, t) => Zu(e, t, (e => {
                                const t = e => w(e) || e.length > 1 && "%" === e.charAt(0);
                                return H(["styles", "attributes"], (n => we(e, n).exists((e => {
                                    const n = p(e) ? e : Ce(e);
                                    return H(n, t)
                                }))))
                            })))(e, o);
                            return e.formatter.matchNode(t, o, {}, r) ? n.concat([o]) : n
                        }), []))(e, n, c);
                    if (K(u, (t => !((e, t, n) => {
                        const o = ["inline", "block", "selector", "attributes", "styles", "classes"],
                            a = e => ve(e, ((e, t) => H(o, (e => e === t))));
                        return Zu(e, t, (t => {
                            const o = a(t);
                            return Zu(e, n, (e => {
                                const t = a(e);
                                return ((e, t, n = s) => r(n).eq(e, t))(o, t)
                            }))
                        }))
                    })(e, t, o))).length > 0) {
                        const e = n.cloneNode(!1);
                        return d.add(t, e), l.remove(o, a, e, i), d.remove(e), M.some(e)
                    }
                    return M.none()
                })(e, d, h, t, n, o), u = rb(g.concat(c.toArray()), d);
                l && tb(e, l, !1), i.setCursorLocation(u, 1), a.isEmpty(h) && a.remove(h)
            }
        }, ab = (e, t) => {
            const n = e.schema.getTextInlineElements();
            return xe(n, Lt(t)) && !nu(t.dom) && !Mo(t.dom)
        }, ib = {}, lb = Do(["pre"]);
    ib.pre || (ib.pre = []), ib.pre.push((e => {
        if (!e.selection.getRng().collapsed) {
            const t = e.selection.getSelectedBlocks(), n = K(K(t, lb), (e => t => {
                const n = t.previousSibling;
                return lb(n) && j(e, n)
            })(t));
            V(n, (e => {
                ((e, t) => {
                    const n = mn(t), o = Cn(n).dom;
                    oo(n), to(mn(e), [cn("br", o), cn("br", o), ...An(n)])
                })(e.previousSibling, e)
            }))
        }
    }));
    const db = ["fontWeight", "fontStyle", "color", "fontSize", "fontFamily"], cb = (e, t) => {
            const n = e.get(t);
            return p(n) ? Q(n, (e => nm(e) && "span" === e.inline && (e => f(e.styles) && H(ue(e.styles), (e => j(db, e))))(e))) : M.none()
        }, ub = (e, t) => Jc(t, xi.fromRangeStart(e)).isNone(),
        mb = (e, t) => !1 === Qc(t, xi.fromRangeEnd(e)).exists((e => !Wo(e.getNode()) || Qc(t, e).isSome())),
        fb = e => t => Zo(t) && "false" !== e.getContentEditableParent(t),
        gb = e => K(e.getSelectedBlocks(), fb(e.dom)), pb = Tt.each, hb = e => To(e) && !pu(e) && !nu(e) && !Mo(e),
        bb = (e, t) => {
            for (let n = e; n; n = n[t]) {
                if (zo(n) && We(n.data)) return e;
                if (To(n) && !pu(n)) return n
            }
            return e
        }, vb = (e, t, n) => {
            const o = Ch(e), r = To(t) && Uu(t), s = To(n) && Uu(n);
            if (r && s) {
                const r = bb(t, "previousSibling"), s = bb(n, "nextSibling");
                if (o.compare(r, s)) {
                    for (let e = r.nextSibling; e && e !== s;) {
                        const t = e;
                        e = e.nextSibling, r.appendChild(t)
                    }
                    return e.dom.remove(s), Tt.each(Tt.grep(s.childNodes), (e => {
                        r.appendChild(e)
                    })), r
                }
            }
            return n
        }, yb = (e, t, n, o) => {
            var r;
            if (o && !1 !== t.merge_siblings) {
                const t = null !== (r = vb(e, Hu(o), o)) && void 0 !== r ? r : o;
                vb(e, t, Hu(t, !0))
            }
        }, Cb = (e, t, n) => {
            pb(e.childNodes, (e => {
                hb(e) && (t(e) && n(e), e.hasChildNodes() && Cb(e, t, n))
            }))
        }, wb = (e, t) => n => !(!n || !Xu(e, n, t)), xb = (e, t, n) => o => {
            e.setStyle(o, t, n), "" === o.getAttribute("style") && o.removeAttribute("style"), ((e, t) => {
                "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0)
            })(e, o)
        }, kb = Ki([{keep: []}, {rename: ["name"]}, {removed: []}]), Sb = /^(src|href|style)$/, _b = Tt.each, Eb = Gu,
        Nb = (e, t, n) => e.isChildOf(t, n) && t !== n && !e.isBlock(n), Rb = (e, t, n) => {
            let o = t[n ? "startContainer" : "endContainer"], r = t[n ? "startOffset" : "endOffset"];
            if (To(o)) {
                const e = o.childNodes.length - 1;
                !n && r && r--, o = o.childNodes[r > e ? e : r]
            }
            return zo(o) && n && r >= o.data.length && (o = new Ro(o, e.getBody()).next() || o), zo(o) && !n && 0 === r && (o = new Ro(o, e.getBody()).prev() || o), o
        }, Ab = (e, t) => {
            const n = t ? "firstChild" : "lastChild", o = e[n];
            return (e => /^(TR|TH|TD)$/.test(e.nodeName))(e) && o ? "TR" === e.nodeName && o[n] || o : e
        }, Ob = (e, t, n, o) => {
            var r;
            const s = e.create(n, o);
            return null === (r = t.parentNode) || void 0 === r || r.insertBefore(s, t), s.appendChild(t), s
        }, Tb = (e, t, n, o, r) => {
            const s = mn(t), a = mn(e.create(o, r)), i = n ? Rn(s) : Nn(s);
            return to(a, i), n ? (Qn(s, a), Zn(a, s)) : (Jn(s, a), eo(a, s)), a.dom
        }, Bb = (e, t, n) => {
            const o = t.parentNode;
            let r;
            const s = e.dom, a = gl(e);
            em(n) && o === s.getRoot() && (n.list_block && Eb(t, n.list_block) || V(de(t.childNodes), (t => {
                Vu(e, a, t.nodeName.toLowerCase()) ? r ? r.appendChild(t) : (r = Ob(s, t, a), s.setAttribs(r, pl(e))) : r = null
            }))), (e => tm(e) && nm(e) && Bt(we(e, "mixed"), !0))(n) && !Eb(n.inline, t) || s.remove(t, !0)
        }, Db = (e, t, n) => x(e) ? {name: t, value: null} : {name: e, value: Ku(t, n)}, Pb = (e, t) => {
            "" === e.getAttrib(t, "style") && (t.removeAttribute("style"), t.removeAttribute("data-mce-style"))
        }, Lb = (e, t, n, o, r) => {
            let s = !1;
            _b(n.styles, ((a, i) => {
                const {name: l, value: d} = Db(i, a, o), c = Yu(d, l);
                (n.remove_similar || h(d) || !To(r) || Eb(Xu(e, r, l), c)) && e.setStyle(t, l, ""), s = !0
            })), s && Pb(e, t)
        }, Mb = (e, t, n, o, r) => {
            const s = e.dom, a = Ch(e), i = e.schema;
            if (nm(t) && fs(i, t.inline) && ps(i, o) && o.parentElement === e.getBody()) return Bb(e, o, t), kb.removed();
            if (!t.ceFalseOverride && o && "false" === s.getContentEditableParent(o)) return kb.keep();
            if (o && !Kh(s, o, t) && !((e, t) => t.links && "A" === e.nodeName)(o, t)) return kb.keep();
            const l = o, d = t.preserve_attributes;
            if (nm(t) && "all" === t.remove && p(d)) {
                const e = K(s.getAttribs(l), (e => j(d, e.name.toLowerCase())));
                if (s.removeAllAttribs(l), V(e, (e => s.setAttrib(l, e.name, e.value))), e.length > 0) return kb.rename("span")
            }
            if ("all" !== t.remove) {
                Lb(s, l, t, n, r), _b(t.attributes, ((e, o) => {
                    const {name: a, value: i} = Db(o, e, n);
                    if (t.remove_similar || h(i) || !To(r) || Eb(s.getAttrib(r, a), i)) {
                        if ("class" === a) {
                            const e = s.getAttrib(l, a);
                            if (e) {
                                let t = "";
                                if (V(e.split(/\s+/), (e => {
                                    /mce\-\w+/.test(e) && (t += (t ? " " : "") + e)
                                })), t) return void s.setAttrib(l, a, t)
                            }
                        }
                        if (Sb.test(a) && l.removeAttribute("data-mce-" + a), "style" === a && Do(["li"])(l) && "none" === s.getStyle(l, "list-style-type")) return l.removeAttribute(a), void s.setStyle(l, "list-style-type", "none");
                        "class" === a && l.removeAttribute("className"), l.removeAttribute(a)
                    }
                })), _b(t.classes, (e => {
                    e = Ku(e, n), To(r) && !s.hasClass(r, e) || s.removeClass(l, e)
                }));
                const e = s.getAttribs(l);
                for (let t = 0; t < e.length; t++) {
                    const n = e[t].nodeName;
                    if (!a.isAttributeInternal(n)) return kb.keep()
                }
            }
            return "none" !== t.remove ? (Bb(e, l, t), kb.removed()) : kb.keep()
        }, Ib = (e, t, n, o, r) => Mb(e, t, n, o, r).fold(P, (t => (e.dom.rename(o, t), !0)), L),
        Fb = (e, t, n, o) => Mb(e, t, n, o, o).fold(N(o), (t => (e.dom.createFragment().appendChild(o), e.dom.rename(o, t))), N(null)),
        Ub = (e, t, n, o, r) => {
            const s = e.formatter.get(t), a = s[0], i = e.dom, l = e.selection, d = o => {
                const i = ((e, t, n, o, r) => {
                    let s;
                    return t.parentNode && V(Ju(e.dom, t.parentNode).reverse(), (t => {
                        if (!s && To(t) && "_start" !== t.id && "_end" !== t.id) {
                            const a = Yh(e, t, n, o, r);
                            a && !1 !== a.split && (s = t)
                        }
                    })), s
                })(e, o, t, n, r);
                return ((e, t, n, o, r, s, a, i) => {
                    var l, d;
                    let c, u;
                    const m = e.dom;
                    if (n) {
                        const s = n.parentNode;
                        for (let n = o.parentNode; n && n !== s; n = n.parentNode) {
                            let o = m.clone(n, !1);
                            for (let n = 0; n < t.length && (o = Fb(e, t[n], i, o), null !== o); n++) ;
                            o && (c && o.appendChild(c), u || (u = o), c = o)
                        }
                        a.mixed && m.isBlock(n) || (o = null !== (l = m.split(n, o)) && void 0 !== l ? l : o), c && u && (null === (d = r.parentNode) || void 0 === d || d.insertBefore(c, r), u.appendChild(r), nm(a) && yb(e, a, 0, c))
                    }
                    return o
                })(e, s, i, o, o, 0, a, n)
            }, c = t => H(s, (o => Ib(e, o, n, t, t))), u = t => {
                const n = de(t.childNodes), o = c(t) || H(s, (e => Kh(i, t, e))), r = t.parentNode;
                if (!o && C(r) && om(a) && c(r), a.deep && n.length) for (let e = 0; e < n.length; e++) u(n[e]);
                V(["underline", "line-through", "overline"], (n => {
                    To(t) && e.dom.getStyle(t, "text-decoration") === n && t.parentNode && Qu(i, t.parentNode) === n && Ib(e, {
                        deep: !1,
                        exact: !0,
                        inline: "span",
                        styles: {textDecoration: n}
                    }, void 0, t)
                }))
            }, m = e => {
                const t = i.get(e ? "_start" : "_end");
                if (t) {
                    let n = t[e ? "firstChild" : "lastChild"];
                    return (e => pu(e) && To(e) && ("_start" === e.id || "_end" === e.id))(n) && (n = n[e ? "firstChild" : "lastChild"]), zo(n) && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling), i.remove(t, !0), n
                }
                return null
            }, f = t => {
                let n, o, r = vm(i, t, s, t.collapsed);
                if (a.split) {
                    if (r = uf(r), n = Rb(e, r, !0), o = Rb(e, r), n !== o) {
                        if (n = Ab(n, !0), o = Ab(o, !1), Nb(i, n, o)) {
                            const e = M.from(n.firstChild).getOr(n);
                            return d(Tb(i, e, !0, "span", {id: "_start", "data-mce-type": "bookmark"})), void m(!0)
                        }
                        if (Nb(i, o, n)) {
                            const e = M.from(o.lastChild).getOr(o);
                            return d(Tb(i, e, !1, "span", {id: "_end", "data-mce-type": "bookmark"})), void m(!1)
                        }
                        n = Ob(i, n, "span", {
                            id: "_start",
                            "data-mce-type": "bookmark"
                        }), o = Ob(i, o, "span", {id: "_end", "data-mce-type": "bookmark"});
                        const e = i.createRng();
                        e.setStartAfter(n), e.setEndBefore(o), ym(i, e, (e => {
                            V(e, (e => {
                                pu(e) || pu(e.parentNode) || d(e)
                            }))
                        })), d(n), d(o), n = m(!0), o = m()
                    } else n = o = d(n);
                    r.startContainer = n.parentNode ? n.parentNode : n, r.startOffset = i.nodeIndex(n), r.endContainer = o.parentNode ? o.parentNode : o, r.endOffset = i.nodeIndex(o) + 1
                }
                ym(i, r, (e => {
                    V(e, u)
                }))
            };
            if (o) {
                if (Iu(o)) {
                    const e = i.createRng();
                    e.setStartBefore(o), e.setEndAfter(o), f(e)
                } else f(o);
                Am(e, t, o, n)
            } else l.isCollapsed() && nm(a) && !Ru(e).length ? sb(e, t, n, r) : (zu(e, (() => Lu(e, f)), (o => nm(a) && Xh(e, t, n, o))), e.nodeChanged()), ((e, t, n) => {
                "removeformat" === t ? V(gb(e.selection), (t => {
                    V(db, (n => e.dom.setStyle(t, n, ""))), Pb(e.dom, t)
                })) : cb(e.formatter, t).each((t => {
                    V(gb(e.selection), (o => Lb(e.dom, o, t, n, null)))
                }))
            })(e, t, n), Am(e, t, o, n)
        }, zb = Tt.each, jb = Tt.each, Hb = (e, t, n, o) => {
            if (jb(n.styles, ((n, r) => {
                e.setStyle(t, r, Ku(n, o))
            })), n.styles) {
                const n = e.getAttrib(t, "style");
                n && e.setAttrib(t, "data-mce-style", n)
            }
        }, $b = (e, t, n, o) => {
            const r = e.formatter.get(t), s = r[0], a = !o && e.selection.isCollapsed(), i = e.dom, l = e.selection,
                d = (e, t = s) => {
                    w(t.onformat) && t.onformat(e, t, n, o), Hb(i, e, t, n), jb(t.attributes, ((t, o) => {
                        i.setAttrib(e, o, Ku(t, n))
                    })), jb(t.classes, (t => {
                        const o = Ku(t, n);
                        i.hasClass(e, o) || i.addClass(e, o)
                    }))
                }, c = (e, t) => {
                    let n = !1;
                    return jb(e, (e => !(!tm(e) || ("false" !== i.getContentEditable(t) || e.ceFalseOverride) && (!C(e.collapsed) || e.collapsed === a) && i.is(t, e.selector) && !nu(t) && (d(t, e), n = !0, 1)))), n
                }, u = e => {
                    if (m(e)) {
                        const t = i.create(e);
                        return d(t), t
                    }
                    return null
                }, f = (o, a, i) => {
                    const l = [];
                    let m = !0;
                    const f = s.inline || s.block, g = u(f);
                    ym(o, a, (a => {
                        let u;
                        const p = a => {
                            let h = !1, b = m, v = !1;
                            const y = a.parentNode, w = y.nodeName.toLowerCase(), x = o.getContentEditable(a);
                            C(x) && (b = m, m = "true" === x, h = !0, v = Wu(e, a));
                            const k = m && !h;
                            if (Wo(a) && !((e, t, n, o) => {
                                if (Zl(e) && nm(t) && n.parentNode) {
                                    const t = Ys(e.schema), r = jh(mn(n), (e => nu(e.dom)));
                                    return ke(t, o) && os(mn(n.parentNode), !1) && !r
                                }
                                return !1
                            })(e, s, a, w)) return u = null, void (em(s) && o.remove(a));
                            if ((o => (e => em(e) && !0 === e.wrapper)(s) && Yh(e, o, t, n))(a)) u = null; else {
                                if (((t, n, o) => {
                                    const r = (e => em(e) && !0 !== e.wrapper)(s) && $u(e.schema, t) && Vu(e, n, f);
                                    return o && r
                                })(a, w, k)) {
                                    const e = o.rename(a, f);
                                    return d(e), l.push(e), void (u = null)
                                }
                                if (tm(s)) {
                                    let e = c(r, a);
                                    if (!e && C(y) && om(s) && (e = c(r, y)), !nm(s) || e) return void (u = null)
                                }
                                C(g) && ((t, n, r, a) => {
                                    const l = t.nodeName.toLowerCase(), d = Vu(e, f, l) && Vu(e, n, f),
                                        c = !i && zo(t) && Sr(t.data), u = nu(t), m = !nm(s) || !o.isBlock(t);
                                    return (r || a) && d && !c && !u && m
                                })(a, w, k, v) ? (u || (u = o.clone(g, !1), y.insertBefore(u, a), l.push(u)), v && h && (m = b), u.appendChild(a)) : (u = null, V(de(a.childNodes), p), h && (m = b), u = null)
                            }
                        };
                        V(a, p)
                    })), !0 === s.links && V(l, (e => {
                        const t = e => {
                            "A" === e.nodeName && d(e, s), V(de(e.childNodes), t)
                        };
                        t(e)
                    })), V(l, (a => {
                        const i = (e => {
                            let t = 0;
                            return V(e.childNodes, (e => {
                                (e => C(e) && zo(e) && 0 === e.length)(e) || pu(e) || t++
                            })), t
                        })(a);
                        !(l.length > 1) && o.isBlock(a) || 0 !== i ? (nm(s) || em(s) && s.wrapper) && (s.exact || 1 !== i || (a = (e => {
                            const t = Q(e.childNodes, Fu).filter((e => "false" !== o.getContentEditable(e) && Kh(o, e, s)));
                            return t.map((t => {
                                const n = o.clone(t, !1);
                                return d(n), o.replace(n, e, !0), o.remove(t, !0), n
                            })).getOr(e)
                        })(a)), ((e, t, n, o) => {
                            zb(t, (t => {
                                nm(t) && zb(e.dom.select(t.inline, o), (o => {
                                    hb(o) && Ib(e, t, n, o, t.exact ? o : null)
                                })), ((e, t, n) => {
                                    if (t.clear_child_styles) {
                                        const o = t.links ? "*:not(a)" : "*";
                                        pb(e.select(o, n), (n => {
                                            hb(n) && Uu(n) && pb(t.styles, ((t, o) => {
                                                e.setStyle(n, o, "")
                                            }))
                                        }))
                                    }
                                })(e.dom, t, o)
                            }))
                        })(e, r, n, a), ((e, t, n, o, r) => {
                            const s = r.parentNode;
                            Yh(e, s, n, o) && Ib(e, t, o, r) || t.merge_with_parents && s && e.dom.getParent(s, (s => !!Yh(e, s, n, o) && (Ib(e, t, o, r), !0)))
                        })(e, s, t, n, a), ((e, t, n, o) => {
                            if (t.styles && t.styles.backgroundColor) {
                                const r = wb(e, "fontSize");
                                Cb(o, (e => r(e) && Uu(e)), xb(e, "backgroundColor", Ku(t.styles.backgroundColor, n)))
                            }
                        })(o, s, n, a), ((e, t, n, o) => {
                            const r = t => {
                                if (To(t) && To(t.parentNode) && Uu(t)) {
                                    const n = Qu(e, t.parentNode);
                                    e.getStyle(t, "color") && n ? e.setStyle(t, "text-decoration", n) : e.getStyle(t, "text-decoration") === n && e.setStyle(t, "text-decoration", null)
                                }
                            };
                            t.styles && (t.styles.color || t.styles.textDecoration) && (Tt.walk(o, r, "childNodes"), r(o))
                        })(o, s, 0, a), ((e, t, n, o) => {
                            if (nm(t) && ("sub" === t.inline || "sup" === t.inline)) {
                                const n = wb(e, "fontSize");
                                Cb(o, (e => n(e) && Uu(e)), xb(e, "fontSize", ""));
                                const r = K(e.select("sup" === t.inline ? "sub" : "sup", o), Uu);
                                e.remove(r, !0)
                            }
                        })(o, s, 0, a), yb(e, s, 0, a)) : o.remove(a, !0)
                    }))
                }, g = Iu(o) ? o : l.getNode();
            if ("false" === i.getContentEditable(g) && !Wu(e, g)) return c(r, o = g), void Rm(e, t, o, n);
            if (s) {
                if (o) if (Iu(o)) {
                    if (!c(r, o)) {
                        const e = i.createRng();
                        e.setStartBefore(o), e.setEndAfter(o), f(i, vm(i, e, r), !0)
                    }
                } else f(i, o, !0); else a && nm(s) && !Ru(e).length ? ((e, t, n) => {
                    let o;
                    const r = e.selection, s = e.formatter.get(t);
                    if (!s) return;
                    const a = r.getRng();
                    let i = a.startOffset;
                    const l = a.startContainer.nodeValue;
                    o = ou(e.getBody(), r.getStart());
                    const d = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                    if (l && i > 0 && i < l.length && d.test(l.charAt(i)) && d.test(l.charAt(i - 1))) {
                        const o = r.getBookmark();
                        a.collapse(!0);
                        let i = vm(e.dom, a, s);
                        i = uf(i), e.formatter.apply(t, n, i), r.moveToBookmark(o)
                    } else {
                        let s = o ? Zh(o) : null;
                        o && (null == s ? void 0 : s.data) === Qh || (c = e.getDoc(), u = eb(!0).dom, o = c.importNode(u, !0), s = o.firstChild, a.insertNode(o), i = 1), e.formatter.apply(t, n, o), r.setCursorLocation(s, i)
                    }
                    var c, u
                })(e, t, n) : (l.setRng(Oh(l.getRng())), zu(e, (() => {
                    Lu(e, ((e, t) => {
                        const n = t ? e : vm(i, e, r);
                        f(i, n, !1)
                    }))
                }), L), e.nodeChanged()), cb(e.formatter, t).each((t => {
                    V((e => K((e => {
                        const t = e.getSelectedBlocks(), n = e.getRng();
                        if (e.isCollapsed()) return [];
                        if (1 === t.length) return ub(n, t[0]) && mb(n, t[0]) ? t : [];
                        {
                            const e = ie(t).filter((e => ub(n, e))).toArray(), o = le(t).filter((e => mb(n, e))).toArray(),
                                r = t.slice(1, -1);
                            return e.concat(r).concat(o)
                        }
                    })(e), fb(e.dom)))(e.selection), (e => Hb(i, e, t, n)))
                }));
                ((e, t) => {
                    xe(ib, e) && V(ib[e], (e => {
                        e(t)
                    }))
                })(t, e)
            }
            Rm(e, t, o, n)
        }, Vb = e => xe(e, "vars"), qb = e => e.selection.getStart(), Wb = (e, t, n, o, r) => X(t, (t => {
            const s = e.formatter.matchNode(t, n, null != r ? r : {}, o);
            return !v(s)
        }), (t => !!qh(e, t, n) || !o && C(e.formatter.matchNode(t, n, r, !0)))), Kb = (e, t) => {
            const n = null != t ? t : qb(e);
            return K(Ju(e.dom, n), (e => To(e) && !Mo(e)))
        }, Gb = (e, t, n) => {
            const o = Kb(e, t);
            fe(n, ((n, r) => {
                const s = n => {
                    const s = Wb(e, o, r, n.similar, Vb(n) ? n.vars : void 0), a = s.isSome();
                    if (n.state.get() !== a) {
                        n.state.set(a);
                        const e = s.getOr(t);
                        Vb(n) ? n.callback(a, {node: e, format: r, parents: o}) : V(n.callbacks, (t => t(a, {
                            node: e,
                            format: r,
                            parents: o
                        })))
                    }
                };
                V([n.withSimilar, n.withoutSimilar], s), V(n.withVars, s)
            }))
        };

    function Yb(e) {
        return Yb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Yb(e)
    }

    function Xb(e, t) {
        return Xb = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        }, Xb(e, t)
    }

    function Qb() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
        } catch (e) {
            return !1
        }
    }

    function Jb(e, t, n) {
        return Jb = Qb() ? Reflect.construct : function (e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var r = new (Function.bind.apply(e, o));
            return n && Xb(r, n.prototype), r
        }, Jb.apply(null, arguments)
    }

    function Zb(e) {
        return function (e) {
            if (Array.isArray(e)) return ev(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function (e, t) {
            if (e) {
                if ("string" == typeof e) return ev(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ev(e, t) : void 0
            }
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function ev(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o
    }

    var tv = Object.hasOwnProperty, nv = Object.setPrototypeOf, ov = Object.isFrozen, rv = Object.getPrototypeOf,
        sv = Object.getOwnPropertyDescriptor, av = Object.freeze, iv = Object.seal, lv = Object.create,
        dv = "undefined" != typeof Reflect && Reflect, cv = dv.apply, uv = dv.construct;
    cv || (cv = function (e, t, n) {
        return e.apply(t, n)
    }), av || (av = function (e) {
        return e
    }), iv || (iv = function (e) {
        return e
    }), uv || (uv = function (e, t) {
        return Jb(e, Zb(t))
    });
    var mv, fv = kv(Array.prototype.forEach), gv = kv(Array.prototype.pop), pv = kv(Array.prototype.push),
        hv = kv(String.prototype.toLowerCase), bv = kv(String.prototype.match), vv = kv(String.prototype.replace),
        yv = kv(String.prototype.indexOf), Cv = kv(String.prototype.trim), wv = kv(RegExp.prototype.test),
        xv = (mv = TypeError, function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return uv(mv, t)
        });

    function kv(e) {
        return function (t) {
            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
            return cv(e, t, o)
        }
    }

    function Sv(e, t) {
        nv && nv(e, null);
        for (var n = t.length; n--;) {
            var o = t[n];
            if ("string" == typeof o) {
                var r = hv(o);
                r !== o && (ov(t) || (t[n] = r), o = r)
            }
            e[o] = !0
        }
        return e
    }

    function _v(e) {
        var t, n = lv(null);
        for (t in e) cv(tv, e, [t]) && (n[t] = e[t]);
        return n
    }

    function Ev(e, t) {
        for (; null !== e;) {
            var n = sv(e, t);
            if (n) {
                if (n.get) return kv(n.get);
                if ("function" == typeof n.value) return kv(n.value)
            }
            e = rv(e)
        }
        return function (e) {
            return console.warn("fallback value for", e), null
        }
    }

    var Nv = av(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
        Rv = av(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
        Av = av(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
        Ov = av(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
        Tv = av(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
        Bv = av(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
        Dv = av(["#text"]),
        Pv = av(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
        Lv = av(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
        Mv = av(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
        Iv = av(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        Fv = iv(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Uv = iv(/<%[\w\W]*|[\w\W]*%>/gm), zv = iv(/^data-[\-\w.\u00B7-\uFFFF]/),
        jv = iv(/^aria-[\-\w]+$/),
        Hv = iv(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        $v = iv(/^(?:\w+script|data):/i), Vv = iv(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        qv = iv(/^html$/i), Wv = function () {
            return "undefined" == typeof window ? null : window
        }, Kv = function (e, t) {
            if ("object" !== Yb(e) || "function" != typeof e.createPolicy) return null;
            var n = null, o = "data-tt-policy-suffix";
            t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
            var r = "dompurify" + (n ? "#" + n : "");
            try {
                return e.createPolicy(r, {
                    createHTML: function (e) {
                        return e
                    }
                })
            } catch (e) {
                return console.warn("TrustedTypes policy " + r + " could not be created."), null
            }
        }, Gv = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wv(), n = function (t) {
                return e(t)
            };
            if (n.version = "2.3.8", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
            var o = t.document, r = t.document, s = t.DocumentFragment, a = t.HTMLTemplateElement, i = t.Node,
                l = t.Element, d = t.NodeFilter, c = t.NamedNodeMap,
                u = void 0 === c ? t.NamedNodeMap || t.MozNamedAttrMap : c, m = t.HTMLFormElement, f = t.DOMParser,
                g = t.trustedTypes, p = l.prototype, h = Ev(p, "cloneNode"), b = Ev(p, "nextSibling"),
                v = Ev(p, "childNodes"), y = Ev(p, "parentNode");
            if ("function" == typeof a) {
                var C = r.createElement("template");
                C.content && C.content.ownerDocument && (r = C.content.ownerDocument)
            }
            var w = Kv(g, o), x = w ? w.createHTML("") : "", k = r, S = k.implementation, _ = k.createNodeIterator,
                E = k.createDocumentFragment, N = k.getElementsByTagName, R = o.importNode, A = {};
            try {
                A = _v(r).documentMode ? r.documentMode : {}
            } catch (e) {
            }
            var O = {};
            n.isSupported = "function" == typeof y && S && void 0 !== S.createHTMLDocument && 9 !== A;
            var T, B, D = Fv, P = Uv, L = zv, M = jv, I = $v, F = Vv, U = Hv, z = null,
                j = Sv({}, [].concat(Zb(Nv), Zb(Rv), Zb(Av), Zb(Tv), Zb(Dv))), H = null,
                $ = Sv({}, [].concat(Zb(Pv), Zb(Lv), Zb(Mv), Zb(Iv))), V = Object.seal(Object.create(null, {
                    tagNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    attributeNameCheck: {writable: !0, configurable: !1, enumerable: !0, value: null},
                    allowCustomizedBuiltInElements: {writable: !0, configurable: !1, enumerable: !0, value: !1}
                })), q = null, W = null, K = !0, G = !0, Y = !1, X = !1, Q = !1, J = !1, Z = !1, ee = !1, te = !1, ne = !1,
                oe = !0, re = !0, se = !1, ae = {}, ie = null,
                le = Sv({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                de = null, ce = Sv({}, ["audio", "video", "img", "source", "image", "track"]), ue = null,
                me = Sv({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                fe = "http://www.w3.org/1998/Math/MathML", ge = "http://www.w3.org/2000/svg",
                pe = "http://www.w3.org/1999/xhtml", he = pe, be = !1, ve = ["application/xhtml+xml", "text/html"],
                ye = "text/html", Ce = null, we = r.createElement("form"), xe = function (e) {
                    return e instanceof RegExp || e instanceof Function
                }, ke = function (e) {
                    Ce && Ce === e || (e && "object" === Yb(e) || (e = {}), e = _v(e), z = "ALLOWED_TAGS" in e ? Sv({}, e.ALLOWED_TAGS) : j, H = "ALLOWED_ATTR" in e ? Sv({}, e.ALLOWED_ATTR) : $, ue = "ADD_URI_SAFE_ATTR" in e ? Sv(_v(me), e.ADD_URI_SAFE_ATTR) : me, de = "ADD_DATA_URI_TAGS" in e ? Sv(_v(ce), e.ADD_DATA_URI_TAGS) : ce, ie = "FORBID_CONTENTS" in e ? Sv({}, e.FORBID_CONTENTS) : le, q = "FORBID_TAGS" in e ? Sv({}, e.FORBID_TAGS) : {}, W = "FORBID_ATTR" in e ? Sv({}, e.FORBID_ATTR) : {}, ae = "USE_PROFILES" in e && e.USE_PROFILES, K = !1 !== e.ALLOW_ARIA_ATTR, G = !1 !== e.ALLOW_DATA_ATTR, Y = e.ALLOW_UNKNOWN_PROTOCOLS || !1, X = e.SAFE_FOR_TEMPLATES || !1, Q = e.WHOLE_DOCUMENT || !1, ee = e.RETURN_DOM || !1, te = e.RETURN_DOM_FRAGMENT || !1, ne = e.RETURN_TRUSTED_TYPE || !1, Z = e.FORCE_BODY || !1, oe = !1 !== e.SANITIZE_DOM, re = !1 !== e.KEEP_CONTENT, se = e.IN_PLACE || !1, U = e.ALLOWED_URI_REGEXP || U, he = e.NAMESPACE || pe, e.CUSTOM_ELEMENT_HANDLING && xe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && xe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (V.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), T = T = -1 === ve.indexOf(e.PARSER_MEDIA_TYPE) ? ye : e.PARSER_MEDIA_TYPE, B = "application/xhtml+xml" === T ? function (e) {
                        return e
                    } : hv, X && (G = !1), te && (ee = !0), ae && (z = Sv({}, Zb(Dv)), H = [], !0 === ae.html && (Sv(z, Nv), Sv(H, Pv)), !0 === ae.svg && (Sv(z, Rv), Sv(H, Lv), Sv(H, Iv)), !0 === ae.svgFilters && (Sv(z, Av), Sv(H, Lv), Sv(H, Iv)), !0 === ae.mathMl && (Sv(z, Tv), Sv(H, Mv), Sv(H, Iv))), e.ADD_TAGS && (z === j && (z = _v(z)), Sv(z, e.ADD_TAGS)), e.ADD_ATTR && (H === $ && (H = _v(H)), Sv(H, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && Sv(ue, e.ADD_URI_SAFE_ATTR), e.FORBID_CONTENTS && (ie === le && (ie = _v(ie)), Sv(ie, e.FORBID_CONTENTS)), re && (z["#text"] = !0), Q && Sv(z, ["html", "head", "body"]), z.table && (Sv(z, ["tbody"]), delete q.tbody), av && av(e), Ce = e)
                }, Se = Sv({}, ["mi", "mo", "mn", "ms", "mtext"]),
                _e = Sv({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                Ee = Sv({}, ["title", "style", "font", "a", "script"]), Ne = Sv({}, Rv);
            Sv(Ne, Av), Sv(Ne, Ov);
            var Re = Sv({}, Tv);
            Sv(Re, Bv);
            var Ae = function (e) {
                var t = y(e);
                t && t.tagName || (t = {namespaceURI: pe, tagName: "template"});
                var n = hv(e.tagName), o = hv(t.tagName);
                return e.namespaceURI === ge ? t.namespaceURI === pe ? "svg" === n : t.namespaceURI === fe ? "svg" === n && ("annotation-xml" === o || Se[o]) : Boolean(Ne[n]) : e.namespaceURI === fe ? t.namespaceURI === pe ? "math" === n : t.namespaceURI === ge ? "math" === n && _e[o] : Boolean(Re[n]) : e.namespaceURI === pe && !(t.namespaceURI === ge && !_e[o]) && !(t.namespaceURI === fe && !Se[o]) && !Re[n] && (Ee[n] || !Ne[n])
            }, Oe = function (e) {
                pv(n.removed, {element: e});
                try {
                    e.parentNode.removeChild(e)
                } catch (t) {
                    try {
                        e.outerHTML = x
                    } catch (t) {
                        e.remove()
                    }
                }
            }, Te = function (e, t) {
                try {
                    pv(n.removed, {attribute: t.getAttributeNode(e), from: t})
                } catch (e) {
                    pv(n.removed, {attribute: null, from: t})
                }
                if (t.removeAttribute(e), "is" === e && !H[e]) if (ee || te) try {
                    Oe(t)
                } catch (e) {
                } else try {
                    t.setAttribute(e, "")
                } catch (e) {
                }
            }, Be = function (e) {
                var t, n;
                if (Z) e = "<remove></remove>" + e; else {
                    var o = bv(e, /^[\r\n\t ]+/);
                    n = o && o[0]
                }
                "application/xhtml+xml" === T && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                var s = w ? w.createHTML(e) : e;
                if (he === pe) try {
                    t = (new f).parseFromString(s, T)
                } catch (e) {
                }
                if (!t || !t.documentElement) {
                    t = S.createDocument(he, "template", null);
                    try {
                        t.documentElement.innerHTML = be ? "" : s
                    } catch (e) {
                    }
                }
                var a = t.body || t.documentElement;
                return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), he === pe ? N.call(t, Q ? "html" : "body")[0] : Q ? t.documentElement : a
            }, De = function (e) {
                return _.call(e.ownerDocument || e, e, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT, null, !1)
            }, Pe = function (e) {
                return e instanceof m && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof u) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore)
            }, Le = function (e) {
                return "object" === Yb(i) ? e instanceof i : e && "object" === Yb(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            }, Me = function (e, t, o) {
                O[e] && fv(O[e], (function (e) {
                    e.call(n, t, o, Ce)
                }))
            }, Ie = function (e) {
                var t;
                if (Me("beforeSanitizeElements", e, null), Pe(e)) return Oe(e), !0;
                if (wv(/[\u0080-\uFFFF]/, e.nodeName)) return Oe(e), !0;
                var o = B(e.nodeName);
                if (Me("uponSanitizeElement", e, {
                    tagName: o,
                    allowedTags: z
                }), e.hasChildNodes() && !Le(e.firstElementChild) && (!Le(e.content) || !Le(e.content.firstElementChild)) && wv(/<[/\w]/g, e.innerHTML) && wv(/<[/\w]/g, e.textContent)) return Oe(e), !0;
                if ("select" === o && wv(/<template/i, e.innerHTML)) return Oe(e), !0;
                if (!z[o] || q[o]) {
                    if (!q[o] && Ue(o)) {
                        if (V.tagNameCheck instanceof RegExp && wv(V.tagNameCheck, o)) return !1;
                        if (V.tagNameCheck instanceof Function && V.tagNameCheck(o)) return !1
                    }
                    if (re && !ie[o]) {
                        var r = y(e) || e.parentNode, s = v(e) || e.childNodes;
                        if (s && r) for (var a = s.length - 1; a >= 0; --a) r.insertBefore(h(s[a], !0), b(e))
                    }
                    return Oe(e), !0
                }
                return e instanceof l && !Ae(e) ? (Oe(e), !0) : "noscript" !== o && "noembed" !== o || !wv(/<\/no(script|embed)/i, e.innerHTML) ? (X && 3 === e.nodeType && (t = e.textContent, t = vv(t, D, " "), t = vv(t, P, " "), e.textContent !== t && (pv(n.removed, {element: e.cloneNode()}), e.textContent = t)), Me("afterSanitizeElements", e, null), !1) : (Oe(e), !0)
            }, Fe = function (e, t, n) {
                if (oe && ("id" === t || "name" === t) && (n in r || n in we)) return !1;
                if (G && !W[t] && wv(L, t)) ; else if (K && wv(M, t)) ; else if (!H[t] || W[t]) {
                    if (!(Ue(e) && (V.tagNameCheck instanceof RegExp && wv(V.tagNameCheck, e) || V.tagNameCheck instanceof Function && V.tagNameCheck(e)) && (V.attributeNameCheck instanceof RegExp && wv(V.attributeNameCheck, t) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(t)) || "is" === t && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && wv(V.tagNameCheck, n) || V.tagNameCheck instanceof Function && V.tagNameCheck(n)))) return !1
                } else if (ue[t]) ; else if (wv(U, vv(n, F, ""))) ; else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== yv(n, "data:") || !de[e]) if (Y && !wv(I, vv(n, F, ""))) ; else if (n) return !1;
                return !0
            }, Ue = function (e) {
                return e.indexOf("-") > 0
            }, ze = function (e) {
                var t, n, o, r;
                Me("beforeSanitizeAttributes", e, null);
                var s = e.attributes;
                if (s) {
                    var a = {attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: H};
                    for (r = s.length; r--;) {
                        var i = t = s[r], l = i.name, d = i.namespaceURI;
                        n = "value" === l ? t.value : Cv(t.value), o = B(l);
                        var c = n;
                        if (a.attrName = o, a.attrValue = n, a.keepAttr = !0, a.forceKeepAttr = void 0, Me("uponSanitizeAttribute", e, a), n = a.attrValue, !a.forceKeepAttr) if (a.keepAttr) if (wv(/\/>/i, n)) Te(l, e); else {
                            X && (n = vv(n, D, " "), n = vv(n, P, " "));
                            var u = B(e.nodeName);
                            if (Fe(u, o, n)) {
                                if (n !== c) try {
                                    d ? e.setAttributeNS(d, l, n) : e.setAttribute(l, n)
                                } catch (t) {
                                    Te(l, e)
                                }
                            } else Te(l, e)
                        } else Te(l, e)
                    }
                    Me("afterSanitizeAttributes", e, null)
                }
            }, je = function e(t) {
                var n, o = De(t);
                for (Me("beforeSanitizeShadowDOM", t, null); n = o.nextNode();) Me("uponSanitizeShadowNode", n, null), Ie(n) || (n.content instanceof s && e(n.content), ze(n));
                Me("afterSanitizeShadowDOM", t, null)
            };
            return n.sanitize = function (e, r) {
                var a, l, d, c, u;
                if ((be = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Le(e)) {
                    if ("function" != typeof e.toString) throw xv("toString is not a function");
                    if ("string" != typeof (e = e.toString())) throw xv("dirty is not a string, aborting")
                }
                if (!n.isSupported) {
                    if ("object" === Yb(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                        if ("string" == typeof e) return t.toStaticHTML(e);
                        if (Le(e)) return t.toStaticHTML(e.outerHTML)
                    }
                    return e
                }
                if (J || ke(r), n.removed = [], "string" == typeof e && (se = !1), se) {
                    if (e.nodeName) {
                        var m = B(e.nodeName);
                        if (!z[m] || q[m]) throw xv("root node is forbidden and cannot be sanitized in-place")
                    }
                } else if (e instanceof i) 1 === (l = (a = Be("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === l.nodeName || "HTML" === l.nodeName ? a = l : a.appendChild(l); else {
                    if (!ee && !X && !Q && -1 === e.indexOf("<")) return w && ne ? w.createHTML(e) : e;
                    if (!(a = Be(e))) return ee ? null : ne ? x : ""
                }
                a && Z && Oe(a.firstChild);
                for (var f = De(se ? e : a); d = f.nextNode();) 3 === d.nodeType && d === c || Ie(d) || (d.content instanceof s && je(d.content), ze(d), c = d);
                if (c = null, se) return e;
                if (ee) {
                    if (te) for (u = E.call(a.ownerDocument); a.firstChild;) u.appendChild(a.firstChild); else u = a;
                    return H.shadowroot && (u = R.call(o, u, !0)), u
                }
                var g = Q ? a.outerHTML : a.innerHTML;
                return Q && z["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && wv(qv, a.ownerDocument.doctype.name) && (g = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + g), X && (g = vv(g, D, " "), g = vv(g, P, " ")), w && ne ? w.createHTML(g) : g
            }, n.setConfig = function (e) {
                ke(e), J = !0
            }, n.clearConfig = function () {
                Ce = null, J = !1
            }, n.isValidAttribute = function (e, t, n) {
                Ce || ke({});
                var o = B(e), r = B(t);
                return Fe(o, r, n)
            }, n.addHook = function (e, t) {
                "function" == typeof t && (O[e] = O[e] || [], pv(O[e], t))
            }, n.removeHook = function (e) {
                if (O[e]) return gv(O[e])
            }, n.removeHooks = function (e) {
                O[e] && (O[e] = [])
            }, n.removeAllHooks = function () {
                O = {}
            }, n
        }();
    const Yv = Tt.explode, Xv = () => {
        const e = {};
        return {
            addFilter: (t, n) => {
                V(Yv(t), (t => {
                    xe(e, t) || (e[t] = {name: t, callbacks: []}), e[t].callbacks.push(n)
                }))
            }, getFilters: () => Ce(e), removeFilter: (t, n) => {
                V(Yv(t), (t => {
                    if (xe(e, t)) if (C(n)) {
                        const o = e[t], r = K(o.callbacks, (e => e !== n));
                        r.length > 0 ? o.callbacks = r : delete e[t]
                    } else delete e[t]
                }))
            }
        }
    }, Qv = (e, t, n) => {
        var o;
        const r = Js();
        t.convert_fonts_to_spans && ((e, t, n) => {
            e.addNodeFilter("font", (e => {
                V(e, (e => {
                    const o = t.parse(e.attr("style")), r = e.attr("color"), s = e.attr("face"), a = e.attr("size");
                    r && (o.color = r), s && (o["font-family"] = s), a && Ge(a).each((e => {
                        o["font-size"] = n[e - 1]
                    })), e.name = "span", e.attr("style", t.serialize(o)), ((e, t) => {
                        V(["color", "face", "size"], (t => {
                            e.attr(t, null)
                        }))
                    })(e)
                }))
            }))
        })(e, r, Tt.explode(null !== (o = t.font_size_legacy_values) && void 0 !== o ? o : "")), ((e, t, n) => {
            e.addNodeFilter("strike", (e => {
                const o = "html4" !== t.type;
                V(e, (e => {
                    if (o) e.name = "s"; else {
                        const t = n.parse(e.attr("style"));
                        t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
                    }
                }))
            }))
        })(e, n, r)
    }, Jv = e => {
        const [t, ...n] = e.split(","), o = n.join(","), r = /data:([^/]+\/[^;]+)(;.+)?/.exec(t);
        if (r) {
            const e = ";base64" === r[2], t = e ? (e => {
                const t = /([a-z0-9+\/=\s]+)/i.exec(e);
                return t ? t[1] : ""
            })(o) : decodeURIComponent(o);
            return M.some({type: r[1], data: t, base64Encoded: e})
        }
        return M.none()
    }, Zv = (e, t, n = !0) => {
        let o = t;
        if (n) try {
            o = atob(t)
        } catch (e) {
            return M.none()
        }
        const r = new Uint8Array(o.length);
        for (let e = 0; e < r.length; e++) r[e] = o.charCodeAt(e);
        return M.some(new Blob([r], {type: e}))
    }, ey = e => new Promise(((t, n) => {
        const o = new FileReader;
        o.onloadend = () => {
            t(o.result)
        }, o.onerror = () => {
            var e;
            n(null === (e = o.error) || void 0 === e ? void 0 : e.message)
        }, o.readAsDataURL(e)
    }));
    let ty = 0;
    const ny = (e, t, n) => Jv(e).bind((({data: e, type: o, base64Encoded: r}) => {
            if (t && !r) return M.none();
            {
                const t = r ? e : btoa(e);
                return n(t, o)
            }
        })), oy = (e, t, n) => {
            const o = e.create("blobid" + ty++, t, n);
            return e.add(o), o
        },
        ry = (e, t, n = !1) => ny(t, n, ((t, n) => M.from(e.getByData(t, n)).orThunk((() => Zv(n, t).map((n => oy(e, n, t))))))),
        sy = Tt.each, ay = Tt.trim,
        iy = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        ly = {ftp: 21, http: 80, https: 443, mailto: 25}, dy = ["img", "video"], cy = (e, t, n) => {
            const o = (e => {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return unescape(e)
                }
            })(t);
            return !e.allow_script_urls && (!!/((java|vb)script|mhtml):/i.test(o) || !e.allow_html_data_urls && (/^data:image\//i.test(o) ? ((e, t) => C(e) ? !e : !C(t) || !j(dy, t))(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(o) : /^data:/i.test(o)))
        };

    class uy {
        constructor(e, t = {}) {
            this.path = "", this.directory = "", e = ay(e), this.settings = t;
            const n = t.base_uri, o = this;
            if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) return void (o.source = e);
            const r = 0 === e.indexOf("//");
            if (0 !== e.indexOf("/") || r || (e = (n && n.protocol || "http") + "://mce_host" + e), !/^[\w\-]*:?\/\//.test(e)) {
                const t = n ? n.path : new uy(document.location.href).directory;
                if ("" === (null == n ? void 0 : n.protocol)) e = "//mce_host" + o.toAbsPath(t, e); else {
                    const r = /([^#?]*)([#?]?.*)/.exec(e);
                    r && (e = (n && n.protocol || "http") + "://mce_host" + o.toAbsPath(t, r[1]) + r[2])
                }
            }
            e = e.replace(/@@/g, "(mce_at)");
            const s = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
            s && sy(iy, ((e, t) => {
                let n = s[t];
                n && (n = n.replace(/\(mce_at\)/g, "@@")), o[e] = n
            })), n && (o.protocol || (o.protocol = n.protocol), o.userInfo || (o.userInfo = n.userInfo), o.port || "mce_host" !== o.host || (o.port = n.port), o.host && "mce_host" !== o.host || (o.host = n.host), o.source = ""), r && (o.protocol = "")
        }

        static parseDataUri(e) {
            let t;
            const n = decodeURIComponent(e).split(","), o = /data:([^;]+)/.exec(n[0]);
            return o && (t = o[1]), {type: t, data: n[1]}
        }

        static isDomSafe(e, t, n = {}) {
            if (n.allow_script_urls) return !0;
            {
                const o = Fs.decode(e).replace(/[\s\u0000-\u001F]+/g, "");
                return !cy(n, o, t)
            }
        }

        static getDocumentBaseUrl(e) {
            var t;
            let n;
            return n = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? null !== (t = e.href) && void 0 !== t ? t : "" : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/")), n
        }

        setPath(e) {
            const t = /^(.*?)\/?(\w+)?$/.exec(e);
            t && (this.path = t[0], this.directory = t[1], this.file = t[2]), this.source = "", this.getURI()
        }

        toRelative(e) {
            if ("./" === e) return e;
            const t = new uy(e, {base_uri: this});
            if ("mce_host" !== t.host && this.host !== t.host && t.host || this.port !== t.port || this.protocol !== t.protocol && "" !== t.protocol) return t.getURI();
            const n = this.getURI(), o = t.getURI();
            if (n === o || "/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === o) return n;
            let r = this.toRelPath(this.path, t.path);
            return t.query && (r += "?" + t.query), t.anchor && (r += "#" + t.anchor), r
        }

        toAbsolute(e, t) {
            const n = new uy(e, {base_uri: this});
            return n.getURI(t && this.isSameOrigin(n))
        }

        isSameOrigin(e) {
            if (this.host == e.host && this.protocol == e.protocol) {
                if (this.port == e.port) return !0;
                const t = this.protocol ? ly[this.protocol] : null;
                if (t && (this.port || t) == (e.port || t)) return !0
            }
            return !1
        }

        toRelPath(e, t) {
            let n, o, r = 0, s = "";
            const a = e.substring(0, e.lastIndexOf("/")).split("/"), i = t.split("/");
            if (a.length >= i.length) for (n = 0, o = a.length; n < o; n++) if (n >= i.length || a[n] !== i[n]) {
                r = n + 1;
                break
            }
            if (a.length < i.length) for (n = 0, o = i.length; n < o; n++) if (n >= a.length || a[n] !== i[n]) {
                r = n + 1;
                break
            }
            if (1 === r) return t;
            for (n = 0, o = a.length - (r - 1); n < o; n++) s += "../";
            for (n = r - 1, o = i.length; n < o; n++) s += n !== r - 1 ? "/" + i[n] : i[n];
            return s
        }

        toAbsPath(e, t) {
            let n = 0;
            const o = /\/$/.test(t) ? "/" : "", r = e.split("/"), s = t.split("/"), a = [];
            sy(r, (e => {
                e && a.push(e)
            }));
            const i = [];
            for (let e = s.length - 1; e >= 0; e--) 0 !== s[e].length && "." !== s[e] && (".." !== s[e] ? n > 0 ? n-- : i.push(s[e]) : n++);
            const l = a.length - n;
            let d;
            return d = l <= 0 ? ne(i).join("/") : a.slice(0, l).join("/") + "/" + ne(i).join("/"), 0 !== d.indexOf("/") && (d = "/" + d), o && d.lastIndexOf("/") !== d.length - 1 && (d += o), d
        }

        getURI(e = !1) {
            let t;
            return this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source
        }
    }

    const my = Tt.makeMap, fy = Tt.extend, gy = {
            IN_PLACE: !0,
            ALLOW_UNKNOWN_PROTOCOLS: !0,
            ALLOWED_TAGS: ["#comment", "#cdata-section", "body"],
            ALLOWED_ATTR: []
        }, py = Tt.makeMap("src,href,data,background,action,formaction,poster,xlink:href"), hy = "data-mce-type",
        by = (e, t) => {
            const n = Gv(), o = t.getSpecialElements(), r = e.validate;
            let s = 0;
            return n.addHook("uponSanitizeElement", ((n, a) => {
                var i, l, d;
                8 === n.nodeType && !e.allow_conditional_comments && /^\[if/i.test(null !== (i = n.nodeValue) && void 0 !== i ? i : "") && (n.nodeValue = " " + n.nodeValue);
                const c = a.tagName;
                if (1 !== n.nodeType || "body" === c) return;
                const u = mn(n), f = c.toLowerCase(), g = Gt(u, hy), p = Wt(u, "data-mce-bogus");
                if (!g && m(p)) return void ("all" === p ? oo(u) : ro(u));
                const h = t.getElementRule(f);
                if (!r || h) {
                    if (a.allowedTags[c] = !0, r && h && !g) {
                        if (V(null !== (l = h.attributesForced) && void 0 !== l ? l : [], (e => {
                            Vt(u, e.name, "{$uid}" === e.value ? "mce_" + s++ : e.value)
                        })), V(null !== (d = h.attributesDefault) && void 0 !== d ? d : [], (e => {
                            Gt(u, e.name) || Vt(u, e.name, "{$uid}" === e.value ? "mce_" + s++ : e.value)
                        })), h.attributesRequired && !H(h.attributesRequired, (e => Gt(u, e)))) return void ro(u);
                        if (h.removeEmptyAttrs && (e => {
                            const t = e.dom.attributes;
                            return null == t || 0 === t.length
                        })(u)) return void ro(u);
                        h.outputName && h.outputName !== f && ((e, t) => {
                            const n = ((e, t) => {
                                const n = cn(t), o = Xt(e);
                                return qt(n, o), n
                            })(e, t);
                            Jn(e, n);
                            const o = An(e);
                            to(n, o), oo(e)
                        })(u, h.outputName)
                    }
                } else xe(o, f) ? oo(u) : ro(u)
            })), n.addHook("uponSanitizeAttribute", ((n, o) => {
                const s = n.tagName.toLowerCase(), {attrName: a, attrValue: i} = o;
                o.keepAttr = !r || t.isValid(s, a) || ze(a, "data-") || ze(a, "aria-"), a in py && cy(e, i, s) && (o.keepAttr = !1), o.keepAttr ? (o.allowedAttributes[a] = !0, a in t.getBoolAttrs() && (o.attrValue = a), e.allow_svg_data_urls && ze(i, "data:image/svg+xml") && (o.forceKeepAttr = !0)) : !n.hasAttribute(hy) || "id" !== a && "class" !== a && "style" !== a || (o.forceKeepAttr = !0)
            })), n
        }, vy = (e, t, n) => {
            const o = e.name, r = o in n && "title" !== o && "textarea" !== o, s = t.childNodes;
            for (let t = 0, o = s.length; t < o; t++) {
                const o = s[t], a = new pg(o.nodeName.toLowerCase(), o.nodeType);
                if (To(o)) {
                    const e = o.attributes;
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        a.attr(n.name, n.value)
                    }
                } else zo(o) ? (a.value = o.data, r && (a.raw = !0)) : ($o(o) || jo(o) || Ho(o)) && (a.value = o.data);
                vy(a, o, n), e.append(a)
            }
        }, yy = (e = {}, t = Qs()) => {
            const n = Xv(), o = Xv(), r = {validate: !0, root_name: "body", ...e}, s = new DOMParser, a = by(r, t),
                i = n.addFilter, l = n.getFilters, d = n.removeFilter, c = o.addFilter, u = o.getFilters,
                f = o.removeFilter, g = (e, n) => {
                    const o = m(n.attr(hy)),
                        r = 1 === n.type && !xe(e, n.name) && !((e, t) => 1 === t.type && fs(e, t.name) && m(t.attr(rs)))(t, n);
                    return 3 === n.type || r && !o
                }, p = {
                    schema: t,
                    addAttributeFilter: c,
                    getAttributeFilters: u,
                    removeAttributeFilter: f,
                    addNodeFilter: i,
                    getNodeFilters: l,
                    removeNodeFilter: d,
                    parse: (e, n = {}) => {
                        var o;
                        const i = r.validate, d = null !== (o = n.context) && void 0 !== o ? o : r.root_name,
                            c = ((e, n, o = "html") => {
                                const i = "xhtml" === o ? "application/xhtml+xml" : "text/html",
                                    l = xe(t.getSpecialElements(), n.toLowerCase()), d = l ? `<${n}>${e}</${n}>` : e,
                                    c = "xhtml" === o ? `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${d}</body></html>` : `<body>${d}</body>`,
                                    u = s.parseFromString(c, i).body;
                                return a.sanitize(u, ((e, t) => {
                                    const n = {...gy};
                                    return n.PARSER_MEDIA_TYPE = t, e.allow_script_urls ? n.ALLOWED_URI_REGEXP = /.*/ : e.allow_html_data_urls && (n.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i), n
                                })(r, i)), a.removed = [], l ? u.firstChild : u
                            })(e, d, n.format);
                        cs(t, c);
                        const m = new pg(d, 11);
                        vy(m, c, t.getSpecialElements()), c.innerHTML = "";
                        const [f, p] = ((e, t, n, o) => {
                            const r = n.validate, s = t.getNonEmptyElements(), a = t.getWhitespaceElements(),
                                i = fy(my("script,style,head,html,body,title,meta,param"), t.getBlockElements()), l = Ys(t),
                                d = /[ \t\r\n]+/g, c = /^[ \t\r\n]+/, u = /[ \t\r\n]+$/, m = e => {
                                    let t = e.parent;
                                    for (; C(t);) {
                                        if (t.name in a) return !0;
                                        t = t.parent
                                    }
                                    return !1
                                }, f = e => e.name in i && !hs(t, e), g = (t, n) => {
                                    const r = n ? t.prev : t.next;
                                    return !C(r) && !y(t.parent) && f(t.parent) && (t.parent !== e || !0 === o.isRootContent)
                                };
                            return [e => {
                                var t;
                                if (3 === e.type && !m(e)) {
                                    let n = null !== (t = e.value) && void 0 !== t ? t : "";
                                    n = n.replace(d, " "), (((e, t) => C(e) && (t(e) || "br" === e.name))(e.prev, f) || g(e, !0)) && (n = n.replace(c, "")), 0 === n.length ? e.remove() : e.value = n
                                }
                            }, e => {
                                var n;
                                if (1 === e.type) {
                                    const n = t.getElementRule(e.name);
                                    if (r && n) {
                                        const r = Eh(t, s, a, e);
                                        n.paddInEmptyBlock && r && (e => {
                                            let n = e;
                                            for (; C(n);) {
                                                if (n.name in l) return Eh(t, s, a, n);
                                                n = n.parent
                                            }
                                            return !1
                                        })(e) ? Sh(o, f, e) : n.removeEmpty && r ? f(e) ? e.remove() : e.unwrap() : n.paddEmpty && (r || (e => {
                                            var t;
                                            return _h(e, "#text") && (null === (t = null == e ? void 0 : e.firstChild) || void 0 === t ? void 0 : t.value) === tr
                                        })(e)) && Sh(o, f, e)
                                    }
                                } else if (3 === e.type && !m(e)) {
                                    let t = null !== (n = e.value) && void 0 !== n ? n : "";
                                    (e.next && f(e.next) || g(e, !1)) && (t = t.replace(u, "")), 0 === t.length ? e.remove() : e.value = t
                                }
                            }]
                        })(m, t, r, n), h = [], b = i ? e => ((e, n) => {
                            Ah(t, e) && n.push(e)
                        })(e, h) : S, v = {nodes: {}, attributes: {}}, w = e => wh(l(), u(), e, v);
                        if (((e, t, n) => {
                            const o = [];
                            for (let n = e, r = n; n; r = n, n = n.walk()) {
                                const s = n;
                                V(t, (e => e(s))), y(s.parent) && s !== e ? n = r : o.push(s)
                            }
                            for (let e = o.length - 1; e >= 0; e--) {
                                const t = o[e];
                                V(n, (e => e(t)))
                            }
                        })(m, [f, w], [p, b]), h.reverse(), i && h.length > 0) if (n.context) {
                            const {pass: e, fail: o} = W(h, (e => e.parent === m));
                            Rh(o, t, w), n.invalid = e.length > 0
                        } else Rh(h, t, w);
                        const x = ((e, t) => {
                            var n;
                            const o = null !== (n = t.forced_root_block) && void 0 !== n ? n : e.forced_root_block;
                            return !1 === o ? "" : !0 === o ? "p" : o
                        })(r, n);
                        return x && ("body" === m.name || n.isRootContent) && ((e, n) => {
                            const o = fy(my("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
                                s = /^[ \t\r\n]+/, a = /[ \t\r\n]+$/;
                            let i = e.firstChild, l = null;
                            const d = e => {
                                var t, n;
                                e && (i = e.firstChild, i && 3 === i.type && (i.value = null === (t = i.value) || void 0 === t ? void 0 : t.replace(s, "")), i = e.lastChild, i && 3 === i.type && (i.value = null === (n = i.value) || void 0 === n ? void 0 : n.replace(a, "")))
                            };
                            if (t.isValidChild(e.name, n.toLowerCase())) {
                                for (; i;) {
                                    const t = i.next;
                                    g(o, i) ? (l || (l = new pg(n, 1), l.attr(r.forced_root_block_attrs), e.insert(l, i)), l.append(i)) : (d(l), l = null), i = t
                                }
                                d(l)
                            }
                        })(m, x), n.invalid || xh(v, n), m
                    }
                };
            return ((e, t) => {
                const n = e.schema;
                t.remove_trailing_brs && e.addNodeFilter("br", ((e, t, o) => {
                    const r = Tt.extend({}, n.getBlockElements()), s = n.getNonEmptyElements(),
                        a = n.getWhitespaceElements();
                    r.body = 1;
                    const i = e => e.name in r && hs(n, e);
                    for (let t = 0, l = e.length; t < l; t++) {
                        let l = e[t], d = l.parent;
                        if (d && r[d.name] && l === d.lastChild) {
                            let e = l.prev;
                            for (; e;) {
                                const t = e.name;
                                if ("span" !== t || "bookmark" !== e.attr("data-mce-type")) {
                                    "br" === t && (l = null);
                                    break
                                }
                                e = e.prev
                            }
                            if (l && (l.remove(), Eh(n, s, a, d))) {
                                const e = n.getElementRule(d.name);
                                e && (e.removeEmpty ? d.remove() : e.paddEmpty && Sh(o, i, d))
                            }
                        } else {
                            let e = l;
                            for (; d && d.firstChild === e && d.lastChild === e && (e = d, !r[d.name]);) d = d.parent;
                            if (e === d) {
                                const e = new pg("#text", 3);
                                e.value = tr, l.replace(e)
                            }
                        }
                    }
                })), e.addAttributeFilter("href", (e => {
                    let n = e.length;
                    const o = e => {
                        const t = e ? Tt.trim(e) : "";
                        return /\b(noopener)\b/g.test(t) ? t : (e => e.split(" ").filter((e => e.length > 0)).concat(["noopener"]).sort().join(" "))(t)
                    };
                    if (!t.allow_unsafe_link_target) for (; n--;) {
                        const t = e[n];
                        "a" === t.name && "_blank" === t.attr("target") && t.attr("rel", o(t.attr("rel")))
                    }
                })), t.allow_html_in_named_anchor || e.addAttributeFilter("id,name", (e => {
                    let t, n, o, r, s = e.length;
                    for (; s--;) if (r = e[s], "a" === r.name && r.firstChild && !r.attr("href")) for (o = r.parent, t = r.lastChild; t && o;) n = t.prev, o.insert(t, r), t = n
                })), t.fix_list_elements && e.addNodeFilter("ul,ol", (e => {
                    let t, n, o = e.length;
                    for (; o--;) if (t = e[o], n = t.parent, n && ("ul" === n.name || "ol" === n.name)) if (t.prev && "li" === t.prev.name) t.prev.append(t); else {
                        const e = new pg("li", 1);
                        e.attr("style", "list-style-type: none"), t.wrap(e)
                    }
                }));
                const o = n.getValidClasses();
                t.validate && o && e.addAttributeFilter("class", (e => {
                    var t;
                    let n = e.length;
                    for (; n--;) {
                        const r = e[n], s = null !== (t = r.attr("class")) && void 0 !== t ? t : "", a = Tt.explode(s, " ");
                        let i = "";
                        for (let e = 0; e < a.length; e++) {
                            const t = a[e];
                            let n = !1, s = o["*"];
                            s && s[t] && (n = !0), s = o[r.name], !n && s && s[t] && (n = !0), n && (i && (i += " "), i += t)
                        }
                        i.length || (i = null), r.attr("class", i)
                    }
                })), ((e, t) => {
                    const {blob_cache: n} = t;
                    if (n) {
                        const t = e => {
                            const t = e.attr("src");
                            (e => e.attr("src") === Nt.transparentSrc || C(e.attr("data-mce-placeholder")))(e) || (e => C(e.attr("data-mce-bogus")))(e) || y(t) || ry(n, t, !0).each((t => {
                                e.attr("src", t.blobUri())
                            }))
                        };
                        e.addAttributeFilter("src", (e => V(e, t)))
                    }
                })(e, t)
            })(p, r), ((e, t, n) => {
                t.inline_styles && Qv(e, t, n)
            })(p, r, t), p
        }, Cy = (e, t) => {
            const n = (e => Uh(e) ? _g({validate: !1}).serialize(e) : e)(e), o = t(n);
            if (o.isDefaultPrevented()) return o;
            if (Uh(e)) {
                if (o.content !== n) {
                    const t = yy({validate: !1, forced_root_block: !1}).parse(o.content, {context: e.name});
                    return {...o, content: t}
                }
                return {...o, content: e}
            }
            return o
        }, wy = (e, t) => {
            if (t.no_events) return Wi.value(t);
            {
                const n = ((e, t) => e.dispatch("BeforeGetContent", t))(e, t);
                return n.isDefaultPrevented() ? Wi.error(Tm(e, {content: "", ...n}).content) : Wi.value(n)
            }
        }, xy = (e, t, n) => n.no_events ? t : Cy(t, (t => Tm(e, {...n, content: t}))).content, ky = (e, t) => {
            if (t.no_events) return Wi.value(t);
            {
                const n = Cy(t.content, (n => ((e, t) => e.dispatch("BeforeSetContent", t))(e, {...t, content: n})));
                return n.isDefaultPrevented() ? (Om(e, n), Wi.error(void 0)) : Wi.value(n)
            }
        }, Sy = (e, t, n) => {
            n.no_events || Om(e, {...n, content: t})
        }, _y = (e, t, n) => ({element: e, width: t, rows: n}), Ey = (e, t) => ({element: e, cells: t}),
        Ny = (e, t) => ({x: e, y: t}), Ry = (e, t) => Kt(e, t).bind(Ge).getOr(1), Ay = (e, t, n) => {
            const o = e.rows;
            return !!(o[n] ? o[n].cells : [])[t]
        }, Oy = e => Y(e, ((e, t) => t.cells.length > e ? t.cells.length : e), 0), Ty = (e, t) => {
            const n = e.rows;
            for (let e = 0; e < n.length; e++) {
                const o = n[e].cells;
                for (let n = 0; n < o.length; n++) if (bn(o[n], t)) return M.some(Ny(n, e))
            }
            return M.none()
        }, By = (e, t, n, o, r) => {
            const s = [], a = e.rows;
            for (let e = n; e <= r; e++) {
                const n = a[e].cells, r = t < o ? n.slice(t, o + 1) : n.slice(o, t + 1);
                s.push(Ey(a[e].element, r))
            }
            return s
        }, Dy = e => ((e, t) => {
            const n = Va(e.element), o = cn("tbody");
            return to(o, t), eo(n, o), n
        })(e, (e => $(e.rows, (e => {
            const t = $(e.cells, (e => {
                const t = qa(e);
                return Yt(t, "colspan"), Yt(t, "rowspan"), t
            })), n = Va(e.element);
            return to(n, t), n
        })))(e)), Py = (e, t) => {
            const n = mn(t.commonAncestorContainer), o = Wg(n, e), r = K(o, yr),
                s = ((e, t) => Q(e, (e => "li" === Lt(e) && Bu(e, t))).fold(N([]), (t => (e => Q(e, (e => "ul" === Lt(e) || "ol" === Lt(e))))(e).map((e => {
                    const t = cn(Lt(e)), n = ve(Yn(e), ((e, t) => ze(t, "list-style")));
                    return qn(t, n), [cn("li"), t]
                })).getOr([]))))(o, t),
                a = r.concat(s.length ? s : (e => gr(e) ? xn(e).filter(fr).fold(N([]), (t => [e, t])) : fr(e) ? [e] : [])(n));
            return $(a, Va)
        }, Ly = () => Jm([]), My = (e, t) => ((e, t) => So(t, "table", O(bn, e)))(e, t[0]).bind((e => {
            const n = t[0], o = t[t.length - 1], r = (e => {
                const t = _y(Va(e), 0, []);
                return V(or(e, "tr"), ((e, n) => {
                    V(or(e, "td,th"), ((o, r) => {
                        ((e, t, n, o, r) => {
                            const s = Ry(r, "rowspan"), a = Ry(r, "colspan"), i = e.rows;
                            for (let e = n; e < n + s; e++) {
                                i[e] || (i[e] = Ey(qa(o), []));
                                for (let o = t; o < t + a; o++) i[e].cells[o] = e === n && o === t ? r : Va(r)
                            }
                        })(t, ((e, t, n) => {
                            for (; Ay(e, t, n);) t++;
                            return t
                        })(t, r, n), n, e, o)
                    }))
                })), _y(t.element, Oy(t.rows), t.rows)
            })(e);
            return ((e, t, n) => Ty(e, t).bind((t => Ty(e, n).map((n => ((e, t, n) => {
                const o = t.x, r = t.y, s = n.x, a = n.y, i = r < a ? By(e, o, r, s, a) : By(e, o, a, s, r);
                return _y(e.element, Oy(i), i)
            })(e, t, n))))))(r, n, o).map((e => Jm([Dy(e)])))
        })).getOrThunk(Ly), Iy = (e, t) => {
            const n = Nu(t, e);
            return n.length > 0 ? My(e, n) : ((e, t) => t.length > 0 && t[0].collapsed ? Ly() : ((e, t) => ((e, t) => {
                const n = Y(t, ((e, t) => (eo(t, e), t)), e);
                return t.length > 0 ? Jm([n]) : n
            })(mn(t.cloneContents()), Py(e, t)))(e, t[0]))(e, t)
        }, Fy = (e, t) => t >= 0 && t < e.length && bu(e.charAt(t)), Uy = e => _r(e.innerText),
        zy = e => To(e) ? e.outerHTML : zo(e) ? Fs.encodeRaw(e.data, !1) : $o(e) ? "\x3c!--" + e.data + "--\x3e" : "",
        jy = (e, t) => (((e, t) => {
            let n = 0;
            V(e, (e => {
                0 === e[0] ? n++ : 1 === e[0] ? (((e, t, n) => {
                    const o = (e => {
                        let t;
                        const n = document.createElement("div"), o = document.createDocumentFragment();
                        for (e && (n.innerHTML = e); t = n.firstChild;) o.appendChild(t);
                        return o
                    })(t);
                    if (e.hasChildNodes() && n < e.childNodes.length) {
                        const t = e.childNodes[n];
                        e.insertBefore(o, t)
                    } else e.appendChild(o)
                })(t, e[1], n), n++) : 2 === e[0] && ((e, t) => {
                    if (e.hasChildNodes() && t < e.childNodes.length) {
                        const n = e.childNodes[t];
                        e.removeChild(n)
                    }
                })(t, n)
            }))
        })(((e, t) => {
            const n = e.length + t.length + 2, o = new Array(n), r = new Array(n), s = (n, o, r, a, l) => {
                const d = i(n, o, r, a);
                if (null === d || d.start === o && d.diag === o - a || d.end === n && d.diag === n - r) {
                    let s = n, i = r;
                    for (; s < o || i < a;) s < o && i < a && e[s] === t[i] ? (l.push([0, e[s]]), ++s, ++i) : o - n > a - r ? (l.push([2, e[s]]), ++s) : (l.push([1, t[i]]), ++i)
                } else {
                    s(n, d.start, r, d.start - d.diag, l);
                    for (let t = d.start; t < d.end; ++t) l.push([0, e[t]]);
                    s(d.end, o, d.end - d.diag, a, l)
                }
            }, a = (n, o, r, s) => {
                let a = n;
                for (; a - o < s && a < r && e[a] === t[a - o];) ++a;
                return ((e, t, n) => ({start: e, end: t, diag: n}))(n, a, o)
            }, i = (n, s, i, l) => {
                const d = s - n, c = l - i;
                if (0 === d || 0 === c) return null;
                const u = d - c, m = c + d, f = (m % 2 == 0 ? m : m + 1) / 2;
                let g, p, h, b, v;
                for (o[1 + f] = n, r[1 + f] = s + 1, g = 0; g <= f; ++g) {
                    for (p = -g; p <= g; p += 2) {
                        for (h = p + f, p === -g || p !== g && o[h - 1] < o[h + 1] ? o[h] = o[h + 1] : o[h] = o[h - 1] + 1, b = o[h], v = b - n + i - p; b < s && v < l && e[b] === t[v];) o[h] = ++b, ++v;
                        if (u % 2 != 0 && u - g <= p && p <= u + g && r[h - u] <= o[h]) return a(r[h - u], p + n - i, s, l)
                    }
                    for (p = u - g; p <= u + g; p += 2) {
                        for (h = p + f - u, p === u - g || p !== u + g && r[h + 1] <= r[h - 1] ? r[h] = r[h + 1] - 1 : r[h] = r[h - 1], b = r[h] - 1, v = b - n + i - p; b >= n && v >= i && e[b] === t[v];) r[h] = b--, v--;
                        if (u % 2 == 0 && -g <= p && p <= g && r[h] <= o[h + u]) return a(r[h], p + n - i, s, l)
                    }
                }
                return null
            }, l = [];
            return s(0, e.length, 0, t.length, l), l
        })($(de(t.childNodes), zy), e), t), t), Hy = De((() => document.implementation.createHTMLDocument("undo"))),
        $y = e => {
            const t = (n = e.getBody(), K($(de(n.childNodes), zy), (e => e.length > 0)));
            var n;
            const o = ee(t, (t => {
                const n = vg(e.serializer, t);
                return n.length > 0 ? [n] : []
            })), r = o.join("");
            return (e => -1 !== e.indexOf("</iframe>"))(r) ? (e => ({
                type: "fragmented",
                fragments: e,
                content: "",
                bookmark: null,
                beforeBookmark: null
            }))(o) : (e => ({type: "complete", fragments: null, content: e, bookmark: null, beforeBookmark: null}))(r)
        }, Vy = (e, t, n) => {
            const o = n ? t.beforeBookmark : t.bookmark;
            "fragmented" === t.type ? jy(t.fragments, e.getBody()) : e.setContent(t.content, {
                format: "raw",
                no_selection: !C(o) || !su(o) || !o.isFakeCaret
            }), o && (e.selection.moveToBookmark(o), e.selection.scrollIntoView())
        }, qy = e => "fragmented" === e.type ? e.fragments.join("") : e.content, Wy = e => {
            const t = cn("body", Hy());
            return io(t, qy(e)), V(or(t, "*[data-mce-bogus]"), ro), ao(t)
        }, Ky = (e, t) => !(!e || !t) && (!!((e, t) => qy(e) === qy(t))(e, t) || ((e, t) => Wy(e) === Wy(t))(e, t)),
        Gy = e => 0 === e.get(), Yy = (e, t, n) => {
            Gy(n) && (e.typing = t)
        }, Xy = (e, t) => {
            e.typing && (Yy(e, !1, t), e.add())
        }, Qy = e => ({
            init: {bindEvents: S}, undoManager: {
                beforeChange: (t, n) => ((e, t, n) => {
                    Gy(t) && n.set($i(e.selection))
                })(e, t, n),
                add: (t, n, o, r, s, a) => ((e, t, n, o, r, s, a) => {
                    const i = $y(e), l = Tt.extend(s || {}, i);
                    if (!Gy(o) || e.removed) return null;
                    const d = t.data[n.get()];
                    if (e.dispatch("BeforeAddUndo", {
                        level: l,
                        lastLevel: d,
                        originalEvent: a
                    }).isDefaultPrevented()) return null;
                    if (d && Ky(d, l)) return null;
                    t.data[n.get()] && r.get().each((e => {
                        t.data[n.get()].beforeBookmark = e
                    }));
                    const c = id(e);
                    if (c && t.data.length > c) {
                        for (let e = 0; e < t.data.length - 1; e++) t.data[e] = t.data[e + 1];
                        t.data.length--, n.set(t.data.length)
                    }
                    l.bookmark = $i(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(l), n.set(t.data.length - 1);
                    const u = {level: l, lastLevel: d, originalEvent: a};
                    return n.get() > 0 ? (e.setDirty(!0), e.dispatch("AddUndo", u), e.dispatch("change", u)) : e.dispatch("AddUndo", u), l
                })(e, t, n, o, r, s, a),
                undo: (t, n, o) => ((e, t, n, o) => {
                    let r;
                    return t.typing && (t.add(), t.typing = !1, Yy(t, !1, n)), o.get() > 0 && (o.set(o.get() - 1), r = t.data[o.get()], Vy(e, r, !0), e.setDirty(!0), e.dispatch("Undo", {level: r})), r
                })(e, t, n, o),
                redo: (t, n) => ((e, t, n) => {
                    let o;
                    return t.get() < n.length - 1 && (t.set(t.get() + 1), o = n[t.get()], Vy(e, o, !1), e.setDirty(!0), e.dispatch("Redo", {level: o})), o
                })(e, t, n),
                clear: (t, n) => ((e, t, n) => {
                    t.data = [], n.set(0), t.typing = !1, e.dispatch("ClearUndos")
                })(e, t, n),
                reset: e => (e => {
                    e.clear(), e.add()
                })(e),
                hasUndo: (t, n) => ((e, t, n) => n.get() > 0 || t.typing && t.data[0] && !Ky($y(e), t.data[0]))(e, t, n),
                hasRedo: (e, t) => ((e, t) => t.get() < e.data.length - 1 && !e.typing)(e, t),
                transact: (e, t, n) => ((e, t, n) => (Xy(e, t), e.beforeChange(), e.ignore(n), e.add()))(e, t, n),
                ignore: (e, t) => ((e, t) => {
                    try {
                        e.set(e.get() + 1), t()
                    } finally {
                        e.set(e.get() - 1)
                    }
                })(e, t),
                extra: (t, n, o, r) => ((e, t, n, o, r) => {
                    if (t.transact(o)) {
                        const o = t.data[n.get()].bookmark, s = t.data[n.get() - 1];
                        Vy(e, s, !0), t.transact(r) && (t.data[n.get() - 1].beforeBookmark = o)
                    }
                })(e, t, n, o, r)
            }, formatter: {
                match: (t, n, o, r) => Xh(e, t, n, o, r),
                matchAll: (t, n) => ((e, t, n) => {
                    const o = [], r = {}, s = e.selection.getStart();
                    return e.dom.getParent(s, (s => {
                        for (let a = 0; a < t.length; a++) {
                            const i = t[a];
                            !r[i] && Yh(e, s, i, n) && (r[i] = !0, o.push(i))
                        }
                    }), e.dom.getRoot()), o
                })(e, t, n),
                matchNode: (t, n, o, r) => Yh(e, t, n, o, r),
                canApply: t => ((e, t) => {
                    const n = e.formatter.get(t), o = e.dom;
                    if (n) {
                        const t = e.selection.getStart(), r = Ju(o, t);
                        for (let e = n.length - 1; e >= 0; e--) {
                            const t = n[e];
                            if (!tm(t)) return !0;
                            for (let e = r.length - 1; e >= 0; e--) if (o.is(r[e], t.selector)) return !0
                        }
                    }
                    return !1
                })(e, t),
                closest: t => ((e, t) => {
                    const n = t => bn(t, mn(e.getBody()));
                    return M.from(e.selection.getStart(!0)).bind((o => $h(mn(o), (n => ce(t, (t => ((t, n) => Yh(e, t.dom, n) ? M.some(n) : M.none())(n, t)))), n))).getOrNull()
                })(e, t),
                apply: (t, n, o) => $b(e, t, n, o),
                remove: (t, n, o, r) => Ub(e, t, n, o, r),
                toggle: (t, n, o) => ((e, t, n, o) => {
                    const r = e.formatter.get(t);
                    r && (!Xh(e, t, n, o) || "toggle" in r[0] && !r[0].toggle ? $b(e, t, n, o) : Ub(e, t, n, o))
                })(e, t, n, o),
                formatChanged: (t, n, o, r, s) => ((e, t, n, o, r, s) => (((e, t, n, o, r, s) => {
                    const a = t.get();
                    V(n.split(","), (t => {
                        const n = we(a, t).getOrThunk((() => {
                            const e = {
                                withSimilar: {state: Ca(!1), similar: !0, callbacks: []},
                                withoutSimilar: {state: Ca(!1), similar: !1, callbacks: []},
                                withVars: []
                            };
                            return a[t] = e, e
                        })), i = () => {
                            const n = Kb(e);
                            return Wb(e, n, t, r, s).isSome()
                        };
                        if (v(s)) {
                            const e = r ? n.withSimilar : n.withoutSimilar;
                            e.callbacks.push(o), 1 === e.callbacks.length && e.state.set(i())
                        } else n.withVars.push({state: Ca(i()), similar: r, vars: s, callback: o})
                    })), t.set(a)
                })(e, t, n, o, r, s), {
                    unbind: () => ((e, t, n) => {
                        const o = e.get();
                        V(t.split(","), (e => we(o, e).each((t => {
                            o[e] = {
                                withSimilar: {...t.withSimilar, callbacks: K(t.withSimilar.callbacks, (e => e !== n))},
                                withoutSimilar: {
                                    ...t.withoutSimilar,
                                    callbacks: K(t.withoutSimilar.callbacks, (e => e !== n))
                                },
                                withVars: K(t.withVars, (e => e.callback !== n))
                            }
                        })))), e.set(o)
                    })(t, n, o)
                }))(e, t, n, o, r, s)
            }, editor: {
                getContent: t => ((e, t) => M.from(e.getBody()).fold(N("tree" === t.format ? new pg("body", 11) : ""), (n => xg(e, t, n))))(e, t),
                setContent: (t, n) => ((e, t, n) => M.from(e.getBody()).map((o => Uh(t) ? ((e, t, n, o) => {
                    kh(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                    const r = _g({validate: !1}, e.schema).serialize(n), s = br(mn(t)) ? r : Tt.trim(r);
                    return zh(e, s, o.no_selection), {content: n, html: s}
                })(e, o, t, n) : ((e, t, n, o) => {
                    if (0 === n.length || /^\s+$/.test(n)) {
                        const r = '<br data-mce-bogus="1">';
                        "TABLE" === t.nodeName ? n = "<tr><td>" + r + "</td></tr>" : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + r + "</li>");
                        const s = gl(e);
                        return e.schema.isValidChild(t.nodeName.toLowerCase(), s.toLowerCase()) ? (n = r, n = e.dom.createHTML(s, pl(e), n)) : n || (n = r), zh(e, n, o.no_selection), {
                            content: n,
                            html: n
                        }
                    }
                    {
                        "raw" !== o.format && (n = _g({validate: !1}, e.schema).serialize(e.parser.parse(n, {
                            isRootContent: !0,
                            insert: !0
                        })));
                        const r = br(mn(t)) ? n : Tt.trim(n);
                        return zh(e, r, o.no_selection), {content: r, html: r}
                    }
                })(e, o, t, n))).getOr({content: t, html: Uh(n.content) ? "" : n.content}))(e, t, n),
                insertContent: (t, n) => Fh(e, t, n),
                addVisual: t => ((e, t) => {
                    const n = e.dom, o = C(t) ? t : e.getBody();
                    V(n.select("table,a", o), (t => {
                        switch (t.nodeName) {
                            case"TABLE":
                                const o = pd(e), r = n.getAttrib(t, "border");
                                r && "0" !== r || !e.hasVisual ? n.removeClass(t, o) : n.addClass(t, o);
                                break;
                            case"A":
                                if (!n.getAttrib(t, "href")) {
                                    const o = n.getAttrib(t, "name") || t.id, r = hd(e);
                                    o && e.hasVisual ? n.addClass(t, r) : n.removeClass(t, r)
                                }
                        }
                    })), e.dispatch("VisualAid", {element: t, hasVisual: e.hasVisual})
                })(e, t)
            }, selection: {
                getContent: (t, n) => ((e, t, n = {}) => {
                    const o = ((e, t) => ({...e, format: t, get: !0, selection: !0, getInner: !0}))(n, t);
                    return wy(e, o).fold(R, (t => {
                        const n = ((e, t) => {
                            if ("text" === t.format) return (e => M.from(e.selection.getRng()).map((t => {
                                var n;
                                const o = M.from(e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock)),
                                    r = e.getBody(), s = (e => e.map((e => e.nodeName)).getOr("div").toLowerCase())(o),
                                    a = mn(t.cloneContents());
                                Cg(a), wg(a);
                                const i = e.dom.add(r, s, {
                                    "data-mce-bogus": "all",
                                    style: "overflow: hidden; opacity: 0;"
                                }, a.dom), l = Uy(i), d = _r(null !== (n = i.textContent) && void 0 !== n ? n : "");
                                if (e.dom.remove(i), Fy(d, 0) || Fy(d, d.length - 1)) {
                                    const e = o.getOr(r), t = Uy(e), n = t.indexOf(l);
                                    return -1 === n ? l : (Fy(t, n - 1) ? " " : "") + l + (Fy(t, n + l.length) ? " " : "")
                                }
                                return l
                            })).getOr(""))(e);
                            {
                                const n = ((e, t) => {
                                    const n = e.selection.getRng(), o = e.dom.create("body"), r = e.selection.getSel(),
                                        s = sg(e, Eu(r)), a = t.contextual ? Iy(mn(e.getBody()), s).dom : n.cloneContents();
                                    return a && o.appendChild(a), e.selection.serializer.serialize(o, t)
                                })(e, t);
                                return "tree" === t.format ? n : e.selection.isCollapsed() ? "" : n
                            }
                        })(e, t);
                        return xy(e, n, t)
                    }))
                })(e, t, n)
            }, autocompleter: {
                addDecoration: t => dg(e, t), removeDecoration: () => ((e, t) => cg(t).each((t => {
                    const n = e.selection.getBookmark();
                    ro(t), e.selection.moveToBookmark(n)
                })))(e, mn(e.getBody()))
            }, raw: {getModel: () => M.none()}
        }), Jy = e => xe(e.plugins, "rtc"), Zy = e => e.rtcInstance ? e.rtcInstance : Qy(e), eC = e => {
            const t = e.rtcInstance;
            if (t) return t;
            throw new Error("Failed to get RTC instance not yet initialized.")
        }, tC = e => eC(e).init.bindEvents(), nC = e => 0 === e.dom.length ? (oo(e), M.none()) : M.some(e),
        oC = (e, t, n, o) => {
            e.bind((e => ((o ? kp : xp)(e.dom, o ? e.dom.length : 0), t.filter(Ut).map((t => ((e, t, n, o) => {
                const r = e.dom, s = t.dom, a = o ? r.length : s.length;
                o ? (Sp(r, s, !1, !o), n.setStart(s, a)) : (Sp(s, r, !1, !o), n.setEnd(s, a))
            })(e, t, n, o)))))).orThunk((() => {
                const e = ((e, t) => e.filter((e => _m.isBookmarkNode(e.dom))).bind(t ? En : _n))(t, o).or(t).filter(Ut);
                return e.map((e => ((e, t) => {
                    xn(e).each((n => {
                        const o = e.dom;
                        t && fp(n, xi(o, 0)) ? xp(o, 0) : !t && gp(n, xi(o, o.length)) && kp(o, o.length)
                    }))
                })(e, o)))
            }))
        }, rC = (e, t, n) => {
            if (xe(e, t)) {
                const o = K(e[t], (e => e !== n));
                0 === o.length ? delete e[t] : e[t] = o
            }
        };
    const sC = e => !(!e || !e.ownerDocument) && vn(mn(e.ownerDocument), mn(e)), aC = (e, t, n, o) => {
            let r, s;
            const {selectorChangedWithUnbind: a} = ((e, t) => {
                let n, o;
                const r = (t, n) => Q(n, (n => e.is(n, t))), s = t => e.getParents(t, void 0, e.getRoot());
                return {
                    selectorChangedWithUnbind: (e, a) => (n || (n = {}, o = {}, t.on("NodeChange", (e => {
                        const t = e.element, a = s(t), i = {};
                        fe(n, ((e, t) => {
                            r(t, a).each((n => {
                                o[t] || (V(e, (e => {
                                    e(!0, {node: n, selector: t, parents: a})
                                })), o[t] = e), i[t] = e
                            }))
                        })), fe(o, ((e, n) => {
                            i[n] || (delete o[n], V(e, (e => {
                                e(!1, {node: t, selector: n, parents: a})
                            })))
                        }))
                    }))), n[e] || (n[e] = []), n[e].push(a), r(e, s(t.selection.getStart())).each((() => {
                        o[e] = n[e]
                    })), {
                        unbind: () => {
                            rC(n, e, a), rC(o, e, a)
                        }
                    })
                }
            })(e, o), i = (e, t) => ((e, t, n = {}) => {
                const o = ((e, t) => ({format: "html", ...e, set: !0, selection: !0, content: t}))(n, t);
                ky(e, o).each((t => {
                    const n = ((e, t) => {
                        if ("raw" !== t.format) {
                            const n = e.selection.getRng(), o = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                                r = o ? {context: o.nodeName.toLowerCase()} : {},
                                s = e.parser.parse(t.content, {forced_root_block: !1, ...r, ...t});
                            return _g({validate: !1}, e.schema).serialize(s)
                        }
                        return t.content
                    })(e, t), o = e.selection.getRng();
                    ((e, t) => {
                        const n = M.from(t.firstChild).map(mn), o = M.from(t.lastChild).map(mn);
                        e.deleteContents(), e.insertNode(t);
                        const r = n.bind(_n).filter(Ut).bind(nC), s = o.bind(En).filter(Ut).bind(nC);
                        oC(r, n, e, !0), oC(s, o, e, !1), e.collapse(!1)
                    })(o, o.createContextualFragment(n)), e.selection.setRng(o), Bf(e, o), Sy(e, n, t)
                }))
            })(o, e, t), l = e => {
                const t = c();
                t.collapse(!!e), u(t)
            }, d = () => t.getSelection ? t.getSelection() : t.document.selection, c = () => {
                let n;
                const a = (e, t, n) => {
                    try {
                        return t.compareBoundaryPoints(e, n)
                    } catch (e) {
                        return -1
                    }
                }, i = t.document;
                if (C(o.bookmark) && !Zf(o)) {
                    const e = $f(o);
                    if (e.isSome()) return e.map((e => sg(o, [e])[0])).getOr(i.createRange())
                }
                try {
                    const e = d();
                    e && !Oo(e.anchorNode) && (n = e.rangeCount > 0 ? e.getRangeAt(0) : i.createRange(), n = sg(o, [n])[0])
                } catch (e) {
                }
                if (n || (n = i.createRange()), Vo(n.startContainer) && n.collapsed) {
                    const t = e.getRoot();
                    n.setStart(t, 0), n.setEnd(t, 0)
                }
                return r && s && (0 === a(n.START_TO_START, n, r) && 0 === a(n.END_TO_END, n, r) ? n = s : (r = null, s = null)), n
            }, u = (e, t) => {
                if (!(e => !!e && sC(e.startContainer) && sC(e.endContainer))(e)) return;
                const n = d();
                if (e = o.dispatch("SetSelectionRange", {range: e, forward: t}).range, n) {
                    s = e;
                    try {
                        n.removeAllRanges(), n.addRange(e)
                    } catch (e) {
                    }
                    !1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), r = n.rangeCount > 0 ? n.getRangeAt(0) : null
                }
                if (!e.collapsed && e.startContainer === e.endContainer && (null == n ? void 0 : n.setBaseAndExtent) && e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes()) {
                    const t = e.startContainer.childNodes[e.startOffset];
                    t && "IMG" === t.nodeName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(t, 0, t, 1))
                }
                o.dispatch("AfterSetSelectionRange", {range: e, forward: t})
            }, m = () => {
                const t = d(), n = null == t ? void 0 : t.anchorNode, o = null == t ? void 0 : t.focusNode;
                if (!t || !n || !o || Oo(n) || Oo(o)) return !0;
                const r = e.createRng(), s = e.createRng();
                try {
                    r.setStart(n, t.anchorOffset), r.collapse(!0), s.setStart(o, t.focusOffset), s.collapse(!0)
                } catch (e) {
                    return !0
                }
                return r.compareBoundaryPoints(r.START_TO_START, s) <= 0
            }, f = {
                dom: e,
                win: t,
                serializer: n,
                editor: o,
                expand: (t = {type: "word"}) => u(mf(e).expand(c(), t)),
                collapse: l,
                setCursorLocation: (t, n) => {
                    const r = e.createRng();
                    C(t) && C(n) ? (r.setStart(t, n), r.setEnd(t, n), u(r), l(!1)) : (Du(e, r, o.getBody(), !0), u(r))
                },
                getContent: e => ((e, t = {}) => ((e, t, n) => eC(e).selection.getContent(t, n))(e, t.format ? t.format : "html", t))(o, e),
                setContent: i,
                getBookmark: (e, t) => g.getBookmark(e, t),
                moveToBookmark: e => g.moveToBookmark(e),
                select: (t, n) => (((e, t, n) => M.from(t).bind((t => M.from(t.parentNode).map((o => {
                    const r = e.nodeIndex(t), s = e.createRng();
                    return s.setStart(o, r), s.setEnd(o, r + 1), n && (Du(e, s, t, !0), Du(e, s, t, !1)), s
                })))))(e, t, n).each(u), t),
                isCollapsed: () => {
                    const e = c(), t = d();
                    return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                },
                isForward: m,
                setNode: t => (i(e.getOuterHTML(t)), t),
                getNode: () => ((e, t) => {
                    if (!t) return e;
                    let n = t.startContainer, o = t.endContainer;
                    const r = t.startOffset, s = t.endOffset;
                    let a = t.commonAncestorContainer;
                    t.collapsed || (n === o && s - r < 2 && n.hasChildNodes() && (a = n.childNodes[r]), zo(n) && zo(o) && (n = n.length === r ? rg(n.nextSibling, !0) : n.parentNode, o = 0 === s ? rg(o.previousSibling, !1) : o.parentNode, n && n === o && (a = n)));
                    const i = zo(a) ? a.parentNode : a;
                    return To(i) ? i : e
                })(o.getBody(), c()),
                getSel: d,
                setRng: u,
                getRng: c,
                getStart: e => ng(o.getBody(), c(), e),
                getEnd: e => og(o.getBody(), c(), e),
                getSelectedBlocks: (t, n) => ((e, t, n, o) => {
                    const r = [], s = e.getRoot(), a = e.getParent(n || ng(s, t, t.collapsed), e.isBlock),
                        i = e.getParent(o || og(s, t, t.collapsed), e.isBlock);
                    if (a && a !== s && r.push(a), a && i && a !== i) {
                        let t = a;
                        const n = new Ro(a, s);
                        for (; (t = n.next()) && t !== i;) e.isBlock(t) && r.push(t)
                    }
                    return i && a !== i && i !== s && r.push(i), r
                })(e, c(), t, n),
                normalize: () => {
                    const t = c(), n = d();
                    if (!(Eu(n).length > 1) && Pu(o)) {
                        const n = df(e, t);
                        return n.each((e => {
                            u(e, m())
                        })), n.getOr(t)
                    }
                    return t
                },
                selectorChanged: (e, t) => (a(e, t), f),
                selectorChangedWithUnbind: a,
                getScrollContainer: () => {
                    let t, n = e.getRoot();
                    for (; n && "BODY" !== n.nodeName;) {
                        if (n.scrollHeight > n.clientHeight) {
                            t = n;
                            break
                        }
                        n = n.parentNode
                    }
                    return t
                },
                scrollIntoView: (e, t) => {
                    C(e) ? ((e, t, n) => {
                        (e.inline ? Af : Tf)(e, t, n)
                    })(o, e, t) : Bf(o, c(), t)
                },
                placeCaretAt: (e, t) => u(ef(e, t, o.getDoc())),
                getBoundingClientRect: () => {
                    const e = c();
                    return e.collapsed ? xi.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
                },
                destroy: () => {
                    t = r = s = null, p.destroy()
                }
            }, g = _m(f), p = Fm(f, o);
            return f.bookmarkManager = g, f.controlSelection = p, f
        }, iC = (e, t, n) => {
            -1 === Tt.inArray(t, n) && (e.addAttributeFilter(n, ((e, t) => {
                let n = e.length;
                for (; n--;) e[n].attr(t, null)
            })), t.push(n))
        }, lC = (e, t) => {
            const n = ["data-mce-selected"], o = t && t.dom ? t.dom : ba.DOM, r = t && t.schema ? t.schema : Qs(e);
            e.entity_encoding = e.entity_encoding || "named", e.remove_trailing_brs = !("remove_trailing_brs" in e) || e.remove_trailing_brs;
            const s = yy(e, r);
            return ((e, t, n) => {
                e.addAttributeFilter("data-mce-tabindex", ((e, t) => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        o.attr("tabindex", o.attr("data-mce-tabindex")), o.attr(t, null)
                    }
                })), e.addAttributeFilter("src,href,style", ((e, o) => {
                    const r = "data-mce-" + o, s = t.url_converter, a = t.url_converter_scope;
                    let i = e.length;
                    for (; i--;) {
                        const t = e[i];
                        let l = t.attr(r);
                        void 0 !== l ? (t.attr(o, l.length > 0 ? l : null), t.attr(r, null)) : (l = t.attr(o), "style" === o ? l = n.serializeStyle(n.parseStyle(l), t.name) : s && (l = s.call(a, l, o, t.name)), t.attr(o, l.length > 0 ? l : null))
                    }
                })), e.addAttributeFilter("class", (e => {
                    let t = e.length;
                    for (; t--;) {
                        const n = e[t];
                        let o = n.attr("class");
                        o && (o = o.replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), n.attr("class", o.length > 0 ? o : null))
                    }
                })), e.addAttributeFilter("data-mce-type", ((e, t, n) => {
                    let o = e.length;
                    for (; o--;) {
                        const t = e[o];
                        if ("bookmark" === t.attr("data-mce-type") && !n.cleanup) {
                            const e = M.from(t.firstChild).exists((e => {
                                var t;
                                return !Sr(null !== (t = e.value) && void 0 !== t ? t : "")
                            }));
                            e ? t.unwrap() : t.remove()
                        }
                    }
                })), e.addNodeFilter("noscript", (e => {
                    var t;
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n].firstChild;
                        o && (o.value = Fs.decode(null !== (t = o.value) && void 0 !== t ? t : ""))
                    }
                })), e.addNodeFilter("script,style", ((e, n) => {
                    var o;
                    const r = e => e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
                    let s = e.length;
                    for (; s--;) {
                        const a = e[s], i = a.firstChild,
                            l = null !== (o = null == i ? void 0 : i.value) && void 0 !== o ? o : "";
                        if ("script" === n) {
                            const e = a.attr("type");
                            e && a.attr("type", "mce-no/type" === e ? null : e.replace(/^mce\-/, "")), "xhtml" === t.element_format && i && l.length > 0 && (i.value = "// <![CDATA[\n" + r(l) + "\n// ]]>")
                        } else "xhtml" === t.element_format && i && l.length > 0 && (i.value = "\x3c!--\n" + r(l) + "\n--\x3e")
                    }
                })), e.addNodeFilter("#comment", (e => {
                    let o = e.length;
                    for (; o--;) {
                        const r = e[o], s = r.value;
                        t.preserve_cdata && 0 === (null == s ? void 0 : s.indexOf("[CDATA[")) ? (r.name = "#cdata", r.type = 4, r.value = n.decode(s.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === (null == s ? void 0 : s.indexOf("mce:protected ")) && (r.name = "#text", r.type = 3, r.raw = !0, r.value = unescape(s).substr(14))
                    }
                })), e.addNodeFilter("xml:namespace,input", ((e, t) => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        7 === o.type ? o.remove() : 1 === o.type && ("input" !== t || o.attr("type") || o.attr("type", "text"))
                    }
                })), e.addAttributeFilter("data-mce-type", (t => {
                    V(t, (t => {
                        "format-caret" === t.attr("data-mce-type") && (t.isEmpty(e.schema.getNonEmptyElements()) ? t.remove() : t.unwrap())
                    }))
                })), e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-block,data-mce-type,data-mce-resize,data-mce-placeholder", ((e, t) => {
                    let n = e.length;
                    for (; n--;) e[n].attr(t, null)
                }))
            })(s, e, o), {
                schema: r,
                addNodeFilter: s.addNodeFilter,
                addAttributeFilter: s.addAttributeFilter,
                serialize: (n, a = {}) => {
                    const i = {format: "html", ...a},
                        l = ((e, t, n) => ((e, t) => C(e) && e.hasEventListeners("PreProcess") && !t.no_events)(e, n) ? ((e, t, n) => {
                            let o;
                            const r = e.dom;
                            let s = t.cloneNode(!0);
                            const a = document.implementation;
                            if (a.createHTMLDocument) {
                                const e = a.createHTMLDocument("");
                                Tt.each("BODY" === s.nodeName ? s.childNodes : [s], (t => {
                                    e.body.appendChild(e.importNode(t, !0))
                                })), s = "BODY" !== s.nodeName ? e.body.firstChild : e.body, o = r.doc, r.doc = e
                            }
                            return ((e, t) => {
                                e.dispatch("PreProcess", t)
                            })(e, {...n, node: s}), o && (r.doc = o), s
                        })(e, t, n) : t)(t, n, i), d = ((e, t, n) => {
                            const o = _r(n.getInner ? t.innerHTML : e.getOuterHTML(t));
                            return n.selection || br(mn(t)) ? o : Tt.trim(o)
                        })(o, l, i), c = ((e, t, n) => {
                            const o = n.selection ? {forced_root_block: !1, ...n} : n, r = e.parse(t, o);
                            return (e => {
                                const t = e => "br" === (null == e ? void 0 : e.name), n = e.lastChild;
                                if (t(n)) {
                                    const e = n.prev;
                                    t(e) && (n.remove(), e.remove())
                                }
                            })(r), r
                        })(s, d, i);
                    return "tree" === i.format ? c : ((e, t, n, o, r) => {
                        const s = ((e, t, n) => _g(e, t).serialize(n))(t, n, o);
                        return ((e, t, n) => {
                            if (!t.no_events && e) {
                                const o = ((e, t) => e.dispatch("PostProcess", t))(e, {...t, content: n});
                                return o.content
                            }
                            return n
                        })(e, r, s)
                    })(t, e, r, c, i)
                },
                addRules: r.addValidElements,
                setRules: r.setValidElements,
                addTempAttr: O(iC, s, n),
                getTempAttrs: N(n),
                getNodeFilters: s.getNodeFilters,
                getAttributeFilters: s.getAttributeFilters,
                removeNodeFilter: s.removeNodeFilter,
                removeAttributeFilter: s.removeAttributeFilter
            }
        }, dC = (e, t) => {
            const n = lC(e, t);
            return {
                schema: n.schema,
                addNodeFilter: n.addNodeFilter,
                addAttributeFilter: n.addAttributeFilter,
                serialize: n.serialize,
                addRules: n.addRules,
                setRules: n.setRules,
                addTempAttr: n.addTempAttr,
                getTempAttrs: n.getTempAttrs,
                getNodeFilters: n.getNodeFilters,
                getAttributeFilters: n.getAttributeFilters,
                removeNodeFilter: n.removeNodeFilter,
                removeAttributeFilter: n.removeAttributeFilter
            }
        }, cC = (e, t, n = {}) => {
            const o = ((e, t) => ({format: "html", ...e, set: !0, content: t}))(n, t);
            return ky(e, o).map((t => {
                const n = ((e, t, n) => Zy(e).editor.setContent(t, n))(e, t.content, t);
                return Sy(e, n.html, t), n.content
            })).getOr(t)
        },
        uC = "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(","),
        mC = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","), fC = e => {
            const t = K(uC, (t => xe(e, t))), n = e.forced_root_block;
            return !1 !== n && "" !== n || t.push("forced_root_block (false only)"), se(t)
        }, gC = e => {
            const t = Tt.makeMap(e.plugins, " "), n = K(mC, (e => xe(t, e)));
            return se(n)
        }, pC = ba.DOM, hC = e => M.from(e).each((e => e.destroy())), bC = (() => {
            const e = {};
            return {
                add: (t, n) => {
                    e[t] = n
                }, get: t => e[t] ? e[t] : {icons: {}}, has: t => xe(e, t)
            }
        })(), vC = _a.ModelManager, yC = (e, t) => t.dom[e], CC = (e, t) => parseInt(Wn(t, e), 10),
        wC = O(yC, "clientWidth"), xC = O(yC, "clientHeight"), kC = O(CC, "margin-top"), SC = O(CC, "margin-left"),
        _C = e => {
            const t = [], n = () => {
                const t = e.theme;
                return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : (() => {
                    const e = () => {
                        throw new Error("Theme did not provide a NotificationManager implementation.")
                    };
                    return {open: e, close: e, getArgs: e}
                })()
            }, o = () => M.from(t[0]), r = () => {
                V(t, (e => {
                    e.reposition()
                }))
            }, s = e => {
                J(t, (t => t === e)).each((e => {
                    t.splice(e, 1)
                }))
            }, a = (a, i = !0) => e.removed || !(e => {
                return (t = e.inline ? e.getBody() : e.getContentAreaContainer(), M.from(t).map(mn)).map(Hn).getOr(!1);
                var t
            })(e) ? {} : (i && e.dispatch("BeforeOpenNotification", {notification: a}), Q(t, (e => {
                return t = n().getArgs(e), o = a, !(t.type !== o.type || t.text !== o.text || t.progressBar || t.timeout || o.progressBar || o.timeout);
                var t, o
            })).getOrThunk((() => {
                e.editorManager.setActive(e);
                const i = n().open(a, (() => {
                    s(i), r(), o().fold((() => e.focus()), (e => Df(mn(e.getEl()))))
                }));
                return (e => {
                    t.push(e)
                })(i), r(), e.dispatch("OpenNotification", {notification: {...i}}), i
            }))), i = N(t);
            return (e => {
                e.on("SkinLoaded", (() => {
                    const t = ql(e);
                    t && a({text: t, type: "warning", timeout: 0}, !1), r()
                })), e.on("show ResizeEditor ResizeWindow NodeChange", (() => {
                    requestAnimationFrame(r)
                })), e.on("remove", (() => {
                    V(t.slice(), (e => {
                        n().close(e)
                    }))
                }))
            })(e), {
                open: a, close: () => {
                    o().each((e => {
                        n().close(e), s(e), r()
                    }))
                }, getNotifications: i
            }
        }, EC = _a.PluginManager, NC = _a.ThemeManager, RC = e => {
            let t = [];
            const n = () => {
                const t = e.theme;
                return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : (() => {
                    const e = () => {
                        throw new Error("Theme did not provide a WindowManager implementation.")
                    };
                    return {open: e, openUrl: e, alert: e, confirm: e, close: e}
                })()
            }, o = (e, t) => (...n) => t ? t.apply(e, n) : void 0, r = n => {
                (t => {
                    e.dispatch("CloseWindow", {dialog: t})
                })(n), t = K(t, (e => e !== n)), 0 === t.length && e.focus()
            }, s = n => {
                e.editorManager.setActive(e), Hf(e), e.ui.show();
                const o = n();
                return (n => {
                    t.push(n), (t => {
                        e.dispatch("OpenWindow", {dialog: t})
                    })(n)
                })(o), o
            };
            return e.on("remove", (() => {
                V(t, (e => {
                    n().close(e)
                }))
            })), {
                open: (e, t) => s((() => n().open(e, t, r))),
                openUrl: e => s((() => n().openUrl(e, r))),
                alert: (e, t, r) => {
                    const s = n();
                    s.alert(e, o(r || s, t))
                },
                confirm: (e, t, r) => {
                    const s = n();
                    s.confirm(e, o(r || s, t))
                },
                close: () => {
                    M.from(t[t.length - 1]).each((e => {
                        n().close(e), r(e)
                    }))
                }
            }
        }, AC = (e, t) => {
            e.notificationManager.open({type: "error", text: t})
        }, OC = (e, t) => {
            e._skinLoaded ? AC(e, t) : e.on("SkinLoaded", (() => {
                AC(e, t)
            }))
        }, TC = (e, t, n) => {
            Nm(e, t, {message: n}), console.error(n)
        }, BC = (e, t, n) => n ? `Failed to load ${e}: ${n} from url ${t}` : `Failed to load ${e} url: ${t}`,
        DC = (e, ...t) => {
            const n = window.console;
            n && (n.error ? n.error(e, ...t) : n.log(e, ...t))
        }, PC = (e, t) => {
            const n = e.editorManager.baseURL + "/skins/content", o = `content${e.editorManager.suffix}.css`;
            return $(t, (t => (e => /^[a-z0-9\-]+$/i.test(e))(t) && !e.inline ? `${n}/${t}/${o}` : e.documentBaseURI.toAbsolute(t)))
        }, LC = L, MC = (e, t) => {
            const n = {};
            return {
                findAll: (o, r = L) => {
                    const s = K((e => e ? de(e.getElementsByTagName("img")) : [])(o), (t => {
                        const n = t.src;
                        return !t.hasAttribute("data-mce-bogus") && !t.hasAttribute("data-mce-placeholder") && !(!n || n === Nt.transparentSrc) && (ze(n, "blob:") ? !e.isUploaded(n) && r(t) : !!ze(n, "data:") && r(t))
                    })), a = $(s, (e => {
                        const o = e.src;
                        if (xe(n, o)) return n[o].then((t => m(t) ? t : {image: e, blobInfo: t.blobInfo}));
                        {
                            const r = ((e, t) => {
                                const n = () => Promise.reject("Invalid data URI");
                                if (ze(t, "blob:")) {
                                    const s = e.getByUri(t);
                                    return C(s) ? Promise.resolve(s) : (o = t, ze(o, "blob:") ? (e => fetch(e).then((e => e.ok ? e.blob() : Promise.reject())).catch((() => Promise.reject(`Cannot convert ${e} to Blob. Resource might not exist or is inaccessible.`))))(o) : ze(o, "data:") ? (r = o, new Promise(((e, t) => {
                                        Jv(r).bind((({
                                                         type: e,
                                                         data: t,
                                                         base64Encoded: n
                                                     }) => Zv(e, t, n))).fold((() => t("Invalid data URI")), e)
                                    }))) : Promise.reject("Unknown URI format")).then((t => ey(t).then((o => ny(o, !1, (n => M.some(oy(e, t, n)))).getOrThunk(n)))))
                                }
                                var o, r;
                                return ze(t, "data:") ? ry(e, t).fold(n, (e => Promise.resolve(e))) : Promise.reject("Unknown image data format")
                            })(t, o).then((t => (delete n[o], {image: e, blobInfo: t}))).catch((e => (delete n[o], e)));
                            return n[o] = r, r
                        }
                    }));
                    return Promise.all(a)
                }
            }
        }, IC = () => {
            let e = {};
            const t = (e, t) => ({status: e, resultUri: t}), n = t => t in e;
            return {
                hasBlobUri: n,
                getResultUri: t => {
                    const n = e[t];
                    return n ? n.resultUri : null
                },
                isPending: t => !!n(t) && 1 === e[t].status,
                isUploaded: t => !!n(t) && 2 === e[t].status,
                markPending: n => {
                    e[n] = t(1, null)
                },
                markUploaded: (n, o) => {
                    e[n] = t(2, o)
                },
                removeFailed: t => {
                    delete e[t]
                },
                destroy: () => {
                    e = {}
                }
            }
        };
    let FC = 0;
    const UC = (e, t) => {
            const n = {}, o = (e, n) => new Promise(((o, r) => {
                    const s = new XMLHttpRequest;
                    s.open("POST", t.url), s.withCredentials = t.credentials, s.upload.onprogress = e => {
                        n(e.loaded / e.total * 100)
                    }, s.onerror = () => {
                        r("Image upload failed due to a XHR Transport error. Code: " + s.status)
                    }, s.onload = () => {
                        if (s.status < 200 || s.status >= 300) return void r("HTTP Error: " + s.status);
                        const e = JSON.parse(s.responseText);
                        var n, a;
                        e && m(e.location) ? o((n = t.basePath, a = e.location, n ? n.replace(/\/$/, "") + "/" + a.replace(/^\//, "") : a)) : r("Invalid JSON: " + s.responseText)
                    };
                    const a = new FormData;
                    a.append("file", e.blob(), e.filename()), s.send(a)
                })), r = w(t.handler) ? t.handler : o, s = (e, t) => ({url: t, blobInfo: e, status: !0}),
                a = (e, t) => ({url: "", blobInfo: e, status: !1, error: t}), i = (e, t) => {
                    Tt.each(n[e], (e => {
                        e(t)
                    })), delete n[e]
                };
            return {
                upload: (l, d) => t.url || r !== o ? ((t, o) => (t = Tt.grep(t, (t => !e.isUploaded(t.blobUri()))), Promise.all(Tt.map(t, (t => e.isPending(t.blobUri()) ? (e => {
                    const t = e.blobUri();
                    return new Promise((e => {
                        n[t] = n[t] || [], n[t].push(e)
                    }))
                })(t) : ((t, n, o) => (e.markPending(t.blobUri()), new Promise((r => {
                    let l, d;
                    try {
                        const c = () => {
                            l && (l.close(), d = S)
                        }, u = n => {
                            c(), e.markUploaded(t.blobUri(), n), i(t.blobUri(), s(t, n)), r(s(t, n))
                        }, f = n => {
                            c(), e.removeFailed(t.blobUri()), i(t.blobUri(), a(t, n)), r(a(t, n))
                        };
                        d = e => {
                            e < 0 || e > 100 || M.from(l).orThunk((() => M.from(o).map(B))).each((t => {
                                l = t, t.progressBar.value(e)
                            }))
                        }, n(t, d).then(u, (e => {
                            f(m(e) ? {message: e} : e)
                        }))
                    } catch (e) {
                        r(a(t, e))
                    }
                }))))(t, r, o))))))(l, d) : new Promise((e => {
                    e([])
                }))
            }
        }, zC = e => () => e.notificationManager.open({
            text: e.translate("Image uploading..."),
            type: "info",
            timeout: -1,
            progressBar: !0
        }), jC = (e, t) => UC(t, {url: El(e), basePath: Nl(e), credentials: Rl(e), handler: Al(e)}), HC = e => {
            const t = (() => {
                let e = [];
                const t = e => {
                    if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
                    const t = e.id || "blobid" + FC++ + (() => {
                        const e = () => Math.round(4294967295 * Math.random()).toString(36);
                        return "s" + (new Date).getTime().toString(36) + e() + e() + e()
                    })(), n = e.name || t, o = e.blob;
                    var r;
                    return {
                        id: N(t),
                        name: N(n),
                        filename: N(e.filename || n + "." + (r = o.type, {
                            "image/jpeg": "jpg",
                            "image/jpg": "jpg",
                            "image/gif": "gif",
                            "image/png": "png",
                            "image/apng": "apng",
                            "image/avif": "avif",
                            "image/svg+xml": "svg",
                            "image/webp": "webp",
                            "image/bmp": "bmp",
                            "image/tiff": "tiff"
                        }[r.toLowerCase()] || "dat")),
                        blob: N(o),
                        base64: N(e.base64),
                        blobUri: N(e.blobUri || URL.createObjectURL(o)),
                        uri: N(e.uri)
                    }
                }, n = t => Q(e, t).getOrUndefined(), o = e => n((t => t.id() === e));
                return {
                    create: (e, n, o, r, s) => {
                        if (m(e)) return t({id: e, name: r, filename: s, blob: n, base64: o});
                        if (f(e)) return t(e);
                        throw new Error("Unknown input type")
                    },
                    add: t => {
                        o(t.id()) || e.push(t)
                    },
                    get: o,
                    getByUri: e => n((t => t.blobUri() === e)),
                    getByData: (e, t) => n((n => n.base64() === e && n.blob().type === t)),
                    findFirst: n,
                    removeByUri: t => {
                        e = K(e, (e => e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1)))
                    },
                    destroy: () => {
                        V(e, (e => {
                            URL.revokeObjectURL(e.blobUri())
                        })), e = []
                    }
                }
            })();
            let n, o;
            const r = IC(), s = [], a = t => n => e.selection ? t(n) : [], i = (e, t, n) => {
                    let o = 0;
                    do {
                        o = e.indexOf(t, o), -1 !== o && (e = e.substring(0, o) + n + e.substr(o + t.length), o += n.length - t.length + 1)
                    } while (-1 !== o);
                    return e
                }, l = (e, t, n) => {
                    const o = `src="${n}"${n === Nt.transparentSrc ? ' data-mce-placeholder="1"' : ""}`;
                    return e = i(e, `src="${t}"`, o), i(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
                }, d = (t, n) => {
                    V(e.undoManager.data, (e => {
                        "fragmented" === e.type ? e.fragments = $(e.fragments, (e => l(e, t, n))) : e.content = l(e.content, t, n)
                    }))
                }, c = () => (n || (n = jC(e, r)), p().then(a((o => {
                    const r = $(o, (e => e.blobInfo));
                    return n.upload(r, zC(e)).then(a((n => {
                        const r = [];
                        let s = !1;
                        const a = $(n, ((n, a) => {
                            const {blobInfo: i, image: l} = o[a];
                            let c = !1;
                            return n.status && kl(e) ? (n.url && !Ue(l.src, n.url) && (s = !0), t.removeByUri(l.src), Jy(e) || ((t, n) => {
                                const o = e.convertURL(n, "src");
                                var r;
                                d(t.src, n), qt(mn(t), {
                                    src: xl(e) ? (r = n, r + (-1 === r.indexOf("?") ? "?" : "&") + (new Date).getTime()) : n,
                                    "data-mce-src": o
                                })
                            })(l, n.url)) : n.error && (n.error.remove && (d(l.src, Nt.transparentSrc), r.push(l), c = !0), ((e, t) => {
                                OC(e, Sa.translate(["Failed to upload image: {0}", t]))
                            })(e, n.error.message)), {element: l, status: n.status, uploadUri: n.url, blobInfo: i, removed: c}
                        }));
                        return r.length > 0 && !Jy(e) ? e.undoManager.transact((() => {
                            V(r, (n => {
                                e.dom.remove(n), t.removeByUri(n.src)
                            }))
                        })) : s && e.undoManager.dispatchChange(), a
                    })))
                })))), u = () => wl(e) ? c() : Promise.resolve([]), g = e => te(s, (t => t(e))),
                p = () => (o || (o = MC(r, t)), o.findAll(e.getBody(), g).then(a((t => {
                    const n = K(t, (t => !m(t) || (OC(e, t), !1)));
                    return Jy(e) || V(n, (e => {
                        d(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                    })), n
                })))), h = n => n.replace(/src="(blob:[^"]+)"/g, ((n, o) => {
                    const s = r.getResultUri(o);
                    if (s) return 'src="' + s + '"';
                    let a = t.getByUri(o);
                    return a || (a = Y(e.editorManager.get(), ((e, t) => e || t.editorUpload && t.editorUpload.blobCache.getByUri(o)), void 0)), a ? 'src="data:' + a.blob().type + ";base64," + a.base64() + '"' : n
                }));
            return e.on("SetContent", (() => {
                wl(e) ? u() : p()
            })), e.on("RawSaveContent", (e => {
                e.content = h(e.content)
            })), e.on("GetContent", (e => {
                e.source_view || "raw" === e.format || "tree" === e.format || (e.content = h(e.content))
            })), e.on("PostRender", (() => {
                e.parser.addNodeFilter("img", (e => {
                    V(e, (e => {
                        const n = e.attr("src");
                        if (!n || t.getByUri(n)) return;
                        const o = r.getResultUri(n);
                        o && e.attr("src", o)
                    }))
                }))
            })), {
                blobCache: t, addFilter: e => {
                    s.push(e)
                }, uploadImages: c, uploadImagesAuto: u, scanForImages: p, destroy: () => {
                    t.destroy(), r.destroy(), o = n = null
                }
            }
        }, $C = {remove_similar: !0, inherit: !1}, VC = {selector: "td,th", ...$C}, qC = {
            tablecellbackgroundcolor: {styles: {backgroundColor: "%value"}, ...VC},
            tablecellverticalalign: {styles: {"vertical-align": "%value"}, ...VC},
            tablecellbordercolor: {styles: {borderColor: "%value"}, ...VC},
            tablecellclass: {classes: ["%value"], ...VC},
            tableclass: {selector: "table", classes: ["%value"], ...$C},
            tablecellborderstyle: {styles: {borderStyle: "%value"}, ...VC},
            tablecellborderwidth: {styles: {borderWidth: "%value"}, ...VC}
        }, WC = N(qC), KC = Tt.each, GC = ba.DOM, YC = e => C(e) && f(e), XC = (e, t) => {
            const n = t && t.schema || Qs({}), o = e => {
                const t = m(e) ? {name: e, classes: [], attrs: {}} : e, n = GC.create(t.name);
                return ((e, t) => {
                    t.classes.length > 0 && GC.addClass(e, t.classes.join(" ")), GC.setAttribs(e, t.attrs)
                })(n, t), n
            }, r = (e, t, s) => {
                let a;
                const i = t[0], l = YC(i) ? i.name : void 0, d = ((e, t) => {
                    const o = n.getElementRule(e.nodeName.toLowerCase()), r = null == o ? void 0 : o.parentsRequired;
                    return !(!r || !r.length) && (t && j(r, t) ? t : r[0])
                })(e, l);
                if (d) l === d ? (a = i, t = t.slice(1)) : a = d; else if (i) a = i, t = t.slice(1); else if (!s) return e;
                const c = a ? o(a) : GC.create("div");
                c.appendChild(e), s && Tt.each(s, (t => {
                    const n = o(t);
                    c.insertBefore(n, e)
                }));
                const u = YC(a) ? a.siblings : void 0;
                return r(c, t, u)
            }, s = GC.create("div");
            if (e.length > 0) {
                const t = e[0], n = o(t), a = YC(t) ? t.siblings : void 0;
                s.appendChild(r(n, e.slice(1), a))
            }
            return s
        }, QC = e => {
            let t = "div";
            const n = {name: t, classes: [], attrs: {}, selector: e = Tt.trim(e)};
            return "*" !== e && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, ((e, t, o, r, s) => {
                switch (t) {
                    case"#":
                        n.attrs.id = o;
                        break;
                    case".":
                        n.classes.push(o);
                        break;
                    case":":
                        -1 !== Tt.inArray("checked disabled enabled read-only required".split(" "), o) && (n.attrs[o] = o)
                }
                if ("[" === r) {
                    const e = s.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                    e && (n.attrs[e[1]] = e[2])
                }
                return ""
            }))), n.name = t || "div", n
        }, JC = (e, t) => {
            let n = "", o = Jl(e);
            if ("" === o) return "";
            const r = e => m(e) ? e.replace(/%(\w+)/g, "") : "",
                s = (t, n) => GC.getStyle(null != n ? n : e.getBody(), t, !0);
            if (m(t)) {
                const n = e.formatter.get(t);
                if (!n) return "";
                t = n[0]
            }
            if ("preview" in t) {
                const e = t.preview;
                if (!1 === e) return "";
                o = e || o
            }
            let a, i = t.block || t.inline || "span";
            const l = (d = t.selector, m(d) ? (d = (d = d.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), Tt.map(d.split(/(?:>|\s+(?![^\[\]]+\]))/), (e => {
                const t = Tt.map(e.split(/(?:~\+|~|\+)/), QC), n = t.pop();
                return t.length && (n.siblings = t), n
            })).reverse()) : []);
            var d;
            l.length > 0 ? (l[0].name || (l[0].name = i), i = t.selector, a = XC(l, e)) : a = XC([i], e);
            const c = GC.select(i, a)[0] || a.firstChild;
            KC(t.styles, ((e, t) => {
                const n = r(e);
                n && GC.setStyle(c, t, n)
            })), KC(t.attributes, ((e, t) => {
                const n = r(e);
                n && GC.setAttrib(c, t, n)
            })), KC(t.classes, (e => {
                const t = r(e);
                GC.hasClass(c, t) || GC.addClass(c, t)
            })), e.dispatch("PreviewFormats"), GC.setStyles(a, {
                position: "absolute",
                left: -65535
            }), e.getBody().appendChild(a);
            const u = s("fontSize"), f = /px$/.test(u) ? parseInt(u, 10) : 0;
            return KC(o.split(" "), (e => {
                let t = s(e, c);
                if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = s(e), "#ffffff" === _u(t).toLowerCase()) || "color" === e && "#000000" === _u(t).toLowerCase())) {
                    if ("font-size" === e && /em|%$/.test(t)) {
                        if (0 === f) return;
                        t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * f + "px"
                    }
                    "border" === e && t && (n += "padding:0 2px;"), n += e + ":" + t + ";"
                }
            })), e.dispatch("AfterPreviewFormats"), GC.remove(a), n
        }, ZC = e => {
            const t = (e => {
                const t = {}, n = (e, o) => {
                    e && (m(e) ? (p(o) || (o = [o]), V(o, (e => {
                        v(e.deep) && (e.deep = !tm(e)), v(e.split) && (e.split = !tm(e) || nm(e)), v(e.remove) && tm(e) && !nm(e) && (e.remove = "none"), tm(e) && nm(e) && (e.mixed = !0, e.block_expand = !0), m(e.classes) && (e.classes = e.classes.split(/\s+/))
                    })), t[e] = o) : fe(e, ((e, t) => {
                        n(t, e)
                    })))
                };
                return n((e => {
                    const t = e.dom, n = e.schema.type, o = {
                        valigntop: [{selector: "td,th", styles: {verticalAlign: "top"}}],
                        valignmiddle: [{selector: "td,th", styles: {verticalAlign: "middle"}}],
                        valignbottom: [{selector: "td,th", styles: {verticalAlign: "bottom"}}],
                        alignleft: [{
                            selector: "figure.image",
                            collapsed: !1,
                            classes: "align-left",
                            ceFalseOverride: !0,
                            preview: "font-family font-size"
                        }, {
                            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                            styles: {textAlign: "left"},
                            inherit: !1,
                            preview: !1
                        }, {
                            selector: "img,audio,video",
                            collapsed: !1,
                            styles: {float: "left"},
                            preview: "font-family font-size"
                        }, {
                            selector: "table",
                            collapsed: !1,
                            styles: {marginLeft: "0px", marginRight: "auto"},
                            onformat: e => {
                                t.setStyle(e, "float", null)
                            },
                            preview: "font-family font-size"
                        }, {
                            selector: ".mce-preview-object,[data-ephox-embed-iri]",
                            ceFalseOverride: !0,
                            styles: {float: "left"}
                        }],
                        aligncenter: [{
                            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                            styles: {textAlign: "center"},
                            inherit: !1,
                            preview: "font-family font-size"
                        }, {
                            selector: "figure.image",
                            collapsed: !1,
                            classes: "align-center",
                            ceFalseOverride: !0,
                            preview: "font-family font-size"
                        }, {
                            selector: "img,audio,video",
                            collapsed: !1,
                            styles: {display: "block", marginLeft: "auto", marginRight: "auto"},
                            preview: !1
                        }, {
                            selector: "table",
                            collapsed: !1,
                            styles: {marginLeft: "auto", marginRight: "auto"},
                            preview: "font-family font-size"
                        }, {
                            selector: ".mce-preview-object",
                            ceFalseOverride: !0,
                            styles: {display: "table", marginLeft: "auto", marginRight: "auto"},
                            preview: !1
                        }, {
                            selector: "[data-ephox-embed-iri]",
                            ceFalseOverride: !0,
                            styles: {marginLeft: "auto", marginRight: "auto"},
                            preview: !1
                        }],
                        alignright: [{
                            selector: "figure.image",
                            collapsed: !1,
                            classes: "align-right",
                            ceFalseOverride: !0,
                            preview: "font-family font-size"
                        }, {
                            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                            styles: {textAlign: "right"},
                            inherit: !1,
                            preview: "font-family font-size"
                        }, {
                            selector: "img,audio,video",
                            collapsed: !1,
                            styles: {float: "right"},
                            preview: "font-family font-size"
                        }, {
                            selector: "table",
                            collapsed: !1,
                            styles: {marginRight: "0px", marginLeft: "auto"},
                            onformat: e => {
                                t.setStyle(e, "float", null)
                            },
                            preview: "font-family font-size"
                        }, {
                            selector: ".mce-preview-object,[data-ephox-embed-iri]",
                            ceFalseOverride: !0,
                            styles: {float: "right"},
                            preview: !1
                        }],
                        alignjustify: [{
                            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
                            styles: {textAlign: "justify"},
                            inherit: !1,
                            preview: "font-family font-size"
                        }],
                        bold: [{inline: "strong", remove: "all", preserve_attributes: ["class", "style"]}, {
                            inline: "span",
                            styles: {fontWeight: "bold"}
                        }, {inline: "b", remove: "all", preserve_attributes: ["class", "style"]}],
                        italic: [{inline: "em", remove: "all", preserve_attributes: ["class", "style"]}, {
                            inline: "span",
                            styles: {fontStyle: "italic"}
                        }, {inline: "i", remove: "all", preserve_attributes: ["class", "style"]}],
                        underline: [{inline: "span", styles: {textDecoration: "underline"}, exact: !0}, {
                            inline: "u",
                            remove: "all",
                            preserve_attributes: ["class", "style"]
                        }],
                        strikethrough: (() => {
                            const e = {inline: "span", styles: {textDecoration: "line-through"}, exact: !0},
                                t = {inline: "strike", remove: "all", preserve_attributes: ["class", "style"]},
                                o = {inline: "s", remove: "all", preserve_attributes: ["class", "style"]};
                            return "html4" !== n ? [o, e, t] : [e, o, t]
                        })(),
                        forecolor: {
                            inline: "span",
                            styles: {color: "%value"},
                            links: !0,
                            remove_similar: !0,
                            clear_child_styles: !0
                        },
                        hilitecolor: {
                            inline: "span",
                            styles: {backgroundColor: "%value"},
                            links: !0,
                            remove_similar: !0,
                            clear_child_styles: !0
                        },
                        fontname: {inline: "span", toggle: !1, styles: {fontFamily: "%value"}, clear_child_styles: !0},
                        fontsize: {inline: "span", toggle: !1, styles: {fontSize: "%value"}, clear_child_styles: !0},
                        lineheight: {selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div", styles: {lineHeight: "%value"}},
                        fontsize_class: {inline: "span", attributes: {class: "%value"}},
                        blockquote: {block: "blockquote", wrapper: !0, remove: "all"},
                        subscript: {inline: "sub"},
                        superscript: {inline: "sup"},
                        code: {inline: "code"},
                        link: {
                            inline: "a",
                            selector: "a",
                            remove: "all",
                            split: !0,
                            deep: !0,
                            onmatch: (e, t, n) => To(e) && e.hasAttribute("href"),
                            onformat: (e, n, o) => {
                                Tt.each(o, ((n, o) => {
                                    t.setAttrib(e, o, n)
                                }))
                            }
                        },
                        lang: {
                            inline: "span",
                            clear_child_styles: !0,
                            remove_similar: !0,
                            attributes: {
                                lang: "%value", "data-mce-lang": e => {
                                    var t;
                                    return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null
                                }
                            }
                        },
                        removeformat: [{
                            selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
                            remove: "all",
                            split: !0,
                            expand: !1,
                            block_expand: !0,
                            deep: !0
                        }, {
                            selector: "span",
                            attributes: ["style", "class"],
                            remove: "empty",
                            split: !0,
                            expand: !1,
                            deep: !0
                        }, {selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0}]
                    };
                    return Tt.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), (e => {
                        o[e] = {block: e, remove: "all"}
                    })), o
                })(e)), n(WC()), n(Ql(e)), {
                    get: e => C(e) ? t[e] : t,
                    has: e => xe(t, e),
                    register: n,
                    unregister: e => (e && t[e] && delete t[e], t)
                }
            })(e), n = Ca({});
            return (e => {
                e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
                for (let t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
                e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
            })(e), (e => {
                e.on("mouseup keydown", (t => {
                    ((e, t) => {
                        const n = e.selection, o = e.getBody();
                        nb(e, null, !1), 8 !== t && 46 !== t || !n.isCollapsed() || n.getStart().innerHTML !== Qh || nb(e, ou(o, n.getStart())), 37 !== t && 39 !== t || nb(e, ou(o, n.getStart()))
                    })(e, t.keyCode)
                }))
            })(e), Jy(e) || ((e, t) => {
                e.set({}), t.on("NodeChange", (n => {
                    Gb(t, n.element, e.get())
                })), t.on("FormatApply FormatRemove", (n => {
                    const o = M.from(n.node).map((e => Iu(e) ? e : e.startContainer)).bind((e => To(e) ? M.some(e) : M.from(e.parentElement))).getOrThunk((() => qb(t)));
                    Gb(t, o, e.get())
                }))
            })(n, e), {
                get: t.get,
                has: t.has,
                register: t.register,
                unregister: t.unregister,
                apply: (t, n, o) => {
                    ((e, t, n, o) => {
                        eC(e).formatter.apply(t, n, o)
                    })(e, t, n, o)
                },
                remove: (t, n, o, r) => {
                    ((e, t, n, o, r) => {
                        eC(e).formatter.remove(t, n, o, r)
                    })(e, t, n, o, r)
                },
                toggle: (t, n, o) => {
                    ((e, t, n, o) => {
                        eC(e).formatter.toggle(t, n, o)
                    })(e, t, n, o)
                },
                match: (t, n, o, r) => ((e, t, n, o, r) => eC(e).formatter.match(t, n, o, r))(e, t, n, o, r),
                closest: t => ((e, t) => eC(e).formatter.closest(t))(e, t),
                matchAll: (t, n) => ((e, t, n) => eC(e).formatter.matchAll(t, n))(e, t, n),
                matchNode: (t, n, o, r) => ((e, t, n, o, r) => eC(e).formatter.matchNode(t, n, o, r))(e, t, n, o, r),
                canApply: t => ((e, t) => eC(e).formatter.canApply(t))(e, t),
                formatChanged: (t, o, r, s) => ((e, t, n, o, r, s) => eC(e).formatter.formatChanged(t, n, o, r, s))(e, n, t, o, r, s),
                getCssText: O(JC, e)
            }
        }, ew = e => {
            switch (e.toLowerCase()) {
                case"undo":
                case"redo":
                case"mcefocus":
                    return !0;
                default:
                    return !1
            }
        }, tw = e => {
            const t = Na(), n = Ca(0), o = Ca(0), r = {
                data: [],
                typing: !1,
                beforeChange: () => {
                    ((e, t, n) => {
                        eC(e).undoManager.beforeChange(t, n)
                    })(e, n, t)
                },
                add: (s, a) => ((e, t, n, o, r, s, a) => eC(e).undoManager.add(t, n, o, r, s, a))(e, r, o, n, t, s, a),
                dispatchChange: () => {
                    e.setDirty(!0);
                    const t = $y(e);
                    t.bookmark = $i(e.selection), e.dispatch("change", {
                        level: t,
                        lastLevel: ae(r.data, o.get()).getOrUndefined()
                    })
                },
                undo: () => ((e, t, n, o) => eC(e).undoManager.undo(t, n, o))(e, r, n, o),
                redo: () => ((e, t, n) => eC(e).undoManager.redo(t, n))(e, o, r.data),
                clear: () => {
                    ((e, t, n) => {
                        eC(e).undoManager.clear(t, n)
                    })(e, r, o)
                },
                reset: () => {
                    ((e, t) => {
                        eC(e).undoManager.reset(t)
                    })(e, r)
                },
                hasUndo: () => ((e, t, n) => eC(e).undoManager.hasUndo(t, n))(e, r, o),
                hasRedo: () => ((e, t, n) => eC(e).undoManager.hasRedo(t, n))(e, r, o),
                transact: t => ((e, t, n, o) => eC(e).undoManager.transact(t, n, o))(e, r, n, t),
                ignore: t => {
                    ((e, t, n) => {
                        eC(e).undoManager.ignore(t, n)
                    })(e, n, t)
                },
                extra: (t, n) => {
                    ((e, t, n, o, r) => {
                        eC(e).undoManager.extra(t, n, o, r)
                    })(e, r, o, t, n)
                }
            };
            return Jy(e) || ((e, t, n) => {
                const o = Ca(!1), r = e => {
                    Yy(t, !1, n), t.add({}, e)
                };
                e.on("init", (() => {
                    t.add()
                })), e.on("BeforeExecCommand", (e => {
                    const o = e.command;
                    ew(o) || (Xy(t, n), t.beforeChange())
                })), e.on("ExecCommand", (e => {
                    const t = e.command;
                    ew(t) || r(e)
                })), e.on("ObjectResizeStart cut", (() => {
                    t.beforeChange()
                })), e.on("SaveContent ObjectResized blur", r), e.on("dragend", r), e.on("keyup", (n => {
                    const s = n.keyCode;
                    n.isDefaultPrevented() || ((s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s || n.ctrlKey) && (r(), e.nodeChanged()), 46 !== s && 8 !== s || e.nodeChanged(), o.get() && t.typing && !Ky($y(e), t.data[0]) && (e.isDirty() || e.setDirty(!0), e.dispatch("TypingUndo"), o.set(!1), e.nodeChanged()))
                })), e.on("keydown", (e => {
                    const s = e.keyCode;
                    if (e.isDefaultPrevented()) return;
                    if (s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s) return void (t.typing && r(e));
                    const a = e.ctrlKey && !e.altKey || e.metaKey;
                    !(s < 16 || s > 20) || 224 === s || 91 === s || t.typing || a || (t.beforeChange(), Yy(t, !0, n), t.add({}, e), o.set(!0))
                })), e.on("mousedown", (e => {
                    t.typing && r(e)
                })), e.on("input", (e => {
                    var t;
                    e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data || (e => "insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType)(e)) && r(e)
                })), e.on("AddUndo Undo Redo ClearUndos", (t => {
                    t.isDefaultPrevented() || e.nodeChanged()
                }))
            })(e, r, n), (e => {
                e.addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo")
            })(e), r
        },
        nw = [9, 27, Dm.HOME, Dm.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, Dm.DOWN, Dm.UP, Dm.LEFT, Dm.RIGHT].concat(Nt.browser.isFirefox() ? [224] : []),
        ow = "data-mce-placeholder", rw = e => "keydown" === e.type || "keyup" === e.type, sw = e => {
            const t = e.keyCode;
            return t === Dm.BACKSPACE || t === Dm.DELETE
        }, aw = (e, t) => ({from: e, to: t}), iw = (e, t) => {
            const n = mn(e), o = mn(t.container());
            return Hp(n, o).map((e => ((e, t) => ({block: e, position: t}))(e, t)))
        }, lw = (e, t) => ko(t, (e => hr(e) || Go(e.dom)), (t => bn(t, e))).filter(Ft).getOr(e), dw = e => {
            const t = (e => {
                const t = An(e);
                return J(t, dr).fold(N(t), (e => t.slice(0, e)))
            })(e);
            return V(t, oo), t
        }, cw = (e, t) => {
            const n = Wg(t, e);
            return Q(n.reverse(), (e => os(e))).each(oo)
        }, uw = (e, t, n, o) => {
            if (os(n)) return wr(n), Zc(n.dom);
            0 === K(Nn(o), (e => !os(e))).length && os(t) && Qn(o, cn("br"));
            const r = Jc(n.dom, xi.before(o.dom));
            return V(dw(t), (e => {
                Qn(o, e)
            })), cw(e, t), r
        }, mw = (e, t, n) => {
            if (os(n)) return oo(n), os(t) && wr(t), Zc(t.dom);
            const o = eu(n.dom);
            return V(dw(t), (e => {
                eo(n, e)
            })), cw(e, t), o
        }, fw = (e, t) => {
            Xc(e, t.dom).bind((e => M.from(e.getNode()))).map(mn).filter(ur).each(oo)
        }, gw = (e, t, n) => (fw(!0, t), fw(!1, n), ((e, t) => vn(t, e) ? ((e, t) => {
            const n = Wg(t, e);
            return M.from(n[n.length - 1])
        })(t, e) : M.none())(t, n).fold(O(mw, e, t, n), O(uw, e, t, n))),
        pw = (e, t, n, o) => t ? gw(e, o, n) : gw(e, n, o), hw = (e, t) => {
            const n = mn(e.getBody()), o = ((e, t, n) => n.collapsed ? ((e, t, n) => {
                const o = iw(e, xi.fromRangeStart(n)),
                    r = o.bind((n => Kc(t, e, n.position).bind((n => iw(e, n).map((n => ((e, t, n) => Wo(n.position.getNode()) && !os(n.block) ? Xc(!1, n.block.dom).bind((o => o.isEqual(n.position) ? Kc(t, e, o).bind((t => iw(e, t))) : M.some(n))).getOr(n) : n)(e, t, n)))))));
                return Dt(o, r, aw).filter((t => (e => !bn(e.from.block, e.to.block))(t) && ((e, t) => {
                    const n = mn(e);
                    return bn(lw(n, t.from.block), lw(n, t.to.block))
                })(e, t) && (e => !1 === Yo(e.from.block.dom) && !1 === Yo(e.to.block.dom))(t) && (e => {
                    const t = e => mr(e) || ms(e.dom);
                    return t(e.from.block) && t(e.to.block)
                })(t)))
            })(e, t, n) : M.none())(n.dom, t, e.selection.getRng()).map((o => () => {
                pw(n, t, o.from.block, o.to.block).each((t => {
                    e.selection.setRng(t.toRange())
                }))
            }));
            return o
        }, bw = (e, t) => {
            const n = mn(t), o = O(bn, e);
            return xo(n, hr, o).isSome()
        }, vw = e => {
            const t = mn(e.getBody());
            return ((e, t) => {
                const n = Jc(e.dom, xi.fromRangeStart(t)).isNone(), o = Qc(e.dom, xi.fromRangeEnd(t)).isNone();
                return !((e, t) => bw(e, t.startContainer) || bw(e, t.endContainer))(e, t) && n && o
            })(t, e.selection.getRng()) ? (e => M.some((() => {
                e.setContent(""), e.selection.setCursorLocation()
            })))(e) : ((e, t) => {
                const n = t.getRng();
                return Dt(Hp(e, mn(n.startContainer)), Hp(e, mn(n.endContainer)), ((o, r) => bn(o, r) ? M.none() : M.some((() => {
                    n.deleteContents(), pw(e, !0, o, r).each((e => {
                        t.setRng(e.toRange())
                    }))
                })))).getOr(M.none())
            })(t, e.selection)
        }, yw = (e, t) => e.selection.isCollapsed() ? M.none() : vw(e),
        Cw = (e, t, n, o, r) => M.from(t._selectionOverrides.showCaret(e, n, o, r)),
        ww = (e, t) => e.dispatch("BeforeObjectSelected", {target: t}).isDefaultPrevented() ? M.none() : M.some((e => {
            const t = e.ownerDocument.createRange();
            return t.selectNode(e), t
        })(t)), xw = (e, t, n) => t.collapsed ? ((e, t, n) => {
            const o = Ec(1, e.getBody(), t), r = xi.fromRangeStart(o), s = r.getNode();
            if (oc(s)) return Cw(1, e, s, !r.isAtEnd(), !1);
            const a = r.getNode(!0);
            if (oc(a)) return Cw(1, e, a, !1, !1);
            const i = bh(e.dom.getRoot(), r.getNode());
            return oc(i) ? Cw(1, e, i, !1, n) : M.none()
        })(e, t, n).getOr(t) : t, kw = e => $g(e) || Ug(e), Sw = e => Vg(e) || zg(e), _w = (e, t, n, o, r, s) => {
            Cw(o, e, s.getNode(!r), r, !0).each((n => {
                if (t.collapsed) {
                    const e = t.cloneRange();
                    r ? e.setEnd(n.startContainer, n.startOffset) : e.setStart(n.endContainer, n.endOffset), e.deleteContents()
                } else t.deleteContents();
                e.selection.setRng(n)
            })), ((e, t) => {
                zo(t) && 0 === t.data.length && e.remove(t)
            })(e.dom, n)
        }, Ew = (e, t) => ((e, t) => {
            const n = e.selection.getRng();
            if (!zo(n.commonAncestorContainer)) return M.none();
            const o = t ? Bc.Forwards : Bc.Backwards, r = $c(e.getBody()), s = O(Oc, t ? r.next : r.prev), a = t ? kw : Sw,
                i = Rc(o, e.getBody(), n), l = s(i), d = l ? Mp(t, l) : l;
            if (!d || !Tc(i, d)) return M.none();
            if (a(d)) return M.some((() => _w(e, n, i.getNode(), o, t, d)));
            const c = s(d);
            return c && a(c) && Tc(d, c) ? M.some((() => _w(e, n, i.getNode(), o, t, c))) : M.none()
        })(e, t), Nw = (e, t) => {
            const n = e.getBody();
            return t ? Zc(n).filter($g) : eu(n).filter(Vg)
        }, Rw = e => {
            const t = e.selection.getRng();
            return !t.collapsed && (Nw(e, !0).exists((e => e.isEqual(xi.fromRangeStart(t)))) || Nw(e, !1).exists((e => e.isEqual(xi.fromRangeEnd(t)))))
        }, Aw = Ki([{remove: ["element"]}, {moveToElement: ["element"]}, {moveToPosition: ["position"]}]),
        Ow = (e, t, n) => Kc(t, e, n).bind((o => {
            return r = o.getNode(), C(r) && (hr(mn(r)) || gr(mn(r))) || ((e, t, n, o) => {
                const r = t => cr(mn(t)) && !yc(n, o, e);
                return Nc(!t, n).fold((() => Nc(t, o).fold(P, r)), r)
            })(e, t, n, o) ? M.none() : t && Yo(o.getNode()) || !t && Yo(o.getNode(!0)) ? ((e, t, n, o) => {
                const r = o.getNode(!t);
                return Hp(mn(e), mn(n.getNode())).map((e => os(e) ? Aw.remove(e.dom) : Aw.moveToElement(r))).orThunk((() => M.some(Aw.moveToElement(r))))
            })(e, t, n, o) : t && Vg(n) || !t && $g(n) ? M.some(Aw.moveToPosition(o)) : M.none();
            var r
        })), Tw = (e, t) => M.from(bh(e.getBody(), t)), Bw = (e, t) => {
            const n = e.selection.getNode();
            return Tw(e, n).filter(Yo).fold((() => ((e, t, n) => {
                const o = Ec(t ? 1 : -1, e, n), r = xi.fromRangeStart(o), s = mn(e);
                return !t && Vg(r) ? M.some(Aw.remove(r.getNode(!0))) : t && $g(r) ? M.some(Aw.remove(r.getNode())) : !t && $g(r) && rp(s, r) ? sp(s, r).map((e => Aw.remove(e.getNode()))) : t && Vg(r) && op(s, r) ? ap(s, r).map((e => Aw.remove(e.getNode()))) : ((e, t, n) => ((e, t) => {
                    const n = t.getNode(!e), o = e ? "after" : "before";
                    return To(n) && n.getAttribute("data-mce-caret") === o
                })(t, n) ? ((e, t) => y(t) ? M.none() : e && Yo(t.nextSibling) ? M.some(Aw.moveToElement(t.nextSibling)) : !e && Yo(t.previousSibling) ? M.some(Aw.moveToElement(t.previousSibling)) : M.none())(t, n.getNode(!t)).orThunk((() => Ow(e, t, n))) : Ow(e, t, n).bind((t => ((e, t, n) => n.fold((e => M.some(Aw.remove(e))), (e => M.some(Aw.moveToElement(e))), (n => yc(t, n, e) ? M.none() : M.some(Aw.moveToPosition(n)))))(e, n, t))))(e, t, r)
            })(e.getBody(), t, e.selection.getRng()).map((n => () => n.fold(((e, t) => n => (e._selectionOverrides.hideFakeCaret(), Bp(e, t, mn(n)), !0))(e, t), ((e, t) => n => {
                const o = t ? xi.before(n) : xi.after(n);
                return e.selection.setRng(o.toRange()), !0
            })(e, t), (e => t => (e.selection.setRng(t.toRange()), !0))(e))))), (() => M.some(S)))
        }, Dw = e => {
            const t = e.dom, n = e.selection, o = bh(e.getBody(), n.getNode());
            if (Go(o) && t.isBlock(o) && t.isEmpty(o)) {
                const e = t.create("br", {"data-mce-bogus": "1"});
                t.setHTML(o, ""), o.appendChild(e), n.setRng(xi.before(e).toRange())
            }
            return !0
        }, Pw = (e, t) => e.selection.isCollapsed() ? Bw(e, t) : ((e, t) => {
            const n = e.selection.getNode();
            return Yo(n) && !Xo(n) ? Tw(e, n.parentNode).filter(Yo).fold((() => M.some((() => {
                var n;
                n = mn(e.getBody()), V(or(n, ".mce-offscreen-selection"), oo), Bp(e, t, mn(e.selection.getNode())), $p(e)
            }))), (() => M.some(S))) : Rw(e) ? M.some((() => {
                qp(e, e.selection.getRng(), mn(e.getBody()))
            })) : M.none()
        })(e, t), Lw = (e, t) => e.selection.isCollapsed() ? ((e, t) => {
            const n = xi.fromRangeStart(e.selection.getRng());
            return Kc(t, e.getBody(), n).filter((e => t ? Ig(e) : Fg(e))).bind((e => Cc(t ? 0 : -1, e))).map((t => () => e.selection.select(t)))
        })(e, t) : M.none(), Mw = zo, Iw = e => Mw(e) && e.data[0] === kr,
        Fw = e => Mw(e) && e.data[e.data.length - 1] === kr, Uw = e => {
            var t;
            return (null !== (t = e.ownerDocument) && void 0 !== t ? t : document).createTextNode(kr)
        }, zw = (e, t) => e ? (e => {
            var t;
            if (Mw(e.previousSibling)) return Fw(e.previousSibling) || e.previousSibling.appendData(kr), e.previousSibling;
            if (Mw(e)) return Iw(e) || e.insertData(0, kr), e;
            {
                const n = Uw(e);
                return null === (t = e.parentNode) || void 0 === t || t.insertBefore(n, e), n
            }
        })(t) : (e => {
            var t, n;
            if (Mw(e.nextSibling)) return Iw(e.nextSibling) || e.nextSibling.insertData(0, kr), e.nextSibling;
            if (Mw(e)) return Fw(e) || e.appendData(kr), e;
            {
                const o = Uw(e);
                return e.nextSibling ? null === (t = e.parentNode) || void 0 === t || t.insertBefore(o, e.nextSibling) : null === (n = e.parentNode) || void 0 === n || n.appendChild(o), o
            }
        })(t), jw = O(zw, !0), Hw = O(zw, !1), $w = (e, t) => zo(e.container()) ? zw(t, e.container()) : zw(t, e.getNode()),
        Vw = (e, t) => {
            const n = t.get();
            return n && e.container() === n && Ar(n)
        }, qw = (e, t) => t.fold((t => {
            Xd(e.get());
            const n = jw(t);
            return e.set(n), M.some(xi(n, n.length - 1))
        }), (t => Zc(t).map((t => {
            if (Vw(t, e)) {
                const t = e.get();
                return xi(t, 1)
            }
            {
                Xd(e.get());
                const n = $w(t, !0);
                return e.set(n), xi(n, 1)
            }
        }))), (t => eu(t).map((t => {
            if (Vw(t, e)) {
                const t = e.get();
                return xi(t, t.length - 1)
            }
            {
                Xd(e.get());
                const n = $w(t, !1);
                return e.set(n), xi(n, n.length - 1)
            }
        }))), (t => {
            Xd(e.get());
            const n = Hw(t);
            return e.set(n), M.some(xi(n, 1))
        })), Ww = (e, t) => {
            for (let n = 0; n < e.length; n++) {
                const o = e[n].apply(null, t);
                if (o.isSome()) return o
            }
            return M.none()
        }, Kw = Ki([{before: ["element"]}, {start: ["element"]}, {end: ["element"]}, {after: ["element"]}]),
        Gw = (e, t) => vc(t, e) || e, Yw = (e, t, n) => {
            const o = Ip(n), r = Gw(t, o.container());
            return Lp(e, r, o).fold((() => Qc(r, o).bind(O(Lp, e, r)).map((e => Kw.before(e)))), M.none)
        }, Xw = (e, t) => null === ou(e, t), Qw = (e, t, n) => Lp(e, t, n).filter(O(Xw, t)), Jw = (e, t, n) => {
            const o = Fp(n);
            return Qw(e, t, o).bind((e => Jc(e, o).isNone() ? M.some(Kw.start(e)) : M.none()))
        }, Zw = (e, t, n) => {
            const o = Ip(n);
            return Qw(e, t, o).bind((e => Qc(e, o).isNone() ? M.some(Kw.end(e)) : M.none()))
        }, ex = (e, t, n) => {
            const o = Fp(n), r = Gw(t, o.container());
            return Lp(e, r, o).fold((() => Jc(r, o).bind(O(Lp, e, r)).map((e => Kw.after(e)))), M.none)
        }, tx = e => {
            return t = ox(e), !("rtl" === ba.DOM.getStyle(t, "direction", !0) || (e => Dp.test(e))(null !== (n = t.textContent) && void 0 !== n ? n : ""));
            var t, n
        }, nx = (e, t, n) => Ww([Yw, Jw, Zw, ex], [e, t, n]).filter(tx), ox = e => e.fold(R, R, R, R),
        rx = e => e.fold(N("before"), N("start"), N("end"), N("after")),
        sx = e => e.fold(Kw.before, Kw.before, Kw.after, Kw.after),
        ax = e => e.fold(Kw.start, Kw.start, Kw.end, Kw.end),
        ix = (e, t, n, o, r, s) => Dt(Lp(t, n, o), Lp(t, n, r), ((t, o) => t !== o && ((e, t, n) => {
            const o = vc(t, e), r = vc(n, e);
            return C(o) && o === r
        })(n, t, o) ? Kw.after(e ? t : o) : s)).getOr(s), lx = (e, t) => e.fold(L, (e => {
            return o = t, !(rx(n = e) === rx(o) && ox(n) === ox(o));
            var n, o
        })),
        dx = (e, t) => e ? t.fold(_(M.some, Kw.start), M.none, _(M.some, Kw.after), M.none) : t.fold(M.none, _(M.some, Kw.before), M.none, _(M.some, Kw.end)),
        cx = (e, t, n) => {
            const o = e ? 1 : -1;
            return t.setRng(xi(n.container(), n.offset() + o).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0
        };
    var ux;
    !function (e) {
        e[e.Br = 0] = "Br", e[e.Block = 1] = "Block", e[e.Wrap = 2] = "Wrap", e[e.Eol = 3] = "Eol"
    }(ux || (ux = {}));
    const mx = (e, t) => e === Bc.Backwards ? ne(t) : t, fx = (e, t, n) => e === Bc.Forwards ? t.next(n) : t.prev(n),
        gx = (e, t, n, o) => Wo(o.getNode(t === Bc.Forwards)) ? ux.Br : !1 === yc(n, o) ? ux.Block : ux.Wrap,
        px = (e, t, n, o) => {
            const r = $c(n);
            let s = o;
            const a = [];
            for (; s;) {
                const n = fx(t, r, s);
                if (!n) break;
                if (Wo(n.getNode(!1))) return t === Bc.Forwards ? {
                    positions: mx(t, a).concat([n]),
                    breakType: ux.Br,
                    breakAt: M.some(n)
                } : {positions: mx(t, a), breakType: ux.Br, breakAt: M.some(n)};
                if (n.isVisible()) {
                    if (e(s, n)) {
                        const e = gx(0, t, s, n);
                        return {positions: mx(t, a), breakType: e, breakAt: M.some(n)}
                    }
                    a.push(n), s = n
                } else s = n
            }
            return {positions: mx(t, a), breakType: ux.Eol, breakAt: M.none()}
        }, hx = (e, t, n, o) => t(n, o).breakAt.map((o => {
            const r = t(n, o).positions;
            return e === Bc.Backwards ? r.concat(o) : [o].concat(r)
        })).getOr([]),
        bx = (e, t) => Y(e, ((e, n) => e.fold((() => M.some(n)), (o => Dt(ie(o.getClientRects()), ie(n.getClientRects()), ((e, r) => {
            const s = Math.abs(t - e.left);
            return Math.abs(t - r.left) <= s ? n : o
        })).or(e)))), M.none()), vx = (e, t) => ie(t.getClientRects()).bind((t => bx(e, t.left))),
        yx = O(px, xi.isAbove, -1), Cx = O(px, xi.isBelow, 1), wx = O(hx, -1, yx), xx = O(hx, 1, Cx),
        kx = (e, t) => vx(wx(e, t), t), Sx = (e, t) => vx(xx(e, t), t), _x = Yo, Ex = (e, t) => Math.abs(e.left - t),
        Nx = (e, t) => Math.abs(e.right - t), Rx = (e, t) => Oe(e, ((e, n) => {
            const o = Math.min(Ex(e, t), Nx(e, t)), r = Math.min(Ex(n, t), Nx(n, t));
            return r === o && ke(n, "node") && _x(n.node) || r < o ? n : e
        })), Ax = e => {
            const t = t => $(t, (t => {
                const n = Ya(t);
                return n.node = e, n
            }));
            if (To(e)) return t(e.getClientRects());
            if (zo(e)) {
                const n = e.ownerDocument.createRange();
                return n.setStart(e, 0), n.setEnd(e, e.data.length), t(n.getClientRects())
            }
            return []
        }, Ox = e => ee(e, Ax);
    var Tx;
    !function (e) {
        e[e.Up = -1] = "Up", e[e.Down = 1] = "Down"
    }(Tx || (Tx = {}));
    const Bx = (e, t, n, o, r, s) => {
            let a = 0;
            const i = [], l = o => {
                let s = Ox([o]);
                -1 === e && (s = s.reverse());
                for (let e = 0; e < s.length; e++) {
                    const o = s[e];
                    if (!n(o, d)) {
                        if (i.length > 0 && t(o, Be(i)) && a++, o.line = a, r(o)) return !0;
                        i.push(o)
                    }
                }
                return !1
            }, d = Be(s.getClientRects());
            if (!d) return i;
            const c = s.getNode();
            return c && (l(c), ((e, t, n, o) => {
                let r = o;
                for (; r = bc(r, e, Gr, t);) if (n(r)) return
            })(e, o, l, c)), i
        }, Dx = O(Bx, Tx.Up, Ja, Za), Px = O(Bx, Tx.Down, Za, Ja), Lx = e => Be(e.getClientRects()),
        Mx = e => t => ((e, t) => t.line > e)(e, t), Ix = e => t => ((e, t) => t.line === e)(e, t), Fx = (e, t) => {
            e.selection.setRng(t), Bf(e, e.selection.getRng())
        }, Ux = (e, t, n) => M.some(xw(e, t, n)), zx = (e, t, n, o, r, s) => {
            const a = t === Bc.Forwards, i = $c(e.getBody()), l = O(Oc, a ? i.next : i.prev), d = a ? o : r;
            if (!n.collapsed) {
                const o = ti(n);
                if (s(o)) return Cw(t, e, o, t === Bc.Backwards, !1);
                if (Rw(e)) {
                    const e = n.cloneRange();
                    return e.collapse(t === Bc.Backwards), M.from(e)
                }
            }
            const c = Rc(t, e.getBody(), n);
            if (d(c)) return ww(e, c.getNode(!a));
            let u = l(c);
            const m = Ir(n);
            if (!u) return m ? M.some(n) : M.none();
            if (u = Mp(a, u), d(u)) return Cw(t, e, u.getNode(!a), a, !1);
            const f = l(u);
            return f && d(f) && Tc(u, f) ? Cw(t, e, f.getNode(!a), a, !1) : m ? Ux(e, u.toRange(), !1) : M.none()
        }, jx = (e, t, n, o, r, s) => {
            const a = Rc(t, e.getBody(), n), i = Be(a.getClientRects()), l = t === Tx.Down, d = e.getBody();
            if (!i) return M.none();
            if (Rw(e)) {
                const e = l ? xi.fromRangeEnd(n) : xi.fromRangeStart(n);
                return (l ? Sx : kx)(d, e).orThunk((() => M.from(e))).map((e => e.toRange()))
            }
            const c = (l ? Px : Dx)(d, Mx(1), a), u = K(c, Ix(1)), m = i.left, f = Rx(u, m);
            if (f && s(f.node)) {
                const n = Math.abs(m - f.left), o = Math.abs(m - f.right);
                return Cw(t, e, f.node, n < o, !1)
            }
            let g;
            if (g = o(a) ? a.getNode() : r(a) ? a.getNode(!0) : ti(n), g) {
                const n = ((e, t, n, o) => {
                    const r = $c(t);
                    let s, a, i, l;
                    const d = [];
                    let c = 0;
                    1 === e ? (s = r.next, a = Za, i = Ja, l = xi.after(o)) : (s = r.prev, a = Ja, i = Za, l = xi.before(o));
                    const u = Lx(l);
                    do {
                        if (!l.isVisible()) continue;
                        const e = Lx(l);
                        if (i(e, u)) continue;
                        d.length > 0 && a(e, Be(d)) && c++;
                        const t = Ya(e);
                        if (t.position = l, t.line = c, n(t)) return d;
                        d.push(t)
                    } while (l = s(l));
                    return d
                })(t, d, Mx(1), g);
                let o = Rx(K(n, Ix(1)), m);
                if (o) return Ux(e, o.position.toRange(), !1);
                if (o = Be(K(n, Ix(0))), o) return Ux(e, o.position.toRange(), !1)
            }
            return 0 === u.length ? Hx(e, l).filter(l ? r : o).map((t => xw(e, t.toRange(), !1))) : M.none()
        }, Hx = (e, t) => {
            const n = e.selection.getRng(), o = t ? xi.fromRangeEnd(n) : xi.fromRangeStart(n),
                r = (s = o.container(), a = e.getBody(), xo(mn(s), (e => sc(e.dom)), (e => e.dom === a)).map((e => e.dom)).getOr(a));
            var s, a;
            if (t) {
                const e = Cx(r, o);
                return le(e.positions)
            }
            {
                const e = yx(r, o);
                return ie(e.positions)
            }
        }, $x = (e, t, n) => Hx(e, t).filter(n).exists((t => (e.selection.setRng(t.toRange()), !0))), Vx = (e, t) => {
            const n = e.dom.createRng();
            n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
        }, qx = (e, t) => {
            e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected")
        }, Wx = (e, t, n) => qw(t, n).map((t => (Vx(e, t), n))), Kx = (e, t, n) => {
            const o = e.getBody(), r = ((e, t, n) => {
                const o = xi.fromRangeStart(e);
                if (e.collapsed) return o;
                {
                    const r = xi.fromRangeEnd(e);
                    return n ? Jc(t, r).getOr(r) : Qc(t, o).getOr(o)
                }
            })(e.selection.getRng(), o, n);
            return ((e, t, n, o) => {
                const r = Mp(e, o), s = nx(t, n, r);
                return nx(t, n, r).bind(O(dx, e)).orThunk((() => ((e, t, n, o, r) => {
                    const s = Mp(e, r);
                    return Kc(e, n, s).map(O(Mp, e)).fold((() => o.map(sx)), (r => nx(t, n, r).map(O(ix, e, t, n, s, r)).filter(O(lx, o)))).filter(tx)
                })(e, t, n, s, o)))
            })(n, O(Pp, e), o, r).bind((n => Wx(e, t, n)))
        }, Gx = (e, t, n) => !!Xl(e) && Kx(e, t, n).isSome(), Yx = (e, t, n) => !!Xl(t) && ((e, t) => {
            const n = t.selection.getRng(), o = e ? xi.fromRangeEnd(n) : xi.fromRangeStart(n);
            return !!(e => w(e.selection.getSel().modify))(t) && (e && Br(o) ? cx(!0, t.selection, o) : !(e || !Dr(o)) && cx(!1, t.selection, o))
        })(e, t), Xx = e => {
            const t = Ca(null), n = O(Pp, e);
            return e.on("NodeChange", (o => {
                Xl(e) && (((e, t, n) => {
                    const o = $(or(mn(t.getRoot()), '*[data-mce-selected="inline-boundary"]'), (e => e.dom)), r = K(o, e),
                        s = K(n, e);
                    V(oe(r, s), O(qx, !1)), V(oe(s, r), O(qx, !0))
                })(n, e.dom, o.parents), ((e, t) => {
                    const n = t.get();
                    if (e.selection.isCollapsed() && !e.composing && n) {
                        const o = xi.fromRangeStart(e.selection.getRng());
                        xi.isTextPosition(o) && !(e => Br(e) || Dr(e))(o) && (Vx(e, Yd(n, o)), t.set(null))
                    }
                })(e, t), ((e, t, n, o) => {
                    if (t.selection.isCollapsed()) {
                        const r = K(o, e);
                        V(r, (o => {
                            const r = xi.fromRangeStart(t.selection.getRng());
                            nx(e, t.getBody(), r).bind((e => Wx(t, n, e)))
                        }))
                    }
                })(n, e, t, o.parents))
            })), t
        }, Qx = O(Yx, !0), Jx = O(Yx, !1), Zx = (e, t, n) => {
            if (Xl(e)) {
                const o = Hx(e, t).getOrThunk((() => {
                    const n = e.selection.getRng();
                    return t ? xi.fromRangeEnd(n) : xi.fromRangeStart(n)
                }));
                return nx(O(Pp, e), e.getBody(), o).exists((t => {
                    const o = sx(t);
                    return qw(n, o).exists((t => (Vx(e, t), !0)))
                }))
            }
            return !1
        }, ek = (e, t) => n => qw(t, n).map((t => () => Vx(e, t))), tk = (e, t, n, o) => {
            const r = e.getBody(), s = O(Pp, e);
            e.undoManager.ignore((() => {
                e.selection.setRng(((e, t) => {
                    const n = document.createRange();
                    return n.setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n
                })(n, o)), zp(e), nx(s, r, xi.fromRangeStart(e.selection.getRng())).map(ax).bind(ek(e, t)).each(D)
            })), e.nodeChanged()
        }, nk = (e, t, n) => {
            if (e.selection.isCollapsed() && Xl(e)) {
                const o = xi.fromRangeStart(e.selection.getRng());
                return ((e, t, n, o) => {
                    const r = ((e, t) => vc(t, e) || e)(e.getBody(), o.container()), s = O(Pp, e), a = nx(s, r, o);
                    return a.bind((e => n ? e.fold(N(M.some(ax(e))), M.none, N(M.some(sx(e))), M.none) : e.fold(M.none, N(M.some(sx(e))), M.none, N(M.some(ax(e)))))).map(ek(e, t)).getOrThunk((() => {
                        const i = Gc(n, r, o), l = i.bind((e => nx(s, r, e)));
                        return Dt(a, l, (() => Lp(s, r, o).bind((t => (e => Dt(Zc(e), eu(e), ((t, n) => {
                            const o = Mp(!0, t), r = Mp(!1, n);
                            return Qc(e, o).forall((e => e.isEqual(r)))
                        })).getOr(!0))(t) ? M.some((() => {
                            Bp(e, n, mn(t))
                        })) : M.none())))).getOrThunk((() => l.bind((() => i.map((r => () => {
                            n ? tk(e, t, o, r) : tk(e, t, r, o)
                        }))))))
                    }))
                })(e, t, n, o)
            }
            return M.none()
        }, ok = e => 1 === Dn(e), rk = (e, t) => {
            const n = mn(e.getBody()), o = mn(e.selection.getStart()), r = K(((e, t) => {
                const n = Wg(t, e);
                return J(n, dr).fold(N(n), (e => n.slice(0, e)))
            })(n, o), ok);
            return le(r).bind((n => {
                const o = xi.fromRangeStart(e.selection.getRng());
                return !((e, t, n) => Dt(Zc(n), eu(n), ((o, r) => {
                    const s = Mp(!0, o), a = Mp(!1, r), i = Mp(!1, t);
                    return e ? Qc(n, i).exists((e => e.isEqual(a) && t.isEqual(s))) : Jc(n, i).exists((e => e.isEqual(s) && t.isEqual(a)))
                })).getOr(!0))(t, o, n.dom) || nu((s = n).dom) && Jh(s.dom) ? M.none() : M.some((() => ((e, t, n, o) => {
                    const r = O(ab, t), s = $(K(o, r), (e => e.dom));
                    if (0 === s.length) Bp(t, e, n); else {
                        const e = ((e, t) => {
                            const n = eb(!1), o = rb(t, n.dom);
                            return Qn(mn(e), n), oo(mn(e)), xi(o, 0)
                        })(n.dom, s);
                        t.selection.setRng(e.toRange())
                    }
                })(t, e, n, r)));
                var s
            }))
        }, sk = (e, t) => e.selection.isCollapsed() ? rk(e, t) : M.none(), ak = (e, t, n) => C(n) ? M.some((() => {
            e._selectionOverrides.hideFakeCaret(), Bp(e, t, mn(n))
        })) : M.none(), ik = (e, t) => e.selection.isCollapsed() ? ((e, t) => {
            const n = t ? Ug : zg, o = t ? Bc.Forwards : Bc.Backwards, r = Rc(o, e.getBody(), e.selection.getRng());
            return n(r) ? ak(e, t, r.getNode(!t)) : M.from(Mp(t, r)).filter((e => n(e) && Tc(r, e))).bind((n => ak(e, t, n.getNode(!t))))
        })(e, t) : ((e, t) => {
            const n = e.selection.getNode();
            return Jo(n) ? ak(e, t, n) : M.none()
        })(e, t), lk = e => Ge(null != e ? e : "").getOr(0),
        dk = (e, t) => (e || "table" === Lt(t) ? "margin" : "padding") + ("rtl" === Wn(t, "direction") ? "-right" : "-left"),
        ck = e => {
            const t = mk(e);
            return !e.mode.isReadOnly() && (t.length > 1 || ((e, t) => te(t, (t => {
                const n = dk(Pl(e), t), o = Gn(t, n).map(lk).getOr(0);
                return "false" !== e.dom.getContentEditable(t.dom) && o > 0
            })))(e, t))
        }, uk = e => fr(e) || gr(e),
        mk = e => K(so(e.selection.getSelectedBlocks()), (e => !uk(e) && !(e => xn(e).exists(uk))(e) && ko(e, (e => Go(e.dom) || Yo(e.dom))).exists((e => Go(e.dom))))),
        fk = (e, t) => {
            var n, o;
            const {dom: r} = e, s = Ll(e),
                a = null !== (o = null === (n = /[a-z%]+$/i.exec(s)) || void 0 === n ? void 0 : n[0]) && void 0 !== o ? o : "px",
                i = lk(s), l = Pl(e);
            V(mk(e), (e => {
                ((e, t, n, o, r, s) => {
                    const a = dk(n, mn(s)), i = lk(e.getStyle(s, a));
                    if ("outdent" === t) {
                        const t = Math.max(0, i - o);
                        e.setStyle(s, a, t ? t + r : "")
                    } else {
                        const t = i + o + r;
                        e.setStyle(s, a, t)
                    }
                })(r, t, l, i, a, e.dom)
            }))
        }, gk = e => fk(e, "outdent"), pk = e => {
            if (e.selection.isCollapsed() && ck(e)) {
                const t = e.dom, n = e.selection.getRng(), o = xi.fromRangeStart(n),
                    r = t.getParent(n.startContainer, t.isBlock);
                if (null !== r && Qg(mn(r), o)) return M.some((() => gk(e)))
            }
            return M.none()
        }, hk = (e, t, n) => ce([pk, Pw, Ew, (e, n) => nk(e, t, n), hw, hh, Lw, ik, yw, sk], (t => t(e, n))),
        bk = (e, t) => {
            e.addCommand("delete", (() => {
                ((e, t) => {
                    hk(e, t, !1).fold((() => {
                        zp(e), $p(e)
                    }), D)
                })(e, t)
            })), e.addCommand("forwardDelete", (() => {
                ((e, t) => {
                    hk(e, t, !0).fold((() => (e => Up(e, "ForwardDelete"))(e)), D)
                })(e, t)
            }))
        }, vk = e => void 0 === e.touches || 1 !== e.touches.length ? M.none() : M.some(e.touches[0]),
        yk = (e, t) => xe(e, t.nodeName),
        Ck = (e, t) => !!zo(t) || !!To(t) && !yk(e.getBlockElements(), t) && !pu(t) && !ps(e, t), wk = (e, t) => {
            if (zo(t)) {
                if (0 === t.data.length) return !0;
                if (/^\s+$/.test(t.data) && (!t.nextSibling || yk(e, t.nextSibling))) return !0
            }
            return !1
        }, xk = e => e.dom.create(gl(e), pl(e)), kk = e => {
            const t = e.dom, n = e.selection, o = e.schema, r = o.getBlockElements(), s = n.getStart(), a = e.getBody();
            let i, l, d = !1;
            const c = gl(e);
            if (!s || !To(s)) return;
            const u = a.nodeName.toLowerCase();
            if (!o.isValidChild(u, c.toLowerCase()) || ((e, t, n) => H(qg(mn(n), mn(t)), (t => yk(e, t.dom))))(r, a, s)) return;
            const m = n.getRng(), {startContainer: f, startOffset: g, endContainer: p, endOffset: h} = m, b = Zf(e);
            let v = a.firstChild;
            for (; v;) if (To(v) && us(o, v), Ck(o, v)) {
                if (wk(r, v)) {
                    l = v, v = v.nextSibling, t.remove(l);
                    continue
                }
                i || (i = xk(e), a.insertBefore(i, v), d = !0), l = v, v = v.nextSibling, i.appendChild(l)
            } else i = null, v = v.nextSibling;
            d && b && (m.setStart(f, g), m.setEnd(p, h), n.setRng(m), e.nodeChanged())
        }, Sk = (e, t, n) => {
            const o = mn(xk(e)), r = Cr();
            eo(o, r), n(t, o);
            const s = document.createRange();
            return s.setStartBefore(r.dom), s.setEndBefore(r.dom), s
        }, _k = e => t => -1 !== (" " + t.attr("class") + " ").indexOf(e), Ek = (e, t, n) => function (o) {
            const r = arguments, s = r[r.length - 2], a = s > 0 ? t.charAt(s - 1) : "";
            if ('"' === a) return o;
            if (">" === a) {
                const e = t.lastIndexOf("<", s);
                if (-1 !== e && -1 !== t.substring(e, s).indexOf('contenteditable="false"')) return o
            }
            return '<span class="' + n + '" data-mce-content="' + e.dom.encode(r[0]) + '">' + e.dom.encode("string" == typeof r[1] ? r[1] : r[0]) + "</span>"
        }, Nk = (e, t) => {
            t.hasAttribute("data-mce-caret") && (Mr(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t))
        }, Rk = (e, t) => {
            const n = (e => _o(mn(e.getBody()), "*[data-mce-caret]").map((e => e.dom)).getOrNull())(e);
            if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void Nk(e, n)) : void (Tr(n) && (Nk(e, n), e.undoManager.add()))
        }, Ak = Yo, Ok = (e, t, n) => {
            const o = $c(e.getBody()), r = O(Oc, 1 === t ? o.next : o.prev);
            if (n.collapsed) {
                const o = e.dom.getParent(n.startContainer, "PRE");
                if (!o) return;
                if (!r(xi.fromRangeStart(n))) {
                    const n = mn((e => {
                        const t = e.dom.create(gl(e));
                        return t.innerHTML = '<br data-mce-bogus="1">', t
                    })(e));
                    1 === t ? Jn(mn(o), n) : Qn(mn(o), n), e.selection.select(n.dom, !0), e.selection.collapse()
                }
            }
        }, Tk = (e, t) => ((e, t) => {
            const n = t ? Bc.Forwards : Bc.Backwards, o = e.selection.getRng();
            return ((e, t, n) => zx(t, e, n, $g, Vg, Ak))(n, e, o).orThunk((() => (Ok(e, n, o), M.none())))
        })(e, t).exists((t => (Fx(e, t), !0))), Bk = (e, t) => ((e, t) => {
            const n = t ? 1 : -1, o = e.selection.getRng();
            return ((e, t, n) => jx(t, e, n, (e => $g(e) || jg(e)), (e => Vg(e) || Hg(e)), Ak))(n, e, o).orThunk((() => (Ok(e, n, o), M.none())))
        })(e, t).exists((t => (Fx(e, t), !0))), Dk = (e, t) => $x(e, t, t ? Vg : $g), Pk = (e, t) => Nw(e, !t).map((n => {
            const o = n.toRange(), r = e.selection.getRng();
            return t ? o.setStart(r.startContainer, r.startOffset) : o.setEnd(r.endContainer, r.endOffset), o
        })).exists((t => (Fx(e, t), !0))), Lk = e => j(["figcaption"], Lt(e)), Mk = (e, t) => {
            const n = mn(e.getBody()), o = xi.fromRangeStart(e.selection.getRng());
            return ((e, t) => {
                const n = O(bn, t);
                return ko(mn(e.container()), dr, n).filter(Lk)
            })(o, n).exists((() => {
                if (((e, t, n) => t ? ((e, t) => Cx(e, t).breakAt.isNone())(e.dom, n) : ((e, t) => yx(e, t).breakAt.isNone())(e.dom, n))(n, t, o)) {
                    const o = Sk(e, n, t ? eo : Zn);
                    return e.selection.setRng(o), !0
                }
                return !1
            }))
        }, Ik = (e, t) => !!e.selection.isCollapsed() && Mk(e, t),
        Fk = {shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0},
        Uk = (e, t) => t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey,
        zk = (e, ...t) => () => e.apply(null, t),
        jk = (e, t) => Q(((e, t) => ee((e => $(e, (e => ({...Fk, ...e}))))(e), (e => Uk(e, t) ? [e] : [])))(e, t), (e => e.action())),
        Hk = (e, t) => ce(((e, t) => ee((e => $(e, (e => ({...Fk, ...e}))))(e), (e => Uk(e, t) ? [e] : [])))(e, t), (e => e.action())),
        $k = (e, t) => {
            const n = t ? Bc.Forwards : Bc.Backwards, o = e.selection.getRng();
            return zx(e, n, o, Ug, zg, Jo).exists((t => (Fx(e, t), !0)))
        }, Vk = (e, t) => {
            const n = t ? 1 : -1, o = e.selection.getRng();
            return jx(e, n, o, Ug, zg, Jo).exists((t => (Fx(e, t), !0)))
        }, qk = (e, t) => $x(e, t, t ? zg : Ug),
        Wk = Ki([{none: ["current"]}, {first: ["current"]}, {middle: ["current", "target"]}, {last: ["current"]}]),
        Kk = {...Wk, none: e => Wk.none(e)},
        Gk = (e, t, n) => ee(An(e), (e => pn(e, t) ? n(e) ? [e] : [] : Gk(e, t, n))), Yk = (e, t) => Eo(e, "table", t),
        Xk = (e, t, n, o, r = L) => {
            const s = 1 === o;
            if (!s && n <= 0) return Kk.first(e[0]);
            if (s && n >= e.length - 1) return Kk.last(e[e.length - 1]);
            {
                const s = n + o, a = e[s];
                return r(a) ? Kk.middle(t, a) : Xk(e, t, s, o, r)
            }
        }, Qk = (e, t) => Yk(e, t).bind((t => {
            const n = Gk(t, "th,td", L);
            return J(n, (t => bn(e, t))).map((e => ({index: e, all: n})))
        })), Jk = (e, t = !1) => {
            return Hn(e) ? e.dom.isContentEditable : (n = e, Eo(n, "[contenteditable]")).fold(N(t), (e => "true" === Zk(e)));
            var n
        }, Zk = e => e.dom.contentEditable, eS = (e, t, n, o, r) => {
            const s = or(mn(n), "td,th,caption").map((e => e.dom)), a = K(((e, t) => ee(t, (t => {
                const n = ((e, t) => ({
                    left: e.left - t,
                    top: e.top - t,
                    right: e.right + -2,
                    bottom: e.bottom + -2,
                    width: e.width + t,
                    height: e.height + t
                }))(Ya(t.getBoundingClientRect()), -1);
                return [{x: n.left, y: e(n), cell: t}, {x: n.right, y: e(n), cell: t}]
            })))(e, s), (e => t(e, r)));
            return ((e, t, n) => Y(e, ((e, o) => e.fold((() => M.some(o)), (e => {
                const r = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
                    s = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
                return M.some(s < r ? o : e)
            }))), M.none()))(a, o, r).map((e => e.cell))
        }, tS = O(eS, (e => e.bottom), ((e, t) => e.y < t)), nS = O(eS, (e => e.top), ((e, t) => e.y > t)),
        oS = (e, t, n) => {
            const o = e(t, n);
            return (e => e.breakType === ux.Wrap && 0 === e.positions.length)(o) || !Wo(n.getNode()) && (e => e.breakType === ux.Br && 1 === e.positions.length)(o) ? !((e, t, n) => n.breakAt.exists((n => e(t, n).breakAt.isSome())))(e, t, o) : o.breakAt.isNone()
        }, rS = O(oS, yx), sS = O(oS, Cx), aS = (e, t, n, o) => {
            const r = e.selection.getRng(), s = t ? 1 : -1;
            return !(!nc() || !((e, t, n) => {
                const o = xi.fromRangeStart(t);
                return Xc(!e, n).exists((e => e.isEqual(o)))
            })(t, r, n) || (Cw(s, e, n, !t, !1).each((t => {
                Fx(e, t)
            })), 0))
        }, iS = (e, t, n) => {
            const o = ((e, t) => {
                const n = t.getNode(e);
                return Io(n) ? M.some(n) : M.none()
            })(!!t, n), r = !1 === t;
            o.fold((() => Fx(e, n.toRange())), (o => Xc(r, e.getBody()).filter((e => e.isEqual(n))).fold((() => Fx(e, n.toRange())), (n => ((e, t, n) => {
                t.undoManager.transact((() => {
                    const o = e ? Jn : Qn, r = Sk(t, mn(n), o);
                    Fx(t, r)
                }))
            })(t, e, o)))))
        }, lS = (e, t, n, o) => {
            const r = e.selection.getRng(), s = xi.fromRangeStart(r), a = e.getBody();
            if (!t && rS(o, s)) {
                const o = ((e, t, n) => ((e, t) => ie(t.getClientRects()).bind((t => tS(e, t.left, t.top))).bind((e => {
                    return vx(eu(n = e).map((e => yx(n, e).positions.concat(e))).getOr([]), t);
                    var n
                })))(t, n).orThunk((() => ie(n.getClientRects()).bind((n => bx(wx(e, xi.before(t)), n.left))))).getOr(xi.before(t)))(a, n, s);
                return iS(e, t, o), !0
            }
            if (t && sS(o, s)) {
                const o = ((e, t, n) => ((e, t) => le(t.getClientRects()).bind((t => nS(e, t.left, t.top))).bind((e => {
                    return vx(Zc(n = e).map((e => [e].concat(Cx(n, e).positions))).getOr([]), t);
                    var n
                })))(t, n).orThunk((() => ie(n.getClientRects()).bind((n => bx(xx(e, xi.after(t)), n.left))))).getOr(xi.after(t)))(a, n, s);
                return iS(e, t, o), !0
            }
            return !1
        },
        dS = (e, t, n) => M.from(e.dom.getParent(e.selection.getNode(), "td,th")).bind((o => M.from(e.dom.getParent(o, "table")).map((r => n(e, t, r, o))))).getOr(!1),
        cS = (e, t) => dS(e, t, aS), uS = (e, t) => dS(e, t, lS), mS = (e, t, n) => n.fold(M.none, M.none, ((e, t) => {
            return (n = t, ((e, t) => {
                const n = e => {
                    for (let o = 0; o < e.childNodes.length; o++) {
                        const r = mn(e.childNodes[o]);
                        if (t(r)) return M.some(r);
                        const s = n(e.childNodes[o]);
                        if (s.isSome()) return s
                    }
                    return M.none()
                };
                return n(e.dom)
            })(n, ig)).map((e => (e => {
                const t = Gm.exact(e, 0, e, 0);
                return Zm(t)
            })(e)));
            var n
        }), (n => (e.execCommand("mceTableInsertRowAfter"), fS(e, t, n)))), fS = (e, t, n) => {
            return mS(e, t, (r = Jk, Qk(o = n, void 0).fold((() => Kk.none(o)), (e => Xk(e.all, o, e.index, 1, r)))));
            var o, r
        }, gS = (e, t, n) => {
            return mS(e, t, (r = Jk, Qk(o = n, void 0).fold((() => Kk.none()), (e => Xk(e.all, o, e.index, -1, r)))));
            var o, r
        }, pS = (e, t) => {
            const n = ["table", "li", "dl"], o = mn(e.getBody()), r = e => {
                const t = Lt(e);
                return bn(e, o) || j(n, t)
            }, s = e.selection.getRng();
            return ((e, t) => ((e, t, n = P) => n(t) ? M.none() : j(e, Lt(t)) ? M.some(t) : So(t, e.join(","), (e => pn(e, "table") || n(e))))(["td", "th"], e, t))(mn(t ? s.endContainer : s.startContainer), r).map((n => (Yk(n, r).each((t => {
                e.model.table.clearSelectedCells(t.dom)
            })), e.selection.collapse(!t), (t ? fS : gS)(e, r, n).each((t => {
                e.selection.setRng(t)
            })), !0))).getOr(!1)
        }, hS = (e, t) => ({container: e, offset: t}), bS = ba.DOM, vS = e => t => e === t ? -1 : 0, yS = (e, t, n) => {
            if (zo(e) && t >= 0) return M.some(hS(e, t));
            {
                const o = Ka(bS);
                return M.from(o.backwards(e, t, vS(e), n)).map((e => hS(e.container, e.container.data.length)))
            }
        }, CS = (e, t, n) => {
            if (!zo(e)) return M.none();
            const o = e.data;
            if (t >= 0 && t <= o.length) return M.some(hS(e, t));
            {
                const o = Ka(bS);
                return M.from(o.backwards(e, t, vS(e), n)).bind((e => {
                    const o = e.container.data;
                    return CS(e.container, t + o.length, n)
                }))
            }
        }, wS = (e, t, n) => {
            if (!zo(e)) return M.none();
            const o = e.data;
            if (t <= o.length) return M.some(hS(e, t));
            {
                const r = Ka(bS);
                return M.from(r.forwards(e, t, vS(e), n)).bind((e => wS(e.container, t - o.length, n)))
            }
        }, xS = (e, t, n, o, r) => {
            const s = Ka(e, (e => t => e.isBlock(t) || j(["BR", "IMG", "HR", "INPUT"], t.nodeName) || "false" === e.getContentEditable(t))(e));
            return M.from(s.backwards(t, n, o, r))
        }, kS = e => _r(e.toString().replace(/\u00A0/g, " ")), SS = e => "" !== e && -1 !== " \xa0\f\n\r\t\v".indexOf(e),
        _S = (e, t) => e.substring(t.length), ES = (e, t, n, o = 0) => {
            return (r = mn(t.startContainer), Eo(r, lg)).fold((() => ((e, t, n, o = 0) => {
                if (!(r = t).collapsed || !zo(r.startContainer)) return M.none();
                var r;
                const s = {text: "", offset: 0}, a = e.getParent(t.startContainer, e.isBlock) || e.getRoot();
                return xS(e, t.startContainer, t.startOffset, ((e, t, o) => (s.text = o + s.text, s.offset += t, ((e, t, n) => {
                    let o;
                    const r = n.charAt(0);
                    for (o = t - 1; o >= 0; o--) {
                        const s = e.charAt(o);
                        if (SS(s)) return M.none();
                        if (r === s && Ue(e, n, o, t)) break
                    }
                    return M.some(o)
                })(s.text, s.offset, n).getOr(t))), a).bind((e => {
                    const r = t.cloneRange();
                    if (r.setStart(e.container, e.offset), r.setEnd(t.endContainer, t.endOffset), r.collapsed) return M.none();
                    const s = kS(r);
                    return 0 !== s.lastIndexOf(n) || _S(s, n).length < o ? M.none() : M.some({
                        text: _S(s, n),
                        range: r,
                        trigger: n
                    })
                }))
            })(e, t, n, o)), (t => {
                const o = e.createRng();
                o.selectNode(t.dom);
                const r = kS(o);
                return M.some({range: o, text: _S(r, n), trigger: n})
            }));
            var r
        }, NS = e => {
            if ((e => 3 === e.nodeType)(e)) return hS(e, e.data.length);
            {
                const t = e.childNodes;
                return t.length > 0 ? NS(t[t.length - 1]) : hS(e, t.length)
            }
        }, RS = (e, t) => {
            const n = e.childNodes;
            return n.length > 0 && t < n.length ? RS(n[t], 0) : n.length > 0 && (e => 1 === e.nodeType)(e) && n.length === t ? NS(n[n.length - 1]) : hS(e, t)
        }, AS = (e, t, n, o = {}) => {
            var r;
            const s = t(), a = null !== (r = e.selection.getRng().startContainer.nodeValue) && void 0 !== r ? r : "",
                i = K(s.lookupByTrigger(n.trigger), (t => n.text.length >= t.minChars && t.matches.getOrThunk((() => (e => t => {
                    const n = RS(t.startContainer, t.startOffset);
                    return !((e, t) => {
                        var n;
                        const o = null !== (n = e.getParent(t.container, e.isBlock)) && void 0 !== n ? n : e.getRoot();
                        return xS(e, t.container, t.offset, ((e, t) => 0 === t ? -1 : t), o).filter((e => {
                            const t = e.container.data.charAt(e.offset - 1);
                            return !SS(t)
                        })).isSome()
                    })(e, n)
                })(e.dom)))(n.range, a, n.text)));
            if (0 === i.length) return M.none();
            const l = Promise.all($(i, (e => e.fetch(n.text, e.maxResults, o).then((t => ({
                matchText: n.text,
                items: t,
                columns: e.columns,
                onAction: e.onAction,
                highlightOn: e.highlightOn
            }))))));
            return M.some({lookupData: l, context: n})
        };
    var OS;
    !function (e) {
        e[e.Error = 0] = "Error", e[e.Value = 1] = "Value"
    }(OS || (OS = {}));
    const TS = (e, t, n) => e.stype === OS.Error ? t(e.serror) : n(e.svalue), BS = e => ({stype: OS.Value, svalue: e}),
        DS = e => ({stype: OS.Error, serror: e}), PS = TS,
        LS = e => f(e) && ue(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2),
        MS = (e, t) => DS([{path: e, getErrorInfo: t}]), IS = (e, t) => ({
            extract: (n, o) => we(o, e).fold((() => ((e, t) => MS(e, (() => 'Choice schema did not contain choice key: "' + t + '"')))(n, e)), (e => ((e, t, n, o) => we(n, o).fold((() => ((e, t, n) => MS(e, (() => 'The chosen schema: "' + n + '" did not exist in branches: ' + LS(t))))(e, n, o)), (n => n.extract(e.concat(["branch: " + o]), t))))(n, o, t, e))),
            toString: () => "chooseOn(" + e + "). Possible values: " + ue(t)
        }), FS = e => (...t) => {
            if (0 === t.length) throw new Error("Can't merge zero objects");
            const n = {};
            for (let o = 0; o < t.length; o++) {
                const r = t[o];
                for (const t in r) xe(r, t) && (n[t] = e(n[t], r[t]))
            }
            return n
        }, US = FS(((e, t) => g(e) && g(t) ? US(e, t) : t)),
        zS = (FS(((e, t) => t)), e => ({tag: "defaultedThunk", process: N(e)})), jS = e => {
            const t = (e => {
                const t = [], n = [];
                return V(e, (e => {
                    TS(e, (e => n.push(e)), (e => t.push(e)))
                })), {values: t, errors: n}
            })(e);
            return t.errors.length > 0 ? (n = t.errors, _(DS, Z)(n)) : BS(t.values);
            var n
        }, HS = (e, t, n) => {
            switch (e.tag) {
                case"field":
                    return t(e.key, e.newKey, e.presence, e.prop);
                case"custom":
                    return n(e.newKey, e.instantiator)
            }
        }, $S = e => ({
            extract: (t, n) => {
                return o = e(n), r = e => ((e, t) => MS(e, N(t)))(t, e), o.stype === OS.Error ? r(o.serror) : o;
                var o, r
            }, toString: N("val")
        }), VS = $S(BS), qS = (e, t, n, o) => o(we(e, t).getOrThunk((() => n(e)))), WS = (e, t, n, o, r) => {
            const s = e => r.extract(t.concat([o]), e), a = e => e.fold((() => BS(M.none())), (e => {
                const n = r.extract(t.concat([o]), e);
                return s = n, a = M.some, s.stype === OS.Value ? {stype: OS.Value, svalue: a(s.svalue)} : s;
                var s, a
            }));
            switch (e.tag) {
                case"required":
                    return ((e, t, n, o) => we(t, n).fold((() => ((e, t, n) => MS(e, (() => 'Could not find valid *required* value for "' + t + '" in ' + LS(n))))(e, n, t)), o))(t, n, o, s);
                case"defaultedThunk":
                    return qS(n, o, e.process, s);
                case"option":
                    return ((e, t, n) => n(we(e, t)))(n, o, a);
                case"defaultedOptionThunk":
                    return ((e, t, n, o) => o(we(e, t).map((t => !0 === t ? n(e) : t))))(n, o, e.process, a);
                case"mergeWithThunk":
                    return qS(n, o, N({}), (t => {
                        const o = US(e.process(n), t);
                        return s(o)
                    }))
            }
        }, KS = e => ({
            extract: (t, n) => ((e, t, n) => {
                const o = {}, r = [];
                for (const s of n) HS(s, ((n, s, a, i) => {
                    const l = WS(a, e, t, n, i);
                    PS(l, (e => {
                        r.push(...e)
                    }), (e => {
                        o[s] = e
                    }))
                }), ((e, n) => {
                    o[e] = n(t)
                }));
                return r.length > 0 ? DS(r) : BS(o)
            })(t, n, e), toString: () => {
                const t = $(e, (e => HS(e, ((e, t, n, o) => e + " -> " + o.toString()), ((e, t) => "state(" + e + ")"))));
                return "obj{\n" + t.join("\n") + "}"
            }
        }), GS = e => ({
            extract: (t, n) => {
                const o = $(n, ((n, o) => e.extract(t.concat(["[" + o + "]"]), n)));
                return jS(o)
            }, toString: () => "array(" + e.toString() + ")"
        }), YS = (e, t, n) => {
            return o = ((e, t, n) => ((e, t) => e.stype === OS.Error ? {
                stype: OS.Error,
                serror: t(e.serror)
            } : e)(t.extract([e], n), (e => ({input: n, errors: e}))))(e, t, n), TS(o, Wi.error, Wi.value);
            var o
        }, XS = (e, t) => IS(e, ge(t, KS)), QS = N(VS), JS = (e, t) => $S((n => {
            const o = typeof n;
            return e(n) ? BS(n) : DS(`Expected type: ${t} but got: ${o}`)
        })), ZS = JS(x, "number"), e_ = JS(m, "string"), t_ = JS(b, "boolean"), n_ = JS(w, "function"),
        o_ = (e, t, n, o) => ({tag: "field", key: e, newKey: t, presence: n, prop: o}),
        r_ = (e, t) => ({tag: "custom", newKey: e, instantiator: t}),
        s_ = (e, t) => o_(e, e, {tag: "required", process: {}}, t), a_ = e => s_(e, e_), i_ = e => s_(e, n_),
        l_ = (e, t) => o_(e, e, {tag: "option", process: {}}, t), d_ = e => l_(e, e_),
        c_ = (e, t, n) => o_(e, e, zS(t), n), u_ = (e, t) => c_(e, t, ZS), m_ = (e, t, n) => c_(e, t, (e => {
            return t = t => j(e, t) ? Wi.value(t) : Wi.error(`Unsupported value: "${t}", choose one of "${e.join(", ")}".`), $S((e => t(e).fold(DS, BS)));
            var t
        })(n)), f_ = (e, t) => c_(e, t, t_), g_ = (e, t) => c_(e, t, n_), p_ = a_("type"), h_ = i_("fetch"),
        b_ = i_("onAction"), v_ = g_("onSetup", (() => S)), y_ = d_("text"), C_ = d_("icon"), w_ = d_("tooltip"),
        x_ = d_("label"), k_ = f_("active", !1), S_ = f_("enabled", !0), __ = f_("primary", !1),
        E_ = e => ((e, t) => c_("type", t, e_))(0, e),
        N_ = KS([p_, a_("trigger"), u_("minChars", 1), (1, ((e, t) => o_(e, e, zS(1), QS()))("columns")), u_("maxResults", 10), ("matches", l_("matches", n_)), h_, b_, (R_ = e_, c_("highlightOn", [], GS(R_)))]);
    var R_;
    const A_ = [S_, w_, C_, y_, v_], O_ = [k_].concat(A_),
        T_ = [g_("predicate", P), m_("scope", "node", ["node", "editor"]), m_("position", "selection", ["node", "selection", "line"])],
        B_ = A_.concat([E_("contextformbutton"), __, b_, r_("original", R)]),
        D_ = O_.concat([E_("contextformbutton"), __, b_, r_("original", R)]), P_ = A_.concat([E_("contextformbutton")]),
        L_ = O_.concat([E_("contextformtogglebutton")]),
        M_ = XS("type", {contextformbutton: B_, contextformtogglebutton: D_});
    KS([E_("contextform"), g_("initValue", N("")), x_, ((e, t) => o_(e, e, {
        tag: "required",
        process: {}
    }, GS(t)))("commands", M_), l_("launch", XS("type", {
        contextformbutton: P_,
        contextformtogglebutton: L_
    }))].concat(T_));
    const I_ = e => {
            const t = e.ui.registry.getAll().popups, n = ge(t, (e => {
                return (t = e, YS("Autocompleter", N_, {trigger: t.ch, ...t})).fold((e => {
                    throw new Error("Errors: \n" + (e => {
                        const t = e.length > 10 ? e.slice(0, 10).concat([{
                            path: [],
                            getErrorInfo: N("... (only showing first ten failures)")
                        }]) : e;
                        return $(t, (e => "Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo()))
                    })((t = e).errors).join("\n") + "\n\nInput object: " + LS(t.input));
                    var t
                }), R);
                var t
            })), o = Se(ye(n, (e => e.trigger))), r = Ce(n);
            return {dataset: n, triggers: o, lookupByTrigger: e => K(r, (t => t.trigger === e))}
        }, F_ = e => {
            const t = Na(), n = Ca(!1), o = t.isSet, r = () => {
                o() && ((e => {
                    eC(e).autocompleter.removeDecoration()
                })(e), (e => {
                    e.dispatch("AutocompleterEnd")
                })(e), n.set(!1), t.clear())
            }, s = De((() => I_(e))), a = a => {
                (n => t.get().map((t => ES(e.dom, e.selection.getRng(), t.trigger).bind((t => AS(e, s, t, n))))).getOrThunk((() => ((e, t) => {
                    const n = t(), o = e.selection.getRng();
                    return ((e, t, n) => ce(n.triggers, (n => ES(e, t, n))))(e.dom, o, n).bind((n => AS(e, t, n)))
                })(e, s))))(a).fold(r, (s => {
                    (n => {
                        o() || (((e, t) => {
                            eC(e).autocompleter.addDecoration(t)
                        })(e, n.range), t.set({trigger: n.trigger, matchLength: n.text.length}))
                    })(s.context), s.lookupData.then((o => {
                        t.get().map((a => {
                            const i = s.context;
                            a.trigger === i.trigger && (i.text.length - a.matchLength >= 10 ? r() : (t.set({
                                ...a,
                                matchLength: i.text.length
                            }), n.get() ? ((e, t) => {
                                e.dispatch("AutocompleterUpdate", t)
                            })(e, {lookupData: o}) : (n.set(!0), ((e, t) => {
                                e.dispatch("AutocompleterStart", t)
                            })(e, {lookupData: o}))))
                        }))
                    }))
                }))
            };
            e.addCommand("mceAutocompleterReload", ((e, t) => {
                const n = f(t) ? t.fetchOptions : {};
                a(n)
            })), e.addCommand("mceAutocompleterClose", r), ((e, t) => {
                const n = Aa(t.load, 50);
                e.on("keypress compositionend", (e => {
                    27 !== e.which && n.throttle()
                })), e.on("keydown", (e => {
                    const o = e.which;
                    8 === o ? n.throttle() : 27 === o && t.cancelIfNecessary()
                })), e.on("remove", n.cancel)
            })(e, {cancelIfNecessary: r, load: a})
        }, U_ = e => (t, n, o = {}) => {
            const r = t.getBody(), s = {
                bubbles: !0,
                composed: !0,
                data: null,
                isComposing: !1,
                detail: 0,
                view: null,
                target: r,
                currentTarget: r,
                eventPhase: Event.AT_TARGET,
                originalTarget: r,
                explicitOriginalTarget: r,
                isTrusted: !1,
                srcElement: r,
                cancelable: !1,
                preventDefault: S,
                inputType: n
            }, a = ea(new InputEvent(e));
            return t.dispatch(e, {...a, ...s, ...o})
        }, z_ = U_("input"), j_ = U_("beforeinput"), H_ = (e, t) => {
            const n = e.dom, o = e.schema.getMoveCaretBeforeOnEnterElements();
            if (!t) return;
            if (/^(LI|DT|DD)$/.test(t.nodeName)) {
                const e = (e => {
                    for (; e;) {
                        if (To(e) || zo(e) && e.data && /[\r\n\s]/.test(e.data)) return e;
                        e = e.nextSibling
                    }
                    return null
                })(t.firstChild);
                e && /^(UL|OL|DL)$/.test(e.nodeName) && t.insertBefore(n.doc.createTextNode(tr), t.firstChild)
            }
            const r = n.createRng();
            if (t.normalize(), t.hasChildNodes()) {
                const e = new Ro(t, t);
                let n, s = t;
                for (; n = e.current();) {
                    if (zo(n)) {
                        r.setStart(n, 0), r.setEnd(n, 0);
                        break
                    }
                    if (o[n.nodeName.toLowerCase()]) {
                        r.setStartBefore(n), r.setEndBefore(n);
                        break
                    }
                    s = n, n = e.next()
                }
                n || (r.setStart(s, 0), r.setEnd(s, 0))
            } else Wo(t) ? t.nextSibling && n.isBlock(t.nextSibling) ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)) : (r.setStart(t, 0), r.setEnd(t, 0));
            e.selection.setRng(r), Bf(e, r)
        }, $_ = (e, t) => {
            const n = e.getRoot();
            let o, r = t;
            for (; r !== n && r && "false" !== e.getContentEditable(r);) "true" === e.getContentEditable(r) && (o = r), r = r.parentNode;
            return r !== n ? o : n
        }, V_ = e => M.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)), q_ = (e, t) => {
            const n = null == e ? void 0 : e.parentNode;
            return C(n) && n.nodeName === t
        }, W_ = e => C(e) && /^(OL|UL|LI)$/.test(e.nodeName), K_ = e => {
            const t = e.parentNode;
            return C(n = t) && /^(LI|DT|DD)$/.test(n.nodeName) ? t : e;
            var n
        }, G_ = (e, t, n) => {
            let o = e[n ? "firstChild" : "lastChild"];
            for (; o && !To(o);) o = o[n ? "nextSibling" : "previousSibling"];
            return o === t
        }, Y_ = (e, t) => t && "A" === t.nodeName && e.isEmpty(t), X_ = e => {
            e.innerHTML = '<br data-mce-bogus="1">'
        }, Q_ = (e, t) => e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t,
        J_ = (e, t) => C(t) && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t),
        Z_ = (e, t, n) => zo(t) ? e ? 1 === n && t.data.charAt(n - 1) === kr ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === kr ? t.data.length : n : n,
        eE = (e, t) => {
            gl(e).toLowerCase() === t.tagName.toLowerCase() && ((e, t, n) => {
                const o = e.dom;
                M.from(n.style).map(o.parseStyle).each((e => {
                    const n = {...Yn(mn(t)), ...e};
                    o.setStyles(t, n)
                }));
                const r = M.from(n.class).map((e => e.split(/\s+/))),
                    s = M.from(t.className).map((e => K(e.split(/\s+/), (e => "" !== e))));
                Dt(r, s, ((e, n) => {
                    const r = K(n, (t => !j(e, t))), s = [...e, ...r];
                    o.setAttrib(t, "class", s.join(" "))
                }));
                const a = ["style", "class"], i = ve(n, ((e, t) => !j(a, t)));
                o.setAttribs(t, i)
            })(e, t, pl(e))
        }, tE = {
            insert: (e, t) => {
                let n, o, r, s, a = !1;
                const i = e.dom, l = e.schema, d = l.getNonEmptyElements(), c = e.selection.getRng(), u = gl(e), f = t => {
                    let o = n;
                    const s = l.getTextInlineElements();
                    let a;
                    a = t || "TABLE" === r || "HR" === r ? i.create(t || u) : w.cloneNode(!1);
                    let d = a;
                    if (!1 === yl(e)) i.setAttrib(a, "style", null), i.setAttrib(a, "class", null); else do {
                        if (s[o.nodeName]) {
                            if (nu(o) || pu(o)) continue;
                            const e = o.cloneNode(!1);
                            i.setAttrib(e, "id", ""), a.hasChildNodes() ? (e.appendChild(a.firstChild), a.appendChild(e)) : (d = e, a.appendChild(e))
                        }
                    } while ((o = o.parentNode) && o !== v);
                    return eE(e, a), X_(d), a
                }, g = e => {
                    const t = Z_(e, n, o);
                    if (zo(n) && (e ? t > 0 : t < n.data.length)) return !1;
                    if (n.parentNode === w && a && !e) return !0;
                    if (e && To(n) && n === w.firstChild) return !0;
                    if (Q_(n, "TABLE") || Q_(n, "HR")) return a && !e || !a && e;
                    const r = new Ro(n, w);
                    let s;
                    for (zo(n) && (e && 0 === t ? r.prev() : e || t !== n.data.length || r.next()); s = r.current();) {
                        if (To(s)) {
                            if (!s.getAttribute("data-mce-bogus")) {
                                const e = s.nodeName.toLowerCase();
                                if (d[e] && "br" !== e) return !1
                            }
                        } else if (zo(s) && !Xr(s.data)) return !1;
                        e ? r.prev() : r.next()
                    }
                    return !0
                }, p = () => {
                    let t;
                    return t = /^(H[1-6]|PRE|FIGURE)$/.test(r) && "HGROUP" !== x ? f(u) : f(), ((e, t) => {
                        const n = Cl(e);
                        return !y(t) && (m(n) ? j(Tt.explode(n), t.nodeName.toLowerCase()) : n)
                    })(e, s) && J_(i, s) && i.isEmpty(w) ? t = i.split(s, w) : i.insertAfter(t, w), H_(e, t), t
                };
                df(i, c).each((e => {
                    c.setStart(e.startContainer, e.startOffset), c.setEnd(e.endContainer, e.endOffset)
                })), n = c.startContainer, o = c.startOffset;
                const h = !(!t || !t.shiftKey), b = !(!t || !t.ctrlKey);
                To(n) && n.hasChildNodes() && (a = o > n.childNodes.length - 1, n = n.childNodes[Math.min(o, n.childNodes.length - 1)] || n, o = a && zo(n) ? n.data.length : 0);
                const v = $_(i, n);
                if (!v || ((e, t) => {
                    const n = e.dom.getParent(t, "ol,ul,dl");
                    return null !== n && "false" === e.dom.getContentEditableParent(n)
                })(e, n)) return;
                h || (n = ((e, t, n, o, r) => {
                    var s;
                    const a = e.dom, i = null !== (s = $_(a, o)) && void 0 !== s ? s : a.getRoot();
                    let l = a.getParent(o, a.isBlock);
                    if (!l || !J_(a, l)) {
                        let s;
                        if (l = l || i, s = l === e.getBody() || Qo(l) ? l.nodeName.toLowerCase() : l.parentNode ? l.parentNode.nodeName.toLowerCase() : "", !l.hasChildNodes()) {
                            const o = a.create(t);
                            return eE(e, o), l.appendChild(o), n.setStart(o, 0), n.setEnd(o, 0), o
                        }
                        let d, c = o;
                        for (; c && c.parentNode !== l;) c = c.parentNode;
                        for (; c && !a.isBlock(c);) d = c, c = c.previousSibling;
                        if (d && e.schema.isValidChild(s, t.toLowerCase())) {
                            const s = d.parentNode, i = a.create(t);
                            for (eE(e, i), s.insertBefore(i, d), c = d; c && !a.isBlock(c);) {
                                const e = c.nextSibling;
                                i.appendChild(c), c = e
                            }
                            n.setStart(o, r), n.setEnd(o, r)
                        }
                    }
                    return o
                })(e, u, c, n, o));
                let w = i.getParent(n, i.isBlock) || i.getRoot();
                s = C(null == w ? void 0 : w.parentNode) ? i.getParent(w.parentNode, i.isBlock) : null, r = w ? w.nodeName.toUpperCase() : "";
                const x = s ? s.nodeName.toUpperCase() : "";
                if ("LI" !== x || b || (w = s, s = s.parentNode, r = x), /^(LI|DT|DD)$/.test(r) && To(s) && i.isEmpty(w)) return void ((e, t, n, o, r) => {
                    const s = e.dom, a = e.selection.getRng(), i = n.parentNode;
                    if (n === e.getBody() || !i) return;
                    var l;
                    W_(l = n) && W_(l.parentNode) && (r = "LI");
                    let d = t(r);
                    if (G_(n, o, !0) && G_(n, o, !1)) if (q_(n, "LI")) {
                        const e = K_(n);
                        s.insertAfter(d, e), (e => {
                            var t;
                            return (null === (t = e.parentNode) || void 0 === t ? void 0 : t.firstChild) === e
                        })(n) ? s.remove(e) : s.remove(n)
                    } else s.replace(d, n); else if (G_(n, o, !0)) q_(n, "LI") ? (s.insertAfter(d, K_(n)), d.appendChild(s.doc.createTextNode(" ")), d.appendChild(n)) : i.insertBefore(d, n), s.remove(o); else if (G_(n, o, !1)) s.insertAfter(d, K_(n)), s.remove(o); else {
                        n = K_(n);
                        const e = a.cloneRange();
                        e.setStartAfter(o), e.setEndAfter(n);
                        const t = e.extractContents();
                        "LI" === r && ((e, t) => e.firstChild && "LI" === e.firstChild.nodeName)(t) ? (d = t.firstChild, s.insertAfter(t, n)) : (s.insertAfter(t, n), s.insertAfter(d, n)), s.remove(o)
                    }
                    H_(e, d)
                })(e, f, s, w, u);
                if (w === e.getBody()) return;
                const k = w.parentNode;
                let S;
                if (Rr(w)) S = Mr(w), i.isEmpty(w) && X_(w), eE(e, S), H_(e, S); else if (g(!1)) S = p(); else if (g(!0) && k) S = k.insertBefore(f(), w), H_(e, Q_(w, "HR") ? S : w); else {
                    const t = (e => {
                        const t = e.cloneRange();
                        return t.setStart(e.startContainer, Z_(!0, e.startContainer, e.startOffset)), t.setEnd(e.endContainer, Z_(!1, e.endContainer, e.endOffset)), t
                    })(c).cloneRange();
                    t.setEndAfter(w);
                    const n = t.extractContents();
                    (e => {
                        V(Co(mn(e), Ut), (e => {
                            const t = e.dom;
                            t.nodeValue = _r(t.data)
                        }))
                    })(n), (e => {
                        let t = e;
                        do {
                            zo(t) && (t.data = t.data.replace(/^[\r\n]+/, "")), t = t.firstChild
                        } while (t)
                    })(n), S = n.firstChild, i.insertAfter(n, w), ((e, t, n) => {
                        var o;
                        const r = [];
                        if (!n) return;
                        let s = n;
                        for (; s = s.firstChild;) {
                            if (e.isBlock(s)) return;
                            To(s) && !t[s.nodeName.toLowerCase()] && r.push(s)
                        }
                        let a = r.length;
                        for (; a--;) s = r[a], (!s.hasChildNodes() || s.firstChild === s.lastChild && "" === (null === (o = s.firstChild) || void 0 === o ? void 0 : o.nodeValue) || Y_(e, s)) && e.remove(s)
                    })(i, d, S), ((e, t) => {
                        t.normalize();
                        const n = t.lastChild;
                        (!n || To(n) && /^(left|right)$/gi.test(e.getStyle(n, "float", !0))) && e.add(t, "br")
                    })(i, w), i.isEmpty(w) && X_(w), S.normalize(), i.isEmpty(S) ? (i.remove(S), p()) : (eE(e, S), H_(e, S))
                }
                i.setAttrib(S, "id", ""), e.dispatch("NewBlock", {newBlock: S})
            }, fakeEventName: "insertParagraph"
        }, nE = (e, t, n) => {
            const o = e.dom.createRng();
            n ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), e.selection.setRng(o), Bf(e, o)
        }, oE = (e, t) => {
            const n = cn("br");
            Qn(mn(t), n), e.undoManager.add()
        }, rE = (e, t) => {
            sE(e.getBody(), t) || Jn(mn(t), cn("br"));
            const n = cn("br");
            Jn(mn(t), n), nE(e, n.dom, !1), e.undoManager.add()
        }, sE = (e, t) => {
            return n = xi.after(t), !!Wo(n.getNode()) || Qc(e, xi.after(t)).map((e => Wo(e.getNode()))).getOr(!1);
            var n
        }, aE = e => e && "A" === e.nodeName && "href" in e, iE = e => e.fold(P, aE, aE, P), lE = (e, t) => {
            t.fold(S, O(oE, e), O(rE, e), S)
        }, dE = {
            insert: (e, t) => {
                const n = (e => {
                    const t = O(Pp, e), n = xi.fromRangeStart(e.selection.getRng());
                    return nx(t, e.getBody(), n).filter(iE)
                })(e);
                n.isSome() ? n.each(O(lE, e)) : ((e, t) => {
                    const n = e.selection, o = e.dom, r = n.getRng();
                    let s, a = !1;
                    df(o, r).each((e => {
                        r.setStart(e.startContainer, e.startOffset), r.setEnd(e.endContainer, e.endOffset)
                    }));
                    let i = r.startOffset, l = r.startContainer;
                    if (To(l) && l.hasChildNodes()) {
                        const e = i > l.childNodes.length - 1;
                        l = l.childNodes[Math.min(i, l.childNodes.length - 1)] || l, i = e && zo(l) ? l.data.length : 0
                    }
                    let d = o.getParent(l, o.isBlock);
                    const c = d && d.parentNode ? o.getParent(d.parentNode, o.isBlock) : null,
                        u = c ? c.nodeName.toUpperCase() : "", m = !(!t || !t.ctrlKey);
                    "LI" !== u || m || (d = c), zo(l) && i >= l.data.length && (((e, t, n) => {
                        const o = new Ro(t, n);
                        let r;
                        const s = e.getNonEmptyElements();
                        for (; r = o.next();) if (s[r.nodeName.toLowerCase()] || zo(r) && r.length > 0) return !0;
                        return !1
                    })(e.schema, l, d || o.getRoot()) || (s = o.create("br"), r.insertNode(s), r.setStartAfter(s), r.setEndAfter(s), a = !0)), s = o.create("br"), Si(o, r, s), nE(e, s, a), e.undoManager.add()
                })(e, t)
            }, fakeEventName: "insertLineBreak"
        }, cE = (e, t) => V_(e).filter((e => t.length > 0 && pn(mn(e), t))).isSome(),
        uE = Ki([{br: []}, {block: []}, {none: []}]), mE = (e, t) => (e => cE(e, vl(e)))(e),
        fE = e => (t, n) => (e => V_(e).filter((e => gr(mn(e)))).isSome())(t) === e, gE = (e, t) => (n, o) => {
            const r = (e => V_(e).fold(N(""), (e => e.nodeName.toUpperCase())))(n) === e.toUpperCase();
            return r === t
        }, pE = e => {
            const t = $_(e.dom, e.selection.getStart());
            return y(t)
        }, hE = e => gE("pre", e), bE = e => (t, n) => fl(t) === e, vE = (e, t) => (e => cE(e, bl(e)))(e), yE = (e, t) => t,
        CE = e => {
            const t = gl(e), n = $_(e.dom, e.selection.getStart());
            return C(n) && e.schema.isValidChild(n.nodeName, t)
        }, wE = (e, t) => (n, o) => Y(e, ((e, t) => e && t(n, o)), !0) ? M.some(t) : M.none(), xE = (e, t, n) => {
            t.selection.isCollapsed() || (e => {
                e.execCommand("delete")
            })(t), C(n) && j_(t, e.fakeEventName).isDefaultPrevented() || (e.insert(t, n), C(n) && z_(t, e.fakeEventName))
        }, kE = (e, t) => {
            const n = () => xE(dE, e, t), o = () => xE(tE, e, t),
                r = ((e, t) => Ww([wE([mE], uE.none()), wE([hE(!0), pE], uE.none()), wE([gE("summary", !0)], uE.br()), wE([hE(!0), bE(!1), yE], uE.br()), wE([hE(!0), bE(!1)], uE.block()), wE([hE(!0), bE(!0), yE], uE.block()), wE([hE(!0), bE(!0)], uE.br()), wE([fE(!0), yE], uE.br()), wE([fE(!0)], uE.block()), wE([vE], uE.br()), wE([yE], uE.br()), wE([CE], uE.block())], [e, !(!t || !t.shiftKey)]).getOr(uE.none()))(e, t);
            switch (hl(e)) {
                case"linebreak":
                    r.fold(n, n, S);
                    break;
                case"block":
                    r.fold(o, o, S);
                    break;
                case"invert":
                    r.fold(o, n, S);
                    break;
                default:
                    r.fold(n, o, S)
            }
        }, SE = Ct(), _E = e => e.stopImmediatePropagation(),
        EE = e => e.keyCode === Dm.PAGE_UP || e.keyCode === Dm.PAGE_DOWN, NE = (e, t, n) => {
            n && !e.get() ? t.on("NodeChange", _E, !0) : !n && e.get() && t.off("NodeChange", _E), e.set(n)
        }, RE = (e, t) => {
            const n = t.container(), o = t.offset();
            return zo(n) ? (n.insertData(o, e), M.some(xi(n, o + e.length))) : Ac(t).map((n => {
                const o = un(e);
                return t.isAtEnd() ? Jn(n, o) : Qn(n, o), xi(o.dom, e.length)
            }))
        }, AE = O(RE, tr), OE = O(RE, " "),
        TE = (e, t) => n => ((e, t) => !up(t) && (((e, t) => ((e, t) => Jc(e.dom, t).isNone())(e, t) || ((e, t) => Qc(e.dom, t).isNone())(e, t) || Qg(e, t) || Jg(e, t) || rp(e, t) || op(e, t))(e, t) || dp(e, t) || cp(e, t)))(e, n) ? AE(t) : OE(t),
        BE = e => {
            const t = xi.fromRangeStart(e.selection.getRng()), n = mn(e.getBody());
            if (e.selection.isCollapsed()) {
                const o = O(Pp, e), r = xi.fromRangeStart(e.selection.getRng());
                return nx(o, e.getBody(), r).bind((e => t => t.fold((t => Jc(e.dom, xi.before(t))), (e => Zc(e)), (e => eu(e)), (t => Qc(e.dom, xi.after(t)))))(n)).map((o => () => TE(n, t)(o).each((e => t => (e.selection.setRng(t.toRange()), e.nodeChanged(), !0))(e))))
            }
            return M.none()
        }, DE = e => Hd(e) ? [{keyCode: Dm.TAB, action: zk(pS, e, !0)}, {
            keyCode: Dm.TAB,
            shiftKey: !0,
            action: zk(pS, e, !1)
        }] : [], PE = e => {
            if (e.addShortcut("Meta+P", "", "mcePrint"), F_(e), Jy(e)) return Ca(null);
            {
                const t = Xx(e);
                return (e => {
                    e.on("keyup compositionstart", O(Rk, e))
                })(e), ((e, t) => {
                    e.on("keydown", (n => {
                        n.isDefaultPrevented() || ((e, t, n) => {
                            const o = Nt.os.isMacOS() || Nt.os.isiOS();
                            jk([{keyCode: Dm.RIGHT, action: zk(Tk, e, !0)}, {
                                keyCode: Dm.LEFT,
                                action: zk(Tk, e, !1)
                            }, {keyCode: Dm.UP, action: zk(Bk, e, !1)}, {
                                keyCode: Dm.DOWN,
                                action: zk(Bk, e, !0)
                            }, ...o ? [{
                                keyCode: Dm.UP,
                                action: zk(Pk, e, !1),
                                metaKey: !0,
                                shiftKey: !0
                            }, {
                                keyCode: Dm.DOWN,
                                action: zk(Pk, e, !0),
                                metaKey: !0,
                                shiftKey: !0
                            }] : [], {keyCode: Dm.RIGHT, action: zk(cS, e, !0)}, {
                                keyCode: Dm.LEFT,
                                action: zk(cS, e, !1)
                            }, {keyCode: Dm.UP, action: zk(uS, e, !1)}, {
                                keyCode: Dm.DOWN,
                                action: zk(uS, e, !0)
                            }, {keyCode: Dm.RIGHT, action: zk($k, e, !0)}, {
                                keyCode: Dm.LEFT,
                                action: zk($k, e, !1)
                            }, {keyCode: Dm.UP, action: zk(Vk, e, !1)}, {
                                keyCode: Dm.DOWN,
                                action: zk(Vk, e, !0)
                            }, {keyCode: Dm.RIGHT, action: zk(Gx, e, t, !0)}, {
                                keyCode: Dm.LEFT,
                                action: zk(Gx, e, t, !1)
                            }, {keyCode: Dm.RIGHT, ctrlKey: !o, altKey: o, action: zk(Qx, e, t)}, {
                                keyCode: Dm.LEFT,
                                ctrlKey: !o,
                                altKey: o,
                                action: zk(Jx, e, t)
                            }, {keyCode: Dm.UP, action: zk(Ik, e, !1)}, {
                                keyCode: Dm.DOWN,
                                action: zk(Ik, e, !0)
                            }], n).each((e => {
                                n.preventDefault()
                            }))
                        })(e, t, n)
                    }))
                })(e, t), ((e, t) => {
                    e.on("keydown", (n => {
                        n.isDefaultPrevented() || ((e, t, n) => {
                            const o = n.keyCode === Dm.BACKSPACE ? "deleteContentBackward" : "deleteContentForward";
                            Hk([{keyCode: Dm.BACKSPACE, action: zk(pk, e)}, {
                                keyCode: Dm.BACKSPACE,
                                action: zk(Pw, e, !1)
                            }, {keyCode: Dm.DELETE, action: zk(Pw, e, !0)}, {
                                keyCode: Dm.BACKSPACE,
                                action: zk(Ew, e, !1)
                            }, {keyCode: Dm.DELETE, action: zk(Ew, e, !0)}, {
                                keyCode: Dm.BACKSPACE,
                                action: zk(nk, e, t, !1)
                            }, {keyCode: Dm.DELETE, action: zk(nk, e, t, !0)}, {
                                keyCode: Dm.BACKSPACE,
                                action: zk(hh, e, !1)
                            }, {keyCode: Dm.DELETE, action: zk(hh, e, !0)}, {
                                keyCode: Dm.BACKSPACE,
                                action: zk(Lw, e, !1)
                            }, {keyCode: Dm.DELETE, action: zk(Lw, e, !0)}, {
                                keyCode: Dm.BACKSPACE,
                                action: zk(ik, e, !1)
                            }, {keyCode: Dm.DELETE, action: zk(ik, e, !0)}, {
                                keyCode: Dm.BACKSPACE,
                                action: zk(yw, e, !1)
                            }, {keyCode: Dm.DELETE, action: zk(yw, e, !0)}, {
                                keyCode: Dm.BACKSPACE,
                                action: zk(hw, e, !1)
                            }, {keyCode: Dm.DELETE, action: zk(hw, e, !0)}, {
                                keyCode: Dm.BACKSPACE,
                                action: zk(sk, e, !1)
                            }, {keyCode: Dm.DELETE, action: zk(sk, e, !0)}], n).each((t => {
                                n.preventDefault(), j_(e, o).isDefaultPrevented() || (t(), z_(e, o))
                            }))
                        })(e, t, n)
                    })), e.on("keyup", (t => {
                        t.isDefaultPrevented() || ((e, t) => {
                            jk([{keyCode: Dm.BACKSPACE, action: zk(Dw, e)}, {keyCode: Dm.DELETE, action: zk(Dw, e)}], t)
                        })(e, t)
                    }))
                })(e, t), (e => {
                    e.on("keydown", (t => {
                        t.keyCode === Dm.ENTER && ((e, t) => {
                            var n;
                            t.isDefaultPrevented() || (t.preventDefault(), (n = e.undoManager).typing && (n.typing = !1, n.add()), e.undoManager.transact((() => {
                                kE(e, t)
                            })))
                        })(e, t)
                    }))
                })(e), (e => {
                    e.on("keydown", (t => {
                        t.isDefaultPrevented() || ((e, t) => {
                            Hk([{keyCode: Dm.SPACEBAR, action: zk(BE, e)}], t).each((n => {
                                t.preventDefault(), j_(e, "insertText", {data: " "}).isDefaultPrevented() || (n(), z_(e, "insertText", {data: " "}))
                            }))
                        })(e, t)
                    }))
                })(e), (e => {
                    e.on("input", (t => {
                        t.isComposing || (e => {
                            const t = mn(e.getBody());
                            e.selection.isCollapsed() && Cp(t, xi.fromRangeStart(e.selection.getRng())).each((t => {
                                e.selection.setRng(t.toRange())
                            }))
                        })(e)
                    }))
                })(e), (e => {
                    e.on("keydown", (t => {
                        t.isDefaultPrevented() || ((e, t) => {
                            jk([...DE(e)], t).each((e => {
                                t.preventDefault()
                            }))
                        })(e, t)
                    }))
                })(e), ((e, t) => {
                    e.on("keydown", (n => {
                        n.isDefaultPrevented() || ((e, t, n) => {
                            const o = Nt.os.isMacOS() || Nt.os.isiOS();
                            jk([{keyCode: Dm.END, action: zk(Dk, e, !0)}, {
                                keyCode: Dm.HOME,
                                action: zk(Dk, e, !1)
                            }, ...o ? [] : [{
                                keyCode: Dm.HOME,
                                action: zk(Pk, e, !1),
                                ctrlKey: !0,
                                shiftKey: !0
                            }, {keyCode: Dm.END, action: zk(Pk, e, !0), ctrlKey: !0, shiftKey: !0}], {
                                keyCode: Dm.END,
                                action: zk(qk, e, !0)
                            }, {keyCode: Dm.HOME, action: zk(qk, e, !1)}, {
                                keyCode: Dm.END,
                                action: zk(Zx, e, !0, t)
                            }, {keyCode: Dm.HOME, action: zk(Zx, e, !1, t)}], n).each((e => {
                                n.preventDefault()
                            }))
                        })(e, t, n)
                    }))
                })(e, t), ((e, t) => {
                    if (SE.os.isMacOS()) return;
                    const n = Ca(!1);
                    e.on("keydown", (t => {
                        EE(t) && NE(n, e, !0)
                    })), e.on("keyup", (o => {
                        o.isDefaultPrevented() || ((e, t, n) => {
                            jk([{keyCode: Dm.PAGE_UP, action: zk(Zx, e, !1, t)}, {
                                keyCode: Dm.PAGE_DOWN,
                                action: zk(Zx, e, !0, t)
                            }], n)
                        })(e, t, o), EE(o) && n.get() && (NE(n, e, !1), e.nodeChanged())
                    }))
                })(e, t), t
            }
        };

    class LE {
        constructor(e) {
            let t;
            this.lastPath = [], this.editor = e;
            const n = this;
            "onselectionchange" in e.getDoc() || e.on("NodeChange click mouseup keyup focus", (n => {
                const o = e.selection.getRng(), r = {
                    startContainer: o.startContainer,
                    startOffset: o.startOffset,
                    endContainer: o.endContainer,
                    endOffset: o.endOffset
                };
                "nodechange" !== n.type && tf(r, t) || e.dispatch("SelectionChange"), t = r
            })), e.on("contextmenu", (() => {
                e.dispatch("SelectionChange")
            })), e.on("SelectionChange", (() => {
                const t = e.selection.getStart(!0);
                t && Pu(e) && !n.isSameElementPath(t) && e.dom.isChildOf(t, e.getBody()) && e.nodeChanged({selectionChange: !0})
            })), e.on("mouseup", (t => {
                !t.isDefaultPrevented() && Pu(e) && ("IMG" === e.selection.getNode().nodeName ? qf.setEditorTimeout(e, (() => {
                    e.nodeChanged()
                })) : e.nodeChanged())
            }))
        }

        nodeChanged(e = {}) {
            const t = this.editor.selection;
            let n;
            if (this.editor.initialized && t && !ld(this.editor) && !this.editor.mode.isReadOnly()) {
                const o = this.editor.getBody();
                n = t.getStart(!0) || o, n.ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(n, o) || (n = o);
                const r = [];
                this.editor.dom.getParent(n, (e => e === o || (r.push(e), !1))), this.editor.dispatch("NodeChange", {
                    ...e,
                    element: n,
                    parents: r
                })
            }
        }

        isSameElementPath(e) {
            let t;
            const n = this.editor, o = ne(n.dom.getParents(e, L, n.getBody()));
            if (o.length === this.lastPath.length) {
                for (t = o.length; t >= 0 && o[t] === this.lastPath[t]; t--) ;
                if (-1 === t) return this.lastPath = o, !0
            }
            return this.lastPath = o, !1
        }
    }

    const ME = N("x-tinymce/html"), IE = "\x3c!-- x-tinymce/html --\x3e", FE = e => IE + e,
        UE = e => -1 !== e.indexOf(IE), zE = "%MCEPASTEBIN%", jE = e => e.dom.get("mcepastebin"),
        HE = e => C(e) && "mcepastebin" === e.id, $E = e => e === zE, VE = (e, t) => (Tt.each(t, (t => {
            e = u(t, RegExp) ? e.replace(t, "") : e.replace(t[0], t[1])
        })), e),
        qE = e => VE(e, [/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi, /<!--StartFragment-->|<!--EndFragment-->/g, [/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g, (e, t, n) => t || n ? tr : " "], /<br class="Apple-interchange-newline">/g, /<br>$/i]),
        WE = (e, t) => ({content: e, cancelled: t}), KE = (e, t) => (e.insertContent(t, {merge: Od(e), paste: !0}), !0),
        GE = e => /^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(e),
        YE = (e, t, n) => !(e.selection.isCollapsed() || !GE(t)) && ((e, t, n) => (e.undoManager.extra((() => {
            n(e, t)
        }), (() => {
            e.execCommand("mceInsertLink", !1, t)
        })), !0))(e, t, n),
        XE = (e, t, n) => !!((e, t) => GE(t) && H(jd(e), (e => je(t.toLowerCase(), `.${e.toLowerCase()}`))))(e, t) && ((e, t, n) => (e.undoManager.extra((() => {
            n(e, t)
        }), (() => {
            e.insertContent('<img src="' + t + '">')
        })), !0))(e, t, n), QE = (e => {
            let t = 0;
            return () => "mceclip" + t++
        })(), JE = (e, t, n, o) => {
            const r = ((e, t, n) => ((e, t, n) => {
                const o = ((e, t, n) => e.dispatch("PastePreProcess", {content: t, internal: n}))(e, t, n), r = ((e, t) => {
                    const n = yy({}, e.schema);
                    n.addNodeFilter("meta", (e => {
                        Tt.each(e, (e => {
                            e.remove()
                        }))
                    }));
                    const o = n.parse(t, {forced_root_block: !1, isRootContent: !0});
                    return _g({validate: !0}, e.schema).serialize(o)
                })(e, o.content);
                return e.hasEventListeners("PastePostProcess") && !o.isDefaultPrevented() ? ((e, t, n) => {
                    const o = e.dom.create("div", {style: "display:none"}, t),
                        r = ((e, t, n) => e.dispatch("PastePostProcess", {node: t, internal: n}))(e, o, n);
                    return WE(r.node.innerHTML, r.isDefaultPrevented())
                })(e, r, n) : WE(r, o.isDefaultPrevented())
            })(e, t, n))(e, t, n);
            r.cancelled || ((e, t, n) => {
                n || !Td(e) ? KE(e, t) : ((e, t) => {
                    Tt.each([YE, XE, KE], (n => !n(e, t, KE)))
                })(e, t)
            })(e, r.content, o)
        }, ZE = (e, t, n) => {
            const o = n || UE(t);
            JE(e, (e => e.replace(IE, ""))(t), o, !1)
        }, eN = (e, t) => {
            const n = e.dom.encode(t).replace(/\r\n/g, "\n"), o = ((e, t, n) => {
                const o = e.split(/\n\n/), r = ((e, t) => {
                    let n = "<" + e;
                    const o = ye(t, ((e, t) => t + '="' + Fs.encodeAllRaw(e) + '"'));
                    return o.length && (n += " " + o.join(" ")), n + ">"
                })(t, n), s = "</" + t + ">", a = $(o, (e => e.split(/\n/).join("<br />")));
                return 1 === a.length ? a[0] : $(a, (e => r + e + s)).join("")
            })(Jr(n, Dd(e)), gl(e), pl(e));
            JE(e, o, !1, !0)
        }, tN = e => {
            const t = {};
            if (e && e.types) for (let n = 0; n < e.types.length; n++) {
                const o = e.types[n];
                try {
                    t[o] = e.getData(o)
                } catch (e) {
                    t[o] = ""
                }
            }
            return t
        }, nN = (e, t) => t in e && e[t].length > 0, oN = e => nN(e, "text/html") || nN(e, "text/plain"),
        rN = (e, t, n) => {
            const o = "paste" === t.type ? t.clipboardData : t.dataTransfer;
            var r;
            if (_d(e) && o) {
                const s = ((e, t) => {
                    const n = t.items ? ee(de(t.items), (e => "file" === e.kind ? [e.getAsFile()] : [])) : [],
                        o = t.files ? de(t.files) : [];
                    return K(n.length > 0 ? n : o, (e => {
                        const t = jd(e);
                        return e => ze(e.type, "image/") && H(t, (t => (e => {
                            const t = e.toLowerCase(), n = {
                                jpg: "jpeg",
                                jpe: "jpeg",
                                jfi: "jpeg",
                                jif: "jpeg",
                                jfif: "jpeg",
                                pjpeg: "jpeg",
                                pjp: "jpeg",
                                svg: "svg+xml"
                            };
                            return Tt.hasOwn(n, t) ? "image/" + n[t] : "image/" + t
                        })(t) === e.type))
                    })(e))
                })(e, o);
                if (s.length > 0) return t.preventDefault(), (r = s, Promise.all($(r, (e => ey(e).then((t => ({
                    file: e,
                    uri: t
                }))))))).then((t => {
                    n && e.selection.setRng(n), V(t, (t => {
                        ((e, t) => {
                            Jv(t.uri).each((({data: n, type: o, base64Encoded: r}) => {
                                const s = r ? n : btoa(n), a = t.file, i = e.editorUpload.blobCache,
                                    l = i.getByData(s, o), d = null != l ? l : ((e, t, n, o) => {
                                        const r = QE(), s = xl(e) && C(n.name), a = s ? ((e, t) => {
                                            const n = t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);
                                            return C(n) ? e.dom.encode(n[1]) : void 0
                                        })(e, n.name) : r, i = s ? n.name : void 0, l = t.create(r, n, o, a, i);
                                        return t.add(l), l
                                    })(e, i, a, s);
                                ZE(e, `<img src="${d.blobUri()}">`, !1)
                            }))
                        })(e, t)
                    }))
                })), !0
            }
            return !1
        }, sN = (e, t, n, o) => {
            let r = qE(n);
            const s = nN(t, ME()) || UE(n),
                a = !s && (e => !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e))(r),
                i = GE(r);
            ($E(r) || !r.length || a && !i) && (o = !0), (o || i) && (r = nN(t, "text/plain") && a ? t["text/plain"] : (e => {
                const t = Qs(), n = yy({}, t);
                let o = "";
                const r = t.getVoidElements(),
                    s = Tt.makeMap("script noscript style textarea video audio iframe object", " "),
                    a = t.getBlockElements(), i = e => {
                        const n = e.name, l = e;
                        if ("br" !== n) {
                            if ("wbr" !== n) if (r[n] && (o += " "), s[n]) o += " "; else {
                                if (3 === e.type && (o += e.value), !(e.name in t.getVoidElements())) {
                                    let t = e.firstChild;
                                    if (t) do {
                                        i(t)
                                    } while (t = t.next)
                                }
                                a[n] && l.next && (o += "\n", "p" === n && (o += "\n"))
                            }
                        } else o += "\n"
                    };
                return e = VE(e, [/<!\[[^\]]+\]>/g]), i(n.parse(e)), o
            })(r)), $E(r) || (o ? eN(e, r) : ZE(e, r, s))
        }, aN = (e, t, n) => {
            ((e, t, n) => {
                let o;
                e.on("keydown", (e => {
                    (e => Dm.metaKeyPressed(e) && 86 === e.keyCode || e.shiftKey && 45 === e.keyCode)(e) && !e.isDefaultPrevented() && (o = e.shiftKey && 86 === e.keyCode)
                })), e.on("paste", (r => {
                    if (r.isDefaultPrevented() || (e => {
                        var t, n;
                        return Nt.os.isAndroid() && 0 === (null === (n = null === (t = e.clipboardData) || void 0 === t ? void 0 : t.items) || void 0 === n ? void 0 : n.length)
                    })(r)) return;
                    const s = "text" === n.get() || o;
                    o = !1;
                    const a = tN(r.clipboardData);
                    !oN(a) && rN(e, r, t.getLastRng() || e.selection.getRng()) || (nN(a, "text/html") ? (r.preventDefault(), sN(e, a, a["text/html"], s)) : (t.create(), qf.setEditorTimeout(e, (() => {
                        const n = t.getHtml();
                        t.remove(), sN(e, a, n, s)
                    }), 0)))
                }))
            })(e, t, n), (e => {
                const t = e => ze(e, "webkit-fake-url"), n = e => ze(e, "data:");
                e.parser.addNodeFilter("img", ((o, r, s) => {
                    if (!_d(e) && (e => {
                        var t;
                        return !0 === (null === (t = e.data) || void 0 === t ? void 0 : t.paste)
                    })(s)) for (const r of o) {
                        const o = r.attr("src");
                        m(o) && !r.attr("data-mce-object") && o !== Nt.transparentSrc && (t(o) || !Pd(e) && n(o)) && r.remove()
                    }
                }))
            })(e)
        }, iN = (e, t, n, o) => {
            ((e, t, n) => {
                if (!e) return !1;
                try {
                    return e.clearData(), e.setData("text/html", t), e.setData("text/plain", n), e.setData(ME(), t), !0
                } catch (e) {
                    return !1
                }
            })(e.clipboardData, t.html, t.text) ? (e.preventDefault(), o()) : n(t.html, o)
        }, lN = e => (t, n) => {
            const {dom: o, selection: r} = e, s = o.create("div", {contenteditable: "false", "data-mce-bogus": "all"}),
                a = o.create("div", {contenteditable: "true"}, t);
            o.setStyles(s, {
                position: "fixed",
                top: "0",
                left: "-3000px",
                width: "1000px",
                overflow: "hidden"
            }), s.appendChild(a), o.add(e.getBody(), s);
            const i = r.getRng();
            a.focus();
            const l = o.createRng();
            l.selectNodeContents(a), r.setRng(l), qf.setEditorTimeout(e, (() => {
                r.setRng(i), o.remove(s), n()
            }), 0)
        }, dN = e => ({html: FE(e.selection.getContent({contextual: !0})), text: e.selection.getContent({format: "text"})}),
        cN = e => !e.selection.isCollapsed() || (e => !!e.dom.getParent(e.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", e.getBody()))(e),
        uN = (e, t) => {
            var n, o;
            return mf.getCaretRangeFromPoint(null !== (n = t.clientX) && void 0 !== n ? n : 0, null !== (o = t.clientY) && void 0 !== o ? o : 0, e.getDoc())
        }, mN = (e, t) => {
            e.focus(), t && e.selection.setRng(t)
        }, fN = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
        gN = e => Tt.trim(e).replace(fN, _u).toLowerCase(), pN = (e, t, n) => {
            const o = Rd(e);
            if (n || "all" === o || !Ad(e)) return t;
            const r = o ? o.split(/[, ]/) : [];
            if (r && "none" !== o) {
                const n = e.dom, o = e.selection.getNode();
                t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, ((e, t, s, a) => {
                    const i = n.parseStyle(n.decode(s)), l = {};
                    for (let e = 0; e < r.length; e++) {
                        const t = i[r[e]];
                        let s = t, a = n.getStyle(o, r[e], !0);
                        /color/.test(r[e]) && (s = gN(s), a = gN(a)), a !== s && (l[r[e]] = t)
                    }
                    const d = n.serializeStyle(l, "span");
                    return d ? t + ' style="' + d + '"' + a : t + a
                }))
            } else t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
            return t = t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, ((e, t, n, o) => t + ' style="' + n + '"' + o)), t
        }, hN = e => {
            const t = Ca(!1), n = Ca(Bd(e) ? "text" : "html"), o = (e => {
                const t = Ca(null);
                return {
                    create: () => ((e, t) => {
                        const {dom: n, selection: o} = e, r = e.getBody();
                        t.set(o.getRng());
                        const s = n.add(e.getBody(), "div", {
                            id: "mcepastebin",
                            class: "mce-pastebin",
                            contentEditable: !0,
                            "data-mce-bogus": "all",
                            style: "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"
                        }, zE);
                        Nt.browser.isFirefox() && n.setStyle(s, "left", "rtl" === n.getStyle(r, "direction", !0) ? 65535 : -65535), n.bind(s, "beforedeactivate focusin focusout", (e => {
                            e.stopPropagation()
                        })), s.focus(), o.select(s, !0)
                    })(e, t), remove: () => ((e, t) => {
                        const n = e.dom;
                        if (jE(e)) {
                            let o;
                            const r = t.get();
                            for (; o = jE(e);) n.remove(o), n.unbind(o);
                            r && e.selection.setRng(r)
                        }
                        t.set(null)
                    })(e, t), getEl: () => jE(e), getHtml: () => (e => {
                        const t = e.dom, n = (e, n) => {
                            e.appendChild(n), t.remove(n, !0)
                        }, [o, ...r] = K(e.getBody().childNodes, HE);
                        V(r, (e => {
                            n(o, e)
                        }));
                        const s = t.select("div[id=mcepastebin]", o);
                        for (let e = s.length - 1; e >= 0; e--) {
                            const r = t.create("div");
                            o.insertBefore(r, s[e]), n(r, s[e])
                        }
                        return o ? o.innerHTML : ""
                    })(e), getLastRng: t.get
                }
            })(e);
            (e => {
                (Nt.browser.isChromium() || Nt.browser.isSafari()) && ((e, t) => {
                    e.on("PastePreProcess", (n => {
                        n.content = t(e, n.content, n.internal)
                    }))
                })(e, pN)
            })(e), ((e, t) => {
                e.addCommand("mceTogglePlainTextPaste", (() => {
                    ((e, t) => {
                        "text" === t.get() ? (t.set("html"), Bm(e, !1)) : (t.set("text"), Bm(e, !0)), e.focus()
                    })(e, t)
                })), e.addCommand("mceInsertClipboardContent", ((t, n) => {
                    n.html && ZE(e, n.html, n.internal), n.text && eN(e, n.text)
                }))
            })(e, n), (e => {
                const t = t => n => {
                    t(e, n)
                }, n = Ed(e);
                w(n) && e.on("PastePreProcess", t(n));
                const o = Nd(e);
                w(o) && e.on("PastePostProcess", t(o))
            })(e), e.on("PreInit", (() => {
                (e => {
                    e.on("cut", (e => t => {
                        !t.isDefaultPrevented() && cN(e) && iN(t, dN(e), lN(e), (() => {
                            if (Nt.browser.isChromium() || Nt.browser.isFirefox()) {
                                const t = e.selection.getRng();
                                qf.setEditorTimeout(e, (() => {
                                    e.selection.setRng(t), e.execCommand("Delete")
                                }), 0)
                            } else e.execCommand("Delete")
                        }))
                    })(e)), e.on("copy", (e => t => {
                        !t.isDefaultPrevented() && cN(e) && iN(t, dN(e), lN(e), S)
                    })(e))
                })(e), ((e, t) => {
                    Sd(e) && e.on("dragend dragover draggesture dragdrop drop drag", (e => {
                        e.preventDefault(), e.stopPropagation()
                    })), _d(e) || e.on("drop", (e => {
                        const t = e.dataTransfer;
                        t && (e => H(e.files, (e => /^image\//.test(e.type))))(t) && e.preventDefault()
                    })), e.on("drop", (n => {
                        if (n.isDefaultPrevented() || t.get()) return;
                        const o = uN(e, n);
                        if (y(o)) return;
                        const r = tN(n.dataTransfer), s = nN(r, ME());
                        if ((!oN(r) || (e => {
                            const t = e["text/plain"];
                            return !!t && 0 === t.indexOf("file://")
                        })(r)) && rN(e, n, o)) return;
                        const a = r[ME()], i = a || r["text/html"] || r["text/plain"];
                        i && (n.preventDefault(), qf.setEditorTimeout(e, (() => {
                            e.undoManager.transact((() => {
                                a && e.execCommand("Delete"), mN(e, o);
                                const t = qE(i);
                                r["text/html"] ? ZE(e, t, s) : eN(e, t)
                            }))
                        })))
                    })), e.on("dragstart", (e => {
                        t.set(!0)
                    })), e.on("dragover dragend", (n => {
                        _d(e) && !t.get() && (n.preventDefault(), mN(e, uN(e, n))), "dragend" === n.type && t.set(!1)
                    }))
                })(e, t), aN(e, o, n)
            }))
        }, bN = Wo, vN = zo, yN = e => Yo(e.dom), CN = e => t => bn(mn(e), t), wN = (e, t) => ko(mn(e), yN, CN(t)),
        xN = (e, t, n) => {
            const o = new Ro(e, t), r = n ? o.next.bind(o) : o.prev.bind(o);
            let s = e;
            for (let t = n ? e : r(); t && !bN(t); t = r()) Wr(t) && (s = t);
            return s
        }, kN = e => {
            const t = ((e, t) => {
                const n = xi.fromRangeStart(e).getNode(),
                    o = ((e, t) => ko(mn(e), (e => (e => Go(e.dom))(e) || dr(e)), CN(t)).getOr(mn(t)).dom)(n, t),
                    r = xN(n, o, !1), s = xN(n, o, !0), a = document.createRange();
                return wN(r, o).fold((() => {
                    vN(r) ? a.setStart(r, 0) : a.setStartBefore(r)
                }), (e => a.setStartBefore(e.dom))), wN(s, o).fold((() => {
                    vN(s) ? a.setEnd(s, s.data.length) : a.setEndAfter(s)
                }), (e => a.setEndAfter(e.dom))), a
            })(e.selection.getRng(), e.getBody());
            e.selection.setRng(Oh(t))
        };
    var SN;
    !function (e) {
        e.Before = "before", e.After = "after"
    }(SN || (SN = {}));
    const _N = (e, t) => Math.abs(e.left - t), EN = (e, t) => Math.abs(e.right - t),
        NN = (e, t) => (e => Y(e, ((e, t) => e.fold((() => M.some(t)), (e => {
            const n = Math.min(t.left, e.left), o = Math.min(t.top, e.top), r = Math.max(t.right, e.right),
                s = Math.max(t.bottom, e.bottom);
            return M.some({top: o, right: r, bottom: s, left: n, width: r - n, height: s - o})
        }))), M.none()))(K(e, (e => {
            return (n = t) >= (o = e).top && n <= o.bottom;
            var n, o
        }))).fold((() => [[], e]), (t => {
            const {pass: n, fail: o} = W(e, (e => ((e, t) => {
                const n = ((e, t) => Math.max(0, Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top)))(e, t) / Math.min(e.height, t.height);
                return ((e, t) => e.top < t.bottom && e.bottom > t.top)(e, t) && n > .5
            })(e, t)));
            return [n, o]
        })), RN = (e, t, n) => t > e.left && t < e.right ? 0 : Math.min(Math.abs(e.left - t), Math.abs(e.right - t)),
        AN = (e, t, n) => {
            const o = e => Wr(e.node) ? M.some(e) : To(e.node) ? AN(de(e.node.childNodes), t, n) : M.none(),
                r = (e, r) => {
                    const s = se(e, ((e, o) => r(e, t, n) - r(o, t, n)));
                    return ((e, r) => {
                        if (e.length >= 2) {
                            const s = o(e[0]).getOr(e[0]), a = o(e[1]).getOr(e[1]);
                            if (Math.abs(r(s, t, n) - r(a, t, n)) < 2) {
                                if (zo(s.node)) return M.some(s);
                                if (zo(a.node)) return M.some(a)
                            }
                        }
                        return M.none()
                    })(s, r).orThunk((() => ce(s, o)))
                }, [s, a] = NN(Ox(e), n), {pass: i, fail: l} = W(a, (e => e.top < n));
            return r(s, RN).orThunk((() => r(l, ei))).orThunk((() => r(i, ei)))
        }, ON = (e, t, n) => ((e, t, n) => {
            const o = mn(e), r = Cn(o), s = fn(r, t, n).filter((e => vn(o, e))).getOr(o);
            return ((e, t, n, o) => {
                const r = (t, s) => {
                    const a = K(t.dom.childNodes, T((e => To(e) && e.classList.contains("mce-drag-container"))));
                    return s.fold((() => AN(a, n, o)), (e => {
                        const t = K(a, (t => t !== e.dom));
                        return AN(t, n, o)
                    })).orThunk((() => (bn(t, e) ? M.none() : kn(t)).bind((e => r(e, M.some(t))))))
                };
                return r(t, M.none())
            })(o, s, t, n)
        })(e, t, n).filter((e => rc(e.node))).map((e => ((e, t) => ({
            node: e.node,
            position: _N(e, t) < EN(e, t) ? SN.Before : SN.After
        }))(e, t))), TN = e => {
            var t, n;
            const o = e.getBoundingClientRect(), r = e.ownerDocument, s = r.documentElement, a = r.defaultView;
            return {
                top: o.top + (null !== (t = null == a ? void 0 : a.scrollY) && void 0 !== t ? t : 0) - s.clientTop,
                left: o.left + (null !== (n = null == a ? void 0 : a.scrollX) && void 0 !== n ? n : 0) - s.clientLeft
            }
        }, BN = Yo, DN = ((...e) => t => {
            for (let n = 0; n < e.length; n++) if (e[n](t)) return !0;
            return !1
        })(BN, Go), PN = (e, t, n, o) => {
            const r = e.dom, s = t.cloneNode(!0);
            r.setStyles(s, {width: n, height: o}), r.setAttrib(s, "data-mce-selected", null);
            const a = r.create("div", {
                class: "mce-drag-container",
                "data-mce-bogus": "all",
                unselectable: "on",
                contenteditable: "false"
            });
            return r.setStyles(a, {
                position: "absolute",
                opacity: .5,
                overflow: "hidden",
                border: 0,
                padding: 0,
                margin: 0,
                width: n,
                height: o
            }), r.setStyles(s, {margin: 0, boxSizing: "border-box"}), a.appendChild(s), a
        }, LN = (e, t) => n => () => {
            const o = "left" === e ? n.scrollX : n.scrollY;
            n.scroll({[e]: o + t, behavior: "smooth"})
        }, MN = LN("left", -32), IN = LN("left", 32), FN = LN("top", -32), UN = LN("top", 32), zN = e => {
            e && e.parentNode && e.parentNode.removeChild(e)
        }, jN = (e, t) => {
            const n = Ra(((e, n) => {
                t._selectionOverrides.hideFakeCaret(), ON(t.getBody(), e, n).fold((() => t.selection.placeCaretAt(e, n)), (o => {
                    const r = t._selectionOverrides.showCaret(1, o.node, o.position === SN.Before, !1);
                    r ? t.selection.setRng(r) : t.selection.placeCaretAt(e, n)
                }))
            }), 0);
            t.on("remove", n.cancel);
            const o = e;
            return r => e.on((e => {
                const s = Math.max(Math.abs(r.screenX - e.screenX), Math.abs(r.screenY - e.screenY));
                if (!e.dragging && s > 10) {
                    if (t.dispatch("dragstart", {target: e.element}).isDefaultPrevented()) return;
                    e.dragging = !0, t.focus()
                }
                if (e.dragging) {
                    const s = r.currentTarget === t.getDoc().documentElement,
                        l = ((e, t) => ({pageX: t.pageX - e.relX, pageY: t.pageY + 5}))(e, ((e, t) => {
                            return n = (e => e.inline ? TN(e.getBody()) : {left: 0, top: 0})(e), o = (e => {
                                const t = e.getBody();
                                return e.inline ? {left: t.scrollLeft, top: t.scrollTop} : {left: 0, top: 0}
                            })(e), r = ((e, t) => {
                                if (t.target.ownerDocument !== e.getDoc()) {
                                    const n = TN(e.getContentAreaContainer()), o = (e => {
                                        const t = e.getBody(), n = e.getDoc().documentElement,
                                            o = {left: t.scrollLeft, top: t.scrollTop},
                                            r = {left: t.scrollLeft || n.scrollLeft, top: t.scrollTop || n.scrollTop};
                                        return e.inline ? o : r
                                    })(e);
                                    return {left: t.pageX - n.left + o.left, top: t.pageY - n.top + o.top}
                                }
                                return {left: t.pageX, top: t.pageY}
                            })(e, t), {pageX: r.left - n.left + o.left, pageY: r.top - n.top + o.top};
                            var n, o, r
                        })(t, r));
                    a = e.ghost, i = t.getBody(), a.parentNode !== i && i.appendChild(a), ((e, t, n, o, r, s, a, i, l, d, c, u) => {
                        let m = 0, f = 0;
                        e.style.left = t.pageX + "px", e.style.top = t.pageY + "px", t.pageX + n > r && (m = t.pageX + n - r), t.pageY + o > s && (f = t.pageY + o - s), e.style.width = n - m + "px", e.style.height = o - f + "px";
                        const g = l.clientHeight, p = l.clientWidth, h = a + l.getBoundingClientRect().top,
                            b = i + l.getBoundingClientRect().left;
                        c.on((e => {
                            e.intervalId.clear(), e.dragging && u && (a + 8 >= g ? e.intervalId.set(UN(d)) : a - 8 <= 0 ? e.intervalId.set(FN(d)) : i + 8 >= p ? e.intervalId.set(IN(d)) : i - 8 <= 0 ? e.intervalId.set(MN(d)) : h + 16 >= window.innerHeight ? e.intervalId.set(UN(window)) : h - 16 <= 0 ? e.intervalId.set(FN(window)) : b + 16 >= window.innerWidth ? e.intervalId.set(IN(window)) : b - 16 <= 0 && e.intervalId.set(MN(window)))
                        }))
                    })(e.ghost, l, e.width, e.height, e.maxX, e.maxY, r.clientY, r.clientX, t.getContentAreaContainer(), t.getWin(), o, s), n.throttle(r.clientX, r.clientY)
                }
                var a, i
            }))
        }, HN = e => {
            e.on((e => {
                e.intervalId.clear(), zN(e.ghost)
            })), e.clear()
        }, $N = e => {
            const t = Na(), n = ba.DOM, o = document, r = ((e, t) => n => {
                if ((e => 0 === e.button)(n)) {
                    const s = Q(t.dom.getParents(n.target), DN).getOr(null);
                    if (C(s) && (o = t.getBody(), BN(r = s) && r !== o)) {
                        const o = t.dom.getPos(s), r = t.getBody(), a = t.getDoc().documentElement;
                        e.set({
                            element: s,
                            dragging: !1,
                            screenX: n.screenX,
                            screenY: n.screenY,
                            maxX: (t.inline ? r.scrollWidth : a.offsetWidth) - 2,
                            maxY: (t.inline ? r.scrollHeight : a.offsetHeight) - 2,
                            relX: n.pageX - o.x,
                            relY: n.pageY - o.y,
                            width: s.offsetWidth,
                            height: s.offsetHeight,
                            ghost: PN(t, s, s.offsetWidth, s.offsetHeight),
                            intervalId: Ea(100)
                        })
                    }
                }
                var o, r
            })(t, e), s = jN(t, e), a = ((e, t) => n => {
                e.on((e => {
                    if (e.intervalId.clear(), e.dragging) {
                        if (((e, t, n) => !y(t) && t !== n && !e.dom.isChildOf(t, n) && !BN(t))(t, (e => {
                            const t = e.getSel();
                            if (C(t)) {
                                const e = t.getRangeAt(0).startContainer;
                                return zo(e) ? e.parentNode : e
                            }
                            return null
                        })(t.selection), e.element)) {
                            const o = (e => {
                                const t = e.cloneNode(!0);
                                return t.removeAttribute("data-mce-selected"), t
                            })(e.element);
                            t.dispatch("drop", {
                                clientX: n.clientX,
                                clientY: n.clientY
                            }).isDefaultPrevented() || t.undoManager.transact((() => {
                                zN(e.element), t.insertContent(t.dom.getOuterHTML(o)), t._selectionOverrides.hideFakeCaret()
                            }))
                        }
                        t.dispatch("dragend")
                    }
                })), HN(e)
            })(t, e), i = ((e, t) => () => {
                e.on((e => {
                    e.intervalId.clear(), e.dragging && t.dispatch("dragend")
                })), HN(e)
            })(t, e);
            e.on("mousedown", r), e.on("mousemove", s), e.on("mouseup", a), n.bind(o, "mousemove", s), n.bind(o, "mouseup", i), e.on("remove", (() => {
                n.unbind(o, "mousemove", s), n.unbind(o, "mouseup", i)
            })), e.on("keydown", (e => {
                e.keyCode === Dm.ESC && i()
            }))
        }, VN = Yo, qN = (e, t) => bh(e.getBody(), t), WN = e => {
            const t = e.selection, n = e.dom, o = e.getBody(), r = tc(e, o, n.isBlock, (() => Zf(e))),
                s = "sel-" + n.uniqueId(), a = "data-mce-selected";
            let i;
            const l = e => e !== o && (VN(e) || Jo(e)) && n.isChildOf(e, o),
                d = (n, o, s, a = !0) => e.dispatch("ShowCaret", {
                    target: o,
                    direction: n,
                    before: s
                }).isDefaultPrevented() ? null : (a && t.scrollIntoView(o, -1 === n), r.show(s, o)),
                c = e => Or(e) || Pr(e) || Lr(e), u = e => c(e.startContainer) || c(e.endContainer), m = t => {
                    const o = e.schema.getVoidElements(), r = n.createRng(), s = t.startContainer, a = t.startOffset,
                        i = t.endContainer, l = t.endOffset;
                    return xe(o, s.nodeName.toLowerCase()) ? 0 === a ? r.setStartBefore(s) : r.setStartAfter(s) : r.setStart(s, a), xe(o, i.nodeName.toLowerCase()) ? 0 === l ? r.setEndBefore(i) : r.setEndAfter(i) : r.setEnd(i, l), r
                }, f = (r, c) => {
                    if (!r) return null;
                    if (r.collapsed) {
                        if (!u(r)) {
                            const e = c ? 1 : -1, t = Rc(e, o, r), s = t.getNode(!c);
                            if (C(s)) {
                                if (rc(s)) return d(e, s, !!c && !t.isAtEnd(), !1);
                                if (Ar(s) && Yo(s.nextSibling)) {
                                    const e = n.createRng();
                                    return e.setStart(s, 0), e.setEnd(s, 0), e
                                }
                            }
                            const a = t.getNode(c);
                            if (C(a)) {
                                if (rc(a)) return d(e, a, !c && !t.isAtEnd(), !1);
                                if (Ar(a) && Yo(a.previousSibling)) {
                                    const e = n.createRng();
                                    return e.setStart(a, 1), e.setEnd(a, 1), e
                                }
                            }
                        }
                        return null
                    }
                    let m = r.startContainer, f = r.startOffset;
                    const g = r.endOffset;
                    if (zo(m) && 0 === f && VN(m.parentNode) && (m = m.parentNode, f = n.nodeIndex(m), m = m.parentNode), !To(m)) return null;
                    if (g === f + 1 && m === r.endContainer) {
                        const o = m.childNodes[f];
                        if (l(o)) return (o => {
                            const r = o.cloneNode(!0), l = e.dispatch("ObjectSelected", {target: o, targetClone: r});
                            if (l.isDefaultPrevented()) return null;
                            const d = ((o, r) => {
                                const a = mn(e.getBody()), i = e.getDoc(), l = _o(a, "#" + s).getOrThunk((() => {
                                    const e = dn('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>', i);
                                    return Vt(e, "id", s), eo(a, e), e
                                })), d = n.createRng();
                                no(l), to(l, [un(tr, i), mn(r), un(tr, i)]), d.setStart(l.dom.firstChild, 1), d.setEnd(l.dom.lastChild, 0), qn(l, {top: n.getPos(o, e.getBody()).y + "px"}), Df(l);
                                const c = t.getSel();
                                return c && (c.removeAllRanges(), c.addRange(d)), d
                            })(o, l.targetClone), c = mn(o);
                            return V(or(mn(e.getBody()), "*[data-mce-selected]"), (e => {
                                bn(c, e) || Yt(e, a)
                            })), n.getAttrib(o, a) || o.setAttribute(a, "1"), i = o, p(), d
                        })(o)
                    }
                    return null
                }, g = () => {
                    i && i.removeAttribute(a), _o(mn(e.getBody()), "#" + s).each(oo), i = null
                }, p = () => {
                    r.hide()
                };
            return Jy(e) || (e.on("click", (t => {
                const n = qN(e, t.target);
                n && VN(n) && (t.preventDefault(), e.focus())
            })), e.on("blur NewBlock", g), e.on("ResizeWindow FullscreenStateChanged", r.reposition), e.on("tap", (t => {
                const n = t.target, o = qN(e, n);
                VN(o) ? (t.preventDefault(), ww(e, o).each(f)) : l(n) && ww(e, n).each(f)
            }), !0), e.on("mousedown", (r => {
                const s = r.target;
                if (s !== o && "HTML" !== s.nodeName && !n.isChildOf(s, o)) return;
                if (!((e, t, n) => {
                    const o = mn(e.getBody()), r = e.inline ? o : mn(Cn(o).dom.documentElement), s = ((e, t, n, o) => {
                        const r = (e => e.dom.getBoundingClientRect())(t);
                        return {
                            x: n - (e ? r.left + t.dom.clientLeft + SC(t) : 0),
                            y: o - (e ? r.top + t.dom.clientTop + kC(t) : 0)
                        }
                    })(e.inline, r, t, n);
                    return ((e, t, n) => {
                        const o = wC(e), r = xC(e);
                        return t >= 0 && n >= 0 && t <= o && n <= r
                    })(r, s.x, s.y)
                })(e, r.clientX, r.clientY)) return;
                g(), p();
                const a = qN(e, s);
                VN(a) ? (r.preventDefault(), ww(e, a).each(f)) : ON(o, r.clientX, r.clientY).each((n => {
                    var o;
                    r.preventDefault(), (o = d(1, n.node, n.position === SN.Before, !1)) && t.setRng(o), To(a) ? a.focus() : e.getBody().focus()
                }))
            })), e.on("keypress", (e => {
                Dm.modifierPressed(e) || VN(t.getNode()) && e.preventDefault()
            })), e.on("GetSelectionRange", (e => {
                let t = e.range;
                if (i) {
                    if (!i.parentNode) return void (i = null);
                    t = t.cloneRange(), t.selectNode(i), e.range = t
                }
            })), e.on("SetSelectionRange", (e => {
                e.range = m(e.range);
                const t = f(e.range, e.forward);
                t && (e.range = t)
            })), e.on("AfterSetSelectionRange", (e => {
                const t = e.range, o = t.startContainer.parentElement;
                var r;
                u(t) || To(r = o) && "mcepastebin" === r.id || p(), (e => C(e) && n.hasClass(e, "mce-offscreen-selection"))(o) || g()
            })), (e => {
                $N(e), fd(e) && (e => {
                    const t = t => {
                        if (!t.isDefaultPrevented()) {
                            const n = t.dataTransfer;
                            n && (j(n.types, "Files") || n.files.length > 0) && (t.preventDefault(), "drop" === t.type && OC(e, "Dropped file type is not supported"))
                        }
                    }, n = n => {
                        Gf(e, n.target) && t(n)
                    }, o = () => {
                        const o = ba.DOM, r = e.dom, s = document, a = e.inline ? e.getBody() : e.getDoc(),
                            i = ["drop", "dragover"];
                        V(i, (e => {
                            o.bind(s, e, n), r.bind(a, e, t)
                        })), e.on("remove", (() => {
                            V(i, (e => {
                                o.unbind(s, e, n), r.unbind(a, e, t)
                            }))
                        }))
                    };
                    e.on("init", (() => {
                        qf.setEditorTimeout(e, o, 0)
                    }))
                })(e)
            })(e), (e => {
                const t = Ra((() => {
                    if (!e.removed && e.getBody().contains(document.activeElement)) {
                        const t = e.selection.getRng();
                        if (t.collapsed) {
                            const n = xw(e, t, !1);
                            e.selection.setRng(n)
                        }
                    }
                }), 0);
                e.on("focus", (() => {
                    t.throttle()
                })), e.on("blur", (() => {
                    t.cancel()
                }))
            })(e), (e => {
                e.on("init", (() => {
                    e.on("focusin", (t => {
                        const n = t.target;
                        if (Jo(n)) {
                            const t = bh(e.getBody(), n), o = Yo(t) ? t : n;
                            e.selection.getNode() !== o && ww(e, o).each((t => e.selection.setRng(t)))
                        }
                    }))
                }))
            })(e)), {
                showCaret: d, showBlockCaretContainer: e => {
                    e.hasAttribute("data-mce-caret") && (Mr(e), t.scrollIntoView(e))
                }, hideFakeCaret: p, destroy: () => {
                    r.destroy(), i = null
                }
            }
        }, KN = (e, t) => {
            let n = t;
            for (let t = e.previousSibling; zo(t); t = t.previousSibling) n += t.data.length;
            return n
        }, GN = (e, t, n, o, r) => {
            if (zo(n) && (o < 0 || o > n.data.length)) return [];
            const s = r && zo(n) ? [KN(n, o)] : [o];
            let a = n;
            for (; a !== t && a.parentNode;) s.push(e.nodeIndex(a, r)), a = a.parentNode;
            return a === t ? s.reverse() : []
        }, YN = (e, t, n, o, r, s, a = !1) => ({start: GN(e, t, n, o, a), end: GN(e, t, r, s, a)}), XN = (e, t) => {
            const n = t.slice(), o = n.pop();
            return x(o) ? Y(n, ((e, t) => e.bind((e => M.from(e.childNodes[t])))), M.some(e)).bind((e => zo(e) && (o < 0 || o > e.data.length) ? M.none() : M.some({
                node: e,
                offset: o
            }))) : M.none()
        }, QN = (e, t) => XN(e, t.start).bind((({node: n, offset: o}) => XN(e, t.end).map((({node: e, offset: t}) => {
            const r = document.createRange();
            return r.setStart(n, o), r.setEnd(e, t), r
        })))), JN = (e, t, n) => {
            if (t && e.isEmpty(t) && !n(t)) {
                const o = t.parentNode;
                e.remove(t), JN(e, o, n)
            }
        }, ZN = (e, t, n, o = !0) => {
            const r = t.startContainer.parentNode, s = t.endContainer.parentNode;
            t.deleteContents(), o && !n(t.startContainer) && (zo(t.startContainer) && 0 === t.startContainer.data.length && e.remove(t.startContainer), zo(t.endContainer) && 0 === t.endContainer.data.length && e.remove(t.endContainer), JN(e, r, n), r !== s && JN(e, s, n))
        }, eR = (e, t) => M.from(e.dom.getParent(t.startContainer, e.dom.isBlock)), tR = (e, t, n) => {
            const o = e.dynamicPatternsLookup({text: n, block: t});
            return {...e, blockPatterns: Qi(o).concat(e.blockPatterns), inlinePatterns: Ji(o).concat(e.inlinePatterns)}
        }, nR = (e, t, n, o) => {
            const r = e.createRng();
            return r.setStart(t, 0), r.setEnd(n, o), r.toString()
        }, oR = (e, t, n) => {
            ((e, t, n) => {
                if (zo(e) && 0 >= e.length) return M.some(hS(e, 0));
                {
                    const t = Ka(bS);
                    return M.from(t.forwards(e, 0, vS(e), n)).map((e => hS(e.container, 0)))
                }
            })(t, 0, t).each((o => {
                const r = o.container;
                wS(r, n.start.length, t).each((n => {
                    const o = e.createRng();
                    o.setStart(r, 0), o.setEnd(n.container, n.offset), ZN(e, o, (e => e === t))
                }))
            }))
        }, rR = (e, t) => e.create("span", {"data-mce-type": "bookmark", id: t}), sR = (e, t) => {
            const n = e.createRng();
            return n.setStartAfter(t.start), n.setEndBefore(t.end), n
        }, aR = (e, t, n) => {
            const o = QN(e.getRoot(), n).getOrDie("Unable to resolve path range"), r = o.startContainer, s = o.endContainer,
                a = 0 === o.endOffset ? s : s.splitText(o.endOffset),
                i = 0 === o.startOffset ? r : r.splitText(o.startOffset), l = i.parentNode;
            return {
                prefix: t,
                end: a.parentNode.insertBefore(rR(e, t + "-end"), a),
                start: l.insertBefore(rR(e, t + "-start"), i)
            }
        }, iR = (e, t, n) => {
            JN(e, e.get(t.prefix + "-end"), n), JN(e, e.get(t.prefix + "-start"), n)
        }, lR = e => 0 === e.start.length, dR = (e, t, n, o) => {
            const r = t.start;
            var s;
            return xS(e, o.container, o.offset, (s = r, (e, t) => {
                const n = e.data.substring(0, t), o = n.lastIndexOf(s.charAt(s.length - 1)), r = n.lastIndexOf(s);
                return -1 !== r ? r + s.length : -1 !== o ? o + 1 : -1
            }), n).bind((o => {
                var s, a;
                const i = null !== (a = null === (s = n.textContent) || void 0 === s ? void 0 : s.indexOf(r)) && void 0 !== a ? a : -1;
                if (-1 !== i && o.offset >= i + r.length) {
                    const t = e.createRng();
                    return t.setStart(o.container, o.offset - r.length), t.setEnd(o.container, o.offset), M.some(t)
                }
                {
                    const s = o.offset - r.length;
                    return CS(o.container, s, n).map((t => {
                        const n = e.createRng();
                        return n.setStart(t.container, t.offset), n.setEnd(o.container, o.offset), n
                    })).filter((e => e.toString() === r)).orThunk((() => dR(e, t, n, hS(o.container, 0))))
                }
            }))
        }, cR = (e, t, n, o) => {
            const r = e.dom, s = r.getRoot(), a = n.pattern, i = n.position.container, l = n.position.offset;
            return CS(i, l - n.pattern.end.length, t).bind((d => {
                const c = YN(r, s, d.container, d.offset, i, l, o);
                if (lR(a)) return M.some({matches: [{pattern: a, startRng: c, endRng: c}], position: d});
                {
                    const i = uR(e, n.remainingPatterns, d.container, d.offset, t, o),
                        l = i.getOr({matches: [], position: d}), u = l.position, m = ((e, t, n, o, r, s = !1) => {
                            if (0 === t.start.length && !s) {
                                const t = e.createRng();
                                return t.setStart(n, o), t.setEnd(n, o), M.some(t)
                            }
                            return yS(n, o, r).bind((n => dR(e, t, r, n).bind((e => {
                                var t;
                                if (s) {
                                    if (e.endContainer === n.container && e.endOffset === n.offset) return M.none();
                                    if (0 === n.offset && (null === (t = e.endContainer.textContent) || void 0 === t ? void 0 : t.length) === e.endOffset) return M.none()
                                }
                                return M.some(e)
                            }))))
                        })(r, a, u.container, u.offset, t, i.isNone());
                    return m.map((e => {
                        const t = ((e, t, n, o = !1) => YN(e, t, n.startContainer, n.startOffset, n.endContainer, n.endOffset, o))(r, s, e, o);
                        return {
                            matches: l.matches.concat([{pattern: a, startRng: t, endRng: c}]),
                            position: hS(e.startContainer, e.startOffset)
                        }
                    }))
                }
            }))
        }, uR = (e, t, n, o, r, s) => {
            const a = e.dom;
            return yS(n, o, a.getRoot()).bind((i => {
                const l = nR(a, r, n, o);
                for (let a = 0; a < t.length; a++) {
                    const d = t[a];
                    if (!je(l, d.end)) continue;
                    const c = t.slice();
                    c.splice(a, 1);
                    const u = cR(e, r, {pattern: d, remainingPatterns: c, position: i}, s);
                    if (u.isNone() && o > 0) return uR(e, t, n, o - 1, r, s);
                    if (u.isSome()) return u
                }
                return M.none()
            }))
        }, mR = (e, t, n) => {
            e.selection.setRng(n), "inline-format" === t.type ? V(t.format, (t => {
                e.formatter.apply(t)
            })) : e.execCommand(t.cmd, !1, t.value)
        }, fR = (e, t, n, o, r, s) => {
            var a;
            return ((e, t) => {
                const n = te(e, (e => H(t, (t => e.pattern.start === t.pattern.start && e.pattern.end === t.pattern.end))));
                return e.length === t.length ? n ? e : t : e.length > t.length ? e : t
            })(uR(e, r.inlinePatterns, n, o, t, s).fold((() => []), (e => e.matches)), uR(e, (a = r.inlinePatterns, se(a, ((e, t) => t.end.length - e.end.length))), n, o, t, s).fold((() => []), (e => e.matches)))
        }, gR = (e, t) => {
            if (0 === t.length) return;
            const n = e.dom, o = e.selection.getBookmark(), r = ((e, t) => {
                const n = Ha("mce_textpattern"), o = G(t, ((t, o) => {
                    const r = aR(e, n + `_end${t.length}`, o.endRng);
                    return t.concat([{...o, endMarker: r}])
                }), []);
                return G(o, ((t, r) => {
                    const s = o.length - t.length - 1,
                        a = lR(r.pattern) ? r.endMarker : aR(e, n + `_start${s}`, r.startRng);
                    return t.concat([{...r, startMarker: a}])
                }), [])
            })(n, t);
            V(r, (t => {
                const o = n.getParent(t.startMarker.start, n.isBlock), r = e => e === o;
                lR(t.pattern) ? ((e, t, n, o) => {
                    const r = sR(e.dom, n);
                    ZN(e.dom, r, o), mR(e, t, r)
                })(e, t.pattern, t.endMarker, r) : ((e, t, n, o, r) => {
                    const s = e.dom, a = sR(s, o), i = sR(s, n);
                    ZN(s, i, r), ZN(s, a, r);
                    const l = {prefix: n.prefix, start: n.end, end: o.start}, d = sR(s, l);
                    mR(e, t, d)
                })(e, t.pattern, t.startMarker, t.endMarker, r), iR(n, t.endMarker, r), iR(n, t.startMarker, r)
            })), e.selection.moveToBookmark(o)
        }, pR = (e, t) => {
            const n = e.selection.getRng();
            return eR(e, n).map((o => {
                var r;
                const s = Math.max(0, n.startOffset), a = tR(t, o, null !== (r = o.textContent) && void 0 !== r ? r : ""),
                    i = fR(e, o, n.startContainer, s, a, !0), l = ((e, t, n, o) => {
                        var r;
                        const s = e.dom, a = gl(e);
                        if (!s.is(t, a)) return [];
                        const i = null !== (r = t.textContent) && void 0 !== r ? r : "";
                        return ((e, t) => {
                            const n = (e => se(e, ((e, t) => t.start.length - e.start.length)))(e), o = t.replace(tr, " ");
                            return Q(n, (e => 0 === t.indexOf(e.start) || 0 === o.indexOf(e.start)))
                        })(n.blockPatterns, i).map((e => Tt.trim(i).length === e.start.length ? [] : [{
                            pattern: e,
                            range: YN(s, s.getRoot(), t, 0, t, 0, true)
                        }])).getOr([])
                    })(e, o, a);
                return (l.length > 0 || i.length > 0) && (e.undoManager.add(), e.undoManager.extra((() => {
                    e.execCommand("mceInsertNewLine")
                }), (() => {
                    e.insertContent(er), gR(e, i), ((e, t) => {
                        if (0 === t.length) return;
                        const n = e.selection.getBookmark();
                        V(t, (t => ((e, t) => {
                            const n = e.dom, o = t.pattern,
                                r = QN(n.getRoot(), t.range).getOrDie("Unable to resolve path range");
                            return eR(e, r).each((t => {
                                "block-format" === o.type ? ((e, t) => {
                                    const n = t.get(e);
                                    return p(n) && ie(n).exists((e => xe(e, "block")))
                                })(o.format, e.formatter) && e.undoManager.transact((() => {
                                    oR(e.dom, t, o), e.formatter.apply(o.format)
                                })) : "block-command" === o.type && e.undoManager.transact((() => {
                                    oR(e.dom, t, o), e.execCommand(o.cmd, !1, o.value)
                                }))
                            })), !0
                        })(e, t))), e.selection.moveToBookmark(n)
                    })(e, l);
                    const t = e.selection.getRng(), n = yS(t.startContainer, t.startOffset, e.dom.getRoot());
                    e.execCommand("mceInsertNewLine"), n.each((t => {
                        const n = t.container;
                        n.data.charAt(t.offset - 1) === er && (n.deleteData(t.offset - 1, 1), JN(e.dom, n.parentNode, (t => t === e.dom.getRoot())))
                    }))
                })), !0)
            })).getOr(!1)
        }, hR = (e, t, n) => {
            for (let o = 0; o < e.length; o++) if (n(e[o], t)) return !0;
            return !1
        }, bR = e => {
            const t = Tt.each, n = Dm.BACKSPACE, o = Dm.DELETE, r = e.dom, s = e.selection, a = e.parser, i = Nt.browser,
                l = i.isFirefox(), d = i.isChromium() || i.isSafari(),
                c = Nt.deviceType.isiPhone() || Nt.deviceType.isiPad(), u = Nt.os.isMacOS() || Nt.os.isiOS(),
                m = (t, n) => {
                    try {
                        e.getDoc().execCommand(t, !1, String(n))
                    } catch (e) {
                    }
                }, f = e => e.isDefaultPrevented(), g = () => {
                    e.shortcuts.add("meta+a", null, "SelectAll")
                }, p = () => {
                    e.inline || r.bind(e.getDoc(), "mousedown mouseup", (t => {
                        let n;
                        if (t.target === e.getDoc().documentElement) if (n = s.getRng(), e.getBody().focus(), "mousedown" === t.type) {
                            if (Or(n.startContainer)) return;
                            s.placeCaretAt(t.clientX, t.clientY)
                        } else s.setRng(n)
                    }))
                }, h = () => {
                    Range.prototype.getClientRects || e.on("mousedown", (t => {
                        if (!f(t) && "HTML" === t.target.nodeName) {
                            const t = e.getBody();
                            t.blur(), qf.setEditorTimeout(e, (() => {
                                t.focus()
                            }))
                        }
                    }))
                }, b = () => {
                    const t = hd(e);
                    e.on("click", (n => {
                        const o = n.target;
                        /^(IMG|HR)$/.test(o.nodeName) && "false" !== r.getContentEditableParent(o) && (n.preventDefault(), e.selection.select(o), e.nodeChanged()), "A" === o.nodeName && r.hasClass(o, t) && 0 === o.childNodes.length && (n.preventDefault(), s.select(o))
                    }))
                }, v = () => {
                    e.on("keydown", (e => {
                        if (!f(e) && e.keyCode === n && s.isCollapsed() && 0 === s.getRng().startOffset) {
                            const t = s.getNode().previousSibling;
                            if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                        }
                        return !0
                    }))
                }, y = () => {
                    dd(e) || e.on("BeforeExecCommand mousedown", (() => {
                        m("StyleWithCSS", !1), m("enableInlineTableEditing", !1), jl(e) || m("enableObjectResizing", !1)
                    }))
                }, C = () => {
                    e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
                }, w = () => {
                    e.inline || e.on("keydown", (() => {
                        document.activeElement === document.body && e.getWin().focus()
                    }))
                }, x = () => {
                    e.inline || (e.contentStyles.push("body {min-height: 150px}"), e.on("click", (t => {
                        let n;
                        "HTML" === t.target.nodeName && (n = e.selection.getRng(), e.getBody().focus(), e.selection.setRng(n), e.selection.normalize(), e.nodeChanged())
                    })))
                }, k = () => {
                    u && e.on("keydown", (t => {
                        !Dm.metaKeyPressed(t) || t.shiftKey || 37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(), e.selection.getSel().modify("move", 37 === t.keyCode ? "backward" : "forward", "lineboundary"))
                    }))
                }, _ = () => {
                    e.on("click", (e => {
                        let t = e.target;
                        do {
                            if ("A" === t.tagName) return void e.preventDefault()
                        } while (t = t.parentNode)
                    })), e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
                }, E = () => {
                    e.on("init", (() => {
                        e.dom.bind(e.getBody(), "submit", (e => {
                            e.preventDefault()
                        }))
                    }))
                }, N = S;
            return Jy(e) ? (d && (p(), b(), E(), g(), c && (w(), x(), _())), l && (h(), y(), C(), k())) : (e.on("keydown", (t => {
                if (f(t) || t.keyCode !== Dm.BACKSPACE) return;
                let n = s.getRng();
                const o = n.startContainer, a = n.startOffset, i = r.getRoot();
                let l = o;
                if (n.collapsed && 0 === a) {
                    for (; l.parentNode && l.parentNode.firstChild === l && l.parentNode !== i;) l = l.parentNode;
                    "BLOCKQUOTE" === l.nodeName && (e.formatter.toggle("blockquote", void 0, l), n = r.createRng(), n.setStart(o, 0), n.setEnd(o, 0), s.setRng(n))
                }
            })), (() => {
                const t = e => {
                    const t = r.create("body"), n = e.cloneContents();
                    return t.appendChild(n), s.serializer.serialize(t, {format: "html"})
                };
                e.on("keydown", (s => {
                    const a = s.keyCode;
                    if (!f(s) && (a === o || a === n)) {
                        const n = e.selection.isCollapsed(), o = e.getBody();
                        if (n && !r.isEmpty(o)) return;
                        if (!n && !(n => {
                            const o = t(n), s = r.createRng();
                            return s.selectNode(e.getBody()), o === t(s)
                        })(e.selection.getRng())) return;
                        s.preventDefault(), e.setContent(""), o.firstChild && r.isBlock(o.firstChild) ? e.selection.setCursorLocation(o.firstChild, 0) : e.selection.setCursorLocation(o, 0), e.nodeChanged()
                    }
                }))
            })(), Nt.windowsPhone || e.on("keyup focusin mouseup", (t => {
                Dm.modifierPressed(t) || (e => {
                    const t = e.getBody(), n = e.selection.getRng();
                    return n.startContainer === n.endContainer && n.startContainer === t && 0 === n.startOffset && n.endOffset === t.childNodes.length
                })(e) || s.normalize()
            }), !0), d && (p(), b(), e.on("init", (() => {
                m("DefaultParagraphSeparator", gl(e))
            })), E(), v(), a.addNodeFilter("br", (e => {
                let t = e.length;
                for (; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove()
            })), c ? (w(), x(), _()) : g()), l && (e.on("keydown", (t => {
                if (!f(t) && t.keyCode === n) {
                    if (!e.getBody().getElementsByTagName("hr").length) return;
                    if (s.isCollapsed() && 0 === s.getRng().startOffset) {
                        const e = s.getNode(), n = e.previousSibling;
                        if ("HR" === e.nodeName) return r.remove(e), void t.preventDefault();
                        n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (r.remove(n), t.preventDefault())
                    }
                }
            })), h(), (() => {
                const n = () => {
                        const n = r.getAttribs(s.getStart().cloneNode(!1));
                        return () => {
                            const o = s.getStart();
                            o !== e.getBody() && (r.setAttrib(o, "style", null), t(n, (e => {
                                o.setAttributeNode(e.cloneNode(!0))
                            })))
                        }
                    },
                    o = () => !s.isCollapsed() && r.getParent(s.getStart(), r.isBlock) !== r.getParent(s.getEnd(), r.isBlock);
                e.on("keypress", (t => {
                    let r;
                    return !(!(f(t) || 8 !== t.keyCode && 46 !== t.keyCode) && o() && (r = n(), e.getDoc().execCommand("delete", !1), r(), t.preventDefault(), 1))
                })), r.bind(e.getDoc(), "cut", (t => {
                    if (!f(t) && o()) {
                        const t = n();
                        qf.setEditorTimeout(e, (() => {
                            t()
                        }))
                    }
                }))
            })(), y(), e.on("SetContent ExecCommand", (e => {
                "setcontent" !== e.type && "mceInsertLink" !== e.command || t(r.select("a:not([data-mce-block])"), (e => {
                    var t;
                    let n = e.parentNode;
                    const o = r.getRoot();
                    if ((null == n ? void 0 : n.lastChild) === e) {
                        for (; n && !r.isBlock(n);) {
                            if ((null === (t = n.parentNode) || void 0 === t ? void 0 : t.lastChild) !== n || n === o) return;
                            n = n.parentNode
                        }
                        r.add(n, "br", {"data-mce-bogus": 1})
                    }
                }))
            })), C(), k(), v())), {
                refreshContentEditable: N, isHidden: () => {
                    if (!l || e.removed) return !1;
                    const t = e.selection.getSel();
                    return !t || !t.rangeCount || 0 === t.rangeCount
                }
            }
        }, vR = ba.DOM, yR = e => e.inline ? e.getElement().nodeName.toLowerCase() : void 0,
        CR = e => ve(e, (e => !1 === v(e))), wR = e => {
            const t = e.options.get, n = e.editorUpload.blobCache;
            return CR({
                allow_conditional_comments: t("allow_conditional_comments"),
                allow_html_data_urls: t("allow_html_data_urls"),
                allow_svg_data_urls: t("allow_svg_data_urls"),
                allow_html_in_named_anchor: t("allow_html_in_named_anchor"),
                allow_script_urls: t("allow_script_urls"),
                allow_unsafe_link_target: t("allow_unsafe_link_target"),
                convert_fonts_to_spans: t("convert_fonts_to_spans"),
                fix_list_elements: t("fix_list_elements"),
                font_size_legacy_values: t("font_size_legacy_values"),
                forced_root_block: t("forced_root_block"),
                forced_root_block_attrs: t("forced_root_block_attrs"),
                preserve_cdata: t("preserve_cdata"),
                remove_trailing_brs: t("remove_trailing_brs"),
                inline_styles: t("inline_styles"),
                root_name: yR(e),
                validate: !0,
                blob_cache: n,
                document: e.getDoc()
            })
        }, xR = e => {
            const t = e.options.get;
            return CR({
                custom_elements: t("custom_elements"),
                extended_valid_elements: t("extended_valid_elements"),
                invalid_elements: t("invalid_elements"),
                invalid_styles: t("invalid_styles"),
                schema: t("schema"),
                valid_children: t("valid_children"),
                valid_classes: t("valid_classes"),
                valid_elements: t("valid_elements"),
                valid_styles: t("valid_styles"),
                verify_html: t("verify_html"),
                padd_empty_block_inline_children: t("format_empty_lines")
            })
        }, kR = e => e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader, SR = e => {
            const t = kR(e), n = Fl(e), o = e.contentCSS, r = () => {
                t.unloadAll(o), e.inline || e.ui.styleSheetLoader.unloadAll(n)
            }, s = () => {
                e.removed ? r() : e.on("remove", r)
            };
            if (e.contentStyles.length > 0) {
                let t = "";
                Tt.each(e.contentStyles, (e => {
                    t += e + "\r\n"
                })), e.dom.addStyle(t)
            }
            const a = Promise.all(((e, t, n) => {
                const o = [kR(e).loadAll(t)];
                return e.inline ? o : o.concat([e.ui.styleSheetLoader.loadAll(n)])
            })(e, o, n)).then(s).catch(s), i = Il(e);
            return i && ((e, t) => {
                const n = mn(e.getBody()), o = Fn(In(n)), r = cn("style");
                Vt(r, "type", "text/css"), eo(r, un(t)), eo(o, r), e.on("remove", (() => {
                    oo(r)
                }))
            })(e, i), a
        }, _R = e => {
            !0 !== e.removed && ((e => {
                Jy(e) || e.load({initial: !0, format: "html"}), e.startContent = e.getContent({format: "raw"})
            })(e), (e => {
                e.bindPendingEventDelegates(), e.initialized = !0, (e => {
                    e.dispatch("Init")
                })(e), e.focus(!0), (e => {
                    const t = e.dom.getRoot();
                    e.inline || Pu(e) && e.selection.getStart(!0) !== t || Zc(t).each((t => {
                        const n = t.getNode(), o = Io(n) ? Zc(n).getOr(t) : t;
                        e.selection.setRng(o.toRange())
                    }))
                })(e), e.nodeChanged({initial: !0});
                const t = yd(e);
                w(t) && t.call(e, e), (e => {
                    const t = wd(e);
                    t && qf.setEditorTimeout(e, (() => {
                        let n;
                        n = !0 === t ? e : e.editorManager.get(t), n && !n.destroyed && (n.focus(), n.selection.scrollIntoView())
                    }), 100)
                })(e)
            })(e))
        }, ER = e => {
            const t = e.getElement();
            let n = e.getDoc();
            e.inline && (vR.addClass(t, "mce-content-body"), e.contentDocument = n = document, e.contentWindow = window, e.bodyElement = t, e.contentAreaContainer = t);
            const o = e.getBody();
            o.disabled = !0, e.readonly = dd(e), e.readonly || (e.inline && "static" === vR.getStyle(o, "position", !0) && (o.style.position = "relative"), o.contentEditable = "true"), o.disabled = !1, e.editorUpload = HC(e), e.schema = Qs(xR(e)), e.dom = ba(n, {
                keep_values: !0,
                url_converter: e.convertURL,
                url_converter_scope: e,
                update_styles: !0,
                root_element: e.inline ? e.getBody() : null,
                collect: e.inline,
                schema: e.schema,
                contentCssCors: Ol(e),
                referrerPolicy: Tl(e),
                onSetAttrib: t => {
                    e.dispatch("SetAttrib", t)
                }
            }), e.parser = (e => {
                const t = yy(wR(e), e.schema);
                return t.addAttributeFilter("src,href,style,tabindex", ((t, n) => {
                    const o = e.dom, r = "data-mce-" + n;
                    let s = t.length;
                    for (; s--;) {
                        const a = t[s];
                        let i = a.attr(n);
                        if (i && !a.attr(r)) {
                            if (0 === i.indexOf("data:") || 0 === i.indexOf("blob:")) continue;
                            "style" === n ? (i = o.serializeStyle(o.parseStyle(i), a.name), i.length || (i = null), a.attr(r, i), a.attr(n, i)) : "tabindex" === n ? (a.attr(r, i), a.attr(n, null)) : a.attr(r, e.convertURL(i, n, a.name))
                        }
                    }
                })), t.addNodeFilter("script", (e => {
                    let t = e.length;
                    for (; t--;) {
                        const n = e[t], o = n.attr("type") || "no/type";
                        0 !== o.indexOf("mce-") && n.attr("type", "mce-" + o)
                    }
                })), zd(e) && t.addNodeFilter("#cdata", (t => {
                    var n;
                    let o = t.length;
                    for (; o--;) {
                        const r = t[o];
                        r.type = 8, r.name = "#comment", r.value = "[CDATA[" + e.dom.encode(null !== (n = r.value) && void 0 !== n ? n : "") + "]]"
                    }
                })), t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", (t => {
                    let n = t.length;
                    const o = e.schema.getNonEmptyElements();
                    for (; n--;) {
                        const e = t[n];
                        e.isEmpty(o) && 0 === e.getAll("br").length && e.append(new pg("br", 1))
                    }
                })), t
            })(e), e.serializer = dC((e => {
                const t = e.options.get;
                return {
                    ...wR(e), ...xR(e), ...CR({
                        url_converter: t("url_converter"),
                        url_converter_scope: t("url_converter_scope"),
                        element_format: t("element_format"),
                        entities: t("entities"),
                        entity_encoding: t("entity_encoding"),
                        indent: t("indent"),
                        indent_after: t("indent_after"),
                        indent_before: t("indent_before")
                    })
                }
            })(e), e), e.selection = aC(e.dom, e.getWin(), e.serializer, e), e.annotator = Sm(e), e.formatter = ZC(e), e.undoManager = tw(e), e._nodeChangeDispatcher = new LE(e), e._selectionOverrides = WN(e), (e => {
                const t = Na(), n = Ca(!1), o = Aa((t => {
                    e.dispatch("longpress", {...t, type: "longpress"}), n.set(!0)
                }), 400);
                e.on("touchstart", (e => {
                    vk(e).each((r => {
                        o.cancel();
                        const s = {x: r.clientX, y: r.clientY, target: e.target};
                        o.throttle(e), n.set(!1), t.set(s)
                    }))
                }), !0), e.on("touchmove", (r => {
                    o.cancel(), vk(r).each((o => {
                        t.on((r => {
                            ((e, t) => {
                                const n = Math.abs(e.clientX - t.x), o = Math.abs(e.clientY - t.y);
                                return n > 5 || o > 5
                            })(o, r) && (t.clear(), n.set(!1), e.dispatch("longpresscancel"))
                        }))
                    }))
                }), !0), e.on("touchend touchcancel", (r => {
                    o.cancel(), "touchcancel" !== r.type && t.get().filter((e => e.target.isEqualNode(r.target))).each((() => {
                        n.get() ? r.preventDefault() : e.dispatch("tap", {...r, type: "tap"})
                    }))
                }), !0)
            })(e), (e => {
                (e => {
                    e.on("click", (t => {
                        e.dom.getParent(t.target, "details") && t.preventDefault()
                    }))
                })(e), (e => {
                    e.parser.addNodeFilter("details", (e => {
                        V(e, (e => {
                            e.attr("data-mce-open", e.attr("open")), e.attr("open", "open")
                        }))
                    })), e.serializer.addNodeFilter("details", (e => {
                        V(e, (e => {
                            const t = e.attr("data-mce-open");
                            e.attr("open", m(t) ? t : null), e.attr("data-mce-open", null)
                        }))
                    }))
                })(e)
            })(e), (e => {
                const t = "contenteditable", n = " " + Tt.trim(Fd(e)) + " ", o = " " + Tt.trim(Id(e)) + " ", r = _k(n),
                    s = _k(o), a = Ud(e);
                a.length > 0 && e.on("BeforeSetContent", (t => {
                    ((e, t, n) => {
                        let o = t.length, r = n.content;
                        if ("raw" !== n.format) {
                            for (; o--;) r = r.replace(t[o], Ek(e, r, Id(e)));
                            n.content = r
                        }
                    })(e, a, t)
                })), e.parser.addAttributeFilter("class", (e => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        r(o) ? o.attr(t, "true") : s(o) && o.attr(t, "false")
                    }
                })), e.serializer.addAttributeFilter(t, (e => {
                    let n = e.length;
                    for (; n--;) {
                        const o = e[n];
                        (r(o) || s(o)) && (a.length > 0 && o.attr("data-mce-content") ? (o.name = "#text", o.type = 3, o.raw = !0, o.value = o.attr("data-mce-content")) : o.attr(t, null))
                    }
                }))
            })(e), Jy(e) || ((e => {
                e.on("mousedown", (t => {
                    t.detail >= 3 && (t.preventDefault(), kN(e))
                }))
            })(e), (e => {
                (e => {
                    const t = [",", ".", ";", ":", "!", "?"], n = [32], o = () => {
                        return t = Ld(e), n = Md(e), {
                            inlinePatterns: Ji(t),
                            blockPatterns: Qi(t),
                            dynamicPatternsLookup: n
                        };
                        var t, n
                    }, r = () => (e => e.options.isSet("text_patterns_lookup"))(e);
                    e.on("keydown", (t => {
                        if (13 === t.keyCode && !Dm.modifierPressed(t) && e.selection.isCollapsed()) {
                            const n = o();
                            (n.inlinePatterns.length > 0 || n.blockPatterns.length > 0 || r()) && pR(e, n) && t.preventDefault()
                        }
                    }), !0);
                    const s = () => {
                        if (e.selection.isCollapsed()) {
                            const t = o();
                            (t.inlinePatterns.length > 0 || r()) && ((e, t) => {
                                const n = e.selection.getRng();
                                eR(e, n).map((o => {
                                    const r = Math.max(0, n.startOffset - 1), s = nR(e.dom, o, n.startContainer, r),
                                        a = tR(t, o, s), i = fR(e, o, n.startContainer, r, a, !1);
                                    i.length > 0 && e.undoManager.transact((() => {
                                        gR(e, i)
                                    }))
                                }))
                            })(e, t)
                        }
                    };
                    e.on("keyup", (e => {
                        hR(n, e, ((e, t) => e === t.keyCode && !Dm.modifierPressed(t))) && s()
                    })), e.on("keypress", (n => {
                        hR(t, n, ((e, t) => e.charCodeAt(0) === t.charCode)) && qf.setEditorTimeout(e, s)
                    }))
                })(e)
            })(e));
            const r = PE(e);
            bk(e, r), (e => {
                e.on("NodeChange", O(kk, e))
            })(e), (e => {
                var t;
                const n = e.dom, o = gl(e), r = null !== (t = $l(e)) && void 0 !== t ? t : "", s = (t, a) => {
                    if ((e => {
                        if (rw(e)) {
                            const t = e.keyCode;
                            return !sw(e) && (Dm.metaKeyPressed(e) || e.altKey || t >= 112 && t <= 123 || j(nw, t))
                        }
                        return !1
                    })(t)) return;
                    const i = e.getBody(),
                        l = !(e => rw(e) && !(sw(e) || "keyup" === e.type && 229 === e.keyCode))(t) && ((e, t, n) => {
                            if (os(mn(t), !1)) {
                                const o = t.firstElementChild;
                                return !o || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && n === o.nodeName.toLowerCase()
                            }
                            return !1
                        })(n, i, o);
                    ("" !== n.getAttrib(i, ow) !== l || a) && (n.setAttrib(i, ow, l ? r : null), n.setAttrib(i, "aria-placeholder", l ? r : null), ((e, t) => {
                        e.dispatch("PlaceholderToggle", {state: t})
                    })(e, l), e.on(l ? "keydown" : "keyup", s), e.off(l ? "keyup" : "keydown", s))
                };
                We(r) && e.on("init", (t => {
                    s(t, !0), e.on("change SetContent ExecCommand", s), e.on("paste", (t => qf.setEditorTimeout(e, (() => s(t)))))
                }))
            })(e), hN(e);
            const s = (e => {
                const t = e;
                return (e => we(e.plugins, "rtc").bind((e => M.from(e.setup))))(e).fold((() => (t.rtcInstance = Qy(e), M.none())), (e => (t.rtcInstance = (() => {
                    const e = N(null), t = N("");
                    return {
                        init: {bindEvents: S},
                        undoManager: {
                            beforeChange: S,
                            add: e,
                            undo: e,
                            redo: e,
                            clear: S,
                            reset: S,
                            hasUndo: P,
                            hasRedo: P,
                            transact: e,
                            ignore: S,
                            extra: S
                        },
                        formatter: {
                            match: P,
                            matchAll: N([]),
                            matchNode: N(void 0),
                            canApply: P,
                            closest: t,
                            apply: S,
                            remove: S,
                            toggle: S,
                            formatChanged: N({unbind: S})
                        },
                        editor: {getContent: t, setContent: N({content: "", html: ""}), insertContent: N(""), addVisual: S},
                        selection: {getContent: t},
                        autocompleter: {addDecoration: S, removeDecoration: S},
                        raw: {getModel: N(M.none())}
                    }
                })(), M.some((() => e().then((e => (t.rtcInstance = (e => {
                    const t = e => f(e) ? e : {}, {
                        init: n,
                        undoManager: o,
                        formatter: r,
                        editor: s,
                        selection: a,
                        autocompleter: i,
                        raw: l
                    } = e;
                    return {
                        init: {bindEvents: n.bindEvents},
                        undoManager: {
                            beforeChange: o.beforeChange,
                            add: o.add,
                            undo: o.undo,
                            redo: o.redo,
                            clear: o.clear,
                            reset: o.reset,
                            hasUndo: o.hasUndo,
                            hasRedo: o.hasRedo,
                            transact: (e, t, n) => o.transact(n),
                            ignore: (e, t) => o.ignore(t),
                            extra: (e, t, n, r) => o.extra(n, r)
                        },
                        formatter: {
                            match: (e, n, o, s) => r.match(e, t(n), s),
                            matchAll: r.matchAll,
                            matchNode: r.matchNode,
                            canApply: e => r.canApply(e),
                            closest: e => r.closest(e),
                            apply: (e, n, o) => r.apply(e, t(n)),
                            remove: (e, n, o, s) => r.remove(e, t(n)),
                            toggle: (e, n, o) => r.toggle(e, t(n)),
                            formatChanged: (e, t, n, o, s) => r.formatChanged(t, n, o, s)
                        },
                        editor: {
                            getContent: e => s.getContent(e),
                            setContent: (e, t) => ({content: s.setContent(e, t), html: ""}),
                            insertContent: (e, t) => (s.insertContent(e), ""),
                            addVisual: s.addVisual
                        },
                        selection: {getContent: (e, t) => a.getContent(t)},
                        autocompleter: {addDecoration: i.addDecoration, removeDecoration: i.removeDecoration},
                        raw: {getModel: () => M.some(l.getRawModel())}
                    }
                })(e), e.rtc.isRemote))))))))
            })(e);
            (e => {
                const t = e.getDoc(), n = e.getBody();
                (e => {
                    e.dispatch("PreInit")
                })(e), xd(e) || (t.body.spellcheck = !1, vR.setAttrib(n, "spellcheck", "false")), e.quirks = bR(e), (e => {
                    e.dispatch("PostRender")
                })(e);
                const o = Ul(e);
                void 0 !== o && (n.dir = o);
                const r = kd(e);
                r && e.on("BeforeSetContent", (e => {
                    Tt.each(r, (t => {
                        e.content = e.content.replace(t, (e => "\x3c!--mce:protected " + escape(e) + "--\x3e"))
                    }))
                })), e.on("SetContent", (() => {
                    e.addVisual(e.getBody())
                })), e.on("compositionstart compositionend", (t => {
                    e.composing = "compositionstart" === t.type
                }))
            })(e), s.fold((() => {
                SR(e).then((() => _R(e)))
            }), (t => {
                e.setProgressState(!0), SR(e).then((() => {
                    t().then((t => {
                        e.setProgressState(!1), _R(e), tC(e)
                    }), (t => {
                        e.notificationManager.open({type: "error", text: String(t)}), _R(e), tC(e)
                    }))
                }))
            }))
        }, NR = (e, t) => {
            if (e.inline || (e.getElement().style.visibility = e.orgVisibility), t || e.inline) ER(e); else {
                const t = e.iframeElement, o = (n = mn(t), lo(n, "load", LC, (() => {
                    o.unbind(), e.contentDocument = t.contentDocument, ER(e)
                })));
                if (Nt.browser.isFirefox()) {
                    const t = e.getDoc();
                    t.open(), t.write(e.iframeHTML), t.close()
                } else t.srcdoc = e.iframeHTML
            }
            var n
        }, RR = ba.DOM, AR = ba.DOM, OR = (e, t) => ({editorContainer: e, iframeContainer: t, api: {}}), TR = e => {
            const t = e.getElement();
            return e.inline ? OR(null) : (e => {
                const t = AR.create("div");
                return AR.insertAfter(t, e), OR(t, t)
            })(t)
        }, BR = e => {
            e.dispatch("ScriptsLoaded"), (e => {
                const t = Tt.trim(Sl(e)), n = e.ui.registry.getAll().icons,
                    o = {...bC.get("default").icons, ...bC.get(t).icons};
                fe(o, ((t, o) => {
                    xe(n, o) || e.ui.registry.addIcon(o, t)
                }))
            })(e), (e => {
                const t = Wl(e);
                if (m(t)) {
                    const n = NC.get(t);
                    e.theme = n(e, NC.urls[t]) || {}, w(e.theme.init) && e.theme.init(e, NC.urls[t] || e.documentBaseUrl.replace(/\/$/, ""))
                } else e.theme = {}
            })(e), (e => {
                const t = Gl(e), n = vC.get(t);
                e.model = n(e, vC.urls[t])
            })(e), (e => {
                const t = [];
                V(ud(e), (n => {
                    ((e, t, n) => {
                        const o = EC.get(n), r = EC.urls[n] || e.documentBaseUrl.replace(/\/$/, "");
                        if (n = Tt.trim(n), o && -1 === Tt.inArray(t, n)) {
                            if (e.plugins[n]) return;
                            try {
                                const s = o(e, r) || {};
                                e.plugins[n] = s, w(s.init) && (s.init(e, r), t.push(n))
                            } catch (t) {
                                ((e, t, n) => {
                                    const o = Sa.translate(["Failed to initialize plugin: {0}", t]);
                                    Nm(e, "PluginLoadError", {message: o}), DC(o, n), OC(e, o)
                                })(e, n, t)
                            }
                        }
                    })(e, t, (e => e.replace(/^\-/, ""))(n))
                }))
            })(e);
            const t = (e => {
                const t = e.getElement();
                return e.orgDisplay = t.style.display, m(Wl(e)) ? (e => {
                    const t = e.theme.renderUI;
                    return t ? t() : TR(e)
                })(e) : w(Wl(e)) ? (e => {
                    const t = e.getElement(), n = Wl(e)(e, t);
                    return n.editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || e.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || e.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight, n
                })(e) : TR(e)
            })(e);
            ((e, t) => {
                const n = {
                    show: M.from(t.show).getOr(S),
                    hide: M.from(t.hide).getOr(S),
                    isEnabled: M.from(t.isEnabled).getOr(L),
                    setEnabled: n => {
                        e.mode.isReadOnly() || M.from(t.setEnabled).each((e => e(n)))
                    }
                };
                e.ui = {...e.ui, ...n}
            })(e, M.from(t.api).getOr({})), e.editorContainer = t.editorContainer, (e => {
                e.contentCSS = e.contentCSS.concat((e => PC(e, Ml(e)))(e), (e => PC(e, Fl(e)))(e))
            })(e), e.inline ? NR(e) : ((e, t) => {
                ((e, t) => {
                    const n = e.translate("Rich Text Area"), o = Kt(mn(e.getElement()), "tabindex").bind(Ge),
                        r = ((e, t, n, o) => {
                            const r = cn("iframe");
                            return o.each((e => Vt(r, "tabindex", e))), qt(r, n), qt(r, {
                                id: e + "_ifr",
                                frameBorder: "0",
                                allowTransparency: "true",
                                title: t
                            }), nn(r, "tox-edit-area__iframe"), r
                        })(e.id, n, il(e), o).dom;
                    r.onload = () => {
                        r.onload = null, e.dispatch("load")
                    }, e.contentAreaContainer = t.iframeContainer, e.iframeElement = r, e.iframeHTML = (e => {
                        let t = ll(e) + "<html><head>";
                        dl(e) !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
                        const n = cl(e), o = ul(e), r = e.translate(bd(e));
                        return ml(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + ml(e) + '" />'), t += `</head><body id="${n}" class="mce-content-body ${o}" data-id="${e.id}" aria-label="${r}"><br></body></html>`, t
                    })(e), RR.add(t.iframeContainer, r)
                })(e, t), t.editorContainer && (t.editorContainer.style.display = e.orgDisplay, e.hidden = RR.isHidden(t.editorContainer)), e.getElement().style.display = "none", RR.setAttrib(e.id, "aria-hidden", "true"), NR(e)
            })(e, {editorContainer: t.editorContainer, iframeContainer: t.iframeContainer})
        }, DR = ba.DOM, PR = e => "-" === e.charAt(0),
        LR = (e, t, n) => M.from(t).filter((e => We(e) && !bC.has(e))).map((t => ({
            url: `${e.editorManager.baseURL}/icons/${t}/icons${n}.js`,
            name: M.some(t)
        }))), MR = (e, t) => {
            const n = ya.ScriptLoader, o = () => {
                !e.removed && (e => {
                    const t = Wl(e);
                    return !m(t) || C(NC.get(t))
                })(e) && (e => {
                    const t = Gl(e);
                    return C(vC.get(t))
                })(e) && BR(e)
            };
            ((e, t) => {
                const n = Wl(e);
                if (m(n) && !PR(n) && !xe(NC.urls, n)) {
                    const o = Kl(e), r = o ? e.documentBaseURI.toAbsolute(o) : `themes/${n}/theme${t}.js`;
                    NC.load(n, r).catch((() => {
                        ((e, t, n) => {
                            TC(e, "ThemeLoadError", BC("theme", t, n))
                        })(e, r, n)
                    }))
                }
            })(e, t), ((e, t) => {
                const n = Gl(e);
                if ("plugin" !== n && !xe(vC.urls, n)) {
                    const o = Yl(e), r = m(o) ? e.documentBaseURI.toAbsolute(o) : `models/${n}/model${t}.js`;
                    vC.load(n, r).catch((() => {
                        ((e, t, n) => {
                            TC(e, "ModelLoadError", BC("model", t, n))
                        })(e, r, n)
                    }))
                }
            })(e, t), ((e, t) => {
                const n = Bl(t), o = Dl(t);
                if (!Sa.hasCode(n) && "en" !== n) {
                    const r = We(o) ? o : `${t.editorManager.baseURL}/langs/${n}.js`;
                    e.add(r).catch((() => {
                        ((e, t, n) => {
                            TC(e, "LanguageLoadError", BC("language", t, n))
                        })(t, r, n)
                    }))
                }
            })(n, e), ((e, t, n) => {
                const o = LR(t, "default", n), r = (e => M.from(_l(e)).filter(We).map((e => ({
                    url: e,
                    name: M.none()
                }))))(t).orThunk((() => LR(t, Sl(t), "")));
                V((e => {
                    const t = [], n = e => {
                        t.push(e)
                    };
                    for (let t = 0; t < e.length; t++) e[t].each(n);
                    return t
                })([o, r]), (n => {
                    e.add(n.url).catch((() => {
                        ((e, t, n) => {
                            TC(e, "IconsLoadError", BC("icons", t, n))
                        })(t, n.url, n.name.getOrUndefined())
                    }))
                }))
            })(n, e, t), ((e, t) => {
                const n = (t, n) => {
                    EC.load(t, n).catch((() => {
                        ((e, t, n) => {
                            TC(e, "PluginLoadError", BC("plugin", t, n))
                        })(e, n, t)
                    }))
                };
                fe(md(e), ((t, o) => {
                    n(o, t), e.options.set("plugins", ud(e).concat(o))
                })), V(ud(e), (e => {
                    !(e = Tt.trim(e)) || EC.urls[e] || PR(e) || n(e, `plugins/${e}/plugin${t}.js`)
                }))
            })(e, t), n.loadQueue().then(o, o)
        }, IR = Ct().deviceType, FR = IR.isPhone(), UR = IR.isTablet(), zR = e => {
            if (y(e)) return [];
            {
                const t = p(e) ? e : e.split(/[ ,]/), n = $(t, $e);
                return K(n, We)
            }
        }, jR = (e, t) => {
            const n = ((t, n) => {
                const o = {}, r = {};
                return be(t, ((t, n) => j(e, n)), he(o), he(r)), {t: o, f: r}
            })(t);
            return o = n.t, r = n.f, {sections: N(o), options: N(r)};
            var o, r
        }, HR = (e, t) => xe(e.sections(), t), $R = (e, t) => ({
            table_grid: !1,
            object_resizing: !1,
            resize: !1,
            toolbar_mode: we(e, "toolbar_mode").getOr("scrolling"),
            toolbar_sticky: !1, ...t ? {menubar: !1} : {}
        }), VR = (e, t) => {
            var n;
            const o = null !== (n = t.external_plugins) && void 0 !== n ? n : {};
            return e && e.external_plugins ? Tt.extend({}, e.external_plugins, o) : o
        }, qR = (e, t, n, o, r) => {
            var s;
            const a = e ? {mobile: $R(null !== (s = r.mobile) && void 0 !== s ? s : {}, t)} : {},
                i = jR(["mobile"], US(a, r)),
                l = Tt.extend(n, o, i.options(), ((e, t) => e && HR(t, "mobile"))(e, i) ? ((e, t, n = {}) => {
                    const o = e.sections(), r = we(o, t).getOr({});
                    return Tt.extend({}, n, r)
                })(i, "mobile") : {}, {external_plugins: VR(o, i.options())});
            return ((e, t, n, o) => {
                const r = zR(n.forced_plugins), s = zR(o.plugins),
                    a = ((e, t) => HR(e, t) ? e.sections()[t] : {})(t, "mobile"),
                    i = ((e, t, n, o) => e && HR(t, "mobile") ? o : n)(e, t, s, a.plugins ? zR(a.plugins) : s),
                    l = ((e, t) => [...zR(e), ...zR(t)])(r, i);
                return Tt.extend(o, {forced_plugins: r, plugins: l})
            })(e, i, o, l)
        }, WR = e => {
            (e => {
                const t = t => () => {
                    V("left,center,right,justify".split(","), (n => {
                        t !== n && e.formatter.remove("align" + n)
                    })), "none" !== t && ((t, n) => {
                        e.formatter.toggle(t, void 0), e.nodeChanged()
                    })("align" + t)
                };
                e.editorCommands.addCommands({
                    JustifyLeft: t("left"),
                    JustifyCenter: t("center"),
                    JustifyRight: t("right"),
                    JustifyFull: t("justify"),
                    JustifyNone: t("none")
                })
            })(e), (e => {
                const t = t => () => {
                    const n = e.selection,
                        o = n.isCollapsed() ? [e.dom.getParent(n.getNode(), e.dom.isBlock)] : n.getSelectedBlocks();
                    return H(o, (n => C(e.formatter.matchNode(n, t))))
                };
                e.editorCommands.addCommands({
                    JustifyLeft: t("alignleft"),
                    JustifyCenter: t("aligncenter"),
                    JustifyRight: t("alignright"),
                    JustifyFull: t("alignjustify")
                }, "state")
            })(e)
        }, KR = (e, t) => {
            const n = e.selection, o = e.dom;
            return /^ | $/.test(t) ? ((e, t, n) => {
                const o = mn(e.getRoot());
                return n = fp(o, xi.fromRangeStart(t)) ? n.replace(/^ /, "&nbsp;") : n.replace(/^&nbsp;/, " "), gp(o, xi.fromRangeEnd(t)) ? n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : n.replace(/&nbsp;(<br( \/)?>)?$/, " ")
            })(o, n.getRng(), t) : t
        }, GR = (e, t) => {
            const {content: n, details: o} = (e => {
                if ("string" != typeof e) {
                    const t = Tt.extend({paste: e.paste, data: {paste: e.paste}}, e);
                    return {content: e.content, details: t}
                }
                return {content: e, details: {}}
            })(t);
            ky(e, {...o, content: KR(e, n), format: "html", set: !1, selection: !0}).each((t => {
                const n = ((e, t, n) => Zy(e).editor.insertContent(t, n))(e, t.content, o);
                Sy(e, n, t), e.addVisual()
            }))
        }, YR = {"font-size": "size", "font-family": "face"}, XR = Ht("font"),
        QR = e => (t, n) => M.from(n).map(mn).filter(Ft).bind((n => ((e, t, n) => $h(mn(n), (t => (t => Gn(t, e).orThunk((() => XR(t) ? we(YR, e).bind((e => Kt(t, e))) : M.none())))(t)), (e => bn(mn(t), e))))(e, t, n.dom).or(((e, t) => M.from(ba.DOM.getStyle(t, e, !0)))(e, n.dom)))).getOr(""),
        JR = QR("font-size"), ZR = _((e => e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",")), QR("font-family")),
        eA = e => Zc(e.getBody()).bind((e => {
            const t = e.container();
            return M.from(zo(t) ? t.parentNode : t)
        })), tA = (e, t) => ((e, t) => (e => M.from(e.selection.getRng()).bind((t => {
            const n = e.getBody();
            return t.startContainer === n && 0 === t.startOffset ? M.none() : M.from(e.selection.getStart(!0))
        })))(e).orThunk(O(eA, e)).map(mn).filter(Ft).bind(t))(e, E(M.some, t)), nA = (e, t) => {
            if (/^[0-9.]+$/.test(t)) {
                const n = parseInt(t, 10);
                if (n >= 1 && n <= 7) {
                    const o = (e => Tt.explode(e.options.get("font_size_style_values")))(e),
                        r = (e => Tt.explode(e.options.get("font_size_classes")))(e);
                    return r.length > 0 ? r[n - 1] || t : o[n - 1] || t
                }
                return t
            }
            return t
        }, oA = e => {
            const t = e.split(/\s*,\s*/);
            return $(t, (e => -1 === e.indexOf(" ") || ze(e, '"') || ze(e, "'") ? e : `'${e}'`)).join(",")
        }, rA = e => {
            WR(e), (e => {
                e.editorCommands.addCommands({
                    "Cut,Copy,Paste": t => {
                        const n = e.getDoc();
                        let o;
                        try {
                            n.execCommand(t)
                        } catch (e) {
                            o = !0
                        }
                        if ("paste" !== t || n.queryCommandEnabled(t) || (o = !0), o || !n.queryCommandSupported(t)) {
                            let t = e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                            (Nt.os.isMacOS() || Nt.os.isiOS()) && (t = t.replace(/Ctrl\+/g, "\u2318+")), e.notificationManager.open({
                                text: t,
                                type: "error"
                            })
                        }
                    }
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceAddUndoLevel: () => {
                        e.undoManager.add()
                    }, mceEndUndoLevel: () => {
                        e.undoManager.add()
                    }, Undo: () => {
                        e.undoManager.undo()
                    }, Redo: () => {
                        e.undoManager.redo()
                    }
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceSelectNodeDepth: (t, n, o) => {
                        let r = 0;
                        e.dom.getParent(e.selection.getNode(), (t => !To(t) || r++ !== o || (e.selection.select(t), !1)), e.getBody())
                    }, mceSelectNode: (t, n, o) => {
                        e.selection.select(o)
                    }, selectAll: () => {
                        const t = e.dom.getParent(e.selection.getStart(), Go);
                        if (t) {
                            const n = e.dom.createRng();
                            n.selectNodeContents(t), e.selection.setRng(n)
                        }
                    }
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceCleanup: () => {
                        const t = e.selection.getBookmark();
                        e.setContent(e.getContent()), e.selection.moveToBookmark(t)
                    }, insertImage: (t, n, o) => {
                        GR(e, e.dom.createHTML("img", {src: o}))
                    }, insertHorizontalRule: () => {
                        e.execCommand("mceInsertContent", !1, "<hr>")
                    }, insertText: (t, n, o) => {
                        GR(e, e.dom.encode(o))
                    }, insertHTML: (t, n, o) => {
                        GR(e, o)
                    }, mceInsertContent: (t, n, o) => {
                        GR(e, o)
                    }, mceSetContent: (t, n, o) => {
                        e.setContent(o)
                    }, mceReplaceContent: (t, n, o) => {
                        e.execCommand("mceInsertContent", !1, o.replace(/\{\$selection\}/g, e.selection.getContent({format: "text"})))
                    }, mceNewDocument: () => {
                        e.setContent("")
                    }
                })
            })(e), (e => {
                const t = (t, n, o) => {
                    const r = m(o) ? {href: o} : o, s = e.dom.getParent(e.selection.getNode(), "a");
                    f(r) && m(r.href) && (r.href = r.href.replace(/ /g, "%20"), s && r.href || e.formatter.remove("link"), r.href && e.formatter.apply("link", r, s))
                };
                e.editorCommands.addCommands({
                    unlink: () => {
                        if (e.selection.isCollapsed()) {
                            const t = e.dom.getParent(e.selection.getStart(), "a");
                            t && e.dom.remove(t, !0)
                        } else e.formatter.remove("link")
                    }, mceInsertLink: t, createLink: t
                })
            })(e), (e => {
                e.editorCommands.addCommands({
                    Indent: () => {
                        (e => {
                            fk(e, "indent")
                        })(e)
                    }, Outdent: () => {
                        gk(e)
                    }
                }), e.editorCommands.addCommands({Outdent: () => ck(e)}, "state")
            })(e), (e => {
                e.editorCommands.addCommands({
                    insertParagraph: () => {
                        xE(tE, e)
                    }, mceInsertNewLine: (t, n, o) => {
                        kE(e, o)
                    }, InsertLineBreak: (t, n, o) => {
                        xE(dE, e)
                    }
                })
            })(e), (e => {
                (e => {
                    e.editorCommands.addCommands({
                        "InsertUnorderedList,InsertOrderedList": t => {
                            e.getDoc().execCommand(t);
                            const n = e.dom.getParent(e.selection.getNode(), "ol,ul");
                            if (n) {
                                const t = n.parentNode;
                                if (t && /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName)) {
                                    const o = e.selection.getBookmark();
                                    e.dom.split(t, n), e.selection.moveToBookmark(o)
                                }
                            }
                        }
                    })
                })(e), (e => {
                    e.editorCommands.addCommands({
                        "InsertUnorderedList,InsertOrderedList": t => {
                            const n = e.dom.getParent(e.selection.getNode(), "ul,ol");
                            return n && ("insertunorderedlist" === t && "UL" === n.tagName || "insertorderedlist" === t && "OL" === n.tagName)
                        }
                    }, "state")
                })(e)
            })(e), (e => {
                (e => {
                    const t = (t, n) => {
                        e.formatter.toggle(t, n), e.nodeChanged()
                    };
                    e.editorCommands.addCommands({
                        "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": e => {
                            t(e)
                        }, "ForeColor,HiliteColor": (e, n, o) => {
                            t(e, {value: o})
                        }, BackColor: (e, n, o) => {
                            t("hilitecolor", {value: o})
                        }, FontName: (t, n, o) => {
                            ((e, t) => {
                                const n = nA(e, t);
                                e.formatter.toggle("fontname", {value: oA(n)}), e.nodeChanged()
                            })(e, o)
                        }, FontSize: (t, n, o) => {
                            ((e, t) => {
                                e.formatter.toggle("fontsize", {value: nA(e, t)}), e.nodeChanged()
                            })(e, o)
                        }, LineHeight: (t, n, o) => {
                            ((e, t) => {
                                e.formatter.toggle("lineheight", {value: String(t)}), e.nodeChanged()
                            })(e, o)
                        }, Lang: (e, n, o) => {
                            var r;
                            t(e, {value: o.code, customValue: null !== (r = o.customCode) && void 0 !== r ? r : null})
                        }, RemoveFormat: t => {
                            e.formatter.remove(t)
                        }, mceBlockQuote: () => {
                            t("blockquote")
                        }, FormatBlock: (e, n, o) => {
                            t(m(o) ? o : "p")
                        }, mceToggleFormat: (e, n, o) => {
                            t(o)
                        }
                    })
                })(e), (e => {
                    const t = t => e.formatter.match(t);
                    e.editorCommands.addCommands({
                        "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": e => t(e),
                        mceBlockQuote: () => t("blockquote")
                    }, "state"), e.editorCommands.addQueryValueHandler("FontName", (() => (e => tA(e, (t => ZR(e.getBody(), t.dom))).getOr(""))(e))), e.editorCommands.addQueryValueHandler("FontSize", (() => (e => tA(e, (t => JR(e.getBody(), t.dom))).getOr(""))(e))), e.editorCommands.addQueryValueHandler("LineHeight", (() => (e => tA(e, (t => {
                        const n = mn(e.getBody()), o = $h(t, (e => Gn(e, "line-height")), O(bn, n));
                        return o.getOrThunk((() => {
                            const e = parseFloat(Wn(t, "line-height")), n = parseFloat(Wn(t, "font-size"));
                            return String(e / n)
                        }))
                    })).getOr(""))(e)))
                })(e)
            })(e), (e => {
                e.editorCommands.addCommands({
                    mceRemoveNode: (t, n, o) => {
                        const r = null != o ? o : e.selection.getNode();
                        if (r !== e.getBody()) {
                            const t = e.selection.getBookmark();
                            e.dom.remove(r, !0), e.selection.moveToBookmark(t)
                        }
                    }, mcePrint: () => {
                        e.getWin().print()
                    }, mceFocus: (t, n, o) => {
                        ((e, t) => {
                            e.removed || (t ? eg(e) : (e => {
                                const t = e.selection, n = e.getBody();
                                let o = t.getRng();
                                e.quirks.refreshContentEditable(), C(e.bookmark) && !Zf(e) && $f(e).each((t => {
                                    e.selection.setRng(t), o = t
                                }));
                                const r = ((e, t) => e.dom.getParent(t, (t => "true" === e.dom.getContentEditable(t))))(e, t.getNode());
                                if (r && e.dom.isChildOf(r, n)) return Jf(r), Qf(e, o), void eg(e);
                                e.inline || (Nt.browser.isOpera() || Jf(n), e.getWin().focus()), (Nt.browser.isFirefox() || e.inline) && (Jf(n), Qf(e, o)), eg(e)
                            })(e))
                        })(e, !0 === o)
                    }, mceToggleVisualAid: () => {
                        e.hasVisual = !e.hasVisual, e.addVisual()
                    }
                })
            })(e)
        }, sA = ["toggleview"], aA = e => j(sA, e.toLowerCase());

    class iA {
        constructor(e) {
            this.commands = {state: {}, exec: {}, value: {}}, this.editor = e
        }

        execCommand(e, t = !1, n, o) {
            const r = this.editor, s = e.toLowerCase(), a = null == o ? void 0 : o.skip_focus;
            if (r.removed) return !1;
            if ("mcefocus" !== s && (/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(s) || a ? (e => {
                $f(e).each((t => e.selection.setRng(t)))
            })(r) : r.focus()), r.dispatch("BeforeExecCommand", {
                command: e,
                ui: t,
                value: n
            }).isDefaultPrevented()) return !1;
            const i = this.commands.exec[s];
            return !!w(i) && (i(s, t, n), r.dispatch("ExecCommand", {command: e, ui: t, value: n}), !0)
        }

        queryCommandState(e) {
            if (!aA(e) && this.editor.quirks.isHidden() || this.editor.removed) return !1;
            const t = e.toLowerCase(), n = this.commands.state[t];
            return !!w(n) && n(t)
        }

        queryCommandValue(e) {
            if (!aA(e) && this.editor.quirks.isHidden() || this.editor.removed) return "";
            const t = e.toLowerCase(), n = this.commands.value[t];
            return w(n) ? n(t) : ""
        }

        addCommands(e, t = "exec") {
            const n = this.commands;
            fe(e, ((e, o) => {
                V(o.toLowerCase().split(","), (o => {
                    n[t][o] = e
                }))
            }))
        }

        addCommand(e, t, n) {
            const o = e.toLowerCase();
            this.commands.exec[o] = (e, o, r) => t.call(null != n ? n : this.editor, o, r)
        }

        queryCommandSupported(e) {
            const t = e.toLowerCase();
            return !!this.commands.exec[t]
        }

        addQueryStateHandler(e, t, n) {
            this.commands.state[e.toLowerCase()] = () => t.call(null != n ? n : this.editor)
        }

        addQueryValueHandler(e, t, n) {
            this.commands.value[e.toLowerCase()] = () => t.call(null != n ? n : this.editor)
        }
    }

    const lA = "data-mce-contenteditable", dA = (e, t, n) => {
            try {
                e.getDoc().execCommand(t, !1, String(n))
            } catch (e) {
            }
        }, cA = (e, t) => {
            e.dom.contentEditable = t ? "true" : "false"
        }, uA = (e, t) => {
            const n = mn(e.getBody());
            ((e, t, n) => {
                sn(e, t) && !n ? rn(e, t) : n && nn(e, t)
            })(n, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), (e => {
                M.from(e.selection.getNode()).each((e => {
                    e.removeAttribute("data-mce-selected")
                }))
            })(e), e.readonly = !0, cA(n, !1), V(or(n, '*[contenteditable="true"]'), (e => {
                Vt(e, lA, "true"), cA(e, !1)
            }))) : (e.readonly = !1, cA(n, !0), V(or(n, '*[data-mce-contenteditable="true"]'), (e => {
                Yt(e, lA), cA(e, !0)
            })), dA(e, "StyleWithCSS", !1), dA(e, "enableInlineTableEditing", !1), dA(e, "enableObjectResizing", !1), (e => Zf(e) || (e => {
                const t = In(mn(e.getElement()));
                return Lf(t).filter((t => !(e => {
                    const t = e.classList;
                    return void 0 !== t && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"))
                })(t.dom) && Gf(e, t.dom))).isSome()
            })(e))(e) && e.focus(), (e => {
                e.selection.setRng(e.selection.getRng())
            })(e), e.nodeChanged())
        }, mA = e => e.readonly, fA = e => {
            e.parser.addAttributeFilter("contenteditable", (t => {
                mA(e) && V(t, (e => {
                    e.attr(lA, e.attr("contenteditable")), e.attr("contenteditable", "false")
                }))
            })), e.serializer.addAttributeFilter(lA, (t => {
                mA(e) && V(t, (e => {
                    e.attr("contenteditable", e.attr(lA))
                }))
            })), e.serializer.addTempAttr(lA)
        }, gA = ["copy"],
        pA = Tt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " ");

    class hA {
        constructor(e) {
            this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || P
        }

        static isNative(e) {
            return !!pA[e.toLowerCase()]
        }

        fire(e, t) {
            return this.dispatch(e, t)
        }

        dispatch(e, t) {
            const n = e.toLowerCase(), o = ta(n, null != t ? t : {}, this.scope);
            this.settings.beforeFire && this.settings.beforeFire(o);
            const r = this.bindings[n];
            if (r) for (let e = 0, t = r.length; e < t; e++) {
                const t = r[e];
                if (!t.removed) {
                    if (t.once && this.off(n, t.func), o.isImmediatePropagationStopped()) return o;
                    if (!1 === t.func.call(this.scope, o)) return o.preventDefault(), o
                }
            }
            return o
        }

        on(e, t, n, o) {
            if (!1 === t && (t = P), t) {
                const r = {func: t, removed: !1};
                o && Tt.extend(r, o);
                const s = e.toLowerCase().split(" ");
                let a = s.length;
                for (; a--;) {
                    const e = s[a];
                    let t = this.bindings[e];
                    t || (t = [], this.toggleEvent(e, !0)), t = n ? [r, ...t] : [...t, r], this.bindings[e] = t
                }
            }
            return this
        }

        off(e, t) {
            if (e) {
                const n = e.toLowerCase().split(" ");
                let o = n.length;
                for (; o--;) {
                    const r = n[o];
                    let s = this.bindings[r];
                    if (!r) return fe(this.bindings, ((e, t) => {
                        this.toggleEvent(t, !1), delete this.bindings[t]
                    })), this;
                    if (s) {
                        if (t) {
                            const e = W(s, (e => e.func === t));
                            s = e.fail, this.bindings[r] = s, V(e.pass, (e => {
                                e.removed = !0
                            }))
                        } else s.length = 0;
                        s.length || (this.toggleEvent(e, !1), delete this.bindings[r])
                    }
                }
            } else fe(this.bindings, ((e, t) => {
                this.toggleEvent(t, !1)
            })), this.bindings = {};
            return this
        }

        once(e, t, n) {
            return this.on(e, t, n, {once: !0})
        }

        has(e) {
            e = e.toLowerCase();
            const t = this.bindings[e];
            return !(!t || 0 === t.length)
        }
    }

    const bA = e => (e._eventDispatcher || (e._eventDispatcher = new hA({
        scope: e, toggleEvent: (t, n) => {
            hA.isNative(t) && e.toggleNativeEvent && e.toggleNativeEvent(t, n)
        }
    })), e._eventDispatcher), vA = {
        fire(e, t, n) {
            return this.dispatch(e, t, n)
        }, dispatch(e, t, n) {
            const o = this;
            if (o.removed && "remove" !== e && "detach" !== e) return ta(e.toLowerCase(), null != t ? t : {}, o);
            const r = bA(o).dispatch(e, t);
            if (!1 !== n && o.parent) {
                let t = o.parent();
                for (; t && !r.isPropagationStopped();) t.dispatch(e, r, !1), t = t.parent ? t.parent() : void 0
            }
            return r
        }, on(e, t, n) {
            return bA(this).on(e, t, n)
        }, off(e, t) {
            return bA(this).off(e, t)
        }, once(e, t) {
            return bA(this).once(e, t)
        }, hasEventListeners(e) {
            return bA(this).has(e)
        }
    }, yA = ba.DOM;
    let CA;
    const wA = (e, t) => {
        if ("selectionchange" === t) return e.getDoc();
        if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement;
        const n = Vl(e);
        return n ? (e.eventRoot || (e.eventRoot = yA.select(n)[0]), e.eventRoot) : e.getBody()
    }, xA = (e, t, n) => {
        (e => !e.hidden && !mA(e))(e) ? e.dispatch(t, n) : mA(e) && ((e, t) => {
            if ((e => "click" === e.type)(t) && !Dm.metaKeyPressed(t)) {
                const n = mn(t.target);
                ((e, t) => Eo(t, "a", (t => bn(t, mn(e.getBody())))).bind((e => Kt(e, "href"))))(e, n).each((n => {
                    if (t.preventDefault(), /^#/.test(n)) {
                        const t = e.dom.select(`${n},[name="${o = n, ze(o, "#") ? ((e, t) => e.substring(t))(o, "#".length) : o}"]`);
                        t.length && e.selection.scrollIntoView(t[0], !0)
                    } else window.open(n, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");
                    var o
                }))
            } else (e => j(gA, e.type))(t) && e.dispatch(t.type, t)
        })(e, n)
    }, kA = (e, t) => {
        if (e.delegates || (e.delegates = {}), e.delegates[t] || e.removed) return;
        const n = wA(e, t);
        if (Vl(e)) {
            if (CA || (CA = {}, e.editorManager.on("removeEditor", (() => {
                e.editorManager.activeEditor || CA && (fe(CA, ((t, n) => {
                    e.dom.unbind(wA(e, n))
                })), CA = null)
            }))), CA[t]) return;
            const o = n => {
                const o = n.target, r = e.editorManager.get();
                let s = r.length;
                for (; s--;) {
                    const e = r[s].getBody();
                    (e === o || yA.isChildOf(o, e)) && xA(r[s], t, n)
                }
            };
            CA[t] = o, yA.bind(n, t, o)
        } else {
            const o = n => {
                xA(e, t, n)
            };
            yA.bind(n, t, o), e.delegates[t] = o
        }
    }, SA = {
        ...vA, bindPendingEventDelegates() {
            const e = this;
            Tt.each(e._pendingNativeEvents, (t => {
                kA(e, t)
            }))
        }, toggleNativeEvent(e, t) {
            const n = this;
            "focus" !== e && "blur" !== e && (n.removed || (t ? n.initialized ? kA(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && n.delegates && (n.dom.unbind(wA(n, e), e, n.delegates[e]), delete n.delegates[e])))
        }, unbindAllNativeEvents() {
            const e = this, t = e.getBody(), n = e.dom;
            e.delegates && (fe(e.delegates, ((t, n) => {
                e.dom.unbind(wA(e, n), n, t)
            })), delete e.delegates), !e.inline && t && n && (t.onload = null, n.unbind(e.getWin()), n.unbind(e.getDoc())), n && (n.unbind(t), n.unbind(e.getContainer()))
        }
    }, _A = e => m(e) ? {value: e.split(/[ ,]/), valid: !0} : k(e, m) ? {value: e, valid: !0} : {
        valid: !1,
        message: "The value must be a string[] or a comma/space separated string."
    }, EA = (e, t) => e + (Ke(t.message) ? "" : `. ${t.message}`), NA = e => e.valid, RA = (e, t, n = "") => {
        const o = t(e);
        return b(o) ? o ? {value: e, valid: !0} : {valid: !1, message: n} : o
    }, AA = ["design", "readonly"], OA = (e, t, n, o) => {
        const r = n[t.get()], s = n[o];
        try {
            s.activate()
        } catch (e) {
            return void console.error(`problem while activating editor mode ${o}:`, e)
        }
        r.deactivate(), r.editorReadOnly !== s.editorReadOnly && uA(e, s.editorReadOnly), t.set(o), ((e, t) => {
            e.dispatch("SwitchMode", {mode: t})
        })(e, o)
    }, TA = Tt.each, BA = Tt.explode, DA = {
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123
    }, PA = Tt.makeMap("alt,ctrl,shift,meta,access"), LA = e => {
        const t = {}, n = Nt.os.isMacOS() || Nt.os.isiOS();
        TA(BA(e.toLowerCase(), "+"), (e => {
            (e => e in PA)(e) ? t[e] = !0 : /^[0-9]{2,}$/.test(e) ? t.keyCode = parseInt(e, 10) : (t.charCode = e.charCodeAt(0), t.keyCode = DA[e] || e.toUpperCase().charCodeAt(0))
        }));
        const o = [t.keyCode];
        let r;
        for (r in PA) t[r] ? o.push(r) : t[r] = !1;
        return t.id = o.join(","), t.access && (t.alt = !0, n ? t.ctrl = !0 : t.shift = !0), t.meta && (n ? t.meta = !0 : (t.ctrl = !0, t.meta = !1)), t
    };

    class MA {
        constructor(e) {
            this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
            const t = this;
            e.on("keyup keypress keydown", (e => {
                !t.hasModifier(e) && !t.isFunctionKey(e) || e.isDefaultPrevented() || (TA(t.shortcuts, (n => {
                    t.matchShortcut(e, n) && (t.pendingPatterns = n.subpatterns.slice(0), "keydown" === e.type && t.executeShortcutAction(n))
                })), t.matchShortcut(e, t.pendingPatterns[0]) && (1 === t.pendingPatterns.length && "keydown" === e.type && t.executeShortcutAction(t.pendingPatterns[0]), t.pendingPatterns.shift()))
            }))
        }

        add(e, t, n, o) {
            const r = this, s = r.normalizeCommandFunc(n);
            return TA(BA(Tt.trim(e)), (e => {
                const n = r.createShortcut(e, t, s, o);
                r.shortcuts[n.id] = n
            })), !0
        }

        remove(e) {
            const t = this.createShortcut(e);
            return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0)
        }

        normalizeCommandFunc(e) {
            const t = this, n = e;
            return "string" == typeof n ? () => {
                t.editor.execCommand(n, !1, null)
            } : Tt.isArray(n) ? () => {
                t.editor.execCommand(n[0], n[1], n[2])
            } : n
        }

        createShortcut(e, t, n, o) {
            const r = Tt.map(BA(e, ">"), LA);
            return r[r.length - 1] = Tt.extend(r[r.length - 1], {
                func: n,
                scope: o || this.editor
            }), Tt.extend(r[0], {desc: this.editor.translate(t), subpatterns: r.slice(1)})
        }

        hasModifier(e) {
            return e.altKey || e.ctrlKey || e.metaKey
        }

        isFunctionKey(e) {
            return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123
        }

        matchShortcut(e, t) {
            return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0)
        }

        executeShortcutAction(e) {
            return e.func ? e.func.call(e.scope) : null
        }
    }

    const IA = () => {
        const e = (() => {
            const e = {}, t = {}, n = {}, o = {}, r = {}, s = {}, a = {}, i = {}, l = (e, t) => (n, o) => {
                e[n.toLowerCase()] = {...o, type: t}
            };
            return {
                addButton: l(e, "button"),
                addGroupToolbarButton: l(e, "grouptoolbarbutton"),
                addToggleButton: l(e, "togglebutton"),
                addMenuButton: l(e, "menubutton"),
                addSplitButton: l(e, "splitbutton"),
                addMenuItem: l(t, "menuitem"),
                addNestedMenuItem: l(t, "nestedmenuitem"),
                addToggleMenuItem: l(t, "togglemenuitem"),
                addAutocompleter: l(n, "autocompleter"),
                addContextMenu: l(r, "contextmenu"),
                addContextToolbar: l(s, "contexttoolbar"),
                addContextForm: l(s, "contextform"),
                addSidebar: l(a, "sidebar"),
                addView: l(i, "views"),
                addIcon: (e, t) => o[e.toLowerCase()] = t,
                getAll: () => ({
                    buttons: e,
                    menuItems: t,
                    icons: o,
                    popups: n,
                    contextMenus: r,
                    contextToolbars: s,
                    sidebars: a,
                    views: i
                })
            }
        })();
        return {
            addAutocompleter: e.addAutocompleter,
            addButton: e.addButton,
            addContextForm: e.addContextForm,
            addContextMenu: e.addContextMenu,
            addContextToolbar: e.addContextToolbar,
            addIcon: e.addIcon,
            addMenuButton: e.addMenuButton,
            addMenuItem: e.addMenuItem,
            addNestedMenuItem: e.addNestedMenuItem,
            addSidebar: e.addSidebar,
            addSplitButton: e.addSplitButton,
            addToggleButton: e.addToggleButton,
            addGroupToolbarButton: e.addGroupToolbarButton,
            addToggleMenuItem: e.addToggleMenuItem,
            addView: e.addView,
            getAll: e.getAll
        }
    }, FA = ba.DOM, UA = Tt.extend, zA = Tt.each;

    class jA {
        constructor(e, t, n) {
            this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.composing = !1, this.destroyed = !1, this.hasHiddenInput = !1, this.iframeElement = null, this.initialized = !1, this.readonly = !1, this.removed = !1, this.startContent = "", this._pendingNativeEvents = [], this._skinLoaded = !1, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, UA(this, SA);
            const o = this;
            this.id = e, this.hidden = !1;
            const r = ((e, t) => qR(FR || UR, FR, t, e, t))(n.defaultOptions, t);
            this.options = ((e, t) => {
                const n = {}, o = {}, r = (e, t, n) => {
                    const r = RA(t, n);
                    return NA(r) ? (o[e] = r.value, !0) : (console.warn(EA(`Invalid value passed for the ${e} option`, r)), !1)
                }, s = e => xe(n, e);
                return {
                    register: (e, s) => {
                        const a = (e => m(e.processor))(s) ? (e => {
                            const t = (() => {
                                switch (e) {
                                    case"array":
                                        return p;
                                    case"boolean":
                                        return b;
                                    case"function":
                                        return w;
                                    case"number":
                                        return x;
                                    case"object":
                                        return f;
                                    case"string":
                                        return m;
                                    case"string[]":
                                        return _A;
                                    case"object[]":
                                        return e => k(e, f);
                                    case"regexp":
                                        return e => u(e, RegExp);
                                    default:
                                        return L
                                }
                            })();
                            return n => RA(n, t, `The value must be a ${e}.`)
                        })(s.processor) : s.processor, i = ((e, t, n) => {
                            if (!v(t)) {
                                const o = RA(t, n);
                                if (NA(o)) return o.value;
                                console.error(EA(`Invalid default value passed for the "${e}" option`, o))
                            }
                        })(e, s.default, a);
                        n[e] = {
                            ...s,
                            default: i,
                            processor: a
                        }, we(o, e).orThunk((() => we(t, e))).each((t => r(e, t, a)))
                    },
                    isRegistered: s,
                    get: e => we(o, e).orThunk((() => we(n, e).map((e => e.default)))).getOrUndefined(),
                    set: (e, t) => {
                        if (s(e)) {
                            const o = n[e];
                            return o.immutable ? (console.error(`"${e}" is an immutable option and cannot be updated`), !1) : r(e, t, o.processor)
                        }
                        return console.warn(`"${e}" is not a registered option. Ensure the option has been registered before setting a value.`), !1
                    },
                    unset: e => {
                        const t = s(e);
                        return t && delete o[e], t
                    },
                    isSet: e => xe(o, e)
                }
            })(0, r), (e => {
                const t = e.options.register;
                t("id", {
                    processor: "string",
                    default: e.id
                }), t("selector", {processor: "string"}), t("target", {processor: "object"}), t("suffix", {processor: "string"}), t("cache_suffix", {processor: "string"}), t("base_url", {processor: "string"}), t("referrer_policy", {
                    processor: "string",
                    default: ""
                }), t("language_load", {processor: "boolean", default: !0}), t("inline", {
                    processor: "boolean",
                    default: !1
                }), t("iframe_attrs", {processor: "object", default: {}}), t("doctype", {
                    processor: "string",
                    default: "<!DOCTYPE html>"
                }), t("document_base_url", {
                    processor: "string",
                    default: e.documentBaseUrl
                }), t("body_id", {processor: al(e, "tinymce"), default: "tinymce"}), t("body_class", {
                    processor: al(e),
                    default: ""
                }), t("content_security_policy", {
                    processor: "string",
                    default: ""
                }), t("br_in_pre", {processor: "boolean", default: !0}), t("forced_root_block", {
                    processor: e => {
                        const t = m(e) && We(e);
                        return t ? {value: e, valid: t} : {valid: !1, message: "Must be a non-empty string."}
                    }, default: "p"
                }), t("forced_root_block_attrs", {
                    processor: "object",
                    default: {}
                }), t("newline_behavior", {
                    processor: e => {
                        const t = j(["block", "linebreak", "invert", "default"], e);
                        return t ? {value: e, valid: t} : {
                            valid: !1,
                            message: "Must be one of: block, linebreak, invert or default."
                        }
                    }, default: "default"
                }), t("br_newline_selector", {
                    processor: "string",
                    default: ".mce-toc h2,figcaption,caption"
                }), t("no_newline_selector", {
                    processor: "string",
                    default: ""
                }), t("keep_styles", {
                    processor: "boolean",
                    default: !0
                }), t("end_container_on_empty_block", {
                    processor: e => b(e) || m(e) ? {
                        valid: !0,
                        value: e
                    } : {valid: !1, message: "Must be boolean or a string"}, default: "blockquote"
                }), t("font_size_style_values", {
                    processor: "string",
                    default: "xx-small,x-small,small,medium,large,x-large,xx-large"
                }), t("font_size_legacy_values", {
                    processor: "string",
                    default: "xx-small,small,medium,large,x-large,xx-large,300%"
                }), t("font_size_classes", {
                    processor: "string",
                    default: ""
                }), t("automatic_uploads", {
                    processor: "boolean",
                    default: !0
                }), t("images_reuse_filename", {
                    processor: "boolean",
                    default: !1
                }), t("images_replace_blob_uris", {processor: "boolean", default: !0}), t("icons", {
                    processor: "string",
                    default: ""
                }), t("icons_url", {processor: "string", default: ""}), t("images_upload_url", {
                    processor: "string",
                    default: ""
                }), t("images_upload_base_path", {
                    processor: "string",
                    default: ""
                }), t("images_upload_credentials", {
                    processor: "boolean",
                    default: !1
                }), t("images_upload_handler", {processor: "function"}), t("language", {
                    processor: "string",
                    default: "en"
                }), t("language_url", {processor: "string", default: ""}), t("entity_encoding", {
                    processor: "string",
                    default: "named"
                }), t("indent", {processor: "boolean", default: !0}), t("indent_before", {
                    processor: "string",
                    default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
                }), t("indent_after", {
                    processor: "string",
                    default: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
                }), t("indent_use_margin", {processor: "boolean", default: !1}), t("indentation", {
                    processor: "string",
                    default: "40px"
                }), t("content_css", {
                    processor: e => {
                        const t = !1 === e || m(e) || k(e, m);
                        return t ? m(e) ? {value: $(e.split(","), $e), valid: t} : p(e) ? {
                            value: e,
                            valid: t
                        } : !1 === e ? {value: [], valid: t} : {value: e, valid: t} : {
                            valid: !1,
                            message: "Must be false, a string or an array of strings."
                        }
                    }, default: nd(e) ? [] : ["default"]
                }), t("content_style", {processor: "string"}), t("content_css_cors", {
                    processor: "boolean",
                    default: !1
                }), t("font_css", {
                    processor: e => {
                        const t = m(e) || k(e, m);
                        return t ? {value: p(e) ? e : $(e.split(","), $e), valid: t} : {
                            valid: !1,
                            message: "Must be a string or an array of strings."
                        }
                    }, default: []
                }), t("inline_boundaries", {
                    processor: "boolean",
                    default: !0
                }), t("inline_boundaries_selector", {
                    processor: "string",
                    default: "a[href],code,span.mce-annotation"
                }), t("object_resizing", {
                    processor: e => {
                        const t = b(e) || m(e);
                        return t ? !1 === e || el.isiPhone() || el.isiPad() ? {
                            value: "",
                            valid: t
                        } : {value: !0 === e ? "table,img,figure.image,div,video,iframe" : e, valid: t} : {
                            valid: !1,
                            message: "Must be boolean or a string"
                        }
                    }, default: !tl
                }), t("resize_img_proportional", {
                    processor: "boolean",
                    default: !0
                }), t("event_root", {processor: "object"}), t("service_message", {processor: "string"}), t("theme", {
                    processor: e => !1 === e || m(e) || w(e),
                    default: "silver"
                }), t("theme_url", {processor: "string"}), t("formats", {processor: "object"}), t("format_empty_lines", {
                    processor: "boolean",
                    default: !1
                }), t("format_noneditable_selector", {
                    processor: "string",
                    default: ""
                }), t("preview_styles", {
                    processor: e => {
                        const t = !1 === e || m(e);
                        return t ? {value: !1 === e ? "" : e, valid: t} : {
                            valid: !1,
                            message: "Must be false or a string"
                        }
                    },
                    default: "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"
                }), t("custom_ui_selector", {
                    processor: "string",
                    default: ""
                }), t("hidden_input", {processor: "boolean", default: !0}), t("submit_patch", {
                    processor: "boolean",
                    default: !0
                }), t("encoding", {processor: "string"}), t("add_form_submit_trigger", {
                    processor: "boolean",
                    default: !0
                }), t("add_unload_trigger", {
                    processor: "boolean",
                    default: !0
                }), t("custom_undo_redo_levels", {
                    processor: "number",
                    default: 0
                }), t("disable_nodechange", {processor: "boolean", default: !1}), t("readonly", {
                    processor: "boolean",
                    default: !1
                }), t("plugins", {
                    processor: "string[]",
                    default: []
                }), t("external_plugins", {processor: "object"}), t("forced_plugins", {processor: "string[]"}), t("model", {
                    processor: "string",
                    default: e.hasPlugin("rtc") ? "plugin" : "dom"
                }), t("model_url", {processor: "string"}), t("block_unsupported_drop", {
                    processor: "boolean",
                    default: !0
                }), t("visual", {processor: "boolean", default: !0}), t("visual_table_class", {
                    processor: "string",
                    default: "mce-item-table"
                }), t("visual_anchor_class", {
                    processor: "string",
                    default: "mce-item-anchor"
                }), t("iframe_aria_text", {
                    processor: "string",
                    default: "Rich Text Area. Press ALT-0 for help."
                }), t("setup", {processor: "function"}), t("init_instance_callback", {processor: "function"}), t("url_converter", {
                    processor: "function",
                    default: e.convertURL
                }), t("url_converter_scope", {
                    processor: "object",
                    default: e
                }), t("urlconverter_callback", {processor: "function"}), t("allow_conditional_comments", {
                    processor: "boolean",
                    default: !1
                }), t("allow_html_data_urls", {
                    processor: "boolean",
                    default: !1
                }), t("allow_svg_data_urls", {processor: "boolean"}), t("allow_html_in_named_anchor", {
                    processor: "boolean",
                    default: !1
                }), t("allow_script_urls", {
                    processor: "boolean",
                    default: !1
                }), t("allow_unsafe_link_target", {
                    processor: "boolean",
                    default: !1
                }), t("convert_fonts_to_spans", {
                    processor: "boolean",
                    default: !0,
                    deprecated: !0
                }), t("fix_list_elements", {
                    processor: "boolean",
                    default: !1
                }), t("preserve_cdata", {
                    processor: "boolean",
                    default: !1
                }), t("remove_trailing_brs", {processor: "boolean"}), t("inline_styles", {
                    processor: "boolean",
                    default: !0,
                    deprecated: !0
                }), t("element_format", {
                    processor: "string",
                    default: "html"
                }), t("entities", {processor: "string"}), t("schema", {
                    processor: "string",
                    default: "html5"
                }), t("convert_urls", {processor: "boolean", default: !0}), t("relative_urls", {
                    processor: "boolean",
                    default: !0
                }), t("remove_script_host", {
                    processor: "boolean",
                    default: !0
                }), t("custom_elements", {processor: "string"}),t("extended_valid_elements", {processor: "string"}),t("invalid_elements", {processor: "string"}),t("invalid_styles", {processor: sl}),t("valid_children", {processor: "string"}),t("valid_classes", {processor: sl}),t("valid_elements", {processor: "string"}),t("valid_styles", {processor: sl}),t("verify_html", {
                    processor: "boolean",
                    default: !0
                }),t("auto_focus", {processor: e => m(e) || !0 === e}),t("browser_spellcheck", {
                    processor: "boolean",
                    default: !1
                }),t("protect", {processor: "array"}),t("images_file_types", {
                    processor: "string",
                    default: "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp"
                }),t("deprecation_warnings", {
                    processor: "boolean",
                    default: !0
                }),t("a11y_advanced_options", {
                    processor: "boolean",
                    default: !1
                }),t("api_key", {processor: "string"}),t("paste_block_drop", {
                    processor: "boolean",
                    default: !1
                }),t("paste_data_images", {
                    processor: "boolean",
                    default: !0
                }),t("paste_preprocess", {processor: "function"}),t("paste_postprocess", {processor: "function"}),t("paste_webkit_styles", {
                    processor: "string",
                    default: "none"
                }),t("paste_remove_styles_if_webkit", {
                    processor: "boolean",
                    default: !0
                }),t("paste_merge_formats", {processor: "boolean", default: !0}),t("smart_paste", {
                    processor: "boolean",
                    default: !0
                }),t("paste_as_text", {processor: "boolean", default: !1}),t("paste_tab_spaces", {
                    processor: "number",
                    default: 4
                }),t("text_patterns", {
                    processor: e => k(e, f) || !1 === e ? {
                        value: Zi(!1 === e ? [] : e),
                        valid: !0
                    } : {valid: !1, message: "Must be an array of objects or false."},
                    default: [{start: "*", end: "*", format: "italic"}, {
                        start: "**",
                        end: "**",
                        format: "bold"
                    }, {start: "#", format: "h1"}, {start: "##", format: "h2"}, {
                        start: "###",
                        format: "h3"
                    }, {start: "####", format: "h4"}, {start: "#####", format: "h5"}, {
                        start: "######",
                        format: "h6"
                    }, {start: "1. ", cmd: "InsertOrderedList"}, {
                        start: "* ",
                        cmd: "InsertUnorderedList"
                    }, {start: "- ", cmd: "InsertUnorderedList"}]
                }),t("text_patterns_lookup", {
                    processor: e => {
                        return w(e) ? {
                            value: (t = e, e => {
                                const n = t(e);
                                return Zi(n)
                            }), valid: !0
                        } : {valid: !1, message: "Must be a single function"};
                        var t
                    }, default: e => []
                }),t("noneditable_class", {
                    processor: "string",
                    default: "mceNonEditable"
                }),t("editable_class", {
                    processor: "string",
                    default: "mceEditable"
                }),t("noneditable_regexp", {
                    processor: e => k(e, ol) ? {value: e, valid: !0} : ol(e) ? {
                        value: [e],
                        valid: !0
                    } : {valid: !1, message: "Must be a RegExp or an array of RegExp."}, default: []
                }),t("table_tab_navigation", {processor: "boolean", default: !0}),e.on("ScriptsLoaded", (() => {
                    t("directionality", {
                        processor: "string",
                        default: Sa.isRtl() ? "rtl" : void 0
                    }), t("placeholder", {processor: "string", default: nl.getAttrib(e.getElement(), "placeholder")})
                }))
            })(o);
            const s = this.options.get;
            s("deprecation_warnings") && ((e, t) => {
                ((e, t) => {
                    const n = fC(e), o = gC(t), r = o.length > 0, s = n.length > 0, a = "mobile" === t.theme;
                    if (r || s || a) {
                        const e = "\n- ", t = a ? `\n\nThemes:${e}mobile` : "",
                            i = r ? `\n\nPlugins:${e}${o.join(e)}` : "", l = s ? `\n\nOptions:${e}${n.join(e)}` : "";
                        console.warn("The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." + t + i + l)
                    }
                })(e, t)
            })(t, r);
            const a = s("suffix");
            a && (n.suffix = a), this.suffix = n.suffix;
            const i = s("base_url");
            i && n._setBaseUrl(i), this.baseUri = n.baseURI;
            const l = Tl(o);
            l && (ya.ScriptLoader._setReferrerPolicy(l), ba.DOM.styleSheetLoader._setReferrerPolicy(l));
            const d = cd(o);
            C(d) && ba.DOM.styleSheetLoader._setContentCssCors(d), _a.languageLoad = s("language_load"), _a.baseURL = n.baseURL, this.setDirty(!1), this.documentBaseURI = new uy(dl(o), {base_uri: this.baseUri}), this.baseURI = this.baseUri, this.inline = nd(o), this.hasVisual = gd(o), this.shortcuts = new MA(this), this.editorCommands = new iA(this), rA(this);
            const c = s("cache_suffix");
            c && (Nt.cacheSuffix = c.replace(/^[\?\&]+/, "")), this.ui = {
                registry: IA(),
                styleSheetLoader: void 0,
                show: S,
                hide: S,
                setEnabled: S,
                isEnabled: L
            }, this.mode = (e => {
                const t = Ca("design"), n = Ca({
                    design: {activate: S, deactivate: S, editorReadOnly: !1},
                    readonly: {activate: S, deactivate: S, editorReadOnly: !0}
                });
                return (e => {
                    e.serializer ? fA(e) : e.on("PreInit", (() => {
                        fA(e)
                    }))
                })(e), (e => {
                    e.on("ShowCaret", (t => {
                        mA(e) && t.preventDefault()
                    })), e.on("ObjectSelected", (t => {
                        mA(e) && t.preventDefault()
                    }))
                })(e), {
                    isReadOnly: () => mA(e), set: o => ((e, t, n, o) => {
                        if (o !== n.get()) {
                            if (!xe(t, o)) throw new Error(`Editor mode '${o}' is invalid`);
                            e.initialized ? OA(e, n, t, o) : e.on("init", (() => OA(e, n, t, o)))
                        }
                    })(e, n.get(), t, o), get: () => t.get(), register: (e, t) => {
                        n.set(((e, t, n) => {
                            if (j(AA, t)) throw new Error(`Cannot override default mode ${t}`);
                            return {
                                ...e, [t]: {
                                    ...n, deactivate: () => {
                                        try {
                                            n.deactivate()
                                        } catch (e) {
                                            console.error(`problem while deactivating editor mode ${t}:`, e)
                                        }
                                    }
                                }
                            }
                        })(n.get(), e, t))
                    }
                }
            })(o), n.dispatch("SetupEditor", {editor: this});
            const g = vd(o);
            w(g) && g.call(o, o)
        }

        render() {
            (e => {
                const t = e.id;
                Sa.setCode(Bl(e));
                const n = () => {
                    DR.unbind(window, "ready", n), e.render()
                };
                if (!ia.Event.domLoaded) return void DR.bind(window, "ready", n);
                if (!e.getElement()) return;
                const o = mn(e.getElement()), r = Xt(o);
                e.on("remove", (() => {
                    q(o.dom.attributes, (e => Yt(o, e.name))), qt(o, r)
                })), e.ui.styleSheetLoader = ((e, t) => ws.forElement(e, {
                    contentCssCors: cd(t),
                    referrerPolicy: Tl(t)
                }))(o, e), nd(e) ? e.inline = !0 : (e.orgVisibility = e.getElement().style.visibility, e.getElement().style.visibility = "hidden");
                const s = e.getElement().form || DR.getParent(t, "form");
                s && (e.formElement = s, od(e) && !Uo(e.getElement()) && (DR.insertAfter(DR.create("input", {
                    type: "hidden",
                    name: t
                }), t), e.hasHiddenInput = !0), e.formEventDelegate = t => {
                    e.dispatch(t.type, t)
                }, DR.bind(s, "submit reset", e.formEventDelegate), e.on("reset", (() => {
                    e.resetContent()
                })), !rd(e) || s.submit.nodeType || s.submit.length || s._mceOldSubmit || (s._mceOldSubmit = s.submit, s.submit = () => (e.editorManager.triggerSave(), e.setDirty(!1), s._mceOldSubmit(s)))), e.windowManager = RC(e), e.notificationManager = _C(e), (e => "xml" === e.options.get("encoding"))(e) && e.on("GetContent", (e => {
                    e.save && (e.content = DR.encode(e.content))
                })), sd(e) && e.on("submit", (() => {
                    e.initialized && e.save()
                })), ad(e) && (e._beforeUnload = () => {
                    !e.initialized || e.destroyed || e.isHidden() || e.save({
                        format: "raw",
                        no_events: !0,
                        set_dirty: !1
                    })
                }, e.editorManager.on("BeforeUnload", e._beforeUnload)), e.editorManager.add(e), MR(e, e.suffix)
            })(this)
        }

        focus(e) {
            this.execCommand("mceFocus", !1, e)
        }

        hasFocus() {
            return Zf(this)
        }

        translate(e) {
            return Sa.translate(e)
        }

        getParam(e, t, n) {
            const o = this.options;
            return o.isRegistered(e) || (C(n) ? o.register(e, {processor: n, default: t}) : o.register(e, {
                processor: L,
                default: t
            })), o.isSet(e) || v(t) ? o.get(e) : t
        }

        hasPlugin(e, t) {
            return !(!j(ud(this), e) || t && void 0 === EC.get(e))
        }

        nodeChanged(e) {
            this._nodeChangeDispatcher.nodeChanged(e)
        }

        addCommand(e, t, n) {
            this.editorCommands.addCommand(e, t, n)
        }

        addQueryStateHandler(e, t, n) {
            this.editorCommands.addQueryStateHandler(e, t, n)
        }

        addQueryValueHandler(e, t, n) {
            this.editorCommands.addQueryValueHandler(e, t, n)
        }

        addShortcut(e, t, n, o) {
            this.shortcuts.add(e, t, n, o)
        }

        execCommand(e, t, n, o) {
            return this.editorCommands.execCommand(e, t, n, o)
        }

        queryCommandState(e) {
            return this.editorCommands.queryCommandState(e)
        }

        queryCommandValue(e) {
            return this.editorCommands.queryCommandValue(e)
        }

        queryCommandSupported(e) {
            return this.editorCommands.queryCommandSupported(e)
        }

        show() {
            const e = this;
            e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = "true" : (FA.show(e.getContainer()), FA.hide(e.id)), e.load(), e.dispatch("show"))
        }

        hide() {
            const e = this;
            e.hidden || (e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (FA.hide(e.getContainer()), FA.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.dispatch("hide"))
        }

        isHidden() {
            return this.hidden
        }

        setProgressState(e, t) {
            this.dispatch("ProgressState", {state: e, time: t})
        }

        load(e = {}) {
            const t = this, n = t.getElement();
            if (t.removed) return "";
            if (n) {
                const o = {...e, load: !0}, r = Uo(n) ? n.value : n.innerHTML, s = t.setContent(r, o);
                return o.no_events || t.dispatch("LoadContent", {...o, element: n}), s
            }
            return ""
        }

        save(e = {}) {
            const t = this;
            let n = t.getElement();
            if (!n || !t.initialized || t.removed) return "";
            const o = {...e, save: !0, element: n};
            let r = t.getContent(o);
            const s = {...o, content: r};
            if (s.no_events || t.dispatch("SaveContent", s), "raw" === s.format && t.dispatch("RawSaveContent", s), r = s.content, Uo(n)) n.value = r; else {
                !e.is_removing && t.inline || (n.innerHTML = r);
                const o = FA.getParent(t.id, "form");
                o && zA(o.elements, (e => e.name !== t.id || (e.value = r, !1)))
            }
            return s.element = o.element = n = null, !1 !== s.set_dirty && t.setDirty(!1), r
        }

        setContent(e, t) {
            return cC(this, e, t)
        }

        getContent(e) {
            return ((e, t = {}) => {
                const n = ((e, t) => ({...e, format: t, get: !0, getInner: !0}))(t, t.format ? t.format : "html");
                return wy(e, n).fold(R, (t => {
                    const n = ((e, t) => Zy(e).editor.getContent(t))(e, t);
                    return xy(e, n, t)
                }))
            })(this, e)
        }

        insertContent(e, t) {
            t && (e = UA({content: e}, t)), this.execCommand("mceInsertContent", !1, e)
        }

        resetContent(e) {
            void 0 === e ? cC(this, this.startContent, {format: "raw"}) : cC(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged()
        }

        isDirty() {
            return !this.isNotDirty
        }

        setDirty(e) {
            const t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.dispatch("dirty")
        }

        getContainer() {
            const e = this;
            return e.container || (e.container = e.editorContainer || FA.get(e.id + "_parent")), e.container
        }

        getContentAreaContainer() {
            return this.contentAreaContainer
        }

        getElement() {
            return this.targetElm || (this.targetElm = FA.get(this.id)), this.targetElm
        }

        getWin() {
            const e = this;
            if (!e.contentWindow) {
                const t = e.iframeElement;
                t && (e.contentWindow = t.contentWindow)
            }
            return e.contentWindow
        }

        getDoc() {
            const e = this;
            if (!e.contentDocument) {
                const t = e.getWin();
                t && (e.contentDocument = t.document)
            }
            return e.contentDocument
        }

        getBody() {
            var e, t;
            const n = this.getDoc();
            return null !== (t = null !== (e = this.bodyElement) && void 0 !== e ? e : null == n ? void 0 : n.body) && void 0 !== t ? t : null
        }

        convertURL(e, t, n) {
            const o = this, r = o.options.get, s = Cd(o);
            return w(s) ? s.call(o, e, n, !0, t) : !r("convert_urls") || "link" === n || f(n) && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r("relative_urls") ? o.documentBaseURI.toRelative(e) : e = o.documentBaseURI.toAbsolute(e, r("remove_script_host"))
        }

        addVisual(e) {
            ((e, t) => {
                ((e, t) => {
                    eC(e).editor.addVisual(t)
                })(e, t)
            })(this, e)
        }

        remove() {
            (e => {
                if (!e.removed) {
                    const {_selectionOverrides: t, editorUpload: n} = e, o = e.getBody(), r = e.getElement();
                    o && e.save({is_removing: !0}), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && C(null == r ? void 0 : r.nextSibling) && pC.remove(r.nextSibling), (e => {
                        e.dispatch("remove")
                    })(e), e.editorManager.remove(e), !e.inline && o && (e => {
                        pC.setStyle(e.id, "display", e.orgDisplay)
                    })(e), (e => {
                        e.dispatch("detach")
                    })(e), pC.remove(e.getContainer()), hC(t), hC(n), e.destroy()
                }
            })(this)
        }

        destroy(e) {
            ((e, t) => {
                const {selection: n, dom: o} = e;
                e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), hC(n), hC(o)), (e => {
                    const t = e.formElement;
                    t && (t._mceOldSubmit && (t.submit = t._mceOldSubmit, delete t._mceOldSubmit), pC.unbind(t, "submit reset", e.formEventDelegate))
                })(e), (e => {
                    const t = e;
                    t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null, t.bodyElement = t.contentDocument = t.contentWindow = null, t.iframeElement = t.targetElm = null;
                    const n = e.selection;
                    if (n) {
                        const e = n.dom;
                        t.selection = n.win = n.dom = e.doc = null
                    }
                })(e), e.destroyed = !0) : e.remove())
            })(this, e)
        }

        uploadImages() {
            return this.editorUpload.uploadImages()
        }

        _scanForImages() {
            return this.editorUpload.scanForImages()
        }
    }

    const HA = ba.DOM, $A = Tt.each;
    let VA, qA = !1, WA = [];
    const KA = e => {
        const t = e.type;
        $A(QA.get(), (n => {
            switch (t) {
                case"scroll":
                    n.dispatch("ScrollWindow", e);
                    break;
                case"resize":
                    n.dispatch("ResizeWindow", e)
            }
        }))
    }, GA = e => {
        if (e !== qA) {
            const t = ba.DOM;
            e ? (t.bind(window, "resize", KA), t.bind(window, "scroll", KA)) : (t.unbind(window, "resize", KA), t.unbind(window, "scroll", KA)), qA = e
        }
    }, YA = e => {
        const t = WA;
        return WA = K(WA, (t => e !== t)), QA.activeEditor === e && (QA.activeEditor = WA.length > 0 ? WA[0] : null), QA.focusedEditor === e && (QA.focusedEditor = null), t.length !== WA.length
    }, XA = "CSS1Compat" !== document.compatMode, QA = {
        ...vA,
        baseURI: null,
        baseURL: null,
        defaultOptions: {},
        documentBaseURL: null,
        suffix: null,
        majorVersion: "6",
        minorVersion: "3.1",
        releaseDate: "2022-12-06",
        i18n: Sa,
        activeEditor: null,
        focusedEditor: null,
        setup() {
            const e = this;
            let t = "", n = "", o = uy.getDocumentBaseUrl(document.location);
            /^[^:]+:\/\/\/?[^\/]+\//.test(o) && (o = o.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(o) || (o += "/"));
            const r = window.tinymce || window.tinyMCEPreInit;
            if (r) t = r.base || r.baseURL, n = r.suffix; else {
                const e = document.getElementsByTagName("script");
                for (let o = 0; o < e.length; o++) {
                    const r = e[o].src || "";
                    if ("" === r) continue;
                    const s = r.substring(r.lastIndexOf("/"));
                    if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)) {
                        -1 !== s.indexOf(".min") && (n = ".min"), t = r.substring(0, r.lastIndexOf("/"));
                        break
                    }
                }
                if (!t && document.currentScript) {
                    const e = document.currentScript.src;
                    -1 !== e.indexOf(".min") && (n = ".min"), t = e.substring(0, e.lastIndexOf("/"))
                }
            }
            var s;
            e.baseURL = new uy(o).toAbsolute(t), e.documentBaseURL = o, e.baseURI = new uy(e.baseURL), e.suffix = n, (s = e).on("AddEditor", O(Yf, s)), s.on("RemoveEditor", O(Xf, s))
        },
        overrideDefaults(e) {
            const t = e.base_url;
            t && this._setBaseUrl(t);
            const n = e.suffix;
            n && (this.suffix = n), this.defaultOptions = e;
            const o = e.plugin_base_urls;
            void 0 !== o && fe(o, ((e, t) => {
                _a.PluginManager.urls[t] = e
            }))
        },
        init(e) {
            const t = this;
            let n;
            const o = Tt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " ");
            let r = e => {
                n = e
            };
            const s = () => {
                let n = 0;
                const a = [];
                let i;
                HA.unbind(window, "ready", s), (n => {
                    const o = e.onpageload;
                    o && o.apply(t, [])
                })(), i = ((e, t) => {
                    const n = [], o = w(t) ? e => H(n, (n => t(n, e))) : e => j(n, e);
                    for (let t = 0, r = e.length; t < r; t++) {
                        const r = e[t];
                        o(r) || n.push(r)
                    }
                    return n
                })((e => Nt.browser.isIE() || Nt.browser.isEdge() ? (DC("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"), []) : XA ? (DC("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), []) : m(e.selector) ? HA.select(e.selector) : C(e.target) ? [e.target] : [])(e)), Tt.each(i, (e => {
                    var n;
                    (n = t.get(e.id)) && n.initialized && !(n.getContainer() || n.getBody()).parentNode && (YA(n), n.unbindAllNativeEvents(), n.destroy(!0), n.removed = !0)
                })), i = Tt.grep(i, (e => !t.get(e.id))), 0 === i.length ? r([]) : $A(i, (s => {
                    ((e, t) => e.inline && t.tagName.toLowerCase() in o)(e, s) ? DC("Could not initialize inline editor on invalid inline target element", s) : ((e, o, s) => {
                        const l = new jA(e, o, t);
                        a.push(l), l.on("init", (() => {
                            ++n === i.length && r(a)
                        })), l.targetElm = l.targetElm || s, l.render()
                    })((e => {
                        let t = e.id;
                        return t || (t = we(e, "name").filter((e => !HA.get(e))).getOrThunk(HA.uniqueId), e.setAttribute("id", t)), t
                    })(s), e, s)
                }))
            };
            return HA.bind(window, "ready", s), new Promise((e => {
                n ? e(n) : r = t => {
                    e(t)
                }
            }))
        },
        get(e) {
            return 0 === arguments.length ? WA.slice(0) : m(e) ? Q(WA, (t => t.id === e)).getOr(null) : x(e) && WA[e] ? WA[e] : null
        },
        add(e) {
            const t = this, n = t.get(e.id);
            return n === e || (null === n && WA.push(e), GA(!0), t.activeEditor = e, t.dispatch("AddEditor", {editor: e}), VA || (VA = e => {
                const n = t.dispatch("BeforeUnload");
                if (n.returnValue) return e.preventDefault(), e.returnValue = n.returnValue, n.returnValue
            }, window.addEventListener("beforeunload", VA))), e
        },
        createEditor(e, t) {
            return this.add(new jA(e, t, this))
        },
        remove(e) {
            const t = this;
            let n;
            if (e) {
                if (!m(e)) return n = e, h(t.get(n.id)) ? null : (YA(n) && t.dispatch("RemoveEditor", {editor: n}), 0 === WA.length && window.removeEventListener("beforeunload", VA), n.remove(), GA(WA.length > 0), n);
                $A(HA.select(e), (e => {
                    n = t.get(e.id), n && t.remove(n)
                }))
            } else for (let e = WA.length - 1; e >= 0; e--) t.remove(WA[e])
        },
        execCommand(e, t, n) {
            var o;
            const r = this, s = f(n) ? null !== (o = n.id) && void 0 !== o ? o : n.index : n;
            switch (e) {
                case"mceAddEditor":
                    if (!r.get(s)) {
                        const e = n.options;
                        new jA(s, e, r).render()
                    }
                    return !0;
                case"mceRemoveEditor": {
                    const e = r.get(s);
                    return e && e.remove(), !0
                }
                case"mceToggleEditor": {
                    const e = r.get(s);
                    return e ? (e.isHidden() ? e.show() : e.hide(), !0) : (r.execCommand("mceAddEditor", !1, n), !0)
                }
            }
            return !!r.activeEditor && r.activeEditor.execCommand(e, t, n)
        },
        triggerSave: () => {
            $A(WA, (e => {
                e.save()
            }))
        },
        addI18n: (e, t) => {
            Sa.add(e, t)
        },
        translate: e => Sa.translate(e),
        setActive(e) {
            const t = this.activeEditor;
            this.activeEditor !== e && (t && t.dispatch("deactivate", {relatedTarget: e}), e.dispatch("activate", {relatedTarget: t})), this.activeEditor = e
        },
        _setBaseUrl(e) {
            this.baseURL = new uy(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new uy(this.baseURL)
        }
    };
    QA.setup();
    const JA = (() => {
        const e = Na();
        return {
            FakeClipboardItem: e => ({items: e, types: ue(e), getType: t => we(e, t).getOrUndefined()}),
            write: t => {
                e.set(t)
            },
            read: () => e.get().getOrUndefined(),
            clear: e.clear
        }
    })(), ZA = Math.min, eO = Math.max, tO = Math.round, nO = (e, t, n) => {
        let o = t.x, r = t.y;
        const s = e.w, a = e.h, i = t.w, l = t.h, d = (n || "").split("");
        return "b" === d[0] && (r += l), "r" === d[1] && (o += i), "c" === d[0] && (r += tO(l / 2)), "c" === d[1] && (o += tO(i / 2)), "b" === d[3] && (r -= a), "r" === d[4] && (o -= s), "c" === d[3] && (r -= tO(a / 2)), "c" === d[4] && (o -= tO(s / 2)), oO(o, r, s, a)
    }, oO = (e, t, n, o) => ({x: e, y: t, w: n, h: o}), rO = {
        inflate: (e, t, n) => oO(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n),
        relativePosition: nO,
        findBestRelativePosition: (e, t, n, o) => {
            for (let r = 0; r < o.length; r++) {
                const s = nO(e, t, o[r]);
                if (s.x >= n.x && s.x + s.w <= n.w + n.x && s.y >= n.y && s.y + s.h <= n.h + n.y) return o[r]
            }
            return null
        },
        intersect: (e, t) => {
            const n = eO(e.x, t.x), o = eO(e.y, t.y), r = ZA(e.x + e.w, t.x + t.w), s = ZA(e.y + e.h, t.y + t.h);
            return r - n < 0 || s - o < 0 ? null : oO(n, o, r - n, s - o)
        },
        clamp: (e, t, n) => {
            let o = e.x, r = e.y, s = e.x + e.w, a = e.y + e.h;
            const i = t.x + t.w, l = t.y + t.h, d = eO(0, t.x - o), c = eO(0, t.y - r), u = eO(0, s - i),
                m = eO(0, a - l);
            return o += d, r += c, n && (s += d, a += c, o -= u, r -= m), s -= u, a -= m, oO(o, r, s - o, a - r)
        },
        create: oO,
        fromClientRect: e => oO(e.left, e.top, e.width, e.height)
    }, sO = (() => {
        const e = {}, t = {};
        return {
            load: (n, o) => {
                const r = `Script at URL "${o}" failed to load`,
                    s = `Script at URL "${o}" did not call \`tinymce.Resource.add('${n}', data)\` within 1 second`;
                if (void 0 !== e[n]) return e[n];
                {
                    const a = new Promise(((e, a) => {
                        const i = ((e, t, n = 1e3) => {
                            let o = !1, r = null;
                            const s = e => (...t) => {
                                o || (o = !0, null !== r && (clearTimeout(r), r = null), e.apply(null, t))
                            }, a = s(e), i = s(t);
                            return {
                                start: (...e) => {
                                    o || null !== r || (r = setTimeout((() => i.apply(null, e)), n))
                                }, resolve: a, reject: i
                            }
                        })(e, a);
                        t[n] = i.resolve, ya.ScriptLoader.loadScript(o).then((() => i.start(s)), (() => i.reject(r)))
                    }));
                    return e[n] = a, a
                }
            }, add: (n, o) => {
                void 0 !== t[n] && (t[n](o), delete t[n]), e[n] = Promise.resolve(o)
            }, unload: t => {
                delete e[t]
            }
        }
    })();
    let aO;
    try {
        const e = "__storage_test__";
        aO = window.localStorage, aO.setItem(e, e), aO.removeItem(e)
    } catch (e) {
        aO = (() => {
            let e = {}, t = [];
            const n = {
                getItem: t => e[t] || null, setItem: (n, o) => {
                    t.push(n), e[n] = String(o)
                }, key: e => t[e], removeItem: n => {
                    t = t.filter((e => e === n)), delete e[n]
                }, clear: () => {
                    t = [], e = {}
                }, length: 0
            };
            return Object.defineProperty(n, "length", {get: () => t.length, configurable: !1, enumerable: !1}), n
        })()
    }
    const iO = {
        geom: {Rect: rO},
        util: {
            Delay: qf,
            Tools: Tt,
            VK: Dm,
            URI: uy,
            EventDispatcher: hA,
            Observable: vA,
            I18n: Sa,
            LocalStorage: aO,
            ImageUploader: e => {
                const t = IC(), n = jC(e, t);
                return {upload: (t, o = !0) => n.upload(t, o ? zC(e) : void 0)}
            }
        },
        dom: {
            EventUtils: ia,
            TreeWalker: Ro,
            TextSeeker: Ka,
            DOMUtils: ba,
            ScriptLoader: ya,
            RangeUtils: mf,
            Serializer: dC,
            StyleSheetLoader: Cs,
            ControlSelection: Fm,
            BookmarkManager: _m,
            Selection: aC,
            Event: ia.Event
        },
        html: {Styles: Js, Entities: Fs, Node: pg, Schema: Qs, DomParser: yy, Writer: Sg, Serializer: _g},
        Env: Nt,
        AddOnManager: _a,
        Annotator: Sm,
        Formatter: ZC,
        UndoManager: tw,
        EditorCommands: iA,
        WindowManager: RC,
        NotificationManager: _C,
        EditorObservable: SA,
        Shortcuts: MA,
        Editor: jA,
        FocusManager: Vf,
        EditorManager: QA,
        DOM: ba.DOM,
        ScriptLoader: ya.ScriptLoader,
        PluginManager: EC,
        ThemeManager: NC,
        ModelManager: vC,
        IconManager: bC,
        Resource: sO,
        FakeClipboard: JA,
        trim: Tt.trim,
        isArray: Tt.isArray,
        is: Tt.is,
        toArray: Tt.toArray,
        makeMap: Tt.makeMap,
        each: Tt.each,
        map: Tt.map,
        grep: Tt.grep,
        inArray: Tt.inArray,
        extend: Tt.extend,
        walk: Tt.walk,
        resolve: Tt.resolve,
        explode: Tt.explode,
        _addCacheSuffix: Tt._addCacheSuffix
    }, lO = Tt.extend(QA, iO);
    (e => {
        window.tinymce = e, window.tinyMCE = e
    })(lO), (e => {
        if ("object" == typeof module) try {
            module.exports = e
        } catch (e) {
        }
    })(lO)
}();
tinymce.overrideDefaults({promotion: false});

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.7.0-15
 */

!function () {
    "use strict";

    function n(r) {
        return function (n) {
            return t = typeof (n = n), (null === n ? "null" : "object" == t && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : t) === r;
            var t
        }
    }

    function t(n, t) {
        return {isRequired: n, applyPatch: t}
    }

    function u(e, i) {
        return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            var r = i.apply(this, n), r = d(r) ? n : r;
            return e.apply(this, r)
        }
    }

    function r() {
        return l
    }

    function e(n, t) {
        for (var r = function (n, t) {
            for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
                var o = n[i];
                e[i] = t(o, i)
            }
            return e
        }(n, t), e = [], i = 0, o = r.length; i < o; ++i) {
            if (!p(r[i])) throw new Error("Arr.flatten item " + i + " was not an array, input: " + r);
            y.apply(e, r[i])
        }
        return e
    }

    function a(r) {
        return function (n, t) {
            r[t] = n
        }
    }

    function i(c) {
        return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            if (0 === n.length) throw new Error("Can't merge zero objects");
            for (var r, e, i = {}, o = 0; o < n.length; o++) {
                var u, a = n[o];
                for (u in a) r = a, e = u, w.call(r, e) && (i[u] = c(i[u], a[u]))
            }
            return i
        }
    }

    function o(n) {
        var t;
        return null != (t = n.defaultOptions) ? t : n.defaultSettings
    }

    function c(n, t) {
        var n = j(n, t), r = A(t.plugins), e = n.custom_plugin_urls || {}, e = E(e, function (n, t) {
            return h(r, t)
        }), n = n.external_plugins || {}, i = {}, e = (b(e.t, function (n, t) {
            i[t] = n
        }), x(i, n)), n = 0 === m(e).length ? {} : {external_plugins: e};
        return x(t, n)
    }

    var f, l, s = n("object"), p = n("array"), d = (f = void 0, function (n) {
            return f === n
        }), g = "undefined" != typeof window ? window : Function("return this;")(), v = (l = !0, Array.prototype.indexOf),
        y = Array.prototype.push, h = function (n, t) {
            return -1 < v.call(n, t)
        }, m = Object.keys, w = Object.hasOwnProperty, b = function (n, t) {
            for (var r = m(n), e = 0, i = r.length; e < i; e++) {
                var o = r[e];
                t(n[o], o)
            }
        }, E = function (n, t) {
            var r, e, i, o = {}, u = {};
            return r = t, e = a(o), i = a(u), b(n, function (n, t) {
                (r(n, t) ? e : i)(n, t)
            }), {t: o, f: u}
        }, j = i(function (n, t) {
            return s(n) && s(t) ? j(n, t) : t
        }), x = i(function (n, t) {
            return t
        }), A = function (n) {
            if (d(n) || "" === n) return [];
            n = p(n) ? e(n, function (n) {
                return n.split(/[\s+,]/)
            }) : n.split(/[\s+,]/);
            return e(n, function (n) {
                return 0 < n.length ? [n.trim()] : []
            })
        }, _ = t(r, function (r) {
            var n = r.EditorManager;
            n.init = u(n.init, function (n) {
                return [c(o(r), n)]
            }), n.createEditor = u(n.createEditor, function (n, t) {
                return [n, c(o(r), t)]
            })
        });

    function M(n, t, r) {
        if (r || 2 === arguments.length) for (var e, i = 0, o = t.length; i < o; i++) !e && i in t || ((e = e || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
        return n.concat(e || Array.prototype.slice.call(t))
    }

    function O(n) {
        return parseInt(n, 10)
    }

    function R(n, t) {
        return 0 == (n -= t) ? 0 : 0 < n ? 1 : -1
    }

    function S(n, t, r) {
        return {major: n, minor: t, patch: r}
    }

    function I(n, t) {
        return !!n && -1 === q(N(n), L(t))
    }

    function P(e, i) {
        return function (n) {
            var t = A(n.plugins), r = V(i), r = 0 < r.length ? t.concat(r) : t;
            return [e.util.Tools.extend({}, n, {plugins: r})]
        }
    }

    function C() {
        return (new Date).getTime()
    }

    function D(r) {
        return function () {
            n = "position";
            var n, t = (((t = r).currentStyle || window.getComputedStyle(t, null))[n] || "").toLowerCase();
            return "absolute" === t || "fixed" === t
        }
    }

    function U(n) {
        n.parentNode.removeChild(n)
    }

    function T(n) {
        var t = n, r = [$, G, k, _];
        if (t) for (var e = 0; e < r.length; e++) r[e].isRequired(t) && r[e].applyPatch(t)
    }

    var L = function (n) {
        n = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
        return n ? S(O(n[1]), O(n[2]), O(n[3])) : S(0, 0, 0)
    }, q = function (n, t) {
        var r = R(n.major, t.major);
        if (0 !== r) return r;
        r = R(n.minor, t.minor);
        if (0 !== r) return r;
        r = R(n.patch, t.patch);
        return 0 !== r ? r : 0
    }, N = function (n) {
        return L([n.majorVersion, n.minorVersion].join(".").split(".").slice(0, 3).join("."))
    }, V = function (n) {
        n = o(n).forced_plugins;
        return n || []
    }, k = t(function (n) {
        return I(n, "4.7.0")
    }, function (n) {
        var r = n, e = r.EditorManager;
        e.init = u(e.init, P(r, e)), e.createEditor = u(e.createEditor, function (n, t) {
            return M([n], P(r, e)(t), !0)
        })
    }), z = function (n, t, r, e, i) {
        var o = C(), u = setInterval(function () {
            n() && (clearInterval(u), t()), C() - o > i && (clearInterval(u), r())
        }, e)
    }, B = function (n, t) {
        (r = document.createElement("div")).style.display = "none", r.className = "mce-floatpanel";
        var r, e = r;
        document.body.appendChild(e), z(D(e), function () {
            U(e), n()
        }, function () {
            U(e), t()
        }, 10, 5e3)
    }, F = function (n, t) {
        n.notificationManager ? n.notificationManager.open({
            text: t,
            type: "warning",
            timeout: 0,
            icon: ""
        }) : n.windowManager.alert(t)
    }, $ = t(function (n) {
        return "function" != typeof n.overrideDefaults
    }, function (n) {
        var t, e, r = n, i = r.EditorManager, o = (r.EditorManager.on("AddEditor", function (n) {
            var t = n.editor, r = t.settings.service_message;
            r && B(function () {
                F(t, r)
            }, function () {
                window.alert(r)
            })
        }), t = r, function (n) {
            return [t.util.Tools.extend({}, this.defaultSettings, n)]
        });
        n.overrideDefaults = (e = r, function (n) {
            var t = e.util.URI, r = n.base_url,
                r = (r && (this.baseURL = new t(this.documentBaseURL).toAbsolute(r.replace(/\/+$/, "")), this.baseURI = new t(this.baseURL)), n.suffix);
            r && (this.suffix = r), this.defaultSettings = n
        }), i.init = u(i.init, o), i.createEditor = u(i.createEditor, function (n, t) {
            return M([n], o.call(i, t), !0)
        })
    }), G = t(function (n) {
        return I(n, "4.5.0")
    }, function (n) {
        var e;
        n.overrideDefaults = u(n.overrideDefaults, (e = n, function (n) {
            var t, r = n.plugin_base_urls;
            for (t in r) e.PluginManager.urls[t] = r[t]
        }))
    });
    T(g.tinymce)
}();

(function (cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
})({
    "rtc_tenant_id": "no-origin",
    "editimage_api_key": "no-origin",
    "imagetools_proxy": "https://imageproxy.tiny.cloud/2/image",
    "autocorrect_service_url": "https://spelling.tiny.cloud",
    "suffix": ".min",
    "linkchecker_service_url": "https://hyperlinking.tiny.cloud",
    "spellchecker_rpc_url": "https://spelling.tiny.cloud",
    "spellchecker_api_key": "no-origin",
    "tinydrive_service_url": "https://catalog.tiny.cloud",
    "api_key": "no-origin",
    "imagetools_api_key": "no-origin",
    "tinydrive_api_key": "no-origin",
    "export_image_proxy_service_url": "https://imageproxy.tiny.cloud",
    "forced_plugins": ["chiffer"],
    "referrer_policy": "origin",
    "content_css_cors": true,
    "custom_plugin_urls": {},
    "chiffer_snowplow_service_url": "https://sp.tinymce.com/i",
    "mediaembed_api_key": "no-origin",
    "promotion": false,
    "rtc_service_url": "https://rtc.tiny.cloud",
    "editimage_proxy_service_url": "https://imageproxy.tiny.cloud",
    "linkchecker_api_key": "no-origin",
    "mediaembed_service_url": "https://hyperlinking.tiny.cloud",
    "service_message": "We’re unable to check your domain because the referer header is missing. Please read the \u003ca target=\"_blank\" href=\"https://www.tiny.cloud/docs/tinymce/6/cloud-troubleshooting/\"\u003eGuide\u003c/a\u003e on how to ensure your referer header is present, so we can then customize your editor experience."
});
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-origin/tinymce/6.3.1-12"

/* Ephox chiffer plugin
*
* Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
*
* Version: 2.1.0-21
*/

!function () {
    "use strict";

    function e(t) {
        return !p(t)
    }

    function s() {
    }

    function u(t, n, o, r) {
        for (var e = t, c = function (t, e) {
            (n(t, e) ? o : r)(t, e)
        }, a = g(e), i = 0, s = a.length; i < s; i++) {
            var u = a[i];
            c(e[u], u)
        }
    }

    function l(t, e) {
        return -1 < P.call(t, e)
    }

    function d(t) {
        return "plugin_".concat(t, "_loaded")
    }

    function f() {
        return (new Date).getTime()
    }

    n = "string";
    var n, o, r, t, c, a, i = function (t) {
            return e = typeof (t = t), (null === t ? "null" : "object" == e && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == e && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : e) === n;
            var e
        }, m = (o = void 0, function (t) {
            return o === t
        }), p = function (t) {
            return null == t
        }, g = Object.keys, _ = Object.hasOwnProperty, y = function (t, e) {
            return _.call(t, e)
        }, v = {mceInsertToc: "toc_insert", mceUpdateToc: "toc_update"}, S = {
            mceEditImage: "imagetools_open_dialog",
            mceImageRotateLeft: "imagetools_rotate",
            mceImageRotateRight: "imagetools_rotate",
            mceImageFlipVertical: "imagetools_flip",
            mceImageFlipHorizontal: "imagetools_flip"
        }, h = {InsertUnorderedList: !0, InsertOrderedList: !0}, I = {
            mceInsertTemplate: "template_insert",
            mceInsertDate: "insertdatetime_insert",
            mceInsertTime: "insertdatetime_insert",
            mcePreview: "preview_open_dialog",
            mceAnchor: "anchor_open_dialog"
        }, w = function (t) {
            if (e(t.value) && y(t.value, "list-style-type")) return t = t.value["list-style-type"], "advlist_".concat("" === t ? "default" : t)
        }, P = Array.prototype.indexOf, b = function (t, e) {
            for (var n = 0, o = t.length; n < o; n++) e(t[n], n)
        },
        k = ["a11ychecker", "advcode", "advtable", "autocorrect", "casechange", "checklist", "editimage", "export", "footnotes", "formatpainter", "inlinecss", "linkchecker", "mediaembed", "mentions", "mergetags", "pageembed", "permanentpen", "powerpaste", "rtc", "tableofcontents", "tinycomments", "tinydrive", "tinymcespellchecker", "typography"],
        O = function (t) {
            u(t, function (t, e) {
                t = !!t.isStub;
                return !!e && !t && l(k, e)
            }, (n = t = {}, function (t, e) {
                n[e] = t
            }), s);
            for (var n, e = g(t), o = d, r = e.length, c = new Array(r), a = 0; a < r; a++) {
                var i = e[a];
                c[a] = o(i, a)
            }
            return c
        }, R = function (s, u) {
            return {
                send: function (t, e, n) {
                    function o(t) {
                        return function () {
                            i.onload = null, i.onerror = null, n(t)
                        }
                    }

                    var r = u, c = f(),
                        a = "undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA",
                        r = "?aid=".concat(r, "&tna=").concat("tinymce_cloud", "&p=").concat("web", "&dtm=").concat(e, "&stm=").concat(c, "&tz=").concat(a, "&e=").concat("se", "&se_ca=").concat(t),
                        i = document.createElement("img");
                    i.src = s.chiffer_snowplow_service_url + r;
                    i.onload = o(!0), i.onerror = o(!1)
                }
            }
        }, T = function (e) {
            return {
                sendStat: function (t) {
                    e.send(t, f(), s)
                }
            }
        };
    t = null != (t = tinymce.defaultOptions) ? t : tinymce.defaultSettings, c = {load: s}, a = function (t) {
        t = t.api_key;
        return i(t) ? t : void 0
    }(t), c = void 0 === a ? c : ((r = function (t, e) {
        t = R(t, e);
        return T(t)
    }(t, a)).sendStat("script_load"), {
        load: function (n) {
            n.once("init", function () {
                return r.sendStat("init")
            }), n.once("focus", function () {
                return r.sendStat("focus")
            }), n.on("ExportPdf", function () {
                return r.sendStat("export_pdf")
            }), n.on("InlineCSS", function () {
                return r.sendStat("inlinecss_get_content")
            }), n.on("PastePreProcess PowerPasteTempStats", function (t) {
                t = t.source;
                e(t) && r.sendStat("powerpaste_".concat(t))
            }), n.on("VisualChars", function (t) {
                !0 === t.state && r.sendStat("visualchars_true")
            }), n.on("RtcSessionConnected", function (t) {
                var e = t.time;
                switch (e) {
                    case 0:
                        r.sendStat("rtc_started");
                        break;
                    case 5:
                    case 10:
                    case 20:
                        r.sendStat("rtc_connected_".concat(e, "min"))
                }
            }), n.on("RtcSessionError", function () {
                return r.sendStat("rtc_error")
            }), n.on("RtcSessionDirty", function () {
                return r.sendStat("rtc_edited")
            }), n.on("SpellcheckerLanguageChanged", function (t) {
                t = t.language;
                r.sendStat("spellcheckerpro_language_changed_".concat(t))
            }), n.on("ExecCommand", function (t) {
                e = (t = t).command;
                var e, t = y(h, e) ? w(t) : y(S, e) ? S[e] : y(v, e) ? v[e] : y(I, e) ? I[e] : void 0;
                m(t) || r.sendStat(t)
            }), n.on("PreInit", function () {
                var t = r, e = n.plugins;
                e = O(e), b(e, t.sendStat)
            })
        }
    }), tinymce.PluginManager.add("chiffer", c.load)
}();
