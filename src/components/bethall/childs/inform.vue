<template>
  <div class="inform">
    <div class="left">
      <mt-button type="danger" size='small' disabled plain>公告</mt-button>
    </div>
    <div id="message" class="right">
      <div class="textInner">
        <span>{{ textMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import informAutoScroll from '../../../plugin/mixin/informAutoScroll.js'
  import $ from 'jquery'

  export default {
    data () {
      return {
        textMessage: '存款步骤：登入会员账号→点击充值→输入金额和存款账号→显示二维码，保存二维码到相册，打开支付宝或微信扫一扫（务必备注会员账号）支付成功即可到账~（扫码完成后，请删除您保存的二维码，如需存款请您重复以上步骤操作即可）'
      }
    },
    mounted () {
      let textEle = '#message'
      informAutoScroll(textEle)
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .inform {
    width: 100%;
    height: 4rem;
    padding: 0.6rem 0;
    background-color: #fff;
    .left {
      float: left;
      width: 20%;
      height: 3rem;
      button {
        color: #f00 !important;
        border: 1px solid #f00 !important;
      }
    }
    .right {
      float: left;
      width: 76%;
    }
    #message {
      overflow: hidden;
      position: relative;
      white-space: nowrap;
      height: 3rem;
      line-height: 3rem;
      .textInner {
        position: absolute;
        top: 0;
        height: 100%;
      }
    }
  }
</style>
