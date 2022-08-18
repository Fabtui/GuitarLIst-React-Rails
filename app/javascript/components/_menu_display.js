export const menuDisplay = () => {
  const menuButton = document.querySelector('#menu__bars')
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      const menuIcon = document.querySelector('.fa-solid')
      const dropdownMenu = document.querySelector('.nav-dropdown')
      dropdownMenu.classList.toggle('menu__hidden')
      if (dropdownMenu.classList.contains('menu__hidden')) {
        menuIcon.classList.replace('fa-xmark', 'fa-bars')
      } else {
        menuIcon.classList.replace('fa-bars', 'fa-xmark')
      }
    })
  }
}
