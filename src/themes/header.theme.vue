<template>
    <div id="header">
      <container display="flex" align-items="center" justify-content="space-between">
        <div class="logo">
          <router-link to="/">Open FSMVU</router-link>
        </div>
        <div class="content">
          <div class="nav">
            <router-link to="/">Anasayfa</router-link>
            <a href="javascript:;" @click="logout">Çıkış Yap</a>
          </div>
        </div>
      </container>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import store from '../store'
import router from '../router'
import { mapGetters } from 'vuex'
import container from '../components/container'
export default {
  name: 'header.theme.vue',
  store,
  router,
  components: {
    container
  },
  computed: {
    ...mapGetters([
      'getUser',
      'loggedIn'
    ])
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().catch(function (err) {
        console.log(err)
      }).then(_ => {
        this.$store.dispatch('logOut')
        router.push('/welcome')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
}

#header {
  .logo {
    padding: 15px 0;
    font-size: 20px;
    font-weight: bold;
  }
  .logo {
    a {
      color: #004680;
    }
  }
  .content {

  }
  .content {
    .nav {
    }

    .nav a {
      color: #303030;
      font-weight: bold;
      margin-left: 15px;
    }

    .nav a.router-link-exact-active {
      color: #004680;
    }
  }
}
</style>
