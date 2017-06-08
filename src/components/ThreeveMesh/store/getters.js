export const getMesh = (state) => state.mesh
export const getMeshMaterial = ({mesh}) => mesh.material
export const getMeshGeometry = ({mesh}) => mesh.geometry
export const meshIsReady = ({mesh}) => {
  return (typeof mesh.material !== 'undefined' && typeof mesh.geometry !== 'undefined')
}
