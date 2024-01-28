import { User } from '~/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const getAccessToken = () => localStorage.getItem('access_token') || ''
export const setAccessToken = (accessToken: string) => localStorage.setItem('access_token', accessToken)
export const getUserInfoFromStorage = () => {
  const info = localStorage.getItem('userInfo')
  return info ? JSON.parse(info) : null
}
export const setUserInfoToStorage = (userInfo: User) => localStorage.setItem('userInfo', JSON.stringify(userInfo))

export const clearLocalStorage = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('userInfo')
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}