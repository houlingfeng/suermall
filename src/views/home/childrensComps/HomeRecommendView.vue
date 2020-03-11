<template>
  <div class="recommen-item">
    <div v-for="(item,value) in recommends" :key="value" class="recommen-item1">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommen-item {
  display: flex;
  text-align: center;
  font-size: 13px;
  padding: 10px 0px 10px;
  box-shadow: 0px 15px 1px #eeeeee;
}
.recommen-item1 {
  flex: 1;
}
.recommen-item1 img {
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
}
</style>
