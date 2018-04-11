function hallLeftNav (_this) {
//	console.log(_this, 2)
  //左侧列表
  var gaoList = []
  var diList = []
  var nowList = _this.$store.state.allGameList
  if (nowList.length) {
    nowList = JSON.parse(window.sessionStorage.getItem('allGameList'))
  }

  nowList.forEach(item => {
    var ticketId = item.ticketId
    item.path = '/hall/' + ticketId
  })
  nowList.forEach(item => {
    if (item.ticketId == 17 || item.ticketId == 33 || item.ticketId == 20) {
      diList.push(item)
    } else {
      gaoList.push(item)
    }
  })
  let navObj = {}
  navObj.gaoList = gaoList
  navObj.diList = diList

  console.log(navObj)
//      _this.$store.commit('c_hallLeftNav', navObj)
//      window.sessionStorage.setItem('hallLeftNav', JSON.stringify(navObj))
}

export default hallLeftNav
