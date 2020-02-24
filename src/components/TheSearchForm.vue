<template>
<div>
  <h3>search for a character</h3>
  <input v-model="searchTerm">
  <input type="button" v-on:click="searchCharacters" value="Search!">
  <ol>
    <SearchFormResult
      v-for="character in characters"
      :key="character.first_name"
      :character="character"
    />
  </ol>
</div>
</template>

<script>
import SearchFormResult from './SearchFormResult.vue';
import axios from 'axios';

export default {
  components: {
    SearchFormResult,
  },
  data() {
    return {
      searchTerm: '',
      characters: [],
      allData: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost/davies_characters/')
      .then((res) => this.allData = res.data);
  },
  methods: {
    searchCharacters() {
      const regex = RegExp(this.searchTerm, 'gi');
        this.characters = this.allData.filter(
          (char) => regex.test(char.first_name) || regex.test(char.last_name),
        );
    }
  }
}
</script>