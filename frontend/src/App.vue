<template>
  <div class="app-container">
    <Navbar/>
    <router-view />
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

#app {
  box-sizing: border-box;
  padding: 0;
  font-family: 'Bungee', sans-serif;
}

html,
body,
#app,
.app-container {
  margin: 0;
  height: 100%;
}
</style>
