<template>
  <div class="fastMenu">
    <router-link v-for='(item,index) in fastMenu' class="itemMenu" :key="index" :to="item.path">
      <!--<img :src="item.imgUrl" :alt="item.menuName" />-->
      <i style="display: block;font-size: 3rem;margin-top: 0.5rem" :class="'iconfont ' + item.icon"></i>
      <span style="font-size: 1.3rem">{{ item.menuName }}</span>
    </router-link>
  </div>
</template>

<script>
  import img from '../../../assets/img/access.png'

  export default {
    data () {
      return {
        fastMenu: [
          {
            menuName: '存/取款',
            path: '/myinfo',
            icon: 'icon-zhangwuchaxun'
          },
          {
            menuName: '投注记录',
            path: '/myinfo',
            icon: 'icon-jishibenrizhi'
          },
          {
            menuName: 'APP下载',
            path: '/appload',
            icon: 'icon-Appxiazai1'
          },
          {
            menuName: '走势图',
            path: '/charts',
            icon: 'icon-zaixiankefu'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .fastMenu {
    background-color: #eee;
    width: 100%;
    height: 6rem;
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .itemMenu {
      display: inline-block;
      width: 24%;
      height: 100%;
      background-color: #fff;
    }
    img {
      display: block;
      width: 3.6rem;
      height: 3.6rem;
      margin: 0 auto;
    }
    span {
      color: #C7010B;
    }
  }
</style>
