import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { CreatePostReqBody } from '~/models/Requests/Post.requests'
import { TokenPayload } from '~/models/Requests/User.requests'
import postsService from '~/services/posts.services'

export const postController = async (
  req: Request<ParamsDictionary, any, CreatePostReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.decoded_authorization as TokenPayload
  const result = await postsService.createPost(user_id, req.body)
  // return res.json({
  //   message: USERS_MESSAGES.REGISTER_SUCCESS,
  //   result
  // })
}
