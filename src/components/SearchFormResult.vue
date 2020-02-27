<template>
  <li>
    <button @click="$emit('changeView', 'ViewIndividual')" v-on:click="$emit('selectIndividual', character.id)">view</button>
    <span>
      {{ character.first_name }}
      {{ character.last_name }}
    </span>
    <span>{{ character.hometown }}</span>
  </li>
</template>

<script>
export default {
  props: {
    character: Object,
    changeView: Function,
    selectIndividual: Function
  },
  methods: {
    log(id) {
      console.log("the id: ", id);
    }
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