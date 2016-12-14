import Navigo from 'navigo'

const router = new Navigo(null, false)

console.log(router)

import home from './Home'
import about from './About'
import contact from './Contact'

export default () => {
  router.on({
    '/': () => {
      home()
    },
    '/about/': () => {
      about()
    },
    '/contact/': () => {
      contact()
    }
  }).resolve()
}
