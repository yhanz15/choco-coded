(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
  };

  refs.openModalBtn.forEach(function (btn) {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.forEach(function (btn) {
    btn.addEventListener('click', toggleModal);
  });

  function toggleModal(e) {
    var val =
      e.currentTarget.getAttribute('data-modal-open') ||
      e.currentTarget.getAttribute('data-modal-close');

    val &&
      document
        .querySelector(`[data-modal="${val}"]`)
        .classList.toggle('is-hidden');
  }
})();
