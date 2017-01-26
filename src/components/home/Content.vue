<template>
  <div class="content">
    <ul class="content__articlesList">
      <post-component></post-component>
    </ul>
  </div>
</template>

<script>
  import PostComponent from './Post'

  export default {
    name: 'content-component',
    components: {
      PostComponent
    }
  }
</script>

<style scoped>
  .content {
    padding: 32px 12px;
  }

  .content__articlesList {
    padding: 0;
    margin: 0 auto;
    max-width: 960px;
    width: 80%;
    min-width: 300px;
  }
</style>
