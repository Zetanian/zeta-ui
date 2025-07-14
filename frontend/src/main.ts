// @ts-nocheck
import { createApp, markRaw } from 'vue'
import './style.css'
import App from './App.vue'

import { Icon } from '@iconify/vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { MotionPlugin } from '@vueuse/motion'

const vueApp = createApp(App)

vueApp.component('Icon', Icon)

const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    console.log('Scroll Behavior Triggered', to.hash)

    return new Promise((resolve) => {
      if (!to.hash) {
        resolve()
        return
      }

      setTimeout(() => {
        const element = document.querySelector(to.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        resolve({ top: 60 })
      }, 300) // Delay to ensure rendering is done
    })
  },
})

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

vueApp.use(pinia)
vueApp.use(router)
vueApp.use(MotionPlugin)

vueApp.mount('#app')
