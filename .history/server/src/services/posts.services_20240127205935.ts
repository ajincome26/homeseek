import { config } from 'dotenv'
import { ObjectId, SortDirection, WithId } from 'mongodb'
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
  async getPosts(query: QueryReqBody) {
    const page = query.page || 1
    const limit = query.limit || 10
    const order = query.order || ''
    const sort_by = query.sort_by || ''
    const name = query.name || ''
    const exclude = query.exclude || ''
    const category = query.category || ''
    const province = query.province || ''
    const price_max = query.price_max || 0
    const price_min = query.price_min || 0
    const acreage_max = query.acreage_max || 0
    const acreage_min = query.acreage_min || 0

    // SORT
    type Sort = [string, SortDirection]
    let sortField: 'default' | 'created_at' | 'price' | 'acreage' = 'default'
    let sortOrder: -1 | 1 = -1
    if (order === 'descending') sortOrder = -1
    else if (order === 'ascending') sortOrder = 1
    if (sort_by == 'createdAt') sortField = 'created_at'
    else if (sort_by === 'price') sortField = 'price'
    else if (sort_by === 'acreage') sortField = 'acreage'

    const sortArray: Sort[] = [[sortField, sortOrder]]

    // CONDITION
    let conditions: Record<string, any> = {}
    if (category !== '') conditions.category = category
    if (province !== '') conditions.address = { $regex: new RegExp(province, 'i') }
    if (price_min == 0 && price_max == 0) {
      conditions = {}
    } else {
      conditions.price = {
        $gte: Number(price_min),
        $lte: Number(price_max)
      }
    }
    if (acreage_min == 0 && acreage_max == 0) {
      conditions = {}
    } else {
      conditions.acreage = {
        $gte: Number(acreage_min),
        $lte: Number(acreage_max)
      }
    }

    let posts: WithId<Post>[] = []
    let postsVip: WithId<Post>[] = []

    if (sortField === 'default') {
      posts = await databaseService.posts.find(conditions).sort(sortArray).toArray()
      const postIds = posts.map((post) => post._id)
      const overviewInfo = await databaseService.overviews.find({ post_id: { $in: postIds } }).toArray()
      overviewInfo.filter((item) => item.bonus === 1)
    }

    // LIMITED POST
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const limitedPosts = posts.slice(startIndex, endIndex)

    // USER INFO CREATED WITH POST
    const postsWithUserInfo = []
    for (const post of limitedPosts) {
      // Lấy thông tin người tạo post dựa trên user_id
      const userInfo = await databaseService.users.find(post.user_id).toArray()

      // Kết hợp thông tin người tạo post vào mỗi post
      const postWithUserInfo = { post, user: userInfo }

      // Thêm post đã được kết hợp vào mảng mới
      postsWithUserInfo.push(postWithUserInfo)
    }
    return postsWithUserInfo
  }
}

const postsService = new PostsService()
export default postsService
