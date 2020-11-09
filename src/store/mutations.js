import {
  ADD_SCHEMA_MENU,
  SET_SCHEMA_MENU
} from './mutations-type'

export const mutations = {
  [ADD_SCHEMA_MENU] (state, schema) {
    state.schemas.push(schema)
  },

  [SET_SCHEMA_MENU] (state, schemas) {
    state.schemas = schemas
  }
}
