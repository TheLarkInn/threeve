<template>
  <div>
    <slot></slot>
  </div>
</template>
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
  methods: {
    onInit (camera) {
      this.$emit('init', camera)
    }
  },
  mounted () {
    this.camera = new PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
    this.onInit(this.camera)
  }
}
</script>
<style></style>
