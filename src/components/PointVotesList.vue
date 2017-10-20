<template>
  <div>
    <ul>
      <li
        v-for="vote in votes"
        :key="vote.id"
      >{{ vote.value }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        votes: [
          {id: 'someid', user: 'name', value: 8},
        ]
      }
    },
    methods: {
      flipCards() {
        console.log('flip!') // TODO: implement flip state
      }
    }
  }
</script>
