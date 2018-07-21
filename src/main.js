import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VModal, { dialog: true, dynamic: true })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
