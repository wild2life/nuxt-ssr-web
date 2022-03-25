<template>
  <div class="vaw-main-layout-container" :class="[isMobile && 'is-mobile']">
    <section class="header-wrapper">
      <Header></Header>
    </section>
    <section
      class="main-section"
      :class="{ 'video-main-section': isVideoDetail }"
    >
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
      // isVideoDetail: false
    }
  },
  computed: {
    device() {
      return this.$store.state.setting.device
    },
    isMobile() {
      return this.device === 'mobile'
    },
    isVideoDetail() {
      return this.$route.name === 'video-detail'
    },
  },
  created() {
    this.handleScreenResize()
  },
  methods: {
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
  width: 100%;
  background: #1e1e1e;
}
.main-section {
  flex: 1;
  display: flex;
  min-height: calc(100% - #{$footer-height} - #{$menu-height});
}
.footer-wrapper {
  background: #f8f8f8;
  // height: $footer-height;
}
</style>
