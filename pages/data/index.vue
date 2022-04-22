<template>
  <div class="data-tacontainer">
    <div class="data-info flex justify-between">
      <div class="data-info-left margin-top-lg">
        <DataCard :data="list"></DataCard>
        <infinite-loading
          v-if="list.length"
          spinner="bubbles"
          @infinite="infiniteScroll"
        >
          <span slot="no-more" class="padding-top"> 已经没有啦~~ </span>
          <span slot="no-results" class="padding-top"> 暂无数据~~ </span>
        </infinite-loading>
      </div>
      <div class="data-info-right margin-left-lg margin-top-lg">
        <NewsCard :data="newsData"></NewsCard>
        <HotList class="margin-top-lg" :data="hotArticleData"></HotList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios, store } = app
    const [hotRes, cardRes, newsRes, layout] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('data'),
      $axios.get('side_flash_news'),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      list: cardRes.data.data.map((item) => ({
        ...item,
        tags: item.tags.split(','),
      })),
      total: cardRes.data.total,
      hotArticleData: hotRes.data,
      newsData: newsRes.data,
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
          .get(`data?page=${this.page}`)
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
.data-container {
  width: 100vw;
}
.data-info {
  &-left {
    width: 790px;
  }
  &-right {
    width: 390px;
  }
}
</style>
