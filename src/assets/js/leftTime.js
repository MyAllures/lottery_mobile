function leftTimer (year, month, day, hour, minute, second) {
  // 计算剩余的毫秒数
  let leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date())
  // 计算剩余的天数
  let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10)
  // 计算剩余的小时
  let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10)
  // 计算剩余的分钟
  let minutes = parseInt(leftTime / 1000 / 60 % 60, 10)
  // 计算剩余的秒数
  let seconds = parseInt(leftTime / 1000 % 60, 10)
  days = checkTime(days)
  hours = checkTime(hours)
  minutes = checkTime(minutes)
  seconds = checkTime(seconds)
  if (days === '00') {
    days = ''
  } else {
    days = days + '天'
  }
  return days + hours + ':' + minutes + ':' + seconds
}

function checkTime (i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

export default leftTimer
