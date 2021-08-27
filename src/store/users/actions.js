import * as types from "./mutation-types";

import apiUsers from "../../api/users.js";

export const toLogin = ({ commit }, usuario) => {
  commit(types.LOGIN_SUCCESS, usuario);
};

export const retrieveUser = ({ commit }, usuario) => {
  apiUsers.retrieveUser().then((response) => {
    console.log("recuperando informacion de ususrio");
    console.log(response.data);
    commit(types.SET_USER, response.data);
  });
};
