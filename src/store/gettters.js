import { SCHEMAS } from './getters-type'
import { localStorageUtils } from '../util/localStoregeUtils'

export const getters = {
  [SCHEMAS] (state) {
    const schema = state.schemasMenu || localStorageUtils.getItem('schemasMenu', [])
    return schema
      .map(s => s.name)
      .sort((a, b) => a.localeCompare(b))
  }
}
