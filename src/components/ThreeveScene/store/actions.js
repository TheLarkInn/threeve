export const setSceneInstance = ({commit}, sceneInstance) => {
  commit('setSceneInstance', sceneInstance)
}

export const addToScene = ({commit}, objectToAdd) => {
  commit('addToScene', objectToAdd)
}
