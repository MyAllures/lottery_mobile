<template>
  <section id="newsDetail">
    <head-nav :title="title"></head-nav>
    <div class="scroll-content has-header">
      <h1 style="padding: 3rem;font-size: 2rem;color: red" v-html="news.title"></h1>
      <div  v-html="news.detail"></div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        title: '新闻详情',
        news: {}
      }
    },
    activated () {
      this.getNewsDetail()
    },
    methods: {
      getNewsDetail () {
        this.$indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        this.$api.getNewsDetail(this.$route.query.id).then(res => {
          if (res.code === '000000') {
            this.$indicator.close()
            this.news = res.data
          }
        })
      }
    }
  }
</script>

<style lang="less">
  #newsDetail{
    .scroll-content{
      padding:1rem 2rem;
      p{
        font-size: 1.8rem!important;
      }
    }

  }

</style>
