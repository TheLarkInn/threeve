const ThreeveScene = (resolve) => System.import('./ThreeveScene.vue')

export default function install (Vue) {
  Vue.component('threeve-scene', ThreeveScene)
}
