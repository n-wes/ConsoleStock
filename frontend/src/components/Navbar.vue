<template>
  <header>
    <a class="logo" href="/"><img src="../assets/logo.svg" alt="logo"></a>
    <nav>
      <ul class="nav__links">
        <li><router-link class="router" to="/">Home</router-link></li>
        <li><router-link class="router" to="/listing">Products</router-link></li>
        <li><router-link class="router" to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 1%;
  background-color: #3E418a;
}

.logo {
  cursor: pointer;
}

.logo img {
  max-width: 60px;
  max-height: 60px;
}

.nav__links .router {
  font-weight: 500;
  color: #edf0f1;
  text-decoration: none;
}

.nav__links {
  list-style: none;
  display: flex;
}

.nav__links li {
  padding: 0px 20px;
}

.nav__links li .router {
  transition: color 0.3s ease 0s;
}

.nav__links li .router:hover {
  color: #0088a9;
}

/* Mobile Nav */

.menu {
  display: none;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: #24252a;
  overflow-x: hidden;
  transition: width 0.5s ease 0s;
}

.overlay--active {
  width: 100%;
}

.overlay__content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay .router {
  padding: 15px;
  font-size: 36px;
  display: block;
  transition: color 0.3s ease 0s;
}

.overlay .router:hover,
.overlay .router:focus {
  color: #0088a9;
}
.overlay .close {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  color: #edf0f1;
}

@media screen and (max-height: 450px) {
  .overlay .router {
    font-size: 20px;
  }
  .overlay .close {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

@media only screen and (max-width: 800px) {
  .nav__links {
    display: none;
  }
  .menu {
    display: initial;
  }
}
</style>