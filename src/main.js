import Vue from 'vue'

import router from '@/router'
import store from '@/store'
import App from '@/App'

import '@/plugins/vue-js-modal'
import '@/plugins/vue-progressbar'
import '@/plugins/vuelidate'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
