function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
    } else {
        sideMenu.style.width = "250px";
    }
}

function redirectToTelegram() {
    window.location.href = "https://t.me/BlackHole_bookbot";
}
