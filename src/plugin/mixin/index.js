
export default function (Vue) {
  Vue.mixin({
    created () {
      let selfinfo = sessionStorage.getItem('selfInfo')
      if (selfinfo) {
        this.$store.commit('selfInfo', JSON.parse(selfinfo))
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      clearParams (params) {
        if (typeof params === 'object') {
          for (let item in params) {
            params[item] = undefined
          }
        } else {
          this.$toast('请输入正确的参数')
        }
      },
      fillParams (form, row) {
        if (typeof form === 'object' && typeof row === 'object') {
          for (let i in form) {
            for (let j in row) {
              if (i === j) {
                form[i] = row[j]
              }
            }
          }
        } else {
          this.$toast('请输入正确的参数')
        }
      },
      changeDate1 (val) {
        val ? this.form.beginDate = Date.parse(val) : this.form.beginDate = undefined
      },
      changeDate2 (val) {
        val ? this.form.endDate = Date.parse(val) : this.form.endDate = undefined
      }
    },
    deactivated () {
      this.$indicator.close()
    }
  })
}
//
// export default function (Vue) {
//   Vue.mixin({
//     methods: {
//     },
//     // vue 自带页面激活钩子
//     activated () {
//       if (!this.$router.isBack) {
//         // 调用自定义的页面激活方法
//         this.activated()
//       }
//     }
//   })
// }
