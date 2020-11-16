import {
  ADD_SCHEMA_MENU,
  SET_SCHEMA_MENU,
  SET_SCHEMA,
  SET_RESPONSE
} from './mutations-type'

export const mutations = {
  [ADD_SCHEMA_MENU] (state, schema) {
    state.schemasMenu.push(schema)
  },

  [SET_SCHEMA_MENU] (state, schemas) {
    state.schemasMenu = schemas
  },

  [SET_SCHEMA] (state, schema) {
    state.schema = schema
  },

  [SET_RESPONSE] (state, json) {
    state.response = json
  }
}
