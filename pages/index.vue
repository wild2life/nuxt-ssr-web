<template>
  <div class="index-container">
    <!-- <div class="banner-wrapper">
    <div class="banner flex justify-between">
      <div class="banner-left">
        <img src="~/assets/image/banner.png" alt="" />
      </div>
      <div class="banner-right flex margin-left-sm">
        <div class="flex flex-direction justify-between">
          <img src="~/assets/image/banner1.png" alt="" />
          <img src="~/assets/image/banner2.png" alt="" />
        </div>
        <div class="flex flex-direction justify-between margin-left-sm">
          <img src="~/assets/image/banner3.png" alt="" />
          <img src="~/assets/image/banner4.png" alt="" />
        </div>
      </div>
    </div>
  </div> -->
    <div class="index-info flex margin-top-lg justify-between">
      <div class="index-info-left">
        <div class="index-info-left-tab">
          <el-tabs v-model="activeName">
            <el-tab-pane
              v-for="item in list"
              :key="item"
              :label="item"
              :name="item"
            >
            </el-tab-pane>
          </el-tabs>
        </div>

        <div class="index-info-left-card flex">
          <InfoCard
            v-for="(item, index) in data"
            :key="index"
            :data="item"
            :style="{ marginRight: (index + 1) % 3 ? '20px' : '0' }"
          ></InfoCard>
        </div>
      </div>
      <div class="index-info-right margin-left-lg">
        <NewsCard :data="list1"></NewsCard>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      list: ['推荐', '原创', '消费', '零售', '电商', '互联网'],
      data: [
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ddmeishi.com%2Fuploads%2Fallimg%2F200319%2F13-200319142009.jpg&refer=http%3A%2F%2Fwww.ddmeishi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649863922&t=a8e9f21a2a88e6ebd10e3d5108c60e67',
          title: '9元喜茶，为了啥？',
          desc: '被逼出来的“卷王”',
          author: '品玩',
          date: '2022-01-13 10:34:28',
        },
      ],
      activeName: '推荐',
      list1: [
        {
          name: '青岛首家星巴克啡快概念店开业',
          date: '20小时之前',
        },
        {
          name: '跨境物流综合服务商“运无界”完成千万元 融资',
          date: '20小时之前',
        },
        {
          name: 'AI大分子药物研发企业“信华生物”获亿元 pre-A轮融资',
          date: '20小时之前',
        },
        {
          name: '新东方被强制执行',
          date: '20小时之前',
        },
      ],
    }
  },
  head() {
    return {
      title: '首页',
    }
  },
}
</script>
<style lang="scss" scoped>
.index-container {
  width: 100vw;
}
.banner-wrapper {
  padding: 20px 0;
}
.banner {
  height: 400px;
  .banner-left {
    flex-basis: 60%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .banner-right {
    flex-basis: 40%;
    img {
      height: 194px;
      width: calc(50% - 10px);
      display: inline-block;
    }
  }
}
.index-info {
  &-left-tab {
    width: 790px;
    background-color: $primary-color;
    padding-left: 30px;
    border-radius: 7px;
    padding-top: 5px;
    height: 56px;
    box-sizing: border-box;
  }
  &-left {
    width: 790px;
    ::v-deep .el-tabs__header {
      margin-bottom: 0;
      .el-tabs__item {
        color: #fff;
        font-weight: normal;
        font-size: 17px;
      }
      .el-tabs__active-bar.is-top {
        background-color: #fff;
      }
    }
  }
  &-right {
    width: 390px;
  }
  &-left-card {
    flex-wrap: wrap;
    flex: 1;
  }
}
</style>
