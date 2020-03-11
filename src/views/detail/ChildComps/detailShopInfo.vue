<template>
  <div class="shop-in">
    <div class="shop-info">
      <div class="shop-info-1">
        <img :src="shop.logo" alt="">
      </div>
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-info-2">
      <div class="shop-info-2-1">
        <span>{{shop.sells | shuzi}}</span>
        <span>{{shop.goodsCount}}</span>
        <span>总销量</span>
        <span>全部宝贝</span>
      </div>
      <div class="shop-info-2-2">
        <div v-for="(item,index) in shop.score" :key="index">
          <span>{{item.name}}</span>
          <span v-if="item.score>=5" class="red">{{item.score}}</span>
          <span v-else>{{item.score}}</span>
          <span v-if="item.score>=5" class="clas">高</span>
          <span v-else>低</span>
        </div>
      </div>
    </div>
    <div class="shop-info-3">
      进店逛逛
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    shuzi (val) {
      const v = parseInt(val / 10000)
      const s = parseInt(val / 1000) % 10
      return v + '.' + s + '万'
    }
  }
}
</script>
<style scoped>
.shop-in {
  box-shadow: 0px 5px 1px rgba(100, 100, 100, 0.1);
  padding-bottom: 20px;
}
.shop-info {
  display: flex;
  height: 100px;
  align-items: center;
  font-size: 15px;
  color: rgba(100, 100, 100, 1);
}
.shop-info-1 {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid rgba(100, 100, 100, 0.2);
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}
.shop-info-1 img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.shop-info-2 {
  display: flex;
  padding: 0px 0px;
  font-size: 14px;
}
.shop-info-2-1,
.shop-info-2-2 {
  flex: 1;
}
.shop-info-2-1 {
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid rgba(100, 100, 100, 0.2);
  text-align: center;
  height: 45px;
  line-height: 20px;
  margin-top: 15px;
}
.shop-info-2-1 span {
  display: block;
  width: 50%;
}
.shop-info-2-2 {
  padding-left: 20px;
  line-height: 25px;
}
.shop-info-2-2 span {
  margin-right: 10px;
}
.shop-info-2-2 span:nth-child(2) {
  color: green;
}
.shop-info-2-2 span:nth-child(3) {
  background: green;
}
.shop-info-2-2 span.red {
  color: red;
}
.shop-info-2-2 span.clas {
  background: red;
}
.shop-info-3 {
  width: 150px;
  background: rgba(100, 100, 100, 0.2);
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10px;
}
</style>
