import { FormPost } from '~/pages/CreatePostPage/CreatePost'

export interface Post extends FormPost {
  medias: string[]
}

export interface PostListParams {
  page?: number | string
  limit?: number | string
  order?: 'descending' | 'ascending'
  sort_by?: 'createdAt' | 'price' | 'acreage'
  category?: string
  exclude?: string // loại trừ post nào đó
  rating_filter?: number | string
  price_max?: number | string
  price_min?: number | string
  name?: string
}
