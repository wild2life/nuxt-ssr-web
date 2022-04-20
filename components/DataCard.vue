<template>
  <div class="data-card-wrapper">
    <div v-for="(item, index) in data" :key="index" class="data-card flex">
      <div class="data-card-left">
        <img :src="item.img" alt="" />
      </div>
      <div class="data-card-right flex flex-direction justify-between">
        <div class="title text-lg flex align-center text-bold">
          <span class="tips flex align-center justify-center">原创</span>
          {{ item.title }}
        </div>
        <div class="main text-df text-cut-l3">
          {{ item.introduction }}
        </div>
        <div class="date text-df flex align-center">
          <img src="~/assets/image/logo.png" class="margin-right-sm" />
          {{ item.publish_time }}
          <span v-for="(tag, idx) in item.tags" :key="idx" class="tag">
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
        return []
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
        color: $gray-color;
        // text-overflow: -o-ellipsis-lastline;
        // overflow: hidden;
        // text-overflow: ellipsis;
        // display: -webkit-box;
        // -webkit-line-clamp: 3;
        // -webkit-box-orient: vertical;
      }
      .date {
        color: $gray-color;
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
