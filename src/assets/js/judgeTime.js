import dateformat from 'dateformat'

// 时间戳编码转换函数
function judgeTime (date) {
  if (date) {
    let dateTime = new Date(date)
    let date2 = dateformat(dateTime, 'yyyy-mm-dd')
    return date2
  } else {
    return date
  }
}

export default judgeTime
