import axios, { AxiosError, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { path } from '~/constants/path'
import { clearLocalStorage, getAccessToken, getUserInfoFromStorage, setAccessToken, setUserInfoToStorage } from './auth'
import { AuthResponse } from '~/types/auth.type'

let accessToken = getAccessToken()
let userInfo = getUserInfoFromStorage()

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  function (config) {
    if (accessToken) {
      config.headers.Authorization = accessToken // api nào cần đến access_token thì gán nó vô Authorization
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
    if (url === `users${path.REGISTER}` || url === `users${path.LOGIN}`) {
      accessToken = (response.data as AuthResponse).result.access_token
      userInfo = (response.data as AuthResponse).result.user
      setAccessToken(accessToken) // Lưu vào RAM
      setUserInfoToStorage(userInfo)
    } else if (url === path.LOGOUT) {
      ;(accessToken = ''), (userInfo = null), clearLocalStorage()
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
