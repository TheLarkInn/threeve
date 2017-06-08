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
      scene: null
    }
  },
  mounted () {
    this.scene = new Scene()
  }
}
</script>
<style>

</style>
