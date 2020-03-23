<template>
  <div id="app">
    <header-theme></header-theme>
    <router-view/>
    <footer-theme></footer-theme>
  </div>
</template>

<script>
import HeaderTheme from './themes/header.theme'
import FooterTheme from './themes/footer.theme'
export default {
  name: 'App',
  components: { HeaderTheme, FooterTheme }
}
</script>

<style lang="scss">
</style>
