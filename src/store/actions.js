import { firebaseAction } from 'vuexfire'

export const setGamesRef = firebaseAction(({ bindFirebaseRef }, ref) => bindFirebaseRef('games', ref))
