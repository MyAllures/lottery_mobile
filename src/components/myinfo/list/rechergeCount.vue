<template>
  <section>
    <head-nav :title="title"></head-nav>
    <div class="scroll-content has-header">
      <div class="top flex">
        <div class="tab_item">
          <div>可用余额</div>
          <div class="red">{{balance}} 元</div>
        </div>
        <div class="tab_item">
          <div>账户余额</div>
          <div class="red">{{balance}} 元</div>
        </div>
      </div>
      <div class="title flex">
        <div class="item item1">类别</div>
        <div class="item item2">充值金额</div>
        <div class="item item3">日期</div>
        <div class="item item4">余额</div>
        <div class="item item5">查看</div>
      </div>
      <mt-loadmore :top-method="loadTop" ref="loadmore" @top-status-change="handleTopChange">
        <div v-for="item in tableData" class="title1 flex">
          <div class="item item1">{{changeStatusNumber(item.payType)}}</div>
          <div class="item item2 ">{{item.amount}}</div>
          <div class="item item3" style="white-space: nowrap;">{{judgeTime(item.createTime)}}</div>
          <div class="item item3 single_ellipsis">{{item.balance}}</div>
          <div class="item item3 single_ellipsis"></div>
        </div>
        <div slot="top" class="mint-loadmore-top">
          <span style="font-size: 4rem" v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <img style="width: 20rem;height: 4rem" src="./img/loading2.jpg" alt="">
          </span>
        </div>
      </mt-loadmore>
      <div v-if="Math.ceil(total/form.pageSize) > 1" style="padding: 1rem;text-align: right;font-size: 1.4rem">
        <span>共 {{Math.ceil(total/form.pageSize)}} 页</span>
        <mt-button size="small" @click="preventPage">上一页</mt-button>
        {{form.pageNumber}}
        <!--<mt-field class="mt-put" v-model="page.pageNumber"></mt-field>-->
        <!--<input class="my-input" v-model="page.pageNumber" type="number">-->
        <mt-button  size="small" @click="nextPage">下一页</mt-button>
      </div>
      <!--<mt-navbar style="border-top: 2px solid red;box-shadow: 2px 2px 2px #ccc" v-model="selected">-->
        <!--<mt-tab-item id="1">充值记录</mt-tab-item>-->
        <!--<mt-tab-item id="2">取款记录</mt-tab-item>-->
      <!--</mt-navbar>-->


    </div>
  </section>
</template>

<script>
  import { changeStatusNumber } from '../../../assets/js/payType'
  import { judgeTime } from '../../../assets/js/time'
  export default {
    data () {
      return {
        title: '',
        selected: '1',
        form: {
          pageSize: 10,
          pageNumber: 1,
          beginDate: undefined,
          endDate: undefined
        },
        tableData: [],
        total: 1,
        topStatus: '',
        changeStatusNumber: changeStatusNumber,
        judgeTime: judgeTime
      }
    },
    computed: {
      balance () {
        return this.$store.state.selfInfo.balance
      }
    },
    created () {
      this.getRechergeCount()
    },
    activated () {
      this.title = this.$route.query.name
      this.getRechergeCount()
    },
    methods: {
      getRechergeCount () {
        this.$api.test(this.form).then(res => {
          if (res.code === '000000') {
            this.$refs.loadmore.onTopLoaded()
            this.tableData = res.data.list
            this.total = res.data.totalRow
          }
        })
      },
      preventPage () {
        if (this.form.pageNumber > 1) {
          this.form.pageNumber--
          this.getRechergeCount()
        }
      },
      nextPage () {
        this.form.pageNumber++
        this.getRechergeCount()
      },
      loadTop () {
        this.form.pageNumber = 1
        this.getRechergeCount()
      },
      handleTopChange (status) {
        this.topStatus = status
      }
    }
  }
</script>

<style lang="less" scoped>
.top{
  line-height: 3rem;
  font-size: 1.3rem;
  background-color: #fff;
  color: #000;
}
  .tab_item{
    width: 50%;
  }
.mint-navbar .mint-tab-item.is-selected{
  border-bottom: 2px solid red;
  font-size: 1.5rem;
  margin-bottom: -2px;
}
  .title{
    line-height: 5rem;
    height:5rem;
    background-color: #f2f2f0;
    font-size: 1.5rem;
    font-weight: bold;
    .item{
      width: 20%;
    }
  }
  .title1{
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    line-height: 4rem;
    height:4rem;
    background-color: #fff;
    font-size: 1.2rem;
    .item{
      width: 20%;
    }
  }
</style>
