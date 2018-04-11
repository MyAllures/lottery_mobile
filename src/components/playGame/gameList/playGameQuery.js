// 通过传入的ID查询对应的彩种的组件名
const playGameQuery = (mes) => {
  switch (mes) {
    case 17:
      return 'my-pl3'
    case 18:
      return 'my-sfpk10'
    case 20:
      return 'my-lhc'
    case 21:
      return 'my-bjpk10'
    case 22:
      return 'my-ssc'
    case 24:
      return 'my-sfssc'
    case 31:
      return 'my-syx5'
  }
}
export default playGameQuery
