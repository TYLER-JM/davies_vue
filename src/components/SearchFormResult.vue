<template>
  <!--pass the entire character object rather than just its id-->
  <li @click="$emit('changeView', 'ViewIndividual')" v-on:click="$emit('selectIndividual', character)">
    <span>
      {{ character.first_name }}
      {{ character.last_name }}
    </span>
  </li>
</template>

<script>
export default {
  props: {
    character: Object,
    changeView: Function,
    selectIndividual: Function,
  },
  methods: {
    log(id) {
      console.log("the id: ", id);
    }
  }
}
</script>

<style scoped>
li:hover {
  cursor: pointer;
}
li:nth-child(odd) {
background-color: aliceblue;
}
li:nth-child(even) {
  background-color: white;
}
li {
    color: #32adff;
    display: flex;
    justify-content: center;
    width: 18rem;
}
span {
  width: 100%;
  padding: 0 5px;
  height: 2em;
  line-height: 2em;
}
</style>