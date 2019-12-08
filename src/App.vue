<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
