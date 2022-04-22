<template>
  <div class="container">
    <el-row>
      <el-col :span="24" class="header padding-bottom">
        <h1 class="text-center">{{ data.title }}</h1>
        <div class="flex justify-between">
          <div>
            <span class="author text-lg margin-right-sm"
              >{{ data.create_user }}<b class="margin-left-sm">|</b></span
            >
            <span class="text-lg">{{ data.publish_time }}</span>
          </div>
          <div>
            <span
              v-for="(item, index) in data.tags"
              :key="index"
              class="margin-left tag text-df"
              >{{ item }}</span
            >
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :class="{ 'margin-top': !isMobile }" class="margin-bottom">
      <el-col :xs="24" :sm="24" :md="16">
        <div class="padding-right-xl margin-right-xs content">
          <div class="flex flex-direction padding-bottom-lg">
            <span class="color-999">出品 / {{ data.source }}</span>
            <span class="padding-top-xs color-999"
              >编辑 / {{ data.create_user }}</span
            >
          </div>
          <div v-html="data.content"></div>
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
              :to="data.last.toString()"
              >上一篇</NuxtLink
            >
            <NuxtLink
              v-if="!isLast"
              class="text-lg margin-left-xl cursor-pointer next"
              :to="data.next.toString()"
              >下一篇</NuxtLink
            >
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8">
        <HotList :data="hotArticleData"></HotList>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NewsId',
  layout: 'default',
  async asyncData({ app, route }) {
    const { $axios } = app
    const [hotRes, res] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get(`flash_news/${route.params.id}`),
    ])
    return {
      data: {
        ...res.data,
        tags: res.data.tags.split(','),
      },
      hotArticleData: hotRes.data,
    }
  },
  head() {
    return {
      title: this.data.articles.tags,
      // meta: [
      //   { hid: 'keyword', name: 'keyword', content: this.data.articles.tags },
      // ],
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
    isLast() {
      return !!this.data.is_last
    },
    isTop() {
      return !!this.data.is_top
    },
  },
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
</style>
