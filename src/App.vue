<template>
  <div id="app">
    <h1>Davies Vue 2.0!</h1>
    <TheAddForm/>
  </div>
</template>

<script>
import TheAddForm from './components/TheAddForm.vue';

export default {
  components: {
    TheAddForm
  },
  data() {
    return {
      message: 'Hello Changes!'
    };
  },
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