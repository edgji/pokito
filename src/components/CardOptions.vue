<template>
  <div>
    <div class="ba black-70 grow br2 b inline-flex items-center mr3 mb3 pv2 ph3"
         v-for="value in scale">
      <span>{{ value }}</span>
    </div>
    <div class="ba black-70 grow br2 b inline-flex items-center mr3 mb3 pv2 ph3">
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
        scale: [ 0, '½', 1, 2, 3, 5, 8, 13, 20, 40, 100, '?', '∞' ]
      }
    }
  }
</script>
