<template>
  <nav>
    <router-link to="/">Početna</router-link> |
    <router-link to="/karte">Rezerviši kartu</router-link> |
    <router-link to="/kontakt">Kontakt</router-link> |
    <router-link to="/putnici">Putnici</router-link> |
    <router-link to="/letovi">Letovi</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  
}

nav a.router-link-exact-active {
  color:burlywood;
  
}
</style>
