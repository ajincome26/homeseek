import { config } from 'dotenv'
import { ObjectId } from 'mongodb'
import { CreatePostReqBody } from '~/models/Requests/Post.requests'
import Post from '~/models/schemas/Post.schema'
import databaseService from './database.services'

config()

class PostsService {
  async createPost(user_id: string, payload: CreatePostReqBody) {
    const result = await databaseService.posts.insertOne(new Post({ ...payload, user_id }))
    const post = await databaseService.posts.findOne({ _id: result.insertedId })
    return post
  }
}

const postsService = new PostsService()
export default postsService
