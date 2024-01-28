import { User } from './user.type'
import { ResponseSuccess } from './utils.type'

export type AuthResponse = ResponseSuccess<{
  access_token: string
  refresh_token: string
  user: User
}>
