<template>
<!--NOT IN USE-->
  <button>{{ message }}</button>
</template>

<script>
export default {
  props: {
    message: String,
  }
}
</script>

<style scoped>
button {
  border: none;
  background-color: aliceblue;
  height: 2em;
  width: 5em;
}
</style>