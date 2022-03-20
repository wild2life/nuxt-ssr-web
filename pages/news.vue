<template>
  <div class="news-container">
    <div class="flex">
      <div class="left flex flex-sub flex-direction">
        <p class="title text-xl">壹览快讯</p>
        <div class="news-cont">
          <NewsList
            v-for="(item, index) in list"
            :key="index"
            :data="item"
          ></NewsList>
        </div>
      </div>
      <div class="right">
        <HotList class="margin-top-lg"></HotList>
      </div>
    </div>
    <img src="~/assets/image/dropdown.png" alt="" class="dropdown" />
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  layout: 'default',
  data() {
    return {
      list: [
        {
          time: '20小时前',
          title: '淘宝发布2022年直播激励计划',
          main: '近日，阿里中国数字商业板块明确淘宝天猫组织架构，淘宝直播负责人直接向分管总裁汇报。从多家直播机构 负责人处了解到，淘宝直播近期',
        },
        {
          time: '20小时前',
          title: '淘宝发布2022年直播激励计划',
          main: '近日，阿里中国数字商业板块明确淘宝天猫组织架构，淘宝直播负责人直接向分管总裁汇报。从多家直播机构 负责人处了解到，淘宝直播近期',
        },
        {
          time: '20小时前',
          title: '淘宝发布2022年直播激励计划',
          main: '近日，阿里中国数字商业板块明确淘宝天猫组织架构，淘宝直播负责人直接向分管总裁汇报。从多家直播机构 负责人处了解到，淘宝直播近期',
        },
        {
          time: '20小时前',
          title: '淘宝发布2022年直播激励计划',
          main: '近日，阿里中国数字商业板块明确淘宝天猫组织架构，淘宝直播负责人直接向分管总裁汇报。从多家直播机构 负责人处了解到，淘宝直播近期',
        },
        {
          time: '20小时前',
          title: '淘宝发布2022年直播激励计划',
          main: '近日，阿里中国数字商业板块明确淘宝天猫组织架构，淘宝直播负责人直接向分管总裁汇报。从多家直播机构 负责人处了解到，淘宝直播近期',
        },
      ],
    }
  },
  head() {
    return {
      title: '快讯',
    }
  },
}
</script>
<style scoped lang="scss">
.news-container {
  width: 100%;
  padding-bottom: 35px;

  .left {
    margin-right: 30px;
  }
  .right {
    width: 420px;
  }
  .title {
    position: relative;
    &::before {
      background: $primary-color;
      width: 2px;
      height: 24px;
      position: absolute;
      left: 0;
    }
  }
  .dropdown {
    width: 44px;
    height: 38px;
    margin: 0 auto;
    display: flex;
  }
}
</style>
