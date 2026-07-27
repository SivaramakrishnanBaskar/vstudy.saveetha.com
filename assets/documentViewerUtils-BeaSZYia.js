const o = "https://vstudy-uploads-prod.s3.ap-south-1.amazonaws.com",
    r = n => n.split("/").map(t => {
        let e = t;
        try {
            e = decodeURIComponent(t)
        } catch {}
        return encodeURIComponent(e)
    }).join("/"),
    s = n => {
        if (!n) return null;
        if (n.startsWith("http")) try {
            const e = new URL(n);
            return e.pathname = r(e.pathname), e.toString()
        } catch {
            return encodeURI(n)
        }
        const t = n.startsWith("/") ? n.substring(1) : n;
        return `${o}/${r(t)}`
    },
    p = n => {
        const t = s(n);
        t && window.open(t, "_blank", "noopener,noreferrer")
    },
    c = n => {
        if (!n) return null;
        const t = n.split("?")[0].split(".").pop().toLowerCase();
        return t === "pdf" ? "pdf" : ["jpg", "jpeg", "png", "webp", "gif", "bmp"].includes(t) ? "image" : ["doc", "docx"].includes(t) ? "word" : ["xls", "xlsx"].includes(t) ? "excel" : "unknown"
    };
export {
    c as a, s as g, p as o
};