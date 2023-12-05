import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import router from './router'
import './assets/font/font.scss'

createApp(App).use(router).use(autoAnimatePlugin).mount('#app')
