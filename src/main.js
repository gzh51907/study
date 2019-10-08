import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// 让所有请求都经过UI框架
Vue.use(ElementUI)

import axios from 'axios';
// 将发送网络请求的方法设置vue实例的原型对象上
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')