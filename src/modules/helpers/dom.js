/* global fetch */
const dom = {}

// Simple selector function
function $(selector) {
  return document.querySelector(selector)
}

// Animation end prefixes
const animationend = ['webkitAnimationEnd', 'oAnimationEnd', 'msAnimationend', 'animationend']

function onAnimationEnd(selector, callback) {
  animationend.forEach(key => {
    selector.addEventListener(key, callback)
  })
}

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

dom.changeNav = className => {
  // Check if there's an active class (should fail on inital load)
  if ($('.navbar .active') === null) {
    return $(`.navbar .${className}`).classList.add('active')
  }
  $('.navbar .active').classList.remove('active')
  $(`.navbar .${className}`).classList.add('active')
}

export { dom, $, onAnimationEnd }
