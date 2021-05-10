import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  // Params
  {
    path: '/users/:id?',
    name: 'User',
    component: User,
  },
  {
    path: '/',
    name: 'Home',
    alias: ['home', 'homepage'], // 別名(alias)
    component: Home,
    // 上下 3 種寫法相同
    // redirect: '/about' //重新導向(redirect)
    redirect: About
    // redirect: {
    //   About
    // }
  },
]

const router = new VueRouter({
  mode: 'hash', // 建議使用 hash
  base: process.env.BASE_URL,
  routes
})

export default router