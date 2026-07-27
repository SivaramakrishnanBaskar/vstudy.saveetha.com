import {
    e as ra,
    r as l,
    j as e,
    L as me,
    d as D,
    u as _s,
    f as Es,
    h as Ps,
    R as Us,
    a as ia
} from "./index-yzCs2v45.js";
import {
    R as Wt
} from "./index-CPEKXmhm.js";
import {
    u as Os,
    G as Bs,
    M as Ys
} from "./esm-BdLNz9BL.js";
import {
    R as Ws
} from "./ResizableWindow-DV36NXzY.js";
import {
    T as is
} from "./themeConfig-D35No_rL.js";
import {
    C as js
} from "./chevron-down-DmPJToVT.js";
import {
    S as Ht
} from "./search-C2uFoIi0.js";
import {
    C as Oe
} from "./check-Dr5MnWK6.js";
import {
    g as oa
} from "./documentViewerUtils-BeaSZYia.js";
import {
    R as ca,
    T as Hs,
    B as zs
} from "./BusVerifyScanModal-DyG_DsZr.js";
import {
    C as da
} from "./circle-check-D_o3rC1t.js";
import {
    S as Vs
} from "./scan-line-CSe0bLlz.js";
import {
    N as os
} from "./BusTrackModal-CSXUStZ-.js";
import {
    C as St
} from "./clipboard-list-B5LsxHTS.js";
import {
    L as cs
} from "./lock-BXTQYF3G.js";
import {
    C as kt
} from "./chevron-left-B7HIPTlv.js";
import {
    C as ys
} from "./circle-x-D4FKj4hJ.js";
import {
    X as je
} from "./x-5ZDqsGnB.js";
import {
    M as Pe
} from "./map-pin-CsLsmceU.js";
import {
    C as Gs
} from "./crosshair-B0vJs0QV.js";
import {
    C as ds
} from "./chevron-right-DpJOyS83.js";
import "./index-Cgo6c22r.js";
import "./proxy-CPEN9Don.js";
import "./loader-circle-Du2bADAa.js";
import "./globe-DO8HIZqX.js";
import "./shield-check-Cj1XZsO5.js";
import "./index-JgPAmfHO.js";
import "./refresh-cw-C077g4E0.js";
import "./html5-qrcode-scanner-__AGtTp-.js";
import "./clock-3-BRugo2AI.js";
import "./info-W7J9pIjo.js";
import "./camera-CE0l9T32.js";
const ua = [
        ["path", {
            d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
            key: "qn84l0"
        }],
        ["path", {
            d: "M13 5v2",
            key: "dyzc3o"
        }],
        ["path", {
            d: "M13 17v2",
            key: "1ont0d"
        }],
        ["path", {
            d: "M13 11v2",
            key: "1wjjxi"
        }]
    ],
    $t = ra("ticket", ua),
    gs = n => n ? .stopDisplayName || n ? .displayName || n ? .stopName || "",
    ts = n => {
        const i = n ? .time || n ? .stopTime || "";
        return i ? String(i).slice(0, 5) : ""
    },
    Cs = (n, i) => Number(n ? .stopOrder) || i.findIndex(t => t.id === n.id) + 1;

function Ce({
    stops: n = [],
    value: i,
    onChange: t,
    placeholder: y = "Select stop",
    styles: m,
    disabled: P = !1,
    omitFirst: c = !1,
    omitLast: N = !1
}) {
    const [$, k] = l.useState(!1), [Y, j] = l.useState(""), R = l.useRef(null), x = l.useMemo(() => {
        let T = [...n].sort((L, W) => (Number(L ? .stopOrder) || 0) - (Number(W ? .stopOrder) || 0));
        return c && T.length > 1 && (T = T.slice(1)), N && T.length > 1 && (T = T.slice(0, -1)), T
    }, [n, c, N]), _ = n.find(C => C.id === i) || null, le = Y.trim().toLowerCase(), X = le ? x.filter(C => gs(C).toLowerCase().includes(le)) : x;
    return l.useEffect(() => {
        const C = T => {
            R.current ? .contains(T.target) || (k(!1), j(""))
        };
        return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C)
    }, []), e.jsxs("div", {
        ref: R,
        className: "relative",
        children: [e.jsxs("button", {
            type: "button",
            disabled: P,
            onClick: () => k(C => !C),
            className: `${m.input} w-full text-xs flex items-center justify-between gap-2 ${P?"opacity-60 cursor-not-allowed":""}`,
            children: [e.jsx("span", {
                className: `truncate ${_?m.textPrimary:m.textMuted}`,
                children: _ ? `${Cs(_,n)}. ${gs(_)}${ts(_)?` · ${ts(_)}`:""}` : y
            }), e.jsx(js, {
                className: `w-4 h-4 shrink-0 ${m.textMuted}`
            })]
        }), $ ? e.jsxs("div", {
            className: `${m.menuPanel} absolute z-50 mt-1 left-0 right-0 p-1`,
            children: [e.jsxs("div", {
                className: "relative mb-1",
                children: [e.jsx(Ht, {
                    className: `absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${m.textMuted}`
                }), e.jsx("input", {
                    autoFocus: !0,
                    type: "text",
                    value: Y,
                    onChange: C => j(C.target.value),
                    placeholder: "Search stop...",
                    className: `${m.input} w-full pl-7 text-xs`
                })]
            }), e.jsx("ul", {
                className: "max-h-52 overflow-auto",
                children: X.length ? X.map(C => e.jsx("li", {
                    children: e.jsxs("button", {
                        type: "button",
                        onClick: () => {
                            t(C.id), k(!1), j("")
                        },
                        className: `${m.menuItem} w-full text-left px-2.5 py-1.5 text-xs flex items-center justify-between gap-2`,
                        children: [e.jsxs("span", {
                            className: "flex items-center gap-2 min-w-0",
                            children: [e.jsx("span", {
                                className: `shrink-0 w-5 h-5 inline-flex items-center justify-center rounded-full text-[10px] font-bold ${m.badgeInfo}`,
                                children: Cs(C, n)
                            }), e.jsx("span", {
                                className: `truncate ${m.textPrimary}`,
                                children: gs(C)
                            })]
                        }), e.jsxs("span", {
                            className: "flex items-center gap-2 shrink-0",
                            children: [ts(C) ? e.jsx("span", {
                                className: `text-[10px] font-semibold ${m.textMuted}`,
                                children: ts(C)
                            }) : null, C.id === i ? e.jsx(Oe, {
                                className: "w-3.5 h-3.5 shrink-0"
                            }) : null]
                        })]
                    })
                }, C.id)) : e.jsx("li", {
                    className: `px-2.5 py-2 text-xs ${m.textMuted}`,
                    children: "No stops found"
                })
            })]
        }) : null]
    })
}
let ss = {
    date: "",
    promise: null
};
const pa = () => {
        const n = new Date().toLocaleDateString("en-CA");
        return (ss.date !== n || !ss.promise) && (ss = {
            date: n,
            promise: D.get("/api/transport-applications/pass-daily-color").then(i => i.data ? .data || null).catch(() => null)
        }), ss.promise
    },
    ma = n => {
        const i = n ? .routeName || "";
        return i ? `${n.routeNumber} - ${i}` : n ? .routeNumber || "Route"
    },
    ls = n => {
        if (!n) return "-";
        const i = new Date(n);
        return Number.isNaN(i.getTime()) ? "-" : i.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    },
    xa = n => n ? .valid_from ? String(n.pass_type || "ANNUAL").toUpperCase() === "DAILY" ? ls(n.valid_from) : `${ls(n.valid_from)} – ${ls(n.valid_to)}` : "-",
    fa = n => {
        const i = new Date().toLocaleDateString("en-CA"),
            t = P => P ? String(P).slice(0, 10) : "",
            y = t(n ? .valid_from),
            m = t(n ? .valid_to);
        return String(n ? .pass_type || "ANNUAL").toUpperCase() === "DAILY" ? y === i : (!y || y <= i) && (!m || m >= i)
    },
    ha = (n, i = .86) => {
        const t = String(n || "").replace("#", "");
        if (t.length !== 6) return null;
        const y = parseInt(t.slice(0, 2), 16),
            m = parseInt(t.slice(2, 4), 16),
            P = parseInt(t.slice(4, 6), 16);
        if ([y, m, P].some(Number.isNaN)) return null;
        const c = $ => Math.round($ + (255 - $) * i),
            N = $ => c($).toString(16).padStart(2, "0");
        return `#${N(y)}${N(m)}${N(P)}`
    },
    ba = n => n ? String(n).slice(0, 5) : "",
    as = (n, i) => {
        const t = n || "-",
            y = ba(i);
        return y ? `${t} · ${y}` : t
    };

function qs({
    application: n,
    institutionName: i,
    tokenEndpoint: t,
    passLabelOverride: y,
    validityOverride: m
}) {
    const P = String(n ? .pass_type || "ANNUAL").toUpperCase(),
        c = t || `/api/transport-applications/${n.id}/pass-token`,
        N = String(n ? .trip_direction || "BOTH").toUpperCase(),
        $ = P !== "DAILY" || N === "PICKUP" || N === "BOTH",
        k = P !== "DAILY" || N === "DROP" || N === "BOTH",
        Y = fa(n),
        [j, R] = l.useState(null);
    l.useEffect(() => {
        let T = !0;
        return pa().then(L => {
            T && R(L)
        }), () => {
            T = !1
        }
    }, []);
    const x = j ? {
            backgroundImage: `linear-gradient(to right, ${j.color_from}, ${j.color_to})`
        } : void 0,
        _ = j ? ha(j.color_from) : null,
        le = _ ? {
            backgroundColor: _
        } : void 0,
        X = j ? .day || new Date().toLocaleDateString("en-CA"),
        C = ls(X);
    return e.jsxs("div", {
        className: "w-full max-w-lg mx-auto overflow-hidden rounded-2xl border shadow-lg bg-white",
        style: le,
        children: [e.jsxs("div", {
            className: `text-white px-4 py-3 flex items-center justify-between ${j?"":"bg-gradient-to-r from-blue-600 to-indigo-600"}`,
            style: x,
            children: [e.jsxs("span", {
                className: "inline-flex items-center gap-1.5 text-sm font-bold tracking-wide",
                children: [e.jsx(me, {
                    className: "w-4 h-4"
                }), " BUS PASS"]
            }), e.jsx("span", {
                className: "text-[10px] font-semibold uppercase tracking-wider opacity-90 truncate max-w-[55%] text-right",
                children: i
            })]
        }), e.jsx("div", {
            className: "mt-4 text-center",
            children: e.jsx("div", {
                className: "mt-0.5 text-3xl font-extrabold leading-tight text-gray-900",
                children: C
            })
        }), e.jsxs("div", {
            className: `px-4 pt-4 pb-3 flex flex-col items-center text-center text-gray-900 ${j?"":"bg-white"}`,
            children: [n.photo_url ? e.jsx("img", {
                src: oa(n.photo_url),
                alt: n.student_name || "Student",
                className: "w-20 h-20 rounded-full object-cover border-4 border-blue-100 shadow"
            }) : e.jsx("div", {
                className: "w-20 h-20 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold border-4 border-blue-50 shadow",
                children: (n.student_name || "?").trim().charAt(0).toUpperCase()
            }), e.jsx("div", {
                className: "mt-2 text-base font-bold leading-tight",
                children: n.student_name || "-"
            }), e.jsxs("div", {
                className: "text-xs text-gray-500",
                children: ["Reg No: ", n.register_number || "-"]
            }), e.jsxs("div", {
                className: "mt-2 inline-flex items-center gap-1.5 text-lg font-semibold text-gray-800",
                children: [e.jsx(me, {
                    className: "w-4 h-4 text-blue-600"
                }), ma(n)]
            }), e.jsxs("div", {
                className: "mt-1.5 w-full px-4 space-y-1",
                children: [$ ? e.jsxs("div", {
                    className: "flex items-start justify-center gap-1.5 text-[11px] text-gray-600",
                    children: [e.jsx("span", {
                        className: "rounded bg-emerald-100 text-emerald-700 px-1 font-semibold shrink-0 mt-px",
                        children: "Pickup"
                    }), e.jsxs("span", {
                        className: "text-center",
                        children: [as(n.pickup_stop_name, n.pickup_stop_time), " →", " ", as(n.pickup_last_stop_name || n.drop_stop_name, n.pickup_last_stop_time)]
                    })]
                }) : null, k ? e.jsxs("div", {
                    className: "flex items-start justify-center gap-1.5 text-[11px] text-gray-600",
                    children: [e.jsx("span", {
                        className: "rounded bg-red-100 text-red-700 px-1 font-semibold shrink-0 mt-px",
                        children: "Drop"
                    }), e.jsxs("span", {
                        className: "text-center",
                        children: [as(n.drop_first_stop_name || n.pickup_stop_name, n.drop_first_stop_time), " ", "→ ", as(n.drop_stop_name, n.drop_stop_time)]
                    })]
                }) : null]
            }), e.jsxs("div", {
                className: "mt-2 flex items-center justify-center gap-2",
                children: [e.jsx("span", {
                    className: "rounded-full bg-blue-100 text-blue-700 px-2.5 py-0.5 text-[11px] font-semibold",
                    children: y || (P === "DAILY" ? "Trip Pass" : "Annual Pass")
                }), e.jsxs("span", {
                    className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${Y?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-600"}`,
                    children: [e.jsx(da, {
                        className: "w-3.5 h-3.5"
                    }), Y ? "Active" : "Expired"]
                })]
            }), e.jsxs("div", {
                className: "mt-1.5 text-[11px] text-gray-500",
                children: ["Valid: ", m || xa(n)]
            })]
        }), e.jsxs("div", {
            className: "relative",
            children: [e.jsx("div", {
                className: "border-t-2 border-dashed border-gray-200"
            }), e.jsx("span", {
                className: "absolute -left-2 -top-2 w-4 h-4 rounded-full bg-gray-100 border"
            }), e.jsx("span", {
                className: "absolute -right-2 -top-2 w-4 h-4 rounded-full bg-gray-100 border"
            })]
        }), e.jsx(ca, {
            tokenEndpoint: c
        })]
    })
}
const Na = ["geometry"],
    ga = {
        lat: 13.0827,
        lng: 80.2707
    },
    As = 10,
    ya = n => String(n || "").toLowerCase(),
    Yt = n => {
        const i = Number(n || 0);
        return Number.isFinite(i) ? i.toLocaleString("en-IN") : "0"
    },
    Is = n => {
        if (!n) return "-";
        const i = new Date(n);
        return Number.isNaN(i.getTime()) ? "-" : i.toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
    },
    ns = n => {
        if (!n) return "-";
        const i = new Date(n);
        return Number.isNaN(i.getTime()) ? "-" : i.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    },
    Qe = n => {
        if (!n) return "Route";
        const i = n.routeName || n.busName || "";
        return i ? `${n.routeNumber} - ${i}` : n.routeNumber || "Route"
    };

function ja({
    routes: n = [],
    value: i,
    onChange: t,
    placeholder: y = "Select a route",
    styles: m
}) {
    const [P, c] = l.useState(!1), [N, $] = l.useState(""), k = l.useRef(null), Y = n.find(x => x.id === i) || null, j = N.trim().toLowerCase(), R = j ? n.filter(x => `${x.routeNumber||""} ${x.routeName||""} ${x.busName||""}`.toLowerCase().includes(j)) : n;
    return l.useEffect(() => {
        const x = _ => {
            k.current ? .contains(_.target) || (c(!1), $(""))
        };
        return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x)
    }, []), e.jsxs("div", {
        ref: k,
        className: "relative",
        children: [e.jsxs("button", {
            type: "button",
            onClick: () => c(x => !x),
            className: `${m.input} w-full text-xs flex items-center justify-between gap-2`,
            children: [e.jsx("span", {
                className: `truncate ${Y?m.textPrimary:m.textMuted}`,
                children: Y ? Qe(Y) : y
            }), e.jsx(js, {
                className: `w-4 h-4 shrink-0 ${m.textMuted}`
            })]
        }), P ? e.jsxs("div", {
            className: `${m.menuPanel} absolute z-50 mt-1 left-0 right-0 p-1`,
            children: [e.jsxs("div", {
                className: "relative mb-1",
                children: [e.jsx(Ht, {
                    className: `absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${m.textMuted}`
                }), e.jsx("input", {
                    autoFocus: !0,
                    type: "text",
                    value: N,
                    onChange: x => $(x.target.value),
                    placeholder: "Search route...",
                    className: `${m.input} w-full pl-7 text-xs`
                })]
            }), e.jsx("ul", {
                className: "max-h-52 overflow-auto",
                children: R.length ? R.map(x => e.jsx("li", {
                    children: e.jsxs("button", {
                        type: "button",
                        onClick: () => {
                            t(x.id), c(!1), $("")
                        },
                        className: `${m.menuItem} w-full text-left px-2.5 py-1.5 text-xs flex items-center justify-between gap-2`,
                        children: [e.jsx("span", {
                            className: `truncate ${m.textPrimary}`,
                            children: Qe(x)
                        }), x.id === i ? e.jsx(Oe, {
                            className: "w-3.5 h-3.5 shrink-0"
                        }) : null]
                    })
                }, x.id)) : e.jsx("li", {
                    className: `px-2.5 py-2 text-xs ${m.textMuted}`,
                    children: "No routes found"
                })
            })]
        }) : null]
    })
}
const it = n => n && Number.isFinite(Number(n.lat)) && Number.isFinite(Number(n.lng)),
    Ms = () => typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
    va = (n, i) => {
        if (!it(n) || !it(i)) return 1 / 0;
        const t = 6371e3,
            y = k => k * Math.PI / 180,
            m = y(i.lat - n.lat),
            P = y(i.lng - n.lng),
            c = y(n.lat),
            N = y(i.lat),
            $ = Math.sin(m / 2) ** 2 + Math.cos(c) * Math.cos(N) * Math.sin(P / 2) ** 2;
        return 2 * t * Math.asin(Math.sqrt($))
    },
    wa = n => Number.isFinite(n) ? n < 1e3 ? `${Math.round(n)} m` : `${(n/1e3).toFixed(1)} km` : "",
    Sa = n => {
        if (typeof window > "u" || !window.google ? .maps) return;
        const i = n === "start" ? "#10b981" : n === "end" ? "#ef4444" : n === "you" ? "#6366f1" : "#4285f4";
        return {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: i,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2
        }
    },
    pe = n => String(n || "").toUpperCase();

