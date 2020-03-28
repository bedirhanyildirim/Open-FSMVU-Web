import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _user: JSON.parse(localStorage.getItem('__user')) || ''
  },
  getters: {
    getUser (state) {
      return state._user
    },
    loggedIn (state) {
      return (state._user !== null && state._user !== '')
    }
  },
  mutations: {
    setUser (state, userData) {
      if (userData !== null && userData !== '') {
        localStorage.setItem('__user', JSON.stringify(userData))
      }
      if (localStorage.getItem('__user') && localStorage.getItem('__user') !== '') {
        const stringData = localStorage.getItem('__user') || ''
        const data = JSON.parse(stringData)
        state._user = data
      }
    },
    logOut (state) {
      state._user = null
      localStorage.removeItem('__user')
    }
  },
  actions: {
    setUser ({ commit }, userData) {
      commit('setUser', userData)
    },
    logOut ({ commit }) {
      commit('logOut')
    }
  },
  modules: {
  }
})
