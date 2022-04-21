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
        @click="jump(item.link)"
      ></ActivityCard>
    </div>
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
