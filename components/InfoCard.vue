<template>
  <div class="info-card-wrapper cursor-pointer margin-top-lg">
    <img :src="data.img" alt="" />
    <div class="title text-lg">{{ data.title }}</div>
    <div class="desc text-sm">{{ data.introduction }}</div>
    <div class="date text-sm">{{ data.author }} | {{ data.publish_time }}</div>
  </div>
</template>
<script>
export default {
  name: 'InfoCard',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          img: '',
          title: '',
          introduction: ' ',
          publish_time: '',
          author: '',
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.info-card-wrapper {
  width: 250px;
  background-color: #f8f8f8;
  border-radius: 4px;
  // height: 272px;
  position: relative;
  border: 2px solid transparent;
  padding-bottom: 30px;
  &:hover {
    border-color: $primary-color;
  }
  img {
    width: 216px;
    height: 146px;
    display: inline-block;
    border-radius: 2px;
    margin: 12px 17px;
  }
  .title,
  .desc {
    padding: 0 9px;
  }
  .desc {
    color: #666666;
  }
  .date {
    color: $gray-color;
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 9px;
  }
}
</style>
