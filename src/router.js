import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home/Home.vue'
import About from '@/Pages/About.vue'
import Events from '@/Pages/Events.vue'
import Books from '@/Pages/Books.vue'
import Teaching from '@/Pages/Teaching.vue'
import Contact from '@/Pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/events', component: Events },
  { path: '/books', component: Books },
  { path: '/teaching', component: Teaching },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
