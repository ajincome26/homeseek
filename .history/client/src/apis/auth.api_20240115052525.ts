import { AuthResponse } from '~/types/auth.type'
import instance from '~/utils/instance'
import { path } from '~/constants/path'
import { apiGetPublicProvinces } from '~/utils/utils'
import { Province } from '~/types/province.type'

const authApi = {
  register: (body: { name: string; email: string; phone_number: string; password: string; confirm_password: string }) =>
    instance.post<AuthResponse>(`users${path.REGISTER}`, body),
  login: (body: { email: string; password: string }) => instance.post<AuthResponse>(`users${path.LOGIN}`, body),
  logout: (body: { refresh_token: string }) => instance.post<AuthResponse>(`users${path.LOGOUT}`, body),
  resetPassword: (body: { forgot_password_token: string; password: string; confirm_password: string }) =>
    instance.post(`users${path.RESET_PASSWORD}`, body),

  getProvinces: () => apiGetPublicProvinces.get<Province[]>('/')
}

export default authApi
