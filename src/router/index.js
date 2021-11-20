import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import ProjectDetail from '@/components/ProjectDetail.vue'
import WorldCities from '@/components/WorldCities.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/world-cities',
    name: 'WorldCitiest',
    component: WorldCities
  },
  {
    path: '/:project',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
