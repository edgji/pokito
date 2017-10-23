<template>
  <div>
    {{ pointingStory }}
    <story-form :gameId="gameId"/>
    <card-options/>
    <ul>
      <li
        v-for="(story, key) in stories"
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
    props: ['gameId'],
    components: {
      CardOptions,
      StoryForm,
    },
    computed: {
      stories() {
        return this.$store.state.game.stories || []
      },
      pointingStory() {
        return this.$store.state.game.pointing || false
      }
    },
    methods: {
      setActiveStory(storyId) {
        this.setPointingStory({ gameId: this.gameId, storyId })
      },
      ...mapActions([
        'initGameRef',
        'setPointingStory',
      ])
    },
    created() {
      this.initGameRef(this.gameId)
    },
  }
</script>
