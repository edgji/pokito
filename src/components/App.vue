<template>
  <div>
    <TheNav/>
    <section class="section">
      <div class="container">
        <CardOptions/>
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
  @import url('https://fonts.googleapis.com/css?family=Rubik');

  .rubik {
    font-family: 'Rubik', sans-serif;
    text-transform: uppercase;
  }
</style>
