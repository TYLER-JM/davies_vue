<template>
<div class="search">
  <!--<input class="search__input" v-model="searchTerm" placeholder="search for someone..." v-on:change="searchCharacters">-->
  <input class="search__input" v-model="searchTerm" placeholder="search for someone...">
  <ol>
    <SearchFormResult
      v-for="character in foundChars"
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
import debounce from 'lodash/debounce';

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
      allData: [],
      foundChars: [],
    }
  },
  watch: {
    searchTerm() {
      if (this.searchTerm) {
        this.makeExpensiveCall();
      } else {
        this.foundChars = [];
      }
    }
  },
  methods: {
    makeExpensiveCall: debounce(function () {
        if (this.searchTerm) {
        axios
          .get(`http://localhost/davies_characters/index.php/characters/search/${this.searchTerm}`)
          .then(res => this.foundChars = res.data.map(char => ({...char, key: bbkey(5)})));
        }
    }, 500)
  },
  // computed: {
  //   filteredChars() {
  //     let filterQuery = this.searchTerm;
  //     let chars = [];
  //     if (filterQuery) {
  //       let regex = RegExp(filterQuery, 'gi');
  //       chars = this.allData.filter(char => regex.test(char.first_name) || regex.test(char.last_name));
  //     };
  //     return chars;
  //   },
  // },
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
  margin: 1em 0 0 0;
  padding: 0;
  border: none;
  border-bottom: 1.5px solid rgb(50, 173, 255);
  width: 18rem;
}
ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>