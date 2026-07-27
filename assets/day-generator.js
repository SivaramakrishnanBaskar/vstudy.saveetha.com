function updateCurrentDate() {

    const currentDate = document.getElementById("currentDate");

    if (!currentDate) return;

    const today = new Date();

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const day = String(today.getDate()).padStart(2, "0");
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    currentDate.textContent = `${day} ${month} ${year}`;
}

// Execute when page loads
document.addEventListener("DOMContentLoaded", updateCurrentDate);