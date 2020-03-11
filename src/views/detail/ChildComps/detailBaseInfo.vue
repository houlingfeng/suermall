<template>
  <div class="detailBase">
    <p>{{goods.title}}</p>
    <div class="detailitem">
      <span>{{goods.newPrice}}</span>
      <span>
        <s>{{goods.oldPrice}}</s>
      </span>
      <span :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="detailitem2">
      <span v-for="(item,index) in  goods.columns" :key="index">{{item}}</span>
    </div>
    <div class="detailitem3">
      <div v-for="(item,index) in goods.services" :key="index">
        <img :src="item.icon" v-if="item.icon">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.detailBase {
  padding: 10px 6px 0px;
  font-size: 16px;
}
.detailitem {
  margin-top: 10px;
  height: 50px;
}
.detailitem span {
  margin-right: 5px;
}
.detailitem span:first-child {
  font-size: 20px;
  color: red;
}
.detailitem span:nth-child(2) {
  font-size: 12px;
}
.detailitem span:last-child {
  display: inline-block;
  border-radius: 10px;
  padding: 4px;
  font-size: 12px;
}
.detailitem2 {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-bottom: 10px;
}
.detailitem3 {
  display: flex;
  font-size: 12.5px;
  justify-content: space-around;
  flex-wrap: wrap;
  line-height: 40px;
  box-shadow: 0px 4px 1px rgba(100, 100, 100, 0.1);
  text-align: center;
}
.detailitem3 div {
  overflow: hidden;
  width: 30%;
}
.detailitem3 img {
  width: 15px;
  height: 15px;
}
</style>
