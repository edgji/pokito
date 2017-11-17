import createUserWithEmailAndPassword from './createUserWithEmailAndPassword'
import signInWithEmailAndPassword from './signInWithEmailAndPassword'
import sendPasswordResetEmail from './sendPasswordResetEmail'
import signInWithPopup from './signInWithPopup'
import signInAnonymously from './signInAnonymously'
import signOut from './signOut'

export const auth = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signInAnonymously,
  signOut,
}

export default {
  auth,
}
