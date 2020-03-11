import toast from './toast'
let obj = {}

obj.install = function (vue) {
  // 创造组件构造器
  let toastcons = vue.extend(toast)
  // 使用new创造出一个组件对象
  let toaxt = new toastcons()
  // 手动进行挂载实列
  toaxt.$mount(document.createElement('div'))

  document.body.appendChild(toaxt.$el)
  vue.prototype.$toast = toaxt
}

export default obj