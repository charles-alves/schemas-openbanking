import { SCHEMAS } from './getters-type'

export const getters = {
  [SCHEMAS] (state) {
    return state.schemas
      .map(s => s.name)
      .sort((a, b) => a.localeCompare(b))
  }
}
