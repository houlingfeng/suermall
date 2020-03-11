export default {
  contList (context, config) {
    return new Promise((resolve) => {
      const xinxi = context.state.guowu.find(item => {
        return item.iid == config.iid
      })
      if (xinxi) {
        context.commit('tianjia', xinxi)
        resolve('添加购物车成功')
      } else {
        context.commit('tianjia1', config)
        resolve('添加购物车成功')
      }
    })
  }
}