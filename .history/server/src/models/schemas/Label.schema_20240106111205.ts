import { ObjectId } from 'mongodb'

interface LabelType {
  _id?: ObjectId
  post_id: ObjectId
  code: string
  value: string
  created_at?: Date
}

export default class User {
  _id?: ObjectId
  post_id: ObjectId
  code: string
  value: string
  created_at?: Date

  constructor(label: LabelType) {
    const date = new Date()
    this.post_id = label.post_id
    this.code = label.code
    this.value = label.value
    this.created_at = label.created_at || date
  }
}
