/* eslint-disable no-return-assign */
/* eslint-disable no-new */
import Vue from 'vue';
import './style.css';
import axios from 'axios';

const tabs = [
  {
    name: 'Search',
    component: {
      data() {
        return {
          message: 'Hi There!',
          characters: [],
          display: [],
        };
      },
      template: `
        <div>
          <input v-model="message">
          <input type="button" v-on:click="methodSearch" value="Search!" />
          <ol class="list">
            <li v-for="character in display">
              {{ character.first_name }}
              {{ character. last_name }}
            </li>
          </ol>
        </div>
      `,
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
      },
    },
  },
  {
    name: 'Add!',
    component: {
      data() {
        return {
          first_name: '',
          last_name: '',
          novel: '',
          year_published: '',
        };
      },
      template: `
        <div>
          <input v-model="first_name" placeholder="first name">
          <input v-model="last_name" placeholder="last name">
          <input v-model="novel" placeholder="novel">
          <input v-model="year_published" placeholder="year published">
          <input type="button" value="SUBMIT!" v-on:click="addCharacter">
        </div>
      `,
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
    },
  },
];

new Vue({
  el: '#app',
  data: {
    tabs,
    currentTab: tabs[0],
  },
});
