import { onAnimationEnd, $$, dom } from '../helpers/dom'

export default () => {
  const navItems = $$('.navbar li')

  // Loop through nav Items, set timeout using their index num & remove class of hidden to trigger animation
  navItems.forEach((key, index) => {
    setTimeout(() => {
      key.classList.remove('hidden')
      key.classList.add('fadeInUp')

      onAnimationEnd(key, () =>
        key.classList.remove('fadeInUp'))
    }, index * 100)
    key.addEventListener('click', handleNavigate)
  })
}

function handleNavigate(e) {
  e.preventDefault()
  const destination = e.target.getAttribute('href')
  dom.transitionOut(destination)
}
