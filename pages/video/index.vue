<template>
  <div class="video-container padding-bottom-lg">
    <div class="video-info flex justify-between">
      <div class="video-info-left">
        <div class="video-info-left-card flex">
          <VideoCard
            v-for="(item, index) in data"
            :key="index"
            :data="item"
            :style="{ marginRight: (index + 1) % 3 ? '20px' : '0' }"
          ></VideoCard>
        </div>
      </div>
      <div class="video-info-right margin-left-lg">
        <HotVideos :data="list1" class="margin-top-lg"></HotVideos>
        <HotList class="margin-top-lg"></HotList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPage',
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
      list2: [
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
      list3: [
        {
          name: '新消费',
          id: 1,
        },
        {
          name: '新国潮产业',
          id: 2,
        },
        {
          name: '消费升级',
          id: 3,
        },
        {
          name: '茅台',
          id: 4,
        },
      ],
    }
  },
  head() {
    return {
      title: '视频',
    }
  },
}
</script>
<style lang="scss" scoped>
.video-container {
  width: 100vw;
}
.video-info {
  &-left {
    width: 790px;
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
