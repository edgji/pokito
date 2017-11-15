<template>
  <div>
    <button @click="authAnonymous">Start Playing</button>
    <button disabled>Create an Account</button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions(['authAnonymous'])
    },
    created() {
      this.$store.watch((_, getters) => getters.isAuthenticated, value => value && this.$router.push('/'))
    },
  }
</script>
