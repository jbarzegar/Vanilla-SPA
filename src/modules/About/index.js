import { dom } from '../helpers/dom'

export default () => {
  dom.fetchPage('about.html')
    .then(page => dom.renderPage(page))
    .then(() => dom.changeNav('about'))
    .then(() => init())
}

function init() {
  return true
}
