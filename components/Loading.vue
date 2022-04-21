<template>
  <div v-if="laoding" class="first-loading-wrp">
    <div class="loading-wrp">
      <i class="splash__item" style="--i: 0.1s"></i>
      <i class="splash__item" style="--i: 0.2s"></i>
      <i class="splash__item" style="--i: 0.3s"></i>
      <i class="splash__item" style="--i: 0.4s"></i>
      <i class="splash__item" style="--i: 0.5s"></i>
      <i class="splash__item" style="--i: 0.6s"></i>
      <i class="splash__item" style="--i: 0.7s"></i>
      <i class="splash__item" style="--i: 0.8s"></i>
    </div>
    <h1>壹览商业</h1>
  </div>
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
.first-loading-wrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  min-height: 90vh;
}

.first-loading-wrp > h1 {
  font-size: 30px;
  font-weight: bolder;
}

@keyframes loading__scale-to-up {
  from {
    transform: scale(1, 0.2);
  }
  to {
    transform: scale(1, 1);
  }
}

.first-loading-wrp .loading-wrp i {
  background-color: $primary-color;
  display: inline-block;
  width: 5px;
  height: 50px;
  border-radius: 5px;
}
.splash__item + .splash__item {
  margin-left: 10px;
}

.first-loading-wrp .loading-wrp .splash__item {
  animation: loading__scale-to-up 0.5s linear infinite alternate-reverse;
  animation-delay: calc(var(--i) + 0s);
}
</style>
