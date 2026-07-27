import {
    r as l,
    v as Sr
} from "./index-yzCs2v45.js";
import {
    c as fe
} from "./clsx-B-dksMZM.js";
import {
    w as Er,
    c as ae,
    s as ie,
    i as ee,
    u as tr,
    r as we,
    a as ar,
    g as kr,
    J as nr,
    b as k,
    d as J,
    L as z,
    e as Br,
    S as Tr,
    f as Cr,
    h as de,
    j as Dr,
    m as Lr,
    k as _r,
    l as Mr,
    n as pe,
    o as Pe,
    p as _,
    q as $r,
    D as me,
    t as Rr,
    v as Nr,
    x as Se,
    y as Kr,
    z as $,
    A as zr,
    B as Wr,
    E as Te,
    F as Fr,
    Z as ye,
    G as qr,
    H as Gr,
    I as Ce,
    K as Vr,
    M as N,
    N as Ur,
    O as Xr,
    P as U,
    Q as Yr,
    U as W,
    V as G,
    W as F,
    _ as V,
    $ as ir,
    a0 as or,
    a1 as lr,
    a2 as Hr,
    a3 as Zr,
    a4 as De,
    a5 as Jr,
    a6 as Le,
    a7 as Qr,
    a8 as et,
    a9 as rt,
    aa as tt,
    ab as at,
    ac as sr,
    ad as nt,
    ae as it,
    af as ot,
    ag as lt,
    ah as st,
    ai as ur,
    aj as ut,
    ak as ct,
    al as vt,
    am as _e,
    an as cr,
    ao as ft,
    ap as vr,
    aq as dt,
    ar as pt,
    as as mt,
    at as yt,
    au as ht,
    av as Me,
    aw as bt,
    ax as gt
} from "./CartesianChart-p6Cli70d.js";
import {
    i as xt
} from "./tiny-invariant-CopsF_GD.js";
const fr = Math.cos,
    oe = Math.sin,
    D = Math.sqrt,
    le = Math.PI,
    he = 2 * le,
    Ee = {
        draw(e, r) {
            const t = D(r / le);
            e.moveTo(t, 0), e.arc(0, 0, t, 0, he)
        }
    },
    Pt = {
        draw(e, r) {
            const t = D(r / 5) / 2;
            e.moveTo(-3 * t, -t), e.lineTo(-t, -t), e.lineTo(-t, -3 * t), e.lineTo(t, -3 * t), e.lineTo(t, -t), e.lineTo(3 * t, -t), e.lineTo(3 * t, t), e.lineTo(t, t), e.lineTo(t, 3 * t), e.lineTo(-t, 3 * t), e.lineTo(-t, t), e.lineTo(-3 * t, t), e.closePath()
        }
    },
    dr = D(1 / 3),
    Ot = dr * 2,
    It = {
        draw(e, r) {
            const t = D(r / Ot),
                a = t * dr;
            e.moveTo(0, -t), e.lineTo(a, 0), e.lineTo(0, t), e.lineTo(-a, 0), e.closePath()
        }
    },
    At = {
        draw(e, r) {
            const t = D(r),
                a = -t / 2;
            e.rect(a, a, t, t)
        }
    },
    jt = .8908130915292852,
    pr = oe(le / 10) / oe(7 * le / 10),
    wt = oe(he / 10) * pr,
    St = -fr(he / 10) * pr,
    Et = {
        draw(e, r) {
            const t = D(r * jt),
                a = wt * t,
                i = St * t;
            e.moveTo(0, -t), e.lineTo(a, i);
            for (let n = 1; n < 5; ++n) {
                const o = he * n / 5,
                    s = fr(o),
                    u = oe(o);
                e.lineTo(u * t, -s * t), e.lineTo(s * a - u * i, u * a + s * i)
            }
            e.closePath()
        }
    },
    be = D(3),
    kt = {
        draw(e, r) {
            const t = -D(r / (be * 3));
            e.moveTo(0, t * 2), e.lineTo(-be * t, -t), e.lineTo(be * t, -t), e.closePath()
        }
    },
    B = -.5,
    T = D(3) / 2,
    Oe = 1 / D(12),
    Bt = (Oe / 2 + 1) * 3,
    Tt = {
        draw(e, r) {
            const t = D(r / Bt),
                a = t / 2,
                i = t * Oe,
                n = a,
                o = t * Oe + t,
                s = -n,
                u = o;
            e.moveTo(a, i), e.lineTo(n, o), e.lineTo(s, u), e.lineTo(B * a - T * i, T * a + B * i), e.lineTo(B * n - T * o, T * n + B * o), e.lineTo(B * s - T * u, T * s + B * u), e.lineTo(B * a + T * i, B * i - T * a), e.lineTo(B * n + T * o, B * o - T * n), e.lineTo(B * s + T * u, B * u - T * s), e.closePath()
        }
    };

function Ct(e, r) {
    let t = null,
        a = Er(i);
    e = typeof e == "function" ? e : ae(e || Ee), r = typeof r == "function" ? r : ae(r === void 0 ? 64 : +r);

    function i() {
        let n;
        if (t || (t = n = a()), e.apply(this, arguments).draw(t, +r.apply(this, arguments)), n) return t = null, n + "" || null
    }
    return i.type = function(n) {
        return arguments.length ? (e = typeof n == "function" ? n : ae(n), i) : e
    }, i.size = function(n) {
        return arguments.length ? (r = typeof n == "function" ? n : ae(+n), i) : r
    }, i.context = function(n) {
        return arguments.length ? (t = n ? ? null, i) : t
    }, i
}
var Dt = ["type", "size", "sizeType"];

function Ie() {
    return Ie = Object.assign ? Object.assign.bind() : function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
        }
        return e
    }, Ie.apply(null, arguments)
}

function $e(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r && (a = a.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), t.push.apply(t, a)
    }
    return t
}

function Re(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? $e(Object(t), !0).forEach(function(a) {
            Lt(e, a, t[a])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $e(Object(t)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
        })
    }
    return e
}

