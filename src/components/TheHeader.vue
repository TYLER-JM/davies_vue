<template>
  <div>
    <h1>I'm the header</h1>
    <button @click="$emit('changeView')">SEARCH TAB</button>
    <button @click="$emit('changeView')">ADD TAB</button>
  </div>
</template>

<script>
export default {
  props: {
    changeView: Function
  }
}
</script>