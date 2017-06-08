<template></template>
<style></style>

<script>
import {MeshBasicMaterial} from 'three'
export default {
  props: ['color'],
  methods: {
    onInit (initValue) {
      this.$emit('init', initValue)
    }
  },
  mounted () {
    const {color} = this
    const material = new MeshBasicMaterial({color})
    this.onInit(material)
  }
}
</script>
