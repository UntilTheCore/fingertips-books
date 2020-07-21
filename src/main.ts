import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

// 全局组件注册
import Nav from '@/components/Navigation.vue'
import Layout from '@/components/Layout.vue';
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
