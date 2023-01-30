import pinia from './pinia'
import router from '../router/index'
import { useUserStore } from '@/stores/user'
export async function registerPlugins (app) {
  app.use(pinia)
  await useUserStore().getUser()
  app.use(router)
}
