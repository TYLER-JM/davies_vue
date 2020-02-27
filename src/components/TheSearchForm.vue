<template>
<div class="search">
  <input class="search__input" v-model="searchTerm" placeholder="search for someone...">
  <ol>
    <SearchFormResult
      v-for="character in filteredChars"
      :key="character.key"
      :character="character"
      @changeView="changeView"
      @selectIndividual="selectIndividual"
    />
  </ol>
</div>
</template>

<script>
import SearchFormResult from './SearchFormResult.vue';
import axios from 'axios';
import bbkey from '@tyler-jm/bbkey/lib';

export default {
  components: {
    SearchFormResult,
  },
  props: {
    changeView: Function,
    selectIndividual: Function
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
      .then((res) => this.allData = res.data.map(char => ({...char, key: bbkey(5)})));
  },
  computed: {
    filteredChars() {
      let filterQuery = this.searchTerm;
      let chars = [];
      if (filterQuery) {
        let regex = RegExp(filterQuery, 'gi');
        chars = this.allData.filter(char => regex.test(char.first_name) || regex.test(char.last_name))
      }
      return chars
    }
  },
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