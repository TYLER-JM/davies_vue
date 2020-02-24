<template>
  <div class="add-form">
    <h3>hey add stuff!</h3>
    <CustomInput/>
    <!--custom input goes here-->
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';

export default {
  components: {
    CustomInput
  },
};
</script>

<style scoped>
  .add-form {
    text-transform: uppercase;
  }
</style>