<template>
  <div class="cart-botton-bar">
    <div class="cart-left">
      <check-button @click.native="quanxuan" :checked="chek"></check-button>
      <span>全选</span>
    </div>
    <div class="cart-center">
      合计：{{heji}}
    </div>
    <div class="cart-right">
      去计算：{{length1}}
    </div>
  </div>
</template>
<script>
import CheckButton from './CheckButton'
import { mapGetters } from 'vuex'
export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    length1 () {
      return this.cartList.filter(item => item.isbutton).length
    },
    heji () {
      return '￥' + this.cartList.filter(item => item.isbutton).reduce((sum, ite) => {
        console.log(ite.price.slice(1))
        return sum + ite.price.slice(1) * ite.cant
      }, 0).toFixed(2)
    },
    // 判断全选按钮是否为选中
    chek () {
      if (this.cartList.length == 0) {
        return false
      }
      return this.cartList.filter(item => item.isbutton).length == this.cartList.length ? true : false
    }
  },
  methods: {
    quanxuan () {
      if (!this.chek) {
        this.chek = true
        this.cartList.forEach(item => {
          item.isbutton = true
        })
      } else {
        this.chek = false
        this.cartList.forEach(item => {
          item.isbutton = false
        })
      }
    }
  }
}
</script>
<style scoped>
.cart-botton-bar {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 49px;
  background: #eeeeee;
  height: 44px;
  display: flex;
  font-size: 14px;
}
.cart-left {
  display: flex;
  align-items: center;
  width: 60px;
  justify-content: center;
}
.cart-center {
  flex: 1;
  line-height: 44px;
  padding-left: 10px;
}
.cart-right {
  width: 100px;
  background: red;
  color: #ffffff;
  line-height: 44px;
  text-align: center;
}
</style>
