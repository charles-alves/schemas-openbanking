import { SCHEMAS } from './getters-type'
import { localStorageUtils } from '../util/localStoregeUtils'

export const getters = {
  [SCHEMAS] (state) {
    const schema = state.schemasMenu || localStorageUtils.getItem('schemasMenu', [])

    const groupedSchema = schema.reduce((a, { group, name }) => {
      const values = a[group] || []
      values.push(name)
      a[group] = values
      return a
    }, {})

    return Object.entries(groupedSchema)
      .map(([group, schemas]) => {
        schemas.sort((a, b) => a.localeCompare(b))
        return { group, schemas, open: false }
      })
  }
}
