import Vue from 'vue'
import Vuex from 'vuex'

import appUser from '@/store/modules/appUser'
import appProducts from '@/store/modules/appProducts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appUser,
    appProducts
  }
})
