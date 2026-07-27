import {
    r as s,
    j as e,
    d as M,
    L as I
} from "./index-yzCs2v45.js";
import {
    Q as O
} from "./index-JgPAmfHO.js";
import {
    R as D
} from "./refresh-cw-C077g4E0.js";
import {
    r as B
} from "./index-CPEKXmhm.js";
import {
    B as _,
    N as A
} from "./BusTrackModal-CSXUStZ-.js";
import {
    X as L
} from "./x-5ZDqsGnB.js";
import {
    L as V
} from "./loader-circle-Du2bADAa.js";
import {
    M as Q
} from "./map-pin-CsLsmceU.js";
import {
    H as E
} from "./html5-qrcode-scanner-__AGtTp-.js";
import {
    C as v
} from "./circle-x-D4FKj4hJ.js";
import {
    C as P
} from "./clock-3-BRugo2AI.js";
import {
    I as H
} from "./info-W7J9pIjo.js";
import {
    C
} from "./circle-check-D_o3rC1t.js";
import {
    C as U
} from "./camera-CE0l9T32.js";

function ne({
    tokenEndpoint: t
}) {
    const [c, l] = s.useState(""), [o, p] = s.useState(""), [b, r] = s.useState(""), [h, f] = s.useState(0), d = s.useRef(null);
    return s.useEffect(() => {
        let a = !1;
        const i = async () => {
            try {
                const {
                    data: n
                } = await M.get(t);
                if (a) return;
                l(n ? .token || ""), p(n ? .code || ""), f(Number(n ? .expiresIn || 60)), r("")
            } catch (n) {
                if (a) return;
                r(n ? .response ? .data ? .message || "Could not load pass"), l("")
            }
        };
        i();
        const u = setInterval(i, 50 * 1e3);
        return () => {
            a = !0, clearInterval(u)
        }
    }, [t]), s.useEffect(() => (d.current && clearInterval(d.current), d.current = setInterval(() => {
        f(a => a > 0 ? a - 1 : 0)
    }, 1e3), () => clearInterval(d.current)), [c]), e.jsx("div", {
        className: "px-4 py-4 flex flex-col items-center text-gray-900",
        children: b ? e.jsx("div", {
            className: "text-xs text-red-600 text-center py-6",
            children: b
        }) : c ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "p-2 bg-white rounded-lg border",
                children: e.jsx(O, {
                    value: c,
                    size: 168,
                    level: "M",
                    includeMargin: !1
                })
            }), o ? e.jsxs("div", {
                className: "mt-2 text-center",
                children: [e.jsx("div", {
                    className: "text-[10px] uppercase tracking-wider text-gray-400",
                    children: "Manual code"
                }), e.jsxs("div", {
                    className: "font-mono font-bold text-lg tracking-[0.3em] text-gray-900",
                    children: [o.slice(0, 3), " ", o.slice(3)]
                })]
            }) : null, e.jsxs("div", {
                className: "mt-0.5 inline-flex items-center gap-1 text-[10px] text-gray-400",
                children: [e.jsx(D, {
                    className: "w-3 h-3"
                }), "Refreshes in ", h, "s"]
            })]
        }) : e.jsx("div", {
            className: "text-xs text-gray-400 py-10",
            children: "Loading secure QR…"
        })
    })
}

