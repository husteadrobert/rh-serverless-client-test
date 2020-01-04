<template>
  <div id="app">
    <div class="navbar">
      <ul>
        <li>
          <router-link to="/" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/list">List Notes</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/signup">SignUp</router-link>
        </li>
        <li>
          <router-link to="/addnote">Add Note</router-link>
        </li>
        <li>
          <amplify-sign-out></amplify-sign-out>
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
import { components } from 'aws-amplify-vue'

export default {
  name: 'app',
  components: {
    ...components
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
