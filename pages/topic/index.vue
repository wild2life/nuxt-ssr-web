<template>
  <div class="topic-container padding-bottom-lg">
    <div class="flex flex-wrap">
      <TopicCard
        v-for="(item, index) in list"
        :key="index"
        :data="item"
        :style="{ marginRight: (index + 1) % 4 ? '20px' : '0' }"
      ></TopicCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios } = app
    const [cardRes] = await Promise.all([$axios.get('topics')])
    return {
      list: cardRes.data.data,
      total: cardRes.data.total,
    }
  },
  head() {
    return {
      title: '专题',
    }
  },
}
</script>
