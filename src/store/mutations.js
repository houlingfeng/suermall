export default {
  tianjia (state, config) {
    config.cant++
  },
  tianjia1 (state, config) {
    config.cant = 1
    config.isbutton = false
    state.guowu.push(config)
  }
}