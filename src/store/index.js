import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import createLogger from 'vuex/dist/logger'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {}
  },
  getters,
  actions,
  mutations: {
    ...firebaseMutations
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