function Lt(e, r, t) {
    return (r = _t(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function _t(e) {
    var r = Mt(e, "string");
    return typeof r == "symbol" ? r : r + ""
}

function Mt(e, r) {
    if (typeof e != "object" || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
        var a = t.call(e, r);
        if (typeof a != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (r === "string" ? String : Number)(e)
}

function $t(e, r) {
    if (e == null) return {};
    var t, a, i = Rt(e, r);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (a = 0; a < n.length; a++) t = n[a], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
}

function Rt(e, r) {
    if (e == null) return {};
    var t = {};
    for (var a in e)
        if ({}.hasOwnProperty.call(e, a)) {
            if (r.indexOf(a) !== -1) continue;
            t[a] = e[a]
        }
    return t
}
var mr = {
        symbolCircle: Ee,
        symbolCross: Pt,
        symbolDiamond: It,
        symbolSquare: At,
        symbolStar: Et,
        symbolTriangle: kt,
        symbolWye: Tt
    },
    Nt = Math.PI / 180,
    Kt = e => {
        var r = "symbol".concat(tr(e));
        return mr[r] || Ee
    },
    zt = (e, r, t) => {
        if (r === "area") return e;
        switch (t) {
            case "cross":
                return 5 * e * e / 9;
            case "diamond":
                return .5 * e * e / Math.sqrt(3);
            case "square":
                return e * e;
            case "star":
                {
                    var a = 18 * Nt;
                    return 1.25 * e * e * (Math.tan(a) - Math.tan(a * 2) * Math.tan(a) ** 2)
                }
            case "triangle":
                return Math.sqrt(3) * e * e / 4;
            case "wye":
                return (21 - 10 * Math.sqrt(3)) * e * e / 8;
            default:
                return Math.PI * e * e / 4
        }
    },
    Wt = (e, r) => {
        mr["symbol".concat(tr(e))] = r
    },
    yr = e => {
        var {
            type: r = "circle",
            size: t = 64,
            sizeType: a = "area"
        } = e, i = $t(e, Dt), n = Re(Re({}, i), {}, {
            type: r,
            size: t,
            sizeType: a
        }), o = "circle";
        typeof r == "string" && (o = r);
        var s = () => {
                var p = Kt(o),
                    m = Ct().type(p).size(zt(t, a, o)),
                    h = m();
                if (h !== null) return h
            },
            {
                className: u,
                cx: c,
                cy: d
            } = n,
            f = ie(n);
        return ee(c) && ee(d) && ee(t) ? l.createElement("path", Ie({}, f, {
            className: fe("recharts-symbols", u),
            transform: "translate(".concat(c, ", ").concat(d, ")"),
            d: s()
        })) : null
    };
yr.registerSymbol = Wt;
var hr = e => null;
hr.displayName = "Cell";
var ge = {},
    Ne;

function Ft() {
    return Ne || (Ne = 1, (function(e) {
        Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });

        function r(t) {
            if (typeof t != "object" || t == null) return !1;
            if (Object.getPrototypeOf(t) === null) return !0;
            if (Object.prototype.toString.call(t) !== "[object Object]") {
                const i = t[Symbol.toStringTag];
                return i == null || !Object.getOwnPropertyDescriptor(t, Symbol.toStringTag) ? .writable ? !1 : t.toString() === `[object ${i}]`
            }
            let a = t;
            for (; Object.getPrototypeOf(a) !== null;) a = Object.getPrototypeOf(a);
            return Object.getPrototypeOf(t) === a
        }
        e.isPlainObject = r
    })(ge)), ge
}
var xe, Ke;

function qt() {
    return Ke || (Ke = 1, xe = Ft().isPlainObject), xe
}
var Gt = qt();
const Vt = Sr(Gt);
var ze, We, Fe, qe, Ge;

function Ve(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r && (a = a.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), t.push.apply(t, a)
    }
    return t
}

function Ue(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? Ve(Object(t), !0).forEach(function(a) {
            Ut(e, a, t[a])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ve(Object(t)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
        })
    }
    return e
}

function Ut(e, r, t) {
    return (r = Xt(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function Xt(e) {
    var r = Yt(e, "string");
    return typeof r == "symbol" ? r : r + ""
}

function Yt(e, r) {
    if (typeof e != "object" || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
        var a = t.call(e, r);
        if (typeof a != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (r === "string" ? String : Number)(e)
}

function se() {
    return se = Object.assign ? Object.assign.bind() : function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
        }
        return e
    }, se.apply(null, arguments)
}

function Q(e, r) {
    return r || (r = e.slice(0)), Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(r)
        }
    }))
}
var Xe = (e, r, t, a, i) => {
        var n = t - a,
            o;
        return o = J(ze || (ze = Q(["M ", ",", ""])), e, r), o += J(We || (We = Q(["L ", ",", ""])), e + t, r), o += J(Fe || (Fe = Q(["L ", ",", ""])), e + t - n / 2, r + i), o += J(qe || (qe = Q(["L ", ",", ""])), e + t - n / 2 - a, r + i), o += J(Ge || (Ge = Q(["L ", ",", " Z"])), e, r), o
    },
    Ht = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
    },
    Zt = e => {
        var r = we(e, Ht),
            {
                x: t,
                y: a,
                upperWidth: i,
                lowerWidth: n,
                height: o,
                className: s
            } = r,
            {
                animationEasing: u,
                animationDuration: c,
                animationBegin: d,
                isUpdateAnimationActive: f
            } = r,
            p = l.useRef(null),
            [m, h] = l.useState(-1),
            b = l.useRef(i),
            g = l.useRef(n),
            v = l.useRef(o),
            y = l.useRef(t),
            x = l.useRef(a),
            P = ar(e, "trapezoid-");
        if (l.useEffect(() => {
                if (p.current && p.current.getTotalLength) try {
                    var A = p.current.getTotalLength();
                    A && h(A)
                } catch {}
            }, []), t !== +t || a !== +a || i !== +i || n !== +n || o !== +o || i === 0 && n === 0 || o === 0) return null;
        var j = fe("recharts-trapezoid", s);
        if (!f) return l.createElement("g", null, l.createElement("path", se({}, ie(r), {
            className: j,
            d: Xe(t, a, i, n, o)
        })));
        var I = b.current,
            O = g.current,
            L = v.current,
            C = y.current,
            w = x.current,
            E = "0px ".concat(m === -1 ? 1 : m, "px"),
            X = "".concat(m, "px ").concat(m, "px"),
            te = kr(["strokeDasharray"], c, u);
        return l.createElement(nr, {
            animationId: P,
            key: P,
            canBegin: m > 0,
            duration: c,
            easing: u,
            isActive: f,
            begin: d
        }, A => {
            var K = k(I, i, A),
                q = k(O, n, A),
                M = k(L, o, A),
                Y = k(C, t, A),
                H = k(w, a, A);
            p.current && (b.current = K, g.current = q, v.current = M, y.current = Y, x.current = H);
            var Z = A > 0 ? {
                transition: te,
                strokeDasharray: X
            } : {
                strokeDasharray: E
            };
            return l.createElement("path", se({}, ie(r), {
                className: j,
                d: Xe(Y, H, K, q, M),
                ref: p,
                style: Ue(Ue({}, Z), r.style)
            }))
        })
    },
    Jt = ["option", "shapeType", "activeClassName", "inActiveClassName"];

