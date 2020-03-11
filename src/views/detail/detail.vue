<template>
  <div class="detail1">
    <!-- 头部栏 -->
    <child-comps :tile="['商品','参数','评论','推荐']" class="child" @qiehuan="qiehuan" ref="qie"></child-comps>
    <Scroll ref="cont" class="scroll1" :pull-up-load="true" :probe-type="3" @contscroll="contscroll">
      <!-- 轮播图 -->
      <detail-swaper :topimage="topimage"></detail-swaper>
      <!-- 详细信息 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 图片的展示 -->
      <detail-good-info :detail-info="detailInfo" @img="img"></detail-good-info>
      <!-- 参数的展示 -->
      <detail-params :goods-param="GoodsParam" ref="param"></detail-params>
      <!-- 评论区 -->
      <detail-comment-info :commonent-info="commentInfo" ref="comment"></detail-comment-info>
      <!-- 推荐信息 -->
      <goodlist :goodtitle="recommend" ref="good"></goodlist>
    </Scroll>
    <!-- 回到顶部 -->
    <topon @click.native="topindex" v-show="istopon"></topon>
    <!-- 标签栏 -->
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>

    <!-- 弹窗提示框 -->
    <toast message="哈哈哈"></toast>
  </div>
</template>
<script>
import childComps from './ChildComps/childComps'
import detailSwaper from './ChildComps/detailSwaper'
import detailBaseInfo from './ChildComps/detailBaseInfo'
import detailShopInfo from './ChildComps/detailShopInfo'
import detailGoodInfo from './ChildComps/detailGoodInfo'
import detailParams from './ChildComps/detailParams'
import detailCommentInfo from './ChildComps/detailCommentInfo'
import detailBottomBar from './ChildComps/detailBottomBar'

import goodlist from 'components/comnet/goods/goodList'
import Scroll from 'components/common/scroll/Scroll'

import toast from 'components/common/toast/toast'

import { itemimage, top } from '../../common/mixin'
import { detail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail.js'
import { debounce } from '../../common/utils'
export default {
  mixins: [itemimage, top],
  name: 'detail',
  data () {
    return {
      iid: '',
      topimage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      index: 0,
      GoodsParam: {},
      commentInfo: {},
      recommend: [],
      // 参数 评论 推荐的offsetY的值的存储
      scrollY: [],
      certenindex: 0
    }
  },
  destroyed () {
    this.$bus.$off('goodscroll', this.itemimage)
  },
  created () {
    this.iid = this.$route.params.iid
    detail(this.iid).then(res => {
      const data = res.data.result
      // 取出轮播图的数据
      this.topimage = data.itemInfo.topImages
      // 商品对象
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 取出店铺的信息
      this.shop = new Shop(data.shopInfo)
      // 取出详情的信息
      this.detailInfo = data.detailInfo
      // 取出参数的信息
      this.GoodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 取出评论的消息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      getRecommend().then(res => {
        this.recommend = res.data.data.list
      })
    })
    // 在这里式获不到ref的值的

    // this.$nextTick是数据改变之后进行了dom渲染之后调用
  },
  methods: {
    img () {
      debounce(() => {
        this.scrollY = []
        this.scrollY.push(0)
        this.scrollY.push(this.$refs.param.$el.offsetTop)
        this.scrollY.push(this.$refs.comment.$el.offsetTop)
        this.scrollY.push(this.$refs.good.$el.offsetTop)
      }, 600)()
    },
    qiehuan (index) {
      this.$refs.cont.scrollto(0, -this.scrollY[index], 100)
      // [0, 2833, 4264, 4436, __ob__: Observer]
    },
    // 这个是监听scroll.y的值
    contscroll (res) {
      for (let i = 0; i < this.scrollY.length; i++) {
        if ((this.certenindex !== i) && (((-res.y) >= this.scrollY[i] && (-res.y) < this.scrollY[i + 1]) || ((i === this.scrollY.length - 1) && ((-res.y) >= this.scrollY[i])))) {
          this.certenindex = i
          console.log(this.certenindex)
        }
      }
      this.$refs.qie.iscentercolor = this.certenindex
      this.istopon = (-res.y) > 1000 ? true : false
    },
    // 添加商品的信息传递
    addToCart () {
      const xinxi = {}
      xinxi.image = this.topimage[0]
      xinxi.title = this.goods.title
      xinxi.desc = this.goods.desc
      xinxi.price = this.goods.newPrice
      xinxi.iid = this.iid

      // 将商品信息添加到购物车里，通过vuex
      this.$store.dispatch('contList', xinxi).then(res => {
        this.$toast.show(res, 2000)
      })
    }
  },
  components: {
    childComps,
    detailSwaper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodInfo,
    detailParams,
    detailCommentInfo,
    Scroll,
    goodlist,
    detailBottomBar,
    toast
  }
}
</script>
<style scoped>
.detail1 {
  padding-top: 44px;
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.child {
  background: #fff;
}
.scroll1 {
  height: calc(100% - 44px - 10px);
  position: relative;
  overflow: hidden;
}
</style>
