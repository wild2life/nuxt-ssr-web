<template>
  <div class="vaw-main-layout-container" :class="{ 'is-mobile': isMobile }">
    <section v-show="!isMobile" class="header-wrapper">
      <Header :logo="layout.logo"></Header>
    </section>
    <section v-show="isMobile">
      <SlideBar></SlideBar>
      <MobileHeader />
      <MobileSearch />
    </section>
    <section
      class="main-section"
      :class="{
        'video-main-section': isVideoDetail,
        'full-screen-main-section': isFullScrenWidth,
        'mobile-main-section': isMobile,
      }"
    >
      <router-view></router-view>
    </section>
    <section class="footer-wrapper">
      <Footer :layout="layout"></Footer>
    </section>
  </div>
</template>
<script>
import Footer from './footer.vue'
import Header from './header.vue'
import SlideBar from './components/slidebar.vue'
import MobileHeader from './components/header.vue'
import MobileSearch from './components/search.vue'
export default {
  name: 'Layout',
  components: {
    Footer,
    Header,
    SlideBar,
    MobileHeader,
    MobileSearch,
  },
  computed: {
    layout() {
      return this.$store.state.setting.layout
    },
    device() {
      return this.$store.state.setting.device
    },
    isMobile() {
      return this.device === 'mobile'
    },
    isPc() {
      return this.device === 'pc'
    },
    isVideoDetail() {
      return this.$route.name === 'video-id'
    },
    isFullScrenWidth() {
      return ['video-id', 'about'].includes(this.$route.name) || this.isMobile
    },
  },
  mounted() {
    this.$store.dispatch('setting/nuxtServerInit')
    this.handleScreenResize()
    window.addEventListener('resize', this.handleScreenResize)
  },
  beforeDestory() {
    window.removeEventListener('resize', this.handleScreenResize)
  },
  methods: {
    handleScreenResize() {
      if (process.client) {
        const width = document.body.clientWidth
        if (width <= 768) {
          this.$store.commit('setting/changeDevice', 'mobile')
          this.$store.commit('setting/toggleCollapse', true)
        } else if (width < 992 && width > 768) {
          this.$store.commit('setting/changeDevice', 'pad')
          this.$store.commit('setting/toggleCollapse', true)
        } else if (width < 1200 && width >= 992) {
          this.$store.commit('setting/changeDevice', 'pc')
          this.$store.commit('setting/toggleCollapse', false)
        } else {
          this.$store.commit('setting/changeDevice', 'pc')
          this.$store.commit('setting/toggleCollapse', false)
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
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
.video-main-section {
  background: $video-bg-color;
}
.main-section {
  flex: 1;
  display: flex;
  min-height: calc(100% - #{$footer-height} - #{$menu-height});
}
.full-screen-main-section {
  width: 100%;
}
.footer-wrapper {
  background: #f8f8f8;
  // height: $footer-height;
}
.is-mobile {
  // position: relative;
  .footer-wrapper .footer {
    width: 100%;
    padding: 0 20px;
  }
  .mobile-main-section {
    // position: absolute;
    // top: 60px;
    // padding-top: 60px;
    overflow-x: hidden;
  }
}
</style>
