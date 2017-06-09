import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const sceneModule = {
  state () { // reusableModule
    return {
      scene: {
        instance: null,
        objects: {}
      }
    }
  },
  mutations,
  actions,
  getters
}

export default sceneModule
