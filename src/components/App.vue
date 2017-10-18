<template>
  <div>
    <TheNav/>
    <section class="section">
      <div class="container">
        <CardOptions/>
      </div>
    </section>
  </div>
</template>
<script>
  import TheNav from '@/components/TheNav'
  import CardOptions from '@/components/CardOptions'
  export default {
    components: {
      TheNav,
      CardOptions
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  @import '~bulma';
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
