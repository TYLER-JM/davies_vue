import Vue from 'vue';

export default Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You have clicked {{ count }} times.</button>'
})

const hardData = [
  {
    "id": "1",
    "novel_id": "1",
    "first_name": "Solomon",
    "last_name": "BridgeTower"
  },
  {
    "id": "2",
    "novel_id": "1",
    "first_name": "Griselda",
    "last_name": "Webster"
  },
  {
    "id": "3",
    "novel_id": "1",
    "first_name": "Fredegonde",
    "last_name": "Webster"
  },
  {
    "id": "4",
    "novel_id": "2",
    "first_name": "Dunstan",
    "last_name": "Ramsey"
  },
  {
    "id": "5",
    "novel_id": "2",
    "first_name": "Mary",
    "last_name": "Dempster"
  },
  {
    "id": "6",
    "novel_id": "3",
    "first_name": "Simon",
    "last_name": "Darcourt"
  },
  {
    "id": "7",
    "novel_id": "3",
    "first_name": "Maria",
    "last_name": "Theotoky"
  },
  {
    "id": "8",
    "novel_id": "3",
    "first_name": "Arthur",
    "last_name": "Cornish"
  },
  {
    "id": "9",
    "novel_id": "4",
    "first_name": "Francis",
    "last_name": "Cornish"
  },
  {
    "id": "10",
    "novel_id": "5",
    "first_name": "Jonathan",
    "last_name": "Hullah"
  }
]

let filteredData = [];
const searchData = (term, data) => {
  const regex = RegExp('Simon', 'g');
  filteredData = data.filter(char => regex.test(char.first_name));
}
searchData('Simon', hardData);

new Vue({
  el: `#app`,
  data: {
    message: 'Hello User!',
    characters: filteredData
  }
});