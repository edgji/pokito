<template>
  <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
    <li
      class="ph3 pv3 bb b--light-silver"
      v-for="(story, key) in stories"
      :key="key">
      {{ story.name }}
    </li>
  </ul>
</template>
<script>
  export default {
    props: ['stories']
  }
</script>
