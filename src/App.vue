<template>
  <div id="app">
    <transition :name="$router.isBack?'slide-right':'slide-left'">
      <keep-alive>
        <router-view class="app_router_view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import judge from './assets/js/judgeType'

  export default {
    name: 'app',
    created () {
      judge(function (res) {
        if (res === '电脑') {
          window.location.href = '../index.html'
        }
      })

//      this.$api.getMyInfo().then(res => {
//        console.log(res)
//        if (res.code === '000100') {
//          this.$api.getVistor().then(res => {
//            if (res.code === '000000') {
//              console.log(res)
//            }
//          })
//        }
//      })
    }
  }
</script>

<style lang="less">
  @import "assets/stytle/app.less";

  .app_router_view {
    position: absolute;
    transition: all 0.5s;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .slide-left-enter, .slide-right-leave-to {
    transform: translate(100%, 0);
  }

  .slide-left-leave-to, .slide-right-enter {
    transform: translate(-100%, 0);
  }
</style>
