import {reqCartList,reqDeleteCartById,reqUpdateCheckedById} from '../api';

const state = {
  cartList: [],
};
const mutations = {
  GET_CART_LIST(state, payload) {
    state.cartList = payload;
  }
};
const actions = {
  async getCartList({commit}) {
    let result = await reqCartList();
    if (result.code === 200&&result.data) {
       commit('GET_CART_LIST', result.data[0].cartInfoList||[]);
    } else {
      alert('获取购物车数据失败', result.message);
    }
  },
  async deleteCartById({commit}, params) {
    let result = await reqDeleteCartById(params);
    if (result.code === 200) {
        alert('删除购物车成功');
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async updateCheckedById({commit}, params) {
    let result = await reqUpdateCheckedById(params.skuId,params.isChecked);
    if (result.code === 200) {
        //
    } else {
      return Promise.reject(new Error(result.message));
    }
  }
};
const getters = {

};
export default {
  state,
  mutations,
  actions,
  getters,
};
