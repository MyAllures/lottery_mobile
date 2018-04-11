<template>
  <div id="gameTab">
    <div class="boxOuter">
      <ul class="box">
        <li class="boxItem" v-for="(item, index) in secondNav" @click="thirdNavChange(item.children, index)">
          {{item.backup1}}
        </li>
      </ul>
    </div>
    <div class="boxOuter2">
      <ul class="box2">
        <li class="boxItem2" v-for="(p, index) in thirdNav" @click='boxOuter(index, p)'>{{playMange(p.name)}}
        </li>
      </ul>
    </div>
    <component :is="nowType" :typeData="typeData"></component>
  </div>
</template>

<script>
  import $ from 'jquery'
  import typeOne from '../public/typeOne'
  import typeTwo from '../public/typeTwo'
  import typeThree from '../public/typeThree'
  import config from '../../../assets/js/config'
  import playMange from '../../../assets/js/workBook/playMange'

  export default {
    data () {
      return {
        typeData: [],
        wanfaData: {},
        secondNav: [],
        thirdNav: [],
        firstList: [],
        nowType: '',
        wanData: [],
        threeType: undefined,
        threeId: undefined,
        config: config,
        playMange: playMange
      }
    },
    created () {
      let ticketId = this.$route.params.ticketId
      let allGame = this.$store.state.allGameList
      allGame.forEach(item => {
        if (item.ticketId == ticketId) {
          this.wanfaData = item
        }
      })
      this.secondNav = this.wanfaData.list
      this.secondNav.forEach((item, index) => {
        if (index === 0) {
          this.firstList = item.children
        }
      })
    },
    mounted () {
      // 第一次进入页面，调用初始化第一个二级玩法以及所属三级玩法中的第一个
      this.thirdNavChange(this.firstList)
      // 初始化第一个二级玩法及其所属第一个三级玩法的选中样式
      this.boxStyle()
      this.boxStyle2()
    },
    methods: {
      thirdNavChange (arr, index) {
        // 记录二级玩法的切换状态
        this.$store.commit('gameTab', index)
        // 当二级玩法切换时，呈现所属三级玩法的第一个三级玩法页面
        this.thirdNav = arr
        let arrObj = arr[0]
        this.boxOuter(0, arrObj)
      },
      boxStyle () {
        var allLength = $('.boxItem').length
        var w = $('.boxItem').eq(0).width()
        var allWidth = (w + 10) * allLength
        $('.box').css({width: allWidth + 'px'})
        $('.boxItem').eq(0).addClass('checkRed')
        $('.boxItem').click(function () {
          $('.boxItem2').removeClass('checkRed')
          var index = $(this).index()
          $('.boxItem').removeClass('checkRed')
          $('.boxItem').eq(index).addClass('checkRed')
          if (index > 1 && index < allLength - 1) {
            var parentWidth = $('.box').parent().width()
            var boxLeft = Math.abs(index * w - (parentWidth / 2) + (w / 2)) + (w + 10)
            $('.box').animate({left: -boxLeft + 'px'}, 500)
          } else if (index == allLength - 1) {
            let parentWidth = $('.box').parent().width()
            let boxLeft = Math.abs((allLength - 2) * w - (parentWidth / 2) + (w / 2)) + (w + 10)
            $('.box').animate({left: -boxLeft + 'px'}, 500)
          } else {
            $('.box').animate({left: 0}, 500)
          }
        })
      },
      boxStyle2 () {
        var allLength = $('.boxItem2').length
        var w = $('.boxItem2').eq(0).width()
        var allWidth = (w + 10) * allLength
        $('.box2').css({width: allWidth + 'px'})
        $('.boxItem2').click(function () {
          var index = $(this).index()
          if (index > 1 && index < allLength - 1) {
            var parentWidth = $('.box2').parent().width()
            var boxLeft = Math.abs(index * w - (parentWidth / 2) + (w / 2)) + (w + 10)
            $('.box2').animate({left: -boxLeft + 'px'}, 500)
          } else if (index == allLength - 1) {
            let parentWidth = $('.box2').parent().width()
            let boxLeft = Math.abs((allLength - 2) * w - (parentWidth / 2) + (w / 2)) + (w + 10)
            $('.box2').animate({left: -boxLeft + 'px'}, 500)
          } else {
            $('.box2').animate({left: 0}, 500)
          }
        })
      },
      boxOuter (index, ele) {

        this.threeType = ele.name
        this.threeId = ele.name
        this.$store.commit('threeId', this.threeId)
        this.typeData = this.config[this.threeType].play
        if (this.$route.params.ticketId == 20 && this.threeType != 14 && this.threeType != 13) {
          this.nowType = 'type-two'
        } else if (this.threeType == 14 || this.threeType == 13) {
          this.nowType = 'type-three'
        } else {
          this.nowType = 'type-one'
        }
        setTimeout(() => {
          // 选中时，改变三级玩法的样式
          $('.boxItem2').removeClass('checkRed')
          $('.boxItem2').eq(index).addClass('checkRed')
        }, 10)
      }
    },
    watch: {
      threeType (val) {
        if (val) {
          this.typeData = this.config[this.threeType].play
        }
      },
      threeId (val) {
        if (val) {
          this.threeId = val
          this.$store.commit('threeId', this.threeId)
        }
      }
    },
    components: {
      'type-one': typeOne,
      'type-two': typeTwo,     // 芝麻特码
      'type-three': typeThree // 五行
    }
  }
</script>

<style lang="less" scoped>
  #gameTab {
    width: 100%;
    height: 7rem;
    padding-top: 0.2rem;
    background-color: #e9e9e9;
    .boxOuter, .boxOuter2 {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 50%;
    }
    .box, .box2 {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
    }
    .boxItem, .boxItem2 {
      float: left;
      width: 80px;
      margin: 0 4px;
      text-align: center;
      line-height: 3rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
    }
    .checkRed {
      color: #ec2829;
      border: none;
      border: 1px solid #ec2829;
    }
  }

</style>