function ka() {
    const n = _s(),
        {
            theme: i
        } = Es(),
        t = is[i] ? ? is.default,
        [y, m] = l.useState(!0),
        [P, c] = l.useState(""),
        [N, $] = l.useState(""),
        [k, Y] = l.useState([]),
        [j, R] = l.useState([]),
        [x, _] = l.useState(""),
        [le, X] = l.useState(""),
        [C, T] = l.useState(!1),
        [L, W] = l.useState(""),
        [H, Ae] = l.useState(""),
        [U, xe] = l.useState(""),
        [O, fe] = l.useState(""),
        [ct, dt] = l.useState(!1),
        [Ie, Pt] = l.useState(""),
        [Ct, Me] = l.useState("home"),
        [At, It] = l.useState(!1),
        [zt, z] = l.useState(!1),
        [oe, Mt] = l.useState(!1),
        [V, Le] = l.useState(0),
        [ut, Lt] = l.useState(null),
        [Be, pt] = l.useState(""),
        [Je, he] = l.useState(""),
        [mt, Te] = l.useState(""),
        [E, Ye] = l.useState(!1),
        [G, xt] = l.useState("pickup"),
        [re, ft] = l.useState(null),
        [te, ht] = l.useState({}),
        [ve, Ze] = l.useState(null),
        Tt = l.useRef(""),
        ce = l.useRef(null),
        [Xe, De] = l.useState("route"),
        [M, de] = l.useState(null),
        [We, be] = l.useState([]),
        [bt, F] = l.useState(!1),
        [He, we] = l.useState(!1),
        et = l.useRef(Ms()),
        ee = l.useRef(null),
        tt = l.useRef(null),
        q = l.useRef(null),
        Dt = "AIzaSyCmJGiq8hNUzy0k0O8stA0oud1CN55jQkQ",
        {
            isLoaded: Se,
            loadError: Vt
        } = Os({
            id: "transport-master-maps",
            googleMapsApiKey: Dt,
            libraries: Na
        }),
        ue = async () => {
            m(!0), c("");
            try {
                const {
                    data: a
                } = await D.get("/api/transport-applications/employee/context"), r = a ? .data || {};
                Y(Array.isArray(r.routes) ? r.routes : []), R(Array.isArray(r.applications) ? r.applications : []), _(r.institutionName || ""), X(pe(r.employeeType)), T(!1), Ae(""), xe(""), fe("")
            } catch (a) {
                c(a ? .response ? .data ? .message || "Failed to load transport details"), Y([]), R([])
            } finally {
                m(!1)
            }
        };
    l.useEffect(() => {
        ue()
    }, []);
    const Nt = a => Number((le === "STAFF" ? a ? .staffFee : a ? .facultyFee) || 0),
        v = l.useMemo(() => j.find(a => pe(a.status) === "ACTIVE") || null, [j]),
        gt = l.useMemo(() => j.find(a => pe(a.status) === "PENDING") || null, [j]),
        se = l.useMemo(() => j.find(a => pe(a.status) === "AWAITING_PAYMENT") || null, [j]),
        st = l.useMemo(() => j.filter(a => ["PENDING", "AWAITING_PAYMENT", "ACTIVE"].includes(pe(a.status))), [j]),
        Re = !!v,
        at = se ? 1 : 0,
        ze = l.useMemo(() => v || gt || se ? null : j.filter(a => pe(a.status) === "REJECTED").sort((a, r) => new Date(r.createdAt) - new Date(a.createdAt))[0] || null, [j, v, gt, se]),
        ke = l.useMemo(() => {
            const a = ya(L);
            return a ? k.filter(r => {
                const u = [...r.pickupStops || [], ...r.dropStops || []].map(p => p.stopName).join(" ");
                return `${r.routeNumber||""} ${r.routeName||""} ${u}`.toLowerCase().includes(a)
            }) : k
        }, [k, L]),
        w = l.useMemo(() => k.find(a => a.id === H) || null, [k, H]),
        Rt = w ? Nt(w) : 0;
    l.useEffect(() => {
        w || (xe(""), fe("")), xt("pickup")
    }, [w]);
    const I = l.useMemo(() => w ? (G === "pickup" ? w.pickupStops : w.dropStops) || [] : [], [w, G]);
    l.useEffect(() => {
        if (!w) return;
        const r = [...w.pickupStops || [], ...w.dropStops || []].filter(p => p.placeId && !it(p) && !te[p.placeId]);
        if (!r.length) return;
        let u = !1;
        return (async () => {
            const p = await Promise.all(r.map(async A => {
                try {
                    const {
                        data: K
                    } = await D.post("/api/places/details", {
                        placeId: A.placeId
                    }), Q = K ? .location, J = Q ? .lat ? ? Q ? .latitude, Ee = Q ? .lng ? ? Q ? .longitude;
                    if (Number.isFinite(Number(J)) && Number.isFinite(Number(Ee))) return [A.placeId, {
                        lat: Number(J),
                        lng: Number(Ee)
                    }]
                } catch {}
                return null
            }));
            if (u) return;
            const f = {};
            p.filter(Boolean).forEach(([A, K]) => {
                f[A] = K
            }), Object.keys(f).length && ht(A => ({ ...A,
                ...f
            }))
        })(), () => {
            u = !0
        }
    }, [w, te]);
    const Ne = a => a ? it(a) ? {
        lat: Number(a.lat ? ? a.customLat),
        lng: Number(a.lng ? ? a.customLng)
    } : a.customLat != null && a.customLng != null ? {
        lat: Number(a.customLat),
        lng: Number(a.customLng)
    } : a.placeId && te[a.placeId] ? te[a.placeId] : null : null;
    l.useEffect(() => {
        if (!M || !k.length) return;
        const a = new Set,
            r = [];
        if (k.forEach(p => {
                [...p.pickupStops || [], ...p.dropStops || []].forEach(f => {
                    f.placeId && !it(f) && !te[f.placeId] && !a.has(f.placeId) && (a.add(f.placeId), r.push(f.placeId))
                })
            }), !r.length) return;
        let u = !1;
        return (async () => {
            const p = await Promise.all(r.map(async A => {
                try {
                    const {
                        data: K
                    } = await D.post("/api/places/details", {
                        placeId: A
                    }), Q = K ? .location, J = Q ? .lat ? ? Q ? .latitude, Ee = Q ? .lng ? ? Q ? .longitude;
                    if (Number.isFinite(Number(J)) && Number.isFinite(Number(Ee))) return [A, {
                        lat: Number(J),
                        lng: Number(Ee)
                    }]
                } catch {}
                return null
            }));
            if (u) return;
            const f = {};
            p.filter(Boolean).forEach(([A, K]) => {
                f[A] = K
            }), Object.keys(f).length && ht(A => ({ ...A,
                ...f
            }))
        })(), () => {
            u = !0
        }
    }, [M, k, te]);
    const Ft = a => {
            if (!M) return {
                distance: 1 / 0,
                stop: null
            };
            let r = {
                distance: 1 / 0,
                stop: null
            };
            return [...a.pickupStops || [], ...a.dropStops || []].forEach(u => {
                const p = Ne(u);
                if (!p) return;
                const f = va(M, p);
                f < r.distance && (r = {
                    distance: f,
                    stop: u
                })
            }), r
        },
        Ve = l.useMemo(() => M ? k.map(a => ({
            route: a,
            ...Ft(a)
        })).filter(a => Number.isFinite(a.distance)).sort((a, r) => a.distance - r.distance).slice(0, As).map(a => ({ ...a.route,
            _distance: a.distance,
            _nearestStop: a.stop ? .stopDisplayName || a.stop ? .displayName || a.stop ? .stopName || ""
        })) : ke, [M, k, ke, te]);
    l.useEffect(() => {
        M && (Ae(""), xe(""), fe(""))
    }, [M]);
    const us = a => {
            q.current && q.current.abort();
            const r = new AbortController;
            if (q.current = r, !a.trim()) {
                be([]), F(!1);
                return
            }
            D.post("/api/places/autocomplete", {
                input: a,
                sessionToken: et.current,
                languageCode: "en",
                regionCode: "IN"
            }, {
                signal: r.signal
            }).then(({
                data: u
            }) => {
                const p = u ? .suggestions || [];
                be(p), F(p.length > 0)
            }).catch(u => {
                u ? .code !== "ERR_CANCELED" && u ? .name !== "CanceledError" && (be([]), F(!1))
            })
        },
        ge = a => {
            W(a), M && de(null), tt.current && clearTimeout(tt.current), tt.current = setTimeout(() => us(a), 250)
        },
        Gt = async a => {
            const r = a ? .placePrediction,
                u = r ? .placeId,
                p = r ? .text ? .text || "";
            if (F(!1), be([]), !!u) try {
                we(!0);
                const {
                    data: f
                } = await D.post("/api/places/details", {
                    placeId: u,
                    sessionToken: et.current
                }), A = f ? .location, K = A ? .lat ? ? A ? .latitude, Q = A ? .lng ? ? A ? .longitude, J = f ? .formattedAddress || f ? .displayName || p;
                Number.isFinite(Number(K)) && Number.isFinite(Number(Q)) ? (W(J), de({
                    lat: Number(K),
                    lng: Number(Q),
                    address: J
                })) : c("Could not resolve that location. Try another.")
            } catch {
                c("Failed to fetch location details. Please try again.")
            } finally {
                we(!1), et.current = Ms()
            }
        },
        nt = () => {
            if (c(""), typeof navigator > "u" || !navigator.geolocation) {
                c("Geolocation is not supported by your browser.");
                return
            }
            we(!0), F(!1), navigator.geolocation.getCurrentPosition(async a => {
                const r = a.coords.latitude,
                    u = a.coords.longitude;
                try {
                    const {
                        data: p
                    } = await D.post("/api/places/reverse-geocode", {
                        lat: r,
                        lng: u
                    }), f = p ? .formattedAddress || `${r.toFixed(5)}, ${u.toFixed(5)}`;
                    W(f), de({
                        lat: r,
                        lng: u,
                        address: f
                    })
                } catch {
                    W(`${r.toFixed(5)}, ${u.toFixed(5)}`), de({
                        lat: r,
                        lng: u,
                        address: ""
                    })
                } finally {
                    we(!1)
                }
            }, a => {
                we(!1), c(a ? .code === 1 ? "Location permission denied. Allow access or search for your location." : "Could not get your current location. Please search instead.")
            }, {
                enableHighAccuracy: !0,
                timeout: 1e4,
                maximumAge: 0
            })
        },
        _t = () => {
            W(""), de(null), be([]), F(!1)
        },
        Et = a => {
            a !== Xe && (De(a), W(""), de(null), be([]), F(!1))
        };
    l.useEffect(() => {
        const a = r => {
            ee.current ? .contains(r.target) || F(!1)
        };
        return document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a)
    }, []);
    const Fe = a => {
        const r = Ne(a);
        return r ? `${r.lat},${r.lng}` : a ? .stopName || ""
    };
    l.useEffect(() => {
        if (!w) {
            Ze(null);
            return
        }
        const a = I.filter(A => Fe(A));
        if (a.length < 2) {
            Ze(null);
            return
        }
        const r = Fe(a[0]),
            u = Fe(a[a.length - 1]),
            p = a.slice(1, -1).map(Fe);
        let f = !1;
        return D.post("/api/places/directions", {
            origin: r,
            destination: u,
            waypoints: p
        }).then(({
            data: A
        }) => {
            f || Ze(A || null)
        }).catch(() => {
            f || Ze(null)
        }), () => {
            f = !0
        }
    }, [H, G, I, te]);
    const ie = l.useMemo(() => {
        const a = ve ? .encodedPolyline;
        return !a || !Se || !window.google ? .maps ? .geometry ? .encoding ? [] : window.google.maps.geometry.encoding.decodePath(a)
    }, [ve, Se]);
    l.useEffect(() => {
        if (!(!re || !window.google ? .maps) && (ce.current && (ce.current.setMap(null), ce.current = null), ie.length !== 0)) return ce.current = new window.google.maps.Polyline({
            path: ie,
            strokeColor: "#4285f4",
            strokeOpacity: .85,
            strokeWeight: 6,
            geodesic: !0,
            map: re
        }), () => {
            ce.current && (ce.current.setMap(null), ce.current = null)
        }
    }, [re, ie]);
    const $e = l.useMemo(() => {
        if (!w) return [];
        const a = [],
            r = I.filter(u => Fe(u));
        return r.forEach((u, p) => {
            const f = ve ? .stopLocations ? .[p],
                A = Ne(u) || (f && it(f) ? {
                    lat: Number(f.lat),
                    lng: Number(f.lng)
                } : null);
            if (!A) return;
            const K = p === 0,
                Q = p === r.length - 1;
            a.push({
                id: `${G}-${u.id}`,
                position: A,
                kind: K ? "start" : Q ? "end" : "mid",
                label: String(p + 1),
                title: u.stopDisplayName || u.displayName || u.stopName
            })
        }), M && it(M) && a.push({
            id: "you",
            position: {
                lat: Number(M.lat),
                lng: Number(M.lng)
            },
            kind: "you",
            label: "You",
            title: M.address || "Your location"
        }), a
    }, [w, G, I, ve, te, M]);
    l.useEffect(() => {
        if (!re || !window.google ? .maps ? .LatLngBounds || $e.length === 0 && ie.length === 0) return;
        const a = [ie.length, ...$e.map(p => `${p.position.lat.toFixed(5)},${p.position.lng.toFixed(5)}`)].join("|");
        if (a === Tt.current) return;
        Tt.current = a;
        const r = new window.google.maps.LatLngBounds;
        if (ie.forEach(p => r.extend(p)), $e.forEach(p => r.extend(p.position)), ie.length + $e.length === 1) {
            const p = $e[0] ? .position || ie[0];
            re.setCenter(p), re.setZoom(14)
        } else re.fitBounds(r, 48)
    }, [re, $e, ie]);
    const lt = () => {
            c(""), $(""), Ae(""), xe(""), fe(""), W(""), de(null), De("route"), Le(0), Mt(!0)
        },
        Ut = () => Mt(!1),
        _e = a => a === 0 ? !!H : a === 1 ? !!U && !!O : !0,
        qt = async () => {
            if (!H) return c("Please select a route");
            if (!U) return c("Please select a pickup stop");
            if (!O) return c("Please select a drop stop");
            try {
                dt(!0), c(""), $("");
                const {
                    data: a
                } = await D.post("/api/transport-applications/employee/apply", {
                    routeId: H,
                    pickupStopId: U,
                    dropStopId: O
                });
                $(a ? .message || "Transport application submitted."), Ae(""), xe(""), fe(""), Mt(!1), await ue()
            } catch (a) {
                c(a ? .response ? .data ? .message || "Failed to apply for transport")
            } finally {
                dt(!1)
            }
        },
        h = async a => {
            const r = String(a || "").trim();
            if (r) try {
                Pt(r), c(""), $("");
                const {
                    data: u
                } = await D.post(`/api/transport-applications/employee/${r}/pay`);
                $(u ? .message || "Annual transport fee paid. Your pass is now active."), await ue()
            } catch (u) {
                c(u ? .response ? .data ? .message || "Failed to pay annual transport fee")
            } finally {
                Pt("")
            }
        },
        Ge = l.useMemo(() => k.find(a => a.id === Be) || null, [k, Be]),
        Ot = a => {
            c(""), $(""), Lt(a), pt(""), he(""), Te("")
        },
        yt = () => {
            Lt(null), pt(""), he(""), Te("")
        },
        ps = a => {
            pt(a), he(""), Te("")
        },
        ms = async () => {
            if (ut) {
                if (!Be) return c("Please select a route to transfer to");
                if (!Je) return c("Please select a pickup stop");
                if (!mt) return c("Please select a drop stop");
                try {
                    Ye(!0), c(""), $("");
                    const {
                        data: a
                    } = await D.post(`/api/transport-applications/employee/${ut.id}/transfer`, {
                        routeId: Be,
                        pickupStopId: Je,
                        dropStopId: mt
                    });
                    $(a ? .message || "Route transferred. Pay the annual fee to activate your pass."), yt(), await ue()
                } catch (a) {
                    c(a ? .response ? .data ? .message || "Failed to transfer route")
                } finally {
                    Ye(!1)
                }
            }
        },
        xs = v ? {
            id: v.id,
            student_name: v.employeeName,
            register_number: v.bioId,
            photo_url: v.photoUrl,
            routeNumber: v.routeNumber,
            routeName: v.routeName,
            pickup_stop_name: v.pickupStopName,
            pickup_stop_time: v.pickupStopTime,
            drop_stop_name: v.dropStopName,
            drop_stop_time: v.dropStopTime,
            pickup_last_stop_name: v.pickupLastStopName,
            pickup_last_stop_time: v.pickupLastStopTime,
            drop_first_stop_name: v.dropFirstStopName,
            drop_first_stop_time: v.dropFirstStopTime
        } : null,
        Kt = pe(v ? .passType) === "ANNUAL",
        fs = Kt ? "Annual Pass" : "Staff/Faculty Pass",
        hs = Kt ? `${ns(v?.validFrom)} - ${ns(v?.validTo)}` : "Active",
        Qt = a => {
            const r = pe(a ? .passType);
            return r === "ANNUAL" ? "Annual Pass" : r === "MONTHLY" ? "Monthly Pass" : "Awaiting decision"
        },
        rt = a => {
            const r = pe(a ? .status);
            return pe(a ? .passType) === "ANNUAL" && a ? .validFrom ? `${ns(a.validFrom)} - ${ns(a.validTo)}` : r === "ACTIVE" ? "Active" : "-"
        },
        ye = a => pe(a ? .passType) === "ANNUAL" ? a.annualFee : a.monthlyFee;
    return e.jsxs(Ws, {
        title: "Transport Pass",
        onClose: () => n("/dashboard"),
        defaultWidth: 820,
        defaultHeight: 660,
        minWidth: 820,
        minHeight: 560,
        children: [e.jsx("div", {
            className: "h-full p-3 md:p-6 overflow-hidden",
            children: e.jsx("div", {
                className: "h-full flex flex-col overflow-hidden",
                children: Ct === "home" ? e.jsx("div", {
                    className: "flex-1 min-h-0 overflow-y-auto no-scrollbar p-4 md:p-8 flex flex-col items-center",
                    children: e.jsxs("div", {
                        className: "w-full max-w-3xl",
                        children: [e.jsx("div", {
                            className: "mb-6 text-center",
                            children: e.jsx("p", {
                                className: `text-xs ${t.textMuted}`,
                                children: Re ? "Your pass is active — scan, view or track your bus." : "No active pass yet. Open My Applications to apply."
                            })
                        }), e.jsx("div", {
                            className: "grid grid-cols-2 gap-3 sm:gap-4",
                            children: [{
                                key: "scan",
                                title: "Scan to Verify Bus",
                                subtitle: "Check you can board",
                                icon: e.jsx(Vs, {
                                    className: "h-6 w-6"
                                }),
                                gradient: "from-emerald-500 to-teal-600",
                                locked: !Re,
                                onClick: () => z(!0)
                            }, {
                                key: "pass",
                                title: "View Bus Pass",
                                subtitle: "Show your QR pass",
                                icon: e.jsx($t, {
                                    className: "h-6 w-6"
                                }),
                                gradient: "from-blue-500 to-indigo-600",
                                locked: !1,
                                onClick: () => Me("pass")
                            }, {
                                key: "track",
                                title: "Track My Bus",
                                subtitle: "Live bus location",
                                icon: e.jsx(os, {
                                    className: "h-6 w-6"
                                }),
                                gradient: "from-violet-500 to-purple-600",
                                locked: !Re,
                                onClick: () => It(!0)
                            }, {
                                key: "apps",
                                title: "My Applications",
                                subtitle: at ? "Awaiting payment" : st.length ? `${st.length} active` : "Apply for a pass",
                                icon: e.jsx(St, {
                                    className: "h-6 w-6"
                                }),
                                gradient: "from-amber-500 to-orange-600",
                                locked: !1,
                                badge: at,
                                onClick: () => Me("applications")
                            }].map(a => e.jsxs("button", {
                                type: "button",
                                disabled: a.locked,
                                onClick: () => {
                                    a.locked || a.onClick()
                                },
                                className: `group relative overflow-hidden rounded-2xl border p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-3 transition-all duration-200 ${a.locked?"opacity-60 cursor-not-allowed":"hover:-translate-y-0.5 hover:shadow-lg"} ${t.cardWindow}`,
                                children: [a.badge ? e.jsx("span", {
                                    className: "absolute right-2.5 top-2.5 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white shadow",
                                    children: a.badge
                                }) : null, a.locked ? e.jsxs("span", {
                                    className: `absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${t.badgeWarning}`,
                                    children: [e.jsx(cs, {
                                        className: "h-3 w-3"
                                    }), " Locked"]
                                }) : null, e.jsx("span", {
                                    className: `inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${a.gradient} text-white shadow-md transition-transform duration-200 group-hover:scale-110`,
                                    children: a.icon
                                }), e.jsxs("span", {
                                    children: [e.jsx("span", {
                                        className: `block text-sm font-bold leading-tight ${t.textPrimary}`,
                                        children: a.title
                                    }), e.jsx("span", {
                                        className: `mt-0.5 block text-[11px] ${t.textMuted}`,
                                        children: a.subtitle
                                    })]
                                })]
                            }, a.key))
                        }), Re ? null : e.jsxs("p", {
                            className: `mt-4 text-center text-[11px] ${t.textMuted}`,
                            children: [e.jsx(cs, {
                                className: "inline h-3 w-3 -mt-0.5"
                            }), " Scan and Track unlock once you have an active pass."]
                        })]
                    })
                }) : Ct === "pass" ? e.jsxs("div", {
                    className: "flex-1 min-h-0 overflow-y-auto no-scrollbar p-4 md:p-6",
                    children: [e.jsxs("button", {
                        type: "button",
                        onClick: () => Me("home"),
                        className: `${t.btnSecondary} inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold mb-4`,
                        children: [e.jsx(kt, {
                            className: "w-4 h-4"
                        }), " Back"]
                    }), v ? e.jsx("div", {
                        className: "w-full max-w-lg mx-auto space-y-3",
                        children: e.jsx(qs, {
                            application: xs,
                            styles: t,
                            institutionName: x,
                            tokenEndpoint: `/api/transport-applications/employee/${v.id}/pass-token`,
                            passLabelOverride: fs,
                            validityOverride: hs
                        })
                    }) : e.jsxs("div", {
                        className: "flex flex-col items-center justify-center gap-3 py-12 text-center",
                        children: [e.jsx("span", {
                            className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md",
                            children: e.jsx($t, {
                                className: "h-6 w-6"
                            })
                        }), e.jsxs("div", {
                            children: [e.jsx("div", {
                                className: `text-sm font-bold ${t.textPrimary}`,
                                children: "No active pass yet"
                            }), e.jsx("div", {
                                className: `text-xs ${t.textMuted}`,
                                children: "Apply for a bus pass to see it here."
                            })]
                        }), e.jsxs("button", {
                            type: "button",
                            onClick: () => Me("applications"),
                            className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold`,
                            children: [e.jsx(St, {
                                className: "w-4 h-4"
                            }), " Go to My Applications"]
                        })]
                    })]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: `${t.cardWindowHeader} flex items-center justify-between gap-2`,
                        children: [e.jsxs("div", {
                            className: "flex items-center gap-2 min-w-0",
                            children: [e.jsxs("button", {
                                type: "button",
                                onClick: () => Me("home"),
                                className: `${t.btnSecondary} inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold shrink-0`,
                                children: [e.jsx(kt, {
                                    className: "w-4 h-4"
                                }), " Back"]
                            }), e.jsxs("div", {
                                className: "min-w-0",
                                children: [e.jsx("h3", {
                                    className: `text-sm font-bold truncate ${t.textPrimary}`,
                                    children: "My Applications"
                                }), e.jsx("p", {
                                    className: `text-[11px] truncate ${t.textMuted}`,
                                    children: x || "Transport pass"
                                })]
                            })]
                        }), !v && !gt && !se ? e.jsxs("button", {
                            type: "button",
                            onClick: lt,
                            className: `${t.btnPrimary} inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-semibold shrink-0`,
                            children: [e.jsx(me, {
                                className: "w-4 h-4"
                            }), e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Apply for a Pass"
                            }), e.jsx("span", {
                                className: "sm:hidden",
                                children: "Apply"
                            })]
                        }) : null]
                    }), e.jsxs("div", {
                        className: "flex-1 min-h-0 overflow-y-auto no-scrollbar p-3 md:p-4 flex flex-col gap-4",
                        children: [N ? e.jsx("div", {
                            className: "rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700",
                            children: N
                        }) : null, P ? e.jsx("div", {
                            className: "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700",
                            children: P
                        }) : null, ze && !C ? e.jsxs("div", {
                            className: "rounded-xl border border-red-200 bg-red-50 p-4 w-full",
                            children: [e.jsxs("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [e.jsxs("div", {
                                    className: "flex items-start gap-2",
                                    children: [e.jsx(ys, {
                                        className: "w-5 h-5 text-red-500 mt-0.5 shrink-0"
                                    }), e.jsxs("div", {
                                        children: [e.jsx("div", {
                                            className: "text-sm font-semibold text-red-800",
                                            children: "Your previous transport application was rejected"
                                        }), e.jsxs("div", {
                                            className: "mt-0.5 text-xs text-red-700",
                                            children: [Qe(ze), " · ", ze.pickupStopName || "Pickup", " → ", ze.dropStopName || "Drop"]
                                        }), e.jsxs("div", {
                                            className: "mt-0.5 text-[11px] text-red-600",
                                            children: ["Applied on ", Is(ze.createdAt)]
                                        })]
                                    })]
                                }), e.jsx("button", {
                                    type: "button",
                                    onClick: () => T(!0),
                                    "aria-label": "Dismiss",
                                    className: "rounded p-0.5 text-red-400 hover:text-red-600",
                                    children: e.jsx(je, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            }), e.jsx("div", {
                                className: "mt-3",
                                children: e.jsxs("button", {
                                    type: "button",
                                    onClick: lt,
                                    className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold`,
                                    children: [e.jsx(me, {
                                        className: "w-3.5 h-3.5"
                                    }), " Apply Again"]
                                })
                            })]
                        }) : null, y ? e.jsx("div", {
                            className: `rounded-lg border p-4 text-xs ${t.textMuted}`,
                            children: "Loading your applications..."
                        }) : st.length ? e.jsx("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-3",
                            children: st.map(a => {
                                const r = pe(a.status),
                                    u = r === "PENDING",
                                    p = r === "AWAITING_PAYMENT",
                                    f = r === "ACTIVE";
                                return e.jsxs("div", {
                                    className: `rounded-xl border p-4 flex flex-col gap-3 ${t.cardWindow}`,
                                    children: [e.jsxs("div", {
                                        className: "flex items-start justify-between gap-2",
                                        children: [e.jsxs("div", {
                                            className: "min-w-0",
                                            children: [e.jsx("div", {
                                                className: `text-sm font-semibold truncate ${t.textPrimary}`,
                                                children: Qe(a)
                                            }), e.jsxs("div", {
                                                className: `text-xs truncate ${t.textMuted}`,
                                                children: [a.pickupStopName || "Pickup", " → ", a.dropStopName || "Drop"]
                                            })]
                                        }), e.jsx("span", {
                                            className: `shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${f?t.badgeSuccess:p?t.badgeInfo:t.badgeWarning}`,
                                            children: f ? "Active" : p ? "Awaiting Payment" : "Pending Approval"
                                        })]
                                    }), e.jsxs("div", {
                                        className: "grid grid-cols-2 gap-2 text-xs",
                                        children: [e.jsxs("div", {
                                            children: [e.jsx("div", {
                                                className: t.textMuted,
                                                children: "Applied On"
                                            }), e.jsx("div", {
                                                className: `font-semibold ${t.textPrimary}`,
                                                children: Is(a.createdAt)
                                            })]
                                        }), e.jsxs("div", {
                                            children: [e.jsx("div", {
                                                className: t.textMuted,
                                                children: p ? "Annual Fee" : "Fee"
                                            }), e.jsxs("div", {
                                                className: `font-semibold ${t.textPrimary}`,
                                                children: ["₹", Yt(ye(a))]
                                            })]
                                        }), e.jsxs("div", {
                                            children: [e.jsx("div", {
                                                className: t.textMuted,
                                                children: "Pass Type"
                                            }), e.jsx("div", {
                                                className: `font-semibold ${t.textPrimary}`,
                                                children: Qt(a)
                                            })]
                                        }), e.jsxs("div", {
                                            children: [e.jsx("div", {
                                                className: t.textMuted,
                                                children: "Validity"
                                            }), e.jsx("div", {
                                                className: `font-semibold ${t.textPrimary}`,
                                                children: rt(a)
                                            })]
                                        })]
                                    }), u && (a.pendingWith || a.currentStep && a.totalSteps) ? e.jsxs("div", {
                                        className: "text-xs",
                                        children: [e.jsx("span", {
                                            className: t.textMuted,
                                            children: "Pending with: "
                                        }), e.jsx("span", {
                                            className: `font-semibold ${t.textPrimary}`,
                                            children: a.pendingWith || "Approver"
                                        }), a.currentStep && a.totalSteps ? e.jsxs("span", {
                                            className: t.textMuted,
                                            children: [" (Step ", a.currentStep, " of ", a.totalSteps, ")"]
                                        }) : null]
                                    }) : null, p ? e.jsxs("div", {
                                        className: `rounded-lg border ${t.borderColor} p-2.5 flex items-start gap-2 text-[11px] ${t.textMuted}`,
                                        children: [e.jsx(Ps, {
                                            className: "w-3.5 h-3.5 mt-0.5 shrink-0 text-indigo-500"
                                        }), "Your pass is approved for annual payment. Pay the annual fee from your wallet to activate it."]
                                    }) : null, e.jsxs("div", {
                                        className: "mt-auto flex flex-wrap items-center gap-2 pt-1",
                                        children: [f ? e.jsxs("button", {
                                            type: "button",
                                            onClick: () => Me("pass"),
                                            className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold`,
                                            children: [e.jsx($t, {
                                                className: "w-3.5 h-3.5"
                                            }), " View Pass"]
                                        }) : null, p ? e.jsxs(e.Fragment, {
                                            children: [e.jsxs("button", {
                                                type: "button",
                                                onClick: () => Ot(a),
                                                disabled: Ie === a.id || E,
                                                className: `${t.btnOutline} inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                                                children: [e.jsx(os, {
                                                    className: "w-3.5 h-3.5"
                                                }), " Transfer"]
                                            }), e.jsx("button", {
                                                type: "button",
                                                onClick: () => h(a.id),
                                                disabled: Ie === a.id,
                                                className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                                                children: Ie === a.id ? "Processing..." : `Pay ₹${Yt(a.annualFee)}`
                                            })]
                                        }) : null]
                                    })]
                                }, a.id)
                            })
                        }) : e.jsxs("div", {
                            className: `${t.card} rounded-xl p-8 flex flex-col items-center justify-center gap-3 text-center`,
                            children: [e.jsx("span", {
                                className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md",
                                children: e.jsx(St, {
                                    className: "h-6 w-6"
                                })
                            }), e.jsxs("div", {
                                children: [e.jsx("div", {
                                    className: `text-sm font-bold ${t.textPrimary}`,
                                    children: "No passes or applications yet"
                                }), e.jsx("div", {
                                    className: `text-xs ${t.textMuted}`,
                                    children: "Apply for a bus pass to get started."
                                })]
                            }), e.jsxs("button", {
                                type: "button",
                                onClick: lt,
                                className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold`,
                                children: [e.jsx(me, {
                                    className: "w-4 h-4"
                                }), " Apply for a Pass"]
                            })]
                        })]
                    })]
                })
            })
        }), oe ? Wt.createPortal(e.jsxs("div", {
            className: "fixed inset-0 z-[1000] flex items-center justify-center p-4",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: ct ? void 0 : Ut
            }), e.jsxs("div", {
                className: `${t.cardWindow} relative z-10 w-full max-w-xl rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden`,
                children: [e.jsxs("div", {
                    className: `${t.cardWindowHeader} flex items-center justify-between gap-3 p-4`,
                    children: [e.jsx("h3", {
                        className: `text-sm font-bold ${t.textPrimary}`,
                        children: "Apply for a Pass"
                    }), e.jsx("button", {
                        type: "button",
                        onClick: Ut,
                        disabled: ct,
                        "aria-label": "Close",
                        className: `rounded-md border p-1.5 disabled:opacity-50 ${t.textSecondary}`,
                        children: e.jsx(je, {
                            className: "w-4 h-4"
                        })
                    })]
                }), e.jsx("div", {
                    className: "px-4 pt-3",
                    children: e.jsx("div", {
                        className: "flex items-center gap-2",
                        children: ["Route", "Stops", "Confirm"].map((a, r) => {
                            const u = r <= V || Array.from({
                                length: r
                            }).every((p, f) => _e(f));
                            return e.jsxs(Us.Fragment, {
                                children: [e.jsxs("button", {
                                    type: "button",
                                    disabled: !u,
                                    onClick: () => u && Le(r),
                                    className: `flex items-center gap-1.5 ${u?"cursor-pointer":"cursor-not-allowed opacity-60"}`,
                                    children: [e.jsx("span", {
                                        className: `inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${r<V?"bg-emerald-500 text-white":r===V?t.btnPrimary:t.menuItem}`,
                                        children: r < V ? e.jsx(Oe, {
                                            className: "h-3.5 w-3.5"
                                        }) : r + 1
                                    }), e.jsx("span", {
                                        className: `hidden text-[11px] font-semibold sm:block ${r===V?t.textPrimary:t.textMuted}`,
                                        children: a
                                    })]
                                }), r < 2 ? e.jsx("span", {
                                    className: `h-px flex-1 ${r<V?"bg-emerald-500":t.borderColor}`
                                }) : null]
                            }, a)
                        })
                    })
                }), e.jsxs("div", {
                    className: "flex-1 min-h-0 overflow-y-auto no-scrollbar p-4 space-y-3",
                    children: [P ? e.jsx("div", {
                        className: "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700",
                        children: P
                    }) : null, y ? e.jsx("div", {
                        className: `rounded-lg border p-4 text-xs ${t.textMuted}`,
                        children: "Loading transport availability..."
                    }) : k.length === 0 ? e.jsx("div", {
                        className: `${t.card} rounded-xl p-6 text-xs ${t.textMuted}`,
                        children: "No transport routes are currently available."
                    }) : e.jsxs(e.Fragment, {
                        children: [V === 0 ? e.jsxs("div", {
                            className: "space-y-3",
                            children: [e.jsxs("div", {
                                className: "flex flex-wrap gap-2",
                                children: [e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Et("route"),
                                    className: `inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap ${Xe==="route"?t.btnPrimary:t.btnSecondary}`,
                                    children: [e.jsx(me, {
                                        className: "w-3.5 h-3.5"
                                    }), " Route / Stop"]
                                }), e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Et("location"),
                                    className: `inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap ${Xe==="location"?t.btnPrimary:t.btnSecondary}`,
                                    children: [e.jsx(Pe, {
                                        className: "w-3.5 h-3.5"
                                    }), " My Location"]
                                })]
                            }), Xe === "route" ? e.jsxs("div", {
                                className: "relative",
                                children: [e.jsx(Ht, {
                                    className: `absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${t.textMuted}`
                                }), e.jsx("input", {
                                    type: "text",
                                    value: L,
                                    onChange: a => W(a.target.value),
                                    placeholder: "Search by route number, route name or stop name...",
                                    className: `${t.input} w-full pl-9 pr-8 text-xs`
                                }), L ? e.jsx("button", {
                                    type: "button",
                                    onClick: () => W(""),
                                    "aria-label": "Clear",
                                    className: `absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 ${t.textMuted}`,
                                    children: e.jsx(je, {
                                        className: "w-3.5 h-3.5"
                                    })
                                }) : null]
                            }) : e.jsxs(e.Fragment, {
                                children: [e.jsxs("div", {
                                    className: "flex flex-col sm:flex-row gap-2",
                                    children: [e.jsxs("div", {
                                        ref: ee,
                                        className: "relative flex-1",
                                        children: [e.jsx(Pe, {
                                            className: `absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${t.textMuted}`
                                        }), e.jsx("input", {
                                            type: "text",
                                            value: L,
                                            onChange: a => ge(a.target.value),
                                            onFocus: () => {
                                                We.length > 0 && F(!0)
                                            },
                                            placeholder: "Type your location (area, street, landmark)...",
                                            className: `${t.input} w-full pl-9 pr-8 text-xs`
                                        }), L ? e.jsx("button", {
                                            type: "button",
                                            onClick: _t,
                                            "aria-label": "Clear",
                                            className: `absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 ${t.textMuted}`,
                                            children: e.jsx(je, {
                                                className: "w-3.5 h-3.5"
                                            })
                                        }) : null, bt && We.length > 0 ? e.jsx("ul", {
                                            className: `${t.menuPanel} absolute z-50 mt-1 left-0 right-0 max-h-60 overflow-auto p-1 text-[11px]`,
                                            children: We.map((a, r) => {
                                                const u = a ? .placePrediction;
                                                if (!u) return null;
                                                const p = u.structuredFormat ? .mainText ? .text || u.text ? .text || "",
                                                    f = u.structuredFormat ? .secondaryText ? .text || "";
                                                return e.jsxs("li", {
                                                    onMouseDown: A => {
                                                        A.preventDefault(), Gt(a)
                                                    },
                                                    className: `${t.menuItem} px-2.5 py-1.5 cursor-pointer`,
                                                    children: [e.jsx("div", {
                                                        className: `font-medium ${t.textPrimary}`,
                                                        children: p
                                                    }), f ? e.jsx("div", {
                                                        className: `${t.textMuted} text-[10px]`,
                                                        children: f
                                                    }) : null]
                                                }, u.placeId || r)
                                            })
                                        }) : null]
                                    }), e.jsxs("button", {
                                        type: "button",
                                        onClick: nt,
                                        disabled: He,
                                        className: `${t.btnOutline} inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold disabled:opacity-60 whitespace-nowrap`,
                                        children: [e.jsx(Gs, {
                                            className: "w-3.5 h-3.5"
                                        }), He ? "Locating..." : "Use my location"]
                                    })]
                                }), M ? e.jsxs("div", {
                                    className: `flex items-center gap-2 text-[11px] ${t.textMuted}`,
                                    children: [e.jsx(Pe, {
                                        className: "w-3.5 h-3.5 text-indigo-500"
                                    }), e.jsxs("span", {
                                        className: "truncate",
                                        children: ["Showing routes nearest to: ", e.jsx("span", {
                                            className: t.textPrimary,
                                            children: M.address || `${M.lat.toFixed(4)}, ${M.lng.toFixed(4)}`
                                        })]
                                    })]
                                }) : null]
                            }), e.jsx("div", {
                                className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary}`,
                                children: M ? `Nearby Routes (nearest ${As})` : "Available Routes"
                            }), e.jsx("div", {
                                className: "space-y-2 max-h-[52vh] overflow-y-auto no-scrollbar pr-1",
                                children: Ve.map(a => {
                                    const r = a.id === H,
                                        u = M && Number.isFinite(a._distance);
                                    return e.jsx("button", {
                                        type: "button",
                                        onClick: () => {
                                            Ae(a.id), xe(""), fe(""), Le(1)
                                        },
                                        className: `w-full rounded-xl border p-3 text-left transition-colors ${r?t.menuItemActive:t.menuItem}`,
                                        children: e.jsxs("div", {
                                            className: "flex items-center justify-between gap-3",
                                            children: [e.jsxs("div", {
                                                className: "min-w-0 flex-1 space-y-1",
                                                children: [e.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [e.jsx(me, {
                                                        className: `w-4 h-4 ${t.textSecondary}`
                                                    }), e.jsx("div", {
                                                        className: "truncate font-semibold text-xs",
                                                        children: Qe(a)
                                                    })]
                                                }), e.jsxs("div", {
                                                    className: `flex items-center gap-1 text-[11px] font-medium ${t.textSecondary}`,
                                                    children: [e.jsx(Ps, {
                                                        className: "w-3 h-3"
                                                    }), e.jsxs("span", {
                                                        children: ["₹", Yt(Nt(a)), " / month"]
                                                    })]
                                                }), u ? e.jsxs("div", {
                                                    className: `flex items-center gap-1 text-[11px] font-medium ${t.textMuted}`,
                                                    children: [e.jsx(Pe, {
                                                        className: "w-3 h-3"
                                                    }), e.jsxs("span", {
                                                        children: [wa(a._distance), " away", a._nearestStop ? ` • near ${a._nearestStop}` : ""]
                                                    })]
                                                }) : null]
                                            }), e.jsx(ds, {
                                                className: `h-4 w-4 shrink-0 ${t.textMuted}`
                                            })]
                                        })
                                    }, a.id)
                                })
                            })]
                        }) : null, V === 1 && w ? e.jsxs("div", {
                            className: "space-y-4",
                            children: [e.jsxs("div", {
                                children: [e.jsx("div", {
                                    className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary}`,
                                    children: "Selected Route"
                                }), e.jsx("h3", {
                                    className: `mt-1 text-sm font-bold ${t.textPrimary}`,
                                    children: Qe(w)
                                }), e.jsxs("p", {
                                    className: `text-xs ${t.textMuted}`,
                                    children: ["Monthly fee ₹", Yt(Rt)]
                                })]
                            }), e.jsxs("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
                                children: [e.jsxs("div", {
                                    children: [e.jsx("label", {
                                        className: t.label,
                                        children: "Pickup Stop"
                                    }), e.jsx(Ce, {
                                        stops: w.pickupStops || [],
                                        value: U,
                                        onChange: xe,
                                        placeholder: "Select pickup stop",
                                        styles: t,
                                        omitLast: !0
                                    })]
                                }), e.jsxs("div", {
                                    children: [e.jsx("label", {
                                        className: t.label,
                                        children: "Drop Stop"
                                    }), e.jsx(Ce, {
                                        stops: w.dropStops || [],
                                        value: O,
                                        onChange: fe,
                                        placeholder: "Select drop stop",
                                        styles: t,
                                        omitFirst: !0
                                    })]
                                })]
                            }), e.jsxs("div", {
                                children: [e.jsxs("div", {
                                    className: "flex items-center justify-between gap-2 mb-2",
                                    children: [e.jsx("div", {
                                        className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary}`,
                                        children: "Bus Route Map"
                                    }), e.jsxs("div", {
                                        className: "inline-flex rounded-lg border overflow-hidden gap-1",
                                        children: [e.jsxs("button", {
                                            type: "button",
                                            onClick: () => xt("pickup"),
                                            className: `px-3 py-1 text-[11px] font-semibold ${G==="pickup"?t.menuItemActive:t.menuItem}`,
                                            children: ["Pickup (", (w.pickupStops || []).length, ")"]
                                        }), e.jsxs("button", {
                                            type: "button",
                                            onClick: () => xt("drop"),
                                            className: `px-3 py-1 text-[11px] font-semibold ${G==="drop"?t.menuItemActive:t.menuItem}`,
                                            children: ["Drop (", (w.dropStops || []).length, ")"]
                                        })]
                                    })]
                                }), e.jsx("div", {
                                    className: "h-72 w-full overflow-hidden rounded-xl border relative",
                                    children: Vt ? e.jsx("div", {
                                        className: "flex h-full items-center justify-center p-4 text-center text-xs text-red-600",
                                        children: "Failed to load Google Maps."
                                    }) : Se ? e.jsx(Bs, {
                                        mapContainerStyle: {
                                            width: "100%",
                                            height: "100%"
                                        },
                                        center: $e[0] ? .position || ga,
                                        zoom: 12,
                                        onLoad: a => ft(a),
                                        onUnmount: () => ft(null),
                                        options: {
                                            mapTypeControl: !1,
                                            streetViewControl: !1,
                                            fullscreenControl: !1,
                                            clickableIcons: !1
                                        },
                                        children: $e.map(a => e.jsx(Ys, {
                                            position: a.position,
                                            icon: Sa(a.kind),
                                            title: a.title,
                                            label: a.label ? {
                                                text: a.label,
                                                color: "#ffffff",
                                                fontSize: "10px",
                                                fontWeight: "700"
                                            } : void 0,
                                            zIndex: a.kind === "you" ? 4 : a.kind === "mid" ? 1 : 2
                                        }, a.id))
                                    }) : e.jsx("div", {
                                        className: `flex h-full items-center justify-center p-4 text-center text-xs ${t.textMuted}`,
                                        children: "Loading map..."
                                    })
                                }), e.jsxs("div", {
                                    className: `mt-1.5 flex flex-wrap items-center gap-3 text-[11px] ${t.textMuted}`,
                                    children: [e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-4 h-0.5 rounded bg-[#4285f4]"
                                        }), " Bus route"]
                                    }), e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"
                                        }), " First stop"]
                                    }), e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-2.5 h-2.5 rounded-full bg-[#4285f4]"
                                        }), " Stop"]
                                    }), e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-2.5 h-2.5 rounded-full bg-red-500"
                                        }), " Last stop"]
                                    }), M ? e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-2.5 h-2.5 rounded-full bg-indigo-500"
                                        }), " Your location"]
                                    }) : null]
                                })]
                            }), Array.isArray(w.amenities) && w.amenities.length ? e.jsxs("div", {
                                className: `${t.card} rounded-xl p-4`,
                                children: [e.jsx("div", {
                                    className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary} mb-2`,
                                    children: "Amenities"
                                }), e.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: w.amenities.map(a => e.jsx("span", {
                                        className: `rounded-full px-3 py-1 text-[11px] font-semibold ${t.badgeInfo}`,
                                        children: a
                                    }, a))
                                })]
                            }) : null]
                        }) : null, V === 2 && w ? e.jsxs("div", {
                            className: "space-y-3",
                            children: [e.jsx("div", {
                                className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary}`,
                                children: "Review & Confirm"
                            }), e.jsxs("div", {
                                className: `${t.card} rounded-xl p-4 space-y-2.5 text-xs`,
                                children: [e.jsxs("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [e.jsx("span", {
                                        className: t.textMuted,
                                        children: "Route"
                                    }), e.jsx("span", {
                                        className: `font-semibold text-right ${t.textPrimary}`,
                                        children: Qe(w)
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [e.jsx("span", {
                                        className: t.textMuted,
                                        children: "Pickup Stop"
                                    }), e.jsx("span", {
                                        className: `font-semibold text-right ${t.textPrimary}`,
                                        children: (w.pickupStops || []).find(a => a.id === U) ? .stopName || "-"
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [e.jsx("span", {
                                        className: t.textMuted,
                                        children: "Drop Stop"
                                    }), e.jsx("span", {
                                        className: `font-semibold text-right ${t.textPrimary}`,
                                        children: (w.dropStops || []).find(a => a.id === O) ? .stopName || "-"
                                    })]
                                }), e.jsxs("div", {
                                    className: `flex items-center justify-between gap-3 border-t pt-2.5 ${t.borderColor}`,
                                    children: [e.jsx("span", {
                                        className: `font-semibold ${t.textPrimary}`,
                                        children: "Monthly Fee"
                                    }), e.jsxs("span", {
                                        className: `text-sm font-bold ${t.textPrimary}`,
                                        children: ["₹", Yt(Rt)]
                                    })]
                                })]
                            }), e.jsx("p", {
                                className: `text-[11px] ${t.textMuted}`,
                                children: "Submit your application. Once approved, the transport fee is collected via monthly salary deduction, or you'll be asked to pay the annual fee from your wallet."
                            })]
                        }) : null]
                    })]
                }), e.jsxs("div", {
                    className: `${t.cardWindowHeader} flex items-center justify-between gap-3 p-4`,
                    children: [e.jsxs("button", {
                        type: "button",
                        onClick: () => V === 0 ? Ut() : Le(a => a - 1),
                        disabled: ct,
                        className: `${t.btnOutline} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold disabled:opacity-60`,
                        children: [e.jsx(kt, {
                            className: "w-4 h-4"
                        }), " ", V === 0 ? "Cancel" : "Back"]
                    }), e.jsxs("div", {
                        className: `text-[11px] font-semibold ${t.textMuted}`,
                        children: ["Step ", V + 1, " of 3"]
                    }), V < 2 ? e.jsxs("button", {
                        type: "button",
                        onClick: () => Le(a => a + 1),
                        disabled: !_e(V),
                        className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                        children: ["Next ", e.jsx(ds, {
                            className: "w-4 h-4"
                        })]
                    }) : e.jsx("button", {
                        type: "button",
                        onClick: qt,
                        disabled: ct || !H || !U || !O,
                        className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                        children: ct ? "Submitting..." : "Confirm & Apply"
                    })]
                })]
            })]
        }), document.body) : null, ut ? Wt.createPortal(e.jsxs("div", {
            className: "fixed inset-0 z-[1000] flex items-center justify-center p-4",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: E ? void 0 : yt
            }), e.jsxs("div", {
                className: `${t.cardWindow} relative z-10 w-full max-w-md rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden`,
                children: [e.jsxs("div", {
                    className: "flex items-start justify-between gap-3 p-5 pb-3",
                    children: [e.jsxs("div", {
                        children: [e.jsx("h3", {
                            className: `text-sm font-bold ${t.textPrimary}`,
                            children: "Transfer Route"
                        }), e.jsxs("p", {
                            className: `mt-0.5 text-xs ${t.textMuted}`,
                            children: ["Currently ", Qe(ut), ". Pick a new route and stops — you'll pay the new route's annual fee next."]
                        })]
                    }), e.jsx("button", {
                        type: "button",
                        onClick: yt,
                        disabled: E,
                        "aria-label": "Close",
                        className: `rounded-md border p-1.5 disabled:opacity-50 ${t.textSecondary}`,
                        children: e.jsx(je, {
                            className: "w-4 h-4"
                        })
                    })]
                }), e.jsxs("div", {
                    className: "flex-1 min-h-0 overflow-y-auto no-scrollbar px-5 space-y-3 text-xs",
                    children: [e.jsxs("div", {
                        children: [e.jsx("label", {
                            className: t.label,
                            children: "Route"
                        }), e.jsx(ja, {
                            routes: k,
                            value: Be,
                            onChange: ps,
                            styles: t
                        })]
                    }), Ge ? e.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                        children: [e.jsxs("div", {
                            children: [e.jsx("label", {
                                className: t.label,
                                children: "Pickup Stop"
                            }), e.jsx(Ce, {
                                stops: Ge.pickupStops || [],
                                value: Je,
                                onChange: he,
                                placeholder: "Select pickup stop",
                                styles: t,
                                omitLast: !0
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("label", {
                                className: t.label,
                                children: "Drop Stop"
                            }), e.jsx(Ce, {
                                stops: Ge.dropStops || [],
                                value: mt,
                                onChange: Te,
                                placeholder: "Select drop stop",
                                styles: t,
                                omitFirst: !0
                            })]
                        })]
                    }) : null]
                }), e.jsxs("div", {
                    className: "flex items-center justify-end gap-2 p-5 pt-4",
                    children: [e.jsx("button", {
                        type: "button",
                        onClick: yt,
                        disabled: E,
                        className: `${t.btnOutline} px-4 py-2 text-xs font-semibold disabled:opacity-60`,
                        children: "Cancel"
                    }), e.jsx("button", {
                        type: "button",
                        onClick: ms,
                        disabled: E || !Be || !Je || !mt,
                        className: `${t.btnPrimary} px-4 py-2 text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                        children: E ? "Transferring..." : "Confirm Transfer"
                    })]
                })]
            })]
        }), document.body) : null, At ? e.jsx(Hs, {
            styles: t,
            onClose: () => It(!1)
        }) : null, zt ? e.jsx(zs, {
            styles: t,
            onClose: () => z(!1)
        }) : null]
    })
}
const $a = ["geometry"],
    Pa = {
        lat: 13.0827,
        lng: 80.2707
    },
    Ls = 10,
    Ca = n => String(n || "").toLowerCase(),
    Z = n => {
        const i = Number(n || 0);
        return Number.isFinite(i) ? i.toLocaleString("en-IN") : "0"
    },
    Ts = n => {
        if (!n) return "-";
        const i = new Date(n);
        return Number.isNaN(i.getTime()) ? "-" : i.toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
    },
    Ue = n => {
        if (!n) return "Route";
        const i = n.routeName || n.busName || "";
        return i ? `${n.routeNumber} - ${i}` : n.routeNumber || "Route"
    },
    rs = n => {
        if (!n) return "-";
        const i = new Date(n);
        return Number.isNaN(i.getTime()) ? "-" : i.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    };

function Aa({
    routes: n = [],
    value: i,
    onChange: t,
    placeholder: y = "Select a route",
    styles: m
}) {
    const [P, c] = l.useState(!1), [N, $] = l.useState(""), k = l.useRef(null), Y = n.find(x => x.id === i) || null, j = N.trim().toLowerCase(), R = j ? n.filter(x => `${x.routeNumber||""} ${x.routeName||""} ${x.busName||""}`.toLowerCase().includes(j)) : n;
    return l.useEffect(() => {
        const x = _ => {
            k.current ? .contains(_.target) || (c(!1), $(""))
        };
        return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x)
    }, []), e.jsxs("div", {
        ref: k,
        className: "relative",
        children: [e.jsxs("button", {
            type: "button",
            onClick: () => c(x => !x),
            className: `${m.input} w-full text-xs flex items-center justify-between gap-2`,
            children: [e.jsx("span", {
                className: `truncate ${Y?m.textPrimary:m.textMuted}`,
                children: Y ? `${Ue(Y)} · ${Number(Y.vacantSeats??0)} seats` : y
            }), e.jsx(js, {
                className: `w-4 h-4 shrink-0 ${m.textMuted}`
            })]
        }), P ? e.jsxs("div", {
            className: `${m.menuPanel} absolute z-50 mt-1 left-0 right-0 p-1`,
            children: [e.jsxs("div", {
                className: "relative mb-1",
                children: [e.jsx(Ht, {
                    className: `absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${m.textMuted}`
                }), e.jsx("input", {
                    autoFocus: !0,
                    type: "text",
                    value: N,
                    onChange: x => $(x.target.value),
                    placeholder: "Search route...",
                    className: `${m.input} w-full pl-7 text-xs`
                })]
            }), e.jsx("ul", {
                className: "max-h-52 overflow-auto",
                children: R.length ? R.map(x => e.jsx("li", {
                    children: e.jsxs("button", {
                        type: "button",
                        onClick: () => {
                            t(x.id), c(!1), $("")
                        },
                        className: `${m.menuItem} w-full text-left px-2.5 py-1.5 text-xs flex items-center justify-between gap-2`,
                        children: [e.jsx("span", {
                            className: `truncate ${m.textPrimary}`,
                            children: Ue(x)
                        }), e.jsxs("span", {
                            className: "flex items-center gap-2 shrink-0",
                            children: [e.jsxs("span", {
                                className: `text-[10px] font-semibold ${m.textMuted}`,
                                children: [Number(x.vacantSeats ? ? 0), " seats"]
                            }), x.id === i ? e.jsx(Oe, {
                                className: "w-3.5 h-3.5 shrink-0"
                            }) : null]
                        })]
                    })
                }, x.id)) : e.jsx("li", {
                    className: `px-2.5 py-2 text-xs ${m.textMuted}`,
                    children: "No routes found"
                })
            })]
        }) : null]
    })
}
const Ia = () => {
        const n = new Date;
        return n.setHours(0, 0, 0, 0), n
    },
    Ks = n => {
        if (!n ? .valid_to) return !1;
        const i = new Date(n.valid_to);
        return Number.isNaN(i.getTime()) ? !1 : (i.setHours(0, 0, 0, 0), i < Ia())
    },
    Ma = n => {
        const i = String(n ? .status || "").toUpperCase();
        return ["SUBMITTED", "PENDING", "APPROVED"].includes(i) ? !0 : i === "PAID" ? !Ks(n) : !1
    },
    La = n => n ? .valid_from ? String(n.pass_type || "ANNUAL").toUpperCase() === "DAILY" ? rs(n.valid_from) : `${rs(n.valid_from)} - ${rs(n.valid_to)}` : "-",
    ot = n => n && Number.isFinite(Number(n.lat)) && Number.isFinite(Number(n.lng)),
    Ds = () => typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
    Ta = (n, i) => {
        if (!ot(n) || !ot(i)) return 1 / 0;
        const t = 6371e3,
            y = k => k * Math.PI / 180,
            m = y(i.lat - n.lat),
            P = y(i.lng - n.lng),
            c = y(n.lat),
            N = y(i.lat),
            $ = Math.sin(m / 2) ** 2 + Math.cos(c) * Math.cos(N) * Math.sin(P / 2) ** 2;
        return 2 * t * Math.asin(Math.sqrt($))
    },
    Da = n => Number.isFinite(n) ? n < 1e3 ? `${Math.round(n)} m` : `${(n/1e3).toFixed(1)} km` : "",
    Rs = n => {
        const i = String(n || "BOTH").toUpperCase();
        return i === "PICKUP" ? "Pickup" : i === "DROP" ? "Drop" : "Pickup + Drop"
    },
    Fs = 720,
    Ra = n => {
        if (String(n ? .pass_type || "ANNUAL").toUpperCase() !== "DAILY") return null;
        const i = String(n ? .trip_direction || "BOTH").toUpperCase(),
            t = new Date,
            y = t.getHours() * 60 + t.getMinutes();
        return i === "PICKUP" && y >= Fs ? {
            reason: "Your pickup trip pass was valid until 12:00 PM and has expired."
        } : i === "DROP" && y < Fs ? {
            reason: "Your drop trip pass activates at 12:00 PM. You can verify boarding after noon."
        } : null
    },
    Fa = n => {
        if (typeof window > "u" || !window.google ? .maps) return;
        const i = n === "start" ? "#10b981" : n === "end" ? "#ef4444" : n === "you" ? "#6366f1" : "#4285f4";
        return {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: i,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2
        }
    };

function bn() {
    const {
        user: n
    } = ia(), i = String(n ? .role || "").toLowerCase();
    return i === "faculty" || i === "staff" ? e.jsx(ka, {}) : e.jsx(_a, {})
}

function _a() {
    const n = _s(),
        {
            theme: i
        } = Es(),
        t = is[i] ? ? is.default,
        [y, m] = l.useState(!1),
        [P, c] = l.useState(""),
        [N, $] = l.useState([]),
        [k, Y] = l.useState(""),
        [j, R] = l.useState(""),
        [x, _] = l.useState(""),
        [le, X] = l.useState(""),
        [C, T] = l.useState(""),
        [L, W] = l.useState("ANNUAL"),
        [H, Ae] = l.useState(""),
        [U, xe] = l.useState(!0),
        [O, fe] = l.useState(!0),
        [ct, dt] = l.useState(!0),
        [Ie, Pt] = l.useState(!1),
        [Ct, Me] = l.useState(""),
        [At, It] = l.useState(""),
        [zt, z] = l.useState(""),
        [oe, Mt] = l.useState([]),
        [V, Le] = l.useState(!1),
        [ut, Lt] = l.useState(!1),
        [Be, pt] = l.useState(!1),
        [Je, he] = l.useState("home"),
        [mt, Te] = l.useState(!1),
        [E, Ye] = l.useState(0),
        [G, xt] = l.useState(null),
        [re, ft] = l.useState(""),
        [te, ht] = l.useState(""),
        [ve, Ze] = l.useState(!1),
        Tt = l.useRef(new Set),
        [ce, Xe] = l.useState(null),
        [De, M] = l.useState(""),
        [de, We] = l.useState(""),
        [be, bt] = l.useState(""),
        [F, He] = l.useState("ANNUAL"),
        [we, et] = l.useState(""),
        [ee, tt] = l.useState(!0),
        [q, Dt] = l.useState(!0),
        [Se, Vt] = l.useState(!1),
        [ue, Nt] = l.useState("pickup"),
        [v, gt] = l.useState(null),
        [se, st] = l.useState({}),
        [Re, at] = l.useState(null),
        ze = l.useRef(""),
        ke = l.useRef(null),
        [w, Rt] = l.useState("route"),
        [I, Ne] = l.useState(null),
        [Ft, Ve] = l.useState([]),
        [us, ge] = l.useState(!1),
        [Gt, nt] = l.useState(!1),
        _t = l.useRef(Ds()),
        Et = l.useRef(null),
        Fe = l.useRef(null),
        ie = l.useRef(null),
        $e = "AIzaSyCmJGiq8hNUzy0k0O8stA0oud1CN55jQkQ",
        {
            isLoaded: lt,
            loadError: Ut
        } = Os({
            id: "transport-master-maps",
            googleMapsApiKey: $e,
            libraries: $a
        }),
        _e = async () => {
            m(!0), c("");
            try {
                const [s, o] = await Promise.all([D.get("/api/transport-applications/eligible-routes"), D.get("/api/transport-applications/my")]), d = s.data || {}, b = Array.isArray(d.data) ? d.data : [], g = Array.isArray(o ? .data ? .data) ? o.data.data : [];
                $(b), Mt(g), Le(!1), Y(d.meta ? .institutionName || ""), _(""), X(""), T("")
            } catch (s) {
                console.error("Failed to load transport eligibility:", s), c(s ? .response ? .data ? .message || "Failed to load transport availability")
            } finally {
                m(!1)
            }
        };
    l.useEffect(() => {
        _e()
    }, []);
    const qt = l.useMemo(() => {
            const s = Ca(j);
            return s ? N.filter(o => {
                const d = [...o.pickupStops || [], ...o.dropStops || []].map(b => b.stopName).join(" ");
                return `${o.routeNumber||""} ${o.routeName||""} ${d}`.toLowerCase().includes(s)
            }) : N
        }, [N, j]),
        h = l.useMemo(() => N.find(s => s.id === x) || null, [N, x]);
    l.useEffect(() => {
        h || (X(""), T("")), Nt("pickup")
    }, [h]);
    const Ge = l.useMemo(() => h ? (ue === "pickup" ? h.pickupStops : h.dropStops) || [] : [], [h, ue]);
    l.useEffect(() => {
        if (!h) return;
        const o = [...h.pickupStops || [], ...h.dropStops || []].filter(b => b.placeId && !ot(b) && !se[b.placeId]);
        if (!o.length) return;
        let d = !1;
        return (async () => {
            const b = await Promise.all(o.map(async S => {
                try {
                    const {
                        data: ae
                    } = await D.post("/api/places/details", {
                        placeId: S.placeId
                    }), ne = ae ? .location, Ke = ne ? .lat ? ? ne ? .latitude, Bt = ne ? .lng ? ? ne ? .longitude;
                    if (Number.isFinite(Number(Ke)) && Number.isFinite(Number(Bt))) return [S.placeId, {
                        lat: Number(Ke),
                        lng: Number(Bt)
                    }]
                } catch {}
                return null
            }));
            if (d) return;
            const g = {};
            b.filter(Boolean).forEach(([S, ae]) => {
                g[S] = ae
            }), Object.keys(g).length && st(S => ({ ...S,
                ...g
            }))
        })(), () => {
            d = !0
        }
    }, [h, se]);
    const Ot = s => s ? ot(s) ? {
        lat: Number(s.lat ? ? s.customLat),
        lng: Number(s.lng ? ? s.customLng)
    } : s.customLat != null && s.customLng != null ? {
        lat: Number(s.customLat),
        lng: Number(s.customLng)
    } : s.placeId && se[s.placeId] ? se[s.placeId] : null : null;
    l.useEffect(() => {
        if (!I || !N.length) return;
        const s = new Set,
            o = [];
        if (N.forEach(b => {
                [...b.pickupStops || [], ...b.dropStops || []].forEach(g => {
                    g.placeId && !ot(g) && !se[g.placeId] && !s.has(g.placeId) && (s.add(g.placeId), o.push(g.placeId))
                })
            }), !o.length) return;
        let d = !1;
        return (async () => {
            const b = await Promise.all(o.map(async S => {
                try {
                    const {
                        data: ae
                    } = await D.post("/api/places/details", {
                        placeId: S
                    }), ne = ae ? .location, Ke = ne ? .lat ? ? ne ? .latitude, Bt = ne ? .lng ? ? ne ? .longitude;
                    if (Number.isFinite(Number(Ke)) && Number.isFinite(Number(Bt))) return [S, {
                        lat: Number(Ke),
                        lng: Number(Bt)
                    }]
                } catch {}
                return null
            }));
            if (d) return;
            const g = {};
            b.filter(Boolean).forEach(([S, ae]) => {
                g[S] = ae
            }), Object.keys(g).length && st(S => ({ ...S,
                ...g
            }))
        })(), () => {
            d = !0
        }
    }, [I, N, se]);
    const yt = s => {
            if (!I) return {
                distance: 1 / 0,
                stop: null
            };
            let o = {
                distance: 1 / 0,
                stop: null
            };
            return [...s.pickupStops || [], ...s.dropStops || []].forEach(d => {
                const b = Ot(d);
                if (!b) return;
                const g = Ta(I, b);
                g < o.distance && (o = {
                    distance: g,
                    stop: d
                })
            }), o
        },
        ps = l.useMemo(() => I ? N.map(s => ({
            route: s,
            ...yt(s)
        })).filter(s => Number.isFinite(s.distance)).sort((s, o) => s.distance - o.distance).slice(0, Ls).map(s => ({ ...s.route,
            _distance: s.distance,
            _nearestStop: s.stop ? .stopDisplayName || s.stop ? .displayName || s.stop ? .stopName || ""
        })) : qt, [I, N, qt, se]);
    l.useEffect(() => {
        I && (_(""), X(""), T(""), dt(!0))
    }, [I]);
    const ms = s => {
            ie.current && ie.current.abort();
            const o = new AbortController;
            if (ie.current = o, !s.trim()) {
                Ve([]), ge(!1);
                return
            }
            D.post("/api/places/autocomplete", {
                input: s,
                sessionToken: _t.current,
                languageCode: "en",
                regionCode: "IN"
            }, {
                signal: o.signal
            }).then(({
                data: d
            }) => {
                const b = d ? .suggestions || [];
                Ve(b), ge(b.length > 0)
            }).catch(d => {
                d ? .code !== "ERR_CANCELED" && d ? .name !== "CanceledError" && (Ve([]), ge(!1))
            })
        },
        xs = s => {
            R(s), I && Ne(null), Fe.current && clearTimeout(Fe.current), Fe.current = setTimeout(() => ms(s), 250)
        },
        Kt = async s => {
            const o = s ? .placePrediction,
                d = o ? .placeId,
                b = o ? .text ? .text || "";
            if (ge(!1), Ve([]), !!d) try {
                nt(!0);
                const {
                    data: g
                } = await D.post("/api/places/details", {
                    placeId: d,
                    sessionToken: _t.current
                }), S = g ? .location, ae = S ? .lat ? ? S ? .latitude, ne = S ? .lng ? ? S ? .longitude, Ke = g ? .formattedAddress || g ? .displayName || b;
                Number.isFinite(Number(ae)) && Number.isFinite(Number(ne)) ? (R(Ke), Ne({
                    lat: Number(ae),
                    lng: Number(ne),
                    address: Ke
                })) : c("Could not resolve that location. Try another.")
            } catch {
                c("Failed to fetch location details. Please try again.")
            } finally {
                nt(!1), _t.current = Ds()
            }
        },
        fs = () => {
            if (c(""), typeof navigator > "u" || !navigator.geolocation) {
                c("Geolocation is not supported by your browser.");
                return
            }
            nt(!0), ge(!1), navigator.geolocation.getCurrentPosition(async s => {
                const o = s.coords.latitude,
                    d = s.coords.longitude;
                try {
                    const {
                        data: b
                    } = await D.post("/api/places/reverse-geocode", {
                        lat: o,
                        lng: d
                    }), g = b ? .formattedAddress || `${o.toFixed(5)}, ${d.toFixed(5)}`;
                    R(g), Ne({
                        lat: o,
                        lng: d,
                        address: g
                    })
                } catch {
                    R(`${o.toFixed(5)}, ${d.toFixed(5)}`), Ne({
                        lat: o,
                        lng: d,
                        address: ""
                    })
                } finally {
                    nt(!1)
                }
            }, s => {
                nt(!1), c(s ? .code === 1 ? "Location permission denied. Allow access or search for your location." : "Could not get your current location. Please search instead.")
            }, {
                enableHighAccuracy: !0,
                timeout: 1e4,
                maximumAge: 0
            })
        },
        hs = () => {
            R(""), Ne(null), Ve([]), ge(!1)
        },
        Qt = s => {
            s !== w && (Rt(s), R(""), Ne(null), Ve([]), ge(!1))
        };
    l.useEffect(() => {
        const s = o => {
            Et.current ? .contains(o.target) || ge(!1)
        };
        return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s)
    }, []);
    const rt = s => {
        const o = Ot(s);
        return o ? `${o.lat},${o.lng}` : s ? .stopName || ""
    };
    l.useEffect(() => {
        if (!h) {
            at(null);
            return
        }
        const s = Ge.filter(S => rt(S));
        if (s.length < 2) {
            at(null);
            return
        }
        const o = rt(s[0]),
            d = rt(s[s.length - 1]),
            b = s.slice(1, -1).map(rt);
        let g = !1;
        return D.post("/api/places/directions", {
            origin: o,
            destination: d,
            waypoints: b
        }).then(({
            data: S
        }) => {
            g || at(S || null)
        }).catch(() => {
            g || at(null)
        }), () => {
            g = !0
        }
    }, [x, ue, Ge, se]);
    const ye = l.useMemo(() => {
        const s = Re ? .encodedPolyline;
        return !s || !lt || !window.google ? .maps ? .geometry ? .encoding ? [] : window.google.maps.geometry.encoding.decodePath(s)
    }, [Re, lt]);
    l.useEffect(() => {
        if (!(!v || !window.google ? .maps) && (ke.current && (ke.current.setMap(null), ke.current = null), ye.length !== 0)) return ke.current = new window.google.maps.Polyline({
            path: ye,
            strokeColor: "#4285f4",
            strokeOpacity: .85,
            strokeWeight: 6,
            geodesic: !0,
            map: v
        }), () => {
            ke.current && (ke.current.setMap(null), ke.current = null)
        }
    }, [v, ye]);
    const a = l.useMemo(() => {
        if (!h) return [];
        const s = [],
            o = Ge.filter(d => rt(d));
        return o.forEach((d, b) => {
            const g = Re ? .stopLocations ? .[b],
                S = Ot(d) || (g && ot(g) ? {
                    lat: Number(g.lat),
                    lng: Number(g.lng)
                } : null);
            if (!S) return;
            const ae = b === 0,
                ne = b === o.length - 1;
            s.push({
                id: `${ue}-${d.id}`,
                position: S,
                kind: ae ? "start" : ne ? "end" : "mid",
                label: String(b + 1),
                title: d.stopDisplayName || d.displayName || d.stopName
            })
        }), I && ot(I) && s.push({
            id: "you",
            position: {
                lat: Number(I.lat),
                lng: Number(I.lng)
            },
            kind: "you",
            label: "You",
            title: I.address || "Your location"
        }), s
    }, [h, ue, Ge, Re, se, I]);
    l.useEffect(() => {
        if (!v || !window.google ? .maps ? .LatLngBounds || a.length === 0 && ye.length === 0) return;
        const s = [ye.length, ...a.map(b => `${b.position.lat.toFixed(5)},${b.position.lng.toFixed(5)}`)].join("|");
        if (s === ze.current) return;
        ze.current = s;
        const o = new window.google.maps.LatLngBounds;
        if (ye.forEach(b => o.extend(b)), a.forEach(b => o.extend(b.position)), ye.length + a.length === 1) {
            const b = a[0] ? .position || ye[0];
            v.setCenter(b), v.setZoom(14)
        } else v.fitBounds(o, 48)
    }, [v, a, ye]);
    const r = L === "DAILY",
        u = r ? (U ? 1 : 0) + (O ? 1 : 0) : 2,
        p = r ? U : !0,
        f = r ? O : !0,
        A = U && O ? "BOTH" : U ? "PICKUP" : O ? "DROP" : "",
        K = l.useMemo(() => L === "DAILY" ? Number(h ? .dailyFee || 0) * ((U ? 1 : 0) + (O ? 1 : 0)) : Number(h ? .fees || 0), [h, L, U, O]),
        Q = !1,
        J = l.useMemo(() => oe.filter(Ma), [oe]),
        Ee = l.useMemo(() => oe.filter(s => String(s.status || "").toUpperCase() === "PAID" && !Ks(s)), [oe]),
        Jt = Ee.length > 0,
        bs = l.useMemo(() => oe.filter(s => String(s.status || "").toUpperCase() === "APPROVED").length, [oe]),
        qe = l.useMemo(() => oe.filter(s => String(s.status || "").toUpperCase() === "REJECTED").sort((s, o) => new Date(o.createdAt) - new Date(s.createdAt))[0] || null, [oe, Q]),
        Qs = async () => {
            if (!x) {
                c("Please select a route to apply");
                return
            }
            if (r && !U && !O) {
                c("Please select at least one trip (pickup or drop)");
                return
            }
            if (p && !le) {
                c("Please select a pickup stop");
                return
            }
            if (f && !C) {
                c("Please select a drop stop");
                return
            }
            if (L === "DAILY" && !H) {
                c("Please choose a date for the daily pass");
                return
            }
            if (L === "ANNUAL" && Number(h ? .vacantSeats ? ? 0) <= 0) {
                c("Selected route has no annual seats. Choose another route or a daily pass.");
                return
            }
            try {
                Pt(!0), c(""), z("");
                const s = await D.post("/api/transport-applications/apply", {
                    routeId: x,
                    pickupStopId: p ? le : null,
                    dropStopId: f ? C : null,
                    passType: L,
                    passDate: L === "DAILY" ? H : null,
                    tripDirection: r ? A : null
                });
                z(s ? .data ? .message || (r ? "Trip pass booked and paid successfully." : "Transport application submitted successfully")), _(""), X(""), T(""), W("ANNUAL"), Ae(""), xe(!0), fe(!0), Te(!1), await _e()
            } catch (s) {
                c(s ? .response ? .data ? .message || "Failed to submit transport application")
            } finally {
                Pt(!1)
            }
        },
        vs = () => {
            c(""), z(""), _(""), X(""), T(""), W("ANNUAL"), Ae(""), xe(!0), fe(!0), R(""), Ne(null), Rt("route"), dt(!0), Ye(0), Te(!0)
        },
        Ns = () => Te(!1),
        ws = s => s === 0 ? !!x : s === 1 ? (!p || !!le) && (!f || !!C) : s === 2 ? r ? (U || O) && !!H : Number(h ? .vacantSeats ? ? 0) > 0 : !0,
        Js = s => {
            if (c(""), z(""), Le(!0), !N.find(d => d.id === s ? .routeId)) {
                c("That route is no longer available. Please choose another route below.");
                return
            }
            _(s.routeId), X(s.pickupStopId || ""), T(s.dropStopId || ""), W(String(s.pass_type || "ANNUAL").toUpperCase() === "DAILY" ? "DAILY" : "ANNUAL"), dt(!1), Te(!0)
        },
        Ss = s => {
            if (String(s ? .status || "").toUpperCase() !== "PAID") return !1;
            const o = String(s ? .trip_direction || "BOTH").toUpperCase(),
                d = o === "PICKUP" || o === "BOTH",
                b = o === "DROP" || o === "BOTH";
            return d && !s ? .pickupStopId || b && !s ? .dropStopId
        },
        ks = s => {
            c(""), xt(s), ft(s ? .pickupStopId || ""), ht(s ? .dropStopId || "")
        },
        Zt = () => {
            xt(null), ft(""), ht("")
        },
        Xt = l.useMemo(() => G && N.find(s => s.id === G.routeId) || null, [G, N]),
        Zs = async () => {
            if (G) {
                if (!re) {
                    c("Please select a pickup stop");
                    return
                }
                if (!te) {
                    c("Please select a drop stop");
                    return
                }
                try {
                    Ze(!0), c(""), z("");
                    const s = await D.patch(`/api/transport-applications/${G.id}/stops`, {
                        pickupStopId: re,
                        dropStopId: te
                    });
                    z(s ? .data ? .message || "Stop details saved successfully"), Zt(), await _e()
                } catch (s) {
                    c(s ? .response ? .data ? .message || "Failed to save stop details")
                } finally {
                    Ze(!1)
                }
            }
        };
    l.useEffect(() => {
        if (G) return;
        const s = oe.find(Ss);
        s && !Tt.current.has(s.id) && (Tt.current.add(s.id), ks(s))
    }, [oe]);
    const Xs = async s => {
            const o = String(s || "").trim();
            if (o) try {
                Me(o), c(""), z("");
                const d = await D.post(`/api/transport-applications/${o}/cancel`);
                z(d ? .data ? .message || "Transport application cancelled successfully"), await _e()
            } catch (d) {
                c(d ? .response ? .data ? .message || "Failed to cancel transport application")
            } finally {
                Me("")
            }
        },
        ea = async s => {
            const o = String(s || "").trim();
            if (o) try {
                It(o), c(""), z("");
                const d = await D.post(`/api/transport-applications/${o}/pay`);
                z(d ? .data ? .message || "Transport booking paid successfully"), await _e()
            } catch (d) {
                c(d ? .response ? .data ? .message || "Failed to complete transport booking payment")
            } finally {
                It("")
            }
        },
        B = l.useMemo(() => N.find(s => s.id === De) || null, [N, De]),
        jt = F === "DAILY",
        $s = jt ? (ee ? 1 : 0) + (q ? 1 : 0) : 2,
        vt = jt ? ee : !0,
        wt = jt ? q : !0,
        ta = ee && q ? "BOTH" : ee ? "PICKUP" : q ? "DROP" : "",
        sa = l.useMemo(() => F === "DAILY" ? Number(B ? .dailyFee || 0) * ((ee ? 1 : 0) + (q ? 1 : 0)) : Number(B ? .fees || 0), [B, F, ee, q]),
        aa = s => {
            c(""), z(""), Xe(s), M(s.routeId || ""), We(s.pickupStopId || ""), bt(s.dropStopId || ""), He(String(s.pass_type || "ANNUAL").toUpperCase() === "DAILY" ? "DAILY" : "ANNUAL");
            const o = String(s.trip_direction || "BOTH").toUpperCase();
            tt(o === "PICKUP" || o === "BOTH"), Dt(o === "DROP" || o === "BOTH"), et("")
        },
        es = () => {
            Xe(null), M(""), We(""), bt(""), He("ANNUAL"), et(""), tt(!0), Dt(!0)
        },
        na = s => {
            M(s), We(""), bt("");
            const o = N.find(d => d.id === s) || null;
            F === "ANNUAL" && Number(o ? .vacantSeats ? ? 0) <= 0 && Number(o ? .dailyFee) > 0 && He("DAILY")
        },
        la = async () => {
            if (ce) {
                if (!De) return c("Please select a route to transfer to");
                if (jt && !ee && !q) return c("Please select at least one trip (pickup or drop)");
                if (vt && !de) return c("Please select a pickup stop");
                if (wt && !be) return c("Please select a drop stop");
                if (F === "DAILY" && !we) return c("Please choose a date for the daily pass");
                if (F === "ANNUAL" && Number(B ? .vacantSeats ? ? 0) <= 0) return c("Selected route has no annual seats. Choose another route or a trip pass.");
                try {
                    Vt(!0), c(""), z("");
                    const s = await D.post(`/api/transport-applications/${ce.id}/transfer`, {
                        routeId: De,
                        pickupStopId: vt ? de : null,
                        dropStopId: wt ? be : null,
                        passType: F,
                        passDate: F === "DAILY" ? we : null,
                        tripDirection: jt ? ta : null
                    });
                    z(s ? .data ? .message || "Route transferred successfully. Complete payment to confirm."), es(), await _e()
                } catch (s) {
                    c(s ? .response ? .data ? .message || "Failed to transfer route")
                } finally {
                    Vt(!1)
                }
            }
        };
    return e.jsxs(Ws, {
        title: "Transport Application",
        onClose: () => n("/dashboard"),
        defaultWidth: 820,
        defaultHeight: 660,
        minWidth: 820,
        minHeight: 560,
        children: [e.jsx("div", {
            className: "h-full p-3 md:p-6 overflow-hidden",
            children: e.jsx("div", {
                className: " h-full flex flex-col overflow-hidden",
                children: Je === "home" ? e.jsx("div", {
                    className: "flex-1 min-h-0 overflow-y-auto no-scollbar p-4 md:p-8 flex flex-col items-center",
                    children: e.jsxs("div", {
                        className: "w-full max-w-3xl",
                        children: [e.jsx("div", {
                            className: "mb-6 text-center",
                            children: e.jsx("p", {
                                className: `text-xs ${t.textMuted}`,
                                children: Jt ? "Your pass is active — scan, view or track your bus." : "No active pass yet. Open My Applications to apply."
                            })
                        }), e.jsx("div", {
                            className: "grid grid-cols-2 gap-3 sm:gap-4",
                            children: [{
                                key: "scan",
                                title: "Scan to Verify Bus",
                                subtitle: "Check you can board",
                                icon: e.jsx(Vs, {
                                    className: "h-6 w-6"
                                }),
                                gradient: "from-emerald-500 to-teal-600",
                                locked: !Jt,
                                onClick: () => pt(!0)
                            }, {
                                key: "pass",
                                title: "View Bus Pass",
                                subtitle: "Show your QR pass",
                                icon: e.jsx($t, {
                                    className: "h-6 w-6"
                                }),
                                gradient: "from-blue-500 to-indigo-600",
                                locked: !1,
                                onClick: () => he("pass")
                            }, {
                                key: "track",
                                title: "Track My Bus",
                                subtitle: "Live bus location",
                                icon: e.jsx(os, {
                                    className: "h-6 w-6"
                                }),
                                gradient: "from-violet-500 to-purple-600",
                                locked: !Jt,
                                onClick: () => Lt(!0)
                            }, {
                                key: "apps",
                                title: "My Applications",
                                subtitle: bs ? `${bs} awaiting payment` : J.length ? `${J.length} active` : "Apply for a pass",
                                icon: e.jsx(St, {
                                    className: "h-6 w-6"
                                }),
                                gradient: "from-amber-500 to-orange-600",
                                locked: !1,
                                badge: bs,
                                onClick: () => he("applications")
                            }].map(s => e.jsxs("button", {
                                type: "button",
                                disabled: s.locked,
                                onClick: () => {
                                    s.locked || s.onClick()
                                },
                                className: `group relative overflow-hidden rounded-2xl border p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-3 transition-all duration-200 ${s.locked?"opacity-60 cursor-not-allowed":"hover:-translate-y-0.5 hover:shadow-lg"} ${t.cardWindow}`,
                                children: [s.badge ? e.jsx("span", {
                                    className: "absolute right-2.5 top-2.5 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white shadow",
                                    children: s.badge
                                }) : null, s.locked ? e.jsxs("span", {
                                    className: `absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${t.badgeWarning}`,
                                    children: [e.jsx(cs, {
                                        className: "h-3 w-3"
                                    }), " Locked"]
                                }) : null, e.jsx("span", {
                                    className: `inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-md transition-transform duration-200 group-hover:scale-110`,
                                    children: s.icon
                                }), e.jsxs("span", {
                                    children: [e.jsx("span", {
                                        className: `block text-sm font-bold leading-tight ${t.textPrimary}`,
                                        children: s.title
                                    }), e.jsx("span", {
                                        className: `mt-0.5 block text-[11px] ${t.textMuted}`,
                                        children: s.subtitle
                                    })]
                                })]
                            }, s.key))
                        }), Jt ? null : e.jsxs("p", {
                            className: `mt-4 text-center text-[11px] ${t.textMuted}`,
                            children: [e.jsx(cs, {
                                className: "inline h-3 w-3 -mt-0.5"
                            }), " Scan and Track unlock once you have an active (paid) pass."]
                        })]
                    })
                }) : Je === "pass" ? e.jsxs("div", {
                    className: "flex-1 min-h-0 overflow-y-auto no-scollbar p-4 md:p-6",
                    children: [e.jsxs("button", {
                        type: "button",
                        onClick: () => he("home"),
                        className: `${t.btnSecondary} inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold mb-4`,
                        children: [e.jsx(kt, {
                            className: "w-4 h-4"
                        }), " Back"]
                    }), Ee.length ? e.jsx("div", {
                        className: "space-y-6",
                        children: Ee.map(s => e.jsx("div", {
                            className: "w-full max-w-lg mx-auto space-y-3",
                            children: e.jsx(qs, {
                                application: s,
                                styles: t,
                                institutionName: k
                            })
                        }, s.id))
                    }) : e.jsxs("div", {
                        className: "flex flex-col items-center justify-center gap-3 py-12 text-center",
                        children: [e.jsx("span", {
                            className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md",
                            children: e.jsx($t, {
                                className: "h-6 w-6"
                            })
                        }), e.jsxs("div", {
                            children: [e.jsx("div", {
                                className: `text-sm font-bold ${t.textPrimary}`,
                                children: "No active pass yet"
                            }), e.jsx("div", {
                                className: `text-xs ${t.textMuted}`,
                                children: "Apply for a bus pass to see it here."
                            })]
                        }), e.jsxs("button", {
                            type: "button",
                            onClick: () => he("applications"),
                            className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold`,
                            children: [e.jsx(St, {
                                className: "w-4 h-4"
                            }), " Go to My Applications"]
                        })]
                    })]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: `${t.cardWindowHeader} flex items-center justify-between gap-2`,
                        children: [e.jsxs("div", {
                            className: "flex items-center gap-2 min-w-0",
                            children: [e.jsxs("button", {
                                type: "button",
                                onClick: () => he("home"),
                                className: `${t.btnSecondary} inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold shrink-0`,
                                children: [e.jsx(kt, {
                                    className: "w-4 h-4"
                                }), " Back"]
                            }), e.jsxs("div", {
                                className: "min-w-0",
                                children: [e.jsx("h3", {
                                    className: `text-sm font-bold truncate ${t.textPrimary}`,
                                    children: "My Applications"
                                }), e.jsx("p", {
                                    className: `text-[11px] truncate ${t.textMuted}`,
                                    children: J.length ? `${J.length} active pass${J.length>1?"es":""}` : "No active passes yet"
                                })]
                            })]
                        }), e.jsxs("button", {
                            type: "button",
                            onClick: vs,
                            className: `${t.btnPrimary} inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-semibold shrink-0`,
                            children: [e.jsx(me, {
                                className: "w-4 h-4"
                            }), e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Apply for a Pass"
                            }), e.jsx("span", {
                                className: "sm:hidden",
                                children: "Apply"
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex-1 min-h-0 overflow-y-auto no-scrollbar p-3 md:p-4 flex flex-col gap-4",
                        children: [zt ? e.jsx("div", {
                            className: "rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700",
                            children: zt
                        }) : null, P ? e.jsx("div", {
                            className: "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700",
                            children: P
                        }) : null, qe && !V ? e.jsxs("div", {
                            className: "rounded-xl border border-red-200 bg-red-50 p-4 w-full max-w-3xl",
                            children: [e.jsxs("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [e.jsxs("div", {
                                    className: "flex items-start gap-2",
                                    children: [e.jsx(ys, {
                                        className: "w-5 h-5 text-red-500 mt-0.5 shrink-0"
                                    }), e.jsxs("div", {
                                        children: [e.jsx("div", {
                                            className: "text-sm font-semibold text-red-800",
                                            children: "Your previous transport application was rejected"
                                        }), e.jsxs("div", {
                                            className: "mt-0.5 text-xs text-red-700",
                                            children: [Ue(qe), " · ", qe.pickup_stop_name || "Pickup", " → ", qe.drop_stop_name || "Drop"]
                                        }), e.jsxs("div", {
                                            className: "mt-0.5 text-[11px] text-red-600",
                                            children: ["Applied on ", Ts(qe.createdAt)]
                                        })]
                                    })]
                                }), e.jsx("button", {
                                    type: "button",
                                    onClick: () => Le(!0),
                                    "aria-label": "Dismiss",
                                    className: "rounded p-0.5 text-red-400 hover:text-red-600",
                                    children: e.jsx(je, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            }), qe.remarks ? e.jsxs("div", {
                                className: "mt-2 rounded-lg border border-red-200 bg-white/70 px-3 py-2",
                                children: [e.jsx("div", {
                                    className: "text-[11px] font-semibold uppercase tracking-wider text-red-500",
                                    children: "Rejection Remarks"
                                }), e.jsx("div", {
                                    className: "mt-0.5 text-xs text-red-800",
                                    children: qe.remarks
                                })]
                            }) : e.jsx("div", {
                                className: "mt-2 text-xs italic text-red-600",
                                children: "No remarks were provided by the approver."
                            }), e.jsx("div", {
                                className: "mt-3",
                                children: e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Js(qe),
                                    className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold`,
                                    children: [e.jsx(me, {
                                        className: "w-3.5 h-3.5"
                                    }), "Reapply"]
                                })
                            })]
                        }) : null, y ? e.jsx("div", {
                            className: `rounded-lg border p-4 text-xs ${t.textMuted}`,
                            children: "Loading your applications..."
                        }) : J.length ? e.jsx("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-3",
                            children: J.map(s => {
                                const o = Number(s.fees || 0),
                                    d = String(s.status || "").toUpperCase(),
                                    b = ["SUBMITTED", "PENDING"].includes(d),
                                    g = d === "APPROVED",
                                    S = d === "PAID",
                                    ae = S ? Ra(s) : null;
                                return e.jsxs("div", {
                                    className: `rounded-xl border p-4 flex flex-col gap-3 ${t.cardWindow}`,
                                    children: [e.jsxs("div", {
                                        className: "flex items-start justify-between gap-2",
                                        children: [e.jsxs("div", {
                                            className: "min-w-0",
                                            children: [e.jsx("div", {
                                                className: `text-sm font-semibold truncate ${t.textPrimary}`,
                                                children: Ue(s)
                                            }), e.jsxs("div", {
                                                className: `text-xs truncate ${t.textMuted}`,
                                                children: [s.pickup_stop_name || "Pickup", " → ", s.drop_stop_name || "Drop"]
                                            })]
                                        }), e.jsx("span", {
                                            className: `shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${S?t.badgeSuccess:g?t.badgeInfo:t.badgeWarning}`,
                                            children: S ? ae ? "Not boardable now" : "Active" : s.status || "-"
                                        })]
                                    }), S && Ss(s) ? e.jsx("div", {
                                        className: "rounded-lg border border-amber-200 bg-amber-50 p-2.5",
                                        children: e.jsxs("div", {
                                            className: "flex flex-wrap items-center justify-between gap-2",
                                            children: [e.jsxs("div", {
                                                className: "flex items-start gap-2",
                                                children: [e.jsx(Pe, {
                                                    className: "w-4 h-4 text-amber-600 mt-0.5 shrink-0"
                                                }), e.jsx("div", {
                                                    className: "text-[11px] text-amber-800",
                                                    children: "Your pickup & drop stops are missing."
                                                })]
                                            }), e.jsxs("button", {
                                                type: "button",
                                                onClick: () => ks(s),
                                                className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold`,
                                                children: [e.jsx(Pe, {
                                                    className: "w-3.5 h-3.5"
                                                }), "Add Stops"]
                                            })]
                                        })
                                    }) : null, e.jsxs("div", {
                                        className: "grid grid-cols-2 gap-2 text-xs",
                                        children: [e.jsxs("div", {
                                            children: [e.jsx("div", {
                                                className: t.textMuted,
                                                children: "Applied On"
                                            }), e.jsx("div", {
                                                className: `font-semibold ${t.textPrimary}`,
                                                children: Ts(s.createdAt)
                                            })]
                                        }), e.jsxs("div", {
                                            children: [e.jsx("div", {
                                                className: t.textMuted,
                                                children: "Total Fee"
                                            }), e.jsxs("div", {
                                                className: `font-semibold ${t.textPrimary}`,
                                                children: ["₹", Z(o)]
                                            })]
                                        }), e.jsxs("div", {
                                            children: [e.jsx("div", {
                                                className: t.textMuted,
                                                children: "Pass Type"
                                            }), e.jsx("div", {
                                                className: `font-semibold ${t.textPrimary}`,
                                                children: String(s.pass_type || "ANNUAL").toUpperCase() === "DAILY" ? `Trip Pass · ${Rs(s.trip_direction)}` : "Annual Pass"
                                            })]
                                        }), e.jsxs("div", {
                                            children: [e.jsx("div", {
                                                className: t.textMuted,
                                                children: "Validity"
                                            }), e.jsx("div", {
                                                className: `font-semibold ${t.textPrimary}`,
                                                children: La(s)
                                            })]
                                        })]
                                    }), b && (s.pending_with || s.current_step && s.total_steps) ? e.jsxs("div", {
                                        className: "text-xs",
                                        children: [e.jsx("span", {
                                            className: t.textMuted,
                                            children: "Pending with: "
                                        }), e.jsx("span", {
                                            className: `font-semibold ${t.textPrimary}`,
                                            children: s.pending_with || "Approver"
                                        }), s.current_step && s.total_steps ? e.jsxs("span", {
                                            className: t.textMuted,
                                            children: [" (Step ", s.current_step, " of ", s.total_steps, ")"]
                                        }) : null]
                                    }) : null, s.remarks ? e.jsxs("div", {
                                        className: "text-xs",
                                        children: [e.jsx("span", {
                                            className: t.textMuted,
                                            children: "Remarks: "
                                        }), e.jsx("span", {
                                            className: t.textPrimary,
                                            children: s.remarks
                                        })]
                                    }) : null, e.jsxs("div", {
                                        className: "mt-auto flex flex-wrap items-center gap-2 pt-1",
                                        children: [S ? e.jsxs("button", {
                                            type: "button",
                                            onClick: () => he("pass"),
                                            className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold`,
                                            children: [e.jsx($t, {
                                                className: "w-3.5 h-3.5"
                                            }), "View Pass"]
                                        }) : null, b ? e.jsxs("button", {
                                            type: "button",
                                            onClick: () => Xs(s.id),
                                            disabled: Ct === s.id,
                                            className: `${t.btnOutline} inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold disabled:opacity-60`,
                                            children: [e.jsx(ys, {
                                                className: "w-3.5 h-3.5"
                                            }), Ct === s.id ? "Cancelling..." : "Cancel"]
                                        }) : null, g ? e.jsxs(e.Fragment, {
                                            children: [e.jsxs("button", {
                                                type: "button",
                                                onClick: () => aa(s),
                                                disabled: At === s.id || Se,
                                                className: `${t.btnOutline} inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                                                children: [e.jsx(os, {
                                                    className: "w-3.5 h-3.5"
                                                }), "Transfer"]
                                            }), e.jsx("button", {
                                                type: "button",
                                                onClick: () => ea(s.id),
                                                disabled: At === s.id,
                                                className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                                                children: At === s.id ? "Processing..." : `Pay ₹${Z(o)}`
                                            })]
                                        }) : null]
                                    })]
                                }, s.id)
                            })
                        }) : e.jsxs("div", {
                            className: `${t.card} rounded-xl p-8 flex flex-col items-center justify-center gap-3 text-center`,
                            children: [e.jsx("span", {
                                className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md",
                                children: e.jsx(St, {
                                    className: "h-6 w-6"
                                })
                            }), e.jsxs("div", {
                                children: [e.jsx("div", {
                                    className: `text-sm font-bold ${t.textPrimary}`,
                                    children: "No passes or applications yet"
                                }), e.jsx("div", {
                                    className: `text-xs ${t.textMuted}`,
                                    children: "Apply for a bus pass to get started."
                                })]
                            }), e.jsxs("button", {
                                type: "button",
                                onClick: vs,
                                className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold`,
                                children: [e.jsx(me, {
                                    className: "w-4 h-4"
                                }), " Apply for a Pass"]
                            })]
                        })]
                    })]
                })
            })
        }), mt ? Wt.createPortal(e.jsxs("div", {
            className: "fixed inset-0 z-[1000] flex items-center justify-center p-4",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: Ie ? void 0 : Ns
            }), e.jsxs("div", {
                className: `${t.cardWindow} relative z-10 w-full max-w-xl rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden`,
                children: [e.jsxs("div", {
                    className: `${t.cardWindowHeader} flex items-center justify-between gap-3 p-4`,
                    children: [e.jsx("div", {
                        children: e.jsx("h3", {
                            className: `text-sm font-bold ${t.textPrimary}`,
                            children: "Apply for a Pass"
                        })
                    }), e.jsx("button", {
                        type: "button",
                        onClick: Ns,
                        disabled: Ie,
                        "aria-label": "Close",
                        className: `rounded-md border p-1.5 disabled:opacity-50 ${t.textSecondary}`,
                        children: e.jsx(je, {
                            className: "w-4 h-4"
                        })
                    })]
                }), e.jsx("div", {
                    className: "px-4 pt-3",
                    children: e.jsx("div", {
                        className: "flex items-center gap-2",
                        children: ["Route", "Stops", "Pass", "Confirm"].map((s, o) => {
                            const d = o <= E || Array.from({
                                length: o
                            }).every((b, g) => ws(g));
                            return e.jsxs(Us.Fragment, {
                                children: [e.jsxs("button", {
                                    type: "button",
                                    disabled: !d,
                                    onClick: () => d && Ye(o),
                                    className: `flex items-center gap-1.5 ${d?"cursor-pointer":"cursor-not-allowed opacity-60"}`,
                                    children: [e.jsx("span", {
                                        className: `inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${o<E?"bg-emerald-500 text-white":o===E?t.btnPrimary:t.menuItem}`,
                                        children: o < E ? e.jsx(Oe, {
                                            className: "h-3.5 w-3.5"
                                        }) : o + 1
                                    }), e.jsx("span", {
                                        className: `hidden text-[11px] font-semibold sm:block ${o===E?t.textPrimary:t.textMuted}`,
                                        children: s
                                    })]
                                }), o < 3 ? e.jsx("span", {
                                    className: `h-px flex-1 ${o<E?"bg-emerald-500":t.borderColor}`
                                }) : null]
                            }, s)
                        })
                    })
                }), e.jsxs("div", {
                    className: "flex-1 min-h-0 overflow-y-auto no-scrollbar p-4 space-y-3",
                    children: [P ? e.jsx("div", {
                        className: "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700",
                        children: P
                    }) : null, y ? e.jsx("div", {
                        className: `rounded-lg border p-4 text-xs ${t.textMuted}`,
                        children: "Loading transport availability..."
                    }) : N.length === 0 ? e.jsx("div", {
                        className: `${t.card} rounded-xl p-6 text-xs ${t.textMuted}`,
                        children: "No transport routes are currently available."
                    }) : e.jsxs(e.Fragment, {
                        children: [E === 0 ? e.jsxs("div", {
                            className: "space-y-3",
                            children: [e.jsxs("div", {
                                className: "flex flex-wrap gap-2",
                                children: [e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Qt("route"),
                                    className: `inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap ${w==="route"?t.btnPrimary:t.btnSecondary}`,
                                    children: [e.jsx(me, {
                                        className: "w-3.5 h-3.5"
                                    }), "Route / Stop"]
                                }), e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Qt("location"),
                                    className: `inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap ${w==="location"?t.btnPrimary:t.btnSecondary}`,
                                    children: [e.jsx(Pe, {
                                        className: "w-3.5 h-3.5"
                                    }), "My Location"]
                                })]
                            }), w === "route" ? e.jsxs("div", {
                                className: "relative",
                                children: [e.jsx(Ht, {
                                    className: `absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${t.textMuted}`
                                }), e.jsx("input", {
                                    type: "text",
                                    value: j,
                                    onChange: s => R(s.target.value),
                                    placeholder: "Search by route number, route name or stop name...",
                                    className: `${t.input} w-full pl-9 pr-8 text-xs`
                                }), j ? e.jsx("button", {
                                    type: "button",
                                    onClick: () => R(""),
                                    "aria-label": "Clear",
                                    className: `absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 ${t.textMuted}`,
                                    children: e.jsx(je, {
                                        className: "w-3.5 h-3.5"
                                    })
                                }) : null]
                            }) : e.jsxs(e.Fragment, {
                                children: [e.jsxs("div", {
                                    className: "flex flex-col sm:flex-row gap-2",
                                    children: [e.jsxs("div", {
                                        ref: Et,
                                        className: "relative flex-1",
                                        children: [e.jsx(Pe, {
                                            className: `absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${t.textMuted}`
                                        }), e.jsx("input", {
                                            type: "text",
                                            value: j,
                                            onChange: s => xs(s.target.value),
                                            onFocus: () => {
                                                Ft.length > 0 && ge(!0)
                                            },
                                            placeholder: "Type your location (area, street, landmark)...",
                                            className: `${t.input} w-full pl-9 pr-8 text-xs`
                                        }), j ? e.jsx("button", {
                                            type: "button",
                                            onClick: hs,
                                            "aria-label": "Clear",
                                            className: `absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 ${t.textMuted}`,
                                            children: e.jsx(je, {
                                                className: "w-3.5 h-3.5"
                                            })
                                        }) : null, us && Ft.length > 0 ? e.jsx("ul", {
                                            className: `${t.menuPanel} absolute z-50 mt-1 left-0 right-0 max-h-60 overflow-auto p-1 text-[11px]`,
                                            children: Ft.map((s, o) => {
                                                const d = s ? .placePrediction;
                                                if (!d) return null;
                                                const b = d.structuredFormat ? .mainText ? .text || d.text ? .text || "",
                                                    g = d.structuredFormat ? .secondaryText ? .text || "";
                                                return e.jsxs("li", {
                                                    onMouseDown: S => {
                                                        S.preventDefault(), Kt(s)
                                                    },
                                                    className: `${t.menuItem} px-2.5 py-1.5 cursor-pointer`,
                                                    children: [e.jsx("div", {
                                                        className: `font-medium ${t.textPrimary}`,
                                                        children: b
                                                    }), g ? e.jsx("div", {
                                                        className: `${t.textMuted} text-[10px]`,
                                                        children: g
                                                    }) : null]
                                                }, d.placeId || o)
                                            })
                                        }) : null]
                                    }), e.jsxs("button", {
                                        type: "button",
                                        onClick: fs,
                                        disabled: Gt,
                                        className: `${t.btnOutline} inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold disabled:opacity-60 whitespace-nowrap`,
                                        children: [e.jsx(Gs, {
                                            className: "w-3.5 h-3.5"
                                        }), Gt ? "Locating..." : "Use my location"]
                                    })]
                                }), I ? e.jsxs("div", {
                                    className: `flex items-center gap-2 text-[11px] ${t.textMuted}`,
                                    children: [e.jsx(Pe, {
                                        className: "w-3.5 h-3.5 text-indigo-500"
                                    }), e.jsxs("span", {
                                        className: "truncate",
                                        children: ["Showing routes nearest to: ", e.jsx("span", {
                                            className: t.textPrimary,
                                            children: I.address || `${I.lat.toFixed(4)}, ${I.lng.toFixed(4)}`
                                        })]
                                    })]
                                }) : null]
                            }), e.jsx("div", {
                                className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary}`,
                                children: I ? `Nearby Routes (nearest ${Ls})` : "Available Routes"
                            }), e.jsx("div", {
                                className: "space-y-2 max-h-[52vh] overflow-y-auto no-scrollbar pr-1",
                                children: ps.map(s => {
                                    const o = s.id === x,
                                        d = I && Number.isFinite(s._distance);
                                    return e.jsx("button", {
                                        type: "button",
                                        onClick: () => {
                                            _(s.id), X(""), T(""), Ye(1)
                                        },
                                        className: `w-full rounded-xl border p-3 text-left transition-colors ${o?t.menuItemActive:t.menuItem}`,
                                        children: e.jsxs("div", {
                                            className: "flex items-center justify-between gap-3",
                                            children: [e.jsxs("div", {
                                                className: "min-w-0 flex-1 space-y-1",
                                                children: [e.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [e.jsx(me, {
                                                        className: `w-4 h-4 ${t.textSecondary}`
                                                    }), e.jsx("div", {
                                                        className: "truncate font-semibold text-xs",
                                                        children: Ue(s)
                                                    })]
                                                }), d ? e.jsxs("div", {
                                                    className: `flex items-center gap-1 text-[11px] font-medium ${t.textSecondary}`,
                                                    children: [e.jsx(Pe, {
                                                        className: "w-3 h-3"
                                                    }), e.jsxs("span", {
                                                        children: [Da(s._distance), " away", s._nearestStop ? ` • near ${s._nearestStop}` : ""]
                                                    })]
                                                }) : null]
                                            }), e.jsx(ds, {
                                                className: `h-4 w-4 shrink-0 ${t.textMuted}`
                                            })]
                                        })
                                    }, s.id)
                                })
                            })]
                        }) : null, E === 1 && h ? e.jsxs("div", {
                            className: "space-y-4",
                            children: [e.jsxs("div", {
                                children: [e.jsx("div", {
                                    className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary}`,
                                    children: "Selected Route"
                                }), e.jsx("h3", {
                                    className: `mt-1 text-sm font-bold ${t.textPrimary}`,
                                    children: Ue(h)
                                }), e.jsxs("p", {
                                    className: `text-xs ${t.textMuted}`,
                                    children: [h.vacantSeats ? ? 0, " of ", h.capacity ? ? 0, " seats vacant"]
                                })]
                            }), e.jsxs("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
                                children: [e.jsxs("div", {
                                    className: p ? "" : "opacity-50",
                                    children: [e.jsxs("label", {
                                        className: t.label,
                                        children: ["Pickup Stop", p ? "" : " (not needed)"]
                                    }), e.jsx(Ce, {
                                        stops: h.pickupStops || [],
                                        value: le,
                                        onChange: X,
                                        placeholder: "Select pickup stop",
                                        styles: t,
                                        disabled: !p,
                                        omitLast: !0
                                    })]
                                }), e.jsxs("div", {
                                    className: f ? "" : "opacity-50",
                                    children: [e.jsxs("label", {
                                        className: t.label,
                                        children: ["Drop Stop", f ? "" : " (not needed)"]
                                    }), e.jsx(Ce, {
                                        stops: h.dropStops || [],
                                        value: C,
                                        onChange: T,
                                        placeholder: "Select drop stop",
                                        styles: t,
                                        disabled: !f,
                                        omitFirst: !0
                                    })]
                                })]
                            }), e.jsxs("div", {
                                children: [e.jsxs("div", {
                                    className: "flex items-center justify-between gap-2 mb-2",
                                    children: [e.jsx("div", {
                                        className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary}`,
                                        children: "Bus Route Map"
                                    }), e.jsxs("div", {
                                        className: "inline-flex rounded-lg border overflow-hidden gap-1",
                                        children: [e.jsxs("button", {
                                            type: "button",
                                            onClick: () => Nt("pickup"),
                                            className: `px-3 py-1 text-[11px] font-semibold ${ue==="pickup"?t.menuItemActive:t.menuItem}`,
                                            children: ["Pickup (", (h.pickupStops || []).length, ")"]
                                        }), e.jsxs("button", {
                                            type: "button",
                                            onClick: () => Nt("drop"),
                                            className: `px-3 py-1 text-[11px] font-semibold ${ue==="drop"?t.menuItemActive:t.menuItem}`,
                                            children: ["Drop (", (h.dropStops || []).length, ")"]
                                        })]
                                    })]
                                }), e.jsx("div", {
                                    className: "h-72 w-full overflow-hidden rounded-xl border relative",
                                    children: Ut ? e.jsx("div", {
                                        className: "flex h-full items-center justify-center p-4 text-center text-xs text-red-600",
                                        children: "Failed to load Google Maps."
                                    }) : lt ? e.jsx(Bs, {
                                        mapContainerStyle: {
                                            width: "100%",
                                            height: "100%"
                                        },
                                        center: a[0] ? .position || Pa,
                                        zoom: 12,
                                        onLoad: s => gt(s),
                                        onUnmount: () => gt(null),
                                        options: {
                                            mapTypeControl: !1,
                                            streetViewControl: !1,
                                            fullscreenControl: !1,
                                            clickableIcons: !1
                                        },
                                        children: a.map(s => e.jsx(Ys, {
                                            position: s.position,
                                            icon: Fa(s.kind),
                                            title: s.title,
                                            label: s.label ? {
                                                text: s.label,
                                                color: "#ffffff",
                                                fontSize: "10px",
                                                fontWeight: "700"
                                            } : void 0,
                                            zIndex: s.kind === "you" ? 4 : s.kind === "mid" ? 1 : 2
                                        }, s.id))
                                    }) : e.jsx("div", {
                                        className: `flex h-full items-center justify-center p-4 text-center text-xs ${t.textMuted}`,
                                        children: "Loading map..."
                                    })
                                }), e.jsxs("div", {
                                    className: `mt-1.5 flex flex-wrap items-center gap-3 text-[11px] ${t.textMuted}`,
                                    children: [e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-4 h-0.5 rounded bg-[#4285f4]"
                                        }), " Bus route"]
                                    }), e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"
                                        }), " First stop"]
                                    }), e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-2.5 h-2.5 rounded-full bg-[#4285f4]"
                                        }), " Stop"]
                                    }), e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-2.5 h-2.5 rounded-full bg-red-500"
                                        }), " Last stop"]
                                    }), I ? e.jsxs("span", {
                                        className: "inline-flex items-center gap-1",
                                        children: [e.jsx("span", {
                                            className: "inline-block w-2.5 h-2.5 rounded-full bg-indigo-500"
                                        }), " Your location"]
                                    }) : null]
                                })]
                            }), Array.isArray(h.amenities) && h.amenities.length ? e.jsxs("div", {
                                className: `${t.card} rounded-xl p-4`,
                                children: [e.jsx("div", {
                                    className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary} mb-2`,
                                    children: "Amenities"
                                }), e.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: h.amenities.map(s => e.jsx("span", {
                                        className: `rounded-full px-3 py-1 text-[11px] font-semibold ${t.badgeInfo}`,
                                        children: s
                                    }, s))
                                })]
                            }) : null]
                        }) : null, E === 2 && h ? e.jsxs("div", {
                            className: "space-y-3",
                            children: [e.jsx("div", {
                                className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary}`,
                                children: "Pass Type"
                            }), e.jsxs("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Number(h.vacantSeats ? ? 0) > 0 && W("ANNUAL"),
                                    disabled: Number(h.vacantSeats ? ? 0) <= 0,
                                    className: `rounded-lg border p-3 text-left disabled:opacity-50 disabled:cursor-not-allowed ${L==="ANNUAL"?t.menuItemActive:t.menuItem}`,
                                    children: [e.jsx("div", {
                                        className: "text-xs font-semibold",
                                        children: "Annual Pass"
                                    }), e.jsx("div", {
                                        className: `text-[11px] ${L==="ANNUAL"?"":t.textMuted}`,
                                        children: Number(h.vacantSeats ? ? 0) > 0 ? "Valid for the academic year" : "No seats available"
                                    }), e.jsxs("div", {
                                        className: "mt-1 text-sm font-bold",
                                        children: ["₹", Z(h.fees)]
                                    })]
                                }), e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Number(h.dailyFee) > 0 && W("DAILY"),
                                    disabled: h.dailyFee == null || Number(h.dailyFee) <= 0,
                                    className: `rounded-lg border p-3 text-left disabled:opacity-50 disabled:cursor-not-allowed ${L==="DAILY"?t.menuItemActive:t.menuItem}`,
                                    children: [e.jsx("div", {
                                        className: "text-xs font-semibold",
                                        children: "Trip Pass"
                                    }), e.jsx("div", {
                                        className: `text-[11px] ${L==="DAILY"?"":t.textMuted}`,
                                        children: "Per trip · one day"
                                    }), e.jsx("div", {
                                        className: "mt-1 text-sm font-bold",
                                        children: h.dailyFee != null && Number(h.dailyFee) > 0 ? `₹${Z(h.dailyFee)} / trip` : "N/A"
                                    })]
                                })]
                            }), L === "DAILY" ? e.jsxs("div", {
                                className: "space-y-3",
                                children: [e.jsxs("div", {
                                    children: [e.jsx("label", {
                                        className: t.label,
                                        children: "Trips"
                                    }), e.jsxs("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [e.jsxs("button", {
                                            type: "button",
                                            onClick: () => xe(s => !s),
                                            className: `flex items-center gap-2 rounded-lg border p-2.5 text-left ${U?t.menuItemActive:t.menuItem}`,
                                            children: [e.jsx("span", {
                                                className: `w-4 h-4 rounded border flex items-center justify-center shrink-0 ${U?"bg-indigo-600 border-indigo-600 text-white":t.borderColor}`,
                                                children: U ? e.jsx(Oe, {
                                                    className: "w-3 h-3"
                                                }) : null
                                            }), e.jsxs("span", {
                                                className: "min-w-0",
                                                children: [e.jsx("span", {
                                                    className: "block text-xs font-semibold",
                                                    children: "Pickup"
                                                }), e.jsxs("span", {
                                                    className: `block text-[10px] ${t.textMuted}`,
                                                    children: ["To campus · ₹", Z(h.dailyFee)]
                                                })]
                                            })]
                                        }), e.jsxs("button", {
                                            type: "button",
                                            onClick: () => fe(s => !s),
                                            className: `flex items-center gap-2 rounded-lg border p-2.5 text-left ${O?t.menuItemActive:t.menuItem}`,
                                            children: [e.jsx("span", {
                                                className: `w-4 h-4 rounded border flex items-center justify-center shrink-0 ${O?"bg-indigo-600 border-indigo-600 text-white":t.borderColor}`,
                                                children: O ? e.jsx(Oe, {
                                                    className: "w-3 h-3"
                                                }) : null
                                            }), e.jsxs("span", {
                                                className: "min-w-0",
                                                children: [e.jsx("span", {
                                                    className: "block text-xs font-semibold",
                                                    children: "Drop"
                                                }), e.jsxs("span", {
                                                    className: `block text-[10px] ${t.textMuted}`,
                                                    children: ["From campus · ₹", Z(h.dailyFee)]
                                                })]
                                            })]
                                        })]
                                    }), !U && !O ? e.jsx("p", {
                                        className: "mt-1 text-[11px] text-red-500",
                                        children: "Select at least one trip."
                                    }) : e.jsxs("p", {
                                        className: `mt-1 text-[11px] ${t.textMuted}`,
                                        children: [u, " trip", u > 1 ? "s" : "", " × ₹", Z(h.dailyFee), " = ₹", Z(K)]
                                    })]
                                }), e.jsxs("div", {
                                    children: [e.jsx("label", {
                                        className: t.label,
                                        children: "Travel Date"
                                    }), e.jsx("input", {
                                        type: "date",
                                        min: new Date().toISOString().slice(0, 10),
                                        value: H,
                                        onChange: s => Ae(s.target.value),
                                        onClick: s => s.currentTarget.showPicker ? .(),
                                        className: `${t.input} w-full text-xs cursor-pointer`
                                    })]
                                })]
                            }) : null]
                        }) : null, E === 3 && h ? e.jsxs("div", {
                            className: "space-y-3",
                            children: [e.jsx("div", {
                                className: `text-xs font-semibold uppercase tracking-wider ${t.textSecondary}`,
                                children: "Review & Confirm"
                            }), e.jsxs("div", {
                                className: `${t.card} rounded-xl p-4 space-y-2.5 text-xs`,
                                children: [e.jsxs("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [e.jsx("span", {
                                        className: t.textMuted,
                                        children: "Route"
                                    }), e.jsx("span", {
                                        className: `font-semibold text-right ${t.textPrimary}`,
                                        children: Ue(h)
                                    })]
                                }), p ? e.jsxs("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [e.jsx("span", {
                                        className: t.textMuted,
                                        children: "Pickup Stop"
                                    }), e.jsx("span", {
                                        className: `font-semibold text-right ${t.textPrimary}`,
                                        children: (h.pickupStops || []).find(s => s.id === le) ? .stopName || "-"
                                    })]
                                }) : null, f ? e.jsxs("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [e.jsx("span", {
                                        className: t.textMuted,
                                        children: "Drop Stop"
                                    }), e.jsx("span", {
                                        className: `font-semibold text-right ${t.textPrimary}`,
                                        children: (h.dropStops || []).find(s => s.id === C) ? .stopName || "-"
                                    })]
                                }) : null, e.jsxs("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [e.jsx("span", {
                                        className: t.textMuted,
                                        children: "Pass Type"
                                    }), e.jsx("span", {
                                        className: `font-semibold text-right ${t.textPrimary}`,
                                        children: r ? `Trip Pass · ${Rs(A)}` : "Annual Pass"
                                    })]
                                }), r ? e.jsxs("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [e.jsx("span", {
                                        className: t.textMuted,
                                        children: "Travel Date"
                                    }), e.jsx("span", {
                                        className: `font-semibold text-right ${t.textPrimary}`,
                                        children: H ? rs(H) : "-"
                                    })]
                                }) : null, e.jsxs("div", {
                                    className: `flex items-center justify-between gap-3 border-t pt-2.5 ${t.borderColor}`,
                                    children: [e.jsx("span", {
                                        className: `font-semibold ${t.textPrimary}`,
                                        children: "Total Fee"
                                    }), e.jsxs("span", {
                                        className: `text-sm font-bold ${t.textPrimary}`,
                                        children: ["₹", Z(K)]
                                    })]
                                })]
                            }), e.jsx("p", {
                                className: `text-[11px] ${t.textMuted}`,
                                children: r ? "Trip passes are direct-pay — no approval needed. Pay now to confirm your booking." : "Submit your application. You'll pay once it's approved from My Applications."
                            })]
                        }) : null]
                    })]
                }), e.jsxs("div", {
                    className: `${t.cardWindowHeader} flex items-center justify-between gap-3 p-4`,
                    children: [e.jsxs("button", {
                        type: "button",
                        onClick: () => E === 0 ? Ns() : Ye(s => s - 1),
                        disabled: Ie,
                        className: `${t.btnOutline} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold disabled:opacity-60`,
                        children: [e.jsx(kt, {
                            className: "w-4 h-4"
                        }), " ", E === 0 ? "Cancel" : "Back"]
                    }), e.jsxs("div", {
                        className: `text-[11px] font-semibold ${t.textMuted}`,
                        children: ["Step ", E + 1, " of 4"]
                    }), E < 3 ? e.jsxs("button", {
                        type: "button",
                        onClick: () => Ye(s => s + 1),
                        disabled: !ws(E),
                        className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                        children: ["Next ", e.jsx(ds, {
                            className: "w-4 h-4"
                        })]
                    }) : e.jsx("button", {
                        type: "button",
                        onClick: Qs,
                        disabled: Ie || !x || r && !U && !O || p && !le || f && !C || L === "DAILY" && !H || L === "ANNUAL" && Number(h ? .vacantSeats ? ? 0) <= 0,
                        className: `${t.btnPrimary} inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                        children: Ie ? r ? "Processing payment..." : "Submitting..." : r ? `Confirm & Pay ₹${Z(K)}` : "Confirm & Apply"
                    })]
                })]
            })]
        }), document.body) : null, G ? Wt.createPortal(e.jsxs("div", {
            className: "fixed inset-0 z-[1000] flex items-center justify-center p-4",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: ve ? void 0 : Zt
            }), e.jsxs("div", {
                className: `${t.card} relative z-10 w-full max-w-md rounded-2xl p-5 shadow-2xl`,
                children: [e.jsxs("div", {
                    className: "flex items-start justify-between gap-3",
                    children: [e.jsxs("div", {
                        children: [e.jsx("h3", {
                            className: `text-sm font-bold ${t.textPrimary}`,
                            children: "Add Your Stop Details"
                        }), e.jsxs("p", {
                            className: `mt-0.5 text-xs ${t.textMuted}`,
                            children: [Ue(G), " — select where you board and get off."]
                        })]
                    }), e.jsx("button", {
                        type: "button",
                        onClick: Zt,
                        disabled: ve,
                        "aria-label": "Close",
                        className: `rounded-md border p-1.5 disabled:opacity-50 ${t.textSecondary}`,
                        children: e.jsx(je, {
                            className: "w-4 h-4"
                        })
                    })]
                }), Xt ? e.jsxs("div", {
                    className: "mt-4 space-y-3 text-xs",
                    children: [e.jsxs("div", {
                        children: [e.jsx("label", {
                            className: t.label,
                            children: "Pickup Stop"
                        }), e.jsx(Ce, {
                            stops: Xt.pickupStops || [],
                            value: re,
                            onChange: ft,
                            placeholder: "Select pickup stop",
                            styles: t,
                            omitLast: !0
                        })]
                    }), e.jsxs("div", {
                        children: [e.jsx("label", {
                            className: t.label,
                            children: "Drop Stop"
                        }), e.jsx(Ce, {
                            stops: Xt.dropStops || [],
                            value: te,
                            onChange: ht,
                            placeholder: "Select drop stop",
                            styles: t,
                            omitFirst: !0
                        })]
                    })]
                }) : e.jsx("div", {
                    className: "mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800",
                    children: "This route is no longer available, so its stops can't be loaded. Please contact the transport office."
                }), e.jsxs("div", {
                    className: "mt-5 flex items-center justify-end gap-2",
                    children: [e.jsx("button", {
                        type: "button",
                        onClick: Zt,
                        disabled: ve,
                        className: `${t.btnOutline} px-4 py-2 text-xs font-semibold disabled:opacity-60`,
                        children: "Later"
                    }), e.jsx("button", {
                        type: "button",
                        onClick: Zs,
                        disabled: ve || !Xt || !re || !te,
                        className: `${t.btnPrimary} px-4 py-2 text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                        children: ve ? "Saving..." : "Save Stop Details"
                    })]
                })]
            })]
        }), document.body) : null, ce ? Wt.createPortal(e.jsxs("div", {
            className: "fixed inset-0 z-[1000] flex items-center justify-center p-4",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: Se ? void 0 : es
            }), e.jsxs("div", {
                className: `${t.cardWindow} relative z-10 w-full max-w-md rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden`,
                children: [e.jsxs("div", {
                    className: "flex items-start justify-between gap-3 p-5 pb-3",
                    children: [e.jsxs("div", {
                        children: [e.jsx("h3", {
                            className: `text-sm font-bold ${t.textPrimary}`,
                            children: "Transfer Route"
                        }), e.jsxs("p", {
                            className: `mt-0.5 text-xs ${t.textMuted}`,
                            children: ["Currently ", Ue(ce), ". Choose a new route and stops — you'll pay the new route's fee."]
                        })]
                    }), e.jsx("button", {
                        type: "button",
                        onClick: es,
                        disabled: Se,
                        "aria-label": "Close",
                        className: `rounded-md border p-1.5 disabled:opacity-50 ${t.textSecondary}`,
                        children: e.jsx(je, {
                            className: "w-4 h-4"
                        })
                    })]
                }), e.jsxs("div", {
                    className: "flex-1 min-h-0 overflow-y-auto no-scrollbar px-5 space-y-3 text-xs",
                    children: [e.jsxs("div", {
                        children: [e.jsx("label", {
                            className: t.label,
                            children: "Route"
                        }), e.jsx(Aa, {
                            routes: N,
                            value: De,
                            onChange: na,
                            styles: t
                        })]
                    }), B ? e.jsxs(e.Fragment, {
                        children: [e.jsxs("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                            children: [e.jsxs("div", {
                                className: vt ? "" : "opacity-50",
                                children: [e.jsxs("label", {
                                    className: t.label,
                                    children: ["Pickup Stop", vt ? "" : " (not needed)"]
                                }), e.jsx(Ce, {
                                    stops: B.pickupStops || [],
                                    value: de,
                                    onChange: We,
                                    placeholder: "Select pickup stop",
                                    styles: t,
                                    disabled: !vt,
                                    omitLast: !0
                                })]
                            }), e.jsxs("div", {
                                className: wt ? "" : "opacity-50",
                                children: [e.jsxs("label", {
                                    className: t.label,
                                    children: ["Drop Stop", wt ? "" : " (not needed)"]
                                }), e.jsx(Ce, {
                                    stops: B.dropStops || [],
                                    value: be,
                                    onChange: bt,
                                    placeholder: "Select drop stop",
                                    styles: t,
                                    disabled: !wt,
                                    omitFirst: !0
                                })]
                            })]
                        }), e.jsxs("div", {
                            children: [e.jsx("label", {
                                className: t.label,
                                children: "Pass Type"
                            }), e.jsxs("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Number(B.vacantSeats ? ? 0) > 0 && He("ANNUAL"),
                                    disabled: Number(B.vacantSeats ? ? 0) <= 0,
                                    className: `rounded-lg border p-2.5 text-left disabled:opacity-50 disabled:cursor-not-allowed ${F==="ANNUAL"?t.menuItemActive:t.menuItem}`,
                                    children: [e.jsx("div", {
                                        className: "text-xs font-semibold",
                                        children: "Annual Pass"
                                    }), e.jsxs("div", {
                                        className: "mt-0.5 text-sm font-bold",
                                        children: ["₹", Z(B.fees)]
                                    })]
                                }), e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Number(B.dailyFee) > 0 && He("DAILY"),
                                    disabled: B.dailyFee == null || Number(B.dailyFee) <= 0,
                                    className: `rounded-lg border p-2.5 text-left disabled:opacity-50 disabled:cursor-not-allowed ${F==="DAILY"?t.menuItemActive:t.menuItem}`,
                                    children: [e.jsx("div", {
                                        className: "text-xs font-semibold",
                                        children: "Trip Pass"
                                    }), e.jsx("div", {
                                        className: "mt-0.5 text-sm font-bold",
                                        children: B.dailyFee != null && Number(B.dailyFee) > 0 ? `₹${Z(B.dailyFee)} / trip` : "N/A"
                                    })]
                                })]
                            })]
                        }), F === "DAILY" ? e.jsxs(e.Fragment, {
                            children: [e.jsxs("div", {
                                children: [e.jsx("label", {
                                    className: t.label,
                                    children: "Trips"
                                }), e.jsxs("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [e.jsxs("button", {
                                        type: "button",
                                        onClick: () => tt(s => !s),
                                        className: `flex items-center gap-2 rounded-lg border p-2.5 text-left ${ee?t.menuItemActive:t.menuItem}`,
                                        children: [e.jsx("span", {
                                            className: `w-4 h-4 rounded border flex items-center justify-center shrink-0 ${ee?"bg-indigo-600 border-indigo-600 text-white":t.borderColor}`,
                                            children: ee ? e.jsx(Oe, {
                                                className: "w-3 h-3"
                                            }) : null
                                        }), e.jsxs("span", {
                                            className: "min-w-0",
                                            children: [e.jsx("span", {
                                                className: "block text-xs font-semibold",
                                                children: "Pickup"
                                            }), e.jsxs("span", {
                                                className: `block text-[10px] ${t.textMuted}`,
                                                children: ["To campus · ₹", Z(B.dailyFee)]
                                            })]
                                        })]
                                    }), e.jsxs("button", {
                                        type: "button",
                                        onClick: () => Dt(s => !s),
                                        className: `flex items-center gap-2 rounded-lg border p-2.5 text-left ${q?t.menuItemActive:t.menuItem}`,
                                        children: [e.jsx("span", {
                                            className: `w-4 h-4 rounded border flex items-center justify-center shrink-0 ${q?"bg-indigo-600 border-indigo-600 text-white":t.borderColor}`,
                                            children: q ? e.jsx(Oe, {
                                                className: "w-3 h-3"
                                            }) : null
                                        }), e.jsxs("span", {
                                            className: "min-w-0",
                                            children: [e.jsx("span", {
                                                className: "block text-xs font-semibold",
                                                children: "Drop"
                                            }), e.jsxs("span", {
                                                className: `block text-[10px] ${t.textMuted}`,
                                                children: ["From campus · ₹", Z(B.dailyFee)]
                                            })]
                                        })]
                                    })]
                                }), !ee && !q ? e.jsx("p", {
                                    className: "mt-1 text-[11px] text-red-500",
                                    children: "Select at least one trip."
                                }) : e.jsxs("p", {
                                    className: `mt-1 text-[11px] ${t.textMuted}`,
                                    children: [$s, " trip", $s > 1 ? "s" : "", " × ₹", Z(B.dailyFee)]
                                })]
                            }), e.jsxs("div", {
                                children: [e.jsx("label", {
                                    className: t.label,
                                    children: "Travel Date"
                                }), e.jsx("input", {
                                    type: "date",
                                    min: new Date().toISOString().slice(0, 10),
                                    value: we,
                                    onChange: s => et(s.target.value),
                                    onClick: s => s.currentTarget.showPicker ? .(),
                                    className: `${t.input} w-full text-xs cursor-pointer`
                                })]
                            })]
                        }) : null, e.jsxs("div", {
                            className: `rounded-lg border ${t.cardWindowHeader} p-2.5 flex items-center justify-between`,
                            children: [e.jsx("span", {
                                className: t.textMuted,
                                children: "New Total Fee"
                            }), e.jsxs("span", {
                                className: `font-bold ${t.textPrimary}`,
                                children: ["₹", Z(sa)]
                            })]
                        })]
                    }) : null]
                }), e.jsxs("div", {
                    className: "flex items-center justify-end gap-2 p-5 pt-4",
                    children: [e.jsx("button", {
                        type: "button",
                        onClick: es,
                        disabled: Se,
                        className: `${t.btnOutline} px-4 py-2 text-xs font-semibold disabled:opacity-60`,
                        children: "Cancel"
                    }), e.jsx("button", {
                        type: "button",
                        onClick: la,
                        disabled: Se || !De || jt && !ee && !q || vt && !de || wt && !be || F === "DAILY" && !we || F === "ANNUAL" && Number(B ? .vacantSeats ? ? 0) <= 0,
                        className: `${t.btnPrimary} px-4 py-2 text-xs font-semibold disabled:opacity-60 disabled:cursor-not-allowed`,
                        children: Se ? "Transferring..." : "Confirm Transfer"
                    })]
                })]
            })]
        }), document.body) : null, ut ? e.jsx(Hs, {
            styles: t,
            onClose: () => Lt(!1)
        }) : null, Be ? e.jsx(zs, {
            styles: t,
            onClose: () => pt(!1)
        }) : null]
    })
}
export {
    bn as
    default
};