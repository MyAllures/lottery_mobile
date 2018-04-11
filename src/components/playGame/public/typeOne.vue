<template>
  <div id="wanfa">
    <div style="text-align: left;padding-left: 2rem;padding-bottom: 1rem">
      <div style="text-align: right">
        <mt-button style="margin:5px"  size="small" @click="goWanFa">玩法说明</mt-button>
        <mt-button style="margin:5px" size="small" @click="jixuan">机选</mt-button>
      </div>
       <div class="flex" style="justify-content: space-around">
         <div>
           倍数：<el-input-number size="mini" :min="1" v-model="beishu"></el-input-number>
         </div>
         <div>
           单位：
           <el-radio-group size="mini" v-model="danwei">
             <el-radio-button label="元" ></el-radio-button>
             <el-radio-button label="角"></el-radio-button>
             <el-radio-button label="分"></el-radio-button>
           </el-radio-group>

         </div>

       </div>

    </div>
    <div v-for="item in radioAll">
      <div class="weishu">
        <span class="wsCon">{{ item.title }}</span>
        <div class="wsTit">
          <el-radio-group v-model="item.numArr2" size="small" @change="change(item.numArr2, item)">
            <el-radio-button v-for="p in item.num2" :label="p" :key="p"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="checkNum">
        <el-checkbox-group v-model="item.numArr">
          <el-checkbox-button v-for="city in item.num" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="80%" center>
      <div class="dialogCgj">
        <ul>
          <li v-for="item in dataList">
            <p>号码：{{item.lotteryNo}}</p>
            <p>倍数：{{item.multiple}}</p>
            <p>注数：{{item.number}}</p>
            <p>总金额：{{item.amount}}</p>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
    			<el-button type="info" @click="centerDialogVisible = false">取 消</el-button>
    			<el-button type="danger" @click="postDataList">提交</el-button>
  			</span>
    </el-dialog>
    <div class="footer">
      <div @click='clearAllNum'>
        <el-button type="info" size="mini">清空号码</el-button>
      </div>
      <p>{{zhushu}} 注&nbsp&nbsp&nbsp{{allMoney}} 元</p>
      <div>
        <el-button type="danger" size="mini" @click="addNum">添加投注</el-button>
        <el-button type="danger" size="mini" @click="goList">已投注列表</el-button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['typeData'],
    data () {
      return {
        centerDialogVisible: false,
        beishu: 1,
        radioAll: [],
        dataList: [],
        danwei: '元',
        danwei2: 1
      }
    },
    activated () {
      this.radioAll = []
      this.radioAll = this.typeData
      this.$store.commit('typeData', this.radioAll)
    },
    methods: {
      clearAllNum () {
        this.radioAll.forEach(item => {
          item.numArr = []
          item.numArr2 = '无'
        })
      },
      addNum () {
        this.dataList = []
        if (this.zhushu === 0) {
          this.$messagebox.alert('请选择号码后再进行投注！')
        } else {
          let beishu1 = this.beishu
          let zhushu1 = this.zhushu
          let allMoney1 = this.allMoney
          let dataArr = []
          this.radioAll.forEach((item, index) => {
            let strNum = item.numArr.sort().join()
            if (strNum) {
              dataArr.push(strNum)
            } else {
              dataArr.push('X')
            }
          })
          console.log(dataArr)
          let data = dataArr.join('+')
          this.dataList.push({
            lotteryNo: data,
            multiple: beishu1,
            amount: allMoney1,
            number: zhushu1,
            ticketId: this.$route.params.ticketId,
            gamePersentId: this.$store.state.threeId,
            lotteryId: 1
          })

          this.centerDialogVisible = true
        }
      },
      postDataList () {
        var list = this.$store.state.payment
        this.dataList.forEach(item => {
          list.push(item)
        })
        this.$store.commit('payment', list)

        this.centerDialogVisible = false
        this.clearAllNum()
        this.$router.push('/payment')
      },
      goList () {
        this.$router.push('/payment')
      },
      jixuan () {
        this.radioAll.forEach(item => {
          let ran = Math.round(Math.random() * item.num.length)
          item.numArr = []
          item.numArr.push(item.num[ran])
        })
      },
      goWanFa () {
        this.$router.push('/example')
      },
      change (val, obj) {
        let type = typeof val
        if (type === 'string') {
          switch (val) {
            case '全':
              obj.numArr = obj.num
              break
            case '大':
              obj.numArr = ['06', '07', '08', '09', '10']
              break
            case '小':
              obj.numArr = ['01', '02', '03', '04', '05']
              break
            case '单':
              obj.numArr = ['01', '03', '05', '07', '09']
              break
            case '双':
              obj.numArr = ['02', '04', '06', '08', '10']
              break
            case '清':
              obj.numArr = []
              obj.numArr2 = '无'
              break
            default:
              break
          }
        }
      }
    },
    computed: {
      zhushu () {
        let sum = 0
        this.radioAll.forEach(item => {
          sum += item.numArr.length
        })
        return sum
      },
      allMoney () {
        return this.zhushu * this.beishu * 2 * this.danwei2
      },
      typeDatachange () {
        return this.$store.state.gameTab
      }
    },
    watch: {
      typeData (val) {
        if (val) {
          this.radioAll = val
          this.$store.commit('typeData', val)
        }
      },
      danwei (val) {
        if (val === '元') {
          this.danwei2 = 1
        }
        if (val === '角') {
          this.danwei2 = 0.1
        }
        if (val === '分') {
          this.danwei2 = 0.01
        }
      }
    },
    components: {}
  }
</script>

<style lang="less">
  #wanfa {
    width: 100%;
    padding: 1rem 0 4rem;
    .wsCon {
      display: inline-block;
      float: left;
      width: 18%;
    }
    .weishu {
      width: 100%;
      height: 3rem;
      margin-bottom: 1rem;
      line-height: 3rem;
    }
    .wsTit {
      display: inline-block;
      width: 82%;
      height: 100%;
      float: right;
      strong {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        font-size: 18px;
        border-radius: 50%;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 3rem;
      }
    }
    .is-active .el-radio-button__inner {
      color: #fff !important;
      background-color: #ec2829 !important;
      border-color: #ec2829 !important;
      -webkit-box-shadow: -1px 0 0 0 #ec2829 !important;
      box-shadow: -1px 0 0 0 #ec2829 !important;
    }
    .checkNum {
      width: 100%;
      margin: 2rem 0;
      .el-checkbox-group {
        display: inline-block;
        /*width: 96%;*/
        height: 10rem;
        margin: 0 auto;
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        /*justify-content: space-between;*/
        /*align-items: center;*/
      }
      label {
        /*float: left;*/
        display: inline-block;
        width: 20%;
        margin-bottom: 1rem;
      }
      .el-checkbox-button__inner {
        display: inline-block;
        width: 4.5rem;
        height: 4.5rem;
        padding: 0;
        text-align: center;
        line-height: 4.5rem;
        border: 1px solid #dcdfe6;
        border-radius: 50%;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        transition: all 0s;
      }
      .is-checked .el-checkbox-button__inner {
        color: #fff;
        background-color: #ec2829;
        border-color: #ec2829;
        -webkit-box-shadow: -1px 0 0 0 #ec2829;
        box-shadow: -1px 0 0 0 #ec2829;
      }
    }
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4rem;
      background-color: #000;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .clearLeft, .addRight {
        display: block;
        height: 2rem;
        width: 20%;
        padding: 0 1rem;
      }
      p {
        display: inline-block;
      }
      button {
        padding: 8px 5px;
      }
    }
  }
</style>
