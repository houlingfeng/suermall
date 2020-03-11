<template>
  <div class="tab-control">
    <div v-for="(item,value) in titles" :key="value" class="tab-control-item" :class="{active:value===activeindex}" @click="addindex(value)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // 样式的控制
      activeindex: 0
    }
  },
  methods: {
    addindex (index) {
      this.activeindex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active span {
  color: #ff8198;
  border-bottom: 2px solid #ff5777;
}
</style>
