
// 判断时时彩的子玩法
const judgePlay = (mes) => {
  switch (mes) {
    case 0: return '一星直选'
    case 1: return '二星组选'
    case 2: return '二星直选'
    case 3: return '三星组选'
    case 4: return '前三和值'
    case 5: return '前三复选'
    case 6: return '五星复式'
    case 7: return '猜冠军'
    case 8: return '猜冠亚军'
    case 9: return '猜前三名'
    case 10: return '定位单选'
    case 11: return '冠亚季选一'
    case 12: return '冠亚组合'
    case 13: return '正肖'
    case 14: return '五行'
    case 15: return '特别号'
    case 16: return '直码特码'
    case 17: return '组三'
    case 18: return '组六'
    case 19: return '组选和值'
    case 20: return '直选复式'
    case 21: return '直选和值'
    case 22: return '后二组复选'
    case 23: return '前二组复式'
    case 24: return '后二复式'
    case 25: return '前二复式'
    case 26: return '三星定位胆'
    case 27: return '一码不定位'
    case 28: return '二码不定位'
    case 29: return '前二直选复式'
    case 30: return '前二组选复式'
    case 31: return '后二直选复式'
    case 32: return '前二组选复式'
    case 33: return '前三直选复式'
    case 34: return '前三组选复式'
    case 35: return '中三直选复式'
    case 36: return '中三组选复式'
    case 37: return '后三直选复式'
    case 38: return '后三组选复式'
    case 39: return '不定位前三位'
    case 40: return '不定位中三位'
    case 41: return '不定位后三位'
    case 42: return '任选一中一'
    case 43: return '任选二中二'
    case 44: return '任选三中三'
    case 45: return '任选四中四'
    case 46: return '任选五中五'
    case 47: return '任选六中五'
    case 48: return '任选七中五'
    case 49: return '任选八中五'
    case 50: return '和值'
    case 51: return '三同号单选'
    case 52: return '三同号通选'
    case 53: return '三连号通选'
    case 54: return '三不同号'
    case 55: return '二同号单选'
    case 56: return '二不同号'
    default: return '未知'
  }
}
export default judgePlay

// // pk10的子玩法
// export const judgePK10Play = (mes) => {
//   switch (mes) {
//     case 7: return '猜冠军'
//     case 8: return '猜冠亚军'
//     case 9: return '猜前三名'
//     case 10: return '定位单选'
//     case 11: return '冠亚季选一'
//     case 12: return '冠亚组合'
//     default: return '未知'
//   }
// }
//
// // 六合彩的子玩法
// export const judgeLiuhePlay = (mes) => {
//   switch (mes) {
//     case 13: return '直选'
//     case 14: return '五行'
//     case 15: return '特别号'
//     case 16: return '直码特码'
//     default: return '未知'
//   }
// }
//
// // 排列三的子玩法
// export const judgePl3Play = (mes) => {
//   switch (mes) {
//     case 17: return '直选'
//     case 18: return '五行'
//     case 19: return '特别号'
//     case 20: return '直码特码'
//     case 21: return '直码特码'
//     case 22: return '直码特码'
//     case 23: return '直码特码'
//     case 24: return '直码特码'
//     case 25: return '直码特码'
//     case 26: return '直码特码'
//     case 27: return '直码特码'
//     case 28: return '直码特码'
//     default: return '未知'
//   }
// }
