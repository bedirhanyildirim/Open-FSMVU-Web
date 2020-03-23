<template>
  <div class="home">
    <div class="container">
      Here is the content
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
}
.home {
  .container {
    width: 1000px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
}
</style>
