import {Button,Message,Notification,MessageBox} from 'element-ui';
import Vue from 'vue';

const element = {
  install: function(Vue) {
    Vue.use(Button);
    Vue.use(Notification);
    Vue.use(MessageBox);
    Vue.use(Message);
  },
};
Vue.prototype.$notify = Notification;
//注册弹框组件
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
export default element;
