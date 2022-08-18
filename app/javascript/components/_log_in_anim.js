export const loginAnim = () => {
  const logInButton = document.querySelector('#log-in-button')
  if (logInButton) {
    const linkButton = document.querySelector('#link-button')
    const leftDiv = document.querySelector('.new__session__left')
    const centerDiv = document.querySelector('.new__session__center')
    const rightDiv = document.querySelector('.new__session__right')
    const leftDivHeader = document.querySelector('.new__session__left__header')
    const leftDivImg = document.querySelector('.new__session__left img')
    const rightDivContent = document.querySelector('.new__session__right__content')
    const newAccountLink = document.querySelector('.new__account')
    const newPasswordLink = document.querySelector('.new__password')
    const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    logInButton.addEventListener('click', (e) => {
      if (deviceWidth > 700) {
        rightDiv.style.animation = 'translate 1s forwards'
      }
      leftDiv.style.animation = 'fade_out 0.5s forwards'
      centerDiv.style.animation = 'fade_out 0.5s forwards'
      leftDivImg.style.animation = 'fade_out 0.5s forwards'
      leftDivHeader.style.animation = 'fade_out 0.5s forwards'
      rightDivContent.style.animation = 'fade_out 0.5s forwards'
      newAccountLink.style.animation = 'fade_out 0.5s forwards'
      newPasswordLink.style.animation = 'fade_out 0.5s forwards'
      setTimeout( () => {linkButton.click()}, 600)
    })
  }
}
