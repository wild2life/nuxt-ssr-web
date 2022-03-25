<template>
  <div class="news-card-wrapper">
    <!-- <div class="news-card-header flex justify-between align-center">
      <p class="title flex align-center text-xl">
        <img src="~/assets/image/news.png" />
        快讯
      </p>
      <span class="text-lg">查看更多<i class="el-icon-arrow-right"></i></span>
    </div> -->
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
          <span class="dot"></span><span class="date">{{ item.date }}</span>
        </p>
        <p class="text-lg">{{ item.name }}</p>
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
}
</script>

<style lang="scss" scoped>
.news-card-wrapper {
  border-radius: 4px;
  box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
  padding: 10px;
  // .news-card-header {
  //   display: flex;
  //   border-bottom: 2px solid #f8f8f8;
  //   height: 60px;
  //   span {
  //     color: #666;
  //   }
  // }
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
