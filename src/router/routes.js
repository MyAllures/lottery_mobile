
import home from '../components/home'
import login from '../components/home/login.vue'
import register from '../components/home/register.vue'
import bethall from '../components/bethall'
import caihall from '../components/caihall'
import notice from '../components/notice'
import myinfo from '../components/myinfo'
// 投注大厅的子页面
import appload from '../components/bethall/other/appload'
import activity from '../components/bethall/other/activity'
import activityDetail from '../components/bethall/other/activity-detail'
import qiandao from '../components/bethall/other/qiandao.vue'
// 个人信息下的子页面
import recherge from '../components/myinfo/children/recherge.vue'
import tixian from '../components/myinfo/children/tixian.vue'
import edu from '../components/myinfo/children/edu.vue'
import betcount from '../components/myinfo/list/betcount.vue'
import rechergeCount from '../components/myinfo/list/rechergeCount.vue'
import tixianCount from '../components/myinfo/list/tixianCount.vue'
// 所有玩法的集合主页
import playGame from '../components/playGame/index.vue'
// 投注最终的付款页面
import payment from '../components/playGame/payment'

import message from '../components/myinfo/list/message.vue'
import messageDetail from '../components/myinfo/list/messageDetail.vue'
import noticeDetail from '../components/notice/noticeDetail.vue'
import selfInfo from '../components/myinfo/selfInfo.vue'
import charts from '../components/bethall/other/charts.vue'

const routes = [
  {
    path: '/',
    component: home,
    children: [
      {
        name: '默认',
        path: '/',
        component: bethall,
        meta: {
          role: true
        }
      },
      {
        name: '投注大厅',
        path: '/bethall',
        component: bethall,
        meta: {
          role: true
        }
      },
      {
        name: '购彩大厅',
        path: '/caihall',
        component: caihall,
        meta: {
          role: true
        }
      },
      {
        name: '开奖公告',
        path: '/notice',
        component: notice,
        meta: {
          role: true
        }
      },
      {
        name: '个人中心',
        path: '/myinfo',
        component: myinfo,
        meta: {
          role: true
        }
      }
    ]
  },
  {
    name: 'APP 下载',
    path: '/appload',
    component: appload
  },
  {
    name: 'charts',
    path: '/charts',
    component: charts
  },
  {
    name: '优惠活动',
    path: '/activity',
    component: activity,
    children: [
      {
        name: '活动详情',
        path: '/activityDetail',
        component: activityDetail
      }
    ]
  },
  {
    name: '玩法页',
    path: '/playGame/:ticketId',
    component: playGame
  },
  {
    name: '充值',
    path: '/recherge',
    component: recherge
  },
  {
    name: '提款',
    path: '/tixian',
    component: tixian
  },
  {
    name: '额度转换',
    path: '/edu',
    component: edu
  },
  {
    name: '投注记录',
    path: '/betcount',
    component: betcount
  },
  {
    name: '账变记录',
    path: '/rechergeCount',
    component: rechergeCount
  },
  {
    name: '提现记录',
    path: '/tixianCount',
    component: tixianCount
  },
  {
    name: '站内信',
    path: '/message',
    component: message
  },
  {
    name: '信息详情',
    path: '/message/detail',
    component: messageDetail
  },
  {
    name: '登录',
    path: '/login',
    component: login
  },
  {
    name: '注册',
    path: '/register',
    component: register,
    meta: {
      role: true
    }
  },
  {
    name: '历史开奖结果',
    path: '/notice/detail',
    component: noticeDetail
  },
  {
    name: '个人信息',
    path: '/selfInfo',
    component: selfInfo
  },
  {
    name: '每日签到',
    path: '/qiandao',
    component: qiandao
  },
  {
    name: '投注付款',
    path: '/payment',
    component: payment
  },
  {
    name: '玩法说明',
    path: '/example',
    component: load('public/example')
  },
  {
    name: 'test',
    path: '/test',
    component: load('test'),
    meta: {
      role: true
    }
  }
]
export default routes

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/components/playGame/${component}.vue`)
}
