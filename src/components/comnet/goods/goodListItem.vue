<template>
  <div class="good-list-item">
    <img v-lazy="showimage" alt="" @load="gooditem" @click="goods">
    <div class="good-list-info">
      <p>{{item.title}}</p>
      <span>{{item.price}}</span>
      <span>{{item.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    gooditem () {
      this.$bus.$emit('goodscroll')
    },
    goods () {
      this.$router.push('/detail/' + this.item.iid)
    }
  },
  computed: {
    showimage () {
      return this.item.image || this.item.show.img
    }
  }
}
</script>
<style scoped>
.good-list-item {
  width: 48%;
  font-size: 12px;
  text-align: center;
  position: relative;
  padding-bottom: 40px;
}
.good-list-item img {
  width: 100%;
  border-radius: 5px;
}
.good-list-info {
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
}
.good-list-info p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.good-list-info span:nth-child(2) {
  color: #ff8198;
  position: absolute;
  text-align: left;
  width: 50px;
}
.good-list-info span:nth-child(2)::after {
  content: "";
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  background: url("~assets/img/goods1/collect.svg") no-repeat;
  background-size: 12px;
  background-position: 0px -1px;
}
.good-list-info span:last-child {
  margin-left: 55px;
}
</style>
