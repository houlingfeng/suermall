import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../views/home/Home')
const category = () => import('../views/category/Category')
const profile = () => import('../views/porfile/Porfile')
const shopcart = () => import('../views/shopcart/Shopcart')
const detail = () => import('../views/detail/detail')
Vue.use(Router)
const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: home },
  { path: '/category', component: category },
  { path: '/shopcart', component: shopcart },
  { path: '/profile', component: profile },
  { path: '/detail/:iid', component: detail }
]
export default new Router({
  routes,
})