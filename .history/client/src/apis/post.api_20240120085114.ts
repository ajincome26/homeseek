import { path } from '~/constants/path'
import instance from '~/utils/instance'

const postApi = {
  uploadImages: (files: FormData) =>
    instance.post(`medias${path.UPLOAD_IMAGE}`, files, {
      headers: {
        'Content-Type': 'multipart/form-data' // Bắt buộc, research mãi mới fix được =))
      }
    })
}

export default postApi
