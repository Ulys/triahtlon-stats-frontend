<template>
  <div class="mdl-layout mdl-js-layout tr-home">
    <header-component></header-component>
    <content-component></content-component>
  </div>
</template>

<script>
  import HeaderComponent from './Header'
  import ContentComponent from './Content'

  export default {
    name: 'home',
    components: {
      HeaderComponent,
      ContentComponent
    },
    data () {
      return {
        msg: 'Hello world'
      }
    }
  }
</script>
<style scoped>
  .tr-home {

  }
</style>
