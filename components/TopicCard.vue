<template>
  <div class="topic-card-wrapper">
    <img :src="data.src" alt="" />
    <div class="title text-lg">{{ data.title }}</div>
    <div class="desc text-df">{{ data.desc }}</div>
  </div>
</template>
<script>
export default {
  name: 'TopicCard',
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
.topic-card-wrapper {
  width: 285px;
  background-color: #f8f8f8;
  margin-top: 20px;
  border-radius: 4px;
  height: 310px;
  img {
    width: 246px;
    height: 168px;
    display: inline-block;
    border-radius: 2px;
    margin: 12px 20px;
  }
  .title,
  .desc {
    padding: 0 12px;
  }
  .desc {
    color: #666;
  }
}
</style>
