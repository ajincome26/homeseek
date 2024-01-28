import { path } from '~/constants/path'
import instance from '~/utils/instance'

const postApi = {
  uploadImages: (files: FormData) => instance.post(`medias/upload-image`, files)
}

export default postApi
