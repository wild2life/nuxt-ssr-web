<template>
  <div class="data-tacontainer">
    <div class="data-info flex justify-between">
      <div class="data-info-left margin-top-lg">
        <DataCard></DataCard>
      </div>
      <div class="data-info-right margin-left-lg margin-top-lg">
        <NewsCard :data="list1"></NewsCard>
        <HotList class="margin-top-lg"></HotList>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'DataPage',
  layout: 'default',
  data() {
    return {
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
.data-container {
  width: 100vw;
}
.data-info {
  &-left {
    width: 790px;
  }
  &-right {
    width: 390px;
  }
}
</style>
