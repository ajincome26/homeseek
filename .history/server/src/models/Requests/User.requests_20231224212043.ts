import { JwtPayload } from 'jsonwebtoken'
import { TokenType, UserVerifyStatus } from '~/constants/enums'
import { ParamsDictionary } from 'express-serve-static-core'

export interface LoginReqBody {
  email: string
  password: string
}
export interface RegisterReqBody {
  name: string
  email: string
  phone_number: string
  password: string
  confirm_password: string
  date_of_birth: string
}
export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
  verify: UserVerifyStatus
  iat: number
  exp: number
}
export interface LogoutReqBody {
  refresh_token: string
}
export interface RefreshTokenReqBody {
  refresh_token: string
}
export interface VerifyEmailReqBody {
  email_verify_token: string
}
export interface ForgotPasswordReqBody {
  email: string
}
export interface VerifyForgotPasswordReqBody {
  forgot_password_token: string
}
export interface ResetPasswordReqBody {
  password: string
  confirm_password: string
  forgot_password_token: string
}
// Dùng PATCH nên dùng '?:'
export interface UpdateMeReqBody {
  name?: string
  date_of_birth?: string // khi gửi lên kiểu ISO String
  bio?: string
  location?: string
  website?: string
  username?: string
  avatar?: string
  cover_photo?: string
}
export interface GetProfileReqParams extends ParamsDictionary {
  username: string
}
export interface FollowReqBody {
  followed_user_id: string
}
export interface UnfollowReqParams extends ParamsDictionary {
  followed_user_id: string
}
export interface ChangePasswordReqBody {
  old_password: string
  password: string
  confirm_password: string
}
