<template>
  <section id="payment">
    <head-nav title="购彩列表"></head-nav>

    <div class="scroll-content has-header">
      <div class="top">
        <el-button type="info" size="mini" @click="add_list">再选一注</el-button>
        <el-button type="info" size="mini" @click="clear_list">清空列表</el-button>
      </div>
      <ul class="list">
        <li class="item" v-for="(item, index) in list">
          <div class="left">
            <p>号码：{{item.lotteryNo}}</p>
            <p>{{item.multiple}}倍模式</p>
            <p>定位胆，{{item.number}}注{{item.amount}}元</p>
          </div>
          <div class="right">
            <el-button type="danger" size="mini" @click="delete_list(index)">X</el-button>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div @click='lottery'>
        <el-button type="info" size="mini">开奖公告</el-button>
      </div>
      <p>{{nowZhushu}} 注&nbsp&nbsp&nbsp{{nowMoney}} 元</p>
      <div @click="confirm_addNum">
        <el-button type="danger" size="mini" @click.stop='confirm_addNum'>确认投注</el-button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    activated () {
    },
    methods: {
      lottery () {
        // 跳转到开奖公告
        console.log('查看公告')
      },
      confirm_addNum () {
        let balance = this.$store.state.selfInfo.balance
        if (balance == 0) {
          this.$messagebox.confirm('您的余额不足，请充值！').then(action => {
            if (action) {
              this.$router.push('/myinfo')
            }
          })
        } else {
          this.$messagebox.confirm('您确定要投注吗？<br/>总投注金额：' + this.nowMoney).then(action => {
            if (action) {
              let detaList = this.$store.state.payment
              detaList.forEach(item => {
                this.$api.post_call(item).then(res => {
                  if (res.code === '000000') {
                    this.$toast('投注成功')
                  }
                })
              })
            }
          })
        }
      },
      add_list () {
        // 再添一注
        this.$router.push('/playGame')
      },
      delete_list (index) {
        // 删除当前注
        let deleteList = this.$store.state.payment
        deleteList.splice(index, 1)
        this.$store.commit('payment', deleteList)
      },
      clear_list () {
        // 删除所有注
        this.$store.commit('payment', [])
      }
    },
    computed: {
      list () {
        return this.$store.state.payment
      },
      nowZhushu () {
        let arrList = this.list
        var sum = 0
        arrList.forEach(item => {
          sum += item.number
        })
        return sum
      },
      nowMoney () {
        let arrList = this.list
        var sum = 0
        arrList.forEach(item => {
          sum += item.amount
        })
        return sum
      }
    }
  }
</script>

<style lang="less" scoped>
  #payment {
    width: 100%;
    .mint-header {
      background-color: #ec2829;
      font-size: 16px;
    }
    .scroll-content {
      padding-bottom: 4rem;
    }
    .top {
      width: 100%;
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .list {
      width: 100%;
      .item {
        width: 90%;
        margin: 0 auto 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .left {
          width: 70%;
          p {
            padding-left: 2rem;
            text-align: left;
            line-height: 2.4rem;
          }
        }
        .right {
          width: 20%;
        }
      }
    }
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4rem;
      background-color: #000;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .clearLeft, .addRight {
        display: block;
        height: 2rem;
        width: 20%;
        padding: 0 1rem;
      }
      p {
        display: inline-block;
      }
      button {
        padding: 8px 5px;
      }
    }
  }
</style>
