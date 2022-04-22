<template>
  <div class="topic-container padding-bottom-lg">
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
      <TopicCard
        v-for="(item, index) in list"
        :key="index"
        :data="item"
        :class="{ 'margin-right-lg': !isMobile && (index + 1) % 4 }"
      ></TopicCard>
    </div>
    <infinite-loading
      v-if="list.length"
      spinner="bubbles"
      @infinite="infiniteScroll"
    >
      <span slot="no-more" class="padding-top"> 已经没有啦~~ </span>
      <span slot="no-results" class="padding-top"> 暂无数据~~ </span>
    </infinite-loading>
  </div>
</template>

<script>
export default {
  name: 'TopicPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios, store } = app
    const [cardRes, layout] = await Promise.all([
      $axios.get('topics'),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      list: cardRes.data.data,
      total: cardRes.data.total,
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
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
  },
  methods: {
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++ // next page
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
