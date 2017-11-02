import GameRoom from '@/components/GameRoom'

export default [
  {
    name: 'play',
    path: '/play/:gameId([-_0-9A-Za-z]{20})',
    component: GameRoom,
    props: route => ({
      gameId: route.params.gameId,
      gameRef: route.params.gameRef || false
    })
  },
  // {
  //   path: '*',
  //   redirect: '/'
  // },
]
