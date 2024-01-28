import axios, { AxiosError, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { path } from '~/constants/path'
import { clearLocalStorage, getAccessToken, setAccessToken, setUserInfoToStorage } from './auth'
import { AuthResponse } from '~/types/auth.type'

let accessToken = getAccessToken()

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  function (config) {
    if (accessToken) {
      config.headers.Authorization = accessToken
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response) => {
    const { url } = response.config
    if (url === path.REGISTER || url === path.LOGIN) {
      accessToken = (response.data as AuthResponse).data.access_token // Lưu vào RAM
      setAccessToken(accessToken)
    } else if (url === path.LOGOUT) {
      ;(accessToken = ''), clearLocalStorage()
    }
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = error.response?.data
      const message = data?.message || error.message
      toast.error(message, { autoClose: 2000 })
    }
    if (error.response?.status === HttpStatusCode.Unauthorized) {
      clearLocalStorage()
    }
    return Promise.reject(error)
  }
)

export default instance
