<template>
  <div>
    <h1>I'm the header</h1>
    <button @click="$emit('changeView', 'TheSearchForm')" v-bind:class="{ active: currentView === 'TheSearchForm' }">search</button>
    <button @click="$emit('changeView', 'TheAddForm')" v-bind:class="{ active: currentView === 'TheAddForm' }">add</button>
  </div>
</template>

<script>
export default {
  props: {
    changeView: Function,
    currentView: String
  },
}
</script>

<style scoped>
  button {
    border: none;
    background-color: aliceblue;
    height: 2em;
    width: 5em;
  }
  .active {
    background-color: rgb(173, 212, 247);
  }
</style>