/* global fetch */
import router from './router'
const dom = {}

// Simple selector function
function $(selector) {
  return document.querySelector(selector)
}

// Select all function
function $$(selector) {
  return document.querySelectorAll(selector)
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

dom.transitionIn = () => {
  const animatedContainer = $('.section-transition-container')
  return new Promise(resolve => {
    animatedContainer.classList.remove('fadeOut')
    animatedContainer.classList.add('fadeIn')
    resolve(true)
  })
}

dom.transitionOut = route => {
  const animatedContainer = $('.section-transition-container')
  animatedContainer.classList.remove('fadeIn')
  animatedContainer.classList.add('fadeOut')
  return new Promise(resolve => {
    router.navigate(route)
    resolve(true)
  })
}

export { dom, $, $$, onAnimationEnd }
