<template>
  <div id="appload">
    <head-nav title="APP下载"></head-nav>
    <div class="apploadcon scroll-content has-header">
      <div class="appStore">
        <a href="###">
          <img src="../../../assets/img/storeload.png" alt=""/>
        </a>
      </div>
      <img src="../../../assets/img/Android.png" alt="APP Store下载"/>
      <div class="android">
        <a href="###">
          <img src="../../../assets/img/androidload.png" alt=""/>
        </a>
      </div>
      <img src="../../../assets/img/Android.png" alt="Android下载"/>
      <span>温馨提示：推荐使用支付宝或者浏览器扫码二维码下载</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  #appload {
    .mint-header {
      background-color: #ec2829;
      font-size: 18px;
    }
    .apploadcon {
      width: 100%;
      background-color: #fff;
      .appStore, .android {
        margin: 1.2rem 0 1.2rem;
        a {
          display: block;
          width: 10rem;
          height: 2rem;
          margin: 0 auto;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
      img {
        display: block;
        width: 8rem;
        height: 8rem;
        margin: 0 auto;
      }
      span {
        display: inline-block;
        font-size: 12px;
        margin: 1rem auto 0;
      }
    }
  }

</style>
