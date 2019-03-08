import Vue from 'vue';
import App from './App.vue';
import { router } from '@/router/index.js';
import store from '@/store/index.js';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element);
Vue.config.productionTip = false;

new Vue({
    strict: process.env.NODE_ENV !== 'pro',
    router,
    store,
    render: h => h(App),
}).$mount('#app');
