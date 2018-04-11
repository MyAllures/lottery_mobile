<template>
  <section>
    <head-nav title="个人信息"></head-nav>
    <div class="scroll-content has-header">
      <mt-field label="用户名" placeholder="请输入用户名" readonly v-model="userInfo.username"></mt-field>
      <mt-field label="余额" placeholder="暂无余额信息"  readonly v-model="userInfo.balance"></mt-field>
      <mt-field label="银行名称" placeholder="暂无银行信息" readonly  v-model="userInfo.cardBank"></mt-field>
      <mt-field label="银行卡号" placeholder="暂无银行卡号信息" readonly  v-model="userInfo.cardNumber"></mt-field>
      <mt-field label="持卡人姓名" placeholder="暂无持卡人姓名信息"  readonly v-model="userInfo.cardPerson"></mt-field>
      <mt-field label="预留手机号" placeholder="暂无预留手机号信息" readonly v-model="userInfo.cardPhone"></mt-field>
      <mt-field label="创建时间" placeholder="暂无创建时间信息" readonly v-model="userInfo.createTime"></mt-field>
    </div>

  </section>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    activated () {
//      console.log(this.$store.state.selfInfo)
    },
    computed: {
      userInfo () {
        return this.$store.state.selfInfo
      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
