<template>
  <div id="home">
    <!-- navbar导航栏 -->
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- tab栏 -->
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" :class="{tabclas:tabbool}" ref="tab"></tab-control>
    <!-- 插件滚动 -->
    <Scroll class="content1" ref="cont" :probe-type='3' @contscroll="contscroll" :pull-up-load="true" @pullingup="pullingUp">
      <!-- 轮播图的封装 -->
      <children-swiper :banners="banners" @imageload="imageload"></children-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <!-- 特点栏 -->
      <feature-view></feature-view>

      <!-- tab栏 -->
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcont"></tab-control>

      <!-- 图片的展示 -->
      <good-list :goodtitle="goodindex"></good-list>
    </Scroll>

    <!-- 导航上去 -->
    <topon @click.native="topindex" v-show="istopon"></topon>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/comnet/TabControl/TabControl'
import goodList from 'components/comnet/goods/goodList'
import Scroll from 'components/common/scroll/Scroll'

import ChildrenSwiper from './childrensComps/ChildrenSwiper'
import HomeRecommendView from './childrensComps/HomeRecommendView'
import FeatureView from './childrensComps/FeatureView'

import { itemimage, top } from '../../common/mixin'
import { home, getHomeGoodsData } from '../../network/home'
export default {
  mixins: [itemimage, top],
  data () {
    return {
      // 轮播图的数据
      banners: [],
      // 导航栏的数据
      recommends: [],
      // 选项卡数据的存储
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      // tab控制项
      strIndex: 'pop',
      // 显示tab栏的显隐
      tabbool: false,
      // tab栏的距离顶部的距离
      tabindex: 0,
      // 离开组件的位置
      juli: 0
    }
  },
  components: {
    // components中的组件
    NavBar,
    TabControl,
    goodList,
    Scroll,
    // childrensComps中的组件
    ChildrenSwiper,
    HomeRecommendView,
    FeatureView
  },
  // 组件活跃的时候调用
  activated () {
    this.$refs.cont.scrollto(0, this.juli, 0)
    this.$refs.cont.refresh()
  },
  // 离开组件的时候调用
  deactivated () {
    this.$bus.$off('goodscroll', this.itemimage)
    this.juli = this.$refs.cont.scroll.y
  },
  created () {
    // 获取轮播图的数据
    this.gethome()
    // 获取选项卡的数据
    this.gethomegoodsdata('pop')
    this.gethomegoodsdata('new')
    this.gethomegoodsdata('sell')
  },
  methods: {
    // 防抖函数
    antishake (func, dale) {
      let time = null
      return function () {
        if (time) {
          clearTimeout(time)
        }
        time = setTimeout(() => {
          func.apply(func)
        }, dale);
      }
    },
    // 获取轮播图和导航栏的数组
    gethome () {
      home().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    // 获取选项卡的数据
    async gethomegoodsdata (type) {
      const index = this.goods[type].page + 1
      const data = await getHomeGoodsData(type, index)
      this.goods[type].list.push(...data.data.data.list)
      this.goods[type].page += 1
      this.$refs.cont.scroll.finishPullUp()
    },
    // 控制选项卡的传入对应的值
    tabClick (index) {
      switch (index) {
        case 0: this.strIndex = 'pop'
          break
        case 1: this.strIndex = 'new'
          break
        case 2: this.strIndex = 'sell'
          break
      }
      this.$refs.tab.activeindex = index
      this.$refs.tabcont.activeindex = index
    },
    // 控制topon回到顶部的调用
    topindex () {
      this.$refs.cont.scrollto(0, 0, 3000)
    },
    //  回到顶部的隐藏和显示问题
    contscroll (res) {
      this.tabbool = (-res.y) > this.tabindex ? true : false
      this.istopon = (-res.y) > 1000 ? true : false
    },
    // 上拉加载更多
    pullingUp () {
      this.gethomegoodsdata(this.strIndex)
    },
    // 监听轮播图的加载
    imageload () {
      this.tabindex = this.$refs.tabcont.$el.offsetTop
    }
  },
  computed: {
    // 处理选项卡传值
    goodindex () {
      return this.goods[this.strIndex].list
    }
  }
}
</script>
<style scoped>
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.navbar {
  background-color: #ff8198;
  color: #fff;
}
.content1 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  background: #fff;
}
.tabclas {
  position: fixed;
  top: 44px;
  left: 0px;
  right: 0px;
}
</style>
