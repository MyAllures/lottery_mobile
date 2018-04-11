<template>
  <section id="myinfoPage">
    <mt-header fixed class="header_nav" title="个人中心">
        <img  v-if="loginStatus" @click="goMyInfo" src="./img/1.jpg" class="imgTou" slot="left" alt="">
        <span  v-if="loginStatus" @click="goMyInfo" style="align-self: center;margin-left: 5px" slot="left">{{selfInfo.username}}</span>
      <mt-button v-show="loginStatus" @click="logout" slot="right">退出></mt-button>
      <mt-button v-show="!loginStatus" @click="goLogin" slot="right">登录</mt-button>
    </mt-header>
    <div class='scroll-content has-header'>
      <div class="balance bgRed" v-if="loginStatus">
        可用余额：<i class="iconfont icon-money"></i> {{selfInfo.balance}} 元
      </div>
      <div class="flex next_header bgRed">
        <div class="item" v-for="(item,index) in nextHead" @click="goPath(item)"><i :class="'iconfont ' + item.icon"></i>{{item.name}}</div>
      </div>
      <div class='myInfoList'>
        <div class="item flex" v-for="(item,index) in listData" @click="goPath(item)">
          <div class="left">
            <i :class="'iconfont ' + item.icon"></i> {{item.name}}
          </div>
          <div class="right">
            <i class="iconfont icon-qianjin" style="color: #999;font-size: 1.4rem!important;"></i>
          </div>
        </div>
      </div>
      <mt-popup v-model="show" popup-transition="popup-fade">
        <div class="header bgRed">
          {{title}}
        </div>
        <div v-if="title=='登录密码修改'">
          <mt-field label="输入旧密码" placeholder="请输入旧密码" type="password" v-model="form1.checkPassword"></mt-field>
          <mt-field label="输入新密码" placeholder="请输入新密码" type="password" v-model="form1.password"></mt-field>
          <mt-field label="重复新密码" placeholder="请再次输入新密码" type="password" v-model="password2"></mt-field>
        </div>
        <div v-if="title=='取款密码修改'">
          <mt-field label="输入旧密码" placeholder="请输入旧密码" type="password" v-model="form2.checkDrawPass"></mt-field>
          <mt-field label="输入新密码" placeholder="请输入新密码" type="password" v-model="form2.drawPass"></mt-field>
          <mt-field label="重复新密码" placeholder="请再次输入新密码" type="password" v-model="drawPass2"></mt-field>
        </div>
        <div style="padding: 10px">
          <mt-button type="danger" style="margin-right: 20px" @click="show = false">取消</mt-button>
          <mt-button type="danger" @click="revisePwd">确定</mt-button>
        </div>
      </mt-popup>
    </div>
  </section>
</template>

<script>
  import md5 from 'md5'
  import {listData, nextHead} from './data'
  export default {
    data () {
      return {
        loginStatus: undefined,
        listData: listData,
        nextHead: nextHead,
        show: false,
        title: '',
        form1: {
          checkPassword: undefined,
          password: undefined
        },
        password2: undefined,
        form2: {
          checkDrawPass: undefined,
          drawPass: undefined
        },
        drawPass2: undefined,
        params: {}
      }
    },
    activated () {
      let l = sessionStorage.getItem('selfInfo')
      if (l) { this.loginStatus = true }
    },
    computed: {
      selfInfo () {
        return this.$store.state.selfInfo
      }
    },
    methods: {
      goPath (row) {
        if (row.type === 1 || row.type === 2 || row.type === 3 || row.type === 4 || row.type === 7 || row.type === 8 || row.go) {
          this.$router.push({
            path: row.path,
            query: row
          })
        } else {
          this.show = true
          if (row.type === 5) {
            this.title = '登录密码修改'
          }
          if (row.type === 6) {
            this.title = '取款密码修改'
          }
        }
      },
      goMyInfo () {
        this.$router.push('/selfInfo')
      },
      revisePwd () {
        this.params = {}
        Object.assign(this.params, this.form1)
        Object.assign(this.params, this.form2)
        let [a, b, c, d] = [this.params.checkPassword, this.params.password, this.params.checkDrawPass, this.params.drawPass]
        a ? this.params.checkPassword = md5(a) : this.params.checkPassword = undefined
        b ? this.params.password = md5(a) : this.params.password = undefined
        c ? this.params.checkDrawPass = md5(a) : this.params.checkDrawPass = undefined
        d ? this.params.drawPass = md5(a) : this.params.drawPass = undefined
        this.$api.revisePwd(this.params).then(res => {
          if (res.code === '000000') {
            this.show = false
            this.$toast('修改成功')
          }
        })
      },
      goLogin () {
        this.$router.push('/login')
      },
      logout () {
        this.$messagebox.confirm('确定要退出吗?').then(action => {
          if (action) {
            this.$api.logout().then(res => {
              if (res.code === '000000') {
                this.$toast('退出成功')
                sessionStorage.setItem('selfInfo', '')
                this.loginStatus = false
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="less">

  #myinfoPage{
  .iconfont{
    font-size: 2.0rem!important;
    color: red;
    margin-right: 5px;
  }

  .is-left{
    display: flex;
  }
  .next_header {

    @import "../../assets/icon/iconfont.css";

    .item {
      width: 33.3%;
      border-right: 2px solid #ccc;
      height: 4.5rem;
      color: white;
      line-height: 4.5rem;
      font-size: 1.6rem;
    }
    .item:last-child{
      border-right: none;
      /*justify-content: space-around;*/
    }
  }
.imgTou{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
  .balance {
    height: 4rem;
    color: white;
    line-height: 4rem;
    font-size: 1.6rem;
  }

  .myInfoList {
    padding: 1rem 2rem;
    .left {
      width: 80%;
    }
    .right {
      flex: 1;
      text-align: center;
      font-size: 1.6rem;
    }
    .item {
      border-bottom: 2px solid #ccc;
      height: 4.5rem;
      line-height: 4.5rem;
      color: #666;
      font-size: 1.6rem;
      text-align: left;
    }
  }

  .model {

  }

  .mint-popup {
    width: 80%;
    border: 3px solid red;
    border-radius: 5px;
    .header {
      height: 3rem;
      line-height: 3rem;
      color: white;
      font-size: 1.8rem;
    }
  }

  }
</style>
