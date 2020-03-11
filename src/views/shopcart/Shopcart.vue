<template>
  <div class="carte">
    <!-- 头部导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <!-- 显示区 -->
    <cart-list :cart-list="cartList"></cart-list>

    <!-- 结算区 -->
    <cart-botton-bar></cart-botton-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childCartComps/CartList'
import CartBottonBar from './childCartComps/CartBottonBar'
import { mapGetters } from 'vuex'
export default {
  components: {
    NavBar,
    CartList,
    CartBottonBar
  },
  computed: {
    ...mapGetters(['cartListLength', 'cartList'])
  },
  mounted () {
    console.log(this.cartList)
  }
}
</script>
<style scoped>
.carte {
  padding-top: 44px;
  height: 100vh;
}
.nav-bar {
  background: pink;
  color: #ffffff;
}
</style>
