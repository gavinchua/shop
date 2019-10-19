import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/market',
    name: 'market',
    component: () => import(
      /* webpackChunkName: "market" */
      '../views/Market'
    )
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(
      /* webpackChunkName: "about" */
      '../views/About'
    )
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(
      /* webpackChunkName: "account" */
      '../views/Account'
    )
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
