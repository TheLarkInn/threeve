<template>
  <div class="hello">
    {{ msg }}
    <threeve-renderer @init="setRenderer" :width="width" :height="height">
      <threeve-camera :fov="75" :aspect="getCameraAspect()" @init="setCamera">
        <threeve-scene>
          <threeve-mesh :name="meshCubeName">
            <threeve-box-geometry x="1" y="1" z="1"></threeve-box-geometry>
            <threeve-material :color="0x00ff00"></threeve-material>
          </threeve-mesh>
        </threeve-scene>
      </threeve-camera>
      <threeve-renderer-animator
        :camera="getCamera"
        :scene="getScene.instance"
        :renderer="getRenderer"
        :refs-to-animate="animateThis"
      ></threeve-renderer-animator>
    </threeve-renderer>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      meshCubeName: 'cube',
      width: 500,
      height: 400,
      msg: 'VueJS - ThreeJS - PWA'
    }
  },
  methods: {
    getCameraAspect () {
      return this.height / this.width
    },
    ...mapActions(['setCamera', 'setRenderer'])
  },
  computed: {
    animateThis () {
      return ['cube']
    },
    ...mapGetters(['getCamera', 'getRenderer', 'getScene', 'getSceneObject'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: 0;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
