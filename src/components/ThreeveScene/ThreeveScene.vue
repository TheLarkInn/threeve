<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { Scene } from 'three'

export default {
  data () {
    return {
    }
  },
  methods: {
    onInit (initValue) {
      this.$emit('init', initValue)
    }
  },
  mounted () {
    const scene = new Scene()
    this.onInit(scene)
  }
}
</script>
<style>

</style>
