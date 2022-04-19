export const state = () => ({
  device: '',
  isCollapse: true,
  menuList: [
    {
      label: '资讯',
      name: '/info',
    },
    {
      label: '快讯',
      name: '/news',
    },
    {
      label: '数据',
      name: '/data',
    },
    {
      label: '视频',
      name: '/video',
    },
    {
      label: '专题',
      name: '/topic',
    },
    {
      label: '活动',
      name: '/activity',
    },
    {
      label: '关于我们',
      name: '/about',
    },
  ],
})

export const mutations = {
  changeDevice(state, device) {
    state.device = device
  },
  toggleCollapse(state, toggleCollapse) {
    state.isCollapse = toggleCollapse
  },
}
