import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const sceneModule = {
  state () { // reusableModule
    const objectMap = new Map()
    return {
      scene: {
        instance: null,
        objects: objectMap
      }
    }
  },
  mutations,
  actions,
  getters
}

export default sceneModule
