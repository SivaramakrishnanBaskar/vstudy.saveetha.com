import {
    e as we,
    d as b,
    f as xs,
    r as i,
    j as e,
    R as bt,
    F as yt
} from "./index-yzCs2v45.js";
import {
    r as fe
} from "./index-CPEKXmhm.js";
import {
    T as be
} from "./themeConfig-D35No_rL.js";
import {
    D as ps
} from "./DocumentViewer-0prEPlZc.js";
import {
    g as fs
} from "./documentViewerUtils-BeaSZYia.js";
import {
    M as gt
} from "./message-circle-CSTi9y_-.js";
import {
    X as ye
} from "./x-5ZDqsGnB.js";
import {
    L as $
} from "./loader-circle-Du2bADAa.js";
import {
    P as wt
} from "./plus-CtdQW2QJ.js";
import {
    C as jt
} from "./chevron-left-B7HIPTlv.js";
import {
    I as bs
} from "./info-W7J9pIjo.js";
import {
    C as vt
} from "./chevron-down-DmPJToVT.js";
import {
    B as ge
} from "./ban-B9W6sqav.js";
import {
    S as Nt
} from "./shield-check-Cj1XZsO5.js";
import {
    S as ys
} from "./send-Dt_LTeSr.js";
import {
    I as gs
} from "./image-DcAYtpMt.js";
import {
    U as ws
} from "./user-plus-B-YBycC6.js";
const js = [
        ["path", {
            d: "M12 17v5",
            key: "bb1du9"
        }],
        ["path", {
            d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",
            key: "znwnzq"
        }],
        ["path", {
            d: "m2 2 20 20",
            key: "1ooewy"
        }],
        ["path", {
            d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",
            key: "c9qhm2"
        }]
    ],
    vs = we("pin-off", js);
const Ns = [
        ["path", {
            d: "M12 17v5",
            key: "bb1du9"
        }],
        ["path", {
            d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
            key: "1nkz8b"
        }]
    ],
    Cs = we("pin", Ns);
const ks = [
        ["path", {
            d: "M20 18v-2a4 4 0 0 0-4-4H4",
            key: "5vmcpk"
        }],
        ["path", {
            d: "m9 17-5-5 5-5",
            key: "nvlc11"
        }]
    ],
    We = we("reply", ks);
const _s = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M8 14s1.5 2 4 2 4-2 4-2",
            key: "1y1vjs"
        }],
        ["line", {
            x1: "9",
            x2: "9.01",
            y1: "9",
            y2: "9",
            key: "yxxnd0"
        }],
        ["line", {
            x1: "15",
            x2: "15.01",
            y1: "9",
            y2: "9",
            key: "1p4y9e"
        }]
    ],
    $s = we("smile", _s),
    Tt = s => s ? .data ? Array.isArray(s.data ? .data) ? s.data.data : Array.isArray(s.data) ? s.data : [] : [],
    Ss = async () => (await b.post("/api/chat/identities/sync")).data ? .data || null,
    Is = async () => {
        const s = await b.get("/api/chat/unread-count");
        return Number(s.data ? .data ? .count || 0)
    },
    Ms = async (s = "") => (await b.get("/api/chat/identities/search", {
        params: {
            q: s
        }
    })).data ? .data || [],
    Rs = async (s = {}) => {
        const r = await b.get("/api/chat/conversations", {
            params: s
        });
        return {
            chatIdentity: r.data ? .chat_identity || null,
            data: Tt(r),
            count: Number(r.data ? .count || 0)
        }
    },
    Ts = async s => (await b.get(`/api/chat/conversations/${s}`)).data ? .data || null,
    Ct = async s => (await b.post("/api/chat/conversations/direct", s)).data ? .data || null,
    Es = async (s, r = {}) => {
        const u = await b.get(`/api/chat/conversations/${s}/messages`, {
            params: r
        });
        return {
            data: Tt(u),
            count: Number(u.data ? .count || 0),
            relationship: u.data ? .relationship || null
        }
    },
    As = async s => (await b.get(`/api/chat/identities/${s}/profile`)).data ? .data || null,
    Ds = async s => (await b.post(`/api/chat/identities/${s}/block`)).data ? .data || null,
    zs = async s => (await b.delete(`/api/chat/identities/${s}/block`)).data ? .data || null,
    Ps = async s => (await b.post(`/api/chat/conversations/${s}/accept`)).data ? .data || null,
    kt = async (s, r) => (await b.post(`/api/chat/conversations/${s}/messages`, r)).data ? .data || null,
    Ls = async s => {
        const r = new FormData;
        return r.append("file", s), (await b.post("/api/lms/upload-any", r, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })).data || null
    },
    Bs = async (s, r) => (await b.post(`/api/chat/messages/${s}/reactions`, {
        reaction: r
    })).data ? .data || null,
    Fs = async (s, r) => (await b.delete(`/api/chat/messages/${s}/reactions`, {
        params: {
            reaction: r
        }
    })).data ? .data || null,
    Us = async s => (await b.post(`/api/chat/messages/${s}/pin`)).data ? .data || null,
    Os = async s => (await b.delete(`/api/chat/messages/${s}/pin`)).data ? .data || null,
    Hs = async (s, r) => {
        const u = r ? {
            message_id: r
        } : {};
        return (await b.post(`/api/chat/conversations/${s}/read`, u)).data ? .data || null
    },
    Vs = 3500,
    _t = 768,
    Ys = ["👍", "❤️", "😂", "🔥"],
    $t = 56,
    St = 96,
    Ws = ["😀", "😁", "😂", "🤣", "😊", "😍", "😘", "😎", "🤩", "🥳", "😉", "🙂", "🙃", "😌", "😔", "😢", "😭", "😤", "😡", "🤔", "🤗", "🤭", "🤫", "😴", "🤤", "😷", "🥺", "😅", "😇", "🫶", "👍", "👎", "👏", "🙌", "🙏", "💪", "👌", "✌️", "🤞", "👋", "🔥", "✨", "⭐", "🎉", "🎊", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "💯", "✅", "❌", "❓", "❗", "💥", "🌈"],
    It = s => {
        if (!s) return "";
        const r = new Date(s);
        return Number.isNaN(r.getTime()) ? "" : r.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit"
        })
    },
    Qe = (s, r) => {
        if (!s || !r) return !1;
        const u = new Date(s),
            y = new Date(r);
        return Number.isNaN(u.getTime()) || Number.isNaN(y.getTime()) ? !1 : u.getFullYear() === y.getFullYear() && u.getMonth() === y.getMonth() && u.getDate() === y.getDate()
    },
    Ks = s => {
        if (!s) return "";
        const r = new Date(s);
        if (Number.isNaN(r.getTime())) return "";
        const u = new Date,
            y = new Date;
        return y.setDate(u.getDate() - 1), Qe(r, u) ? "Today" : Qe(r, y) ? "Yesterday" : r.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    },
    Mt = typeof Intl < "u" && Intl.Segmenter ? new Intl.Segmenter(void 0, {
        granularity: "grapheme"
    }) : null,
    Xs = s => {
        const r = String(s || "").trim();
        if (!r) return !1;
        const u = Mt ? Array.from(Mt.segment(r), y => y.segment) : Array.from(r);
        return u.length !== 1 ? !1 : new RegExp("\\p{Extended_Pictographic}", "u").test(u[0])
    },
    Qs = s => {
        const r = s ? .type || "";
        return r.startsWith("image/") ? "image" : r.startsWith("video/") ? "video" : r.startsWith("audio/") ? "audio" : "document"
    },
    qs = s => {
        if (!s) return "file";
        try {
            const r = new URL(s).pathname;
            return decodeURIComponent(r.split("/").pop() || "") || "file"
        } catch {
            return String(s).split("/").pop() || "file"
        }
    },
    Gs = {
        image: "📷 Photo",
        video: "🎥 Video",
        audio: "🎵 Audio",
        document: "📎 Document"
    },
    Rt = ["from-rose-400 to-pink-600", "from-amber-400 to-orange-600", "from-emerald-400 to-teal-600", "from-sky-400 to-blue-600", "from-violet-400 to-purple-600", "from-fuchsia-400 to-pink-600", "from-cyan-400 to-sky-600", "from-lime-400 to-green-600"],
    Js = (s = "") => {
        let r = 0;
        for (let u = 0; u < s.length; u++) r = r * 31 + s.charCodeAt(u) >>> 0;
        return Rt[r % Rt.length]
    };

