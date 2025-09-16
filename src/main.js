import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routerOptions from './router'

export const createApp = ViteSSG(
  App,
  routerOptions,
)
