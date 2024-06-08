// ;(() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//     body: document.querySelector("body"),
//      menuLinks: document.querySelectorAll(".mob-menu-nav-link")
//   }

//   refs.openMenuBtn.addEventListener("click", toggleMenu)
//   refs.closeMenuBtn.addEventListener("click", toggleMenu)

//    refs.menuLinks.forEach((link) => {
//      link.addEventListener("click", () => {
//        refs.menu.classList.add("is-hidden")
//        refs.body.classList.remove("no-scroll")
//      })
//    })
  
//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden")
//     refs.body.classList.toggle("no-scroll")
//   }
// })()


const menuBtn = document.querySelector('.mob-menu-btn');
const menu = document.querySelector('.mob-menu');
const burgerIcon = document.getElementById('burger-icon');
const crossIcon = document.getElementById('close-icon');
const menuLinks = document.querySelectorAll('.mob-menu-nav-link');



menuBtn.addEventListener('click', () => {
  toggleMenu();
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      toggleMenu();
    }
  });
});

function toggleMenu() {
  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    burgerIcon.style.display = 'none';
    crossIcon.style.display = 'block';
    document.body.classList.add('lock-scroll'); 
  } else {
    burgerIcon.style.display = 'block';
    crossIcon.style.display = 'none';
    document.body.classList.remove('lock-scroll');
  }
}