function Qt(e, r) {
    if (e == null) return {};
    var t, a, i = ea(e, r);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (a = 0; a < n.length; a++) t = n[a], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
}

function ea(e, r) {
    if (e == null) return {};
    var t = {};
    for (var a in e)
        if ({}.hasOwnProperty.call(e, a)) {
            if (r.indexOf(a) !== -1) continue;
            t[a] = e[a]
        }
    return t
}

function Ye(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r && (a = a.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), t.push.apply(t, a)
    }
    return t
}

function ue(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? Ye(Object(t), !0).forEach(function(a) {
            ra(e, a, t[a])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ye(Object(t)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
        })
    }
    return e
}

function ra(e, r, t) {
    return (r = ta(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function ta(e) {
    var r = aa(e, "string");
    return typeof r == "symbol" ? r : r + ""
}

function aa(e, r) {
    if (typeof e != "object" || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
        var a = t.call(e, r);
        if (typeof a != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (r === "string" ? String : Number)(e)
}

function na(e, r) {
    return ue(ue({}, r), e)
}

function ia(e, r) {
    return e === "symbols"
}

function He(e) {
    var {
        shapeType: r,
        elementProps: t
    } = e;
    switch (r) {
        case "rectangle":
            return l.createElement(Cr, t);
        case "trapezoid":
            return l.createElement(Zt, t);
        case "sector":
            return l.createElement(Tr, t);
        case "symbols":
            if (ia(r)) return l.createElement(yr, t);
            break;
        case "curve":
            return l.createElement(Br, t);
        default:
            return null
    }
}

function oa(e) {
    return l.isValidElement(e) ? e.props : e
}

function la(e) {
    var {
        option: r,
        shapeType: t,
        activeClassName: a = "recharts-active-shape",
        inActiveClassName: i = "recharts-shape"
    } = e, n = Qt(e, Jt), o;
    if (l.isValidElement(r)) o = l.cloneElement(r, ue(ue({}, n), oa(r)));
    else if (typeof r == "function") o = r(n, n.index);
    else if (Vt(r) && typeof r != "boolean") {
        var s = na(r, n);
        o = l.createElement(He, {
            shapeType: t,
            elementProps: s
        })
    } else {
        var u = n;
        o = l.createElement(He, {
            shapeType: t,
            elementProps: u
        })
    }
    return n.isActive ? l.createElement(z, {
        className: a
    }, o) : l.createElement(z, {
        className: i
    }, o)
}
var br = (e, r, t) => {
        var a = de();
        return (i, n) => o => {
            e ? .(i, n, o), a(Dr({
                activeIndex: String(n),
                activeDataKey: r,
                activeCoordinate: i.tooltipPosition,
                activeGraphicalItemId: t
            }))
        }
    },
    gr = e => {
        var r = de();
        return (t, a) => i => {
            e ? .(t, a, i), r(Lr())
        }
    },
    xr = (e, r, t) => {
        var a = de();
        return (i, n) => o => {
            e ? .(i, n, o), a(_r({
                activeIndex: String(n),
                activeDataKey: r,
                activeCoordinate: i.tooltipPosition,
                activeGraphicalItemId: t
            }))
        }
    },
    Ze = (e, r, t) => {
        var a = t ? ? e;
        if (!pe(a)) return Pe(a, r, 0)
    },
    sa = (e, r, t) => {
        var a = {},
            i = e.filter(Mr),
            n = e.filter(c => c.stackId == null),
            o = i.reduce((c, d) => {
                var f = c[d.stackId];
                return f == null && (f = []), f.push(d), c[d.stackId] = f, c
            }, a),
            s = Object.entries(o).map(c => {
                var d, [f, p] = c,
                    m = p.map(b => b.dataKey),
                    h = Ze(r, t, (d = p[0]) === null || d === void 0 ? void 0 : d.barSize);
                return {
                    stackId: f,
                    dataKeys: m,
                    barSize: h
                }
            }),
            u = n.map(c => {
                var d = [c.dataKey].filter(p => p != null),
                    f = Ze(r, t, c.barSize);
                return {
                    stackId: void 0,
                    dataKeys: d,
                    barSize: f
                }
            });
        return [...s, ...u]
    };

function Je(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r && (a = a.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), t.push.apply(t, a)
    }
    return t
}

function ne(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? Je(Object(t), !0).forEach(function(a) {
            ua(e, a, t[a])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Je(Object(t)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
        })
    }
    return e
}

function ua(e, r, t) {
    return (r = ca(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function ca(e) {
    var r = va(e, "string");
    return typeof r == "symbol" ? r : r + ""
}

function va(e, r) {
    if (typeof e != "object" || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
        var a = t.call(e, r);
        if (typeof a != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (r === "string" ? String : Number)(e)
}

function fa(e, r, t, a, i) {
    var n, o = a.length;
    if (!(o < 1)) {
        var s = Pe(e, t, 0, !0),
            u, c = [];
        if (_((n = a[0]) === null || n === void 0 ? void 0 : n.barSize)) {
            var d = !1,
                f = t / o,
                p = a.reduce((y, x) => y + (x.barSize || 0), 0);
            p += (o - 1) * s, p >= t && (p -= (o - 1) * s, s = 0), p >= t && f > 0 && (d = !0, f *= .9, p = o * f);
            var m = (t - p) / 2 >> 0,
                h = {
                    offset: m - s,
                    size: 0
                };
            u = a.reduce((y, x) => {
                var P, j = {
                        stackId: x.stackId,
                        dataKeys: x.dataKeys,
                        position: {
                            offset: h.offset + h.size + s,
                            size: d ? f : (P = x.barSize) !== null && P !== void 0 ? P : 0
                        }
                    },
                    I = [...y, j];
                return h = j.position, I
            }, c)
        } else {
            var b = Pe(r, t, 0, !0);
            t - 2 * b - (o - 1) * s <= 0 && (s = 0);
            var g = (t - 2 * b - (o - 1) * s) / o;
            g > 1 && (g >>= 0);
            var v = _(i) ? Math.min(g, i) : g;
            u = a.reduce((y, x, P) => [...y, {
                stackId: x.stackId,
                dataKeys: x.dataKeys,
                position: {
                    offset: b + (g + s) * P + (g - v) / 2,
                    size: v
                }
            }], c)
        }
        return u
    }
}
var da = (e, r, t, a, i, n, o) => {
        var s = pe(o) ? r : o,
            u = fa(t, a, i !== n ? i : n, e, s);
        return i !== n && u != null && (u = u.map(c => ne(ne({}, c), {}, {
            position: ne(ne({}, c.position), {}, {
                offset: c.position.offset - i / 2
            })
        }))), u
    },
    pa = (e, r) => {
        var t = $r(r);
        if (!(!e || t == null || r == null)) {
            var {
                stackId: a
            } = r;
            if (a != null) {
                var i = e[a];
                if (i) {
                    var {
                        stackedData: n
                    } = i;
                    if (n) return n.find(o => o.key === t)
                }
            }
        }
    },
    ma = (e, r) => {
        if (!(e == null || r == null)) {
            var t = e.find(a => a.stackId === r.stackId && r.dataKey != null && a.dataKeys.includes(r.dataKey));
            if (t != null) return t.position
        }
    };

function ya(e, r) {
    return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && _(e.zIndex) ? e.zIndex : r
}
class ha {
    constructor(r) {
        var {
            x: t,
            y: a
        } = r;
        this.xAxisScale = t, this.yAxisScale = a
    }
    map(r, t) {
        var a, i, {
            position: n
        } = t;
        return {
            x: (a = this.xAxisScale.map(r.x, {
                position: n
            })) !== null && a !== void 0 ? a : 0,
            y: (i = this.yAxisScale.map(r.y, {
                position: n
            })) !== null && i !== void 0 ? i : 0
        }
    }
    mapWithFallback(r, t) {
        var a, i, {
                position: n,
                fallback: o
            } = t,
            s, u;
        return o === "rangeMin" ? s = this.yAxisScale.rangeMin() : o === "rangeMax" ? s = this.yAxisScale.rangeMax() : s = 0, o === "rangeMin" ? u = this.xAxisScale.rangeMin() : o === "rangeMax" ? u = this.xAxisScale.rangeMax() : u = 0, {
            x: (a = this.xAxisScale.map(r.x, {
                position: n
            })) !== null && a !== void 0 ? a : u,
            y: (i = this.yAxisScale.map(r.y, {
                position: n
            })) !== null && i !== void 0 ? i : s
        }
    }
    isInRange(r) {
        var {
            x: t,
            y: a
        } = r, i = t == null || this.xAxisScale.isInRange(t), n = a == null || this.yAxisScale.isInRange(a);
        return i && n
    }
}

function Qe(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r && (a = a.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), t.push.apply(t, a)
    }
    return t
}

function er(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? Qe(Object(t), !0).forEach(function(a) {
            ba(e, a, t[a])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qe(Object(t)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
        })
    }
    return e
}

function ba(e, r, t) {
    return (r = ga(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function ga(e) {
    var r = xa(e, "string");
    return typeof r == "symbol" ? r : r + ""
}

function xa(e, r) {
    if (typeof e != "object" || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
        var a = t.call(e, r);
        if (typeof a != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (r === "string" ? String : Number)(e)
}

function ce() {
    return ce = Object.assign ? Object.assign.bind() : function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
        }
        return e
    }, ce.apply(null, arguments)
}
var Pa = (e, r) => {
        var t;
        if (l.isValidElement(e)) t = l.cloneElement(e, r);
        else if (typeof e == "function") t = e(r);
        else {
            if (!_(r.x1) || !_(r.y1) || !_(r.x2) || !_(r.y2)) return null;
            t = l.createElement("line", ce({}, r, {
                className: "recharts-reference-line-line"
            }))
        }
        return t
    },
    Oa = (e, r, t, a, i, n) => {
        var {
            x: o,
            width: s
        } = n, u = i.map(e, {
            position: t
        });
        if (!_(u) || r === "discard" && !i.isInRange(u)) return null;
        var c = [{
            x: o + s,
            y: u
        }, {
            x: o,
            y: u
        }];
        return a === "left" ? c.reverse() : c
    },
    Ia = (e, r, t, a, i, n) => {
        var {
            y: o,
            height: s
        } = n, u = i.map(e, {
            position: t
        });
        if (!_(u) || r === "discard" && !i.isInRange(u)) return null;
        var c = [{
            x: u,
            y: o + s
        }, {
            x: u,
            y: o
        }];
        return a === "top" ? c.reverse() : c
    },
    Aa = (e, r, t, a) => {
        var i = [a.mapWithFallback(e[0], {
            position: t,
            fallback: "rangeMin"
        }), a.mapWithFallback(e[1], {
            position: t,
            fallback: "rangeMax"
        })];
        return r === "discard" && i.some(n => !a.isInRange(n)) ? null : i
    },
    ja = (e, r, t, a, i, n, o) => {
        var {
            x: s,
            y: u,
            segment: c,
            ifOverflow: d
        } = o, f = Ce(s), p = Ce(u);
        return p ? Oa(u, d, a, n, r, t) : f ? Ia(s, d, a, i, e, t) : c != null && c.length === 2 ? Aa(c, d, a, new ha({
            x: e,
            y: r
        })) : null
    };

function wa(e) {
    var r = de();
    return l.useEffect(() => (r(Rr(e)), () => {
        r(Nr(e))
    })), null
}

function Sa(e) {
    var {
        xAxisId: r,
        yAxisId: t,
        shape: a,
        className: i,
        ifOverflow: n
    } = e, o = Se(), s = Kr(), u = $(O => zr(O, r)), c = $(O => Wr(O, t)), d = $(O => Te(O, "xAxis", r, o)), f = $(O => Te(O, "yAxis", t, o)), p = Fr();
    if (!s || !p || u == null || c == null || d == null || f == null) return null;
    var m = ja(d, f, p, e.position, u.orientation, c.orientation, e);
    if (!m) return null;
    var h = m[0],
        b = m[1];
    if (h == null || b == null) return null;
    var {
        x: g,
        y: v
    } = h, {
        x: y,
        y: x
    } = b, P = n === "hidden" ? "url(#".concat(s, ")") : void 0, j = er(er({
        clipPath: P
    }, ie(e)), {}, {
        x1: g,
        y1: v,
        x2: y,
        y2: x
    }), I = Vr({
        x1: g,
        y1: v,
        x2: y,
        y2: x
    });
    return l.createElement(ye, {
        zIndex: e.zIndex
    }, l.createElement(z, {
        className: fe("recharts-reference-line", i)
    }, Pa(a, j), l.createElement(qr, ce({}, I, {
        lowerWidth: I.width,
        upperWidth: I.width
    }), l.createElement(Gr, {
        label: e.label
    }), e.children)))
}
var Ea = {
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    label: !1,
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle",
    zIndex: me.line
};

function ka(e) {
    var r = we(e, Ea);
    return l.createElement(l.Fragment, null, l.createElement(wa, {
        yAxisId: r.yAxisId,
        xAxisId: r.xAxisId,
        ifOverflow: r.ifOverflow,
        x: r.x,
        y: r.y,
        segment: r.segment
    }), l.createElement(Sa, r))
}
ka.displayName = "ReferenceLine";
var Ba = ["children"];

function Ta(e, r) {
    if (e == null) return {};
    var t, a, i = Ca(e, r);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (a = 0; a < n.length; a++) t = n[a], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
}

function Ca(e, r) {
    if (e == null) return {};
    var t = {};
    for (var a in e)
        if ({}.hasOwnProperty.call(e, a)) {
            if (r.indexOf(a) !== -1) continue;
            t[a] = e[a]
        }
    return t
}
var Da = {
        data: [],
        xAxisId: "xAxis-0",
        yAxisId: "yAxis-0",
        dataPointFormatter: () => ({
            x: 0,
            y: 0,
            value: 0
        }),
        errorBarOffset: 0
    },
    La = l.createContext(Da);

function _a(e) {
    var {
        children: r
    } = e, t = Ta(e, Ba);
    return l.createElement(La.Provider, {
        value: t
    }, r)
}

function Ae() {
    return Ae = Object.assign ? Object.assign.bind() : function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
        }
        return e
    }, Ae.apply(null, arguments)
}

function ke(e) {
    return l.createElement(la, Ae({
        shapeType: "rectangle",
        activeClassName: "recharts-active-bar",
        inActiveClassName: "recharts-inactive-bar"
    }, e))
}
var Ma = function(r) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return (a, i) => {
            if (ee(r)) return r;
            var n = ee(a) || pe(a);
            return n ? r(a, i) : (n || xt(!1), t)
        }
    },
    $a = (e, r, t) => t,
    Ra = (e, r) => r,
    re = N([or, Ra], (e, r) => e.filter(t => t.type === "bar").find(t => t.id === r)),
    Na = N([re], e => e ? .maxBarSize),
    Ka = (e, r, t, a) => a,
    za = N([U, or, W, F, $a], (e, r, t, a, i) => r.filter(n => e === "horizontal" ? n.xAxisId === t : n.yAxisId === a).filter(n => n.isPanorama === i).filter(n => n.hide === !1).filter(n => n.type === "bar")),
    Wa = (e, r, t) => {
        var a = U(e),
            i = W(e, r),
            n = F(e, r);
        if (!(i == null || n == null)) return a === "horizontal" ? De(e, "yAxis", n, t) : De(e, "xAxis", i, t)
    },
    Fa = (e, r) => {
        var t = U(e),
            a = W(e, r),
            i = F(e, r);
        if (!(a == null || i == null)) return t === "horizontal" ? Le(e, "xAxis", a) : Le(e, "yAxis", i)
    },
    qa = N([za, Jr, Fa], sa),
    Ga = (e, r, t) => {
        var a, i, n = re(e, r);
        if (n == null) return 0;
        var o = W(e, r),
            s = F(e, r);
        if (o == null || s == null) return 0;
        var u = U(e),
            c = lr(e),
            {
                maxBarSize: d
            } = n,
            f = pe(d) ? c : d,
            p, m;
        return u === "horizontal" ? (p = G(e, "xAxis", o, t), m = V(e, "xAxis", o, t)) : (p = G(e, "yAxis", s, t), m = V(e, "yAxis", s, t)), (a = (i = ir(p, m, !0)) !== null && i !== void 0 ? i : f) !== null && a !== void 0 ? a : 0
    },
    Pr = (e, r, t) => {
        var a = U(e),
            i = W(e, r),
            n = F(e, r);
        if (!(i == null || n == null)) {
            var o, s;
            return a === "horizontal" ? (o = G(e, "xAxis", i, t), s = V(e, "xAxis", i, t)) : (o = G(e, "yAxis", n, t), s = V(e, "yAxis", n, t)), ir(o, s)
        }
    },
    Va = N([qa, lr, Hr, Zr, Ga, Pr, Na], da),
    Ua = (e, r, t) => {
        var a = W(e, r);
        if (a != null) return G(e, "xAxis", a, t)
    },
    Xa = (e, r, t) => {
        var a = F(e, r);
        if (a != null) return G(e, "yAxis", a, t)
    },
    Ya = (e, r, t) => {
        var a = W(e, r);
        if (a != null) return V(e, "xAxis", a, t)
    },
    Ha = (e, r, t) => {
        var a = F(e, r);
        if (a != null) return V(e, "yAxis", a, t)
    },
    Za = N([Va, re], ma),
    Ja = N([Wa, re], pa),
    Qa = N([Ur, Xr, Ua, Xa, Ya, Ha, Za, U, Yr, Pr, Ja, re, Ka], (e, r, t, a, i, n, o, s, u, c, d, f, p) => {
        var {
            chartData: m,
            dataStartIndex: h,
            dataEndIndex: b
        } = u;
        if (!(f == null || o == null || r == null || s !== "horizontal" && s !== "vertical" || t == null || a == null || i == null || n == null || c == null)) {
            var {
                data: g
            } = f, v;
            if (g != null && g.length > 0 ? v = g : v = m ? .slice(h, b + 1), v != null) return En({
                layout: s,
                barSettings: f,
                pos: o,
                parentViewBox: r,
                bandSize: c,
                xAxis: t,
                yAxis: a,
                xAxisTicks: i,
                yAxisTicks: n,
                stackedData: d,
                displayedData: v,
                offset: e,
                cells: p,
                dataStartIndex: h
            })
        }
    }),
    en = ["index"];

function je() {
    return je = Object.assign ? Object.assign.bind() : function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
        }
        return e
    }, je.apply(null, arguments)
}

function rn(e, r) {
    if (e == null) return {};
    var t, a, i = tn(e, r);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (a = 0; a < n.length; a++) t = n[a], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
}

function tn(e, r) {
    if (e == null) return {};
    var t = {};
    for (var a in e)
        if ({}.hasOwnProperty.call(e, a)) {
            if (r.indexOf(a) !== -1) continue;
            t[a] = e[a]
        }
    return t
}
var Or = l.createContext(void 0),
    an = e => {
        var r = l.useContext(Or);
        if (r != null) return r.stackId;
        if (e != null) return Qr(e)
    },
    nn = (e, r) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(r),
    on = e => {
        var r = l.useContext(Or);
        if (r != null) {
            var {
                stackId: t
            } = r;
            return "url(#".concat(nn(t, e), ")")
        }
    },
    Ir = e => {
        var {
            index: r
        } = e, t = rn(e, en), a = on(r);
        return l.createElement(z, je({
            className: "recharts-bar-stack-layer",
            clipPath: a
        }, t))
    },
    ln = ["onMouseEnter", "onMouseLeave", "onClick"],
    sn = ["value", "background", "tooltipPosition"],
    un = ["id"],
    cn = ["onMouseEnter", "onClick", "onMouseLeave"];

function R() {
    return R = Object.assign ? Object.assign.bind() : function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t)({}).hasOwnProperty.call(t, a) && (e[a] = t[a])
        }
        return e
    }, R.apply(null, arguments)
}

function rr(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r && (a = a.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), t.push.apply(t, a)
    }
    return t
}

function S(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? rr(Object(t), !0).forEach(function(a) {
            vn(e, a, t[a])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : rr(Object(t)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
        })
    }
    return e
}

function vn(e, r, t) {
    return (r = fn(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function fn(e) {
    var r = dn(e, "string");
    return typeof r == "symbol" ? r : r + ""
}

function dn(e, r) {
    if (typeof e != "object" || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
        var a = t.call(e, r);
        if (typeof a != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (r === "string" ? String : Number)(e)
}

function ve(e, r) {
    if (e == null) return {};
    var t, a, i = pn(e, r);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (a = 0; a < n.length; a++) t = n[a], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
}

function pn(e, r) {
    if (e == null) return {};
    var t = {};
    for (var a in e)
        if ({}.hasOwnProperty.call(e, a)) {
            if (r.indexOf(a) !== -1) continue;
            t[a] = e[a]
        }
    return t
}
var mn = e => {
        var {
            dataKey: r,
            name: t,
            fill: a,
            legendType: i,
            hide: n
        } = e;
        return [{
            inactive: n,
            dataKey: r,
            type: i,
            color: a,
            value: sr(t, r),
            payload: e
        }]
    },
    yn = l.memo(e => {
        var {
            dataKey: r,
            stroke: t,
            strokeWidth: a,
            fill: i,
            name: n,
            hide: o,
            unit: s,
            tooltipType: u,
            id: c
        } = e, d = {
            dataDefinedOnItem: void 0,
            getPosition: it,
            settings: {
                stroke: t,
                strokeWidth: a,
                fill: i,
                dataKey: r,
                nameKey: void 0,
                name: sr(n, r),
                hide: o,
                type: u,
                color: i,
                unit: s,
                graphicalItemId: c
            }
        };
        return l.createElement(nt, {
            tooltipEntrySettings: d
        })
    });

function hn(e) {
    var r = $(cr),
        {
            data: t,
            dataKey: a,
            background: i,
            allOtherBarProps: n
        } = e,
        {
            onMouseEnter: o,
            onMouseLeave: s,
            onClick: u
        } = n,
        c = ve(n, ln),
        d = br(o, a, n.id),
        f = gr(s),
        p = xr(u, a, n.id);
    if (!i || t == null) return null;
    var m = ft(i);
    return l.createElement(ye, {
        zIndex: ya(i, me.barBackground)
    }, t.map((h, b) => {
        var {
            value: g,
            background: v,
            tooltipPosition: y
        } = h, x = ve(h, sn);
        if (!v) return null;
        var P = d(h, b),
            j = f(h, b),
            I = p(h, b),
            O = S(S(S(S(S({
                option: i,
                isActive: String(b) === r
            }, x), {}, {
                fill: "#eee"
            }, v), m), vr(c, h, b)), {}, {
                onMouseEnter: P,
                onMouseLeave: j,
                onClick: I,
                dataKey: a,
                index: b,
                className: "recharts-bar-background-rectangle"
            });
        return l.createElement(ke, R({
            key: "background-bar-".concat(b)
        }, O))
    }))
}

function bn(e) {
    var {
        showLabels: r,
        children: t,
        rects: a
    } = e, i = a ? .map(n => {
        var o = {
            x: n.x,
            y: n.y,
            width: n.width,
            lowerWidth: n.width,
            upperWidth: n.width,
            height: n.height
        };
        return S(S({}, o), {}, {
            value: n.value,
            payload: n.payload,
            parentViewBox: n.parentViewBox,
            viewBox: o,
            fill: n.fill
        })
    });
    return l.createElement(pt, {
        value: r ? i : void 0
    }, t)
}

function gn(e) {
    var {
        shape: r,
        activeBar: t,
        baseProps: a,
        entry: i,
        index: n,
        dataKey: o
    } = e, s = $(cr), u = $(yt), c = t && String(i.originalDataIndex) === s && (u == null || o === u), [d, f] = l.useState(!1), [p, m] = l.useState(!1);
    l.useEffect(() => {
        var x;
        return c ? (f(!0), x = requestAnimationFrame(() => {
            m(!0)
        })) : m(!1), () => {
            cancelAnimationFrame(x)
        }
    }, [c]);
    var h = l.useCallback(() => {
            c || f(!1)
        }, [c]),
        b = c && p,
        g = c || d,
        v;
    c ? t === !0 ? v = r : v = t : v = r;
    var y = l.createElement(ke, R({}, a, {
        name: String(a.name)
    }, i, {
        isActive: b,
        option: v,
        index: n,
        dataKey: o,
        onTransitionEnd: h
    }));
    return g ? l.createElement(ye, {
        zIndex: me.activeBar
    }, l.createElement(Ir, {
        index: i.originalDataIndex
    }, y)) : y
}

function xn(e) {
    var {
        shape: r,
        baseProps: t,
        entry: a,
        index: i,
        dataKey: n
    } = e;
    return l.createElement(ke, R({}, t, {
        name: String(t.name)
    }, a, {
        isActive: !1,
        option: r,
        index: i,
        dataKey: n
    }))
}

function Pn(e) {
    var r, {
            data: t,
            props: a
        } = e,
        i = (r = mt(a)) !== null && r !== void 0 ? r : {},
        {
            id: n
        } = i,
        o = ve(i, un),
        {
            shape: s,
            dataKey: u,
            activeBar: c
        } = a,
        {
            onMouseEnter: d,
            onClick: f,
            onMouseLeave: p
        } = a,
        m = ve(a, cn),
        h = br(d, u, n),
        b = gr(p),
        g = xr(f, u, n);
    return t ? l.createElement(l.Fragment, null, t.map((v, y) => l.createElement(Ir, R({
        index: v.originalDataIndex,
        key: "rectangle-".concat(v ? .x, "-").concat(v ? .y, "-").concat(v ? .value, "-").concat(y),
        className: "recharts-bar-rectangle"
    }, vr(m, v, y), {
        onMouseEnter: h(v, y),
        onMouseLeave: b(v, y),
        onClick: g(v, y)
    }), c ? l.createElement(gn, {
        shape: s,
        activeBar: c,
        baseProps: o,
        entry: v,
        index: y,
        dataKey: u
    }) : l.createElement(xn, {
        shape: s,
        baseProps: o,
        entry: v,
        index: y,
        dataKey: u
    })))) : null
}

function On(e) {
    var {
        props: r,
        previousRectanglesRef: t
    } = e, {
        data: a,
        layout: i,
        isAnimationActive: n,
        animationBegin: o,
        animationDuration: s,
        animationEasing: u,
        onAnimationEnd: c,
        onAnimationStart: d
    } = r, f = t.current, p = ar(r, "recharts-bar-"), [m, h] = l.useState(!1), b = !m, g = l.useCallback(() => {
        typeof c == "function" && c(), h(!1)
    }, [c]), v = l.useCallback(() => {
        typeof d == "function" && d(), h(!0)
    }, [d]);
    return l.createElement(bn, {
        showLabels: b,
        rects: a
    }, l.createElement(nr, {
        animationId: p,
        begin: o,
        duration: s,
        isActive: n,
        easing: u,
        onAnimationEnd: g,
        onAnimationStart: v,
        key: p
    }, y => {
        var x = y === 1 ? a : a ? .map((P, j) => {
            var I = f && f[j];
            if (I) return S(S({}, P), {}, {
                x: k(I.x, P.x, y),
                y: k(I.y, P.y, y),
                width: k(I.width, P.width, y),
                height: k(I.height, P.height, y)
            });
            if (i === "horizontal") {
                var O = k(0, P.height, y),
                    L = k(P.stackedBarStart, P.y, y);
                return S(S({}, P), {}, {
                    y: L,
                    height: O
                })
            }
            var C = k(0, P.width, y),
                w = k(P.stackedBarStart, P.x, y);
            return S(S({}, P), {}, {
                width: C,
                x: w
            })
        });
        return y > 0 && (t.current = x ? ? null), x == null ? null : l.createElement(z, null, l.createElement(Pn, {
            props: r,
            data: x
        }))
    }), l.createElement(dt, {
        label: r.label
    }), r.children)
}

function In(e) {
    var r = l.useRef(null);
    return l.createElement(On, {
        previousRectanglesRef: r,
        props: e
    })
}
var Ar = 0,
    An = (e, r) => {
        var t = Array.isArray(e.value) ? e.value[1] : e.value;
        return {
            x: e.x,
            y: e.y,
            value: t,
            errorVal: ur(e, r)
        }
    };
class jn extends l.PureComponent {
    render() {
        var {
            hide: r,
            data: t,
            dataKey: a,
            className: i,
            xAxisId: n,
            yAxisId: o,
            needClip: s,
            background: u,
            id: c
        } = this.props;
        if (r || t == null) return null;
        var d = fe("recharts-bar", i),
            f = c;
        return l.createElement(z, {
            className: d,
            id: c
        }, s && l.createElement("defs", null, l.createElement(ut, {
            clipPathId: f,
            xAxisId: n,
            yAxisId: o
        })), l.createElement(z, {
            className: "recharts-bar-rectangles",
            clipPath: s ? "url(#clipPath-".concat(f, ")") : void 0
        }, l.createElement(hn, {
            data: t,
            dataKey: a,
            background: u,
            allOtherBarProps: this.props
        }), l.createElement(In, this.props)))
    }
}
var wn = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease",
    background: !1,
    hide: !1,
    isAnimationActive: "auto",
    label: !1,
    legendType: "rect",
    minPointSize: Ar,
    xAxisId: 0,
    yAxisId: 0,
    zIndex: me.bar
};

function Sn(e) {
    var {
        xAxisId: r,
        yAxisId: t,
        hide: a,
        legendType: i,
        minPointSize: n,
        activeBar: o,
        animationBegin: s,
        animationDuration: u,
        animationEasing: c,
        isAnimationActive: d
    } = e, {
        needClip: f
    } = ot(r, t), p = lt(), m = Se(), h = st(e.children, hr), b = $(y => Qa(y, e.id, m, h));
    if (p !== "vertical" && p !== "horizontal") return null;
    var g, v = b ? .[0];
    return v == null || v.height == null || v.width == null ? g = 0 : g = p === "vertical" ? v.height / 2 : v.width / 2, l.createElement(_a, {
        xAxisId: r,
        yAxisId: t,
        data: b,
        dataPointFormatter: An,
        errorBarOffset: g
    }, l.createElement(jn, R({}, e, {
        layout: p,
        needClip: f,
        data: b,
        xAxisId: r,
        yAxisId: t,
        hide: a,
        legendType: i,
        minPointSize: n,
        activeBar: o,
        animationBegin: s,
        animationDuration: u,
        animationEasing: c,
        isAnimationActive: d
    })))
}

function En(e) {
    var {
        layout: r,
        barSettings: {
            dataKey: t,
            minPointSize: a,
            hasCustomShape: i
        },
        pos: n,
        bandSize: o,
        xAxis: s,
        yAxis: u,
        xAxisTicks: c,
        yAxisTicks: d,
        stackedData: f,
        displayedData: p,
        offset: m,
        cells: h,
        parentViewBox: b,
        dataStartIndex: g
    } = e, v = r === "horizontal" ? u : s, y = f ? v.scale.domain() : null, x = ct({
        numericAxis: v
    }), P = v.scale.map(x);
    return p.map((j, I) => {
        var O, L, C, w, E, X;
        if (f) {
            var te = f[I + g];
            if (te == null) return null;
            O = vt(te, y)
        } else O = ur(j, t), Array.isArray(O) || (O = [x, O]);
        var A = Ma(a, Ar)(O[1], I);
        if (r === "horizontal") {
            var K, q = u.scale.map(O[0]),
                M = u.scale.map(O[1]);
            if (q == null || M == null) return null;
            L = _e({
                axis: s,
                ticks: c,
                bandSize: o,
                offset: n.offset,
                entry: j,
                index: I
            }), C = (K = M ? ? q) !== null && K !== void 0 ? K : void 0, w = n.size;
            var Y = q - M;
            if (E = ht(Y) ? 0 : Y, X = {
                    x: L,
                    y: m.top,
                    width: w,
                    height: m.height
                }, Math.abs(A) > 0 && Math.abs(E) < Math.abs(A)) {
                var H = Me(E || A) * (Math.abs(A) - Math.abs(E));
                C -= H, E += H
            }
        } else {
            var Z = s.scale.map(O[0]),
                Be = s.scale.map(O[1]);
            if (Z == null || Be == null) return null;
            if (L = Z, C = _e({
                    axis: u,
                    ticks: d,
                    bandSize: o,
                    offset: n.offset,
                    entry: j,
                    index: I
                }), w = Be - Z, E = n.size, X = {
                    x: m.left,
                    y: C,
                    width: m.width,
                    height: E
                }, Math.abs(A) > 0 && Math.abs(w) < Math.abs(A)) {
                var jr = Me(w || A) * (Math.abs(A) - Math.abs(w));
                w += jr
            }
        }
        if (L == null || C == null || w == null || E == null || !i && (w === 0 || E === 0)) return null;
        var wr = S(S({}, j), {}, {
            stackedBarStart: P,
            x: L,
            y: C,
            width: w,
            height: E,
            value: f ? O : O[1],
            payload: j,
            background: X,
            tooltipPosition: {
                x: L + w / 2,
                y: C + E / 2
            },
            parentViewBox: b,
            originalDataIndex: I
        }, h && h[I] && h[I].props);
        return wr
    }).filter(Boolean)
}

function kn(e) {
    var r = we(e, wn),
        t = an(r.stackId),
        a = Se();
    return l.createElement(rt, {
        id: r.id,
        type: "bar"
    }, i => l.createElement(l.Fragment, null, l.createElement(tt, {
        legendPayload: mn(r)
    }), l.createElement(yn, {
        dataKey: r.dataKey,
        stroke: r.stroke,
        strokeWidth: r.strokeWidth,
        fill: r.fill,
        name: r.name,
        hide: r.hide,
        unit: r.unit,
        tooltipType: r.tooltipType,
        id: i
    }), l.createElement(at, {
        type: "bar",
        id: i,
        data: void 0,
        xAxisId: r.xAxisId,
        yAxisId: r.yAxisId,
        zAxisId: 0,
        dataKey: r.dataKey,
        stackId: t,
        hide: r.hide,
        barSize: r.barSize,
        minPointSize: r.minPointSize,
        maxBarSize: r.maxBarSize,
        isPanorama: a,
        hasCustomShape: r.shape != null
    }), l.createElement(ye, {
        zIndex: r.zIndex
    }, l.createElement(Sn, R({}, r, {
        id: i
    })))))
}
var Bn = l.memo(kn, et);
Bn.displayName = "Bar";
var Tn = ["axis", "item"],
    Mn = l.forwardRef((e, r) => l.createElement(bt, {
        chartName: "BarChart",
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: Tn,
        tooltipPayloadSearcher: gt,
        categoricalChartProps: e,
        ref: r
    }));
export {
    Mn as B, hr as C, ka as R, yr as S, Bn as a
};