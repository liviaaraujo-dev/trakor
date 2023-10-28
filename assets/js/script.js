let btnMenu = document.querySelector(".btn-menu");
let btnMenuClose = document.querySelector(".btn-menu-close");
let header = document.querySelector(".header");

btnMenu.addEventListener("click", () => {
  header.classList.add("mobile");
  header.style.height = '100%'
  btnMenuClose.style.display = 'flex'
  btnMenu.style.display = 'none'
});

btnMenuClose.addEventListener("click", () => {
  header.classList.add("mobile");
  header.style.height = '5.2rem'
  header.classList.remove("mobile");

  btnMenuClose.style.display = 'none'
  btnMenu.style.display = 'flex'
});
