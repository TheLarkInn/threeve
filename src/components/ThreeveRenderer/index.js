const ThreeveRenderer = (resolve) => System.import('./ThreeveRenderer.vue')

export default function install (Vue) {
  Vue.component('threeve-renderer', ThreeveRenderer)
}
