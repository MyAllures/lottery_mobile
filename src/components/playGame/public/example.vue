<template>
    <section>
      <head-nav title="玩法说明"></head-nav>
      <div class="scroll-content has-header">
         <div class="div1">
              玩法介绍
         </div>
        <div class="div2">
          {{wanfaData.help}}
        </div>
        <div class="div3">
           投注说明
        </div>
        <div class="div4">
          {{wanfaData.example}}

        </div>
      </div>
    </section>
</template>

<script>
  import config from '../../../assets/js/config'
  export default {
    data () {
      return {
        wanfaData: {}
      }
    },
    activated () {
      let threeId = this.$store.state.threeId
      this.wanfaData = config[threeId]
      console.log(this.wanfaData)
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
.scroll-content{
  padding: 1rem !important;
  div{
    padding:0 1rem;
    text-align: left;
    border: 1px solid #ccc;
  }
}
  .div1, .div3{
    height:4rem;
    line-height: 4rem;
    font-size: 16px;

  }
  .div2, .div4{
    padding: 1rem !important;
    font-size: 1.4rem;

  }
  .div3{
    margin-top: 2rem;
  }
</style>
