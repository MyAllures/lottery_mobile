<template>
  <!--<section>
        <game-header :gameDatas='gameDatas'></game-header>
        <div class="scroll-content has-header">
            <game-top :gameDatas='gameDatas'></game-top>
            <game-tab></game-tab>
        </div>
    </section>-->
  <keep-alive>
    <component :is="myGame" :nowWanfaList="nowWanfaList"></component>
  </keep-alive>
  <!--<my-cqssc :nowWanfaList="nowWanfaList"></my-cqssc>-->
</template>

<script>
  import cqssc from './gameList/cqssc'
  import bjpk10 from './gameList/bjpk10'
  import lhc from './gameList/lhc'
  import pl3 from './gameList/pl3'
  import sfpk10 from './gameList/sfpk10'
  import sfssc from './gameList/sfssc'
  import ssc from './gameList/ssc'
  import syx5 from './gameList/syx5'
  import gd11x5 from './gameList/gd11x5'
  import jx11x5 from './gameList/jx11x5'
  import jxk3 from './gameList/jxk3'

  export default {
    data () {
      return {
        myGame: 'my-cqssc',
        wanfaList: [],
        nowWanfaList: []
      }
    },
    activated () {
      let list = this.$store.state.allGameList
      this.wanfaList = list
      // 保存根据路由跳转传入的ticketId
      var wanfaID = this.$route.params.ticketId
      // 根据保存的这个wanfaID来遍历请求到的全部的玩法数据wanfaList
      this.wanfaList.forEach(item => {
        if (item.ticketId == wanfaID) {
          // 把符合当前ticketId的数据保存到当前玩法数据nowWanfaList中
          this.nowWanfaList = item
          this.judgeTicketId(wanfaID)
        }
      })
    },
    methods: {
      judgeTicketId (id) {
        let mes = id * 1
        switch (mes) {
          case 31:
            this.myGame = 'my-syx5'; break
          case 22:
            this.myGame = 'my-ssc'; break
          case 24:
            this.myGame = 'my-sfssc'; break
          case 20:
            this.myGame = 'my-lhc'; break
          case 21:
            this.myGame = 'my-bjpk10'; break
          case 17:
            this.myGame = 'my-pl3'; break
          case 18:
            this.myGame = 'my-sfpk10'; break
          case 32:
            this.myGame = 'my-gd11x5'; break
          case 33:
            this.myGame = 'my-jx11x5'; break
          case 34:
            this.myGame = 'my-jxk3'; break
          default:
            break
        }
      }
    },
    components: {
      'my-cqssc': cqssc,
      'my-bjpk10': bjpk10,
      'my-lhc': lhc,
      'my-pl3': pl3,
      'my-sfpk10': sfpk10,
      'my-sfssc': sfssc,
      'my-ssc': ssc,
      'my-syx5': syx5,
      'my-gd11x5': gd11x5,
      'my-jx11x5': jx11x5,
      'my-jxk3': jxk3
    }
  }
</script>

<style lang="less" scoped>
</style>
