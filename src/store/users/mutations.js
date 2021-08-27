import * as types from "./mutation-types";

const mutations = {
  [types.LOGIN_SUCCESS](state, usuario) {
    state.userData = usuario;
  },
  [types.SET_USER](state, usuario) {
    console.log("usuario setado");
  },
};

export default mutations;
