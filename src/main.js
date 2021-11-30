import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { projects } from './projects/projects.js'
import { world_cities_dataset } from './datasets/world_cities/world_cities_dataset.js'
import { premier_league_managers_dataset } from './datasets/premier_league_managers/premier_league_managers.js'
import { premier_league_seasons } from './datasets/premier_league_managers/premier_league_seasons.js'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDiXf4GW_F4moJVIY2ZUbiILfS74ZyXLSI'
  },
})

const projectsPlugin = {
  install() {
    Vue.projects = projects
    Vue.prototype.$projects = projects
  }
}

const worldCitiesPlugin = {
  install() {
    Vue.world_cities_dataset = world_cities_dataset
    Vue.prototype.$world_cities_dataset = world_cities_dataset
  }
}

const premierLeagueManagersPlugin = {
  install() {
    Vue.premier_league_managers_dataset = premier_league_managers_dataset
    Vue.premier_league_seasons = premier_league_seasons
    Vue.prototype.$premier_league_managers_dataset = premier_league_managers_dataset
    Vue.prototype.$premier_league_seasons = premier_league_seasons
  }
}




Vue.use(projectsPlugin)
Vue.use(worldCitiesPlugin)
Vue.use(premierLeagueManagersPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
