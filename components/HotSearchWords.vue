<template>
  <div
    class="hot-words-wrapper"
    :class="{
      'box-shadow': !isMobile,
      'border-radius': !isMobile,
      'padding-lr': isMobile,
      'padding-tb-sm': !isMobile,
      'margin-top': isMobile,
      'mobile-hot-words-wrapper': isMobile,
    }"
  >
    <CommonCardHeader
      v-if="!isMobile"
      title="热搜词"
      :src="require('~/assets/image/news.png')"
      class="margin-lr-sm"
    ></CommonCardHeader>
    <div
      class="hot-words-cont flex"
      :class="{
        'padding-lr-sm': !isMobile,
        'padding-bottom': !isMobile,
        'flex-wrap': !isMobile,
      }"
    >
      <div v-for="item in data" :key="item.hotword_id">
        <span
          :class="{ 'margin-top-xl': !isMobile }"
          class="hot-words-item cursor-pointer text-lg padding-tb-sm padding-lr-lg"
          >{{ item.name }}</span
        >
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
.mobile-hot-words-wrapper {
  width: 100vw;
  .hot-words-cont {
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .hot-words-item {
    background-color: #f2f2f2;
    color: #2a2a2a;
  }
}
.hot-words-item {
  display: inline-block;
  border: 1px solid #e2e2e2;
  border-radius: 50px;
  margin-right: 4px;
  &:hover {
    border-color: $primary-color;
    background-color: $primary-color;
    color: #fff;
  }
}
</style>
