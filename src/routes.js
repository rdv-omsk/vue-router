import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'

export default new VueRouter({
  routes: [
    {
      path: '', // loccalhost:8080
      component: Home
    },
    {
      path: '/cars', // loccalhost:8080/cars
      component: Cars
    }
  ],
  mode: 'history'
})


