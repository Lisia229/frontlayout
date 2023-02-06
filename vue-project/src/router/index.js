import { createRouter, createWebHistory } from 'vue-router'
import FrontLayout from '../layout/FrontLayout.vue'
import FrontHomeView from '../views/front/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
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
            title: 'AZ.HOME',
            login: false,
            admin: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: 'AZ.HOME | 註冊',
            login: false,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: 'AZ.HOME | 登入',
            login: false,
            admin: false
          }
        },
        {
          path: 'content',
          name: 'content',
          component: () => import('@/views/front/ContentView.vue'),
          meta: {
            title: 'AZ.HOME | 聯絡',
            login: false,
            admin: false
          }
        },
        {
          path: 'exhibition',
          name: 'exhibition',
          component: () => import('@/views/front/ExhibitionView.vue'),
          meta: {
            title: 'AZ.HOME | 展覽介紹',
            login: false,
            admin: false
          }
        },
        {
          path: 'exhibition/:id',
          name: 'exhibitionId',
          component: () => import('@/views/front/ExhibitionInfo.vue'),
          meta: {
            title: 'AZ.HOME | 展覽資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'store',
          name: 'store',
          component: () => import('@/views/front/StoreView.vue'),
          meta: {
            title: 'AZ.HOME | 店家資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          meta: {
            title: 'AZ.HOME | 商品資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'rental',
          name: 'rental',
          component: () => import('@/views/front/RentalView.vue'),
          meta: {
            title: 'AZ.HOME | 場地資訊',
            login: false,
            admin: false
          }
        },
        {
          path: 'rentalinfo',
          name: 'rentalinfo',
          component: () => import('@/views/front/RentalInfo.vue'),
          meta: {
            title: 'AZ.HOME | 場地租借',
            login: false,
            admin: false
          }
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('@/layout/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/admin/HomeView.vue'),
          meta: {
            title: '管理 | 首頁',
            login: true,
            admin: true
          }
        },
        {
          path: 'admin-exhibition',
          name: 'admin-exhibition',
          component: () => import('@/views/admin/ExhibitionView.vue'),
          meta: {
            title: '購物網 | 展覽管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta: {
            title: '購物網 | 商品管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'stores',
          name: 'admin-stores',
          component: () => import('@/views/admin/StoreView.vue'),
          meta: {
            title: '購物網 | 商品管理',
            login: true,
            admin: true
          }
        },
        {
          path: 'usersettings',
          name: 'usersettings',
          component: () => import('@/views/admin/SettingsView.vue'),
          meta: {
            title: 'AZ.HOME | 設定',
            login: true,
            admin: false
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '購物網 | 404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

export default router
