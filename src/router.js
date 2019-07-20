import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      //component: Home
      component: () => import('./views/Home.vue')
  
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {layout: 'main'},
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {layout: 'main'},
      component: () => import('./views/detail-record.vue')
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'main'},
      component: () => import('./views/history.vue')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: {layout: 'main'},
      component: () => import('./views/planning.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main'},
      component: () => import('./views/profile.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'main'},
      component: () => import('./views/record.vue')
    },
    {
      path: '/registr',
      name: 'registr',
      meta: {layout: 'main'},
      component: () => import('./views/registr.vue')
    }
    
  ]
})
