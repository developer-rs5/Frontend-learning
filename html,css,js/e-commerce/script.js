const closeBtn = document.getElementById("close-btn");
const announcmentBar = document.querySelector(".announcmentBar");

closeBtn.addEventListener("click", () => {
  announcmentBar.style.display = "none";
});
