import Vue from 'vue';

export default function speak() {
  console.log('I\'m speaking from the other file');
}
Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You have clicked {{ count }} times.</button>'
})

new Vue({el: `#app`});