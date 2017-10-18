<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text logo">{{ name }}</a>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      name() {
        return this.$store.state.pkg.name.replace('-', ' ')
      }
    }
  }
</script>

<style lang="scss">
  @import '~bulma';
  @import url('https://fonts.googleapis.com/css?family=Rubik');

  .logo {
    font-family: 'Rubik', sans-serif;
    text-transform: uppercase;
  }
</style>
