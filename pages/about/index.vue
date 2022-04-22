<template>
  <div class="about-container">
    <div class="banner">
      <div class="banner-title">{{ layout.title }}</div>
      <div class="banner-desc text-df">
        {{ layout.description }}
      </div>
    </div>
    <div class="about-main flex">
      <div class="about-main-left text-center">
        <div
          v-for="tab in tabList"
          :key="tab.value"
          :class="{ actived: tab.value === active }"
          class="tab-item text-xxl cursor-pointer"
          @click="handleClick(tab.value)"
        >
          {{ tab.label }}
        </div>
      </div>
      <div v-if="active === 1" class="about-main-right">
        <div class="flex main1">
          <div class="left padding-top-lg">
            <div class="text-xxl margin-top-lg text-bold margin-bottom-lg">
              目前已入驻：
            </div>
            <p class="text-df padding-top-lg text-content">
              <span
                v-for="(item, index) in layout.links"
                :key="index"
                class="cursor-pointer"
                @click="open(item.url)"
                >{{ item.name }}
                <b v-if="index !== layout.links.length - 1">、</b>
              </span>
            </p>
          </div>
          <div class="right flex-sub">
            <div class="img-bg"></div>
            <img src="~/assets/image/about/img1.png" alt="" />
          </div>
        </div>

        <div class="flex main2">
          <div class="left">
            <div class="img-bg"></div>
            <img src="~/assets/image/about/img2.png" alt="" />
          </div>
          <div class="right text-center margin-top-lg margin-bottom-xs">
            <div class="text-xl text-bold">爆料、寻求报道：</div>
            <div class="text-xl margin-top-lg">yangyu@yilantop.com</div>
            <div class="text-xl text-bold margin-top-lg">稿件处理：</div>
            <div class="text-xl margin-top-lg">dongye@yilantop.com</div>
            <div class="text-xl text-bold margin-top-lg">市场合作：</div>
            <div class="text-xl margin-top-lg">tonghuiguang@yilantop.com</div>
          </div>
        </div>
      </div>

      <div v-if="active === 2" class="join-main-right margin-left-lg flex-sub">
        <div class="card-wrapper">
          <div
            v-for="(card, index) in list"
            :key="index"
            class="card-main"
            :class="{ 'margin-bottom-lg': index !== list.length - 1 }"
          >
            <div v-if="!index" class="title">
              <div class="flex align-center margin-left-lg">/ 招聘职位 /</div>
              <p>简历发至：dongye@yilantop.com</p>
            </div>
            <h1>{{ card.name }}</h1>
            <span class="line"></span>
            <div class="text-lg text-content" v-html="card.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios, store } = app
    const [{ data }, layout] = await Promise.all([
      $axios.get('recruits'),
      $axios.get('layout'),
    ])
    store.commit('setting/SET_LAYOUT', layout.data)
    return {
      list: data,
      layout: layout.data,
    }
  },
  data() {
    return {
      tabList: [
        {
          label: '关于我们',
          value: 1,
        },
        {
          label: '加入我们',
          value: 2,
        },
      ],
      active: 1,
    }
  },
  head() {
    return {
      title: this.layout.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.layout.description,
        },
        { hid: 'keyword', name: 'keyword', content: this.layout.keyword },
      ],
    }
  },
  methods: {
    handleClick(value) {
      this.active = value
    },
    open(url) {
      window.open(url)
    },
  },
}
</script>
<style lang="scss" scoped>
$img1-width: 419px;
$img1-height: 291px;
$img1-space: 5px;
$img2-width: 320px;
$img2-height: 379px;
$img2-space: 15px;

.about-container {
  width: 100%;
}

.banner {
  height: 650px;
  background: url('@/assets/image/about/banner.png') no-repeat;
  background-size: 100% 100%;
  color: #fff;
  text-align: center;

  &-title {
    font-size: 50px;
    padding-top: 200px;
  }

  &-desc {
    margin-top: 58px;
  }
}

.about-main {
  width: $container-width;
  padding: 20px 0;
  margin: 0 auto;

  &-left {
    box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
    border-radius: 5px;
    width: 410px;

    .tab-item {
      color: #999;
      margin-top: 64px;
    }

    .actived {
      font-weight: bold;
      color: #333;
      border-right: 3px solid $primary-color;
    }
  }

  &-right {
    padding: 60px 0;

    .main1 {
      .left {
        width: 280px;
        margin: 0 40px;
      }

      .right {
        width: $img1-width + $img1-space;
        height: $img1-height + $img1-space;
        position: relative;

        img {
          position: absolute;
          z-index: 2;
        }

        .img-bg {
          background: $primary-color;
          position: absolute;
          right: -5px;
          bottom: -$img1-space;
          width: $img1-width;
          height: $img1-height;
          box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
        }
      }
    }

    .main2 {
      margin-top: 130px;

      .left {
        margin-left: 40px;
        width: $img2-width + $img2-space;
        height: $img2-height - $img2-space;
        position: relative;

        img {
          position: absolute;
          z-index: 2;
        }

        .img-bg {
          background: $primary-color;
          position: absolute;
          right: -$img2-space;
          left: -$img2-space;
          bottom: $img2-space;
          top: $img2-space;
          width: $img2-width + $img2-space + $img2-space;
          height: $img2-height - $img2-space - $img2-space;
        }
      }

      .right {
        flex: 1;
        box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
        border-radius: 5px;
        padding-top: 45px;
      }
    }
  }
}

.join-main-right {
  .card-main {
    box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
    border-radius: 5px;
    padding: 20px;

    .title {
      padding-bottom: 20px;

      > p {
        margin-left: 195px;
      }

      > div {
        position: relative;
        margin-left: 136px;

        &::before {
          width: 30px;
          height: 1px;
          background: #999;
          position: absolute;
          content: '';
          left: -40px;
        }

        &::after {
          width: 82%;
          height: 1px;
          background: #999;
          position: absolute;
          content: '';
          right: 0;
        }
      }
    }
  }

  .line {
    width: 60px;
    height: 3px;
    background: $primary-color;
    display: block;
  }
}
</style>
