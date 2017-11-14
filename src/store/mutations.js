import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, user) {
    if (user) { // Send through the bits of the user that we need.
      state.user.uid = user.uid
      state.user.displayName = user.displayName
      state.user.email = user.email
    } else {
      state.user.uid = null
      state.user.displayName = null
      state.user.email = null
    }
  },
}
