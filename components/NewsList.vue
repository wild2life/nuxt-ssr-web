<template>
  <div class="news-list-wrapper">
    <div>
      <div class="time text-sm flex align-center">
        <span class="dot"></span>
        {{ data.time }}
      </div>
      <div class="title text-lg">{{ data.title }}</div>
      <div class="main text-df">{{ data.main }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsList',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.news-list-wrapper {
  .dot {
    display: inline-block;
    background: $primary-color;
    width: 8px;
    height: 8px;
    margin-right: 15px;
  }
  .time {
    color: #999;
  }
  .title {
    color: #2a2a2a;
    margin-top: 14px;
  }
  .main {
    color: #666;
    margin-top: 13px;
    margin-bottom: 66px;
    line-height: 30px;
  }
}
</style>
