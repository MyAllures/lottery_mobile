<template>
  <section>
    <head-nav :title="title"></head-nav>
    <div class="scroll-content has-header">

    </div>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        title: ''
      }
    },
    activated () {
      this.title = '历史开奖列表'
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
