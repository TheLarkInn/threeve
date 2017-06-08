const ThreeveMaterial = (resolve) => System.import('./ThreeveMaterial.vue')

export default function install (Vue) {
  Vue.component('threeve-material', ThreeveMaterial)
}
