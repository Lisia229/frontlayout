import App from './App.vue'

import { createApp } from 'vue'

import router from './router'

import pinia from './plugins/pinia'

import './css/main.css'

import './css/style.css'
;(async () => {
  const app = createApp(App)
  app.use(router)
  app.use(pinia)
  app.mount('#app')
})()
