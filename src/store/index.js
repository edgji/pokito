import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
// import * as getters from './getters'
// import createLogger from 'vuex/dist/logger'
// import firebaseMutations from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pkg
  },
  // getters,
  //   mutations: {
  //   ...firebaseMutations
  // },
  // plugins: [createLogger()]
})
