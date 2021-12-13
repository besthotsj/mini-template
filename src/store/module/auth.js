import { SET_TOKEN } from '../types';

export default {
  state: {
    token: '',
  },
  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token;
    },
  },
  actions: {},
  getters: {},
};
