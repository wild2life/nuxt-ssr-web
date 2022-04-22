<template>
  <div class="video-container padding-bottom-lg">
    <div class="video-info flex justify-between">
      <div class="video-info-left">
        <div class="video-info-left-card flex">
          <VideoCard
            v-for="(item, index) in list"
            :key="index"
            :data="item"
            :style="{ marginRight: (index + 1) % 3 ? '20px' : '0' }"
          ></VideoCard>
        </div>
        <infinite-loading
          v-if="list.length"
          spinner="bubbles"
          @infinite="infiniteScroll"
        >
          <span slot="no-more" class="padding-top"> 已经没有啦~~ </span>
          <span slot="no-results" class="padding-top"> 暂无数据~~ </span>
        </infinite-loading>
      </div>
      <div class="video-info-right margin-left-lg">
        <HotVideos class="margin-top-lg" :data="hotVideoData"></HotVideos>
        <HotList class="margin-top-lg" :data="hotArticleData"></HotList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios, store } = app
    const [hotRes, cardRes, videoRes, layout] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('videos'),
      $axios.get('side_hot_videos'),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      list: cardRes.data.data,
      total: cardRes.data.total,
      hotArticleData: hotRes.data,
      hotVideoData: videoRes.data,
      page: 1,
      layout: layout.data,
    }
  },
  head() {
    return {
      title: this.layout.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.layout.description,
        },
        { hid: 'keyword', name: 'keyword', content: this.layout.keyword },
      ],
    }
  },
  methods: {
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++
        this.$axios
          .get(`videos?page=${this.page}`)
          .then((resp) => {
            if (resp.data.data.length > 1) {
              resp.data.data.forEach((item) => this.list.push(item))
              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }, 500)
    },
  },
}
</script>
<style lang="scss" scoped>
.video-container {
  width: 100vw;
}
.video-info {
  &-left {
    width: 790px;
  }
  &-right {
    width: 390px;
  }
  &-left-card {
    flex-wrap: wrap;
    flex: 1;
  }
}
</style>
