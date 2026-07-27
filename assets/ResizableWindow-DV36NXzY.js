import {
    e as te,
    d as Ie,
    f as ye,
    r as n,
    R as Ee,
    j as e,
    u as Le,
    l as We,
    a as Be,
    w as Xe
} from "./index-yzCs2v45.js";
import {
    r as V
} from "./index-CPEKXmhm.js";
import {
    T
} from "./themeConfig-D35No_rL.js";
import {
    g as Fe
} from "./documentViewerUtils-BeaSZYia.js";
import {
    A as Te
} from "./index-Cgo6c22r.js";
import {
    m as K
} from "./proxy-CPEN9Don.js";
import {
    X as ue
} from "./x-5ZDqsGnB.js";
import {
    L as Ye
} from "./loader-circle-Du2bADAa.js";
import {
    G as He
} from "./globe-DO8HIZqX.js";
import {
    S as _e
} from "./shield-check-Cj1XZsO5.js";
const Ue = [
        ["path", {
            d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
            key: "1s6t7t"
        }],
        ["circle", {
            cx: "16.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "w0ekpg"
        }]
    ],
    Ge = te("key-round", Ue);
const Oe = [
        ["circle", {
            cx: "12",
            cy: "8",
            r: "5",
            key: "1hypcn"
        }],
        ["path", {
            d: "M20 21a8 8 0 0 0-16 0",
            key: "rfgkzh"
        }]
    ],
    ve = te("user-round", Oe);
const Ze = [
        ["path", {
            d: "M18 21a8 8 0 0 0-16 0",
            key: "3ypg7q"
        }],
        ["circle", {
            cx: "10",
            cy: "8",
            r: "5",
            key: "o932ke"
        }],
        ["path", {
            d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
            key: "10s06x"
        }]
    ],
    Y = te("users-round", Ze);
let J = 0;
const Q = new Set,
    ft = t => {
        const i = Math.max(0, Math.round(t || 0));
        i !== J && (J = i, Q.forEach(r => r()))
    },
    pe = () => J,
    qe = t => (Q.add(t), () => Q.delete(t)),
    Ve = async (t = []) => (await Ie.post("/api/permissions/access-report", {
        codes: t
    })).data,
    fe = ["from-rose-400 to-pink-600", "from-amber-400 to-orange-600", "from-emerald-400 to-teal-600", "from-sky-400 to-blue-600", "from-violet-400 to-purple-600", "from-fuchsia-400 to-pink-600", "from-cyan-400 to-sky-600", "from-lime-400 to-green-600"],
    Ke = (t = "") => {
        let i = 0;
        for (let r = 0; r < t.length; r++) i = i * 31 + t.charCodeAt(r) >>> 0;
        return fe[i % fe.length]
    };

function Je({
    name: t,
    photo: i
}) {
    const r = (t || "?").split(" ").map(o => o[0]).filter(Boolean).slice(0, 2).join("").toUpperCase(),
        h = Fe(i);
    return h ? e.jsx("img", {
        src: h,
        alt: t,
        className: "w-9 h-9 rounded-full object-cover flex-shrink-0 ring-2 ring-white/70 dark:ring-white/10 shadow-sm"
    }) : e.jsx("div", {
        className: `w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 bg-gradient-to-br ${Ke(t)} ring-2 ring-white/70 dark:ring-white/10 shadow-sm`,
        children: r
    })
}

function Qe({
    source: t
}) {
    if (t.type === "GROUP") {
        const i = t.groupActive === !1;
        return e.jsxs("span", {
            className: `inline-flex items-center gap-1 pl-1.5 pr-2 py-0.5 rounded-full text-[11px] font-medium ring-1 bg-indigo-50 text-indigo-700 ring-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-500/25 ${i?"opacity-50 line-through":""}`,
            title: i ? `${t.groupName} (inactive group)` : `Permission group: ${t.groupName}`,
            children: [e.jsx(Y, {
                size: 11
            }), t.groupName]
        })
    }
    return e.jsxs("span", {
        className: "inline-flex items-center gap-1 pl-1.5 pr-2 py-0.5 rounded-full text-[11px] font-medium ring-1 bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/25",
        title: "Granted directly to this user",
        children: [e.jsx(ve, {
            size: 11
        }), "Direct"]
    })
}

