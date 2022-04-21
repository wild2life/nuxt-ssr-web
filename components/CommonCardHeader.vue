<template>
  <div class="common-card-header flex justify-between align-center">
    <p class="title flex align-center text-xl">
      <img :src="src" />
      {{ title }}
    </p>
    <span v-if="!hiddenJumpBtn" class="text-lg"
      ><NuxtLink :to="routeName">
        查看更多<i class="el-icon-arrow-right"></i></NuxtLink
    ></span>
  </div>
</template>
<script>
export default {
  name: 'CommonCardHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: require('~/assets/image/news.png'),
    },
    routeName: {
      type: String,
      default: '/info',
    },
    hiddenJumpBtn: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.common-card-header {
  border-bottom: 2px solid #f8f8f8;
  height: 60px;
  a {
    color: #666;
    &:hover {
      color: $primary-color;
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
