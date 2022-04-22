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
        <infinite-loading
          v-if="list.length"
          spinner="bubbles"
          @infinite="infiniteScroll"
        >
        </infinite-loading>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8">
        <HotList :data="hotArticleData"></HotList>
        <HotVideos class="margin-top-lg" :data="hotVideoData"></HotVideos>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  layout: 'default',
  async asyncData({ app, query }) {
    const { $axios, store } = app
    const [hotRes, videoRes, searchRes, layout] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('side_hot_videos'),
      $axios.get(`search/${query.search}`),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      total: searchRes.data.total,
      list: searchRes.data.data.map((item) => ({
        ...item,
        tags: item.tags.split(','),
      })),
      hotArticleData: hotRes.data,
      hotVideoData: videoRes.data,
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
  watchQuery: ['search'],
  methods: {
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++ // next page
        this.$axios
          .get(`search/${this.search}?page=${this.page}`)
          .then((resp) => {
            if (resp.data.data.length > 1) {
              resp.data.data.forEach((item) =>
                this.list.push({
                  ...item,
                  tags: item.tags.split(','),
                })
              )
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
