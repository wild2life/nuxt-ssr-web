<template>
  <div class="flex justify-between align-center header">
    <img src="~/assets/image/logo.png" alt="壹览商业" class="logo" />
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in list"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>
    <!-- <nuxt-link to="/info">资讯</nuxt-link>
      <nuxt-link to="/news">快讯</nuxt-link>
      <nuxt-link to="/data">数据</nuxt-link>
      <nuxt-link to="/video">视频</nuxt-link>
      <nuxt-link to="/topic">专题</nuxt-link>
      <nuxt-link to="/activity">活动</nuxt-link>
      <nuxt-link to="/about">关于我们</nuxt-link> -->
    <el-input
      v-model="inputVal"
      prefix-icon="el-icon-search"
      placeholder="请输入您感兴趣的问题"
    ></el-input>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  components: {},
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
.header {
  padding: 12px 0;
  img.logo {
    width: 185px;
    height: 60px;
    display: inline-block;
  }
  .el-tabs {
    flex: 1;
    margin-left: 34px;
    ::v-deep .el-tabs__item.is-top {
      font-size: 19px;
    }
  }

  .el-input {
    width: 266px;
    ::v-deep input.el-input__inner {
      background-color: #f2f2f2;
    }
  }
  ::-webkit-input-placeholder {
    /* Edge */
    color: #8b8b8b;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #8b8b8b;
  }

  ::placeholder {
    color: #8b8b8b;
  }
}
</style>
