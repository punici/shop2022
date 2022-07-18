import {reqCartList} from '../api';

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
