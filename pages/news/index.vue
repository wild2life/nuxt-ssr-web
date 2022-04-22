<template>
  <div class="news-container">
    <div class="flex">
      <div class="left flex flex-sub flex-direction">
        <p class="title text-xl"><span class="margin-left">壹览快讯</span></p>
        <div class="news-cont">
          <NewsList
            v-for="(item, index) in list"
            :key="index"
            :data="item"
          ></NewsList>
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
      <div class="right">
        <HotList class="margin-top-lg" :data="hotArticleData"></HotList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios, store } = app
    const [hotRes, cardRes, layout] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('flash_news'),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      list: cardRes.data.data,
      total: cardRes.data.total,
      hotArticleData: hotRes.data,
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
        this.page++ // next page
        this.$axios
          .get(`flash_news?page=${this.page}`)
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
<style scoped lang="scss">
.news-container {
  width: 100%;
  padding-bottom: 35px;

  .left {
    margin-right: 30px;
  }
  .right {
    width: 420px;
  }
  .title {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      background: $primary-color;
      height: 20px;
      width: 3px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
}
</style>
