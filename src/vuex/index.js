import Vue from 'vue'
import Vuex from 'vuex'
import globel from './modules/globel.js'
import table from './modules/table.js'
import equipment from './modules/equipment'
Vue.use(Vuex)
const modules = {
  globel,
  table,
  equipment
}
export default new Vuex.Store({
  modules
})