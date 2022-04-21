<template>
  <div class="topic-container padding-bottom-lg">
    专题详情-文章
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
        v-for="(item, index) in list.articles"
        :key="index"
        :data="item"
        :class="{ 'margin-right-lg': !isMobile && (index + 1) % 4 }"
      ></InfoCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  async asyncData({ app, route }) {
    const { $axios } = app
    const [cardRes] = await Promise.all([
      $axios.get(`topics/${route.params.id}/articles`),
    ])
    return {
      list: cardRes.data.topic,
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
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
