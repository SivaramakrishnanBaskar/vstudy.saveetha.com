import {
    e as E,
    r as t,
    j as e,
    M as U,
    d as X
} from "./index-yzCs2v45.js";
import {
    r as Y
} from "./index-CPEKXmhm.js";
import {
    u as ee,
    G as te,
    M as se
} from "./esm-BdLNz9BL.js";
import {
    X as ne
} from "./x-5ZDqsGnB.js";
import {
    L as Z
} from "./loader-circle-Du2bADAa.js";
import {
    C as oe
} from "./clock-3-BRugo2AI.js";
const re = [
        ["path", {
            d: "m12 14 4-4",
            key: "9kzdfg"
        }],
        ["path", {
            d: "M3.34 19a10 10 0 1 1 17.32 0",
            key: "19p75a"
        }]
    ],
    ae = E("gauge", re);
const ie = [
        ["path", {
            d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
            key: "169xi5"
        }],
        ["path", {
            d: "M15 5.764v15",
            key: "1pn4in"
        }],
        ["path", {
            d: "M9 3.236v15",
            key: "1uimfh"
        }]
    ],
    le = E("map", ie);
const ce = [
        ["polygon", {
            points: "3 11 22 2 13 21 11 13 3 11",
            key: "1ltx0t"
        }]
    ],
    de = E("navigation", ce),
    fe = ["geometry"],
    K = 1e3,
    ue = 1e4,
    me = [
        [270, 480],
        [870, 1140]
    ],
    pe = () => {
        const s = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: !1
            }).formatToParts(new Date),
            o = Number(s.find(p => p.type === "hour") ? .value) % 24,
            r = Number(s.find(p => p.type === "minute") ? .value);
        return o * 60 + r
    },
    xe = () => {
        const s = pe();
        return me.some(([o, r]) => s >= o && s < r) ? K : ue
    },
    ge = {
        lat: 13.0827,
        lng: 80.2707
    },
    H = "598917a216fcdde2623a0de5",
    he = 18,
    we = 60,
    ye = 15,
    be = .14,
    ve = .12,
    Ne = (s, o) => {
        let r = (o - s) % 360;
        return r > 180 && (r -= 360), r < -180 && (r += 360), r
    },
    je = (s, o, r) => {
        const p = window.google ? .maps ? .geometry ? .spherical;
        if (p) {
            const y = p.interpolate(new window.google.maps.LatLng(s.lat, s.lng), new window.google.maps.LatLng(o.lat, o.lng), r);
            return {
                lat: y.lat(),
                lng: y.lng()
            }
        }
        return {
            lat: s.lat + (o.lat - s.lat) * r,
            lng: s.lng + (o.lng - s.lng) * r
        }
    },
    Re = () => typeof window > "u" || !window.google ? .maps ? void 0 : {
        url: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='48' height='62' viewBox='0 0 48 62'>
    <defs>
      <linearGradient id='pinb' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0' stop-color='#3b82f6'/>
        <stop offset='1' stop-color='#1d4ed8'/>
      </linearGradient>
      <linearGradient id='busb' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0' stop-color='#3b82f6'/>
        <stop offset='1' stop-color='#1e40af'/>
      </linearGradient>
      <filter id='shp' x='-40%' y='-30%' width='180%' height='170%'>
        <feDropShadow dx='0' dy='2.5' stdDeviation='2.6' flood-color='#0f172a' flood-opacity='0.4'/>
      </filter>
    </defs>
    <path d='M24 59 C24 59 41 37 41 21 A17 17 0 1 0 7 21 C7 37 24 59 24 59 Z'
          fill='url(#pinb)' stroke='#ffffff' stroke-width='2.5' filter='url(#shp)'/>
    <circle cx='24' cy='21' r='12.5' fill='#ffffff'/>
    <g transform='translate(24,21)'>
      <rect x='-9.5' y='-6.2' width='19' height='10.8' rx='2.6' fill='url(#busb)'/>
      <rect x='-8.1' y='-4.6' width='4' height='3.6' rx='0.8' fill='#dbeafe'/>
      <rect x='-3.4' y='-4.6' width='4' height='3.6' rx='0.8' fill='#dbeafe'/>
      <rect x='1.3' y='-4.6' width='4' height='3.6' rx='0.8' fill='#dbeafe'/>
      <rect x='6' y='-4.6' width='3.2' height='3.6' rx='0.8' fill='#bfdbfe'/>
      <rect x='-9.5' y='1.2' width='19' height='1.4' fill='#1e3a8a' opacity='0.35'/>
      <rect x='8.4' y='-1' width='1.6' height='2.2' rx='0.6' fill='#fde047'/>
      <circle cx='-5' cy='5.1' r='2' fill='#0f172a'/>
      <circle cx='5' cy='5.1' r='2' fill='#0f172a'/>
      <circle cx='-5' cy='5.1' r='0.85' fill='#cbd5e1'/>
      <circle cx='5' cy='5.1' r='0.85' fill='#cbd5e1'/>
    </g>
  </svg>`)}`,
        scaledSize: new window.google.maps.Size(48, 62),
        anchor: new window.google.maps.Point(24, 59)
    },
    Le = (s = 0) => {
        if (typeof window > "u" || !window.google ? .maps) return;
        const r = `<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'>
    <defs>
      <linearGradient id='cone' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0' stop-color='#3b82f6' stop-opacity='0.55'/>
        <stop offset='1' stop-color='#3b82f6' stop-opacity='0'/>
      </linearGradient>
      <linearGradient id='disc' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0' stop-color='#60a5fa'/>
        <stop offset='0.6' stop-color='#2563eb'/>
        <stop offset='1' stop-color='#1d4ed8'/>
      </linearGradient>
      <filter id='ds' x='-50%' y='-50%' width='200%' height='200%'>
        <feDropShadow dx='0' dy='2' stdDeviation='2.6' flood-color='#0b1220' flood-opacity='0.45'/>
      </filter>
    </defs>
    <g transform='rotate(${(Number(s)%360+360)%360} 36 36)'>
      <path d='M36 2 L56 34 Q36 25 16 34 Z' fill='url(#cone)'/>
      <circle cx='36' cy='36' r='16.5' fill='url(#disc)' stroke='#ffffff' stroke-width='3.5' filter='url(#ds)'/>
      <rect x='28.5' y='27' width='15' height='18' rx='3.4' fill='#ffffff'/>
      <rect x='30.2' y='28.6' width='11.6' height='3.4' rx='1.4' fill='#93c5fd'/>
      <rect x='30.2' y='33' width='4.6' height='8.2' rx='1.2' fill='#bfdbfe'/>
      <rect x='37.2' y='33' width='4.6' height='8.2' rx='1.2' fill='#bfdbfe'/>
      <circle cx='31' cy='27.8' r='1' fill='#fde68a'/>
      <circle cx='41' cy='27.8' r='1' fill='#fde68a'/>
    </g>
  </svg>`;
        return {
            url: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,
            scaledSize: new window.google.maps.Size(72, 72),
            anchor: new window.google.maps.Point(36, 36)
        }
    };

