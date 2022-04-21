<template>
  <div
    class="video-card-wrapper box-shadow border-radius padding-sm"
    :class="{ 'margin-top-lg': isMobile, 'margin-lr': isMobile }"
  >
    <CommonCardHeader
      route-name="/video"
      title="热门视频"
      :src="require('~/assets/image/video.png')"
    ></CommonCardHeader>

    <div class="video-card-cont">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="flex margin-top-lg"
      >
        <div class="video-card-cont-left">
          <span class="dot text-center">{{ index + 1 }}</span>
          <img :src="item.img" alt="" class="bg-img" />
          <img
            :src="require('~/assets/image/video.png')"
            alt=""
            class="video-icon cursor-pointer"
          />
        </div>
        <div
          class="title cursor-pointer video-card-cont-right text-cut-l3 flex align-center"
        >
          <NuxtLink :to="'video/' + item.video_id">{{ item.title }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HotVideos',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  computed: {
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
  },
}
</script>

<style lang="scss" scoped>
.video-card-wrapper {
  .video-card-cont {
    padding: 0 10px 10px;

    &-left {
      width: 115px;
      height: 76px;
      position: relative;
      img.bg-img {
        width: 115px;
        height: 76px;
        border-radius: 5px;
      }
      img.video-icon {
        width: 22px;
        height: 22px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        top: 50%;
      }
      .dot {
        position: absolute;
        color: #fff;
        width: 25px;
        height: 25px;
        background-color: $primary-color;
        border-radius: 10px 2px 10px 2px;
        line-height: 25px;
      }
    }

    &-right {
      margin-left: 12px;
      line-height: 24px;
    }
  }
}
</style>
