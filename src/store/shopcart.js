import {reqCartList, reqDeleteCartById, reqUpdateCheckedById} from '../api';

const state = {
  cartList: [],
};
const mutations = {
  GET_CART_LIST(state, payload) {
    state.cartList = payload;
  },
};
const actions = {
  async getCartList({commit}) {
    let result = await reqCartList();
    if (result.code === 200 && result.data) {
      if (result.data.length > 0) {
        commit('GET_CART_LIST', result.data[0].cartInfoList || []);
      }
    } else {
      alert('获取购物车数据失败', result.message);
    }
  },
  async deleteCartById({commit}, params) {
    let result = await reqDeleteCartById(params);
    if (result.code === 200) {
      //
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async updateCheckedById({commit}, params) {
    let result = await reqUpdateCheckedById(params.skuId, params.isChecked);
    if (result.code === 200) {
      //
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  deleteAllCheckedCart({state, dispatch}) {
    let promiseAll = [];
    if (state.cartList.length === 0) {
      return Promise.reject(new Error('购物车为空'));
    }
    state.cartList.forEach(item => {
      if (item.isChecked === 1) {
        let promise = dispatch('deleteCartById', item.skuId);
        promiseAll.push(promise);
      }
    });
    return Promise.all(promiseAll);
  },
  updateAllChecked({state, dispatch}, isChecked) {
    let promiseAll = [];
    if (state.cartList.length === 0) {
      return Promise.reject(new Error('购物车为空'));
    }
    state.cartList.forEach(item => {
      item.isChecked = isChecked;
      let promise = dispatch('updateCheckedById', {
        skuId: item.skuId,
        isChecked: isChecked,
      });
      promiseAll.push(promise);

    });
    return Promise.all(promiseAll);
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
