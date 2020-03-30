import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'
import Home from '../pages/home.pages.vue'
import WelcomePage from '../pages/welcome.pages'
import CompleteProfile from '../pages/completeProfile.pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Anasayfa | Open FSMVU',
      requiresAuth: true
    }
  },
  {
    path: '/complete-profile',
    name: 'completeProfile',
    component: CompleteProfile,
    meta: {
      title: 'Profilini Tamamla | Open FSMVU',
      requiresAuth: true
    }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomePage,
    meta: { title: 'Hoşgeldin | Open FSMVU' }
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
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!Store.getters.loggedIn) {
      next({
        name: 'Welcome'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
