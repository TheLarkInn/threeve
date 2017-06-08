import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'

import ThreeveScene from './components/ThreeveScene'
import ThreeveCamera from './components/ThreeveCamera'
import ThreeveRenderer from './components/ThreeveRenderer'

Vue.use(ThreeveScene)
Vue.use(ThreeveCamera)
Vue.use(ThreeveRenderer)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.config.performance = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
