import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '@/store';

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

let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.length === 0) {
    next('/');
  }
  let token = store.state.user.token;
  let name = store.state.user.name;
  if (token) {
    if (to.path === '/login') {
      next('/home');
    } else {
      if (name) {
        next();
      } else {
        try {
          await store.dispatch('getUserInfo');
          next();
        } catch (e) {
          await store.dispatch('logout');
          next('/login');
        }
      }
    }
  } else {
    //未登录的判断
    //如果用户未登录：去交易页面trade、去支付页面pay、支付成功页面paysuccess、个人中心 center/myorder  center/grouporder
    //用户未登录应该去登录页
    //获取用户未登录想去的路由的路径
    let toPath = to.path;
    //判断未登录：去trade、去支付、去支付成功、去个人中心【我的订单、团购订单】
    if (toPath.indexOf('trade') !== -1 || toPath.indexOf('pay') !== -1 ||
        toPath.indexOf('center') !== -1) {
      //判断未登录：去trade、去支付、去支付成功、去个人中心【我的订单、团购订单】
      //跳转到登录页
      next('/login?redirect=' + toPath);
    } else {
      //去的并非上面这些路由,放行
      next();
    }
  }

});

export default router;
