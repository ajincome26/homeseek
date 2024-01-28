import { path } from '~/constants/path'
import instance from '~/utils/instance'

const postApi = {
  uploadImages: (files: FormData) =>
    instance.post(`medias/upload-image`, files, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
}

export default postApi
