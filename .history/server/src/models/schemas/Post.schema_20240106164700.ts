import { ObjectId } from 'mongodb'

interface PostType {
  _id?: ObjectId
  title: string
  description: string
  address: string
  category: string
  price: number
  acreage: number
  target: string
  deposit: number
  medias: string[]
  created_at?: Date
  updated_at?: Date
}

export default class Post {
  _id?: ObjectId
  title: string
  description: string
  address: string
  category: string
  price: number
  acreage: number
  target: string
  deposit: number
  medias: string[]
  created_at?: Date
  updated_at?: Date

  constructor(post: PostType) {
    const date = new Date()
    this._id = post._id
    this.title = post.title
    this.description = post.description
    this.address = post.address
    this.category = post.category
    this.price = post.price
    this.acreage = post.acreage
    this.target = post.target
    this.deposit = post.deposit
    this.medias = post.medias
    this.created_at = post.created_at || date
    this.updated_at = post.updated_at || date
  }
}
