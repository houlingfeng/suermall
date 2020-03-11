<template>
  <Swiper class="swiper1">
    <swiper-item v-for="(item,index) in topimage" :key="index">
      <img :src="item">
    </swiper-item>
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  props: {
    topimage: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
.swiper1 {
  height: 300px;
}
</style>
