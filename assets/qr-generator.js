// Generate random 6-digit manual code
function generateManualCode() {
    const number = Math.floor(100000 + Math.random() * 900000);
    return number.toString().replace(/(\d{3})(\d{3})/, "$1 $2");
}

let seconds = 60;

// Update Manual Code
function updateManualCode() {
    const manualCode = document.getElementById("manualCode");

    if (manualCode) {
        manualCode.innerText = generateManualCode();
    }

    seconds = 60;
}

// First load
updateManualCode();

// Countdown
setInterval(() => {

    seconds--;

    const refreshText = document.getElementById("refreshText");

    if (refreshText) {
        refreshText.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 class="lucide lucide-refresh-cw w-3 h-3">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                <path d="M21 3v5h-5"/>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                <path d="M8 16H3v5"/>
            </svg>
            Refreshes in ${seconds}s
        `;
    }

    if (seconds <= 0) {
        updateManualCode();
    }

}, 1000);