<template>
  <div class="checkbtn" :class="{chec:checked}">
    <img src="~assets/img/cart/cart.svg" alt="">
  </div>
</template>
<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.checkbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #eeeeee;
}
.chec {
  background: red;
}
</style>
