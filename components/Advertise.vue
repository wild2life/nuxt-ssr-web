<template>
  <div class="news-card-wrapper">
    <img :src="advertise.img" :alt="advertise.title" @click="jump" />
  </div>
</template>
<script>
export default {
  name: 'Advertise',
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
$height: 260px;
.news-card-wrapper {
  height: $height;
  img {
    width: 100%;
    height: $height;
  }
}
</style>
