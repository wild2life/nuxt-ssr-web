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
        <DataCard
          :data="cardData"
          class="padding-top-lg margin-right-lg"
        ></DataCard>
        <infinite-loading
          v-if="cardData.length"
          spinner="bubbles"
          :identifier="infiniteId"
          @infinite="infiniteScroll"
        >
          <span slot="no-more" class="padding-top"> 已经没有啦~~ </span>
          <span slot="no-results" class="padding-top"> 暂无数据~~ </span>
        </infinite-loading>
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :class="{ 'margin-top': !isMobile, 'pc-card-wrap': !isMobile }"
      >
        <HotList :data="hotArticleData"></HotList>
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
    const { $axios, store } = app
    const [tabRes, hotRes, videoRes, layout] = await Promise.all([
      $axios.get('industry'),
      $axios.get('side_hot_articles'),
      $axios.get('side_hot_videos'),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    const cardRes = await $axios.get(
      `seek/industry/${tabRes.data[0].industry_id}/articles`
    )
    return {
      list: tabRes.data.map((item) => ({
        name: item.name,
        industry_id: item.industry_id.toString(),
      })),
      activeName: tabRes.data[0].industry_id.toString(),
      cardData: cardRes.data.data,
      hotArticleData: hotRes.data,
      hotVideoData: videoRes.data,
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
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
  },
  methods: {
    async handleChange() {
      this.page = 1
      this.infiniteId += 1
      this.cardData = []
      const { data } = await this.$axios.get(
        `seek/industry/${this.activeName}/articles`
      )
      this.cardData = data.data
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++ // next page
        this.$axios
          .get(`seek/industry/${this.activeName}/articles?page=${this.page}`)
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
.data-card-wrapper {
  height: 1173px - 60px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
