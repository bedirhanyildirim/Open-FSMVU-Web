<template>
  <div id="home">
    <container display="flex" justify-content="left">
      Here is the content
    </container>
  </div>
</template>

<script>
import container from '../components/container'
export default {
  name: 'Home',
  components: { container }
}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}
</style>
