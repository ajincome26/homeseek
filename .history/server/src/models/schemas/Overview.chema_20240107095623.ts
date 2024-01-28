import { ObjectId } from 'mongodb'
import { OverviewBonus, OverviewStatus } from '~/constants/enums'

interface OverviewType {
  _id?: ObjectId
  post_id: ObjectId
  area: string
  bonus: OverviewBonus
  status: OverviewStatus
  created_at?: Date
}

export default class Overview {
  _id?: ObjectId
  post_id: ObjectId
  area: string
  bonus: OverviewBonus
  status: OverviewStatus
  created_at?: Date

  constructor(overview: OverviewType) {
    const date = new Date()
    this.post_id = overview.post_id
    this.area = overview.area
    this.bonus = overview.bonus
    this.status = overview.status
    this.created_at = overview.created_at || date
  }
}
