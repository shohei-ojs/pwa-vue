import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.config.errorHandler = function (err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`)
}

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
