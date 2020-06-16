<template>
<div>
    <table style="width:100% ; border-colapse:colapse">
        <thead>
      <tr>
       <th >Name</th>
       <th>Family</th>
       <th>Course</th>
      </tr>
     </thead>
     <tr v-for="(student,index) in students" :key="index">
      <td> <router-link :to="`/students/${index}`">{{ student.name }}</router-link></td>
      <td>{{student.family}}</td>
      <td>{{student.kurs}}</td>
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
    students () {
      return this.$store.state.students
    }
  }
}
</script>
