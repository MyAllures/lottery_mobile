import { judgeTime } from '../assets/js/time'

export default {
  selfInfo (state, mes) {
    mes.createTime = judgeTime(mes.createTime)
    state.selfInfo = mes
  },
  c_gameSwitch (state, mes) {
    state.gameSwitch = mes
  },
  selected (state, mes) {
    state.selected = mes
  },
  typeData (state, mes) {
    state.typeData = mes
  },
  gameTab (state, mes) {
    state.gameTab = mes
  },
  payment (state, mes) {
    state.payment = mes
// window.localStorage.setItem("payment", JSON.stringify(mes))
  },
  allGameList (state, mes) {
    state.allGameList = mes
  },
  threeId (state, id) {
    state.threeId = id
  }
}
