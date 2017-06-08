const ThreeveMesh = (resolve) => System.import('./ThreeveMesh.vue')
const ThreeveMeshGenerator = (resolve) => System.import('./ThreeveMeshGenerator.vue')

export default function install (Vue) {
  Vue.component('threeve-mesh-generator', ThreeveMeshGenerator)
  Vue.component('threeve-mesh', ThreeveMesh)
}
