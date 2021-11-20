import Vue from 'vue'
import Vuex from 'vuex'
import skills from './modules/skills'
import worldCities from './modules/worldCities'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    skills: skills,
    worldCities: worldCities
  }
})