<template>
<div class="container" :style="style">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'container',
  props: {
    display: {
      type: String,
      required: true,
      default: 'flex'
    },
    alignItems: {
      type: String,
      required: false,
      default: 'center'
    },
    justifyContent: {
      type: String,
      required: false,
      default: 'center'
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'transparent'
    }
  },
  computed: {
    style () {
      return {
        display: this.display,
        alignItems: this.alignItems,
        justifyContent: this.justifyContent,
        backgroundColor: this.backgroundColor
      }
    }
  }
}
</script>

<style scoped>
  .container {
    width: 980px;
    display: flex;
    padding: 0 10px;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
</style>
