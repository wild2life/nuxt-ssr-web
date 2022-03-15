<template>
  <div class="vaw-main-layout-container" :class="[isMobile && 'is-mobile']">
    <section class="header-wrapper">
      <Header></Header>
    </section>
    <section class="main-section">
      <router-view></router-view>
    </section>
    <section class="footer-wrapper">
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
import Footer from './footer.vue'
import Header from './header.vue'
export default {
  name: 'Layout',
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      activeName: '',
      inputVal: '',
      list: [
        {
          label: '资讯',
          name: 'info',
        },
        {
          label: '快讯',
          name: 'news',
        },
        {
          label: '数据',
          name: 'data',
        },
        {
          label: '视频',
          name: 'video',
        },
        {
          label: '专题',
          name: 'topic',
        },
        {
          label: '活动',
          name: 'activity',
        },
        {
          label: '关于我们',
          name: 'about',
        },
      ],
    }
  },
  computed: {
    device() {
      return this.$store.state.setting.device
    },
    isMobile() {
      return this.device === 'mobile'
    },
  },
  created() {
    this.handleScreenResize()
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push({ path: tab.name || '/' })
    },
    handleScreenResize() {
      if (process.client) {
        const width = document.body.clientWidth
        if (width <= 768) {
          this.$store.commit('setting/changeDevice', 'mobile')
          // store.toggleCollapse(true)
        } else if (width < 992 && width > 768) {
          this.$store.commit('setting/changeDevice', 'pad')
          // store.toggleCollapse(true)
        } else if (width < 1200 && width >= 992) {
          this.$store.commit('setting/changeDevice', 'pc')
          // store.toggleCollapse(false)
        } else {
          this.$store.commit('setting/changeDevice', 'pc')
          // store.toggleCollapse(false)
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
::v-deep .el-tabs__nav-wrap::after {
  background: transparent;
}
::v-deep .el-tabs__header {
  margin-bottom: 0;
}
.el-tabs__item {
  font-size: 19px;
}
.vaw-main-layout-container {
  height: 100%;
}
// @media screen and (min-width: 1440px) {
//   .main-padding {
//     padding: 0 300px;
//   }
// }

// @media screen and (min-width: 1920px) {
//   .main-padding {
//     padding: 0 360px;
//   }
// }
.header-wrapper {
  height: $menu-height;
  box-shadow: 0 6px 24px rgb(38 38 38 / 6%);
}
.header-wrapper .header,
.footer-wrapper .footer,
.main-section {
  width: $container-width;
  margin: 0 auto;
}
.main-section {
  flex: 1;
  display: flex;
  min-height: calc(100% - #{$footer-height} - #{$menu-height});
}
.footer-wrapper {
  background: #fff;
  height: $footer-height;
}
</style>
