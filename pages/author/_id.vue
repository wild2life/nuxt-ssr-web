<template>
  <div class="topic-container padding-bottom-lg">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
        <div
          class="flex flex-wrap"
          :class="{
            'flex-wrap': !isMobile,
            'flex-direction': isMobile,
            'box-shadow': isMobile,
            'border-radius': isMobile,
            'margin-lr': isMobile,
            width: !isMobile,
          }"
        >
          <InfoCard
            v-for="(item, index) in list"
            :key="index"
            :data="item"
            :class="{ 'margin-right': !isMobile && (index + 1) % 4 }"
          ></InfoCard>
        </div>
        <infinite-loading
          v-if="list.length"
          spinner="bubbles"
          @infinite="infiniteScroll"
        >
          <span slot="no-more" class="padding-top"> 已经没有啦~~ </span>
          <span slot="no-results" class="padding-top"> 暂无数据~~ </span>
        </infinite-loading>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AuthorId',
  layout: 'default',
  async asyncData({ app, route }) {
    const { $axios } = app
    const [cardRes] = await Promise.all([
      $axios.get(`author/${route.params.id}/articles`),
    ])
    return {
      list: cardRes.data.articles.data,
      total: cardRes.data.articles.total,
      author: cardRes.data.author,
      page: 1,
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
  },
  methods: {
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++
        this.$axios
          .get(`topics?page=${this.page}`)
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
<style lang="scss" scoped>
.width .info-card-wrapper {
  width: 285px;
  img {
    width: 246px;
    height: 168px;
    margin: 12px 20px;
  }
  .title,
  .desc {
    padding: 0 12px;
  }
}
</style>
