import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const meshModule = {
  state () { // reusableModule
    return {
      mesh: {
        geometry: null,
        material: null
      }
    }
  },
  mutations,
  actions,
  getters
}

export default meshModule
