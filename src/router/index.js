import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/src/components/About.vue',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '/src/components/Contact.vue',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../components/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
