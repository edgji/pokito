<template>
  <div>
    <TheNav/>
    <section class="section">
      <div class="container">
        <CardOptions/>
        <point-votes-list/>
        <button class="button is-primary" @click="addGame()">Start New Game</button>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong class="rubik">Pokito Poker</strong>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import TheNav from '@/components/TheNav'
  import CardOptions from '@/components/CardOptions'
  import PointVotesList from '@/components/PointVotesList'

  export default {
    components: {
      TheNav,
      CardOptions,
      PointVotesList
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
  @import '~bulma';
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  @import url('https://fonts.googleapis.com/css?family=Rubik');

  .rubik {
    font-family: 'Rubik', sans-serif;
    text-transform: uppercase;
  }
</style>
