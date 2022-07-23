import {reqAddressInfo,reqSubmitOrder,reqOrderInfo} from '@/api'

const state = {
  addressInfo: [],
  cartGoodInfo: {},
};
const mutations = {
  SET_ADDRESS_INFO(state, payload) {
    state.addressInfo = payload;
  },
  SET_CART_GOOD_INFO(state, payload) {
    state.cartGoodInfo = payload;
  }
};
const actions = {
  async getAddressInfo({commit}, params) {
    let result = await reqAddressInfo(params);
    if (result.code === 200) {
      commit('SET_ADDRESS_INFO', result.data);
      return result;
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async getCartGoodInfo({commit}, params) {
    let result = await reqOrderInfo(params);
    if (result.code === 200) {
      commit('SET_CART_GOOD_INFO', result.data);
      return result;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async submitOrder({commit}, params) {
    let result = await reqSubmitOrder(params.tradeNo,params.data);
    if (result.code === 200) {
      return result;
    }else {
      return Promise.reject(new Error(result.message));
    }
  }
};
const getters = {
  detailArrayList(state) {
    return state.cartGoodInfo.detailArrayList||[];
  }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
