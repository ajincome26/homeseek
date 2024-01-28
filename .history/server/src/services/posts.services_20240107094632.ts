import { config } from 'dotenv'
import { ObjectId } from 'mongodb'
import { CreatePostReqBody } from '~/models/Requests/Post.requests'
import Label from '~/models/schemas/Label.schema'
import Overview from '~/models/schemas/Overview.chema'
import Post from '~/models/schemas/Post.schema'
import { generateCode } from '~/utils/utils'
import databaseService from './database.services'

config()

class PostsService {
  async createPost(user_id: string, payload: CreatePostReqBody) {
    const { address } = payload
    const result_1 = await databaseService.posts.insertOne(new Post({ ...payload, user_id: new ObjectId(user_id) }))
    const result_2 = await databaseService.labels.insertOne(
      new Label({
        post_id: result_1.insertedId,
        code: generateCode(payload.address),
        value: `${payload.category} ${address.split('-')[address.split('-').length - 2].trim()}`
      })
    )
    const result_3 = await databaseService.overviews.insertOne(new Overview({ post_id: result_1.insertedId }))
    const post = await databaseService.posts.findOne({ _id: result_1.insertedId })
    const label = await databaseService.labels.findOne({ _id: result_2.insertedId })
    return { ...post, label }
  }
}

const postsService = new PostsService()
export default postsService
