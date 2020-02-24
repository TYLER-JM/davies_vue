<template>
  <div id="app">
    <button v-on:click="changeView">Staight change</button>
    <TheHeader @changeView="changeView"/>
    <component v-bind:is="activeComponent"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheAddForm from './components/TheAddForm.vue';
import TheSearchForm from './components/TheSearchForm.vue';

export default {
  components: {
    TheHeader,
    TheAddForm,
    TheSearchForm
  },
  data() {
    return {
      activeComponent: TheSearchForm
    };
  },
  methods: {
    changeView() {
      console.log("you clicked me! ");
      this.activeComponent === TheAddForm
        ? this.activeComponent === TheSearchForm
        : this.activeComponent === TheAddForm;
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Quicksand';
  src: url('./quicksand-regular-webfont.woff2') format('woff2'),
       url('./quicksand-regular-webfont.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
#app {
  background-color: bisque;
  font-family: 'Quicksand', sans-serif;
}
</style>