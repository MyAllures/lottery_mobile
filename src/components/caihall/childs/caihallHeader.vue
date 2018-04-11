<template>
  <mt-header fixed class="header_nav" title="购彩大厅">
    <mt-button slot="right">
		  	<span class="caihall">
		  		<img v-if='qiehuan' :src="typeB.two" height="30" width="30" slot="icon">
		  		<img v-else @click.prevent='qiehuanOne' :src="typeB.one" height="30" width="30" slot="icon">
		  		<img v-if='qiehuan' @click.prevent='qiehuanOne' :src="typeA.one" height="30" width="30" slot="icon">
		  		<img v-else :src="typeA.two" height="30" width="30" slot="icon">
		  	</span>
    </mt-button>
  </mt-header>
</template>

<script>
  export default {
    data () {
      return {
        qiehuan: true,
        typeA: {
          one: require('../../../assets/img/qhTypeA1.png'),
          two: require('../../../assets/img/qhTypeA2.png')
        },
        typeB: {
          one: require('../../../assets/img/qhTypeB1.png'),
          two: require('../../../assets/img/qhTypeB2.png')
        }
      }
    },
    created () {
    },
    methods: {
      qiehuanOne () {
        this.qiehuan = !this.qiehuan
        this.$store.commit('c_gameSwitch', this.qiehuan)
      }
    }
  }
</script>

<style lang="less" scoped>
  .mint-header {
    background-color: #ec2829;
    font-size: 18px;
  }

  .caihall {
    display: block;
    img {
      float: right;
    }
  }
</style>
