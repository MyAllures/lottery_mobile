import http from './http'
export default function (Vue) {
  Vue.prototype.$api = http
}
