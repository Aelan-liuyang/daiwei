import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Layout from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
  //路由初始指向
    path: '/',
    name: 'home',
    component:()=>import('@/views/home/Index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/home/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/home/Products.vue')
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('@/views/home/Cases.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/home/Contact.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: () => import('@/views/home/ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