function ce({
    styles: t,
    onClose: c
}) {
    const [l, o] = s.useState(!0), [p, b] = s.useState(""), [r, h] = s.useState(null), [f, d] = s.useState(null);
    if (s.useEffect(() => {
            let n = !1;
            return (async () => {
                try {
                    o(!0);
                    const {
                        data: m
                    } = await M.get("/api/transport-applications/my-bus");
                    if (n) return;
                    h(m);
                    const w = m ? .suggested,
                        g = w === "pickup" ? m ? .pickup ? .busNumber : w === "drop" ? m ? .drop ? .busNumber : null;
                    g && d(g)
                } catch (m) {
                    n || b(m ? .response ? .data ? .message || "Failed to locate your bus.")
                } finally {
                    n || o(!1)
                }
            })(), () => {
                n = !0
            }
        }, []), f) return e.jsx(_, {
        busNumber: f,
        styles: t,
        onClose: c
    });
    const a = r ? .pickup || null,
        i = r ? .drop || null,
        u = !l && !p && !a && !i;
    return B.createPortal(e.jsx("div", {
        className: "fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",
        onMouseDown: c,
        children: e.jsxs("div", {
            className: `${t.card} w-full max-w-sm overflow-hidden rounded-2xl`,
            onMouseDown: n => n.stopPropagation(),
            children: [e.jsxs("div", {
                className: `${t.cardHeader} flex items-center justify-between gap-2 px-4 py-3`,
                children: [e.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0",
                    children: [e.jsx(A, {
                        className: "w-4 h-4 text-violet-500 shrink-0"
                    }), e.jsx("h3", {
                        className: `text-sm font-bold ${t.textPrimary}`,
                        children: "Track My Bus"
                    })]
                }), e.jsx("button", {
                    onClick: c,
                    className: `${t.textMuted} hover:text-red-500`,
                    children: e.jsx(L, {
                        className: "w-4 h-4"
                    })
                })]
            }), e.jsx("div", {
                className: "p-5",
                children: l ? e.jsxs("div", {
                    className: `flex flex-col items-center gap-2 py-6 text-xs ${t.textMuted}`,
                    children: [e.jsx(V, {
                        className: "w-6 h-6 animate-spin text-violet-500"
                    }), "Finding your bus…"]
                }) : p ? e.jsx("div", {
                    className: "rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-700",
                    children: p
                }) : u ? e.jsxs("div", {
                    className: "flex flex-col items-center gap-2 py-4 text-center",
                    children: [e.jsx("div", {
                        className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600",
                        children: e.jsx(Q, {
                            className: "w-6 h-6"
                        })
                    }), e.jsx("div", {
                        className: `text-sm font-semibold ${t.textPrimary}`,
                        children: "Bus not mapped"
                    }), e.jsx("div", {
                        className: `text-xs ${t.textMuted}`,
                        children: r ? .message || "Your bus is not mapped to any route today. Please contact the transport coordinator."
                    })]
                }) : e.jsxs("div", {
                    className: "space-y-3",
                    children: [e.jsx("div", {
                        className: `text-center text-xs ${t.textMuted}`,
                        children: "Which bus would you like to track?"
                    }), a ? e.jsxs("button", {
                        type: "button",
                        onClick: () => d(a.busNumber),
                        className: `w-full rounded-2xl border p-3 flex items-center gap-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-md ${t.menuItem}`,
                        children: [e.jsx("span", {
                            className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white",
                            children: e.jsx(I, {
                                className: "w-5 h-5"
                            })
                        }), e.jsxs("span", {
                            className: "min-w-0 flex-1",
                            children: [e.jsxs("span", {
                                className: `block text-[13px] font-bold ${t.textPrimary}`,
                                children: ["Pickup Bus · ", a.busNumber]
                            }), e.jsx("span", {
                                className: `block text-[11px] ${t.textMuted}`,
                                children: a.route || "Pickup trip"
                            })]
                        })]
                    }) : null, i ? e.jsxs("button", {
                        type: "button",
                        onClick: () => d(i.busNumber),
                        className: `w-full rounded-2xl border p-3 flex items-center gap-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-md ${t.menuItem}`,
                        children: [e.jsx("span", {
                            className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white",
                            children: e.jsx(I, {
                                className: "w-5 h-5"
                            })
                        }), e.jsxs("span", {
                            className: "min-w-0 flex-1",
                            children: [e.jsxs("span", {
                                className: `block text-[13px] font-bold ${t.textPrimary}`,
                                children: ["Drop Bus · ", i.busNumber]
                            }), e.jsx("span", {
                                className: `block text-[11px] ${t.textMuted}`,
                                children: i.route || "Drop trip"
                            })]
                        })]
                    }) : null]
                })
            })]
        })
    }), document.body)
}
const k = "bus-verify-qr-reader",
    F = t => {
        const c = String(t || "").trim();
        try {
            const l = JSON.parse(c);
            if (l ? .token) return String(l.token)
        } catch {}
        try {
            const l = new URL(c),
                o = l.searchParams.get("t") || l.searchParams.get("token");
            if (o) return o
        } catch {}
        return c
    },
    T = {
        ALLOWED: {
            title: "Allowed to Travel",
            tone: "emerald",
            Icon: C
        },
        ROUTE_MISMATCH_ALLOWED: {
            title: "Allowed to Travel — Different Route",
            tone: "emerald",
            Icon: C
        },
        ROUTE_MISMATCH_DENIED: {
            title: "Bus Pass Mismatch",
            tone: "red",
            Icon: v
        },
        WRONG_DIRECTION_DENIED: {
            title: "Wrong Trip Direction",
            tone: "red",
            Icon: v
        },
        PASS_TIME_DENIED: {
            title: "Trip Pass Not Valid Now",
            tone: "amber",
            Icon: P
        },
        NO_PASS: {
            title: "No Valid Bus Pass",
            tone: "red",
            Icon: v
        },
        BUS_NOT_MAPPED: {
            title: "Bus Not Mapped",
            tone: "blue",
            Icon: H
        },
        NO_ACTIVE_TRIP: {
            title: "No Active Trip",
            tone: "amber",
            Icon: P
        },
        INVALID_BUS: {
            title: "Unrecognised QR",
            tone: "red",
            Icon: v
        },
        ERROR: {
            title: "Verification Failed",
            tone: "red",
            Icon: v
        }
    },
    $ = {
        emerald: "border-emerald-300 bg-emerald-50 text-emerald-700",
        amber: "border-amber-300 bg-amber-50 text-amber-800",
        red: "border-red-300 bg-red-50 text-red-700",
        blue: "border-blue-300 bg-blue-50 text-blue-700"
    };

