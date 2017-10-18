<template>
  <h1>Hello {{ name.replace('-', ' ') }}</h1>
</template>
<script>
  export default {
    data() {
      return this.$store.state.pkg
    }
  }
</script>
<style lang="scss">
  @import '~bulma';
  @import url('https://fonts.googleapis.com/css?family=Rubik');
</style>
