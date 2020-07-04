import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import router from './router'
import store from './store'
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'
 
Vue.use(BaiduMap, {
  ak: '4h17pppWzEit6XBAYciAbcBINHiKrAwx'
})

Vue.use(ElementUI);
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
