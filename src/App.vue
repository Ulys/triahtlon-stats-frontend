<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/home/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>
<style>
  @import '../node_modules/material-design-lite/material.min.css';

  body {
    background: #fafafa;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
