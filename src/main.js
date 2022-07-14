import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import TypeNav from './components/TypeNav/TypeNav';
import Carousel from './components/Carousel/Carousel';
import Pagination from './components/Pagination/Pagination';
import '@/mock/mockServer';
import 'swiper/css/swiper.css';
import "./assets/iconfont/iconfont.css";

Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
