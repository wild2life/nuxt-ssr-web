<template>
  <div class="news-card-wrapper">
    <div class="news-card-header flex justify-between align-center">
      <p class="title flex align-center text-xl">
        <img src="~/assets/image/news.png" />
        24小时热榜
      </p>
      <span class="text-lg">查看更多<i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="news-card-cont">
      <div>
        <div class="first">
          <img :src="data[0].img" alt="" />
          <span class="title text-lg">{{ data[0].title }}</span>
          <div class="dot">
            <img src="~/assets/image/dotBg.png" alt="" />
            <span>1</span>
          </div>
        </div>
        <div class="second flex margin-top">
          <img :src="data[1].img" alt="" />
          <span class="title margin-left-sm margin-top-sm">{{
            data[1].title
          }}</span>
          <div class="dot">
            <img src="~/assets/image/dotBg.png" alt="" />
            <span>2</span>
          </div>
        </div>
        <div class="third flex margin-top">
          <img :src="data[2].img" alt="" />
          <span class="title margin-left-sm margin-top-sm">{{
            data[2].title
          }}</span>
          <div class="dot">
            <img src="~/assets/image/dotBg.png" alt="" />
            <span>3</span>
          </div>
        </div>

        <div class="other flex margin-top align-center">
          <div class="dot flex align-center justify-center">4</div>
          <span class="title margin-left-sm">{{ data[3].title }}</span>
        </div>

        <div class="other flex margin-top align-center">
          <div class="dot flex align-center justify-center">5</div>
          <span class="title margin-left-sm">{{ data[4].title }}</span>
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
        return [
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '星巴克入驻美团外卖，阿里终究是 帮别人做了嫁衣',
          },
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '盲盒“反噬”肯德基',
          },
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '无限复购的饮料，是怎 样炼成的？',
          },
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '过年送礼，难倒年轻人',
          },
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '无限复购的饮料，是怎样炼成的？',
          },
        ]
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.news-card-wrapper {
  border-radius: 4px;
  box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
  padding: 10px;
  .news-card-header {
    display: flex;
    border-bottom: 2px solid #f8f8f8;
    height: 60px;
    img {
      width: 30px;
      height: 30px;
      margin: 0 4px;
      display: inline-block;
    }
    span {
      color: #666;
    }
  }
  .news-card-cont {
    padding: 15px 20px;
    .first {
      // width: 320px;
      height: 211px;
      position: relative;
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
