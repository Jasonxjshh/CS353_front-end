// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//在main.js引入qs
import qs from 'qs'
//配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
Vue.prototype.$qs = qs

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    data() {
        return {}
    },
    mounted() {},
    router,
    components: { App },
    // template: '<App v-bind="$attrs" v-on="$listeners"/>'
    template: '<App/>'
})