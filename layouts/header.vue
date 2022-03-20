<template>
  <div class="flex justify-between align-center header">
    <img src="~/assets/image/logo.png" alt="壹览商业" class="logo" />
    <div class="tab-wrapper">
      <NuxtLink v-for="item in list" :key="item.name" :to="item.name"
        >{{ item.label }}
      </NuxtLink>
    </div>
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
      inputVal: '',
      list: [
        {
          label: '资讯',
          name: '/info',
        },
        {
          label: '快讯',
          name: '/news',
        },
        {
          label: '数据',
          name: '/data',
        },
        {
          label: '视频',
          name: '/video',
        },
        {
          label: '专题',
          name: '/topic',
        },
        {
          label: '活动',
          name: '/activity',
        },
        {
          label: '关于我们',
          name: '/about',
        },
      ],
    }
  },
  computed: {
    device() {
      return this.$store.state.setting.device
    },
  },
  created() {},
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

  .tab-wrapper {
    flex: 1;
    padding-left: 35px;
    height: 60px;
    a {
      text-decoration: none;
      color: #2d2d2d;
      font-size: 19px;
      padding-top: 20px;
      height: 60px;
      display: inline-block;
    }
    a + a {
      margin-left: 54px;
    }
    .nuxt-link-exact-active.nuxt-link-active {
      border-bottom: 2px solid $primary-color;
      color: $primary-color;
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
