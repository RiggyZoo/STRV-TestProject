import axios from 'axios'
import {
  getRefreshToken,
  getToken,
  removeToken,
  setToken,
} from '../utils/userData'
const baseUrl = process.env.REACT_APP_ENDPOINT

axios.interceptors.request.use(
  (config) => {
    config.headers['apikey'] = process.env.REACT_APP_KEY
    const accessToken = getToken()
    if (accessToken) {
      config.headers.Authorization = accessToken
    }
    return config
  },
  (errors) => {
    Promise.reject(errors).catch(function (error) {
      console.log(error)
    })
  },
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    const originalRequest = error.config
    let refreshToken = getRefreshToken()
    if (error.response.status === 403) {
      removeToken()
    }
    if (
      refreshToken &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      return axios
        .post(`${baseUrl}/auth/native`, { refreshToken: refreshToken })
        .then((res) => {
          if (res.status === 200) {
            setToken(res.headers.authorization)
            return axios(originalRequest)
          }
        })
    }
    return Promise.reject(error)
  },
)

const api = {
  signup: (body) => {
    return axios.post(`${baseUrl}/auth/native`, body)
  },
  login: (body) => {
    return axios.post(`${baseUrl}/auth/native`, body)
  },
  refreshToken: (body) => {
    return axios.post(`${baseUrl}/auth/refresh_token`, body)
  },
  getAllEvents: () => {
    return axios.get(`${baseUrl}/events`)
  },
  getOneEvent: (id) => {
    return axios.get(`${baseUrl}/events/${id}`)
  },
  deleteEvent: (id) => {
    return axios.delete(`${baseUrl}/events/${id}`)
  },
  attendAnEvent: (id) => {
    return axios.post(`${baseUrl}/events/${id}/attendees/me`)
  },
  unattendAnEvent: (id) => {
    return axios.delete(`${baseUrl}/events/${id}/attendees/me`)
  },
  creatAnEvent: (body) => {
    return axios.post(`${baseUrl}/events`, body)
  },
  updateAnEvent: (id, body) => {
    return axios.patch(`${baseUrl}/events/${id}`, body)
  },
}
export default api
