<template>
  <div>
    <label for="first_name">First Name</label>
    <input v-model="first_name" class="custom-input" type="text" placeholder="first name" name="first_name"/>
    <label for="last_name">Last Name</label>
    <input v-model="last_name" class="custom-input" type="text" placeholder="last name" name="last_name"/>
    <label for="novel">Novel</label>
    <input v-model="novel" class="custom-input" type="text" placeholder="Novel they are in" name="novel"/>
    <label for="year_published">Year Published</label>
    <input v-model="year_published" class="custom-input" type="number" placeholder="year published" name="year_published"/>
    <input type="button" value="submit!" v-on:click="addCharacter"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      novel: '',
      year_published: null,
    }
  },
  methods: {
    addCharacter() {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        novel: this.novel,
        year_published: this.year_published,
      };
      axios
        .post('http://localhost/davies_characters/index.php/characters/add', JSON.stringify(data))
        .then((res) => console.log(res.data))
        .catch((err) => console.log('the error: ', err));
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style scoped>
  .custom-input {
    color: red;
  }
</style>