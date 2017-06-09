export const getRenderer = (state) => state.renderer
export const getCamera = (state) => state.camera
export const isReadyToRender = (state) => (renderObjectsArray) => {
  const areRenderObjectsReady = (array) => {
    const sceneObjectStore = state.scene.scene.objects
    return array.every(objectName => typeof sceneObjectStore[objectName] !== 'undefined')
  }

  return (typeof state.camera !== 'undefined' && typeof state.renderer !== 'undefined' && typeof state.scene.scene.instance !== 'undefined' && areRenderObjectsReady(renderObjectsArray))
}

