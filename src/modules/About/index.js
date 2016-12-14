import dom from '../helpers/dom'

export default () => {
  dom.fetchPage('about.html')
    .then(page => dom.renderPage(page))
}
