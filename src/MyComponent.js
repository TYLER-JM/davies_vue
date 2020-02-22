/* eslint-disable no-return-assign */
/* eslint-disable no-new */
import Vue from 'vue';
import './style.css';
import axios from 'axios';


const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello User!',
    display: [],
    characters: [],
    first_name: '',
    last_name: '',
    novel: '',
    year_published: 0,
  },
  mounted() {
    axios
      .get('http://localhost/davies_characters/')
      .then((res) => this.characters = res.data);
  },
  methods: {
    methodSearch() {
      const regex = RegExp(this.message, 'gi');
      this.display = this.characters.filter(
        (char) => regex.test(char.first_name) || regex.test(char.last_name),
      );
    },
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
    },
  },
});
