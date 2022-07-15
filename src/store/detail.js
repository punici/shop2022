import {reqGoodsInfo} from '@/api';

const state = {
  goodInfo: {},
};
const mutations = {
  GET_SKU_INFO(state, payload) {
    state.goodInfo = payload;
  },
};
const actions = {
  async getGoodInfo({commit}, params) {
    let result = await reqGoodsInfo(params);
    if (result.code === 200) {
      commit('GET_SKU_INFO', result.data);
    } else {
      alert('获取数据失败', result.message);
    }
  },

};
const getters = {
  skuInfo(state){
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state){
    return state.goodInfo.spuSaleAttrList || [];
  },
  categoryView(state){
    return state.goodInfo.categoryView || {};
  },
  valuesSkuJson(state){
    return state.goodInfo.valuesSkuJson || {};
  }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