function ge({
    user: t,
    styles: i
}) {
    const r = t.isActive === !1;
    return e.jsxs("div", {
        className: "flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors",
        children: [e.jsx(Je, {
            name: t.name,
            photo: t.photo
        }), e.jsxs("div", {
            className: "min-w-0 flex-1",
            children: [e.jsxs("div", {
                className: "flex items-center gap-1.5 flex-wrap",
                children: [e.jsx("span", {
                    className: `text-sm font-semibold ${i.textPrimary} ${r?"opacity-50":""}`,
                    children: t.name
                }), t.role && e.jsx("span", {
                    className: "px-1.5 py-px rounded text-[10px] font-medium bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300",
                    children: t.role
                }), r && e.jsx("span", {
                    className: "px-1.5 py-px rounded text-[10px] font-medium bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-300",
                    children: "Inactive"
                })]
            }), e.jsx("div", {
                className: `text-xs ${i.textMuted} truncate`,
                children: t.email
            })]
        }), Array.isArray(t.sources) && t.sources.length > 0 && e.jsx("div", {
            className: "flex items-center gap-1.5 flex-wrap justify-end max-w-[45%]",
            children: t.sources.map((h, o) => e.jsx(Qe, {
                source: h
            }, o))
        })]
    })
}

function we({
    children: t
}) {
    return e.jsx("div", {
        className: "rounded-2xl border border-black/[0.06] dark:border-white/10 overflow-hidden bg-white/40 dark:bg-white/[0.02]",
        children: t
    })
}

