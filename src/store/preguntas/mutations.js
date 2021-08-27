import * as types from "./mutation-types";

const mutations = {
  [types.SET_PREGUNTAS](state, lista) {
    state.preguntas = lista;
  },
  [types.SET_PREGUNTA](state, pregunta) {
    state.preguntaSeleccionada = pregunta;
  },
};

export default mutations;
