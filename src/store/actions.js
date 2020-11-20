import axios from 'axios'

import { LOAD_MENU, LOAD_SCHEMA } from './actions-type.js'
import { SET_SCHEMA_MENU, SET_SCHEMA, SET_RESPONSE } from './mutations-type.js'

export const actions = {
  async [LOAD_MENU] ({ commit }) {
    const response = await axios.get('api/schemas')
    commit(SET_SCHEMA_MENU, response.data)
  },

  async [LOAD_SCHEMA] ({ state, commit }, params) {
    if (state.schema[params.name] === undefined) {
      const schemaPromise = axios.get(`api/schemas/${params.name}`)
      const jsonPromise = axios.get(`api/schemas/${params.name}/json`)

      const [schemaResponse, jsonResponse] = await Promise.all([schemaPromise, jsonPromise])

      if (schemaResponse.status === 200) {
        commit(SET_SCHEMA, { name: params.name, data: schemaResponse.data })
      }

      if (jsonResponse.status === 200) {
        commit(SET_RESPONSE, jsonResponse.data)
      }
    }

    const fields = params.fields ? params.fields.split('/') : []
    return fields.reduce((a, v) => { return a[v] }, state.schema[params.name].structure)
  }
}
