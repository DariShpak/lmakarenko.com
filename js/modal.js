// ;(() => {
//   const refs = {
//     openModalBtns: document.querySelectorAll("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]")
//   }

//   refs.openModalBtns.forEach((btn) => {
//     btn.addEventListener("click", toggleModal)
//   })
//   refs.closeModalBtn.addEventListener("click", toggleModal)

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden")
//   }
// })()


document.addEventListener('DOMContentLoaded', () => {
  const openFormModalButtons = document.querySelectorAll('[data-modal-open]');
  const formModal = document.querySelector('[data-modal]');
  const closeFormModalButton = document.querySelector('[data-modal-close]');
  
  const openAboutModalButton = document.querySelector('[data-about-modal-open]');
  const aboutModal = document.getElementById('about-modal');
  const closeAboutModalButton = document.querySelector('[data-about-modal-close]');

  // Відкрити форму
  openFormModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      formModal.classList.remove('is-hidden');
    });
  });

  // Закрити форму
  closeFormModalButton.addEventListener('click', () => {
    formModal.classList.add('is-hidden');
  });

  // Відкрити "про дизайн" модалку
  openAboutModalButton.addEventListener('click', () => {
    aboutModal.classList.remove('is-hidden');
  });

  // Закрити "про дизайн" модалку
  closeAboutModalButton.addEventListener('click', () => {
    aboutModal.classList.add('is-hidden');
  });

  // Закриття модалки при натисканні на backdrop
  document.querySelectorAll('.backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add('is-hidden');
      }
    });
  });
});