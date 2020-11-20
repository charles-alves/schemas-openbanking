export const localStorageUtils = {
  getItem (itemName, defaultValue = null) {
    const item = localStorage.getItem(itemName)
    return item !== null ? JSON.parse(item) : defaultValue
  },

  setItem (itemName, item) {
    const itemStr = JSON.stringify(item)
    localStorage.setItem(itemName, itemStr)
  }
}
