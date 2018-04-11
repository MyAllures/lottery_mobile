<template>
  <section>
    <head-nav :title="title"></head-nav>
    <div class="scroll-content has-header">
       <div class="title flex">
         <div class="item item1">状态</div>
         <div class="item item2">标题</div>
         <div class="item item3">发布时间</div>
       </div>
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <div v-for="item in messageList" class="title1 flex">
          <div class="item item1">未读</div>
          <div class="item item2 single_ellipsis" @click="goDetail(item.id)">{{item.title}}</div>
          <div class="item item3">{{judgeTime(item.createTime)}}</div>
        </div>
        <!--<div slot="top" class="mint-loadmore-top">-->
          <!--<span style="font-size: 4rem" v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>-->
          <!--<span v-show="topStatus === 'loading'">-->
            <!--<img style="width: 20rem;height: 4rem" src="./img/loading2.jpg" alt="">-->
          <!--</span>-->
        <!--</div>-->
      </mt-loadmore>

      <div v-if="Math.ceil(total/page.pageSize) > 1" style="padding: 1rem;text-align: right;font-size: 1.4rem">
        <span>共 {{Math.ceil(total/page.pageSize)}} 页</span>
        <mt-button size="small" @click="preventPage">上一页</mt-button>
         {{page.pageNumber}}
        <!--<mt-field class="mt-put" v-model="page.pageNumber"></mt-field>-->
        <!--<input class="my-input" v-model="page.pageNumber" type="number">-->
        <mt-button  size="small" @click="nextPage">下一页</mt-button>
      </div>

    </div>
  </section>
</template>

<script>
  import judgeTime from '../../../assets/js/judgeTime'
  export default {
    data () {
      return {
        title: '',
        page: {
          pageSize: 10,
          pageNumber: 1
        },
        total: 56,
        topStatus: '',
        messageList: [],
        judgeTime: judgeTime
      }
    },
    created () {
      this.page.pageNumber = 1
      this.getMessageList()
    },
    activated () {
      this.title = this.$route.query.name
    },
    methods: {
      goDetail (id) {
        this.$router.push({path: '/message/detail', query: {id: id}})
      },
      getMessageList () {
        this.$indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        this.$api.newsList(this.page).then(res => {
          if (res.code === '000000') {
            this.$indicator.close()
            this.messageList = res.data.list
            this.total = res.data.totalRow
            this.$refs.loadmore.onTopLoaded()
          }
        })
      },
      loadTop () {
        this.page.pageNumber = 1
        this.getMessageList()
      },
      preventPage () {
        if (this.page.pageNumber > 1) {
          this.page.pageNumber--
          this.getMessageList()
        }
      },
      nextPage () {
        this.page.pageNumber++
        this.getMessageList()
      },
      handleTopChange (status) {
        this.topStatus = status
      }
    }
  }
</script>

<style lang="less" scoped>
.title{
  line-height: 5rem;
  height:5rem;
  background-color: #f2f2f0;
  font-size: 1.5rem;
  font-weight: bold;
  .item1{
    width: 6rem;
  }
  .item2{
    flex: 1;
  }
  .item3{
    width: 10rem;
  }
}
.mt-put{
  width: 60px;
  margin-right: 0;
  display: inline-block;
  min-height: 3px;
  overflow: auto
}
.my-input{
  width: 80px;
}
  .title1{
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    line-height: 4rem;
    height:4rem;
    background-color: #fff;
    font-size: 1.5rem;
    .item1{
      width: 6rem;
      color: green;
    }
    .item2{
      flex: 1;
      font-weight: 500;
    }
    .item3{
      width: 10rem;
    }
  }
</style>
