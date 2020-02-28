<template>
  <nav class="header">
    <h1>The Davies Base</h1>
    <div>
      <button @click="$emit('changeView', 'TheSearchForm')" v-bind:class="{ active: currentView === 'TheSearchForm' }">browse</button>
      <button @click="$emit('changeView', 'TheAddForm')" v-bind:class="{ active: currentView === 'TheAddForm' }">add</button>
    </div>
  </nav>
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
.active {
  background-color: rgb(173, 212, 247);
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>