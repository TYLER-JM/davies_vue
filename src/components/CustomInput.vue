<template>
  <fieldset class="add-form">
    <div>
      <label for="first_name">First Name</label>
      <input v-model="first_name" class="custom-input" type="text" name="first_name"/>
    </div>
    <div>
      <label for="last_name">Last Name</label>
      <input v-model="last_name" class="custom-input" type="text" name="last_name"/>
    </div>
    <div>
      <label for="novel">Novel</label>
      <input v-model="novel" class="custom-input" type="text" name="novel"/>
    </div>
    <div>
      <label for="year_published">Year Published</label>
      <input v-model="year_published" class="custom-input" type="number" name="year_published"/>
    </div>
    <div>
      <label for="about">About</label>
      <textarea v-model="about" class="custom-input" name="about"/>
    </div>
    <h2>optional:</h2>
    <div>
      <label for="hometown">Hometown</label>
      <input v-model="hometown" class="custom-input" type="text" name="hometown"/>
    </div>
    <div>
      <label for="birth_name">Birth Name</label>
      <input v-model="birth_name" class="custom-input" type="text" name="birth_name"/>
    </div>
    <div>
      <label for="nick_name">Nick Name</label>
      <input v-model="nick_name" class="custom-input" type="text" name="nick_name"/>
    </div>
    <div>
      <label for="birth_date">Year of Birth</label>
      <input v-model="birth_year" class="custom-input" type="text" name="birth_date"/>
    </div>
    <div>
      <label for="death_date">Year of Death</label>
      <input v-model="death_year" class="custom-input" type="text" name="death_date"/>
    </div>
    <button v-on:click="addCharacter" id="submit-button">Submit!</button>
    <h3 v-if="success">Success!</h3>
    <h3 v-if="failure">Please include all required fields</h3>
  </fieldset>
</template>

<script>
import axios from 'axios';
import returnURL from '../helpers/returnURL';

export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      novel: '',
      year_published: null,
      about: '',
      birth_name: null,
      nick_name: null,
      hometown: null,
      birth_year: null,
      death_year: null,

      success: false,
      failure: false
    }
  },
  methods: {
    addCharacter() {
      const requiredData = [
        this.first_name, this.last_name, this.about, this.novel, this.year_published
      ];

      for (let item of requiredData) {
        if (!item) {
          this.failure = true;
          this.success = false;
          return 
        }
      }
      const data = {
        person: {
          first_name: this.first_name,
          last_name: this.last_name,
          about: this.about,
          birth_name: this.birth_name,
          nick_name: this.nick_name,
          hometown: this.hometown,
          birth_year: this.birth_year,
          death_year: this.death_year
        },
        novel: {
          title: this.novel,
          year_published: this.year_published
        }
      };
      axios
        // .post('http://localhost/davies_characters/index.php/characters/add', JSON.stringify(data))
        .post(`${returnURL()}/add`, JSON.stringify(data))
        .then((res) => {
          console.log(res.data);
          this.success = true;
          this.failure = false;
          this.first_name = '';
          this.last_name = '';
          this.novel =  '';
          this.year_published = '';
          this.about = '';
          this.birth_name =  '';
          this.nick_name =  '';
          this.hometown = '';
          this.birth_year = '';
          this.death_year = '';
        })
        .catch((err) => {
          console.log('the error: ', err);
          this.failure = true;
          this.success = false;
        });
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style scoped>
@-webkit-keyframes show-success {
  0% {background-color: aliceblue}
  100% {background-color: green}
}
@-moz-keyframes show-success {
  0% {background-color: aliceblue}
  100% {background-color: green}
}
@keyframes show-success {
  0% {background-color: aliceblue}
  100% {background-color: green}
}
.custom-input {
  color: #32adff;
  border: 1px solid #ccc;
}
.add-form {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  border: none;
  align-items: center;
}
.add-form label {
  display: inline-block;
  width: 10em;
}
</style>