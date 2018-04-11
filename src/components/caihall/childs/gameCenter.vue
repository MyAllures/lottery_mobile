<template>
  <div id='gameCenter'>
    <mt-navbar class='gameNav' v-model="selected">
      <mt-tab-item id="1">
        <img @click='allPinDown' :src="allPin" alt="全部"/>
      </mt-tab-item>
      <mt-tab-item id="2">
        <img @click='gaoPinDown' :src="gaoPin" alt="高频彩"/>
      </mt-tab-item>
      <mt-tab-item id="3">
        <img @click='diPinDown' :src="diPin" alt="低频彩"/>
      </mt-tab-item>
    </mt-navbar>

    <!-- 条状分布 -->
    <mt-tab-container v-if='gameSwitch' v-model="selected">
      <mt-tab-container-item id="1">
        <my-gameItem :listData='allData'></my-gameItem>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <my-gameItem :listData='gpData'></my-gameItem>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <my-gameItem :listData='dpData'></my-gameItem>
      </mt-tab-container-item>
    </mt-tab-container>

    <!-- 块状分布 -->
    <mt-tab-container v-else v-model="selected">
      <mt-tab-container-item id="1">
        <my-gameSquare :listData='allData'></my-gameSquare>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <my-gameSquare :listData='gpData'></my-gameSquare>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <my-gameSquare :listData='dpData'></my-gameSquare>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import gameSquare from './gameSquare'
  import gameItem from './gameItem'
  import allData from './allData/allData.js'
  import gpData from './allData/gpData.js'
  import dpData from './allData/dpData.js'

  export default {
    data () {
      return {
        allData: [],
        gpData: [],
        dpData: [],
        selected: '1',
        allPin: '',
        gaoPin: '',
        diPin: '',
        centerSrc: {
          type: {
            one: require('../../../assets/img/gcNav1.png'),
            two: require('../../../assets/img/gcNav2.png'),
            three: require('../../../assets/img/gcNav3.png')
          },
          typeRed: {
            one: require('../../../assets/img/gcNavRed1.png'),
            two: require('../../../assets/img/gcNavRed2.png'),
            three: require('../../../assets/img/gcNavRed3.png')
          }
        }
      }
    },
    activated () {
      this.allData = this.$store.state.allGameList
      this.allPin = this.centerSrc.typeRed.one
      this.gaoPin = this.centerSrc.type.two
      this.diPin = this.centerSrc.type.three
      this.judgeGaoOrDi()
    },
    methods: {
      judgeGaoOrDi () {
        if (this.allData) {
          this.dpData = []
          this.gpData = []
          this.allData.forEach(item => {
            if (item.ticketId === 17 || item.ticketId === 33 || item.ticketId === 20) {
              this.dpData.push(item)
            } else {
              this.gpData.push(item)
            }
          })
        }
      },
      allPinDown () {
        this.allPin = this.centerSrc.typeRed.one
        this.gaoPin = this.centerSrc.type.two
        this.diPin = this.centerSrc.type.three
      },
      gaoPinDown () {
        this.allPin = this.centerSrc.type.one
        this.gaoPin = this.centerSrc.typeRed.two
        this.diPin = this.centerSrc.type.three
      },
      diPinDown () {
        this.allPin = this.centerSrc.type.one
        this.gaoPin = this.centerSrc.type.two
        this.diPin = this.centerSrc.typeRed.three
      }
    },
    components: {
      'my-gameItem': gameItem,
      'my-gameSquare': gameSquare
    },
    computed: {
      gameSwitch () {
        return this.$store.state.gameSwitch
      }
    }
  }
</script>

<style lang="less">
  #gameCenter {
    width: 100%;
    .gameNav {
      width: 100%;
      a {
        padding:0;
        border: none;
        margin:0;
        height:100%;
      }
      img {
        display: block;
        width: 100%;
      }
    }
    .mint-tab-item-label{
      padding:0.1rem 0;
    }
  }
</style>
