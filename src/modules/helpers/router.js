import Navigo from 'navigo'

let router
if (window.location.href === 'https://jbarzegar.github.io/Vanilla-SPA/') {
  router = new Navigo('https://jbarzegar.github.io/Vanilla-SPA/')
} else {
  router = new Navigo()
  console.log(router)
}

export default router
