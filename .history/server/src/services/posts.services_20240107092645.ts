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
    const result = await databaseService.posts.insertOne(new Post({ ...payload, user_id: new ObjectId(user_id) }))
    const label = await databaseService.labels.insertOne(
      new Label({ post_id: result.insertedId, code: 'xxx', value: address.split('-')[address.split('-').length - 2] })
    )
    const post = await databaseService.posts.findOne({ _id: result.insertedId })
    return post
  }
}

const postsService = new PostsService()
export default postsService
