import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home/Home.vue'
import About from '@/Pages/About.vue'
import Events from '@/Pages/Events.vue'
import Publications from '@/Pages/Publications/Publications.vue'
import SemicivilizedBook from '@/Pages/Publications/Semicivilized.vue'
import MarketsBook from '@/Pages/Publications/Markets.vue'
import Teaching from '@/Pages/Teaching.vue'
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

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
