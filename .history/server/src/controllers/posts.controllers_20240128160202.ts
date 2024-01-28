import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { POSTS_MESSAGES } from '~/constants/messages'
import { CreatePostReqBody, QueryReqBody } from '~/models/Requests/Post.requests'
import { TokenPayload } from '~/models/Requests/User.requests'
import postsService from '~/services/posts.services'

export const postController = async (
  req: Request<ParamsDictionary, any, CreatePostReqBody>,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.decoded_authorization as TokenPayload
  const result = await postsService.createPost(user_id, req.body)
  return res.json({
    message: POSTS_MESSAGES.CREATE_POST_SUCCESS,
    result
  })
}
export const getPostController = async (req: Request, res: Response, next: NextFunction) => {
  const query = req.query as QueryReqBody
  console.log('getAllPostController ~ query:', query)
  const posts = await postsService.getPosts(query)
  return res.json({
    message: POSTS_MESSAGES.GET_POSTS_SUCCESS,
    result: posts
  })
}
