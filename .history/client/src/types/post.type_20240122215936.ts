import { FormPost } from '~/pages/CreatePostPage/CreatePost'

export interface Post extends FormPost {
  medias: string[]
}

export interface PostListParams {
  category?: string
  provinceId?: string
  page?: number | string
  limit?: number | string
  order?: 'descending' | 'ascending'
  sort_by?: 'createdAt' | 'price' | 'acreage'
  exclude?: string // loại trừ post nào đó
  price_max?: number | string // DÙNG CHO ĐOẠN CHỌN VÙNG GIÁ
  price_min?: number | string
  acreage_max?: number | string
  acreage_min?: number | string
  name?: string
}
