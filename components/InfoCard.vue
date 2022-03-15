<template>
  <div class="info-card-wrapper">
    <img :src="data.src" alt="" />
    <div class="title">{{ data.title }}</div>
    <div class="desc">{{ data.desc }}</div>
    <div class="date text-sm">{{ data.author }} | {{ data.date }}</div>
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
          src: '',
          title: ' ',
          desc: '',
          date: '',
          author: '',
        }
      },
    },
    src: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.info-card-wrapper {
  width: 250px;
  background-color: #f8f8f8;
  margin-top: 20px;
  border-radius: 4px;
  height: 272px;
  img {
    width: 216px;
    height: 146px;
    display: inline-block;
    border-radius: 2px;
    margin: 12px 17px;
  }
  .title,
  .date,
  .desc {
    padding: 0 9px;
  }
  .title {
    font-size: 17px;
  }
  .desc {
    font-size: 15px;
    color: #666666;
  }
  .date {
    color: #999999;
    padding-top: 40px;
    text-align: right;
  }
}
</style>
