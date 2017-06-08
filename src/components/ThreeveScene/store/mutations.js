export const setSceneInstance = (state, instance) => {
  state.scene = { ...state.scene, instance }
}

export const addToScene = (state, {object, name}) => {
  state.scene.instance.add(object)
  state.scene.objects.set(name, object)
}
