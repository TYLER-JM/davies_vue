<template>
  <article>
    <h2>{{ selected.first_name }} {{ selected.last_name }}</h2>
    <table class="view">
      <tbody>
        <tr v-if="selected.birth_name">
          <td class="view__table-title">Birth Name: </td>
          <td class="view__table-desc">
            {{ selected.birth_name }}
          </td>
        </tr>
        <tr>
          <td class="view__table-title">Goes By: </td><td class="view__table-desc">{{ selected.nick_name || selected.first_name}}</td>
        </tr>
        <tr>
          <td class="view__table-title">Hometown: </td><td class="view__table-desc">{{ selected.hometown }}</td>
        </tr>
        <tr>
          <td class="view__table-title">About: </td><td class="view__table-desc">{{ selected.about }}</td>
        </tr>
        <tr v-if="selected.birth_year">
          <td class="view__table-title">Year of Birth: </td><td class="view__table-desc">{{ selected.birth_year}}</td>
        </tr>
        <tr v-if="selected.death_year">
          <td class="view__table-title">Year of Death: </td><td class="view__table-desc">{{ selected.death_year}}</td>
        </tr>
        <tr>
          <td class="view__table-title">Found In: </td>
          <td class="view__table-desc">
            <ViewIndividualNovel
              v-for="novel in selected.novels"
              :key="novel.key"
              :title="novel.title"
              :published="novel.year_published"
            />
          </td>
        </tr>
      </tbody>        
    </table>
  </article>
</template>

<script>
import ViewIndividualNovel from './ViewIndividualNovel.vue';
import bbkey from '@tyler-jm/bbkey/lib';
export default {
  components: {
    ViewIndividualNovel,
  },
  props: {
    selected: Object
  },
  data() {
    return {
      stats: {},
      novels: []
    }
  },
}
</script>

<style scoped>
h2 {
  text-align: center;
  text-transform: capitalize;
}
.view {
  max-width: 600px;
  margin: 0 auto;
}
.view tr td {
  padding-bottom: 5px;
}
.view__table-title {
  color: black;
  text-align: right;
  font-family: sans-serif;
  font-weight: bold;
  padding-right: 5px;
}
.view__table-desc {
  max-width: 300px;
}
</style>