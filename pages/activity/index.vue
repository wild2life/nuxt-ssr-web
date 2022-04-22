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
      <ActivityCard
        v-for="(item, index) in data"
        :key="index"
        :data="item"
        :class="{ 'margin-right-lg': !isMobile && (index + 1) % 4 }"
      ></ActivityCard>
    </div>
    <infinite-loading
      v-if="data.length"
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
  name: 'ActivityPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios } = app
    const { data } = await $axios.get('activities')
    return {
      total: data.total,
      data: data.data,
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
          .get(`activities?page=${this.page}`)
          .then((resp) => {
            if (resp.data.data.length > 1) {
              resp.data.data.forEach((item) => this.data.push(item))
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
