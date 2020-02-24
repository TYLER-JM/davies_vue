<template>
  <div>
    <h1>I'm the header</h1>
    <button @click="$emit('changeView', 'TheSearchForm')">SEARCH TAB</button>
    <button @click="$emit('changeView', 'TheAddForm')">ADD TAB</button>
  </div>
</template>

<script>
export default {
  props: {
    changeView: Function
  }
}
</script>