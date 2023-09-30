import { createRouter, createWebHistory } from 'vue-router';
import VueScrollTo from "vue-scrollto";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HelloWorld.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue')
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: () => import('../views/ResumeView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
