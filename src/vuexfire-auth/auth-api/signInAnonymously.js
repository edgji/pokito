import firebase from 'firebase'

/**
 *  Sign In Anonymously
 */
export default () => (
  new Promise((resolve, reject) => (
    firebase
      .auth()
      .signInAnonymously()
      .then(resolve)
      .catch(reject)
    )
  )
)
