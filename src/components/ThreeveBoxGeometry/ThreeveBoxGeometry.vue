<template></template>
<style></style>

<script>
import {BoxGeometry} from 'three'
import {mapActions} from 'vuex'

export default {
  props: ['x', 'y', 'z'],
  methods: {
    ...mapActions(['setMeshGeometry'])
  },
  mounted () {
    const {x, y, z} = this
    const geometry = new BoxGeometry(x, y, z)
    this.setMeshGeometry(geometry)
  }
}
</script>
