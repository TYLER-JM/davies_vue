<template>
  <li>
    <button>view</button>
    <span>
      {{ character.first_name }}
      {{ character.last_name }}
    </span>
    <span>{{ character.hometown }}</span>
  </li>
</template>

<script>
import customButton from './customButton.vue';
export default {
  props: {
    character: Object,
  }
}
</script>

<style scoped>
  li {
      color: #32adff;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid black;
  }
  span {
    width: 25vw;
    padding: 0 5px;
    height: 2em;
    line-height: 2em;
  }
</style>