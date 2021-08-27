// importamos mutaciones y acciones
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

const moduleUsers = {
  state,
  mutations,
  actions,
  getters,
}

export default moduleUsers