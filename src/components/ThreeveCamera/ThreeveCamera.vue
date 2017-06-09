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
  methods: {
    onInit (camera) {
      this.$emit('init', camera)
    }
  },
  mounted () {
    const camera = new PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
    camera.position.z = 1.6
    this.onInit(camera)
  }
}
</script>
<style></style>
