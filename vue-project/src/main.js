import App from './App.vue'

import { createApp } from 'vue'

import router from './router'

import pinia from './plugins/pinia'

import './css/style.css'
import { useUserStore } from '@/stores/users'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
;(async () => {
  const app = createApp(App)
  app.use(pinia)
  app.use(VueTailwindDatepicker)
  await useUserStore().getUser()
  app.use(router)
  app.mount('#app')
})()
