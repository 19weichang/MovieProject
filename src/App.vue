<template>
  <div id="app">
    <div id="nav">
      <navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import vuex from 'vuex'
import navbar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(77, 77, 77);
}
</style>
