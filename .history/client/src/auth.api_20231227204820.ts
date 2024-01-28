import { AuthResponse } from '~/types/auth.type'
import instance from '~/utils/instance'
import { path } from '~/constants/path'

const authApi = {
  registerAccount: (body: { name: string; email: string; phone_number: string; password: string; cpassword: string }) =>
    instance.post<AuthResponse>(`users${path.REGISTER}`, body)
}

export default authApi
