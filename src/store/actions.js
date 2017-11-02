import { firebaseAction } from 'vuexfire'
import { database } from 'firebase'
import router from '@/router'
import app from '@/firebase'

export const setGameRef = firebaseAction(({ bindFirebaseRef }, ref) => bindFirebaseRef('game', ref))

export const initGameRef = ({ dispatch }, gameId) => {
  const ref = app.database().ref(`games/${gameId}`)
  ref.once('value').then(snapshot => {
    snapshot.exists() ? dispatch('setGameRef', ref) : router.push('/')
  })
}

export const addGame = ({ dispatch }, name) => {
  app.database()
    .ref('games')
    .push({
      name: name || '',
      users: [],
      stories: [],
      pointing: false,
      created: database.ServerValue.TIMESTAMP
    })
    .then(ref => router.push({
      name: 'play',
      params: { gameId: ref.key, gameRef: ref }
    }))
}

export const addStory = ({ dispatch }, { gameId, name }) => {
  app.database()
    .ref(`games/${gameId}/stories`)
    .push({
      name: name || '',
      points: ''
    })
}

export const setPointingStory = ({ dispatch }, { gameId, storyId }) => {
  console.log('gameId', gameId)
  console.log('storyId', storyId)
  app.database()
    .ref(`games/${gameId}`).update({
      pointing: storyId
    })
}
