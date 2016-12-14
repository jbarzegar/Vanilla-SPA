import dom from '../helpers/dom'

export default () => {
  dom.fetchPage('home.html')
    .then(page => dom.renderPage(page))
}
