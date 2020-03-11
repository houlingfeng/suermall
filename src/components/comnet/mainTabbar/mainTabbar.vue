<template>
  <div>
    <Tabbar>
      <tabbar-boxitem path="/home">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="img_active">
        <div slot="text">
          首页
        </div>
      </tabbar-boxitem>

      <tabbar-boxitem path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="img_active">
        <div slot="text">
          分类
        </div>
      </tabbar-boxitem>

      <tabbar-boxitem path="/shopcart">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="img_active">
        <div slot="text">购物车</div>
      </tabbar-boxitem>

      <tabbar-boxitem path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="img_active">
        <div slot="text">我的</div>
      </tabbar-boxitem>
    </Tabbar>
  </div>
</template>
<script>
import Tabbar from 'components/common/tabbarbox/tabbar.vue'
import tabbarBoxitem from 'components/common/tabbarbox/tabbarboxitem.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    Tabbar,
    tabbarBoxitem
  }
}
</script>
<style scoped>
</style>
