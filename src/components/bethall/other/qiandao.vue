<template>
  <section>
    <head-nav title="每日签到"></head-nav>
    <div class="scroll-content has-header">
      <div class="qiandao-warp">
        <div class="qiandap-box">
          <div class="qiandao-banner">
            <img src="./images/qiandao_banner.jpg" height="551" width="1120" alt="">
          </div>
          <div class="qiandao-con clear">
            <div class="qiandao-left">
              <div class="qiandao-left-top clear">
                <div class="current-date">2016年1月6日</div>
                <div class="qiandao-history qiandao-tran qiandao-radius" @click="clickQiandaoHistory"
                     id="js-qiandao-history">我的签到
                </div>
              </div>
              <div class="qiandao-main" id="js-qiandao-main">
                <ul class="qiandao-list" id="js-qiandao-list">
                </ul>
              </div>
            </div>
            <div class="qiandao-right">
              <div class="qiandao-top">
                <div class="just-qiandao qiandao-sprits" id="js-just-qiandao">
                </div>
                <p class="qiandao-notic">今日已领<span>0.1</span>元，请明日继续签到</p>
              </div>
              <div class="qiandao-bottom">
                <div class="qiandao-rule-list">
                  <h4>签到规则</h4>
                  <p>首次签到获得0.05元现金奖励</p>
                  <p>连续签到每天增加0.01元现金奖励</p>
                  <p>连续签到16天及以上每天获得0.2元现金奖励</p>
                </div>
                <div class="qiandao-rule-list">
                  <h4>其他说明</h4>
                  <p>如果中间有一天间断未签到的，重先开始计算连续签到时间。</p>
                  <p>连续签到获得奖励后分享到QQ空间、微信朋友圈后再获得一次奖励，每天只限分享一次。</p>
                  <p>获得的奖励不能直接提现，只能投资后转让变现。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 我的签到 layer start -->
      <div class="qiandao-layer qiandao-history-layer">
        <div class="qiandao-layer-con qiandao-radius">
          <a href="javascript:;" ref="close-qiandao-layer" @click="closeLayer"
             class="close-qiandao-layer qiandao-sprits"></a>
          <ul class="qiandao-history-inf clear">
            <li>
              <p>连续签到</p>
              <h4>5</h4>
            </li>
            <li>
              <p>本月签到</p>
              <h4>17</h4>
            </li>
            <li>
              <p>总共签到数</p>
              <h4>28</h4>
            </li>
            <li>
              <p>签到累计奖励</p>
              <h4>30</h4>
            </li>
          </ul>
          <div class="qiandao-history-table">
            <table>
              <thead>
              <tr>
                <th>签到日期</th>
                <th>奖励</th>
                <th>说明</th>
              </tr>
              </thead>
              <table>
                <tr>
                  <td>2016-1-6 14:23:45</td>
                  <td>0.20</td>
                  <td>连续签到19天奖励</td>
                </tr>
                <tr>
                  <td>2016-1-6 14:23:45</td>
                  <td>0.20</td>
                  <td>分享奖励</td>
                </tr>
                <tr>
                  <td>2016-1-6 14:23:45</td>
                  <td>0.20</td>
                  <td>连续签到19天奖励</td>
                </tr>
                <tr>
                  <td>2016-1-6 14:23:45</td>
                  <td>0.20</td>
                  <td>连续签到19天奖励</td>
                </tr>
                <tr>
                  <td>2016-1-6 14:23:45</td>
                  <td>0.20</td>
                  <td>连续签到19天奖励</td>
                </tr>
                <tr>
                  <td>2016-1-6 14:23:45</td>
                  <td>0.20</td>
                  <td>连续签到19天奖励</td>
                </tr>
                <tr>
                  <td>2016-1-6 14:23:45</td>
                  <td>0.20</td>
                  <td>连续签到19天奖励</td>
                </tr>
                <tr>
                  <td>2016-1-6 14:23:45</td>
                  <td>0.20</td>
                  <td>连续签到19天奖励</td>
                </tr>
              </table>
            </table>
          </div>
        </div>
        <div class="qiandao-layer-bg"></div>
      </div>
      <!-- 我的签到 layer end -->
      <!-- 签到 layer start -->
      <div class="qiandao-layer qiandao-active">
        <div class="qiandao-layer-con qiandao-radius">
          <a href="javascript:;" class="close-qiandao-layer qiandao-sprits"></a>
          <div class="yiqiandao clear">
            <div class="yiqiandao-icon qiandao-sprits"></div>
            您已连续签到<span>2</span>天
          </div>
          <div class="qiandao-jiangli qiandao-sprits">
            <span class="qiandao-jiangli-num">0.55<em>元</em></span>
          </div>
          <a href="#" class="qiandao-share qiandao-tran">分享获取双倍收益</a>
        </div>
        <div class="qiandao-layer-bg"></div>
      </div>
      <!-- 签到 layer end -->
    </div>

  </section>