function et({
    open: t,
    onClose: i,
    route: r
}) {
    const {
        theme: h
    } = ye(), o = T[h] ? ? T.default, [p, C] = n.useState(!1), [M, L] = n.useState(""), [g, W] = n.useState(null), f = r ? .label || "This Page", B = Ee.useMemo(() => {
        if (!r) return [];
        const a = [...Array.isArray(r.permissions) ? r.permissions : [], ...Array.isArray(r.anyPermissions) ? r.anyPermissions : []];
        return [...new Set(a.filter(Boolean))]
    }, [r]);
    return n.useEffect(() => {
        if (!t) return;
        let a = !1;
        return (async () => {
            C(!0), L(""), W(null);
            try {
                const H = await Ve(B);
                a || W(H)
            } catch {
                a || L("Failed to load page access. Please try again.")
            } finally {
                a || C(!1)
            }
        })(), () => {
            a = !0
        }
    }, [t, B]), V.createPortal(e.jsx(Te, {
        children: t && e.jsx(K.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md",
            onMouseDown: i,
            children: e.jsxs(K.div, {
                initial: {
                    opacity: 0,
                    scale: .96,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: .96,
                    y: 12
                },
                transition: {
                    type: "spring",
                    damping: 26,
                    stiffness: 320
                },
                className: `relative w-full max-w-lg max-h-[86vh] flex flex-col overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 ${o.modalContent}`,
                onMouseDown: a => a.stopPropagation(),
                children: [e.jsx("div", {
                    className: "relative flex-shrink-0 px-5 pt-5 pb-4 border-b border-black/[0.06] dark:border-white/10",
                    children: e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [e.jsx("div", {
                            className: "flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/20 flex-shrink-0",
                            children: e.jsx(Y, {
                                size: 20
                            })
                        }), e.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [e.jsx("h2", {
                                className: `text-[15px] font-bold leading-tight ${o.textPrimary}`,
                                children: "Who can view this page"
                            }), e.jsxs("div", {
                                className: "flex items-center gap-1.5 mt-1 flex-wrap",
                                children: [e.jsx("span", {
                                    className: `text-sm font-medium ${o.textSecondary} truncate`,
                                    children: f
                                }), r ? .category && e.jsx("span", {
                                    className: "px-1.5 py-px rounded text-[10px] font-medium bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400",
                                    children: r.category
                                })]
                            })]
                        }), e.jsx("button", {
                            type: "button",
                            onClick: i,
                            title: "Close",
                            "aria-label": "Close",
                            className: `-mr-1 -mt-1 inline-flex items-center justify-center w-8 h-8 rounded-xl ${o.textMuted} hover:bg-black/5 dark:hover:bg-white/10 hover:${o.textPrimary} active:scale-95 transition`,
                            children: e.jsx(ue, {
                                size: 18
                            })
                        })]
                    })
                }), e.jsxs("div", {
                    className: "flex-1 overflow-auto px-5 py-4 no-scrollbar",
                    children: [p && e.jsxs("div", {
                        className: "flex flex-col items-center justify-center gap-3 py-16",
                        children: [e.jsx(Ye, {
                            className: "w-7 h-7 animate-spin text-indigo-500"
                        }), e.jsx("span", {
                            className: `text-xs ${o.textMuted}`,
                            children: "Resolving access…"
                        })]
                    }), !p && M && e.jsxs("div", {
                        className: "flex flex-col items-center gap-2 py-12 text-center",
                        children: [e.jsx("div", {
                            className: "w-10 h-10 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center",
                            children: e.jsx(ue, {
                                size: 18,
                                className: "text-red-500"
                            })
                        }), e.jsx("p", {
                            className: "text-sm text-red-500",
                            children: M
                        })]
                    }), !p && !M && g && e.jsxs("div", {
                        className: "space-y-4",
                        children: [g.openToAll && e.jsxs("div", {
                            className: "flex items-start gap-2.5 rounded-2xl px-3.5 py-3 bg-sky-50 text-sky-800 ring-1 ring-sky-200 dark:bg-sky-500/10 dark:text-sky-200 dark:ring-sky-500/20",
                            children: [e.jsx(He, {
                                size: 17,
                                className: "mt-0.5 flex-shrink-0"
                            }), e.jsx("p", {
                                className: "text-[13px] leading-snug",
                                children: r ? .path ? "This page has no permission restrictions — every authenticated user can view it." : "Couldn't determine this page's permissions automatically. Admins below can always view it."
                            })]
                        }), g.permissions ? .map(a => e.jsxs(we, {
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-2 px-3.5 py-2.5 bg-black/[0.02] dark:bg-white/[0.03] border-b border-black/[0.06] dark:border-white/10",
                                children: [e.jsx("div", {
                                    className: "flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300 flex-shrink-0",
                                    children: e.jsx(Ge, {
                                        size: 13
                                    })
                                }), e.jsx("span", {
                                    className: `text-sm font-semibold ${o.textPrimary} truncate flex-1`,
                                    children: a.code
                                }), a.exists === !1 ? e.jsx("span", {
                                    className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-300 flex-shrink-0",
                                    children: "unknown"
                                }) : e.jsxs("span", {
                                    className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300 flex-shrink-0",
                                    children: [a.userCount, " ", a.userCount === 1 ? "user" : "users"]
                                })]
                            }), a.description && e.jsx("p", {
                                className: `text-xs ${o.textMuted} px-3.5 pt-2`,
                                children: a.description
                            }), e.jsx("div", {
                                className: "p-1.5",
                                children: a.users ? .length > 0 ? a.users.map($ => e.jsx(ge, {
                                    user: $,
                                    styles: o
                                }, $.userId)) : e.jsx("p", {
                                    className: `text-xs italic ${o.textMuted} px-3 py-3`,
                                    children: "No non-admin user currently has this permission."
                                })
                            })]
                        }, a.code)), g.admins ? .length > 0 && e.jsxs(we, {
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-2 px-3.5 py-2.5 bg-emerald-50/60 dark:bg-emerald-500/[0.07] border-b border-emerald-200/50 dark:border-emerald-500/15",
                                children: [e.jsx("div", {
                                    className: "flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300 flex-shrink-0",
                                    children: e.jsx(_e, {
                                        size: 14
                                    })
                                }), e.jsx("span", {
                                    className: `text-sm font-semibold ${o.textPrimary} flex-1`,
                                    children: "Admins"
                                }), e.jsx("span", {
                                    className: "px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300 flex-shrink-0",
                                    children: "full access"
                                })]
                            }), e.jsx("p", {
                                className: `text-xs ${o.textMuted} px-3.5 pt-2`,
                                children: "Admins bypass all permission checks and can view every page."
                            }), e.jsx("div", {
                                className: "p-1.5",
                                children: g.admins.map(a => e.jsx(ge, {
                                    user: { ...a,
                                        role: "Admin",
                                        sources: []
                                    },
                                    styles: o
                                }, a.userId))
                            })]
                        })]
                    })]
                }), !p && !M && g && !g.openToAll && e.jsxs("div", {
                    className: "flex-shrink-0 flex items-center gap-4 px-5 py-2.5 border-t border-black/[0.06] dark:border-white/10 text-[11px]",
                    children: [e.jsxs("span", {
                        className: `flex items-center gap-1.5 ${o.textMuted}`,
                        children: [e.jsx(Y, {
                            size: 12,
                            className: "text-indigo-500"
                        }), " via permission group"]
                    }), e.jsxs("span", {
                        className: `flex items-center gap-1.5 ${o.textMuted}`,
                        children: [e.jsx(ve, {
                            size: 12,
                            className: "text-amber-500"
                        }), " granted directly"]
                    })]
                })]
            })
        })
    }), document.body)
}
const be = 30,
    tt = 39;
