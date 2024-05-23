import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Master.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/pages/login.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/pages/registro.vue')
  },
  {
    path: '/recuperarclave',
    name: 'recuperarclave',
    component: () => import('../views/pages/recuperarclave.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/pages/perfil.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
