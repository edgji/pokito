<template>
  <div class="columns">
    <div v-for="card in cards" class="column box">{{ card }}</div>
    <div class="column box">
      <span class="icon">
        <i class="fa fa-coffee"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cards: [ 0, '½', 1, 2, 3, 5, 8, 13, 20, 40, 100, '?', '∞' ]
      }
    }
  }
</script>
