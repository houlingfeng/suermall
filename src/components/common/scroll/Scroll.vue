<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on('scroll', res => {
        this.$emit('contscroll', res)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingup')
      })
    },
    scrollto (a, b, y) {
      this.scroll.scrollTo(a, b, y)
    },
    refresh () {
      this.scroll.refresh()
    }
  }
}
</script>
<style scoped>
</style>
