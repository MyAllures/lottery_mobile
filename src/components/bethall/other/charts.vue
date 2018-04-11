<template>
  <div id="chartsBox">
    <head-nav title="走势图表"></head-nav>
    <div class="scroll-content has-header" style="overflow-x: auto">
      <table id="biaoge">
        <tbody>
        <tr id="title">
          <td rowspan="2" colspan="4">期号</td>
          <td rowspan="2" colspan="5">开奖号码</td>
          <td colspan="10">万位</td>
          <td colspan="10">千位</td>
          <td colspan="10">百位</td>
          <td colspan="10">十位</td>
          <td colspan="10">个位</td>
        </tr>
        <tr id="head">
          <td class="num wan" v-for='item in 10'><strong>{{ (item - 1) }}</strong></td>
          <td class="num qian" v-for='item in 10'><strong>{{ (item - 1) }}</strong></td>
          <td class="num bai" v-for='item in 10'><strong>{{ (item - 1) }}</strong></td>
          <td class="num shi" v-for='item in 10'><strong>{{ (item - 1) }}</strong></td>
          <td class="num ge" v-for='item in 10'><strong>{{ (item - 1) }}</strong></td>
        </tr>
        <tr class="content" v-for='item in allNum.total'>
          <td colspan="4" class="data">{{ item.qishu }}</td>
          <td colspan="1" class="lhc" v-for='val in item.num'><span class='ballOne'>{{ val }}</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 0? 'ballThree' : 'ballTwo'">0</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 1? 'ballThree' : 'ballTwo'">1</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 2? 'ballThree' : 'ballTwo'">2</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 3? 'ballThree' : 'ballTwo'">3</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 4? 'ballThree' : 'ballTwo'">4</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 5? 'ballThree' : 'ballTwo'">5</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 6? 'ballThree' : 'ballTwo'">6</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 7? 'ballThree' : 'ballTwo'">7</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 8? 'ballThree' : 'ballTwo'">8</span></td>
          <td colspan="1" class="lhc wan"><span :class="item.num[0] == 9? 'ballThree' : 'ballTwo'">9</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 0? 'ballThree' : 'ballTwo'">0</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 1? 'ballThree' : 'ballTwo'">1</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 2? 'ballThree' : 'ballTwo'">2</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 3? 'ballThree' : 'ballTwo'">3</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 4? 'ballThree' : 'ballTwo'">4</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 5? 'ballThree' : 'ballTwo'">5</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 6? 'ballThree' : 'ballTwo'">6</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 7? 'ballThree' : 'ballTwo'">7</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 8? 'ballThree' : 'ballTwo'">8</span></td>
          <td colspan="1" class="lhc qian"><span :class="item.num[1] == 9? 'ballThree' : 'ballTwo'">9</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 0? 'ballThree' : 'ballTwo'">0</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 1? 'ballThree' : 'ballTwo'">1</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 2? 'ballThree' : 'ballTwo'">2</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 3? 'ballThree' : 'ballTwo'">3</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 4? 'ballThree' : 'ballTwo'">4</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 5? 'ballThree' : 'ballTwo'">5</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 6? 'ballThree' : 'ballTwo'">6</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 7? 'ballThree' : 'ballTwo'">7</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 8? 'ballThree' : 'ballTwo'">8</span></td>
          <td colspan="1" class="lhc bai"><span :class="item.num[2] == 9? 'ballThree' : 'ballTwo'">9</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 0? 'ballThree' : 'ballTwo'">0</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 1? 'ballThree' : 'ballTwo'">1</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 2? 'ballThree' : 'ballTwo'">2</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 3? 'ballThree' : 'ballTwo'">3</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 4? 'ballThree' : 'ballTwo'">4</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 5? 'ballThree' : 'ballTwo'">5</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 6? 'ballThree' : 'ballTwo'">6</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 7? 'ballThree' : 'ballTwo'">7</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 8? 'ballThree' : 'ballTwo'">8</span></td>
          <td colspan="1" class="lhc shi"><span :class="item.num[3] == 9? 'ballThree' : 'ballTwo'">9</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 0? 'ballThree' : 'ballTwo'">0</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 1? 'ballThree' : 'ballTwo'">1</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 2? 'ballThree' : 'ballTwo'">2</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 3? 'ballThree' : 'ballTwo'">3</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 4? 'ballThree' : 'ballTwo'">4</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 5? 'ballThree' : 'ballTwo'">5</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 6? 'ballThree' : 'ballTwo'">6</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 7? 'ballThree' : 'ballTwo'">7</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 8? 'ballThree' : 'ballTwo'">8</span></td>
          <td colspan="1" class="lhc ge"><span :class="item.num[4] == 9? 'ballThree' : 'ballTwo'">9</span></td>
        </tr>
        </tbody>
      </table>
      <div id="addCanvas"></div>
    </div>

  </div>
