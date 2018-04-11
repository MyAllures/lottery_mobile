<template>
  <section>
    <head-nav :title="title"></head-nav>
    <div class="scroll-content has-header">
      <!--<div class="header">-->
        <!--当前账户：{{ name }}-->
      <!--</div>-->
      <!--<div class="title flex">-->
       <!--<span class="round"></span> <span>请选择充值方式进行充值</span>-->
      <!--</div>-->
      <img class="reImg" src="./img/timg.jpg" alt="">
      <div class="flex moneyList">
        <div class="money" @click="selectMoney" v-for="(item,index) in moneyList">￥{{item.name}}</div>
      </div>
      <mt-field label="金额：" placeholder="请输入金额" type="number" v-model="amount"></mt-field>
      <mt-button style="width: 80%;margin: 10px 0" type="primary" @click="goRecherge">我要充值</mt-button>
      <mt-actionsheet

        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>

    </div>

  </section>
</template>

<script>
  import { moneyList } from '../data'
  import $ from 'jquery'
  export default {
    data () {
      return {
        title: '',
        name: 'xwy',
        moneyList: moneyList,
        sheetVisible: false,
        amount: '',
        actions: [
//          {
//            name: '本次充值金额：' + this.amount
//          },
          {
            name: '支付宝充值',
            method: this.aliPay
          },
          {
            name: '微信充值',
            method: this.weixinPay
          }
        ]
      }
    },
    activated () {
      this.title = this.$route.query.name
    },
    methods: {
      goRecherge () {
        if (!this.amount) {
          this.$toast('请选择或者输入金额')
        } else {
          this.sheetVisible = true
        }
      },
      selectMoney (e) {
        $('.money').removeClass('selected')
        console.log(e.target.getAttribute('class'))
        e.target.setAttribute('class', e.target.getAttribute('class') + ' selected')
        this.amount = e.target.innerText.replace('￥', '')
      },
      aliPay () {
        window.open('/500/pay?payType=1&amount=' + this.amount)
      },
      weixinPay () {
        window.open('/500/pay?payType=6&amount=' + this.amount)
      }
    }
  }
</script>

<style lang="less" scoped>
  .header{
    height:4rem;
    line-height:4rem;
    border-bottom: 2px solid #ec2829;
    text-align: left;
    padding-left: 10px;
    font-size: 1.4rem;
  }
  .title{
    height: 4.5rem;
    line-height: 4.5rem;
    text-align: left;
    padding-left: 10px;
  }
  .round{
    width: 2rem;
    height:2rem;
    background-color: #ec2829;
    align-self: center;
  }
  .reImg{
    width: 100%;
    height:40%;
  }
  .moneyList{
    flex-wrap: wrap;
    justify-content: space-around;
    .money{
      width: 28%;
      height: 5rem;
      border:1px solid #ccc;
      border-radius: 5px;
      margin: .5rem 0;
      line-height:5rem;
      font-size: 1.8rem;
    }
    .selected{
      border: 2px solid red;
      /*margin: -2px;*/
      color: red;
    }
    .selected:after{
      content: '';
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-right: 5px solid red;
    }
  }
</style>
