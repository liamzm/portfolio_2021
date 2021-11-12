import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Menulingua from '@/components/Menulingua'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menulingua',
    name: 'Menulingua',
    component: Menulingua
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