</template>

<script>
  import $ from 'jquery'

  export default {
    data () {
      return {}
    },
    created () {
      setTimeout(() => {
        this.signFun()
      }, 1000)
    },
    methods: {
      signFun () {
        var dateArray = [1, 2, 4, 6] // 假设已经签到的
        var $dateBox = $('#js-qiandao-list'),
          $currentDate = $('.current-date'),
          $qiandaoBnt = $('#js-just-qiandao'),
          _html = '',
          _handle = true,
          myDate = new Date()
        $currentDate.text(myDate.getFullYear() + '年' + parseInt(myDate.getMonth() + 1) + '月' + myDate.getDate() + '日')

        var monthFirst = new Date(myDate.getFullYear(), parseInt(myDate.getMonth()), 1).getDay()

        var d = new Date(myDate.getFullYear(), parseInt(myDate.getMonth() + 1), 0)
        var totalDay = d.getDate() // 获取当前月的天数

        for (var i = 0; i < 42; i++) {
          _html += ' <li><div class="qiandao-icon"></div></li>'
        }
        $dateBox.html(_html) // 生成日历网格
        var $dateLi = $dateBox.find('li')
        for (var i = 0; i < totalDay; i++) {
          $dateLi.eq(i + monthFirst).addClass('date' + parseInt(i + 1))
          for (var j = 0; j < dateArray.length; j++) {
            if (i == dateArray[j]) {
              $dateLi.eq(i + monthFirst).addClass('qiandao')
            }
          }
        } // 生成当月的日历且含已签到

        $('.date' + myDate.getDate()).addClass('able-qiandao')

        $dateBox.on('click', 'li', function () {
          alert(_handle)
          if ($(this).hasClass('able-qiandao') && _handle) {
            $(this).addClass('qiandao')
            qiandaoFun()
          }
        }) // 签到

        $qiandaoBnt.on('click', function () {
          if (_handle) {
            qiandaoFun()
          }
        }) //签到

        function qiandaoFun () {
          $qiandaoBnt.addClass('actived')
          this.openLayer('qiandao-active', qianDao)
          _handle = false
        }

        function qianDao () {
          $('.date' + myDate.getDate()).addClass('qiandao')
        }
      },
      // 打开弹窗
      openLayer (a, Fun) {
        $('.' + a).fadeIn(Fun)
      },
      // 关闭弹窗
      closeLayer () {
        let d = this.$refs['close-qiandao-layer']
        $(d).parents('.qiandao-layer').fadeOut()
      },
      clickQiandaoHistory () {
        this.openLayer('qiandao-history-layer', myFun)

        function myFun () {
          console.log(1)
        } // 打开弹窗返回函数
      }
    }
  }
</script>

