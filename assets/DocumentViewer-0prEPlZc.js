import {
    j as e,
    r,
    F as D
} from "./index-yzCs2v45.js";
import {
    R as ee
} from "./index-CPEKXmhm.js";
import {
    P as se,
    M as te,
    D as re,
    G as ne
} from "./index-B3wZIppj.js";
import {
    a as ae,
    o as le
} from "./documentViewerUtils-BeaSZYia.js";
import {
    C as oe
} from "./chevron-left-B7HIPTlv.js";
import {
    C as ce
} from "./chevron-right-DpJOyS83.js";
import {
    a as ie,
    Z as de
} from "./zoom-out-DrhERBlT.js";
import {
    X as R
} from "./x-5ZDqsGnB.js";
ne.workerSrc = new URL("./assets/pdf.worker.min-qwK7q_zL.mjs",
    import.meta.url).toString();
const o = ({
        onClick: s,
        disabled: n,
        children: a,
        className: l = ""
    }) => e.jsx("button", {
        onClick: s,
        disabled: n,
        className: `p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${l}`,
        children: a
    }),
    me = ({
        fileUrl: s,
        fileName: n = "Document",
        onClose: a,
        defaultZoom: l = 100,
        minZoom: d = 25,
        maxZoom: L = 300,
        zoomStep: w = 10,
        showToolbar: M = !0,
        fileIndex: m = 0,
        fileCount: x = 0,
        onPrevFile: P,
        onNextFile: S,
        className: W = ""
    }) => {
        const [u, i] = r.useState(l), [h, y] = r.useState(null), [Z, g] = r.useState(!1), [f, j] = r.useState(!1), [v, O] = r.useState(0), N = r.useRef(null), [F, T] = r.useState(0), $ = ae(s), z = s && s !== "null" && s !== "undefined", [I, V] = r.useState(s);
        s !== I && (V(s), y(null), g(!1)), r.useEffect(() => {
            const t = () => j(!!document.fullscreenElement);
            return document.addEventListener("fullscreenchange", t), () => document.removeEventListener("fullscreenchange", t)
        }, []), r.useEffect(() => {
            const t = N.current;
            if (!t) return;
            const c = () => T(t.clientWidth || 0);
            c();
            const E = new ResizeObserver(c);
            return E.observe(t), () => E.disconnect()
        }, [f]);
        const q = () => {
                const t = document.getElementById("document-viewer-container");
                document.fullscreenElement ? (document.exitFullscreen(), j(!1)) : (t ? .requestFullscreen(), j(!0))
            },
            G = () => i(t => Math.min(L, t + w)),
            K = () => i(t => Math.max(d, t - w)),
            A = () => i(l),
            B = () => i(100),
            b = () => {
                le(s)
            },
            _ = () => e.jsxs("div", {
                className: "flex flex-col items-center justify-center h-full min-h-[300px]",
                children: [e.jsx("div", {
                    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"
                }), e.jsx("p", {
                    className: "mt-3 text-gray-400 text-sm",
                    children: "Loading document..."
                })]
            }),
            k = () => e.jsxs("div", {
                className: "flex flex-col items-center justify-center h-full min-h-[300px] text-red-400",
                children: [e.jsx(R, {
                    className: "w-12 h-12 mb-3"
                }), e.jsx("p", {
                    className: "text-sm mb-3",
                    children: "Failed to load document"
                }), e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx("button", {
                        onClick: () => {
                            g(!1), O(t => t + 1)
                        },
                        className: "px-3 py-1.5 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm",
                        children: "Retry"
                    }), e.jsx("button", {
                        onClick: b,
                        className: "px-3 py-1.5 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm",
                        children: "Try Downloading"
                    })]
                })]
            }),
            H = () => e.jsxs("div", {
                className: "flex flex-col items-center justify-center h-full min-h-[300px] text-gray-500",
                children: [e.jsx("div", {
                    className: "w-16 h-16 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center mb-3",
                    children: e.jsx(D, {
                        className: "w-8 h-8"
                    })
                }), e.jsx("p", {
                    className: "text-sm mb-3",
                    children: "No document available"
                }), s && s !== "null" && e.jsx("button", {
                    onClick: b,
                    className: "px-3 py-1.5 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm",
                    children: "Download File"
                })]
            }),
            p = F > 0 ? Math.max(200, Math.floor((F - 32) * (u / 100))) : 0,
            X = r.useMemo(() => !p || !h ? null : Array.from({
                length: h
            }, (t, c) => e.jsx(se, {
                pageNumber: c + 1,
                width: p,
                className: "shadow-lg bg-white rounded-sm",
                renderTextLayer: !1,
                renderAnnotationLayer: !1
            }, c)), [h, p]),
            J = () => e.jsx(re, {
                file: s,
                onLoadSuccess: ({
                    numPages: t
                }) => y(t),
                loading: _(),
                error: k(),
                className: "flex flex-col items-center gap-4 w-full",
                children: X
            }, v),
            Q = () => Z ? k() : e.jsx("div", {
                className: "flex justify-center items-center h-full w-full",
                children: e.jsx("img", {
                    src: s,
                    alt: n,
                    style: {
                        transform: `scale(${u/100})`
                    },
                    className: "max-w-full max-h-full object-contain bg-white rounded-sm shadow-lg",
                    onError: () => g(!0)
                }, `${s}-${v}`)
            }),
            Y = () => e.jsxs("div", {
                className: "flex flex-col items-center justify-center h-full min-h-[300px] text-gray-500",
                children: [e.jsx("div", {
                    className: "w-16 h-16 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center mb-3",
                    children: e.jsx("span", {
                        className: "text-2xl font-bold",
                        children: "?"
                    })
                }), e.jsx("p", {
                    className: "text-sm mb-3",
                    children: "No preview available for this file type"
                }), e.jsx("button", {
                    onClick: b,
                    className: "px-3 py-1.5 bg-gray-700 rounded hover:bg-gray-600 text-white text-sm",
                    children: "Download File"
                })]
            }),
            U = () => {
                if (!z) return H();
                switch ($) {
                    case "pdf":
                        return J();
                    case "image":
                        return Q();
                    default:
                        return Y()
                }
            },
            C = e.jsxs("div", {
                id: "document-viewer-container",
                className: `flex flex-col bg-[#2a2a2e] rounded-lg overflow-hidden ${W}`,
                style: {
                    height: f ? "100vh" : "100%",
                    minHeight: "300px"
                },
                children: [M && e.jsxs("div", {
                    className: "bg-[#3a3a3e] border-b border-[#222] px-3 py-2 flex items-center justify-between flex-wrap gap-2",
                    children: [e.jsxs("div", {
                        className: "flex items-center gap-2 min-w-0 flex-1",
                        children: [e.jsx(D, {
                            className: "w-4 h-4 text-gray-400 flex-shrink-0"
                        }), e.jsx("span", {
                            className: "text-sm text-gray-200 truncate",
                            children: n
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center gap-1",
                        children: [x > 1 && e.jsxs(e.Fragment, {
                            children: [e.jsx(o, {
                                onClick: P,
                                disabled: m <= 0,
                                children: e.jsx(oe, {
                                    className: "w-4 h-4"
                                })
                            }), e.jsxs("span", {
                                className: "text-xs text-gray-400 min-w-[50px] text-center tabular-nums",
                                children: [m + 1, "/", x]
                            }), e.jsx(o, {
                                onClick: S,
                                disabled: m >= x - 1,
                                children: e.jsx(ce, {
                                    className: "w-4 h-4"
                                })
                            }), e.jsx("div", {
                                className: "w-px h-5 bg-gray-600 mx-1"
                            })]
                        }), e.jsx(o, {
                            onClick: K,
                            children: e.jsx(ie, {
                                className: "w-4 h-4"
                            })
                        }), e.jsxs("button", {
                            onClick: A,
                            className: "text-xs text-gray-400 hover:text-white min-w-[45px] text-center",
                            children: [u, "%"]
                        }), e.jsx(o, {
                            onClick: G,
                            children: e.jsx(de, {
                                className: "w-4 h-4"
                            })
                        }), e.jsx("button", {
                            onClick: B,
                            className: "text-xs px-2 py-1 rounded border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-colors",
                            title: "Fit document to viewer width",
                            children: "Fit Width"
                        }), e.jsx("div", {
                            className: "w-px h-5 bg-gray-600 mx-1"
                        }), e.jsx(o, {
                            onClick: q,
                            children: e.jsx(te, {
                                className: "w-4 h-4"
                            })
                        }), a && e.jsxs(e.Fragment, {
                            children: [e.jsx("div", {
                                className: "w-px h-5 bg-gray-600 mx-1"
                            }), e.jsx(o, {
                                onClick: a,
                                children: e.jsx(R, {
                                    className: "w-4 h-4"
                                })
                            })]
                        })]
                    })]
                }), e.jsx("div", {
                    ref: N,
                    className: "flex-1 overflow-auto p-4 bg-[#202023] flex flex-col items-center",
                    style: {
                        scrollbarGutter: "stable"
                    },
                    children: U()
                })]
            });
        return C
    },
    we = ({
        isOpen: s,
        onClose: n,
        fileUrl: a,
        fileName: l,
        ...d
    }) => s ? ee.createPortal(e.jsx("div", {
        className: "fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4",
        children: e.jsx("div", {
            className: "w-full max-w-6xl h-[90vh]",
            children: e.jsx(me, {
                fileUrl: a,
                fileName: l,
                onClose: n,
                ...d
            })
        })
    }), document.body) : null;
export {
    we as D, me as a
};