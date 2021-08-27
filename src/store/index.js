import { createStore } from 'vuex'
//
import modulePregunta from './preguntas'
import moduleUsers from './users'

export default createStore({
  modules: {
    modulePregunta,
    moduleUsers
  }
})