<template>
  <div class="CartList">
    <scroll :pull-up-load="true" class="scroll" ref="sco">
      <cart-list-item v-for="item in cartList" :key="item.iid" :itemInfo="item"></cart-list-item>
    </scroll>
  </div>
</template>
<script>
import scroll from 'components/common/scroll/Scroll'
import cartListItem from './CartListItem'
export default {
  props: {
    cartList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    console.log(this.cartList)
  },
  activated () {
    this.$refs.sco.refresh()
  },
  components: {
    scroll,
    cartListItem
  }
}
</script>
<style scoped>
.CartList {
  height: calc(100% - 49px - 44px);
}
.scroll {
  height: 100%;
  overflow: hidden;
}
</style>
