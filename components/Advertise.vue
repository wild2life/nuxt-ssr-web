<template>
  <div class="news-card-wrapper">
    <img :src="data.img" :alt="data.title" @click="jump" />
  </div>
</template>
<script>
export default {
  name: 'Advertise',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          img: '',
          link: '',
          title: '',
        }
      },
    },
  },
  methods: {
    jump() {
      window.open(this.data.link)
    },
  },
}
</script>

<style lang="scss" scoped>
$height: 260px;
.news-card-wrapper {
  height: $height;
  img {
    width: 100%;
    height: $height;
  }
}
</style>
