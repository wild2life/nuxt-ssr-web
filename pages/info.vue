<template>
  <div class="index-container padding-bottom-lg">
    <div class="index-info flex margin-top-lg justify-between">
      <div class="index-info-left">
        <div class="index-info-left-tab padding-top-xs">
          <el-tabs v-model="activeName" @tab-click="handleChange">
            <el-tab-pane
              v-for="item in list"
              :key="item.industry_id"
              :label="item.name"
              :name="item.industry_id"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="index-info-left-card flex flex-wrap flex-sub">
          <InfoCard
            v-for="(item, index) in cardData"
            :key="index"
            :data="item"
            :style="{ marginRight: (index + 1) % 3 ? '20px' : '0' }"
          ></InfoCard>
        </div>
      </div>
      <div class="index-info-right margin-left-lg">
        <NewsCard :data="list1"></NewsCard>
        <HotList class="margin-top-lg"></HotList>
        <HotSearchWords class="margin-top-lg"></HotSearchWords>
        <HotTopics class="margin-top-lg"></HotTopics>
        <HotVideos class="margin-top-lg"></HotVideos>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'InfoPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios } = app
    const { data } = await $axios.get('industry')
    const cardRes = await $axios.get(`industry/${data[0].industry_id}/articles`)
    return {
      list: data.map((item) => ({
        name: item.name,
        industry_id: item.industry_id.toString(),
      })),
      activeName: data[0].industry_id.toString(),
      cardData: cardRes.data.data,
    }
  },
  data() {
    return {
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
      title: '资讯',
    }
  },
  methods: {
    async handleChange() {
      const { data } = await this.$axios.get(
        `industry/${this.activeName}/articles`
      )
      this.cardData = data.data
    },
  },
}
</script>
<style lang="scss" scoped>
.index-container {
  width: 100vw;
}
.index-info {
  &-left-tab {
    width: 790px;
    background-color: $primary-color;
    padding-left: 30px;
    border-radius: 7px;
    height: 56px;
    box-sizing: border-box;
  }
  &-left {
    width: 790px;
    ::v-deep .el-tabs__header {
      margin-bottom: 0;
      .el-tabs__item {
        color: #fff;
        font-weight: normal;
        font-size: 17px;
      }
      .el-tabs__active-bar.is-top {
        background-color: #fff;
      }
    }
    ::v-deep .el-tabs__nav-wrap::after {
      background-color: transparent;
    }
  }
  &-right {
    width: 390px;
  }
}
</style>
