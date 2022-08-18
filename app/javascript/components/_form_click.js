export const formClick = () => {
  const formTitles = document.querySelectorAll('.form__title')
  if (formTitles) {
    formTitles.forEach(formTitle => {
      const formContent = document.querySelector(`.${formTitle.dataset.name}`)
      const formIcon = document.querySelector(`#${formTitle.dataset.name}__icon`)
      formTitle.addEventListener('click', () => {
        if (formContent.classList.contains('form__hidden')) {
          formIcon.classList.replace('fa-angle-down', 'fa-angle-up');
        } else {
          formIcon.classList.replace('fa-angle-up', 'fa-angle-down');
        }
        formContent.classList.toggle('form__hidden');
      })
    });
  }
}
