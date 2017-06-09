export const getScene = (state) => state.scene
export const getSceneObjects = (state) => state.scene && state.scene.objects
export const getSceneObject = (state) => (objectName) => {
  return state.scene.objects[objectName]
}
