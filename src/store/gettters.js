import { SCHEMAS } from './getters-type'

export const getters = {
  [SCHEMAS] (state) {
    return state.schemasMenu
      .map(s => s.name)
      .sort((a, b) => a.localeCompare(b))
  }
}
