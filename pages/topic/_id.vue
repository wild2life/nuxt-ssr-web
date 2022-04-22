<template>
  <div class="topic-container padding-bottom-lg">
    <el-row>
      <el-col :xs="24" :sm="24" :md="16">
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
            :class="{ 'margin-right': !isMobile && (index + 1) % 3 }"
          ></InfoCard>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8">
        <div
          class="margin-top-lg flex flex-direction align-center box-shadow border-radius padding-tb"
        >
          <img :src="topic.cover" />
          <div class="padding-tb text-xl">{{ topic.title }}</div>
          <div class="text-lg color-666">
            {{ topic.introduction }}
          </div>
          <div v-if="topic.publish_time" class="color-999 padding-top text-lg">
            {{ topic.publish_time }}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TopicId',
  layout: 'default',
  async asyncData({ app, route }) {
    const { $axios, store } = app
    const [cardRes, layout] = await Promise.all([
      $axios.get(`topics/${route.params.id}/articles`),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      list: cardRes.data.topic.articles.map((item) => {
        return {
          ...item,
          img: item.img || item.thumbnail,
        }
      }),
      topic: cardRes.data.topic,
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
}
</script>
