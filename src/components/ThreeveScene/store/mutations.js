export const setSceneInstance = (state, instance) => {
  state.scene = { ...state.scene, instance }
}

export const addToScene = (state, {object, name}) => {
  state.scene.instance.add(object)

  const newObjects = (objects) => {
    objects[name] = object

    return objects
  }

  state.scene.objects = {...newObjects(state.scene.objects)}
}
