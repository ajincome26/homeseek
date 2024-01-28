export interface CreatePostReqBody {
  name: string
  email: string
  phone_number: string
  password: string
  confirm_password: string
  avatar?: string
}
