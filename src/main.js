import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/iconfont.css';
import '@/assets/fonts/iconfont.js';
import uploader from 'vue-simple-uploader'
import VueRouter from 'vue-router';
import $ from 'jquery';
import qs from 'qs';
import store from './vuex';


Vue.use(uploader);
Vue.use(ElementUI);
var vm=new Vue({
  el: '#app',
  uploader,
  router,
  store,
  render: h => h(App)
})
window.vm=vm;
window.$=$;
window.qs=qs;