export default {
  0: { // 一星直选
    title: '选择1个数字号码竞猜全部开奖号码，投注号码与开奖号码前1相同中奖',
    example: '选择1个数字号码竞猜全部开奖号码，投注号码与开奖号码前1相同中奖',
    help: '选择1个数字号码竞猜全部开奖号码，投注号码与开奖号码前1相同中奖',
    diolog: '请选择一位或多位号码',
    play: [
      {
        id: 1,
        title: '选择',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  1: { // 二星组选
    title: '从0-9中选2个号码组成一注。',
    example: '如：选择7、8，开奖号码为78***或者87*****即为中奖。',
    help: '从0-9中选2个号码组成一注，所择号码与开奖号码的万位、千位相同，顺序不限，即为中奖。',
    diolog: '请选择2位或多位号码',
    play: [
      {
        id: 1,
        title: '万位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '千位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  2: { // 二星直选
    title: '万位、千位分别选1个号码为一注。',
    example: '与前后任选四星单复式同理，只是下注号改为2位。',
    help: '与前后任选三星单复式同理，只是下注号改为2位。',
    diolog: '请分别选择万位千位至少各一注',
    play: [
      {
        id: 1,
        title: '万位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '千位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  3: { // 三星组选
    title: '选择1个数字号码竞猜全部开奖号码，投注号码与开奖号码前1相同中奖',
    example: '选择1个数字号码竞猜全部开奖号码，投注号码与开奖号码前1相同中奖',
    help: '选择1个数字号码竞猜全部开奖号码，投注号码与开奖号码前1相同中奖',
    diolog: '请选择一位或多位号码',
    play: [
      {
        id: 1,
        title: '选择',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  4: { // 前三和值
    title: '万位、千位、百位分别选择1个号码组成一注',
    example: '与前后任选四星单复式同理，只是下注号改为3位。',
    help: '与前后任选四星单复式同理，只是下注号改为3位。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '万位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '千位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '百位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  5: { // 前三复选
    title: '万位、千位、百位分别选择1个号码组成一注',
    example: '与前后任选四星单复式同理，只是下注号改为3位。',
    help: '与前后任选四星单复式同理，只是下注号改为3位。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '万位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '千位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '百位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  6: { // 五星复式
    title: '从万位、千位、百位、十位、个位中分别选择1个号码组成一注。',
    example: '如：万位选1和2，千位选2，百位选3，十位选4，个位选5，则你投两注分别为12345和22345，如果开奖号为12345，则你中奖一注，22345为不中。',
    help: '从万位、千位、百位、十位、个位中选择一个5位数号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。',
    diolog: '请选5位数字',
    play: [
      {
        id: 1,
        title: '万位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '千位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '百位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 4,
        title: '十位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 5,
        title: '个位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  7: { // 猜冠军
    title: '选择1个数字号码竞猜全部开奖号码，投注号码与开奖号码前1相同中奖',
    example: '选择1个数字号码竞猜全部开奖号码，投注号码与开奖号码前1相同中奖',
    help: '选择1个数字号码竞猜全部开奖号码，投注号码与开奖号码前1相同中奖',
    diolog: '请选择一位或多位号码',
    play: [
      {
        id: 1,
        title: '冠军',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  8: { // 猜冠亚军
    title: '选择2个数字号码竞猜全部开奖号码，投注号码与开奖号码前2相同中奖',
    example: '选择2个数字号码竞猜全部开奖号码，投注号码与开奖号码前2相同中奖',
    help: '选择2个数字号码竞猜全部开奖号码，投注号码与开奖号码前2相同中奖',
    diolog: '请选择2位数字',
    play: [
      {
        id: 1,
        title: '冠军',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '亚军',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  9: { // 猜前三名
    title: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    example: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    help: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '冠军',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '亚军',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '季军',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  10: { // 定位单选
    title: '任意选择1个或1个以上号码。',
    example: '任意选择1个或1个以上号码。',
    help: '任意选择1个或1个以上号码，投注号码与开奖号码相同中奖。',
    diolog: '请至少选1位号码',
    play: [
      {
        id: 1,
        title: '冠军',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '亚军',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '季军',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 4,
        title: '第四名',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 5,
        title: '第五名',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 6,
        title: '第六名',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 7,
        title: '第七名',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 8,
        title: '第八名',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 9,
        title: '第九名',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 10,
        title: '第十名',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  11: { // 冠亚季选一
    title: '至少选择一个号码。',
    example: '投注方案：01 开奖号码：01,02,03*******',
    help: '前三位(第一、二、三名)中奖号码为兑奖号码，投注一个号码，如果在开奖结果的前三位数中存在，视为中奖。',
    diolog: '请选1位数字',
    play: [
      {
        id: 1,
        title: '冠亚季选一',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  12: { // 冠亚组合
    title: '至少选择一个组合。',
    example: '投注方案：龙，1-2开奖号码：01,02********',
    help: '根据前两位数字（第一，二名）中奖号码为兑奖号码，投注两个号码，如果在开奖结果的前二位数中存在，不分顺序，视为中奖。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '冠亚季选一',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  13: { // 直选
    title: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    example: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    help: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    diolog: '请选3位数字',
    play: [
      {
        xiao: '鼠',
        peilv: 11,
        number: [10, 22, 34, 46]
      },
      {
        xiao: '牛',
        peilv: 11,
        number: [9, 21, 33, 45]
      },
      {
        xiao: '虎',
        peilv: 11,
        number: [8, 20, 32, 44]
      },
      {
        xiao: '兔',
        peilv: 11,
        number: [7, 19, 31, 43]
      },
      {
        xiao: '龙',
        peilv: 11,
        number: [6, 18, 30, 42]
      },
      {
        xiao: '蛇',
        peilv: 11,
        number: [5, 17, 29, 41]
      },
      {
        xiao: '马',
        peilv: 11,
        number: [4, 16, 28, 40]
      },
      {
        xiao: '羊',
        peilv: 11,
        number: [3, 15, 27, 39]
      },
      {
        xiao: '猴',
        peilv: 11,
        number: [2, 14, 26, 38]
      },
      {
        xiao: '鸡',
        peilv: 11,
        number: [1, 13, 25, 37, 49]
      },
      {
        xiao: '狗',
        peilv: 11,
        number: [12, 24, 36, 48]
      },
      {
        xiao: '猪',
        peilv: 11,
        number: [11, 23, 35, 47]
      }
    ]
  },
  14: { // 五行
    title: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    example: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    help: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    diolog: '请选3位数字',
    play: [
      {
        xiao: '金',
        peilv: 11,
        number: [3, 4, 17, 18, 25, 26, 33, 34, 47, 48]
      },
      {
        xiao: '木',
        peilv: 11,
        number: [7, 8, 15, 16, 29, 30, 37, 38, 45, 46]
      },
      {
        xiao: '水',
        peilv: 11,
        number: [5, 6, 13, 14, 21, 22, 35, 36, 43, 44]
      },
      {
        xiao: '火',
        peilv: 11,
        number: [1, 2, 9, 10, 23, 24, 31, 32, 39, 40]
      },
      {
        xiao: '土',
        peilv: 11,
        number: [11, 12, 19, 20, 27, 28, 41, 42, 49, 48]
      }
    ]
  },
  15: { // 特别号
    title: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    example: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    help: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    diolog: '请选3位数字'
  },
  16: { // 直码特码
    title: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    example: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    help: '选择3个数字号码竞猜全部开奖号码，投注号码与开奖号码前3相同中奖。',
    diolog: '请选3位数字'
  },
  17: { // 组三
    title: '从0-9中任意选择2个号码组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。',
    example: '如：选择12（展开为122**，212**，221** 和 112**、121**、211**），开奖号码为212 或 121，即为中奖。',
    help: '从0-9中任意选择2个号码组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。',
    diolog: '请选2位数字',
    play: [
      {
        id: 1,
        title: '选择',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  18: { // 组六
    title: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。',
    example: '如：选择123（展开为123**，132**，231**，213**，312**，321**），开奖号码为321**，即为中奖。',
    help: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '选择',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  19: { // 组选和值
    title: '从1-26中任意选择1个或1个以上号码。',
    example: '从1-26中任意选择1个或1个以上号码。',
    help: '所选数值等于开奖号码的三个数字相加之和，即为中奖。组三奖中奖两注，组六奖中奖一注',
    diolog: '至少选择一位！',
    play: [
      {
        id: 1,
        title: '选择',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  20: { // 直选复式
    title: '从百位、十位、个位各选一个号码组成一注。',
    example: '如：01 02 03如：百位选1，十位选2，个位选3，则你投两注分别为123，开奖号为123，则为中奖。',
    help: '从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '百位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '十位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '个位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  21: { // 直选和值
    title: '从0-27中任意选择1个或1个以上号码。',
    example: '投注方案：10  开奖号码：5,1,4   则中奖',
    help: '所选数值等于三个开奖号相加之和，即为中奖。',
    diolog: '请至少选1位数字',
    play: [
      {
        id: 1,
        title: '和值',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  22: { // 后二组复选
    title: '从0-9中任意选择2个或2个以上号码。',
    example: '如：选择7、8，开奖号码*78或*87即为中奖。',
    help: '从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即为中奖。',
    diolog: '请至少选2位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  23: { // 前二组复式
    title: '从0-9中任意选择2个或2个以上号码。',
    example: '如：选择7、8，开奖号码78*或87*，即为中奖。',
    help: '从0-9中选2个号码组成一注，所择号码与开奖号码的百位、十位相同，顺序不限，即为中奖。',
    diolog: '请至少选2位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  24: { // 后二复式
    title: '从0-9中任意选择2个或2个以上号码。',
    example: '如：选择7、8，开奖号码78*或87*，即为中奖。',
    help: '从0-9中选2个号码组成一注，所择号码与开奖号码的百位、十位相同，顺序不限，即为中奖。',
    diolog: '请至少选2位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  25: { // 前二复式
    title: '从0-9中任意选择2个或2个以上号码。',
    example: '如：选择7、8，开奖号码78*或87*，即为中奖。',
    help: '从0-9中选2个号码组成一注，所择号码与开奖号码的百位、十位相同，顺序不限，即为中奖。',
    diolog: '请至少选2位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  26: { // 三星定位胆
    title: '在百位、十位、个位任意位置上任意选择1个或1个以上号码。',
    example: ' 如：定百位为1，开奖号码为1**即为中奖；定十位为2，开奖号码为*2*即为中奖，如此类推。',
    help: '从百位、十位、个位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
    diolog: '请至少选1位数字',
    play: [
      {
        id: 1,
        title: '百位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '十位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '个位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  27: { // 一码不定位
    title: '从0-9中任意选择1个以上号码。',
    example: '如：选择一码不定位4，开出*4*、**4、4**即为中奖。',
    help: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。',
    diolog: '请至少选1位号码',
    play: [
      {
        id: 1,
        title: '选择',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  28: { // 二码不定位
    title: '从0-9中任意选择2个以上号码。',
    example: '如：选择12，前三位，至少出现1和2各一个即为中奖。',
    help: '从0-9中选择2个号码，每注由2个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。',
    diolog: '至少选择2位数',
    play: [
      {
        id: 1,
        title: '选择',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  29: { // 前二直选复式
    title: '对第1位和第2位各选1个号码为一注。',
    example: '如 01， 02',
    help: '对第1位和第2位各选1个号码为一注，某一位或两位选择2个以号码为复式投注，投注号码与开奖号码前2位按位一致即为中奖。',
    diolog: '请选2位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  30: { // 前二组选复式
    title: '对第1位和第2位各选1个号码为一注。',
    example: '如 01， 02',
    help: '对第1位和第2位各选1个号码为一注，某一位或两位选择2个以号码为复式投注，投注号码与开奖号码前2位按位一致即为中奖。',
    diolog: '请选2位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  31: { // 后二直选复式
    title: '对第1位和第2位各选1个号码为一注。',
    example: '如 01， 02',
    help: '对第1位和第2位各选1个号码为一注，某一位或两位选择2个以号码为复式投注，投注号码与开奖号码前2位按位一致即为中奖。',
    diolog: '请选2位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  32: { // 后二组选复式
    title: '对第1位和第2位各选1个号码为一注。',
    example: '如 01， 02',
    help: '对第1位和第2位各选1个号码为一注，某一位或两位选择2个以号码为复式投注，投注号码与开奖号码前2位按位一致即为中奖。',
    diolog: '请选2位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  33: { // 前三直选复式
    title: '对第1位、第2位和第3位各选1个号码为一注。',
    example: '如 01，02，03',
    help: '对第1位、第2位和第3位各选1个号码为一注，某一位或几位选择2个以号码为复式投注，投注号码与开奖号码前3位按位一致即为中奖。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '三位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  34: { // 前三组选复式
    title: '从01～11中任选3个号码为一注。',
    example: '投注方案：01 02 03开奖号码：03 01 02 * *（前三顺序不限），即中前三组选。',
    help: '从01～11中任选3个号码为一注，选择3个以上号码为复式投注，投注号码与开奖号码前3位一致，顺序不限，即为中奖。',
    diolog: '请至少选3位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  35: { // 组三直选复式
    title: '从第一位、第二位、第三位中至少各选择1个号码。',
    example: '如：01 02 03',
    help: '对第1位、第2位和第3位各选1个号码为一注，某一位或几位选择2个以号码为复式投注，投注号码与开奖号码中3位按位一致即为中奖。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '三位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]

  },
  36: { // 组三组选复式
    title: '从01～11中任选3个号码为一注。',
    example: '投注方案：01 02 03开奖号码：*03 01 02  *（前三顺序不限），即中中三组选。',
    help: '从01～11中任选3个号码为一注，选择3个以上号码为复式投注，投注号码与开奖号码中3位一致，顺序不限，即为中奖。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  37: { // 后三直选复式
    title: '从第一位、第二位、第三位中至少各选择1个号码。',
    example: '如：01 02 03',
    help: '对第1位、第2位和第3位各选1个号码为一注，某一位或几位选择2个以号码为复式投注，投注号码与开奖号码中3位按位一致即为中奖。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '二位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 3,
        title: '三位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  38: { // 后三组选复式
    title: '从01～11中任选3个号码为一注。',
    example: '投注方案：01 02 03开奖号码：*03 01 02  *（前三顺序不限），即中中三组选。',
    help: '从01～11中任选3个号码为一注，选择3个以上号码为复式投注，投注号码与开奖号码中3位一致，顺序不限，即为中奖。',
    diolog: '请选3位数字',
    play: [
      {
        id: 1,
        title: '一位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  39: { // 不定位前三位
    title: '从01-11中任意选择1个或1个以上号码。',
    example: '投注方案：01开奖号码：01 * * * *，* 01 * * *，* * 01 * *，即中前三位。',
    help: '从01-11中共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖。',
    diolog: '请至少选择一个号码',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  40: { // 不定位中三位
    title: '从01-11中任意选择1个或1个以上号码。',
    example: '投注方案：01开奖号码：* 01 * * *，*  * 01 * *，* * * 01 *，即中中三位。',
    help: '从01-11中共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第二位、第三位、第四位开奖号码中包含所选号码，即为中奖',
    diolog: '请至少选择一个号码',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  41: { // 不定位后三位
    title: '从01-11中任意选择1个或1个以上号码。',
    example: '投注方案：01开奖号码：* * 01 * *，* * * 01 *，* * * * 01，即中后三位。',
    help: '从01-11中共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第三位、第四位、第五位开奖号码中包含所选号码，即为中奖',
    diolog: '请至少选择一个号码',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  42: { // 任选一中一
    title: '从01～11中任选1个号码为一注。',
    example: '如：05   开奖号码：01,02,03,04,05   即为中奖',
    help: '从01～11中任选1个号码为进行购买，只要当期摇出的5个号码中包含所选号码，即为中奖。',
    diolog: '请至少选择一个数字',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  43: { // 任选二中二
    title: '从01～11中任选2个号码为一注。',
    example: '如：01 02，01 03',
    help: '从01～11中任选2个号码为一注，选择2个以上号码为复式投注，投注号码与开奖号码中任意2个号码相同即为中奖，单注奖金6元。投注时可选择1个号码作为每注都有的胆码，再补充其它号码作为拖码投注。',
    diolog: '请至少选择2个数字',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  44: { // 任选三中三
    title: '从01～11中任选3个号码为一注。',
    example: '如：01 02 03，01 02 04',
    help: '从01～11中任选3个号码为一注，选择3个以上号码为复式投注，投注号码与开奖号码中任意3个号码相同即为中奖，单注奖金19元。投注时可选择1～2个号码作为每注都有的胆码，再补充其它号码作为拖码投注。',
    diolog: '请至少选择3个数字',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  45: { // 任选四中四
    title: '从01～11中任选4个号码为一注。',
    example: '如：01 02 03 04，01 02 03 05',
    help: '从01～11中任选4个号码为一注，选择4个以上号码为复式投注，投注号码与开奖号码中任意4个号码相同即为中奖，单注奖金78元。投注时可选择1～3个号码作为每注都有的胆码，再补充其它号码作为拖码投注。',
    diolog: '请至少选择4个数字',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  46: { // 任选五中五
    title: '从01～11中任选5个号码为一注。',
    example: '如：01 02 03 04 05',
    help: '从01～11中任选5个号码为一注，选择5个以上号码为复式投注，投注号码与开奖号码全部相同即为中奖，单注奖金540元。投注时可选择1～4个号码作为每注都有的胆码，再补充其它号码作为拖码投注。',
    diolog: '请至少选择5个数字',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  47: { // 任选六中五
    title: '从01～11中任选6个号码为一注。',
    example: '如：01 02 03 04 05 X',
    help: '从01～11中任选6个号码为一注，选择6个以上号码为复式投注，投注号码中任意5个号码与5位开奖号码相同即为中奖，单注奖金90元。投注时可选择1～5个号码作为每注都有的胆码，再补充其它号码作为拖码投注。',
    diolog: '请至少选择6个数字',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  48: { // 任选七中五
    title: '从01～11中任选7个号码为一注。',
    example: '如：01 02 03 04 05 X X',
    help: '从01～11中任选7个号码为一注，选择7个以上号码即为复式投注，投注号码中任意5个号码与5位开奖号码相同即为中奖，单注奖金26元。投注时可选择1～6个号码作为每注都有的胆码，再补充其它号码作为拖码进行投注。',
    diolog: '请至少选择7个数字',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  49: { // 任选八中五
    title: '从01～11中任选8个号码为一注。',
    example: '如：01 02 03 04 05 X X X',
    help: '从01～11中任选8个号码为一注，选择8个以上号码为复式投注，投注号码中任意5个号码与5位开奖号码相同即为中奖，单注奖金9元。投注时可选择1～7个号码作为每注都有的胆码，再补充其它号码作为拖码投注。',
    diolog: '请至少选择8个数字',
    play: [
      {
        id: 1,
        title: '不定位',
        num: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  50: { // 和值
    title: '与开奖号码3个数字相加的点数一致即中奖。',
    example: '与开奖号码3个数字相加的点数一致即中奖。',
    help: '与开奖号码3个数字相加的点数一致即中奖。',
    diolog: '请至少选择1位数字',
    play: [
      {
        id: 1,
        title: '号码',
        num: [],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  51: { // 三同号单选
    title: '2元单选1个豹子(111,222,333,444,555,666)投注，选号与开奖号码一致即中奖。',
    example: '2元单选1个豹子(111,222,333,444,555,666)投注，选号与开奖号码一致即中奖。。',
    help: '2元单选1个豹子(111,222,333,444,555,666)投注，选号与开奖号码一致即中奖。',
    diolog: '请至少选择1位数字',
    play: [
      {
        id: 1,
        title: '号码',
        num: ['111', '222', '333', '444', '555', '666'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  52: { // 三同号通选
    title: '2元全包豹子(111,222,333,444,555,666)投注，开出任意豹子即中奖。',
    example: '2元全包豹子(111,222,333,444,555,666)投注，开出任意豹子即中奖。',
    help: '2元全包豹子(111,222,333,444,555,666)投注，开出任意豹子即中奖。',
    diolog: '请至少选择1位数',
    play: [
      {
        id: 1,
        title: '号码',
        num: ['111,222,333,444,555,666', '111,222,333,444,555,666 '],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]

  },
  53: { // 三连号通选
    title: '2元全包顺子(123,234,345,456)投注，开出任意顺子即中奖。',
    example: '2元全包顺子(123,234,345,456)投注，开出任意顺子即中奖。',
    help: '2元全包顺子(123,234,345,456)投注，开出任意顺子即中奖。',
    diolog: '请至少选择1位数',
    play: [
      {
        id: 1,
        title: '号码',
        num: ['123,234,345,456'],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  54: { // 三不同号
    title: '至少选择3个不同号码投注，选号与开奖号码一致即中奖。',
    example: '至少选择3个不同号码投注，选号与开奖号码一致即中奖。',
    help: '至少选择3个不同号码投注，选号与开奖号码一致即中奖。',
    diolog: '请至少选择3位数',
    play: [
      {
        id: 1,
        title: '号码',
        num: [1, 2, 3, 4, 5, 6],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  55: { // 二同号单选
    title: '选择1个对子和1个不同号码投注，选号与开奖号码一致即中奖。',
    example: '选择1个对子和1个不同号码投注，选号与开奖号码一致即中奖。',
    help: '选择1个对子和1个不同号码投注，选号与开奖号码一致即中奖。',
    diolog: '请选2位数字',
    play: [
      {
        id: 1,
        title: '同号',
        num: [11, 22, 33, 44, 55, 66],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      },
      {
        id: 2,
        title: '不同号',
        num: [1, 2, 3, 4, 5, 6],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  },
  56: { // 二不同号
    title: '至少选择2个不同号码投注，选号与开奖号码一致即中奖。',
    example: '至少选择2个不同号码投注，选号与开奖号码一致即中奖。',
    help: '至少选择2个不同号码投注，选号与开奖号码一致即中奖。',
    diolog: '请至少选择2位数',
    play: [
      {
        id: 1,
        title: '号码',
        num: [1, 2, 3, 4, 5, 6],
        numArr: [],
        num2: ['全', '大', '小', '单', '双', '清'],
        numArr2: ''
      }
    ]
  }
}
