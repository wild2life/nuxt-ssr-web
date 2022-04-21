import axios from 'axios'
// const api = 'http://82.157.144.230/api/layout'

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
  advertise: {
    img: '',
    link: '',
    title: '',
  },
  searchVal: '',
})

export const mutations = {
  changeDevice(state, device) {
    state.device = device
  },
  toggleCollapse(state, toggleCollapse) {
    state.isCollapse = toggleCollapse
  },
  SET_LAYOUT(state, layout) {
    state.layout = layout
  },
  SET_ADVERTISE(state, data) {
    state.advertise = data
  },
  SET_SEARCHVAL(state, data) {
    state.searchVal = data
  },
}
export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get('api/layout')
    const adRes = await axios.get('api/side_index_ad')
    commit('SET_LAYOUT', data.data)
    commit('SET_ADVERTISE', adRes.data.data)
  },
}
