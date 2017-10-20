import { firebaseAction } from 'vuexfire'
import { database } from 'firebase'
import app from '@/firebase'

export const setGamesRef = firebaseAction(({ bindFirebaseRef }, ref) => bindFirebaseRef('games', ref))

export const initGamesRef = ({ dispatch }) => {
  const ref = app.database().ref('games')
  dispatch('setGamesRef', ref)
}

export const addGame = ({ name }) => {
  app.database()
    .ref('games')
    .push({
      name: name || '',
      users: [],
      stories: [],
      created: database.ServerValue.TIMESTAMP
    })
}

export const addStory = ({ gameId, name }) => {
  app.database()
    .ref(`games/${gameId}/stories`)
    .push({
      name: name || '',
      points: ''
    })
}
