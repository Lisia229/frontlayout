import { createRouter, createWebHistory } from 'vue-router'
import FrontLayout from '../layout/FrontLayout.vue'
import FrontHomeView from '../views/front/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            title: '購物網',
            login: false,
            admin: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: '購物網 | 註冊',
            login: false,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: '購物網 | 登入',
            login: false,
            admin: false
          }
        },
      ]
    }
  ]
})

export default router
