import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'aboutus',
    component: () => import(
      /* webpackChunkName: "aboutus" */
      '../views/AboutUs'
    )
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import(
      /* webpackChunkName: "locations" */
      '../views/Locations'
    )
  },
  {
    path: '/contact-us',
    name: 'contactus',
    component: () => import(
      /* webpackChunkName: "contactus" */
      '../views/ContactUs'
    )
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import(
      /* webpackChunkName: "faqs" */
      '../views/FAQs'
    )
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import(
      /* webpackChunkName: "faqs" */
      '../views/FAQs'
    )
  },
  {
    path: '/help-desk',
    name: 'helpdesk',
    component: () => import(
      /* webpackChunkName: "helpdesk" */
      '../views/HelpDesk'
    )
  },
  {
    path: '/customer-service',
    name: 'customerservice',
    component: () => import(
      /* webpackChunkName: "customerservice" */
      '../views/CustomerService'
    )
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: () => import(
      /* webpackChunkName: "subscribe" */
      '../views/Subscribe'
    )
  },
  {
    path: '/market',
    name: 'market',
    component: () => import(
      /* webpackChunkName: "market" */
      '../views/Market'
    ),
    meta: {
      requiresLogin: true
    }
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(
      /* webpackChunkName: "account" */
      '../views/Account'
    ),
    meta: {
      requiresLogin: true
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(
    record => record.meta.requiresLogin
  )) {
    if (store.getters['appUser/getUserLogin']) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
