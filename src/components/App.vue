<template>
  <div>
    <the-nav/>
    <section class="section">
      <div class="container">
        <CardOptions/>
      </div>
    </section>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import TheNav from '@/components/TheNav'
  import CardOptions from '@/components/CardOptions'

  export default {
    components: {
      TheNav,
      CardOptions,
    },
    computed: {
    },
    methods: mapActions([
      'addGame'
    ]),
    mounted () {
      this.$store.dispatch('initGamesRef')
    }
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
