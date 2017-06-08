const ThreeveRenderer = (resolve) => System.import('./ThreeveRenderer.vue')
const ThreeveRendererAnimator = (resolve) => System.import('./ThreeveRendererAnimator.vue')

export default function install (Vue) {
  Vue.component('threeve-renderer', ThreeveRenderer)
  Vue.component('threeve-renderer-animator', ThreeveRendererAnimator)
}
