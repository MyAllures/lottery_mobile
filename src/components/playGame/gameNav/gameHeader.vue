<template>
  <mt-header fixed :title="gameTitle">
    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
    <div class="zhushou" @mouseover="zhushouOpen" @mouseout="zhushouOpen" slot="right">
      <!--<img :src="loginImg" height="24" width="24" slot="icon">-->
      助手
      <div class="zhushouCon" v-show="zhushou">
        <span @click="jilv($event)">投注记录</span>
        <span @click="kaijiang($event)">最近开奖</span>
      </div>
      <!--<el-button v-popover:pop >助手</el-button>
            <el-popover
              ref="pop"
              placement="bottom"
              title="标题"
              width="200"
              trigger="click">
              <span @click="jilv($event)">投注记录</span>
                <span @click="kaijiang($event)">最近开奖</span>
          </el-popover>-->
    </div>
  </mt-header>
</template>

<script>
  export default {
    props: ['gameTitle'],
    data () {
      return {
        zhushou: false,
        popupVisible: true
      }
    },
    created () {

    },
    methods: {
      zhushouOpen () {
        this.zhushou = !this.zhushou
      },
      jilv (e) {
        this.$router.push('/myinfo')
      },
      kaijiang (e) {
        this.$router.push('/notice')
      }

    },
    components: {}
  }
</script>

<style lang="less" scoped>
  .mint-header {
    background-color: #ec2829;
    font-size: 16px;
  }

  .zhushou {
    position: relative;
    display: inline-block;
    .zhushouCon {
      position: absolute;
      bottom: -5rem;
      right: 1rem;
      height: 5rem;
      padding: 0.6rem 1rem 0;
      background: url("../../../assets/img/zhushoubox.png") center no-repeat;
      background-size: 100% 100%;
      z-index: 100;
      span {
        display: block;
        height: 2rem;
        color: #EC2829;
        font-size: 14px;
        text-align: center;
        line-height: 2rem;
      }
    }
  }
</style>
