<template>
  <div class="hot-words-wrapper">
    <CommonCardHeader
      title="热搜词"
      :src="require('~/assets/image/news.png')"
    ></CommonCardHeader>
    <div class="hot-words-cont flex-wrap flex">
      <div v-for="(item, index) in data" :key="index">
        <span class="hot-words-item cursor-pointer text-lg">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HotSearchWords',
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          '热搜词',
          '新超过产业',
          '消费升级',
          '热搜词',
          '热搜词',
          '热搜词',
          '热搜词',
        ]
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.hot-words-wrapper {
  border-radius: 4px;
  box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
  padding: 10px 0;
  .common-card-header {
    margin: 0 10px;
  }
  .hot-words-cont {
    padding: 0 4px 10px;
    .hot-words-item {
      padding: 10px 20px;
      display: inline-block;
      border: 1px solid#E2E2E2;
      border-radius: 50px;
      margin: 25px 4px 0;
      &:hover {
        border-color: $primary-color;
        background-color: $primary-color;
        color: #fff;
      }
    }
  }
}
</style>
