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
    const { $axios } = app
    const [hotRes, videoRes, res] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('side_hot_videos'),
      $axios.get(`articles/${route.params.id}`),
    ])
    return {
      data: {
        ...res.data,
        tags: res.data.articles.tags.split(','),
      },
      hotArticleData: hotRes.data,
      hotVideoData: videoRes.data,
    }
  },
  head() {
    return {
      title: this.data.articles.tags,
      // meta: [
      //   { hid: 'keyword', name: 'keyword', content: this.data.articles.tags },
      // ],
    }
  },
}
</script>
