<template>
  <div class="field has-addons">
    <div class="control">
      <input v-model="name" class="input" type="text" placeholder="Text input">
    </div>
    <div class="control">
      <button @click="addGameStory(name)" class="button is-primary">Add Story</button>
    </div>
  </div>

</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['gameId'],
    data () {
      return {
        name: '',
      }
    },
    methods: {
      ...mapActions(['addStory']),
      addGameStory(name) {
        this.addStory({
          gameId: this.gameId,
          name
        })
      }
    },
  }
</script>
