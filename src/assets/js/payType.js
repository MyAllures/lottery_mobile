// 把支付类型数字转为中文
export const changeStatusNumber = (mes) => {
  switch (mes) {
    case 0: return '全部'
    case 1: return '支付宝扫码'
    case 2: return '支付宝wap'
    case 3: return '京东支付'
    case 4: return 'QQ支付'
    case 5: return '快捷支付'
    case 6: return '微信扫码'
    case 7: return '微信H5'
    case 8: return 'QQwap'
    case 9: return '银联扫码'
    case 10: return '备注二维码'
    default: return '未知'
  }
}

// 判断支付状态
export const judgeStatus = (mes) => {
  switch (mes) {
    case 0: return '成功'
    case 1: return '失败'
    case 2: return '等待'
    default: return '未知'
  }
}
