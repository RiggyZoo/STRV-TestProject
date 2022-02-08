export const getToken = () => {
  return localStorage.getItem('token')
}

export const setToken = (jwt) => {
  localStorage.setItem('token', jwt)
}

export const removeAll = () => {
  localStorage.clear()
}
export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken')
}
export const setRefreshToken = (jwt) => {
  localStorage.setItem('refreshToken', jwt)
}
