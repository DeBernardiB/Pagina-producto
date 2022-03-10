const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")
const navLink = document.querySelector(".nav-link")
const featuresLink = document.querySelector("#features-link")
const videoLink = document.querySelector("#video-link")
const pricesLink = document.querySelector("#prices-link")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})

navLink.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible")
})

featuresLink.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible")
})

videoLink.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible")
})

pricesLink.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible")
})