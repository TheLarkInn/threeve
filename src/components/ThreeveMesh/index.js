const ThreeveMesh = (resolve) => System.import('./ThreeveMesh.vue')

export default function install (Vue) {
  Vue.component('threeve-mesh', ThreeveMesh)
}
