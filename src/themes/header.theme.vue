<template>
    <div id="header">
      <container display="flex" align-items="center" justify-content="space-between">
        <div class="logo">
          <router-link to="/">Open FSMVU</router-link>
        </div>
        <div class="content">
          <div class="nav">
            <router-link to="/">Anasayfa</router-link>
          </div>
        </div>
      </container>
    </div>
</template>

<script>
import container from '../components/container'
export default {
  name: 'header.theme.vue',
  components: {
    container
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
      color: #000000;
      font-weight: bold;
    }

    .nav a.router-link-exact-active {
      /*color: #42b983;*/
    }
  }
}
</style>
