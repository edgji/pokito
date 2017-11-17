import { auth as authApi } from './auth-api'
import * as types from './action-types'

export default {
  createUserWithEmailAndPassword({ dispatch }, email, password) {
    dispatch({ type: types.CREATE_USER_WITH_EMAIL_AND_PASSWORD_START })

    authApi.createUserWithEmailAndPassword(email, password)
      .then(() => (
        dispatch({ type: types.CREATE_USER_WITH_EMAIL_AND_PASSWORD_SUCCESS })
      ))
      .catch(({ code, message }) => {
        dispatch({
          type: types.CREATE_USER_WITH_EMAIL_AND_PASSWORD_FAIL,
          payload: {
            code,
            message,
          },
        })
      })
  },

  sendPasswordResetEmail({ dispatch }, email) {
    dispatch({ type: types.SEND_PASSWORD_RESET_EMAIL_START })

    authApi.sendPasswordResetEmail(email)
      .then(() => (
        dispatch({ type: types.SEND_PASSWORD_RESET_EMAIL_SUCCESS })
      ))
      .catch(({ code, message }) => {
        dispatch({
          type: types.SEND_PASSWORD_RESET_EMAIL_FAIL,
          payload: {
            code,
            message,
          },
        })
      })
  },

  signInWithEmailAndPassword({ dispatch }, email, password) {
    dispatch({ type: types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_START })

    authApi.signInWithEmailAndPassword(email, password)
      .then(() => (
        dispatch({ type: types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS })
      ))
      .catch(({ code, message }) => {
        dispatch({
          type: types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAIL,
          payload: {
            code,
            message,
          },
        })
      })
  },

  signInWithPopup({ dispatch }, provider) {
    dispatch({ type: types.SIGN_IN_WITH_POPUP_START })

    authApi.signInWithPopup(provider)
      .then(() => (
        dispatch({ type: types.SIGN_IN_WITH_POPUP_SUCCESS })
      ))
      .catch(({ code, message }) => {
        dispatch({
          type: types.SIGN_IN_WITH_POPUP_FAIL,
          payload: {
            code,
            message,
          },
        })
      })
  },

  signInAnonymously({ dispatch }) {
    dispatch({ type: types.SIGN_IN_ANONYMOUSLY_START })

    authApi.signInAnonymously()
      .then(() => (
        dispatch({ type: types.SIGN_IN_ANONYMOUSLY_SUCCESS })
      ))
      .catch(({ code, message }) => {
        dispatch({
          type: types.SIGN_IN_ANONYMOUSLY_FAIL,
          payload: {
            code,
            message,
          },
        })
      })
  },

  signOut({ dispatch }) {
    dispatch({ type: types.SIGN_OUT_START })

    authApi.signOut()
      .then(() => (
        dispatch({ type: types.SIGN_OUT_SUCCESS })
      ))
      .catch(({ code, message }) => {
        dispatch({
          type: types.SIGN_OUT_FAIL,
          payload: {
            code,
            message,
          },
        })
      })
  }
}
