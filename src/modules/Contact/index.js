import { dom, $ } from '../helpers/dom'

export default () => {
  dom.fetchPage('contact.html')
    .then(page => dom.renderPage(page))
    .then(() => dom.changeNav('contact'))
    .then(() => init())
}

function init() {
  dom.transitionIn()
    .then(animateChildren())
}

function animateChildren() {
  $('.contact-container').classList.add('fadeInUpSmall')
}
