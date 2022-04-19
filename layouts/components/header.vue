<template>
  <div class="search-header-wrap flex align-center">
    <Humburger></Humburger>
    <div class="header-title text-xl flex">{{ title }}</div>
  </div>
</template>
<script>
import Humburger from './humburger.vue'

export default {
  name: 'Header',
  components: {
    Humburger,
  },
  data() {
    return {
      title: '首页',
    }
  },
  computed: {
    menuList() {
      return this.$store.state.setting.menuList
    },
    path() {
      return this.$route.path
    },
  },
  watch: {
    path() {
      this.getTitle()
    },
  },
  created() {
    this.getTitle()
  },
  methods: {
    getTitle() {
      this.title =
        this.menuList.find((item) => item.name === this.$route.path)?.label ||
        '首页'
    },
  },
}
</script>
<style lang="scss" scoped>
.search-header-wrap {
  z-index: 5;
  width: 100vw;
  height: $mobile-header-height;
  box-shadow: 0px 5px 10px #dddddd;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  .header-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
