<template>
  <div class="info-card-wrapper cursor-pointer">
    <div class="img-wrapper" @click="handleClick">
      <img :src="data.img" alt="" class="bg" />
      <img img="~/assets/image/video.png" class="icon-play" />
    </div>
    <div class="title">
      {{ data.title }}
    </div>
    <div class="desc">{{ data.introduction }}</div>
    <div class="date text-sm">{{ data.publish_time }}</div>
  </div>
</template>
<script>
export default {
  name: 'VideoCard',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          video_id: '',
          img: '',
          title: ' ',
          introduction: '',
          publish_time: '',
        }
      },
    },
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: '/video/detail',
        query: { video_id: this.data.video_id },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.info-card-wrapper {
  width: 250px;
  background-color: #f8f8f8;
  margin-top: 20px;
  border-radius: 4px;
  height: 272px;
  border: 2px solid transparent;
  &:hover {
    border-color: $primary-color;
  }
  .img-wrapper {
    width: 216px;
    height: 146px;
    margin: 12px 17px;
    position: relative;
  }
  img.bg {
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 2px;
  }
  img.icon-play {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    z-index: 10;
  }
  .title,
  .date,
  .desc {
    padding: 0 9px;
  }
  .title {
    font-size: 17px;
  }
  .desc {
    font-size: 15px;
    color: #666666;
  }
  .date {
    color: $gray-color;
    padding-top: 40px;
    text-align: right;
  }
}
</style>
