<template>
  <span></span>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  props: ['camera', 'scene', 'renderer', 'refsToAnimate'],
  methods: {
    render () {
      requestAnimationFrame(this.render)
      const cube = this.getSceneObject('cube')

      // debugger; //eslint-disable-line
      if (cube && cube.rotation) {
        cube.rotation.x += 0.1
        cube.rotation.y += 0.1
      }

      this.renderer.render(this.scene, this.camera)
    }
  },
  computed: {
    shouldRender () {
      return (typeof this.getSceneObject('cube') !== undefined && this.renderer && this.scene && this.camera)
    },
    ...mapGetters(['getSceneObject'])
  },
  mounted () {
    if (this.camera && this.camera.position) {
      this.camera.position.z = 5
    }
    debugger; //eslint-disable-line

    if (this.shouldRender) {
      this.render()
    }
  }
}
</script>
