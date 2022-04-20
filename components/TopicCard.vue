<template>
  <div class="topic-card-wrapper margin-top-lg cursor-pointer" @click="jump">
    <img :src="data.img" alt="" />
    <div class="title text-lg">{{ data.title }}</div>
    <div class="desc text-df">{{ data.introduction }}</div>
    <div class="date text-sm">
      {{ data.publish_time }}
    </div>
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
          topic_id: '',
          img: '',
          title: ' ',
          introduction: '',
          publish_time: '',
        }
      },
    },
  },
  methods: {
    jump() {
      window.open(this.data.outlink)
    },
  },
}
</script>

<style lang="scss" scoped>
.topic-card-wrapper {
  width: 285px;
  background-color: #f8f8f8;
  border-radius: 4px;
  height: 310px;
  position: relative;
  border: 2px solid transparent;

  &:hover {
    border-color: $primary-color;
  }

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
