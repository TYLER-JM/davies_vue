<template>
  <h2>You're viewing someone</h2>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    selected: String
  },
  data() {
    return {
      stats: {}
    }
  },
  mounted() {
    axios
      .get(`http://localhost/davies_characters/index.php/characters/${this.selected}`)
      .then(res => this.stats = res.data);
  }
}
</script>