import { path } from '~/constants/path'
import instance from '~/utils/instance'

const postApi = {
  uploadImages: (files: FormData) => instance.post(`medias${path.UPLOAD_IMAGE}`, files)
}

export default postApi
