// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 状态管理
import VueLazyload from 'vue-lazyload' // 懒加载

/**
 * @desc 懒加载配置
 * @author wtniu
 */
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created: function () {
    this.$http.get('http://localhost:8000/project/data/first.json'
      , {name: 'app'}).then(function () {
      },
      function (res) {
        console.log(res)
      })
  }
})

