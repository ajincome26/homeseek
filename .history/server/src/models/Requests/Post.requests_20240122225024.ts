export interface CreatePostReqBody {
  title: string
  description: string
  address: string
  category: string
  user_id: string
  price: number
  acreage: number
  target: string
  deposit: number
  medias: string[]
}
export interface QueryReqBody {
  category?: string
  province?: string
  price_max?: number | string
  price_min?: number | string
  acreage_max?: number | string
  acreage_min?: number | string

  page?: number
  limit?: number
  order?: 'descending' | 'ascending'
  sort_by?: 'createdAt' | 'price' | 'acreage'
  name?: string
  exclude?: string
}
