<template>
  <div class="container">
    <CommonArticle
      :data="data"
      :hot-article-data="hotArticleData"
      :hot-video-data="hotVideoData"
    ></CommonArticle>
    <!-- <el-row>
      <el-col :span="24" class="header padding-bottom">
        <h1 class="text-center">{{ data.articles.title }}</h1>
        <div class="flex justify-between">
          <div>
            <span class="author text-lg margin-right-sm"
              >{{ data.author.name }}<b class="margin-left-sm">|</b></span
            >
            <span class="text-lg">{{ data.articles.publish_time }}</span>
          </div>
          <div>
            <span
              v-for="(item, index) in data.tags"
              :key="index"
              class="margin-left tag"
              >{{ item }}</span
            >
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :class="{ 'margin-top': !isMobile }" class="margin-bottom">
      <el-col :xs="24" :sm="24" :md="16">
        <div class="padding-right-xl margin-right-xs content">
          <img src="data.articles.img" alt="" />
          <div v-html="data.articles.content"></div>
          <div class="tips margin-top-xl">
            <p class="color-999">
              转载之前请先阅读<a href="">转载说明</a>，违规转载法律必究
            </p>
            <p class="padding-top-sm color-999">
              寻求报道或合作，请<a href="">点击这里</a>
            </p>
            <p class="padding-top-sm color-999">
              如果您加入壹览的讨论群，请联系我们的工作人员（微信号：star_3979)
            </p>
          </div>
          <div class="flex justify-end margin-top-xl">
            <NuxtLink
              v-if="!isTop"
              class="text-lg margin-right-xl cursor-pointer last"
              :to="item.last"
              >上一篇</NuxtLink
            >
            <NuxtLink
              v-if="!isLast"
              class="text-lg margin-left-xl cursor-pointer next"
              :to="item.next"
              >下一篇</NuxtLink
            >
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8">
        <Author :data="data.author"></Author>
        <HotList class="margin-top-lg" :data="hotArticleData"></HotList>
        <HotVideos class="margin-top-lg" :data="hotVideoData"></HotVideos>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
  name: 'Article',
  layout: 'default',
  async asyncData({ app, route }) {
    const { $axios } = app
    const [hotRes, videoRes, res] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('side_hot_videos'),
      $axios.get(`articles/${route.params.id}`),
    ])
    return {
      data: {
        ...res.data,
        tags: res.data.articles.tags.split(','),
      },
      hotArticleData: hotRes.data,
      hotVideoData: videoRes.data,
    }
  },
  // computed: {
  // isMobile() {
  //   return this.$store.state.setting.device === 'mobile'
  // },
  // isLast() {
  //   return !!this.data.next
  // },
  // isTop() {
  //   return !!this.data.last
  // },
  // },
}
</script>
<style scoped lang="scss">
.header {
  border-bottom: 2px solid $primary-color;
}
.tag,
.author {
  color: $primary-color;
}
.tips {
  background-color: #f2f2f2;
  padding: 20px 30px;
  height: 121px;
  a {
    color: $primary-color;
  }
  p {
    line-height: 0;
  }
  p,
  a {
    font-size: 15px;
  }
}
.next,
.last {
  &:hover {
    color: $primary-color;
  }
}
img {
  width: 100%;
  height: 520px;
}
</style>
