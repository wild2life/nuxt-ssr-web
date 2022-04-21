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
    const { $axios } = app
    const [hotRes, cardRes, videoRes] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('videos'),
      $axios.get('side_hot_videos'),
    ])
    return {
      list: cardRes.data.data,
      total: cardRes.data.total,
      hotArticleData: hotRes.data,
      hotVideoData: videoRes.data,
    }
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
