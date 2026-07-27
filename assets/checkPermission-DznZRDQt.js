const n = r => r ? .role === "Admin",
    e = (r, s) => r ? n(r) ? !0 : Array.isArray(r.permissions) ? r.permissions.includes(s) : !1 : !1,
    t = (r, s = []) => r ? n(r) ? !0 : Array.isArray(r.permissions) ? s.some(i => r.permissions.includes(i)) : !1 : !1,
    a = (r, s = []) => r ? n(r) ? !0 : Array.isArray(r.permissions) ? s.every(i => r.permissions.includes(i)) : !1 : !1;
export {
    t as a, a as b, e as h
};