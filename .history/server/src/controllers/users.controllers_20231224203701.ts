import { NextFunction, Request, Response } from 'express'
import { RegisterReqBody } from '~/models/Requests/User.requests'
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
