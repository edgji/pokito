<template>
  <div>
    <story-form :gameId="game['.key']"/>
    <story-list :stories="game.stories"/>
  </div>
</template>
<script>
  import StoryForm from '@/components/StoryForm'
  import StoryList from '@/components/StoryList'

  export default {
    props: ['game'],
    components: {
      StoryForm,
      StoryList,
    },
  }
</script>
