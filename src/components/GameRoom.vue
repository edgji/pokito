<template>
  <div>
    {{ game.pointing }}
    <story-form :gameId="gameId"/>
    <card-options/>
    <ul>
      <li
        v-for="(story, key) in game.stories"
        :key="key"
        @click="setActiveStory(key)">
        {{ story.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import CardOptions from '@/components/CardOptions'
  import StoryForm from '@/components/StoryForm'

  export default {
    props: ['gameId', 'gameRef'],
    components: {
      CardOptions,
      StoryForm,
    },
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
      if ('play' == to.name) {
        to.params.gameRef
          ? this.setGameRef(to.params.gameRef)
          : this.initGameRef(this.gameId)
      }
      next()
    },
    created() {
      this.initGameRef(this.gameId)
    },
  }
</script>
