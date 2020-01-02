<template>
  <div>
    <h1>This is the Home</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World"
    }
  }
}
</script>

<style scoped>
  h1 {
    color: blue;
  }
</style>