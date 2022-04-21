<template>
  <div class="news-list-wrapper">
    <div>
      <div class="time text-sm flex align-center">
        <span class="dot"></span>
        {{ data.publish_time }}
      </div>
      <div class="title text-lg">
        <NuxtLink :to="'news/' + data.flash_new_id">
          {{ data.title }}
        </NuxtLink>
      </div>
      <div class="main text-df">{{ data.content }}</div>
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
        return {
          flash_new_id: '',
          content: '',
          img: '',
          publish_time: '',
          title: '',
        }
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
    color: $gray-color;
  }
  .title {
    margin-top: 14px;
  }
  a {
    // text-decoration: none;
    color: #2a2a2a;
    &:hover {
      color: $primary-color;
    }
  }
  .main {
    color: #666;
    margin-top: 13px;
    margin-bottom: 66px;
    line-height: 30px;
  }
}
</style>
