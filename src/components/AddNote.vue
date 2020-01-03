<template>
  <div>
    <h1>Add a Note</h1>
    <form @submit.prevent="addNote">
      <input type="text" v-model="notetext">
      <input type="file" ref="file" id="file">
      <input type="submit" value="Add Note">
    </form>
  </div>
</template>

<script>
import Amplify from 'aws-amplify';
import { s3Upload } from '../libs/awsStorage';

export default {
  data() {
    return {
      notetext: '',
      file: ''
    }
  },
  methods: {
    async addNote() {
      this.file = this.$refs.file.files[0];
      try {
        const attachment = this.file ? await s3Upload(this.file) : null;
        Amplify.API.post("notes", "/notes", {
        body: { content: this.notetext, attachment: attachment }
        }).then((res) => {
        window.console.log(res);
        });
      } catch(e) {
        window.console.log(e);
      }
    }
  }
}
</script>

<style scoped>
</style>