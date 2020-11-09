import axios from 'axios'

import { LOAD_MENU } from './actions-type.js'
import { SET_SCHEMA_MENU } from './mutations-type.js'

export const actions = {
  async [LOAD_MENU] ({ commit }) {
    const response = await axios.get('http://localhost:3001/api/schemas')
    commit(SET_SCHEMA_MENU, response.data)
  }
}
