<template>
  <div class="padding-lr">
    <el-input
      v-model="inputVal"
      prefix-icon="el-icon-search"
      placeholder="请输入您感兴趣的问题"
    ></el-input>
  </div>
</template>
<script>
export default {
  name: 'MobileSearch',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      inputVal: '',
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.setting.device === 'mobile'
    },
  },
}
</script>

<style lang="scss" scoped>
.el-input {
  // width: 266px;
  margin-top: $mobile-header-height + 15px;
  ::v-deep input {
    border-radius: 18px;
  }
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
.news-card-wrapper {
  .dot {
    display: inline-block;
    background: $primary-color;
    width: 8px;
    height: 8px;
    margin-right: 15px;
  }
  .news-card-cont {
    padding: 0 4px;
  }
  img {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin: 0 4px;
  }
  .date {
    color: $gray-color;
  }
}
</style>
