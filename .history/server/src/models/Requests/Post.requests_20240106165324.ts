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
