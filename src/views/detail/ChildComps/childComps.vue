<template>
  <nav-bar>
    <div slot="left" class="left1" @click="go">
      <img src="~assets/img/common/left.svg" alt="">
    </div>
    <div slot="center" class="center1">
      <div v-for="(item,value) in tile" :key="value" :class="{centerColor:iscentercolor===value}" @click="centerClick(value)">{{item}}</div>
    </div>
  </nav-bar>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data () {
    return {
      iscentercolor: 0
    }
  },
  props: {
    tile: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    centerClick (value) {
      this.iscentercolor = value
      this.$emit('qiehuan', value)
    },
    go () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.center1 {
  display: flex;
  font-size: 14px;
}
.center div {
  flex: 1;
}
.left1 img {
  margin-top: 12px;
}
.centerColor {
  color: #ff8198;
}
.chid-comps {
  background: #fff;
}
</style>
