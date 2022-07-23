import Home from '../views/Home/Home.vue';
import Search from '../views/Search/Search';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import Detail from '../views/Detail/Detail';
import AddCartSuccess from '../views/AddCartSuccess/AddCartSuccess';
import ShopCart from '../views/ShopCart/ShopCart';
import Trade from '../views/Trade/Trade';
import Pay from '../views/Pay/Pay';
import PaySuccess from '../views/PaySuccess/PaySuccess';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {isHideFooter: true},
  },
  {
    path: '/search/:keyword?',
    name: 'Search',
    component: Search,
    meta: {isHideFooter: true},
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {isHideFooter: false},
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {isHideFooter: false},
  },
  {
    path: '/detail/:skuId',
    name: 'Detail',
    component: Detail,
    meta: {isHideFooter: true},
  },
  {
    path: '/addCartSuccess',
    name: 'AddCartSuccess',
    component: AddCartSuccess,
    meta: {isHideFooter: true},
  },
  {
    path: '/shopCart',
    name: 'ShopCart',
    component: ShopCart,
  },
  {
    path: '/trade',
    name: 'Trade',
    component: Trade,
  },
  {
    path: '/pay/:orderId',
    name: 'Pay',
    component: Pay,
  }, {
    path: '/paySuccess',
    name: 'PaySuccess',
    component: PaySuccess,
  },
  // 重定向,在项目跑起来的时候，访问/，默认跳转到首页
  {
    path: '/',
    redirect: '/home',
  },
];
export default routes;
