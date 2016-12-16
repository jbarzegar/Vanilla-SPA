import { onAnimationEnd } from '../helpers/dom'

export default () => {
  const navItems = document.querySelectorAll('.navbar li')

  // Loop through nav Items, set timeout using their index num & remove class of hidden to trigger animation
  navItems.forEach((key, index) => {
    setTimeout(() => {
      key.classList.remove('hidden')
      key.classList.add('fadeInUp')

      onAnimationEnd(key, () =>
        key.classList.remove('fadeInUp'))
    }, index * 100)
  })
}
