<template>
  <div id="gameTop">
    <div class="left">
      <p>距期{{ticketData.issue}}截止</p>
      <span>{{leftTime}}</span>
    </div>
    <div class="right">
      <p>第20171229077截止</p>
      <div class='rightBot'>
        <span>0</span>
        <span>3</span>
        <span>2</span>
        <span>1</span>
        <span>5</span>
        <em @click.stop="kaijiang">V</em>
      </div>
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <ul class="kaijiangCon">
        <li>第20180105期：<span>1</span><span>2</span><span>3</span><span>4</span><span>1</span></li>
        <li>第20180105期：<span>1</span><span>2</span><span>3</span><span>4</span><span>1</span></li>
        <li>第20180105期：<span>1</span><span>2</span><span>3</span><span>4</span><span>1</span></li>
        <li>第20180105期：<span>1</span><span>2</span><span>3</span><span>4</span><span>1</span></li>
        <li>第20180105期：<span>1</span><span>2</span><span>3</span><span>4</span><span>1</span></li>
      </ul>
    </mt-popup>
  </div>
</template>

<script>
  import leftTimer from '../../../assets/js/leftTime'
  import { judgeTime2 } from '../../../assets/js/time'
  export default {
    data () {
      return {
        popupVisible: false,
        time: 15,
        ticketData: {},
        leftTime: undefined,
        setId: undefined
      }
    },
    activated () {
      this.leftTime = '00:00:00'
      this.getnewTicketData()
      this.getKaiDate()
    },
    deactivated () {
      clearInterval(this.setId)
    },
    methods: {
      kaijiang () {
        this.popupVisible = !this.popupVisible
      },
      getKaiDate () {
        let ticketId = this.$route.params.ticketId
        this.$api.getkaiDate5(ticketId).then(res => {
          if (res.code === '000000') {
            console.log(res.data)
//            let dao = judgeTime2(Date.now() + 180000)
            let dao = judgeTime2(res.data)
            let arr = dao.split('-')
//            this.leftTime = leftTimer(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5])
            this.setId = setInterval(() => {
              this.leftTime = leftTimer(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5])
              if (this.leftTime === '00:00:00') {
                clearInterval(this.setId)
                this.getKaiDate()
              }
            }, 1000)
          }
        })
      },
      getnewTicketData () {
        this.$api.getnewTicketData(this.$route.params.ticketId).then(res => {
          if (res.code === '000000') {
            this.ticketData = res.data.list[0] || {issue: 5555}
            console.log(this.ticketData)
          }
        })
      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  #gameTop {
    display: inline-block;
    width: 100%;
    background-color: #fff;
    .left, .right {
      float: left;
      width: 50%;
      padding: 1.2rem 0;
      font-size: 12px;
    }
    .left {
      box-shadow: 1px 0 0 #ccc;
      p, span {
        display: block;
        width: 100%;
        line-height: 2rem;
        text-align: center;
      }
      span {
        color: #f00;
        font-size: 18px;
      }
    }
    .right {
      p {
        display: block;
        width: 100%;
        line-height: 2rem;
        text-align: center;
      }
      .rightBot {
        font-size: 18px;
        text-align: center;
        span, em {
          display: inline-block;
        }
        span {
          color: #f00;
        }
        em {
          font-weight: bold;
          font-style: normal;
        }
      }
    }
    .mint-popup {
      width: 90%;
      top: 20%;
      border: 1px solid #EC2829;
      border-radius: 1rem;
    }
    .kaijiangCon {
      width: 100%;
      padding: 1rem 2rem;
      li {
        border-bottom: 1px dashed #ccc;
        font-size: 16px;
        line-height: 2.4rem;
        span {
          margin-left: 0.5rem;
          color: #EC2829;
        }
      }
    }
  }
</style>
