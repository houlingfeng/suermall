<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message, shijian) {
      console.log(message)
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, shijian)
    }
  }
}
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  z-index: 999;
}
</style>
