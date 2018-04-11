<template>
  <div>
    <div class="hallTitle">
      <h3>彩种大厅 <span style='font-weight: bold; font-style: italic; color: #ccc;'>BETHALL</span></h3>
    </div>
    <div class="allLottery">
      <div class="lotteryItem" v-for='item in gameList' @click.stop.prevent="goPath(item.path)" >
        <a >
          <img :src="item.ticketImg" :alt="item.ticketName"/>
          <span style="font-size: 1.2rem">{{ item.ticketName }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import img from '../../../assets/img/cqssc.png'
  import allGameList from '../../../assets/js/hallList/allGameList.js'
  import hallLeftNav from '../../../assets/js/hallList/hallLeftNav.js'

  export default {
    data () {
      return {
        imgUrl: img
      }
    },
    created () {
      this.$store.commit('allGameList', allGameList(this))
    },
    computed: {
      gameList () {
        return this.$store.state.allGameList
      }
    },
    methods: {
      goPath (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="less" scoped>
  .hallTitle {
    background-color: #eee;
    width: 100%;
    h3 {
      padding-left: 3.5%;
      line-height: 3.2rem;
      color: #967f7f;
      font-size: 20px;
      font-weight: normal;
      text-align: left;
    }
  }

  .allLottery {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .lotteryItem {
      width: 30%;
      margin-left: 2.5%;
      margin-bottom: 0.6rem;
      box-shadow: 0.2rem 0.2rem 0.2rem #ccc;
      padding:0.5rem 0;
      a {
        display: inline-block;
        width: 100%;
        background-color: #fff;
      }
      img {
        display: block;
        width: 4.8rem;
        height: 4.8rem;
        margin: 0 auto;
      }
      span {
        display: block;
        line-height: 2rem;
        text-align: center;
      }
    }
  }
</style>
