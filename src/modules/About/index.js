import { dom, $, $$ } from '../helpers/dom'

export default () => {
  dom.fetchPage('about.html')
    .then(page => dom.renderPage(page))
    .then(() => dom.changeNav('about'))
    .then(() => init())
}

function init() {
  dom.transitionIn()
    .then(animateChildren())
}

function animateChildren() {
  const abs = $$('.about-section')

  abs.forEach((key, index) => {
    // Get about-section parent
    const parent = `.${key.classList[1]}`

    setTimeout(() => {
      $(`${parent} h3`).classList.add('fadeInLeft')
      $(`${parent} p`).classList.add('fadeInUp')
    }, index * 300)
  })
}
