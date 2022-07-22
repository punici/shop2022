import {
  reqGetCode,
  reqLogout,
  reqUserInfo,
  reqUserLogin,
  reqUserRegister,
} from '@/api';
import {getToken, setToken} from '@/utils/token';

const state = {
  code: '',
  token: getToken('TOKEN'),
  userInfo: {},
};
const mutations = {
  GET_CODE(state, payload) {
    state.code = payload;
  },
  SET_USER_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
  },
  CLEAR_USER(state){
    state.token = '';
    state.userInfo = {};
  }
};
const actions = {
  async getCode({commit}, params) {
    let result = await reqGetCode(params);
    if (result.code === 200) {
      commit('GET_CODE', result.data);
      return result.data;
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async userRegister({commit}, params) {
    let result = await reqUserRegister(params);
    if (result.code === 200) {
      return result;
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async login({commit}, params) {
    let result = await reqUserLogin(params);
    if (result.code === 200) {
      commit('SET_USER_TOKEN', result.data.token);
      setToken(result.data.token);
      return result;
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async getUserInfo({commit}) {
    let result = await reqUserInfo();
    if (result.code === 200) {
      commit('SET_USER_INFO', result.data);
      return result;
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
  async logout({commit}) {
    let result = await reqLogout();
    if (result.code === 200) {
      commit('CLEAR_USER');
      setToken('');
      return result;
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};

