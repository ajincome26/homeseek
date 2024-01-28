import { ObjectId } from 'mongodb'
import { OverviewStatus } from '~/constants/enums'

interface OverviewType {
  _id?: ObjectId
  post_id: ObjectId
  code: string
  area: string
  bonus: string
  status: OverviewStatus
  created_at?: Date
}

export default class Overview {
  _id?: ObjectId
  post_id: ObjectId
  code: string
  area: string
  bonus: string
  status: OverviewStatus
  created_at?: Date

  constructor(label: OverviewType) {
    const date = new Date()
    this.post_id = label.post_id
    this.code = label.code
    this.area = label.area
    this.bonus = label.bonus
    this.status = label.status
    this.created_at = label.created_at || date
  }
}
