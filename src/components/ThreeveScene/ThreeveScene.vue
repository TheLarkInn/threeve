<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import {Scene} from 'three'
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['setSceneInstance']),
    onInit (initValue) {
      this.$emit('init', initValue)
    }
  },
  computed: {
    ...mapGetters(['getScene'])
  },
  mounted () {
    const scene = new Scene()
    this.setSceneInstance(scene)
    this.onInit(scene)
  }
}
</script>
