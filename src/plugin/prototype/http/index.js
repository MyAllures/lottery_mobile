import axios from './axios'
import url from './url'

axios.defaults.withCredentials = true

export default {
  login (params) {
    return axios.post(url.login, params)
  },
  // 注册
  register (params) {
    return axios.post(url.register, params)
  },
  test (params) {
    return axios.get(url.record, {params: params})
  },
  // 请求新闻列表
  newsList (params) {
    return axios.get(url.news, {params: params})
  },
  // 请求用户中心消息管理
  userMessage (params) {
    return axios.get(url.message, {params: params})
  },
  // 请求推广信息
  spread () {
    return axios.get(url.spread)
  },
  // 请求彩票期数
  request_term () {
    return axios.get(url)
  },
  // 发送投注信息
  post_call (params) {
    return axios.post(url.call, params)
  },
  // 六合彩发送投注
  lhc_call_call (params) {
    return axios.post(url.lhc_call, params)
  },
  // 请求轮播图图片地址
  request_banner () {
    return axios.get(url.banner)
  },
  // 请求获取gameId
  request_gameId (params) {
    return axios.get(url.gameId, {params: params})
  },
  // 请求获取gamePersentId
  request_gamePersentId (params) {
    return axios.get(url.gamePersentId, {params: params})
  },
  // 请求获取ticket
  request_allTicket (params) {
    return axios.get(url.allTicket, {params: params})
  },
  // 请求期数ID
  request_lotteryId (params) {
    return axios.get(url.lotteryId, params)
  },
  // 获取个人信息
  getMyInfo (params) {
    return axios.get(url.test, {params: params})
  },
  // huoqu
  spreadSelf () {
    return axios.get(url.spreadSelf)
  },
  getCashList (params) {
    return axios.get(url.cash, {params: params})
  },
  getBetList (params) {
    return axios.get(url.bet, {params: params})
  },
  saveCard (params) {
    return axios.post(url.saveCard, params)
  },
  logout () {
    return axios.get(url.logout)
  },
  revisePwd (params) {
    return axios.post(url.revisePwd, params)
  },
  // 提现
  saveCash (params) {
    return axios.post(url.savecash, params)
  },
  getWebConfig (params) {
    return axios.get(url.config, {params: params})
  },
  getActiveList (params) {
    return axios.get(url.active, {params: params})
  },
  getCheckCode (params) {
    return axios.get(url.checkCode, {params: params})
  },
  getNewsDetail (id) {
    return axios.get(url.newsDetail + id)
  },
  // 获取开奖数据
  getLetData (params) {
    return axios.get(url.kaiData, {params: params})
  },
  getnewTicketData (id) {
    return axios.get(url.newTicketData + id)
  },
  // 获取开奖时间
  getkaiDate10 (id) {
    return axios.get(url.kaiDate10 + id)
  },
  // 获取开奖时间
  getkaiDate3 (id) {
    return axios.get(url.kaiDate3 + id)
  },
  // 获取开奖时间
  getkaiDate5 (id) {
    return axios.get(url.kaiDate5 + id)
  },
  getVistor () {
    return axios.get(url.visitor)
  }
}
