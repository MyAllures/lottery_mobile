import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    selfInfo: {},
    gameSwitch: true,
    selected: 0,
    typeData: [],
    gameTab: 0,
    payment: [],
    allGameList: [],
    threeId: 1
  },
  getters,
  mutations,
  actions
})

export default store
