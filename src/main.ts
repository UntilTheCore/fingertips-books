import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

// 全局组件注册
// c 开头的是组件
// v 开头的是视图
import Nav from '@/components/Navigation.vue'
Vue.component('Nav',Nav)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
