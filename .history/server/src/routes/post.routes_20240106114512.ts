import { Router } from 'express'

const postsRouter = Router()

/**
 * Description. Register a new user
 * Path: /register
 * Method: POST
 * Body: { name: string, email: string, password: string, confirm_password: string, date_of_birth: ISO8601 }
 */
postsRouter.post('/register')

export default postsRouter
