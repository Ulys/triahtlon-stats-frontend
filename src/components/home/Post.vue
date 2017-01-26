<template>
  <article class="mdl-card mdl-card--border mdl-shadow--2dp mdl-card_custom">
    <h1 class="mdl-card__title">
      {{ title }}
    </h1>
    <div class="mdl-card__supporting-text">
      {{ content }}
    </div>
  </article>
</template>

<script>
  export default {
    name: 'post-component',
    data () {
      return {
        title: 'Slovyanska Hvylia',
        content: 'Some content'
      }
    }
  }
</script>

<style scoped>
  .mdl-card_custom {
    width: 100%;
  }
</style>
