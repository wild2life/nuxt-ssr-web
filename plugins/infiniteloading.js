import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'
// Vue.component(InfiniteLoading, 'InfiniteLoading', {
//   slots: {
//     noResults: '暂无数据~~',

//     noMore: '已经没有啦~~ ',

//     // error: {
//     //   render: (h) => h('div'),
//     // },
//   },
// })
Vue.component('InfiniteLoading', InfiniteLoading, {
  slots: {
    noResults: '暂无数据~~',

    noMore: '已经没有啦~~ ',

    // error: {
    //   render: (h) => h('div'),
    // },
  },
})
