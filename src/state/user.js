/* eslint-disable */
import axios from 'axios';

const user = {
  state: {
    email: '',
    token: '',
  },
  mutations: {
    setLoginData(state, payload) {
      state.email = payload.email;
      state.token = payload.token;
    },
  },
  actions: {
    login({ commit }, userInfo) {
      return axios({
        method: 'POST',
        url: `${process.env.VUE_APP_API_URL}/api/token-auth`,
        data: {
          email: userInfo.email,
          password: userInfo.password,
        },
      }).then((data) => {
        commit('setLoginData', {
          email: userInfo.email,
          token: data.data.token
        });
        return data.data;
      });
    },
  },
  getters: {
  },
};

export default user;
