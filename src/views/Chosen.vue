  <template>
        <div>
        <p> {{user.name}} is one of our schools {{$route.params.cat}} </p>
        <h4> {{ user.name }} {{user.family}} Profil</h4>
        <p> Email: {{ user.email }}</p>
        <p> Course: {{user.kurs}}</p>
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
    },
    teachers () {
      return this.$store.state.teachers
    },
    user () {
      return this[this.$route.params.cat][this.$route.params.id]
    }
  }
}
</script>
