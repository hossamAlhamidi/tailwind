const btn = document.querySelector("#burger-btn");
const menu = document.querySelector("#mobile-menu");
const list = document.querySelector("#list");

btn.addEventListener("click", () => {
  menu.classList.toggle("max-h-64");
  menu.classList.toggle("max-h-0");
});
