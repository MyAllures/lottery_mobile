<template>
  <mt-header fixed class="header_nav" :title="title">
    <mt-button @click="goBack" icon="back" slot="left">
     返回
    </mt-button>
    <!--<mt-button icon="more" slot="right">-->

    <!--</mt-button>-->
  </mt-header>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {}
    },
    created () {
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
