<template>
  <form id="wanfa">
    <div class="header flex">
      <div class="flex div2">
        <div class="item item1">号码</div>
        <div class="item item2">赔率</div>
        <div class="item item3">金额</div>
      </div>
      <div class="flex div2">
        <div class="item item1">号码</div>
        <div class="item item2">赔率</div>
        <div class="item item3">金额</div>
      </div>
    </div>
    <div class="flex content">
      <div class="div2 div1 flex" v-for="item in 49">
        <div class="item item1">
          <span class="round">{{item}}</span>
        </div>
        <div class="item item2">5</div>
        <div class="item item3">
          <input :name="item" style="display: inline-block;width: 70%;height: 60%;" type="number">
        </div>
      </div>
    </div>
    <input style="visibility: hidden" ref="reset" type="reset" value="chs">

    <div style="padding: 3rem 2rem;background-color: #92b3dd">
      <mt-button type="primary" size="small" style="margin-right: 2rem" @click.stop.prevent="reset">重填</mt-button>
      <mt-button type="primary" size="small" @click.stop.prevent="goZhu">确认下注</mt-button>
    </div>


  </form>
</template>

<script>
  import $ from 'jquery'
  import { dealLiuheData } from '../../../assets/js/liuhe'

  export default {
    props: ['typeData'],
    data () {
      return {
        numData: []
      }
    },
    activated () {
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
        this.$refs.reset.click()
      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  .div1 {
    width: 50%;
    background-color: white !important;
    .item1:nth-child(48) {
      border-bottom: 1px solid #ccc!important;
    }
  }

  .div1 {
    font-size: 1.5rem !important;
  }

  .content {
    flex-wrap: wrap;
  }

  .round {
    margin: auto;
  }

  .div2 {
    font-size: 1.7rem;
    font-weight: bold;
    width: 50%;
    background-color: #fcf8e3;
    height: 3.5rem;
    line-height: 3.5rem;
    .item {
      border: 1px solid #ccc;
      border-right: 0 !important;
      border-bottom: 0;
    }
    .item1 {
      width: 25%;
    }
    .item2 {
      width: 25%;
    }
    .item3 {
      width: 50%;
    }
  }


</style>
