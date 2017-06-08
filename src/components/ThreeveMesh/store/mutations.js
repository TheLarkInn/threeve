export const setMeshMaterial = (state, material) => {
  state.mesh = { ...state.mesh, material }
}

export const setMeshGeometry = (state, geometry) => {
  state.mesh = { ...state.mesh, geometry }
}
