<template>
  <div class="hotPic">
    <a href="#">
      <img :src="hotPic" alt=""/>
    </a>
  </div>
</template>

<script>
  import img from '../../../assets/img/qiandao.jpg'

  export default {
    data () {
      return {
        hotPic: img
      }
    },
    created () {

    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .hotPic {
    width: 100%;
    a {
      width: 100%;
      display: inline-block;
      img {
        display: block;
        width: 100%;
        height: 10rem;
      }
    }
  }
</style>
