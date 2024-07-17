document.addEventListener("DOMContentLoaded", () => {
  const openFormModalButtons = document.querySelectorAll("[data-modal-open]")
  const formModal = document.querySelector("[data-modal]")
  const closeFormModalButton = document.querySelector("[data-modal-close]")

  const openAboutModalButton = document.querySelector("[data-about-modal-open]")
  const aboutModal = document.getElementById("about-modal")
  const closeAboutModalButton = document.querySelector(
    "[data-about-modal-close]"
  )

  // Відкрити форму
  openFormModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      formModal.classList.remove("is-hidden")
    })
  })

  // Закрити форму
  closeFormModalButton.addEventListener("click", () => {
    formModal.classList.add("is-hidden")
  })

  // Закриття модалки при натисканні на backdrop
  document.querySelectorAll(".backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add("is-hidden")
      }
    })
  })

  // Закриття модалок при натисканні на клавішу Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!formModal.classList.contains("is-hidden")) {
        formModal.classList.add("is-hidden")
      }
      if (!aboutModal.classList.contains("is-hidden")) {
        aboutModal.classList.add("is-hidden")
      }
    }
  })
})
