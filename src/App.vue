<template>
  <div id="app">
    <header-theme v-if="loggedIn"></header-theme>
    <router-view/>
    <footer-theme v-if="loggedIn"></footer-theme>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderTheme from './themes/header.theme'
import FooterTheme from './themes/footer.theme'
export default {
  name: 'App',
  components: { HeaderTheme, FooterTheme },
  computed: {
    ...mapGetters([
      'getUser',
      'loggedIn'
    ])
  }
}
</script>

<style lang="scss">
</style>
