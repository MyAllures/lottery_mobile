<template>
  <section>
    <game-header :gameTitle='gameTitle'></game-header>
    <div class="scroll-content has-header">
      <game-top :nowWanfaList="nowWanfaList"></game-top>
      <game-tab :nowWanfaList="nowWanfaList"></game-tab>
    </div>
  </section>
</template>

<script>
  import header from '../../gameNav/gameHeader.vue'
  import gameTop from '../../gameNav/gameTop.vue'
  import gameTab from '../../gameNav/gameTab.vue'

  export default {
    props: ['nowWanfaList'],
    data () {
      return {
        gameTitle: ''
      }
    },
    activated () {
// console.log(this.nowWanfaList)
      this.gameTitle = this.nowWanfaList.ticketName
      console.log(this.gameTitle)
    },
    methods: {},
    components: {
      'game-header': header,
      'game-top': gameTop,
      'game-tab': gameTab
    }
  }
</script>

<style lang="less" scoped>
  section {
    width: 100%;
    height: 100%;
  }
</style>
