<template>
  <li>
    {{ character.first_name }}
    {{ character.last_name }}
  </li>
</template>

<script>
export default {
  props: {
    character: Object,
  }
}
</script>

<style scoped>
  li {
      color: #32adff;
  }
</style>