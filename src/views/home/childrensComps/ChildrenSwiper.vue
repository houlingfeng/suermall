<template>
  <div>
    <Swiper>
      <swiper-item v-for="(item,value) in banners" :key="value">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgload">
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'
export default {
  data () {
    return {
      bool: false
    }
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgload () {
      if (!this.bool) {
        this.$emit('imageload')
        this.bool = !this.bool
      }
    }
  }
}
</script>
<style scoped>
</style>