function Ke({
    name: s,
    photo: r,
    size: u = "h-10 w-10",
    textSize: y = "text-sm"
}) {
    const M = (s || "?").trim().charAt(0).toUpperCase(),
        R = fs(r);
    return R ? e.jsx("img", {
        src: R,
        alt: s || "avatar",
        className: `${u} rounded-full object-cover shrink-0 ring-2 ring-white/60 dark:ring-white/10 shadow-sm`
    }) : e.jsx("div", {
        className: `${u} ${y} rounded-full flex items-center justify-center font-semibold text-white shrink-0 bg-gradient-to-br ${Js(s)} ring-2 ring-white/60 dark:ring-white/10 shadow-sm`,
        children: M
    })
}
const Zs = s => s ? .latest_message_content ? s.latest_message_content : s ? .latest_message_id ? Gs[s.latest_message_type] || "Message" : "No messages yet",
    en = {
        student: "Student",
        faculty: "Faculty",
        admin: "Admin",
        admission: "Applicant",
        unknown: "Contact"
    },
    tn = s => s ? s.role === "student" ? [
        ["Name", s.name],
        ["Reg No", s.reg_no],
        ["Email", s.email],
        ["Program", s.program_name],
        ["Program Code", s.program_code],
        ["Institution", s.institution],
        ["Batch", s.batch]
    ] : s.role === "faculty" ? [
        ["Email", s.email],
        ["Bio ID", s.bio_id],
        ["Department", s.department],
        ["Institution", s.institution]
    ] : s.role === "admin" ? [
        ["Email", s.email]
    ] : [
        ["Name", s.name],
        ["Email", s.email]
    ] : [],
    sn = s => {
        const r = {};
        return s ? .chatIdentityId && (r.chatIdentityId = s.chatIdentityId), s ? .userId && (r.userId = s.userId), s ? .admissionUserId && (r.admissionUserId = s.admissionUserId), !r.chatIdentityId && !r.userId && !r.admissionUserId ? null : {
            participants: [r],
            context_type: s ? .contextType || null,
            context_id: s ? .contextId || null
        }
    },
    Xe = (s, r, u, y) => {
        if (!s) return "Conversation";
        if (s.type !== "direct" && s.title ? .trim()) return s.title.trim();
        if (y[s.id]) return y[s.id];
        if (s.type === "direct") return u ? .name && s.id === u.conversationId ? u.name : "Direct chat";
        if (s.participants ? .length) {
            const M = s.participants.filter(R => R.chat_identity_id !== r).map(R => R.display_name).filter(Boolean).slice(0, 3);
            if (M.length) return M.join(", ")
        }
        return "Conversation"
    };

