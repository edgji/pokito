import Firebase from 'firebase/app'
import Database from 'firebase/database'
import config from './config'

const db = Firebase.initializeApp(config)
export default db