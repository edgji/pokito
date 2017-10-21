<template>
  <div>
    <card-options/>
    <ul>
      <li v-for="story in stories">
        {{ story.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import CardOptions from '@/components/CardOptions'

  export default {
    props: ['gameId'],
    components: {
      CardOptions
    },
    computed: {
      stories() {
        return this.$store.state.game.stories || []
      }
    },
    methods: {
      ...mapActions({
        loadGame: 'initGameRef',
        addStory: 'addStory',
      })
    },
    created() {
      this.loadGame(this.gameId)
    },
  }
</script>
