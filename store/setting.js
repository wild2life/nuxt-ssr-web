export const state = () => ({
  device: 'pc',
  isCollapse: true,
})

export const mutations = {
  changeDevice(state, device) {
    state.device = device
  },
  toggleCollapse(state, toggleCollapse) {
    state.isCollapse = toggleCollapse
  },
}
