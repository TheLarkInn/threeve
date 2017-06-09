<template>
  <span></span>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  props: ['camera', 'scene', 'renderer', 'refsToAnimate'],
  computed: {
    cube () {
      return this.getSceneObject('cube')
    },
    ...mapGetters(['getSceneObject'])
  },
  mounted () {
    const {camera, scene, renderer, cube} = this

    console.log(cube)
    function render () {
      requestAnimationFrame(render)

      cube.rotation.x += 0.1

      if (cube.rotation.x >= 1) {
        cube.rotation.y += 0.1
      }

      renderer.render(scene, camera)
    }
    render()
  }
}
</script>
