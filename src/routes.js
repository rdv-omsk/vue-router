import VueRouter from 'vue-router'
import Home from './pages/Home'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'

const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(
      require('./pages/Cars.vue')
    )
  })
}

const Car = resolve => {
  require.ensure(['./pages/Car.vue'], () => {
    resolve(
      require('./pages/Car.vue')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: '', // loccalhost:8080
      component: Home
    },
    {
      path: '/cars', // loccalhost:8080/cars
      component: Cars,
      name: 'cars'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarFull,
          name: 'carFull',
          beforeEnter(to, from, next) {
            console.log('beforeEnter')
            next ()
          }
        }
      ]
    },
    {
      path: '/none',
      redirect: {
        name: 'cars'
      }
    },
    {
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { selector: to.hash }
    }

    return {
      x: 0,
      y: 0
    }
  }
})


