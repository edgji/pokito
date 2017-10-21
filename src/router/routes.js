import CardOptions from '@/components/CardOptions'

export default [
  {
    path: '/play/:gameId([-_0-9A-Za-z]{20})',
    component: CardOptions,
  },
]
