export const getScene = (state) => state.scene
export const getSceneObjects = (state) => state.scene && state.scene.objects
export const getSceneObject = (state) => (objectName) => state.scene && state.scene.objects && state.scene.objects.get(objectName)
