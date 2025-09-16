import Home from '@/Pages/Home/Home.vue'
import About from '@/Pages/About/About.vue'
import Events from '@/Pages/Events/Events.vue'
import Publications from '@/Pages/Publications/Publications.vue'
import SemicivilizedBook from '@/Pages/Publications/SemicivilizedBook.vue'
import MarketsBook from '@/Pages/Publications/MarketsBook.vue'
import Teaching from '@/Pages/Teaching/Teaching.vue'
import Contact from '@/Pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/events', component: Events },
  { path: '/publications', component: Publications },
  { path: '/books', component: Publications },
  { path: '/books/on-the-semicivilized', component: SemicivilizedBook },
  { path: '/books/markets-of-dispossession', component: MarketsBook },
  { path: '/teaching', component: Teaching },
  { path: '/contact', component: Contact },
]

const routerOptions = {
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        top: 90,  // to account for height of top nav
      }
    } else return { top: 0 }
  },
}

export default routerOptions

