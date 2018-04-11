import dateformat from 'dateformat'
// 把时间戳转化为时间
export const judgeTime = (date) => {
  if (date) {
    let dateTime = new Date(date)
    let date2 = dateformat(dateTime, 'yyyy-mm-dd')
    return date2
  } else {
    return date
  }
}
// 把时间戳转化为时间2
export const judgeTime2 = (date) => {
  if (date) {
    let dateTime = new Date(date)
    let date2 = dateformat(dateTime, 'yyyy-mm-dd-HH-MM-ss')
    return date2
  } else {
    return date
  }
}
// 传参选择时间
export const selectDate = (mes) => {
  let obj = {
    begin: undefined,
    end: undefined
  }
  let timeStamp = new Date(new Date().setHours(0, 0, 0, 0)) / 1000
  // 今天的
  if (mes === 1) {
    obj.begin = timeStamp * 1000
  }
  // 昨天的
  if (mes === 2) {
    obj.begin = timeStamp * 1000 - 86400 * 1000
    obj.end = timeStamp * 1000
  }
  // 近一星期的
  if (mes === 7) {
    obj.begin = timeStamp * 1000 - 86400 * 1000 * 6
  }
  // 近一个月的
  if (mes === 30) {
    obj.begin = timeStamp * 1000 - 86400 * 1000 * 29
  }
  // 一个月之前的
  if (mes > 30) {
    obj.end = timeStamp * 1000 - 86400 * 1000 * 29
  }
  return obj
}

export const timeList = [
  {
    name: '今天',
    value: 1
  },
  {
    name: '昨天',
    value: 2
  },
  {
    name: '近一周',
    value: 7
  },
  {
    name: '近30天',
    value: 30
  },
  {
    name: '30天前',
    value: 100
  }
]
