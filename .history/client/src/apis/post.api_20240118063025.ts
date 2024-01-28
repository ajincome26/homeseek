import { path } from '~/constants/path'
import instance from '~/utils/instance'

const postApi = {
  uploadImages: (body: {
    name: string
    email: string
    phone_number: string
    password: string
    confirm_password: string
  }) => instance.post(`medias${path.UPLOAD_IMAGE}`, body)
}

export default postApi
