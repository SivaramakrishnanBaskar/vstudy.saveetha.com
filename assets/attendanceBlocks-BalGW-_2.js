const m = t => {
        if (t == null) return null;
        const n = String(t).match(/^(\d{1,2}):(\d{2})/);
        return n ? Number(n[1]) * 60 + Number(n[2]) : null
    },
    g = t => {
        const [n, r, s] = String(t).split("-").map(Number);
        return new Date(n, (r || 1) - 1, s || 1)
    },
    p = t => {
        const n = t.getDay();
        return n === 0 ? 7 : n
    },
    N = t => {
        const n = new Date(t.getFullYear(), t.getMonth(), t.getDate());
        return n.setDate(n.getDate() - (n.getDay() + 6) % 7), n
    },
    M = t => {
        const n = Math.floor(t / 60),
            r = t % 60,
            s = n >= 12 ? "PM" : "AM";
        return `${(n+11)%12+1}:${String(r).padStart(2,"0")} ${s}`
    };

function D(t, n) {
    const r = n - t;
    if (!(r > 0)) return [];
    const s = Math.max(1, Math.ceil(r / 120)),
        i = [];
    for (let a = 0; a < s; a += 1) i.push({
        startMinutes: t + Math.round(r * a / s),
        endMinutes: t + Math.round(r * (a + 1) / s)
    });
    return i
}

function y({
    weeklySchedule: t = [],
    weekOverrides: n = [],
    date: r,
    cycleStartDate: s = null
}) {
    const i = g(r),
        a = p(i);
    let l = [];
    const c = s ? new Date(s) : null;
    if (n.length && c && !Number.isNaN(c.getTime())) {
        const e = N(c),
            u = Math.floor((i - e) / (7 * 864e5)) + 1,
            d = n.filter(o => Number(o.week_number) === u && Number(o.day) === a);
        if (d.length) {
            if (d.some(o => o.is_off)) return [];
            l = d.map(o => [m(o.start_time), m(o.end_time)]).filter(([o, h]) => o != null && h != null && h > o)
        }
    }
    l.length === 0 && (l = t.filter(e => Number(e.day) === a).map(e => [m(e.start_time), m(e.end_time)]).filter(([e, u]) => e != null && u != null && u > e));
    const f = [];
    for (const [e, u] of l) f.push(...D(e, u));
    return f.sort((e, u) => e.startMinutes - u.startMinutes), f.map((e, u) => ({
        sessionNumber: u + 1,
        startMinutes: e.startMinutes,
        endMinutes: e.endMinutes,
        startLabel: M(e.startMinutes),
        endLabel: M(e.endMinutes)
    }))
}

function b(t, n) {
    return t.find(r => n >= r.startMinutes && n < r.endMinutes) || null
}

function _(t) {
    return M(t)
}

function L(t, n) {
    return t ? n == null || n <= 0 ? t.endMinutes : Math.min(t.startMinutes + n, t.endMinutes) : null
}
export {
    y as c, _ as f, b as g, L as m
};