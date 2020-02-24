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