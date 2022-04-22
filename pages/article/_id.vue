<template>
  <div class="container">
    <CommonArticle
      :data="data"
      :hot-article-data="hotArticleData"
      :hot-video-data="hotVideoData"
    ></CommonArticle>
  </div>
</template>

<script>
export default {
  name: 'ArticleId',
  layout: 'default',
  async asyncData({ app, route }) {
    const { $axios, store } = app
    const [hotRes, videoRes, res, layout] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('side_hot_videos'),
      $axios.get(`articles/${route.params.id}`),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      data: {
        ...res.data,
        tags: res.data.articles.tags.split(','),
      },
      hotArticleData: hotRes.data,
      hotVideoData: videoRes.data,
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
        {
          hid: 'keyword',
          name: 'keyword',
          content: this.data.articles.tags || this.layout.keyword,
        },
      ],
    }
  },
}
</script>
