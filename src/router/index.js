import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import ProjectDetail from '@/components/ProjectDetail.vue'
import WorldCities from '@/components/WorldCities.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import PremierLeagueManagers from '@/components/PremierLeagueManagers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  { 
    path: '/world-cities',
    name: 'WorldCities',
    component: WorldCities
  },
  {
    path: '/premier-league-managers',
    name: 'PremierLeagueManagers',
    component: PremierLeagueManagers
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
