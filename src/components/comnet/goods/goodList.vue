<template>
  <div class="good-list">
    <good-list-item v-for="(item,value) in goodtitle" :key="value" :item="item" />
  </div>
</template>
<script>
import goodListItem from './goodListItem'
export default {
  props: {
    goodtitle: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    goodListItem
  }
}
</script>
<style scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px;
  background: #fff;
}
</style>
