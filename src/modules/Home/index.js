import { dom, $, onAnimationEnd } from '../helpers/dom'
import router from '../helpers/router'

export default () => {
  dom.fetchPage('home.html')
    .then(page => dom.renderPage(page))
    .then(() => dom.changeNav('home'))
    .then(() => init())
}

function init() {
  // Animate in hero
  const hero = $('.hero')
  hero.classList.add('fadeIn')
  // After animation animate in children
  onAnimationEnd(hero, () => {
    animateChildren()
  })
}

function animateChildren() {
  // Convert NodeList to array
  const headings = Array.from($('.hero header').children)

  onAnimationEnd($('.hero header h2'), () => {
    $('.hero button').classList.add('fadeIn')
  })

  headings.forEach((key, index) =>
    setTimeout(() => {
      key.classList.add('fadeInUp')
    }, index * 100)

  )

  $('.hero.intro button.to-about').addEventListener('click', goToAbout)
}

function goToAbout() {
  const hero = $('.hero')
  hero.classList.remove('fadeIn')
  hero.classList.add('fadeOut')

  onAnimationEnd(hero, () => {
    router.navigate('/about')
  })
}
