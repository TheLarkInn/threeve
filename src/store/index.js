import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  renderer: null,
  camera: null,
  scene: null,
  history: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

if (module.hot) {
  module.hot.accept(['./mutations', './actions', './getters'], () => {
    const newMutuations = System.import(/* webpackMode: "eager" */ './mutations')
    const newActions = System.import(/* webpackMode: "eager" */ './actions')
    const newGetters = System.import(/* webpackMode: "eager" */ './getters')

    store.hotUpdate({
      mutations: newMutuations,
      actions: newActions,
      getters: newGetters
    })
  })
}

export default store
