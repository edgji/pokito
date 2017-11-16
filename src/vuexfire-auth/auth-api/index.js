import createUserWithEmailAndPassword from './createUserWithEmailAndPassword'
import signInWithEmailAndPassword from './signInWithEmailAndPassword'
import sendPasswordResetEmail from './sendPasswordResetEmail'
import signInWithPopup from './signInWithPopup'
import signOut from './signOut'

export const auth = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
}

export default {
  auth,
}
