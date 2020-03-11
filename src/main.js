import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/Store'
import toast from './components/common/toast'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Fastclick.attach(document.body)
Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')