import { ResponseSuccess } from './utils.type'

export type AuthResponse = ResponseSuccess<{
  access_token: string
  refresh_token: string
}>
