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

export const removeToken = () => {
  localStorage.removeItem('token')
}
export const setUserInfo = (data) => {
  localStorage.setItem('user', JSON.stringify(data))
}

export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const getUser = () => {
  return localStorage.getItem('user')
}
