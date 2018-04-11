import playCom from '../workBook/playComponent'
import playMange from '../workBook/playMange'

function allGameList (_this) {
// console.log(_this, 1)
  var allGameList = []
  // 请求全部的彩种玩法
  _this.$api.request_allTicket().then((res) => {
    let idArr = []
    idArr = res.data.list
    idArr.forEach((item, index) => {
      let params = {}
      var ticketImg = item.image
      // 彩种名
      var ticketName = item.name
      // 彩种的ID
      var ticketId = item.id
      params.ticketId = ticketId
      // 根据当前的彩种ID传入，进行对应的请求
      _this.$api.request_gameId(params).then((res) => {
        var list = res.data.list
        // 对请求到的数据进行增删改处理
        list.forEach((item, index) => {
          var params = {}
          params.gameId = item.id
          _this.$api.request_gamePersentId(params).then((res) => {
            let n = res.data.list
            n.forEach((val, index) => {
              // 当前三级玩法的字典
              let gameType = val.name
              // 查询当前三级玩法所对应的组件名
               // let myTab = playCom(val.name)
              // 查询当前三级玩法所对应的名称
              let name = val.name
              // 对当前三级玩法的数据进行增加以及修改数据处理
              val.myType = '1'
              val.name = name
              val.order2 = '' + index
              val.gameType = gameType
              val.ticketId = ticketId
            })
            // 对当前二级玩法的数据进行增加以及修改数据处理
            item.children = n
            item.order = '' + index
          })
        })
        // 为当前彩种创建数据集合，并push到allGameList数组中
        var newDate = [2017, 12, 21, 22, 10, 11]
        var obj = {}
        obj.ticketImg = ticketImg
        obj.ticketName = ticketName
        obj.ticketId = ticketId
        obj.list = list
        obj.date = newDate
        obj.path = '/playGame/' + ticketId
        allGameList.push(obj)
      })
    })
  })
// console.log(allGameList)

// setTimeout(() => {
//      _this.$store.commit('allGameList', allGameList)
// let list = _this.$store.state.allGameList
// console.log(list)
// window.sessionStorage.setItem('allGameList', JSON.stringify(list))
//  }, 1000)

  return allGameList
}

export default allGameList
