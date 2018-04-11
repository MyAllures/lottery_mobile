<template>
  <form id="wanfa">
    <div class="header flex">
      <div class="flex div2">
        <div class="item item1">生肖</div>
        <div class="item item2">赔率</div>
        <div class="item item3">号码</div>
        <div class="item item4">金额</div>
      </div>
    </div>
    <div class="flex content">
      <div class="div2 div1 flex" v-for="item in typeData">
        <div class="item item1 flex">
          <span style="align-self: center;width: 100%">{{item.xiao}}</span>
        </div>
        <div class="item item2 flex" style="color: red">
          <span style="align-self: center;width: 100%">
             {{item.peilv}}
          </span>

        </div>
        <div class="item item3 flex" style="flex-wrap: wrap">
          <div class="round" v-for="p in item.number">{{p}}</div>
        </div>
        <div class="item item4 flex">
          <input type="number" :name="judgePinyin(item.xiao)" style="display: inline-block;width: 90%;align-self: center;margin: auto">
        </div>
      </div>
    </div>
    <input style="visibility: hidden" ref="reset2" type="reset" value="chs">
    <div style="padding: 3rem 2rem;background-color: #92b3dd">
      <mt-button type="primary" size="small" style="margin-right: 2rem" @click.stop.prevent="reset">重填</mt-button>
      <mt-button type="primary" size="small" @click.stop.prevent="goZhu">确认下注</mt-button>
    </div>


  </form>
</template>

<script>
  import { dealLiuheData, judgePinyin } from '../../../assets/js/liuhe'
  import $ from 'jquery'
  export default {
    props: ['typeData'],
    data () {
      return {
        numData: [],
        judgePinyin: judgePinyin
      }
    },
    created () {
    },
    methods: {
      goZhu () {
        let mid = dealLiuheData($('#wanfa').serialize(), this)
        if (mid.length === 0) {
          this.$toast('请先选择号码')
        } else {
          mid.forEach(item => {
            this.$api.lhc_call_call(item).then(res => {
              if (res.code === '000000') {
                this.$toast('六合彩投注成功')
                this.reset()
              }
            })
          })
        }
      },
      reset () {
        this.$refs.reset2.click()
      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  #wanfa{
    padding:1rem;
  }
  .div1{
    width: 100%;
    background-color: white!important;
  }
  .div1{
    font-size: 1.5rem!important;
  }
  .content{
    flex-wrap: wrap;
  }
  .round{
    margin: auto;
    margin: 0.5rem;
  }
  .div2{
    font-size: 1.7rem;
    font-weight: bold;
    width: 100%;
    background-color: #fcf8e3;
    line-height: 3.5rem;
    .item{
      border: 1px solid #ccc;
      border-right: 0!important;
      border-bottom: 0;
      background-color: #f7f8fd;
    }
    .item1{
      width: 5rem;
    }
    .item2{
      width: 5rem;
    }
    .item3{
      flex: 1;
    }
    .item4{
      width: 6rem;
      border-right: 1px solid #ccc!important;
    }
  }


</style>
