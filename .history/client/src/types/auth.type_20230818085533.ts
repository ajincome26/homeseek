import { User } from './user.type'
import { ResponseSuccess } from './utils.type'

export type AuthResponse = ResponseSuccess<{
  access_token: string
  expires: string
  user: User
}>
