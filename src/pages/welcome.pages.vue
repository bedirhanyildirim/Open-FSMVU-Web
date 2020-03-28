<template>
  <div class="welcome-page">
    <container display="flex" align-items="center" justify-content="center">
      <div class="content">
        <h3 class="title">Hoşgeldin</h3>
        <signup v-if="currentPage==='signup'" v-on:goToSignin="openSignin"></signup>
        <signin v-if="currentPage==='signin'" v-on:goToSignup="openSignup"></signin>
      </div>
    </container>
  </div>
</template>

<script>
import store from '../store'
import { mapGetters } from 'vuex'
import container from '../components/container'
import signup from '../components/signup.welcome'
import signin from '../components/signin.welcome'
export default {
  name: 'WelcomePage',
  components: { container, signup, signin },
  store,
  data: function () {
    return {
      currentPage: 'signup'
    }
  },
  computed: {
    ...mapGetters([
      'loggedIn'
    ])
  },
  mounted: function () {
  },
  methods: {
    openSignin: function () {
      this.currentPage = 'signin'
    },
    openSignup: function () {
      this.currentPage = 'signup'
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-page {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.welcome-page {
  .container {
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    .content {
      padding: 50px 0;
      transition: opacity 1s ease-out;
    }
    .content {
      .title {
      text-align: center;
      margin-bottom: 30px;
      }
    }
  }
}
</style>
