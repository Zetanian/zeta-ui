import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Icon } from '@iconify/vue';
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { MotionPlugin } from '@vueuse/motion'


const vueApp = createApp(App)

vueApp.component('Icon', Icon)

const pinia = createPinia()
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            // Scroll to the element with the ID matching the hash
            return {
                el: to.hash,
                behavior: 'smooth', // Optional: Add smooth scrolling
                top: 60,
            };
        } else if (savedPosition) {
            // Restore saved position (e.g., when navigating back)
            return savedPosition;
        } else {
            // Scroll to the top of the page
            return { top: 0 };
        }
    },
})

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

vueApp.use(pinia)
vueApp.use(router)
vueApp.use(MotionPlugin)

vueApp.mount('#app')