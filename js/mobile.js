(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob-menu__btn-open'),
    closeMenuBtn: document.querySelector('.mob-menu__btn-close'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
