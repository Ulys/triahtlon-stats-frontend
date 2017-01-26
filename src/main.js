import Vue from 'vue'
import VueMdl from 'vue-mdl'
import App from './App'

Vue.use(VueMdl)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
