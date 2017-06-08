<template>
  <div>
    <slot></slot>
  </div>
</template>
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
    return {}
  },
  methods: {
    onInit (initValue) {
      this.$emit('init', initValue)
    }
  },
  mounted () {
    const {height, width} = this
    const renderer = new WebGLRenderer()
    renderer.setSize(width, height)
    this.$el.appendChild(renderer.domElement)
    this.onInit(renderer)
  }
}
</script>
<style>

</style>
