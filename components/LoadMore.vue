<template>
  <div v-if="showThis" class="first-loading-wrp">
    <img
      v-if="showIcon"
      src="~/assets/image/loading.png"
      alt=""
      :class="{ 'loading-running': showIcon }"
    />
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    hasMore: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: '加载中...',
    },
    failText: {
      type: String,
      default: '加载失败, 请点击重试!',
    },
    // 没有更多后的显示文本, 默认没有则隐藏加载更多控件
    finishText: {
      type: String,
      default: '',
    },
    // 列表渲染延时, 默认为 500 ms, 我在开发工具中测试列表渲染速度时快时慢, 可根据实际使用中界面复杂度自行调整
    // ps 如果能监听setData() 渲染结束的话则可以不需要延时
    listRenderingDelay: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      showThis: true,
      text: '加载中',
      showIcon: true,
      isLoading: false,
    }
  },
  methods: {
    loadMore() {
      if (!this.hasMore) {
        console.log('load more finish')
        return
      }
      if (this.isLoading) {
        console.log('loading ...')
        return
      }
      this.isLoading = true
      // this.triggerEvent('loadMoreListener')
      this.$emit('loadMoreListener')
    },
    loadMoreComplete(data) {
      const hasMore =
        data.current_page < data.total_pages && data.total_pages !== 1
      let text = ''
      let showThis = false
      let showIcon = false

      if (hasMore) {
        showIcon = true
        showThis = true
        text = this.loadingText
      } else if (this.finishText.length > 0) {
        text = this.finishText
        showThis = true
      }
      // this.hasMore = hasMore
      this.text = text
      this.showThis = showThis
      this.showIcon = showIcon
      // 界面渲染延迟, 避免列表还未渲染完成就再次触发 loadMore 方法
      // setTimeout(
      //   function () {
      //     this.setData({
      //       isLoading: false,
      //     })
      //   }.bind(this),
      //   this.properties.listRenderingDelay
      // )
    },
    // 加载失败
    loadMoreFail() {
      this.showIcon = false
      this.text = this.properties.failText

      // //界面渲染延迟, 避免列表还未渲染完成就再次触发 loadMore 方法
      // setTimeout(function(){
      //   this.setData({
      //     isLoading: false
      //   })
      // }.bind(this), this.properties.listRenderingDelay)
    },
    // 点击 loadmore 控件时触发, 只有加载失败时才会进入页面回调方法
    clickLoadMore() {
      if (this.text !== this.failText) return
      this.showIcon = true
      this.text = this.loadingText
      this.isLoading = true
      this.$emit('clickLoadMore')
      // this.triggerEvent('clickLoadMore')
    },
  },
}
</script>

<style lang="scss" scoped>
.first-loading-wrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  min-height: 90vh;
}

.first-loading-wrp > h1 {
  font-size: 30px;
  font-weight: bolder;
}

@keyframes loading__scale-to-up {
  from {
    transform: scale(1, 0.2);
  }
  to {
    transform: scale(1, 1);
  }
}

.first-loading-wrp .loading-wrp i {
  background-color: $primary-color;
  display: inline-block;
  width: 5px;
  height: 50px;
  border-radius: 5px;
}
.splash__item + .splash__item {
  margin-left: 10px;
}

.first-loading-wrp .loading-wrp .splash__item {
  animation: loading__scale-to-up 0.5s linear infinite alternate-reverse;
  animation-delay: calc(var(--i) + 0s);
}
</style>
