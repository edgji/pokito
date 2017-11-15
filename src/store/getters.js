export const user = state => state.user
export const isAuthenticated = state => state.user.uid != null
export const game = state => state.game
export const getUserInGameById = state => id => state.game.users.find(gameUser => gameUser.uid === id)
