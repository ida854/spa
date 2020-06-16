<template>
  <div>
    <img alt="Ith log" height="80em" src="../assets/logoith.png">
     <h2 style="color: purple">Welcome To IT-Högskolan</h2>
    <h6>Add new Student/Teacher</h6>
           <button class="tog" @click= "toggle">Toggle Form</button>
           <form v-if="show" @submit.prevent= "submitHandler">
           Name:<br>
           <input type="text" v-model="formData.name"/> <br>

           Last Name:<br>
          <input type="text" v-model="formData.family" /> <br>

          E-postadress:<br>
          <input type="email" v-model="formData.email" /> <br>

          Course:<br>
          <input type="text" v-model="formData.kurs" /> <br>

          Category:<br>
          <select v-model="formData.cat">
          <option value="teachers">teachers</option>
          <option value="students">students</option>
          </select> <br>
          <button type="submit" color="green">Submit</button>
          </form>
          </div>
          </template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      show: false,
      formData: {
        name: '',
        family: '',
        email: '',
        kurs: '',
        cat: null
      }
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
    ...mapActions([
      'addUser'
    ]),
    submitHandler () {
      console.log('1')
      const { name, family, email, kurs, cat } = this.formData
      const payload = {
        cat,
        user: {
          name, family, email, kurs
        }
      }
      this.addUser(payload)
    }

  }
}
</script>
<style scoped>
  input{
    border-color: purple;
  }
  .tog{
    background-color:papayawhip;
  }
  button{
    background-color: lightgreen;
  }

</style>
