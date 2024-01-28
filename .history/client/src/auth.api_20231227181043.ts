import { AuthResponse } from '~/types/auth.type'
import instance from '~/utils/instance'
import { path } from '~/constants/path'

const authApi = {
  registerAccount: (body: { email: string; password: string }) => instance.post<AuthResponse>(path.REGISTER, body),
  loginAccount: (body: { email: string; password: string }) => instance.post<AuthResponse>(path.LOGIN, body),
  logoutAccount: () => instance.post(path.LOGOUT)
}

export default authApi