function vn({
    directTarget: s = null,
    moduleTitle: r = "Chats",
    triggerClassName: u = "",
    triggerIconClassName: y = "",
    userType: M = null
}) {
    const {
        theme: R
    } = xs(), m = be[M === "ADMISSION" ? "midnight" : R] ? ? be.frosted ? ? be.midnight, l = m.chat ? ? be.midnight.chat, x = l.isDark, [C, je] = i.useState(!1), [Y, Et] = i.useState(() => typeof window < "u" ? window.innerWidth < _t : !1), [At, qe] = i.useState(!1), [Ge, g] = i.useState(""), [p, Dt] = i.useState(null), [T, ve] = i.useState([]), [d, W] = i.useState(null), [f, ee] = i.useState([]), [E, Ne] = i.useState(!1), [te, A] = i.useState(""), [Ce, ke] = i.useState(!1), [Je, _e] = i.useState(!1), [D, $e] = i.useState({}), [zt, Se] = i.useState(!1), [Ie, se] = i.useState(""), [Ze, F] = i.useState([]), [Pt, ne] = i.useState(!1), [et, Me] = i.useState(null), [ae, tt] = i.useState(""), [ie, z] = i.useState(null), [k, P] = i.useState(null), [Lt, re] = i.useState(!1), [Re, st] = i.useState(0), [Bt, K] = i.useState(!1), [Ft, le] = i.useState("menu"), [L, U] = i.useState(null), [Te, Ee] = i.useState({
        id: null,
        dx: 0
    }), [oe, Ae] = i.useState(null), [S, ce] = i.useState(!1), [Ut, X] = i.useState(!1), [j, Q] = i.useState(null), [Ot, nt] = i.useState(!1), [de, q] = i.useState(null), [O, ue] = i.useState(null), De = i.useRef(null), ze = i.useRef(null), Pe = i.useRef(""), me = i.useRef(null), Le = i.useRef(null), Be = i.useRef(null), he = i.useRef(null), G = i.useRef(null), H = i.useRef(null), xe = i.useRef({
        id: null,
        startX: 0,
        startY: 0,
        mine: !1,
        active: !1,
        locked: null
    }), J = i.useCallback(() => {
        requestAnimationFrame(() => G.current ? .focus())
    }, []), V = i.useCallback(async () => {
        try {
            const t = await Is();
            st(t)
        } catch {}
    }, []), Fe = i.useCallback(() => {
        const t = Be.current;
        if (!t) {
            re(!1);
            return
        }
        const a = 24,
            n = t.scrollHeight - t.scrollTop - t.clientHeight;
        re(n > a)
    }, []), Ue = i.useCallback((t = "smooth") => {
        const a = Be.current;
        a && (a.scrollTo({
            top: a.scrollHeight,
            behavior: t
        }), re(!1))
    }, []);
    i.useEffect(() => {
        ze.current = d
    }, [d]), i.useLayoutEffect(() => {
        E || d && he.current === d && f.length !== 0 && (Ue("auto"), he.current = null)
    }, [f, E, Ue, d]), i.useEffect(() => {
        Fe()
    }, [f, E, d, Fe]), i.useEffect(() => {
        if (!ie) return;
        const t = a => {
            Le.current && Le.current.contains(a.target) || (z(null), P(null))
        };
        return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t)
    }, [ie]);
    const at = i.useMemo(() => [s ? .chatIdentityId || "", s ? .userId || "", s ? .admissionUserId || "", s ? .contextType || "", s ? .contextId || ""].join("|"), [s ? .chatIdentityId, s ? .userId, s ? .admissionUserId, s ? .contextType, s ? .contextId]),
        it = i.useMemo(() => (T || []).reduce((t, a) => t + (Number(a ? .unread_count) || 0), 0), [T]);
    i.useEffect(() => {
        C ? st(it) : V()
    }, [C, it, V]);
    const rt = i.useMemo(() => {
            const t = ae.trim().toLowerCase();
            return t ? T.filter(a => {
                const n = (D[a.id] || a.title || "").toLowerCase(),
                    o = (a.latest_message_content || "").toLowerCase();
                return n.includes(t) || o.includes(t)
            }) : T
        }, [T, ae, D]),
        lt = i.useCallback(async (t, a) => {
            const n = (t || []).filter(c => c.type === "direct" && !D[c.id]).map(c => c.id);
            if (!n.length) return;
            const o = {};
            await Promise.all(n.slice(0, 8).map(async c => {
                try {
                    const N = ((await Ts(c)) ? .participants || []).find(B => B.chat_identity_id !== a && !B.left_at),
                        _ = s ? .name || "Direct chat";
                    o[c] = N ? .display_name || _
                } catch {
                    o[c] = s ? .name || "Direct chat"
                }
            })), Object.keys(o).length && $e(c => ({ ...c,
                ...o
            }))
        }, [s ? .name, D]),
        I = i.useCallback(async t => {
            const n = (await Rs({
                limit: 40
            })) ? .data || [];
            return ve(n), await lt(n, t), n
        }, [lt]),
        v = i.useCallback(async (t, a = {}) => {
            if (!t) return ee([]), [];
            a.silent || (he.current = t, Ne(!0));
            try {
                const n = await Es(t, {
                        limit: 80
                    }),
                    o = n ? .data || [];
                ee(o), Ae(n ? .relationship || null);
                const c = o[o.length - 1],
                    h = await Hs(t, c ? .id);
                return h && ve(N => (N || []).map(_ => _.id === t ? { ..._,
                    unread_count: Number(h.unread_count || 0),
                    last_read_message_id: h.last_read_message_id || _.last_read_message_id
                } : _)), p ? .id && await I(p.id), o
            } finally {
                a.silent || Ne(!1)
            }
        }, [p ? .id, I]),
        ot = i.useCallback(async () => {
            qe(!0), g("");
            try {
                const t = await Ss();
                Dt(t);
                let a = null;
                if (s) {
                    const o = sn(s);
                    o && (a = (await Ct(o)) ? .id || null, a && s ? .name && $e(h => ({ ...h,
                        [a]: s.name
                    })))
                }
                await I(t ? .id);
                const n = a || ze.current || null;
                W(n), n ? await v(n) : ee([])
            } catch (t) {
                const a = t ? .response ? .data ? .message || t ? .message || "Failed to load chats";
                g(a)
            } finally {
                qe(!1)
            }
        }, [s, v, I]);
    i.useEffect(() => {
        const t = () => {
            Et(window.innerWidth < _t)
        };
        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
    }, []), i.useEffect(() => {
        V();
        const t = () => V(),
            a = () => {
                document.visibilityState === "visible" && V()
            };
        return window.addEventListener("focus", t), document.addEventListener("visibilitychange", a), () => {
            window.removeEventListener("focus", t), document.removeEventListener("visibilitychange", a)
        }
    }, [V]), i.useEffect(() => {
        C || (clearTimeout(me.current), me.current = null, W(null), ee([]), Ne(!1), A(""), ke(!1), _e(!1), g(""), Se(!1), se(""), F([]), ne(!1), Me(null), tt(""), z(null), P(null), re(!1), K(!1), le("menu"), U(null), Ee({
            id: null,
            dx: 0
        }), Ae(null), X(!1), Q(null), q(null), ue(null), De.current = null, ze.current = null, he.current = null)
    }, [C]), i.useEffect(() => {
        if (!C) {
            Pe.current = "";
            return
        }
        const t = at || "__no_direct_target__";
        Pe.current !== t && (Pe.current = t, ot())
    }, [C, at, ot]), i.useEffect(() => {
        if (!C || !p ? .id) return;
        const t = window.setInterval(async () => {
            try {
                await I(p.id), d && await v(d, {
                    silent: !0
                })
            } catch {}
        }, Vs);
        return () => window.clearInterval(t)
    }, [C, p ? .id, d, I, v]), i.useEffect(() => {
        d && J(), U(null), K(!1), Ae(null), X(!1), Q(null), q(null)
    }, [d, J]);
    const pe = i.useMemo(() => T.find(t => t.id === d) || null, [T, d]),
        ct = i.useMemo(() => {
            for (let t = f.length - 1; t >= 0; t -= 1)
                if (f[t] ? .pinned) return f[t];
            return null
        }, [f]);
    i.useEffect(() => {
        const t = De.current;
        if (!t || t.applied || t.conversationId !== d || E || !f.length) return;
        if (t.applied = !0, !t.count || t.count <= 0) {
            ue(null);
            return
        }
        let a = null;
        if (t.lastReadId) {
            const n = f.findIndex(o => o.id === t.lastReadId);
            n >= 0 && n + 1 < f.length ? a = f[n + 1].id : n === -1 && (a = f[0].id)
        } else a = f.find(o => o.sender_id !== p ? .id) ? .id || f[0].id;
        ue(a ? {
            conversationId: d,
            beforeId: a,
            count: t.count
        } : null)
    }, [f, E, d, p ? .id]);
    const Ht = async t => {
            const a = (T || []).find(n => n.id === t);
            De.current = {
                conversationId: t,
                count: Number(a ? .unread_count || 0),
                lastReadId: a ? .last_read_message_id || null,
                applied: !1
            }, ue(null), W(t), ve(n => (n || []).map(o => o.id === t ? { ...o,
                unread_count: 0
            } : o)), await v(t)
        },
        Vt = t => {
            if (se(t), g(""), clearTimeout(me.current), !t.trim()) {
                F([]);
                return
            }
            ne(!0), me.current = setTimeout(async () => {
                try {
                    const a = await Ms(t.trim());
                    F(Array.isArray(a) ? a : [])
                } catch (a) {
                    const n = a ? .response ? .data ? .message || a ? .message || "Failed to search users";
                    g(n), F([])
                } finally {
                    ne(!1)
                }
            }, 350)
        },
        Yt = () => {
            Se(!0), se(""), F([]), g("")
        },
        Oe = () => {
            Se(!1), se(""), F([]), ne(!1)
        },
        Wt = async t => {
            Me(t.id);
            try {
                const a = {
                        participants: [{
                            chatIdentityId: t.id
                        }],
                        context_type: null,
                        context_id: null
                    },
                    n = await Ct(a);
                n ? .id && (t.display_name && $e(o => ({ ...o,
                    [n.id]: t.display_name
                })), p ? .id && await I(p.id), W(n.id), await v(n.id)), Oe()
            } catch (a) {
                const n = a ? .response ? .data ? .message || a ? .message || "Failed to start chat";
                g(n)
            } finally {
                Me(null)
            }
        },
        dt = async () => {
            if (!d || Ce) return;
            const t = te.trim();
            if (!t) return;
            const a = L ? .id || void 0;
            ke(!0);
            try {
                A(""), U(null), G.current && (G.current.style.height = "auto"), await kt(d, {
                    type: "text",
                    content: t,
                    reply_to_message_id: a
                }), await v(d), p ? .id && await I(p.id)
            } catch (n) {
                const o = n ? .response ? .data ? .message || n ? .message || "Failed to send message";
                g(o), A(t)
            } finally {
                ke(!1), J()
            }
        },
        Kt = async t => {
            const a = Array.from(t || []);
            if (!a.length || !d) return;
            _e(!0), g("");
            const n = te.trim(),
                o = L ? .id || void 0;
            try {
                for (let c = 0; c < a.length; c += 1) {
                    const h = a[c],
                        N = await Ls(h),
                        _ = N ? .url || N ? .key;
                    if (!_) throw new Error("Upload failed");
                    const B = Qs(h);
                    await kt(d, {
                        type: B,
                        content: c === 0 && n || null,
                        media: [{
                            media_url: _,
                            media_type: B,
                            mime_type: h.type || null,
                            file_size: h.size ? ? null
                        }],
                        reply_to_message_id: c === 0 ? o : void 0
                    })
                }
                A(""), U(null), await v(d), p ? .id && await I(p.id)
            } catch (c) {
                const h = c ? .response ? .data ? .message || c ? .message || "Failed to send attachment";
                g(h)
            } finally {
                _e(!1), H.current && (H.current.value = ""), J()
            }
        },
        ut = t => {
            H.current && (H.current.accept = t, H.current.click(), K(!1))
        },
        Xt = t => {
            const a = G.current;
            if (!a) {
                A(c => c + t);
                return
            }
            const n = a.selectionStart ? ? a.value.length,
                o = a.selectionEnd ? ? a.value.length;
            A(c => c.slice(0, n) + t + c.slice(o)), requestAnimationFrame(() => {
                a.focus();
                const c = n + t.length;
                a.setSelectionRange(c, c)
            })
        },
        Qt = async t => {
            if (!(!t ? .id || !d)) try {
                t.pinned ? await Os(t.id) : await Us(t.id), await v(d, {
                    silent: !0
                })
            } catch (a) {
                const n = a ? .response ? .data ? .message || a ? .message || "Failed to update pin";
                g(n)
            }
        },
        He = async (t, a) => {
            if (!(!t ? .id || !d || !a)) try {
                (t.reactions || []).some(o => o.reaction === a && o.reacted_by_me) ? await Fs(t.id, a) : await Bs(t.id, a), await v(d, {
                    silent: !0
                })
            } catch (n) {
                const o = n ? .response ? .data ? .message || n ? .message || "Failed to update reaction";
                g(o)
            }
        },
        mt = t => {
            t && (U(t), J())
        },
        Z = oe ? .other_identity_id || null,
        ht = async () => {
            if (Z) {
                X(!0), Q(null), nt(!0);
                try {
                    const t = await As(Z);
                    Q(t)
                } catch (t) {
                    g(t ? .response ? .data ? .message || t ? .message || "Failed to load user info")
                } finally {
                    nt(!1)
                }
            }
        },
        Ve = async (t, a) => {
            if (!(!t || S)) {
                ce(!0), g("");
                try {
                    a ? await Ds(t) : await zs(t), Q(n => n && { ...n,
                        blocked_by_me: a
                    }), d && await v(d, {
                        silent: !0
                    })
                } catch (n) {
                    g(n ? .response ? .data ? .message || n ? .message || "Failed to update block")
                } finally {
                    ce(!1)
                }
            }
        },
        qt = async () => {
            if (!(!d || S)) {
                ce(!0);
                try {
                    await Ps(d), await v(d, {
                        silent: !0
                    })
                } catch (t) {
                    g(t ? .response ? .data ? .message || t ? .message || "Failed to continue chat")
                } finally {
                    ce(!1)
                }
            }
        },
        Gt = async () => {
            Z && await Ve(Z, !0)
        },
        Jt = (t, a, n) => {
            const o = n.touches ? .[0];
            o && (xe.current = {
                id: t.id,
                startX: o.clientX,
                startY: o.clientY,
                mine: a,
                active: !0,
                locked: null
            })
        },
        Zt = (t, a) => {
            const n = xe.current;
            if (!n.active || n.id !== t.id) return;
            const o = a.touches ? .[0];
            if (!o) return;
            const c = o.clientX - n.startX,
                h = o.clientY - n.startY;
            if (n.locked === null) {
                if (Math.abs(c) < 8 && Math.abs(h) < 8) return;
                n.locked = Math.abs(c) > Math.abs(h) ? "x" : "y"
            }
            if (n.locked !== "x") return;
            const N = n.mine ? Math.max(-St, Math.min(0, c)) : Math.min(St, Math.max(0, c));
            N !== 0 && Ee({
                id: t.id,
                dx: N
            })
        },
        xt = t => {
            const n = xe.current.id === t.id && Math.abs(Te.dx) >= $t;
            xe.current = {
                id: null,
                startX: 0,
                startY: 0,
                mine: !1,
                active: !1,
                locked: null
            }, Ee({
                id: null,
                dx: 0
            }), n && mt(t)
        },
        es = Y ? "fixed inset-0 z-[70]" : "fixed right-4 top-20 bottom-4 z-[70] w-[min(96vw,960px)]",
        ts = Y ? `h-full w-full rounded-none border-0 overflow-hidden ${m.modalContent||m.menuPanel}` : `h-full w-full overflow-hidden rounded-[26px] shadow-2xl ${m.modalContent||m.menuPanel}`,
        ss = l.emptyText,
        ns = ["h-16 px-4 md:px-5 flex items-center justify-between border-b", m.pageHeader || m.topBar].join(" "),
        as = ["w-full md:w-[320px] min-h-0 flex flex-col border-r relative", m.card, "rounded-none shadow-none border-y-0 border-l-0"].join(" "),
        is = ["flex-1 rounded-2xl px-4 py-2.5 text-sm disabled:opacity-70 resize-none overflow-y-auto leading-5 no-scrollbar", m.input].join(" "),
        rs = ["h-11 w-11 rounded-2xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed", m.btnPrimary].join(" "),
        ls = ["h-11 w-11 shrink-0 rounded-2xl flex items-center justify-center transition disabled:opacity-50", x ? "bg-white/10 text-white/80 hover:bg-white/20" : "bg-black/5 text-slate-600 hover:bg-black/10"].join(" "),
        os = !Y || !d,
        cs = !Y || !!d,
        ds = (t, a) => t.reply_to ? e.jsxs("div", {
            className: `mb-1 rounded-md border-l-2 pl-2 pr-2 py-1 text-[11px] ${a?"border-white/60 bg-black/10 text-white/90":x?"border-white/30 bg-white/10 text-white/70":"border-slate-300 bg-slate-100 text-slate-600"}`,
            children: [e.jsx("div", {
                className: "font-semibold truncate",
                children: t.reply_to.sender_name || "User"
            }), e.jsx("div", {
                className: "truncate opacity-90",
                children: t.reply_to.content || "Attachment"
            })]
        }) : null,
        us = (t, a) => t.media ? .length ? e.jsx("div", {
            className: "space-y-1 mb-1",
            children: t.media.map((n, o) => {
                const c = `${t.id}-media-${o}`,
                    h = qs(n.media_url);
                return n.media_type === "image" ? e.jsx("button", {
                    type: "button",
                    onClick: () => q({
                        url: n.media_url,
                        name: h
                    }),
                    className: "block",
                    children: e.jsx("img", {
                        src: n.media_url,
                        alt: "attachment",
                        className: "rounded-lg max-h-64 w-auto max-w-full object-cover"
                    })
                }, c) : n.media_type === "video" ? e.jsx("video", {
                    src: n.media_url,
                    controls: !0,
                    className: "rounded-lg max-h-64 w-auto max-w-full"
                }, c) : e.jsxs("button", {
                    type: "button",
                    onClick: () => q({
                        url: n.media_url,
                        name: h
                    }),
                    className: `w-full text-left flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${a?"bg-black/15 text-white":x?"bg-white/10 text-white/90":"bg-slate-100 text-slate-700"}`,
                    children: [e.jsx(yt, {
                        size: 16,
                        className: "shrink-0"
                    }), e.jsx("span", {
                        className: "truncate",
                        children: h
                    })]
                }, c)
            })
        }) : null,
        pt = (t, a, n) => {
            const o = ie === t.id;
            return e.jsx("button", {
                type: "button",
                onMouseDown: c => c.stopPropagation(),
                onClick: c => {
                    c.stopPropagation(), o ? (z(null), P(null)) : (z(t.id), P({
                        rect: c.currentTarget.getBoundingClientRect(),
                        mine: a,
                        message: t
                    }))
                },
                className: n,
                children: e.jsx(vt, {
                    size: 16
                })
            })
        };
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("button", {
            type: "button",
            title: r,
            onClick: () => je(!0),
            className: u || "relative h-5 w-5 rounded-full border border-white/30 bg-white/10 text-white shadow-md transition hover:bg-white/20",
            children: [e.jsx(gt, {
                className: y || "h-1 w-1"
            }), Re > 0 && e.jsx("span", {
                className: "absolute -right-1 -top-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] leading-[18px] font-semibold text-center",
                children: Re > 99 ? "99+" : Re
            })]
        }), C && fe.createPortal(e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "fixed inset-0 z-[65] bg-slate-900/40 backdrop-blur-sm",
                onClick: () => je(!1)
            }), e.jsx("section", {
                className: es,
                children: e.jsx("div", {
                    className: ts,
                    children: e.jsxs("div", {
                        className: "h-full flex flex-col",
                        children: [e.jsxs("div", {
                            className: ns,
                            children: [e.jsx("div", {
                                className: "font-semibold tracking-wide truncate",
                                children: r
                            }), e.jsx("button", {
                                type: "button",
                                onClick: () => je(!1),
                                className: m.closeButton || "h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center",
                                children: e.jsx(ye, {
                                    size: 18
                                })
                            })]
                        }), Ge && e.jsx("div", {
                            className: "px-4 py-2 text-xs text-red-700 bg-red-100 border-b border-red-200",
                            children: Ge
                        }), At ? e.jsxs("div", {
                            className: `flex-1 flex items-center justify-center gap-2 ${ss}`,
                            children: [e.jsx($, {
                                className: "h-4 w-4 animate-spin"
                            }), e.jsx("span", {
                                children: "Loading chats..."
                            })]
                        }) : e.jsxs("div", {
                            className: "flex-1 min-h-0 flex",
                            children: [os && e.jsxs("aside", {
                                className: as,
                                children: [e.jsxs("div", {
                                    className: "flex flex-col flex-1 min-h-0",
                                    children: [e.jsx("div", {
                                        className: "px-2 pt-2 pb-1",
                                        children: e.jsx("input", {
                                            type: "text",
                                            value: ae,
                                            onChange: t => tt(t.target.value),
                                            placeholder: "Search conversations…",
                                            className: `${m.input} text-sm h-9`
                                        })
                                    }), e.jsx("div", {
                                        className: "flex-1 overflow-y-auto px-2 pt-2 pb-16",
                                        children: rt.length === 0 ? e.jsx("div", {
                                            className: `px-4 py-6 text-sm ${l.emptyText}`,
                                            children: ae.trim() ? "No matching conversations." : "No conversations yet."
                                        }) : rt.map(t => {
                                            const a = t.id === d,
                                                n = Xe(t, p ? .id, s, D);
                                            return e.jsx("button", {
                                                type: "button",
                                                onClick: () => Ht(t.id),
                                                className: `w-full text-left px-4 py-3 mb-2 rounded-2xl border transition ${a?l.convActive:l.convIdle}`,
                                                children: e.jsxs("div", {
                                                    className: "flex items-start justify-between gap-2",
                                                    children: [e.jsxs("div", {
                                                        className: "flex items-start gap-3 min-w-0",
                                                        children: [e.jsx(Ke, {
                                                            name: n,
                                                            photo: t.display_avatar
                                                        }), e.jsxs("div", {
                                                            className: "min-w-0",
                                                            children: [e.jsx("div", {
                                                                className: `text-sm font-semibold truncate ${l.convName}`,
                                                                children: n
                                                            }), e.jsx("div", {
                                                                className: `text-xs truncate mt-1 ${l.convPreview}`,
                                                                children: Zs(t)
                                                            })]
                                                        })]
                                                    }), e.jsxs("div", {
                                                        className: "flex flex-col items-end gap-1",
                                                        children: [e.jsx("span", {
                                                            className: `text-[10px] whitespace-nowrap ${l.convTime}`,
                                                            children: It(t.latest_message_created_at)
                                                        }), Number(t.unread_count || 0) > 0 && e.jsx("span", {
                                                            className: `min-w-[18px] h-[18px] px-1 rounded-full text-[10px] leading-[18px] text-center shadow-sm ${l.unreadBadge}`,
                                                            children: t.unread_count
                                                        })]
                                                    })]
                                                })
                                            }, t.id)
                                        })
                                    })]
                                }), M === "LMS" && e.jsx("button", {
                                    type: "button",
                                    title: "New chat",
                                    onClick: Yt,
                                    className: `absolute bottom-4 right-4 z-20 h-12 w-12 rounded-full active:scale-95 transition flex items-center justify-center ${l.fab}`,
                                    "aria-label": "New chat",
                                    children: e.jsx(wt, {
                                        size: 20
                                    })
                                })]
                            }), cs && e.jsxs("div", {
                                className: "flex-1 min-w-0 flex flex-col",
                                children: [e.jsxs("div", {
                                    className: `h-14 px-3 md:px-4 border-b flex items-center gap-2 !rounded-none ${m.cardHeader||"bg-white/80"}`,
                                    children: [Y && d && e.jsx("button", {
                                        type: "button",
                                        onClick: () => W(null),
                                        className: `h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${x?"bg-white/10 text-white/85 hover:bg-white/15":"bg-black/5 text-slate-600 hover:bg-black/10"}`,
                                        "aria-label": "Back to conversations",
                                        children: e.jsx(jt, {
                                            size: 18
                                        })
                                    }), pe ? e.jsxs(e.Fragment, {
                                        children: [e.jsxs("button", {
                                            type: "button",
                                            onClick: ht,
                                            className: "flex items-center gap-2.5 min-w-0 flex-1 text-left group",
                                            title: "View contact info",
                                            children: [e.jsx(Ke, {
                                                name: Xe(pe, p ? .id, s, D),
                                                photo: pe.display_avatar,
                                                size: "h-9 w-9"
                                            }), e.jsx("span", {
                                                className: `font-semibold truncate ${m.textPrimary} group-hover:underline`,
                                                children: Xe(pe, p ? .id, s, D)
                                            })]
                                        }), e.jsx("button", {
                                            type: "button",
                                            onClick: ht,
                                            title: "Contact info",
                                            "aria-label": "Contact info",
                                            className: `h-9 w-9 rounded-full flex items-center justify-center shrink-0 transition ${x?"bg-white/10 text-white/90 hover:bg-white/20":"bg-sky-500/15 text-sky-600 hover:bg-sky-500/25"}`,
                                            children: e.jsx(bs, {
                                                size: 18
                                            })
                                        })]
                                    }) : e.jsx("div", {
                                        className: `text-sm ${m.textSecondary}`,
                                        children: "Select a conversation"
                                    })]
                                }), ct && d && e.jsxs("div", {
                                    className: `px-3 md:px-4 py-2 border-b ${l.pinnedBar}`,
                                    children: [e.jsx("div", {
                                        className: `text-[11px] font-semibold ${l.pinnedLabel}`,
                                        children: "Pinned message"
                                    }), e.jsx("div", {
                                        className: `mt-1 text-xs truncate ${l.pinnedText}`,
                                        children: ct.content || "(no text)"
                                    })]
                                }), e.jsxs("div", {
                                    className: "relative flex-1 min-h-0",
                                    children: [e.jsx("div", {
                                        ref: Be,
                                        onScroll: Fe,
                                        className: `h-full overflow-y-auto px-3 md:px-5 py-4 space-y-3 no-scrollbar ${l.messagesBg}`,
                                        children: d ? E ? e.jsxs("div", {
                                            className: `h-full flex items-center justify-center gap-2 ${l.emptyText}`,
                                            children: [e.jsx($, {
                                                className: "h-4 w-4 animate-spin"
                                            }), e.jsx("span", {
                                                children: "Loading messages..."
                                            })]
                                        }) : f.length === 0 ? e.jsx("div", {
                                            className: `h-full flex items-center justify-center text-sm ${l.emptyText}`,
                                            children: "Start the conversation with a message."
                                        }) : f.map((t, a) => {
                                            const n = t.sender_id === p ? .id,
                                                o = Xs(t.content) && !t.media ? .length && !t.reply_to,
                                                c = t.type === "system",
                                                h = ie === t.id,
                                                N = f[a - 1],
                                                _ = !N || !Qe(N.created_at, t.created_at),
                                                B = O && O.conversationId === d && O.beforeId === t.id && O.count > 0,
                                                ft = e.jsxs(e.Fragment, {
                                                    children: [_ && e.jsx("div", {
                                                        className: "flex justify-center py-2",
                                                        children: e.jsx("span", {
                                                            className: `text-[11px] font-medium px-3 py-1 rounded-full shadow-sm ${x?"bg-white/10 text-white/70":"bg-white/80 text-slate-600 border border-slate-200/70"}`,
                                                            children: Ks(t.created_at)
                                                        })
                                                    }), B && e.jsxs("div", {
                                                        className: "flex items-center gap-2 py-1.5",
                                                        children: [e.jsx("div", {
                                                            className: `flex-1 h-px ${l.divider}`
                                                        }), e.jsxs("span", {
                                                            className: `text-[11px] font-medium ${l.mutedText}`,
                                                            children: [O.count, " unread message", O.count > 1 ? "s" : ""]
                                                        }), e.jsx("div", {
                                                            className: `flex-1 h-px ${l.divider}`
                                                        })]
                                                    })]
                                                });
                                            if (c) return e.jsxs(bt.Fragment, {
                                                children: [ft, e.jsx("div", {
                                                    className: "flex justify-center py-2",
                                                    children: e.jsx("div", {
                                                        className: `text-xs px-3 py-1 rounded-full ${x?"bg-white/10 text-white/60":"bg-slate-200 text-slate-600"}`,
                                                        children: t.content
                                                    })
                                                })]
                                            }, t.id);
                                            const Ye = Te.id === t.id ? Te.dx : 0,
                                                ms = Math.min(1, Math.abs(Ye) / $t),
                                                hs = {
                                                    onTouchStart: w => Jt(t, n, w),
                                                    onTouchMove: w => Zt(t, w),
                                                    onTouchEnd: () => xt(t),
                                                    onTouchCancel: () => xt(t)
                                                };
                                            return e.jsxs(bt.Fragment, {
                                                children: [ft, e.jsxs("div", {
                                                    className: `relative flex ${n?"justify-end":"justify-start"}`,
                                                    ...hs,
                                                    children: [e.jsx("div", {
                                                        className: `absolute top-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full ${n?"right-2":"left-2"} ${l.swipeReply}`,
                                                        style: {
                                                            opacity: ms
                                                        },
                                                        children: e.jsx(We, {
                                                            size: 18
                                                        })
                                                    }), e.jsx("div", {
                                                        className: o ? "" : "max-w-[88%] min-w-[21%] md:max-w-[72%]",
                                                        style: Ye ? {
                                                            transform: `translateX(${Ye}px)`
                                                        } : void 0,
                                                        children: o ? e.jsxs("div", {
                                                            className: `group relative flex flex-col ${n?"items-end":"items-start"}`,
                                                            children: [e.jsxs("div", {
                                                                className: `relative flex items-end gap-1 ${n?"flex-row-reverse":"flex-row"}`,
                                                                children: [e.jsx("div", {
                                                                    className: "text-[42px] leading-none select-none w-fit",
                                                                    children: t.content
                                                                }), pt(t, n, `self-center h-6 w-6 rounded-full flex items-center justify-center transition-opacity ${h?"opacity-100":"opacity-0 group-hover:opacity-100"} ${x?"bg-white/10 text-white/60 hover:bg-white/20":"bg-slate-200/80 text-slate-500 hover:bg-slate-300"}`)]
                                                            }), (t.reactions || []).length > 0 && e.jsx("div", {
                                                                className: "mt-1 flex flex-wrap gap-1",
                                                                children: (t.reactions || []).map(w => e.jsxs("button", {
                                                                    type: "button",
                                                                    onClick: () => He(t, w.reaction),
                                                                    className: `text-[11px] px-2 py-[2px] rounded-full border ${w.reacted_by_me?l.reactChipMine:l.reactChipOther}`,
                                                                    children: [w.reaction, " ", w.count]
                                                                }, `${t.id}-chip-${w.reaction}`))
                                                            })]
                                                        }) : e.jsxs("div", {
                                                            className: `px-4 py-2 rounded-[22px] border shadow-sm ${n?l.bubbleMine:l.bubbleOther}`,
                                                            children: [e.jsxs("div", {
                                                                className: "flex items-center justify-between gap-1 mb-1",
                                                                children: [e.jsx("span", {
                                                                    className: `text-xs font-semibold ${n?l.bubbleMineName:l.bubbleOtherName}`,
                                                                    children: n ? "You" : t.sender_name || "User"
                                                                }), pt(t, n, `h-4 w-4 rounded-full flex items-center justify-end shrink-0 ${h?n?"bg-white/25":x?"bg-white/15":"bg-slate-300":n?"hover:bg-white/25 text-white/80":x?"hover:bg-white/15 text-white/40":"hover:bg-slate-200 text-slate-400"}`)]
                                                            }), ds(t, n), us(t, n), t.content && e.jsx("div", {
                                                                className: "text-sm whitespace-pre-wrap break-words leading-6",
                                                                children: t.content
                                                            }), (t.reactions || []).length > 0 && e.jsx("div", {
                                                                className: "mt-2 flex flex-wrap gap-1",
                                                                children: (t.reactions || []).map(w => e.jsxs("button", {
                                                                    type: "button",
                                                                    onClick: () => He(t, w.reaction),
                                                                    className: `text-[11px] px-2 py-[2px] rounded-full border ${w.reacted_by_me?l.reactChipMine:l.reactChipOther}`,
                                                                    children: [w.reaction, " ", w.count]
                                                                }, `${t.id}-chip-${w.reaction}`))
                                                            }), e.jsxs("div", {
                                                                className: `mt-1 text-[10px] text-right ${n?l.bubbleMineMeta:l.bubbleOtherMeta}`,
                                                                children: [t.pinned ? "📌 " : "", It(t.created_at)]
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            }, t.id)
                                        }) : e.jsxs("div", {
                                            className: `h-full flex flex-col items-center justify-center gap-3 text-sm ${l.emptyText}`,
                                            children: [e.jsx("div", {
                                                className: `h-16 w-16 rounded-full flex items-center justify-center ${x?"bg-white/5":"bg-black/5"}`,
                                                children: e.jsx(gt, {
                                                    className: "h-8 w-8 opacity-60"
                                                })
                                            }), e.jsx("span", {
                                                children: "Select a conversation to start chatting."
                                            })]
                                        })
                                    }), d && !E && f.length > 0 && Lt && e.jsx("button", {
                                        type: "button",
                                        onClick: () => Ue("smooth"),
                                        className: `absolute bottom-4 right-4 h-11 w-11 rounded-full border shadow-lg flex items-center justify-center transition ${l.scrollBtn}`,
                                        "aria-label": "Scroll to latest messages",
                                        children: e.jsx(vt, {
                                            size: 18
                                        })
                                    })]
                                }), e.jsxs("div", {
                                    className: `p-3 border-t ${m.cardFooter||"bg-white/80"}`,
                                    children: [oe ? .blocked_by_me ? e.jsxs("div", {
                                        className: `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${x?"bg-white/5 text-white/70":"bg-black/5 text-slate-600"}`,
                                        children: [e.jsx(ge, {
                                            size: 16,
                                            className: "shrink-0 text-red-400"
                                        }), e.jsx("span", {
                                            className: "flex-1 min-w-0",
                                            children: "You blocked this user. Unblock to resume messaging."
                                        }), e.jsxs("button", {
                                            type: "button",
                                            onClick: () => Ve(Z, !1),
                                            disabled: S,
                                            className: `shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium disabled:opacity-60 ${x?"bg-white/10 hover:bg-white/20 text-white":"bg-white hover:bg-slate-50 border border-slate-200 text-slate-700"}`,
                                            children: [S ? e.jsx($, {
                                                className: "h-3.5 w-3.5 animate-spin"
                                            }) : e.jsx(Nt, {
                                                size: 14
                                            }), "Unblock"]
                                        })]
                                    }) : oe ? .blocked_me ? e.jsxs("div", {
                                        className: `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${x?"bg-white/5 text-white/60":"bg-black/5 text-slate-500"}`,
                                        children: [e.jsx(ge, {
                                            size: 16,
                                            className: "shrink-0 text-red-400"
                                        }), e.jsx("span", {
                                            children: "You can't reply to this conversation."
                                        })]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [oe ? .pending_consent && e.jsxs("div", {
                                            className: `mb-2 rounded-xl px-3 py-3 ${x?"bg-white/5":"bg-black/5"}`,
                                            children: [e.jsx("div", {
                                                className: `text-xs mb-2 ${l.mutedText}`,
                                                children: "You haven't chatted with this contact before. Receive messages from them?"
                                            }), e.jsxs("div", {
                                                className: "flex items-center gap-2",
                                                children: [e.jsxs("button", {
                                                    type: "button",
                                                    onClick: Gt,
                                                    disabled: S,
                                                    className: `flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium disabled:opacity-60 ${x?"bg-red-500/15 text-red-300 hover:bg-red-500/25":"bg-red-50 text-red-600 hover:bg-red-100 border border-red-200"}`,
                                                    children: [e.jsx(ge, {
                                                        size: 14
                                                    }), " Block"]
                                                }), e.jsxs("button", {
                                                    type: "button",
                                                    onClick: qt,
                                                    disabled: S,
                                                    className: `flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium disabled:opacity-60 ${l.fab}`,
                                                    children: [S && e.jsx($, {
                                                        className: "h-3.5 w-3.5 animate-spin"
                                                    }), "Continue chatting"]
                                                })]
                                            })]
                                        }), L && e.jsxs("div", {
                                            className: `flex items-center gap-2 mb-2 rounded-lg border-l-4 pl-3 pr-2 py-2 ${l.replyStripe}`,
                                            children: [e.jsx(We, {
                                                size: 14,
                                                className: "shrink-0"
                                            }), e.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [e.jsxs("div", {
                                                    className: "text-xs font-semibold truncate",
                                                    children: ["Replying to ", L.sender_id === p ? .id ? "yourself" : L.sender_name || "User"]
                                                }), e.jsx("div", {
                                                    className: "text-xs truncate opacity-90",
                                                    children: L.content || (L.media ? .length ? "Attachment" : "Message")
                                                })]
                                            }), e.jsx("button", {
                                                type: "button",
                                                onClick: () => U(null),
                                                className: `h-7 w-7 rounded-full flex items-center justify-center ${x?"hover:bg-white/10":"hover:bg-black/10"}`,
                                                "aria-label": "Cancel reply",
                                                children: e.jsx(ye, {
                                                    size: 14
                                                })
                                            })]
                                        }), e.jsxs("div", {
                                            className: "flex items-end gap-2",
                                            children: [e.jsx("button", {
                                                type: "button",
                                                onClick: () => {
                                                    le("menu"), K(t => !t)
                                                },
                                                disabled: !d || Je,
                                                className: ls,
                                                "aria-label": "Attach or emoji",
                                                title: "Attach / emoji",
                                                children: Je ? e.jsx($, {
                                                    className: "h-4 w-4 animate-spin"
                                                }) : e.jsx(wt, {
                                                    size: 20
                                                })
                                            }), e.jsx("textarea", {
                                                ref: G,
                                                rows: 1,
                                                value: te,
                                                onChange: t => {
                                                    A(t.target.value);
                                                    const a = t.target;
                                                    a.style.height = "auto", a.style.height = Math.min(a.scrollHeight, 96) + "px", a.scrollTop = a.scrollHeight
                                                },
                                                onKeyDown: t => {
                                                    t.key === "Enter" && !t.shiftKey && (t.preventDefault(), dt())
                                                },
                                                disabled: !d,
                                                placeholder: d ? "Write a message" : "Select a conversation first",
                                                className: is,
                                                style: {
                                                    maxHeight: "96px"
                                                }
                                            }), e.jsx("button", {
                                                type: "button",
                                                onClick: dt,
                                                disabled: !d || !te.trim() || Ce,
                                                className: rs,
                                                children: Ce ? e.jsx($, {
                                                    className: "h-4 w-4 animate-spin"
                                                }) : e.jsx(ys, {
                                                    size: 16
                                                })
                                            })]
                                        }), Bt && e.jsx("div", {
                                            className: `mt-2 rounded-2xl border p-2 ${l.actionMenu}`,
                                            children: Ft === "menu" ? e.jsxs("div", {
                                                className: "grid grid-cols-3 gap-2",
                                                children: [e.jsxs("button", {
                                                    type: "button",
                                                    onClick: () => le("emoji"),
                                                    className: `flex flex-col items-center justify-center gap-1 rounded-xl border px-2 py-3 text-xs ${l.attachTile}`,
                                                    children: [e.jsx($s, {
                                                        size: 20
                                                    }), "Emoji"]
                                                }), e.jsxs("button", {
                                                    type: "button",
                                                    onClick: () => ut("image/*,video/*"),
                                                    className: `flex flex-col items-center justify-center gap-1 rounded-xl border px-2 py-3 text-xs ${l.attachTile}`,
                                                    children: [e.jsx(gs, {
                                                        size: 20
                                                    }), "Photo / Video"]
                                                }), e.jsxs("button", {
                                                    type: "button",
                                                    onClick: () => ut(".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.csv"),
                                                    className: `flex flex-col items-center justify-center gap-1 rounded-xl border px-2 py-3 text-xs ${l.attachTile}`,
                                                    children: [e.jsx(yt, {
                                                        size: 20
                                                    }), "Document"]
                                                })]
                                            }) : e.jsxs("div", {
                                                children: [e.jsxs("div", {
                                                    className: "flex items-center justify-between px-1 pb-2",
                                                    children: [e.jsxs("button", {
                                                        type: "button",
                                                        onClick: () => le("menu"),
                                                        className: `flex items-center gap-1 text-xs ${l.mutedText}`,
                                                        children: [e.jsx(jt, {
                                                            size: 14
                                                        }), " Back"]
                                                    }), e.jsx("button", {
                                                        type: "button",
                                                        onClick: () => K(!1),
                                                        className: `text-xs ${l.mutedText}`,
                                                        children: "Close"
                                                    })]
                                                }), e.jsx("div", {
                                                    className: "grid grid-cols-8 sm:grid-cols-10 gap-1 max-h-40 overflow-y-auto no-scrollbar",
                                                    children: Ws.map(t => e.jsx("button", {
                                                        type: "button",
                                                        onClick: () => Xt(t),
                                                        className: `text-xl leading-none rounded-lg py-1 transition-transform hover:scale-125 ${x?"hover:bg-white/10":"hover:bg-black/5"}`,
                                                        children: t
                                                    }, t))
                                                })]
                                            })
                                        })]
                                    }), e.jsx("input", {
                                        ref: H,
                                        type: "file",
                                        multiple: !0,
                                        className: "hidden",
                                        onChange: t => Kt(t.target.files)
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            })]
        }), document.body), C && zt && M === "LMS" && fe.createPortal(e.jsxs("div", {
            className: "fixed inset-0 z-[80] flex items-center justify-center p-4",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-slate-900/50 backdrop-blur-sm",
                onClick: Oe
            }), e.jsxs("div", {
                className: `relative w-[min(94vw,460px)] max-h-[80vh] flex flex-col overflow-hidden rounded-2xl ${m.modalContent||m.menuPanel}`,
                children: [e.jsxs("div", {
                    className: `flex items-center justify-between px-4 h-14 border-b ${m.cardHeader||"bg-white/80"}`,
                    children: [e.jsx("div", {
                        className: `font-semibold ${m.textPrimary}`,
                        children: "New chat"
                    }), e.jsx("button", {
                        type: "button",
                        onClick: Oe,
                        className: m.closeButton || "h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center",
                        children: e.jsx(ye, {
                            size: 18
                        })
                    })]
                }), e.jsx("div", {
                    className: "p-3",
                    children: e.jsx("input", {
                        type: "text",
                        autoFocus: !0,
                        value: Ie,
                        onChange: t => Vt(t.target.value),
                        placeholder: "Search by name or email…",
                        className: `${m.input} text-sm`
                    })
                }), e.jsx("div", {
                    className: "flex-1 overflow-y-auto px-3 pb-3 no-scrollbar",
                    children: Pt ? e.jsxs("div", {
                        className: `flex items-center justify-center py-6 gap-2 ${l.emptyText}`,
                        children: [e.jsx($, {
                            className: "h-4 w-4 animate-spin"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Searching…"
                        })]
                    }) : Ie.trim() && Ze.length === 0 ? e.jsx("div", {
                        className: `px-4 py-6 text-sm ${l.emptyText}`,
                        children: "No users found."
                    }) : Ie.trim() ? Ze.map(t => e.jsxs("button", {
                        type: "button",
                        disabled: et === t.id,
                        onClick: () => Wt(t),
                        className: `w-full text-left px-4 py-3 mb-1 rounded-xl border flex items-center gap-3 transition ${l.convIdle}`,
                        children: [e.jsx("div", {
                            className: "h-8 w-8 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0",
                            children: e.jsx(ws, {
                                size: 14,
                                className: "text-sky-500"
                            })
                        }), e.jsxs("div", {
                            className: "min-w-0",
                            children: [e.jsx("div", {
                                className: `text-sm font-medium truncate ${l.convName}`,
                                children: t.display_name || "Unnamed"
                            }), t.email && e.jsx("div", {
                                className: `text-xs truncate ${l.convPreview}`,
                                children: t.email
                            })]
                        }), et === t.id && e.jsx($, {
                            className: "ml-auto h-4 w-4 animate-spin shrink-0"
                        })]
                    }, t.id)) : e.jsx("div", {
                        className: `px-4 py-8 text-sm text-center ${l.mutedText}`,
                        children: "Type a name or email to search"
                    })
                })]
            })]
        }), document.body), de && e.jsx(ps, {
            isOpen: !!de,
            onClose: () => q(null),
            fileUrl: de.url,
            fileName: de.name
        }), C && Ut && fe.createPortal(e.jsxs("div", {
            className: "fixed inset-0 z-[85] flex items-center justify-center p-4",
            children: [e.jsx("div", {
                className: "absolute inset-0 bg-slate-900/50 backdrop-blur-sm",
                onClick: () => X(!1)
            }), e.jsxs("div", {
                className: `relative w-[min(94vw,420px)] max-h-[85vh] flex flex-col overflow-hidden rounded-2xl ${m.modalContent||m.menuPanel}`,
                children: [e.jsxs("div", {
                    className: `flex items-center justify-between px-4 h-14 border-b !rounded-none ${m.cardHeader||"bg-white/80"}`,
                    children: [e.jsx("div", {
                        className: `font-semibold ${m.textPrimary}`,
                        children: "Contact info"
                    }), e.jsx("button", {
                        type: "button",
                        onClick: () => X(!1),
                        className: m.closeButton || "h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center",
                        children: e.jsx(ye, {
                            size: 18
                        })
                    })]
                }), e.jsx("div", {
                    className: "flex-1 overflow-y-auto p-4 no-scrollbar",
                    children: Ot ? e.jsxs("div", {
                        className: `flex items-center justify-center gap-2 py-8 ${l.emptyText}`,
                        children: [e.jsx($, {
                            className: "h-4 w-4 animate-spin"
                        }), e.jsx("span", {
                            className: "text-sm",
                            children: "Loading…"
                        })]
                    }) : j ? e.jsxs(e.Fragment, {
                        children: [e.jsxs("div", {
                            className: "flex flex-col items-center text-center mb-4",
                            children: [e.jsx(Ke, {
                                name: j.name,
                                photo: j.photo,
                                size: "h-16 w-16",
                                textSize: "text-2xl"
                            }), e.jsx("div", {
                                className: `mt-2 font-semibold ${m.textPrimary}`,
                                children: j.name || "Contact"
                            }), e.jsx("div", {
                                className: `text-xs mt-0.5 ${l.mutedText}`,
                                children: j.role_label || en[j.role] || "Contact"
                            })]
                        }), e.jsx("div", {
                            className: `rounded-xl border divide-y ${x?"border-white/10 divide-white/10":"border-slate-200 divide-slate-100"}`,
                            children: tn(j).map(([t, a]) => e.jsxs("div", {
                                className: "flex items-center justify-between gap-3 px-3 py-2.5",
                                children: [e.jsx("span", {
                                    className: `text-xs font-semibold uppercase tracking-wide shrink-0 ${m.textSecondary}`,
                                    children: t
                                }), e.jsx("span", {
                                    title: a || "",
                                    className: `text-sm text-right truncate min-w-0 flex-1 ${m.textPrimary}`,
                                    children: a || "—"
                                })]
                            }, t))
                        }), j.blocked_me && e.jsx("div", {
                            className: `mt-3 text-xs text-center ${l.mutedText}`,
                            children: "This user has blocked you."
                        }), e.jsxs("button", {
                            type: "button",
                            onClick: () => Ve(j.identity_id, !j.blocked_by_me),
                            disabled: S,
                            className: `mt-4 w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium disabled:opacity-60 ${j.blocked_by_me?x?"bg-white/10 hover:bg-white/20 text-white":"bg-slate-100 hover:bg-slate-200 text-slate-700":x?"bg-red-500/15 text-red-300 hover:bg-red-500/25":"bg-red-50 text-red-600 hover:bg-red-100 border border-red-200"}`,
                            children: [S ? e.jsx($, {
                                className: "h-4 w-4 animate-spin"
                            }) : j.blocked_by_me ? e.jsx(Nt, {
                                size: 16
                            }) : e.jsx(ge, {
                                size: 16
                            }), j.blocked_by_me ? "Unblock this user" : "Block messages from this user"]
                        })]
                    }) : e.jsx("div", {
                        className: `py-8 text-center text-sm ${l.emptyText}`,
                        children: "Couldn't load contact info."
                    })
                })]
            })]
        }), document.body), k && fe.createPortal(e.jsxs("div", {
            ref: Le,
            style: {
                position: "fixed",
                zIndex: 99999,
                bottom: window.innerHeight - k.rect.top + 6,
                ...k.mine ? {
                    right: window.innerWidth - k.rect.right
                } : {
                    left: k.rect.left
                }
            },
            className: `rounded-xl shadow-2xl border px-3 py-2 flex items-center gap-2 whitespace-nowrap ${l.actionMenu}`,
            children: [Ys.map(t => {
                const a = (k.message.reactions || []).some(n => n.reaction === t && n.reacted_by_me);
                return e.jsx("button", {
                    type: "button",
                    onClick: () => {
                        He(k.message, t), z(null), P(null)
                    },
                    className: `text-xl leading-none transition-transform hover:scale-125 rounded-full px-1 py-[2px] ${a?x?"bg-blue-500/30":"bg-blue-100":""}`,
                    children: t
                }, `portal-react-${t}`)
            }), e.jsx("div", {
                className: `w-px h-5 ${l.divider}`
            }), e.jsx("button", {
                type: "button",
                onClick: () => {
                    mt(k.message), z(null), P(null)
                },
                className: `h-7 w-7 rounded-full flex items-center justify-center ${l.actionIcon}`,
                title: "Reply",
                children: e.jsx(We, {
                    size: 14
                })
            }), e.jsx("button", {
                type: "button",
                onClick: () => {
                    Qt(k.message), z(null), P(null)
                },
                className: `h-7 w-7 rounded-full flex items-center justify-center ${l.actionIcon}`,
                title: k.message.pinned ? "Unpin" : "Pin",
                children: k.message.pinned ? e.jsx(vs, {
                    size: 14
                }) : e.jsx(Cs, {
                    size: 14
                })
            })]
        }), document.body)]
    })
}
export {
    vn as U
};