<template>
  <div class="fastMenu">
    <router-link v-for='(item,index) in fastMenu' class="itemMenu" :key="index" :to="item.path">
      <!--<img :src="item.imgUrl" :alt="item.menuName" />-->
      <i style="display: block;font-size: 3rem;margin-top: 0.5rem;color: #bbb" :class="'iconfont ' + item.icon"></i>
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
            imgUrl: img,
            menuName: '分享',
            path: '/myinfo',
            icon: 'icon-fenxiang'
          },
          {
            imgUrl: img,
            menuName: '电脑版',
            path: '/myinfo',
            icon: 'icon-diannao'
          },
          {
            imgUrl: img,
            menuName: '优惠活动',
            path: '/activity',
            icon: 'icon-liwu1'
          },
          {
            imgUrl: img,
            menuName: '刷新',
            path: '/',
            icon: 'icon-jinlingyingcaiwangtubiao36'
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
    margin-bottom: 1rem;
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
      color: #ccc;
    }
  }
</style>

