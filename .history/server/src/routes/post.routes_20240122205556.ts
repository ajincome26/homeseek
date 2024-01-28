import { Router } from 'express'
import { getAllPostController, postController } from '~/controllers/posts.controllers'
import { createPostValidator } from '~/middlewares/posts.middlewares'
import { accessTokenValidator, verifiedUserValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const postsRouter = Router()

/**
 * Description. Create a new post
 * Path: /
 * Method: POST
 * Body: { title: string, description: string, address: string, category: string, user_id: string, price: number,
 * acreage: number, target: string, deposit: number, medias: string[] }
 */
postsRouter.post(
  '/',
  accessTokenValidator,
  verifiedUserValidator,
  createPostValidator,
  wrapRequestHandler(postController)
)

/**
 * Description. Get all post
 * Path: /
 * Method: GET
 */
postsRouter.get('/', wrapRequestHandler(getAllPostController))

export default postsRouter
