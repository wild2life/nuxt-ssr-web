<template>
  <div
    class="news-card-wrapper box-shadow border-radius padding-sm"
    :class="{ 'margin-lr': isMobile, 'margin-top-lg': isMobile }"
  >
    <CommonCardHeader
      title="快讯"
      :src="require('~/assets/image/news.png')"
    ></CommonCardHeader>
    <div class="news-card-cont">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="news-card-cont-item"
      >
        <p class="flex align-center">
          <span class="dot"></span
          ><span class="date">{{ item.publish_time }}</span>
        </p>
        <p class="text-lg">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoCard',
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
  .dot {
    display: inline-block;
    background: $primary-color;
    width: 8px;
    height: 8px;
    margin-right: 15px;
  }
  .news-card-cont {
    padding: 0 4px;
  }
  img {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin: 0 4px;
  }
  .date {
    color: $gray-color;
  }
}
</style>
