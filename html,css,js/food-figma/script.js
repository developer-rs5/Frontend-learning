const navMobilel = document.querySelector(".nav-mobile")
const humb = document.getElementById("humb")

humb.addEventListener("click", () => {
    navMobilel.classList.toggle("active")
})