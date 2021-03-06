import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Teachers from '../views/Teachers.vue'
import Students from '../views/Students.vue'
import Chosen from '../views/Chosen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/:cat/:id',
    name: 'Chosen',
    component: Chosen
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
