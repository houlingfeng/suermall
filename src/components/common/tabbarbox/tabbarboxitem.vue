<template>
  <div class="tabbar-box-item" @click="imgActvie">
    <div v-if="!xianshi">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="img_active"></slot>
    </div>
    <div :style="actvieColor1">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    actvieColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // xianshi: true
    }
  },
  computed: {
    xianshi () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    actvieColor1 () {
      return this.xianshi ? { color: this.actvieColor } : {}
    }
  },
  methods: {
    imgActvie () {
      // console.log(this.$parent.$el.clientTop)
      // console.log(this.$refs)
      if (this.$route.path.indexOf(this.path) === -1) {
        this.$router.push(this.path)
      }
    }
  }
}
</script>
<style scoped>
.tabbar-box-item {
  flex: 1;
  text-align: center;
  font-size: 16px;
  margin-top: 3px;
}
.tabbar-box-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
