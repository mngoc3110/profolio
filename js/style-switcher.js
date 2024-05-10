/*toggle style switcher*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
//theme color
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActivestyle(color) {
    alternateStyles.forEach((style) => {
        if(color == style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
//light and dark
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(ducument.body.classList.contains("darks")) {
        dayNight.querySelectorAll("i").classList.add("fa-moon");
    }
    else {
        dayNight.querySelectorAll("i").classList.add("fa-sun");
    }
})