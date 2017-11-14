<template>
  <div>
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
  import CardOptions from '@/components/CardOptions'

  export default {
    props: ['game'],
    components: {
      CardOptions
    },
  }
</script>
