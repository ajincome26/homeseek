export interface User {
  _id: string
  email: string
  name: string
  phone_number: string
  created_at?: Date
  updated_at?: Date
  verify?: 'Unverified' | 'Verified' | 'Banned'
  bio?: string
  location?: string
  website?: string
  username?: string
  avatar?: string
  cover_photo?: string
  account_balance?: string
}
