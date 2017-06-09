import Vue from 'vue'
import Vuex from 'vuex'
import meshModule from '../components/ThreeveMesh/store'
import sceneModule from '../components/ThreeveScene/store'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  renderer: undefined,
  camera: undefined,
  history: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    mesh: meshModule,
    scene: sceneModule
  }
})

if (module.hot) {
  module.hot.accept(['./mutations', './actions', './getters', '../components/ThreeveMesh/store', '../components/ThreeveScene/store'], () => {
    const newMutuations = System.import(/* webpackMode: "eager" */ './mutations')
    const newActions = System.import(/* webpackMode: "eager" */ './actions')
    const newGetters = System.import(/* webpackMode: "eager" */ './getters')
    const newMeshModule = System.import(/* webpackMode: "eager" */ '../components/ThreeveMesh/store')
    const newSceneModule = System.import(/* webpackMode: "eager" */ '../components/ThreeveScene/store')

    store.hotUpdate({
      mutations: newMutuations,
      actions: newActions,
      getters: newGetters,
      modules: {
        mesh: newMeshModule,
        scene: newSceneModule
      }
    })
  })
}

export default store
