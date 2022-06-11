import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import Search from '../views/Search/Search';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';

Vue.use(VueRouter);

//需要重写VueRouter.prototype原型对象身上的push|replace方法
//先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function(location, resolve, reject) {
  //第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产地第二个参数|第三个参数
    originPush.call(
        this,
        location,
        () => {
        },
        () => {
        },
    );
  }
};
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function(location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
        this,
        location,
        () => {
        },
        () => {
        },
    );
  }
};

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
  // 重定向,在项目跑起来的时候，访问/，默认跳转到首页
  {
    path: '/',
    redirect: '/home',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
