/* global fetch */
const dom = {}

// Fetch page and return content
dom.fetchPage = filePath => {
  return new Promise((resolve, reject) => {
    fetch(`../templates/${filePath}`)
      .then(resp => resolve(resp.text()))
      .catch(err => reject(err))
  })
}

// Take html and render into app space
dom.renderPage = file => {
  document.querySelector('#app').innerHTML = file
}

export default dom
