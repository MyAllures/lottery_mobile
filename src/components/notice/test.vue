<template>
  <div>
    <ul class="draw_notice_ul">
      <li>
        <a href="">
          <div class="top"><span class="spa1">分分彩</span><span class="spa2">第201712270936期</span></div>
          <div class="content1">
            <span>3</span>
            <span>6</span>
            <span>8</span>
            <span>2</span>
            <span>7</span>
            <span class="ioc">=</span>
            <span>26</span>
            <span>大</span>
            <span>双</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="top"><span class="spa1">北京赛车</span><span class="spa2">第658408期</span></div>
          <div class="content2">
            <span class="pk1">10</span>
            <span class="pk2">9</span>
            <span class="pk3">3</span>
            <span class="pk4">8</span>
            <span class="pk5">6</span>
            <span class="pk6">1</span>
            <span class="pk7">2</span>
            <span class="pk8">5</span>
            <span class="pk9">7</span>
            <span class="pk10">4</span>
            <span class="pk">=</span>
            <span class="pk">11</span>
            <span class="pk">和</span>
            <span class="pk">和</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="top"><span class="spa1">PC蛋蛋</span><span class="spa2">第863836期</span></div>
          <div class="content1">
            <span>3</span>
            <span>6</span>
            <span>8</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="top"><span class="spa1">香港六合彩</span><span class="spa2">第2017151期</span></div>
          <div class="content1">
            <span>37</span>
            <span>02</span>
            <span>07</span>
            <span>30</span>
            <span>16</span>
            <span>28</span>
            <span>12</span>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="top"><span class="spa1">分分彩</span><span class="spa2">第201712270936期</span></div>
          <div class="content1">
            <span>3</span>
            <span>6</span>
            <span>8</span>
            <span class="ioc">=</span>
            <span>26</span>
            <span>大</span>
            <span>双</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {
    },
    methods: {}


  }
</script>

<style lang="less" scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  .draw_notice_ul {
    width: 100%;

    li {
      width: 100%;
      height: 82px;
      background: #F6F6F6;
      list-style: none;
      padding: 6px 11px;
      border-bottom: 1px solid #e3e3e3;
      a {

        .top {
          width: 100%;
          height: 28px;
          .spa1 {
            color: #000000;
            line-height: 28px;
            font-size: 20px;
            margin-right: 8px;
            float: left;
          }
          .spa2 {
            color: #888888;
            float: left;
            line-height: 32px;
            font-size: 18px
          }
        }
        .content1 {
          width: 100%;
          float: left;
          span {
            width: 33px;
            height: 33px;
            line-height: 34px;
            margin: 0px 2px;
            display: block;
            float: left;
            background: #cd0005;
            border-radius: 100%;
            color: #ffffff;
          }
          .ioc {
            background: none;
            color: #000000;
            font-weight: bold;
            margin: 0px -6px
          }
        }
        .content2 {
          width: 100%;
          float: left;
          span {
            color: #ffffff;
            width: 20px;
            height: 20px;
            border-radius: 4px;
            line-height: 20px;
            text-align: center;
            font-size: 14px;
            font-style: italic;
            font-weight: bold;
            float: left;
            margin-right: 6px;
            text-shadow: 1px 1px 0 #000000;
          }

          .pk1 {
            background: #0089FF;
          }
          .pk2 {
            background: #760000;
          }
          .pk3 {
            background: #5200FF;
          }
          .pk4 {
            background: #FF0000;
          }
          .pk5 {
            background: #FF7300;
          }
          .pk6 {
            background: #FFFF00;
          }
          .pk7 {
            background: #81FFFF;
          }
          .pk8 {
            background: #209900;
          }
          .pk9 {
            background: #B8B8B8;
          }
          .pk10 {
            background: #4C4C4C;
          }
          .pk {
            font-style: normal;
            color: #000000;
            text-shadow: none;
            font-size: 16px;
            font-weight: normal;
            margin: 0px
          }
        }
      }
    }
  }


</style>
