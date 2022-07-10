import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import TypeNav from './components/TypeNav/TypeNav';
import Carousel from './components/Carousel/Carousel';
import '@/mock/mockServer';
import 'swiper/css/swiper.css';

Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
