<template>
  <Navbar/>
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
}
</style>
