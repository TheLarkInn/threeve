<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import {Mesh} from 'three'
export default {
  methods: {
    data () {
      return {
        material: null,
        geometry: null
      }
    },
    methods: {
      onInit (initValue) {
        this.$emit('init', initValue)
      },
      setMaterial (value) {
        console.log('Set Material Triggered')
        this.material = value
      },
      setGeometry (value) {
        this.geometry = value
      },
      checkReadyToInit: function (value, oldValue) {
        if (this.material && this.geometry) {
          const mesh = new Mesh(this.geometry, this.material)
          this.onInit(mesh)
        }
      }
    },
    watch: {
      material: 'checkReadyToInit',
      geometry: 'checkReadyToInit'
    },
    mounted () {
      this.$on('init', () => {
        debugger //eslint-disable-line
      })
    }
  }
}
</script>
<style></style>
