<template>
  <div class="index-container padding-bottom-lg">
    <el-row v-if="isMobile">
      <el-col :span="24">
        <HotSearchWords :data="hotWordData"></HotSearchWords>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="16">
        <div
          class="el-tab-wrap padding-top-xs margin-top"
          :class="{
            'margin-lr': isMobile,
            'pc-tab-wrap': !isMobile,
            'margin-right-lg': !isMobile,
          }"
        >
          <el-tabs v-model="activeName" @tab-click="handleChange">
            <el-tab-pane
              v-for="item in list"
              :key="item.industry_id"
              :label="item.name"
              :name="item.industry_id"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
        <div
          class="flex flex-sub card-wrap"
          :class="{
            'flex-wrap': !isMobile,
            'flex-direction': isMobile,
            'box-shadow': isMobile,
            'border-radius': isMobile,
            'margin-lr': isMobile,
          }"
        >
          <InfoCard
            v-for="(item, index) in cardData"
            :key="index"
            :data="item"
            :class="{ 'margin-right': !isMobile && (index + 1) % 3 }"
          ></InfoCard>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :class="{ 'margin-top': !isMobile, 'pc-card-wrap': !isMobile }"
      >
        <NewsCard :data="newsData"></NewsCard>
        <HotList class="margin-top-lg" :data="hotArticleData"></HotList>
        <HotSearchWords
          v-if="!isMobile"
          class="margin-top-lg"
          :data="hotWordData"
        ></HotSearchWords>
        <HotTopics class="margin-top-lg" :data="hotTopicData"></HotTopics>
        <HotVideos class="margin-top-lg" :data="hotVideoData"></HotVideos>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'InfoPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios } = app
    const [tabRes, slideRes, newsRes, hotRes, videoRes, topicRes, wordRes] =
      await Promise.all([
        $axios.get('industry'),
        $axios.get('slide'),
        $axios.get('side_flash_news'),
        $axios.get('side_hot_articles'),
        $axios.get('side_hot_videos'),
        $axios.get('side_hot_topics'),
        $axios.get('side_hot_words'),
      ])
    const cardRes = await $axios.get(
      `industry/${tabRes.data[0].industry_id}/articles`
    )
    return {
      list: tabRes.data.map((item) => ({
        name: item.name,
        industry_id: item.industry_id.toString(),
      })),
      activeName: tabRes.data[0].industry_id.toString(),
      slideData: slideRes.data,
      cardData: cardRes.data.data,
      newsData: newsRes.data,
      hotArticleData: hotRes.data,
      hotTopicData: topicRes.data,
      hotVideoData: videoRes.data,
      hotWordData: wordRes.data,
    }
  },
  head() {
    return {
      title: '资讯',
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
  },
  methods: {
    async handleChange() {
      const { data } = await this.$axios.get(
        `industry/${this.activeName}/articles`
      )
      this.cardData = data.data
    },
  },
}
</script>
<style lang="scss" scoped>
.el-tab-wrap {
  background-color: $primary-color;
  padding-left: 30px;
  border-radius: 7px;
  height: 56px;
  box-sizing: border-box;
  ::v-deep .el-tabs__header {
    margin-bottom: 0;
    .el-tabs__item {
      color: #fff;
      font-weight: normal;
      font-size: 17px;
    }
    .el-tabs__active-bar.is-top {
      background-color: #fff;
    }
  }
  ::v-deep .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
}
</style>
