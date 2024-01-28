import { config } from 'dotenv'
import { ObjectId } from 'mongodb'
import { CreatePostReqBody } from '~/models/Requests/Post.requests'
import Post from '~/models/schemas/Post.schema'
import databaseService from './database.services'

config()

class PostsService {
  async createPost(payload: CreatePostReqBody) {
    await databaseService.posts.insertOne(new Post({ ...payload, user_id: new ObjectId(payload.user_id) }))
    const [access_token, refresh_token] = await this.signAccessTokenAndRefreshToken({
      user_id: user_id.toString(),
      verify: UserVerifyStatus.Unverified
    })
    const { iat, exp } = await this.decodeRefreshToken(refresh_token)
    await databaseService.refreshTokens.insertOne(
      new RefreshToken({ user_id: new ObjectId(user_id), token: refresh_token, iat, exp })
    )
    const user: ResponseMini = omit(payload, ['password', 'confirm_password'])
    return { access_token, refresh_token, user: { ...user, account_balance: 0 } }
  }
}

const postsService = new PostsService()
export default postsService
