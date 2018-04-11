<template>
  <ul id='gameItem'>
    <li class="item" v-for='item in listData' @click="goPath(item.path)">
      <div class="aqq">
        <div class="left">
          <img :src="item.ticketImg" alt=""/>
        </div>
        <div class="right">
          <div class="top">
            <span style='float: left; color: #000;'>{{ item.ticketName }}</span>
            <span style='float: right; padding-right: 0.5rem; color: #eb2929;'>第5555期</span>
          </div>
          <div class="middle">
            <span v-for='val in item.winNum' style='float: left; margin-right: 3px; color: #eb2929;'>{{ val }}</span>
          </div>
          <div class="bottom">
            <span style='float: left; font-size: 12px;'>距11111期截止还有</span>
            <span style='float: right; padding-right: 0.5rem;'>{{ leftTime }}</span>
          </div>
        </div>

      </div>
    </li>
  </ul>
</template>

<script>
  import leftTimer from '../../../plugin/mixin/leftTimer.js'
  import { judgeTime2 } from '../../../assets/js/time'
  export default {
    props: ['listData'],
    data () {
      return {
        imgUrl: require('../../../assets/img/cqssc.png'),
        caiData: [],
        time: undefined,
        leftTime: undefined
      }
    },
    activated () {
      this.time = leftTimer(2018, 1, 13, 17, 30, 30)
      setInterval(() => {
        this.time = leftTimer(2018, 1, 13, 17, 30, 30)
      }, 1000)
    },
    methods: {
      leftTimeCom (date, row) {
        if (date) {
          row.left = leftTimer(...date)
          alert(row.left)
          let setIntervalId = setInterval(() => {
            row.left = leftTimer(...date)
          }, 1000)
          localStorage.setItem('setInterval_id', setIntervalId)
          return row.left
        }
      },
      getKaiDate (ticketId) {
        this.$api.getkaiDate10(ticketId).then(res => {
          if (res.code === '000000') {
            console.log(res.data)
//            let dao = judgeTime2(Date.now() + 180000)
            let dao = judgeTime2(res.data)
            let arr = dao.split('-')
            this.leftTime = leftTimer(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5])
            this.setId = setInterval(() => {
              this.leftTime = leftTimer(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5])
              if (this.leftTime === '00:00:00') {
                clearInterval(this.setId)
//                this.getKaiDate()
              }
            }, 1000)
          }
        })
      },
      goPath (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="less" scoped>
  #gameItem {
    width: 100%;
    .item {
      width: 100%;
      .aqq {
        overflow: hidden;
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid #dcdcdc;
        color: #666666;
        background: url('../../../assets/img/goTo.png') 98% center no-repeat;
        background-size: 0.5rem 1rem;
      }
      .left {
        float: left;
        width: 25%;
        padding: 0.7rem;
        img {
          display: block;
          width: 5rem;
          height: 5rem;
        }
      }
      .right {
        float: right;
        width: 75%;
        padding-right: 1rem;
        .top, .middle, .bottom {
          display: inline-block;
          width: 100%;
          line-height: 1.8rem;
          span {
            display: inline-block;
            font-size: 14px;
          }
        }
        .top {
          padding-top: 0.3rem;
        }
      }
    }
  }

</style>
