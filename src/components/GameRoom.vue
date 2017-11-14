<template>
  <router-view :game="game"/>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['gameId', 'gameRef'],
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      setActiveStory(storyId) {
        this.setPointingStory({ gameId: this.gameId, storyId })
      },
      ...mapActions([
        'initGameRef',
        'setGameRef',
        'setPointingStory',
      ])
    },
    beforeRouteUpdate(to, from, next) {
      const { name, params: { gameId, gameRef } } = to
      if ('game' == name) {
        gameRef ? this.setGameRef(gameRef) : this.initGameRef(gameId)
      }
      next()
    },
    created() {
      this.initGameRef(this.gameId)
    },
  }
</script>
