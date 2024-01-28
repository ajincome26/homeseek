import { FormPost } from '~/pages/CreatePostPage/CreatePost'
import { User } from './user.type'

export interface Post extends FormPost {
  _id: string
  medias: string[]
  isVip: boolean
}

export interface PostWithUser {
  post: Post
  user: User[]
}

export interface PostListParams {
  category?: string
  province?: string
  price_max?: number // DÙNG CHO ĐOẠN CHỌN VÙNG GIÁ
  price_min?: number
  acreage_max?: number // DÙNG CHO ĐOẠN CHỌN VÙNG DIỆN TÍCH
  acreage_min?: number

  page?: number | string
  limit?: number | string
  order?: 'descending' | 'ascending'
  sort_by?: 'default' | 'createdAt' | 'price' | 'acreage'
  name?: string
  exclude?: string // loại trừ post nào đó
}
