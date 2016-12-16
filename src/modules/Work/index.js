import { dom } from '../helpers/dom'

export default () => {
  dom.fetchPage('work.html')
    .then(page => dom.renderPage(page))
    .then(() => dom.changeNav('work'))
    .then(() => init())
}

function init() {
  console.log('LOL')
}
