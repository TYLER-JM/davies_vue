import Vue from 'vue';
import axios from 'axios';

Vue.component('custom-input', {
  data() {
    return {
      count: 0,
    };
  },
  props: ['title'],
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
    },
  },
  template: '<input :placeholder="title">',
});
