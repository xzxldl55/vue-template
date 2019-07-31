import Vue from 'vue'
import Router from 'vue-router'
import Xzxldl from '../views/Xzxldl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xzxldl',
      component: Xzxldl
    }
  ]
})
