<template>
  <span></span>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  props: ['camera', 'scene', 'renderer', 'refsToAnimate'],
  computed: {
    shouldRender () {
      return (typeof this.getSceneObject('cube') !== undefined && this.renderer && this.scene && this.camera)
    },
    ...mapGetters(['getSceneObject'])
  },
  mounted () {
    if (this.camera && this.camera.position) {
      this.camera.position.z = 2
    }

    const render = () => {
      requestAnimationFrame(render)
      this.renderer && this.renderer.render(this.scene, this.camera)
    }

    render()
  }
}
</script>
