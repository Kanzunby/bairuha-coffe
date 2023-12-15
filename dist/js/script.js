// Toggle class active

const navMenu = document.querySelector("#nav-menu");
const menu = document.querySelector("#hamburger");

menu.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("hidden");
  }
});

// Navbar
// window.scroll = function () {
//   const navbar = document.querySelector("nav");
//   const fixedNav = navbar.offsetTop;

//   if (window.pageXOffset > fixedNav) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// };
