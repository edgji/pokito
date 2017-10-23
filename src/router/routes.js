import GameRoom from '@/components/GameRoom'

export default [
  {
    name: 'play',
    path: '/play/:gameId([-_0-9A-Za-z]{20})',
    component: GameRoom,
    props: true
  },
  // {
  //   path: '*',
  //   redirect: '/'
  // },
]
