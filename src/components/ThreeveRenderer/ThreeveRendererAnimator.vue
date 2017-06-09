<template>
  <span>
  </span>
</template>
<script>
import { mapGetters } from 'vuex'
import VRControls from 'three-vrcontrols-module'
import VREffect from 'three-vreffect-module'

export default {
  props: ['camera', 'scene', 'renderer', 'refsToAnimate'],
  computed: {
    cube () {
      return this.getSceneObject('cube')
    },
    ...mapGetters(['getSceneObject'])
  },
  mounted () {
    const { camera, scene, renderer, cube } = this
    const controls = new VRControls(camera)
    const effect = new VREffect(renderer)

    effect.setSize(window.innerWidth, window.innerHeight)
    console.log(cube)
    function render () {
      controls.update()
      effect.render(scene, camera)

      requestAnimationFrame(render)

      cube.rotation.x += 0.1

      if (cube.rotation.x >= 1) {
        cube.rotation.y += 0.1
      }
    }
    render()
    /*
    Listen for click event to enter full-screen mode.
    We listen for single click because that works best for mobile for now
    */
    document.body.addEventListener('click', function () {
      effect.setFullScreen(true)
    })

    /*
    Listen for keyboard events
    */
    function onkey (event) {
      event.preventDefault()

      if (event.keyCode === 90) { // z
        controls.resetSensor() // zero rotation
      } else if (event.keyCode === 70 || event.keyCode === 13) { // f or enter
        effect.setFullScreen(true) // fullscreen
      }
    };
    window.addEventListener('keydown', onkey, true)

    /*
    Handle window resizes
    */
    function onWindowResize () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      effect.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onWindowResize, false)
  }
}
</script>
