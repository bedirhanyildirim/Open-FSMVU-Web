<template>
    <div id="footer">
      <div class="container">
        <h5>Developed by <a href="http://bedirhanyildirim.com" target="_blank">Bedirhan Yıldırım</a></h5>
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
  border-top: 1px solid #e5e5e5;
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
    a {
      color: #004680;
      font-weight: bold;
    }
  }
}
</style>
