<template>
  <section>
    <head-nav title="登录"></head-nav>
    <div class="scroll-content has-header">
      <mt-field label="用户名：" placeholder="请输入用户名" v-model="form.username" ></mt-field>
      <mt-field label="密码：" placeholder="请输入密码"  type="password" v-model="form.password"></mt-field>
      <mt-button type="danger"  style="width: 70%;margin: 4rem 0" @click="login">登录</mt-button>
      <mt-button type="danger"  style="width: 70%;margin-bottom: 3rem" @click="youlogin">游客登录</mt-button>
      <router-link to="/register">
        <mt-button  style="width: 70%">立即注册</mt-button>
      </router-link>
     <router-link to="/">
       <mt-button   style="width: 70%;margin-top: 3rem">返回首页</mt-button>
     </router-link>

    </div>

  </section>
</template>

<script>
  import md5 from 'md5'
  export default {
    data () {
      return {
        form: {
          username: undefined,
          password: undefined
        },
        id: undefined
      }
    },
    activated () {
//      let login = sessionStorage.getItem('selfInfo')
//      if (login) {
//        this.setInterval()
//      }
      let that = this
      window.onkeydown = function (e) {
        if (e.keyCode === 13) {
          that.login()
        }
      }
    },
    methods: {
      login () {
        if (!this.form.username) {
          this.$toast('请输入用户名')
        } else if (!this.form.password) {
          this.$toast('请输入密码')
        } else {
          this.$indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          })
          let params = {}
          Object.assign(params, this.form)
          params.password = md5(params.password)
          this.$api.login(params).then(res => {
            if (res.code === '000000') {
              this.$api.getMyInfo().then(res => {
                if (res.code === '000000') {
                  this.$toast('登录成功')
                  this.$store.commit('selfInfo', res.data)
                  sessionStorage.setItem('selfInfo', JSON.stringify(res.data))
                  this.setInterval()
                  this.$indicator.close()
                  if (this.$route.query.pathBack) {
                    this.$router.push(this.$route.query.pathBack)
                  } else {
                    this.$router.push('/')
                  }
                }
              })
            }
//
//            window.sessionStorage.setItem("loginStatus", true)
//            this.$store.commit("c_login", true)
//            this.getMyInfo()
//
//            //登录成功，调用彩种接口，预先加载所有彩种以及二三级玩法
//            var _this = this
//            allGameList(_this)
//            setTimeout(() => {
//              hallLeftNav(_this)
//              this.$router.push('/')
//            }, 1000)
          })
        }
      },
      youlogin () {
        this.$api.getVistor().then(res => {
          console.log(res)
          if (res.code === '000000') {
            this.form.username = res.data.username
            this.form.password = '123456'
            this.login()
//            this.$api.login(this.form).then(res => {
//              if (res.code === '000000') {
//                alert('cheng')
//              }
//            })
          }
        })
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
              this.$indicator.close()
            })
          } else {
            clearInterval(this.id)
          }
        }, 10000)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
