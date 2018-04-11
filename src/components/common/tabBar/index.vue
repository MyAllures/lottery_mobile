<template>
  <mt-tabbar class="tabbar-my" fixed v-model="selected2">
    <mt-tab-item @click.native.prevent="clickItem(index)" :class="{actived:selected == index}" v-for="(item,index) in tabItems" :key="index" :id="index">
      <!--<img slot="icon" :src="selected == index?item.nowPic:item.selectedPic">-->
      <i :class="'iconfont my-icon ' + item.icon"></i>
      {{item.name}}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    props: {
      selected: {
        required: true,
        type: Number,
        default: 0
      },
      tabItems: {
        required: true,
        type: Array
      }
    },
    data () {
      return {
        selected2: undefined
      }
    },
    created () {
      this.getDefault()
    },
    methods: {
      clickItem (index) {
        this.$emit('clickItem', index)
      },
      getDefault () {
        let val = this.$route
        if (val.path === '/' || val.path === '/bethall') {
          this.selected2 = 0
        }
        if (val.path === '/caihall') {
          this.selected2 = 1
        }
        if (val.path === '/notice') {
          this.selected2 = 2
        }
        if (val.path === '/myinfo') {
          this.selected2 = 3
        }
      }
    },
    watch: {
      selected (val) {
        this.selected2 = val
      }
    }
  }
</script>

<style lang="less">

  .tabbar_item{
    color: gray!important;
  }

  .tabbar-my{
    @import "../../../assets/icon/iconfont.css";
  }
  .tabbar_item.actived{
    color: #C7010B!important;
    background: transparent!important;
    position: relative;
  }
  .tabbar_item.actived:before{
    content:'';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    border-radius: 1px;
    background: #C7010B;
  }
  .my-icon{
    display: block!important;
    padding-bottom:5px;
    font-size: 2.0rem!important;
  }
</style>
