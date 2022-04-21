<template>
  <div class="search-container">
    <div class="title margin-top-lg">
      <span class="margin-left-lg">为你搜到以下内容</span>
    </div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="16">
        <DataCard
          :data="list"
          class="padding-top-lg margin-right-lg"
        ></DataCard>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8">
        <HotList :data="hotArticleData"></HotList>
        <HotVideos class="margin-top-lg" :data="hotVideoData"></HotVideos>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchPage',
  layout: 'default',
  async asyncData({ app, query }) {
    const { $axios } = app
    const [hotRes, videoRes, searchRes] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('side_hot_videos'),
      $axios.get(`search/${query.search}`),
    ])
    return {
      total: searchRes.data.total,
      list: searchRes.data.data.map((item) => ({
        ...item,
        tags: item.tags.split(','),
      })),
      hotArticleData: hotRes.data,
      hotVideoData: videoRes.data,
    }
  },
  computed: {
    path() {
      return this.$route.path
    },
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
    search() {
      return this.$route.query.search
    },
  },
  watch: {
    search() {
      this.loadData()
    },
  },
  mounted() {},
  methods: {
    async loadData() {
      const { data } = await axios.get(`api/search/${this.search}`)
      this.total = data.data.total
      this.list = data.data.data.map((item) => ({
        ...item,
        tags: item.tags.split(','),
      }))
    },
  },
}
</script>
<style lang="scss" scoped>
.search-container {
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
