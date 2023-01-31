const btnMobile = document.querySelector(".mobile-button");
const nav = document.getElementById("nav");

btnMobile.addEventListener("click", function () {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
});
