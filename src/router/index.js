import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import WelcomePage from '../pages/welcome.pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home | Open FSMVU' }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomePage,
    meta: { title: 'Welcole | Open FSMVU' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  next()
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
