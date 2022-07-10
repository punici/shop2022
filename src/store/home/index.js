import {reqGetBannerList, reqGetCategoryList, reqGetFloorList} from '@/api';
//home模块的仓库
const state = {
  //home仓库中存储三级菜单的数据
  categoryList: [],
  bannerList: [],
  floorList: [],

};
//mutations是唯一修改state的地方
const mutations = {
  //接收三级菜单的数据
  CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  BANNER_LIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  FLOOR_LIST(state, floorList) {
    state.floorList = floorList;
  }
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  //获取三级菜单的数据
  async getCategoryList({commit}) {
    //发送异步请求
    let res = await reqGetCategoryList();
    if (res.code === 200) {
      //把数据存储到state中
      commit('CATEGORY_LIST', res.data);
    }
  },
  async getBannerList({commit}) {
    let res = await reqGetBannerList();
    if (res.code === 200) {
      //把数据存储到state中
      commit('BANNER_LIST', res.data);
    }
  },
  async getFloorList({commit}) {
    let res = await reqGetFloorList();
    if (res.code === 200) {
      //把数据存储到state中
      commit('FLOOR_LIST', res.data);
    }
  },
};
//计算属性
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
