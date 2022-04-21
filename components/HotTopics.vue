<template>
  <div
    class="news-card-wrapper box-shadow border-radius padding-sm"
    :class="{ 'margin-lr': isMobile, 'margin-top-lg': isMobile }"
  >
    <CommonCardHeader
      route-name="/topic"
      title="热门专题"
      :src="require('~/assets/image/news.png')"
    ></CommonCardHeader>
    <div class="news-card-cont flex align-center flex-direction">
      <NuxtLink :to="'topic/' + data[0].topic_id">
        <img :src="data[0].img" alt="" />
        <div class="text-df text-cut-l2 cursor-pointer title">
          {{ data[0].title }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HotTopics',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  computed: {
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
  },
}
</script>

<style lang="scss" scoped>
.news-card-wrapper {
  .news-card-cont {
    padding: 0 15px;
    div {
      line-height: 40px;
    }
    img {
      // width: 340px;
      width: 100%;
      height: 225px;
      display: inline-block;
    }
    a:hover {
      .title {
        color: $primary-color;
      }
    }
  }
}
</style>
