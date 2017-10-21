import { firebaseAction } from 'vuexfire'
import { database } from 'firebase'
import router from '@/router'
import app from '@/firebase'

export const setGameRef = firebaseAction(({ bindFirebaseRef }, ref) => bindFirebaseRef('game', ref))

export const initGameRef = ({ dispatch }, gameId) => {
  const ref = app.database().ref(`games/${gameId}`)
  dispatch('setGameRef', ref)
}

export const addGame = ({ dispatch }, name) => {
  app.database()
    .ref('games')
    .push({
      name: name || '',
      users: [],
      stories: [],
      created: database.ServerValue.TIMESTAMP
    })
    .then(({ key }) => {
      router.push({ name: 'play', params: { gameId: key } })
    })
}

export const addStory = ({ dispatch }, { gameId, name }) => {
  app.database()
    .ref(`games/${gameId}/stories`)
    .push({
      name: name || '',
      points: ''
    })
}
