<template>
  <div class="tabbar-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {
  }
}
</script>
<style scoped>
.tabbar-box {
  display: flex;
  height: 49px;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.3);
}
</style>
