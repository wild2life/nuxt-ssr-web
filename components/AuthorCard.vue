<template>
  <div
    class="news-card-wrapper flex flex-direction align-center box-shadow border-radius padding-tb"
  >
    <img v-if="data.img" :src="data.img" :alt="data.description" />
    <div class="padding-tb text-xl">{{ data.name }}</div>
    <div class="text-lg color-666">
      共<span>{{ data.article_count }}</span
      >篇文章
    </div>
    <div v-if="data.description" class="color-999 padding-top text-lg">
      {{ data.description }}
    </div>
    <NuxtLink
      class="text-lg padding-tb padding-lr-lg"
      :to="'/author/' + data.author_id"
    >
      <span class="more margin-top">阅读我的更多文章</span>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  name: 'Author',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          article_count: '',
          author_id: '',
          description: '',
          img: '',
          name: '',
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.news-card-wrapper {
  img {
    width: 118px;
    height: 118px;
    border-radius: 50%;
  }
  span {
    color: $primary-color;
  }
  .more {
    display: block;
    height: 48px;
    line-height: 48px;
    text-align: center;
    width: 181px;
    border: 1px solid $primary-color;
    border-radius: 30px;
  }
}
</style>
