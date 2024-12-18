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
  layout: {
    copyright: '',
    description: '',
    keyword: '',
    logo: '',
    record: '',
    title: '',
    wechat_qrcode: '',
    links: [],
  },
})

export const mutations = {
  CHANGE_DEVICE(state, device) {
    state.device = device
  },
  TOGGLE_COLLAPSE(state, toggleCollapse) {
    state.isCollapse = toggleCollapse
  },
  SET_LAYOUT(state, layout) {
    state.layout = layout
  },
}
