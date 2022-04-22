<template>
  <div class="index-container padding-bottom">
    <el-row v-if="isMobile">
      <el-col :span="24">
        <HotSearchWords :data="hotWordData"></HotSearchWords>
      </el-col>
    </el-row>
    <el-row class="margin-top" :class="{ 'margin-lr': isMobile }">
      <el-col :span="!isMobile ? 12 : 24">
        <el-carousel
          :height="!isMobile ? '399px' : '360px'"
          :interval="3000"
          arrow="always"
        >
          <el-carousel-item v-for="(item, index) in slideData" :key="index">
            <img
              :src="item.img"
              alt=""
              style="width: 100%; height: 100%"
              class="cursor-pointer"
              @click="open(item.link)"
            />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col v-if="!isMobile" :span="6" class="padding-left-sm">
        <div class="flex flex-direction justify-between">
          <img :src="lastData[0].img" alt="" style="height: 194px" />
          <img
            :src="lastData[2].img"
            alt=""
            class="margin-top-sm"
            style="height: 194px"
          />
        </div>
      </el-col>
      <el-col v-if="!isMobile" :span="6" class="padding-left-sm">
        <div class="flex flex-direction justify-between">
          <img :src="lastData[1].img" alt="" style="height: 194px" />
          <img
            :src="lastData[3].img"
            alt=""
            class="margin-top-sm"
            style="height: 194px"
          />
        </div>
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
          <infinite-loading
            v-if="cardData.length"
            spinner="bubbles"
            :identifier="infiniteId"
            @infinite="infiniteScroll"
          >
          </infinite-loading>
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
        <Advertise class="margin-top-lg"></Advertise>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios, store } = app
    const [
      tabRes,
      slideRes,
      newsRes,
      hotRes,
      videoRes,
      topicRes,
      wordRes,
      layout,
    ] = await Promise.all([
      $axios.get('industry'),
      $axios.get('slide'),
      $axios.get('side_flash_news'),
      $axios.get('side_hot_articles'),
      $axios.get('side_hot_videos'),
      $axios.get('side_hot_topics'),
      $axios.get('side_hot_words'),
      $axios.get('layout'),
    ])
    const cardRes = await $axios.get(
      `industry/${tabRes.data[0].industry_id}/articles`
    )
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      list: tabRes.data.map((item) => ({
        name: item.name,
        industry_id: item.industry_id.toString(),
      })),
      activeName: tabRes.data[0].industry_id.toString(),
      slideData: slideRes.data.slice(0, slideRes.data.length - 4),
      lastData: slideRes.data.slice(-4),
      cardData: cardRes.data.data,
      newsData: newsRes.data,
      hotArticleData: hotRes.data,
      hotTopicData: topicRes.data,
      hotVideoData: videoRes.data,
      hotWordData: wordRes.data,
      page: 1,
      infiniteId: +new Date(),
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
  computed: {
    layout() {
      return this.$store.state.setting.layout
    },
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
  },
  methods: {
    open(link) {
      window.open(link, '_blank')
    },
    async handleChange() {
      this.infiniteId += 1
      this.page = 1
      this.cardData = []
      const { data } = await this.$axios.get(
        `industry/${this.activeName}/articles?page=${this.page}`
      )
      this.cardData = data.data
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++ // next page
        this.$axios
          .get(`industry/${this.activeName}/articles?page=${this.page}`)
          .then((resp) => {
            if (resp.data.data.length > 1) {
              resp.data.data.forEach((item) => this.cardData.push(item))
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
.card-wrap {
  height: 2700px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .infinite-loading-container {
    margin: 0 auto;
    color: $primary-color;
  }
}
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
