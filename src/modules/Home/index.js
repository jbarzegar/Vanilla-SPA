import { dom, $, onAnimationEnd } from '../helpers/dom'

export default () => {
  dom.fetchPage('home.html')
    .then(page => dom.renderPage(page))
    .then(() => dom.changeNav('home'))
    .then(() => init())
}

function init() {
  dom.transitionIn()
    .then(() => animateChildren())
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
  dom.transitionOut('/about')
}
