<template>
<div class="search">
  <input class="search__input" v-model="searchTerm" placeholder="search for someone...">
  <!-- <input class="search__button" type="button" v-on:click="searchCharacters" value="Search!"> -->
  <button class="search__button" v-on:click="searchCharacters">Search!</button>
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

<style scoped>
.search {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.search__input {
  font-size: 1.4em;
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  text-align: center;
  border: none;
  margin-bottom: 0.5em;
  border-bottom: 1.5px solid rgb(50, 173, 255);
;
}
</style>