function Ce({
    busNumber: s,
    styles: o,
    onClose: r
}) {
    const p = "AIzaSyCmJGiq8hNUzy0k0O8stA0oud1CN55jQkQ",
        {
            isLoaded: y
        } = ee({
            id: "transport-master-maps",
            googleMapsApiKey: p,
            libraries: fe
        }),
        [l, W] = t.useState(null),
        [C, q] = t.useState(!0),
        [Q, D] = t.useState(""),
        [c, F] = t.useState("2d"),
        [P, J] = t.useState(0),
        [g, I] = t.useState(null),
        N = t.useRef(null),
        G = t.useRef(c),
        T = t.useRef(c),
        b = t.useRef(null),
        k = t.useRef(null),
        v = t.useRef(null),
        O = t.useRef(0),
        $ = t.useRef(0),
        S = t.useRef(0),
        j = t.useRef(!0),
        R = t.useRef(null),
        A = t.useRef(0),
        L = t.useRef(0),
        _ = t.useRef(0),
        h = !!H;
    t.useEffect(() => {
        G.current = c
    }, [c]), t.useEffect(() => {
        let n = !1,
            i = null;
        const f = async () => {
                try {
                    const {
                        data: m
                    } = await X.get("/api/transport/vehicle-locations", {
                        params: {
                            search: s
                        }
                    });
                    if (n) return;
                    const d = (m ? .items || []).find(x => x.vehicle_number === s) || null;
                    W(d), D("")
                } catch (m) {
                    n || D(m ? .response ? .data ? .message || "Failed to load location.")
                } finally {
                    n || q(!1)
                }
            },
            a = async () => {
                n || (await f(), !n && (i = setTimeout(a, xe())))
            };
        return a(), () => {
            n = !0, i && clearTimeout(i)
        }
    }, [s]);
    const u = l && Number.isFinite(l.latitude) && Number.isFinite(l.longitude) ? {
            lat: l.latitude,
            lng: l.longitude
        } : null,
        M = l ? .ignition && Number(l ? .speed) > 0;
    t.useEffect(() => {
        if (!u || !window.google ? .maps) return;
        const n = performance.now(),
            i = Number(l ? .angle),
            f = Number.isFinite(i) && i > 0 && i <= 360;
        let a = A.current;
        if (M && f) a = i;
        else if (v.current && window.google.maps.geometry) {
            const x = window.google.maps.geometry.spherical,
                w = new window.google.maps.LatLng(v.current.lat, v.current.lng),
                B = new window.google.maps.LatLng(u.lat, u.lng);
            x.computeDistanceBetween(w, B) > 5 ? a = x.computeHeading(w, B) : f && (a = i)
        } else f && (a = i);
        a = (a % 360 + 360) % 360, A.current = a, J(a);
        const m = b.current,
            d = !m;
        k.current = m || u, v.current = u, O.current = n, $.current = d ? 0 : Math.min(Math.max(S.current ? n - S.current : K, 600), 11e3), S.current = n, j.current = !1, d && (b.current = u, L.current = a, I(u))
    }, [u ? .lat, u ? .lng]), t.useEffect(() => {
        const n = i => {
            const f = v.current;
            if (f) {
                let d = f;
                const x = $.current;
                if (k.current && x > 0) {
                    const w = Math.min((i - O.current) / x, 1);
                    d = w >= 1 ? f : je(k.current, f, w), w >= 1 && (j.current = !0)
                } else j.current = !0;
                (!j.current || b.current !== d) && (b.current = d, I(d))
            }
            const a = N.current,
                m = b.current;
            if (a && m && typeof a.moveCamera == "function") {
                const d = G.current === "follow" && h;
                L.current += Ne(L.current, A.current) * be, _.current += ((d ? we : 0) - _.current) * ve, a.moveCamera({
                    center: m,
                    heading: d ? L.current : 0,
                    tilt: d ? _.current : 0
                })
            }
            R.current = requestAnimationFrame(n)
        };
        return R.current = requestAnimationFrame(n), () => {
            R.current && cancelAnimationFrame(R.current)
        }
    }, [h]), t.useEffect(() => {
        const n = N.current;
        if (!n || !g) return;
        const i = T.current !== c;
        T.current = c, (i || n.getZoom() == null) && n.setZoom(c === "follow" ? he : ye)
    }, [c, y, g]);
    const V = t.useMemo(() => c === "follow" ? Le(h ? 0 : P) : Re(), [c, h, P]),
        z = n => `flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all ${n?"bg-white text-blue-600 shadow-sm":"text-white/80 hover:text-white"}`;
    return Y.createPortal(e.jsx("div", {
        className: "fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",
        onMouseDown: r,
        children: e.jsxs("div", {
            className: `${o.card} w-full max-w-2xl overflow-hidden flex flex-col`,
            style: {
                height: "min(80vh, 620px)"
            },
            onMouseDown: n => n.stopPropagation(),
            children: [e.jsxs("div", {
                className: `${o.cardHeader} flex items-center justify-between gap-2 px-4 py-3`,
                children: [e.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0",
                    children: [e.jsx(de, {
                        className: "w-4 h-4 text-blue-500 shrink-0"
                    }), e.jsxs("div", {
                        className: "min-w-0",
                        children: [e.jsxs("h3", {
                            className: `text-sm font-bold ${o.textPrimary} truncate`,
                            children: ["Live Location · ", s]
                        }), e.jsx("p", {
                            className: `text-[11px] ${o.textMuted}`,
                            children: l ? M ? "On the move" : "Stopped" : "Locating bus..."
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-2 shrink-0",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-0.5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-inner",
                        children: [e.jsxs("button", {
                            type: "button",
                            onClick: () => F("2d"),
                            className: z(c === "2d"),
                            children: [e.jsx(le, {
                                className: "w-3 h-3"
                            }), " 2D"]
                        }), e.jsxs("button", {
                            type: "button",
                            onClick: () => F("follow"),
                            className: z(c === "follow"),
                            children: [e.jsx(U, {
                                className: "w-3 h-3"
                            }), " Follow"]
                        })]
                    }), e.jsx("button", {
                        onClick: r,
                        className: `${o.textMuted} hover:text-red-500`,
                        children: e.jsx(ne, {
                            className: "w-4 h-4"
                        })
                    })]
                })]
            }), e.jsx("div", {
                className: "relative flex-1 bg-[#eef2f7]",
                children: y ? e.jsxs(e.Fragment, {
                    children: [e.jsx(te, {
                        mapContainerStyle: {
                            width: "100%",
                            height: "100%"
                        },
                        center: ge,
                        zoom: 11,
                        onLoad: n => {
                            N.current = n
                        },
                        onUnmount: () => {
                            N.current = null
                        },
                        options: {
                            mapTypeControl: !1,
                            streetViewControl: !1,
                            fullscreenControl: !1,
                            clickableIcons: !1,
                            ...h ? {
                                mapId: H
                            } : {}
                        },
                        children: g ? e.jsx(se, {
                            position: g,
                            icon: V,
                            title: s
                        }) : null
                    }), C && !l ? e.jsx("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-white/40",
                        children: e.jsx(Z, {
                            className: "w-6 h-6 animate-spin text-blue-500"
                        })
                    }) : null, !C && !g ? e.jsx("div", {
                        className: "absolute inset-0 flex items-center justify-center px-6",
                        children: e.jsx("div", {
                            className: "rounded-lg bg-white shadow border border-gray-200 px-4 py-3 text-center text-[12px] text-gray-600",
                            children: Q || "No live GPS location available for this bus yet."
                        })
                    }) : null, g ? e.jsx("div", {
                        className: "pointer-events-none absolute bottom-3 left-3 right-3 flex justify-center",
                        children: e.jsxs("div", {
                            className: "pointer-events-auto w-full max-w-md rounded-xl bg-white shadow-lg border border-gray-200 px-4 py-3",
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [e.jsx("span", {
                                        className: `w-2 h-2 rounded-full ${M?"bg-emerald-500":"bg-gray-400"} ${M?"animate-pulse":""}`
                                    }), e.jsx("span", {
                                        className: "text-[13px] font-bold text-gray-900",
                                        children: s
                                    }), l ? .is_stale ? e.jsx("span", {
                                        className: "text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700",
                                        children: "GPS delayed"
                                    }) : null, c === "follow" ? e.jsxs("span", {
                                        className: "flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700",
                                        children: [e.jsx(U, {
                                            className: "w-2.5 h-2.5"
                                        }), h ? "3D Follow" : "Follow"]
                                    }) : null]
                                }), e.jsxs("div", {
                                    className: "flex items-center gap-1.5 text-[12px] text-gray-700",
                                    children: [e.jsx(ae, {
                                        className: "w-3.5 h-3.5 text-gray-400"
                                    }), e.jsx("span", {
                                        className: "font-semibold",
                                        children: Math.round(Number(l ? .speed) || 0)
                                    }), e.jsx("span", {
                                        className: "text-gray-400",
                                        children: "km/h"
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "mt-1 flex items-center gap-1.5 text-[11px] text-gray-500",
                                children: [e.jsx(oe, {
                                    className: "w-3 h-3"
                                }), e.jsxs("span", {
                                    children: ["Updated ", l ? .fix_time_text || "—"]
                                })]
                            })]
                        })
                    }) : null]
                }) : e.jsxs("div", {
                    className: `h-full flex items-center justify-center text-[12px] ${o.textMuted}`,
                    children: [e.jsx(Z, {
                        className: "w-5 h-5 animate-spin mr-2"
                    }), " Loading map..."]
                })
            })]
        })
    }), document.body)
}
export {
    Ce as B, ae as G, le as M, de as N
};