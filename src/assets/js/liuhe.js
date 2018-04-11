export const dealLiuheData = (params, that) => {
  // console.log(params)
  let result = []
  let arr = params.split('&')
  arr.forEach(item => {
    let mid = item.split('=')
    if (item.split('=')[1]) {
      result.push(
        {
          number: mid[0],
          amount: mid[1],
          ticketId: that.$route.params.ticketId,
          lotteryId: 1,
          gameType: that.$store.state.threeId
        }
      )
    }
  })
  return result
}

export const judgePinyin = params => {
  switch (params) {
    case '金': return 'jin'
    case '木': return 'mu'
    case '水': return 'shui'
    case '火': return 'huo'
    case '土': return 'tu'
    case '鼠': return 'shu'
    case '牛': return 'niu'
    case '虎': return 'hu'
    case '兔': return 'tu'
    case '龙': return 'long'
    case '蛇': return 'she'
    case '马': return 'ma'
    case '羊': return 'yang'
    case '猴': return 'hou'
    case '鸡': return 'ji'
    case '狗': return 'gou'
    case '猪': return 'zhu'
    default: return params
  }
}
