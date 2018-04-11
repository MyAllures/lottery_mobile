<template>
  <div id="activity">

      <head-nav title="优惠活动"></head-nav>

    <div class="activitycon scroll-content has-header">
      <div class="yhhd">
        <em></em>
        <span>优惠活动</span>
      </div>
      <router-link class="item" to="/activityDetail">
        <img :src="imgUrl" alt=""/>
      </router-link>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import img from '../../../assets/img/activity.png'

  export default {
    data () {
      return {
        imgUrl: img
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  #activity {
    .mint-header {
      background-color: #ec2829;
      font-size: 18px;
    }
    .activitycon {
      width: 100%;
      .yhhd {
        display: flex;
        justify-content: left;
        align-items: center;
        width: 100%;
        height: 3rem;
        padding-left: 3%;
        font-size: 14px;
      }
      span {
        display: inline-block;
      }
      em {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.3rem;
        border-radius: 50%;
        border: 3px solid #df060d;
      }
      .item {
        display: block;
        width: 100%;
        height: 6rem;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

</style>
