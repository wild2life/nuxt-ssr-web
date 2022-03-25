<template>
  <div class="news-card-wrapper">
    <!-- <div class="news-card-header flex justify-between align-center">
      <p class="title flex align-center text-xl text-bold">
        <img src="~/assets/image/news.png" />
        热门专题
      </p>
      <span class="text-lg cursor-pointer"
        >查看更多<i class="el-icon-arrow-right"></i
      ></span>
    </div> -->
    <CommonCardHeader
      title="热门专题"
      :src="require('~/assets/image/news.png')"
    ></CommonCardHeader>
    <div class="news-card-cont flex align-center flex-direction">
      <img :src="data.img" alt="" />
      <div class="text-df text-cut-l2 cursor-pointer">{{ data.desc }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HotTopics',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
          desc: '星巴克入驻美团外卖，阿里终星星巴克入驻美团外卖，阿里终星巴克入驻美团外卖星巴克入驻美团外卖，阿里终星巴克入驻美团外卖巴克入驻美团外卖，阿里终究是 帮别人做了嫁衣究是 帮别人做了嫁衣',
        }
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
  // .news-card-header {
  //   display: flex;
  //   border-bottom: 2px solid #f8f8f8;
  //   height: 60px;
  //   span {
  //     color: #666;
  //   }
  // }
  .news-card-cont {
    padding: 0 15px;
    div {
      line-height: 40px;
    }
    img {
      width: 340px;
      height: 225px;
      display: inline-block;
    }
  }
}
</style>
