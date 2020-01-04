<template>
  <div>
    <h1>List Page</h1>
    <h2>{{ notes }}</h2>
  </div>
</template>

<script>
import Amplify from 'aws-amplify'

export default {
  data() {
    return {
      notes: []
    }
  },
  methods: {
    getData() {
      Amplify.API.get("notes", "/notes").then((res) => {
      window.console.log(res);
      this.notes = res;
      });
    }
  },
  created() {
    this.getData();
  }
}
</script>