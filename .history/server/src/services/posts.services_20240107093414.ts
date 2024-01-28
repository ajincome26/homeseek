import { config } from 'dotenv'
import { ObjectId } from 'mongodb'
import { CreatePostReqBody } from '~/models/Requests/Post.requests'
import Label from '~/models/schemas/Label.schema'
import Post from '~/models/schemas/Post.schema'
import databaseService from './database.services'

config()

class PostsService {
  async createPost(user_id: string, payload: CreatePostReqBody) {
    const { address } = payload
    const result_1 = await databaseService.posts.insertOne(new Post({ ...payload, user_id: new ObjectId(user_id) }))
    const result_2 = await databaseService.labels.insertOne(
      new Label({
        post_id: result_1.insertedId,
        code: 'xxx',
        value: `${payload.category} ${address.split('-')[address.split('-').length - 2].trim()}`
      })
    )
    const post = await databaseService.posts.findOne({ _id: result_1.insertedId })
    const label = await databaseService.labels.findOne({ _id: result_2.insertedId })
    return { ...post, label }
  }
}

const postsService = new PostsService()
export default postsService
