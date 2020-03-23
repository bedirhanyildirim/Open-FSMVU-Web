<template>
    <div id="footer">
      <div class="container">
        <h5>Here is footer</h5>
      </div>
    </div>
</template>

<script>
export default {
  name: 'footer.theme.vue'
}
</script>

<style lang="scss" scoped>
#footer {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid lightgray;
}

#footer {
  .container {
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    h5 {
      padding: 8px 0;
      font-size: 14px;
      font-weight: normal;
    }
  }
}
</style>
