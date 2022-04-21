<template>
  <div class="data-tacontainer">
    <div class="data-info flex justify-between">
      <div class="data-info-left margin-top-lg">
        <DataCard :data="list"></DataCard>
      </div>
      <div class="data-info-right margin-left-lg margin-top-lg">
        <NewsCard :data="newsData"></NewsCard>
        <HotList class="margin-top-lg" :data="hotArticleData"></HotList>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'DataPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios } = app
    const [hotRes, cardRes, newsRes] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('data'),
      $axios.get('side_flash_news'),
    ])
    return {
      list: cardRes.data.data.map((item) => ({
        ...item,
        tags: item.tags.split(','),
      })),
      total: cardRes.data.total,
      hotArticleData: hotRes.data,
      newsData: newsRes.data,
    }
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
