<template>
  <div id="app">
    <TheHeader
      @changeView="changeView"
      v-bind:currentView="activeComponent"
    />
    <component v-bind:is="activeComponent" v-bind="activeProps"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheAddForm from './components/TheAddForm.vue';
import TheSearchForm from './components/TheSearchForm.vue';
import ViewIndividual from './components/ViewIndividual.vue';

export default {
  components: {
    TheHeader,
    TheAddForm,
    TheSearchForm,
    ViewIndividual
  },
  data() {
    return {
      activeComponent: 'TheSearchForm',
      selectedIndividual: false
    };
  },
  computed: {
    activeProps() {
      if (this.activeComponent === 'TheSearchForm') {
        return {
          changeView: this.changeView,
          selectIndividual: this.selectIndividual
        };
      } else if (this.activeComponent === 'ViewIndividual') {
        return {
          selected: this.selectedIndividual
        };
      }
    }
  },
  methods: {
    changeView(form) {
      this.activeComponent = form;
    },
    selectIndividual(id) {
      // this.selectedIndividual = char (where char is the argument)
      this.selectedIndividual = id;
    }
  }
}
</script>

<style>
 @-webkit-keyframes mouseover {
    0%{background-position:0% 50%}
    100%{background-position:120% 50%}
    /* 100%{background-position:0% 50%} */
}
@-moz-keyframes mouseover {
    0%{background-position:0% 50%}
    100%{background-position:120% 50%}
    /* 100%{background-position:0% 50%} */
}
@keyframes mouseover {
    0%{background-position:0% 50%}
    100%{background-position:120% 50%}
    /* 100%{background-position:0% 50%} */
}
@font-face {
  font-family: 'Quicksand';
  src: url('./quicksand-regular-webfont.woff2') format('woff2'),
       url('./quicksand-regular-webfont.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

#app {
  font-family: 'Quicksand', sans-serif;
}
button {
  margin: 1em 0;
  border: none;
  background-color: aliceblue;
  height: 2em;
  width: 8em;
  font-family: inherit;
  font-size: 1.3em;
  transition: all 1s;
}
button:hover {
  cursor: pointer;
  background: linear-gradient(112deg, #add4f7 50%, aliceblue 55%, #add4f7 60%);
  background-size: 200% 200%;
  -webkit-animation: mouseover 0.6s 1;
  -moz-animation: mouseover 0.6s 1;
  animation: mouseover 0.6s 1;
}
input::-webkit-input-placeholder,
input:-ms-input-placeholder,
input:-moz-placeholder,
input::-moz-placeholder {
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
}

</style>