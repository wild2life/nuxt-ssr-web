<template>
  <div class="topic-container padding-bottom-lg">
    <div class="flex flex-wrap">
      <TopicCard
        v-for="(item, index) in data"
        :key="index"
        :data="item"
        :style="{ marginRight: (index + 1) % 4 ? '20px' : '0' }"
      ></TopicCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityPage',
  layout: 'default',
  head() {
    return {
      title: '活动',
    }
  },
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
    }
  },
}
</script>
