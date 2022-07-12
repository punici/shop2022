import {reqGetSearchInfo} from '@/api';
//home模块的仓库
const state = {
  searchInfo: {},
};
//mutations是唯一修改state的地方
const mutations = {
  //改变state中的数据
  SEARCH_INFO(state, payload) {
    state.searchInfo = payload;
  },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  //获取搜索页面的数据
  async getSearchInfo({commit}, params) {
    const result = await reqGetSearchInfo(params);
    console.log(result);
    if (result.code === 200) {
      commit('SEARCH_INFO', result.data);
    } else {
      alert('获取数据失败', result.message);
    }
  },
};
//计算属性
const getters = {
  goodsList(state) {
    return state.searchInfo.goodsList || [];
  },
  attrsList(state) {
    return state.searchInfo.attrsList || [];
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
