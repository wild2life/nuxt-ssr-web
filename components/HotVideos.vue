<template>
  <div class="video-card-wrapper">
    <CommonCardHeader
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
          {{ item.title }}
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
.video-card-wrapper {
  border-radius: 4px;
  box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
  padding: 10px;
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
