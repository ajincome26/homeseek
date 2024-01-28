import { ObjectId } from 'mongodb'

interface PostType {
  _id?: ObjectId
  title: string
  description: string
  address: string
  category: string
  user_id: ObjectId
  price: string
  acreage: string
  target: string
  deposit: string
  created_at?: Date
  updated_at?: Date
}

export default class User {
  _id?: ObjectId
  title: string
  description: string
  address: string
  category: string
  user_id: ObjectId
  price: string
  acreage: string
  target: string
  deposit: string
  created_at?: Date
  updated_at?: Date

  constructor(user: PostType) {
    const date = new Date()
    this._id = user._id
    this.title = user.title
    this.description = user.description
    this.address = user.address
    this.category = user.category
    this.price = user.price
    this.acreage = user.acreage
    this.target = user.target
    this.deposit = user.deposit
    this.user_id = user.user_id
    this.created_at = user.created_at || date
    this.updated_at = user.updated_at || date
  }
}
