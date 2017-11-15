<template>
  <div>
    <the-nav/>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>
<script>
  import TheNav from '@/components/TheNav'

  export default {
    components: {
      TheNav,
    },
  }
</script>

<style lang="scss">
  @import '~tachyons';
  @import '~bulma';
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  @import url('https://fonts.googleapis.com/css?family=Rubik');

  .rubik {
    font-family: 'Rubik', sans-serif;
    text-transform: uppercase;
  }
</style>
