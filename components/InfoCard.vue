<template>
  <div
    class="cursor-pointer"
    :class="{
      'mobile-info-card-wrapper': isMobile,
      'info-card-wrapper': !isMobile,
      'margin-top-lg': !isMobile,
    }"
  >
    <div v-if="isMobile" class="flex margin-lr padding-lr-xs padding-tb-lg">
      <NuxtLink :to="'/article/' + data.article_id">
        <img :src="data.img" alt="" class="margin-left-sm" />
        <div
          class="flex flex-direction justify-between margin-right-sm flex-sub padding-left padding-tb-xs"
        >
          <div class="text-lg">
            <span v-if="data.author" class="margin-right-xs">{{
              data.author
            }}</span
            >{{ data.title }}
          </div>
          <div>{{ data.publish_time }}</div>
        </div>
      </NuxtLink>
    </div>
    <div v-else>
      <NuxtLink :to="'/article/' + data.article_id">
        <img :src="data.img" alt="" />
        <div class="title text-lg">{{ data.title }}</div>
        <div class="desc text-sm">{{ data.introduction }}</div>
        <div class="date text-sm">
          <span v-if="data.author">{{ data.author }} | </span>
          {{ data.publish_time }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoCard',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          article_id: '',
          img: '',
          title: '',
          introduction: ' ',
          publish_time: '',
          author: '',
          author_id: '',
        }
      },
    },
  },
  computed: {
    device() {
      return this.$store.state.setting.device
    },
    isMobile() {
      return this.device === 'mobile'
    },
  },
}
</script>

<style lang="scss" scoped>
.info-card-wrapper {
  width: 250px;
  background-color: #f8f8f8;
  border-radius: 4px;
  position: relative;
  border: 2px solid transparent;
  padding-bottom: 30px;

  &:hover {
    border-color: $primary-color;
    .title {
      color: $primary-color;
    }
  }

  img {
    width: 216px;
    height: 146px;
    display: inline-block;
    border-radius: 2px;
    margin: 12px 17px;
  }

  .title,
  .desc {
    padding: 0 9px;
  }

  .desc {
    color: #666666;
  }

  .date {
    color: $gray-color;
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 9px;
  }
}

.mobile-info-card-wrapper:not(:last-of-type) > div {
  border-bottom: 1px solid #fef0e6;
}
.mobile-info-card-wrapper {
  width: 100%;
  img {
    width: 182px;
    height: 122px;
    border-radius: 10px;
  }
  span {
    background-color: $primary-color;
    color: #fff;
    padding: 4px 6px;
    border-radius: 6px;
  }
}
</style>
