const ThreeveCamera = (resolve) => System.import('./ThreeveCamera.vue')

export default function install (Vue) {
  Vue.component('threeve-camera', ThreeveCamera)
}
