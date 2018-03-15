
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: function render(h) {
    return h(App);
  },
  created: function created() {
    this.$http.get('http://localhost:8000/project/data/first.json', { name: 'app' }).then(function () {}, function (res) {
      console.log(res);
    });
  }
});

//# sourceMappingURL=main-compiled.js.map