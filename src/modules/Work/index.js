import { dom, $$ } from '../helpers/dom'

export default () => {
  dom.fetchPage('work.html')
    .then(page => dom.renderPage(page))
    .then(() => dom.changeNav('work'))
    .then(() => init())
}

function init() {
  dom.transitionIn()
    .then(animateChildren())
}

function animateChildren() {
  const icons = $$('.icon-wrap .icon')
  icons.forEach((key, index) => {
    setTimeout(() => {
      console.log(key.classList)
      key.classList.add('growIn')
    }, index * 100)
  })
}
