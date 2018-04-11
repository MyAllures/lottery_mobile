<template>
  <mt-header fixed class="header_nav" title="">
    <span slot="left">418彩票网</span>
	  	<span v-if="show" class="betLogin flex" @click="goSelf" slot="right">
		  	<img src="../../../assets/img/login.png" height="24" width="24" slot="icon">
        <i class="iconfont icon-jindous2x" style="color: yellow;padding: 0 2px;margin-top: 5px"></i>
        <mark style="line-height: 24px">{{balance}}</mark>
		</span>
  </mt-header>
</template>

<script>
  export default {
    data () {
      return {
        loginImg: '../../../assets/img/login.png',
        show: false
      }
    },
    activated () {
      let l = sessionStorage.getItem('selfInfo')
      if (l) { this.show = true } else { this.show = false }
    },
    computed: {
      balance () {
        return this.$store.state.selfInfo.balance
      }
    },
    methods: {
      goSelf () {
        this.$router.push('/myinfo')
      }
    }
  }
</script>

<style lang="less" scoped>
  .mint-header {
    background-color: #ec2829;
    font-size: 18px;
  }

  .betLogin {
    /*display: inline-block;*/

    /*line-height: 27px;*/
    /*height:27px;*/
  }
</style>
