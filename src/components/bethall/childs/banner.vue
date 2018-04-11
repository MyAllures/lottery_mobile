<template>
  <div class="banner">
    <mt-swipe :auto="6000">
      <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item.image" alt="轮播图"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import img from '../../../assets/img/banner.png'

  export default {
    data () {
      return {
        bannerList: [
          {
            image: img
          }
        ]
      }
    },
    created () {
      this.getBannerList()
    },
    methods: {
      getBannerList () {
        this.$api.request_banner().then(res => {
          if (res.code === '000000') {
            this.bannerList = res.data.list
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .banner {
    width: 100%;
    height: 15rem;
    background-color: #fff;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
