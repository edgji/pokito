import { auth as authApi } from './auth-api'

export default {
  createUserWithEmailAndPassword({ dispatch }, email, password) {
    dispatch({ type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD_START' })
    authApi.createUserWithEmailAndPassword(email, password)
      .then(() => (
        dispatch({ type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD_SUCCESS' })
      ))
      .catch(({ code, message }) => {
        dispatch({
          type: 'CREATE_USER_WITH_EMAIL_AND_PASSWORD_FAIL',
          payload: {
            code,
            message,
          },
        })
      })
  },
}
