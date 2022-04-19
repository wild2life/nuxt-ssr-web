<template>
  <div>
    <div
      class="vaw-side-bar-wrapper"
      :class="[!isCollapse ? 'open-status' : 'close-status']"
    >
      <img src="~/assets/image/logo.png" alt="壹览商业" class="logo" />
      <div class="el-scrollbar scrollbar">
        <div
          class="scrollbar-wrap-class el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
        >
          <div class="el-menu flex flex-direction">
            <NuxtLink
              v-for="item in menuList"
              :key="item.name"
              :to="item.name"
              >{{ item.label }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="mobile-shadow"
      :class="[isCollapse ? 'close-shadow' : 'show-shadow']"
      @click="closeMenu"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'SlideBar',
  components: {},
  computed: {
    menuList() {
      return this.$store.state.setting.menuList
    },
    isCollapse() {
      return this.$store.state.setting.isCollapse
    },
  },
  methods: {
    closeMenu() {
      this.$store.commit('setting/toggleCollapse', true)
    },
  },
}
</script>
<style lang="scss" scoped>
.vaw-side-bar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  height: 100%;
  box-sizing: border-box;
  z-index: 99;
  background-color: #fff;
  .logo {
    padding: 103px 0 37px 63px;
  }
}
.mobile-shadow {
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 98;
}
.close-shadow {
  display: none;
}
.show-shadow {
  display: block;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.el-scrollbar {
  position: relative;
  overflow: hidden;
  height: calc(100%) !important;
  background-color: #fff;
  .el-scrollbar__wrap {
    overflow: auto;
    height: 100%;
    overflow: hidden !important;
  }
  .el-menu {
    overflow-x: hidden !important;
    border-right: none !important;
    height: 100%;
    a {
      text-decoration: none;
      color: #2d2d2d;
      font-size: 25px;
      padding: 27px 0 27px 68px;
      display: flex;
      display: inline-block;
    }
    .nuxt-link-exact-active.nuxt-link-active {
      color: #fff;
      background-color: $primary-color;
    }
  }
}
.open-status {
  width: $mobile-menu-width;
  transform: translateX(0);
  transition: transform $transition-time;
}
.close-status {
  width: $mobile-menu-width;
  transform: translateX(-$mobile-menu-width);
  transition: transform $transition-time;
  box-shadow: none;
}
</style>
