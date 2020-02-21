/* eslint-disable no-return-assign */
/* eslint-disable no-new */
import Vue from 'vue';
import './style.css';
import axios from 'axios';

const hardData = [
  {
    id: '1',
    novel_id: '1',
    first_name: 'Solomon',
    last_name: 'BridgeTower',
  },
  {
    id: '2',
    novel_id: '1',
    first_name: 'Griselda',
    last_name: 'Webster',
  },
  {
    id: '3',
    novel_id: '1',
    first_name: 'Fredegonde',
    last_name: 'Webster',
  },
  {
    id: '4',
    novel_id: '2',
    first_name: 'Dunstan',
    last_name: 'Ramsey',
  },
  {
    id: '5',
    novel_id: '2',
    first_name: 'Mary',
    last_name: 'Dempster',
  },
  {
    id: '6',
    novel_id: '3',
    first_name: 'Simon',
    last_name: 'Darcourt',
  },
  {
    id: '7',
    novel_id: '3',
    first_name: 'Maria',
    last_name: 'Theotoky',
  },
  {
    id: '8',
    novel_id: '3',
    first_name: 'Arthur',
    last_name: 'Cornish',
  },
  {
    id: '9',
    novel_id: '4',
    first_name: 'Francis',
    last_name: 'Cornish',
  },
  {
    id: '10',
    novel_id: '5',
    first_name: 'Jonathan',
    last_name: 'Hullah',
  },
];

new Vue({
  el: '#app',
  data: {
    message: 'Hello User!',
    display: [],
    characters: [],
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
  },
});
