<template></template>
<script>
import { WebGLRenderer } from 'three'

export default {
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  data () {
    return {
      camera: null
    }
  },
  mounted () {
    const {height, width} = this
    this.renderer = new WebGLRenderer()
    this.renderer.setSize(width, height)
  }
}
</script>
<style>

</style>
yarn