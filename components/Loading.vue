<template>
  <!-- 自定义loading -->
  <div v-if="laoding" class="loading-box" />
</template>

<script>
export default {
  data: () => ({
    laoding: false,
  }),
  methods: {
    start() {
      this.laoding = true
    },
    finish() {
      this.laoding = false
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-box {
  width: 100px;
  height: 100px;
  background-color: $primary-color;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
  animation: rotateplane 1.5s infinite ease-in-out;
  -webkit-animation: rotateplane 1.5s infinite ease-in-out;
}

@-webkit-keyframes rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateY(180deg);
  }
}

@keyframes rotateplane {
  0% {
    transform: perspective(120px) rotateY(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateY(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(179.9deg);
  }
}
</style>
