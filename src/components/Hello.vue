<template>
  <div class="hello">
    {{ msg }}
    <threeve-renderer></threeve-renderer>
    <threeve-scene></threeve-scene>
    <threeve-camera></threeve-camera>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'VueJS - ThreeJS - PWA'
    }
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
