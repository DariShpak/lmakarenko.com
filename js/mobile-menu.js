;(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
     menuLinks: document.querySelectorAll(".mob-menu-nav-link")
  }

  refs.openMenuBtn.addEventListener("click", toggleMenu)
  refs.closeMenuBtn.addEventListener("click", toggleMenu)

   refs.menuLinks.forEach((link) => {
     link.addEventListener("click", () => {
       refs.menu.classList.add("is-hidden")
       refs.body.classList.remove("no-scroll")
     })
   })
  
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden")
    refs.body.classList.toggle("no-scroll")
  }
})()
