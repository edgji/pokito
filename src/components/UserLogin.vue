<template>
  <div>
    <button @click="authAnonymous">Start Playing</button>
    <button disabled>Create an Account</button>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isAuthenticated'])
    },
    methods: {
      ...mapActions(['authAnonymous'])
    },
    watch: {
      isAuthenticated(value) {
        value && this.$router.push('/')
      }
    },
  }
</script>
