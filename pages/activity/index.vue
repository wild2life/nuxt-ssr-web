<template>
  <div class="topic-container padding-bottom-lg">
    <div class="flex flex-wrap">
      <TopicCard
        v-for="(item, index) in data"
        :key="index"
        :data="item"
        :style="{ marginRight: (index + 1) % 4 ? '20px' : '0' }"
      ></TopicCard>
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
  head() {
    return {
      title: '活动',
    }
  },
}
</script>
