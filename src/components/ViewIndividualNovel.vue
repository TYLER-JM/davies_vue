<template>
  <p>{{ title }} (published in {{ published }})</p>
</template>

<script>
export default {
  props: {
    title: String,
    published: String
  }
}
</script>