<style lang="less">


  img {
    vertical-align: top
  }

  /* 以上可合并 */
  .clear {
    clear: both
  }

  .clear:after {
    clear: both;
    display: table;
    content: ''
  }

  .qiandao-sprits {
    background-image: url(./images/qiandao_sprits.png);
    background-repeat: no-repeat
  }

  .qiandao-tran {
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
    -ms-transition: all .3s ease-out
  }

  .qiandao-radius {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px
  }

  .qiandao-warp {
    height: 1306px;
    background: url(./images/qiandao_warp_bg.jpg) no-repeat top center
  }

  .qiandap-box {
    margin: 0 auto;
    width: 70pc;
    height: 1306px;
    background-color: #4d56a3
  }

  .qiandao-con {
    margin: 0 auto;
    width: 1035px;
    height: 684px;
    background-image: url(./images/qiandao_con.jpg)
  }

  .qiandao-left {
    float: left;
    padding: 20px 42px 0 39px;
    width: 603px
  }

  .qiandao-right {
    float: right;
    padding: 0 20px;
    width: 290px
  }

  .current-date {
    float: left;
    padding-top: 5px;
    padding-left: 55px;
    color: #b25d06;
    font-size: 18px
  }

  .qiandao-history {
    float: right;
    width: 92px;
    height: 36px;
    border-radius: 4px;
    background-color: #b25d06;
    color: #fff;
    text-align: center;
    font-size: 1pc;
    line-height: 36px;
    cursor: pointer
  }

  .qiandao-history:hover {
    background-color: #9c4f01
  }

  .qiandao-top {
    padding-top: 70px;
    height: 13pc
  }

  .just-qiandao {
    margin: 0 auto 20px;
    width: 212px;
    height: 67px;
    cursor: pointer
  }

  .just-qiandao.actived, .just-qiandao:active {
    background-position: 0 -68px
  }

  .qiandao-notic {
    color: #b25d06;
    text-align: center;
    font-size: 18px
  }

  .qiandao-rule-list {
    margin-bottom: 35px;
    color: #8d8ebb;
    font-size: 1pc;
    line-height: 26px
  }

  .qiandao-rule-list h4 {
    font-weight: bolder;
    font-size: 1pc
  }

  .qiandao-main {
    overflow: hidden;
    width: 603px
  }

  .qiandao-list {
    margin-top: 76px;
    margin-right: -10px
  }

  .qiandao-list li {
    position: relative;
    float: left;
    margin: 0 1px 1px 0;
    width: 85px;
    height: 85px;
    background-image: url(./images/qiandao_day.png);
    background-position: 0 0
  }

  .qiandao-list li.date1 {
    background-position: -430px 0
  }

  .qiandao-list li.date2 {
    background-position: -516px 0
  }

  .qiandao-list li.date3 {
    background-position: 0 -86px
  }

  .qiandao-list li.date4 {
    background-position: -86px -86px
  }

  .qiandao-list li.date5 {
    background-position: -172px -86px
  }

  .qiandao-list li.date6 {
    background-position: -258px -86px
  }

  .qiandao-list li.date7 {
    background-position: -344px -86px
  }

  .qiandao-list li.date8 {
    background-position: -430px -86px
  }

  .qiandao-list li.date9 {
    background-position: -516px -86px
  }

  .qiandao-list li.date10 {
    background-position: 0 -172px
  }

  .qiandao-list li.date11 {
    background-position: -86px -172px
  }

  .qiandao-list li.date12 {
    background-position: -172px -172px
  }

  .qiandao-list li.date13 {
    background-position: -258px -172px
  }

  .qiandao-list li.date14 {
    background-position: -344px -172px
  }

  .qiandao-list li.date15 {
    background-position: -430px -172px
  }

  .qiandao-list li.date16 {
    background-position: -516px -172px
  }

  .qiandao-list li.date17 {
    background-position: 0 -258px
  }

  .qiandao-list li.date18 {
    background-position: -86px -258px
  }

  .qiandao-list li.date19 {
    background-position: -172px -258px
  }

  .qiandao-list li.date20 {
    background-position: -258px -258px
  }

  .qiandao-list li.date21 {
    background-position: -344px -258px
  }

  .qiandao-list li.date22 {
    background-position: -430px -258px
  }

  .qiandao-list li.date23 {
    background-position: -516px -258px
  }

  .qiandao-list li.date24 {
    background-position: 0 -344px
  }

  .qiandao-list li.date25 {
    background-position: -86px -344px
  }

  .qiandao-list li.date26 {
    background-position: -172px -344px
  }

  .qiandao-list li.date27 {
    background-position: -258px -344px
  }

  .qiandao-list li.date28 {
    background-position: -344px -344px
  }

  .qiandao-list li.date29 {
    background-position: -430px -344px
  }

  .qiandao-list li.date30 {
    background-position: -516px -344px
  }

  .qiandao-list li.date31 {
    background-position: 0 -430px
  }

  .qiandao-list li .qiandao-icon {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: none;
    width: 85px;
    height: 85px;
    background: url(./images/qiandao_icon.png) no-repeat center center
  }

  .qiandao-list li.qiandao .qiandao-icon {
    display: block
  }

  .qiandao-layer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 888;
    display: none;
    width: 100%
  }

  .qiandao-layer-bg {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .55;
    filter: alpha(opacity=55)
  }

  .qiandao-layer-con {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    padding-top: 30px;
    border: 3px #33b23f solid;
    border-radius: 5px;
    background-color: #fff
  }

  .qiandao-history-layer .qiandao-layer-con {
    margin: -257px 0 0 -293px;
    width: 586px;
    height: 484px
  }

  .close-qiandao-layer {
    position: absolute;
    top: 13px;
    right: 13px;
    width: 1pc;
    height: 1pc;
    background-position: -228px -51px
  }

  .qiandao-history-inf {
    margin-top: 25px;
    color: #666;
    text-align: center;
    font-size: 14px
  }

  .qiandao-history-inf li {
    float: left;
    width: 25%
  }

  .qiandao-history-inf li h4 {
    color: #33b23f;
    font-size: 40px;
    line-height: 50px
  }

  .qiandao-history-table {
    overflow: hidden;
    margin: 20px;
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    -o-border-radius: 5px 5px 0 0;
    -ms-border-radius: 5px 5px 0 0
  }

  .qiandao-history-table table {
    width: 100%;
    color: #666;
    text-align: center;
    font-size: 1pc;
    border-spacing: 0
  }

  .qiandao-history-table table th {
    width: 33.3%;
    background-color: #f2f2f2;
    text-align: center;
    line-height: 40px
  }

  .qiandao-history-table td {
    width: 33.3%;
    border-bottom: 1px #e5e5e5 dashed;
    line-height: 34px
  }

  .qiandao-active .qiandao-layer-con {
    margin: -232px 0 0 -211px;
    width: 422px;
    height: 434px
  }

  .yiqiandao {
    margin: 36px 0 0 40px;
    color: #666;
    font-size: 14px;
    line-height: 38px
  }

  .yiqiandao .yiqiandao-icon {
    float: left;
    margin: 0 25px;
    width: 178px;
    height: 38px;
    background-position: -217px 0
  }

  .qiandao-jiangli {
    position: relative;
    margin: 45px auto;
    width: 335px;
    height: 170px;
    background-position: 0 -146px
  }

  .qiandao-jiangli span {
    position: absolute;
    top: 58px;
    left: 50px;
    display: block;
    width: 178px;
    height: 106px;
    color: #ff7300;
    text-align: center;
    font-weight: bolder;
    font-size: 30px;
    line-height: 106px
  }

  .qiandao-jiangli span em {
    padding-left: 5px;
    font-style: normal;
    font-size: 1pc
  }

  .qiandao-share {
    display: block;
    margin: 60px auto 0;
    width: 318px;
    height: 3pc;
    border-radius: 5px;
    background-color: #4ab854;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 3pc
  }

  .qiandao-share:hover {
    background-color: #3e9d46
  }


</style>
