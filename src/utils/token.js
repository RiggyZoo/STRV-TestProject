export const getToken = () => {
  return localStorage.getItem('token')
}

export const setToken = (jwt) => {
  localStorage.setItem('token', jwt)
}

export const removeToken = () => {
  localStorage.removeItem('token')
}
