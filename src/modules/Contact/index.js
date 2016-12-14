import dom from '../helpers/dom'

export default () => {
  dom.fetchPage('contact.html')
    .then(page => dom.renderPage(page))
}
