<template>
<section id="homeIndex">
  <!--<mt-header class="header_nav" fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>-->
  <div class="scroll-content has-footer">
    <keep-alive><router-view></router-view></keep-alive>
  </div>
  <tab-bar @clickItem="clickTabItem" :tabItems="tabItems" :selected="selected"></tab-bar>
</section>
</template>

<script>
  import tabBar from '../common/tabBar'
  import tabItems from '../common/tabBar/data'
  export default {
    data () {
      return {
        selected: 0,
        tabItems: tabItems,
        id: undefined
      }
    },
    created () {
      console.log(document.cookie)
      let login = sessionStorage.getItem('selfInfo')
      let allGameList = sessionStorage.getItem('allGameList')
      if (login) {
        this.setInterval()
      }
      if (allGameList) {
        this.$store.commit('')
      }
    },
    destroyed () {
      clearInterval(this.id)
    },
    methods: {
      clickTabItem (index) {
        this.$router.push(this.tabItems[index].path)
        this.selected = index
      },
      setInterval () {
        this.id = setInterval(() => {
          let login = sessionStorage.getItem('selfInfo')
          if (login) {
            this.$api.getMyInfo().then(res => {
              if (res.code === '000000') {
                this.$store.commit('selfInfo', res.data)
                sessionStorage.setItem('selfInfo', JSON.stringify(res.data))
              }
            }).catch(() => {
              clearInterval(this.id)
              this.$messagebox.alert('发生错误，请重新登录').then(action => {
                this.$router.push('/login')
                sessionStorage.setItem('selfInfo', '')
              })
            })
          } else {
            clearInterval(this.id)
          }
        }, 10000)
      }
    },
    watch: {
      '$route' (val) {
        if (val.path === '/' || val.path === '/bethall') {
          this.selected = 0
        }
        if (val.path === '/caihall') {
          this.selected = 1
        }
        if (val.path === '/notice') {
          this.selected = 2
        }
        if (val.path === '/myinfo') {
          this.selected = 3
        }
      }
//      selected (val) {
//        if (val) {
//          this.setInterval()
//        }
//      }
    },
    components: {
      tabBar
    }
  }
</script>

<style lang="less" scoped>
</style>
