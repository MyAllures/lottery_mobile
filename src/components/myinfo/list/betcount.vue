<template>
  <section>
    <head-nav :title="title"></head-nav>
    <div class="scroll-content has-header">
      <mt-navbar v-model="selected">
        <mt-tab-item v-for="(item,index) in betNav" :id="index" :key="index">{{item.name}}</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->

      <div class="content">
        <div class="select flex">
          <el-select @change="selectChange" size="mini" clearable v-model="value" placeholder="请选择">
            <el-option
              v-for="item in dateList"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-if="title=== '彩票投注记录'" size="mini" clearable v-model="form.ticketId" placeholder="彩种">
            <el-option
              v-for="item in ticketList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
          <mt-button style="align-self: center" size="small" type="primary" @click="getBetList">查询</mt-button>
        </div>
        <div class="table_title flex">
          <div class="title">彩种</div>
          <div class="title">投注时间</div>
          <div class="title">投注金额</div>
          <div class="title">当前状态</div>
          <div class="title">操作</div>
        </div>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item v-for="(i,k) in betNav" :id="k" :key="k">
            <div class="table_title flex" v-for="(item,index) in tableData">
              <div class="title single_ellipsis">{{item.gameName}}</div>
              <div class="title single_ellipsis">{{judgeTime(item.createTime)}}</div>
              <div class="title single_ellipsis">{{item.amount}}</div>
              <div class="title single_ellipsis">{{item.status}}</div>
              <div class="title">
                <mt-button type="danger" size="small" @click="seeBet(item)">查看</mt-button>
              </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
        <div v-if="Math.ceil(total/form.pageSize) > 1" style="padding: 1rem;text-align: right;font-size: 1.4rem">
          <span>共 {{Math.ceil(total/form.pageSize)}} 页</span>
          <mt-button size="small" @click="preventPage">上一页</mt-button>
          {{form.pageNumber}}
          <!--<mt-field class="mt-put" v-model="page.pageNumber"></mt-field>-->
          <!--<input class="my-input" v-model="page.pageNumber" type="number">-->
          <mt-button  size="small" @click="nextPage">下一页</mt-button>
        </div>

        <!--<div class="footer">-->
          <!--总计： 0 元-->
        <!--</div>-->
      </div>
    </div>
  </section>
</template>

<script>
  import { betNav } from '../data'
  import { judgeTime, selectDate, timeList } from '../../../assets/js/time'
  export default {
    data () {
      return {
        title: '',
        selected: 0,
        betNav: betNav,
        options: [],
        tableData: [],
        value: '',
        form: {
          userId: undefined,
          pageSize: 10,
          pageNumber: 1,
          beginTime: undefined,
          endTime: undefined,
          ticketId: undefined,
          status: undefined
        },
        total: 1,
        ticketList: [],
        judgeTime: judgeTime,
        dateList: timeList
      }
    },
    activated () {
      this.getTicketList()
      this.title = this.$route.query.name
      this.selected = 0
      this.tableData = []
      if (this.title === '六合投注记录') {
        this.form.ticketId = 20
      } else {
        this.form.ticketId = undefined
      }
    },
    methods: {
      getBetList () {
        this.$indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        this.form.userId = this.$store.state.selfInfo.id
        this.$api.getBetList(this.form).then(res => {
          if (res.code === '000000') {
            this.$indicator.close()
            this.$toast('查询成功')
            this.tableData = res.data.list
          }
        })
      },
      preventPage () {
        if (this.form.pageNumber > 1) {
          this.form.pageNumber--
          this.getBetList()
        }
      },
      nextPage () {
        this.form.pageNumber++
        this.getBetList()
      },
      selectChange (val) {
        let obj = selectDate(val)
        this.form.beginTime = obj.begin
        this.form.endTime = obj.end
      },
      getTicketList () {
        this.$api.request_allTicket({pageSize: 9999}).then(res => {
          if (res.code === '000000') {
            this.ticketList = res.data.list
          }
        })
      },
      seeBet (mes) {
        console.log(mes)
        this.$messagebox.alert('开奖号码：' + mes.lotteryNo)
      }
    },
    watch: {
      selected (val) {
        if (val) {
          this.tableData = []
        }
        switch (val) {
          case 0: this.form.status = undefined; break
          case 1: this.form.status = 2; break
          case 2: this.form.status = 0; break
          case 3: this.form.status = 1; break
          default: break
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 2px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -1px;
  }
  .select{
    height:4rem;
    line-height:4rem;
    .el-select{
      width: 30%;
      margin: 0 8px;
    }
  }
  .table_title{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    font-size: 1.3rem;
    .title{
      width: 20%;

      height:4rem;
      line-height:4rem;
    }
  }
  .footer{
    height:3.5rem;
    line-height:3.5rem;
    background-color: #fff;
    font-size: 1.4rem;
    color: #ccc;
  }
</style>
