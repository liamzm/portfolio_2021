import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import ProjectDetail from '@/components/ProjectDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:project',
    name: 'ProjectDetail',
    component: ProjectDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
