<template>
  <div class="about-container">
    <div class="banner">
      <!-- <div class="banner-title">壹览商业丨洞见消费品牌的新未来</div> -->
      <div class="banner-title">{{ layout.title }}</div>
      <div class="banner-desc text-df">
        <!-- 关注并研究大消费行情下的快销品、服饰、美妆、食品饮料、宠物及相关零售商。 -->
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
              微信公众号、36氪、亿欧网、 联商网、澎湃号、东方富、
              富途牛牛、雪球、微博、搜狐号、 企鹅号、百度号、
              今日头条、网易号、知
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
            <h1>{{ card.title }}</h1>
            <span class="line"></span>
            <div v-for="(item, idx) in card.items" :key="idx">
              <div class="text-xl padding-bottom-lg padding-top-lg text-bold">
                {{ item.title }}：
              </div>
              <div v-if="item.desc" class="text-lg text-content">
                {{ item.desc }}
              </div>
              <div v-else>
                <div
                  v-for="(desc, descIndex) in item.descList"
                  :key="desc"
                  class="text-lg text-content"
                >
                  {{ descIndex + 1 }}、{{ desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="card-wrapper">
          <div class="title">
            <p>招聘职位</p>
            <p>简历发至：dongye@yilantop.com</p>
          </div>
          <div class="card-main">
            <h1>一、新媒体运营实习生</h1>
            <span class="line"></span>
            <h5>职位诱惑：</h5>
            <p>优秀可以转正、频繁接触商业大佬、成长速度块</p>
            <h5>职位描述：</h5>
            <div>
              1、协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划；
            </div>
            <div>2、协助整理分析运营数据，协助输出优化建议；</div>
            <div>
              3、协助完成一些日常工作，比如文章编辑、排版、内容配图设计等；
            </div>
            <div>
              4、表现优秀着，有机会独立负责运营新媒体平台，可以在自己发表的作品上署名。
            </div>
            <h5>任职条件：</h5>
            <h5>时间要求：</h5>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
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
      list: [
        {
          title: '一、新媒体运营实习生',
          items: [
            {
              title: '职位诱惑',
              desc: 'tototot',
            },
            {
              title: '职位描述',
              descList: [
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
              ],
            },
            {
              title: '岗位要求',
              descList: [
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
              ],
            },
            {
              title: '薪资要求',
              desc: '6-10k',
            },
          ],
        },
        {
          title: '三、网站、新媒体编辑',
          items: [
            {
              title: '职位诱惑',
              desc: 'tototot',
            },
            {
              title: '职位描述',
              descList: [
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
              ],
            },
            {
              title: '岗位要求',
              descList: [
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
              ],
            },
            {
              title: '薪资要求',
              desc: '6-10k',
            },
          ],
        },
        {
          title: '五、主编',
          items: [
            {
              title: '职位诱惑',
              desc: 'tototot',
            },
            {
              title: '职位描述',
              descList: [
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划；',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
              ],
            },
            {
              title: '岗位要求',
              descList: [
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
                '协助壹览商业网站、微博、头条号、百家号等新媒体平台，进行内容的输出及策划',
              ],
            },
            {
              title: '薪资福利',
              desc: '工资面议',
            },
          ],
        },
      ],
    }
  },
  head() {
    return {
      title: '关于我们',
    }
  },
  computed: {
    layout() {
      return this.$store.state.setting.layout
    },
  },
  methods: {
    handleClick(value) {
      this.active = value
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
