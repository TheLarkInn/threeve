<template></template>
<script>
import { PerspectiveCamera } from 'three'

export default {
  props: {
    fov: {
      type: Number
    },
    aspect: {
      type: Number
    },
    near: {
      type: Number
    },
    far: {
      type: Number
    }
  },
  data () {
    return {
      camera: null
    }
  },
  mounted () {
    this.scene = new PerspectiveCamera()
  }
}
</script>
<style>

</style>
