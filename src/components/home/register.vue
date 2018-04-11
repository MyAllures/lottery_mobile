<template>
  <section>
    <head-nav title="注册"></head-nav>
    <div class="scroll-content has-header">
      <mt-field label="用户名称：" placeholder="请输入用户名"  v-model="form.username"></mt-field>
      <mt-field label="登录密码：" v-model="form.password" placeholder="请输入登录密码"  type="password" ></mt-field>
      <mt-field label="重复密码：" v-model="form.surePwd" placeholder="请再次输入密码" type="password" ></mt-field>
      <mt-field label="提款密码：" v-model="form.drawPassword" placeholder="请输入提款密码" type="password" ></mt-field>
        <mt-field label="推广码：" v-model="form.code" placeholder="请输入推广码(可不填)"  ></mt-field>
        <mt-button type="danger"  style="width: 70%;margin: 3rem 0" @click="register">立即注册</mt-button>
        <router-link to="/login">
        <mt-button  style="width: 70%">返回登录</mt-button>
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
          password: undefined,
          surePwd: undefined,
          drawPassword: undefined,
          code: undefined
        }
      }
    },
    activated () {
    },
    methods: {
      register () {
        if (!this.form.username) {
          this.$toast('请输入用户名')
          // this.$notify.warning('请输入用户名')
        } else if (!this.form.password) {
          this.$toast('请输入密码')
        } else if (!this.form.surePwd) {
          this.$toast('请输入确认密码')
        } else if (!this.form.drawPassword) {
          this.$toast('请输入提现密码')
        } else if (this.form.password !== this.form.surePwd) {
          this.$toast('您两次输入的密码不一致')
        } else {
          let params = {}
          Object.assign(params, this.form)
          params.password = md5(params.password)
          params.drawPassword = md5(params.drawPassword)
          params.surePwd = undefined
          this.$api.register(params).then(res => {
            if (res.code === '000000') {
              this.$toast('注册成功,请重新登录')
              this.$router.push('/login')
            }
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
