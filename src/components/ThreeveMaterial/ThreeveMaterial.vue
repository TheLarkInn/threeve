<template></template>
<style></style>

<script>
import {MeshBasicMaterial} from 'three'
import {mapActions} from 'vuex'

export default {
  props: ['color', 'wireframe', 'wireframeLinecap', 'wireframeLinewidth', 'morphTarget'],
  methods: {
    ...mapActions(['setMeshMaterial'])
  },
  mounted () {
    const {color, wireframe, wireframeLinecap, wireframeLinewidth, morphTarget} = this
    const material = new MeshBasicMaterial({
      color,
      wireframe,
      wireframeLinecap,
      wireframeLinewidth,
      morphTarget
    })
    this.setMeshMaterial(material)
  }
}
</script>
