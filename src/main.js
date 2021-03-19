import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VScrollLock from 'v-scroll-lock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VScrollLock,
  render: h => h(App)
}).$mount('#app')
