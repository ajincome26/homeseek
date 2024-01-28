import { FormPost } from '~/pages/CreatePostPage/CreatePost'

export interface Post extends FormPost {
  medias: string[]
}

export interface PostListParams {
  category?: string
  province?: string
  price_max?: number | string // DÙNG CHO ĐOẠN CHỌN VÙNG GIÁ
  price_min?: number | string
  acreage_max?: number | string // DÙNG CHO ĐOẠN CHỌN VÙNG DIỆN TÍCH
  acreage_min?: number | string
  page?: number | string
  limit?: number | string
  order?: 'descending' | 'ascending'
  sort_by?: 'createdAt' | 'price' | 'acreage'
  exclude?: string // loại trừ post nào đó
  name?: string
}
