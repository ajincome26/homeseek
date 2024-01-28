import { NextFunction, Request, Response } from 'express'
import { RefreshTokenReqBody, RegisterReqBody, TokenPayload } from '~/models/Requests/User.requests'
import { ParamsDictionary } from 'express-serve-static-core'
import usersService from '~/services/users.services'
import { USERS_MESSAGES } from '~/constants/messages'

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  const result = await usersService.register(req.body)
  return res.json({
    message: USERS_MESSAGES.REGISTER_SUCCESS,
    result
  })
}
export const refreshTokenController = async (
  req: Request<ParamsDictionary, any, RefreshTokenReqBody>,
  res: Response
) => {
  const { refresh_token } = req.body
  const { user_id, verify, exp } = req.decoded_refresh_token as TokenPayload
  const result = await usersService.refreshToken({ user_id, refresh_token, verify, exp })
  return res.json({
    message: USERS_MESSAGES.REFRESH_TOKEN_SUCCESS,
    result
  })
}
