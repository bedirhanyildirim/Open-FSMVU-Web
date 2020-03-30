import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './firebase/index'
import { firestorePlugin } from 'vuefire'
import './assets/styles/reset.scss'
import './assets/styles/variables.scss'

Vue.config.productionTip = false

Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
