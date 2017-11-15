<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text">
          <img src="/logo.svg" alt="Pokito Poker">
        </a>
      </div>
      <div class="navbar-end">
        <a v-if="isAuthenticated" class="navbar-item" @click="addGame()">Create New Game</a>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isAuthenticated'])
    },
    methods: mapActions([
      'addGame',
    ]),
  }
</script>
