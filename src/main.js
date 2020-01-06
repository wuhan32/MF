import Vue from 'vue'
import App from './App.vue'
import router from './router'


import './assets/fonts/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//状态管理
import vuex from 'vuex'
Vue.use(vuex);
import {store} from './store/index'

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak:  'dCkIZZ92XGySSARRAqZuqPT4N8TLlZ4F'
})

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
