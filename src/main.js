import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.min.css'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name, Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name, Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name, GoTop)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')