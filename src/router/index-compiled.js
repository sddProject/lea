import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import echarts from 'echarts';
import First from '@/components/first';
import FirstOne from '@/components/First/FirstOne';
import FirstTwo from '@/components/First/FirstTwo';
import Earning from '@/components/earning';
import Three from '@/components/hello';
import Have from '@/components/yingli';
import Sale from '@/components/sale';
import text from '@/components/text';

Vue.use(Router);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(echarts);

export default new Router({
  mode: 'history',
  data: function data() {
    return {
      pages: {
        First: First,
        Earning: Earning,
        Three: Three,
        Have: Have,
        Sale: Sale,
        FirstOne: FirstOne,
        FirstTwo: FirstTwo,
        text: text
      }
    };
  },
  routes: [{
    path: '/',
    component: First,
    children: [{
      path: '/',
      component: FirstOne
    }]
  }, {
    path: '/first1',
    component: First,
    children: [{
      path: '/FirstOne',
      component: FirstOne
    }, {
      path: '/FirstTwo',
      component: FirstTwo
    }]
  }, {
    path: '/Earning',
    component: Earning
  }, {
    path: '/hello',
    component: Three
  }, {
    path: '/sale',
    component: Sale
  }, {
    path: '/have',
    component: Have
  }, {
    path: '/text',
    component: text
  }]
});

//# sourceMappingURL=index-compiled.js.map