import {
  ADD_SCHEMA_MENU,
  SET_SCHEMA_MENU,
  SET_SCHEMA,
  SET_RESPONSE
} from './mutations-type'
import { localStorageUtils } from '../util/localStoregeUtils'

export const mutations = {
  [ADD_SCHEMA_MENU] (state, schema) {
    state.schemasMenu.push(schema)
  },

  [SET_SCHEMA_MENU] (state, schemas) {
    localStorageUtils.setItem('schemasMenu', schemas)
    state.schemasMenu = schemas
  },

  [SET_SCHEMA] (state, { name, data }) {
    state.schema[name] = data
  },

  [SET_RESPONSE] (state, json) {
    state.response = json
  }
}
