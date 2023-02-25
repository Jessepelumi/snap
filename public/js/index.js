const arrow = document.querySelectorAll(".arrow");
const menu = document.querySelectorAll(".menu");

arrow.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    }
})