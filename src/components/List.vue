<template>
  <div>
    <h1>List Page</h1>
    <ul v-bind:key=note.noteId v-for="note in notes">
      <li>
        <router-link :to="{ name: 'note', params: { id: note.noteId }}">
          {{ note.content }}
        </router-link>
      </li>
    </ul>
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
      this.notes = res;
      });
    }
  },
  created() {
    this.getData();
  }
}
</script>