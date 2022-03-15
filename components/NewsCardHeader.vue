<template>
  <div class="news-card-header flex justify-between align-center">
    <p class="title flex align-center text-xl">
      <img :src="src" />
      {{ title }}
    </p>
    <span class="text-lg">查看更多<i class="el-icon-arrow-right"></i></span>
  </div>
</template>
<script>
export default {
  name: 'InfoCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '~/assets/image/news.png',
    },
  },
}
</script>

<style lang="scss" scoped>
.news-card-wrapper {
  border-radius: 4px;
  box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
  padding: 10px;
  .news-card-header {
    display: flex;
    border-bottom: 2px solid #f8f8f8;
    height: 60px;
    span {
      color: #666;
    }
  }
  img {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin: 0 4px;
  }
}
</style>
