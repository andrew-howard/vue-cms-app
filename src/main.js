import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VModal, { dialog: true, dynamic: true })

// const token = localStorage.getItem('user-token')
// if(token) {
//   axios.defaults.headers.common['Authorization'] = token
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

