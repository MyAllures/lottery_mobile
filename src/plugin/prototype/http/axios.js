import axios from 'axios'
import qs from 'qs'
import router from '@/router'
import { MessageBox, Toast } from 'mint-ui'

// axios.defaults.baseURL = url.baseURL
axios.defaults.withCredentials = true
// axios.defaults.timeout = 100
// 添加一个请求拦截器
axios.interceptors.request.use(config => {
  checkParams(config.data)
  if (config.method === 'post') {
    config.data = qs.stringify(config.data, { indices: false })
  }
  // if (config.pathVar) {
  //   config.url = config.url + '/' + config.pathVar
  // }
  return config
}, error => {
  return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(response => {
  return new Promise((resolve, reject) => {
    if (response.data.code === '000000') {
      resolve(response.data)
    } else if (response.data.code === '000100') {
      sessionStorage.setItem('selfInfo', '')
      // axios.get('/500/user/visitor').then(res => {
      //   console.log(res)
      // })
      MessageBox.alert('请先登录').then(action => {
        router.push('/login')
      })
      getIsNull(response.data.msg)
      reject(response.data)
    } else if (response.data.code === '500') {
      reject(response.data)
      getIsNull(response.data.msg)
    } else {
      reject(response.data)
      getIsNull(response.data.msg)
    }
  })
}, (error) => {
  console.log(error.response)
  getIsNull(error.response.data.msg)
})

const getIsNull = (mes) => {
  if (!mes) {
    Toast('未知错误')
  } else {
    Toast(mes)
  }
}
// 检测参数是否为空字符串
const checkParams = (params) => {
  if (typeof params === 'object') {
    for (let item in params) {
      if (params[item] === '') {
        params[item] = undefined
      }
    }
  }
}
export default axios
