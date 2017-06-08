<template></template>
<script>
import {mapGetters, mapActions} from 'vuex'
import {Mesh} from 'three'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: mapGetters(['getMesh']),
  methods: {
    ...mapActions(['addToScene']),
    onInit (initValue) {
      this.$emit('init', initValue)
    }
  },
  mounted () {
    const {geometry, material} = this.getMesh
    const mesh = new Mesh(geometry, material)
    const meshObject = {object: mesh, name: this.name}

    this.addToScene(meshObject)
  }
}
</script>
