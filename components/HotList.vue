<template>
  <div
    class="news-card-wrapper box-shadow border-radius padding-sm"
    :class="{ 'margin-lr': isMobile, 'margin-top-lg': isMobile }"
  >
    <CommonCardHeader
      title="24小时热榜"
      :src="require('~/assets/image/news.png')"
      route-name="/info"
    ></CommonCardHeader>
    <div class="news-card-cont">
      <div>
        <div class="first cursor-pointer">
          <NuxtLink :to="'article/' + data[0].article_id">
            <img :src="data[0].img" alt="" />
            <span class="title text-lg">{{ data[0].title }}</span>
            <div class="dot">
              <img src="~/assets/image/dotBg.png" alt="" />
              <span>1</span>
            </div>
          </NuxtLink>
        </div>
        <div class="second flex margin-top">
          <img :src="data[1].img" alt="" />
          <span class="title margin-left-sm margin-top-sm">
            <NuxtLink :to="'article/' + data[1].article_id">{{
              data[1].title
            }}</NuxtLink>
          </span>
          <div class="dot">
            <img src="~/assets/image/dotBg.png" alt="" />
            <span>2</span>
          </div>
        </div>
        <div class="third flex margin-top">
          <img :src="data[2].img" alt="" />
          <span class="title margin-left-sm margin-top-sm">
            <NuxtLink :to="'article/' + data[2].article_id">{{
              data[2].title
            }}</NuxtLink>
          </span>
          <div class="dot">
            <img src="~/assets/image/dotBg.png" alt="" />
            <span>3</span>
          </div>
        </div>

        <div class="other flex margin-top align-center">
          <div class="dot flex align-center justify-center">4</div>
          <span class="title margin-left-sm">
            <NuxtLink :to="'article/' + data[3].article_id">{{
              data[3].title
            }}</NuxtLink></span
          >
        </div>

        <div class="other flex margin-top align-center">
          <div class="dot flex align-center justify-center">5</div>
          <span class="title margin-left-sm">
            <NuxtLink :to="'article/' + data[4].article_id">{{
              data[4].title
            }}</NuxtLink></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HotList',
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
.news-card-wrapper {
  .news-card-cont {
    padding: 15px 20px;
    .first {
      // width: 320px;
      height: 211px;
      position: relative;
      &:hover {
        .title {
          color: $primary-color;
        }
      }
      .dot {
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        width: 25px;
        height: 25px;
        > span {
          position: absolute;
          top: 4px;
          left: 8px;
        }
      }
      .title {
        color: #fff;
        position: absolute;
        left: 8px;
        bottom: 8px;
        right: 8px;
      }
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
        border-radius: 5px;
      }
    }
    .second,
    .third {
      position: relative;
      > img {
        width: 117px;
        height: 76px;
        display: inline-block;
        border-radius: 5px;
      }
      .dot {
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        width: 25px;
        height: 25px;
        > span {
          position: absolute;
          top: 4px;
          left: 8px;
        }
      }
    }

    .other {
      .dot {
        width: 25px;
        height: 25px;
        background: #ccc;
        border-radius: 5px;
      }
    }
  }
}
</style>
