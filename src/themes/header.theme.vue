<template>
    <div id="header">
      <div class="container">
        <div class="logo">
          <router-link to="/">Open FSMVU</router-link>
        </div>
        <div class="content">
          <div class="nav">
            <router-link to="/">Anasayfa</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'header.theme.vue'
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid lightgray;
}

#header {
  .container {
    display: flex;
    width: 1000px;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
  .container {
    .logo {
      font-size: 20px;
      font-weight: bold;
      padding: 15px 0;
    }
    .content {

    }
    .content {
      .nav {
      }

      .nav a {
        color: #000000;
        font-weight: bold;
      }

      .nav a.router-link-exact-active {
        /*color: #42b983;*/
      }
    }
  }
}
</style>
