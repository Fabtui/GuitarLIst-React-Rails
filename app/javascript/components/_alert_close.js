export const alertClose = () => {
  const alertContainer = document.querySelector('.alert')
  if (alertContainer) {
    const alertCloseButton  = document.querySelector('.alert button')
    alertCloseButton.addEventListener('click', () => {
      alertContainer.remove()
    })
    document.addEventListener('click', () => {
      alertContainer.remove()
    })
  }
}
