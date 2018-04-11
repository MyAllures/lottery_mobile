<template>
  <section>
    <my-betHeader></my-betHeader>
    <div class="scroll-content has-header">
      <my-banner></my-banner>
      <my-inform></my-inform>
      <my-fastMenu></my-fastMenu>
      <my-allLottery></my-allLottery>
      <my-hotBigPic></my-hotBigPic>
      <!--<next-footer></next-footer>-->
    </div>
  </section>
</template>

<script>
  import betHeader from './childs/betHeader'
  import banner from './childs/banner'
  import fastMenu from './childs/fastMenu'
  import inform from './childs/inform'
  import allLottery from './childs/allLottery'
  import hotBigPic from './childs/hotBigPic'
  import nextFooter from './childs/nextFooter.vue'

  export default {
    data () {
      return {}
    },
    created () {

    },
    methods: {},
    components: {
      'my-betHeader': betHeader,
      'my-banner': banner,
      'my-inform': inform,
      'my-fastMenu': fastMenu,
      'my-allLottery': allLottery,
      'my-hotBigPic': hotBigPic,
      'nextFooter': nextFooter
    }
  }
</script>

<style lang="less" scoped>
</style>
