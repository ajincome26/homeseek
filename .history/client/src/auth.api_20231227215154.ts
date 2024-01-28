import { AuthResponse } from '~/types/auth.type'
import instance from '~/utils/instance'
import { path } from '~/constants/path'

const authApi = {
  registerAccount: (body: {
    name: string
    email: string
    phone_number: string
    password: string
    confirm_password: string
  }) => instance.post<AuthResponse>(`path.REGISTER`, body)
}

export default authApi
