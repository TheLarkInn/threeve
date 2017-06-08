<template></template>
<style></style>

<script>
import {MeshBasicMaterial} from 'three'
import {mapActions} from 'vuex'

export default {
  props: ['color'],
  methods: {
    ...mapActions(['setMeshMaterial'])
  },
  mounted () {
    const {color} = this
    const material = new MeshBasicMaterial({color})
    this.setMeshMaterial(material)
  }
}
</script>
