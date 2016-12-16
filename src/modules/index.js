import router from './helpers/router'

import home from './Home'
import about from './About'
import work from './Work'
import contact from './Contact'

import nav from './Nav'

export default () => {
  nav()

  router.on({
    '/about': () => {
      about()
    },
    '/work': () => {
      work()
    },
    '/contact': () => {
      contact()
    }
  }).resolve()

  router.on(() => {
    home()
  }).resolve()
}
