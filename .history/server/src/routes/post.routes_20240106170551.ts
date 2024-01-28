import { Router } from 'express'
import { postController } from '~/controllers/posts.controllers'
import { createPostValidator } from '~/middlewares/posts.middlewares'
import { accessTokenValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const postsRouter = Router()

/**
 * Description. Create a new post
 * Path: /
 * Method: POST
 * Body: { title: string, description: string, address: string, category: string, user_id: string, price: number,
 * acreage: number, target: string, deposit: number, medias: string[] }
 */
postsRouter.post('/', accessTokenValidator, createPostValidator, wrapRequestHandler(postController))

export default postsRouter
