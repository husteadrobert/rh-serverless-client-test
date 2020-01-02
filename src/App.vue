<template>
  <div id="app">
    <div class="navbar">
      <ul>
        <li>
          <router-link to="/" exact>Home</router-link>
        </li>
        <li>
          <router-link to="login">Login</router-link>
        </li>
        <li>
          <router-link to="signup">SignUp</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>Lol what is this insanity</h1>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
