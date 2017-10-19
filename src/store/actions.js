import { firebaseAction } from 'vuexfire'
import app from '@/firebase'

export const setGamesRef = firebaseAction(({ bindFirebaseRef }, ref) => bindFirebaseRef('games', ref))
export const initGamesRef = ({ dispatch }) => {
  const ref = app.database().ref('games')
  dispatch('setGamesRef', ref)
}

export const addGame = () => {
  app.database()
    .ref('games')
    .push({
      title: new Date().toDateString()
    })
}
