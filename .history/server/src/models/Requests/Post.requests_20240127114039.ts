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
  price_max?: number
  price_min?: number
  acreage_max?: number
  acreage_min?: number

  page?: number
  limit?: number
  order?: 'descending' | 'ascending'
  sort_by?: 'createdAt' | 'price' | 'acreage'
  name?: string
  exclude?: string
}
