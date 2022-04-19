<template>
  <i
    class="fold-wrapper el-icon-s-fold"
    :class="[isCollapse ? 'fold-close-status' : 'fold-open-status']"
    @click="toggleFold"
  >
  </i>
</template>

<script>
export default {
  name: 'Humburger',
  computed: {
    isCollapse() {
      return this.$store.state.setting.isCollapse
    },
  },
  methods: {
    toggleFold() {
      this.$store.commit('setting/toggleCollapse', !this.isCollapse)
    },
  },
}
</script>
<style lang="scss" scoped>
.fold-open-status {
  transform: rotate(180deg);
}
.fold-close-status {
  transform: rotate(0);
}
.fold-wrapper {
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  margin: 0 10px;
  font-size: 20px;
  transition: transform $transition-time;
}
.fold-wrapper:hover {
  color: $primary-color;
  cursor: pointer;
}
</style>