</template>

<script>
  import jQuery from 'jquery'
  import allNum from './chartsData.js'

  export default {
    data () {
      return {
        allNum: allNum
      }
    },
    mounted () {
      jQuery(document).ready(function () {
        function fromLeft (selfWidth, selfHeight, cvsWidth, cvsHeight, cvsTop, cvsleft) {
          var w = parseInt(cvsWidth)
          var h = parseInt(cvsHeight)
          var slw = parseInt(selfWidth)
          var slh = parseInt(selfHeight)
          var cvsL = parseInt(cvsleft)
          var cvsT = parseInt(cvsTop)
          var cvsLeft = cvsL + (slw / 2)
          var cvsTop = cvsT + (slh / 2)

          // 创建canvas标签并设置对应的样式属性
          if (!w) {
            w = 2
          }
          var canvas = document.createElement('canvas')
          canvas.style.top = cvsTop + 'px'
          canvas.style.left = cvsLeft + 'px'
          canvas.style.width = w + 'px'
          canvas.style.height = h + 'px'
          canvas.width = w
          canvas.height = h

          // 创建画布，画线
          var context = canvas.getContext('2d')
          context.beginPath()
          context.strokeStyle = '#69f'
          context.lineCap = 'round'
          context.lineWidth = '2'
          context.moveTo(0, 0)
          context.lineTo(w, h)
          context.stroke()
          context.closePath()

          // 把创建好的canvas插入页面
          jQuery('#addCanvas').append(canvas)
        }

        function fromRight (selfWidth, selfHeight, cvsWidth, cvsHeight, cvsTop, cvsleft) {
          var w = parseInt(cvsWidth)
          var h = parseInt(cvsHeight)
          var slw = parseInt(selfWidth)
          var slh = parseInt(selfHeight)
          var cvsL = parseInt(cvsleft)
          var cvsT = parseInt(cvsTop)
          var cvsLeft = cvsL + (slw / 2) - w
          var cvsTop = cvsT + (slh / 2)

          // 创建canvas标签并设置对应的样式属性
          if (!w) {
            w = 2
          }
          var canvas = document.createElement('canvas')
          canvas.style.top = cvsTop + 'px'
          canvas.style.left = cvsLeft + 'px'
          canvas.style.width = w + 'px'
          canvas.style.height = h + 'px'
          canvas.width = w
          canvas.height = h

          // 创建画布，画线
          var context = canvas.getContext('2d')
          context.beginPath()
          context.strokeStyle = '#69f'
          context.lineCap = 'round'
          context.lineWidth = '2'
          context.moveTo(w, 0)
          context.lineTo(0, h)
          context.stroke()
          context.closePath()

          // 把创建好的canvas插入页面
          jQuery('#addCanvas').append(canvas)
        }

        var brr = jQuery('.ballThree').parent()
        var time = null
        if (brr.length) {
          time = setInterval(function () {
            brr = jQuery('.ballThree').parent()
          }, 2000)
        } else {
          clearInterval(time)
        }
        for (var i = 0; i < brr.length - 5; i++) {
          var direction = brr[i].offsetLeft - brr[i + 5].offsetLeft
          var disHeight = Math.abs(brr[i].offsetTop - brr[i + 5].offsetTop)
          var disWidth = Math.abs(brr[i].offsetLeft - brr[i + 5].offsetLeft)
          var selfW = brr[i].clientWidth
          var selfH = brr[i].clientHeight
          var cvsTop = brr[i].offsetTop
          var cvsleft = brr[i].offsetLeft
          if (direction < 0) {
            fromLeft(selfW, selfH, disWidth, disHeight, cvsTop, cvsleft)
          } else {
            fromRight(selfW, selfH, disWidth, disHeight, cvsTop, cvsleft)
          }

        }
      })
    },
    methods: {
      fromLeft: function (selfWidth, selfHeight, cvsWidth, cvsHeight, cvsTop, cvsleft) {
        var w = parseInt(cvsWidth)
        var h = parseInt(cvsHeight)
        var slw = parseInt(selfWidth)
        var slh = parseInt(selfHeight)
        var cvsL = parseInt(cvsleft)
        var cvsT = parseInt(cvsTop)
        var cvsLeft = cvsL + (slw / 2)
        var cvsTop = cvsT + (slh / 2)

        // 创建canvas标签并设置对应的样式属性
        var canvas = document.createElement('canvas')
        canvas.style.top = cvsTop + 'px'
        canvas.style.left = cvsLeft + 'px'
        canvas.style.width = w + 'px'
        canvas.style.height = h + 'px'
        canvas.width = w
        canvas.height = h

        // 创建画布，画线
        var context = canvas.getContext('2d')
        context.beginPath()
        context.strokeStyle = '#69f'
        context.lineCap = 'round'
        context.lineWidth = '2'
        context.moveTo(0, 0)
        context.lineTo(w, h)
        context.stroke()
        context.closePath()

        // 把创建好的canvas插入页面
        $('#addCanvas').append(canvas)
      },
      fromRight: function (selfWidth, selfHeight, cvsWidth, cvsHeight, cvsTop, cvsleft) {
        var w = parseInt(cvsWidth)
        var h = parseInt(cvsHeight)
        var slw = parseInt(selfWidth)
        var slh = parseInt(selfHeight)
        var cvsL = parseInt(cvsleft)
        var cvsT = parseInt(cvsTop)
        var cvsLeft = cvsL + (slw / 2) - w
        var cvsTop = cvsT + (slh / 2)

        // 创建canvas标签并设置对应的样式属性
        var canvas = document.createElement('canvas')
        canvas.style.top = cvsTop + 'px'
        canvas.style.left = cvsLeft + 'px'
        canvas.style.width = w + 'px'
        canvas.style.height = h + 'px'
        canvas.width = w
        canvas.height = h

        // 创建画布，画线
        var context = canvas.getContext('2d')
        context.beginPath()
        context.strokeStyle = '#69f'
        context.lineCap = 'round'
        context.lineWidth = '2'
        context.moveTo(w, 0)
        context.lineTo(0, h)
        context.stroke()
        context.closePath()

        // 把创建好的canvas插入页面
        $('#addCanvas').append(canvas)
      }
    }
  }
</script>

<style lang="less">
  #app{
    overflow-x: auto;
  }
  #chartsBox {
    position: relative;
    width: 1300px;
    margin: 10px auto 0;
    table {
      width: 100%;
      font-size: 14px;
      border: 1px solid #ccc;
      border-collapse: collapse;
    }
    td {
      border: 1px solid #ccc;
      text-align: center;
      padding: 3px 0;
      color: #494949;
      vertical-align: middle;
    }
    #title td, #head td {
      font-weight: bold;
    }
    .content td {
      background-color: #fee3e3;
    }
    .content .wan, .content .bai, .content .ge, .content .data {
      background-color: #dfffdf;
    }
    td.lhc, td.num {
      width: 20px;
      height: 30px;
    }
    span.ballOne,
    span.ballTwo,
    span.ballThree {
      display: block;
      width: 20px;
      height: 20px;
    }
    span.ballOne {
      border-radius: 50px;
      background-color: #bd5151;
      color: #fff;
    }
    span.ballTwo {
      color: #d2b0b0;
    }
    span.ballThree {
      border-radius: 50px;
      background-color: #1c74aa;
      color: #fff;
    }
  }

  #addCanvas canvas {
    position: absolute;
  }
</style>
