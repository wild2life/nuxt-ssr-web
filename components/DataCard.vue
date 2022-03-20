<template>
  <div class="data-card-wrapper">
    <div :key="index" class="data-card flex" v-for="(item, index) in data">
      <div class="data-card-left">
        <img :src="item.img" alt="" />
      </div>
      <div class="data-card-right flex flex-direction justify-between">
        <div class="title text-lg flex align-center text-bold">
          <span class="tips flex align-center justify-center">原创</span>
          {{ item.title }}
        </div>
        <div class="main text-df">
          {{ item.mian }}
        </div>
        <div class="date text-df flex align-center">
          <img src="~/assets/image/logo.png" class="margin-right-sm" />
          {{ item.date }}
          <span v-for="(tag, idx) in item.tag" :key="idx" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DataCard',
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '星巴克入驻美团外卖，阿里终究是 帮别人做了嫁衣',
            date: '2021年10月19日 00',
            mian: '2021年10月19-21日，国潮产业新媒体观潮新消费发起《国潮起·万物 生——2021国潮新消费大会》，旨在探寻国潮强势崛起消费发起《国潮起·万物 生——2021国潮新消费大会',
            tag: ['2021国潮新消费大会', '国潮新风尚'],
          },
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '星巴克入驻美团外卖，阿里终究是 帮别人做了嫁衣',
            date: '2021年10月19日 00',
            mian: '2021年10月19-21日，国潮产业新媒体观潮新消费发起《国潮起·万物 生——2021国潮新消费大会》，旨在探寻国潮强势崛起消费发起《国潮起·万物 生——2021国潮新消费大会',
            tag: ['2021国潮新消费大会', '国潮新风尚'],
          },
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '星巴克入驻美团外卖，阿里终究是 帮别人做了嫁衣',
            date: '2021年10月19日 00',
            mian: '2021年10月19-21日，国潮产业新媒体观潮新消费发起《国潮起·万物 生——2021国潮新消费大会》，旨在探寻国潮强势崛起消费发起《国潮起·万物 生——2021国潮新消费大会',
            tag: ['2021国潮新消费大会', '国潮新风尚'],
          },
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '星巴克入驻美团外卖，阿里终究是 帮别人做了嫁衣',
            date: '2021年10月19日 00',
            mian: '2021年10月19-21日，国潮产业新媒体观潮新消费发起《国潮起·万物 生——2021国潮新消费大会》，旨在探寻国潮强势崛起消费发起《国潮起·万物 生——2021国潮新消费大会',
            tag: ['2021国潮新消费大会', '国潮新风尚'],
          },
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '星巴克入驻美团外卖，阿里终究是 帮别人做了嫁衣',
            date: '2021年10月19日 00',
            mian: '2021年10月19-21日，国潮产业新媒体观潮新消费发起《国潮起·万物 生——2021国潮新消费大会》，旨在探寻国潮强势崛起消费发起《国潮起·万物 生——2021国潮新消费大会',
            tag: ['2021国潮新消费大会', '国潮新风尚'],
          },
          {
            img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fcrop.0.138.1440.800%2F006xEe4Rgy1gzf7ny7vrlj31400u0n3s.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650348075&t=b1d9ec6a112155f506734fde673505e7',
            title: '星巴克入驻美团外卖，阿里终究是 帮别人做了嫁衣',
            date: '2021年10月19日 00',
            mian: '2021年10月19-21日，国潮产业新媒体观潮新消费发起《国潮起·万物 生——2021国潮新消费大会》，旨在探寻国潮强势崛起消费发起《国潮起·万物 生——2021国潮新消费大会',
            tag: ['2021国潮新消费大会', '国潮新风尚'],
          },
        ]
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.data-card-wrapper {
  .data-card {
    margin-bottom: 40px;
    &-left {
      margin-right: 25px;
      img {
        width: 247px;
        height: 165px;
        display: inline-block;
        border-radius: 5px;
        vertical-align: middle;
      }
    }
    &-right {
      .tips {
        width: 47px;
        height: 24px;
        background: $primary-color;
        color: #fff;
        margin-right: 3px;
        border-radius: 3px;
        font-weight: normal;
      }
      .main {
        line-height: 30px;
        color: #999;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .date {
        color: #999;
        img {
          width: 68px;
          height: 23px;
          display: inline-block;
          vertical-align: middle;
        }
        .tag {
          color: $primary-color;
          margin-left: 14px;
        }
      }
    }
  }
}
</style>
