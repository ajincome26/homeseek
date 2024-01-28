import { config } from 'dotenv'
import { ObjectId } from 'mongodb'
import { OverviewBonus, OverviewStatus } from '~/constants/enums'
import { CreatePostReqBody, QueryReqBody } from '~/models/Requests/Post.requests'
import Label from '~/models/schemas/Label.schema'
import Overview from '~/models/schemas/Overview.chema'
import Post from '~/models/schemas/Post.schema'
import { generateCode } from '~/utils/utils'
import databaseService from './database.services'

config()

class PostsService {
  async createPost(user_id: string, payload: CreatePostReqBody) {
    const { address } = payload
    const lenAddress = address.split(', ').length
    const result_1 = await databaseService.posts.insertOne(
      new Post({
        ...payload,
        price: Number(payload.price),
        acreage: Number(payload.acreage),
        deposit: Number(payload.deposit),
        user_id: new ObjectId(user_id)
      })
    )
    const result_2 = await databaseService.labels.insertOne(
      new Label({
        post_id: result_1.insertedId,
        code: generateCode(payload.address),
        value: `${payload.category} ${address.split(', ')[lenAddress - 2].trim()}`
      })
    )
    const result_3 = await databaseService.overviews.insertOne(
      new Overview({
        post_id: result_1.insertedId,
        area: `${payload.category} ${address.split(', ')[lenAddress - 1].trim()}`,
        bonus: OverviewBonus.NORMAL,
        status: OverviewStatus.NOT
      })
    )
    const post = await databaseService.posts.findOne({ _id: result_1.insertedId })
    const label = await databaseService.labels.findOne({ _id: result_2.insertedId })
    const plus = await databaseService.overviews.findOne({ _id: result_3.insertedId })
    return { ...post, label, plus }
  }
  async getAllPost(query: QueryReqBody) {
    const page = query.page || 1
    const limit = query.limit || 10
    const order = query.order || ''
    const sort_by = query.sort_by || ''
    const name = query.name || ''
    const exclude = query.exclude || ''
    const category = query.category || ''
    const province = query.province || ''
    const price_max = query.price_max || ''
    const price_min = query.price_min || ''
    const acreage_max = query.acreage_max || ''
    const acreage_min = query.acreage_min || ''

    let sortField = ''
    let sortOrder = ''
    if (order !== '') {
      if (order === 'descending') sortOrder = '-1'
      else sortOrder = '1'
    }
    if (sort_by !== '') {
      if (sort_by === 'createdAt') sortField = 'createdAt'
      else if (sort_by === 'price') sortField = 'price'
      else sortField = 'acreage'
    }
    // const finalQuery = order ?
    const posts = await databaseService.posts.find().sort().toArray()
    //
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const limitedPosts = posts.slice(startIndex, endIndex)
    return limitedPosts
  }
}

const postsService = new PostsService()
export default postsService
