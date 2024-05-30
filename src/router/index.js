import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HelpPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    
    component: () => import(/* webpackChunkName: "Perfil" */ '../views/Perfil.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
