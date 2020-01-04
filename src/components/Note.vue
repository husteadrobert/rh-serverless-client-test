<template>
  <div>
    <h1>Single Note</h1>
    <h2>{{ note }}</h2>
    <a v-if="attachment" :href="attachment">{{ filename }}</a>
  </div>
</template>

<script>
import Amplify from 'aws-amplify';

export default {
  data() {
    return {
      note: '',
      attachment: null,
      filename: ''
    }
  },
  methods: {
    getData() {
      Amplify.API.get("notes", `/notes/${this.$route.params.id}`).then((res) => {
        this.note = res.content;
        if (res.attachment) {
          this.filename = res.attachment;
          Amplify.Storage.vault.get(res.attachment).then((res) => {
          this.attachment = res;
        });
        }
      });
    }
  },
  created() {
    this.getData();
  }
}
</script>