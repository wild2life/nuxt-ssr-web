<template>
  <div class="footer flex justify-between main-padding">
    <div class="footer-left flex-direction">
      <p><img src="~/assets/image/logo.png" alt="壹览商业" class="logo" /></p>
      <p>
        <span class="label">快速导航: </span>
        <span class="value">关于我们</span>
        <span class="value">加入我们</span>
      </p>
      <p>
        <span class="label">合作伙伴: </span>
        <span class="value">速途网</span>
        <span class="value">亿欧网</span>
        <span class="value">联商网</span>
        <span class="value">联商网</span>
      </p>
      <p>
        Copyright <i class="iconfont" style="margin: 0 5px">©</i>壹览商业 |
        浙ICP备2021002061号
      </p>
    </div>
    <div class="footer-right">
      <img src="~/assets/image/QR.png" class="qr-code" /><img />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      list: ['速途网', '亿欧网', '联商网', '联商网'],
    }
  },
  computed: {},
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.footer-left {
  padding: 50px 0 30px;
  img {
    width: 125px;
    height: 40px;
    display: inline-block;
  }
  .label {
    color: $primary-color;
  }
}
.footer-right {
  padding-top: 65px;
  .qr-code {
    display: inline-block;
    width: 135px;
    height: 135px;
  }
}
</style>
