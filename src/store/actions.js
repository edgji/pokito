import { firebaseAction } from 'vuexfire'
import { database } from 'firebase'
import router from '@/router'
import app from '@/firebase'
import * as types from './mutation-types'

export const authAnonymous = ({ commit }) => {
  app.auth().signInAnonymously().then(user => {
    commit(types.SET_USER, user)
  })
}

export const setGameRef = firebaseAction(({ bindFirebaseRef }, ref) => bindFirebaseRef('game', ref))

export const initGameRef = ({ dispatch }, gameId) => {
  const ref = app.database().ref(`games/${gameId}`)
  ref.once('value').then(snapshot => {
    snapshot.exists() ? dispatch('setGameRef', ref) : router.push('/')
  })
}

export const addGame = ({ dispatch, state }, name) => {
  app.database()
    .ref('games')
    .push({
      name: name || '',
      users: [],
      stories: [],
      pointing: false,
      createdAt: database.ServerValue.TIMESTAMP,
      createdBy: state.user.uid || ''
    })
    .then(ref => ref.once('value'))
    .then(snapshot => {
      const { key: gameId, ref: gameRef } = snapshot
      const { createdAt, createdBy } = snapshot.val()

      // track games created by user
      createdBy && app.database().ref(`users/${createdBy}/games/${gameId}`).set({ createdAt })

      router.push({ name: 'game.edit', params: { gameId, gameRef } })
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

export const setPointingStory = ({ dispatch }, { gameId, storyId }) => {
  console.log('gameId', gameId)
  console.log('storyId', storyId)
  app.database()
    .ref(`games/${gameId}`).update({
      pointing: storyId
    })
}

export const userJoinGame = ({ dispatch, getters }, userToAdd) => {
  if (!getters.getUserInGameById(userToAdd.uid)) {
    app.database()
      .ref(`games/${gameId}/users`)
      .push({
        uid: userToAdd.uid,
        displayName: userToAdd.displayName,
        observer: false
      })
  }
}
