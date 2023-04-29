const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("display");
});
