export const getObject = key => JSON.parse(localStorage.getItem(key))

export const setObject = (key, value) => localStorage.setItem(key, JSON.stringify(value))
