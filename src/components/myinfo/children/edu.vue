<template>
  <section>
    <head-nav :title="title"></head-nav>
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
      this.title = this.$route.query.name
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
