<template>
  <div
    class="news-card-wrapper flex flex-direction align-center box-shadow border-radius padding-tb"
  >
    <img :src="advertise.img" :alt="advertise.title" @click="jump" />
    <div class="padding-tb text-xl">{{ data.name }}</div>
    <div class="text-lg color-666">
      共<span>{{ data.article_count }}</span
      >篇文章
    </div>
    <div v-if="data.description" class="color-999 padding-top text-lg">
      {{ data.description }}
    </div>
    <span class="more margin-top">
      阅读我的更多文章
      <!-- <NuxtLink class="text-lg padding-tb padding-lr-lg">阅读我的更多文章</NuxtLink> -->
    </span>
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
          article_count: 66,
          author_id: 7,
          description: '233232323',
          img: '',
          name: '靳庄',
        }
      },
    },
  },
  computed: {
    advertise() {
      return this.$store.state.setting.advertise
    },
  },
  methods: {
    jump() {
      window.open(this.advertise.link)
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