let u = [];
const ee = new Set,
    se = () => ee.forEach(t => t()),
    st = t => {
        u = u.filter(i => i !== t), u.push(t), se()
    },
    it = t => {
        u = u.filter(i => i !== t), se()
    },
    nt = t => {
        u[u.length - 1] !== t && (u = u.filter(i => i !== t), u.push(t), se())
    },
    rt = t => {
        const i = u.indexOf(t);
        return i === -1 ? be : Math.min(tt, be + i)
    };

function gt({
    title: t,
    children: i,
    onClose: r,
    defaultWidth: h = 900,
    defaultHeight: o = 600,
    minWidth: p = 400,
    minHeight: C = 300,
    startMaximized: M = !1
}) {
    const L = Le(),
        g = We(),
        {
            theme: W
        } = ye(),
        f = T[W] ? ? T.default,
        {
            user: B
        } = Be(),
        a = B ? .role === "Admin",
        $ = Xe(g.pathname),
        [H, ie] = n.useState(!1),
        ne = a ? e.jsx("button", {
            type: "button",
            onMouseDown: s => s.stopPropagation(),
            onClick: s => {
                s.stopPropagation(), ie(!0)
            },
            title: "Who can view this page",
            "aria-label": "Who can view this page",
            className: `inline-flex items-center justify-center w-4 h-4 rounded-lg ${f.textPrimary} hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition`,
            children: e.jsx(Y, {
                size: 16
            })
        }) : null,
        je = a ? e.jsx(et, {
            open: H,
            onClose: () => ie(!1),
            route: $ || {
                label: t
            }
        }) : null,
        ke = n.useRef(null),
        S = n.useId(),
        [, Ne] = n.useState(0),
        [y, re] = n.useState(M),
        [_, Me] = n.useState(!1),
        [w, ze] = n.useState(!1),
        [Ce, Se] = n.useState(!1),
        [R, Pe] = n.useState(pe()),
        [z, b] = n.useState({
            x: 0,
            y: 0
        }),
        [v, j] = n.useState({
            width: h,
            height: o
        }),
        [oe, ae] = n.useState({
            position: {
                x: 0,
                y: 0
            },
            size: {
                width: h,
                height: o
            }
        }),
        [X, le] = n.useState(!1),
        [U, Ae] = n.useState({
            x: 0,
            y: 0
        }),
        [F, ce] = n.useState(!1),
        [D, de] = n.useState(""),
        [c, $e] = n.useState({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            posX: 0,
            posY: 0
        });
    n.useEffect(() => {
        st(S);
        const s = () => Ne(l => l + 1);
        return ee.add(s), () => {
            ee.delete(s), it(S)
        }
    }, [S]);
    const Re = n.useCallback(() => nt(S), [S]);
    n.useEffect(() => qe(() => Pe(pe())), []);
    const P = w ? 0 : R;
    n.useEffect(() => {
        const s = () => {
            const l = window.innerWidth < 768;
            ze(l);
            const d = l ? 0 : R;
            if (l) b({
                x: 0,
                y: 64
            }), j({
                width: window.innerWidth,
                height: window.innerHeight - 64
            });
            else if (y) b({
                x: d,
                y: 64
            }), j({
                width: window.innerWidth - d,
                height: window.innerHeight - 64
            });
            else {
                const m = window.innerWidth - d;
                j(x => ({
                    width: Math.min(x.width, m - 20),
                    height: Math.min(x.height, window.innerHeight - 80)
                })), b(x => ({
                    x: Math.max(d, Math.min(x.x, window.innerWidth - Math.min(v.width, m - 20))),
                    y: Math.max(64, Math.min(x.y, window.innerHeight - 100))
                }))
            }
        };
        return s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
    }, [y, v.width, v.height, R]), n.useEffect(() => {
        const s = requestAnimationFrame(() => {
            if (window.innerWidth >= 768) {
                const l = R,
                    d = window.innerWidth - l,
                    m = Math.min(h, d - 20),
                    x = Math.min(o, window.innerHeight - 80),
                    A = l + Math.max(0, (d - m) / 2),
                    I = Math.max(80, (window.innerHeight - x) / 2);
                b({
                    x: A,
                    y: I
                }), j({
                    width: m,
                    height: x
                }), M && ae({
                    position: {
                        x: A,
                        y: I
                    },
                    size: {
                        width: m,
                        height: x
                    }
                })
            } else b({
                x: 0,
                y: 64
            }), j({
                width: window.innerWidth,
                height: window.innerHeight - 64
            });
            Se(!0)
        });
        return () => cancelAnimationFrame(s)
    }, [h, o]);
    const De = s => {
            y || w || (s.preventDefault(), le(!0), Ae({
                x: s.clientX - z.x,
                y: s.clientY - z.y
            }))
        },
        G = n.useCallback(s => {
            if (X) {
                const l = Math.max(P, Math.min(window.innerWidth - 100, s.clientX - U.x)),
                    d = Math.max(64, Math.min(window.innerHeight - 50, s.clientY - U.y));
                b({
                    x: l,
                    y: d
                })
            }
            if (F) {
                const l = s.clientX - c.x,
                    d = s.clientY - c.y;
                let m = c.width,
                    x = c.height,
                    A = c.posX,
                    I = c.posY;
                if (D.includes("e") && (m = Math.max(p, c.width + l)), D.includes("w")) {
                    const E = c.posX + c.width,
                        he = Math.max(P, c.posX + l),
                        me = E - he;
                    me >= p ? (m = me, A = he) : (m = p, A = E - p)
                }
                if (D.includes("s") && (x = Math.max(C, c.height + d)), D.includes("n")) {
                    const E = c.height - d;
                    E >= C && (x = E, I = c.posY + d)
                }
                j({
                    width: m,
                    height: x
                }), b({
                    x: A,
                    y: I
                })
            }
        }, [X, F, U, c, D, p, C, P]),
        O = n.useCallback(() => {
            le(!1), ce(!1), de("")
        }, []);
    n.useEffect(() => {
        if (X || F) return window.addEventListener("mousemove", G), window.addEventListener("mouseup", O), () => {
            window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", O)
        }
    }, [X, F, G, O]);
    const k = s => l => {
            y || w || (l.preventDefault(), l.stopPropagation(), ce(!0), de(s), $e({
                x: l.clientX,
                y: l.clientY,
                width: v.width,
                height: v.height,
                posX: z.x,
                posY: z.y
            }))
        },
        Z = () => {
            r ? r() : L("/dashboard")
        },
        q = () => {
            Me(!_)
        },
        xe = () => {
            if (!w)
                if (y) b(oe.position), j(oe.size), re(!1);
                else {
                    ae({
                        position: z,
                        size: v
                    });
                    const s = w ? 0 : R;
                    b({
                        x: s,
                        y: 64
                    }), j({
                        width: window.innerWidth - s,
                        height: window.innerHeight - 64
                    }), re(!0)
                }
        },
        N = w || y;
    return !Ce && !_ ? null : _ ? V.createPortal(e.jsx(K.div, {
        initial: {
            opacity: 0,
            y: 20,
            scale: .95
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: 20,
            scale: .95
        },
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 300
        },
        className: "fixed bottom-4 z-40 cursor-pointer group",
        style: {
            left: P + 16
        },
        onClick: q,
        whileHover: {
            y: -2,
            scale: 1.02
        },
        whileTap: {
            scale: .98
        },
        children: e.jsx("div", {
            className: `${f.modalContent} backdrop-blur-xl rounded-xl shadow-2xl border overflow-hidden`,
            children: e.jsxs("div", {
                className: "flex items-center gap-3 px-4 py-2.5 min-w-[200px] max-w-[300px]",
                children: [e.jsx("button", {
                    onClick: s => {
                        s.stopPropagation(), q()
                    },
                    className: "w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 border border-green-600/50 flex items-center justify-center group-hover:scale-110 transition-transform",
                    title: "Restore",
                    children: e.jsx("svg", {
                        className: "w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity",
                        viewBox: "0 0 10 10",
                        fill: "currentColor",
                        children: e.jsx("rect", {
                            x: "1",
                            y: "4.5",
                            width: "8",
                            height: "1.5"
                        })
                    })
                }), e.jsx("button", {
                    onClick: s => {
                        s.stopPropagation(), Z()
                    },
                    className: "w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 border border-red-600/50 flex items-center justify-center group-hover:scale-110 transition-transform",
                    title: "Close",
                    children: e.jsx("svg", {
                        className: "w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity",
                        viewBox: "0 0 10 10",
                        fill: "currentColor",
                        children: e.jsx("path", {
                            d: "M1 1l8 8M9 1l-8 8",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            fill: "none"
                        })
                    })
                }), e.jsx("div", {
                    className: "w-px h-4 bg-gray-300/50 mx-1"
                }), e.jsx("div", {
                    className: "flex-shrink-0",
                    children: e.jsx("div", {
                        className: "w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm",
                        children: e.jsxs("svg", {
                            className: "w-3 h-3 text-white",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [e.jsx("rect", {
                                x: "4",
                                y: "4",
                                width: "16",
                                height: "16",
                                rx: "2"
                            }), e.jsx("line", {
                                x1: "9",
                                y1: "4",
                                x2: "9",
                                y2: "20"
                            })]
                        })
                    })
                }), e.jsx("div", {
                    className: "flex-1 min-w-0",
                    children: e.jsx("p", {
                        className: `text-sm font-medium ${f.textPrimary} truncate`,
                        children: t
                    })
                }), e.jsx("div", {
                    className: "flex-shrink-0",
                    children: e.jsx("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"
                    })
                })]
            })
        })
    }), document.body) : V.createPortal(e.jsxs("div", {
        ref: ke,
        className: `fixed flex flex-col overflow-hidden shadow-2xl ${N?"":"border border-white/60 dark:border-white/15 ring-1 ring-black/10 dark:ring-white/10"}`,
        style: {
            left: N ? P : z.x,
            top: N ? 64 : z.y,
            width: N ? `calc(100% - ${P}px)` : v.width,
            height: N ? "calc(100vh - 64px)" : v.height,
            borderRadius: N ? 0 : 12,
            zIndex: rt(S)
        },
        children: [e.jsxs("div", {
            className: `flex items-center justify-between px-4 py-2.5 ${f.pageHeader} select-none flex-shrink-0 ${N?"rounded-none":"rounded-t-xl"} ${w?"cursor-default":"cursor-move"}`,
            onMouseDownCapture: Re,
            onMouseDown: De,
            onDoubleClick: xe,
            children: [e.jsx("div", {
                className: "flex items-center gap-2",
                children: w ? e.jsxs("button", {
                    onClick: s => {
                        s.stopPropagation(), Z()
                    },
                    className: `-ml-1.5 inline-flex items-center  gap-1 pl-2 pr-3 rounded-xl ${f.textPrimary} hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/15 active:scale-95 transition`,
                    title: "Back",
                    "aria-label": "Back",
                    children: [e.jsx("svg", {
                        className: "w-6 h-6",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: e.jsx("path", {
                            d: "M15 18l-6-6 6-6"
                        })
                    }), e.jsx("span", {
                        className: "text-sm font-semibold",
                        children: "Back"
                    })]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsx("button", {
                        onClick: s => {
                            s.stopPropagation(), Z()
                        },
                        className: "w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 border border-red-600/50 flex items-center justify-center group transition-colors",
                        title: "Close",
                        children: e.jsx("svg", {
                            className: "w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100",
                            viewBox: "0 0 10 10",
                            fill: "currentColor",
                            children: e.jsx("path", {
                                d: "M1 1l8 8M9 1l-8 8",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                fill: "none"
                            })
                        })
                    }), e.jsx("button", {
                        onClick: s => {
                            s.stopPropagation(), q()
                        },
                        className: "w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 border border-yellow-600/50 flex items-center justify-center group transition-colors",
                        title: "Minimize",
                        children: e.jsx("svg", {
                            className: "w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100",
                            viewBox: "0 0 10 10",
                            fill: "currentColor",
                            children: e.jsx("rect", {
                                x: "1",
                                y: "4.5",
                                width: "8",
                                height: "1.5"
                            })
                        })
                    }), e.jsx("button", {
                        onClick: s => {
                            s.stopPropagation(), xe()
                        },
                        className: "w-3 h-3 rounded-full border flex items-center justify-center group transition-colors bg-green-500 hover:bg-green-600 border-green-600/50 cursor-pointer",
                        title: y ? "Restore" : "Maximize",
                        children: y ? e.jsx("svg", {
                            className: "w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100",
                            viewBox: "0 0 10 10",
                            fill: "currentColor",
                            children: e.jsx("rect", {
                                x: "1",
                                y: "4.5",
                                width: "8",
                                height: "1.5"
                            })
                        }) : e.jsx("svg", {
                            className: "w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100",
                            viewBox: "0 0 10 10",
                            fill: "currentColor",
                            children: e.jsx("path", {
                                d: "M2 2h6v6H2z",
                                stroke: "currentColor",
                                strokeWidth: "1",
                                fill: "none"
                            })
                        })
                    })]
                })
            }), w ? e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: "flex-1 min-w-0 px-2 text-center",
                    children: e.jsx("span", {
                        className: `block text-[15px] font-semibold ${f.textPrimary} truncate`,
                        children: t
                    })
                }), e.jsx("div", {
                    className: "w-[76px] shrink-0 flex items-center justify-end",
                    children: ne
                })]
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: `absolute left-1/2 transform -translate-x-1/2 text-sm font-semibold ${f.textPrimary} pointer-events-none max-w-[60%] truncate`,
                    children: t
                }), e.jsx("div", {
                    className: " flex items-center justify-end",
                    children: ne
                })]
            })]
        }), e.jsx("div", {
            className: `flex-1 overflow-auto p-0 no-scrollbar ${f.modalContent} !rounded-none`,
            children: i
        }), je, !N && e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "absolute top-0 left-2 right-2 h-1 cursor-n-resize hover:bg-blue-400/50 transition-colors",
                onMouseDown: k("n")
            }), e.jsx("div", {
                className: "absolute bottom-0 left-2 right-2 h-1 cursor-s-resize hover:bg-blue-400/50 transition-colors",
                onMouseDown: k("s")
            }), e.jsx("div", {
                className: "absolute left-0 top-2 bottom-2 w-1 cursor-w-resize hover:bg-blue-400/50 transition-colors",
                onMouseDown: k("w")
            }), e.jsx("div", {
                className: "absolute right-0 top-2 bottom-2 w-1 cursor-e-resize hover:bg-blue-400/50 transition-colors",
                onMouseDown: k("e")
            }), e.jsx("div", {
                className: "absolute top-0 left-0 w-3 h-3 cursor-nw-resize hover:bg-blue-400/50 transition-colors",
                onMouseDown: k("nw")
            }), e.jsx("div", {
                className: "absolute top-0 right-0 w-3 h-3 cursor-ne-resize hover:bg-blue-400/50 transition-colors",
                onMouseDown: k("ne")
            }), e.jsx("div", {
                className: "absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize hover:bg-blue-400/50 transition-colors",
                onMouseDown: k("sw")
            }), e.jsx("div", {
                className: "absolute bottom-0 right-0 w-3 h-3 cursor-se-resize hover:bg-blue-400/50 transition-colors",
                onMouseDown: k("se")
            })]
        })]
    }), document.body)
}
export {
    gt as R, Y as U, ve as a, ft as s
};