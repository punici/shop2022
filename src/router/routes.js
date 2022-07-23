//component右侧数值：放置的是一个箭头函数，当这个home路由被访问的时候，才会执行；
//当用户访问当前Home的时候，我才加载Home路由组件，不访问，不加载当前Home路由组件
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue'),
    meta: {isHideFooter: true},
  },
  {
    path: '/search/:keyword?',
    name: 'Search',
    component: () => import('../views/Search/Search.vue'),
    meta: {isHideFooter: true},
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
    meta: {isHideFooter: false},
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register/Register.vue'),
    meta: {isHideFooter: false},
  },
  {
    path: '/detail/:skuId',
    name: 'Detail',
    component: () => import('../views/Detail/Detail.vue'),
    meta: {isHideFooter: true},
  },
  {
    path: '/addCartSuccess',
    name: 'AddCartSuccess',
    component: () => import('../views/AddCartSuccess/AddCartSuccess.vue'),
    meta: {isHideFooter: true},
  },
  {
    path: '/shopCart',
    name: 'ShopCart',
    component: () => import('../views/ShopCart/ShopCart.vue'),
  },
  {
    path: '/trade',
    name: 'Trade',
    component: () => import('../views/Trade/Trade.vue'),
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      //进入支付页面，必须从交易页面而来
      if (from.path === '/shopCart') {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: '/pay/:orderId',
    name: 'Pay',
    component: () => import('../views/Pay/Pay.vue'),
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      //进入支付页面，必须从交易页面而来
      if (from.path.indexOf('/trade') !== -1) {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: '/paySuccess',
    name: 'PaySuccess',
    component: () => import('../views/PaySuccess/PaySuccess.vue'),
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      //进入支付页面，必须从交易页面而来
      if (from.path.indexOf('/pay') !== -1) {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: '/center',
    name: 'Center',
    component: () => import('../views/Center/Center.vue'),
    children: [
      {
        path: 'groupOrder',
        name: 'GroupOrder',
        component: () => import('../views/Center/GroupOrder/GroupOrder.vue'),
      },
      {
        path: 'myOrder',
        name: 'MyOrder',
        component: () => import('../views/Center/MyOrder/MyOrder.vue'),
      },
      {
        path: '/center',
        redirect: '/center/myOrder',
      },
    ],

  },
  // 重定向,在项目跑起来的时候，访问/，默认跳转到首页
  {
    path: '/',
    redirect: '/home',
  },
];
export default routes;
