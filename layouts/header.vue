<template>
  <div class="flex justify-between align-center header">
    <img
      :src="logo"
      alt="壹览商业"
      class="logo cursor-pointer"
      @click="jumpIndex"
    />
    <div class="tab-wrapper">
      <NuxtLink v-for="item in menuList" :key="item.name" :to="item.name"
        >{{ item.label }}
      </NuxtLink>
    </div>
    <el-input
      v-model="inputVal"
      prefix-icon="el-icon-search"
      placeholder="请输入您感兴趣的问题"
      @change="search"
    ></el-input>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  components: {},
  props: {
    logo: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputVal: '',
    }
  },
  computed: {
    path() {
      return this.$route.path
    },
    menuList() {
      return this.$store.state.setting.menuList
    },
  },
  watch: {
    path() {
      if (this.path !== '/search') {
        this.inputVal = ''
      }
      if (this.$route.query.search) {
        this.inputVal = this.$route.query.search
      }
    },
  },
  methods: {
    jumpIndex() {
      this.$router.replace('/')
    },
    search() {
      this.$router.push({ path: '/search', query: { search: this.inputVal } })
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

  .tab-wrapper {
    flex: 1;
    padding-left: 35px;
    height: 60px;
    a {
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
