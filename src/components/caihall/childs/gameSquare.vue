<template>
  <ul id='gameSquare'>
    <li class="item" v-for='item in listData' @click="goPath(item.path)">
      <div class="aaa">
        <img :src="item.ticketImg" alt=""/>
        <p>{{ item.ticketName }}</p>
        <span>{{ leftTimeCom(item.date, item) }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
  import leftTimer from '../../../plugin/mixin/leftTimer.js'

  export default {
    props: ['listData'],
    data () {
      return {
        imgUrl: require('../../../assets/img/cqssc.png')
      }
    },
    created () {

    },
    methods: {
      leftTimeCom (date, row) {
        if (date) {
          row.left = leftTimer(...date)
          let setIntervalId = setInterval(() => {
            row.left = leftTimer(...date)
          }, 1000)
          return row.left
        }
      },
      goPath (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="less" scoped>
  #gameSquare {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 33.33%;
      .aaa {
        width: 100%;
        display: inline-block;
        font-size: 12px;
        padding-top: 0.4rem;
        border-bottom: 1px solid #dcdcdc;
        border-right: 1px solid #ececea;
        img {
          display: inline-block;
          width: 4rem;
          height: 4rem;
          margin: 0 auto;
        }
        p {
          text-align: center;
          line-height: 1.6rem;
        }
        span {
          display: inline-block;
          line-height: 1.6rem;
          margin: 0 auto;
        }
      }
    }
  }

</style>
