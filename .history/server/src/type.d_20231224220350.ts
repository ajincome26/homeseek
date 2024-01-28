// defined các global type cho dự án.
// mở file tsconfig.json lên sẽ thấy dòng add file này vào để cho typescript nó nhận diện.
import { Request } from 'express'
import User from '~/models/schemas/User.schema'
import { TokenPayload } from './models/Requests/User.requests'
declare module 'express' {
  interface Request {
    user?: User
    decoded_authorization?: TokenPayload
    decoded_refresh_token?: TokenPayload
    decoded_email_verify_token?: TokenPayload
    decoded_forgot_password_token?: TokenPayload
  }
}
