import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;
// 全局组件注册
import Nav from '@/components/Navigation.vue'
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import Button from '@/components/Button.vue';
Vue.component('Nav',Nav);
Vue.component('Layout',Layout);
Vue.component('Icon',Icon);
Vue.component('Button',Button);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
