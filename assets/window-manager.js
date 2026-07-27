document.addEventListener("DOMContentLoaded", () => {
    const windowEl = document.querySelector("body > .fixed");
    if (!windowEl) return;

    const header = windowEl.querySelector(".cursor-move");

    // Resize Handles
    const handles = {
        n: windowEl.querySelector(".cursor-n-resize"),
        s: windowEl.querySelector(".cursor-s-resize"),
        e: windowEl.querySelector(".cursor-e-resize"),
        w: windowEl.querySelector(".cursor-w-resize"),
        nw: windowEl.querySelector(".cursor-nw-resize"),
        ne: windowEl.querySelector(".cursor-ne-resize"),
        sw: windowEl.querySelector(".cursor-sw-resize"),
        se: windowEl.querySelector(".cursor-se-resize"),
    };

    // ----------------------
    // Drag Window
    // ----------------------

    let dragging = false;
    let startX, startY, startLeft, startTop;

    header.addEventListener("mousedown", (e) => {
        dragging = true;

        startX = e.clientX;
        startY = e.clientY;

        startLeft = windowEl.offsetLeft;
        startTop = windowEl.offsetTop;

        document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", (e) => {
        if (!dragging) return;

        windowEl.style.left =
            startLeft + (e.clientX - startX) + "px";

        windowEl.style.top =
            startTop + (e.clientY - startY) + "px";
    });

    document.addEventListener("mouseup", () => {
        dragging = false;
        resizing = false;
        document.body.style.userSelect = "";
    });

    // ----------------------
    // Resize Window
    // ----------------------

    let resizing = false;
    let direction = "";

    let startWidth,
        startHeight;

    function startResize(e, dir) {

        e.preventDefault();

        resizing = true;
        direction = dir;

        startX = e.clientX;
        startY = e.clientY;

        startWidth = windowEl.offsetWidth;
        startHeight = windowEl.offsetHeight;

        startLeft = windowEl.offsetLeft;
        startTop = windowEl.offsetTop;

        document.body.style.userSelect = "none";
    }

    Object.entries(handles).forEach(([dir, el]) => {

        if (!el) return;

        el.addEventListener("mousedown", (e) => {
            startResize(e, dir);
        });

    });

    document.addEventListener("mousemove", (e) => {

        if (!resizing) return;

        let dx = e.clientX - startX;
        let dy = e.clientY - startY;

        let width = startWidth;
        let height = startHeight;
        let left = startLeft;
        let top = startTop;

        if (direction.includes("e"))
            width = startWidth + dx;

        if (direction.includes("s"))
            height = startHeight + dy;

        if (direction.includes("w")) {
            width = startWidth - dx;
            left = startLeft + dx;
        }

        if (direction.includes("n")) {
            height = startHeight - dy;
            top = startTop + dy;
        }

        width = Math.max(width, 400);
        height = Math.max(height, 300);

        windowEl.style.width = width + "px";
        windowEl.style.height = height + "px";
        windowEl.style.left = left + "px";
        windowEl.style.top = top + "px";

    });

});