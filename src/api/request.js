//对axios进行二次封装
import axios from 'axios';
import nprogress from 'nprogress';
//如果出现进度条没有显示：一定是你忘记了引入样式了
import 'nprogress/nprogress.css';
import store from '@/store';
import {getToken } from '@/utils/token';

//利用axios对象的方法create方法创建一个axios实例
const requests = axios.create({
  //配置请求的基础路径
  //基础路径，发请求的时候，路径当中会出现api
  baseURL: '/api',
  //设置请求超时时间
  timeout: 5000,
});
//请求拦截器:在请求之前拦截请求
requests.interceptors.request.use(config => {
  //config是请求的配置对象
  if (store.state.detail.uuidToken) {
    config.headers.userTempId = store.state.detail.uuidToken;
  }

  if (getToken("TOKEN")) {
    config.headers.token = getToken("TOKEN");
  }
  nprogress.start();
  return config;

});
//响应拦截器:在请求之后拦截请求
requests.interceptors.response.use(res => {
  //成功的回调函数
  nprogress.done();
  return res.data;
}, error => {
  //失败的回调函数
  return Promise.reject(error);
});

//对外暴露的接口
export default requests;
