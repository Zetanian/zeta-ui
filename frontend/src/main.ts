import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Icon } from '@iconify/vue';
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const vueApp = createApp(App)

vueApp.component('Icon', Icon)

const pinia = createPinia()
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

vueApp.use(pinia)
vueApp.use(router)
vueApp.mount('#app')