function le({
    styles: t,
    onClose: c
}) {
    const [l, o] = s.useState(!0), [p, b] = s.useState(!1), [r, h] = s.useState(null), [f, d] = s.useState(""), a = s.useRef(null), i = s.useRef(!1), u = s.useRef(null), n = s.useRef(!1), m = async () => {
        u.current && (clearTimeout(u.current), u.current = null);
        try {
            a.current && (await a.current.stop(), a.current.clear())
        } catch {}
        a.current = null, n.current = !1
    }, w = async N => {
        const j = String(N || "").trim();
        if (!(!j || i.current)) {
            i.current = !0, b(!0), await m(), o(!1);
            try {
                const {
                    data: x
                } = await M.post("/api/transport-applications/verify-bus", {
                    token: j
                });
                h({
                    result: x ? .result || "ERROR",
                    message: x ? .message || "",
                    busNumber: x ? .busNumber || "",
                    busRoute: x ? .busRoute || "",
                    passRoute: x ? .passRoute || ""
                })
            } catch (x) {
                h({
                    result: "ERROR",
                    message: x ? .response ? .data ? .message || "Verification failed."
                })
            } finally {
                b(!1), i.current = !1
            }
        }
    }, g = () => {
        h(null), d(""), o(!0), i.current = !1, u.current && clearTimeout(u.current), u.current = setTimeout(async () => {
            if (u.current = null, !(a.current || n.current)) {
                n.current = !0;
                try {
                    const N = document.getElementById(k);
                    N && (N.innerHTML = "");
                    const j = await E.getCameras();
                    if (!j.length) {
                        d("No camera found on this device."), n.current = !1;
                        return
                    }
                    const x = j.find(y => y.label ? .toLowerCase().includes("back")) || j[0],
                        S = new E(k);
                    a.current = S, await S.start(x.id, {
                        fps: 12,
                        qrbox: 250
                    }, y => w(F(y)))
                } catch {
                    d("Camera unavailable or permission denied. Allow camera access and try again.")
                } finally {
                    n.current = !1
                }
            }
        }, 120)
    };
    s.useEffect(() => (g(), () => {
        m()
    }), []);
    const R = r ? T[r.result] || T.ERROR : null;
    return B.createPortal(e.jsx("div", {
        className: "fixed inset-0 z-[130] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",
        onMouseDown: c,
        children: e.jsxs("div", {
            className: `${t.card} w-full max-w-md overflow-hidden rounded-2xl flex flex-col`,
            style: {
                maxHeight: "min(90vh, 720px)"
            },
            onMouseDown: N => N.stopPropagation(),
            children: [e.jsxs("div", {
                className: `${t.cardHeader} flex items-center justify-between gap-2 px-4 py-3`,
                children: [e.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0",
                    children: [e.jsx(I, {
                        className: "w-4 h-4 text-emerald-500 shrink-0"
                    }), e.jsxs("div", {
                        className: "min-w-0",
                        children: [e.jsx("h3", {
                            className: `text-sm font-bold ${t.textPrimary}`,
                            children: "Scan to Verify Bus"
                        }), e.jsx("p", {
                            className: `text-[11px] ${t.textMuted}`,
                            children: "Point the camera at the QR sticker on the bus."
                        })]
                    })]
                }), e.jsx("button", {
                    onClick: c,
                    className: `${t.textMuted} hover:text-red-500`,
                    children: e.jsx(L, {
                        className: "w-4 h-4"
                    })
                })]
            }), e.jsx("div", {
                className: "p-4 overflow-auto",
                children: l ? e.jsxs("div", {
                    className: "space-y-3",
                    children: [e.jsx("div", {
                        id: k,
                        className: "w-full overflow-hidden rounded-xl border bg-black/5"
                    }), f ? e.jsx("div", {
                        className: "rounded-lg border border-amber-200 bg-amber-50 p-2 text-xs text-amber-800",
                        children: f
                    }) : e.jsxs("div", {
                        className: `inline-flex items-center gap-1.5 text-[11px] ${t.textMuted}`,
                        children: [e.jsx(U, {
                            className: "w-3.5 h-3.5"
                        }), " Scanning for the bus QR…"]
                    })]
                }) : e.jsxs("div", {
                    className: "space-y-4",
                    children: [p ? e.jsx("div", {
                        className: `text-center text-xs ${t.textMuted}`,
                        children: "Verifying…"
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsxs("div", {
                            className: `rounded-xl border p-4 text-center ${$[R?.tone]||$.red}`,
                            children: [R ? .Icon ? e.jsx(R.Icon, {
                                className: "w-10 h-10 mx-auto"
                            }) : null, e.jsx("div", {
                                className: "mt-2 text-base font-extrabold tracking-wide",
                                children: R ? .title
                            }), r ? .message ? e.jsx("div", {
                                className: "mt-1 text-xs opacity-90",
                                children: r.message
                            }) : null]
                        }), r ? .busNumber || r ? .busRoute || r ? .passRoute ? e.jsxs("div", {
                            className: `${t.card} rounded-xl p-3 space-y-1.5 text-xs`,
                            children: [r.busNumber ? e.jsxs("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [e.jsx("span", {
                                    className: t.textMuted,
                                    children: "Bus"
                                }), e.jsx("span", {
                                    className: `font-semibold ${t.textPrimary}`,
                                    children: r.busNumber
                                })]
                            }) : null, r.busRoute ? e.jsxs("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [e.jsx("span", {
                                    className: t.textMuted,
                                    children: "Bus Route"
                                }), e.jsx("span", {
                                    className: `font-semibold text-right ${t.textPrimary}`,
                                    children: r.busRoute
                                })]
                            }) : null, r.passRoute ? e.jsxs("div", {
                                className: "flex items-center justify-between gap-3",
                                children: [e.jsx("span", {
                                    className: t.textMuted,
                                    children: "Your Pass Route"
                                }), e.jsx("span", {
                                    className: `font-semibold text-right ${t.textPrimary}`,
                                    children: r.passRoute
                                })]
                            }) : null]
                        }) : null]
                    }), e.jsxs("button", {
                        type: "button",
                        onClick: g,
                        className: `${t.btnPrimary} w-full justify-center px-4 py-2 text-sm font-semibold inline-flex items-center gap-2`,
                        children: [e.jsx(D, {
                            className: "w-4 h-4"
                        }), " Scan Again"]
                    })]
                })
            })]
        })
    }), document.body)
}
export {
    le as B, ne as R, ce as T
};