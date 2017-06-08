<template></template>
<style></style>

<script>
import {BoxGeometry} from 'three'
export default {
  props: ['x', 'y', 'z'],
  methods: {
    onInit (initValue) {
      this.$emit('init', initValue)
    }
  },
  mounted () {
    const {x, y, z} = this
    const geometry = new BoxGeometry(x, y, z)
    debugger; //eslint-disable-line
    this.onInit(geometry)
  }
}
</script>
