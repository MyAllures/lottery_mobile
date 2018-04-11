<template>
  <section>
    <head-nav :title="title"></head-nav>
    <div class="scroll-content has-header">
      <div v-show="bankShow">
        <mt-field label="银行名称" placeholder="请输入银行名称" v-model="form1.bankName"></mt-field>
        <mt-field label="银行卡号" placeholder="请输入银行卡号" df v-model="form1.cardNo"></mt-field>
        <mt-field label="持卡人姓名" placeholder="请输入持卡人姓名"  v-model="form1.person"></mt-field>
        <mt-field label="持卡人手机号" placeholder="请输入持卡人手机号" type="tel" v-model="form1.kaihuhang"></mt-field>
        <mt-button class="nextBtn" type="danger" @click="nextFun">下一步</mt-button>
        <div class="title">
          提示：提款前请先绑定银行卡信息，请务必正确填写，否则将无法正确到账，如填写错误请尽快联系客服。
        </div>
      </div>
      <div v-show="!bankShow">
        <mt-field label="取款金额：" placeholder="请输入取款金额" v-model="form2.amount"></mt-field>
        <mt-field label="取款密码：" placeholder="请输入取款密码" type="password" v-model="form2.pass"></mt-field>
        <mt-button class="nextBtn" type="danger" @click="tixianFun">确定提款</mt-button>
      </div>

    </div>
  </section>
</template>

<script>
  import md5 from 'md5'
  export default {
    data () {
      return {
        title: '',
        bankShow: true,
        form1: {
          bankName: '',
          cardNo: '',
          person: '',
          kaihuhang: ''
        },
        form2: {
          amount: undefined,
          pass: undefined
        }
      }
    },
    activated () {
      this.bankShow = true
      this.title = this.$route.query.name
    },
    methods: {
      nextFun () {
        if (!this.form1.bankName) {
          this.$toast('请输入银行名称')
        } else if (!this.form1.cardNo) {
          this.$toast('请输入银行卡号')
        } else if (!this.form1.person) {
          this.$toast('请输入持卡人姓名')
        } else if (!this.form1.kaihuhang) {
          this.$toast('请输入持卡人手机号')
        } else {
          this.bankShow = false
          this.$api.saveCard(this.form1).then(res => {
            if (res.code === '000000') {
              this.$toast('绑定成功')
              this.bankShow = false
              this.$api.getMyInfo().then(res => {
                if (res.code === '000000') {
                  this.$store.commit('selfInfo', res.data)
                }
              })
            }
          })
        }
      },
      tixianFun () {
        if (!this.form2.amount) {
          this.$toast('请输入取款金额')
        } else if (!this.form2.pass) {
          this.$toast('请输入取款密码')
        } else {
          let params = {}
          Object.assign(params, this.form2)
          params.pass = md5(params.pass)
          this.$api.saveCash(params).then(res => {
            if (res.code === '000000') {
              this.$toast('提现申请成功，审核中...')
            }
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.nextBtn{
  width: 50%;
  margin: 4rem;
}
  .mint-cell-title{
    text-align: left;
  }
  .title{
    padding:2rem;
    line-height: 2rem;
    font-size: 1.5rem;
    color: red;
    font-weight: bold;
  }
</style>
