import axios from 'axios'

import { LOAD_MENU, LOAD_SCHEMA } from './actions-type.js'
import { SET_SCHEMA_MENU, SET_SCHEMA } from './mutations-type.js'

export const actions = {
  async [LOAD_MENU] ({ commit }) {
    const response = await axios.get('api/schemas')
    commit(SET_SCHEMA_MENU, response.data)
  },

  async [LOAD_SCHEMA] ({ state, commit }, params) {
    if (state.schema === null || state.schema.name !== params.name) {
      const response = await axios.get(`api/schemas/${params.name}`)

      if (response.status === 200) {
        commit(SET_SCHEMA, response.data)
      }
    }

    const fields = params.fields ? params.fields.split('/') : []
    return fields.reduce((a, v) => { return a[v] }, state.schema.structure)
  }
}
