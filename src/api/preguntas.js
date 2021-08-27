import axios from "axios";

const apiPreguntas = {
  listaPreguntas: function() {
    return axios.get(
      "https://vue-js-a0348-default-rtdb.firebaseio.com/preguntas.json"
    );
  },
};

export default apiPreguntas;
