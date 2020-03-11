import { debounce } from './utils'
import Topon from 'components/common/topon/Topon'
export const itemimage = {
  data () {
    return {
      // 防抖函数
      itemimage: null
    }
  },
  mounted () {
    const refresh = debounce(this.$refs.cont.refresh, 350)
    this.itemimage = () => {
      refresh()
    }
    this.$bus.$on('goodscroll', this.itemimage)
  }
}

export const top = {
  data () {
    return {
      // 回到顶部的显隐问题
      istopon: false,
    }
  },
  components: {
    Topon
  },
  methods: {
    // 控制topon回到顶部的调用
    topindex () {
      this.$refs.cont.scrollto(0, 0, 300)
    }
  }
}