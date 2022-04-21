<template>
  <div class="news-container">
    <div class="flex">
      <div class="left flex flex-sub flex-direction">
        <p class="title text-xl"><span class="margin-left">壹览快讯</span></p>
        <div class="news-cont">
          <NewsList
            v-for="(item, index) in list"
            :key="index"
            :data="item"
          ></NewsList>
        </div>
      </div>
      <div class="right">
        <HotList class="margin-top-lg" :data="hotArticleData"></HotList>
      </div>
    </div>
    <img src="~/assets/image/dropdown.png" alt="" class="dropdown" />
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  layout: 'default',
  async asyncData({ app }) {
    const { $axios } = app
    const [hotRes, cardRes] = await Promise.all([
      $axios.get('side_hot_articles'),
      $axios.get('flash_news'),
    ])
    return {
      list: cardRes.data.data,
      total: cardRes.data.total,
      hotArticleData: hotRes.data,
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
      content: '';
      position: absolute;
      background: $primary-color;
      height: 20px;
      width: 3px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
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
