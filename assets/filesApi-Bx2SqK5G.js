import {
    d as e
} from "./index-yzCs2v45.js";
const c = async (a, {
        sort: t,
        order: s,
        q: n
    } = {}) => {
        const i = {};
        a !== void 0 && (i.parentId = a === null ? "root" : a), t && (i.sort = t), s && (i.order = s), n && n.trim() && (i.q = n.trim());
        const {
            data: r
        } = await e.get("/api/files", {
            params: i
        });
        return r ? .data || []
    },
    l = async ({
        sort: a,
        order: t
    } = {}) => {
        const s = {};
        a && (s.sort = a), t && (s.order = t);
        const {
            data: n
        } = await e.get("/api/files/trash", {
            params: s
        });
        return n ? .data || []
    },
    d = async () => {
        const {
            data: a
        } = await e.get("/api/files/quota");
        return a ? .data
    },
    p = async (a, t = null) => {
        const s = new FormData;
        s.append("file", a), t && s.append("parentId", t);
        const {
            data: n
        } = await e.post("/api/files", s, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return n ? .data
    },
    f = async (a, t, s = null) => {
        const {
            data: n
        } = await e.post("/api/files/blank", {
            type: a,
            name: t,
            parentId: s
        });
        return n ? .data
    },
    u = async (a, t = null) => {
        const {
            data: s
        } = await e.post("/api/files/folder", {
            name: a,
            parentId: t
        });
        return s ? .data
    },
    w = async (a, t) => {
        const {
            data: s
        } = await e.patch(`/api/files/${a}`, t);
        return s ? .data
    },
    y = async a => {
        const {
            data: t
        } = await e.delete(`/api/files/${a}`);
        return t ? .data
    },
    m = async () => {
        const {
            data: a
        } = await e.delete("/api/files/trash");
        return a ? .data
    },
    g = async a => {
        const {
            data: t
        } = await e.get(`/api/files/${a}/editor`);
        return t
    },
    h = async a => {
        const {
            data: t
        } = await e.get(`/api/files/${a}/view`);
        return t ? .data
    };
export {
    c as a, h as b, p as c, y as d, m as e, u as f, d as g, f as h, g as i, l, w as u
};