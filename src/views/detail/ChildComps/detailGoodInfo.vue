<template>
  <div class="goods-info">
    <div class="goods-info-1">
      <div class="top"></div>
      <div class="zhong">新款上市~</div>
      <div class="bottom"></div>
      <div>{{detailInfo.detailImage[ling].key}}</div>
    </div>
    <div v-for="(item,index) in detailInfo.detailImage[ling].list" :key="index" class="goods-info-2">
      <img :src="item" @load="img">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      ling: 0
    }
  },
  methods: {
    img () {
      this.$emit('img')
    }
  }
}
</script>
<style scoped>
.goods-info {
  background: #ffffff;
}
.goods-info-1 {
  padding: 20px;
  height: 110px;
}
.top,
.bottom {
  display: flex;
  align-items: flex-end;
}
.top::before,
.bottom::after {
  content: "";
  width: 5px;
  height: 5px;
  background: black;
}
.top::after,
.bottom::before {
  content: "";
  width: 100px;
  height: 2px;
  background: rgba(100, 100, 100, 0.2);
}
.zhong {
  height: 60px;
  line-height: 60px;
  color: rgba(100, 100, 100, 0.9);
}
.bottom {
  float: right;
  height: 2px;
}
.goods-info-2 {
  width: 100%;
}
.goods-info-2 img {
  width: 100%;
}
</style>
