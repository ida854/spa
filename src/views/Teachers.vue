<template>
<div>
    <table style="width:100% ; border-colapse:colapse">
        <thead>
      <tr>
       <th >Name</th>
       <th>Family</th>
       <th>Email</th>
       <th>Course</th>
      </tr>
     </thead>
     <tr v-for="(teacher,index) in teachers" :key="index">
      <td> <router-link :to="`/teachers/${index}`">{{ teacher.name }}</router-link></td>
      <td>{{teacher.family}}</td>
      <td>{{teacher.email}}</td>
      <td>{{teacher.kurs}}</td>
     </tr>
     </table>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    teachers () {
      return this.$store.state.teachers
    }
  }

}
</script>
<style>
tr:nth-child(even){
  background-color:peachpuff
  }
  tr:nth-child(even):hover{
  background-color:lightpink
  }
  tr:nth-child(odd):hover{
  background-color:lightblue
  }
  td{
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
</style>
