<template>
  <article>
    <h2>{{ stats.first_name }} {{ stats.last_name }}</h2>
    <table class="view">
      <tbody>
        <tr>
          <td class="view__table-title">Hometown: </td><td class="view__table-desc">{{ stats.hometown }}</td>
        </tr>
        <tr>
          <td class="view__table-title">Birth Name: </td><td class="view__table-desc">{{ stats.birth_name || `${stats.first_name} ${stats.last_name}` }}</td>
        </tr>
        <tr>
          <td class="view__table-title">Goes By: </td><td class="view__table-desc">{{ stats.nick_name || stats.first_name}}</td>
        </tr>
        <tr>
          <td class="view__table-title">About: </td><td class="view__table-desc">{{ stats.about }}</td>
        </tr>
        <tr>
          <td class="view__table-title">Year of Birth: </td><td class="view__table-desc">{{ stats.birth_year || 'unknown'}}</td>
        </tr>
        <tr>
          <td class="view__table-title">Year of Death: </td><td class="view__table-desc">{{ stats.death_year || 'unknown'}}</td>
        </tr>
        <tr>
          <td class="view__table-title">Found In: </td>
          <td class="view__table-desc">
            <ViewIndividualNovel
              v-for="novel in stats.novels"
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
import axios from 'axios';
import ViewIndividualNovel from './ViewIndividualNovel.vue';
import bbkey from '@tyler-jm/bbkey/lib';
export default {
  components: {
    ViewIndividualNovel,
  },
  props: {
    selected: String
  },
  data() {
    return {
      stats: {},
      novels: []
    }
  },
  mounted() {
    axios
      .get(`http://localhost/davies_characters/index.php/characters/${this.selected}`)
      // .then(res => this.stats = {...res.data, key: bbkey(5)});
      .then(res => {
        this.stats = res.data;
        this.novels = res.data.novels.map(x => ({...x, key:bbkey(5)}));
      });
  }
}
</script>

<style scoped>
.view {
  max-width: 600px;
  margin: 0 auto;
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