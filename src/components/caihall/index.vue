<template>
  <section>
    <my-caihallHeader></my-caihallHeader>
    <div class="scroll-content has-header">
      <my-gameCenter></my-gameCenter>
    </div>
  </section>
</template>

<script>
  import caihallHeader from './childs/caihallHeader'
  import gameCenter from './childs/gameCenter'

  export default {
    data () {
      return {}
    },
    created () {

    },
    methods: {},
    components: {
      'my-caihallHeader': caihallHeader,
      'my-gameCenter': gameCenter
    }
  }
</script>

<style lang="less" scoped>
  .scroll-content {
    background-color: #fff;
  }
</style>
